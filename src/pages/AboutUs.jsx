import React, { useState } from 'react';
import { ShieldAlert, Award, Globe, Users, Code, Zap, Clock, MessageSquare, Briefcase, Cpu, Play, Rocket, Building2, Handshake } from 'lucide-react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const faqs = [
  {
    q: "Is NovaDesk an agency or a solo developer?",
    a: "NovaDesk is a solo-run studio — one developer handling the full technical execution of every project, from architecture to deployment. This is a deliberate choice, not a limitation: it means direct communication and full ownership over every decision, without the coordination overhead of a larger team."
  },
  {
    q: "Why work with a solo studio instead of a larger agency?",
    a: "The tradeoffs are genuine on both sides. A larger agency offers more simultaneous capacity and a broader bench of specialists. A solo studio offers direct access to the person building your product, faster decision-making without internal handoffs, and typically lower overhead cost passed on to you. NovaDesk is the right fit for teams who value speed and direct communication over scale."
  },
  {
    q: "What if I need ongoing work after my project launches?",
    a: "Every project includes a defined post-launch support window. Ongoing work — new features, maintenance, or scaling support — is available separately, scoped based on what you need going forward."
  },
  {
    q: "Do you take on projects outside full-stack development, AI integration, and MVP development?",
    a: "The focus stays intentionally narrow on these three areas, since depth in a focused set of skills produces better results than spreading thin across everything. If a project falls outside this scope, an honest \"this isn't the right fit\" is offered rather than taking it on anyway."
  }
];

const IconChevronDown = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
);

function FaqItem({ q, a, open, onToggle }) {
  return (
    <div className={`nd-faq-item ${open ? 'nd-faq-open' : ''}`}>
      <button className="nd-faq-q" onClick={onToggle}>
        <span>{q}</span>
        <span className="nd-faq-icon">
          <IconChevronDown />
        </span>
      </button>
      {open && <div className="nd-faq-a">{a}</div>}
    </div>
  );
}

