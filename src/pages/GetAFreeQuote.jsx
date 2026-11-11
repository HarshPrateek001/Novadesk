import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

/* ─── SVG Icons ─────────────────────────────────────────────────────────── */
const ChevronDown = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#004BE8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const UploadIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="17 8 12 3 7 8"/>
    <line x1="12" y1="3" x2="12" y2="15"/>
  </svg>
);

const CheckCircleIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

export default function GetAFreeQuote() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    projectType: '',
    budget: '',
    maxTime: '',
    companyName: '',
    requiredSkills: '',
    country: '',
    message: '',
    fileName: ''
  });

  const [dragActive, setDragActive] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, fileName: e.target.files[0].name }));
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFormData((prev) => ({ ...prev, fileName: e.dataTransfer.files[0].name }));
    }
  };

  // Configurable Google Apps Script Web App Endpoint URL
  const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || "https://script.google.com/macros/s/AKfycby5JEjLhCyXvkxfKEu05WEbN9HlSRs4USuCQTudEygl7Cy_3YCN1zcD3E5f5DGKUpMY/exec";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      if (GOOGLE_SCRIPT_URL) {
        const payload = new URLSearchParams();
        Object.entries(formData).forEach(([key, val]) => {
          payload.append(key, val || '');
        });
        payload.append('submittedAt', new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }));

        await fetch(GOOGLE_SCRIPT_URL, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: payload.toString(),
        });
      } else {
        await new Promise((resolve) => setTimeout(resolve, 1200));
      }
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setSubmitting(false);
      setSubmitted(true);
    }
  };

  const quoteSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Request a Quote | NovaDesk",
    "description": "Request a project quote from NovaDesk. We offer custom web & mobile application development, AI integrations and enterprise solutions.",
    "url": "https://www.novadesk.site/get-a-free-quote"
  };

  return (
    <>
      <SEO
        title="Request a Quote | NovaDesk"
        description="Entrust with high professionalism, NovaDesk offers pixel-perfect web & mobile application development, third-party integrations, and AI solutions."
        keywords="Request a quote, web development quote, mobile app estimate, software quote India, hire developers NovaDesk"
        url="/get-a-free-quote"
        schema={quoteSchema}
      />

      <div style={{ backgroundColor: '#F8FAFC', minHeight: '100vh', fontFamily: "'Space Grotesk', sans-serif" }}>
        <style>{`
          .nd-quote-form-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 24px 32px;
          }
          @media (max-width: 720px) {
            .nd-quote-form-grid {
              grid-template-columns: 1fr;
              gap: 20px;
            }
          }
          .nd-quote-input:focus {
            border-color: #0052FF !important;
            box-shadow: 0 0 0 3px rgba(0, 82, 255, 0.12) !important;
          }
        `}</style>
        
        {/* HERO WAVE HEADER */}
        <section style={{
          backgroundColor: '#0052FF',
          position: 'relative',
          paddingTop: '135px',
          paddingBottom: '280px',
          overflow: 'hidden',
          color: '#FFFFFF'
        }}>
          {/* Subtle curved background overlay */}
          <div style={{
            position: 'absolute',
            bottom: '-6px',
            left: '-1%',
            width: '102%',
            overflow: 'hidden',
            lineHeight: 0,
            pointerEvents: 'none'
          }}>
            <svg 
              viewBox="0 0 1440 220" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              shapeRendering="crispEdges"
              style={{ width: '100%', height: 'auto', display: 'block', transform: 'scale(1.01)' }}
            >
              <path 
                d="M0,120 C360,220 720,220 1080,120 C1240,70 1360,60 1440,90 L1440,225 L0,225 Z" 
                fill="#F8FAFC" 
              />
            </svg>
          </div>

          <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '1000px', margin: '0 auto', padding: '0 24px' }}>
            <h1 style={{
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: '800',
              letterSpacing: '-0.02em',
              marginBottom: '16px',
              color: '#FFFFFF'
            }}>
              Request a Quote
            </h1>
            <p style={{
              fontSize: 'clamp(15px, 2vw, 18px)',
              color: 'rgba(255, 255, 255, 0.92)',
              maxWidth: '680px',
              lineHeight: '1.65',
              fontWeight: '400'
            }}>
              Entrust with high professionalism, we are capable of offering pixel perfect web &amp; mobile application development, third party integrations and solutions to your business.
            </p>
          </div>
        </section>

        {/* FLOATING CARD FORM SECTION */}
        <section style={{ marginTop: '-210px', paddingBottom: '100px', position: 'relative', zIndex: 10 }}>
          <div className="container" style={{ maxWidth: '960px', margin: '0 auto', padding: '0 20px' }}>
            
            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              boxShadow: '0 25px 60px rgba(0, 82, 255, 0.08), 0 4px 20px rgba(0, 0, 0, 0.03)',
              padding: 'clamp(28px, 5vw, 56px)',
              border: '1px solid rgba(226, 232, 240, 0.8)'
            }}>
              
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                  <div style={{ display: 'inline-flex', marginBottom: '20px' }}>
                    <CheckCircleIcon />
                  </div>
                  <h2 style={{ fontSize: '28px', fontWeight: '800', color: '#0F172A', marginBottom: '12px' }}>
                    Quote Request Submitted!
                  </h2>
                  <p style={{ fontSize: '16px', color: '#64748B', maxWidth: '480px', margin: '0 auto 28px', lineHeight: '1.6' }}>
                    Thank you for reaching out, <strong>{formData.firstName || 'there'}</strong>! Our team is reviewing your requirements and will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        firstName: '', lastName: '', phone: '', email: '',
                        projectType: '', budget: '', maxTime: '', companyName: '',
                        requiredSkills: '', country: '', message: '', fileName: ''
                      });
                    }}
                    style={{
                      backgroundColor: '#0052FF',
                      color: '#FFFFFF',
                      border: 'none',
                      padding: '14px 28px',
                      borderRadius: '8px',
                      fontWeight: '700',
                      fontSize: '15px',
                      cursor: 'pointer',
                      boxShadow: '0 4px 14px rgba(0, 82, 255, 0.25)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    Submit Another Quote Request
                  </button>
                </div>
              ) : (
                <form 
                  onSubmit={handleSubmit}
                  toolname="request_project_quote"
                  tooldescription="Submit a project estimation request for web, custom software, SaaS, mobile app, or AI development to NovaDesk"
                >
                  
                  {/* GRID LAYOUT - 2 EQUAL BALANCED COLUMNS */}
                  <div className="nd-quote-form-grid">
                    
                    {/* First Name */}
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <label htmlFor="quote-firstName" style={labelStyle}>
                        First Name <span style={{ color: '#E11D48', marginLeft: '4px' }}>*</span>
                      </label>
                      <input
                        id="quote-firstName"
                        type="text"
                        name="firstName"
                        toolparamdescription="First name of the client"
                        autoComplete="given-name"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Enter your first name"
                        className="nd-quote-input"
                        style={inputStyle}
                      />
                    </div>

                    {/* Last Name */}
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <label htmlFor="quote-lastName" style={labelStyle}>
                        Last Name
                      </label>
                      <input
                        id="quote-lastName"
                        type="text"
                        name="lastName"
                        toolparamdescription="Last name of the client"
                        autoComplete="family-name"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Enter your last name"
                        className="nd-quote-input"
                        style={inputStyle}
                      />
                    </div>

                    {/* Email */}
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <label htmlFor="quote-email" style={labelStyle}>
                        Email Address <span style={{ color: '#E11D48', marginLeft: '4px' }}>*</span>
                      </label>
                      <input
                        id="quote-email"
                        type="email"
                        name="email"
                        toolparamdescription="Work or personal email address of the client"
                        autoComplete="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@company.com"
                        className="nd-quote-input"
                        style={inputStyle}
                      />
                    </div>

                    {/* Phone Number */}
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <label htmlFor="quote-phone" style={labelStyle}>
                        Phone Number
                      </label>
                      <input
                        id="quote-phone"
                        type="tel"
                        name="phone"
                        toolparamdescription="Contact phone or WhatsApp number of the client"
                        autoComplete="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +91 78701 42813"
                        className="nd-quote-input"
                        style={inputStyle}
                      />
                    </div>

                    {/* Project Type Dropdown */}
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <label htmlFor="quote-projectType" style={labelStyle}>
                        Project Type
                      </label>
                      <div style={{ position: 'relative' }}>
                        <select
                          id="quote-projectType"
                          name="projectType"
                          toolparamdescription="Requested service category or project type"
                          value={formData.projectType}
                          onChange={handleChange}
                          className="nd-quote-input"
                          style={{
                            ...inputStyle,
                            appearance: 'none',
                            WebkitAppearance: 'none',
                            cursor: 'pointer',
                            color: formData.projectType ? '#0F172A' : '#94A3B8'
                          }}
                        >
                          <option value="" disabled>Select Project Type</option>
                          <option value="Business Website Development">Business Website Development</option>
                          <option value="E-commerce Storefront">E-commerce Storefront</option>
                          <option value="Custom Web Application">Custom Web Application</option>
                          <option value="SaaS Platform Engineering">SaaS Platform Engineering</option>
                          <option value="AI & Workflow Automation">AI &amp; Workflow Automation</option>
                          <option value="Website Redesign & Speed Optimization">Website Redesign &amp; Speed Optimization</option>
                          <option value="Website Maintenance & Support">Website Maintenance &amp; Support</option>
                        </select>
                        <div style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
                          <ChevronDown />
                        </div>
                      </div>
                    </div>

                    {/* Estimated Budget */}
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <label htmlFor="quote-budget" style={labelStyle}>
                        Estimated Budget
                      </label>
                      <div style={{ position: 'relative' }}>
                        <select
                          id="quote-budget"
                          name="budget"
                          toolparamdescription="Target budget range for the project"
                          value={formData.budget}
                          onChange={handleChange}
                          className="nd-quote-input"
                          style={{
                            ...inputStyle,
                            appearance: 'none',
                            WebkitAppearance: 'none',
                            cursor: 'pointer',
                            color: formData.budget ? '#0F172A' : '#94A3B8'
                          }}
                        >
                          <option value="" disabled>Select Estimated Budget Range</option>
                          <option value="Under ₹25,000">Under ₹25,000</option>
                          <option value="₹25,000 – ₹50,000">₹25,000 – ₹50,000</option>
                          <option value="₹50,000 – ₹1,00,000">₹50,000 – ₹1,00,000</option>
                          <option value="₹1,00,000 – ₹3,00,000">₹1,00,000 – ₹3,00,000</option>
                          <option value="₹3,00,000+">₹3,00,000+</option>
                          <option value="International ($1,000+)">International ($1,000+)</option>
                          <option value="Need Technical Consultation">Not sure yet (Need technical advice)</option>
                        </select>
                        <div style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
                          <ChevronDown />
                        </div>
                      </div>
                    </div>

                    {/* Expected Timeline */}
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <label htmlFor="quote-maxTime" style={labelStyle}>
                        Expected Timeline
                      </label>
                      <input
                        id="quote-maxTime"
                        type="text"
                        name="maxTime"
                        toolparamdescription="Expected project delivery timeline"
                        value={formData.maxTime}
                        onChange={handleChange}
                        placeholder="e.g. 2 Weeks, 1 Month, ASAP"
                        className="nd-quote-input"
                        style={inputStyle}
                      />
                    </div>

                    {/* Company Name */}
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <label htmlFor="quote-companyName" style={labelStyle}>
                        Company Name
                      </label>
                      <input
                        id="quote-companyName"
                        type="text"
                        name="companyName"
                        toolparamdescription="Company, brand, or startup name"
                        autoComplete="organization"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="e.g. NovaDesk Tech"
                        className="nd-quote-input"
                        style={inputStyle}
                      />
                    </div>

                    {/* Country Dropdown */}
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <label htmlFor="quote-country" style={labelStyle}>
                        Country
                      </label>
                      <div style={{ position: 'relative' }}>
                        <select
                          id="quote-country"
                          name="country"
                          toolparamdescription="Client country or location"
                          autoComplete="country-name"
                          value={formData.country}
                          onChange={handleChange}
                          className="nd-quote-input"
                          style={{
                            ...inputStyle,
                            appearance: 'none',
                            WebkitAppearance: 'none',
                            cursor: 'pointer',
                            color: formData.country ? '#0F172A' : '#94A3B8'
                          }}
                        >
                          <option value="" disabled>Select Country</option>
                          <option value="India">India</option>
                          <option value="United States">United States</option>
                          <option value="United Kingdom">United Kingdom</option>
                          <option value="United Arab Emirates">United Arab Emirates</option>
                          <option value="Canada">Canada</option>
                          <option value="Australia">Australia</option>
                          <option value="Germany">Germany</option>
                          <option value="Other">Other</option>
                        </select>
                        <div style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
                          <ChevronDown />
                        </div>
                      </div>
                    </div>

                    {/* Required Skills */}
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <label htmlFor="quote-requiredSkills" style={labelStyle}>
                        Required Tech / Skills
                      </label>
                      <input
                        id="quote-requiredSkills"
                        type="text"
                        name="requiredSkills"
                        toolparamdescription="Required technologies or technical stack"
                        value={formData.requiredSkills}
                        onChange={handleChange}
                        placeholder="e.g. React, Next.js, Node.js, Python"
                        className="nd-quote-input"
                        style={inputStyle}
                      />
                    </div>

                  </div>

                  {/* UPLOAD FILE ZONE (Full width) */}
                  <div style={{ marginTop: '28px' }}>
                    <label htmlFor="quote-file" style={{ fontSize: '13px', fontWeight: '700', color: '#1E293B', marginBottom: '8px', display: 'block' }}>
                      Upload Project Brief or Specification (Optional)
                    </label>
                    <div
                      onDragEnter={handleDrag}
                      onDragLeave={handleDrag}
                      onDragOver={handleDrag}
                      onDrop={handleDrop}
                      onClick={() => fileInputRef.current && fileInputRef.current.click()}
                      style={{
                        border: `2px dashed ${dragActive ? '#0052FF' : '#CBD5E1'}`,
                        borderRadius: '10px',
                        padding: '28px 20px',
                        textAlign: 'center',
                        backgroundColor: dragActive ? '#F0F5FF' : '#FAFAFA',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <input
                        id="quote-file"
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                        aria-label="Upload Project Brief file"
                      />
                      <p style={{ fontSize: '13px', fontWeight: '600', color: '#475569', marginBottom: '12px' }}>
                        {formData.fileName ? (
                          <span style={{ color: '#0052FF', fontWeight: '700' }}>Selected: {formData.fileName}</span>
                        ) : (
                          'Drag file here or click the button below'
                        )}
                      </p>
                      <button
                        type="button"
                        style={{
                          backgroundColor: '#10B981',
                          color: '#FFFFFF',
                          border: 'none',
                          padding: '8px 20px',
                          borderRadius: '6px',
                          fontSize: '12px',
                          fontWeight: '700',
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          boxShadow: '0 2px 8px rgba(16, 185, 129, 0.25)'
                        }}
                        aria-label="Choose file to upload"
                      >
                        <UploadIcon /> Upload file
                      </button>
                    </div>
                  </div>

                  {/* MESSAGE TEXTAREA */}
                  <div style={{ marginTop: '28px' }}>
                    <label htmlFor="quote-message" style={{ fontSize: '13px', fontWeight: '700', color: '#1E293B', marginBottom: '8px', display: 'block' }}>
                      Project Details &amp; Message
                    </label>
                    <textarea
                      id="quote-message"
                      name="message"
                      toolparamdescription="Detailed description or requirements for the project"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write details about your project or specific features required..."
                      className="nd-quote-input"
                      style={{
                        ...inputStyle,
                        height: 'auto',
                        minHeight: '140px',
                        padding: '12px 16px',
                        resize: 'vertical',
                        lineHeight: '1.6'
                      }}
                    />
                  </div>

                  {/* SUBMIT BUTTON ALIGNED RIGHT */}
                  <div style={{ marginTop: '36px', display: 'flex', justifyContent: 'flex-end' }}>
                    <button
                      type="submit"
                      disabled={submitting}
                      style={{
                        backgroundColor: '#0052FF',
                        color: '#FFFFFF',
                        border: 'none',
                        padding: '14px 40px',
                        borderRadius: '8px',
                        fontSize: '15px',
                        fontWeight: '700',
                        cursor: submitting ? 'wait' : 'pointer',
                        boxShadow: '0 8px 24px rgba(0, 82, 255, 0.3)',
                        transition: 'all 0.2s ease',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minWidth: '180px'
                      }}
                    >
                      {submitting ? 'Submitting...' : 'Request a quote'}
                    </button>
                  </div>

                </form>
              )}

            </div>

          </div>
        </section>

      </div>
    </>
  );
}

/* Common Input Style */
const inputStyle = {
  width: '100%',
  height: '48px',
  padding: '0 16px',
  borderRadius: '8px',
  border: '1px solid #CBD5E1',
  backgroundColor: '#FFFFFF',
  color: '#0F172A',
  fontFamily: 'inherit',
  fontSize: '14px',
  fontWeight: '500',
  outline: 'none',
  boxSizing: 'border-box',
  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
};

/* Common Label Style */
const labelStyle = {
  fontSize: '13px',
  fontWeight: '700',
  color: '#1E293B',
  marginBottom: '8px',
  display: 'flex',
  alignItems: 'center',
  minHeight: '20px',
  lineHeight: '1.4',
};
