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
      "serviceType": "Fintech Software Development",
      "provider": {
        "@type": "ProfessionalService",
        "name": "NovaDesk"
      },
      "areaServed": "Worldwide",
      "description": "Enterprise Fintech Software Solutions including Core Banking, AI Lending, and Payment Gateways."
    }
  ];

  return (
    <>
      <SEO 
        title="Enterprise Fintech Software Solutions | Novadesk"
        description="Powering the Next Generation of Finance. Custom fintech software, core banking, AI lending, and secure payment orchestration by Novadesk."
        url="/industries/fintech"
        keywords="Fintech Software Development Company, Banking-as-a-Service Platform, Secure Payment Gateway Software, AI Lending Solutions, API-First Fintech Architecture"
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
                Fintech industry ab sirf mobile apps tak mehdood nahi rahi; ye ek poora ecosystem ban chuki hai. Novadesk mein hum samajhte hain ke financial institutions ko aise software ki zaroorat jo na sirf aaj ki zaroorat ko poora kare balki kal ke challenges ke liye bhi tayyar ho. Hamara software suite modularity, security, aur scalability ke usoolon par banaya gaya hai.
              </p>
              <p className="fs-hero-desc" style={{marginTop: '-20px'}}>
                Hum sirf code nahi likhte; hum financial workflows ko automate karte hain taaki aapka business 24/7 bina kisi rukawat ke chalta rahe. Hamari technology legacy systems aur modern cloud-native architecture ke darmiyan ek bridge ka kaam karti hai.
              </p>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to="/contact-us" className="fs-btn fs-btn-primary">
                  Contact Our Fintech Experts <ArrowRight />
                </Link>
                <Link to="/contact-us" className="fs-btn fs-btn-white">
                  Request a Technical Architecture Review
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* DEEP DIVE MODULES */}
        <section className="fs-section">
          <div className="fs-container">
            <h2 className="fs-title" style={{textAlign: 'center', marginBottom: '60px'}}>Vertical-Specific Software Modules</h2>
            <div className="fs-grid">
              
              <div className="fs-card">
                <h3 style={{fontSize: '24px', fontWeight: 800, marginBottom: '16px'}}>A. Digital Core Banking (Neobanking)</h3>
                <p style={{color: '#475569', marginBottom: '24px'}}>Hamara Core Banking Software (CBS) neobanks aur digital-only banks ke liye backbone ka kaam karta hai.</p>
                <ul className="fs-list">
                  <li><CheckCircle /> <div><strong>Real-time Ledger Management:</strong> Har transaction ko microsecond precision ke sath record karein. Double-entry bookkeeping.</div></li>
                  <li><CheckCircle /> <div><strong>Multi-Currency Wallets:</strong> Multiple currencies (USD, EUR, GBP, etc.) hold karein aur real-time exchange rates par convert karein.</div></li>
                  <li><CheckCircle /> <div><strong>Virtual & Physical Cards:</strong> Visa/Mastercard integration ke sath instant virtual card issuance.</div></li>
                </ul>
              </div>

              <div className="fs-card">
                <h3 style={{fontSize: '24px', fontWeight: 800, marginBottom: '16px'}}>B. AI-Powered Lending & Mortgage</h3>
                <p style={{color: '#475569', marginBottom: '24px'}}>Udhaar dene ka purana tareeqa khatam ho chuka hai. Novadesk ka lending software data-driven decisions leta hai.</p>
                <ul className="fs-list">
                  <li><CheckCircle /> <div><strong>Automated Underwriting:</strong> Transaction history, social signals, aur credit bureau data analyze karke instant approval.</div></li>
                  <li><CheckCircle /> <div><strong>Repayment Automation:</strong> Standing instructions aur NACH/ECS integration ke zariye monthly installments (EMIs) auto-deduct karein.</div></li>
                  <li><CheckCircle /> <div><strong>Collections Dashboard:</strong> AI-based categorization jo batati hai ke kaunse borrowers se pehle rabta karna hai.</div></li>
                </ul>
              </div>

              <div className="fs-card">
                <h3 style={{fontSize: '24px', fontWeight: 800, marginBottom: '16px'}}>C. Payment Orchestration & Gateways</h3>
                <p style={{color: '#475569', marginBottom: '24px'}}>Payments ko handle karna complex hota hai, lekin Novadesk ise simple banata hai.</p>
                <ul className="fs-list">
                  <li><CheckCircle /> <div><strong>Dynamic Transaction Routing:</strong> Agar ek payment gateway down hai, toh automatically doosre gateway par switch.</div></li>
                  <li><CheckCircle /> <div><strong>QR & Contactless Payments:</strong> Merchants ke liye static aur dynamic QR codes ka support.</div></li>
                  <li><CheckCircle /> <div><strong>Settlement Engine:</strong> Merchants ko unka paisa T+0 ya T+1 basis par automatically transfer karne ka system.</div></li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* TECH ARCHITECTURE */}
        <section className="fs-section-dark">
          <div className="fs-container">
            <h2 className="fs-title" style={{textAlign: 'center', marginBottom: '16px'}}>Technical Architecture: Under the Hood</h2>
            <p style={{textAlign: 'center', color: '#94a3b8', fontSize: '18px', marginBottom: '60px', maxWidth: '800px', margin: '0 auto 60px'}}>CTOs aur Technical Managers ke liye detailed specs</p>
            
            <div className="fs-grid">
              <div className="fs-card-dark">
                <div style={{color: '#60a5fa', marginBottom: '16px'}}><ApiIcon /></div>
                <h3 style={{fontSize: '24px', fontWeight: 800, marginBottom: '16px'}}>I. Microservices & High Availability</h3>
                <p style={{color: '#cbd5e1', marginBottom: '24px'}}>Hum monolithic architecture ke sakht khilaf hain. Novadesk ka software microservices par mabni hai. Agar "KYC Module" mein update hai, toh "Payment Module" mutasir nahi hota.</p>
                <ul className="fs-list fs-list-dark">
                  <li><CheckCircle /> <div><strong>Containerization:</strong> Docker aur Kubernetes ke zariye hum 99.99% uptime ensure karte hain.</div></li>
                  <li><CheckCircle /> <div><strong>Auto-Scaling:</strong> Jab heavy traffic aata hai, toh servers khud-b-khud scale ho jate hain.</div></li>
                </ul>
              </div>

              <div className="fs-card-dark">
                <div style={{color: '#60a5fa', marginBottom: '16px'}}><ApiIcon /></div>
                <h3 style={{fontSize: '24px', fontWeight: 800, marginBottom: '16px'}}>II. API-First Philosophy</h3>
                <p style={{color: '#cbd5e1', marginBottom: '24px'}}>Hamara pura system APIs ke gird bana hai.</p>
                <ul className="fs-list fs-list-dark">
                  <li><CheckCircle /> <div><strong>RESTful & GraphQL APIs:</strong> Flexibility to pull exact data needed.</div></li>
                  <li><CheckCircle /> <div><strong>Webhooks:</strong> Har event (e.g., Payment success, KYC reject) par instant notifications.</div></li>
                  <li><CheckCircle /> <div><strong>Documentation:</strong> Swagger/Postman docs jo integration time ko 70% kam kar deti hai.</div></li>
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
                <p style={{color: '#475569', fontSize: '18px', marginBottom: '32px'}}>Finance mein trust hi sab kuch hai: The Fortress.</p>
                <ul className="fs-list">
                  <li><CheckCircle /> <div><strong>HSM Integration:</strong> Sensitive keys ko hardware level par secure karna.</div></li>
                  <li><CheckCircle /> <div><strong>OAuth 2.0 & OpenID Connect:</strong> Industry-standard authentication protocols.</div></li>
                  <li><CheckCircle /> <div><strong>Zero Trust Architecture:</strong> Network ke andar bhi har request ko verify kiya jana.</div></li>
                  <li><CheckCircle /> <div><strong>Threat Intelligence:</strong> AI musalsal network traffic scan karta hai taaki DDoS/SQL injections rokein.</div></li>
                  <li><CheckCircle /> <div><strong>Data Masking & Tokenization:</strong> Card details tokens mein convert hoti hain.</div></li>
                </ul>
              </div>
              
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                  <ShieldIcon style={{color: '#2E29FF'}}/>
                  <h2 className="fs-title" style={{margin: 0}}>Compliance & Standards</h2>
                </div>
                <p style={{color: '#475569', fontSize: '18px', marginBottom: '32px'}}>Novadesk ka software aapko audit-ready rakhta hai.</p>
                <ul className="fs-list">
                  <li><CheckCircle /> <div><strong>PCI-DSS Level 1 Ready:</strong> Card data handling ke liye highest security standard.</div></li>
                  <li><CheckCircle /> <div><strong>KYC Automation:</strong> OCR tech se data extraction aur liveness detection.</div></li>
                  <li><CheckCircle /> <div><strong>AML (Anti-Money Laundering):</strong> Suspicious patterns flag karne ke algorithms.</div></li>
                  <li><CheckCircle /> <div><strong>Audit Trails:</strong> Har action ka immutable log jo regulators ke liye zaroori hai.</div></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* JOURNEY & ROI */}
        <section className="fs-section">
          <div className="fs-container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '80px' }}>
              <div>
                <h2 className="fs-title">Implementation Journey</h2>
                <div className="fs-timeline">
                  <div className="fs-timeline-item">
                    <h4 style={{fontSize: '20px', fontWeight: 700}}>Phase 1: Requirement Discovery</h4>
                    <p style={{color: '#475569'}}>Aapke business goals aur regulatory environment ka tajziya.</p>
                  </div>
                  <div className="fs-timeline-item">
                    <h4 style={{fontSize: '20px', fontWeight: 700}}>Phase 2: Architecture Design</h4>
                    <p style={{color: '#475569'}}>Ek customized roadmap aur tech-stack ki selection.</p>
                  </div>
                  <div className="fs-timeline-item">
                    <h4 style={{fontSize: '20px', fontWeight: 700}}>Phase 3: Sandbox Development</h4>
                    <p style={{color: '#475569'}}>Testing environment mein software ka setup.</p>
                  </div>
                  <div className="fs-timeline-item">
                    <h4 style={{fontSize: '20px', fontWeight: 700}}>Phase 4: UAT (User Acceptance)</h4>
                    <p style={{color: '#475569'}}>Aapki team software ko real-world scenarios mein test karti hai.</p>
                  </div>
                  <div className="fs-timeline-item">
                    <h4 style={{fontSize: '20px', fontWeight: 700}}>Phase 5: Go-Live & Hyper-care</h4>
                    <p style={{color: '#475569'}}>Deployment ke baad pehle 30 din hum extra monitoring provide karte hain.</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="fs-title">Business ROI</h2>
                <div className="fs-card" style={{marginBottom: '32px'}}>
                  <h3 style={{fontSize: '20px', fontWeight: 700, marginBottom: '8px'}}>Operational Savings</h3>
                  <p style={{color: '#475569', margin: 0}}>40% tak manual work mein kami.</p>
                </div>
                <div className="fs-card" style={{marginBottom: '32px'}}>
                  <h3 style={{fontSize: '20px', fontWeight: 700, marginBottom: '8px'}}>Faster Time-to-Market</h3>
                  <p style={{color: '#475569', margin: 0}}>Jo software banne mein 2 saal lagte, Novadesk use 4 mahino mein mumkin banata hai.</p>
                </div>
                <div className="fs-card">
                  <h3 style={{fontSize: '20px', fontWeight: 700, marginBottom: '8px'}}>Customer Retention</h3>
                  <p style={{color: '#475569', margin: 0}}>Seamless experience ki wajah se user churn rate 25% tak gir jata hai.</p>
                </div>
                
                <h2 className="fs-title" style={{marginTop: '48px', fontSize: '28px'}}>The Future: AI & Blockchain</h2>
                <ul className="fs-list">
                  <li><CheckCircle /> <div><strong>Gen AI for Finance:</strong> Financial reports/summaries auto-generation.</div></li>
                  <li><CheckCircle /> <div><strong>Blockchain Ledgers:</strong> Private blockchain for transparency.</div></li>
                  <li><CheckCircle /> <div><strong>Predictive Analytics:</strong> Cash-flow aur liquidity ka pehle se andaza.</div></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="fs-section-dark" style={{textAlign: 'center', padding: '120px 0'}}>
          <div className="fs-container">
            <h2 className="fs-title" style={{fontSize: '48px', marginBottom: '24px'}}>Finance ko Digital Banana Mushkil Nahi Hai</h2>
            <p style={{fontSize: '20px', color: '#cbd5e1', maxWidth: '800px', margin: '0 auto 48px'}}>
              Kya aap purane systems se thak chuke hain? Kya aapka software aapki growth ko rok raha hai? Novadesk ke sath mil kar ek aisi financial technology banayein jo duniya badal de.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact-us" className="fs-btn fs-btn-primary">
                Contact Our Fintech Experts <ArrowRight />
              </Link>
              <a href="#" className="fs-btn fs-btn-white" style={{color: '#0b0f19'}}>
                Download Product Roadmap PDF
              </a>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
