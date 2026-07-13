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
import FullStackDevelopment from './pages/services/FullStackDevelopment';
import WebApplicationDevelopment from './pages/services/WebApplicationDevelopment';
import ReactJsDevelopment from './pages/services/ReactJsDevelopment';
import ChatbotDevelopment from './pages/services/ChatbotDevelopment';
import GenAiDevelopment from './pages/services/GenAiDevelopment';
import AiIntegratedSoftware from './pages/services/AiIntegratedSoftware';
import ConversationalAi from './pages/services/ConversationalAi';
import PhpDevelopment from './pages/services/PhpDevelopment';
import PythonDevelopment from './pages/services/PythonDevelopment';
import NodeJsDevelopment from './pages/services/NodeJsDevelopment';
import CmsDevelopment from './pages/services/CmsDevelopment';
import WordPressDevelopment from './pages/services/WordPressDevelopment';
import EcommerceDevelopment from './pages/services/EcommerceDevelopment';
import EcommerceDesign from './pages/services/EcommerceDesign';
import EcommerceImplementation from './pages/services/EcommerceImplementation';
import WoocommerceDevelopment from './pages/services/WoocommerceDevelopment';
import ShopifyDevelopment from './pages/services/ShopifyDevelopment';
import AndroidDevelopment from './pages/services/AndroidDevelopment';
import IosDevelopment from './pages/services/IosDevelopment';
import MobileAppDevelopment from './pages/services/MobileAppDevelopment';
import ReactNativeDevelopment from './pages/services/ReactNativeDevelopment';
import SaasDevelopment from './pages/services/SaasDevelopment';
import ErpSoftwareDevelopment from './pages/services/ErpSoftwareDevelopment';
import CrmSystemsDevelopment from './pages/services/CrmSystemsDevelopment';
import EnterpriseSoftwareDevelopment from './pages/services/EnterpriseSoftwareDevelopment';
import CustomSoftwareDevelopment from './pages/services/CustomSoftwareDevelopment';
import MvpDevelopment from './pages/services/MvpDevelopment';

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
              <Route path="/services/full-stack-development" element={<FullStackDevelopment />} />
              <Route path="/services/web-application-development" element={<WebApplicationDevelopment />} />
              <Route path="/services/react-js-development" element={<ReactJsDevelopment />} />
              <Route path="/services/chatbot-development" element={<ChatbotDevelopment />} />
              <Route path="/services/gen-ai-development" element={<GenAiDevelopment />} />
              <Route path="/services/ai-integrated-software" element={<AiIntegratedSoftware />} />
              <Route path="/services/conversational-ai" element={<ConversationalAi />} />
              <Route path="/services/php-development" element={<PhpDevelopment />} />
              <Route path="/services/python-development" element={<PythonDevelopment />} />
              <Route path="/services/node-js-development" element={<NodeJsDevelopment />} />
              <Route path="/services/cms-development" element={<CmsDevelopment />} />
              <Route path="/services/wordpress-development" element={<WordPressDevelopment />} />
              <Route path="/services/ecommerce-development" element={<EcommerceDevelopment />} />
              <Route path="/services/ecommerce-design" element={<EcommerceDesign />} />
              <Route path="/services/ecommerce-implementation" element={<EcommerceImplementation />} />
              <Route path="/services/woocommerce-development" element={<WoocommerceDevelopment />} />
              <Route path="/services/shopify-development" element={<ShopifyDevelopment />} />
              <Route path="/services/android-development" element={<AndroidDevelopment />} />
              <Route path="/services/ios-development" element={<IosDevelopment />} />
              <Route path="/services/mobile-app-development" element={<MobileAppDevelopment />} />
              <Route path="/services/react-native-development" element={<ReactNativeDevelopment />} />
              <Route path="/services/saas-development" element={<SaasDevelopment />} />
              <Route path="/services/erp-software-development" element={<ErpSoftwareDevelopment />} />
              <Route path="/services/crm-systems-development" element={<CrmSystemsDevelopment />} />
              <Route path="/services/enterprise-software-development" element={<EnterpriseSoftwareDevelopment />} />
              <Route path="/services/custom-software-development" element={<CustomSoftwareDevelopment />} />
              <Route path="/services/mvp-development" element={<MvpDevelopment />} />
              
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
