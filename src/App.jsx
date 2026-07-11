import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import CaseStudies from './pages/CaseStudies';
import ContactUs from './pages/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import ChatWidget from './components/ChatWidget';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header />
          <main style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsConditions />} />
              
              {/* Catch-all redirects to Home */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
          <ChatWidget />
          <WhatsAppButton />
        </div>
      </Router>
    </HelmetProvider>
  );
}
