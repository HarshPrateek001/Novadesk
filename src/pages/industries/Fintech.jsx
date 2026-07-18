import React, { useEffect } from 'react';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';

// SVG Icons
const ArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.0032 9.41421L7.39663 18.0208L5.98242 16.6066L14.589 8H7.00324V6H18.0032V17H16.0032V9.41421Z" fill="currentColor"/>
  </svg>
);

const CheckCircle = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"/>
  </svg>
);

const ShieldIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 19.93c-3.95-1.17-7-5.18-7-9.93V6.3l7-3.11 7 3.11v4.63c0 4.75-3.05 8.76-7 9.93z"/>
  </svg>
);

const ApiIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
    <path d="M14.93 11.23l-3.34-3.34-1.42 1.42 3.34 3.34 1.42-1.42zm4.36.77L15 7.76c-1.17-1.17-3.07-1.17-4.24 0L6.5 12c-1.17 1.17-1.17 3.07 0 4.24l4.24 4.24c1.17 1.17 3.07 1.17 4.24 0l4.24-4.24c1.17-1.17 1.17-3.07 0-4.24zm-1.41 2.83l-4.24 4.24-4.24-4.24 4.24-4.24 4.24 4.24zM3 11h2v2H3v-2zm3-3h2v2H6V8zm0 8h2v2H6v-2z"/>
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
        .fs-page {
          font-family: 'Space Grotesk', sans-serif;
          background-color: #ffffff;
          overflow-x: hidden;
          color: #0b0f19;
        }
        
        .fs-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .fs-text-blue { color: #2E29FF; }
        .fs-bg-blue { background-color: #2E29FF; color: white; }

        /* BUTTONS */
        .fs-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 16px 32px;
          border-radius: 50px;
          font-size: 16px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s;
        }
        .fs-btn-primary { background-color: #2E29FF; color: #ffffff; }
        .fs-btn-primary:hover { background-color: #1a16d9; transform: translateY(-2px); box-shadow: 0 10px 20px rgba(46,41,255,0.2); }
        .fs-btn-white { background-color: #ffffff; color: #2E29FF; border: 1px solid #2E29FF; }
        .fs-btn-white:hover { background-color: #f8fafc; transform: translateY(-2px); box-shadow: 0 10px 20px rgba(0,0,0,0.05); }

        /* HERO */
        .fs-hero {
          padding: 120px 0 80px;
          background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
        }
        .fs-hero-content {
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }
        .fs-hero-title {
          font-size: clamp(40px, 5vw, 64px);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin-bottom: 24px;
        }
        .fs-hero-desc {
          font-size: 20px;
          line-height: 1.6;
          color: #475569;
          margin-bottom: 40px;
        }

        /* SECTION */
        .fs-section { padding: 100px 0; }
        .fs-section-alt { padding: 100px 0; background-color: #f8fafc; }
        .fs-section-dark { padding: 100px 0; background-color: #0b0f19; color: white; }
        
        .fs-title {
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 800;
          letter-spacing: -0.02em;
          margin-bottom: 24px;
          line-height: 1.2;
        }

        /* GRID CARDS */
        .fs-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 32px; }
        .fs-card {
          background: #fff;
          border: 1px solid #e2e8f0;
          border-radius: 24px;
          padding: 40px;
          transition: all 0.3s;
        }
        .fs-card:hover { transform: translateY(-5px); box-shadow: 0 20px 40px rgba(0,0,0,0.05); }
        .fs-card-dark {
          background: #1e293b;
          border: 1px solid #334155;
          border-radius: 24px;
          padding: 40px;
          color: white;
        }
        
        /* LISTS */
        .fs-list { list-style: none; padding: 0; margin: 0; }
        .fs-list li { display: flex; align-items: flex-start; gap: 12px; margin-bottom: 16px; font-size: 16px; line-height: 1.6; }
        .fs-list li svg { flex-shrink: 0; margin-top: 4px; color: #2E29FF; }
        .fs-list-dark li svg { color: #60a5fa; }

        /* TIMELINE */
        .fs-timeline { border-left: 2px solid #e2e8f0; padding-left: 32px; margin-left: 16px; }
        .fs-timeline-item { position: relative; margin-bottom: 40px; }
        .fs-timeline-item::before {
          content: ''; position: absolute; left: -41px; top: 0;
          width: 16px; height: 16px; border-radius: 50%;
          background: #2E29FF; border: 4px solid #fff;
        }
      `}</style>

      <div className="fs-page">
        {/* HERO SECTION */}
        <section className="fs-hero">
          <div className="fs-container">
            <div className="fs-hero-content">
              <h1 className="fs-hero-title">Enterprise <span className="fs-text-blue">Fintech Software Solutions</span></h1>
              <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '24px' }}>Powering the Next Generation of Finance</h2>
              <p className="fs-hero-desc">
                In an era where financial services are defined by speed, accessibility, and absolute security, legacy systems often act as a bottleneck to growth. At Novadesk, we provide the technological foundation that allows financial institutions, neobanks, and startups to outpace the market.
              </p>
              <p className="fs-hero-desc" style={{marginTop: '-20px'}}>
                Our software suite is not just a tool—it is a comprehensive financial engine built on modularity and cloud-native architecture. We empower businesses to automate complex workflows, minimize transaction failures, and deliver a "user-first" experience that builds long-term loyalty.
              </p>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to="/contact-us" className="fs-btn fs-btn-primary">
                  Schedule a Technical Demo <ArrowRight />
                </Link>
                <Link to="/contact-us" className="fs-btn fs-btn-white">
                  Consult with an Architect
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* DEEP DIVE MODULES */}
        <section className="fs-section">
          <div className="fs-container">
            <h2 className="fs-title" style={{textAlign: 'center', marginBottom: '16px'}}>Our Fintech Product Suite</h2>
            <p style={{textAlign: 'center', color: '#475569', fontSize: '18px', marginBottom: '60px', maxWidth: '800px', margin: '0 auto 60px'}}>Specialized Solutions for Every Vertical. Deploy independently or as a unified ecosystem.</p>
            
            <div className="fs-grid">
              <div className="fs-card">
                <h3 style={{fontSize: '24px', fontWeight: 800, marginBottom: '16px'}}>A. Core Digital Banking (Neobanking)</h3>
                <p style={{color: '#475569', marginBottom: '24px'}}>Our Core Banking Software (CBS) is the backbone for modern digital-only banks. It manages the entire lifecycle of a customer’s financial journey with precision.</p>
                <ul className="fs-list">
                  <li><CheckCircle /> <div><strong>Real-time Ledger Infrastructure:</strong> An immutable, double-entry bookkeeping system that ensures 100% accuracy in transaction recording.</div></li>
                  <li><CheckCircle /> <div><strong>Multi-Currency Global Wallets:</strong> Allow users to hold, transfer, and exchange multiple currencies with real-time FX rate integration.</div></li>
                  <li><CheckCircle /> <div><strong>Virtual & Physical Card Issuance:</strong> Seamlessly integrate with Visa, Mastercard, or local card networks.</div></li>
                </ul>
              </div>

              <div className="fs-card">
                <h3 style={{fontSize: '24px', fontWeight: 800, marginBottom: '16px'}}>B. Intelligent AI-Lending & Mortgage</h3>
                <p style={{color: '#475569', marginBottom: '24px'}}>Manual credit assessment is slow and prone to error. Our automated lending software utilizes alternative data and AI to transform the credit cycle.</p>
                <ul className="fs-list">
                  <li><CheckCircle /> <div><strong>Automated Underwriting:</strong> Analyze thousands of data points to approve or decline loans in milliseconds.</div></li>
                  <li><CheckCircle /> <div><strong>Dynamic Risk Scoring:</strong> Real-time credit monitoring that adjusts limits based on user behavior.</div></li>
                  <li><CheckCircle /> <div><strong>Automated Disbursement & Collection:</strong> Integrated repayment gateways with smart collection reminders to reduce NPL.</div></li>
                </ul>
              </div>

              <div className="fs-card">
                <h3 style={{fontSize: '24px', fontWeight: 800, marginBottom: '16px'}}>C. Advanced Payment Orchestration</h3>
                <p style={{color: '#475569', marginBottom: '24px'}}>Managing global payments is complex. Our orchestration layer simplifies the process by connecting you to the entire financial world through a single interface.</p>
                <ul className="fs-list">
                  <li><CheckCircle /> <div><strong>Dynamic Transaction Routing:</strong> Our AI routes transactions through the highest-performing gateway to ensure a 99.9% success rate.</div></li>
                  <li><CheckCircle /> <div><strong>Cross-Border Remittance Engine:</strong> Built-in support for SWIFT, SEPA, and local real-time payment rails.</div></li>
                  <li><CheckCircle /> <div><strong>Settlement & Reconciliation Suite:</strong> Automated tools that match thousands of transactions per second.</div></li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* TECH ARCHITECTURE */}
        <section className="fs-section-dark">
          <div className="fs-container">
            <h2 className="fs-title" style={{textAlign: 'center', marginBottom: '16px'}}>Engineering Excellence: The Technology Stack</h2>
            <p style={{textAlign: 'center', color: '#94a3b8', fontSize: '18px', marginBottom: '60px', maxWidth: '800px', margin: '0 auto 60px'}}>Built for developers, architected for scale. Novadesk is designed to handle high-concurrency environments without compromise.</p>
            
            <div className="fs-grid">
              <div className="fs-card-dark">
                <div style={{color: '#60a5fa', marginBottom: '16px'}}><ApiIcon /></div>
                <h3 style={{fontSize: '24px', fontWeight: 800, marginBottom: '16px'}}>I. Microservices & High Availability</h3>
                <p style={{color: '#cbd5e1', marginBottom: '24px'}}>We have moved away from monolithic structures. Our software is built using a Microservices Architecture, ensuring that each component operates independently.</p>
                <ul className="fs-list fs-list-dark">
                  <li><CheckCircle /> <div><strong>Containerized Deployment:</strong> Utilizing Docker and Kubernetes for seamless scaling and 99.99% uptime.</div></li>
                  <li><CheckCircle /> <div><strong>Zero-Downtime Updates:</strong> Deploy new features or patches without ever taking your system offline.</div></li>
                </ul>
              </div>

              <div className="fs-card-dark">
                <div style={{color: '#60a5fa', marginBottom: '16px'}}><ApiIcon /></div>
                <h3 style={{fontSize: '24px', fontWeight: 800, marginBottom: '16px'}}>II. API-First Design Philosophy</h3>
                <p style={{color: '#cbd5e1', marginBottom: '24px'}}>Our platform is a developer’s playground. Everything we build is accessible via robust, well-documented APIs.</p>
                <ul className="fs-list fs-list-dark">
                  <li><CheckCircle /> <div><strong>RESTful & GraphQL Support:</strong> Flexible data fetching for web and mobile frontends.</div></li>
                  <li><CheckCircle /> <div><strong>Sandbox Environment:</strong> A dedicated testing ground for developers to build and test integrations before going live.</div></li>
                  <li><CheckCircle /> <div><strong>Webhooks & Real-time Events:</strong> Instant push notifications for every system event.</div></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECURITY & COMPLIANCE */}
        <section className="fs-section-alt">
          <div className="fs-container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'flex-start' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                  <ShieldIcon style={{color: '#2E29FF'}}/>
                  <h2 className="fs-title" style={{margin: 0}}>Security Infrastructure</h2>
                </div>
                <p style={{color: '#475569', fontSize: '18px', marginBottom: '32px'}}>Security is not a feature at Novadesk; it is the foundation of our code. "Bank-Grade" is Our Standard.</p>
                <ul className="fs-list">
                  <li><CheckCircle /> <div><strong>End-to-End Encryption:</strong> Data is encrypted both at rest (AES-256) and in transit (TLS 1.3).</div></li>
                  <li><CheckCircle /> <div><strong>Biometric & MFA:</strong> Native support for FaceID, TouchID, and TOTP.</div></li>
                  <li><CheckCircle /> <div><strong>AI-Driven Fraud Detection:</strong> Machine-learning models scan millions of transactions for anomalous patterns.</div></li>
                  <li><CheckCircle /> <div><strong>HSM Integration:</strong> Hardware Security Modules ensure that cryptographic keys are never exposed.</div></li>
                </ul>
              </div>
              
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                  <ShieldIcon style={{color: '#2E29FF'}}/>
                  <h2 className="fs-title" style={{margin: 0}}>Global Compliance</h2>
                </div>
                <p style={{color: '#475569', fontSize: '18px', marginBottom: '32px'}}>We simplify the burden of regulation, allowing you to focus on your customers while we handle the "Red Tape."</p>
                <ul className="fs-list">
                  <li><CheckCircle /> <div><strong>PCI-DSS Level 1 Compliance:</strong> The highest standard for credit card data security.</div></li>
                  <li><CheckCircle /> <div><strong>Automated KYC/AML:</strong> Integrated OCR and Liveness Detection to verify identities instantly and screen sanctions lists.</div></li>
                  <li><CheckCircle /> <div><strong>GDPR & Data Residency:</strong> Localized data hosting options to comply with regional data sovereignty laws.</div></li>
                  <li><CheckCircle /> <div><strong>Immutable Audit Logs:</strong> Every system action is logged in an unalterable format.</div></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* BUSINESS INTELLIGENCE */}
        <section className="fs-section">
          <div className="fs-container">
            <h2 className="fs-title" style={{textAlign: 'center', marginBottom: '16px'}}>Business Intelligence: Data-Driven Insights</h2>
            <p style={{textAlign: 'center', color: '#475569', fontSize: '18px', marginBottom: '60px', maxWidth: '800px', margin: '0 auto 60px'}}>Turn your raw transaction data into a strategic asset with our built-in analytics dashboard.</p>
            
            <div className="fs-grid">
              <div className="fs-card">
                <h3 style={{fontSize: '20px', fontWeight: 700, marginBottom: '8px'}}>Real-time Liquidity Monitoring</h3>
                <p style={{color: '#475569', margin: 0}}>View your institutional cash flow and reserve ratios in real-time.</p>
              </div>
              <div className="fs-card">
                <h3 style={{fontSize: '20px', fontWeight: 700, marginBottom: '8px'}}>User Behavior Analytics</h3>
                <p style={{color: '#475569', margin: 0}}>Understand how your customers spend, save, and borrow to create hyper-personalized products.</p>
              </div>
              <div className="fs-card">
                <h3 style={{fontSize: '20px', fontWeight: 700, marginBottom: '8px'}}>Predictive Revenue Modeling</h3>
                <p style={{color: '#475569', margin: 0}}>Use historical data to forecast future growth and identify potential churn risks before they happen.</p>
              </div>
            </div>
          </div>
        </section>

        {/* JOURNEY & ROI */}
        <section className="fs-section-alt">
          <div className="fs-container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '80px' }}>
              <div>
                <h2 className="fs-title">The Implementation Journey</h2>
                <p style={{color: '#475569', fontSize: '18px', marginBottom: '40px'}}>We don't just hand over the keys; we partner with you at every stage of the deployment.</p>
                <div className="fs-timeline">
                  <div className="fs-timeline-item">
                    <h4 style={{fontSize: '20px', fontWeight: 700}}>1. Solution Discovery</h4>
                    <p style={{color: '#475569'}}>We analyze your business model and technical requirements to suggest the best modular configuration.</p>
                  </div>
                  <div className="fs-timeline-item">
                    <h4 style={{fontSize: '20px', fontWeight: 700}}>2. Architecture Mapping</h4>
                    <p style={{color: '#475569'}}>Our engineers design the integration flow between Novadesk and your existing systems.</p>
                  </div>
                  <div className="fs-timeline-item">
                    <h4 style={{fontSize: '20px', fontWeight: 700}}>3. Sandbox Integration</h4>
                    <p style={{color: '#475569'}}>Your developers build on our APIs in a risk-free environment with 24/7 technical support.</p>
                  </div>
                  <div className="fs-timeline-item">
                    <h4 style={{fontSize: '20px', fontWeight: 700}}>4. User Acceptance Testing (UAT)</h4>
                    <p style={{color: '#475569'}}>Rigorous stress testing to ensure the system handles peak loads and edge-case scenarios.</p>
                  </div>
                  <div className="fs-timeline-item">
                    <h4 style={{fontSize: '20px', fontWeight: 700}}>5. Go-Live & Hypercare</h4>
                    <p style={{color: '#475569'}}>We provide dedicated on-site or remote support during the launch phase to ensure a smooth transition.</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="fs-title">Why Novadesk? The Competitive Advantage</h2>
                <div className="fs-card" style={{marginBottom: '32px'}}>
                  <h3 style={{fontSize: '20px', fontWeight: 700, marginBottom: '8px'}}>Unrivaled Scalability</h3>
                  <p style={{color: '#475569', margin: 0}}>Whether you have 10,000 or 100 million users, our infrastructure scales with you.</p>
                </div>
                <div className="fs-card" style={{marginBottom: '32px'}}>
                  <h3 style={{fontSize: '20px', fontWeight: 700, marginBottom: '8px'}}>Accelerated Time-to-Market</h3>
                  <p style={{color: '#475569', margin: 0}}>Reduce your development cycle from years to months using our pre-built, battle-tested modules.</p>
                </div>
                <div className="fs-card" style={{marginBottom: '32px'}}>
                  <h3 style={{fontSize: '20px', fontWeight: 700, marginBottom: '8px'}}>Cost Efficiency</h3>
                  <p style={{color: '#475569', margin: 0}}>Eliminate the massive overhead of building a core financial stack from scratch.</p>
                </div>
                <div className="fs-card">
                  <h3 style={{fontSize: '20px', fontWeight: 700, marginBottom: '8px'}}>Future-Ready</h3>
                  <p style={{color: '#475569', margin: 0}}>Built-in support for Blockchain ledgers, Central Bank Digital Currencies (CBDCs), and Generative AI.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="fs-section-dark" style={{textAlign: 'center', padding: '120px 0'}}>
          <div className="fs-container">
            <h2 className="fs-title" style={{fontSize: '48px', marginBottom: '24px'}}>The Future of Finance is Software-Defined. Build it with Novadesk.</h2>
            <p style={{fontSize: '20px', color: '#cbd5e1', maxWidth: '800px', margin: '0 auto 48px'}}>
              Stop letting outdated technology limit your vision. Partner with Novadesk to build a secure, scalable, and sophisticated financial platform.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact-us" className="fs-btn fs-btn-primary">
                Schedule a Technical Demo <ArrowRight />
              </Link>
              <a href="#" className="fs-btn fs-btn-white" style={{color: '#0b0f19'}}>
                View API Documentation
              </a>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
