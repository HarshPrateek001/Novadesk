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
  /<h1 className="nd-h1">India's Premier<\/h1>\s*<h2 className="nd-h1-blue">Full-Stack &amp; AI Studio<\/h2>\s*<p className="nd-subtext">\s*Partner with top-tier developers to build scalable custom web apps, mobile solutions, SaaS platforms, and enterprise AI software\. We turn your vision into high-performance digital products\.\s*<\/p>\s*<p className="nd-subtext-sm">\s*Trusted by early-stage founders and venture-backed teams\. Hire expert offshore developers from India for high-quality engineering\.\s*<\/p>/s,
  `<h1 className="nd-h1" style={{ fontSize: '50px' }}>Custom Software & AI Products,<br/>Built by the Person Who Actually Codes It</h1>
              <p className="nd-subtext">
                NovaDesk designs and builds web apps, mobile apps, SaaS platforms and AI-integrated products for founders and growing businesses. No account managers, no handoffs — you work directly with the engineer building your product, and see a working demo every week.
              </p>`
);

// 5. Hero CTA
homeContent = homeContent.replace(
  /<div className="nd-cta-row">\s*<Link to="\/contact-us" className="nd-btn-primary">Book a Free 30-Min Call ↗<\/Link>\s*<\/div>/s,
  `<div className="nd-cta-row" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link to="/contact-us" className="nd-btn-primary">Book a Free 30-Min Discovery Call &rarr;</Link>
                <a href="#portfolio" className="nd-btn-secondary" style={{ padding: '16px 32px', background: 'transparent', color: '#0A0A2E', border: '1px solid #0A0A2E', borderRadius: '50px', fontWeight: '600', textDecoration: 'none' }}>See Recent Work &darr;</a>
              </div>`
);

// 6. Trust Line
homeContent = homeContent.replace(
  /Trusted by 1,250\+ Businesses Globally/g,
  `⭐⭐⭐⭐⭐ Founder-reviewed on LinkedIn · 12 projects shipped since 2024`
);

// 7. Trust Marquee
homeContent = homeContent.replace(
  /<span>✦ NEXT\.JS DEVELOPMENT<\/span>.*?<span>✦ WEEKLY WORKABLE MILESTONES<\/span>/gs,
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
  /Direct access to a premier team of developers who build, test, and ship at startup speed — no account-manager layer, just the person who writes the code\./s,
  `Direct access to a full-stack + AI builder. Weekly workable milestones, no account-manager layer, no junior handoffs — the same person who scopes your project writes the code and ships it.`
);

// The stats inside nd-intro-stats
homeContent = homeContent.replace(
  /<div className="nd-intro-stat-num">500<sub>\+<\/sub><\/div>\s*<div className="nd-intro-stat-label">Projects Shipped<\/div>/s,
  `<div className="nd-intro-stat-num">12</div>
                <div className="nd-intro-stat-label">Projects Shipped</div>`
);
homeContent = homeContent.replace(
  /<div className="nd-intro-stat-num">50<sub>\+<\/sub><\/div>\s*<div className="nd-intro-stat-label">Countries Served<\/div>/s,
  `<div className="nd-intro-stat-num">7</div>
                <div className="nd-intro-stat-label">Days to First Milestone</div>`
);
homeContent = homeContent.replace(
  /<div className="nd-intro-stat-num">14<sub>\+<\/sub><\/div>\s*<div className="nd-intro-stat-label">Years of Experience<\/div>/s,
  `<div className="nd-intro-stat-num">100<sub>%</sub></div>
                <div className="nd-intro-stat-label">Developer Ownership</div>`
);

// There's another version of stats (from a different edit) just in case
homeContent = homeContent.replace(
  /<div className="nd-intro-stat-num">3<sub>\+<\/sub><\/div>\s*<div className="nd-intro-stat-label">Products Shipped<\/div>/s,
  `<div className="nd-intro-stat-num">12</div>
                <div className="nd-intro-stat-label">Projects Shipped</div>`
);
homeContent = homeContent.replace(
  /<div className="nd-intro-stat-num">7<sub>day<\/sub><\/div>\s*<div className="nd-intro-stat-label">To First Milestone<\/div>/s,
  `<div className="nd-intro-stat-num">7</div>
                <div className="nd-intro-stat-label">Days to First Milestone</div>`
);
homeContent = homeContent.replace(
  /<div className="nd-intro-stat-num">1<sub>dev<\/sub><\/div>\s*<div className="nd-intro-stat-label">Full Ownership<\/div>/s,
  `<div className="nd-intro-stat-num">100<sub>%</sub></div>
                <div className="nd-intro-stat-label">Developer Ownership</div>`
);