export default function AboutUs() {
  const [activeFaq, setActiveFaq] = useState(null);
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "NovaDesk",
      "description": "A full-stack and AI development studio focused on full-stack web development, AI integration, and MVP development.",
      "url": "https://www.novadesk.site"
    }
  };

  return (
    <>
      <SEO 
        keywords="About NovaDesk, full-stack development studio, AI integration, custom web development, MVP development" 
        title="About NovaDesk | Full-Stack & AI Development Studio" 
        description="NovaDesk is a full-stack and AI development studio built around direct access, honest scoping, and modern engineering. Learn how we work."
        url="/about-us"
        schema={aboutSchema}
      />
      
      <div className="about-page" style={{ paddingTop: '30px' }}>
        {/* HERO SECTION */}
        <section className="about-hero">
          <div className="container">
            <div className="about-hero-content" style={{ maxWidth: '950px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <span className="breadcrumb-eyebrow" style={{ fontSize: '12px', fontWeight: '600', color: '#6B7280', letterSpacing: '0.5px', marginBottom: '14px', display: 'block', textTransform: 'uppercase' }}>HOME &gt; ABOUT US</span>
              <h1 style={{ fontSize: 'clamp(36px, 4.5vw, 56px)', lineHeight: '1.2', marginBottom: '24px', letterSpacing: '-1px', fontWeight: '700', color: '#111827' }}>
                About <span style={{ color: 'var(--color-primary)' }}>NovaDesk</span><br />
                Trusted Partner for Startups &amp; <br />Global Enterprises
              </h1>
              
              <div className="founder-badge" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div className="founder-avatar">
                  <img src="/hero-my-image.png" alt="Harsh Prateek" style={{ borderRadius: '50%', width: '72px', height: '52px', objectFit: 'cover', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }} />
                </div>
                <div className="founder-info" style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                  <strong style={{ fontSize: '24px', color: '#111827', letterSpacing: '-0.5px', fontWeight: '600', lineHeight: '1.2' }}>Harsh Prateek</strong>
                  <span style={{ fontSize: '14px', color: 'var(--color-primary)', marginTop: '4px', fontWeight: '500' }}>Founder &amp; Lead Developer</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* THE STORY */}
        <section className="about-story" style={{ padding: '40px 0 80px 0' }}>
          <div className="container story-container" style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'left' }}>
            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#4B5563', marginBottom: '24px' }}>
              <strong style={{ color: '#111827', display: 'block', marginBottom: '8px' }}>NovaDesk started with a straightforward frustration:</strong> 
              Watching good ideas get slowed down by process, not talent.
            </p>
            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#4B5563', marginBottom: '24px' }}>
              Most software studios and agencies add layers between the client and the person actually writing the code — account managers, project coordinators, rotating junior developers learning on the job. Every layer adds delay, dilutes context, and adds cost that doesn't go toward the actual product.
            </p>
            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#4B5563', marginBottom: '24px' }}>
              <strong style={{ color: '#111827', display: 'block', marginBottom: '8px' }}>NovaDesk is built differently, deliberately.</strong> 
              It's a full-stack and AI development studio run by a single developer with a background spanning computer applications and business management — which means every project gets both the technical execution and the product thinking to make it actually useful, not just functional.
            </p>
            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#4B5563', marginBottom: '24px' }}>
              The focus stays narrow on purpose: full-stack web development, AI integration, and MVP development — three things done well, rather than a long service menu done adequately. Every project is built on a modern, proven stack (Next.js, FastAPI, Supabase) chosen for speed and long-term maintainability, not whatever's trendy that quarter.
            </p>
            
            <div className="founder-signature" style={{ fontFamily: '"Brush Script MT", cursive', fontSize: '36px', color: '#111827', marginTop: '48px' }}>
              Harsh Prateek
            </div>
          </div>
        </section>

        {/* VALUES SECTION */}
        <section className="about-values">
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div className="section-header text-center" style={{ marginBottom: '64px' }}>
              <h2 style={{ fontSize: '40px', fontWeight: '700', color: '#111827', letterSpacing: '-1px' }}>Our Core Values</h2>
            </div>
            
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon-box">
                  <div className="value-icon-shadow"></div>
                  <div className="value-icon-inner"><Cpu size={20} color="white" /></div>
                </div>
                <div>
                  <h4>Direct communication beats layered process</h4>
                  <p>Every question deserves a same-day answer from the person who actually knows the codebase — not a relay through someone reading from a ticket.</p>
                </div>
              </div>
              <div className="value-card">
                <div className="value-icon-box">
                  <div className="value-icon-shadow"></div>
                  <div className="value-icon-inner"><Clock size={20} color="white" /></div>
                </div>
                <div>
                  <h4>Honest scoping beats optimistic promises</h4>
                  <p>A realistic timeline and an honest "this will take longer than you'd like" is worth more than a fast yes that turns into six months of delays.</p>
                </div>
              </div>
              <div className="value-card">
                <div className="value-icon-box">
                  <div className="value-icon-shadow"></div>
                  <div className="value-icon-inner"><ShieldAlert size={20} color="white" /></div>
                </div>
                <div>
                  <h4>Weekly progress beats big reveals</h4>
                  <p>You should see real, working software every week — not a status update promising progress happening somewhere behind the scenes.</p>
                </div>
              </div>
              <div className="value-card">
                <div className="value-icon-box">
                  <div className="value-icon-shadow"></div>
                  <div className="value-icon-inner"><Zap size={20} color="white" /></div>
                </div>
                <div>
                  <h4>Modern, maintainable code beats quick hacks</h4>
                  <p>Code that works today but needs a full rewrite in a year isn't actually fast — it's slow with extra steps. Every build is done with long-term maintainability in mind.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW WE WORK */}
        <section className="about-how" style={{ background: '#F8FAFC', padding: '100px 0' }}>
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div className="grid-2 align-center" style={{ gap: '64px' }}>
              <div className="how-content">
                <h2 style={{ fontSize: '40px', fontWeight: '700', color: '#111827', letterSpacing: '-1px', marginBottom: '48px' }}>How We Work</h2>
                
                <div className="how-step" style={{ display: 'flex', gap: '24px', marginBottom: '40px' }}>
                  <div className="step-num" style={{ flexShrink: 0, width: '40px', height: '40px', borderRadius: '50%', background: '#EEF2FF', color: '#4F46E5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '16px' }}>1</div>
                  <div className="step-text">
                    <h4 style={{ fontSize: '20px', fontWeight: '600', color: '#111827', marginBottom: '8px' }}>You talk directly to the developer</h4>
                    <p style={{ color: '#4B5563', fontSize: '15px', lineHeight: '1.6' }}>No account manager translating your requirements. No sales layer between the conversation and the code. From the first call to final handover, you're talking to the person building your product.</p>
                  </div>
                </div>
                
                <div className="how-step" style={{ display: 'flex', gap: '24px', marginBottom: '40px' }}>
                   <div className="step-num" style={{ flexShrink: 0, width: '40px', height: '40px', borderRadius: '50%', background: '#EEF2FF', color: '#4F46E5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '16px' }}>2</div>
                  <div className="step-text">
                    <h4 style={{ fontSize: '20px', fontWeight: '600', color: '#111827', marginBottom: '8px' }}>Every project starts with honest scoping</h4>
                    <p style={{ color: '#4B5563', fontSize: '15px', lineHeight: '1.6' }}>A free discovery call comes first — understanding what you actually need, not what's easiest to sell. You get a clear, realistic proposal before any commitment, not a vague estimate that grows later.</p>
                  </div>
                </div>

                <div className="how-step" style={{ display: 'flex', gap: '24px', marginBottom: '40px' }}>
                   <div className="step-num" style={{ flexShrink: 0, width: '40px', height: '40px', borderRadius: '50%', background: '#EEF2FF', color: '#4F46E5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '16px' }}>3</div>
                  <div className="step-text">
                    <h4 style={{ fontSize: '20px', fontWeight: '600', color: '#111827', marginBottom: '8px' }}>Weekly, visible progress</h4>
                    <p style={{ color: '#4B5563', fontSize: '15px', lineHeight: '1.6' }}>Development happens in shippable weekly milestones. You see working software regularly, with room to give feedback as the project evolves — not just a single big reveal at the end.</p>
                  </div>
                </div>

                <div className="how-step" style={{ display: 'flex', gap: '24px', marginBottom: '0' }}>
                   <div className="step-num" style={{ flexShrink: 0, width: '40px', height: '40px', borderRadius: '50%', background: '#EEF2FF', color: '#4F46E5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '16px' }}>4</div>
                  <div className="step-text">
                    <h4 style={{ fontSize: '20px', fontWeight: '600', color: '#111827', marginBottom: '8px' }}>Built on a modern, deliberate stack</h4>
                    <p style={{ color: '#4B5563', fontSize: '15px', lineHeight: '1.6' }}>Next.js, FastAPI, Supabase, and TypeScript — chosen because they balance development speed with long-term maintainability, not because they're trendy.</p>
                  </div>
                </div>
              </div>
              <div className="how-image" style={{ position: 'relative' }}>
                <div style={{ background: '#fff', borderRadius: '24px', padding: '48px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01)', border: '1px solid #F1F5F9', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(79,70,229,0.06) 0%, rgba(255,255,255,0) 70%)' }}></div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '64px', height: '64px', background: '#EEF2FF', borderRadius: '16px', marginBottom: '32px' }}>
                    <Code size={32} color="#4F46E5" />
                  </div>
                  <h3 style={{ fontSize: '28px', fontWeight: '700', color: '#111827', marginBottom: '16px', letterSpacing: '-0.5px' }}>Direct & Transparent</h3>
                  <p style={{ color: '#4B5563', fontSize: '16px', lineHeight: '1.6', marginBottom: '32px' }}>We remove the middleman so you get exactly what you ask for, faster and with better quality.</p>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '24px', height: '24px', background: '#DCFCE7', borderRadius: '50%' }}><Play size={10} color="#16A34A" style={{ marginLeft: '2px' }} /></div>
                      <span style={{ fontSize: '14px', fontWeight: '500', color: '#334155' }}>No Project Managers</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '24px', height: '24px', background: '#DCFCE7', borderRadius: '50%' }}><Play size={10} color="#16A34A" style={{ marginLeft: '2px' }} /></div>
                      <span style={{ fontSize: '14px', fontWeight: '500', color: '#334155' }}>Direct Slack Access</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '24px', height: '24px', background: '#DCFCE7', borderRadius: '50%' }}><Play size={10} color="#16A34A" style={{ marginLeft: '2px' }} /></div>
                      <span style={{ fontSize: '14px', fontWeight: '500', color: '#334155' }}>Weekly Shippable Builds</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section className="about-what-we-do">
          <div className="container">
            <div className="section-header text-center">
              <h2>What We Do</h2>
              <p>NovaDesk focuses on three core areas.</p>
            </div>
            
            <div className="grid-3">
              <div className="service-card">
                <div className="service-icon-wrapper"><Briefcase size={28} /></div>
                <h4>Full-Stack Web Development</h4>
                <p>End-to-end web applications — from database architecture to the interface users interact with — built on a modern, production-grade stack.</p>
              </div>
              <div className="service-card">
                <div className="service-icon-wrapper"><Cpu size={28} /></div>
                <h4>AI Integration</h4>
                <p>LLM-powered features, chatbots, and automation that solve real workflow problems, not AI-for-the-sake-of-AI.</p>
              </div>
              <div className="service-card">
                <div className="service-icon-wrapper"><Play size={28} /></div>
                <h4>MVP & Product Development</h4>
                <p>Taking an idea from concept to a working, launchable product — with a product-thinking lens on what to build first and what to cut.</p>
              </div>
            </div>
          </div>
        </section>

        {/* BACKGROUND & APPROACH */}
        <section className="about-background bg-light">
          <div className="container">
            <div className="grid-2">
              <div className="background-box">
                <h2 style={{ marginBottom: '16px' }}>Background & Approach</h2>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '16px' }}>NovaDesk is run with a background spanning computer applications and business/management education — a combination that shapes how projects get approached: not just "can this be built," but "should it be built this way, and does it actually solve the user's problem."</p>
                <p style={{ color: 'var(--color-text-muted)' }}>This product-thinking lens comes from hands-on experience building complete products independently — from database design and backend logic to frontend interfaces and deployment — including self-initiated projects exploring AI-powered platforms and product concepts from the ground up.</p>
              </div>
              
              <div className="background-box">
                <h2 style={{ marginBottom: '16px' }}>Why "NovaDesk"</h2>
                <p style={{ color: 'var(--color-text-muted)' }}>"Nova" — a burst of new energy, the kind that comes with building something from scratch. "Desk" — the actual workspace where that energy turns into shipped, working software. Together: a studio built around doing focused, high-quality work, not scaling into exactly the kind of layered, impersonal agency it was built to be an alternative to.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHO IT WORKS BEST WITH */}
        <section className="about-who" style={{ padding: '100px 0', background: '#fff' }}>
          <div className="container text-center" style={{ maxWidth: '1200px' }}>
            <div className="section-header" style={{ marginBottom: '64px' }}>
              <h2 style={{ fontSize: '40px', fontWeight: '700', color: '#111827', letterSpacing: '-1px' }}>Who NovaDesk Works Best With</h2>
            </div>
            <div className="who-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
              <div className="who-item" style={{ padding: '40px 24px', background: '#fff', borderRadius: '20px', border: '1px solid #E5E7EB', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.02)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#EEF2FF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <Rocket size={24} color="#4F46E5" />
                </div>
                <strong style={{ fontSize: '18px', fontWeight: '600', color: '#111827', marginBottom: '12px' }}>Startup founders</strong>
                <p style={{ fontSize: '15px', color: '#6B7280', lineHeight: '1.6' }}>who need an MVP built without hiring a full internal team first.</p>
              </div>
              <div className="who-item" style={{ padding: '40px 24px', background: '#fff', borderRadius: '20px', border: '1px solid #E5E7EB', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.02)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#EEF2FF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <Building2 size={24} color="#4F46E5" />
                </div>
                <strong style={{ fontSize: '18px', fontWeight: '600', color: '#111827', marginBottom: '12px' }}>Small businesses</strong>
                <p style={{ fontSize: '15px', color: '#6B7280', lineHeight: '1.6' }}>ready to move past outdated systems or no-code tools that have hit their limits.</p>
              </div>
              <div className="who-item" style={{ padding: '40px 24px', background: '#fff', borderRadius: '20px', border: '1px solid #E5E7EB', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.02)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#EEF2FF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <Handshake size={24} color="#4F46E5" />
                </div>
                <strong style={{ fontSize: '18px', fontWeight: '600', color: '#111827', marginBottom: '12px' }}>Agencies</strong>
                <p style={{ fontSize: '15px', color: '#6B7280', lineHeight: '1.6' }}>needing a reliable technical partner for client web app or AI projects.</p>
              </div>
              <div className="who-item" style={{ padding: '40px 24px', background: '#fff', borderRadius: '20px', border: '1px solid #E5E7EB', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.02)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#EEF2FF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <Zap size={24} color="#4F46E5" />
                </div>
                <strong style={{ fontSize: '18px', fontWeight: '600', color: '#111827', marginBottom: '12px' }}>Teams</strong>
                <p style={{ fontSize: '15px', color: '#6B7280', lineHeight: '1.6' }}>who value direct communication and weekly progress over a big-name logo on a proposal.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="nd-faq">
          <div className="nd-faq-inner">
            <div className="nd-faq-tag">✦ FAQs ✦</div>
            <h2 className="nd-faq-title">Frequently Asked Questions</h2>
            <div className="nd-faq-list">
              {faqs.map((f, i) => (
                <FaqItem key={i} q={f.q} a={f.a} open={activeFaq === i} onToggle={() => setActiveFaq(activeFaq === i ? null : i)} />
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
              <Link to="/contact-us" className="nd-faq-cta-btn">
                Still have questions? Talk to Us ↗
              </Link>
            </div>
          </div>
        </section>

        
      </div>
    </>
  );
}
