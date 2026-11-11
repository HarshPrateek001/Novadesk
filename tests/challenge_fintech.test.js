import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const fintechPath = path.join(projectRoot, 'src/pages/industries/Fintech.jsx');
const appPath = path.join(projectRoot, 'src/App.jsx');
const publicDir = path.join(projectRoot, 'public');

const fintechContent = fs.readFileSync(fintechPath, 'utf8');
const appContent = fs.readFileSync(appPath, 'utf8');

// Extract all valid route paths from App.jsx
const declaredRoutes = new Set();
const routeRegex = /path=[\x22\x27]([^\x22\x27]+)[\x22\x27]/g;
let routeMatch;
while ((routeMatch = routeRegex.exec(appContent)) !== null) {
  declaredRoutes.add(routeMatch[1]);
}

describe('Empirical Challenge 2: Fintech.jsx Link & Competitor Asset Security Scan', () => {

  test('Strict Competitor URL Scan: Zero occurrences of engineerbabu (case-insensitive)', () => {
    const matches = fintechContent.match(/engineerbabu/gi) || [];
    assert.equal(
      matches.length, 
      0, 
      `Found ${matches.length} occurrences of competitor URL/keyword "engineerbabu" in Fintech.jsx`
    );
  });

  test('Strict Competitor Attribution Scan: Zero occurrences of competitor founder Mayank', () => {
    const matches = fintechContent.match(/Mayank\s+Pratap/gi) || [];
    assert.equal(
      matches.length, 
      0, 
      `Found ${matches.length} occurrences of competitor founder "Mayank Pratap" in Fintech.jsx`
    );
  });

  test('Insecure Protocol Scan: Zero instances of unencrypted http:// links (excluding schemas or standard xmlns)', () => {
    const httpRegex = /http:\/\/(?!www\.w3\.org|schema\.org)[^\s\x22\x27<>]+/gi;
    const insecureUrls = fintechContent.match(httpRegex) || [];
    assert.equal(
      insecureUrls.length, 
      0, 
      `Found insecure http:// URLs: ${JSON.stringify(insecureUrls)}`
    );
  });

  test('Zero broken /industries/fintech/* legacy sub-routes', () => {
    const brokenMatches = fintechContent.match(/\/industries\/fintech\/[a-zA-Z0-9_-]+/g) || [];
    assert.equal(
      brokenMatches.length, 
      0, 
      `Found broken /industries/fintech/* routes: ${JSON.stringify(brokenMatches)}`
    );
  });

  test('All internal href and to links resolve to valid routes in App.jsx', () => {
    // Match href="/..." or to="/..."
    const hrefRegex = /(?:href|to)=[\x22\x27](\/[^\x22\x27?#]*)/g;
    const internalLinks = new Set();
    let m;
    while ((m = hrefRegex.exec(fintechContent)) !== null) {
      // Exclude asset paths like /assets, /images, /icons, /blogs
      if (!m[1].startsWith('/assets') && !m[1].startsWith('/images') && !m[1].startsWith('/icons') && !m[1].startsWith('/blogs')) {
        internalLinks.add(m[1]);
      }
    }

    const unmappedRoutes = [];
    for (const link of internalLinks) {
      if (!declaredRoutes.has(link)) {
        // Check wildcard / dynamic routes
        const matchesDynamic = Array.from(declaredRoutes).some(route => {
          if (route === '*') return true;
          if (route.includes(':')) {
            const pattern = new RegExp('^' + route.replace(/:[^\s/]+/g, '[^/]+') + '$');
            return pattern.test(link);
          }
          return false;
        });
        if (!matchesDynamic) {
          unmappedRoutes.push(link);
        }
      }
    }

    assert.equal(
      unmappedRoutes.length, 
      0, 
      `Found unmapped internal links in Fintech.jsx: ${JSON.stringify(unmappedRoutes)}`
    );
  });

  test('All anchor links (#...) in Fintech.jsx map to valid element IDs in the component', () => {
    const anchorRegex = /href=[\x22\x27]#([a-zA-Z0-9_-]+)[\x22\x27]/g;
    const anchors = new Set();
    let m;
    while ((m = anchorRegex.exec(fintechContent)) !== null) {
      anchors.add(m[1]);
    }

    const missingAnchorIds = [];
    for (const id of anchors) {
      const idPattern = new RegExp(`id=[\\x22\\x27]${id}[\\x22\\x27]`);
      if (!idPattern.test(fintechContent)) {
        missingAnchorIds.push(id);
      }
    }

    assert.equal(
      missingAnchorIds.length, 
      0, 
      `Found anchor links pointing to non-existent IDs: ${JSON.stringify(missingAnchorIds)}`
    );
  });

  test('All local asset src references exist on disk in public/', () => {
    const srcRegex = /(?:src|poster)=[\x22\x27](\/[^\x22\x27]+)[\x22\x27]/g;
    const missingAssets = [];
    let m;
    let totalAssetsChecked = 0;

    while ((m = srcRegex.exec(fintechContent)) !== null) {
      const relativeAsset = m[1].split('?')[0]; // strip query string if any
      const fullPath = path.join(publicDir, relativeAsset);
      totalAssetsChecked++;
      if (!fs.existsSync(fullPath)) {
        missingAssets.push(relativeAsset);
      }
    }

    assert.ok(totalAssetsChecked > 0, 'No src assets were found in Fintech.jsx');
    assert.equal(
      missingAssets.length, 
      0, 
      `Missing local assets referenced in Fintech.jsx: ${JSON.stringify(missingAssets)}`
    );
  });

  test('Specific Danny Schwartz testimonial asset verification', () => {
    const dannyPath = path.join(publicDir, 'assets/img/testimonials/danny_schwartz.webp');
    assert.ok(fs.existsSync(dannyPath), 'public/assets/img/testimonials/danny_schwartz.webp must exist');
    const stat = fs.statSync(dannyPath);
    assert.ok(stat.size > 1000, `danny_schwartz.webp size (${stat.size} bytes) is suspiciously small`);
  });

  test('All external URLs in Fintech.jsx belong to an approved whitelist', () => {
    const externalUrlRegex = /https?:\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\/[^\s\x22\x27<>]*)?/g;
    const allUrls = fintechContent.match(externalUrlRegex) || [];
    
    const allowedDomains = [
      'www.w3.org',
      'schema.org',
      'www.novadesk.site',
      'fonts.googleapis.com',
      'fonts.gstatic.com',
      'linkedin.com',
      'www.linkedin.com',
      'twitter.com',
      'github.com',
      'www.google.com',
      'google.com',
      'blog.google',
      'cdn.lottielab.com',
      'maps.google.com'
    ];

    const suspiciousUrls = [];
    for (const urlStr of allUrls) {
      try {
        const u = new URL(urlStr);
        if (!allowedDomains.includes(u.hostname)) {
          suspiciousUrls.push(urlStr);
        }
      } catch (e) {
        suspiciousUrls.push(urlStr);
      }
    }

    assert.equal(
      suspiciousUrls.length, 
      0, 
      `Found unapproved/suspicious external URLs: ${JSON.stringify(suspiciousUrls)}`
    );
  });
});
