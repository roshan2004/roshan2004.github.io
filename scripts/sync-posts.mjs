#!/usr/bin/env node
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';
import { STATIC_ROUTES } from '../src/data/siteMeta.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const postsDir = path.join(projectRoot, 'public', 'posts');
const postsJsonPath = path.join(projectRoot, 'src', 'data', 'posts.json');
const rssPath = path.join(projectRoot, 'public', 'rss.xml');
const sitemapPath = path.join(projectRoot, 'public', 'sitemap.xml');
const SITE_URL = process.env.SITE_URL || 'https://shrestharoshan.com';

function slugFromFile(filename) {
  return filename.replace(/\.md$/, '');
}

function stripMarkdown(markdown) {
  return markdown
    .replace(/!\[[^\]]*]\([^)]*\)/g, '') // images
    .replace(/\[([^\]]*)]\([^)]*\)/g, '$1') // links
    .replace(/[`*_>#-]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function buildExcerpt(markdown, limit = 240) {
  const clean = stripMarkdown(markdown);
  if (clean.length <= limit) return clean;
  return `${clean.slice(0, limit).replace(/\s+\S*$/, '')}…`;
}

function normalizeArray(value) {
  if (!value) return [];
  if (Array.isArray(value)) return value.map((item) => String(item).trim()).filter(Boolean);
  if (typeof value === 'string') {
    return value
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean);
  }
  return [];
}

function extractFirstImage(markdown) {
  const match = markdown.match(/!\[[^\]]*]\(([^)]+)\)/);
  return match ? match[1] : null;
}

function escapeXml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function buildRss(posts) {
  const items = posts
    .map((post) => {
      const link = `${SITE_URL}/blog/${post.slug}`;
      const pubDate = new Date(post.date).toUTCString();
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${link}</link>
      <guid>${link}</guid>
      <pubDate>${pubDate}</pubDate>
      <description><![CDATA[${post.excerpt}]]></description>
    </item>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Roshan Shrestha — Blog</title>
    <link>${SITE_URL}/blog</link>
    <description>Insights on computational biophysics, Martini 3, and molecular simulations.</description>
${items}
  </channel>
</rss>
`;
}

function buildSitemap(posts) {
  const staticEntries = STATIC_ROUTES.map((route) => {
    const loc = `${SITE_URL}${route.path}`;
    return `  <url><loc>${escapeXml(loc)}</loc><changefreq>${route.changefreq}</changefreq><priority>${route.priority}</priority></url>`;
  });

  const postEntries = posts.map((post) => {
    const loc = `${SITE_URL}/blog/${post.slug}`;
    const lastmod = new Date(post.date).toISOString().slice(0, 10);
    return `  <url><loc>${escapeXml(loc)}</loc><lastmod>${lastmod}</lastmod><changefreq>yearly</changefreq><priority>0.6</priority></url>`;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticEntries, ...postEntries].join('\n')}
</urlset>
`;
}

async function ensureDirExists(targetPath) {
  await fs.mkdir(path.dirname(targetPath), { recursive: true });
}

async function main() {
  const files = (await fs.readdir(postsDir)).filter((file) => file.endsWith('.md'));
  const posts = [];

  for (const file of files) {
    const slug = slugFromFile(file);
    const fullPath = path.join(postsDir, file);
    const raw = await fs.readFile(fullPath, 'utf8');
    const stat = await fs.stat(fullPath);
    const { data, content } = matter(raw);
    const title =
      data.title ||
      slug
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    const date = data.date || stat.mtime.toISOString();
    const excerpt = data.excerpt?.trim() || buildExcerpt(content);
    const hero = data.hero || data.image || extractFirstImage(content);
    const tags = normalizeArray(data.tags);
    const authors = normalizeArray(data.authors || data.author);
    const cleanContent = stripMarkdown(content);
    const readingTime = Math.max(1, Math.round(cleanContent.split(/\s+/).filter(Boolean).length / 200));

    posts.push({
      slug,
      title,
      date,
      excerpt,
      tags,
      authors,
      hero,
      image: hero,
      readingTime,
    });
  }

  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  await ensureDirExists(postsJsonPath);
  await fs.writeFile(postsJsonPath, `${JSON.stringify(posts, null, 2)}\n`, 'utf8');

  await ensureDirExists(rssPath);
  await fs.writeFile(rssPath, buildRss(posts), 'utf8');

  await ensureDirExists(sitemapPath);
  await fs.writeFile(sitemapPath, buildSitemap(posts), 'utf8');

  console.log(
    `[sync-posts] Generated metadata, RSS, and sitemap for ${posts.length} posts.`
  );
}

main().catch((error) => {
  console.error('[sync-posts] Failed to build blog metadata:', error);
  process.exit(1);
});
