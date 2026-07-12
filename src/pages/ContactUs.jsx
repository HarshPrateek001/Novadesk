import React, { useEffect } from 'react';
import SEO from '../components/SEO';

const CalendlyWidget = () => {
  useEffect(() => {
    // Add the Calendly script to the body when the component mounts
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div 
      className="calendly-inline-widget" 
      data-url="https://calendly.com/itsharshprateek/30min" 
      style={{ minWidth: '320px', height: '700px' }} 
    />
  );
};

export default function ContactUs() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact NovaDesk",
    "description": "Get in touch with NovaDesk to discuss your tech requirements.",
    "url": "https://www.novadesk.site/contact-us"
  };

  return (
    <>
      <SEO 
        keywords="Contact NovaDesk, software agency contact, hire developers, free software consultation" 
        title="Contact Us"
        description="Schedule a free consultation or get in touch with our team to start building your next big idea."
        url="/contact-us"
        schema={contactSchema}
      />
      
      <div className="nd-contact-page" style={{ 
        paddingTop: '150px', 
        paddingBottom: '100px', 
        backgroundColor: '#f8fafc', 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center' 
      }}>
        
        <div className="nd-contact-header" style={{ textAlign: 'center', maxWidth: '800px', marginBottom: '40px', padding: '0 20px' }}>
          <h1 className="nd-contact-title" style={{ fontSize: '42px', fontWeight: '800', color: '#0b0f19', lineHeight: '1.2' }}>
            Let's Discuss Your <span style={{ color: '#2E29FF' }}>Project</span>
          </h1>
          <p style={{ fontSize: '18px', color: '#4B5563', marginTop: '16px', lineHeight: '1.6' }}>
            Pick a time that works for you. We'll hop on a quick, no-pressure call to talk about your requirements, technical architecture, and how NovaDesk can help.
          </p>
        </div>
        
        <div style={{ 
          width: '100%', 
          maxWidth: '1060px', 
          margin: '0 auto', 
          padding: '0 20px'
        }}>
          {/* Real Calendly Embed */}
          <div style={{
            background: '#ffffff',
            borderRadius: '16px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
            overflow: 'hidden',
            border: '1px solid rgba(46, 41, 255, 0.08)'
          }}>
            <CalendlyWidget />
          </div>
        </div>
        
      </div>
    </>
  );
}
