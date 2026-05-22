import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContractsDBDiagram from './ContractsDBDiagram.jsx';

const techStack = [
  ['Conversational UI', 'Microsoft Copilot Studio, deployed to Teams'],
  ['Orchestration', 'Power Automate (cloud flows, child flows, agent flows)'],
  ['AI / LLM', 'GPT-4o via AI Builder, Azure Document Intelligence'],
  ['Storage', 'SharePoint Online (Document Sets, Document Libraries)'],
  ['Logging & Tracking', 'Dataverse (ContractPipelineLog)'],
  ['Review Interface', 'Teams Adaptive Cards (in-conversation)'],
  [
    'Evaluation',
    'Python (field-level accuracy scoring against annotated ground truth)',
  ],
];

const tags = [
  'Copilot Studio',
  'Power Automate',
  'GPT-4o',
  'SharePoint',
  'Dataverse',
  'Adaptive Cards',
];

const Section = ({ id, title, children }) => (
  <section id={id} className='mb-12'>
    <h2 className='text-xl font-semibold text-slate-900 dark:text-white mb-4 tracking-tight'>
      {title}
    </h2>
    <div className='space-y-4 text-[15px] leading-relaxed text-slate-700 dark:text-slate-300'>
      {children}
    </div>
  </section>
);

const SubSection = ({ title, children }) => (
  <div className='mb-6'>
    <h3 className='text-base font-semibold text-slate-900 dark:text-white mb-2'>
      {title}
    </h3>
    <div className='space-y-3 text-[15px] leading-relaxed text-slate-700 dark:text-slate-300'>
      {children}
    </div>
  </div>
);

