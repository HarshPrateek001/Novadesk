import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import Breadcrumb from '../../components/Breadcrumb';

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

export default function AiDevelopment() {
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services/ai-development" },
    { name: "AI Development", url: "/services/ai-development" }
  ];

  const faqs = [
    {
      q: "What types of AI applications does NovaDesk engineer?",
      a: "We build enterprise conversational agents, custom RAG (Retrieval-Augmented Generation) knowledge engines, deterministic autonomous workflow bots, vector search pipelines with pgvector, and native LLM API integrations into existing web and mobile software."
    },
    {
      q: "How do you prevent hallucinations and ensure data privacy in enterprise AI?",
      a: "We implement strict deterministic guardrails, structured JSON output validation, semantic vector retrieval thresholds, and zero-data-retention API configurations. We ensure your proprietary enterprise data is never used to train public foundation models."
    },
    {
      q: "Can AI capabilities be integrated into our existing web or mobile software?",
      a: "Yes. Over 60% of our AI engagements involve modernizing existing platforms. We design clean microservice APIs that hook into your PostgreSQL databases, CRMs, or ERPs without requiring a complete rebuild of your core system."
    },
    {
      q: "How long does it take to deploy an AI MVP into production?",
      a: "A focused AI prototype or custom chatbot typically ships within 2 to 4 weeks, with weekly staging updates for you to test real conversational flows and database actions on your phone and laptop."
    }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Development & Generative AI Solutions",
    "serviceType": "Enterprise AI Development & LLM Engineering",
    "provider": {
      "@type": "Organization",
      "@id": "https://www.novadesk.site/#organization",
      "name": "NovaDesk",
      "url": "https://www.novadesk.site/"
    },
    "areaServed": ["India", "United States", "United Kingdom", "Worldwide"],
    "description": "Production-grade AI development services, custom RAG systems, AI chatbot automation, and LLM integrations engineered for business efficiency."
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
        title="AI Development Company | Generative AI & Intelligent Systems"
        description="NovaDesk is a premier AI development company engineering custom generative AI systems, enterprise chatbots, RAG vector pipelines, and autonomous workflows. Get a free AI consultation."
        url="/services/ai-development"
        keywords="AI development company, generative AI solutions, custom AI chatbots, enterprise RAG development, AI software engineering India, hire AI developers"
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
        .nd-svc-hero {
          padding: 40px 0 80px 0;
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
        .nd-faq-btn:hover { color: #2E29FF; }
        .nd-faq-ans {
          font-size: 15px;
          line-height: 1.7;
          color: #475569;
          margin-top: 12px;
          max-width: 900px;
        }
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

        <section className="nd-svc-hero">
          <div className="nd-svc-eyebrow">Enterprise Intelligence &amp; Automation</div>
          <h1 className="nd-svc-h1">
            Custom <span>AI Development</span> Services for Modern Enterprises
          </h1>
          <p className="nd-svc-subtext">
            Go beyond superficial chat wrappers. We architect deterministic AI pipelines, custom vector search vaults, and intelligent workflow automation built directly into your core business applications.
          </p>
          <div className="nd-svc-cta-row">
            <Link to="/get-a-free-quote" className="nd-btn-main">
              Discuss Your AI Architecture <ArrowRight />
            </Link>
            <Link to="/case-studies" className="nd-btn-sec">
              View Shipped AI Projects
            </Link>
          </div>
        </section>

        <section>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#2E29FF', letterSpacing: '1.5px', textTransform: 'uppercase' }}>APPLIED AI SPECIALIZATIONS</span>
            <h2 style={{ fontSize: '36px', fontWeight: 800, color: '#0A0A2E', marginTop: '8px' }}>Production-Ready Artificial Intelligence</h2>
          </div>

          <div className="nd-svc-grid">
            <div className="nd-svc-card">
              <span className="nd-svc-card-tag">RAG Architecture</span>
              <h3>Retrieval-Augmented Generation</h3>
              <p>Sub-45ms vector search retrieval pipelines with pgvector and semantic embeddings that let your team query internal documents with zero hallucinations.</p>
            </div>
            <div className="nd-svc-card">
              <span className="nd-svc-card-tag">Conversational AI</span>
              <h3>Autonomous Support Agents</h3>
              <p>Customer service bots that resolve tier-1 queries, schedule appointments, query live databases, and seamlessly escalate to human agents.</p>
            </div>
            <div className="nd-svc-card">
              <span className="nd-svc-card-tag">System Integration</span>
              <h3>API &amp; Database AI Layers</h3>
              <p>Connect OpenAI, Claude, and open-source models into existing ERPs, CRMs, and PostgreSQL platforms with strict schema enforcement.</p>
            </div>
            <div className="nd-svc-card">
              <span className="nd-svc-card-tag">Process Automation</span>
              <h3>Intelligent Document Processing</h3>
              <p>Automate parsing, data extraction, invoice reconciliation, and structured summaries from complex PDFs and business records.</p>
            </div>
            <div className="nd-svc-card">
              <span className="nd-svc-card-tag">Privacy First</span>
              <h3>Zero-Data Retention Guardrails</h3>
              <p>Enterprise privacy architectures ensuring confidential business and customer information remains sovereign and compliant.</p>
            </div>
            <div className="nd-svc-card">
              <span className="nd-svc-card-tag">Predictive Analytics</span>
              <h3>Machine Learning Workflows</h3>
              <p>Churn prediction, demand forecasting, dynamic pricing algorithms, and personalized recommendation engines tailored to your data.</p>
            </div>
          </div>
        </section>

        <section className="nd-process-box">
          <span style={{ fontSize: '11px', fontWeight: 700, color: '#00FFB2', letterSpacing: '1.5px', textTransform: 'uppercase' }}>DEVELOPMENT ROADMAP</span>
          <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#ffffff', marginTop: '6px' }}>Our 4-Phase AI Engineering Cycle</h2>
          
          <div className="nd-process-steps-grid">
            <div className="nd-step-card">
              <div className="nd-step-num">Step 01</div>
              <h4>Feasibility &amp; Data Audit</h4>
              <p>We audit your data quality, security constraints, and integration touchpoints to define a deterministic outcome with measurable ROI.</p>
            </div>
            <div className="nd-step-card">
              <div className="nd-step-num">Step 02</div>
              <h4>Vector &amp; Model Prototyping</h4>
              <p>Prompt engineering, model benchmarking (GPT-4o, Claude 3.5, Llama 3), and custom vector embedding pipeline deployment.</p>
            </div>
            <div className="nd-step-card">
              <div className="nd-step-num">Step 03</div>
              <h4>Guardrails &amp; Security Testing</h4>
              <p>Latency benchmarking, edge-case red teaming, hallucination containment, and schema validation before live staging deployment.</p>
            </div>
            <div className="nd-step-card">
              <div className="nd-step-num">Step 04</div>
              <h4>Production Rollout &amp; Monitoring</h4>
              <p>Seamless deployment with telemetry tracking token usage, response latency, and continuous performance tuning.</p>
            </div>
          </div>
        </section>

        <section className="nd-svc-faq-section">
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#2E29FF', letterSpacing: '1.5px', textTransform: 'uppercase' }}>COMMON QUESTIONS</span>
            <h2 style={{ fontSize: '34px', fontWeight: 800, color: '#0A0A2E', marginTop: '6px' }}>Enterprise AI FAQs</h2>
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

        <section className="nd-interlinks-box">
          <div className="nd-interlinks-title">Explore Related AI Solutions &amp; Case Studies</div>
          <div className="nd-interlinks-list">
            <Link to="/services/chatbot-development" className="nd-interlink-pill">Chatbot Development →</Link>
            <Link to="/services/gen-ai-development" className="nd-interlink-pill">Generative AI Engineering →</Link>
            <Link to="/services/ai-integrated-software" className="nd-interlink-pill">AI Integrated Software →</Link>
            <Link to="/services/saas-development" className="nd-interlink-pill">SaaS Platform Development →</Link>
            <Link to="/blog/accelerating-dev-with-generative-ai" className="nd-interlink-pill">Accelerating Dev with Generative AI →</Link>
            <Link to="/blog/ai-integration-in-healthcare-software" className="nd-interlink-pill">AI in Healthcare Software →</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
