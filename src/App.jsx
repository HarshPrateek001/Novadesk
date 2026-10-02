import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// ─── Blog System: Provider Pattern
// Import the context provider — wraps all blog routes.
// UI components never import the data layer directly.
import { BlogProvider } from './context/BlogContext.jsx';

const Home = React.lazy(() => import('./pages/Home'));
const AboutUs = React.lazy(() => import('./pages/AboutUs'));
const CaseStudies = React.lazy(() => import('./pages/CaseStudies'));
const ContactUs = React.lazy(() => import('./pages/ContactUs'));
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy'));
const TermsConditions = React.lazy(() => import('./pages/TermsConditions'));

// ─── Blog Pages (lazy-loaded for code splitting)
// These TWO routes handle ALL blog posts — forever.
// New blog = new JSON file in src/blogs/ — no React changes ever.
const BlogListPage = React.lazy(() => import('./pages/blog/BlogListPage'));
const BlogPostPage = React.lazy(() => import('./pages/blog/BlogPostPage'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

// ─── Commercial Service Landing Pages
const WebDevelopment = React.lazy(() => import('./pages/services/WebDevelopment'));
const AiDevelopment = React.lazy(() => import('./pages/services/AiDevelopment'));
const EcommerceDevelopment = React.lazy(() => import('./pages/services/EcommerceDevelopment'));
const UiUxDesign = React.lazy(() => import('./pages/services/UiUxDesign'));
const SeoServices = React.lazy(() => import('./pages/services/SeoServices'));
const WebsiteMaintenance = React.lazy(() => import('./pages/services/WebsiteMaintenance'));

// ─── Local SEO Landing Pages
const Kolkata = React.lazy(() => import('./pages/locations/Kolkata'));
const Durgapur = React.lazy(() => import('./pages/locations/Durgapur'));
const Deoghar = React.lazy(() => import('./pages/locations/Deoghar'));

import ChatWidget from './components/ChatWidget';
import WhatsAppButton from './components/WhatsAppButton';

const FullStackDevelopment = React.lazy(() => import('./pages/services/FullStackDevelopment'));
const WebApplicationDevelopment = React.lazy(() => import('./pages/services/WebApplicationDevelopment'));
const ChatbotDevelopment = React.lazy(() => import('./pages/services/ChatbotDevelopment'));
const GenAiDevelopment = React.lazy(() => import('./pages/services/GenAiDevelopment'));
const AiIntegratedSoftware = React.lazy(() => import('./pages/services/AiIntegratedSoftware'));
const ConversationalAi = React.lazy(() => import('./pages/services/ConversationalAi'));
const PhpDevelopment = React.lazy(() => import('./pages/services/PhpDevelopment'));
const CmsDevelopment = React.lazy(() => import('./pages/services/CmsDevelopment'));
const WordPressDevelopment = React.lazy(() => import('./pages/services/WordPressDevelopment'));
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

const GetAFreeQuote = React.lazy(() => import('./pages/GetAFreeQuote'));

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
                {/* Founder / Team canonical redirects to preserve link equity without duplicate content */}
                <Route path="/harsh-prateek" element={<Navigate to="/about-us" replace />} />
                <Route path="/harsh-prateek-novadesk" element={<Navigate to="/about-us" replace />} />
                <Route path="/founder" element={<Navigate to="/about-us" replace />} />
                <Route path="/piusha-patra" element={<Navigate to="/about-us" replace />} />
                <Route path="/piusha-patra-novadesk" element={<Navigate to="/about-us" replace />} />
                <Route path="/co-founder" element={<Navigate to="/about-us" replace />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsConditions />} />

                {/* ─── High-Priority Commercial Service Landing Pages ────── */}
                <Route path="/services/web-development" element={<WebDevelopment />} />
                <Route path="/services/ai-development" element={<AiDevelopment />} />
                <Route path="/services/ecommerce-development" element={<EcommerceDevelopment />} />
                <Route path="/services/ui-ux-design" element={<UiUxDesign />} />
                <Route path="/services/seo-services" element={<SeoServices />} />
                <Route path="/services/website-maintenance" element={<WebsiteMaintenance />} />

                {/* ─── Local SEO Landing Pages ────────────────────────────── */}
                <Route path="/locations/kolkata" element={<Kolkata />} />
                <Route path="/locations/durgapur" element={<Durgapur />} />
                <Route path="/locations/deoghar" element={<Deoghar />} />

                {/* Specialized Service Pages */}
                <Route path="/services/full-stack-development" element={<FullStackDevelopment />} />
                <Route path="/services/web-application-development" element={<WebApplicationDevelopment />} />
                <Route path="/services/chatbot-development" element={<ChatbotDevelopment />} />
                <Route path="/services/gen-ai-development" element={<GenAiDevelopment />} />
                <Route path="/services/ai-integrated-software" element={<AiIntegratedSoftware />} />
                <Route path="/services/conversational-ai" element={<ConversationalAi />} />
                <Route path="/services/php-development" element={<PhpDevelopment />} />
                <Route path="/services/cms-development" element={<CmsDevelopment />} />
                <Route path="/services/wordpress-development" element={<WordPressDevelopment />} />
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
                <Route path="/get-a-free-quote" element={<GetAFreeQuote />} />

                {/* ─── Blog Routes ───────────────────────────────────────────
                    Two permanent routes handle ALL blog content — forever.
                    
                    /blog        → BlogListPage (auto-loads all published JSON)
                    /blog/:slug  → BlogPostPage (dynamically renders any post)
                    
                    BlogProvider wraps both routes, giving them access to the
                    blog service. To swap data sources in the future, only
                    BlogProvider needs updating — zero UI changes.
                ──────────────────────────────────────────────────────────── */}
                <Route
                  path="/blog"
                  element={
                    <BlogProvider>
                      <BlogListPage />
                    </BlogProvider>
                  }
                />
                <Route
                  path="/blog/:slug"
                  element={
                    <BlogProvider>
                      <BlogPostPage />
                    </BlogProvider>
                  }
                />

                {/* Dedicated 404 Route */}
                <Route path="/404" element={<NotFound />} />
                <Route path="*" element={<NotFound />} />
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
