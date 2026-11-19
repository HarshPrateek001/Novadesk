const fs = require('fs');
const path = require('path');

// 1. Check servicesData
const servicesDataRaw = fs.readFileSync('src/data/servicesData.js', 'utf8');
// Check all 21 service configs
const serviceIds = [...servicesDataRaw.matchAll(/id:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
console.log('Services in servicesData:', serviceIds.length);

// 2. Check standalone pages
const standalonePages = [
  'src/pages/Home.jsx',
  'src/pages/AboutUs.jsx',
  'src/pages/CaseStudies.jsx',
  'src/pages/CaseStudyDetail.jsx',
  'src/pages/ContactUs.jsx',
  'src/pages/ForgeAI.jsx',
  'src/pages/GetAFreeQuote.jsx',
  'src/pages/PrivacyPolicy.jsx',
  'src/pages/TermsConditions.jsx',
  'src/pages/blog/BlogListPage.jsx',
  'src/pages/blog/BlogPostPage.jsx',
  'src/pages/industries/Fintech.jsx',
  'src/pages/industries/IndustryPage.jsx',
  'src/pages/services/WebDevelopment.jsx',
  'src/pages/services/AiDevelopment.jsx',
  'src/pages/services/EcommerceDevelopment.jsx',
  'src/pages/services/UiUxDesign.jsx',
  'src/pages/services/SeoServices.jsx',
  'src/pages/services/WebsiteMaintenance.jsx',
  'src/pages/services/ChatbotDevelopment.jsx',
  'src/pages/services/GenAiDevelopment.jsx',
  'src/pages/services/AiIntegratedSoftware.jsx',
  'src/pages/services/ConversationalAi.jsx',
  'src/pages/services/WebApplicationDevelopment.jsx'
];

let issues = 0;

for (const p of standalonePages) {
  if (!fs.existsSync(p)) {
    console.error('Missing file:', p);
    issues++;
    continue;
  }
  const content = fs.readFileSync(p, 'utf8');
  const hasSeo = content.includes('<SEO') || content.includes('<Helmet');
  if (!hasSeo) {
    console.error('Missing SEO/Helmet:', p);
    issues++;
  }
}

console.log('Standalone pages checked:', standalonePages.length);
if (issues === 0) {
  console.log('SUCCESS: All standalone pages render SEO metadata!');
} else {
  console.log(`Found ${issues} issues.`);
}
