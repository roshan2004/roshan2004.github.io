#!/usr/bin/env node
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const citationsPath = path.join(projectRoot, 'src', 'data', 'citations.json');

// Semantic Scholar API endpoint
const SEMANTIC_SCHOLAR_API = 'api.semanticscholar.org';

// Extract DOI from URL
function extractDoi(url) {
  if (!url) return null;
  const match = url.match(/10\.\d{4,}(?:\.\d+)*\/[^\s]+/);
  return match ? match[0] : null;
}

// Fetch citation data from Semantic Scholar using https module
function fetchCitationData(doi) {
  if (!doi) return Promise.resolve(null);

  return new Promise((resolve) => {
    const encodedDoi = encodeURIComponent(doi);
    const path = `/graph/v1/paper/DOI:${encodedDoi}?fields=citationCount,influentialCitationCount`;

    const options = {
      hostname: SEMANTIC_SCHOLAR_API,
      port: 443,
      path: path,
      method: 'GET',
      headers: {
        'User-Agent': 'Academic-Website-Citation-Fetcher/1.0',
      },
    };

    const req = https.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        if (res.statusCode === 200) {
          try {
            const json = JSON.parse(data);
            resolve({
              doi,
              citationCount: json.citationCount || 0,
              influentialCitationCount: json.influentialCitationCount || 0,
              lastUpdated: new Date().toISOString(),
            });
          } catch (error) {
            console.warn(`[fetch-citations] Error parsing JSON for DOI ${doi}:`, error.message);
            resolve(null);
          }
        } else {
          console.warn(`[fetch-citations] Failed to fetch data for DOI: ${doi} (Status: ${res.statusCode})`);
          resolve(null);
        }
      });
    });

    req.on('error', (error) => {
      console.warn(`[fetch-citations] Error fetching data for DOI ${doi}:`, error.message);
      resolve(null);
    });

    req.end();
  });
}

// Add delay between requests to be respectful to the API
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  // Read publications from Publications.jsx
  const publicationsPath = path.join(projectRoot, 'src', 'components', 'Publications.jsx');
  const publicationsContent = await fs.readFile(publicationsPath, 'utf8');

  // Extract DOIs from the file using regex
  const linkRegex = /link:\s*['"]([^'"]+)['"]/g;
  const links = [];
  let match;

  while ((match = linkRegex.exec(publicationsContent)) !== null) {
    links.push(match[1]);
  }

  console.log(`[fetch-citations] Found ${links.length} publication links`);

  // Load existing citations data if available
  let existingCitations = {};
  try {
    const existingData = await fs.readFile(citationsPath, 'utf8');
    existingCitations = JSON.parse(existingData);
    console.log(`[fetch-citations] Loaded ${Object.keys(existingCitations).length} existing citations`);
  } catch (error) {
    console.log('[fetch-citations] No existing citations data found, starting fresh');
  }

  const citations = { ...existingCitations };
  let successCount = 0;

  for (const link of links) {
    const doi = extractDoi(link);
    if (doi) {
      console.log(`[fetch-citations] Fetching citation data for DOI: ${doi}`);
      const data = await fetchCitationData(doi);
      if (data) {
        citations[doi] = data;
        successCount++;
        console.log(`[fetch-citations] ✓ ${doi}: ${data.citationCount} citations`);
      } else if (existingCitations[doi]) {
        console.log(`[fetch-citations] ℹ Keeping existing data for ${doi}`);
      }
      // Be respectful to the API - wait between requests
      await delay(1000);
    }
  }

  // Ensure directory exists
  await fs.mkdir(path.dirname(citationsPath), { recursive: true });

  // Write citations data
  await fs.writeFile(
    citationsPath,
    JSON.stringify(citations, null, 2) + '\n',
    'utf8'
  );

  const totalCitations = Object.values(citations).reduce(
    (sum, data) => sum + data.citationCount,
    0
  );

  console.log(`[fetch-citations] ✓ Generated citation data for ${Object.keys(citations).length} publications (${successCount} newly fetched)`);
  console.log(`[fetch-citations] Total citations: ${totalCitations}`);
}

main().catch((error) => {
  console.error('[fetch-citations] Failed to fetch citation data:', error);
  // Don't exit with error code - we don't want to break the build if citations fail
  console.warn('[fetch-citations] Continuing build without citation data');
});
