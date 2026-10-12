import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import Breadcrumb from '../../components/Breadcrumb';

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

export default function Durgapur() {
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Locations", url: "/locations/durgapur" },
    { name: "Durgapur", url: "/locations/durgapur" }
  ];

  const faqs = [
    {
      q: "Can NovaDesk build custom software and ERP for Durgapur manufacturing units?",
      a: "Yes. We specialize in custom inventory management software, production tracking systems, quality assurance portals, and supply chain dashboards for steel plants, fabrication workshops, and manufacturing units across the Durgapur-Asansol industrial corridor."
    },
    {
      q: "Why should Durgapur businesses work with NovaDesk instead of local freelancers?",
      a: "Local freelancers often abandon projects midway or use rigid, unmaintainable templates. NovaDesk operates as an engineering studio with formal sprint contracts, clean Git version control, 100% intellectual property ownership, and guaranteed post-launch maintenance SLAs."
    },
    {
      q: "Can you upgrade our existing legacy Tally or Excel-based inventory into a cloud system?",
      a: "Yes. We migrate fragile offline spreadsheets and outdated desktop systems into secure, browser-accessible cloud web applications. Your floor managers, logistics coordinators, and accounting teams can securely access real-time data from any desktop or mobile device."
    },
    {
      q: "Do you build websites for schools, colleges, and healthcare institutions in Durgapur?",
      a: "Yes. We engineer compliant, fast web portals for educational institutions, diagnostic clinics, and hospital networks featuring online admissions, patient appointment booking, student fee payments, and automated WhatsApp notifications."
    },
    {
      q: "What is your typical project cost and engagement model for Durgapur businesses?",
      a: "Custom business websites typically start from ₹75,000 to ₹1.5 Lakh, while full-scale custom ERP and inventory software platforms range between ₹2 Lakh and ₹5 Lakh, depending on workflow modules and role-based permissions."
    }
  ];

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "NovaDesk - Software & Web Development Durgapur",
    "image": "https://www.novadesk.site/novadesk_team_5_members_hero.webp",
    "@id": "https://www.novadesk.site/locations/durgapur#localbusiness",
    "url": "https://www.novadesk.site/locations/durgapur",
    "telephone": "+91 93048 37537",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Durgapur",
      "addressRegion": "West Bengal",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 23.5204,
      "longitude": 87.3119
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "20:00"
    },
    "areaServed": [
      "Durgapur",
      "City Centre Durgapur",
      "Benachity",
      "Asansol",
      "Raniganj",
      "Paschim Bardhaman"
    ],
    "founder": {
      "@type": "Person",
      "name": "Harsh Prateek",
      "jobTitle": "Founder & Lead Engineer",
      "sameAs": [
        "https://www.linkedin.com/in/harshprateek001/",
        "https://calendly.com/itsharshprateek/30min"
      ]
    },
    "description": "NovaDesk delivers custom industrial software, ERP solutions, manufacturing workflow automation, and modern web development for enterprises across Durgapur, Asansol, and Paschim Bardhaman."
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
        title="Software & Web Development in Durgapur | Custom ERP & Web Studio | NovaDesk"
        description="NovaDesk delivers custom industrial software, ERP solutions, manufacturing workflow automation, and modern web development for enterprises across Durgapur, Asansol, and Raniganj."
        url="/locations/durgapur"
        keywords="software development company in Durgapur, web development Durgapur, website design City Centre Durgapur, ERP software Durgapur, industrial software Asansol, website developers Benachity"
        breadcrumbs={breadcrumbs}
        jsonLd={[localBusinessSchema, faqSchema]}
      />

      {/* Hero Section */}
      <section className="nd-service-hero">
        <div className="container">
          <Breadcrumb items={breadcrumbs} />
          <div className="row align-items-center">
            <div className="col-lg-8">
              <span className="nd-service-pill">Durgapur & Industrial Belt Partner</span>
              <h1 className="nd-service-h1">
                Custom Software, ERP & Web Engineering in <span className="nd-gradient-text">Durgapur</span>
              </h1>
              <p className="nd-service-lead">
                Powering Durgapur and Asansol's industrial leaders, healthcare networks, and educational institutions with custom cloud software, automated ERP systems, and high-performance commercial websites.
              </p>
              <div className="nd-service-cta-group">
                <Link to="/get-a-free-quote" className="nd-btn-primary">
                  Discuss Your Durgapur Project <ArrowRight />
                </Link>
                <a 
                  href="https://calendly.com/itsharshprateek/30min" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="nd-btn-outline"
                >
                  Book 15-Min Consultation
                </a>
              </div>
              <div className="nd-service-trust-bar">
                <span>Custom Industrial Solutions</span>
                <span>•</span>
                <span>Secure Cloud Deployment</span>
                <span>•</span>
                <span>Ongoing Maintenance & SLAs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Relevance */}
      <section className="nd-service-pain-points">
        <div className="container">
          <div className="nd-section-header text-center">
            <span className="nd-section-tag">Industrial Modernization</span>
            <h2>Digital Solutions Engineered for Durgapur's Industrial Ecosystem</h2>
            <p>From steel and fabrication to healthcare and education, we solve operational friction with modern software.</p>
          </div>
          <div className="row g-4 mt-2">
            <div className="col-md-4">
              <div className="nd-pain-card">
                <div className="nd-pain-num">01</div>
                <h3>Replacing Disjointed Paper & Excel</h3>
                <p>Manufacturing plants and fabricators lose thousands of hours tracking stock, dispatches, and raw materials across unlinked spreadsheets. We build unified, real-time cloud portals.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="nd-pain-card">
                <div className="nd-pain-num">02</div>
                <h3>Modern B2B Presence for Global RFQs</h3>
                <p>Durgapur engineering and export companies miss out on major corporate contracts because of slow, outdated web pages. We craft high-prestige web applications that win corporate RFQs.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="nd-pain-card">
                <div className="nd-pain-num">03</div>
                <h3>Automated Client & Vendor Workflows</h3>
                <p>We automate manual invoicing, vendor quotations, delivery tracking, and WhatsApp status updates, reducing administrative overhead by up to 60%.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Tailored to Durgapur */}
      <section className="nd-service-capabilities">
        <div className="container">
          <div className="nd-section-header">
            <span className="nd-section-tag">Solutions</span>
            <h2>Tailored Technology Services for Durgapur & Asansol</h2>
            <p>Built for security, field durability, and effortless staff adoption.</p>
          </div>
          <div className="row g-4 mt-3">
            <div className="col-lg-4 col-md-6">
              <div className="nd-cap-card">
                <div className="nd-cap-icon">🏭</div>
                <h3>Custom ERP & Inventory Systems</h3>
                <p>Tailor-made inventory, production planning, raw material management, and dispatch tracking software designed for manufacturing plants.</p>
                <ul className="nd-cap-list">
                  <li><CheckCircle /> Role-based floor & supervisor access</li>
                  <li><CheckCircle /> Real-time barcode & stock tracking</li>
                  <li><CheckCircle /> Automated GST invoice generation</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="nd-cap-card">
                <div className="nd-cap-icon">💻</div>
                <h3>High-Performance B2B Websites</h3>
                <p>Showcase your engineering capabilities, ISO certifications, and client portfolios to international buyers with sub-second page loads.</p>
                <ul className="nd-cap-list">
                  <li><CheckCircle /> Lightning-fast React / Next.js builds</li>
                  <li><CheckCircle /> RFQ & product catalog modules</li>
                  <li><CheckCircle /> Mobile-optimized for plant managers</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="nd-cap-card">
                <div className="nd-cap-icon">🏥</div>
                <h3>Healthcare & Institutional Portals</h3>
                <p>Secure online appointment booking, doctor directory management, and automated test report delivery for clinics and nursing homes.</p>
                <ul className="nd-cap-list">
                  <li><CheckCircle /> Online patient appointment flow</li>
                  <li><CheckCircle /> WhatsApp automated reminders</li>
                  <li><CheckCircle /> HIPAA-conscious secure data</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="nd-cap-card">
                <div className="nd-cap-icon">🎓</div>
                <h3>Education & Academy Portals</h3>
                <p>Admissions engines, fee payment gateways, and student notice portals for coaching institutes, polytechnics, and colleges.</p>
                <ul className="nd-cap-list">
                  <li><CheckCircle /> Online admission applications</li>
                  <li><CheckCircle /> UPI & Netbanking fee collection</li>
                  <li><CheckCircle /> Student & faculty dashboards</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="nd-cap-card">
                <div className="nd-cap-icon">🚚</div>
                <h3>Logistics & Fleet Management Dashboards</h3>
                <p>Track truck dispatches, consignment milestones, and driver logs across the Grand Trunk Road and industrial corridors.</p>
                <ul className="nd-cap-list">
                  <li><CheckCircle /> Real-time shipment status boards</li>
                  <li><CheckCircle /> Proof of delivery (POD) capture</li>
                  <li><CheckCircle /> Automated client SMS notifications</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="nd-cap-card">
                <div className="nd-cap-icon">🛡️</div>
                <h3>Cloud Migration & Data Security</h3>
                <p>Migrate vulnerable local on-premise servers to secure Google Cloud or AWS backends with automated daily backups.</p>
                <ul className="nd-cap-list">
                  <li><CheckCircle /> Disaster recovery & zero data loss</li>
                  <li><CheckCircle /> End-to-end data encryption</li>
                  <li><CheckCircle /> 99.9% uptime SLA</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Covered */}
      <section className="nd-service-tech-table">
        <div className="container">
          <div className="nd-section-header text-center">
            <span className="nd-section-tag">Coverage</span>
            <h2>Areas We Serve Across Paschim Bardhaman</h2>
            <p>Direct remote-and-onsite support throughout the industrial belt.</p>
          </div>
          <div className="row g-4 mt-2 text-center">
            <div className="col-md-3 col-6">
              <div className="nd-pain-card" style={{ padding: '24px 16px' }}>
                <h4 style={{ color: '#00FFB2', fontSize: '18px', marginBottom: '8px' }}>City Centre Durgapur</h4>
                <p style={{ fontSize: '13px', margin: 0, color: '#A0AEC0' }}>Commercial, Retail & Corporate Hub</p>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="nd-pain-card" style={{ padding: '24px 16px' }}>
                <h4 style={{ color: '#00FFB2', fontSize: '18px', marginBottom: '8px' }}>Benachity</h4>
                <p style={{ fontSize: '13px', margin: 0, color: '#A0AEC0' }}>Trading, Retail & Wholesale</p>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="nd-pain-card" style={{ padding: '24px 16px' }}>
                <h4 style={{ color: '#00FFB2', fontSize: '18px', marginBottom: '8px' }}>Asansol & Raniganj</h4>
                <p style={{ fontSize: '13px', margin: 0, color: '#A0AEC0' }}>Mining, Steel & Engineering Units</p>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="nd-pain-card" style={{ padding: '24px 16px' }}>
                <h4 style={{ color: '#00FFB2', fontSize: '18px', marginBottom: '8px' }}>Muchipara & Bidhannagar</h4>
                <p style={{ fontSize: '13px', margin: 0, color: '#A0AEC0' }}>Educational & Medical Complexes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="nd-service-faq">
        <div className="container">
          <div className="nd-section-header text-center">
            <span className="nd-section-tag">FAQs</span>
            <h2>Frequently Asked Questions About Durgapur Projects</h2>
            <p>Answers to questions regarding implementation, local support, and training.</p>
          </div>
          <div className="nd-faq-accordion mt-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className={`nd-faq-item ${openFaq === idx ? 'active' : ''}`}>
                <button 
                  className="nd-faq-question" 
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  aria-expanded={openFaq === idx}
                >
                  <span>{faq.q}</span>
                  <ChevronDown isOpen={openFaq === idx} />
                </button>
                {openFaq === idx && (
                  <div className="nd-faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Conversion Banner */}
      <section className="nd-service-cta-banner">
        <div className="container">
          <div className="nd-cta-box text-center">
            <h2>Modernize Your Durgapur Operations Today</h2>
            <p>Schedule a technical assessment with our engineering team to review your workflow and identify high-ROI digital improvements.</p>
            <div className="nd-service-cta-group justify-content-center">
              <Link to="/get-a-free-quote" className="nd-btn-primary">
                Request Free Workflow Audit <ArrowRight />
              </Link>
              <a 
                href="https://calendly.com/itsharshprateek/30min" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="nd-btn-outline"
              >
                Schedule Consultation Call
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
