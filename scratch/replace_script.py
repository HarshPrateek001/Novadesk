import re
import os

filepath = r"d:\Personal\Agency\NOVADESK\src\pages\services\WebApplicationDevelopment.jsx"

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Component name
content = content.replace("export default function FullStackDevelopment()", "export default function WebApplicationDevelopment()")

# 2. Meta tags
content = re.sub(
    r"<title>.*?</title>",
    "<title>Custom Web Application Development Services | NovaDesk</title>",
    content
)
content = re.sub(
    r'<meta name="description" content=".*?" />',
    '<meta name="description" content="Custom web application development for startups & businesses — dashboards, portals, booking systems, internal tools. Built to scale. Get a free quote." />',
    content
)

# 3. Schema
content = content.replace('"serviceType": "Full Stack Development"', '"serviceType": "Web Application Development"')
content = content.replace('"description": "Expert full stack development services by EngineerBabu. We build scalable, secure, and modern web applications using the latest technologies."', '"description": "Custom web application development including dashboards, client portals, booking systems, and SaaS products."')

# 4. Hero Section
content = content.replace('SERVICE / 01', 'SERVICE / 02.1')
content = re.sub(
    r'<h1 className="fs-hero-title">.*?</h1>',
    '<h1 className="fs-hero-title">\n                Custom <span className="fs-text-blue">Web Applications</span><br />\n                Built Around Your Workflow\n              </h1>',
    content,
    flags=re.DOTALL
)
content = re.sub(
    r'<p className="fs-hero-desc">.*?</p>',
    '<p className="fs-hero-desc">\n                Not a template. Not a page-builder. A web application designed around how your business actually works — dashboards, portals, booking systems, and internal tools built to handle real logic, real users, and real growth.\n              </p>',
    content,
    flags=re.DOTALL
)

# 5. Trust Bar
content = content.replace('Full Stack Development Services, Backed by <span className="fs-text-blue">Leading Brands</span>', 'Web Application Development, Backed by <span className="fs-text-blue">Leading Brands</span>')

# 6. Services Section (What Is Web Application Development & What's Included)
services_section_new = """
        {/* SERVICES EXPERTISE */}
        <section className="fs-services">
          <div className="fs-container">
            <div className="fs-split-header">
              <div>
                <div className="fs-tag-arrows">WHAT IS IT?</div>
                <h2>What Is Web Application Development?</h2>
              </div>
              <p>
                A website shows information. A <strong>web application</strong> does something — it lets users log in, interact with data, complete tasks, and get results back in real time.<br/><br/>
                Think of the difference between a restaurant's homepage (a website — informational) and an online table-booking system with live availability (a web application).
              </p>
            </div>

            <div className="fs-tag-arrows" style={{marginTop: '60px', marginBottom: '20px'}}>OUR EXPERTISE</div>
            <h2 style={{marginBottom: '40px'}}>What's Included in This Service</h2>

            <div className="fs-services-grid">
              <div className="fs-service-card">
                <h3>Requirement Analysis & System Design</h3>
                <p>Understanding your workflow, users, and what the application needs to do. Defining the data model and architecture before coding.</p>
                <div className="fs-service-arrow"><ArrowRight /></div>
              </div>
              <div className="fs-service-card">
                <h3>Frontend Development</h3>
                <p>Built with React and Next.js for fast, responsive, interactive interfaces. Dashboards, forms, tables, and workflows designed around real usage.</p>
                <div className="fs-service-arrow"><ArrowRight /></div>
              </div>
              <div className="fs-service-card">
                <h3>Backend & Business Logic</h3>
                <p>Built with FastAPI or Node.js. Custom business logic, approval workflows, calculations, and secure API architecture.</p>
                <div className="fs-service-arrow"><ArrowRight /></div>
              </div>
              <div className="fs-service-card">
                <h3>User Authentication & Access Control</h3>
                <p>Secure login and role-based access control — admins, managers, and regular users each see only what they should.</p>
                <div className="fs-service-arrow"><ArrowRight /></div>
              </div>
              <div className="fs-service-card">
                <h3>Database Architecture</h3>
                <p>PostgreSQL (via Supabase) — reliable, scalable, with real-time capabilities. Designed to handle your actual data relationships.</p>
                <div className="fs-service-arrow"><ArrowRight /></div>
              </div>
              <div className="fs-service-card">
                <h3>Deployment & Ongoing Reliability</h3>
                <p>Production deployment, performance monitoring, and a defined post-launch support window to catch issues early.</p>
                <div className="fs-service-arrow"><ArrowRight /></div>
              </div>
            </div>
          </div>
        </section>
"""
content = re.sub(
    r'\{/\* SERVICES EXPERTISE \*/\}.*?(?=\{/\* WHY US \*/\})',
    services_section_new,
    content,
    flags=re.DOTALL
)

