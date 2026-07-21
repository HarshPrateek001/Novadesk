const fs = require('fs');

const filePath = 'd:\\Personal\\Agency\\NOVADESK\\src\\pages\\Home.jsx';
let content = fs.readFileSync(filePath, 'utf8');

// 1. Replace Hero Right CSS
const oldCSS = `        /* RIGHT SIDE — DIRECT IMAGE */
        .nd-hero-right { position:relative; display:flex; flex-direction:column; align-items:center; justify-content:center; z-index:5; }
        .nd-hero-direct-img { width:100%; max-width:500px; display:block; border-radius:24px; margin-top:-85px; transition:transform 0.4s cubic-bezier(0.16,1,0.3,1); cursor:pointer; }
        .nd-hero-direct-img:hover { transform:translateY(-8px) scale(1.03); }
        .nd-hero-img-caption { 
          text-align: center; 
          margin-top: -50px; 
          position: relative; 
          z-index: 10; 
          background: rgba(255, 255, 255, 0.72); 
          backdrop-filter: blur(14px); 
          -webkit-backdrop-filter: blur(14px); 
          border: 1px solid rgba(46, 41, 255, 0.12); 
          border-radius: 20px; 
          padding: 16px 28px; 
          box-shadow: 0 15px 35px rgba(46, 41, 255, 0.06); 
          animation: fadeInUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) both;
          animation-delay: 0.3s;
        }
        .nd-hero-img-caption h3 { font-size: 21px; font-weight: 800; color: #0A0A2E; margin-bottom: 4px; line-height: 1.2; text-transform: uppercase; letter-spacing: 0.5px; }
        .nd-hero-img-caption h4 { font-size: 21px; font-weight: 800; color: #2E29FF; line-height: 1.2; margin: 0; text-transform: uppercase; letter-spacing: 0.5px; }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* TRUST BADGES BELOW IMAGE */
        .nd-trust-badges { display:grid; grid-template-columns:repeat(3,1fr); gap:12px; margin-top:40px; }
        .nd-trust-card { background:#fff; border:1px solid rgba(46,41,255,0.1); border-radius:12px; padding:16px 20px; display:flex; align-items:center; gap:12px; box-shadow:0 2px 12px rgba(46,41,255,0.06); transition:all .2s; }
        .nd-trust-card:hover { border-color:#2E29FF; transform:translateY(-2px); box-shadow:0 8px 24px rgba(46,41,255,0.1); }
        .nd-trust-icon { width:36px; height:36px; border-radius:8px; display:flex; align-items:center; justify-content:center; font-size:18px; flex-shrink:0; }
        .nd-trust-name { font-size:13px; font-weight:700; color:#0A0A2E; line-height:1.2; }
        .nd-trust-label { font-size:11px; color:#6B7280; font-weight:400; text-transform:uppercase; letter-spacing:0.4px; margin-top:2px; }`;

const newCSS = `        /* RIGHT SIDE — BENTO GRID COLLAGE */
        .nd-hero-right { position:relative; display:flex; align-items:center; justify-content:center; z-index:5; perspective: 1000px; }
        .nd-hero-bento-grid {
          display: grid;
          grid-template-columns: repeat(3, 160px);
          grid-template-rows: repeat(3, 160px);
          gap: 16px;
          transform: rotateX(5deg) rotateY(-10deg);
          transform-style: preserve-3d;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .nd-hero-bento-grid:hover {
          transform: rotateX(0deg) rotateY(0deg);
        }
        .nd-bento-item {
          background: #f4f6fa;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          position: relative;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          border: 1px solid rgba(255,255,255,0.6);
        }
        .nd-bento-item:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 15px 35px rgba(46, 41, 255, 0.15);
          z-index: 10;
        }
        .nd-bento-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .nd-bento-1 { grid-column: span 1; grid-row: span 2; }
        .nd-bento-2 { grid-column: span 1; grid-row: span 1; }
        .nd-bento-3 { grid-column: span 1; grid-row: span 2; }
        .nd-bento-4 { grid-column: span 1; grid-row: span 1; }
        .nd-bento-5 { grid-column: span 2; grid-row: span 1; }
        
        @media (max-width: 1024px) {
          .nd-hero-inner { grid-template-columns: 1fr; text-align: center; gap: 40px; }
          .nd-hero-left { padding-bottom: 0; display: flex; flex-direction: column; align-items: center; }
          .nd-subtext, .nd-subtext-sm, .nd-industries { margin-left: auto; margin-right: auto; }
          .nd-hero-bento-grid { transform: none; grid-template-columns: repeat(2, 1fr); grid-template-rows: auto; width: 100%; max-width: 500px; margin: 0 auto; }
          .nd-bento-1 { grid-column: span 1; grid-row: span 1; aspect-ratio: 1; }
          .nd-bento-2 { grid-column: span 1; grid-row: span 1; aspect-ratio: 1; }
          .nd-bento-3 { grid-column: span 2; grid-row: span 1; aspect-ratio: 2/1; }
          .nd-bento-4 { display: none; }
          .nd-bento-5 { display: none; }
        }`;

