import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from './SEO';
import Breadcrumb from './Breadcrumb';

// Clean SVG Icons
const ArrowRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7"/>
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

export default function ServiceTemplate({ service }) {
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [service?.slug]);

  if (!service) {
    return null;
  }

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services/web-development" },
    { name: service.shortName || service.title, url: service.url }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "serviceType": service.serviceType,
    "provider": {
      "@type": "Organization",
      "@id": "https://www.novadesk.site/#organization",
      "name": "NovaDesk",
      "url": "https://www.novadesk.site/"
    },
    "areaServed": ["India", "United States", "United Kingdom", "Worldwide"],
    "keywords": service.keywords,
    "description": service.serviceDescription || service.description
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": (service.faqs || []).map(faq => ({
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
        title={service.metaTitle || service.title}
        description={service.metaDescription || service.description}
        url={service.url}
        keywords={service.keywords}
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
          padding: 40px 0 60px 0;
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
          max-width: 920px;
          margin-bottom: 24px;
        }
        .nd-svc-h1 span {
          color: #2E29FF;
        }
        .nd-svc-subtext {
          font-size: 18px;
          line-height: 1.65;
          color: #4B5563;
          max-width: 760px;
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

        /* Metrics Strip */
        .nd-metrics-strip {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 20px;
          padding: 28px 36px;
          margin: 20px 0 60px 0;
        }
        .nd-metric-item {
          text-align: center;
        }
        .nd-metric-num {
          font-size: clamp(28px, 4vw, 38px);
          font-weight: 900;
          color: #2E29FF;
          letter-spacing: -1px;
          line-height: 1.1;
          margin-bottom: 6px;
        }
        .nd-metric-lbl {
          font-size: 14px;
          font-weight: 600;
          color: #64748B;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* Capabilities Grid */
        .nd-svc-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin: 50px 0 80px 0;
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
          font-size: 21px;
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
          .nd-metrics-strip { grid-template-columns: 1fr 1fr 1fr; }
        }
        @media (max-width: 640px) {
          .nd-svc-grid { grid-template-columns: 1fr; }
          .nd-process-steps-grid { grid-template-columns: 1fr; }
          .nd-metrics-strip { grid-template-columns: 1fr; gap: 16px; }
          .nd-process-box { padding: 40px 20px; }
        }
      `}</style>

      <div className="nd-svc-container">
        <Breadcrumb items={breadcrumbs} />

        {/* Hero */}
        <section className="nd-svc-hero">
          <div className="nd-svc-eyebrow">{service.eyebrow || "Engineering & Innovation"}</div>
          <h1 className="nd-svc-h1">
            {service.h1Prefix}{' '}
            <span>{service.h1Highlight}</span>{' '}
            {service.h1Suffix}
          </h1>
          <p className="nd-svc-subtext">{service.subtext}</p>
          <div className="nd-svc-cta-row">
            <Link to="/get-a-free-quote" className="nd-btn-main">
              Get a Project Estimate <ArrowRight />
            </Link>
            <Link to="/case-studies" className="nd-btn-sec">
              Explore Shipped Work
            </Link>
          </div>
        </section>

        {/* Metrics Strip */}
        {service.metrics && service.metrics.length > 0 && (
          <section className="nd-metrics-strip" aria-label="Key Performance Metrics">
            {service.metrics.map((metric, idx) => (
              <div key={idx} className="nd-metric-item">
                <div className="nd-metric-num">{metric.num}</div>
                <div className="nd-metric-lbl">{metric.lbl}</div>
              </div>
            ))}
          </section>
        )}

        {/* Capabilities */}
        <section>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#2E29FF', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
              {service.capabilitiesTag || "ENGINEERING CAPABILITIES"}
            </span>
            <h2 style={{ fontSize: '36px', fontWeight: 800, color: '#0A0A2E', marginTop: '8px' }}>
              {service.capabilitiesTitle || "Core Technical Capabilities"}
            </h2>
          </div>

          <div className="nd-svc-grid">
            {(service.capabilities || []).map((cap, idx) => (
              <div key={idx} className="nd-svc-card">
                <span className="nd-svc-card-tag">{cap.tag}</span>
                <h3>{cap.title}</h3>
                <p>{cap.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4-Step Process */}
        <section className="nd-process-box">
          <span style={{ fontSize: '11px', fontWeight: 700, color: '#00FFB2', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
            {service.processTag || "EXECUTION CADENCE"}
          </span>
          <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#ffffff', marginTop: '6px' }}>
            {service.processTitle || "How NovaDesk Ships Production Software"}
          </h2>
          
          <div className="nd-process-steps-grid">
            {(service.process || []).map((step, idx) => (
              <div key={idx} className="nd-step-card">
                <div className="nd-step-num">{step.num || `Step 0${idx + 1}`}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        {service.faqs && service.faqs.length > 0 && (
          <section className="nd-svc-faq-section">
            <div style={{ textAlign: 'center', marginBottom: '36px' }}>
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#2E29FF', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 style={{ fontSize: '34px', fontWeight: 800, color: '#0A0A2E', marginTop: '6px' }}>
                {service.faqsTitle || "Frequently Asked Questions"}
              </h2>
            </div>

            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              {service.faqs.map((faq, idx) => (
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
        )}

        {/* Interlinking Content Cluster */}
        <section className="nd-interlinks-box">
          <div className="nd-interlinks-title">Explore Related Solutions &amp; Guides</div>
          <div className="nd-interlinks-list">
            {(service.interlinks || [
              { title: "SaaS Platform Development →", url: "/services/saas-development" },
              { title: "Custom Software Engineering →", url: "/services/custom-software-development" },
              { title: "Mobile App Development →", url: "/services/mobile-app-development" },
              { title: "Full-Stack Web Engineering →", url: "/services/full-stack-development" },
              { title: "AI Development & Agents →", url: "/services/ai-development" },
              { title: "Cost Guide 2026 →", url: "/blog/how-much-does-custom-software-development-cost" }
            ]).map((link, idx) => (
              <Link key={idx} to={link.url} className="nd-interlink-pill">
                {link.title}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
