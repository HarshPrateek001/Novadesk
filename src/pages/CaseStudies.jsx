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
      title: 'AI Automated Customer Support Desk',
      category: 'ai',
      categoryLabel: 'AI & GenAI',
      desc: 'Built an enterprise RAG-powered conversational AI desk for a leading telecom enterprise, resolving 78% of incoming L1 support inquiries automatically with zero human intervention.',
      metric: '78% Auto-resolution rate',
      tech: ['Next.js', 'Python', 'LangChain', 'pgvector']
    },
    {
      title: 'Multi-Tenant PropTech SaaS Marketplace',
      category: 'saas',
      categoryLabel: 'SaaS Platform',
      desc: 'Engineered a next-gen property portal with smart recommendations, online booking deposits, virtual tour embeds, and automated owner background vetting workflows.',
      metric: '$40M+ Gross booking volume',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe']
    },
    {
      title: 'On-Demand Logistics & Delivery App',
      category: 'mobile',
      categoryLabel: 'Mobile App',
      desc: 'A robust cross-platform mobile application mapping real-time driver routes, live GPS telemetry, route-optimization algorithms, and instant UPI digital payouts.',
      metric: '120k+ Daily completed trips',
      tech: ['React Native', 'Firebase', 'Google Maps API']
    },
    {
      title: 'High-Volume Headless D2C E-Commerce Store',
      category: 'ecommerce',
      categoryLabel: 'E-Commerce',
      desc: 'Re-architected an omnichannel retail brand from monolithic WooCommerce to a headless Shopify storefront, dropping page load times from 4.8s to 0.9s and boosting checkout conversions.',
      metric: '+43% Conversion uplift',
      tech: ['Shopify Storefront API', 'Next.js', 'Tailwind', 'Vercel']
    },
    {
      title: 'Industrial Manufacturing ERP & Stock System',
      category: 'saas',
      categoryLabel: 'Enterprise ERP',
      desc: 'Replaced disjointed Excel sheets for an industrial manufacturing plant with a custom cloud ERP tracking raw materials, warehouse batch dispatches, and automated GST billing.',
      metric: '60% Admin time saved',
      tech: ['React', 'FastAPI', 'PostgreSQL', 'Docker']
    },
    {
      title: 'Automated Diagnostic Clinic & Telehealth Portal',
      category: 'web',
      categoryLabel: 'Web Platform',
      desc: 'Engineered an appointment booking engine, digital prescription vault, and automated WhatsApp lab test delivery portal for a multi-center healthcare diagnostic chain.',
      metric: '25,000+ Monthly patients',
      tech: ['Next.js', 'Supabase', 'WhatsApp Cloud API']
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
                href="https://calendly.com/harshprateek001/30min" 
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