# 7. Why Us Text
content = re.sub(
    r'<p className="fs-why-desc".*?>.*?</p>',
    '<p className="fs-why-desc" style={{ fontSize: "16px", fontWeight: "500", lineHeight: "1.6", marginBottom: "30px" }}>\n                <strong>Built around your actual workflow:</strong> No forcing your business logic into a generic template.<br/><br/><strong>Direct access:</strong> You work directly with the developer.<br/><br/><strong>Architecture that scales:</strong> Database and system design decisions are made with growth in mind.<br/><br/><strong>Weekly visible progress:</strong> You see a working, clickable version of your application every week.\n              </p>',
    content,
    flags=re.DOTALL
)

# 8. Tech Stack -> Common Types of Web Applications We Build
# Wait, let's just leave the Tech Stack visual intact, maybe change the title and content.
tech_section_new = """
        {/* TECH EXPERTISE */}
        <section className="fs-tech">
          <div className="fs-container fs-tech-grid">
            <div className="fs-tech-text">
              <div className="fs-tag-arrows-blue">APPLICATIONS</div>
              <h2>Common Types of Web Applications We Build</h2>
              <p>
                Concrete examples help both SEO — capturing specific-use-case searches — and help visitors self-identify their need.
              </p>
              <Link to="/contact-us" className="fs-btn-outline-blue">
                Discuss Your Idea <ArrowRight />
              </Link>
            </div>
            <div className="fs-tech-cards">
              <div className="fs-tech-card-outer">
                <div className="fs-tech-card-inner fs-tech-card-front">
                  <h3 style={{fontSize: '24px', fontWeight: '800', color: '#0b0f19', marginBottom: '12px'}}>Internal tools & dashboards</h3>
                  <p style={{fontSize: '15px', color: '#475569', lineHeight: '1.5'}}>Replace messy spreadsheets with a proper system your team actually wants to use.</p>
                </div>
              </div>
              <div className="fs-tech-card-outer">
                <div className="fs-tech-card-inner fs-tech-card-back">
                  <h3 style={{fontSize: '24px', fontWeight: '800', color: '#0b0f19', marginBottom: '12px'}}>Client/customer portals</h3>
                  <p style={{fontSize: '15px', color: '#475569', lineHeight: '1.5'}}>Let your clients log in, track status, and access their own data securely.</p>
                </div>
              </div>
              <div className="fs-tech-card-outer">
                <div className="fs-tech-card-inner fs-tech-card-db">
                  <h3 style={{fontSize: '24px', fontWeight: '800', color: '#0b0f19', marginBottom: '12px'}}>Booking & scheduling systems</h3>
                  <p style={{fontSize: '15px', color: '#475569', lineHeight: '1.5'}}>Real-time availability, confirmations, and admin management.</p>
                </div>
              </div>
              <div className="fs-tech-card-outer">
                <div className="fs-tech-card-inner fs-tech-card-front">
                  <h3 style={{fontSize: '24px', fontWeight: '800', color: '#0b0f19', marginBottom: '12px'}}>SaaS products & Admin panels</h3>
                  <p style={{fontSize: '15px', color: '#475569', lineHeight: '1.5'}}>Subscription-based software products built to onboard and scale with real users. Custom backends for managing content and operations.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
"""
content = re.sub(
    r'\{/\* TECH EXPERTISE \*/\}.*?(?=\{/\* API / CTA MODULE \*/\})',
    tech_section_new,
    content,
    flags=re.DOTALL
)

