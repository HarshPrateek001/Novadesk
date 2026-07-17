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
          grid-template-columns: 2.2fr 1fr 1.3fr 1.5fr;
          gap: 60px;
          padding-bottom: 60px;
        }
        .nd-footer-logo-area {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .nd-footer-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          color: #ffffff;
        }
        .nd-footer-brand-text {
          font-size: 28px;
          font-weight: 900;
          letter-spacing: -1px;
          text-transform: uppercase;
        }
        .nd-footer-desc {
          font-size: 14px;
          line-height: 1.65;
          color: rgba(255, 255, 255, 0.85);
          max-width: 440px;
          font-weight: 400;
        }
        .nd-footer-socials {
          display: flex;
          gap: 12px;
          margin-top: 10px;
        }
        .nd-footer-social-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.12);
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
        
        .nd-footer-col h4 {
          font-size: 12px;
          font-weight: 700;
          color: #00FFB2;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 24px;
        }
        .nd-footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .nd-footer-links a {
          color: #ffffff;
          text-decoration: none;
          font-size: 15px;
          font-weight: 600;
          transition: opacity 0.2s;
        }
        .nd-footer-links a:hover {
          opacity: 0.75;
        }

        .nd-footer-contact-group {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .nd-footer-contact-label {
          font-size: 11px;
          font-weight: 700;
          color: #00FFB2;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .nd-footer-contact-value {
          font-size: 16px;
          font-weight: 700;
          color: #ffffff;
          text-decoration: none;
        }
        .nd-footer-separator {
          height: 1px;
          background: rgba(255, 255, 255, 0.15);
          margin: 8px 0;
        }

        /* ── OFFICE LOCATIONS ── */
        .nd-footer-offices {
          border-top: 1px solid rgba(255, 255, 255, 0.15);
          border-bottom: 1px solid rgba(255, 255, 255, 0.15);
          padding: 40px 0;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }
        .nd-office-card {
          padding: 0 24px;
          border-left: 1px solid rgba(255, 255, 255, 0.15);
          display: flex;
          flex-direction: column;
          gap: 12px;
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
          font-size: 13.5px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 400;
          display: flex;
          align-items: flex-start;
        }
        .nd-office-phone {
          font-size: 13.5px;
          color: #ffffff;
          text-decoration: none;
          font-weight: 600;
          display: flex;
          align-items: center;
        }

        /* ── LOCAL SEO ── */
        .nd-local-seo {
          border-top: 1px solid rgba(255, 255, 255, 0.15);
          padding: 40px 0;
          text-align: center;
        }
        .nd-local-seo h4 {
          font-size: 13px;
          font-weight: 700;
          color: #00FFB2;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 16px;
        }
        .nd-local-seo p {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.65);
          line-height: 1.8;
          max-width: 1000px;
          margin: 0 auto;
        }

        /* ── GIANT WATERMARK ── */
        .nd-footer-watermark {
          font-size: clamp(117px, 17.5vw, 251px);
          font-weight: 900;
          text-align: center;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
          letter-spacing: 0px;
          line-height: 0.85;
          user-select: none;
          font-family: inherit;
          cursor: pointer;
          transition: transform 1.2s cubic-bezier(0.25, 0.8, 0.25, 1);
          transform: translateY(0);
        }
        .nd-footer-watermark:hover {
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
          transform: translateY(-5px);
        }

        /* ── BOTTOM BAR ── */
        .nd-footer-bottom {
          background: #1e1ad6;
          padding: 24px 0;
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
          font-size: 13px;
          color: rgba(255, 255, 255, 0.7);
          font-weight: 500;
        }
        .nd-footer-bottom-links {
          display: flex;
          gap: 24px;
        }
        .nd-footer-bottom-links a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-size: 13px;
          font-weight: 500;
          transition: color 0.2s;
        }
        .nd-footer-bottom-links a:hover {
          color: #ffffff;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .nd-footer-top {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
          .nd-footer-offices {
            grid-template-columns: 1fr 1fr;
            gap: 30px;
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
        }
      `}</style>

      <div className="nd-footer-container">
        {/* Top Blocks */}
        <div className="nd-footer-top">
          {/* Col 1 */}
          <div className="nd-footer-logo-area">
            <Link to="/" className="nd-footer-brand">
              <LogoIconWhite />
              <span className="nd-footer-brand-text">NOVA<span style={{ color: '#FFB6DB' }}>DESK</span></span>
            </Link>
            <p className="nd-footer-desc">
              NOVADESK is a CMMI Level 5 certified software studio delivering web, mobile, UI/UX, and product engineering solutions. Recognized by Google Accelerator and LinkedIn, we've shipped 500+ projects across 50+ countries — turning ideas into products that attract funding, users, and real-world impact.
            </p>
            <div className="nd-footer-socials">
              <a href="https://www.linkedin.com/company/nexvant-solutions/" target="_blank" rel="noreferrer" className="nd-footer-social-btn"><LinkedInIcon /></a>
              <a href="https://www.instagram.com/novadesk_officials_?igsh=MW5yZGtrbzg5aXNscg==" target="_blank" rel="noreferrer" className="nd-footer-social-btn"><InstagramIcon /></a>
              <a href="https://www.facebook.com/share/1BfvnjhFV9/" target="_blank" rel="noreferrer" className="nd-footer-social-btn"><FacebookIcon /></a>
              <a href="https://github.com/novadesksite-001" target="_blank" rel="noreferrer" className="nd-footer-social-btn"><GithubIcon /></a>
            </div>
          </div>

          {/* Col 2 */}
          <div className="nd-footer-col">
            <h4>Quick Links</h4>
            <ul className="nd-footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about-us">Our Story</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="nd-footer-col">
            <h4>Solutions</h4>
            <ul className="nd-footer-links">
              <li><Link to="/services/saas-development">SaaS Development</Link></li>
              <li><Link to="/services/web-application-development">Web Application Development</Link></li>
              <li><Link to="/services/gen-ai-development">AI Development</Link></li>
              <li><Link to="/services/custom-software-development">Custom Software</Link></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="nd-footer-col">
            <div className="nd-footer-contact-group">
              <div className="nd-footer-contact-label">For Business:</div>
              <div className="nd-footer-contact-label">Phone:</div>
              <a href="tel:+917870142813" className="nd-footer-contact-value">+91-787 014 2813 (India)</a>
              
              <div className="nd-footer-separator" />
              
              <div className="nd-footer-contact-label">Email:</div>
              <a href="mailto:novadesk.site@gmail.com" className="nd-footer-contact-value" style={{ display: 'block', fontSize: '15px' }}>novadesk.site@gmail.com</a>
              <a href="mailto:novadesk.site@gmail.com" className="nd-footer-contact-value" style={{ display: 'block', fontSize: '15px', marginTop: '4px' }}>novadesk.site@gmail.com</a>
            </div>
          </div>
        </div>

        {/* Local SEO Cities List */}
        <div className="nd-local-seo">
          <h4>Proudly Serving Clients Across India</h4>
          <p>
            Mumbai • Bengaluru • New Delhi • Hyderabad • Pune • Chennai • Ahmedabad • Kolkata • Jaipur • Surat • 
            Gurugram • Noida • Chandigarh • Kochi • Indore • Lucknow • Bhopal • Coimbatore • Patna • Nagpur • 
            Vadodara • Ludhiana • Agra • Nashik • Kanpur • Thane • Visakhapatnam • Rajkot
          </p>
        </div>

        {/* Large Watermark Text */}
        <div className="nd-footer-watermark">
          NovaDesk
        </div>
      </div>

      {/* Bottom bar */}
      <div className="nd-footer-bottom">
        <div className="nd-footer-bottom-inner">
          <div className="nd-footer-copy">
            &copy; {new Date().getFullYear()} NOVADESK. All rights reserved.
          </div>
          <div className="nd-footer-bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