const ContractsDB = () => {
  return (
    <div className='min-h-screen bg-white dark:bg-slate-950'>
      <div className='max-w-3xl mx-auto px-6 py-16'>
        <Link
          to='/projects'
          className='inline-flex items-center gap-1.5 text-sm text-blue-600 dark:text-blue-400 hover:underline mb-10'
        >
          <ArrowLeft className='w-3.5 h-3.5' />
          Back to Projects
        </Link>

        {/* Hero */}
        <header className='mb-14'>
          <p className='font-mono text-xs text-blue-600 dark:text-blue-400 tracking-wider mb-4 uppercase'>
            Project
          </p>
          <h1 className='text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-5'>
            ContractsDB Agent
          </h1>
          <p className='text-lg text-slate-500 dark:text-slate-400 leading-relaxed mb-6'>
            An AI-powered contract management system built as a Teams chatbot —
            from upload to structured storage in one conversation.
          </p>
          <div className='flex flex-wrap gap-1.5'>
            {tags.map((tag) => (
              <span
                key={tag}
                className='px-2.5 py-1 text-xs font-mono rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700'
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <Section id='the-problem' title='The Problem'>
          <p>
            A multinational manufacturing company manages hundreds of contracts
            — NDAs, commercial agreements, service contracts — across multiple
            languages (English, Dutch, French, German). The legal and
            procurement teams were manually processing every incoming contract:
            reading PDFs, extracting key metadata (parties, dates, governing
            law, obligations), creating folder structures, and depositing
            documents into SharePoint.
          </p>
          <p>
            This process was slow, error-prone, and didn't scale. Critical
            details were missed, contracts expired without notice, and there
            was no centralized way to search or query the contract portfolio.
          </p>
        </Section>

        <Section id='what-i-built' title='What I Built'>
          <p>
            A conversational contract management agent deployed in Microsoft
            Teams. Users open the agent, upload a contract PDF, and walk
            through a guided flow — all without leaving Teams. The agent
            handles OCR, multilingual metadata extraction, classification,
            human review, and structured deposit into SharePoint.
          </p>
          <p>
            The system supports two contract types (NDAs and commercial
            agreements), extracts metadata in four languages, and provides 12
            self-service topics for querying the contract database after
            deposit.
          </p>
        </Section>

        <Section id='architecture' title='Architecture'>
          <p>The system has three layers:</p>

          <SubSection title='1. Conversational interface (Copilot Studio → Teams)'>
            <p>
              The agent is deployed as a Teams app. Users trigger it with
              natural language ("I want to upload a contract"), then the agent
              guides them through a structured conversation: collecting
              business unit, contract owner, and additional fields depending on
              contract type, then accepting the PDF upload directly in chat.
            </p>
          </SubSection>

          <SubSection title='2. Processing pipeline (Power Automate + Azure AI)'>
            <p>
              When the user uploads a document, the agent calls a Power
              Automate flow that:
            </p>
            <ul className='list-disc pl-6 space-y-1.5'>
              <li>
                Sends the PDF to Azure Document Intelligence for OCR and layout
                extraction
              </li>
              <li>
                Runs a classifier to determine document type (NDA, Commercial,
                or Related Document such as an annex or amendment)
              </li>
              <li>
                For contracts: calls the appropriate extraction prompt (GPT-4o
                via AI Builder) — 8 fields for NDAs, 16 for commercial
                contracts
              </li>
              <li>
                For related documents: extracts the parent agreement name,
                searches SharePoint, and deposits into the parent's Document
                Set
              </li>
              <li>Returns structured JSON to the agent</li>
            </ul>
          </SubSection>

          <SubSection title='3. Review and deposit'>
            <p>
              The agent displays extracted metadata in a dynamic adaptive card.
              The user can review, correct any field through an edit loop, and
              ask free-form questions about the contract (PDF text extraction +
              LLM Q&amp;A). Once confirmed, the agent triggers a deposit flow
              that creates the party folder structure in SharePoint, uploads
              the PDF as a Document Set with all metadata fields, and logs the
              transaction to Dataverse.
            </p>
          </SubSection>

          <figure className='mt-8 mb-2 p-6 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/40'>
            <ContractsDBDiagram />
            <figcaption className='mt-4 text-xs font-mono text-slate-400 dark:text-slate-500 text-center'>
              // system architecture
            </figcaption>
          </figure>
        </Section>

        <Section id='challenges' title='Key Technical Challenges'>
          <SubSection title='Multilingual Extraction at Scale'>
            <p>
              Commercial contracts arrive in English, Dutch, French, and
              German. The extraction prompt needed to handle not just language
              detection, but field-level normalization — a
              "Vertrouwelijkheidsovereenkomst" is an NDA, a
              "Geheimhaltungsvereinbarung" is also an NDA. I built an
              evaluation pipeline against 50 annotated training contracts to
              measure field-level accuracy across all four languages and
              iteratively refined the prompt.
            </p>
          </SubSection>

          <SubSection title='Intelligent Document Classification'>
            <p>
              The upload flow handles more than just new contracts. Users also
              need to add annexes, addenda, amendments, and prolongations to
              existing agreements. Rather than building a separate workflow, I
              integrated a classifier into the unified upload topic: when a
              user uploads any document, the classifier (GPT-4o) determines
              whether it's an NDA, a Commercial contract, or a Related Document
              — and also extracts the parent agreement name when it detects a
              related document.
            </p>
            <p>
              This changes the entire routing: new contracts continue through
              the full extraction and metadata collection flow, while related
              documents skip that and instead search for the parent contract in
              SharePoint, then deposit directly into the parent's Document Set.
              If the parent isn't found, the agent tells the user to upload the
              original agreement first. One upload topic, three document types,
              completely different downstream paths — all invisible to the
              user.
            </p>
          </SubSection>

          <SubSection title='Complex SharePoint Data Modeling'>
            <p>
              SharePoint Document Sets with taxonomy fields, lookup columns,
              and managed metadata don't play nicely with standard Power
              Automate connectors. I had to work directly with the SharePoint
              REST API (
              <code className='px-1 py-0.5 text-[13px] font-mono rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'>
                validateUpdateListItem
              </code>
              ,{' '}
              <code className='px-1 py-0.5 text-[13px] font-mono rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'>
                AddValidateUpdateItemUsingPath
              </code>
              ) and handle edge cases like:
            </p>
            <ul className='list-disc pl-6 space-y-1.5'>
              <li>
                Nested Document Sets inside dynamically-created party folders
              </li>
              <li>Forward slashes in company names breaking folder paths</li>
              <li>
                Taxonomy field GUIDs requiring exact format with pipe-delimited
                values
              </li>
              <li>Double-escaping bugs in flow expressions</li>
            </ul>
          </SubSection>

          <SubSection title="Conversational UX That Doesn't Frustrate">
            <p>
              The agent needed to feel fast and natural inside Teams. Adaptive
              cards present extracted fields with inline editing for
              corrections. A retry loop handles date format validation, and
              required fields are gated before deposit can proceed — but the
              user never leaves the Teams conversation. Inactivity handling
              clears stale session state so long-running conversations don't
              accumulate ghost data.
            </p>
          </SubSection>
        </Section>

        <Section id='topics' title='The 12-Topic Chatbot'>
          <p>
            Beyond the upload pipeline, the agent provides self-service access
            to the contract database:
          </p>
          <ul className='list-disc pl-6 space-y-1.5'>
            <li>
              <strong className='text-slate-900 dark:text-white'>Upload</strong>{' '}
              a document (unified flow — classifier routes contracts to
              extraction, related documents to parent agreement)
            </li>
            <li>
              <strong className='text-slate-900 dark:text-white'>Search</strong>{' '}
              contracts by party, type, or keyword
            </li>
            <li>
              <strong className='text-slate-900 dark:text-white'>
                Track uploads
              </strong>{' '}
              in real-time through the pipeline
            </li>
            <li>
              <strong className='text-slate-900 dark:text-white'>
                Get alerts
              </strong>{' '}
              on expiring contracts with direct links to source folders
            </li>
            <li>
              <strong className='text-slate-900 dark:text-white'>
                Ask questions
              </strong>{' '}
              about specific contracts (PDF text extraction + LLM Q&amp;A)
            </li>
            <li>
              <strong className='text-slate-900 dark:text-white'>
                View field accuracy
              </strong>{' '}
              statistics across the extraction pipeline
            </li>
            <li>
              <strong className='text-slate-900 dark:text-white'>
                Detect duplicates
              </strong>{' '}
              before new contracts are deposited
            </li>
            <li>
              <strong className='text-slate-900 dark:text-white'>
                Check contract status
              </strong>{' '}
              and recently started contracts
            </li>
            <li>
              <strong className='text-slate-900 dark:text-white'>
                Get contract details
              </strong>{' '}
              for any record in the database
            </li>
          </ul>
          <p>
            Each topic is implemented as a Copilot Studio topic backed by Power
            Automate flows and Dataverse tables.
          </p>
        </Section>

        <Section id='tech-stack' title='Tech Stack'>
          <div className='overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700'>
            <table className='w-full text-sm'>
              <thead className='bg-slate-50 dark:bg-slate-800/60'>
                <tr>
                  <th className='text-left font-semibold text-slate-700 dark:text-slate-200 px-4 py-2.5 w-1/3'>
                    Layer
                  </th>
                  <th className='text-left font-semibold text-slate-700 dark:text-slate-200 px-4 py-2.5'>
                    Technology
                  </th>
                </tr>
              </thead>
              <tbody className='divide-y divide-slate-200 dark:divide-slate-700'>
                {techStack.map(([layer, tech]) => (
                  <tr key={layer} className='bg-white dark:bg-slate-900/30'>
                    <td className='px-4 py-2.5 font-mono text-xs text-slate-500 dark:text-slate-400 align-top'>
                      {layer}
                    </td>
                    <td className='px-4 py-2.5 text-slate-700 dark:text-slate-300'>
                      {tech}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section id='results' title='Results'>
          <ul className='list-disc pl-6 space-y-1.5'>
            <li>
              <strong className='text-slate-900 dark:text-white'>
                Full automation
              </strong>{' '}
              of contract processing from upload to SharePoint deposit
            </li>
            <li>
              <strong className='text-slate-900 dark:text-white'>
                16 metadata fields
              </strong>{' '}
              extracted per commercial contract with measurable accuracy
            </li>
            <li>
              <strong className='text-slate-900 dark:text-white'>
                4-language support
              </strong>{' '}
              (EN, NL, FR, DE) with consistent extraction quality
            </li>
            <li>
              <strong className='text-slate-900 dark:text-white'>
                50-contract evaluation pipeline
              </strong>{' '}
              for continuous prompt refinement
            </li>
            <li>
              <strong className='text-slate-900 dark:text-white'>
                12 chatbot topics
              </strong>{' '}
              providing self-service access to the contract database
            </li>
            <li>
              <strong className='text-slate-900 dark:text-white'>
                Zero context switching
              </strong>{' '}
              — the entire workflow happens inside Teams
            </li>
          </ul>
        </Section>

        <Section id='what-i-learned' title='What I Learned'>
          <p>
            This project taught me that the hardest part of enterprise AI isn't
            the model — it's the plumbing. Getting GPT-4o to extract contract
            fields was the easy part. Making SharePoint accept those fields
            reliably, handling edge cases in company names across four
            languages, and designing a conversational UX that legal teams would
            actually use — that's where the real engineering happens.
          </p>
          <p>
            It also reinforced my belief that human-in-the-loop isn't a
            compromise; it's a feature. The legal team trusts the system{' '}
            <em>because</em> they can verify and correct before deposit, not
            despite it.
          </p>
        </Section>

        <p className='text-sm italic text-slate-500 dark:text-slate-400 mt-16 pt-6 border-t border-slate-200 dark:border-slate-800'>
          Built at Materialise NV, Leuven, Belgium. 2024–2025.
        </p>
      </div>
    </div>
  );
};

export default ContractsDB;
