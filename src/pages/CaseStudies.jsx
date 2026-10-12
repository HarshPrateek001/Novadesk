import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Breadcrumb from '../components/Breadcrumb';

const ArrowUpRight = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 17L17 7M17 7H7M17 7V17" />
  </svg>
);

const ArrowRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

export default function CaseStudies() {
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Case Studies", url: "/case-studies" }
  ];

  const cases = [
    {
      title: 'Automated Diagnostic Clinic & Telehealth Portal',
      category: 'web',
      categoryLabel: 'Healthcare Web Portal',
      desc: 'Engineered an appointment booking engine, digital report vault, and automated WhatsApp lab test delivery portal for a regional multi-center diagnostic clinic.',
      metric: 'WhatsApp PDF delivery & mobile OTP login',
      tech: ['React', 'Node.js', 'PostgreSQL', 'WhatsApp Cloud API']
    },
    {
      title: 'High-Performance Headless D2C E-Commerce Store',
      category: 'ecommerce',
      categoryLabel: 'E-Commerce Storefront',
      desc: 'Re-architected an apparel brand with a fast headless architecture, sub-second product page transitions, seamless mobile shopping cart, and one-click UPI checkout.',
      metric: 'Sub-second mobile transitions & Razorpay checkout',
      tech: ['Next.js', 'Shopify Storefront API', 'Tailwind', 'Vercel']
    },
    {
      title: 'Multi-Tenant Commercial Property SaaS Platform',
      category: 'saas',
      categoryLabel: 'SaaS Platform',
      desc: 'Engineered a commercial property management portal with lease tracking, tenant communication records, maintenance logging, and automated billing workflows.',
      metric: 'Role-based access & automated invoice generation',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe']
    },
    {
      title: 'Industrial Operations ERP & Warehouse Dispatch',
      category: 'saas',
      categoryLabel: 'Custom Operations Software',
      desc: 'Replaced manual spreadsheet operations for an industrial supply business with a unified cloud portal tracking stock inventories, batch dispatches, and GST invoicing.',
      metric: 'End-to-end stock audit trail & barcode sync',
      tech: ['React', 'FastAPI', 'PostgreSQL', 'Docker']
    },
    {
      title: 'On-Demand Route Mapping & Logistics Portal',
      category: 'mobile',
      categoryLabel: 'Logistics Application',
      desc: 'A responsive dispatch portal mapping driver routes, waypoint assignments, real-time trip status updates, and automated digital delivery acknowledgments.',
      metric: 'Live route dispatching & delivery receipt pipeline',
      tech: ['React', 'Node.js', 'Google Maps API', 'Firebase']
    },
    {
      title: 'AI-Powered Document Intelligence & Customer Desk',
      category: 'ai',
      categoryLabel: 'AI & Automation',
      desc: 'Built a context-grounded retrieval-augmented generation (RAG) assistant that parses technical product documentation and handles repetitive customer inquiries with source citations.',
      metric: 'Deterministic answers with source document citations',
      tech: ['Next.js', 'Python', 'OpenAI / Claude API', 'pgvector']
    }
  ];

  const filteredCases = filter === 'all' ? cases : cases.filter(item => item.category === filter);

  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "NovaDesk Client Case Studies & Production Portfolio",
    "description": "Real-world engineering deliveries and verified client metrics across Web Development, AI, SaaS, and Mobile applications.",
    "itemListElement": cases.map((c, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "CreativeWork",
        "name": c.title,
        "description": c.desc
      }
    }))
  };

  return (
    <div className="nd-service-page" style={{ minHeight: '100vh', paddingBottom: '80px' }}>
      <SEO 
        title="Client Case Studies & Verified Results | NovaDesk"
        description="Explore NovaDesk's real-world client case studies across custom web applications, SaaS platforms, e-commerce, and enterprise AI engineering. Verified ROI and metrics."
        url="/case-studies"
        keywords="software development case studies, web app portfolio, AI development case studies, SaaS engineering results, NovaDesk work, ecommerce case study India"
        breadcrumbs={breadcrumbs}
        schema={portfolioSchema}
      />

      {/* Hero Section */}
      <section className="nd-service-hero">
        <div className="container">
          <Breadcrumb items={breadcrumbs} />
          <div className="row align-items-center">
            <div className="col-lg-8">
              <span className="nd-service-pill">Proof of Execution</span>
              <h1 className="nd-service-h1">
                Products We Shipped That Made <span className="nd-gradient-text">Measurable Impact</span>
              </h1>
              <p className="nd-service-lead">
                We measure our engineering quality not in lines of code, but in real business outcomes: faster load times, automated workflows, and compounding customer revenue.
              </p>

              {/* Filter Tabs */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '28px' }}>
                {[
                  { id: 'all', label: 'All Projects' },
                  { id: 'ai', label: 'AI & Automation' },
                  { id: 'saas', label: 'SaaS & ERP' },
                  { id: 'ecommerce', label: 'E-Commerce' },
                  { id: 'mobile', label: 'Mobile Apps' },
                  { id: 'web', label: 'Web Platforms' }
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setFilter(cat.id)}
                    type="button"
                    aria-pressed={filter === cat.id}
                    style={{
                      padding: '8px 18px',
                      borderRadius: '9999px',
                      border: filter === cat.id ? '1px solid #2E29FF' : '1px solid rgba(255, 255, 255, 0.15)',
                      fontSize: '13px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      background: filter === cat.id ? '#2E29FF' : 'rgba(255, 255, 255, 0.04)',
                      color: filter === cat.id ? '#FFFFFF' : '#CBD5E1',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="container mt-4">
        <div className="row g-4">
          {filteredCases.map((item, idx) => (
            <div key={idx} className="col-lg-4 col-md-6">
              <div 
                className="nd-pain-card" 
                style={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'space-between',
                  padding: '32px 28px',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                    <span style={{ fontSize: '11px', color: '#00FFB2', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
                      {item.categoryLabel}
                    </span>
                    <span style={{ color: '#64748B' }}>
                      <ArrowUpRight size={18} />
                    </span>
                  </div>
                  <h2 style={{ fontSize: '1.25rem', color: '#FFFFFF', marginBottom: '12px', fontWeight: 700, lineHeight: 1.35 }}>
                    {item.title}
                  </h2>
                  <p style={{ color: '#A0AEC0', fontSize: '14px', lineHeight: 1.6, marginBottom: '20px' }}>
                    {item.desc}
                  </p>
                </div>

                <div>
                  {/* Tech Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                    {item.tech.map((t, i) => (
                      <span 
                        key={i} 
                        style={{ 
                          fontSize: '11px', 
                          padding: '3px 8px', 
                          borderRadius: '6px', 
                          background: 'rgba(46, 41, 255, 0.1)', 
                          color: '#C0BFFF', 
                          border: '1px solid rgba(46, 41, 255, 0.2)' 
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Highlight Metric */}
                  <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <span style={{ fontSize: '10px', color: '#718096', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '2px' }}>
                        KEY OUTCOME
                      </span>
                      <strong style={{ fontSize: '15px', color: '#00FFB2' }}>
                        {item.metric}
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Conversion Box */}
        <div className="nd-service-cta-banner mt-5">
          <div className="nd-cta-box text-center">
            <h2>Ready to Ship Your Product with Proven Engineers?</h2>
            <p>Tell us about your project vision, timeline, and goals. We will provide a transparent scope breakdown and milestone estimate within 24 hours.</p>
            <div className="nd-service-cta-group justify-content-center">
              <Link to="/get-a-free-quote" className="nd-btn-primary">
                Get a Free Quote <ArrowRight />
              </Link>
              <a 
                href="https://calendly.com/itsharshprateek/30min" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="nd-btn-outline"
              >
                Book Founder Strategy Call
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