content = content.replace(oldCSS, newCSS);

// 2. Replace Hero HTML
const oldHTML = `            {/* LEFT */}
            <div className="nd-hero-left">
              <div className="nd-eyebrow">
                <span className="nd-sparkle">✦</span>
                TOP SOFTWARE DEVELOPMENT AGENCY IN INDIA
              </div>
              <h1 className="nd-h1">India's Premier</h1>
              <h2 className="nd-h1-blue">Full-Stack &amp; AI Studio</h2>
              <p className="nd-subtext">
                Partner with top-tier developers to build scalable custom web apps, mobile solutions, SaaS platforms, and enterprise AI software. We turn your vision into high-performance digital products.
              </p>
              <p className="nd-subtext-sm">
                Trusted by early-stage founders and venture-backed teams. Hire expert offshore developers from India for high-quality engineering.
              </p>
              <p className="nd-industries">
                <strong>Fintech, Healthcare, EdTech, Logistics, SaaS, E-commerce.</strong> We bring engineering depth, product thinking, and the execution speed your business actually needs.
              </p>
              <div className="nd-cta-row">
                <Link to="/contact-us" className="nd-btn-primary">Book a Free 30-Min Call ↗</Link>
              </div>
              <div className="nd-rating-row">
                <div className="nd-avatars">
                  {['P','R','S'].map((l,i) => <div key={i} className="nd-avatar">{l}</div>)}
                </div>
                <div>
                  <div className="nd-stars">{[...Array(5)].map((_,i) => <IconStar key={i} />)}</div>
                  <div className="nd-rating-text">Trusted by 1,250+ Businesses Globally</div>
                </div>
              </div>
            </div>

            {/* RIGHT — DIRECT IMAGE WITHOUT FRAMES OR BADGES */}
            <div className="nd-hero-right">
              <img src="/hero-my-image.webp" alt="NOVADESK software development studio" className="nd-hero-direct-img" />
              <div className="nd-hero-img-caption">
                <h3>Founder & Lead Engineer, NOVADESK</h3>
                <h2>HARSH PRATEEK</h2>
              </div>
            </div>`;

const newHTML = `            {/* LEFT */}
            <div className="nd-hero-left">
              <div className="nd-eyebrow">
                <span className="nd-sparkle">✦</span>
                BUILD WITH THE BEST
              </div>
              <h1 className="nd-h1" style={{ color: '#0A0A2E', fontSize: '64px', fontWeight: '800', lineHeight: '1.1', letterSpacing: '-2px', marginBottom: '16px' }}>
                Build Better<br/>Digital Experiences.
              </h1>
              <p className="nd-subtext" style={{ fontSize: '18px', color: '#4B5563', maxWidth: '520px', marginBottom: '32px', lineHeight: '1.6' }}>
                Partner with top-tier developers to build scalable custom web apps, mobile solutions, SaaS platforms, and enterprise AI software. We turn your vision into high-performance digital products.
              </p>
              <div className="nd-cta-row" style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
                <Link to="/contact-us" className="nd-btn-primary" style={{ padding: '16px 36px', fontSize: '16px', borderRadius: '50px', background: '#0d6efd', color: '#fff', boxShadow: '0 4px 14px rgba(13,110,253,0.3)' }}>
                  Get Started
                </Link>
                <div className="nd-rating-row" style={{ background: '#f8f9fa', padding: '10px 20px', borderRadius: '50px', border: '1px solid #e9ecef', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div className="nd-stars" style={{ color: '#0d6efd', display: 'flex' }}>{[...Array(5)].map((_,i) => <IconStar key={i} />)}</div>
                  <div className="nd-rating-text" style={{ fontSize: '14px', fontWeight: '600' }}>Reviewed on Clutch</div>
                </div>
              </div>
            </div>

            {/* RIGHT — BENTO COLLAGE */}
            <div className="nd-hero-right">
              <div className="nd-hero-bento-grid">
                <div className="nd-bento-item nd-bento-1">
                  <img src="/react_hero_illustration.webp" alt="React Development" />
                </div>
                <div className="nd-bento-item nd-bento-2" style={{ background: '#0d6efd', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <IconCode style={{ color: '#fff', width: '40px', height: '40px' }} />
                </div>
                <div className="nd-bento-item nd-bento-3">
                  <img src="/webapp_hero_illustration.webp" alt="Web App UI" />
                </div>
                <div className="nd-bento-item nd-bento-4">
                  <img src="/fullstack_hero_illustration.webp" alt="Full Stack Dev" />
                </div>
                <div className="nd-bento-item nd-bento-5">
                  <img src="/hero-realistic.webp" alt="Digital Experience" />
                </div>
              </div>
            </div>`;

content = content.replace(oldHTML, newHTML);

fs.writeFileSync(filePath, content);
console.log('Hero section updated successfully.');
