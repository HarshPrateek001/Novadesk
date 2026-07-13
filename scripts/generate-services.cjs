const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, 'services-data.json');
const templateFile = path.join(__dirname, '../src/pages/services/FullStackDevelopment.jsx');
const outputDir = path.join(__dirname, '../src/pages/services/');

const services = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
let templateStr = fs.readFileSync(templateFile, 'utf8');

// Replace specific hardcoded text in FullStack template with placeholders for easy string replacement
templateStr = templateStr.replace(/export default function FullStackDevelopment/g, 'export default function __COMPONENT_NAME__');
templateStr = templateStr.replace(/Full-Stack Web Development Services/g, '__SEO_TITLE__');
templateStr = templateStr.replace(/Custom full-stack web application development using Next.js, FastAPI & Supabase. From MVP to production — built and shipped by one developer. Get a free quote./g, '__SEO_DESC__');
templateStr = templateStr.replace(/full-stack web development, Next.js developer, FastAPI development, Supabase, web app MVP, custom software development/g, '__SEO_KEYWORDS__');
templateStr = templateStr.replace(/\/services\/full-stack-development/g, '__URL_SLUG__');

// Replace H1 Title
templateStr = templateStr.replace(/<h1 className="fs-hero-title">Full Stack<\/h1>\s*<span className="fs-hero-title-blue">Development Services<\/span>/g, '<h1 className="fs-hero-title">__HERO_H1__</h1>\n              <span className="fs-hero-title-blue">__HERO_BLUE__</span>');

// Replace Hero Desc
templateStr = templateStr.replace(/EngineerBabu delivers scalable full stack development services backed by strict NDA protocols, ISO-compliant delivery, and enterprise-grade infrastructure. From UI to DevOps, every project is secured, owned, and sprint-driven./g, '__HERO_DESC__');

// Replace Top Ticker Tech
templateStr = templateStr.replace(/<span>✦ NEXT.JS DEVELOPMENT<\/span>\s*<span>✦ FASTAPI \+ PYTHON<\/span>\s*<span>✦ SUPABASE \+ POSTGRESQL<\/span>\s*<span>✦ GENERATIVE AI & LLMS<\/span>\s*<span>✦ CHATBOTS & AGENTS<\/span>\s*<span>✦ MOBILE FLUTTER APPS<\/span>/g, '__TICKER_ITEMS__');

// Replace Expertise H2
templateStr = templateStr.replace(/<h2>What's Included in Our Full Stack Services<\/h2>/g, '<h2>__EXPERTISE_H2__</h2>');
templateStr = templateStr.replace(/From core UI\/UX to robust backend systems and modern AI integrations, EngineerBabu's full stack development services cover every layer of your product with modular engineering./g, '__EXPERTISE_DESC__');

// Replace API CTA H2
templateStr = templateStr.replace(/<h2>Build Smarter With Our API<br\/>Development Services<\/h2>/g, '<h2>__API_CTA_H2__</h2>');
templateStr = templateStr.replace(/Let's create APIs that simplify scale. Partner with a trusted API Development Company that understands speed, security, and clean documentation./g, '__API_CTA_DESC__');

// Process
templateStr = templateStr.replace(/<h2>Inside Our Full Stack<br\/>Development Process<\/h2>/g, '<h2>__PROCESS_H2__</h2>');

// Schema & FAQs
// We will replace the entire faqs array in the template
const faqRegex = /const faqs = \[[\s\S]*?\];/;
const newFaqStr = `const faqs = __FAQS_JSON__;`;
templateStr = templateStr.replace(faqRegex, newFaqStr);


services.forEach(service => {
    let fileStr = templateStr;
    
    fileStr = fileStr.replace(/__COMPONENT_NAME__/g, service.componentName);
    fileStr = fileStr.replace(/__SEO_TITLE__/g, service.seoTitle);
    fileStr = fileStr.replace(/__SEO_DESC__/g, service.seoDesc);
    fileStr = fileStr.replace(/__SEO_KEYWORDS__/g, service.seoKeywords);
    fileStr = fileStr.replace(/__URL_SLUG__/g, `/services/${service.slug}`);
    
    fileStr = fileStr.replace(/__HERO_H1__/g, service.heroH1);
    fileStr = fileStr.replace(/__HERO_BLUE__/g, service.heroBlue);
    fileStr = fileStr.replace(/__HERO_DESC__/g, service.heroDesc);
    
    const tickerHtml = service.tickerItems.map(item => `<span>✦ ${item}</span>`).join('\\n                    ');
    fileStr = fileStr.replace(/__TICKER_ITEMS__/g, tickerHtml);
    
    fileStr = fileStr.replace(/__EXPERTISE_H2__/g, service.expertiseH2);
    fileStr = fileStr.replace(/__EXPERTISE_DESC__/g, service.expertiseDesc);
    
    fileStr = fileStr.replace(/__API_CTA_H2__/g, service.apiCtaH2);
    fileStr = fileStr.replace(/__API_CTA_DESC__/g, service.apiCtaDesc);
    
    fileStr = fileStr.replace(/__PROCESS_H2__/g, service.processH2);
    
    const faqsJson = JSON.stringify(service.faqs, null, 4);
    fileStr = fileStr.replace(/__FAQS_JSON__/g, faqsJson);
    
    const outputPath = path.join(outputDir, `${service.componentName}.jsx`);
    
    // Don't overwrite FullStackDevelopment if it's the template
    if (service.componentName !== 'FullStackDevelopment' && service.componentName !== 'ReactJsDevelopment' && service.componentName !== 'WebApplicationDevelopment') {
        fs.writeFileSync(outputPath, fileStr, 'utf8');
        console.log(`Generated: ${outputPath}`);
    }
});

console.log('All pages generated successfully.');
