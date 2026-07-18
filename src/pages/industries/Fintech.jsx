import React, { useEffect } from 'react';
import SEO from '../../components/SEO';
import { Shield, Lock, CreditCard, PieChart, Activity, Zap, CheckCircle2, ChevronDown, ChevronRight, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Fintech() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen font-sans text-slate-800">
      <SEO 
        title="Fintech App Development Company | Novadesk"
        description="Novadesk is a leading fintech app development company in India, trusted by startups & enterprises. We build secure and compliant fintech solutions."
        url="/industries/fintech"
        keywords="Fintech App Development Company"
      />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-white z-0"></div>
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Left Content */}
            <div className="w-full lg:w-1/2" data-aos="fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-6 border border-blue-200">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                Trusted by 300+ Brands Globally
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
                <span className="text-blue-600">Fintech App</span><br/> Development Company
              </h1>
              
              <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl">
                Partner with Novadesk, a leading fintech app development company, to develop innovative fintech solutions for banks, NBFCs, and fintech startups. With a proven track record, we help brands launch apps that are built for the future of financial services.
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <Link to="/contact-us" className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 transition-all duration-300 group">
                  Get a Free Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap items-center gap-6 mt-12 pt-10 border-t border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-5 h-5" />
                  </div>
                  <span className="font-semibold text-sm text-slate-700">AI Accelerator Top 20</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                    <span className="text-blue-600 font-bold font-serif text-xl">in</span>
                  </div>
                  <span className="font-semibold text-sm text-slate-700">Top 20 Indian Startups</span>
                </div>
              </div>
            </div>
            
            {/* Right Content / Image Stack */}
            <div className="w-full lg:w-1/2 relative" data-aos="fade-up" data-aos-delay="200">
              <div className="relative w-full max-w-lg mx-auto aspect-square rounded-3xl bg-gradient-to-tr from-blue-600 to-indigo-400 p-1 overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-50 rounded-3xl"></div>
                <div className="w-full h-full bg-slate-900/40 backdrop-blur-sm rounded-[23px] flex items-center justify-center">
                   {/* Decorative elements inside the image box */}
                   <div className="grid grid-cols-2 gap-4 p-8 w-full">
                     <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-white">
                        <Activity className="w-8 h-8 mb-4 text-emerald-400" />
                        <h4 className="font-bold text-xl mb-1">$2.4B+</h4>
                        <p className="text-sm text-slate-300">Transactions Processed</p>
                     </div>
                     <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-white mt-8">
                        <Shield className="w-8 h-8 mb-4 text-blue-400" />
                        <h4 className="font-bold text-xl mb-1">100%</h4>
                        <p className="text-sm text-slate-300">PCI-DSS Compliant</p>
                     </div>
                   </div>
                </div>
              </div>
              
              {/* Floating Badges */}
              <div className="absolute -left-8 bottom-12 bg-white px-6 py-4 rounded-2xl shadow-xl shadow-slate-200/50 flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-slate-800">50+ Fintech Engineers</p>
                  <p className="text-xs text-slate-500">Ready to deploy</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* COMPLIANCE & STATS SECTION */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-12">
            
            <div className="w-full lg:w-1/2 pr-0 lg:pr-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Security and <span className="text-blue-600">Compliance First</span> Approach</h2>
              <p className="text-lg text-slate-600 mb-8">
                The financial services industry is highly regulated and faces massive threats daily. Novadesk ensures complete peace of mind with fintech app development services that prioritize robust security architectures and strict adherence to global compliance standards.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center opacity-70 grayscale">
                <span className="font-bold text-xl text-slate-400">PCI DSS</span>
                <span className="font-bold text-xl text-slate-400">GDPR</span>
                <span className="font-bold text-xl text-slate-400">CCPA</span>
                <span className="font-bold text-xl text-slate-400">SOC 2</span>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg shadow-slate-200/50 border border-slate-100 grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-5xl font-extrabold text-blue-600 mb-2">20+</h3>
                  <p className="text-slate-600 font-medium">Fintech products delivered</p>
                </div>
                <div>
                  <h3 className="text-5xl font-extrabold text-blue-600 mb-2">350+</h3>
                  <p className="text-slate-600 font-medium">Successful App Launches</p>
                </div>
                <div>
                  <h3 className="text-5xl font-extrabold text-blue-600 mb-2">$5M+</h3>
                  <p className="text-slate-600 font-medium">Fraud Prevented</p>
                </div>
                <div>
                  <h3 className="text-5xl font-extrabold text-blue-600 mb-2">12M+</h3>
                  <p className="text-slate-600 font-medium">End-users using our apps</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* EXPERTISE SECTION (SCROLL SNAP SLIDER) */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-slate-100 text-slate-600 font-semibold text-sm mb-4">Focused Area</span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">
            Fintech Expertise, <br/><span className="text-blue-600">Fully Compliant With Security Guidelines</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl">
            As a trusted fintech app development company in India, we bring deep industry knowledge to deliver reliable, compliant, and innovative solutions.
          </p>
        </div>

        {/* CSS Scroll Snap Container */}
        <div className="flex gap-6 overflow-x-auto pb-12 px-6 lg:px-12 snap-x snap-mandatory hide-scrollbar">
          
          {/* Card 1 */}
          <div className="snap-start shrink-0 w-[350px] sm:w-[400px] bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
            <div className="h-48 bg-slate-200 overflow-hidden relative">
              <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-colors z-10"></div>
              <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Banking" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">Banking App Development</h3>
              <p className="text-slate-600 leading-relaxed">Elevate banking experiences through AI-powered financial insights, predictive cash flow tools, and instant loan approvals. Security is ensured with PSD2 compliance.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="snap-start shrink-0 w-[350px] sm:w-[400px] bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
            <div className="h-48 bg-slate-200 overflow-hidden relative">
              <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-colors z-10"></div>
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Financial Software" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">Financial Software Development</h3>
              <p className="text-slate-600 leading-relaxed">Cloud-native, compliance-ready fintech apps that integrate with ERP and core banking systems. Expect automated reporting and AI-driven forecasting.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="snap-start shrink-0 w-[350px] sm:w-[400px] bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
            <div className="h-48 bg-slate-200 overflow-hidden relative">
              <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-colors z-10"></div>
              <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1470&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Payment" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">Payment App Development</h3>
              <p className="text-slate-600 leading-relaxed">We design payment solutions that handle multi-currency transactions, QR-code payments, and P2P transfers. Enhanced by blockchain security.</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="snap-start shrink-0 w-[350px] sm:w-[400px] bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
            <div className="h-48 bg-slate-200 overflow-hidden relative">
              <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-colors z-10"></div>
              <img src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=1471&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Lending" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">Lending Software Development</h3>
              <p className="text-slate-600 leading-relaxed">Lending cycles transform with real-time credit scoring, digital KYC, and automated collections. Combine AI underwriting with AML compliance.</p>
            </div>
          </div>
          
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-4">Our Development Process</span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">
              Our Fintech App <br/><span className="text-blue-600">Development Process</span>
            </h2>
            <p className="text-xl text-slate-600">
              A clear, structured process that ensures every project is delivered with innovation, compliance, and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-slate-200 z-0"></div>

            {/* Step 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative z-10 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold text-2xl mb-6 shadow-lg shadow-blue-600/30">
                01
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Requirement <br/><span className="text-blue-600">Gathering</span></h3>
              <p className="text-slate-600 leading-relaxed">Whether you need an MVP, UI/UX, complete product, AI integration, or a custom solution, we provide a dedicated fintech product manager to guide you.</p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative z-10 hover:shadow-lg transition-shadow mt-0 md:mt-12">
              <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold text-2xl mb-6 shadow-lg shadow-blue-600/30">
                02
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Design <br/><span className="text-blue-600">& Planning</span></h3>
              <p className="text-slate-600 leading-relaxed">Depending on your needs, we assign the right mix of fintech developers, project managers, or a full dedicated team to bring your idea to life with complete development support.</p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative z-10 hover:shadow-lg transition-shadow mt-0 md:mt-24">
              <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold text-2xl mb-6 shadow-lg shadow-blue-600/30">
                03
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Development <br/><span className="text-blue-600">& Testing</span></h3>
              <p className="text-slate-600 leading-relaxed">Using proven best practices in fintech app development services, we code, securely integrate APIs, rigorously test, and deliver ongoing maintenance and support.</p>
            </div>
            
          </div>
        </div>
      </section>

      {/* MIDDLE CTA SECTION */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center max-w-4xl">
          <h2 className="text-4xl lg:text-6xl font-extrabold mb-8 leading-tight">
            Turn Ideas into Profitable FinTech Apps with <span className="text-blue-400">Novadesk</span>
          </h2>
          <p className="text-xl text-slate-300 mb-12">
            Join 300+ global brands who scaled faster with Novadesk's FinTech app development services. From MVPs to complete market ready apps, we have delivered solutions trusted by enterprises globally.
          </p>
          <Link to="/contact-us" className="inline-flex items-center gap-3 bg-blue-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-600/30 transition-all duration-300 hover:-translate-y-1">
            Get a free Consultation
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16">
            
            <div className="w-full lg:w-1/3">
              <div className="sticky top-32">
                <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-4">FAQs</span>
                <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Frequently Asked Questions</h2>
                <p className="text-slate-600 mb-8">Everything you need to know about our fintech app development services and security standards.</p>
              </div>
            </div>
            
            <div className="w-full lg:w-2/3">
              <div className="space-y-4">
                
                {/* FAQ 1 */}
                <details className="group border border-slate-200 bg-white rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-lg text-slate-900">
                    Why should I choose Novadesk as my fintech app development company?
                    <span className="transition duration-300 group-open:-rotate-180 bg-slate-100 p-2 rounded-full">
                      <ChevronDown className="w-5 h-5 text-slate-600" />
                    </span>
                  </summary>
                  <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mt-2 pt-4">
                    We bring domain expertise, security-first development, and proven delivery across 20+ fintech projects. Our team has worked with startups, enterprises, and Fortune 500s to build scalable, compliant, and user-centric apps.
                  </div>
                </details>

                {/* FAQ 2 */}
                <details className="group border border-slate-200 bg-white rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-lg text-slate-900">
                    What kind of fintech solutions do you build?
                    <span className="transition duration-300 group-open:-rotate-180 bg-slate-100 p-2 rounded-full">
                      <ChevronDown className="w-5 h-5 text-slate-600" />
                    </span>
                  </summary>
                  <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mt-2 pt-4">
                    We develop everything from mobile banking and lending apps to trading platforms, insurance software, and payment gateways. Each fintech solution is designed for compliance, speed, and seamless user experience.
                  </div>
                </details>

                {/* FAQ 3 */}
                <details className="group border border-slate-200 bg-white rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-lg text-slate-900">
                    How do you ensure compliance and data security?
                    <span className="transition duration-300 group-open:-rotate-180 bg-slate-100 p-2 rounded-full">
                      <ChevronDown className="w-5 h-5 text-slate-600" />
                    </span>
                  </summary>
                  <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mt-2 pt-4">
                    We follow strict security protocols, use encryption standards like OAuth2.0 and tokenization, and build GDPR, PCI DSS, and ISO-compliant apps. Every product is NDA-backed to protect your IP.
                  </div>
                </details>

                {/* FAQ 4 */}
                <details className="group border border-slate-200 bg-white rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-lg text-slate-900">
                    How fast can you deliver an MVP for a fintech product?
                    <span className="transition duration-300 group-open:-rotate-180 bg-slate-100 p-2 rounded-full">
                      <ChevronDown className="w-5 h-5 text-slate-600" />
                    </span>
                  </summary>
                  <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mt-2 pt-4">
                    As one of the top fintech mobile app development companies, our team can deliver a working MVP in as little as 8–12 weeks. This helps you validate the idea with real users before scaling.
                  </div>
                </details>

              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Ready to build your Fintech App?</h2>
            <p className="text-blue-100 text-lg">Let's discuss your requirements and get started today.</p>
          </div>
          <Link to="/contact-us" className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-colors shrink-0">
            Contact Sales Team
          </Link>
        </div>
      </section>
      
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
