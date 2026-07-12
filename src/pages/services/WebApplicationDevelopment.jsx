import React, { useEffect, useState } from 'react';
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

const ChevronDown = ({ isOpen }) => (
  <svg 
    width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

export default function WebApplicationDevelopment() {
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      q: "What's the difference between full-stack development and just building a website?",
      a: "A website is often just a frontend — static pages with little to no backend logic. Full-stack development means building an application with real functionality: user accounts, databases, business logic, and dynamic features that respond to user actions — think a SaaS product, marketplace, or dashboard, not just an informational page."
    },
    {
      q: "How long does a full-stack web app take to build?",
      a: "A focused MVP typically takes 2-4 weeks. More complex applications with multiple user roles, integrations, or advanced features can take 6-10+ weeks. Exact timelines depend on scope, defined clearly after the discovery call."
    },
    {
      q: "Why Next.js and FastAPI specifically?",
      a: "Next.js is one of the most performant, SEO-friendly frontend frameworks available today, with excellent developer tooling. FastAPI is known for being fast, clean to work with, and well-suited for APIs that need to scale. Together with Supabase (PostgreSQL), this stack balances development speed with long-term maintainability — avoiding both 'too slow to build' and 'will need a rewrite in a year' problems."
    },
    {
      q: "Do you build the frontend and backend, or just one?",
      a: "Both. That's the core of full-stack development — one person, or in this case one point of contact, handles the entire application so nothing gets lost between teams."
    },
    {
      q: "Can you take over an existing project instead of building from scratch?",
      a: "Yes. If you have an existing codebase that needs new features, fixes, or a rebuild, that can be scoped separately — reach out with details of your current stack."
    },
    {
      q: "What happens after the website/app is launched?",
      a: "Every project includes a defined post-launch support window for bug fixes. Ongoing feature development or maintenance beyond that is available as a separate, flexible arrangement."
    }
  ];

  const schemaJson = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Web Application Development",
      "provider": {
        "@type": "ProfessionalService",
        "name": "NovaDesk"
      },
      "areaServed": "Worldwide",
      "description": "Custom web application development for startups and businesses. Dashboards, portals, internal tools."
    },
    {
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
    }
  ];

  return (
    <>
      <SEO 
        title="Custom Web Application Development Services"
        description="Custom web application development for startups & businesses — dashboards, portals, booking systems, internal tools. Built to scale. Get a free quote."
        url="/services/web-application-development"
        keywords="web application development, custom web app, React development, business dashboard, internal tools"
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
        .fs-btn-primary {
          background-color: #2E29FF;
          color: #ffffff;
        }
        .fs-btn-primary:hover {
          background-color: #1a16d9;
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(46,41,255,0.2);
        }
        .fs-btn-white {
          background-color: #ffffff;
          color: #2E29FF;
          border: 1px solid #2E29FF;
        }
        .fs-btn-white:hover {
          background-color: #f8fafc;
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.05);
        }
        .fs-btn-solid-white {
          background-color: #ffffff;
          color: #2E29FF;
        }
        .fs-btn-solid-white:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }

        /* TAGS */
        .fs-tag {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-size: 14px;
          font-weight: 800;
          color: #2E29FF;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 24px;
        }
        .fs-tag::before, .fs-tag::after {
          content: "";
          display: block;
          width: 24px;
          height: 1px;
          background-color: #2E29FF;
        }
        .fs-tag-white { color: #ffffff; }
        .fs-tag-white::before, .fs-tag-white::after { background-color: rgba(255,255,255,0.5); }

        /* HERO SECTION */
        .fs-hero {
          padding: 40px 0 20px;
          position: relative;
        }
        .fs-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
        }
        .fs-hero-title {
          font-size: 56px;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 16px;
          letter-spacing: -1px;
        }
        .fs-hero-desc {
          font-size: 18px;
          color: #475569;
          line-height: 1.6;
          margin-bottom: 24px;
          max-width: 90%;
        }
        .fs-hero-image-wrapper {
          position: relative;
          border-radius: 24px;
          margin-left: auto;
          margin-right: auto;
          max-width: 85%;
        }
        .fs-hero-image {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 24px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        .fs-floating-badge {
          position: absolute;
          background: white;
          padding: 8px 16px;
          border-radius: 50px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 700;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          color: #0b0f19;
          z-index: 20;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          width: max-content;
        }
        .fs-floating-badge svg {
          transition: transform 0.3s ease;
        }
        .fs-floating-badge:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.12);
        }
        .fs-floating-badge:hover svg {
          transform: scale(1.2) rotate(10deg);
        }
        .fs-badge-1 { bottom: 100px; right: -20px; }
        .fs-badge-2 { bottom: 40px; right: 20px; }
        
        .fs-dotted-bg {
          position: absolute;
          top: -30px;
          right: -30px;
          width: 200px;
          height: 200px;
          background-image: radial-gradient(#cbd5e1 2px, transparent 2px);
          background-size: 12px 12px;
          z-index: -1;
        }

        /* TRUST BAR */
        .fs-trust {
          text-align: center;
          padding: 60px 0;
        }
        .fs-trust p {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 30px;
        }
        .fs-marquee-container {
          overflow: hidden;
          width: 100%;
          display: flex;
          align-items: center;
          position: relative;
        }
        .fs-marquee-container::before, .fs-marquee-container::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          width: 150px;
          z-index: 2;
          pointer-events: none;
        }
        .fs-marquee-container::before {
          left: 0;
          background: linear-gradient(to right, white, transparent);
        }
        .fs-marquee-container::after {
          right: 0;
          background: linear-gradient(to left, white, transparent);
        }
        .fs-marquee-track {
          display: flex;
          gap: 60px;
          animation: scrollMarquee 30s linear infinite;
          padding-left: 60px;
          width: max-content;
        }
        @keyframes scrollMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 30px)); }
        }
        .fs-marquee-logo {
          font-weight: 900;
          font-size: 28px;
          color: #cbd5e1; /* Muted by default */
          transition: all 0.3s ease;
          cursor: pointer;
          font-family: 'Inter', system-ui, sans-serif;
          letter-spacing: -0.5px;
          white-space: nowrap;
        }
        .fs-marquee-logo:hover {
          transform: scale(1.1);
        }
        /* Brand Colors on Hover */
        .fs-marquee-logo.brand-google:hover { color: #4285F4; }
        .fs-marquee-logo.brand-linkedin:hover { color: #0077b5; }
        .fs-marquee-logo.brand-harvard:hover { color: #A51C30; font-family: 'Times New Roman', serif; }
        .fs-marquee-logo.brand-gojek:hover { color: #00AA13; }
        .fs-marquee-logo.brand-razorpay:hover { color: #3385ff; }
        .fs-marquee-logo.brand-chargebee:hover { color: #5C1D82; }
        .fs-marquee-logo.brand-khatabook:hover { color: #002D8B; }
        .fs-marquee-logo.brand-leapfinance:hover { color: #00BFA5; }
        .fs-marquee-logo.brand-semaai:hover { color: #22c55e; }
        .fs-marquee-logo.brand-zomato:hover { color: #cb202d; font-style: italic; }
        .fs-marquee-logo.brand-swiggy:hover { color: #fc8019; }
        .fs-marquee-logo.brand-uber:hover { color: #000000; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; }

        /* USP BAR (Blue with boxes) */
        .fs-usp-bar {
          background-color: #2E29FF;
          padding: 60px 0;
          position: relative;
          overflow: hidden;
        }
        .fs-usp-bar::before, .fs-usp-bar::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          width: 250px;
          pointer-events: none;
          background-image: radial-gradient(circle, rgba(255,255,255,0.15) 2px, transparent 2px);
          background-size: 16px 16px;
        }
        .fs-usp-bar::before {
          left: -50px;
          mask-image: radial-gradient(circle at left, black, transparent 80%);
          -webkit-mask-image: radial-gradient(circle at left, black, transparent 80%);
        }
        .fs-usp-bar::after {
          right: -50px;
          mask-image: radial-gradient(circle at right, black, transparent 80%);
          -webkit-mask-image: radial-gradient(circle at right, black, transparent 80%);
        }
        .fs-usp-grid {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          position: relative;
          z-index: 2;
        }
        .fs-usp-box {
          border: 1px solid rgba(255,255,255,0.6);
          border-radius: 8px;
          padding: 16px 20px;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          font-size: 12px;
          font-weight: 600;
          line-height: 1.4;
          transition: all 0.3s;
          flex: 1;
          min-width: 180px;
          background: transparent;
        }
        .fs-usp-box svg {
          flex-shrink: 0;
          width: 24px;
          height: 24px;
        }
        .fs-usp-box:hover {
          background: rgba(255,255,255,0.1);
          transform: translateY(-2px);
        }

        /* SPLIT HEADER */
        .fs-split-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          margin-bottom: 60px;
          align-items: center;
        }
        .fs-split-header h2 {
          font-size: 44px;
          font-weight: 800;
          line-height: 1.2;
          color: #0f172a;
        }
        .fs-split-header p {
          font-size: 18px;
          line-height: 1.6;
          color: #475569;
          text-align: right;
          justify-self: end;
          max-width: 500px;
        }
        .fs-tag-arrows {
          color: #2E29FF;
          font-weight: 800;
          font-size: 14px;
          letter-spacing: 1px;
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .fs-tag-arrows::before { content: "←"; font-size: 18px; font-weight: normal; }
        .fs-tag-arrows::after { content: "→"; font-size: 18px; font-weight: normal; }

        /* SERVICES GRID */
        .fs-services {
          padding: 100px 0;
        }
        .fs-services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }
        .fs-service-card {
          background-color: #ffffff;
          border: 1px solid rgba(46,41,255,0.4);
          border-radius: 12px;
          padding: 24px 30px;
          position: relative;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .fs-service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(46,41,255,0.12);
          background-color: #2E29FF;
          border-color: #2E29FF;
        }
        .fs-service-card h3 {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 16px;
          padding-right: 50px;
          line-height: 1.3;
          color: #0f172a;
          transition: color 0.4s;
        }
        .fs-service-card:hover h3 {
          color: #ffffff;
        }
        .fs-service-card p {
          font-size: 15px;
          color: #475569;
          line-height: 1.6;
          margin-bottom: 0;
          transition: color 0.4s;
        }
        .fs-service-card:hover p {
          color: rgba(255, 255, 255, 0.9);
        }
        .fs-service-arrow {
          position: absolute;
          top: 24px;
          right: 24px;
          width: 32px;
          height: 32px;
          background: #2E29FF;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
        }
        .fs-service-arrow svg {
          transform: rotate(-45deg);
          width: 16px;
          height: 16px;
        }
        .fs-service-card:hover .fs-service-arrow {
          background: white;
          color: #2E29FF;
          transform: scale(1.1);
        }

        /* TECH EXPERTISE */
        .fs-tech {
          background-color: #ffffff;
          background-image: 
            linear-gradient(rgba(46, 41, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(46, 41, 255, 0.05) 1px, transparent 1px);
          background-size: 26px 26px;
          padding: 100px 0;
          position: relative;
          z-index: 1;
        }
        .fs-tech::before {
          content: '';
          position: absolute;
          top: 0; left: 10%; width: 500px; height: 500px; border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 182, 219, 0.3) 0%, transparent 70%);
          filter: blur(50px); pointer-events: none; z-index: -1;
        }
        .fs-tech::after {
          content: '';
          position: absolute;
          bottom: 0; right: 10%; width: 400px; height: 400px; border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 105, 180, 0.2) 0%, transparent 70%);
          filter: blur(60px); pointer-events: none; z-index: -1;
        }
        .fs-tech-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }
        .fs-tech-text {
          position: sticky;
          top: 120px;
        }
        .fs-tech-text h2 {
          font-size: 44px;
          font-weight: 800;
          margin-bottom: 24px;
          line-height: 1.2;
          color: #2E29FF;
          letter-spacing: -0.5px;
        }
        .fs-tech-text p {
          font-size: 16px;
          color: #475569;
          line-height: 1.6;
          margin-bottom: 40px;
        }
        .fs-btn-outline-blue {
          border: 1px solid #2E29FF;
          color: #2E29FF;
          background: transparent;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 15px;
          transition: all 0.3s;
          text-decoration: none;
        }
        .fs-btn-outline-blue:hover {
          background: #2E29FF;
          color: white;
        }
        .fs-btn-outline-blue svg {
          width: 18px;
          height: 18px;
          transition: transform 0.3s;
        }
        .fs-btn-outline-blue:hover svg {
          transform: translateX(4px) translateY(-4px);
        }
        .fs-tech-cards {
          display: flex;
          flex-direction: column;
          gap: 24px;
          max-height: 480px;
          overflow-y: auto;
          padding-right: 16px;
          -ms-overflow-style: none;
          scrollbar-width: none;
          mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
          -webkit-mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
          padding-bottom: 40px;
        }
        .fs-tech-cards::-webkit-scrollbar {
          display: none;
        }
        .fs-tech-card-outer {
          background-color: #ffffff;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 8px;
          width: 70%;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .fs-tech-card-outer:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }
        .fs-tech-card-inner {
          border-radius: 12px;
          padding: 48px 32px;
          min-height: 220px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .fs-tech-card-front {
          background-color: #FFF0E6;
        }
        .fs-tech-card-back {
          background-color: #F0F4FF;
        }
        .fs-tech-card-db {
          background-color: #EAE5FF;
        }
        .fs-tech-card-api {
          background-color: #E2FDF5;
        }
        .fs-tech-card-inner h3 {
          font-size: 22px;
          font-weight: 800;
          margin-bottom: 24px;
          text-transform: uppercase;
          color: #0b0f19;
        }
        .fs-tech-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }
        .fs-tech-pill {
          padding: 8px 18px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 700;
          color: #0b0f19;
        }
        .fs-tech-card-front .fs-tech-pill { background-color: #FFDECC; }
        .fs-tech-card-back .fs-tech-pill { background-color: #D6E4FF; }
        .fs-tech-card-db .fs-tech-pill { background-color: #DCD3FF; }
        .fs-tech-card-api .fs-tech-pill { background-color: #CFF3E9; }

        /* API CTA */
        .fs-api-cta {
          background-color: #2E29FF;
          color: white;
          padding: 80px 0 40px;
        }
        .fs-api-cta-top {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          margin-bottom: 60px;
          align-items: flex-start;
        }
        .fs-api-cta-left h2 {
          font-size: 40px;
          font-weight: 800;
          line-height: 1.2;
          color: white;
        }
        .fs-api-cta-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          text-align: right;
        }
        .fs-api-cta-right p {
          font-size: 16px;
          line-height: 1.6;
          opacity: 0.9;
          max-width: 450px;
          margin-bottom: 24px;
        }
        .fs-btn-outline-white {
          border: 1px solid white;
          color: white;
          background: transparent;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 14px;
          text-decoration: none;
          transition: all 0.3s;
        }
        .fs-btn-outline-white:hover {
          background: white;
          color: #2E29FF;
        }
        .fs-api-cta-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .fs-api-stat-card {
          border: 1px solid rgba(255,255,255,0.4);
          border-radius: 12px;
          padding: 40px 24px;
          text-align: center;
          background: rgba(255,255,255,0.03);
          transition: transform 0.3s, background 0.3s, border-color 0.3s;
        }
        .fs-api-stat-card:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.8);
          transform: translateY(-4px);
        }
        .fs-api-stat-card h3 {
          font-size: 56px;
          font-weight: 900;
          color: white;
          margin-bottom: 8px;
          letter-spacing: -2px;
        }
        .fs-api-stat-card p {
          font-size: 18px;
          font-weight: 700;
          opacity: 0.9;
        }

        /* WHY US */
        .fs-why {
          background-color: #2E29FF;
          color: white;
          padding: 40px 0 100px;
          position: relative;
          overflow: hidden;
        }
        .fs-why-bg-circles {
          position: absolute;
          top: -100px;
          right: -100px;
          opacity: 0.05;
          pointer-events: none;
        }
        .fs-why-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          position: relative;
          z-index: 2;
        }
        .fs-why-images {
          position: relative;
          height: 600px;
        }
        .fs-why-img-1 {
          width: 85%;
          height: 480px;
          background: #1a16d9 url('/WHY1.jpg') center/cover no-repeat;
          border-radius: 32px;
          position: absolute;
          top: 50px; left: 0;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          animation: floatUp 6s ease-in-out infinite;
        }
        .fs-why-img-2 {
          width: 50%;
          height: 250px;
          background: #ffffff url('/WHY2.jpg') center/cover no-repeat;
          border-radius: 20px;
          position: absolute;
          bottom: 0; right: 0;
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
          animation: floatDown 7s ease-in-out infinite;
        }
        .fs-why-badge {
          position: absolute;
          top: -20px;
          right: 5%;
          width: 140px;
          height: 140px;
          background-color: #2E29FF;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          border: 2px solid rgba(255,255,255,0.2);
          z-index: 3;
        }
        .fs-why-badge svg {
          width: 100%;
          height: 100%;
        }
        .fs-why-badge-text-group {
          animation: spin 15s linear infinite;
          transform-origin: 100px 100px;
        }
        @keyframes floatUp {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes floatDown {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(15px); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .fs-why-title {
          font-size: 48px;
          font-weight: 800;
          margin-bottom: 24px;
          line-height: 1.1;
        }
        .fs-why-desc {
          font-size: 16px;
          line-height: 1.6;
          margin-bottom: 40px;
          opacity: 0.9;
        }
        .fs-why-stats {
          display: flex;
          gap: 50px;
          margin-bottom: 30px;
        }
        .fs-why-stat h4 {
          font-size: 32px;
          font-weight: 900;
          margin-bottom: 4px;
          color: white;
        }
        .fs-why-stat p {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 1px;
          opacity: 0.8;
          font-weight: 700;
        }
        .fs-why-features {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 30px;
        }
        .fs-why-feature {
          border: 1px solid rgba(255,255,255,0.3);
          border-radius: 12px;
          padding: 12px 18px;
          font-size: 14px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(255,255,255,0.05);
          transition: all 0.3s;
        }
        .fs-why-feature:hover {
          background: rgba(255,255,255,0.15);
          transform: translateY(-2px);
        }
        .fs-why-feature-icon {
          width: 32px;
          height: 32px;
          background: white;
          color: #2E29FF;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .fs-why-feature-icon svg {
          width: 20px;
          height: 20px;
        }
        .fs-btn-solid-white {
          background-color: white;
          color: #2E29FF;
          padding: 14px 28px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 15px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s;
          text-decoration: none;
        }
        .fs-btn-solid-white:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }
        .fs-btn-solid-white svg {
          width: 18px;
          height: 18px;
          transition: transform 0.3s;
        }
        .fs-btn-solid-white:hover svg {
          transform: translateX(4px) translateY(-4px);
        }

        /* AUDIENCE */
        .fs-audience {
          background-color: #f8fafc;
          padding: 80px 0;
          text-align: center;
        }
        .fs-audience-title {
          font-size: 36px;
          font-weight: 800;
          margin-bottom: 16px;
          line-height: 1.2;
        }
        .fs-audience-desc {
          font-size: 16px;
          color: #475569;
          margin-bottom: 50px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        .fs-audience-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          text-align: left;
        }
        .fs-audience-card {
          background: #ffffff;
          border-radius: 16px;
          padding: 24px;
          border: 1px solid #c2c9ff;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.02);
          transition: all 0.3s ease;
        }
        .fs-audience-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 30px rgba(46,41,255,0.1);
          border-color: #2E29FF;
        }
        .fs-audience-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
        }
        .fs-audience-card h3 {
          font-size: 18px;
          font-weight: 800;
          color: #0b0f19;
          line-height: 1.3;
          max-width: 65%;
        }
        .fs-audience-icon {
          width: 44px;
          height: 44px;
          background-color: #2E29FF;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
        }
        .fs-audience-icon svg {
          width: 24px;
          height: 24px;
        }
        .fs-audience-card p {
          font-size: 14px;
          color: #475569;
          line-height: 1.6;
          flex: 1;
          margin-bottom: 24px;
        }
        .fs-audience-link {
          color: #2E29FF;
          font-weight: 700;
          font-size: 14px;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .fs-audience-link svg {
          transition: transform 0.3s;
        }
        .fs-audience-link:hover svg {
          transform: translateX(3px) translateY(-3px);
        }
        .fs-tag-arrows-blue {
           color: #2E29FF;
           font-weight: 800;
           font-size: 14px;
           letter-spacing: 1px;
           margin-bottom: 16px;
           display: inline-block;
        }

        /* PROCESS */
        .fs-process {
          background-color: #2E29FF;
          color: white;
          padding: 100px 0;
        }
        .fs-process-header-wrap {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 80px;
        }
        .fs-process-header-left {
          max-width: 50%;
        }
        .fs-process-tag-lines {
          text-transform: uppercase;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 1px;
          margin-bottom: 24px;
          color: white;
        }
        .fs-process-header-left h2 {
          font-size: 40px;
          font-weight: 800;
          line-height: 1.2;
          color: white;
        }
        .fs-process-header-right p {
          max-width: 450px;
          text-align: right;
          opacity: 0.8;
          font-size: 16px;
          line-height: 1.6;
        }
        .fs-process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        .fs-process-card {
          border: 1px solid rgba(255,255,255,0.4);
          border-radius: 12px;
          padding: 32px 24px;
          position: relative;
          background: transparent;
          transition: transform 0.3s, background 0.3s, border-color 0.3s;
        }
        .fs-process-card:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.8);
          transform: translateY(-8px);
        }
        .fs-process-num {
          width: 44px;
          height: 44px;
          background: white;
          color: #2E29FF;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 16px;
          position: absolute;
          top: 24px;
          right: 24px;
        }
        .fs-process-card h3 {
          font-size: 20px;
          font-weight: 800;
          margin-bottom: 16px;
          margin-top: 8px;
          padding-right: 50px;
          line-height: 1.4;
          color: white;
        }
        .fs-process-card p {
          font-size: 14px;
          line-height: 1.6;
          color: rgba(255,255,255,0.9);
        }

        /* FAQ SECION (NEW LAYOUT) */
        .fs-faq-section {
          padding: 60px 0 100px;
          background-color: #ffffff;
          background-image: 
            linear-gradient(rgba(46, 41, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(46, 41, 255, 0.05) 1px, transparent 1px);
          background-size: 26px 26px;
          position: relative;
          z-index: 1;
        }
        .fs-faq-section::before {
          content: '';
          position: absolute;
          top: 50px; left: 15%; width: 500px; height: 500px; border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 182, 219, 0.3) 0%, transparent 70%);
          filter: blur(50px); pointer-events: none; z-index: -1;
        }
        .fs-faq-section::after {
          content: '';
          position: absolute;
          bottom: 50px; right: 10%; width: 400px; height: 400px; border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 105, 180, 0.2) 0%, transparent 70%);
          filter: blur(60px); pointer-events: none; z-index: -1;
        }
        .fs-faq-grid {
          display: grid;
          grid-template-columns: 40% 1fr;
          gap: 80px;
          align-items: flex-start;
        }
        .fs-faq-images {
          position: relative;
          width: 100%;
          height: 600px;
        }
        .fs-faq-img-main {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 500px;
          background: #EEF0FF url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80') center/cover no-repeat;
          border-radius: 0 100px 100px 24px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.05);
        }
        .fs-faq-img-overlap {
          position: absolute;
          bottom: 0; right: 0;
          width: 60%; height: 250px;
          background: #D0D5FF url('/faq_small.png') center/cover no-repeat;
          border-radius: 24px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
          border: 4px solid white;
        }
        
        .fs-faq-content h2 {
          font-size: 40px;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 40px;
        }
        
        .fs-faq-item {
          border-bottom: 1px solid #E2E8F0;
          padding: 24px 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          border-radius: 8px 8px 0 0;
        }
        .fs-faq-item:hover {
          background-color: #f8fafc;
        }
        .fs-faq-item.active {
          background-color: #f1f5f9;
          border-bottom: 2px solid #2E29FF;
        }
        .fs-faq-question {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 18px;
          font-weight: 700;
          color: #0b0f19;
          transition: color 0.3s;
        }
        .fs-faq-item.active .fs-faq-question {
          color: #2E29FF;
        }
        .fs-faq-answer {
          margin-top: 16px;
          font-size: 15px;
          color: #475569;
          line-height: 1.6;
        }

        /* CTA BOTTOM */
        .fs-cta-bottom {
          text-align: center;
          padding: 80px 20px;
          background: #f8fafc;
          border-radius: 24px;
        }
        .fs-cta-bottom h2 {
          font-size: 40px;
          font-weight: 800;
          margin-bottom: 16px;
        }
        .fs-cta-bottom p {
          font-size: 16px;
          color: #475569;
          margin-bottom: 32px;
        }

        @media (max-width: 1024px) {
          .fs-hero-grid, .fs-split-header, .fs-why-grid, .fs-tech-grid, .fs-faq-grid, .fs-api-cta-top { grid-template-columns: 1fr; }
          .fs-hero-text { order: 2; }
          .fs-hero-image-wrapper { order: 1; margin-bottom: 40px; }
          .fs-split-header { gap: 20px; }
          .fs-services-grid { grid-template-columns: 1fr; }
          .fs-audience-grid { grid-template-columns: repeat(2, 1fr); }
          .fs-process-grid { grid-template-columns: repeat(2, 1fr); }
          .fs-why-images { height: 400px; margin-bottom: 40px; }
          .fs-why-img-1 { height: 320px; width: 90%; top: 40px; }
          .fs-why-img-2 { height: 180px; width: 50%; bottom: 0; right: 0; }
          .fs-why-badge { width: 100px; height: 100px; top: 0; right: 0; }
          .fs-why-badge text:not([href]) { font-size: 32px; }
          .fs-faq-images { display: none; }
          .fs-tech-cards { flex-direction: column; }
          .fs-api-cta-right { align-items: flex-start; text-align: left; }
          .fs-usp-grid { justify-content: center; flex-direction: column; }
          .fs-marquee-container::before, .fs-marquee-container::after { width: 50px; }
        }
        @media (max-width: 768px) {
          .fs-hero { padding: 40px 0 20px; }
          .fs-trust, .fs-usp-bar, .fs-services, .fs-tech, .fs-api-cta, .fs-audience, .fs-process, .fs-faq-section { padding: 40px 0; }
          .fs-hero-title { font-size: 36px; }
          .fs-audience-grid, .fs-process-grid { grid-template-columns: 1fr; }
          h2 { font-size: 32px !important; }
          .fs-api-cta-stats { grid-template-columns: 1fr; gap: 20px; }
          .fs-hero-image-wrapper { margin-top: 0; margin-bottom: 40px; max-width: 100%; margin-left: 0; }
          .fs-floating-badge { padding: 6px 12px; font-size: 11px; }
          .fs-badge-1 { bottom: 60px; right: 0px; }
          .fs-badge-2 { bottom: 20px; right: 20px; }
          .fs-usp-box { min-width: 100%; }
          .fs-tech-card-inner { padding: 30px 20px; min-height: auto; }
          .fs-cta-bottom { padding: 50px 20px; }
        }
      `}</style>

      <div className="fs-page">
        
        {/* HERO SECTION */}
        <section className="fs-hero">
          <div className="fs-container fs-hero-grid">
            <div className="fs-hero-text">
              <h1 className="fs-hero-title">
                Custom <span className="fs-text-blue">Web Applications</span><br />
                Built Around Your Workflow
              </h1>
              <p className="fs-hero-desc">
                Not a template. Not a page-builder. A web application designed around how your business actually works — dashboards, portals, booking systems, and internal tools built to handle real logic, real users, and real growth.
              </p>
              <Link to="/contact-us" className="fs-btn fs-btn-primary" style={{ marginBottom: '40px' }}>
                Get a Free Consultation <ArrowRight />
              </Link>
              
              <div className="fs-hero-badges" style={{ display: 'flex', gap: '30px', alignItems: 'flex-start' }}>
                <div className="fs-hero-badge">
                  <div style={{ color: '#4285F4', fontWeight: 'bold', fontSize: '18px', marginBottom: '4px' }}>
                    <span style={{color: '#4285F4'}}>G</span><span style={{color: '#EA4335'}}>o</span><span style={{color: '#FBBC05'}}>o</span><span style={{color: '#4285F4'}}>g</span><span style={{color: '#34A853'}}>l</span><span style={{color: '#EA4335'}}>e</span>
                  </div>
                  <div style={{ fontSize: '10px', textTransform: 'uppercase', color: '#64748b', fontWeight: '700' }}>AI ACCELERATOR TOP 20<br />STARTUPS</div>
                </div>
                <div className="fs-hero-badge" style={{ borderLeft: '1px solid #E2E8F0', paddingLeft: '30px' }}>
                  <div style={{ color: '#0077B5', fontWeight: 'bold', fontSize: '18px', marginBottom: '4px' }}>Linked<span style={{background: '#0077B5', color: 'white', padding: '0 4px', borderRadius: '4px', marginLeft: '2px'}}>in</span></div>
                  <div style={{ fontSize: '10px', textTransform: 'uppercase', color: '#64748b', fontWeight: '700' }}>TOP 20 INDIAN STARTUPS</div>
                </div>
                <div className="fs-hero-badge" style={{ borderLeft: '1px solid #E2E8F0', paddingLeft: '30px' }}>
                  <div style={{ color: '#A41034', fontWeight: 'bold', fontSize: '14px', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div style={{ width: '16px', height: '16px', background: '#A41034' }}></div>
                    <div>Harvard<br />Business<br />School</div>
                  </div>
                  <div style={{ fontSize: '10px', textTransform: 'uppercase', color: '#64748b', fontWeight: '700' }}>FEATURED IN HARVARD'S TOP<br />10 TECH INNOVATIONS</div>
                </div>
              </div>
            </div>
            <div className="fs-hero-image-wrapper">
              <div className="fs-dotted-bg"></div>
              <img src="/team_photo.png" alt="Full Stack Web Development" className="fs-hero-image" />
            </div>
          </div>
        </section>

        {/* TRUST BAR */}
        <section className="fs-trust">
          <div className="fs-container">
            <p>Web Application Development, Backed by <span className="fs-text-blue">Leading Brands</span></p>
          </div>
          <div className="fs-marquee-container">
            <div className="fs-marquee-track">
              {/* Original List */}
              <span className="fs-marquee-logo brand-google">Google</span>
              <span className="fs-marquee-logo brand-linkedin">LinkedIn</span>
              <span className="fs-marquee-logo brand-harvard">HARVARD</span>
              <span className="fs-marquee-logo brand-gojek">gojek</span>
              <span className="fs-marquee-logo brand-razorpay">Razorpay</span>
              <span className="fs-marquee-logo brand-chargebee">chargebee</span>
              <span className="fs-marquee-logo brand-khatabook">Khatabook</span>
              <span className="fs-marquee-logo brand-leapfinance">LeapFinance</span>
              <span className="fs-marquee-logo brand-semaai">semaai</span>
              <span className="fs-marquee-logo brand-zomato">zomato</span>
              <span className="fs-marquee-logo brand-swiggy">SWIGGY</span>
              <span className="fs-marquee-logo brand-uber">Uber</span>
              {/* Duplicated List for seamless scrolling */}
              <span className="fs-marquee-logo brand-google">Google</span>
              <span className="fs-marquee-logo brand-linkedin">LinkedIn</span>
              <span className="fs-marquee-logo brand-harvard">HARVARD</span>
              <span className="fs-marquee-logo brand-gojek">gojek</span>
              <span className="fs-marquee-logo brand-razorpay">Razorpay</span>
              <span className="fs-marquee-logo brand-chargebee">chargebee</span>
              <span className="fs-marquee-logo brand-khatabook">Khatabook</span>
              <span className="fs-marquee-logo brand-leapfinance">LeapFinance</span>
              <span className="fs-marquee-logo brand-semaai">semaai</span>
              <span className="fs-marquee-logo brand-zomato">zomato</span>
              <span className="fs-marquee-logo brand-swiggy">SWIGGY</span>
              <span className="fs-marquee-logo brand-uber">Uber</span>
            </div>
          </div>
        </section>

        {/* USP BAR */}
        <div className="fs-usp-bar">
          <div className="fs-container fs-usp-grid">
            <div className="fs-usp-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
              <div>Solo-Built,<br/>Fully Owned</div>
            </div>
            <div className="fs-usp-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z"/>
              </svg>
              <div>Modern Stack<br/>Only</div>
            </div>
            <div className="fs-usp-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <div>Free Discovery<br/>Call</div>
            </div>
            <div className="fs-usp-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
              </svg>
              <div>Response<br/>Within 24h</div>
            </div>
            <div className="fs-usp-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
              </svg>
              <div>Founder-Rate<br/>Pricing</div>
            </div>
          </div>
        </div>

        
        {/* SERVICES EXPERTISE */}
        <section className="fs-services">
          <div className="fs-container">
            <div className="fs-split-header">
              <div>
                <div className="fs-tag-arrows">WHAT IS IT?</div>
                <h2>What Is Web Application Development?</h2>
              </div>
              <p>
                A website shows information. A <strong>web application</strong> does something — it lets users log in, interact with data, complete tasks, and get results back in real time.<br/><br/>
                Think of the difference between a restaurant's homepage (a website — informational) and an online table-booking system with live availability (a web application).
              </p>
            </div>

            <div className="fs-tag-arrows" style={{marginTop: '60px', marginBottom: '20px'}}>OUR EXPERTISE</div>
            <h2 style={{marginBottom: '40px'}}>What's Included in This Service</h2>

            <div className="fs-services-grid">
              <div className="fs-service-card">
                <h3>Requirement Analysis & System Design</h3>
                <p>Understanding your workflow, users, and what the application needs to do. Defining the data model and architecture before coding.</p>
                <div className="fs-service-arrow"><ArrowRight /></div>
              </div>
              <div className="fs-service-card">
                <h3>Frontend Development</h3>
                <p>Built with React and Next.js for fast, responsive, interactive interfaces. Dashboards, forms, tables, and workflows designed around real usage.</p>
                <div className="fs-service-arrow"><ArrowRight /></div>
              </div>
              <div className="fs-service-card">
                <h3>Backend & Business Logic</h3>
                <p>Built with FastAPI or Node.js. Custom business logic, approval workflows, calculations, and secure API architecture.</p>
                <div className="fs-service-arrow"><ArrowRight /></div>
              </div>
              <div className="fs-service-card">
                <h3>User Authentication & Access Control</h3>
                <p>Secure login and role-based access control — admins, managers, and regular users each see only what they should.</p>
                <div className="fs-service-arrow"><ArrowRight /></div>
              </div>
              <div className="fs-service-card">
                <h3>Database Architecture</h3>
                <p>PostgreSQL (via Supabase) — reliable, scalable, with real-time capabilities. Designed to handle your actual data relationships.</p>
                <div className="fs-service-arrow"><ArrowRight /></div>
              </div>
              <div className="fs-service-card">
                <h3>Deployment & Ongoing Reliability</h3>
                <p>Production deployment, performance monitoring, and a defined post-launch support window to catch issues early.</p>
                <div className="fs-service-arrow"><ArrowRight /></div>
              </div>
            </div>
          </div>
        </section>
{/* WHY US */}
        <section className="fs-why">
          <svg className="fs-why-bg-circles" width="600" height="600" viewBox="0 0 600 600" fill="none">
            <circle cx="300" cy="300" r="100" stroke="white" strokeWidth="1"/>
            <circle cx="300" cy="300" r="150" stroke="white" strokeWidth="1"/>
            <circle cx="300" cy="300" r="200" stroke="white" strokeWidth="1"/>
            <circle cx="300" cy="300" r="250" stroke="white" strokeWidth="1"/>
          </svg>
          <div className="fs-container fs-why-grid">
            <div className="fs-why-images">
              <div className="fs-why-img-1"></div>
              <div className="fs-why-img-2"></div>
              <div className="fs-why-badge">
                <svg viewBox="0 0 200 200">
                  <g className="fs-why-badge-text-group">
                    <path id="curve" d="M 100, 100 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0" fill="none" />
                    <text fill="white" fontSize="16" fontWeight="bold" letterSpacing="3">
                      <textPath href="#curve">Your Vision, Our Code, Delivered • </textPath>
                    </text>
                  </g>
                  <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="48" fontWeight="900">ND</text>
                </svg>
              </div>
            </div>
            <div>
              <div className="fs-tag-arrows" style={{ color: 'white', marginBottom: '40px' }}>WHY US</div>
              <p className="fs-why-desc" style={{ fontSize: "16px", fontWeight: "500", lineHeight: "1.6", marginBottom: "30px" }}>
                <strong>Built around your actual workflow:</strong> No forcing your business logic into a generic template.<br/><br/><strong>Direct access:</strong> You work directly with the developer.<br/><br/><strong>Architecture that scales:</strong> Database and system design decisions are made with growth in mind.<br/><br/><strong>Weekly visible progress:</strong> You see a working, clickable version of your application every week.
              </p>
              
              <div className="fs-why-stats">
                <div className="fs-why-stat">
                  <h4>1250+</h4>
                  <p>Projects Delivered</p>
                </div>
                <div className="fs-why-stat">
                  <h4>1000+</h4>
                  <p>Happy Clients</p>
                </div>
                <div className="fs-why-stat">
                  <h4>170+</h4>
                  <p>Expert Talent</p>
                </div>
              </div>

              <div className="fs-why-features">
                <div className="fs-why-feature">
                  <div className="fs-why-feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="6" width="20" height="12" rx="2" />
                      <circle cx="12" cy="12" r="2" />
                      <path d="M6 12h.01M18 12h.01" />
                    </svg>
                  </div>
                  Transparent<br/>Pricing
                </div>
                <div className="fs-why-feature">
                  <div className="fs-why-feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
                    </svg>
                  </div>
                  Proven Expertise
                </div>
                <div className="fs-why-feature">
                  <div className="fs-why-feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </div>
                  Top-Notch IT<br/>Solutions
                </div>
              </div>

              <Link to="/contact-us" className="fs-btn-solid-white">
                Get a Free Consultation <ArrowRight style={{ transform: 'rotate(-45deg)' }} />
              </Link>
            </div>
          </div>
        </section>

        {/* TECH EXPERTISE (NEW SECTION) */}
        <section className="fs-tech">
          <div className="fs-container fs-tech-grid">
            <div className="fs-tech-text">
              <div className="fs-tag-arrows">TECH EXPERTISE</div>
              <h2>Modern Tools Behind Full Stack Engineering</h2>
              <p>
                Every product deserves the right foundation. We combine stable, well-supported frameworks like Next.js and FastAPI with agile tooling to deliver full stack development services that evolve without friction.
              </p>
              <Link to="/contact-us" className="fs-btn-outline-blue">
                Get a free Consultation <ArrowRight style={{ transform: 'rotate(-45deg)' }} />
              </Link>
            </div>
            <div className="fs-tech-cards">
              <div className="fs-tech-card-outer">
                <div className="fs-tech-card-inner fs-tech-card-front">
                  <h3>Frontend Technologies</h3>
                  <div className="fs-tech-pills">
                    <div className="fs-tech-pill">Next.js</div>
                    <div className="fs-tech-pill">React JS</div>
                    <div className="fs-tech-pill">TypeScript</div>
                    <div className="fs-tech-pill">HTML5 / CSS3</div>
                    <div className="fs-tech-pill">Tailwind CSS</div>
                  </div>
                </div>
              </div>
              <div className="fs-tech-card-outer">
                <div className="fs-tech-card-inner fs-tech-card-back">
                  <h3>Backend Technologies</h3>
                  <div className="fs-tech-pills">
                    <div className="fs-tech-pill">FastAPI</div>
                    <div className="fs-tech-pill">Python</div>
                    <div className="fs-tech-pill">Node.js</div>
                  </div>
                </div>
              </div>
              <div className="fs-tech-card-outer">
                <div className="fs-tech-card-inner fs-tech-card-db">
                  <h3>Databases</h3>
                  <div className="fs-tech-pills">
                    <div className="fs-tech-pill">PostgreSQL</div>
                    <div className="fs-tech-pill">Supabase</div>
                    <div className="fs-tech-pill">Redis</div>
                    <div className="fs-tech-pill">MongoDB</div>
                  </div>
                </div>
              </div>
              <div className="fs-tech-card-outer">
                <div className="fs-tech-card-inner fs-tech-card-api">
                  <h3>API Protocols & Tools</h3>
                  <div className="fs-tech-pills">
                    <div className="fs-tech-pill">REST</div>
                    <div className="fs-tech-pill">GraphQL</div>
                    <div className="fs-tech-pill">gRPC</div>
                    <div className="fs-tech-pill">Swagger</div>
                    <div className="fs-tech-pill">Postman</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* API CTA SECTION */}
        <section className="fs-api-cta">
          <div className="fs-container">
            <div className="fs-api-cta-top">
              <div className="fs-api-cta-left">
                <h2>Build Smarter With Our API<br/>Development Services</h2>
              </div>
              <div className="fs-api-cta-right">
                <p>Let's create APIs that simplify scale. Partner with a trusted API Development Company that understands speed, security, and clean documentation.</p>
                <div className="fs-api-cta-btn-wrap">
                  <Link to="/contact-us" className="fs-btn-outline-white">Get a free consultation ↗</Link>
                </div>
              </div>
            </div>
            
            <div className="fs-api-cta-stats">
              <div className="fs-api-stat-card">
                <h3>1000+</h3>
                <p>Happy Clients</p>
              </div>
              <div className="fs-api-stat-card">
                <h3>11+</h3>
                <p>Years of Experience</p>
              </div>
              <div className="fs-api-stat-card">
                <h3>170+</h3>
                <p>Expert Level Talents</p>
              </div>
            </div>
          </div>
        </section>

        {/* AUDIENCE */}
        <section className="fs-audience">
          <div className="fs-container">
            <div className="fs-tag-arrows-blue">← WHO IS IT FOR →</div>
            <h2 className="fs-audience-title">Who This Service<br/><span className="fs-text-blue">Is Built For</span></h2>
            <p className="fs-audience-desc">Choose what works best. Our services are built to follow your momentum, not slow you down.</p>
            
            <div className="fs-audience-grid">
              <div className="fs-audience-card">
                <div className="fs-audience-card-header">
                  <h3>Startup Founders</h3>
                  <div className="fs-audience-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                  </div>
                </div>
                <p>Who need an MVP built and launched without hiring a full internal team. Quick iteration and launch.</p>
                <Link to="/contact-us" className="fs-audience-link">Get a free consultation <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg></Link>
              </div>
              <div className="fs-audience-card">
                <div className="fs-audience-card-header">
                  <h3>Small Businesses</h3>
                  <div className="fs-audience-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                  </div>
                </div>
                <p>Replacing outdated systems or no-code tools that have hit their limits. Secure and robust solutions.</p>
                <Link to="/contact-us" className="fs-audience-link">Get a free consultation <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg></Link>
              </div>
              <div className="fs-audience-card">
                <div className="fs-audience-card-header">
                  <h3>Agencies</h3>
                  <div className="fs-audience-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                  </div>
                </div>
                <p>That need a reliable technical partner for client web app projects, ensuring high-quality delivery.</p>
                <Link to="/contact-us" className="fs-audience-link">Get a free consultation <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg></Link>
              </div>
              <div className="fs-audience-card">
                <div className="fs-audience-card-header">
                  <h3>Product Teams</h3>
                  <div className="fs-audience-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                  </div>
                </div>
                <p>Who need extra full-stack capacity for a defined project or sprint to hit critical deadlines.</p>
                <Link to="/contact-us" className="fs-audience-link">Get a free consultation <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg></Link>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="fs-process">
          <div className="fs-container">
            <div className="fs-process-header-wrap">
              <div className="fs-process-header-left">
                <div className="fs-process-tag-lines">← OUR DEVELOPMENT PROCESS →</div>
                <h2>Inside Our Full Stack<br/>Development Process</h2>
              </div>
              <div className="fs-process-header-right">
                <p>
                  We simplify complexity by breaking full stack development services into clear steps. This helps in seamless integration between frontend, backend, and deployment.
                </p>
              </div>
            </div>
            
            <div className="fs-process-grid">
              <div className="fs-process-card">
                <div className="fs-process-num">01</div>
                <h3>Discovery<br/>& Strategy</h3>
                <p>We understand your business, audience, and goals to define a clear roadmap and select the right tech stack for your application.</p>
              </div>
              <div className="fs-process-card">
                <div className="fs-process-num">02</div>
                <h3>UI/UX Design<br/>& Prototyping</h3>
                <p>Crafting user-friendly, visually appealing UI/UX designs that reflect your brand while optimizing the user journey for maximum engagement.</p>
              </div>
              <div className="fs-process-card">
                <div className="fs-process-num">03</div>
                <h3>Development<br/>& Integration</h3>
                <p>Our full stack development services ensure your app is fast, secure, and seamlessly integrated with necessary APIs and databases.</p>
              </div>
              <div className="fs-process-card">
                <div className="fs-process-num">04</div>
                <h3>Testing<br/>& Launch</h3>
                <p>Rigorous QA ensures your app is bug-free, responsive, and optimized for performance before going live and entering post-launch support.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION (NEW ACCORDION LAYOUT) */}
        <section className="fs-faq-section">
          <div className="fs-container fs-faq-grid">
            <div className="fs-faq-images">
              <div className="fs-faq-img-main"></div>
              <div className="fs-faq-img-overlap"></div>
            </div>
            <div className="fs-faq-content">
              <div className="fs-tag">FAQs</div>
              <h2>Questions You Might Ask Before Starting</h2>
              
              <div className="fs-faq-accordion">
                {faqs.map((faq, idx) => (
                  <div 
                    key={idx} 
                    className={`fs-faq-item ${openFaq === idx ? 'active' : ''}`}
                    onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  >
                    <div className="fs-faq-question">
                      {faq.q}
                      <ChevronDown isOpen={openFaq === idx} />
                    </div>
                    {openFaq === idx && (
                      <div className="fs-faq-answer">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '40px', textAlign: 'center' }}>
                <Link to="/contact-us" className="fs-btn fs-btn-primary">
                  More Questions? Contact Us <ArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </section>

        
        {/* BOTTOM CTA */}
        {/* <section className="fs-cta-bottom" style={{ background: '#0b0f19', color: 'white', padding: '100px 0', textAlign: 'center' }}>
          <div className="fs-container">
            <h2 style={{ fontSize: '48px', fontWeight: '800', marginBottom: '24px' }}>Have a workflow that needs real software, not a spreadsheet?</h2>
            <p style={{ fontSize: '18px', color: '#94a3b8', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
              Tell me what you're trying to build or replace. You'll get an honest scope, timeline, and quote — usually within a day.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
              <Link to="/contact-us" className="fs-btn fs-btn-primary">Get a Free Quote <ArrowRight /></Link>
              <a href="mailto:hello@novadesk.dev" className="fs-btn fs-btn-outline" style={{ border: '1px solid white', color: 'white' }}>or email hello@novadesk.dev</a>
            </div>
          </div>
        </section> */}
      </div>
    </>
  );
}