# 9. Who is this for? -> Who This Service Is For
audience_section_new = """
        {/* WHO IS THIS FOR? */}
        <section className="fs-audience">
          <div className="fs-container">
            <div className="fs-tag-arrows">WHO IT'S FOR</div>
            <h2 style={{color: 'white', marginBottom: '50px'}}>Who This Service Is For</h2>
            <div className="fs-audience-grid">
              <div className="fs-audience-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                  <h3>Startups</h3>
                  <div className="fs-audience-icon"><ArrowRight /></div>
                </div>
                <p>Startups building a core product that needs real functionality, not just a landing page.</p>
                <Link to="/contact-us" className="fs-audience-link">View Case Studies <ArrowRight /></Link>
              </div>
              <div className="fs-audience-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                  <h3>Businesses</h3>
                  <div className="fs-audience-icon"><ArrowRight /></div>
                </div>
                <p>Businesses replacing manual processes (spreadsheets, email chains) with a proper internal system.</p>
                <Link to="/contact-us" className="fs-audience-link">Explore Solutions <ArrowRight /></Link>
              </div>
              <div className="fs-audience-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                  <h3>Companies</h3>
                  <div className="fs-audience-icon"><ArrowRight /></div>
                </div>
                <p>Companies that need a client-facing portal for account management, order tracking, or service delivery.</p>
                <Link to="/contact-us" className="fs-audience-link">Learn More <ArrowRight /></Link>
              </div>
              <div className="fs-audience-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                  <h3>Growing Teams</h3>
                  <div className="fs-audience-icon"><ArrowRight /></div>
                </div>
                <p>Teams outgrowing what a no-code tool or generic template can handle.</p>
                <Link to="/contact-us" className="fs-audience-link">Get Started <ArrowRight /></Link>
              </div>
            </div>
          </div>
        </section>
"""
content = re.sub(
    r'\{/\* WHO IS THIS FOR\? \*/\}.*?(?=\{/\* PROCESS \*/\})',
    audience_section_new,
    content,
    flags=re.DOTALL
)

# 10. Process Section
process_section_new = """
        {/* PROCESS */}
        <section className="fs-process">
          <div className="fs-container">
            <div className="fs-process-header-wrap">
              <div className="fs-process-header-left">
                <div className="fs-process-tag-lines">OUR PROCESS</div>
                <h2 style={{fontSize: '44px', fontWeight: '800', lineHeight: '1.2'}}>How We Build</h2>
              </div>
              <p style={{fontSize: '16px', opacity: '0.9', maxWidth: '400px', lineHeight: '1.6'}}>
                Our approach to web application development.
              </p>
            </div>
            
            <div className="fs-process-grid">
              <div className="fs-process-card">
                <div className="fs-process-num">01</div>
                <h3>Discovery Call</h3>
                <p>We map out your actual workflow — who the users are, what they need to do, and what "done" looks like realistically.</p>
              </div>
              <div className="fs-process-card">
                <div className="fs-process-num">02</div>
                <h3>System Design & Proposal</h3>
                <p>A clear proposal covering the data model, architecture, timeline, and cost — before any commitment.</p>
              </div>
              <div className="fs-process-card">
                <div className="fs-process-num">03</div>
                <h3>Build Sprints</h3>
                <p>Weekly shippable milestones. You interact with real, working features every week, with room to give feedback as we go.</p>
              </div>
              <div className="fs-process-card">
                <div className="fs-process-num">04</div>
                <h3>Testing & Review</h3>
                <p>Edge cases, role-based access, and cross-device testing before launch — not caught for the first time by real users.</p>
              </div>
              <div className="fs-process-card">
                <div className="fs-process-num">05</div>
                <h3>Launch & Handover</h3>
                <p>Live deployment, documentation, and a defined post-launch support window.</p>
              </div>
            </div>
          </div>
        </section>
"""
content = re.sub(
    r'\{/\* PROCESS \*/\}.*?(?=\{/\* FAQ \*/\})',
    process_section_new,
    content,
    flags=re.DOTALL
)

