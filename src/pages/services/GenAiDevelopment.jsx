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

export default function GenAiDevelopment() {
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
        "q": "Why should we choose NOVADESK for Gen AI Development?",
        "a": "We bring deep engineering expertise without the agency bloat. You get direct access to senior developers who understand both the technical and business sides of Gen AI Development."
    },
    {
        "q": "How can AI integration improve my business workflows?",
        "a": "AI can automate repetitive tasks, provide 24/7 intelligent customer support, and extract insights from large datasets, significantly reducing operational costs."
    },
    {
        "q": "Do you build custom models or use existing APIs?",
        "a": "We do both. For rapid deployment, we integrate powerful APIs like OpenAI or Anthropic. For highly specialized tasks, we can fine-tune open-source models like LLaMA."
    },
    {
        "q": "What happens after the project is deployed?",
        "a": "We offer dedicated post-launch support and maintenance packages. We ensure your system stays updated, secure, and running smoothly."
    }
];

  const schemaJson = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Full-Stack Web Development",
      "provider": {
        "@type": "ProfessionalService",
        "name": "NovaDesk"
      },
      "areaServed": "Worldwide",
      "description": "Custom full-stack web application development using Next.js, FastAPI, and Supabase."
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
        title="Gen AI Development Services | NOVADESK"
        description="Expert Gen AI Development tailored for startups and enterprises. We build secure, scalable, and high-performance solutions. Get a free consultation today."
        url="/services/gen-ai-development"
        keywords="gen ai development, custom gen ai development, ai & ml development company, hire developers"
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
          position: relative; 
          overflow: hidden; 
          padding: 40px 0 40px 0; 
          background-color: #ffffff;
          background-image: 
            linear-gradient(rgba(46, 41, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(46, 41, 255, 0.05) 1px, transparent 1px);
          background-size: 26px 26px;
        }
        .fs-hero::before { 
          content: ''; 
          position: absolute; 
          top: -100px; 
          left: 15%; 
          width: 600px; 
          height: 600px; 
          border-radius: 50%; 
          background: radial-gradient(circle, rgba(255, 182, 219, 0.45) 0%, transparent 75%); 
          filter: blur(50px);
          pointer-events: none; 
          z-index: 0;
        }
        .fs-hero::after { 
          content: ''; 
          position: absolute; 
          bottom: -50px; 
          right: 10%; 
          width: 500px; 
          height: 500px; 
          border-radius: 50%; 
          background: radial-gradient(circle, rgba(255, 105, 180, 0.25) 0%, transparent 75%); 
          filter: blur(60px);
          pointer-events: none; 
          z-index: 0;
        }
        .fs-hero-grid {
          max-width: 1330px; 
          margin: 0 auto; 
          padding: 0 40px; 
          display: grid; 
          grid-template-columns: 1fr 1fr; 
          gap: 40px; 
          align-items: center; 
          position: relative;
          z-index: 2;
        }
        .fs-hero-text { padding-bottom: 20px; }
        .fs-hero-title {
          font-size: 54px;
          line-height: 1.1;
          letter-spacing: -1.5px;
          color: #0A0A2E;
          font-weight: 800;
          margin-bottom: 8px;
        }
        .fs-hero-title-blue {
          font-size: 54px;
          line-height: 1.1;
          letter-spacing: -1.5px;
          color: #2E29FF;
          font-weight: 800;
          margin-bottom: 24px;
          display: block;
        }
        .fs-hero-desc {
          font-size: 15.5px;
          line-height: 1.7;
          color: #4B5563;
          max-width: 500px;
          margin-bottom: 24px;
          font-weight: 400;
        }
        .fs-hero-image-wrapper {
          position:relative; display:flex; flex-direction:column; align-items:center; justify-content:center; z-index:5;
        }
        .fs-hero-image {
          width:100%; max-width:450px; display:block; border-radius:24px; margin-top:-40px; transition:transform 0.4s cubic-bezier(0.16,1,0.3,1); cursor:pointer;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        .fs-hero-image:hover { transform:translateY(-8px) scale(1.03); }

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
        .fs-marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes scrollMarquee {
          0% { transform: translateX(calc(-50% - 30px)); }
          100% { transform: translateX(0); }
        }
        .fs-marquee-icon-wrap {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          margin: 0 40px;
        }
        .fs-marquee-icon {
          width: 73%;
          height: 100%;
          object-fit: contain;
          opacity: 0.5;
          filter: grayscale(100%);
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .fs-marquee-icon:hover {
          opacity: 1;
          filter: grayscale(0%);
          transform: scale(1.15);
        }

        /* AGENCY ALTERNATIVE SECTION */
        .fs-agency-alt {
          background-color: #2E29FF;
          border-top: 1px solid rgba(255,255,255,0.1);
        }
        .nd-ticker-wrap { background:transparent; padding:18px 0; overflow:hidden; border-bottom:1px solid rgba(255,255,255,0.1); position: relative; z-index: 10; }
        .nd-ticker { display:flex; width:100%; }
        .nd-ticker-track { display:flex; width:max-content; animation:ticker-slide 32s linear infinite; }
        .nd-ticker-group { display:flex; align-items:center; gap:50px; padding-right:50px; white-space:nowrap; }
        .nd-ticker-group span { font-family:'Space Grotesk',sans-serif; font-size:14px; font-weight:800; color:#fff; letter-spacing:1.5px; text-transform:uppercase; display:flex; align-items:center; gap:8px; }
        @keyframes ticker-slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 25px)); }
        }
        
        .fs-agency-alt-bg {
          background-image: radial-gradient(rgba(255, 255, 255, 0.15) 1.5px, transparent 1.5px);
          background-size: 24px 24px;
          padding-bottom: 60px;
        }

        .nd-intro { padding:72px 0 40px; background:transparent; }
        .nd-intro-inner { max-width:1330px; margin:0 auto; padding:0 24px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:40px; }
        .nd-intro-text h2 { color:#fff; font-size:36px; max-width:600px; line-height:1.2; margin-bottom:12px; }
        .nd-intro-text h2 em { color:#FFB6DB; font-style:normal; }
        .nd-intro-text p { color:rgba(255,255,255,0.75); font-size:15px; max-width:560px; font-weight:400; }
        .nd-intro-stats { display:flex; gap:32px; flex-wrap:wrap; }
        .nd-intro-stat { text-align:center; }
        .nd-intro-stat-num { font-size:48px; font-weight:700; color:#fff; line-height:1; }
        .nd-intro-stat-num sub { font-size:20px; color:#FFB6DB; }
        .nd-intro-stat-label { font-size:12px; color:#FFB6DB; font-weight:700; text-transform:uppercase; letter-spacing:0.5px; margin-top:4px; }
        .nd-intro-divider { width:1px; height:60px; background:rgba(255,255,255,0.2); align-self:center; }

        .fs-usp-bar-transparent {
          background: transparent;
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
        
        @media (max-width: 900px) {
          .nd-intro-inner { justify-content:center; text-align:center; }
          .nd-intro-stats { justify-content:center; }
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
          .fs-hero-title-blue { font-size: 36px; }
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
        
        <section className="fs-hero">
          <div className="fs-container fs-hero-grid">
            <div className="fs-hero-text">
              <div style={{display:'inline-flex', alignItems:'center', gap:'8px', background:'rgba(46,41,255,0.08)', border:'1px solid rgba(46,41,255,0.2)', padding:'6px 16px', borderRadius:'40px', fontSize:'11px', fontWeight:'700', color:'#2E29FF', letterSpacing:'0.8px', textTransform:'uppercase', marginBottom:'20px'}}>ENTERPRISE DEVELOPMENT</div>
              <h1 className="fs-hero-title">Gen AI</h1>
              <span className="fs-hero-title-blue">Development</span>
              <p className="fs-hero-desc">
                NOVADESK delivers professional Gen AI Development solutions designed to scale. From architecture to deployment, we build high-performance systems for modern businesses.
              </p>
              <Link to="/contact-us" className="fs-btn fs-btn-primary" style={{ marginBottom: '40px', display: 'inline-flex' }}>
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
                  <div style={{ fontSize: '10px', textTransform: 'uppercase', color: '#64748b', fontWeight: '700' }}>BUSINESS INCUBATOR<br />PORTFOLIO</div>
                </div>
              </div>
            </div>
            <div className="fs-hero-image-wrapper">
              <img src="/hero-visual.png" alt="GenAiDevelopment Team" className="fs-hero-image" />
            </div>
          </div>
        </section>

        {/* AGENCY ALTERNATIVE SECTION */}
        <section className="fs-agency-alt">
          {/* Top Ticker */}
          <div className="nd-ticker-wrap">
            <div className="nd-ticker">
              <div className="nd-ticker-track">
                {[...Array(2)].map((_, idx) => (
                  <div key={idx} className="nd-ticker-group">
                    <span>✦ ✦ OPENAI API</span>\n                    <span>✦ ✦ LLAMA 3</span>\n                    <span>✦ ✦ LANGCHAIN</span>\n                    <span>✦ ✦ VECTOR DATABASES</span>\n                    <span>✦ ✦ HUGGINGFACE</span>\n                    <span>✦ ✦ CUSTOM ML MODELS</span>
                    <span>✦ 100% IP OWNERSHIP</span>
                    <span>✦ DIRECT DEVELOPER ACCESS</span>
                    <span>✦ WEEKLY WORKABLE MILESTONES</span>
                    <span>✦ CMMI LEVEL 5 STANDARDS</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="fs-agency-alt-bg">
            <div className="nd-intro">
              <div className="nd-intro-inner">
                <div className="nd-intro-text">
                  <h2>Built for founders who are <em>tired of agency theater</em></h2>
                  <p>Direct access to a full-stack + AI builder who ships weekly milestones and answers your messages the same day.</p>
                </div>
                <div className="nd-intro-stats">
                  <div className="nd-intro-stat">
                    <div className="nd-intro-stat-num">3<sub>+</sub></div>
                    <div className="nd-intro-stat-label">Products Shipped</div>
                  </div>
                  <div className="nd-intro-divider" />
                  <div className="nd-intro-stat">
                    <div className="nd-intro-stat-num">7<sub>day</sub></div>
                    <div className="nd-intro-stat-label">To First Milestone</div>
                  </div>
                  <div className="nd-intro-divider" />
                  <div className="nd-intro-stat">
                    <div className="nd-intro-stat-num">1<sub>dev</sub></div>
                    <div className="nd-intro-stat-label">Full Ownership</div>
                  </div>
                </div>
              </div>
            </div>

            {/* USP BAR inside the same dotted background */}
            <div className="fs-usp-bar-transparent">
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
          </div>
        </section>

        {/* TRUST BAR */}
        <section className="fs-trust">
          <div className="fs-container">
            <p>Full Stack Development, Powered by <span className="fs-text-blue">Modern Technologies</span></p>
          </div>
          <div className="fs-marquee-container">
            <div className="fs-marquee-track">
              {/* Original List */}
              <div className="fs-marquee-icon-wrap"><img src="/icons/react.svg" alt="React" className="fs-marquee-icon" /></div>
              <div className="fs-marquee-icon-wrap"><img src="/icons/nextjs.svg" alt="Next.js" className="fs-marquee-icon" /></div>
              <div className="fs-marquee-icon-wrap"><img src="/icons/nodejs.svg" alt="Node.js" className="fs-marquee-icon" /></div>
              <div className="fs-marquee-icon-wrap"><img src="/icons/python.svg" alt="Python" className="fs-marquee-icon" /></div>
              <div className="fs-marquee-icon-wrap"><img src="/icons/django.svg" alt="Django" className="fs-marquee-icon" /></div>
              <div className="fs-marquee-icon-wrap"><img src="/icons/postgresql.svg" alt="PostgreSQL" className="fs-marquee-icon" /></div>
              <div className="fs-marquee-icon-wrap"><img src="/icons/mongodb.svg" alt="MongoDB" className="fs-marquee-icon" /></div>
              <div className="fs-marquee-icon-wrap"><img src="/icons/aws.svg" alt="AWS" className="fs-marquee-icon" /></div>
              <div className="fs-marquee-icon-wrap"><img src="/icons/docker.svg" alt="Docker" className="fs-marquee-icon" /></div>
              <div className="fs-marquee-icon-wrap"><img src="/icons/tailwind.svg" alt="Tailwind" className="fs-marquee-icon" /></div>
              <div className="fs-marquee-icon-wrap"><img src="/icons/figma.svg" alt="Figma" className="fs-marquee-icon" /></div>
              <div className="fs-marquee-icon-wrap"><img src="/icons/openai.svg" alt="OpenAI" className="fs-marquee-icon" /></div>
              {/* Duplicated List for seamless scrolling */}
              <div className="fs-marquee-icon-wrap"><img src="/icons/react.svg" alt="React" className="fs-marquee-icon" /></div>
              <div className="fs-marquee-icon-wrap"><img src="/icons/nextjs.svg" alt="Next.js" className="fs-marquee-icon" /></div>
              <div className="fs-marquee-icon-wrap"><img src="/icons/nodejs.svg" alt="Node.js" className="fs-marquee-icon" /></div>
              <div className="fs-marquee-icon-wrap"><img src="/icons/python.svg" alt="Python" className="fs-marquee-icon" /></div>
              <div className="fs-marquee-icon-wrap"><img src="/icons/django.svg" alt="Django" className="fs-marquee-icon" /></div>
              <div className="fs-marquee-icon-wrap"><img src="/icons/postgresql.svg" alt="PostgreSQL" className="fs-marquee-icon" /></div>
              <div className="fs-marquee-icon-wrap"><img src="/icons/mongodb.svg" alt="MongoDB" className="fs-marquee-icon" /></div>
              <div className="fs-marquee-icon-wrap"><img src="/icons/aws.svg" alt="AWS" className="fs-marquee-icon" /></div>
              <div className="fs-marquee-icon-wrap"><img src="/icons/docker.svg" alt="Docker" className="fs-marquee-icon" /></div>
              <div className="fs-marquee-icon-wrap"><img src="/icons/tailwind.svg" alt="Tailwind" className="fs-marquee-icon" /></div>
              <div className="fs-marquee-icon-wrap"><img src="/icons/figma.svg" alt="Figma" className="fs-marquee-icon" /></div>
              <div className="fs-marquee-icon-wrap"><img src="/icons/openai.svg" alt="OpenAI" className="fs-marquee-icon" /></div>
            </div>
          </div>
        </section>



        {/* SERVICES EXPERTISE */}
        <section className="fs-services">
          <div className="fs-container">
            <div className="fs-split-header">
              <div>
                <div className="fs-tag-arrows">OUR EXPERTISE</div>
                <h2>What's Included in Our Gen AI Development Services</h2>
              </div>
              <p>
                We cover the entire lifecycle of Gen AI Development. Our modular approach ensures that your product is secure, fast, and easy to maintain as your business grows.
              </p>
            </div>

            <div className="fs-services-grid">
              <div className="fs-service-card">
                <h3>Full Stack eCommerce Development</h3>
                <p>Launch high-performing eCommerce platforms with custom storefronts, secure checkout, inventory systems, and real-time order tracking.</p>
                <div className="fs-service-arrow"><ArrowRight /></div>
              </div>
              <div className="fs-service-card">
                <h3>Front End Development</h3>
                <p>We craft pixel-perfect, responsive UIs using React, Angular, and Vue, built for speed, accessibility, and user retention.</p>
                <div className="fs-service-arrow"><ArrowRight /></div>
              </div>
              <div className="fs-service-card">
                <h3>Back End Development</h3>
                <p>Our backends are built for scale with Node.js, Python, and PHP. Secure, API-ready, and architecture-compliant by default.</p>
                <div className="fs-service-arrow"><ArrowRight /></div>
              </div>
              <div className="fs-service-card">
                <h3>Full Stack with AI Integration</h3>
                <p>From recommendation engines to automation bots, we integrate AI capabilities that elevate your app's intelligence and user experience.</p>
                <div className="fs-service-arrow"><ArrowRight /></div>
              </div>
              <div className="fs-service-card">
                <h3>MERN Stack Development</h3>
                <p>Choose the stack that fits your architecture. We support full-cycle builds across JavaScript and PHP ecosystems with clean handoffs.</p>
                <div className="fs-service-arrow"><ArrowRight /></div>
              </div>
              <div className="fs-service-card">
                <h3>Complete Web App Development</h3>
                <p>We handle everything from database modeling to cloud deployment, ensuring your app is fast, reliable, and built to evolve.</p>
                <div className="fs-service-arrow"><ArrowRight /></div>
              </div>
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
                <h2>Scale Faster With Our<br/>Gen AI Development Expertise</h2>
              </div>
              <div className="fs-api-cta-right">
                <p>Partner with a team that understands the nuances of Gen AI Development. We build architectures that support millions of users without breaking a sweat.</p>
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
                <h2>Inside Our Gen AI Development<br/>Process</h2>
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
        {/* <div className="fs-container">
          <section className="fs-cta-bottom">
            <h2>Have a full-stack project in mind?</h2>
            <p>Tell me what you're building. You'll get a clear scope, timeline, and quote — usually within a day.</p>
            <Link to="/contact-us" className="fs-btn fs-btn-primary" style={{ marginBottom: '16px' }}>
              Get a Free Quote <ArrowRight />
            </Link>
            <div style={{ fontSize: '15px', color: '#64748b' }}>
              or email hello@novadesk.dev
            </div>
          </section>
        </div> */}

      </div>
    </>
  );
}
