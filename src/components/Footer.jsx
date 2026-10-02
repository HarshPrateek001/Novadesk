import React from 'react';
import { Link } from 'react-router-dom';

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);
const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);
const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);
const PinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px', flexShrink: 0, marginTop: '3px' }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);
const PhoneIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px', flexShrink: 0 }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);

const LogoIconWhite = () => (
  <svg width="34" height="34" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="8" fill="#ffffff" />
    <path d="M6 24L16 12L12 10L6 24Z" fill="#2E29FF" />
    <path d="M12 24L22 12L18 10L12 24Z" fill="#2E29FF" opacity="0.8" />
    <path d="M17 24L27 12L22 10L17 24Z" fill="#2E29FF" opacity="0.5" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="nd-footer">
      <style>{`
        .nd-footer {
          background: #2E29FF;
          color: #ffffff;
          padding: 80px 0 0 0;
          font-family: 'Space Grotesk', sans-serif;
          position: relative;
          overflow: hidden;
        }
        .nd-footer-container {
          max-width: 1330px;
          margin: 0 auto;
          padding: 0 40px;
        }
        .nd-footer-top {
          display: grid;
          grid-template-columns: 2fr 1fr 1.3fr 1fr 1.4fr;
          gap: 40px;
          padding-bottom: 50px;
        }
        .nd-footer-logo-area {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .nd-footer-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          color: #ffffff;
        }
        .nd-footer-brand-text {
          font-size: 26px;
          font-weight: 900;
          letter-spacing: -1px;
          text-transform: uppercase;
        }
        .nd-footer-desc {
          font-size: 13.5px;
          line-height: 1.65;
          color: rgba(255, 255, 255, 0.95);
          max-width: 360px;
          font-weight: 400;
        }
        .nd-footer-socials {
          display: flex;
          gap: 12px;
          margin-top: 6px;
        }
        .nd-footer-social-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.16);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          transition: all 0.25s;
          text-decoration: none;
        }
        .nd-footer-social-btn:hover {
          background: #ffffff;
          color: #2E29FF;
          transform: translateY(-2px);
        }
        .nd-footer-social-btn:focus-visible {
          outline: 2px solid #00FFB2;
          outline-offset: 2px;
        }
        
        .nd-footer-col h4 {
          font-size: 12px;
          font-weight: 700;
          color: #00FFB2;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 20px;
        }
        .nd-footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .nd-footer-links a {
          color: #ffffff;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          transition: opacity 0.2s, color 0.2s;
        }
        .nd-footer-links a:hover {
          color: #00FFB2;
        }
        .nd-footer-links a:focus-visible {
          outline: 2px solid #00FFB2;
          outline-offset: 2px;
        }

        .nd-footer-contact-group {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .nd-footer-contact-label {
          font-size: 11px;
          font-weight: 700;
          color: #00FFB2;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .nd-footer-contact-value {
          font-size: 14.5px;
          font-weight: 600;
          color: #ffffff;
          text-decoration: none;
        }
        .nd-footer-contact-value:hover {
          color: #00FFB2;
        }
        .nd-footer-separator {
          height: 1px;
          background: rgba(255, 255, 255, 0.2);
          margin: 6px 0;
        }

        /* ── OFFICE LOCATIONS ── */
        .nd-footer-offices {
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          padding: 36px 0;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }
        .nd-office-card {
          padding: 0 20px;
          border-left: 1px solid rgba(255, 255, 255, 0.2);
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .nd-office-card:first-child {
          border-left: none;
          padding-left: 0;
        }
        .nd-office-title {
          font-size: 12px;
          font-weight: 700;
          color: #00FFB2;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .nd-office-addr {
          font-size: 13px;
          line-height: 1.6;
          color: #ffffff;
          font-weight: 400;
          display: flex;
          align-items: flex-start;
        }
        .nd-office-phone {
          font-size: 13px;
          color: #ffffff;
          text-decoration: none;
          font-weight: 600;
          display: flex;
          align-items: center;
        }

        /* ── LOCAL SEO ── */
        .nd-local-seo {
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          padding: 36px 0 24px 0;
          text-align: center !important;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .nd-local-seo h4 {
          font-size: 12px;
          font-weight: 700;
          color: #00FFB2;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 12px;
          text-align: center !important;
        }
        .nd-local-seo p {
          font-size: 12.5px;
          color: #ffffff;
          line-height: 1.85;
          max-width: 1100px;
          margin: 0 auto;
          text-align: center !important;
        }

        /* ── GIANT WATERMARK ── */
        .nd-footer-watermark {
          font-size: clamp(30px, 12.5vw, 240px);
          font-weight: 900;
          white-space: nowrap;
          overflow: hidden;
          width: 100%;
          text-align: center;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
          letter-spacing: 0px;
          line-height: 0.85;
          user-select: none;
          font-family: inherit;
          cursor: default;
          transition: transform 1.2s cubic-bezier(0.25, 0.8, 0.25, 1);
          transform: translateY(0);
        }

        /* ── BOTTOM BAR ── */
        .nd-footer-bottom {
          background: #1914b8;
          padding: 22px 0;
        }
        .nd-footer-bottom-inner {
          max-width: 1330px;
          margin: 0 auto;
          padding: 0 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
        }
        .nd-footer-copy {
          font-size: 13.5px;
          color: #ffffff;
          font-weight: 500;
        }
        .nd-footer-bottom-links {
          display: flex;
          gap: 24px;
        }
        .nd-footer-bottom-links a {
          color: #ffffff;
          text-decoration: none;
          font-size: 13.5px;
          font-weight: 500;
          transition: color 0.2s;
        }
        .nd-footer-bottom-links a:hover {
          color: #00FFB2;
        }

        /* Responsive */
        @media (max-width: 1100px) {
          .nd-footer-top {
            grid-template-columns: 1fr 1fr;
            gap: 36px;
          }
          .nd-footer-offices {
            grid-template-columns: 1fr 1fr;
            gap: 28px;
          }
          .nd-office-card {
            border-left: none;
            padding: 0;
          }
        }
        @media (max-width: 640px) {
          .nd-footer-top {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .nd-footer-offices {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .nd-footer-container {
            padding: 0 20px;
          }
          .nd-footer-bottom-inner {
            padding: 0 20px;
            flex-direction: column;
            text-align: center;
          }
          .nd-footer-watermark {
            font-size: 16.5vw;
          }
        }
      `}</style>

      <div className="nd-footer-container">
        {/* Top Blocks: Structured 5-Column Hub */}
        <div className="nd-footer-top">
          {/* Col 1: Identity & Official Socials */}
          <div className="nd-footer-logo-area">
            <Link to="/" className="nd-footer-brand" aria-label="NovaDesk Homepage">
              <LogoIconWhite />
              <span className="nd-footer-brand-text">NOVA<span style={{ color: '#FFB6DB' }}>DESK</span></span>
            </Link>
            <p className="nd-footer-desc">
              Founded by Harsh Prateek, NOVADESK is a high-performance software and AI engineering studio delivering scalable web platforms, mobile apps, SaaS architectures, and enterprise systems across India and global markets.
            </p>
            <div className="nd-footer-socials" aria-label="NovaDesk Official Social Profiles">
              <a href="https://www.linkedin.com/company/novadesk-solutions/" target="_blank" rel="noopener noreferrer" className="nd-footer-social-btn" aria-label="NovaDesk on LinkedIn"><LinkedInIcon /></a>
              <a href="https://www.instagram.com/novadesk_officials_?igsh=MW5yZGtrbzg5aXNscg==" target="_blank" rel="noopener noreferrer" className="nd-footer-social-btn" aria-label="NovaDesk on Instagram"><InstagramIcon /></a>
              <a href="https://www.facebook.com/share/1BfvnjhFV9/" target="_blank" rel="noopener noreferrer" className="nd-footer-social-btn" aria-label="NovaDesk on Facebook"><FacebookIcon /></a>
              <a href="https://github.com/novadesksite-001" target="_blank" rel="noopener noreferrer" className="nd-footer-social-btn" aria-label="NovaDesk on GitHub"><GithubIcon /></a>
            </div>
          </div>

          {/* Col 2: Company */}
          <div className="nd-footer-col">
            <h4>Company</h4>
            <ul className="nd-footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/case-studies">Case Studies</Link></li>
              <li><Link to="/blog">Engineering Blog</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
              <li><Link to="/get-a-free-quote">Get Project Estimate</Link></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="nd-footer-col">
            <h4>Services</h4>
            <ul className="nd-footer-links">
              <li><Link to="/services/web-development">Web Development</Link></li>
              <li><Link to="/services/custom-software-development">Custom Software</Link></li>
              <li><Link to="/services/saas-development">SaaS Development</Link></li>
              <li><Link to="/services/ai-development">AI Development</Link></li>
              <li><Link to="/services/ecommerce-development">E-Commerce Solutions</Link></li>
              <li><Link to="/services/mobile-app-development">Mobile App Development</Link></li>
              <li><Link to="/services/ui-ux-design">UI/UX Design</Link></li>
              <li><Link to="/services/website-maintenance">Website Maintenance</Link></li>
            </ul>
          </div>

          {/* Col 4: Regional Hubs */}
          <div className="nd-footer-col">
            <h4>Locations</h4>
            <ul className="nd-footer-links">
              <li><Link to="/locations/kolkata">Kolkata Hub</Link></li>
              <li><Link to="/locations/durgapur">Durgapur IT Corridor</Link></li>
              <li><Link to="/locations/deoghar">Deoghar HQ Studio</Link></li>
              <li><Link to="/contact-us">Global Remote Delivery</Link></li>
            </ul>
          </div>

          {/* Col 5: Founder & Direct Contact */}
          <div className="nd-footer-col">
            <h4>Leadership &amp; Contact</h4>
            <div className="nd-footer-contact-group">
              <div style={{ fontSize: '13.5px', color: '#ffffff', lineHeight: '1.5' }}>
                <strong>Harsh Prateek</strong>
                <span style={{ display: 'block', fontSize: '12px', color: '#00FFB2' }}>Founder &amp; Lead Architect</span>
              </div>
              <div style={{ display: 'flex', gap: '14px', marginTop: '2px' }}>
                <a href="https://linkedin.com/in/harshprateek" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', fontSize: '12.5px', textDecoration: 'underline' }} aria-label="Harsh Prateek on LinkedIn">Personal LinkedIn</a>
                <a href="https://calendly.com/itsharshprateek/30min" target="_blank" rel="noopener noreferrer" style={{ color: '#00FFB2', fontSize: '12.5px', textDecoration: 'underline' }} aria-label="Schedule 30-min Consultation with Founder">Book 30m Call</a>
              </div>

              <div className="nd-footer-separator" />
              
              <div className="nd-footer-contact-label">Direct Inquiries:</div>
              <a href="tel:+917870142813" className="nd-footer-contact-value" aria-label="Call NovaDesk at +91 787 014 2813">+91-787 014 2813</a>
              <a href="mailto:novadesk.site@gmail.com" className="nd-footer-contact-value" aria-label="Email NovaDesk at novadesk.site@gmail.com">novadesk.site@gmail.com</a>
            </div>
          </div>
        </div>

        {/* Local SEO Cities List & Business Capabilities (Accessible & Crawlable) */}
        <div className="nd-local-seo">
          <h4>National Service Network &amp; Regional Hubs</h4>
          <p>
            <strong>Jharkhand:</strong> <Link to="/locations/deoghar" style={{ color: '#ffffff', textDecoration: 'underline' }}>Deoghar</Link> • Ranchi • Jamshedpur &nbsp;|&nbsp; 
            <strong>Bihar:</strong> Patna &nbsp;|&nbsp; 
            <strong>Delhi NCR:</strong> Delhi &nbsp;|&nbsp; 
            <strong>Odisha:</strong> Bhubaneshwar • Cuttack &nbsp;|&nbsp; 
            <strong>West Bengal:</strong> <Link to="/locations/kolkata" style={{ color: '#ffffff', textDecoration: 'underline' }}>Kolkata</Link> • Siliguri • Asansol • <Link to="/locations/durgapur" style={{ color: '#ffffff', textDecoration: 'underline' }}>Durgapur</Link> • Howrah • Malda • Kharagpur • Darjeeling • Bardhaman • Hooghly • Nadia • Midnapore • Murshidabad • Purulia • Haldia • Bankura • Jalpaiguri • Dinajpur • Birbhum • Cooch Behar • North 24 Parganas • South 24 Parganas • Kalimpong • Alipurduar • Jhargram • Basirhat • Bolpur • Raiganj • Kalna • Islampur • Sainthia • Kandi • Egra • Mirik • Birpara • Bakshirhat • Pundibari • Bara Jaguli • Abinashpur • Parulia
          </p>

          <div style={{ fontSize: '12px', color: '#ffffff', lineHeight: '1.8', maxWidth: '1100px', margin: '14px auto 0 auto', opacity: 0.9 }}>
            Internet Website Developers • Mobile Application Developers • Computer Software Developers • Computer Software Development Companies • Ecommerce Website Development Services • ERP Computer Software Developers (Tally Integration) • CRM Computer Software Solutions • Inventory Management Computer Software • Hospital &amp; Medical Software Developers • School Software Solutions • Salon &amp; Spa Computer Software • Custom SaaS Architecture • AI &amp; GenAI Automation
          </div>
        </div>

        {/* Large Watermark Text */}
        <div className="nd-footer-watermark" aria-hidden="true">
          NovaDesk
        </div>
      </div>

      {/* Bottom bar */}
      <div className="nd-footer-bottom">
        <div className="nd-footer-bottom-inner">
          <div className="nd-footer-copy">
            &copy; {new Date().getFullYear()} NOVADESK. All rights reserved. Founded by Harsh Prateek.
          </div>
          <div className="nd-footer-bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms &amp; Conditions</Link>
            <Link to="/contact-us">Get in Touch</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
