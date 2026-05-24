---
title: "Building ContractsDB Agent: the 80% that wasn't the LLM"
date: '2026-05-23'
excerpt: 'The model was the easy part. SharePoint taxonomy fields, multilingual evaluation, and conversational UX is where the real engineering lived.'
tags:
  - LLM
  - Copilot Studio
  - Power Automate
  - enterprise AI
  - evaluation
hero: '/images/blog/contractsdb-hero.webp'
authors:
  - Roshan Shrestha
---

<img src="/images/blog/contractsdb-hero.webp" alt="ContractsDB Agent" style="max-width: 280px; width: 100%; margin: 0 auto; display: block;" />

I recently shipped [ContractsDB Agent](/projects/contractsdb) at Materialise, a Microsoft Teams chatbot for end-to-end contract management. Upload a contract and it walks you through OCR, multilingual extraction, classification, human review, and deposit into SharePoint. Ask it a question and it searches the contract database, flags expiring agreements, or answers free-form questions about a specific contract. Thousands of active contracts, hundreds new each year, three languages, two contract types, twelve self-service query topics, all inside one Teams conversation.

If you read the [project page](/projects/contractsdb), you saw the architecture diagram and the polished story. This post is the messier version: four things I learned that did not make it into the diagram.

## The model is not the hard part

The headline "AI-powered contract management" makes it sound like the interesting work was prompting GPT-5. It was not. Getting GPT-5 to pull sixteen fields out of a Dutch commercial contract took maybe two weeks of iteration. Getting SharePoint to accept those sixteen fields, into the right Document Set, inside the right party folder, with taxonomy values formatted exactly the way the managed metadata column expected, took at least two months.

SharePoint Document Sets are not first-class citizens of the Power Automate connector. To create a Document Set inside a dynamically generated folder, with values for a taxonomy field, you have to drop down to the SharePoint REST API and call:

```
/_api/web/lists/getbytitle('<list>')/items(<id>)/validateUpdateListItem
```

with a payload that wraps taxonomy values in a pipe-delimited GUID format. Get one character wrong in the GUID and the call silently sets the field to null. There are edge cases inside edge cases: forward slashes in company names break folder paths, accented characters need URL encoding in some calls but not others, and Power Automate flow expressions double-escape strings in a way that forces you to triple-escape them in the body. None of this is in a tutorial. You learn it by failing and reading verbose error logs.

## One upload, three documents, three paths

The agent has a single "upload a document" entry point. But three completely different things can come through it: a new NDA, a new commercial contract, or a related document (an annex, addendum, amendment, or prolongation to a contract that already exists). Each needs a different downstream workflow.

The first design instinct is to ask the user "what are you uploading?" That is a bad idea. Users do not always know. Annexes are easy to misclassify, and asking the question before extraction adds a friction point that defeats the purpose of having a chatbot in the first place.

So the classifier runs first. The same GPT-5 call that will eventually extract fields is asked to do a smaller job first: look at the document and decide whether it is an NDA, a commercial contract, or a related document. If related, it also extracts the parent agreement name from the document itself.

Then the routing diverges. New contracts continue through the full extraction and metadata collection flow. Related documents skip that entirely. Instead, the flow searches SharePoint for the parent contract by name, and if it finds one, deposits the related document directly into the parent's Document Set. If it does not find the parent, the agent stops and tells the user to upload the original agreement first.

Three completely different downstream paths, one upload topic, the user never has to choose. From an engineering perspective, the LLM is doing the classification, but the real work is the routing logic that turns one classification into one of three workflows. The prompt is maybe twenty lines. The flow that consumes the prompt's output is hundreds. This is the pattern I would not have predicted before building it: most LLM calls in production are not the destination, they are a fork in a deterministic flow.

## Multilingual extraction needs evaluation, not vibes

Commercial contracts come in English, Dutch, and French. The first version of the extraction prompt worked great on English, okay on Dutch, and made up plausible nonsense in French. The problem was not the model. The problem was that I had no way to know which language was failing on which fields, so every prompt change was a vibes-based shot in the dark.

I built an evaluation pipeline. Fifty annotated contracts from past business, sixteen extracted fields per contract, a Python script that runs the current prompt against the entire set and scores each field for exact match, fuzzy match, or miss. The output is a heatmap by language and by field. The prompt iteration loop changed from "did this feel better?" to "expiration_date accuracy went from 0.71 to 0.92 in French, but party_address dropped from 0.95 to 0.88 in Dutch, so the change is a net negative."

The eval set caught regressions I would have otherwise shipped. It also flagged genuinely hard fields where the contract itself was ambiguous, which became a useful signal for what to confirm with the user during the adaptive card review step. If you are building any extraction system, build the eval set before you tune the prompt. Even fifty examples is enough to stop you from guessing.

## Human in the loop is a feature, not a fallback

A common framing I read online is that human review is a backup plan for when the AI is not confident enough. That is not how the legal team thinks about it.

For them, the value of the agent is not that it gets every field right. It is that it gets most fields close, surfaces them in an adaptive card with inline editing, and lets them confirm or correct in seconds instead of typing every field from scratch. They trust the system because they have the final say, not despite needing to review it.

This shifts the engineering target. Instead of optimising for "extraction accuracy as close to 100% as possible," you optimise for "extracted fields are easy to verify and easier to fix." That means the adaptive card UX matters as much as the extraction prompt. Date format validation with friendly retry messages, required fields gated before deposit, free-form Q&A about the source PDF while reviewing. Small details that change whether the system feels respectful of the user's time.

## Closing

The architecture diagram on the [project page](/projects/contractsdb) shows seven boxes and four arrows. About one box and one arrow were truly LLM work. The other six were plumbing, routing, evaluation, and UX. That ratio surprised me when I started, but it is probably the realistic ratio for most enterprise AI projects right now. The same pattern repeated across the twelve self-service query topics that sit on top of the contract database: each "ask the chatbot" feature is mostly a Power Automate flow, with one or two LLM calls inside it. The models are good enough. The integration is what you build.
