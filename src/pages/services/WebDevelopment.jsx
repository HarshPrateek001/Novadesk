import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import Breadcrumb from '../../components/Breadcrumb';

// Clean SVG Icons
const ArrowRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

const CheckCircle = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00FFB2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

const ChevronDown = ({ isOpen }) => (
  <svg 
    width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
    style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s ease' }}
    aria-hidden="true"
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

export default function WebDevelopment() {
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services/web-development" },
    { name: "Web Development", url: "/services/web-development" }
  ];

  const faqs = [
    {
      q: "What makes NovaDesk's web development services different from generic agencies?",
      a: "At NovaDesk, you work directly with senior product engineers led by founder Harsh Prateek. We don't use bloated WordPress themes or hand your project to inexperienced offshore juniors. We engineer modern, scalable web applications using Next.js, React, Node.js, and cloud backends with clickable weekly staging and complete day-one code ownership."
    },
    {
      q: "How much does custom web development cost at NovaDesk?",
      a: "Project costs depend on your technical scope: modern business websites typically range from ₹25,000 to ₹75,000, while complex custom web applications, SaaS platforms, and startup MVPs typically range from ₹1,00,000 to ₹5,00,000+ ($1,200 to $6,000+ for international clients). We operate on transparent, milestone-based sprints with zero surprise change orders."
    },
    {
      q: "How long does it take to design and launch a custom website or web app?",
      a: "Our standardized rapid production framework typically delivers a complete, production-ready web application in 3 to 6 weeks. Every Friday, you test shippable code on a private, password-protected staging URL so there are never surprises on launch day."
    },
    {
      q: "Will our website be optimized for mobile devices, accessibility, and Google SEO?",
      a: "Yes. Every web application we build adheres strictly to WCAG 2.2 AA accessibility guidelines, passes Core Web Vitals (sub-2.5s LCP), includes comprehensive JSON-LD structured data, and is engineered mobile-first across all screen viewports from 320px to 4K displays."
    },
    {
      q: "Who owns the intellectual property and code repository once the project is finished?",
      a: "You retain 100% intellectual property sovereignty from day one. All GitHub repositories, cloud infrastructure, Supabase databases, and deployment keys are provisioned directly in your company's name with clean Git commit histories."
    }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Web Development Services",
    "serviceType": "Custom Web Development & Modern Web Applications",
    "provider": {
      "@type": "Organization",
      "@id": "https://www.novadesk.site/#organization",
      "name": "NovaDesk",
      "url": "https://www.novadesk.site/"
    },
    "areaServed": ["India", "United States", "United Kingdom", "Worldwide"],
    "description": "Custom web development services for startups and established enterprises. High-performance Next.js, React, and full-stack cloud web engineering with guaranteed IP ownership."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="nd-service-page">
      <SEO 
        title="Web Development Company | Custom Web Development Services"
        description="NovaDesk is a top web development company in India building fast, accessible, high-converting websites and modern web apps for startups and global enterprises. Get a project estimate."
        url="/services/web-development"
        keywords="web development company, custom web development services, hire web developers, Next.js development, React development agency, modern website engineering India"
        schema={[serviceSchema, faqSchema]}
        breadcrumbs={breadcrumbs}
      />

      <style>{`
        .nd-service-page {
          font-family: 'Space Grotesk', sans-serif;
          color: #0A0A2E;
          background: #ffffff;
          padding-top: 100px;
        }
        .nd-svc-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }
        
        /* Hero Section */
        .nd-svc-hero {
          padding: 40px 0 80px 0;
          position: relative;
          overflow: hidden;
        }
        .nd-svc-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 700;
          color: #2E29FF;
          background: #EEF0FF;
          padding: 6px 14px;
          border-radius: 30px;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 20px;
        }
        .nd-svc-h1 {
          font-size: clamp(34px, 5vw, 56px);
          font-weight: 900;
          line-height: 1.15;
          letter-spacing: -1.5px;
          color: #0A0A2E;
          max-width: 900px;
          margin-bottom: 24px;
        }
        .nd-svc-h1 span {
          color: #2E29FF;
        }
        .nd-svc-subtext {
          font-size: 18px;
          line-height: 1.65;
          color: #4B5563;
          max-width: 720px;
          margin-bottom: 36px;
        }
        .nd-svc-cta-row {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .nd-btn-main {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 16px 36px;
          background: #2E29FF;
          color: #ffffff !important;
          border-radius: 50px;
          font-weight: 700;
          font-size: 15.5px;
          text-decoration: none;
          transition: all 0.25s ease;
          box-shadow: 0 10px 24px rgba(46, 41, 255, 0.25);
        }
        .nd-btn-main:hover {
          background: #1914b8;
          transform: translateY(-2px);
          box-shadow: 0 14px 30px rgba(46, 41, 255, 0.35);
        }
        .nd-btn-sec {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 16px 32px;
          background: #ffffff;
          color: #2E29FF !important;
          border: 1.5px solid rgba(46, 41, 255, 0.3);
          border-radius: 50px;
          font-weight: 700;
          font-size: 15.5px;
          text-decoration: none;
          transition: all 0.25s ease;
        }
        .nd-btn-sec:hover {
          background: #F4F6FF;
          border-color: #2E29FF;
        }

        /* Pillars Grid */
        .nd-svc-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin: 60px 0;
        }
        .nd-svc-card {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 20px;
          padding: 36px 28px;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .nd-svc-card:hover {
          transform: translateY(-4px);
          border-color: rgba(46, 41, 255, 0.3);
          box-shadow: 0 16px 36px rgba(46, 41, 255, 0.08);
          background: #ffffff;
        }
        .nd-svc-card-tag {
          font-size: 11px;
          font-weight: 700;
          color: #2E29FF;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 12px;
          display: block;
        }
        .nd-svc-card h3 {
          font-size: 22px;
          font-weight: 800;
          color: #0A0A2E;
          margin-bottom: 12px;
        }
        .nd-svc-card p {
          font-size: 14.5px;
          line-height: 1.6;
          color: #475569;
          margin: 0;
        }

        /* Process Steps */
        .nd-process-box {
          background: #0A0A2E;
          color: #ffffff;
          border-radius: 28px;
          padding: 60px 40px;
          margin: 80px 0;
        }
        .nd-process-steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
          margin-top: 40px;
        }
        .nd-step-card {
          border-left: 2px solid rgba(255, 255, 255, 0.2);
          padding-left: 20px;
        }
        .nd-step-num {
          font-size: 13px;
          font-weight: 800;
          color: #00FFB2;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        .nd-step-card h4 {
          font-size: 18px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 8px;
        }
        .nd-step-card p {
          font-size: 13.5px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.8);
          margin: 0;
        }

        /* FAQ Section */
        .nd-svc-faq-section {
          margin: 80px 0;
        }
        .nd-faq-item {
          border-bottom: 1px solid #E2E8F0;
          padding: 20px 0;
        }
        .nd-faq-btn {
          width: 100%;
          text-align: left;
          background: transparent;
          border: none;
          font-size: 18px;
          font-weight: 700;
          color: #0A0A2E;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          padding: 4px 0;
        }
        .nd-faq-btn:hover {
          color: #2E29FF;
        }
        .nd-faq-ans {
          font-size: 15px;
          line-height: 1.7;
          color: #475569;
          margin-top: 12px;
          max-width: 900px;
        }

        /* Interlinking strip */
        .nd-interlinks-box {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 20px;
          padding: 32px;
          margin-bottom: 80px;
        }
        .nd-interlinks-title {
          font-size: 13px;
          font-weight: 700;
          color: #2E29FF;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 16px;
        }
        .nd-interlinks-list {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }
        .nd-interlink-pill {
          background: #ffffff;
          border: 1px solid #CBD5E1;
          border-radius: 30px;
          padding: 8px 18px;
          font-size: 13.5px;
          font-weight: 600;
          color: #1E293B;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .nd-interlink-pill:hover {
          border-color: #2E29FF;
          color: #2E29FF;
          background: #EEF0FF;
        }

        @media (max-width: 1024px) {
          .nd-svc-grid { grid-template-columns: 1fr 1fr; }
          .nd-process-steps-grid { grid-template-columns: 1fr 1fr; gap: 28px; }
        }
        @media (max-width: 640px) {
          .nd-svc-grid { grid-template-columns: 1fr; }
          .nd-process-steps-grid { grid-template-columns: 1fr; }
          .nd-process-box { padding: 40px 20px; }
        }
      `}</style>

      <div className="nd-svc-container">
        <Breadcrumb items={breadcrumbs} />

        {/* Hero */}
        <section className="nd-svc-hero">
          <div className="nd-svc-eyebrow">Enterprise &amp; Startup Engineering</div>
          <h1 className="nd-svc-h1">
            Custom <span>Web Development</span> Company for High-Growth Brands
          </h1>
          <p className="nd-svc-subtext">
            We build robust, lightning-fast web applications, customer portals, and high-converting marketing engines. Senior builder execution, zero template bloat, and clickable staging deployments every 7 days.
          </p>
          <div className="nd-svc-cta-row">
            <Link to="/get-a-free-quote" className="nd-btn-main">
              Get a Project Estimate <ArrowRight />
            </Link>
            <Link to="/case-studies" className="nd-btn-sec">
              Explore Shipped Work
            </Link>
          </div>
        </section>

        {/* Pillars */}
        <section>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#2E29FF', letterSpacing: '1.5px', textTransform: 'uppercase' }}>ENGINEERING CAPABILITIES</span>
            <h2 style={{ fontSize: '36px', fontWeight: 800, color: '#0A0A2E', marginTop: '8px' }}>Web Systems Engineered for Conversion &amp; Scale</h2>
          </div>

          <div className="nd-svc-grid">
            <div className="nd-svc-card">
              <span className="nd-svc-card-tag">Frontend Excellence</span>
              <h3>React &amp; Next.js Platforms</h3>
              <p>Modern component architectures with server-side rendering (SSR), sub-second page transitions, and strict Core Web Vitals optimization.</p>
            </div>
            <div className="nd-svc-card">
              <span className="nd-svc-card-tag">Backend Resilience</span>
              <h3>Node.js &amp; Python APIs</h3>
              <p>Scalable cloud microservices, RESTful and GraphQL endpoints, robust PostgreSQL schemas, and low-latency database queries.</p>
            </div>
            <div className="nd-svc-card">
              <span className="nd-svc-card-tag">Commercial Conversion</span>
              <h3>E-Commerce &amp; Portals</h3>
              <p>High-conversion checkout flows, multi-currency payment gateway integrations (Stripe, Razorpay), customer portals, and real-time dashboards.</p>
            </div>
            <div className="nd-svc-card">
              <span className="nd-svc-card-tag">Security &amp; Performance</span>
              <h3>OWASP-Grade Web Security</h3>
              <p>Enterprise credential encryption, role-based access control (RBAC), CSRF/XSS guardrails, and automated CI/CD branch deployments.</p>
            </div>
            <div className="nd-svc-card">
              <span className="nd-svc-card-tag">Accessible Architecture</span>
              <h3>WCAG 2.2 AA Compliance</h3>
              <p>Inclusive interfaces with full keyboard navigation, screen reader compatibility, high-contrast typography, and accessible form controls.</p>
            </div>
            <div className="nd-svc-card">
              <span className="nd-svc-card-tag">Technical SEO Ready</span>
              <h3>Search &amp; AI Discoverability</h3>
              <p>Comprehensive JSON-LD structured data, canonical routing, clean URL structures, and programmatic sitemap generation for maximum visibility.</p>
            </div>
          </div>
        </section>

        {/* 4-Step Process */}
        <section className="nd-process-box">
          <span style={{ fontSize: '11px', fontWeight: 700, color: '#00FFB2', letterSpacing: '1.5px', textTransform: 'uppercase' }}>EXECUTION CADENCE</span>
          <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#ffffff', marginTop: '6px' }}>How NovaDesk Ships Production Web Software</h2>
          
          <div className="nd-process-steps-grid">
            <div className="nd-step-card">
              <div className="nd-step-num">Step 01</div>
              <h4>Architecture Discovery</h4>
              <p>We review your product requirements, user journeys, database schemas, and integration points to create a locked-scope milestone roadmap.</p>
            </div>
            <div className="nd-step-card">
              <div className="nd-step-num">Step 02</div>
              <h4>7-Day Staging Sprints</h4>
              <p>Every Friday, your code deploys to a private staging environment with an async video walkthrough showing working functionality.</p>
            </div>
            <div className="nd-step-card">
              <div className="nd-step-num">Step 03</div>
              <h4>Quality &amp; Security Audits</h4>
              <p>Automated regression testing, cross-browser compatibility across mobile and desktop, performance benchmarking, and vulnerability checks.</p>
            </div>
            <div className="nd-step-card">
              <div className="nd-step-num">Step 04</div>
              <h4>Zero-Downtime Launch &amp; Handover</h4>
              <p>Full IP handover, production DNS routing, Google Search Console indexing verification, and 30-day dedicated post-launch support.</p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="nd-svc-faq-section">
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#2E29FF', letterSpacing: '1.5px', textTransform: 'uppercase' }}>FREQUENTLY ASKED QUESTIONS</span>
            <h2 style={{ fontSize: '34px', fontWeight: 800, color: '#0A0A2E', marginTop: '6px' }}>Web Development Questions Answered</h2>
          </div>

          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            {faqs.map((faq, idx) => (
              <div key={idx} className="nd-faq-item">
                <button 
                  type="button" 
                  className="nd-faq-btn" 
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  aria-expanded={openFaq === idx}
                >
                  <span>{faq.q}</span>
                  <ChevronDown isOpen={openFaq === idx} />
                </button>
                {openFaq === idx && (
                  <p className="nd-faq-ans">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Interlinking Content Cluster */}
        <section className="nd-interlinks-box">
          <div className="nd-interlinks-title">Explore Related Solutions &amp; Guides</div>
          <div className="nd-interlinks-list">
            <Link to="/services/saas-development" className="nd-interlink-pill">SaaS Platform Development →</Link>
            <Link to="/services/custom-software-development" className="nd-interlink-pill">Custom Software Engineering →</Link>
            <Link to="/services/ecommerce-development" className="nd-interlink-pill">E-Commerce Development →</Link>
            <Link to="/services/website-maintenance" className="nd-interlink-pill">Website Maintenance →</Link>
            <Link to="/blog/how-much-does-custom-software-development-cost" className="nd-interlink-pill">Web Development Cost Guide 2026 →</Link>
            <Link to="/blog/why-startups-choose-nodejs-for-backend" className="nd-interlink-pill">Why Startups Choose Node.js →</Link>
            <Link to="/locations/kolkata" className="nd-interlink-pill">Web Development in Kolkata →</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
