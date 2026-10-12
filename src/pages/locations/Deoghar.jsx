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

export default function Deoghar() {
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Locations", url: "/locations/deoghar" },
    { name: "Deoghar HQ", url: "/locations/deoghar" }
  ];

  const faqs = [
    {
      q: "Where is NovaDesk headquartered?",
      a: "NovaDesk is proudly headquartered in Deoghar, Jharkhand. Our founding studio operates right here in the holy city of Baidyanath Dham, proving that world-class software engineering, AI systems, and modern web applications can be engineered from India's high-potential Tier-2 technology hubs."
    },
    {
      q: "Can Deoghar hotel and hospitality businesses get custom booking websites?",
      a: "Yes. We engineer direct room reservation systems with zero OTA commission, instant UPI/Razorpay payment confirmation, automated WhatsApp booking vouchers, and front-desk management tools tailored for Deoghar hotels, guest houses, and resorts."
    },
    {
      q: "Can I meet the NovaDesk engineering team in person in Deoghar?",
      a: "Absolutely. Local founders, school principals, medical directors, and business owners are always welcome to schedule an in-person discovery meeting with founder Harsh Prateek and our core engineering team."
    },
    {
      q: "How does NovaDesk help local retail shops sell online?",
      a: "We build fast, mobile-first e-commerce portals and WhatsApp-integrated ordering catalogs that allow Deoghar merchants to sell their products locally and across India with automated shipping label generation and online UPI payments."
    },
    {
      q: "What is your typical project cost for businesses in Deoghar and Santhal Pargana?",
      a: "High-speed business websites and mobile portals start from ₹40,000 to ₹90,000, while custom booking systems and inventory software typically range between ₹1 Lakh and ₹2.5 Lakh with milestone billing and full training provided."
    }
  ];

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "NovaDesk Headquarters - Web Development & IT Studio Deoghar",
    "image": "https://www.novadesk.site/novadesk_team_5_members_hero.webp",
    "@id": "https://www.novadesk.site/locations/deoghar#localbusiness",
    "url": "https://www.novadesk.site/locations/deoghar",
    "telephone": "+91 93048 37537",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Deoghar",
      "addressRegion": "Jharkhand",
      "postalCode": "814112",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 24.4826,
      "longitude": 86.6977
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "20:00"
    },
    "areaServed": [
      "Deoghar",
      "Baidyanath Dham",
      "Jasidih",
      "Madhupur",
      "Dumka",
      "Jharkhand"
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
    "description": "NovaDesk's founding technology studio in Deoghar, Jharkhand. Building world-class web applications, AI tools, and digital solutions for local enterprises and global clients."
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
        title="Web Development & IT Services in Deoghar | NovaDesk HQ Studio"
        description="NovaDesk's founding technology studio in Deoghar, Jharkhand. Building world-class web applications, AI tools, and digital solutions for local enterprises and global clients."
        url="/locations/deoghar"
        keywords="web development company in Deoghar, website design Deoghar, IT company Deoghar Jharkhand, software company Jasidih, website developers Baidyanath Dham, best web design Deoghar"
        breadcrumbs={breadcrumbs}
        jsonLd={[localBusinessSchema, faqSchema]}
      />

      {/* Hero Section */}
      <section className="nd-service-hero">
        <div className="container">
          <Breadcrumb items={breadcrumbs} />
          <div className="row align-items-center">
            <div className="col-lg-8">
              <span className="nd-service-pill">NovaDesk Global HQ Studio</span>
              <h1 className="nd-service-h1">
                World-Class Web & Software Engineering, Born in <span className="nd-gradient-text">Deoghar</span>
              </h1>
              <p className="nd-service-lead">
                Headquartered in the historic spiritual and cultural capital of Baidyanath Dham, NovaDesk connects Deoghar and Santhal Pargana businesses with enterprise-grade web applications, AI automation, and national digital growth.
              </p>
              <div className="nd-service-cta-group">
                <Link to="/get-a-free-quote" className="nd-btn-primary">
                  Meet Us in Deoghar <ArrowRight />
                </Link>
                <a 
                  href="https://calendly.com/itsharshprateek/30min" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="nd-btn-outline"
                >
                  Book 15-Min Meeting
                </a>
              </div>
              <div className="nd-service-trust-bar">
                <span>Direct Studio Access in Deoghar</span>
                <span>•</span>
                <span>Pan-India & Global Client Reach</span>
                <span>•</span>
                <span>Full IP Ownership</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Story & Vision */}
      <section className="nd-service-pain-points">
        <div className="container">
          <div className="nd-section-header text-center">
            <span className="nd-section-tag">Tier-2 Tech Revolution</span>
            <h2>Bridging Local Excellence with Global Technology Standards</h2>
            <p>We believe high-caliber engineering shouldn't only happen in metro hubs.</p>
          </div>
          <div className="row g-4 mt-2">
            <div className="col-md-4">
              <div className="nd-pain-card">
                <div className="nd-pain-num">01</div>
                <h3>Empowering Local Tourism & Retail</h3>
                <p>Millions visit Baidyanath Dham each year. We help Deoghar hotels, tour operators, and specialty retailers capture direct direct bookings without losing 20-30% commissions to middlemen.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="nd-pain-card">
                <div className="nd-pain-num">02</div>
                <h3>Enterprise Code Quality, Accessible Pricing</h3>
                <p>Because our core studio is based in Deoghar, we maintain lean operational overhead and pass those efficiencies directly to our clients without compromising on code quality.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="nd-pain-card">
                <div className="nd-pain-num">03</div>
                <h3>In-Person Trust & Long-Term Accountability</h3>
                <p>We are not an anonymous online team. We are active members of the local community, readily available for in-person consultations, staff training, and ongoing technical support.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Tailored to Deoghar & Jharkhand */}
      <section className="nd-service-capabilities">
        <div className="container">
          <div className="nd-section-header">
            <span className="nd-section-tag">Capabilities</span>
            <h2>Digital Solutions for Deoghar Businesses</h2>
            <p>High-speed, modern digital platforms built for long-term growth.</p>
          </div>
          <div className="row g-4 mt-3">
            <div className="col-lg-4 col-md-6">
              <div className="nd-cap-card">
                <div className="nd-cap-icon">🏨</div>
                <h3>Hotel & Resort Direct Booking Engines</h3>
                <p>Commission-free direct room reservation platforms with instant UPI payments, automated WhatsApp confirmations, and front-desk booking calendars.</p>
                <ul className="nd-cap-list">
                  <li><CheckCircle /> Zero OTA commission fees</li>
                  <li><CheckCircle /> Instant UPI & QR payments</li>
                  <li><CheckCircle /> Mobile check-in workflows</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="nd-cap-card">
                <div className="nd-cap-icon">💻</div>
                <h3>Business Website Development</h3>
                <p>Ultra-fast websites for hospitals, schools, coaching institutes, and legal firms that rank on the first page of Google across Jharkhand.</p>
                <ul className="nd-cap-list">
                  <li><CheckCircle /> Sub-second page load speeds</li>
                  <li><CheckCircle /> Clean mobile-first design</li>
                  <li><CheckCircle /> Integrated WhatsApp inquiry buttons</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="nd-cap-card">
                <div className="nd-cap-icon">🛍️</div>
                <h3>E-Commerce & Peda / Prasad Stores</h3>
                <p>Modern online stores allowing local sweet manufacturers, handicrafts, and merchants to ship Deoghar specialties to customers nationwide.</p>
                <ul className="nd-cap-list">
                  <li><CheckCircle /> Nationwide courier API integration</li>
                  <li><CheckCircle /> Secure payment gateways (Razorpay)</li>
                  <li><CheckCircle /> Easy mobile order management</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="nd-cap-card">
                <div className="nd-cap-icon">🏥</div>
                <h3>Healthcare & Diagnostic Portals</h3>
                <p>Appointment booking calendars, doctor profiles, and digital lab report delivery for local nursing homes, doctors, and diagnostic centers.</p>
                <ul className="nd-cap-list">
                  <li><CheckCircle /> Patient appointment scheduling</li>
                  <li><CheckCircle /> WhatsApp prescription alerts</li>
                  <li><CheckCircle /> Fast doctor directory search</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="nd-cap-card">
                <div className="nd-cap-icon">📍</div>
                <h3>Google Local Maps & SEO</h3>
                <p>Get found when tourists and local residents search for your business on Google Maps, Google Search, and voice assistants.</p>
                <ul className="nd-cap-list">
                  <li><CheckCircle /> Google Business Profile verification</li>
                  <li><CheckCircle /> High-ranking local keywords</li>
                  <li><CheckCircle /> Review collection strategies</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="nd-cap-card">
                <div className="nd-cap-icon">🌐</div>
                <h3>Pan-India & Global Remote Delivery</h3>
                <p>From our Deoghar HQ, our senior engineers collaborate with startups across Mumbai, Bengaluru, Delhi, the US, and Europe.</p>
                <ul className="nd-cap-list">
                  <li><CheckCircle /> Daily async Slack/Zoom updates</li>
                  <li><CheckCircle /> Weekly Friday staging deployments</li>
                  <li><CheckCircle /> International timezone alignment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Surrounding Region Coverage */}
      <section className="nd-service-tech-table">
        <div className="container">
          <div className="nd-section-header text-center">
            <span className="nd-section-tag">Regional Hub</span>
            <h2>Serving Deoghar & the Santhal Pargana Region</h2>
            <p>Active technology development across regional commercial centers.</p>
          </div>
          <div className="row g-4 mt-2 text-center">
            <div className="col-md-3 col-6">
              <div className="nd-pain-card" style={{ padding: '24px 16px' }}>
                <h4 style={{ color: '#00FFB2', fontSize: '18px', marginBottom: '8px' }}>Baidyanath Dham</h4>
                <p style={{ fontSize: '13px', margin: 0, color: '#A0AEC0' }}>Tourism, Hospitality & Religious Hub</p>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="nd-pain-card" style={{ padding: '24px 16px' }}>
                <h4 style={{ color: '#00FFB2', fontSize: '18px', marginBottom: '8px' }}>Jasidih Junction</h4>
                <p style={{ fontSize: '13px', margin: 0, color: '#A0AEC0' }}>Industrial, Logistics & Rail Hub</p>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="nd-pain-card" style={{ padding: '24px 16px' }}>
                <h4 style={{ color: '#00FFB2', fontSize: '18px', marginBottom: '8px' }}>Madhupur</h4>
                <p style={{ fontSize: '13px', margin: 0, color: '#A0AEC0' }}>Residential, Educational & Retail</p>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="nd-pain-card" style={{ padding: '24px 16px' }}>
                <h4 style={{ color: '#00FFB2', fontSize: '18px', marginBottom: '8px' }}>Dumka & Santhal Pargana</h4>
                <p style={{ fontSize: '13px', margin: 0, color: '#A0AEC0' }}>Institutional & Regional Trade</p>
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
            <h2>Frequently Asked Questions About Deoghar HQ</h2>
            <p>Learn more about our local services, studio visits, and project delivery.</p>
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
            <h2>Let’s Build Something Remarkable Together in Deoghar</h2>
            <p>Visit our Deoghar studio or schedule a consultation with our core team to discuss your project.</p>
            <div className="nd-service-cta-group justify-content-center">
              <Link to="/get-a-free-quote" className="nd-btn-primary">
                Request Free Deoghar Consultation <ArrowRight />
              </Link>
              <a 
                href="https://calendly.com/itsharshprateek/30min" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="nd-btn-outline"
              >
                Schedule Video Call
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
