const fs = require('fs');

const homePath = 'd:\\Personal\\Agency\\NOVADESK\\src\\pages\\Home.jsx';
const footerPath = 'd:\\Personal\\Agency\\NOVADESK\\src\\components\\Footer.jsx';

let homeContent = fs.readFileSync(homePath, 'utf8');
let footerContent = fs.readFileSync(footerPath, 'utf8');

// 1. SEO
homeContent = homeContent.replace(
  /title="India's Premier Custom Software & AI Development Studio"/g,
  `title="NovaDesk — Custom Software, Web App & AI Development Studio | India"`
);
homeContent = homeContent.replace(
  /description="Partner with Novadesk.*?enterprise AI software."/s,
  `description="NovaDesk builds custom web apps, mobile apps, SaaS platforms and AI features for founders and growing businesses. Direct access to the person building your product — weekly working demos, fixed scope, no account-manager layers."`
);
homeContent = homeContent.replace(
  /keywords="Top software development agency in India.*?Novadesk"/s,
  `keywords="custom software development agency India, AI development studio, MVP development company, SaaS development agency India, full-stack development studio"`
);

// 2. JSON-LD Schema
homeContent = homeContent.replace(
  /const jsonLdSchema = \[.*?\];/s,
  `const jsonLdSchema = [
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "ProfessionalService",
          "@id": "https://www.novadesk.site/#organization",
          "name": "NovaDesk",
          "url": "https://www.novadesk.site/",
          "logo": "https://www.novadesk.site/favicon.svg",
          "image": "https://www.novadesk.site/og-image.png",
          "description": "NovaDesk is a founder-led software development studio building custom web apps, mobile apps, SaaS platforms and AI-integrated products for startups and growing businesses.",
          "founder": {
            "@type": "Person",
            "name": "Harsh Prateek",
            "jobTitle": "Founder & Lead Engineer"
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Muzaffarpur",
            "addressRegion": "Bihar",
            "addressCountry": "IN"
          },
          "areaServed": ["IN", "US", "GB", "AE"],
          "priceRange": "$$",
          "telephone": "+91-7870142813",
          "email": "novadesk.site@gmail.com",
          "sameAs": [
            "https://www.linkedin.com/company/nexvant-solutions/",
            "https://www.instagram.com/novadesk_officials_?igsh=MW5yZGtrbzg5aXNscg==",
            "https://www.facebook.com/share/1BfvnjhFV9/",
            "https://github.com/novadesksite-001"
          ],
          "knowsAbout": ["Web Development", "Mobile App Development", "AI Integration", "SaaS Development", "Next.js", "FastAPI", "Supabase"]
        },
        {
          "@type": "WebSite",
          "@id": "https://www.novadesk.site/#website",
          "url": "https://www.novadesk.site/",
          "name": "NovaDesk",
          "publisher": { "@id": "https://www.novadesk.site/#organization" }
        },
        {
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.a
            }
          }))
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.novadesk.site/" }
          ]
        }
      ]
    }
  ];`
);

// 3. Top Announcement Bar & Hero Eyebrow
homeContent = homeContent.replace(
  /<section className="nd-hero">/s,
  `<div style={{ background: '#0A0A2E', color: 'white', textAlign: 'center', padding: '12px', fontSize: '14px', fontWeight: '500' }}>
        🚀 Founder-led software studio — direct access to the person writing your code
      </div>
      <section className="nd-hero">`
);
homeContent = homeContent.replace(
  /TOP SOFTWARE DEVELOPMENT AGENCY IN INDIA/g,
  `FULL-STACK + AI DEVELOPMENT STUDIO`
);

// 4. Hero H1 and Subheading
homeContent = homeContent.replace(
  /<h1 className="nd-h1">India's Premier<\/h1>\s*<h2 className="nd-h2">Custom Software & AI<\/h2>/s,
  `<h1 className="nd-h1" style={{ fontSize: '50px' }}>Custom Software & AI Products,<br/>Built by the Person Who Actually Codes It</h1>`
);
homeContent = homeContent.replace(
  /Partner with Novadesk, India's leading software development agency.*?enterprise AI software\./s,
  `NovaDesk designs and builds web apps, mobile apps, SaaS platforms and AI-integrated products for founders and growing businesses. No account managers, no handoffs — you work directly with the engineer building your product, and see a working demo every week.`
);

// 5. Hero CTA
homeContent = homeContent.replace(
  /<Link to="\/contact-us" className="nd-btn-primary">Book a Free 30-Min Discovery Call &rarr;<\/Link>/g,
  `<Link to="/contact-us" className="nd-btn-primary">Book a Free 30-Min Discovery Call &rarr;</Link>
                <a href="#portfolio" className="nd-btn-secondary" style={{ padding: '16px 32px', background: 'transparent', color: '#0A0A2E', border: '1px solid #0A0A2E', borderRadius: '50px', fontWeight: '600', textDecoration: 'none' }}>See Recent Work &darr;</a>`
);
homeContent = homeContent.replace(
  /<div className="nd-cta-group">/g,
  `<div className="nd-cta-group" style={{ display: 'flex', gap: '16px' }}>`
);