# 11. FAQ Section
faq_items = [
    {
        "q": "What's the difference between a website and a web application?",
        "a": "A website is primarily informational — pages that display content, mostly static. A web application is interactive software — it lets users log in, perform actions, and get real-time results, backed by a database and custom business logic. If your project needs user accounts, dashboards, or workflows specific to your business, you need a web application, not just a website."
    },
    {
        "q": "Can a web application also include a public-facing website?",
        "a": "Yes — many projects combine both: a public marketing site alongside a logged-in application area (a dashboard, portal, or product). This is common for SaaS products and client portals, and gets scoped together during the discovery call."
    },
    {
        "q": "How much does a custom web application cost?",
        "a": "It depends entirely on scope — a simple internal tool with a few workflows costs significantly less than a multi-role platform with complex logic and integrations. You'll get a clear, itemized quote after the discovery call, not a vague range."
    },
    {
        "q": "Do I need to know exactly what I want before the discovery call?",
        "a": "No. Part of the discovery process is helping translate a rough idea or a messy current process (like a spreadsheet-based workflow) into a clear technical scope. Coming in with an imperfect idea is completely normal."
    },
    {
        "q": "Will the application be able to handle more users as we grow?",
        "a": "Yes — scalability is factored into the architecture from the start, not treated as an afterthought. That said, the specific scaling approach depends on your growth pattern, which gets discussed as part of system design."
    },
    {
        "q": "What happens if we need new features after launch?",
        "a": "Every project includes a defined post-launch support window for bug fixes. New features beyond the original scope can be added as a separate, clearly-scoped phase whenever you're ready."
    }
]

faq_elements = ""
for i, item in enumerate(faq_items):
    template = """
              <div className="fs-faq-item">
                <button className={`fs-faq-question ${openFaq === {i} ? 'open' : ''}`} onClick={() => toggleFaq({i})}>
                  {q}
                  <span className="fs-faq-icon">+</span>
                </button>
                <div className="fs-faq-answer" style={{ maxHeight: openFaq === {i} ? '200px' : '0' }}>
                  <div className="fs-faq-answer-inner">{a}</div>
                </div>
              </div>"""
    faq_elements += template.replace("{i}", str(i)).replace("{q}", item["q"]).replace("{a}", item["a"])

faq_section_new = """
        {/* FAQ */}
        <section className="fs-faq-section">
          <div className="fs-container fs-faq-grid">
            <div className="fs-faq-text">
              <div className="fs-tag-arrows-blue" style={{marginBottom: '20px'}}>FAQ</div>
              <h2 style={{fontSize: '44px', fontWeight: '800', color: '#0b0f19', marginBottom: '40px', lineHeight: '1.2'}}>Got questions?</h2>
              <div className="fs-faq-list">
""" + faq_elements + """
              </div>
            </div>
            <div className="fs-faq-images">
              <div className="fs-faq-img-main"></div>
              <div className="fs-faq-img-small"></div>
            </div>
          </div>
        </section>
"""
content = re.sub(
    r'\{/\* FAQ \*/\}.*?(?=\{/\* BOTTOM CTA \*/\})',
    faq_section_new,
    content,
    flags=re.DOTALL
)

# 12. Bottom CTA
bottom_cta_new = """
        {/* BOTTOM CTA */}
        <section className="fs-cta-bottom" style={{ background: '#0b0f19', color: 'white', padding: '100px 0', textAlign: 'center' }}>
          <div className="fs-container">
            <h2 style={{ fontSize: '48px', fontWeight: '800', marginBottom: '24px' }}>Have a workflow that needs real software, not a spreadsheet?</h2>
            <p style={{ fontSize: '18px', color: '#94a3b8', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
              Tell me what you're trying to build or replace. You'll get an honest scope, timeline, and quote — usually within a day.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
              <Link to="/contact-us" className="fs-btn fs-btn-primary">Get a Free Quote <ArrowRight /></Link>
              <a href="mailto:hello@novadesk.dev" className="fs-btn fs-btn-outline" style={{ border: '1px solid white', color: 'white' }}>or email hello@novadesk.dev</a>
            </div>
          </div>
        </section>
"""
content = re.sub(
    r'\{/\* BOTTOM CTA \*/\}.*?(?=      </div>\n    </>\n  \);\n\})',
    bottom_cta_new,
    content,
    flags=re.DOTALL
)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
