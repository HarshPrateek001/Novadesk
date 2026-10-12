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

export default function Kolkata() {
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Locations", url: "/locations/kolkata" },
    { name: "Kolkata", url: "/locations/kolkata" }
  ];

  const faqs = [
    {
      q: "Does NovaDesk have developers available for meetings in Kolkata?",
      a: "Yes. Our engineering leadership frequently collaborates on-site with founders, corporate teams, and marketing directors across Salt Lake Sector V, Rajarhat New Town, and Park Street. We blend dedicated remote sprint execution with in-person milestone and architecture workshops."
    },
    {
      q: "What types of Kolkata businesses do you specialize in serving?",
      a: "We partner with fast-growing East India startups, D2C consumer brands, healthcare providers, education groups, manufacturing conglomerates, and fintech ventures looking to modernize their legacy portals into high-performance web applications and AI workflows."
    },
    {
      q: "How does NovaDesk compare to traditional Salt Lake Sector V agencies?",
      a: "Traditional legacy IT agencies in Kolkata often bill inflated hourly rates, operate through bureaucratic middle management, and deliver slow, template-driven websites. At NovaDesk, you work directly with senior product engineers led by founder Harsh Prateek. We ship production code in 3-week sprint cycles with guaranteed 100% intellectual property ownership."
    },
    {
      q: "Can you help our Kolkata business rank on Google for local and national search terms?",
      a: "Absolutely. Every web application we engineer is built with technical SEO at its foundation: sub-2.5s Core Web Vitals, Schema.org LocalBusiness structured data, mobile-first responsive layouts, and search engine friendly internal architectures designed to dominate competitive commercial keywords."
    },
    {
      q: "What is your typical project timeline and pricing for Kolkata clients?",
      a: "Custom business web applications and high-conversion e-commerce platforms typically range from ₹1.5 Lakh to ₹6 Lakh ($2,000 to $8,000 USD), with standard production timelines spanning 3 to 6 weeks under fixed-milestone deliverables."
    }
  ];

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "NovaDesk - Web Development & AI Agency Kolkata",
    "image": "https://www.novadesk.site/novadesk_team_5_members_hero.webp",
    "@id": "https://www.novadesk.site/locations/kolkata#localbusiness",
    "url": "https://www.novadesk.site/locations/kolkata",
    "telephone": "+91 93048 37537",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kolkata",
      "addressRegion": "West Bengal",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 22.5726,
      "longitude": 88.3639
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "20:00"
    },
    "areaServed": [
      "Kolkata",
      "Salt Lake Sector V",
      "New Town Rajarhat",
      "Howrah",
      "Park Street",
      "West Bengal"
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
    "description": "NovaDesk delivers modern web development, custom software engineering, e-commerce, and generative AI solutions for enterprises and startups in Kolkata, West Bengal."
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
        title="Web Development Company in Kolkata | Custom Software & AI Agency | NovaDesk"
        description="NovaDesk is a premier web development and software company serving Kolkata startups and enterprises across Salt Lake Sector V, Rajarhat, and New Town. High-performance Next.js, AI, and e-commerce."
        url="/locations/kolkata"
        keywords="web development company in Kolkata, website developers Kolkata, software company Salt Lake Sector V, web design agency Rajarhat New Town, IT company Kolkata, ecommerce developers Kolkata"
        breadcrumbs={breadcrumbs}
        jsonLd={[localBusinessSchema, faqSchema]}
      />

      {/* Hero Section */}
      <section className="nd-service-hero">
        <div className="container">
          <Breadcrumb items={breadcrumbs} />
          <div className="row align-items-center">
            <div className="col-lg-8">
              <span className="nd-service-pill">Kolkata Technology Partner</span>
              <h1 className="nd-service-h1">
                Premier Web Development & Custom Software Studio in <span className="nd-gradient-text">Kolkata</span>
              </h1>
              <p className="nd-service-lead">
                From Salt Lake Sector V to Rajarhat New Town and Park Street, NovaDesk empowers Kolkata's ambitious startups and established businesses with modern web applications, scalable e-commerce systems, and production AI.
              </p>
              <div className="nd-service-cta-group">
                <Link to="/get-a-free-quote" className="nd-btn-primary">
                  Start Your Kolkata Project <ArrowRight />
                </Link>
                <a 
                  href="https://calendly.com/itsharshprateek/30min" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="nd-btn-outline"
                >
                  Book 15-Min Strategy Call
                </a>
              </div>
              <div className="nd-service-trust-bar">
                <span>Direct Access to Senior Engineers</span>
                <span>•</span>
                <span>3-Week MVP Delivery</span>
                <span>•</span>
                <span>100% Code Ownership</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Localized Business Value */}
      <section className="nd-service-pain-points">
        <div className="container">
          <div className="nd-section-header text-center">
            <span className="nd-section-tag">East India Tech Hub</span>
            <h2>Why Kolkata Enterprises Choose NovaDesk Over Traditional Agencies</h2>
            <p>We eliminate outdated waterfall workflows, bloated agency retainers, and generic WordPress templates.</p>
          </div>
          <div className="row g-4 mt-2">
            <div className="col-md-4">
              <div className="nd-pain-card">
                <div className="nd-pain-num">01</div>
                <h3>Modern Engineering vs. Clunky Legacy Stacks</h3>
                <p>While many legacy Salt Lake firms still deliver slow PHP/WordPress templates, NovaDesk builds with React, Next.js, and serverless cloud architectures that load in under 1 second.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="nd-pain-card">
                <div className="nd-pain-num">02</div>
                <h3>Direct Engineer Access, Zero Middlemen</h3>
                <p>You speak directly with technical architects and founders who write code, ensuring rapid problem solving without lost context or bureaucratic account managers.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="nd-pain-card">
                <div className="nd-pain-num">03</div>
                <h3>Commercial & Conversion Focused</h3>
                <p>We don't build digital brochures. Every interface is engineered to capture qualified inbound leads, rank on Google's first page, and convert Kolkata traffic into paying customers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Tailored to Kolkata */}
      <section className="nd-service-capabilities">
        <div className="container">
          <div className="nd-section-header">
            <span className="nd-section-tag">Core Services</span>
            <h2>Software & Web Solutions for Kolkata Businesses</h2>
            <p>Engineered for high growth, enterprise reliability, and outstanding brand prestige.</p>
          </div>
          <div className="row g-4 mt-3">
            <div className="col-lg-4 col-md-6">
              <div className="nd-cap-card">
                <div className="nd-cap-icon">💻</div>
                <h3>Custom Web Development</h3>
                <p>High-performance web apps built on Next.js, React, and Node.js for Kolkata fintechs, professional consultancies, and commercial brands.</p>
                <ul className="nd-cap-list">
                  <li><CheckCircle /> Sub-2.5s Core Web Vitals</li>
                  <li><CheckCircle /> Responsive across all devices</li>
                  <li><CheckCircle /> Robust API and database integrations</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="nd-cap-card">
                <div className="nd-cap-icon">🛍️</div>
                <h3>E-Commerce & D2C Storefronts</h3>
                <p>Engineered for Bengal's thriving retail, lifestyle, and consumer brands with fast checkout, multi-currency support, and CRM syncing.</p>
                <ul className="nd-cap-list">
                  <li><CheckCircle /> Custom Shopify & Headless setups</li>
                  <li><CheckCircle /> Razorpay, Cashfree & UPI integration</li>
                  <li><CheckCircle /> Cart abandonment recovery</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="nd-cap-card">
                <div className="nd-cap-icon">🤖</div>
                <h3>AI & Business Automation</h3>
                <p>Custom LLM knowledge assistants, WhatsApp automated customer support bots, and internal workflow tools for Kolkata enterprises.</p>
                <ul className="nd-cap-list">
                  <li><CheckCircle /> Internal enterprise document RAG</li>
                  <li><CheckCircle /> Smart customer support bots</li>
                  <li><CheckCircle /> Automated lead qualification</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="nd-cap-card">
                <div className="nd-cap-icon">🎨</div>
                <h3>UI/UX Product Design</h3>
                <p>Clean, high-fidelity Figma prototypes and accessible design systems tailored for user retention and conversion clarity.</p>
                <ul className="nd-cap-list">
                  <li><CheckCircle /> Comprehensive Figma component libraries</li>
                  <li><CheckCircle /> User journey & wireframe testing</li>
                  <li><CheckCircle /> WCAG 2.2 AA accessibility</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="nd-cap-card">
                <div className="nd-cap-icon">🔍</div>
                <h3>Kolkata Local & National SEO</h3>
                <p>Dominate Google search results across Salt Lake, Rajarhat, and national business keywords with white-hat technical search architecture.</p>
                <ul className="nd-cap-list">
                  <li><CheckCircle /> Google Business Profile optimization</li>
                  <li><CheckCircle /> Localized Schema.org markup</li>
                  <li><CheckCircle /> High-intent keyword targeting</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="nd-cap-card">
                <div className="nd-cap-icon">🛡️</div>
                <h3>Website Maintenance & SLA Support</h3>
                <p>Continuous uptime monitoring, malware protection, and sub-2-hour critical bug remediation for mission-critical web platforms.</p>
                <ul className="nd-cap-list">
                  <li><CheckCircle /> 24/7 proactive health monitoring</li>
                  <li><CheckCircle /> Daily automated cloud backups</li>
                  <li><CheckCircle /> Dedicated developer hours</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Served in Greater Kolkata */}
      <section className="nd-service-tech-table">
        <div className="container">
          <div className="nd-section-header text-center">
            <span className="nd-section-tag">Regional Reach</span>
            <h2>Areas We Serve Across Greater Kolkata & West Bengal</h2>
            <p>Delivering high-touch digital engineering across all major business districts.</p>
          </div>
          <div className="row g-4 mt-2 text-center">
            <div className="col-md-3 col-6">
              <div className="nd-pain-card" style={{ padding: '24px 16px' }}>
                <h4 style={{ color: '#00FFB2', fontSize: '18px', marginBottom: '8px' }}>Salt Lake Sector V</h4>
                <p style={{ fontSize: '13px', margin: 0, color: '#A0AEC0' }}>IT Parks, Startups & Software Studios</p>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="nd-pain-card" style={{ padding: '24px 16px' }}>
                <h4 style={{ color: '#00FFB2', fontSize: '18px', marginBottom: '8px' }}>New Town Rajarhat</h4>
                <p style={{ fontSize: '13px', margin: 0, color: '#A0AEC0' }}>Tech Corridors & Financial Hubs</p>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="nd-pain-card" style={{ padding: '24px 16px' }}>
                <h4 style={{ color: '#00FFB2', fontSize: '18px', marginBottom: '8px' }}>Park Street & Central</h4>
                <p style={{ fontSize: '13px', margin: 0, color: '#A0AEC0' }}>Corporate HQs & Hospitality Groups</p>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="nd-pain-card" style={{ padding: '24px 16px' }}>
                <h4 style={{ color: '#00FFB2', fontSize: '18px', marginBottom: '8px' }}>Howrah & Suburbs</h4>
                <p style={{ fontSize: '13px', margin: 0, color: '#A0AEC0' }}>Industrial, Manufacturing & Retail</p>
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
            <h2>Frequently Asked Questions About Kolkata Projects</h2>
            <p>Common questions from Kolkata founders and enterprise stakeholders.</p>
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
            <h2>Ready to Elevate Your Kolkata Business Online?</h2>
            <p>Collaborate with a technology partner that values engineering quality, transparent timelines, and measurable revenue growth.</p>
            <div className="nd-service-cta-group justify-content-center">
              <Link to="/get-a-free-quote" className="nd-btn-primary">
                Get a Quote for Your Kolkata Project <ArrowRight />
              </Link>
              <a 
                href="https://calendly.com/itsharshprateek/30min" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="nd-btn-outline"
              >
                Schedule Strategy Call
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