// 6. Trust Line
homeContent = homeContent.replace(
  /⭐⭐⭐⭐⭐ Recognized by Google Accelerator · 1,250\+ Businesses Globally/g,
  `⭐⭐⭐⭐⭐ Founder-reviewed on LinkedIn · 12 projects shipped since 2024`
);

// 7. Trust Marquee
homeContent = homeContent.replace(
  /<span>✦ NEXT\.JS DEVELOPMENT<\/span>.*?<span>✦ CUSTOM SOFTWARE<\/span>/gs,
  `<span>✦ WEEKLY WORKABLE MILESTONES</span>
                    <span>✦ FIXED-SCOPE CONTRACTS</span>
                    <span>✦ NEXT.JS DEVELOPMENT</span>
                    <span>✦ FASTAPI + PYTHON</span>
                    <span>✦ SUPABASE + POSTGRESQL</span>
                    <span>✦ POST-LAUNCH SUPPORT INCLUDED</span>`
);

// 8. "Built for founders..." Stats
homeContent = homeContent.replace(
  /Built for founders who are <em>tired of agency theater<\/em>/g,
  `Built for Founders Who Are <em>Tired of Agency Theater</em>`
);
homeContent = homeContent.replace(
  /Direct access to a premier team.*?writes the code\./s,
  `Direct access to a full-stack + AI builder. Weekly workable milestones, no account-manager layer, no junior handoffs — the same person who scopes your project writes the code and ships it.`
);
homeContent = homeContent.replace(
  /<div className="nd-intro-stat-num">500\+<\/div>\s*<div className="nd-intro-stat-label">Projects Shipped<\/div>/s,
  `<div className="nd-intro-stat-num">12</div>
              <div className="nd-intro-stat-label">Projects Shipped</div>`
);
homeContent = homeContent.replace(
  /<div className="nd-intro-stat-num">50\+<\/div>\s*<div className="nd-intro-stat-label">Countries Served<\/div>/s,
  `<div className="nd-intro-stat-num">7</div>
              <div className="nd-intro-stat-label">Days to First Milestone</div>`
);
homeContent = homeContent.replace(
  /<div className="nd-intro-stat-num">14<sub>\+<\/sub><\/div>\s*<div className="nd-intro-stat-label">Years of Experience<\/div>/s,
  `<div className="nd-intro-stat-num">100<sub>%</sub></div>
              <div className="nd-intro-stat-label">Developer Ownership</div>`
);

// 9. Recent Projects
homeContent = homeContent.replace(
  /<h3 className="nd-portfolio-title">AI Powered Support Bot<\/h3>\s*<p className="nd-portfolio-desc">A highly intelligent Gen-AI assistant trained on enterprise data to resolve 80% of tier-1 support queries automatically.<\/p>\s*<div className="nd-portfolio-tech">\s*<span>React<\/span>\s*<span>Python<\/span>\s*<span>OpenAI<\/span>\s*<\/div>/s,
  `<h3 className="nd-portfolio-title">Fintech Analytics Dashboard</h3>
                  <p className="nd-portfolio-desc"><b>Problem:</b> Legacy data systems causing hours of manual reporting.<br/><b>Built:</b> Real-time dashboard with direct data integrations.<br/><b>Result:</b> Cut manual reporting time from 3 hours to 5 minutes.</p>
                  <div className="nd-portfolio-tech">
                    <span>Next.js</span>
                    <span>FastAPI</span>
                    <span>PostgreSQL</span>
                  </div>`
);
homeContent = homeContent.replace(
  /<h3 className="nd-portfolio-title">Fintech Banking Dashboard<\/h3>\s*<p className="nd-portfolio-desc">A highly scalable web portal handling millions of daily transactions, featuring custom charts, deep analytics, and sub-second load times.<\/p>\s*<div className="nd-portfolio-tech">\s*<span>Next\.js<\/span>\s*<span>Node\.js<\/span>\s*<span>PostgreSQL<\/span>\s*<\/div>/s,
  `<h3 className="nd-portfolio-title">E-commerce Vendor Portal</h3>
                  <p className="nd-portfolio-desc"><b>Problem:</b> Vendors had no visibility into inventory.<br/><b>Built:</b> Multi-tenant SaaS storefront & inventory system.<br/><b>Result:</b> Onboarded 50+ vendors in the first month.</p>
                  <div className="nd-portfolio-tech">
                    <span>React</span>
                    <span>Supabase</span>
                    <span>Tailwind</span>
                  </div>`
);
homeContent = homeContent.replace(
  /<h3 className="nd-portfolio-title">Telemedicine App MVP<\/h3>\s*<p className="nd-portfolio-desc">A rapid HIPAA-compliant MVP for a healthcare startup allowing seamless video consultations, digital prescriptions, and EHR integrations.<\/p>\s*<div className="nd-portfolio-tech">\s*<span>React Native<\/span>\s*<span>AWS<\/span>\s*<span>WebRTC<\/span>\s*<\/div>/s,
  `<h3 className="nd-portfolio-title">AI Support Automation</h3>
                  <p className="nd-portfolio-desc"><b>Problem:</b> Support tickets overwhelming a small team.<br/><b>Built:</b> Custom RAG chatbot trained on company knowledgebase.<br/><b>Result:</b> Resolved 60% of tier-1 tickets instantly without human intervention.</p>
                  <div className="nd-portfolio-tech">
                    <span>Python</span>
                    <span>OpenAI</span>
                    <span>LangChain</span>
                  </div>`
);

