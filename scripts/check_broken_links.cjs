const fs = require('fs');
const path = require('path');

// 1. Collect all defined routes from App.jsx
const appContent = fs.readFileSync('src/App.jsx', 'utf8');
const routeMatches = [...appContent.matchAll(/path=['"]([^'"]+)['"]/g)].map(m => m[1]);

// Also add blog slugs
const blogFiles = fs.readdirSync('src/blogs').filter(f => f.endsWith('.json'));
const blogSlugs = blogFiles.map(f => {
  const d = JSON.parse(fs.readFileSync(path.join('src/blogs', f), 'utf8'));
  return '/blog/' + d.slug;
});

// Case study slugs
const caseStudies = [
  '/case-studies/forge-ai',
  '/case-studies/buy-elaichi-online',
  '/case-studies/mahaveer-herbals',
  '/case-studies/riyo-advertising-cms',
  '/case-studies/authentiq-ai'
];

// Industries
const industries = [
  'fintech', 'healthcare', 'logistics', 'real-estate', 'staffing',
  'education', 'retail', 'marketplace', 'sports', 'food-and-restaurant',
  'travel-and-hospitality', 'on-demand'
].map(s => '/industries/' + s);

const allValidRoutes = new Set([
  ...routeMatches.filter(r => !r.includes(':')),
  ...blogSlugs,
  ...caseStudies,
  ...industries,
  '/industries',
  '/services',
  '/terms',
  '/privacy-policy'
]);

function getFiles(dir) {
  let res = [];
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) {
      res = res.concat(getFiles(full));
    } else if (item.name.endsWith('.jsx') || item.name.endsWith('.js')) {
      res.push(full);
    }
  }
  return res;
}

const files = getFiles('src');
const broken = [];
const emptyOrBad = [];

for (const file of files) {
  const code = fs.readFileSync(file, 'utf8');
  const matches = [...code.matchAll(/(?:to|href)=['"]([^'"]*)['"]/g)];
  for (const m of matches) {
    const link = m[1];
    if (link === '' || link === '/undefined' || link === '/null') {
      emptyOrBad.push({ file: path.relative(process.cwd(), file), link });
    }
    if (link.startsWith('/')) {
      const cleanLink = link.split(/[?#]/)[0].replace(/\/+$/, '') || '/';
      if (
        cleanLink.startsWith('/assets') ||
        cleanLink.startsWith('/img') ||
        cleanLink.startsWith('/css') ||
        cleanLink.startsWith('/favicon') ||
        cleanLink.startsWith('/apple-touch') ||
        cleanLink.startsWith('/manifest') ||
        cleanLink.startsWith('/api') ||
        cleanLink.startsWith('/uploads') ||
        cleanLink.endsWith('.webp') ||
        cleanLink.endsWith('.png') ||
        cleanLink.endsWith('.jpg') ||
        cleanLink.endsWith('.svg') ||
        cleanLink.endsWith('.json') ||
        cleanLink.endsWith('.xml') ||
        cleanLink.endsWith('.txt') ||
        cleanLink.endsWith('.pdf')
      ) {
        continue;
      }
      if (!allValidRoutes.has(cleanLink)) {
        broken.push({ file: path.relative(process.cwd(), file), link });
      }
    }
  }
}

console.log('Total valid routes known:', allValidRoutes.size);
console.log('Broken internal links count:', broken.length);
console.log('Empty or bad links count:', emptyOrBad.length);

if (broken.length > 0) {
  console.log('Broken links:', broken);
}
if (emptyOrBad.length > 0) {
  console.log('Empty or bad links:', emptyOrBad);
}
if (broken.length === 0 && emptyOrBad.length === 0) {
  console.log('SUCCESS: All internal links are 100% valid and verified!');
}
