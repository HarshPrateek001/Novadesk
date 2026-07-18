import React, { useEffect } from 'react';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';

// Basic SVG Icons to replace external images if not present
const ArrowRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> 
    <path d="M16.0032 9.41421L7.39663 18.0208L5.98242 16.6066L14.589 8H7.00324V6H18.0032V17H16.0032V9.41421Z" fill="currentColor" /> 
  </svg>
);

const CheckCircle = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
);

export default function Fintech() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const schemaJson = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Fintech Software Solutions",
      "provider": {
        "@type": "ProfessionalService",
        "name": "NovaDesk"
      },
      "areaServed": "Worldwide",
      "description": "Novadesk offers enterprise-grade fintech software for banking, lending, and payments."
    }
  ];

  return (
    <>
      <SEO 
        title="Enterprise Fintech Software Solutions | Novadesk"
        description="Novadesk offers enterprise-grade fintech software for banking, lending, and payments. Our API-first, secure, and scalable solutions empower financial institutions."
        url="/industries/fintech"
        keywords="Fintech Software Solutions, Digital Banking Platform, Lending Software, Payment Orchestration, API-First Finance, PCI-DSS Compliant Software"
        schema={schemaJson}
      />

      <style>{`
        /* Root & Utilities */
        :root {
          --eb-blue: #2E29FF;
          --eb-dark: #000000;
          --eb-gray-bg: #F7F9FC;
          --eb-gray-border: #E5E7EB;
        }
        
        .eb-page {
          font-family: 'Space Grotesk', sans-serif;
          color: var(--eb-dark);
          overflow-x: hidden;
        }

        .eb-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .eb-text-blue { color: var(--eb-blue); }

        /* HERO SECTION */
        .eb-hero {
          padding: 100px 0 80px;
          background: #ffffff;
          overflow: hidden;
          position: relative;
        }
        .eb-hero-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        @media (max-width: 991px) {
          .eb-hero-inner {
            grid-template-columns: 1fr;
            text-align: center;
          }
        }
        .eb-hero-title {
          font-size: clamp(40px, 4.5vw, 64px);
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 24px;
          letter-spacing: -0.02em;
        }
        .eb-hero-desc {
          font-size: 18px;
          line-height: 1.6;
          color: #4B5563;
          margin-bottom: 40px;
        }
        .eb-btn-blue {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: var(--eb-blue);
          color: white;
          padding: 16px 32px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 16px;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .eb-btn-blue:hover {
          background: #1a16d9;
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(46,41,255,0.2);
        }
        
        .eb-hero-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          margin-top: 40px;
        }
        @media (max-width: 991px) {
          .eb-hero-badges {
            justify-content: center;
          }
        }
        .eb-hero-badge {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 14px;
          font-weight: 600;
          color: #1F2937;
        }
        .eb-hero-badge img {
          height: 35px;
        }

        /* HERO RIGHT ILLUSTRATION */
        .eb-hero-img-box {
          position: relative;
          width: 100%;
          max-width: 500px;
          margin: 0 auto;
        }
        .eb-img-main {
          width: 100%;
          border-radius: 24px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        .eb-float-card {
          position: absolute;
          background: white;
          padding: 16px 24px;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 12px;
          animation: float 6s ease-in-out infinite;
        }
        .eb-float-1 { bottom: 20px; left: -40px; animation-delay: 0s; }
        .eb-float-2 { top: 40px; right: -40px; animation-delay: 2s; }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }

        /* COMPLIANCE & STATS GRID */
        .eb-compliance-sec {
          padding: 60px 0;
          background: #ffffff;
        }
        .eb-grid-layout {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 30px;
        }
        @media (max-width: 991px) {
          .eb-grid-layout { grid-template-columns: 1fr; }
        }
        .eb-box {
          background: var(--eb-gray-bg);
          border-radius: 24px;
          padding: 40px;
        }
        .eb-box-title {
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 16px;
        }
        .eb-box-desc {
          font-size: 16px;
          color: #4B5563;
          margin-bottom: 30px;
          line-height: 1.6;
        }
        .eb-stats-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }
        .eb-stat-card {
          background: var(--eb-gray-bg);
          border-radius: 24px;
          padding: 30px;
          text-align: center;
        }
        .eb-stat-num {
          font-size: 40px;
          font-weight: 700;
          color: var(--eb-blue);
          margin-bottom: 8px;
        }
        .eb-stat-text {
          font-size: 16px;
          font-weight: 600;
          color: #4B5563;
        }

        /* MODULES / CAROUSEL LIKE GRID */
        .eb-modules-sec {
          padding: 100px 0;
          background: #ffffff;
        }
        .eb-sec-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 60px;
        }
        .eb-tag {
          display: inline-block;
          background: #EEEDFF;
          color: var(--eb-blue);
          padding: 6px 16px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 14px;
          margin-bottom: 16px;
        }
        
        .eb-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 30px;
        }
        .eb-card {
          background: white;
          border: 1px solid var(--eb-gray-border);
          border-radius: 24px;
          padding: 40px;
          transition: all 0.3s;
        }
        .eb-card:hover {
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
          transform: translateY(-5px);
          border-color: transparent;
        }
        .eb-card h3 {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 16px;
        }
        .eb-card p {
          color: #4B5563;
          margin-bottom: 24px;
          line-height: 1.6;
        }
        .eb-card-list {
          list-style: none; padding: 0; margin: 0;
        }
        .eb-card-list li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 12px;
          font-size: 15px;
        }
        .eb-card-list li svg {
          color: var(--eb-blue);
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* TECH STACK / ENGINEERING */
        .eb-tech-sec {
          background: #0b0f19;
          color: white;
          padding: 100px 0;
        }
        .eb-tech-box {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 24px;
          padding: 40px;
        }
        .eb-tech-box h3 {
          font-size: 24px;
          margin-bottom: 16px;
        }
        .eb-tech-box p {
          color: #9CA3AF;
          margin-bottom: 24px;
        }
      `}</style>

      <div className="eb-page">
        {/* HERO BANNER (Adapted from template.html) */}
        <section className="eb-hero">
          <div className="eb-container">
            <div className="eb-hero-inner">
              <div className="eb-hero-text">
                <h1 className="eb-hero-title">Enterprise <span className="eb-text-blue">Fintech Software</span> Solutions</h1>
                <p className="eb-hero-desc">
                  In an era where financial services are defined by speed, accessibility, and absolute security, legacy systems act as a bottleneck. At Novadesk, we provide the modular, cloud-native foundation that allows neobanks, startups, and institutions to outpace the market.
                </p>
                <div>
                  <Link to="/contact-us" className="eb-btn-blue">
                    Get a Free Consultation <ArrowRight />
                  </Link>
                </div>
                
                <div className="eb-hero-badges">
                  <div className="eb-hero-badge">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" />
                    <span>AI Accelerator</span>
                  </div>
                  <div className="eb-hero-badge">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" />
                    <span>Top Startups</span>
                  </div>
                </div>
              </div>

              <div className="eb-hero-img-box">
                {/* Fallback image imitating the developers setup */}
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" alt="Fintech App Developers" className="eb-img-main" />
                <div className="eb-float-card eb-float-1">
                  <span style={{fontSize: '20px'}}>👨‍💻</span> Fintech Engineers
                </div>
                <div className="eb-float-card eb-float-2">
                  <span style={{fontSize: '20px'}}>🛡️</span> Security Experts
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COMPLIANCE & STATS GRID (Adapted from template.html) */}
        <section className="eb-compliance-sec">
          <div className="eb-container">
            <div className="eb-grid-layout">
              <div className="eb-box">
                <h2 className="eb-box-title">Global Compliance, baked in</h2>
                <p className="eb-box-desc">
                  We simplify the burden of regulation. We build with the rules in mind from day one: <strong>PCI DSS Level 1</strong>, <strong>GDPR & Data Residency</strong>, and <strong>Automated KYC/AML</strong>. You get immutable audit logs and ongoing updates as regulations change.
                </p>
                
                {/* Horizontal simple list representing compliance badges */}
                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                  <div style={{background: 'white', padding: '12px 24px', borderRadius: '8px', fontWeight: 'bold'}}>PCI DSS</div>
                  <div style={{background: 'white', padding: '12px 24px', borderRadius: '8px', fontWeight: 'bold'}}>GDPR</div>
                  <div style={{background: 'white', padding: '12px 24px', borderRadius: '8px', fontWeight: 'bold'}}>AML/KYC</div>
                  <div style={{background: 'white', padding: '12px 24px', borderRadius: '8px', fontWeight: 'bold'}}>ISO 27001</div>
                </div>
              </div>

              <div className="eb-stats-grid">
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px'}}>
                  <div className="eb-stat-card">
                    <div className="eb-stat-num">99.9%</div>
                    <div className="eb-stat-text">Uptime</div>
                  </div>
                  <div className="eb-stat-card">
                    <div className="eb-stat-num">80%</div>
                    <div className="eb-stat-text">Automation</div>
                  </div>
                </div>
                <div className="eb-stat-card">
                  <div className="eb-stat-num">0ms</div>
                  <div className="eb-stat-text">Zero-Downtime Updates</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OUR MODULES (Adapted from Our Growth / Case studies slider in template) */}
        <section className="eb-modules-sec">
          <div className="eb-container">
            <div className="eb-sec-header">
              <span className="eb-tag">Our Product Suite</span>
              <h2 className="eb-box-title" style={{fontSize: '40px'}}>Specialized Solutions for Every Vertical</h2>
              <p className="eb-box-desc">We offer a range of specialized software modules designed to be deployed independently or as a unified ecosystem.</p>
            </div>

            <div className="eb-cards-grid">
              {/* Card 1 */}
              <div className="eb-card">
                <h3>Core Digital Banking</h3>
                <p>Our Core Banking Software (CBS) is the backbone for modern digital-only banks. It manages the entire lifecycle with precision.</p>
                <ul className="eb-card-list">
                  <li><CheckCircle /> Real-time Ledger Infrastructure</li>
                  <li><CheckCircle /> Multi-Currency Global Wallets</li>
                  <li><CheckCircle /> Virtual & Physical Card Issuance</li>
                </ul>
              </div>

              {/* Card 2 */}
              <div className="eb-card">
                <h3>Intelligent AI-Lending</h3>
                <p>Our automated lending software utilizes alternative data and AI to transform the credit cycle and reduce NPL.</p>
                <ul className="eb-card-list">
                  <li><CheckCircle /> Automated Underwriting</li>
                  <li><CheckCircle /> Dynamic Risk Scoring</li>
                  <li><CheckCircle /> Automated Disbursement</li>
                </ul>
              </div>

              {/* Card 3 */}
              <div className="eb-card">
                <h3>Payment Orchestration</h3>
                <p>Our orchestration layer simplifies global payments by connecting you to the entire financial world through a single interface.</p>
                <ul className="eb-card-list">
                  <li><CheckCircle /> Dynamic Transaction Routing</li>
                  <li><CheckCircle /> Cross-Border Remittance Engine</li>
                  <li><CheckCircle /> Settlement & Reconciliation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ENGINEERING & BI (Combined) */}
        <section className="eb-tech-sec">
          <div className="eb-container">
            <div className="eb-sec-header">
              <span className="eb-tag" style={{background: 'rgba(46, 41, 255, 0.2)'}}>Architecture</span>
              <h2 className="eb-box-title" style={{fontSize: '40px'}}>Engineering Excellence</h2>
              <p style={{color: '#9CA3AF', fontSize: '18px'}}>Built for developers, architected for scale. Handling high-concurrency environments without compromise.</p>
            </div>

            <div className="eb-grid-layout" style={{gap: '30px', gridTemplateColumns: '1fr 1fr'}}>
              <div className="eb-tech-box">
                <h3>Microservices & High Availability</h3>
                <p>We have moved away from monolithic structures. Utilizing Docker and Kubernetes for seamless scaling.</p>
                <ul className="eb-card-list">
                  <li><span style={{color:'#60A5FA'}}>✔</span> Containerized Deployment</li>
                  <li><span style={{color:'#60A5FA'}}>✔</span> Zero-Downtime Updates</li>
                  <li><span style={{color:'#60A5FA'}}>✔</span> Independent Component Operations</li>
                </ul>
              </div>

              <div className="eb-tech-box">
                <h3>API-First Design Philosophy</h3>
                <p>Our platform is a developer’s playground. Everything we build is accessible via robust APIs.</p>
                <ul className="eb-card-list">
                  <li><span style={{color:'#60A5FA'}}>✔</span> RESTful & GraphQL Support</li>
                  <li><span style={{color:'#60A5FA'}}>✔</span> Sandbox Testing Environment</li>
                  <li><span style={{color:'#60A5FA'}}>✔</span> Webhooks & Real-time Events</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA (From txt1 and template bottom) */}
        <section style={{padding: '100px 0', textAlign: 'center'}}>
          <div className="eb-container">
            <h2 className="eb-box-title" style={{fontSize: '40px', maxWidth: '800px', margin: '0 auto 24px'}}>
              The Future of Finance is Software-Defined. Build it with Novadesk.
            </h2>
            <p className="eb-box-desc" style={{maxWidth: '700px', margin: '0 auto 40px'}}>
              Stop letting outdated technology limit your vision. Partner with Novadesk to build a secure, scalable, and sophisticated financial platform.
            </p>
            <div style={{display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap'}}>
              <Link to="/contact-us" className="eb-btn-blue">
                Schedule a Technical Demo
              </Link>
              <Link to="/contact-us" className="eb-btn-blue" style={{background: 'white', color: 'var(--eb-blue)', border: '1px solid var(--eb-blue)'}}>
                Consult with an Architect
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