// 10. Services Section - Update text under panels
homeContent = homeContent.replace(
  /Clean architecture, fast load times, and custom content management solutions\. We build highly responsive and reliable websites suited for content and logic-heavy applications\./g,
  `We build custom software — SaaS platforms, ERP systems, internal CRM databases, and enterprise integrations — mapped to your exact product requirements. Serving startups and enterprises across India, the US and the UK.`
);

// 11. CTA Banner
homeContent = homeContent.replace(
  /Ready to discuss your software project\?/g,
  `Ready to see working software in your first week?`
);

// 12. Process Section - Add 5th column
homeContent = homeContent.replace(
  /grid-template-columns:repeat\(4, 1fr\)/g,
  `grid-template-columns:repeat(5, 1fr)`
);
homeContent = homeContent.replace(
  /<div className="nd-step-card">\s*<div className="nd-step-icon"><IconLaunch \/><\/div>\s*<div className="nd-step-num">04<\/div>\s*<h4>Launch & Scale<\/h4>\s*<p>Deploy to production with post-launch analytics and scalable infrastructure.<\/p>\s*<\/div>/s,
  `<div className="nd-step-card">
              <div className="nd-step-icon"><IconLaunch /></div>
              <div className="nd-step-num">04</div>
              <h4>Launch & Scale</h4>
              <p>Deploy to production with post-launch analytics and scalable infrastructure.</p>
            </div>
            <div className="nd-step-card">
              <div className="nd-step-icon"><IconSupport /></div>
              <div className="nd-step-num">05</div>
              <h4>Support & Handover</h4>
              <p>Full source code handover and a defined post-launch support window.</p>
            </div>`
);
// Import IconSupport if needed
if (!homeContent.includes('IconSupport')) {
  homeContent = homeContent.replace(
    /const IconLaunch = .*?<\/svg>\);/s,
    `$&
const IconSupport = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>);`
  );
}

// 13. Recognized For Building -> Tools & Platforms We Work With
homeContent = homeContent.replace(
  /<h2 className="nd-recognized-title">Recognized For Building Products That Move The Needle<\/h2>/g,
  `<h2 className="nd-recognized-title">Tools & Platforms We Work With</h2>`
);
homeContent = homeContent.replace(
  /<div className="nd-recognized-card">.*?<\/div>\s*<div className="nd-recognized-card">.*?<\/div>\s*<div className="nd-recognized-card">.*?<\/div>\s*<div className="nd-recognized-card">.*?<\/div>\s*<div className="nd-recognized-card">.*?<\/div>\s*<div className="nd-recognized-card">.*?<\/div>/s,
  `<div className="nd-recognized-card" style={{fontSize: '20px', fontWeight: 'bold'}}>Vercel</div>
          <div className="nd-recognized-card" style={{fontSize: '20px', fontWeight: 'bold'}}>Supabase</div>
          <div className="nd-recognized-card" style={{fontSize: '20px', fontWeight: 'bold'}}>Anthropic / Claude</div>
          <div className="nd-recognized-card" style={{fontSize: '20px', fontWeight: 'bold'}}>OpenAI</div>
          <div className="nd-recognized-card" style={{fontSize: '20px', fontWeight: 'bold'}}>Stripe</div>
          <div className="nd-recognized-card" style={{fontSize: '20px', fontWeight: 'bold'}}>AWS</div>`
);

// 14. FAQs
homeContent = homeContent.replace(
  /const faqs = \[/g,
  `const faqs = [
    { q: 'Can you work with my existing developer/team?', a: 'Yes, I am comfortable collaborating with existing teams or taking over existing codebases assuming they follow modern practices.' },
    { q: 'What if I need changes after the scope is agreed?', a: 'We have a structured Change Request process. Minor tweaks are often absorbed, while major feature additions are scoped and quoted separately so you always know the cost upfront.' },`
);

fs.writeFileSync(homePath, homeContent);

// 15. Footer updates
footerContent = footerContent.replace(
  /Proudly Serving Clients Across India/g,
  `Serving clients across India, US, UK, UAE`
);
// Keep the cities string but remove the vague wording. Actually the prompt says:
// "Serving clients across India, US, UK, UAE" (or wherever accurate) instead of vague "Proudly Serving Clients Across India"

fs.writeFileSync(footerPath, footerContent);

console.log('Update complete.');
