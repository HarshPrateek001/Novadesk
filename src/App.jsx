import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const Home = React.lazy(() => import('./pages/Home'));
const AboutUs = React.lazy(() => import('./pages/AboutUs'));
const CaseStudies = React.lazy(() => import('./pages/CaseStudies'));
const ContactUs = React.lazy(() => import('./pages/ContactUs'));
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy'));
const TermsConditions = React.lazy(() => import('./pages/TermsConditions'));

import ChatWidget from './components/ChatWidget';
import WhatsAppButton from './components/WhatsAppButton';

const FullStackDevelopment = React.lazy(() => import('./pages/services/FullStackDevelopment'));
const WebApplicationDevelopment = React.lazy(() => import('./pages/services/WebApplicationDevelopment'));
const ReactJsDevelopment = React.lazy(() => import('./pages/services/ReactJsDevelopment'));
const ChatbotDevelopment = React.lazy(() => import('./pages/services/ChatbotDevelopment'));
const GenAiDevelopment = React.lazy(() => import('./pages/services/GenAiDevelopment'));
const AiIntegratedSoftware = React.lazy(() => import('./pages/services/AiIntegratedSoftware'));
const ConversationalAi = React.lazy(() => import('./pages/services/ConversationalAi'));
const PhpDevelopment = React.lazy(() => import('./pages/services/PhpDevelopment'));
const PythonDevelopment = React.lazy(() => import('./pages/services/PythonDevelopment'));
const NodeJsDevelopment = React.lazy(() => import('./pages/services/NodeJsDevelopment'));
const CmsDevelopment = React.lazy(() => import('./pages/services/CmsDevelopment'));
const WordPressDevelopment = React.lazy(() => import('./pages/services/WordPressDevelopment'));
const EcommerceDevelopment = React.lazy(() => import('./pages/services/EcommerceDevelopment'));
const EcommerceDesign = React.lazy(() => import('./pages/services/EcommerceDesign'));
const EcommerceImplementation = React.lazy(() => import('./pages/services/EcommerceImplementation'));
const WoocommerceDevelopment = React.lazy(() => import('./pages/services/WoocommerceDevelopment'));
const ShopifyDevelopment = React.lazy(() => import('./pages/services/ShopifyDevelopment'));
const AndroidDevelopment = React.lazy(() => import('./pages/services/AndroidDevelopment'));
const IosDevelopment = React.lazy(() => import('./pages/services/IosDevelopment'));
const MobileAppDevelopment = React.lazy(() => import('./pages/services/MobileAppDevelopment'));
const ReactNativeDevelopment = React.lazy(() => import('./pages/services/ReactNativeDevelopment'));
const SaasDevelopment = React.lazy(() => import('./pages/services/SaasDevelopment'));
const ErpSoftwareDevelopment = React.lazy(() => import('./pages/services/ErpSoftwareDevelopment'));
const CrmSystemsDevelopment = React.lazy(() => import('./pages/services/CrmSystemsDevelopment'));
const EnterpriseSoftwareDevelopment = React.lazy(() => import('./pages/services/EnterpriseSoftwareDevelopment'));
const CustomSoftwareDevelopment = React.lazy(() => import('./pages/services/CustomSoftwareDevelopment'));
const MvpDevelopment = React.lazy(() => import('./pages/services/MvpDevelopment'));

const Fintech = React.lazy(() => import('./pages/industries/Fintech'));

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header />
          <main style={{ flex: 1 }}>
            <React.Suspense fallback={<div style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px'}}>Loading...</div>}>
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
                
                <Route path="/industries/fintech" element={<Fintech />} />
                
                {/* Catch-all redirects to Home */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </React.Suspense>
          </main>
          <Footer />
          <ChatWidget />
          <WhatsAppButton />
        </div>
      </Router>
    </HelmetProvider>
  );
}