// 9. Recent Projects
homeContent = homeContent.replace(
  /<h3 className="nd-portfolio-title">Fintech Dashboard<\/h3>\s*<p className="nd-portfolio-desc">A real-time analytics and trading dashboard built for a rapidly growing fintech startup to manage digital assets\.<\/p>\s*<div className="nd-portfolio-tech">\s*<span>Next\.js<\/span>\s*<span>FastAPI<\/span>\s*<span>PostgreSQL<\/span>\s*<\/div>/s,
  `<h3 className="nd-portfolio-title">Fintech Analytics Dashboard</h3>
                  <p className="nd-portfolio-desc"><b>Problem:</b> Legacy data systems causing hours of manual reporting.<br/><b>Built:</b> Real-time dashboard with direct data integrations.<br/><b>Result:</b> Cut manual reporting time from 3 hours to 5 minutes.</p>
                  <div className="nd-portfolio-tech">
                    <span>Next.js</span>
                    <span>FastAPI</span>
                    <span>PostgreSQL</span>
                  </div>`
);
homeContent = homeContent.replace(
  /<h3 className="nd-portfolio-title">Global eCommerce Platform<\/h3>\s*<p className="nd-portfolio-desc">A high-conversion headless eCommerce storefront scaling seamlessly to handle \$2M\+ in monthly transactions\.<\/p>\s*<div className="nd-portfolio-tech">\s*<span>Shopify Plus<\/span>\s*<span>React<\/span>\s*<span>Node\.js<\/span>\s*<\/div>/s,
  `<h3 className="nd-portfolio-title">E-commerce Vendor Portal</h3>
                  <p className="nd-portfolio-desc"><b>Problem:</b> Vendors had no visibility into inventory.<br/><b>Built:</b> Multi-tenant SaaS storefront & inventory system.<br/><b>Result:</b> Onboarded 50+ vendors in the first month.</p>
                  <div className="nd-portfolio-tech">
                    <span>React</span>
                    <span>Supabase</span>
                    <span>Tailwind</span>
                  </div>`
);
homeContent = homeContent.replace(
  /<h3 className="nd-portfolio-title">Generative AI SaaS<\/h3>\s*<p className="nd-portfolio-desc">An AI-powered content generation suite seamlessly integrated with major LLM APIs for automated marketing\.<\/p>\s*<div className="nd-portfolio-tech">\s*<span>OpenAI<\/span>\s*<span>Supabase<\/span>\s*<span>Next\.js<\/span>\s*<\/div>/s,
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
  /NOVADESK is a dedicated software and AI development studio helping startups and growing businesses turn ideas into scalable digital products\./g,
  `Software Development: We build custom software — SaaS platforms, ERP systems, internal CRM databases, and enterprise integrations — mapped to your exact product requirements. Serving startups and enterprises across India, the US and the UK.`
);
homeContent = homeContent.replace(
  /From custom software development and mobile apps to generative AI solutions and enterprise platforms, we cover every layer of the product design, development, QA, and deployment so you get one reliable partner from idea to launch\./g,
  ``
);

// 11. CTA Banner
homeContent = homeContent.replace(
  /Explore Our Exceptional Services!/g,
  `Ready to see working software in your first week?`
);

// 12. Process Section - Add 5th column
homeContent = homeContent.replace(
  /grid-template-columns:repeat\(4, 1fr\)/g,
  `grid-template-columns:repeat(5, 1fr)`
);

const step5 = `
              {/* Step 5 */}
              <div className="nd-step">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px' }}>
                  <h3 style={{ margin: 0, fontSize: '20px', fontWeight: '800', color: '#ffffff' }}>Support<br />&amp; Handover</h3>
                  <div className="nd-step-badge">05</div>
                </div>
                <ul className="nd-step-list">
                  <li>Full source code handover.</li>
                  <li>No vendor lock-in.</li>
                  <li>Documentation provided.</li>
                  <li>Post-launch support window included.</li>
                  <li>Optional maintenance available.</li>
                  <li>Seamless transition to your in-house team.</li>
                </ul>
              </div>`;

homeContent = homeContent.replace(
  /<\/ul>\s*<\/div>\s*<\/div>\s*{\/\* Section footer profile & CTA \*\/}/s,
  `</ul>
              </div>
${step5}
            </div>

            {/* Section footer profile & CTA */}`
);

// 13. Recognized For Building -> Tools & Platforms We Work With
homeContent = homeContent.replace(
  /<h2 className="nd-recognized-title">Recognized For Building Products That Move The Needle<\/h2>\s*<p className="nd-recognized-sub">\s*Our work building custom products and AI features has earned recognition from leading technology, business, and startup platforms across India, the US, the UK, and beyond\.\s*<\/p>\s*<div className="nd-featured-network">.*?<\/div>/s,
  `<h2 className="nd-recognized-title">Tools & Platforms We Work With</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', marginTop: '40px' }}>
              {['Vercel', 'Supabase', 'Anthropic / Claude', 'OpenAI', 'Stripe', 'AWS'].map((tool, i) => (
                <div key={i} className="nd-network-card" style={{ position: 'relative', margin: 0, transform: 'none', background: '#F8F9FF', border: '1px solid #E2E8F0', padding: '16px 32px', borderRadius: '50px', fontSize: '18px', fontWeight: 'bold', color: '#0A0A2E' }}>
                  {tool}
                </div>
              ))}
            </div>`
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

fs.writeFileSync(footerPath, footerContent);

console.log('Update complete.');
