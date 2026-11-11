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

describe('Live Server Routing, 404 Integrity & Search Console Hygiene', () => {
  test('vercel.json disables catch-all rewrite, enforces canonical host/trailingSlash, and protects preview hosts', () => {
    const vercel = JSON.parse(read('vercel.json'));

    assert.equal(vercel.cleanUrls, true, 'cleanUrls should be true');
    assert.equal(vercel.trailingSlash, false, 'trailingSlash should be false');

    assert.ok(Array.isArray(vercel.rewrites) && vercel.rewrites.length > 0, 'rewrites must be explicit allowlist');
    const catchAllPatterns = new Set(['/(.*)', '/:path*', '/*', '(.*)']);
    for (const rule of vercel.rewrites) {
      assert.equal(
        catchAllPatterns.has(rule.source),
        false,
        `Catch-all rewrite "${rule.source}" -> "${rule.destination}" would return HTTP 200 on fake URLs`
      );
    }

    const apexRedirect = (vercel.redirects || []).find(
      (r) =>
        r.source === '/:path*' &&
        r.destination === 'https://www.novadesk.site/:path*' &&
        r.permanent === true &&
        Array.isArray(r.has) &&
        r.has.some((h) => h.type === 'host' && h.value === 'novadesk.site')
    );
    assert.ok(apexRedirect, 'Apex novadesk.site must permanently redirect to https://www.novadesk.site/:path*');

    const founderAliases = [
      '/harsh-prateek',
      '/harsh-prateek-novadesk',
      '/founder',
      '/piusha-patra',
      '/piusha-patra-novadesk',
      '/co-founder',
    ];
    for (const alias of founderAliases) {
      const rule = (vercel.redirects || []).find(
        (r) => r.source === alias && r.destination === '/about-us' && r.permanent === true
      );
      assert.ok(rule, `Founder alias ${alias} must permanently redirect to /about-us`);
    }

    assert.equal(vercel.headers[0]?.source, '/(.*)', 'First header rule must remain global security headers');
    for (const noindexSource of ['/404', '/404.html']) {
      const rule = (vercel.headers || []).find(
        (h) =>
          h.source === noindexSource &&
          h.headers?.some((hdr) => hdr.key === 'X-Robots-Tag' && hdr.value === 'noindex, nofollow')
      );
      assert.ok(rule, `${noindexSource} must send X-Robots-Tag: noindex, nofollow`);
    }

    const vercelPreviewHeader = (vercel.headers || []).find(
      (h) =>
        Array.isArray(h.has) &&
        h.has.some((cond) => cond.type === 'host' && cond.value.includes('vercel')) &&
        h.headers?.some((hdr) => hdr.key === 'X-Robots-Tag' && hdr.value === 'noindex, nofollow')
    );
    assert.ok(vercelPreviewHeader, 'Preview *.vercel.app hostnames must send X-Robots-Tag: noindex, nofollow');
  });

  test('Every concrete route in App.jsx, IndustryPage.jsx, and sitemap.xml matches vercel.json', () => {
    const vercel = JSON.parse(read('vercel.json'));
    const rewriteSources = new Set(vercel.rewrites.map((r) => r.source));
    const redirectSources = new Set((vercel.redirects || []).map((r) => r.source));

    const appSrc = read('src/App.jsx');
    const routeMatches = [...appSrc.matchAll(/<Route\s+[^>]*path="([^"]+)"/g)].map((m) => m[1]);
    assert.ok(routeMatches.length > 35, 'Expected full route table in src/App.jsx');

    for (const routePath of routeMatches) {
      if (routePath === '*' || routePath === '/404') continue;
      if (routePath === '/industries/:slug' || routePath === '/blog/:slug') continue;
      const handled = rewriteSources.has(routePath) || redirectSources.has(routePath);
      assert.equal(handled, true, `App.jsx route "${routePath}" must be covered by vercel.json rewrites or redirects`);
    }

    assert.ok(
      rewriteSources.has('/blog/:slug([a-zA-Z0-9_-]+)'),
      'vercel.json must restrict /blog/:slug to clean slug characters ([a-zA-Z0-9_-]+) so probes like /blog/& or /blog/wp-login.php return 404'
    );

    const industrySrc = read('src/pages/industries/IndustryPage.jsx');
    const industryBlockMatch = industrySrc.match(/const industryData = \{([\s\S]*?)\n\};/);
    assert.ok(industryBlockMatch, 'Could not locate industryData map in IndustryPage.jsx');
    const industryKeys = [...industryBlockMatch[1].matchAll(/^\s{2}'?([a-z0-9-]+)'?:\s*\{/gm)].map((m) => m[1]);
    assert.ok(industryKeys.length >= 10, 'Expected all industry slugs inside industryData');
    for (const slug of industryKeys) {
      assert.ok(
        rewriteSources.has(`/industries/${slug}`),
        `Industry slug "/industries/${slug}" must be explicitly rewritten in vercel.json`
      );
    }

    const sitemapPath = path.join(projectRoot, 'public/sitemap.xml');
    if (fs.existsSync(sitemapPath)) {
      const sitemapXml = read('public/sitemap.xml');
      const locs = [...sitemapXml.matchAll(/<loc>(https:\/\/www\.novadesk\.site[^<]*)<\/loc>/g)].map((m) =>
        new URL(m[1]).pathname
      );
      assert.ok(locs.length > 0, 'Expected URLs in public/sitemap.xml');
      for (const pathname of locs) {
        const isBlogPost = /^\/blog\/[a-zA-Z0-9_-]+$/.test(pathname);
        assert.ok(
          rewriteSources.has(pathname) || isBlogPost,
          `Sitemap URL "${pathname}" must resolve through vercel.json rewrites`
        );
      }
    }
  });

  test('public/404.html exists with noindex, nofollow and zero canonical tag', () => {
    const html404 = read('public/404.html');
    assert.match(html404, /<meta\s+name="robots"\s+content="noindex,\s*nofollow"\s*\/?>/i);
    assert.match(html404, /<title>404\s*[—-]\s*Page Not Found\s*\|\s*NovaDesk<\/title>/);
    assert.doesNotMatch(html404, /rel="canonical"/i, '404.html must not advertise a canonical URL');

    const dist404Path = path.join(projectRoot, 'dist/404.html');
    if (fs.existsSync(dist404Path)) {
      const dist404 = fs.readFileSync(dist404Path, 'utf8');
      assert.match(dist404, /content="noindex,\s*nofollow"/i);
    }
  });

  test('Client-side unknown industry slugs and NotFound render eagerly with noindex, nofollow', () => {
    const industrySrc = read('src/pages/industries/IndustryPage.jsx');
    assert.match(industrySrc, /if\s*\(!data\)\s*\{\s*return\s*<NotFound\s*\/>\s*;\s*\}/);
    assert.doesNotMatch(industrySrc, /<Navigate\s+to="\/industries\/fintech"/);

    const seoSrc = read('src/components/SEO.jsx');
    assert.match(seoSrc, /noindex\s*\?\s*"noindex, nofollow"/);
    assert.match(seoSrc, /\{!noindex\s*\?\s*<link rel="canonical" href=\{pageUrl\}\s*\/>\s*:\s*null\}/);

    const appSrc = read('src/App.jsx');
    assert.match(appSrc, /import NotFound from '\.\/pages\/NotFound';/);
    assert.doesNotMatch(appSrc, /const NotFound = React\.lazy/);
  });

  test('robots.txt blocks crawler probes and parameter traps while keeping assets crawlable', () => {
    const robots = read('public/robots.txt');
    for (const rule of [
      'Disallow: /api/',
      'Disallow: /404',
      'Disallow: /wp-admin',
      'Disallow: /wp-login.php',
      'Disallow: /xmlrpc.php',
      'Disallow: /*?fbclid=',
      'Disallow: /*?gclid=',
      'Disallow: /*?utm_',
      'Disallow: /*?&',
      'Sitemap: https://www.novadesk.site/sitemap.xml',
    ]) {
      assert.ok(robots.includes(rule), `robots.txt must contain "${rule}"`);
    }
    assert.doesNotMatch(robots, /Disallow:\s*\/assets\//i);
    assert.doesNotMatch(robots, /Disallow:\s*\*\.js/i);
    assert.doesNotMatch(robots, /Disallow:\s*\*\.css/i);
  });

  test('Location-hub blocks, city-stuffing meta tags, and /locations/* routes are completely removed', () => {
    const footerSrc = read('src/components/Footer.jsx');
    assert.doesNotMatch(footerSrc, /nd-local-seo|National Service Network|Regional Hubs|\/locations\//i);
    assert.doesNotMatch(footerSrc, /<h4>Locations<\/h4>/);

    const headerSrc = read('src/components/Header.jsx');
    assert.doesNotMatch(headerSrc, /Regional Studios|\/locations\//i);

    const html = read('index.html');
    assert.doesNotMatch(html, /name="geo\.placename"|name="coverage"/i);

    const seoSrc = read('src/components/SEO.jsx');
    assert.doesNotMatch(seoSrc, /geo\.placename|geo\.region/);

    assert.equal(fs.existsSync(path.join(projectRoot, 'src/pages/locations')), false, 'src/pages/locations must be removed');
    assert.doesNotMatch(read('src/App.jsx'), /\/locations\//);
    assert.doesNotMatch(read('vercel.json'), /\/locations\//);
    assert.doesNotMatch(read('vite.config.js'), /\/locations\//);
    assert.doesNotMatch(read('src/pages/services/WebDevelopment.jsx'), /\/locations\//);
    assert.doesNotMatch(read('public/llms.txt'), /\/locations\//);
    assert.doesNotMatch(read('public/llms-full.txt'), /Abinashpur|Siliguri|Bhubaneswar/);

    const sitemapPath = path.join(projectRoot, 'public/sitemap.xml');
    if (fs.existsSync(sitemapPath)) {
      assert.doesNotMatch(read('public/sitemap.xml'), /\/locations\//);
    }
  });
});

