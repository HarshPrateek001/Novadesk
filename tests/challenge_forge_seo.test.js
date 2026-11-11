import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

function read(relPath) {
  return fs.readFileSync(path.join(projectRoot, relPath), 'utf8');
}

describe('FORGE AI (/forge-ai) Technical SEO, Schema & Crawlability Verification', () => {
  test('ForgeAI.jsx defines SEO title <= 60 chars, description <= 160 chars, canonical, breadcrumbs, and 1920x1080 OG asset', () => {
    const src = read('src/pages/ForgeAI.jsx');

    const titleMatch = src.match(/const PAGE_TITLE = '([^']+)';/);
    const descMatch = src.match(/const PAGE_DESCRIPTION =\s*'([^']+)';/);
    assert.ok(titleMatch, 'ForgeAI.jsx must define PAGE_TITLE');
    assert.ok(descMatch, 'ForgeAI.jsx must define PAGE_DESCRIPTION');

    const title = titleMatch[1];
    const description = descMatch[1];
    assert.ok(title.includes('FORGE AI') && title.includes('NovaDesk'), 'Title must include primary keyword FORGE AI and brand NovaDesk');
    assert.ok(title.length <= 60, `Title should stay <= 60 chars for SERP fit, got ${title.length}`);
    assert.ok(description.length >= 110 && description.length <= 160, `Description should be 110-160 chars, got ${description.length}`);

    assert.match(src, /url="\/forge-ai"/);
    assert.match(src, /canonical="\/forge-ai"/);
    assert.match(src, /image=\{OG_IMAGE\}/);
    assert.match(src, /imageWidth=\{1920\}/);
    assert.match(src, /imageHeight=\{1080\}/);
    assert.match(src, /breadcrumbs=\{breadcrumbs\}/);

    const ogAssetPath = path.join(projectRoot, 'public/assets/forge/frames/frame-003.jpg');
    const videoAssetPath = path.join(projectRoot, 'public/assets/forge/source/forge-core-scrub.mp4');
    assert.equal(fs.existsSync(ogAssetPath), true, 'OG image asset frame-003.jpg must exist in public/');
    assert.equal(fs.existsSync(videoAssetPath), true, 'Video schema contentUrl asset forge-core-scrub.mp4 must exist in public/');
  });

  test('ForgeAI.jsx declares multi-entity JSON-LD schemas (WebPage, CreativeWork, DefinedTermSet, ItemList, VideoObject)', () => {
    const src = read('src/pages/ForgeAI.jsx');
    assert.match(src, /'@type': 'WebPage'/);
    assert.match(src, /'@type': 'CreativeWork'/);
    assert.match(src, /'@type': 'DefinedTermSet'/);
    assert.match(src, /'@type': 'ItemList'/);
    assert.match(src, /'@type': 'VideoObject'/);
    assert.match(src, /'@type': 'SpeakableSpecification'/);
    assert.match(src, /uploadDate: '2026-11-10T00:00:00\+05:30'/);
  });

  test('ForgeHero.jsx embeds FORGE AI entity cleanly in <h1> and ForgeStorytelling.jsx exposes unmounted chapters via SemanticInactiveChapters', () => {
    const heroSrc = read('src/components/forge/ForgeHero.jsx');
    const storySrc = read('src/components/forge/ForgeStorytelling.jsx');
    const cssSrc = read('src/pages/forge/forge.css');

    assert.match(heroSrc, /<h1 className="forge-hero-headline">[\s\S]*FORGE AI[\s\S]*<\/h1>/);
    assert.match(storySrc, /function SemanticInactiveChapters/);
    assert.match(storySrc, /if \(idx === activeChapter\) return null;/);
    assert.match(storySrc, /<div className="forge-sr-chapters"/);
    assert.match(cssSrc, /\.forge-sr-chapters/);
  });

  test('Footer, Sitemap, and llms.txt discovery link to https://www.novadesk.site/forge-ai', () => {
    const footerSrc = read('src/components/Footer.jsx');
    const llms = read('public/llms.txt');
    const llmsFull = read('public/llms-full.txt');
    const distSitemap = read('dist/sitemap.xml');
    const pubSitemap = read('public/sitemap.xml');

    assert.match(footerSrc, /<Link to="\/forge-ai">/);
    assert.ok(llms.includes('https://www.novadesk.site/forge-ai'), 'llms.txt must reference /forge-ai');
    assert.ok(llmsFull.includes('https://www.novadesk.site/forge-ai'), 'llms-full.txt must reference /forge-ai');

    [distSitemap, pubSitemap].forEach((xml, idx) => {
      const label = idx === 0 ? 'dist' : 'public';
      assert.match(
        xml,
        /<loc>https:\/\/www\.novadesk\.site\/forge-ai<\/loc>[\s\S]*?<priority>0\.95<\/priority>/,
        `${label}/sitemap.xml must list /forge-ai at priority 0.95`
      );
    });
  });
});

