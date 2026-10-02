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

export default function UiUxDesign() {
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services/ui-ux-design" },
    { name: "UI/UX Design", url: "/services/ui-ux-design" }
  ];

  const faqs = [
    {
      q: "What design tools and deliverables does NovaDesk provide?",
      a: "We deliver full interactive Figma design systems, component libraries, high-fidelity clickable mobile & desktop prototypes, UX user journey maps, design tokens, and developer-ready handoff specs."
    },
    {
      q: "Can you redesign an existing software application or SaaS platform?",
      a: "Yes. We conduct complete UI/UX heuristic audits of your existing product to identify user drop-offs, accessibility bottlenecks, and visual inconsistencies, followed by an iterative redesign sprint."
    },
    {
      q: "Do your designs comply with WCAG accessibility standards?",
      a: "Yes. Every color palette, typography hierarchy, button touch target, and form interaction is designed from ground up to satisfy WCAG 2.2 AA contrast and usability requirements."
    },
    {
      q: "How fast is a typical UI/UX design sprint?",
      a: "A focused MVP design sprint or landing page design system is typically delivered in 2 to 3 weeks, with review sessions every 4 business days."
    }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "UI/UX Design & Product Design Services",
    "serviceType": "Digital Product Design, Design Systems & SaaS UX",
    "provider": {
      "@type": "Organization",
      "@id": "https://www.novadesk.site/#organization",
      "name": "NovaDesk",
      "url": "https://www.novadesk.site/"
    },
    "areaServed": ["India", "United States", "United Kingdom", "Worldwide"],
    "description": "Bespoke UI/UX design services, interactive Figma design systems, SaaS dashboards, and conversion-optimized mobile app design."
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
        title="UI/UX Design Company | Digital Product & SaaS Design Studio"
        description="NovaDesk is a premier UI/UX design studio crafting modern, accessible, conversion-driven digital products, SaaS dashboards, and mobile applications. Get a design quote."
        url="/services/ui-ux-design"
        keywords="UI UX design company, product design agency, SaaS UI UX design, mobile app design studio, hire Figma designers, digital product design India"
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
        .nd-svc-container { max-width: 1280px; margin: 0 auto; padding: 0 24px; }
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
        .nd-btn-main:hover { background: #1914b8; transform: translateY(-2px); }
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
        .nd-svc-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; margin: 60px 0; }
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
        .nd-svc-card-tag { font-size: 11px; font-weight: 700; color: #2E29FF; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 12px; display: block; }
        .nd-svc-card h3 { font-size: 22px; font-weight: 800; color: #0A0A2E; margin-bottom: 12px; }
        .nd-svc-card p { font-size: 14.5px; line-height: 1.6; color: #475569; margin: 0; }
        .nd-process-box { background: #0A0A2E; color: #ffffff; border-radius: 28px; padding: 60px 40px; margin: 80px 0; }
        .nd-process-steps-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px; margin-top: 40px; }
        .nd-step-card { border-left: 2px solid rgba(255, 255, 255, 0.2); padding-left: 20px; }
        .nd-step-num { font-size: 13px; font-weight: 800; color: #00FFB2; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 8px; }
        .nd-step-card h4 { font-size: 18px; font-weight: 700; color: #ffffff; margin-bottom: 8px; }
        .nd-step-card p { font-size: 13.5px; line-height: 1.6; color: rgba(255, 255, 255, 0.8); margin: 0; }
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
        .nd-faq-ans { font-size: 15px; line-height: 1.7; color: #475569; margin-top: 12px; max-width: 900px; }
        .nd-interlinks-box { background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 20px; padding: 32px; margin-bottom: 80px; }
        .nd-interlinks-title { font-size: 13px; font-weight: 700; color: #2E29FF; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 16px; }
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
        .nd-interlink-pill:hover { border-color: #2E29FF; color: #2E29FF; background: #EEF0FF; }
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
          <div className="nd-svc-eyebrow">Human-Centered Digital Product Design</div>
          <h1 className="nd-svc-h1">
            Bespoke <span>UI/UX Design</span> Studio for Software &amp; SaaS
          </h1>
          <p className="nd-svc-subtext">
            We design interfaces that feel natural, elevate brand authority, and turn complex workflows into delightful software experiences that retain users and drive conversion.
          </p>
          <div className="nd-svc-cta-row">
            <Link to="/get-a-free-quote" className="nd-btn-main">
              Start a Design Sprint <ArrowRight />
            </Link>
            <Link to="/case-studies" className="nd-btn-sec">
              View Design Portfolio
            </Link>
          </div>
        </section>

        <section>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#2E29FF', letterSpacing: '1.5px', textTransform: 'uppercase' }}>DESIGN SERVICES</span>
            <h2 style={{ fontSize: '36px', fontWeight: 800, color: '#0A0A2E', marginTop: '8px' }}>Crafted for Clarity, Usability &amp; Scale</h2>
          </div>

          <div className="nd-svc-grid">
            <div className="nd-svc-card">
              <span className="nd-svc-card-tag">SaaS Interfaces</span>
              <h3>B2B Dashboard Design</h3>
              <p>Clean data visualization, high-density table ergonomics, multi-tenant administrative controls, and intuitive navigational hierarchies.</p>
            </div>
            <div className="nd-svc-card">
              <span className="nd-svc-card-tag">Mobile Experience</span>
              <h3>iOS &amp; Android App UX</h3>
              <p>Touch-optimized mobile UX, native platform guidelines (Human Interface &amp; Material 3), and fluid micro-animations.</p>
            </div>
            <div className="nd-svc-card">
              <span className="nd-svc-card-tag">Scalable Foundation</span>
              <h3>Figma Design Systems</h3>
              <p>Reusable atomic component libraries, responsive auto-layout structures, color tokens, and developer-ready CSS handoff.</p>
            </div>
            <div className="nd-svc-card">
              <span className="nd-svc-card-tag">Conversion Architecture</span>
              <h3>High-Converting Landing Pages</h3>
              <p>Persuasive typography, strategic visual proof hierarchies, objection-handling layout flows, and frictionless CTAs.</p>
            </div>
            <div className="nd-svc-card">
              <span className="nd-svc-card-tag">Accessibility Guarantee</span>
              <h3>WCAG 2.2 AA Contrast</h3>
              <p>Rigorous contrast audits, keyboard navigation pathways, readable font sizes, and inclusive state styling for all users.</p>
            </div>
            <div className="nd-svc-card">
              <span className="nd-svc-card-tag">Interactive Validation</span>
              <h3>Clickable Prototyping</h3>
              <p>Test real user flows with stakeholders and investors before writing a single line of backend engineering code.</p>
            </div>
          </div>
        </section>

        <section className="nd-process-box">
          <span style={{ fontSize: '11px', fontWeight: 700, color: '#00FFB2', letterSpacing: '1.5px', textTransform: 'uppercase' }}>DESIGN METHODOLOGY</span>
          <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#ffffff', marginTop: '6px' }}>Our 4-Stage Product Design Cycle</h2>
          
          <div className="nd-process-steps-grid">
            <div className="nd-step-card">
              <div className="nd-step-num">Step 01</div>
              <h4>User Journey Mapping</h4>
              <p>We analyze user friction points, mental models, and business conversion goals to map the complete wireframe skeleton.</p>
            </div>
            <div className="nd-step-card">
              <div className="nd-step-num">Step 02</div>
              <h4>Visual System Conception</h4>
              <p>We craft tailored typography, modern color palettes, lighting gradients, and sleek component styling matching your brand.</p>
            </div>
            <div className="nd-step-card">
              <div className="nd-step-num">Step 03</div>
              <h4>High-Fidelity Prototyping</h4>
              <p>Full screen flows designed in Figma with responsive auto-layout, interactive hover states, and complete edge cases.</p>
            </div>
            <div className="nd-step-card">
              <div className="nd-step-num">Step 04</div>
              <h4>Developer Spec Handoff</h4>
              <p>Detailed token handoff, asset export packages, and direct collaboration with engineering teams for pixel-perfect buildout.</p>
            </div>
          </div>
        </section>

        <section className="nd-svc-faq-section">
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#2E29FF', letterSpacing: '1.5px', textTransform: 'uppercase' }}>DESIGN QUESTIONS</span>
            <h2 style={{ fontSize: '34px', fontWeight: 800, color: '#0A0A2E', marginTop: '6px' }}>UI/UX Design FAQs</h2>
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
          <div className="nd-interlinks-title">Explore Related Design &amp; Web Capabilities</div>
          <div className="nd-interlinks-list">
            <Link to="/services/web-development" className="nd-interlink-pill">Web Development →</Link>
            <Link to="/services/saas-development" className="nd-interlink-pill">SaaS Platform Engineering →</Link>
            <Link to="/services/mobile-app-development" className="nd-interlink-pill">Mobile App Development →</Link>
            <Link to="/services/mvp-development" className="nd-interlink-pill">21-Day MVP Sprint →</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
