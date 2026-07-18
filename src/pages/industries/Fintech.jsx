import React, { useEffect } from 'react';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';

export default function Fintech() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        title="Fintech App Development Company | Novadesk"
        description="Novadesk is a leading fintech app development company in India, trusted by startups & enterprises. We build secure and compliant fintech solutions."
        url="/industries/fintech"
        keywords="Fintech App Development Company"
      />

      <style>{`
        /* Template overrides to make the new HTML look decent without external CSS */
        .page-wraper { width: 100%; overflow: hidden; }
        .hero-banner { padding: 80px 0; }
        .compliance-section { background: #f8fafc; padding: 40px 0; }
        .bg-card { background: white; border-radius: 20px; padding: 30px; }
      `}</style>

      <main>
      <section className="hero-banner fintech">
        <div className="container">
          <div className="row hire" data-aos="fade-up" data-aos-duration="2000">
            <div className="col">
              <h1 className="title" data-aos="fade-up" data-aos-duration="1500"><span className="text-blue">Fintech App </span> Development Company </h1>
              <p className="text" data-aos="fade-up" data-aos-duration="1500">
                Partner with Novadesk, a leading fintech app development company, to develop innovative fintech solutions for banks, NBFCs, and fintech startups. With a proven track record, we help brands launch apps that are built for the future of financial services.
              </p>
              <div>
                <a href="https://Novadesk.com/contact-us" className="btn-blue">Get a Free Consultation
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M16.0032 9.41421L7.39663 18.0208L5.98242 16.6066L14.589 8H7.00324V6H18.0032V17H16.0032V9.41421Z" fill="white" /> </svg>
                </a>
              </div>
              <div className="top-20-award">
                <a href="https://blog.google/intl/en-in/introducing-the-2024-class-of-google-for-startups-accelerator-ai-first/" target="_blank">
                  <img src="./../../assets/img/icons/google-logo.svg" height="35px" alt="AI ACCELERATOR" loading="eager" />
                  <span>AI Accelerator Top 20 Startups</span>
                </a>
                <a href="https://www.linkedin.com/pulse/linkedin-top-startups-2024-20-indian-companies-rise-jjbie/" target="_blank">
                  <img src="./../../assets/img/icons/linkedin-logo.svg" height="35px" alt="Indian Startups" loading="eager" />
                  <span>Top 20 Indian Startups</span>
                </a>
                <p>
                  <img src="./../../assets/img/icons/harvard-vusiness-school-logo.svg" height="35px" alt="Tech Innovations" loading="eager" />
                  <span>Featured in Harvard’s Top 10 Tech Innovations</span>
                </p>
              </div>

            </div>
            <div className="col hire_developers_card">
              <div className="mingcute animation-float">
                <img src="./../../assets/img/hire/mingcute_ai_fill.webp" className="mingcute" alt="mingcute ai" />
              </div>
              <div data-aos="fade-up" data-aos-duration="1000">
                <img src="./../../assets/img/hire/fintech-app-developers.webp" className="developers" fetchpriority="high" loading="eager" alt="fintech app developers" />
              </div>
              <div className="certified animation-float">
                <p><span>Fintech Software Engineers</span></p>
                <p className="code"><span>Security Engineer</span></p>
              </div>
            </div>
          </div>
        </div>

        <div className="compliance-section">
          <div className="container">
            <div className="row" data-aos="fade-up" data-aos-duration="1000">
              <div className="compliance-grid">

                <div className="head bg-card">
                  <h2>Regulatory compliance, baked in</h2>
                  <p>We build with the rules in mind from day one: PCI DSS, PSD2, GDPR, AML/KYC, CCPA, and Open Banking. You get audit-ready controls, clear checklists, and ongoing updates as regulations change.</p>

                  <div id="clientLogos" className="splide">
                      <div className="splide__track">
                        <div className="splide__list">
                          <div className="splide__slide images-card">
                            <picture><img src="./../../assets/img/hire/usp/pci.webp" alt="PCI DSS" /> </picture>
                          </div>
                          <div className="splide__slide images-card">
                            <picture><img src="./../../assets/img/hire/usp/psd2.webp" alt="PSD2" /> </picture>
                          </div>
                          <div className="splide__slide images-card">
                            <picture><img src="./../../assets/img/hire/usp/gdpr.webp" alt="GDPR" /> </picture>
                          </div>
                          <div className="splide__slide images-card">
                            <picture><img src="./../../assets/img/hire/usp/aml.webp" alt="AML/KYC" /> </picture>
                          </div>

                          <div className="splide__slide images-card">
                            <picture><img src="./../../assets/img/hire/usp/ccpa.webp" alt="CCPA" /> </picture>
                          </div>
                          
                      </div>
                    </div>
                  </div>
                </div>
                <div className="co"  data-aos="fade-up" data-aos-duration="1000">
                    <div className="d-flex justify-content-between gap-16 mb-4">
                      <div className="w-100 d-flex align-items-center flex-column numbertext bg-card">
                      <span>14+</span>
                      <p>Years of Experience</p>
                    </div>
                    <div className="w-100 d-flex align-items-center flex-column numbertext bg-card">
                      <span>4.5</span>
                      <p>Clutch Reviews</p>
                    </div>
                    </div>
                    <div className="w-100 d-flex align-items-center flex-column numbertext bg-card">
                      <span>300+</span>
                      <p>Projects & Clients</p>
                    </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>



    <section className="our_growth bg-white">
         <div className="container">
          <div className="row">
            <div className="col d-flex head flex-column align-center">
              <span className="top-tag-blue">Case Studies</span>
              <h2 className="text-midblack"> A Look at Our Development in Action </h2>
              {/* <p className="subtitle text-midblack">Regarded as the best fintech app development company in the USA and India, we’ve helped both disruptors and traditional players launch secure and user-friendly digital finance products.</p> */}
            </div>
          </div>          
        </div>
        <div className="sec_overflow service-tech">
          <div className="container">       
            <div className="slider">
              <div id="splideGrowth" className="splide">
                <div className="splide__track">
                  <div className="splide__list">
                    
                    <div className="splide__slide box-shadow">
                      <div className="testimonial-box white">
                        <span className="click white" data-bs-target="#AnishAchuthan" data-bs-toggle="modal">
                          <img src="./../../assets/img/review/youtubeplaylightblue.svg" alt="play" loading="lazy" />
                        </span>
                        <img src="./../../assets/img/testimonials/bank-open.webp" className="w-100" alt="Bank Open Neobank Platform" loading="lazy" />
                        <div className="text_bottom white">
                          <div className="profile_img">
                            <div className="profile-text">
                              <p className="text ps-0">Bank Open <span>Neobank Platform</span></p>
                              <div className="profile_location ms-0">
                               <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.99967 13.6673C4.84412 13.6673 4.71079 13.6229 4.59968 13.534C4.48856 13.4451 4.40523 13.3284 4.34968 13.184C4.13856 12.5618 3.8719 11.9784 3.54967 11.434C3.23856 10.8895 2.79967 10.2507 2.23301 9.51732C1.66634 8.78398 1.20523 8.08398 0.849674 7.41732C0.50523 6.75065 0.333008 5.94509 0.333008 5.00065C0.333008 3.70065 0.783008 2.60065 1.68301 1.70065C2.59412 0.78954 3.69967 0.333984 4.99967 0.333984C6.29967 0.333984 7.39967 0.78954 8.29967 1.70065C9.21079 2.60065 9.66634 3.70065 9.66634 5.00065C9.66634 6.01176 9.4719 6.85621 9.08301 7.53398C8.70523 8.20065 8.26634 8.86176 7.76634 9.51732C7.16634 10.3173 6.71079 10.984 6.39967 11.5173C6.09968 12.0395 5.84968 12.5951 5.64967 13.184C5.59412 13.3395 5.50523 13.4618 5.38301 13.5507C5.2719 13.6284 5.14412 13.6673 4.99967 13.6673ZM4.99967 6.66732C5.46634 6.66732 5.86079 6.50621 6.18301 6.18398C6.50523 5.86176 6.66634 5.46732 6.66634 5.00065C6.66634 4.53398 6.50523 4.13954 6.18301 3.81732C5.86079 3.4951 5.46634 3.33398 4.99967 3.33398C4.53301 3.33398 4.13856 3.4951 3.81634 3.81732C3.49412 4.13954 3.33301 4.53398 3.33301 5.00065C3.33301 5.46732 3.49412 5.86176 3.81634 6.18398C4.13856 6.50621 4.53301 6.66732 4.99967 6.66732Z" fill="#2E29FF"/></svg>
                                <span className="fs-14 text-blue">Bengaluru</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>


                    <div className="splide__slide box-shadow">
                      <div className="testimonial-box white">
                        <span className="click white" data-bs-target="#aIBasedHackthonAssessment" data-bs-toggle="modal">
                          <img src="./../../assets/img/review/youtubeplaylightblue.svg" alt="play" loading="lazy" />
                        </span>
                        <img src="./../../assets/img/testimonials/google-x-Novadesk.webp" className="w-100" alt="AI Based Hackthon Assessment" loading="lazy" />
                        <div className="text_bottom white ">
                           <div className="profile_img">
                            <div className="profile-text">
                                <p className="text ps-0"> Google x Novadesk <span>AI Based Hackthon Assessment</span> </p>
                              <div className="profile_location ms-0">
                               <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.99967 13.6673C4.84412 13.6673 4.71079 13.6229 4.59968 13.534C4.48856 13.4451 4.40523 13.3284 4.34968 13.184C4.13856 12.5618 3.8719 11.9784 3.54967 11.434C3.23856 10.8895 2.79967 10.2507 2.23301 9.51732C1.66634 8.78398 1.20523 8.08398 0.849674 7.41732C0.50523 6.75065 0.333008 5.94509 0.333008 5.00065C0.333008 3.70065 0.783008 2.60065 1.68301 1.70065C2.59412 0.78954 3.69967 0.333984 4.99967 0.333984C6.29967 0.333984 7.39967 0.78954 8.29967 1.70065C9.21079 2.60065 9.66634 3.70065 9.66634 5.00065C9.66634 6.01176 9.4719 6.85621 9.08301 7.53398C8.70523 8.20065 8.26634 8.86176 7.76634 9.51732C7.16634 10.3173 6.71079 10.984 6.39967 11.5173C6.09968 12.0395 5.84968 12.5951 5.64967 13.184C5.59412 13.3395 5.50523 13.4618 5.38301 13.5507C5.2719 13.6284 5.14412 13.6673 4.99967 13.6673ZM4.99967 6.66732C5.46634 6.66732 5.86079 6.50621 6.18301 6.18398C6.50523 5.86176 6.66634 5.46732 6.66634 5.00065C6.66634 4.53398 6.50523 4.13954 6.18301 3.81732C5.86079 3.4951 5.46634 3.33398 4.99967 3.33398C4.53301 3.33398 4.13856 3.4951 3.81634 3.81732C3.49412 4.13954 3.33301 4.53398 3.33301 5.00065C3.33301 5.46732 3.49412 5.86176 3.81634 6.18398C4.13856 6.50621 4.53301 6.66732 4.99967 6.66732Z" fill="#2E29FF"/></svg>
                                <span className="fs-14 text-blue">India</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    
                    <div className="splide__slide box-shadow">
                      <div className="testimonial-box white">
                        <span className="click white" data-bs-target="#harshitThareja" data-bs-toggle="modal">
                          <img src="./../../assets/img/review/youtubeplaylightblue.svg" alt="play" loading="lazy" />
                        </span>
                        <img src="./../../assets/img/testimonials/air-box.webp" className="w-100" alt="Airbox E-commerce Marketplace" loading="lazy" />
                          <div className="text_bottom white">
                           <div className="profile_img">
                            <div className="profile-text">
                                <p className="text ps-0"> Airbox <span>E-commerce Marketplace</span> </p>
                              <div className="profile_location ms-0">
                               <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.99967 13.6673C4.84412 13.6673 4.71079 13.6229 4.59968 13.534C4.48856 13.4451 4.40523 13.3284 4.34968 13.184C4.13856 12.5618 3.8719 11.9784 3.54967 11.434C3.23856 10.8895 2.79967 10.2507 2.23301 9.51732C1.66634 8.78398 1.20523 8.08398 0.849674 7.41732C0.50523 6.75065 0.333008 5.94509 0.333008 5.00065C0.333008 3.70065 0.783008 2.60065 1.68301 1.70065C2.59412 0.78954 3.69967 0.333984 4.99967 0.333984C6.29967 0.333984 7.39967 0.78954 8.29967 1.70065C9.21079 2.60065 9.66634 3.70065 9.66634 5.00065C9.66634 6.01176 9.4719 6.85621 9.08301 7.53398C8.70523 8.20065 8.26634 8.86176 7.76634 9.51732C7.16634 10.3173 6.71079 10.984 6.39967 11.5173C6.09968 12.0395 5.84968 12.5951 5.64967 13.184C5.59412 13.3395 5.50523 13.4618 5.38301 13.5507C5.2719 13.6284 5.14412 13.6673 4.99967 13.6673ZM4.99967 6.66732C5.46634 6.66732 5.86079 6.50621 6.18301 6.18398C6.50523 5.86176 6.66634 5.46732 6.66634 5.00065C6.66634 4.53398 6.50523 4.13954 6.18301 3.81732C5.86079 3.4951 5.46634 3.33398 4.99967 3.33398C4.53301 3.33398 4.13856 3.4951 3.81634 3.81732C3.49412 4.13954 3.33301 4.53398 3.33301 5.00065C3.33301 5.46732 3.49412 5.86176 3.81634 6.18398C4.13856 6.50621 4.53301 6.66732 4.99967 6.66732Z" fill="#2E29FF"/></svg>
                                <span className="fs-14 text-blue">Singapore</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="splide__slide box-shadow">
                      <div className="testimonial-box white">
                        <span className="click white" data-bs-target="#bhavanagupta" data-bs-toggle="modal">
                          <img src="./../../assets/img/review/youtubeplaylightblue.svg" alt="play" loading="lazy" />
                        </span>
                        <img src="./../../assets/img/testimonials/chhattisgarh-police.webp" className="w-100" alt="Chhattisgarh Police Summons & Warrant Management" loading="lazy" />
                        <div className="text_bottom white ">
                           <div className="profile_img">
                            <div className="profile-text">
                                <p className="text ps-0">Chhattisgarh Police<span>Summons & Warrant Management</span> </p>
                              <div className="profile_location ms-0">
                               <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.99967 13.6673C4.84412 13.6673 4.71079 13.6229 4.59968 13.534C4.48856 13.4451 4.40523 13.3284 4.34968 13.184C4.13856 12.5618 3.8719 11.9784 3.54967 11.434C3.23856 10.8895 2.79967 10.2507 2.23301 9.51732C1.66634 8.78398 1.20523 8.08398 0.849674 7.41732C0.50523 6.75065 0.333008 5.94509 0.333008 5.00065C0.333008 3.70065 0.783008 2.60065 1.68301 1.70065C2.59412 0.78954 3.69967 0.333984 4.99967 0.333984C6.29967 0.333984 7.39967 0.78954 8.29967 1.70065C9.21079 2.60065 9.66634 3.70065 9.66634 5.00065C9.66634 6.01176 9.4719 6.85621 9.08301 7.53398C8.70523 8.20065 8.26634 8.86176 7.76634 9.51732C7.16634 10.3173 6.71079 10.984 6.39967 11.5173C6.09968 12.0395 5.84968 12.5951 5.64967 13.184C5.59412 13.3395 5.50523 13.4618 5.38301 13.5507C5.2719 13.6284 5.14412 13.6673 4.99967 13.6673ZM4.99967 6.66732C5.46634 6.66732 5.86079 6.50621 6.18301 6.18398C6.50523 5.86176 6.66634 5.46732 6.66634 5.00065C6.66634 4.53398 6.50523 4.13954 6.18301 3.81732C5.86079 3.4951 5.46634 3.33398 4.99967 3.33398C4.53301 3.33398 4.13856 3.4951 3.81634 3.81732C3.49412 4.13954 3.33301 4.53398 3.33301 5.00065C3.33301 5.46732 3.49412 5.86176 3.81634 6.18398C4.13856 6.50621 4.53301 6.66732 4.99967 6.66732Z" fill="#2E29FF"/></svg>
                                <span className="fs-14 text-blue">India</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="splide__slide box-shadow">
                      <div className="testimonial-box white">
                        <span className="click white" data-bs-target="#farajaKottaNyalandu" data-bs-toggle="modal">
                          <img src="./../../assets/img/review/youtubeplaylightblue.svg" alt="play" loading="lazy" />
                        </span>
                        <img src="./../../assets/img/testimonials/shule-direct.webp" className="w-100" alt="Shule Direct - Faraja Kotta Nyalandu" loading="lazy" />
                          <div className="text_bottom white">
                           <div className="profile_img">
                            <div className="profile-text">
                                <p className="text ps-0"> Shule Direct <span>Ed Tech Platform</span> </p>
                              <div className="profile_location ms-0">
                               <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.99967 13.6673C4.84412 13.6673 4.71079 13.6229 4.59968 13.534C4.48856 13.4451 4.40523 13.3284 4.34968 13.184C4.13856 12.5618 3.8719 11.9784 3.54967 11.434C3.23856 10.8895 2.79967 10.2507 2.23301 9.51732C1.66634 8.78398 1.20523 8.08398 0.849674 7.41732C0.50523 6.75065 0.333008 5.94509 0.333008 5.00065C0.333008 3.70065 0.783008 2.60065 1.68301 1.70065C2.59412 0.78954 3.69967 0.333984 4.99967 0.333984C6.29967 0.333984 7.39967 0.78954 8.29967 1.70065C9.21079 2.60065 9.66634 3.70065 9.66634 5.00065C9.66634 6.01176 9.4719 6.85621 9.08301 7.53398C8.70523 8.20065 8.26634 8.86176 7.76634 9.51732C7.16634 10.3173 6.71079 10.984 6.39967 11.5173C6.09968 12.0395 5.84968 12.5951 5.64967 13.184C5.59412 13.3395 5.50523 13.4618 5.38301 13.5507C5.2719 13.6284 5.14412 13.6673 4.99967 13.6673ZM4.99967 6.66732C5.46634 6.66732 5.86079 6.50621 6.18301 6.18398C6.50523 5.86176 6.66634 5.46732 6.66634 5.00065C6.66634 4.53398 6.50523 4.13954 6.18301 3.81732C5.86079 3.4951 5.46634 3.33398 4.99967 3.33398C4.53301 3.33398 4.13856 3.4951 3.81634 3.81732C3.49412 4.13954 3.33301 4.53398 3.33301 5.00065C3.33301 5.46732 3.49412 5.86176 3.81634 6.18398C4.13856 6.50621 4.53301 6.66732 4.99967 6.66732Z" fill="#2E29FF"/></svg>
                                <span className="fs-14 text-blue">East Africa</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="splide__slide box-shadow">
                      <div className="testimonial-box white">
                        <span className="click white" data-bs-target="#invulbWealthManagement" data-bs-toggle="modal">
                          <img src="./../../assets/img/review/youtubeplaylightblue.svg" alt="play" loading="lazy" />
                        </span>
                        <img src="./../../assets/img/testimonials/invulb-wealth-management-app.webp" className="w-100" alt="Invulb Wealth Management App" loading="lazy" />
                          <div className="text_bottom white">
                           <div className="profile_img">
                            <div className="profile-text">
                                <p className="text ps-0"> Invulb <span>Wealth Management App</span> </p>
                              <div className="profile_location ms-0">
                               <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.99967 13.6673C4.84412 13.6673 4.71079 13.6229 4.59968 13.534C4.48856 13.4451 4.40523 13.3284 4.34968 13.184C4.13856 12.5618 3.8719 11.9784 3.54967 11.434C3.23856 10.8895 2.79967 10.2507 2.23301 9.51732C1.66634 8.78398 1.20523 8.08398 0.849674 7.41732C0.50523 6.75065 0.333008 5.94509 0.333008 5.00065C0.333008 3.70065 0.783008 2.60065 1.68301 1.70065C2.59412 0.78954 3.69967 0.333984 4.99967 0.333984C6.29967 0.333984 7.39967 0.78954 8.29967 1.70065C9.21079 2.60065 9.66634 3.70065 9.66634 5.00065C9.66634 6.01176 9.4719 6.85621 9.08301 7.53398C8.70523 8.20065 8.26634 8.86176 7.76634 9.51732C7.16634 10.3173 6.71079 10.984 6.39967 11.5173C6.09968 12.0395 5.84968 12.5951 5.64967 13.184C5.59412 13.3395 5.50523 13.4618 5.38301 13.5507C5.2719 13.6284 5.14412 13.6673 4.99967 13.6673ZM4.99967 6.66732C5.46634 6.66732 5.86079 6.50621 6.18301 6.18398C6.50523 5.86176 6.66634 5.46732 6.66634 5.00065C6.66634 4.53398 6.50523 4.13954 6.18301 3.81732C5.86079 3.4951 5.46634 3.33398 4.99967 3.33398C4.53301 3.33398 4.13856 3.4951 3.81634 3.81732C3.49412 4.13954 3.33301 4.53398 3.33301 5.00065C3.33301 5.46732 3.49412 5.86176 3.81634 6.18398C4.13856 6.50621 4.53301 6.66732 4.99967 6.66732Z" fill="#2E29FF"/></svg>
                                <span className="fs-14 text-blue">India</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>


                    <div className="splide__slide box-shadow">
                      <div className="testimonial-box white">
                        <span className="click white" data-bs-target="#rihenAjmera" data-bs-toggle="modal">
                          <img src="./../../assets/img/review/youtubeplaylightblue.svg" alt="play" loading="lazy" />
                        </span>
                        <img src="./../../assets/img/testimonials/framebazaar.webp" className="w-100" alt="Framebazaar - Rihen Ajmera" loading="lazy" />
                          <div className="text_bottom white">
                           <div className="profile_img">
                            <div className="profile-text">
                                <p className="text ps-0"> Framebazaar <span>E-commerce Platform</span> </p>
                              <div className="profile_location ms-0">
                               <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.99967 13.6673C4.84412 13.6673 4.71079 13.6229 4.59968 13.534C4.48856 13.4451 4.40523 13.3284 4.34968 13.184C4.13856 12.5618 3.8719 11.9784 3.54967 11.434C3.23856 10.8895 2.79967 10.2507 2.23301 9.51732C1.66634 8.78398 1.20523 8.08398 0.849674 7.41732C0.50523 6.75065 0.333008 5.94509 0.333008 5.00065C0.333008 3.70065 0.783008 2.60065 1.68301 1.70065C2.59412 0.78954 3.69967 0.333984 4.99967 0.333984C6.29967 0.333984 7.39967 0.78954 8.29967 1.70065C9.21079 2.60065 9.66634 3.70065 9.66634 5.00065C9.66634 6.01176 9.4719 6.85621 9.08301 7.53398C8.70523 8.20065 8.26634 8.86176 7.76634 9.51732C7.16634 10.3173 6.71079 10.984 6.39967 11.5173C6.09968 12.0395 5.84968 12.5951 5.64967 13.184C5.59412 13.3395 5.50523 13.4618 5.38301 13.5507C5.2719 13.6284 5.14412 13.6673 4.99967 13.6673ZM4.99967 6.66732C5.46634 6.66732 5.86079 6.50621 6.18301 6.18398C6.50523 5.86176 6.66634 5.46732 6.66634 5.00065C6.66634 4.53398 6.50523 4.13954 6.18301 3.81732C5.86079 3.4951 5.46634 3.33398 4.99967 3.33398C4.53301 3.33398 4.13856 3.4951 3.81634 3.81732C3.49412 4.13954 3.33301 4.53398 3.33301 5.00065C3.33301 5.46732 3.49412 5.86176 3.81634 6.18398C4.13856 6.50621 4.53301 6.66732 4.99967 6.66732Z" fill="#2E29FF"/></svg>
                                <span className="fs-14 text-blue">India</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="splide__slide box-shadow">
                      <div className="testimonial-box white">
                        <span className="click white" data-bs-target="#healthcarePlatforms" data-bs-toggle="modal">
                          <img src="./../../assets/img/review/youtubeplaylightblue.svg" alt="play" loading="lazy" />
                        </span>
                        <img src="./../../assets/img/testimonials/lumiere.webp" className="w-100" alt="Lumiere B2B Healthcare Marketplace" loading="lazy" />
                        <div className="text_bottom white">
                          <div className="profile_img">
                            <div className="profile-text">
                              <p className="text ps-0">  Lumiere<span>B2B Healthcare Marketplace</span> </p>
                              <div className="profile_location ms-0"> 
                                 <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.99967 13.6673C4.84412 13.6673 4.71079 13.6229 4.59968 13.534C4.48856 13.4451 4.40523 13.3284 4.34968 13.184C4.13856 12.5618 3.8719 11.9784 3.54967 11.434C3.23856 10.8895 2.79967 10.2507 2.23301 9.51732C1.66634 8.78398 1.20523 8.08398 0.849674 7.41732C0.50523 6.75065 0.333008 5.94509 0.333008 5.00065C0.333008 3.70065 0.783008 2.60065 1.68301 1.70065C2.59412 0.78954 3.69967 0.333984 4.99967 0.333984C6.29967 0.333984 7.39967 0.78954 8.29967 1.70065C9.21079 2.60065 9.66634 3.70065 9.66634 5.00065C9.66634 6.01176 9.4719 6.85621 9.08301 7.53398C8.70523 8.20065 8.26634 8.86176 7.76634 9.51732C7.16634 10.3173 6.71079 10.984 6.39967 11.5173C6.09968 12.0395 5.84968 12.5951 5.64967 13.184C5.59412 13.3395 5.50523 13.4618 5.38301 13.5507C5.2719 13.6284 5.14412 13.6673 4.99967 13.6673ZM4.99967 6.66732C5.46634 6.66732 5.86079 6.50621 6.18301 6.18398C6.50523 5.86176 6.66634 5.46732 6.66634 5.00065C6.66634 4.53398 6.50523 4.13954 6.18301 3.81732C5.86079 3.4951 5.46634 3.33398 4.99967 3.33398C4.53301 3.33398 4.13856 3.4951 3.81634 3.81732C3.49412 4.13954 3.33301 4.53398 3.33301 5.00065C3.33301 5.46732 3.49412 5.86176 3.81634 6.18398C4.13856 6.50621 4.53301 6.66732 4.99967 6.66732Z" fill="#2E29FF"/></svg>
                                  <span className="fs-14 text-blue">Singapore</span>
                                </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="splide__slide box-shadow">
                      <div className="testimonial-box white">
                        <span className="click white" data-bs-target="#shoppiApp" data-bs-toggle="modal">
                          <img src="./../../assets/img/review/youtubeplaylightblue.svg" alt="play" loading="lazy" />
                        </span>
                        <img src="./../../assets/img/testimonials/shoppi-app.webp" className="w-100" alt="Shoppi Grocery Delivery App" loading="lazy" />
                        <div className="text_bottom white">
                          <div className="profile_img">
                            <div className="profile-text">
                              <p className="text ps-0">  Shoppi<span>Grocery Delivery App</span> </p>
                              <div className="profile_location ms-0"> 
                                 <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.99967 13.6673C4.84412 13.6673 4.71079 13.6229 4.59968 13.534C4.48856 13.4451 4.40523 13.3284 4.34968 13.184C4.13856 12.5618 3.8719 11.9784 3.54967 11.434C3.23856 10.8895 2.79967 10.2507 2.23301 9.51732C1.66634 8.78398 1.20523 8.08398 0.849674 7.41732C0.50523 6.75065 0.333008 5.94509 0.333008 5.00065C0.333008 3.70065 0.783008 2.60065 1.68301 1.70065C2.59412 0.78954 3.69967 0.333984 4.99967 0.333984C6.29967 0.333984 7.39967 0.78954 8.29967 1.70065C9.21079 2.60065 9.66634 3.70065 9.66634 5.00065C9.66634 6.01176 9.4719 6.85621 9.08301 7.53398C8.70523 8.20065 8.26634 8.86176 7.76634 9.51732C7.16634 10.3173 6.71079 10.984 6.39967 11.5173C6.09968 12.0395 5.84968 12.5951 5.64967 13.184C5.59412 13.3395 5.50523 13.4618 5.38301 13.5507C5.2719 13.6284 5.14412 13.6673 4.99967 13.6673ZM4.99967 6.66732C5.46634 6.66732 5.86079 6.50621 6.18301 6.18398C6.50523 5.86176 6.66634 5.46732 6.66634 5.00065C6.66634 4.53398 6.50523 4.13954 6.18301 3.81732C5.86079 3.4951 5.46634 3.33398 4.99967 3.33398C4.53301 3.33398 4.13856 3.4951 3.81634 3.81732C3.49412 4.13954 3.33301 4.53398 3.33301 5.00065C3.33301 5.46732 3.49412 5.86176 3.81634 6.18398C4.13856 6.50621 4.53301 6.66732 4.99967 6.66732Z" fill="#2E29FF"/></svg>
                                  <span className="fs-14 text-blue">Africa</span>
                                </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="splide__slide box-shadow">
                      <div className="testimonial-box white">
                        <span className="click white" data-bs-target="#askMeApp" data-bs-toggle="modal">
                          <img src="./../../assets/img/review/youtubeplaylightblue.svg" alt="play" loading="lazy" />
                        </span>
                        <img src="./../../assets/img/testimonials/askme-edtech-app.webp" className="w-100" alt="AskMe EdTech App" loading="lazy" />
                        <div className="text_bottom white">
                          <div className="profile_img">
                            <div className="profile-text">
                              <p className="text ps-0">  AskMe<span>EdTech App</span> </p>
                              <div className="profile_location ms-0"> 
                                 <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.99967 13.6673C4.84412 13.6673 4.71079 13.6229 4.59968 13.534C4.48856 13.4451 4.40523 13.3284 4.34968 13.184C4.13856 12.5618 3.8719 11.9784 3.54967 11.434C3.23856 10.8895 2.79967 10.2507 2.23301 9.51732C1.66634 8.78398 1.20523 8.08398 0.849674 7.41732C0.50523 6.75065 0.333008 5.94509 0.333008 5.00065C0.333008 3.70065 0.783008 2.60065 1.68301 1.70065C2.59412 0.78954 3.69967 0.333984 4.99967 0.333984C6.29967 0.333984 7.39967 0.78954 8.29967 1.70065C9.21079 2.60065 9.66634 3.70065 9.66634 5.00065C9.66634 6.01176 9.4719 6.85621 9.08301 7.53398C8.70523 8.20065 8.26634 8.86176 7.76634 9.51732C7.16634 10.3173 6.71079 10.984 6.39967 11.5173C6.09968 12.0395 5.84968 12.5951 5.64967 13.184C5.59412 13.3395 5.50523 13.4618 5.38301 13.5507C5.2719 13.6284 5.14412 13.6673 4.99967 13.6673ZM4.99967 6.66732C5.46634 6.66732 5.86079 6.50621 6.18301 6.18398C6.50523 5.86176 6.66634 5.46732 6.66634 5.00065C6.66634 4.53398 6.50523 4.13954 6.18301 3.81732C5.86079 3.4951 5.46634 3.33398 4.99967 3.33398C4.53301 3.33398 4.13856 3.4951 3.81634 3.81732C3.49412 4.13954 3.33301 4.53398 3.33301 5.00065C3.33301 5.46732 3.49412 5.86176 3.81634 6.18398C4.13856 6.50621 4.53301 6.66732 4.99967 6.66732Z" fill="#2E29FF"/></svg>
                                  <span className="fs-14 text-blue">India</span>
                                </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>


                    <div className="splide__slide box-shadow">
                      <div className="testimonial-box white">
                        <span className="click white" data-bs-target="#salmanHabib" data-bs-toggle="modal">
                          <img src="./../../assets/img/review/youtubeplaylightblue.svg" alt="play" loading="lazy" />
                        </span>
                        <img src="./../../assets/img/testimonials/burq-scaled.webp" className="w-100" alt="BURQ Custom Logistics Platform" loading="lazy" />
                        <div className="text_bottom white">
                          <div className="profile_img">
                            <div className="profile-text">
                              <p className="text ps-0">  BURQ <span>Custom Logistics Platform</span> </p>
                              <div className="profile_location ms-0"> 
                                 <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.99967 13.6673C4.84412 13.6673 4.71079 13.6229 4.59968 13.534C4.48856 13.4451 4.40523 13.3284 4.34968 13.184C4.13856 12.5618 3.8719 11.9784 3.54967 11.434C3.23856 10.8895 2.79967 10.2507 2.23301 9.51732C1.66634 8.78398 1.20523 8.08398 0.849674 7.41732C0.50523 6.75065 0.333008 5.94509 0.333008 5.00065C0.333008 3.70065 0.783008 2.60065 1.68301 1.70065C2.59412 0.78954 3.69967 0.333984 4.99967 0.333984C6.29967 0.333984 7.39967 0.78954 8.29967 1.70065C9.21079 2.60065 9.66634 3.70065 9.66634 5.00065C9.66634 6.01176 9.4719 6.85621 9.08301 7.53398C8.70523 8.20065 8.26634 8.86176 7.76634 9.51732C7.16634 10.3173 6.71079 10.984 6.39967 11.5173C6.09968 12.0395 5.84968 12.5951 5.64967 13.184C5.59412 13.3395 5.50523 13.4618 5.38301 13.5507C5.2719 13.6284 5.14412 13.6673 4.99967 13.6673ZM4.99967 6.66732C5.46634 6.66732 5.86079 6.50621 6.18301 6.18398C6.50523 5.86176 6.66634 5.46732 6.66634 5.00065C6.66634 4.53398 6.50523 4.13954 6.18301 3.81732C5.86079 3.4951 5.46634 3.33398 4.99967 3.33398C4.53301 3.33398 4.13856 3.4951 3.81634 3.81732C3.49412 4.13954 3.33301 4.53398 3.33301 5.00065C3.33301 5.46732 3.49412 5.86176 3.81634 6.18398C4.13856 6.50621 4.53301 6.66732 4.99967 6.66732Z" fill="#2E29FF"/></svg>
                                  <span className="fs-14 text-blue">USA</span>
                                </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    

                    <div className="splide__slide box-shadow">
                      <div className="testimonial-box white">
                        <span className="click white" data-bs-target="#supersourcingAIRecruiter" data-bs-toggle="modal">
                          <img src="./../../assets/img/review/youtubeplaylightblue.svg" alt="play" loading="lazy" />
                        </span>
                        <img src="./../../assets/img/testimonials/supersourcing-power-ai.webp" className="w-100" alt="AI-Powered Hiring Platform" loading="lazy" />
                        <div className="text_bottom white">
                          <div className="profile_img">
                            <div className="profile-text">
                              <p className="text ps-0"> Supersourcing <span>AI-Powered Hiring Platform</span> </p>
                              <div className="profile_location ms-0"> 
                                 <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.99967 13.6673C4.84412 13.6673 4.71079 13.6229 4.59968 13.534C4.48856 13.4451 4.40523 13.3284 4.34968 13.184C4.13856 12.5618 3.8719 11.9784 3.54967 11.434C3.23856 10.8895 2.79967 10.2507 2.23301 9.51732C1.66634 8.78398 1.20523 8.08398 0.849674 7.41732C0.50523 6.75065 0.333008 5.94509 0.333008 5.00065C0.333008 3.70065 0.783008 2.60065 1.68301 1.70065C2.59412 0.78954 3.69967 0.333984 4.99967 0.333984C6.29967 0.333984 7.39967 0.78954 8.29967 1.70065C9.21079 2.60065 9.66634 3.70065 9.66634 5.00065C9.66634 6.01176 9.4719 6.85621 9.08301 7.53398C8.70523 8.20065 8.26634 8.86176 7.76634 9.51732C7.16634 10.3173 6.71079 10.984 6.39967 11.5173C6.09968 12.0395 5.84968 12.5951 5.64967 13.184C5.59412 13.3395 5.50523 13.4618 5.38301 13.5507C5.2719 13.6284 5.14412 13.6673 4.99967 13.6673ZM4.99967 6.66732C5.46634 6.66732 5.86079 6.50621 6.18301 6.18398C6.50523 5.86176 6.66634 5.46732 6.66634 5.00065C6.66634 4.53398 6.50523 4.13954 6.18301 3.81732C5.86079 3.4951 5.46634 3.33398 4.99967 3.33398C4.53301 3.33398 4.13856 3.4951 3.81634 3.81732C3.49412 4.13954 3.33301 4.53398 3.33301 5.00065C3.33301 5.46732 3.49412 5.86176 3.81634 6.18398C4.13856 6.50621 4.53301 6.66732 4.99967 6.66732Z" fill="#2E29FF"/></svg>
                                  <span className="fs-14 text-blue">India</span>
                                </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>


                    <div className="splide__slide box-shadow">
                      <div className="testimonial-box white">
                        <span className="click white" data-bs-target="#baxolileMabinya" data-bs-toggle="modal">
                          <img src="./../../assets/img/review/youtubeplaylightblue.svg" alt="play" loading="lazy" />
                        </span>
                        <img src="./../../assets/img/testimonials/deviare.webp" className="w-100" alt="Digital Training Platform Baxolile Mabinya" loading="lazy" />
                        <div className="text_bottom white ">
                          <div className="profile_img">
                          <div className="profile-text">
                            <p className="text ps-0">Deviare <span>Digital Training Platform</span> </p>
                            <div className="profile_location ms-0">
                             <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.99967 13.6673C4.84412 13.6673 4.71079 13.6229 4.59968 13.534C4.48856 13.4451 4.40523 13.3284 4.34968 13.184C4.13856 12.5618 3.8719 11.9784 3.54967 11.434C3.23856 10.8895 2.79967 10.2507 2.23301 9.51732C1.66634 8.78398 1.20523 8.08398 0.849674 7.41732C0.50523 6.75065 0.333008 5.94509 0.333008 5.00065C0.333008 3.70065 0.783008 2.60065 1.68301 1.70065C2.59412 0.78954 3.69967 0.333984 4.99967 0.333984C6.29967 0.333984 7.39967 0.78954 8.29967 1.70065C9.21079 2.60065 9.66634 3.70065 9.66634 5.00065C9.66634 6.01176 9.4719 6.85621 9.08301 7.53398C8.70523 8.20065 8.26634 8.86176 7.76634 9.51732C7.16634 10.3173 6.71079 10.984 6.39967 11.5173C6.09968 12.0395 5.84968 12.5951 5.64967 13.184C5.59412 13.3395 5.50523 13.4618 5.38301 13.5507C5.2719 13.6284 5.14412 13.6673 4.99967 13.6673ZM4.99967 6.66732C5.46634 6.66732 5.86079 6.50621 6.18301 6.18398C6.50523 5.86176 6.66634 5.46732 6.66634 5.00065C6.66634 4.53398 6.50523 4.13954 6.18301 3.81732C5.86079 3.4951 5.46634 3.33398 4.99967 3.33398C4.53301 3.33398 4.13856 3.4951 3.81634 3.81732C3.49412 4.13954 3.33301 4.53398 3.33301 5.00065C3.33301 5.46732 3.49412 5.86176 3.81634 6.18398C4.13856 6.50621 4.53301 6.66732 4.99967 6.66732Z" fill="#2E29FF"/></svg>
                              <span className="fs-14 text-blue">South Africa</span>
                            </div>
                          </div>
                          </div>
                        </div>
                      </div>
                    </div>


                    <div className="splide__slide box-shadow">
                      <div className="testimonial-box white">
                        <span className="click white" data-bs-target="#deepakVerma" data-bs-toggle="modal">
                          <img src="./../../assets/img/review/youtubeplaylightblue.svg" alt="play" loading="lazy" />
                        </span>
                        <img src="./../../assets/img/testimonials/delivr.webp" className="w-100" alt="Delivery Management Platform Deepak Verma" loading="lazy" />
                        <div className="text_bottom white ">
                          <div className="profile_img">
                          <div className="profile-text">
                            <p className="text ps-0"> Delivr <span>Delivery Management Platform</span> </p>
                            <div className="profile_location ms-0">
                             <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.99967 13.6673C4.84412 13.6673 4.71079 13.6229 4.59968 13.534C4.48856 13.4451 4.40523 13.3284 4.34968 13.184C4.13856 12.5618 3.8719 11.9784 3.54967 11.434C3.23856 10.8895 2.79967 10.2507 2.23301 9.51732C1.66634 8.78398 1.20523 8.08398 0.849674 7.41732C0.50523 6.75065 0.333008 5.94509 0.333008 5.00065C0.333008 3.70065 0.783008 2.60065 1.68301 1.70065C2.59412 0.78954 3.69967 0.333984 4.99967 0.333984C6.29967 0.333984 7.39967 0.78954 8.29967 1.70065C9.21079 2.60065 9.66634 3.70065 9.66634 5.00065C9.66634 6.01176 9.4719 6.85621 9.08301 7.53398C8.70523 8.20065 8.26634 8.86176 7.76634 9.51732C7.16634 10.3173 6.71079 10.984 6.39967 11.5173C6.09968 12.0395 5.84968 12.5951 5.64967 13.184C5.59412 13.3395 5.50523 13.4618 5.38301 13.5507C5.2719 13.6284 5.14412 13.6673 4.99967 13.6673ZM4.99967 6.66732C5.46634 6.66732 5.86079 6.50621 6.18301 6.18398C6.50523 5.86176 6.66634 5.46732 6.66634 5.00065C6.66634 4.53398 6.50523 4.13954 6.18301 3.81732C5.86079 3.4951 5.46634 3.33398 4.99967 3.33398C4.53301 3.33398 4.13856 3.4951 3.81634 3.81732C3.49412 4.13954 3.33301 4.53398 3.33301 5.00065C3.33301 5.46732 3.49412 5.86176 3.81634 6.18398C4.13856 6.50621 4.53301 6.66732 4.99967 6.66732Z" fill="#2E29FF"/></svg>
                              <span className="fs-14 text-blue">UAE</span>
                            </div>
                          </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="splide__slide box-shadow">
                      <div className="testimonial-box white">
                        <span className="click white" data-bs-target="#raviKshirsagar" data-bs-toggle="modal">
                          <img src="./../../assets/img/review/youtubeplaylightblue.svg" alt="play" loading="lazy" />
                        </span>
                        <img src="./../../assets/img/testimonials/rx-agile.webp" className="w-100" alt="Rx Agile - Trainer-First Learning Platform" loading="lazy" />
                        <div className="text_bottom white">
                          <div className="profile_img">
                            <div className="profile-text">
                              <p className="text ps-0">Rx Agile <span>Trainer-First Learning Platform</span></p>
                              <div className="profile_location ms-0"> 
                               <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.99967 13.6673C4.84412 13.6673 4.71079 13.6229 4.59968 13.534C4.48856 13.4451 4.40523 13.3284 4.34968 13.184C4.13856 12.5618 3.8719 11.9784 3.54967 11.434C3.23856 10.8895 2.79967 10.2507 2.23301 9.51732C1.66634 8.78398 1.20523 8.08398 0.849674 7.41732C0.50523 6.75065 0.333008 5.94509 0.333008 5.00065C0.333008 3.70065 0.783008 2.60065 1.68301 1.70065C2.59412 0.78954 3.69967 0.333984 4.99967 0.333984C6.29967 0.333984 7.39967 0.78954 8.29967 1.70065C9.21079 2.60065 9.66634 3.70065 9.66634 5.00065C9.66634 6.01176 9.4719 6.85621 9.08301 7.53398C8.70523 8.20065 8.26634 8.86176 7.76634 9.51732C7.16634 10.3173 6.71079 10.984 6.39967 11.5173C6.09968 12.0395 5.84968 12.5951 5.64967 13.184C5.59412 13.3395 5.50523 13.4618 5.38301 13.5507C5.2719 13.6284 5.14412 13.6673 4.99967 13.6673ZM4.99967 6.66732C5.46634 6.66732 5.86079 6.50621 6.18301 6.18398C6.50523 5.86176 6.66634 5.46732 6.66634 5.00065C6.66634 4.53398 6.50523 4.13954 6.18301 3.81732C5.86079 3.4951 5.46634 3.33398 4.99967 3.33398C4.53301 3.33398 4.13856 3.4951 3.81634 3.81732C3.49412 4.13954 3.33301 4.53398 3.33301 5.00065C3.33301 5.46732 3.49412 5.86176 3.81634 6.18398C4.13856 6.50621 4.53301 6.66732 4.99967 6.66732Z" fill="#2E29FF"/></svg>
                                <span className="fs-14 text-blue">Bengaluru</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>   
                    
                    

                    <div className="splide__slide box-shadow">
                      <div className="testimonial-box white">
                        <span className="click white" data-bs-target="#nigerianAirForce" data-bs-toggle="modal">
                          <img src="./../../assets/img/review/youtubeplaylightblue.svg" alt="play" loading="lazy" />
                        </span>
                        <img src="./../../assets/img/testimonials/nigerian-air-force.webp" className="w-100" alt="Nigerian Air Force" loading="lazy" />
                        <div className="text_bottom white">
                          <div className="profile_img">
                            <div className="profile-text">
                              <p className="text ps-0">Nigerian Air Force <span>Process Automation Platform</span></p>
                              <div className="profile_location ms-0"> 
                               <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.99967 13.6673C4.84412 13.6673 4.71079 13.6229 4.59968 13.534C4.48856 13.4451 4.40523 13.3284 4.34968 13.184C4.13856 12.5618 3.8719 11.9784 3.54967 11.434C3.23856 10.8895 2.79967 10.2507 2.23301 9.51732C1.66634 8.78398 1.20523 8.08398 0.849674 7.41732C0.50523 6.75065 0.333008 5.94509 0.333008 5.00065C0.333008 3.70065 0.783008 2.60065 1.68301 1.70065C2.59412 0.78954 3.69967 0.333984 4.99967 0.333984C6.29967 0.333984 7.39967 0.78954 8.29967 1.70065C9.21079 2.60065 9.66634 3.70065 9.66634 5.00065C9.66634 6.01176 9.4719 6.85621 9.08301 7.53398C8.70523 8.20065 8.26634 8.86176 7.76634 9.51732C7.16634 10.3173 6.71079 10.984 6.39967 11.5173C6.09968 12.0395 5.84968 12.5951 5.64967 13.184C5.59412 13.3395 5.50523 13.4618 5.38301 13.5507C5.2719 13.6284 5.14412 13.6673 4.99967 13.6673ZM4.99967 6.66732C5.46634 6.66732 5.86079 6.50621 6.18301 6.18398C6.50523 5.86176 6.66634 5.46732 6.66634 5.00065C6.66634 4.53398 6.50523 4.13954 6.18301 3.81732C5.86079 3.4951 5.46634 3.33398 4.99967 3.33398C4.53301 3.33398 4.13856 3.4951 3.81634 3.81732C3.49412 4.13954 3.33301 4.53398 3.33301 5.00065C3.33301 5.46732 3.49412 5.86176 3.81634 6.18398C4.13856 6.50621 4.53301 6.66732 4.99967 6.66732Z" fill="#2E29FF"/></svg>
                                <span className="fs-14 text-blue">Africa</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> 

                    <div className="splide__slide box-shadow">
                      <div className="testimonial-box white">
                        <span className="click white" data-bs-target="#ahmedRiad" data-bs-toggle="modal">
                          <img src="./../../assets/img/review/youtubeplaylightblue.svg" alt="play" loading="lazy" />
                        </span>
                        <img src="./../../assets/img/testimonials/butterfly.webp" className="w-100" alt="Ahmed Riad" loading="lazy" />
                        <div className="text_bottom white">
                          <div className="profile_img">
                            <div className="profile-text">
                              <p className="text ps-0">Butterfly <span>Social Discovery App</span></p>
                              <div className="profile_location ms-0"> 
                               <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.99967 13.6673C4.84412 13.6673 4.71079 13.6229 4.59968 13.534C4.48856 13.4451 4.40523 13.3284 4.34968 13.184C4.13856 12.5618 3.8719 11.9784 3.54967 11.434C3.23856 10.8895 2.79967 10.2507 2.23301 9.51732C1.66634 8.78398 1.20523 8.08398 0.849674 7.41732C0.50523 6.75065 0.333008 5.94509 0.333008 5.00065C0.333008 3.70065 0.783008 2.60065 1.68301 1.70065C2.59412 0.78954 3.69967 0.333984 4.99967 0.333984C6.29967 0.333984 7.39967 0.78954 8.29967 1.70065C9.21079 2.60065 9.66634 3.70065 9.66634 5.00065C9.66634 6.01176 9.4719 6.85621 9.08301 7.53398C8.70523 8.20065 8.26634 8.86176 7.76634 9.51732C7.16634 10.3173 6.71079 10.984 6.39967 11.5173C6.09968 12.0395 5.84968 12.5951 5.64967 13.184C5.59412 13.3395 5.50523 13.4618 5.38301 13.5507C5.2719 13.6284 5.14412 13.6673 4.99967 13.6673ZM4.99967 6.66732C5.46634 6.66732 5.86079 6.50621 6.18301 6.18398C6.50523 5.86176 6.66634 5.46732 6.66634 5.00065C6.66634 4.53398 6.50523 4.13954 6.18301 3.81732C5.86079 3.4951 5.46634 3.33398 4.99967 3.33398C4.53301 3.33398 4.13856 3.4951 3.81634 3.81732C3.49412 4.13954 3.33301 4.53398 3.33301 5.00065C3.33301 5.46732 3.49412 5.86176 3.81634 6.18398C4.13856 6.50621 4.53301 6.66732 4.99967 6.66732Z" fill="#2E29FF"/></svg>
                                <span className="fs-14 text-blue">Switzerland</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> 

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>








      {/* Services */}
      <section className="services_expertise">
        <div className="container">
          <div className="row"  data-aos="fade-up" data-aos-duration="1000">
            <div className="col">
              <div className="sticky-head">
                <span className="top-tag-blue">Services</span>
                <div className="head">
                <h2> <span className="text-blue">Next-Gen </span> Fintech App Development Services</h2>
                <p>From AI integration to Support and Maintenance, our custom fintech applications development covers the full spectrum of modern finance.</p>
              </div>
              <div className="mt-5">
                  <a href="https://Novadesk.com/contact-us" className="btn-consultation-white">Get a free Consultation
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M16.0052 9.41421L7.39858 18.0208L5.98438 16.6066L14.591 8H7.00519V6H18.0052V17H16.0052V9.41421Z"
                        fill="#2E29FF" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="col">           

              <div className="services-card-scroll">

       
              <div className="service_card">
                <picture>
                  <img src="./../../assets/img/icons/system-development.svg" alt="ui ux design for fintech apps" />
                </picture>
                <div className="textbox">
                  <h3>UI/UX Design for Fintech Apps</h3>
                  <p>
                    User trust often begins with design. Our fintech-focused UI/UX ensures every interface is clear, compliant, and user-friendly, helping customers navigate complex financial steps with ease.
                  </p>
                </div>
              </div>
              
              <div className="service_card">
                <picture>
                  <img src="./../../assets/img/icons/software-development.svg" alt=" ai enabled fintech solutions" />
                </picture>
                <div className="textbox">
                  <h3>AI-enabled Fintech Solutions</h3>
                  <p>Leverage AI to automate fraud detection, risk assessment, and customer insights. Future-ready fintech development services, designed for smarter, faster financial decisions.</p>
                </div>
              </div>

              
              <div className="service_card">
                <picture>
                  <img src="./../../assets/img/icons/automation-systems.svg" alt="cloud based fintech solutions" />
                </picture>
                <div className="textbox">
                  <h3>Cloud-based Fintech Solutions</h3>
                  <p>Build scalable and secure cloud-powered fintech apps for global reach. Cloud Solutions for performance, data protection, and enterprise growth.</p>
                </div>
              </div>

              
              <div className="service_card">
                <picture>
                  <img src="./../../assets/img/icons/lending-workflows.svg" alt="omnichannel fintech experiences" />
                </picture>
                <div className="textbox">
                  <h3>Omnichannel Fintech Experiences</h3>
                  <p>Customers expect to start a transaction on one channel and finish it on another without friction. We create seamless omnichannel experiences that connect mobile, web, and in-branch into a unified journey.</p>
                </div>
              </div>

        
              <div className="service_card">
                <picture>
                  <img src="./../../assets/img/icons/reporting-tools.svg" alt="custom fintech app development" />
                </picture>
                <div className="textbox">
                  <h3>Custom Fintech App Development Services</h3>
                  <p>As a top fintech app development agency, we design and build fintech apps tailored to your business model, from payments to lending. ISO-compliant, NDA-backed, and trusted by global fintech innovators.</p>
                </div>
              </div>
              <div className="service_card">
                <picture>
                  <img src="./../../assets/img/icons/api-integrations.svg" alt="fintech app support and maintenance" />
                </picture>
                <div className="textbox">
                  <h3>Fintech App Support and Maintenance</h3>
                  <p>Keep your fintech products secure and up-to-date with ongoing monitoring, bug fixes, and upgrades. 24/7 support that ensures zero downtime.</p>
                </div>
              </div>

            </div>


            </div>
          </div>
        </div>
      </section>

        {/* Honest feedbacks */}
      <section className="our_growth">

        <div className="sec_overflow service-tech">
          <div className="container">
            <div className="row">
              <div className="col head">
                <span className="top-tag">Honest feedbacks</span>
                <h2> Stories From Founders Who’ve Worked <span>With Us</span></h2>
              </div>
            </div>
            <div className="slider">
              <div id="honestFeedbacks" className="splide">
                <div className="splide__track">
                  <div className="splide__list">
                    {/* Harshit Thareja */}
                    <div className="splide__slide">
                      <div className="testimonial-box">
                        <span className="click" data-bs-target="#harshitThareja1" data-bs-toggle="modal">
                          <img src="./../../assets/img/icons/play-icon-tranprent.svg" alt="play" loading="lazy" />
                        </span>
                        <img src="./../../assets/img/testimonials/harish-testimonial.webp" className="w-100" alt="mabel-anish"  loading="lazy" />
                          <div className="text_bottom white">
                           <div className="profile_img">
                          <img src="./../../assets/img/testimonials/harshit_thareja_airbox.webp" alt="Harshit Thareja"  loading="lazy" />
                           <div className="profile-text">
                             <p className="text"> Harshit Thareja <span>Co-Founder</span> </p>
                             <div className="profile_location">
                                     <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.99967 13.6673C4.84412 13.6673 4.71079 13.6229 4.59968 13.534C4.48856 13.4451 4.40523 13.3284 4.34968 13.184C4.13856 12.5618 3.8719 11.9784 3.54967 11.434C3.23856 10.8895 2.79967 10.2507 2.23301 9.51732C1.66634 8.78398 1.20523 8.08398 0.849674 7.41732C0.50523 6.75065 0.333008 5.94509 0.333008 5.00065C0.333008 3.70065 0.783008 2.60065 1.68301 1.70065C2.59412 0.78954 3.69967 0.333984 4.99967 0.333984C6.29967 0.333984 7.39967 0.78954 8.29967 1.70065C9.21079 2.60065 9.66634 3.70065 9.66634 5.00065C9.66634 6.01176 9.4719 6.85621 9.08301 7.53398C8.70523 8.20065 8.26634 8.86176 7.76634 9.51732C7.16634 10.3173 6.71079 10.984 6.39967 11.5173C6.09968 12.0395 5.84968 12.5951 5.64967 13.184C5.59412 13.3395 5.50523 13.4618 5.38301 13.5507C5.2719 13.6284 5.14412 13.6673 4.99967 13.6673ZM4.99967 6.66732C5.46634 6.66732 5.86079 6.50621 6.18301 6.18398C6.50523 5.86176 6.66634 5.46732 6.66634 5.00065C6.66634 4.53398 6.50523 4.13954 6.18301 3.81732C5.86079 3.4951 5.46634 3.33398 4.99967 3.33398C4.53301 3.33398 4.13856 3.4951 3.81634 3.81732C3.49412 4.13954 3.33301 4.53398 3.33301 5.00065C3.33301 5.46732 3.49412 5.86176 3.81634 6.18398C4.13856 6.50621 4.53301 6.66732 4.99967 6.66732Z" fill="#2E29FF"/></svg>
                                     <span className="fs-14 text-blue">Singapore</span>
                               </div>
                           </div>
                        </div>
                      </div>
                      </div>
                    </div>
                    {/* Anish Achutan */}
                    <div className="splide__slide">
                      <div className="testimonial-box">
                        <span className="click" data-bs-target="#AnishAchuthan1" data-bs-toggle="modal">
                          <img src="./../../assets/img/icons/play-icon-tranprent.svg" alt="play" loading="lazy" />
                        </span>
                        <img src="./../../assets/img/testimonials/mabel-anish-testimonial.webp" className="w-100" alt="mabel-anish" loading="lazy" />
                         <div className="text_bottom white">
                           <div className="profile_img">
                          <img src="./../../assets/img/testimonials/anish-achuthan-profile.webp" alt="bhavna"  loading="lazy" />
                           <div className="profile-text">
                             <p className="text"> Anish Achuthan<span>CEO & Co-Founder</span> </p>
                             <div className="profile_location">
                                   <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.99967 13.6673C4.84412 13.6673 4.71079 13.6229 4.59968 13.534C4.48856 13.4451 4.40523 13.3284 4.34968 13.184C4.13856 12.5618 3.8719 11.9784 3.54967 11.434C3.23856 10.8895 2.79967 10.2507 2.23301 9.51732C1.66634 8.78398 1.20523 8.08398 0.849674 7.41732C0.50523 6.75065 0.333008 5.94509 0.333008 5.00065C0.333008 3.70065 0.783008 2.60065 1.68301 1.70065C2.59412 0.78954 3.69967 0.333984 4.99967 0.333984C6.29967 0.333984 7.39967 0.78954 8.29967 1.70065C9.21079 2.60065 9.66634 3.70065 9.66634 5.00065C9.66634 6.01176 9.4719 6.85621 9.08301 7.53398C8.70523 8.20065 8.26634 8.86176 7.76634 9.51732C7.16634 10.3173 6.71079 10.984 6.39967 11.5173C6.09968 12.0395 5.84968 12.5951 5.64967 13.184C5.59412 13.3395 5.50523 13.4618 5.38301 13.5507C5.2719 13.6284 5.14412 13.6673 4.99967 13.6673ZM4.99967 6.66732C5.46634 6.66732 5.86079 6.50621 6.18301 6.18398C6.50523 5.86176 6.66634 5.46732 6.66634 5.00065C6.66634 4.53398 6.50523 4.13954 6.18301 3.81732C5.86079 3.4951 5.46634 3.33398 4.99967 3.33398C4.53301 3.33398 4.13856 3.4951 3.81634 3.81732C3.49412 4.13954 3.33301 4.53398 3.33301 5.00065C3.33301 5.46732 3.49412 5.86176 3.81634 6.18398C4.13856 6.50621 4.53301 6.66732 4.99967 6.66732Z" fill="#2E29FF"/></svg>
                                   <span className="fs-14 text-blue">Bengaluru</span>
                             </div>
                           </div>
                        </div>
                        </div>
                      </div>
                    </div>
                    {/* Bhavna */}
                    <div className="splide__slide">
                      <div className="testimonial-box">
                        <span className="click" data-bs-target="#bhavanagupta1" data-bs-toggle="modal">
                          <img src="./../../assets/img/icons/play-icon-tranprent.svg" alt="play" loading="lazy" />
                        </span>
                        <img src="./../../assets/img/testimonials/bhavna-testimonial.webp" className="w-100" alt="bhavna-testimonial" loading="lazy" />
                         <div className="text_bottom white">
                           <div className="profile_img">
                          <img src="./../../assets/img/testimonials/avatar-bhavana_gupta.png" alt="bhavna" loading="lazy" />
                           <div className="profile-text">
                             <p className="text"> Bhavna Gupta<span>IPS Officer</span> </p>
                             <div className="profile_location">
                                   <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.99967 13.6673C4.84412 13.6673 4.71079 13.6229 4.59968 13.534C4.48856 13.4451 4.40523 13.3284 4.34968 13.184C4.13856 12.5618 3.8719 11.9784 3.54967 11.434C3.23856 10.8895 2.79967 10.2507 2.23301 9.51732C1.66634 8.78398 1.20523 8.08398 0.849674 7.41732C0.50523 6.75065 0.333008 5.94509 0.333008 5.00065C0.333008 3.70065 0.783008 2.60065 1.68301 1.70065C2.59412 0.78954 3.69967 0.333984 4.99967 0.333984C6.29967 0.333984 7.39967 0.78954 8.29967 1.70065C9.21079 2.60065 9.66634 3.70065 9.66634 5.00065C9.66634 6.01176 9.4719 6.85621 9.08301 7.53398C8.70523 8.20065 8.26634 8.86176 7.76634 9.51732C7.16634 10.3173 6.71079 10.984 6.39967 11.5173C6.09968 12.0395 5.84968 12.5951 5.64967 13.184C5.59412 13.3395 5.50523 13.4618 5.38301 13.5507C5.2719 13.6284 5.14412 13.6673 4.99967 13.6673ZM4.99967 6.66732C5.46634 6.66732 5.86079 6.50621 6.18301 6.18398C6.50523 5.86176 6.66634 5.46732 6.66634 5.00065C6.66634 4.53398 6.50523 4.13954 6.18301 3.81732C5.86079 3.4951 5.46634 3.33398 4.99967 3.33398C4.53301 3.33398 4.13856 3.4951 3.81634 3.81732C3.49412 4.13954 3.33301 4.53398 3.33301 5.00065C3.33301 5.46732 3.49412 5.86176 3.81634 6.18398C4.13856 6.50621 4.53301 6.66732 4.99967 6.66732Z" fill="#2E29FF"/></svg>
                                   <span className="fs-14 text-blue">Chhattisgarh</span>
                             </div>
                           </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="splide__slide">
                      <div className="testimonial-box">
                        <span className="click" data-bs-target="#showGround" data-bs-toggle="modal">
                          <img src="./../../assets/img/icons/play-icon-tranprent.svg" alt="play" loading="lazy" />
                        </span>
                        <img src="/assets/img/testimonials/danny_schwartz.webp" className="w-100" alt="Danny"  loading="lazy" />
                         <div className="text_bottom white">
                           <div className="profile_img">
                          <img src="./../../assets/img/testimonials/Avatar_show_ground.webp" alt="Danny" loading="lazy" />
                           <div className="profile-text">
                             <p className="text">  Danny Schwartz<span>Founder & CEO</span> </p>
                             <div className="profile_location">
                                   <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.99967 13.6673C4.84412 13.6673 4.71079 13.6229 4.59968 13.534C4.48856 13.4451 4.40523 13.3284 4.34968 13.184C4.13856 12.5618 3.8719 11.9784 3.54967 11.434C3.23856 10.8895 2.79967 10.2507 2.23301 9.51732C1.66634 8.78398 1.20523 8.08398 0.849674 7.41732C0.50523 6.75065 0.333008 5.94509 0.333008 5.00065C0.333008 3.70065 0.783008 2.60065 1.68301 1.70065C2.59412 0.78954 3.69967 0.333984 4.99967 0.333984C6.29967 0.333984 7.39967 0.78954 8.29967 1.70065C9.21079 2.60065 9.66634 3.70065 9.66634 5.00065C9.66634 6.01176 9.4719 6.85621 9.08301 7.53398C8.70523 8.20065 8.26634 8.86176 7.76634 9.51732C7.16634 10.3173 6.71079 10.984 6.39967 11.5173C6.09968 12.0395 5.84968 12.5951 5.64967 13.184C5.59412 13.3395 5.50523 13.4618 5.38301 13.5507C5.2719 13.6284 5.14412 13.6673 4.99967 13.6673ZM4.99967 6.66732C5.46634 6.66732 5.86079 6.50621 6.18301 6.18398C6.50523 5.86176 6.66634 5.46732 6.66634 5.00065C6.66634 4.53398 6.50523 4.13954 6.18301 3.81732C5.86079 3.4951 5.46634 3.33398 4.99967 3.33398C4.53301 3.33398 4.13856 3.4951 3.81634 3.81732C3.49412 4.13954 3.33301 4.53398 3.33301 5.00065C3.33301 5.46732 3.49412 5.86176 3.81634 6.18398C4.13856 6.50621 4.53301 6.66732 4.99967 6.66732Z" fill="#2E29FF"/></svg>
                                   <span className="fs-14 text-blue">United States</span>
                             </div>
                           </div>
                        </div>
                        </div>
                      </div>
                    </div>

                    <div className="splide__slide">
                      <div className="testimonial-box">
                        <span className="click" data-bs-target="#4ThoughtGlobal" data-bs-toggle="modal">
                          <img src="./../../assets/img/icons/play-icon-tranprent.svg" alt="play" loading="lazy" />
                        </span>
                        <img src="./../../assets/img/testimonials/4Thought_global.webp" className="w-100" alt="4Thought_global" loading="lazy" />
                         <div className="text_bottom white">
                           <div className="profile_img">
                          <img src="./../../assets/img/testimonials/Avatar_4Thought_global.svg" alt="Adam" loading="lazy" />
                           <div className="profile-text">
                             <p className="text"> Adam Faanes <span>CTO & Co-Founder</span> </p>
                             <div className="profile_location">
                                   <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.99967 13.6673C4.84412 13.6673 4.71079 13.6229 4.59968 13.534C4.48856 13.4451 4.40523 13.3284 4.34968 13.184C4.13856 12.5618 3.8719 11.9784 3.54967 11.434C3.23856 10.8895 2.79967 10.2507 2.23301 9.51732C1.66634 8.78398 1.20523 8.08398 0.849674 7.41732C0.50523 6.75065 0.333008 5.94509 0.333008 5.00065C0.333008 3.70065 0.783008 2.60065 1.68301 1.70065C2.59412 0.78954 3.69967 0.333984 4.99967 0.333984C6.29967 0.333984 7.39967 0.78954 8.29967 1.70065C9.21079 2.60065 9.66634 3.70065 9.66634 5.00065C9.66634 6.01176 9.4719 6.85621 9.08301 7.53398C8.70523 8.20065 8.26634 8.86176 7.76634 9.51732C7.16634 10.3173 6.71079 10.984 6.39967 11.5173C6.09968 12.0395 5.84968 12.5951 5.64967 13.184C5.59412 13.3395 5.50523 13.4618 5.38301 13.5507C5.2719 13.6284 5.14412 13.6673 4.99967 13.6673ZM4.99967 6.66732C5.46634 6.66732 5.86079 6.50621 6.18301 6.18398C6.50523 5.86176 6.66634 5.46732 6.66634 5.00065C6.66634 4.53398 6.50523 4.13954 6.18301 3.81732C5.86079 3.4951 5.46634 3.33398 4.99967 3.33398C4.53301 3.33398 4.13856 3.4951 3.81634 3.81732C3.49412 4.13954 3.33301 4.53398 3.33301 5.00065C3.33301 5.46732 3.49412 5.86176 3.81634 6.18398C4.13856 6.50621 4.53301 6.66732 4.99967 6.66732Z" fill="#2E29FF"/></svg>
                                   <span className="fs-14 text-blue">New York</span>
                             </div>
                           </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="splide__slide">
                      <div className="testimonial-box">
                        <span className="click" data-bs-target="#andileNgcaba" data-bs-toggle="modal">
                          <img src="./../../assets/img/icons/play-icon-tranprent.svg" alt="play" loading="lazy" />
                        </span>
                        <img src="./../../assets/img/testimonials/andile_ngcaba.webp" className="w-100" alt="Andile Ngcaba" loading="lazy" />
                         <div className="text_bottom white">
                           <div className="profile_img">
                          <img src="./../../assets/img/testimonials/avtar_andile-ngcaba.webp" alt="Andile Ngcaba" loading="lazy" />
                           <div className="profile-text">
                             <p className="text">  Andile Ngcaba<span>Chairman & Founder</span> </p>
                             <div className="profile_location">
                                   <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.99967 13.6673C4.84412 13.6673 4.71079 13.6229 4.59968 13.534C4.48856 13.4451 4.40523 13.3284 4.34968 13.184C4.13856 12.5618 3.8719 11.9784 3.54967 11.434C3.23856 10.8895 2.79967 10.2507 2.23301 9.51732C1.66634 8.78398 1.20523 8.08398 0.849674 7.41732C0.50523 6.75065 0.333008 5.94509 0.333008 5.00065C0.333008 3.70065 0.783008 2.60065 1.68301 1.70065C2.59412 0.78954 3.69967 0.333984 4.99967 0.333984C6.29967 0.333984 7.39967 0.78954 8.29967 1.70065C9.21079 2.60065 9.66634 3.70065 9.66634 5.00065C9.66634 6.01176 9.4719 6.85621 9.08301 7.53398C8.70523 8.20065 8.26634 8.86176 7.76634 9.51732C7.16634 10.3173 6.71079 10.984 6.39967 11.5173C6.09968 12.0395 5.84968 12.5951 5.64967 13.184C5.59412 13.3395 5.50523 13.4618 5.38301 13.5507C5.2719 13.6284 5.14412 13.6673 4.99967 13.6673ZM4.99967 6.66732C5.46634 6.66732 5.86079 6.50621 6.18301 6.18398C6.50523 5.86176 6.66634 5.46732 6.66634 5.00065C6.66634 4.53398 6.50523 4.13954 6.18301 3.81732C5.86079 3.4951 5.46634 3.33398 4.99967 3.33398C4.53301 3.33398 4.13856 3.4951 3.81634 3.81732C3.49412 4.13954 3.33301 4.53398 3.33301 5.00065C3.33301 5.46732 3.49412 5.86176 3.81634 6.18398C4.13856 6.50621 4.53301 6.66732 4.99967 6.66732Z" fill="#2E29FF"/></svg>
                                   <span className="fs-14 text-blue">South Africa</span>
                             </div>
                           </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="splide__slide">
                      <div className="testimonial-box">
                        <span className="click" data-bs-target="#lakshmikantSingh" data-bs-toggle="modal">
                          <img src="./../../assets/img/icons/play-icon-tranprent.svg" alt="play" loading="lazy" />
                        </span>
                        <img src="./../../assets/img/testimonials/lakshmikant_singh.webp" className="w-100" alt="Lakshmikant Singh" loading="lazy" />
                         <div className="text_bottom white">
                           <div className="profile_img">
                          <img src="./../../assets/img/testimonials/avatar-lakshmikant_singh.webp" alt="Lakshmikant Singh"  loading="lazy" />
                           <div className="profile-text">
                             <p className="text"> Lakshmikant Singh<span>Founder & CEO</span> </p>
                             <div className="profile_location">
                                   <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.99967 13.6673C4.84412 13.6673 4.71079 13.6229 4.59968 13.534C4.48856 13.4451 4.40523 13.3284 4.34968 13.184C4.13856 12.5618 3.8719 11.9784 3.54967 11.434C3.23856 10.8895 2.79967 10.2507 2.23301 9.51732C1.66634 8.78398 1.20523 8.08398 0.849674 7.41732C0.50523 6.75065 0.333008 5.94509 0.333008 5.00065C0.333008 3.70065 0.783008 2.60065 1.68301 1.70065C2.59412 0.78954 3.69967 0.333984 4.99967 0.333984C6.29967 0.333984 7.39967 0.78954 8.29967 1.70065C9.21079 2.60065 9.66634 3.70065 9.66634 5.00065C9.66634 6.01176 9.4719 6.85621 9.08301 7.53398C8.70523 8.20065 8.26634 8.86176 7.76634 9.51732C7.16634 10.3173 6.71079 10.984 6.39967 11.5173C6.09968 12.0395 5.84968 12.5951 5.64967 13.184C5.59412 13.3395 5.50523 13.4618 5.38301 13.5507C5.2719 13.6284 5.14412 13.6673 4.99967 13.6673ZM4.99967 6.66732C5.46634 6.66732 5.86079 6.50621 6.18301 6.18398C6.50523 5.86176 6.66634 5.46732 6.66634 5.00065C6.66634 4.53398 6.50523 4.13954 6.18301 3.81732C5.86079 3.4951 5.46634 3.33398 4.99967 3.33398C4.53301 3.33398 4.13856 3.4951 3.81634 3.81732C3.49412 4.13954 3.33301 4.53398 3.33301 5.00065C3.33301 5.46732 3.49412 5.86176 3.81634 6.18398C4.13856 6.50621 4.53301 6.66732 4.99967 6.66732Z" fill="#2E29FF"/></svg>
                                   <span className="fs-14 text-blue">India</span>
                             </div>
                           </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="splide__slide">
                      <div className="testimonial-box">
                        <span className="click" data-bs-target="#baxolileMabinyaCase" data-bs-toggle="modal">
                          <img src="./../../assets/img/icons/play-icon-tranprent.svg" alt="play" loading="lazy" />
                        </span>
                        <img src="./../../assets/img/testimonials/baxolile_mabinya_t.webp" className="w-100" alt="Baxolile Mabinya" loading="lazy" />
                         <div className="text_bottom white">
                           <div className="profile_img">
                          <img src="./../../assets/img/testimonials/Avatar_baxolile_mabinya.svg" alt="baxolile_mabinya" loading="lazy" />
                           <div className="profile-text">
                             <p className="text"> Baxolile Mabinya <span>Co-Founder</span> </p>
                             <div className="profile_location">
                                   <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.99967 13.6673C4.84412 13.6673 4.71079 13.6229 4.59968 13.534C4.48856 13.4451 4.40523 13.3284 4.34968 13.184C4.13856 12.5618 3.8719 11.9784 3.54967 11.434C3.23856 10.8895 2.79967 10.2507 2.23301 9.51732C1.66634 8.78398 1.20523 8.08398 0.849674 7.41732C0.50523 6.75065 0.333008 5.94509 0.333008 5.00065C0.333008 3.70065 0.783008 2.60065 1.68301 1.70065C2.59412 0.78954 3.69967 0.333984 4.99967 0.333984C6.29967 0.333984 7.39967 0.78954 8.29967 1.70065C9.21079 2.60065 9.66634 3.70065 9.66634 5.00065C9.66634 6.01176 9.4719 6.85621 9.08301 7.53398C8.70523 8.20065 8.26634 8.86176 7.76634 9.51732C7.16634 10.3173 6.71079 10.984 6.39967 11.5173C6.09968 12.0395 5.84968 12.5951 5.64967 13.184C5.59412 13.3395 5.50523 13.4618 5.38301 13.5507C5.2719 13.6284 5.14412 13.6673 4.99967 13.6673ZM4.99967 6.66732C5.46634 6.66732 5.86079 6.50621 6.18301 6.18398C6.50523 5.86176 6.66634 5.46732 6.66634 5.00065C6.66634 4.53398 6.50523 4.13954 6.18301 3.81732C5.86079 3.4951 5.46634 3.33398 4.99967 3.33398C4.53301 3.33398 4.13856 3.4951 3.81634 3.81732C3.49412 4.13954 3.33301 4.53398 3.33301 5.00065C3.33301 5.46732 3.49412 5.86176 3.81634 6.18398C4.13856 6.50621 4.53301 6.66732 4.99967 6.66732Z" fill="#2E29FF"/></svg>
                                   <span className="fs-14 text-blue">South Africa</span>
                             </div>
                           </div>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Model */}
      <section className="industries engagement">
        <div className="container">
          <div className="row">
            <div className="text-center" data-aos="fade-up" data-aos-duration="1000">
              <span className="top-tag-blue">Engagement Models</span>
              <h2 className="sub_title">Work With a Fintech App Development <span className="d-block">Company <span className="text-blue">the Way You Want</span></span> </h2>
              <p className="px-3">Choose the model that fits your goals, budget, and timelines. Whether you need additional expertise, a fully dedicated team, or complete outsourcing, we ensure smooth collaboration and secure delivery.</p>
            </div>
          </div>

          <div className="row" data-aos="fade-up" data-aos-duration="1000">
            <div className="models_grid">
              <div className="models_col">
                <picture>
                  <img src="./../../assets/img/hire/icons/dedicated.svg" alt="dedicated" />
                </picture>
                <h3>Team <span>Augmentation</span></h3>
                <p className="text">Scale your team quickly and hire vetted fintech developers who integrate seamlessly into your workflows. A flexible model for businesses that need speed without long-term hiring commitments.</p>
              
                <div className="btn_get">
                  <a href="https://Novadesk.com/contact-us" className="call_btn">Get a free consultation
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M16.0032 9.41421L7.39663 18.0208L5.98242 16.6066L14.589 8H7.00324V6H18.0032V17H16.0032V9.41421Z" fill="#2E29FF"></path></svg>
                  </a>
                </div>
              </div>
              <div className="models_col">
                <picture>
                  <img src="./../../assets/img/hire/icons/fixed.svg" alt="fixed" />
                </picture>
                <h3>Dedicated Fintech <span>Development Teams</span></h3>
                <p className="text">A cross-functional team working exclusively on your project, covering everything from UI/UX design to compliance and deployment. Ideal for startups and enterprises looking for long-term continuity and fast execution.</p>
               
                <div className="btn_get">
                  <a href="https://Novadesk.com/contact-us" className="call_btn">Get a free consultation
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M16.0032 9.41421L7.39663 18.0208L5.98242 16.6066L14.589 8H7.00324V6H18.0032V17H16.0032V9.41421Z" fill="#2E29FF"></path></svg>
                  </a>
                </div>
              </div>
              <div className="models_col">
                <picture>
                  <img src="./../../assets/img/hire/icons/hourly.svg" alt="hourly" />
                </picture>
                <h3>Full Project  <span>Outsourcing</span></h3>
                <p className="text">From strategy to support, we offer end-to-end fintech app development services. Perfect for companies that want hands-off delivery, ongoing optimisation, and a secure, scalable product without managing in-house teams.</p>
     
                <div className="btn_get">
                  <a href="https://Novadesk.com/contact-us" className="call_btn">Get a free consultation
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M16.0032 9.41421L7.39663 18.0208L5.98242 16.6066L14.589 8H7.00324V6H18.0032V17H16.0032V9.41421Z" fill="#2E29FF"></path> </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Focused Area */}
      <section className="our_growth">
        <div className="sec_overflow service-tech">
          <div className="container">
            <div className="row">
              <div className="col head">
                <span className="top-tag">Focused Area</span>
                <h2 className="pb-3">Fintech Expertise, <span>Fully Compliant With Security Guidelines</span></h2>
                <p className="subtitle">
                  As a trusted fintech app development company in India, we bring deep industry knowledge to deliver reliable, compliant, and innovative solutions. Here are some of our key fintech expertise.
                </p>
              </div>
            </div>
            <div className="slider">
              <div id="focusedArea" className="splide">
                <div className="splide__track">
                   <div className="splide__list">                    
                    <div className="splide__slide focused_area">
                        <a href="https://Novadesk.com/industries/fintech/banking-app-development" rel="noopener noreferrer">
                        <img src="./../../assets/img/industries/banking_app_development.webp" className="w-100" alt="Banking App Development" loading="lazy" />
                        <div className="text_bottom">
                          <h3>Banking App Development</h3>
                          <p>Elevate banking experiences through AI-powered financial insights, predictive cash flow tools, and instant loan approvals. Security is ensured with multi-factor authentication, PSD2 compliance, and end-to-end encryption to help banks earn long-term customer trust.</p>
                        </div>
                        </a>
                    </div> 
           
                    
                    
                    <div className="splide__slide focused_area">
                     <a href="https://Novadesk.com/industries/fintech/financial-software-development" rel="noopener noreferrer">
                        <img src="./../../assets/img/industries/financial_software_development.webp" className="w-100" alt="Financial Software Development" loading="lazy" />
                        <div className="text_bottom">
                          <h3>Financial Software Development</h3>
                          <p>
                            Cloud-native, compliance-ready fintech apps that integrate with ERP and core banking systems. Expect automated reporting, regulator-ready audit trails, and AI-driven forecasting, allowing financial enterprises to cut inefficiencies and scale confidently.
                          </p>
                        </div>
                      </a>
                    </div> 
                                       
                                     
                    <div className="splide__slide focused_area">
                       <a href="https://Novadesk.com/industries/fintech/payment-app-development" rel="noopener noreferrer">
                        <img src="./../../assets/img/industries/payment_app_development.webp" className="w-100" alt="Payment App Development" loading="lazy" />
                        <div className="text_bottom">
                          <h3>Payment App Development</h3>
                          <p>
                            We design payment solutions that handle multi-currency transactions, QR-code payments, and peer-to-peer transfers. Enhanced by contactless checkout, blockchain security, and AI-based fraud detection, every transaction is fast, safe, and borderless.
                          </p>
                        </div>
                       </a>
                    </div> 
                    
                                     
                    <div className="splide__slide focused_area">                      
                        <a href="https://Novadesk.com/industries/fintech/lending-software-development-company" rel="noopener noreferrer">
                        <img src="./../../assets/img/industries/lending_software_development.webp" className="w-100" alt="Lending Software Development" loading="lazy" />
                        <div className="text_bottom">
                          <h3>Lending Software Development</h3>
                          <p>
                            Lending cycles transform with real-time credit scoring, digital KYC, and automated collections. Our lending platforms combine AI underwriting, instant approvals, and AML compliance to enable banks and NBFCs to expand portfolios securely.
                          </p>
                        </div>
                        </a>
                    </div> 
                    
                                     
                    <div className="splide__slide focused_area">
                        <a href="https://Novadesk.com/industries/fintech/investment-software-development" rel="noopener noreferrer">
                        <img src="./../../assets/img/industries/investment_software_development.webp" className="w-100" alt="Investment Software Development" loading="lazy" />
                        <div className="text_bottom">
                          <h3>Investment Software Development</h3>
                          <p>
                            Our platforms go beyond dashboards to combine robo-advisory engines, live market feeds, and algorithmic trading tools. With advanced portfolio analytics and strict SEBI/SEC compliance, investors gain data-driven confidence in every decision.
                          </p>
                        </div>
                        </a>
                    </div> 

                     <div className="splide__slide focused_area">
                        <a href="https://Novadesk.com/industries/fintech/insurance-software-development" rel="noopener noreferrer">
                          <img src="./../../assets/img/industries/insurance_software_development.webp" className="w-100" alt="Insurance Software Development" loading="lazy" />
                        <div className="text_bottom">
                          <h3>Insurance Software Development</h3>
                          <p>
                            Simplify insurance journeys with AI-enabled claim validation, instant policy issuance, and predictive risk scoring. Customers benefit from self-service portals, transparent tracking, and faster resolutions, all backed by GDPR, HIPAA, and IRDAI standards.
                          </p>
                        </div>
                        </a>
                    </div> 
                    
                                     
                    <div className="splide__slide focused_area">
                       <a href="https://Novadesk.com/industries/fintech/trading-software-development" rel="noopener noreferrer">
                          <img src="./../../assets/img/industries/financial_software_development.webp" className="w-100" alt="Financial Software Development" loading="lazy" />
                        <div className="text_bottom">
                          <h3>Trading Platform Development</h3>
                          <p>
                            We design trading platforms that bring together real-time market data, multi-asset support, and algorithmic trading engines. Traders gain smarter strategies with AI-driven insights, automated order execution, and risk management tools. 
                          </p>
                        </div>
                        </a>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* Our Development Process */}
      <section className="fintech_expertise">
        <div className="grow-state">
          <div className="grow"></div>
        </div>
        <div className="container">
          <span className="top-tag-blue">Our Development Process</span>
          <div className="row">
            <div className="col" data-aos="fade-up" data-aos-duration="1000">
              <div className="head mid-title">
                <h2>Our Fintech App <span className="text-blue">Development Process</span> </h2>
              </div>
            </div>
            <div className="col" data-aos="fade-up" data-aos-duration="1000">
              <p className="subtitle">A clear, structured process that ensures every project is delivered with innovation, compliance, and reliability, meeting both regulatory standards and business goals.</p>
            </div>
          </div>

          <div className="row">
            <div className="col" data-aos="fade-up" data-aos-duration="1000">

              <div className="fintech_grid">
                <div className="fintech_card">
                  <span className="num-circle">01</span>
                  <h3>Requirement  <span>Gathering</span></h3>
                  <p>Whether you need an MVP, UI/UX, complete product, AI integration, or a custom solution, we provide a dedicated fintech product manager to guide you.</p>
                </div>
                <div className="fintech_card">
                  <span className="num-circle">02</span>
                  <h3>Design <span>& Planning</span></h3>
                  <p>Depending on your needs, we assign the right mix of fintech developers, project managers, or a full dedicated team to bring your idea to life with complete development support.</p>
                </div>
                <div className="fintech_card">
                  <span className="num-circle">03</span>
                  <h3>Development <span>& Testing</span></h3>
                  <p>Using proven best practices in fintech app development services, we code, securely integrate APIs, rigorously test, and deliver ongoing maintenance and support.</p>
                </div>
            </div>
          </div>
        </div>
        </div>
      </section>

         {/* Contact Us */}
    <section className="fintech-middle">
        <div className="container">
          <div className="row">
            <div className="fintech-middle-cta">
              <div className="head" data-aos="fade-up" data-aos-duration="1000">
                <h2> Turn Ideas into Profitable FinTech Apps with Novadesk</h2>
                <p className="text text-white">
                  Join 300+ global brands, including Bank Open, who scaled faster with Novadesk’s FinTech app development services. From MVPs to complete market ready apps, we have delivered solutions trusted by enterprises across globally.
                </p>
                <div className="mt-5" data-aos="fade-up" data-aos-duration="1000">
                  <a href="https://Novadesk.com/contact-us" className="btn-consultation">Get a free Consultation
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M16.0032 9.41421L7.39663 18.0208L5.98242 16.6066L14.589 8H7.00324V6H18.0032V17H16.0032V9.41421Z" fill="white" /> </svg>
                  </a>
                </div>
              </div>
              <div className="cta-image">
                <iframe src="https://cdn.lottielab.com/l/9omFPdtnddVdox.html" width="124" height="124" frameborder="0"></iframe>
                <picture>
                  <img src="./../../assets/img/hire/contact-cta.webp" alt="contact us" loading="lazy" />
                </picture>
              </div>
            </div>
          </div>
        </div>
    </section>


      {/* Tech Stack */}
      <section className="expertise experts">
        <div className="container">
          <div className="row" data-aos="fade-up" data-aos-duration="1000">
            <div className="col">
              <div className="head epb">
                <span className="top-tag-blue"> Tech Stack</span>
                <h2 className="pb-3 sub_title">The Right Technology Behind Every Fintech Solution</h2>
                <p> We rely on modern frameworks, cloud platforms, and AI-driven tools to power custom fintech app development. This ensures your product delivers performance, security, and long-term scalability.</p>
                <div className="mt-64">
                  <a href="https://Novadesk.com/contact-us" className="btn-consultation-white">Get a free Consultation
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M16.0052 9.41421L7.39858 18.0208L5.98438 16.6066L14.591 8H7.00519V6H18.0052V17H16.0052V9.41421Z"
                        fill="#2E29FF" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="col d-flex justify-content-end align-items-center">
              <div className="eb_box">
                <div className="tech_stack">
                  <div className="framework">
                    <div className="bgcolor">
                      <h3 className="sub">Frontend</h3>
                      <div className="skill">
                        <p className="skills">Vue.js</p>
                        <p className="skills">React</p>
                        <p className="skills">Angular</p>
                        <p className="skills">Next.js</p>
                        <p className="skills">JavaScript</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tech_stack">
                  <div className="framework">
                    <div className="bgcolorto">
                      <h3 className="sub">Backend </h3>
                      <div className="skill">
                        <p className="skills bg">.Net</p>
                        <p className="skills bg">PHP</p>
                        <p className="skills bg">Java</p>
                        <p className="skills bg">Node.js</p>
                        <p className="skills bg">C++</p>
                        <p className="skills bg">Python</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tech_stack">
                  <div className="framework">
                    <div className="bg_cool_aqua">
                      <h3 className="sub">Cloud</h3>
                      <div className="skill">
                        <p className="skills cool_aqua">Amazon Web Services</p>
                        <p className="skills cool_aqua">Microsoft Azure</p>
                        <p className="skills cool_aqua">Oracle</p>
                        <p className="skills cool_aqua">Google Cloud</p>
                      </div>
                    </div>
                  </div>
                </div>
                 <div className="tech_stack">
                  <div className="framework">
                    <div className="bg_lavender">
                      <h3 className="sub">AI/ML</h3>
                      <div className="skill">
                        <p className="skills lavender"> Open AI</p>
                        <p className="skills lavender">Gemini</p>
                        <p className="skills lavender">Deep Seek</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hire_expertise bg-white">
        <div className="container">
          <span className="top-tag-blue">Blog</span>
          <div className="row">
            <div className="col" data-aos="fade-up" data-aos-duration="1000">
              <div className="head">
                <h2>Featured Insights and Resources</h2>
              </div>
            </div>
          </div>

          <div className="hire_blog" data-aos="fade-up" data-aos-duration="1000">
            <div id="hireBlog" className="splide">
              <div className="splide__track">
                <div className="splide__list">

                  <div className="splide__slide">
                    <a href="https://Novadesk.com/blog/how-to-build-an-app-like-robinhood/">
                      <div className="blog_card">
                        <img src="https://Novadesk.com/blog/wp-content/uploads/2025/09/How-to-build-a-stock-trading-app-like-Robinhood.jpg" width="100%" alt="How to Build an App like Robinhood?" />
                        <div className="tag">
                          <div className="cat">Fintech</div>
                          <div className="time">5 Min Read</div>
                        </div>
                        <div className="maintitle">
                          <p>How to Build an App like Robinhood?</p>
                        </div>
                        <div className="author">
                          <div className="details">
                            <img src="./../../assets/img/mayank-pratap-white.webp" alt="Mayank Pratap Singh" />
                            <p>Mayank Pratap Singh <span>Founder & CEO of Novadesk</span></p>
                          </div>
                          <svg width="46" height="49" viewBox="0 0 46 49" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect x="0.833374" y="1.10999" width="44" height="47" rx="3.5" fill="#F3F7FB" /> <rect x="0.833374" y="1.10999" width="44" height="47" rx="3.5" stroke="#D4DCFF" /> <path   d="M26.8021 29.86C26.6563 29.735 26.5834 29.5683 26.5834 29.36C26.5834 29.1517 26.6563 28.9746 26.8021 28.8287L29.7709 25.86H17.0834C16.625 25.8183 16.375 25.5579 16.3334 25.0787C16.375 24.6412 16.625 24.4017 17.0834 24.36H29.7709L26.8021 21.3912C26.5105 21.0371 26.5105 20.6829 26.8021 20.3287C27.1563 20.0371 27.5105 20.0371 27.8646 20.3287L32.1146 24.5787C32.4063 24.9329 32.4063 25.2871 32.1146 25.6412L27.8646 29.8912C27.5105 30.1829 27.1563 30.1725 26.8021 29.86Z"   fill="#0F0D1D" /> </svg>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="splide__slide">
                    <a href="https://Novadesk.com/blog/ai-and-ml-in-fintech/">
                      <div className="blog_card">
                        <img src="https://Novadesk.com/blog/wp-content/uploads/2025/08/AI-and-Machine-Learning-ML-in-Fintech_-Use-Cases-and-Benefits.jpg" width="100%" alt="AI and Machine Learning (ML) in Fintech: Use Cases & Benefits" />
                        <div className="tag">
                          <div className="cat">Fintech</div>
                          <div className="time">6 Min Read</div>
                        </div>
                        <div className="maintitle">
                          <p>AI and Machine Learning (ML) in Fintech: Use Cases & Benefits</p>
                        </div>
                        <div className="author">
                          <div className="details">
                            <img src="./../../assets/img/mayank-pratap-white.webp" alt="Mayank Pratap Singh" />
                            <p>Mayank Pratap Singh <span>Founder & CEO of Novadesk</span></p>
                          </div>
                          <svg width="46" height="49" viewBox="0 0 46 49" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect x="0.833374" y="1.10999" width="44" height="47" rx="3.5" fill="#F3F7FB" /> <rect x="0.833374" y="1.10999" width="44" height="47" rx="3.5" stroke="#D4DCFF" /> <path   d="M26.8021 29.86C26.6563 29.735 26.5834 29.5683 26.5834 29.36C26.5834 29.1517 26.6563 28.9746 26.8021 28.8287L29.7709 25.86H17.0834C16.625 25.8183 16.375 25.5579 16.3334 25.0787C16.375 24.6412 16.625 24.4017 17.0834 24.36H29.7709L26.8021 21.3912C26.5105 21.0371 26.5105 20.6829 26.8021 20.3287C27.1563 20.0371 27.5105 20.0371 27.8646 20.3287L32.1146 24.5787C32.4063 24.9329 32.4063 25.2871 32.1146 25.6412L27.8646 29.8912C27.5105 30.1829 27.1563 30.1725 26.8021 29.86Z"   fill="#0F0D1D" /> </svg>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="splide__slide">
                       <a href="https://Novadesk.com/blog/insurance-mobile-app-development/">
                      <div className="blog_card">
                        <img src="https://Novadesk.com/blog/wp-content/uploads/2025/08/Insurance-Mobile-App-Development.jpg" width="100%" alt="Insurance Mobile App Development" />
                        <div className="tag">
                          <div className="cat">Fintech</div>
                          <div className="time">9 Min Read</div>
                        </div>
                        <div className="maintitle">
                          <p>Insurance Mobile App Development [Complete Guide]</p>
                        </div>
                        <div className="author">
                          <div className="details">
                            <img src="./../../assets/img/mayank-pratap-white.webp" alt="Mayank Pratap Singh" />
                            <p>Mayank Pratap Singh <span>Founder & CEO of Novadesk</span></p>
                          </div>
                          <svg width="46" height="49" viewBox="0 0 46 49" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect x="0.833374" y="1.10999" width="44" height="47" rx="3.5" fill="#F3F7FB" /> <rect x="0.833374" y="1.10999" width="44" height="47" rx="3.5" stroke="#D4DCFF" /> <path   d="M26.8021 29.86C26.6563 29.735 26.5834 29.5683 26.5834 29.36C26.5834 29.1517 26.6563 28.9746 26.8021 28.8287L29.7709 25.86H17.0834C16.625 25.8183 16.375 25.5579 16.3334 25.0787C16.375 24.6412 16.625 24.4017 17.0834 24.36H29.7709L26.8021 21.3912C26.5105 21.0371 26.5105 20.6829 26.8021 20.3287C27.1563 20.0371 27.5105 20.0371 27.8646 20.3287L32.1146 24.5787C32.4063 24.9329 32.4063 25.2871 32.1146 25.6412L27.8646 29.8912C27.5105 30.1829 27.1563 30.1725 26.8021 29.86Z"   fill="#0F0D1D" /> </svg>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="splide__slide">
                   <a href="https://Novadesk.com/blog/neobank-app-development-a-step-by-step-process/">
                      <div className="blog_card">
                        <img src="https://Novadesk.com/blog/wp-content/uploads/2025/08/Neobank-App-Development_-A-Step-by-Step-Process.jpg" width="100%" alt="Neobank App Development: A Step-by-Step Process" />
                        <div className="tag">
                          <div className="cat">Fintech</div>
                          <div className="time">9 min Read</div>
                        </div>
                        <div className="maintitle">
                          <p>Neobank App Development: A Step-by-Step Process</p>
                        </div>
                        <div className="author">
                          <div className="details">
                            <img src="./../../assets/img/mayank-pratap-white.webp" alt="Mayank Pratap Singh" />
                            <p>Mayank Pratap Singh <span>Founder & CEO of Novadesk</span></p>
                          </div>
                          <svg width="46" height="49" viewBox="0 0 46 49" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect x="0.833374" y="1.10999" width="44" height="47" rx="3.5" fill="#F3F7FB" /> <rect x="0.833374" y="1.10999" width="44" height="47" rx="3.5" stroke="#D4DCFF" /> <path   d="M26.8021 29.86C26.6563 29.735 26.5834 29.5683 26.5834 29.36C26.5834 29.1517 26.6563 28.9746 26.8021 28.8287L29.7709 25.86H17.0834C16.625 25.8183 16.375 25.5579 16.3334 25.0787C16.375 24.6412 16.625 24.4017 17.0834 24.36H29.7709L26.8021 21.3912C26.5105 21.0371 26.5105 20.6829 26.8021 20.3287C27.1563 20.0371 27.5105 20.0371 27.8646 20.3287L32.1146 24.5787C32.4063 24.9329 32.4063 25.2871 32.1146 25.6412L27.8646 29.8912C27.5105 30.1829 27.1563 30.1725 26.8021 29.86Z"   fill="#0F0D1D" /> </svg>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="splide__slide">
                    <a href="https://Novadesk.com/blog/ai-tools-for-fintech-companies/">
                      <div className="blog_card">
                        <img src="https://Novadesk.com/blog/wp-content/uploads/2025/08/Role-of-AI-in-Fintech.jpg" width="100%" alt="AI Tools for Fintech: 8 Platforms Driving Smarter Operations" />
                        <div className="tag">
                          <div className="cat">Fintech</div>
                          <div className="time">7 Min Read</div>
                        </div>
                        <div className="maintitle">
                          <p>AI Tools for Fintech: 8 Platforms Driving Smarter Operations</p>
                        </div>
                        <div className="author">
                          <div className="details">
                            <img src="./../../assets/img/mayank-pratap-white.webp" alt="Mayank Pratap Singh" />
                            <p>Mayank Pratap Singh <span>Founder & CEO of Novadesk</span></p>
                          </div>
                          <svg width="46" height="49" viewBox="0 0 46 49" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect x="0.833374" y="1.10999" width="44" height="47" rx="3.5" fill="#F3F7FB" /> <rect x="0.833374" y="1.10999" width="44" height="47" rx="3.5" stroke="#D4DCFF" /> <path   d="M26.8021 29.86C26.6563 29.735 26.5834 29.5683 26.5834 29.36C26.5834 29.1517 26.6563 28.9746 26.8021 28.8287L29.7709 25.86H17.0834C16.625 25.8183 16.375 25.5579 16.3334 25.0787C16.375 24.6412 16.625 24.4017 17.0834 24.36H29.7709L26.8021 21.3912C26.5105 21.0371 26.5105 20.6829 26.8021 20.3287C27.1563 20.0371 27.5105 20.0371 27.8646 20.3287L32.1146 24.5787C32.4063 24.9329 32.4063 25.2871 32.1146 25.6412L27.8646 29.8912C27.5105 30.1829 27.1563 30.1725 26.8021 29.86Z"   fill="#0F0D1D" /> </svg>
                        </div>
                      </div>
                    </a>
                  </div>


                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    {/* Contact Us */}
    <section className="fintech-contact">
        <div className="container">
          <div className="row">
            <div className="fintech-cta">
              <div className="head" data-aos="fade-up" data-aos-duration="1000">
                <h2> Partner with the Best Fintech App Development Company in India</h2>
                <p className="text text-white">
                  Novadesk has powered fintech platforms with innovation and reliability. Your fintech app idea could be the next big success, we’ll help you make it real.
                </p>
                <div className="mt-5" data-aos="fade-up" data-aos-duration="1000">
                  <a href="https://Novadesk.com/contact-us" className="btn-consultation">Get a free Consultation
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M16.0032 9.41421L7.39663 18.0208L5.98242 16.6066L14.589 8H7.00324V6H18.0032V17H16.0032V9.41421Z" fill="white" /> </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>


      {/* FAQs */}
      <section className="faq_prioritize">
        <div className="ebaccordion">
          <div className="container">
            <div className="row" data-aos="fade-up" data-aos-duration="1000">
              <div className="col col-md-5">
                <div className="faq_img sticky-head">
                  <div className="circle-img">
                    <img src="./../../assets/img/hire/fintech-app-faq.webp" alt="fintech app development" loading="lazy" />
                    <iframe src="https://cdn.lottielab.com/l/5GvocdK5G3zHrj.html" width="96" height="96" frameborder="0"></iframe>
                  </div>
                </div>
              </div>
              <div className="col col-md-7 head">
                <span className="top-tag-blue text-capitalize">FAQs</span>
                <h2>Frequently Asked Questions</h2>
                <div className="accordion" id="ebaccordion">
                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Why should I choose Novadesk as my fintech app development company?
                      </button>
                    </h3>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#ebaccordion">
                      <div className="accordion-body">
                        We bring domain expertise, security-first development, and proven delivery across 20+ fintech projects. Our team has worked with startups, enterprises, and Fortune 500s to build scalable, compliant, and user-centric apps.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        What kind of fintech solutions do you build?
                      </button>
                    </h3>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#ebaccordion">
                      <div className="accordion-body">
                        We develop everything from mobile banking and lending apps to trading platforms, insurance software, and payment gateways. Each fintech solution is designed for compliance, speed, and seamless user experience.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        How do you ensure compliance and data security in fintech application development?
                      </button>
                    </h3>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#ebaccordion">
                      <div className="accordion-body">
                        We follow strict security protocols, use encryption standards like OAuth2.0 and tokenization, and build GDPR, PCI DSS, and ISO-compliant apps. Every product is NDA-backed to protect your IP. That is why we are among the top fintech app development company in the USA and India.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Do you provide post-launch support for fintech apps?
                      </button>
                    </h3>
                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#ebaccordion">
                      <div className="accordion-body">
                        Yes. Our fintech mobile app development services include 24/7 monitoring, bug fixes, upgrades, and compliance updates to keep your product reliable and future-ready.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        Can you integrate third-party APIs and payment systems?
                      </button>
                    </h3>
                    <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#ebaccordion">
                      <div className="accordion-body">
                        We’ve integrated payment gateways like Stripe, Razorpay, and PayPal, as well as core banking APIs and financial data providers like Plaid, ensuring smooth, secure transactions.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                        How fast can you deliver an MVP for a fintech product?
                      </button>
                    </h3>
                    <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#ebaccordion">
                      <div className="accordion-body">
                        As one of the top fintech mobile app development company, our team can deliver a working MVP in as little as 8–12 weeks. This helps you validate the idea with real users before scaling.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                        What engagement models do you offer for fintech development?
                      </button>
                    </h3>
                    <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#ebaccordion">
                      <div className="accordion-body">
                        You can choose between team augmentation, dedicated fintech development teams, or full project outsourcing, each designed for flexibility, scalability, and cost efficiency.
                      </div>
                    </div>
                  </div>
                  <div className="py-4 text-center">
                    <a href="https://Novadesk.com/contact-us" className="btn-blue wow fadeInUp" data-wow-delay="0.6s"
                      data-wow-duration="0.8s">More Questions? Contact Us
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M16.0032 9.41421L7.39663 18.0208L5.98242 16.6066L14.589 8H7.00324V6H18.0032V17H16.0032V9.41421Z"
                          fill="white" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
