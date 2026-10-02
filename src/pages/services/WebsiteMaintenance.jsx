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

export default function WebsiteMaintenance() {
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services/website-maintenance" },
    { name: "Website Maintenance", url: "/services/website-maintenance" }
  ];

  const faqs = [
    {
      q: "What types of websites and applications does NovaDesk maintain?",
      a: "We maintain both modern JavaScript web applications (React, Next.js, Vue, Node.js) and CMS platforms (WordPress, WooCommerce, Shopify, headless CMS). Whether you run an enterprise B2B SaaS platform, an e-commerce storefront, or a high-traffic media site, our engineers support your stack."
    },
    {
      q: "How fast is your emergency support response time?",
      a: "For critical production outages, broken checkout flows, or security breaches, our Priority SLA guarantees an engineer actively investigating within 60 to 120 minutes, 24/7/365. For standard maintenance requests and content updates, typical turnaround is within 24 business hours."
    },
    {
      q: "How do you handle backups and disaster recovery?",
      a: "We implement automated daily and weekly redundant off-site cloud backups (AWS S3 or Google Cloud Storage) with versioning. In the unlikely event of data corruption, malicious attack, or hosting failure, we can restore your platform to clean operational health in minutes."
    },
    {
      q: "Are unused maintenance hours rolled over to the next month?",
      a: "Yes. On our dedicated retainer plans, up to 50% of unused monthly development and support hours roll over into the following billing cycle, ensuring you always extract maximum value for ongoing feature upgrades and redesigns."
    },
    {
      q: "Do you monitor our site for broken links, form failures, and Core Web Vitals regression?",
      a: "Yes. Our monitoring stack pings your website every 60 seconds, automatically tests critical lead capture forms, validates SSL certificates, and tracks Core Web Vitals to alert us before your visitors or customers encounter any downtime."
    }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Website Maintenance & Web Application Support Services",
    "serviceType": "Proactive Maintenance, 24/7 Uptime Monitoring, Security Patching & SLA Support",
    "provider": {
      "@type": "Organization",
      "@id": "https://www.novadesk.site/#organization",
      "name": "NovaDesk",
      "url": "https://www.novadesk.site/"
    },
    "areaServed": ["India", "United States", "United Kingdom", "Worldwide"],
    "description": "Enterprise-grade website maintenance and ongoing engineering support. 24/7 uptime monitoring, vulnerability patching, Core Web Vitals speed tuning, and SLA-backed emergency turnaround."
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
        title="Website Maintenance & Support Services | SLA-Backed Web Management | NovaDesk"
        description="Proactive website maintenance, 24/7 uptime monitoring, security patching, Core Web Vitals speed tuning, and SLA-backed emergency support by senior product engineers."
        url="/services/website-maintenance"
        keywords="website maintenance services, web application support, website security updates, speed optimization services, SLA web maintenance, wordpress maintenance, react app maintenance India"
        breadcrumbs={breadcrumbs}
        jsonLd={[serviceSchema, faqSchema]}
      />

      {/* Hero Section */}
      <section className="nd-service-hero">
        <div className="container">
          <Breadcrumb items={breadcrumbs} />
          <div className="row align-items-center">
            <div className="col-lg-8">
              <span className="nd-service-pill">Proactive Engineering Care</span>
              <h1 className="nd-service-h1">
                Website Maintenance & Support That Keeps Your Business <span className="nd-gradient-text">100% Secure & Fast</span>
              </h1>
              <p className="nd-service-lead">
                Stop worrying about server crashes, malware infections, and broken contact forms. NovaDesk delivers proactive 24/7 uptime monitoring, instant security patching, speed tuning, and SLA-backed engineering support.
              </p>
              <div className="nd-service-cta-group">
                <Link to="/get-a-free-quote" className="nd-btn-primary">
                  Choose a Maintenance Plan <ArrowRight />
                </Link>
                <a 
                  href="https://calendly.com/harshprateek001/30min" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="nd-btn-outline"
                >
                  Book 15-Min Consultation
                </a>
              </div>
              <div className="nd-service-trust-bar">
                <span>99.9% Uptime Guarantee</span>
                <span>•</span>
                <span>Sub-2-Hour Critical SLA</span>
                <span>•</span>
                <span>Daily Off-Site Cloud Backups</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Pain Points Section */}
      <section className="nd-service-pain-points">
        <div className="container">
          <div className="nd-section-header text-center">
            <span className="nd-section-tag">The Cost of Neglect</span>
            <h2>Why Unmaintained Websites Bleed Revenue</h2>
            <p>Neglecting maintenance turns high-converting websites into slow, vulnerable liabilities.</p>
          </div>
          <div className="row g-4 mt-2">
            <div className="col-md-4">
              <div className="nd-pain-card">
                <div className="nd-pain-num">01</div>
                <h3>Silent Lead Capture Failures</h3>
                <p>Third-party API updates and server script errors frequently break checkout buttons and contact forms silently, causing you to lose high-value inbound leads without knowing.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="nd-pain-card">
                <div className="nd-pain-num">02</div>
                <h3>Malware & Security Exploits</h3>
                <p>Outdated dependencies, unpatched CMS plugins, and deprecated server libraries invite automated bots to inject malicious spam, leading to immediate Google blocklisting.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="nd-pain-card">
                <div className="nd-pain-num">03</div>
                <h3>Speed Decay & Ranking Drop</h3>
                <p>Over time, unoptimized media uploads, uncleaned database tables, and bloated scripts cause page load times to balloon, wrecking SEO rankings and user conversions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Maintenance Pillars */}
      <section className="nd-service-capabilities">
        <div className="container">
          <div className="nd-section-header">
            <span className="nd-section-tag">Comprehensive Protection</span>
            <h2>Our Complete Website Management Stack</h2>
            <p>We treat your digital infrastructure with the exact same rigor as mission-critical enterprise software.</p>
          </div>
          <div className="row g-4 mt-3">
            <div className="col-lg-4 col-md-6">
              <div className="nd-cap-card">
                <div className="nd-cap-icon">🛡️</div>
                <h3>24/7 Uptime & Health Monitoring</h3>
                <p>Automated synthetic pings test your site every 60 seconds from multiple global servers, alerting on-call engineers the moment latency spikes or downtime occurs.</p>
                <ul className="nd-cap-list">
                  <li><CheckCircle /> 60-second health check pings</li>
                  <li><CheckCircle /> Automated SSL expiry detection</li>
                  <li><CheckCircle /> Transactional form workflow testing</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="nd-cap-card">
                <div className="nd-cap-icon">🔒</div>
                <h3>Security Audits & Patching</h3>
                <p>Continuous dependency scanning, automated vulnerability audits (npm audit, CVE trackers), and immediate security patch deployments prevent malware and data breaches.</p>
                <ul className="nd-cap-list">
                  <li><CheckCircle /> Zero-day exploit remediation</li>
                  <li><CheckCircle /> Web Application Firewall (WAF) tuning</li>
                  <li><CheckCircle /> Malware & injection scanning</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="nd-cap-card">
                <div className="nd-cap-icon">⚡</div>
                <h3>Continuous Performance Tuning</h3>
                <p>We audit asset payloads, purge unused CSS, optimize database queries, tune CDN caching rules, and keep your Core Web Vitals score green month after month.</p>
                <ul className="nd-cap-list">
                  <li><CheckCircle /> Monthly Core Web Vitals audits</li>
                  <li><CheckCircle /> Image and script re-optimization</li>
                  <li><CheckCircle /> Database defragmentation & cleaning</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="nd-cap-card">
                <div className="nd-cap-icon">💾</div>
                <h3>Off-Site Backups & Disaster Recovery</h3>
                <p>Automated daily snapshot backups stored in encrypted, geographically redundant cloud storage. Complete single-click restoration guarantees peace of mind.</p>
                <ul className="nd-cap-list">
                  <li><CheckCircle /> Encrypted cloud storage (AWS / GCP)</li>
                  <li><CheckCircle /> 30-day point-in-time recovery</li>
                  <li><CheckCircle /> Tested sandbox restoration drills</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="nd-cap-card">
                <div className="nd-cap-icon">🛠️</div>
                <h3>Feature Updates & Bug Squashing</h3>
                <p>Need a new landing page, banner swap, integration adjustment, or copy edit? Your dedicated monthly support hours cover routine front-and-backend development.</p>
                <ul className="nd-cap-list">
                  <li><CheckCircle /> Content & marketing banner updates</li>
                  <li><CheckCircle /> CRM, webhook, and API adjustments</li>
                  <li><CheckCircle /> UI tweaks & responsiveness fixes</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="nd-cap-card">
                <div className="nd-cap-icon">📈</div>
                <h3>Monthly Health & ROI Reports</h3>
                <p>Full transparency. Every month, you receive a detailed executive summary detailing uptime statistics, security scans, performance benchmarks, and completed tasks.</p>
                <ul className="nd-cap-list">
                  <li><CheckCircle /> Clear task and hour burn reports</li>
                  <li><CheckCircle /> Traffic and speed trend tracking</li>
                  <li><CheckCircle /> Proactive architectural recommendations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="nd-service-tech-table">
        <div className="container">
          <div className="nd-section-header text-center">
            <span className="nd-section-tag">Comparison</span>
            <h2>Why Choose NovaDesk SLA Maintenance?</h2>
            <p>Direct access to senior developers who know your codebase inside and out.</p>
          </div>
          <div className="table-responsive mt-4">
            <table className="nd-compare-table">
              <thead>
                <tr>
                  <th>Maintenance Feature</th>
                  <th>Generic Hosting / Freelancer</th>
                  <th>NovaDesk Retainer Support</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Engineers on Call</strong></td>
                  <td>Junior support or outsourced ticketing queues</td>
                  <td><strong>Direct access to senior full-stack product engineers</strong></td>
                </tr>
                <tr>
                  <td><strong>Response Time</strong></td>
                  <td>2 to 5 business days (or radio silence)</td>
                  <td><strong>Guaranteed sub-2-hour emergency response SLA</strong></td>
                </tr>
                <tr>
                  <td><strong>Codebase Knowledge</strong></td>
                  <td>Treats your app as unfamiliar every time</td>
                  <td><strong>Dedicated Git repository context & continuous staging</strong></td>
                </tr>
                <tr>
                  <td><strong>Proactive vs Reactive</strong></td>
                  <td>Only reacts when you discover the site is down</td>
                  <td><strong>Proactive synthetic monitoring catches issues beforehand</strong></td>
                </tr>
                <tr>
                  <td><strong>Hour Rollover</strong></td>
                  <td>Use-it-or-lose-it rigid contracts</td>
                  <td><strong>Flexible rollovers for upcoming redesigns and features</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="nd-service-faq">
        <div className="container">
          <div className="nd-section-header text-center">
            <span className="nd-section-tag">Common Inquiries</span>
            <h2>Frequently Asked Questions About Maintenance</h2>
            <p>Find answers to common questions about our support plans and SLAs.</p>
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
            <h2>Give Your Website the Engineering Care It Deserves</h2>
            <p>Ensure maximum uptime, watertight security, and blazing-fast loading speeds with our dedicated website maintenance plans.</p>
            <div className="nd-service-cta-group justify-content-center">
              <Link to="/get-a-free-quote" className="nd-btn-primary">
                Explore Maintenance Retainers <ArrowRight />
              </Link>
              <a 
                href="https://calendly.com/harshprateek001/30min" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="nd-btn-outline"
              >
                Schedule Support Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
