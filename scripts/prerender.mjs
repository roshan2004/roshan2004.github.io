#!/usr/bin/env node
// Post-build prerenderer: takes the built SPA shell (dist/index.html) and writes
// a static HTML file per route with route-specific <title>, description,
// canonical, OpenGraph/Twitter tags, and (for blog posts) BlogPosting JSON-LD.
// The body still hydrates client-side; this ensures every URL exposes correct
// metadata to crawlers and social platforms that do not execute JavaScript.
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { STATIC_ROUTES, buildRouteMeta } from '../src/data/siteMeta.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');
const shellPath = path.join(distDir, 'index.html');
const postsJsonPath = path.join(projectRoot, 'src', 'data', 'posts.json');

function escapeAttr(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function escapeText(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function setTitle(html, title) {
  return html.replace(
    /<title>[\s\S]*?<\/title>/,
    `<title>${escapeText(title)}</title>`
  );
}

// Replaces the content attribute of the <meta> tag identified by attr="key".
function setMetaContent(html, attr, key, content) {
  const tagRe = new RegExp(`<meta\\b[^>]*\\b${attr}="${key}"[^>]*>`, 'i');
  return html.replace(tagRe, (tag) => {
    if (/\bcontent="/i.test(tag)) {
      return tag.replace(/content="[\s\S]*?"/i, `content="${escapeAttr(content)}"`);
    }
    return tag.replace(/\s*\/?>$/, ` content="${escapeAttr(content)}" />`);
  });
}

function setCanonical(html, href) {
  return html.replace(
    /<link\b[^>]*\brel="canonical"[^>]*>/i,
    `<link rel="canonical" href="${escapeAttr(href)}" />`
  );
}

// Removes any previously injected route JSON-LD, then injects fresh data.
function setRouteJsonLd(html, data) {
  const cleaned = html.replace(
    /\s*<script type="application\/ld\+json" id="route-jsonld">[\s\S]*?<\/script>/i,
    ''
  );
  if (!data) return cleaned;
  const json = JSON.stringify(data).replace(/</g, '\\u003c');
  const script = `<script type="application/ld+json" id="route-jsonld">${json}</script>`;
  return cleaned.replace(/<\/head>/i, `  ${script}\n  </head>`);
}

function applyMeta(shell, meta) {
  let html = setTitle(shell, meta.title);
  html = setMetaContent(html, 'name', 'description', meta.description);
  html = setCanonical(html, meta.canonicalUrl);
  html = setMetaContent(html, 'property', 'og:title', meta.title);
  html = setMetaContent(html, 'property', 'og:description', meta.description);
  html = setMetaContent(html, 'property', 'og:url', meta.canonicalUrl);
  html = setMetaContent(html, 'property', 'og:image', meta.ogImage);
  html = setMetaContent(html, 'property', 'og:type', meta.ogType);
  html = setMetaContent(html, 'name', 'twitter:title', meta.title);
  html = setMetaContent(html, 'name', 'twitter:description', meta.description);
  html = setMetaContent(html, 'name', 'twitter:image', meta.ogImage);
  html = setRouteJsonLd(html, meta.jsonLd);
  return html;
}

function outputFileForPath(routePath) {
  if (routePath === '/') return shellPath;
  return path.join(distDir, routePath.replace(/^\//, ''), 'index.html');
}

async function main() {
  const shell = await fs.readFile(shellPath, 'utf8');
  const posts = JSON.parse(await fs.readFile(postsJsonPath, 'utf8'));

  const routePaths = [
    ...STATIC_ROUTES.map((route) => route.path),
    ...posts.map((post) => `/blog/${post.slug}`),
  ];

  for (const routePath of routePaths) {
    const meta = buildRouteMeta(routePath, posts);
    const html = applyMeta(shell, meta);
    const outFile = outputFileForPath(routePath);
    await fs.mkdir(path.dirname(outFile), { recursive: true });
    await fs.writeFile(outFile, html, 'utf8');
  }

  console.log(`[prerender] Wrote ${routePaths.length} route HTML files.`);
}

main().catch((error) => {
  console.error('[prerender] Failed:', error);
  process.exit(1);
});
