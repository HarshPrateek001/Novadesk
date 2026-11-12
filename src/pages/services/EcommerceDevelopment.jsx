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

export default function EcommerceDevelopment() {
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services/ecommerce-development" },
    { name: "E-Commerce Development", url: "/services/ecommerce-development" }
  ];

  const faqs = [
    {
      q: "Which e-commerce platforms does NovaDesk specialize in?",
      a: "We engineer custom headless e-commerce platforms using Next.js and Shopify Storefront APIs, high-performance Shopify Plus custom themes, and scalable WooCommerce architectures tailored for high-volume order processing."
    },
    {
      q: "How do you optimize e-commerce stores for maximum conversion rates?",
      a: "We engineer ultra-fast checkout flows, frictionless one-click payment integrations (Apple Pay, Google Pay, UPI, Stripe, Razorpay), predictive search autocomplete, and sub-second catalog page load speeds to minimize cart abandonment."
    },
    {
      q: "Can you synchronize inventory and orders with our existing ERP or warehouse software?",
      a: "Yes. We build custom bidirectional API integrations that synchronize live inventory, shipping labels, tax calculation, and order fulfilment with Tally, SAP, custom warehouse software, and 3PL fulfillment networks."
    },
    {
      q: "Do you build multi-currency and international e-commerce stores?",
      a: "Yes. We configure multi-currency billing, localized geo-IP routing, automated tax and duties calculation, and multilingual catalog support for brands selling across India, North America, the Middle East, and Europe."
    }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "E-Commerce Website Development Services",
    "serviceType": "E-Commerce Development & Custom Online Storefronts",
    "provider": {
      "@type": "Organization",
      "@id": "https://www.novadesk.site/#organization",
      "name": "NovaDesk",
      "url": "https://www.novadesk.site/"
    },
    "areaServed": ["India", "United States", "United Kingdom", "Worldwide"],
    "description": "Custom e-commerce website development, Shopify development, headless commerce, and high-conversion online store engineering."
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
        title="E-Commerce Development Company | Custom Online Stores & Shopify"
        description="NovaDesk is a premier e-commerce development company in India building high-converting online stores, Shopify platforms, and custom headless e-commerce solutions. Get a quote."
        url="/services/ecommerce-development"
        keywords="ecommerce development company, B2B ecommerce web development agency, custom online storefront development, headless ecommerce development, Shopify Plus and WooCommerce agency, ecommerce payment gateway integration, NovaDesk ecommerce"
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
        .nd-svc-hero { padding: 40px 0 80px 0; }
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
        .nd-svc-h1 span { color: #2E29FF; }
        .nd-svc-subtext {
          font-size: 18px;
          line-height: 1.65;
          color: #4B5563;
          max-width: 720px;
          margin-bottom: 36px;
        }
        .nd-svc-cta-row { display: flex; align-items: center; gap: 16px; flex-wrap: wrap; }
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
        .nd-btn-sec:hover { background: #F4F6FF; border-color: #2E29FF; }
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
        .nd-svc-faq-section { margin: 80px 0; }
        .nd-faq-item { border-bottom: 1px solid #E2E8F0; padding: 20px 0; }
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
        .nd-interlinks-list { display: flex; flex-wrap: wrap; gap: 12px; }
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
          <div className="nd-svc-eyebrow">Commerce Engineering &amp; Conversion</div>
          <h1 className="nd-svc-h1">
            Custom <span>E-Commerce Development</span> Built to Scale Revenue
          </h1>
          <p className="nd-svc-subtext">
            Turn store visitors into high-LTV customers. We engineer blazingly fast online storefronts, headless architectures, multi-currency checkouts, and custom automated ERP/CRM workflows.
          </p>
          <div className="nd-svc-cta-row">
            <Link to="/get-a-free-quote" className="nd-btn-main">
              Get an E-Commerce Estimate <ArrowRight />
            </Link>
            <Link to="/case-studies" className="nd-btn-sec">
              View Shipped Stores
            </Link>
          </div>
        </section>

        <section>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#2E29FF', letterSpacing: '1.5px', textTransform: 'uppercase' }}>STOREFRONT CAPABILITIES</span>
            <h2 style={{ fontSize: '36px', fontWeight: 800, color: '#0A0A2E', marginTop: '8px' }}>Engineered for High-Volume Online Commerce</h2>
          </div>

          <div className="nd-svc-grid">
            <div className="nd-svc-card">
              <span className="nd-svc-card-tag">Headless Storefronts</span>
              <h3>Next.js &amp; Shopify APIs</h3>
              <p>Decoupled architectures separating frontend speed from backend commerce logic for sub-second category filtering and instant page transitions.</p>
            </div>
            <div className="nd-svc-card">
              <span className="nd-svc-card-tag">Shopify Plus</span>
              <h3>Custom Shopify Engineering</h3>
              <p>Bespoke Liquid theme development, private app development, wholesale/B2B portals, and automated checkout customization.</p>
            </div>
            <div className="nd-svc-card">
              <span className="nd-svc-card-tag">Payment Architecture</span>
              <h3>Global Gateway Integration</h3>
              <p>Frictionless checkout with Stripe, Razorpay, Apple Pay, Google Pay, automated fraud screening, and localized currency pricing.</p>
            </div>
            <div className="nd-svc-card">
              <span className="nd-svc-card-tag">ERP &amp; Inventory</span>
              <h3>Warehouse &amp; Accounting Sync</h3>
              <p>Automated inventory sync with Tally, ERP systems, 3PL logistics platforms, and live shipping rate calculators.</p>
            </div>
            <div className="nd-svc-card">
              <span className="nd-svc-card-tag">Conversion Rate Optimization</span>
              <h3>Frictionless Checkout UX</h3>
              <p>One-page checkout flows, smart abandoned cart recovery sequences, upsell engines, and mobile-first touch optimization.</p>
            </div>
            <div className="nd-svc-card">
              <span className="nd-svc-card-tag">Performance Benchmark</span>
              <h3>Sub-2s Catalog Load Times</h3>
              <p>Core Web Vitals optimized product catalog with automated image WebP generation, lazy-loaded carousels, and edge caching.</p>
            </div>
          </div>
        </section>

        <section className="nd-process-box">
          <span style={{ fontSize: '11px', fontWeight: 700, color: '#00FFB2', letterSpacing: '1.5px', textTransform: 'uppercase' }}>STORE LAUNCH PROCESS</span>
          <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#ffffff', marginTop: '6px' }}>How We Deliver Scalable E-Commerce Brands</h2>
          
          <div className="nd-process-steps-grid">
            <div className="nd-step-card">
              <div className="nd-step-num">Step 01</div>
              <h4>Catalog &amp; Journey Audit</h4>
              <p>We analyze SKU hierarchies, shipping tiers, payment requirements, and user conversion funnels to build an optimal store blueprint.</p>
            </div>
            <div className="nd-step-card">
              <div className="nd-step-num">Step 02</div>
              <h4>Store Architecture &amp; UI</h4>
              <p>We craft custom product layouts, high-converting checkout flows, and mobile responsive interactions with live staging reviews every Friday.</p>
            </div>
            <div className="nd-step-card">
              <div className="nd-step-num">Step 03</div>
              <h4>Integrations &amp; Testing</h4>
              <p>We connect payment processors, shipping webhooks, CRM analytics, and run simulated high-traffic transaction tests.</p>
            </div>
            <div className="nd-step-card">
              <div className="nd-step-num">Step 04</div>
              <h4>Launch &amp; Growth Support</h4>
              <p>DNS switchover with zero order downtime, complete code handover, and 30-day dedicated post-launch support.</p>
            </div>
          </div>
        </section>

        <section className="nd-svc-faq-section">
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#2E29FF', letterSpacing: '1.5px', textTransform: 'uppercase' }}>FREQUENTLY ASKED QUESTIONS</span>
            <h2 style={{ fontSize: '34px', fontWeight: 800, color: '#0A0A2E', marginTop: '6px' }}>E-Commerce Development FAQs</h2>
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
          <div className="nd-interlinks-title">Explore Related Solutions &amp; Guides</div>
          <div className="nd-interlinks-list">
            <Link to="/services/shopify-development" className="nd-interlink-pill">Shopify Development →</Link>
            <Link to="/services/woocommerce-development" className="nd-interlink-pill">WooCommerce Development →</Link>
            <Link to="/services/web-development" className="nd-interlink-pill">Custom Web Development →</Link>
            <Link to="/services/website-maintenance" className="nd-interlink-pill">E-Commerce Store Maintenance →</Link>
            <Link to="/blog/how-much-does-custom-software-development-cost" className="nd-interlink-pill">Development Cost Guide →</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
