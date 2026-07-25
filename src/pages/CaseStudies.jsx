import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function CaseStudies() {
  const [filter, setFilter] = useState('all');

  const cases = [
    {
      title: 'AI Automated Customer Support Desk',
      category: 'ai',
      desc: 'Built a conversational AI desk for a leading telecom enterprise, resolving 78% of incoming L1 support tickets without human intervention.',
      metric: '78% Auto-resolution rate',
    },
    {
      title: 'Multi-Tenant SaaS Property Marketplace',
      category: 'saas',
      desc: 'Engineered a next-gen property portal with smart recommendations, online booking deposits, and automated owner vetting workflows.',
      metric: '$40M+ Gross booking volume',
    },
    {
      title: 'On-Demand Logistics & Delivery App',
      category: 'mobile',
      desc: 'A robust Flutter application package mapping real-time driver routes, route-optimization APIs, and automated billing grids.',
      metric: '120k+ Daily completed trips',
    },
  ];

  const filteredCases = filter === 'all' ? cases : cases.filter(item => item.category === filter);

  return (
    <div className="nd-case-studies-page" style={{ paddingTop: '80px', background: 'var(--color-cream)', minHeight: '100vh', paddingBottom: '100px' }}>
      <section className="nd-case-studies-hero" style={{ padding: '80px 0 40px 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <span style={{ color: 'var(--color-secondary)', fontWeight: 'bold', fontSize: '14px', textTransform: 'uppercase' }}>CASE STUDIES</span>
          <h1 style={{ fontSize: '48px', margin: '12px 0 24px 0', lineHeight: '1.2' }}>
            Products We Shipped That Made An Impact
          </h1>
          
          {/* Filters */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '32px' }}>
            {['all', 'ai', 'saas', 'mobile'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  padding: '8px 20px',
                  borderRadius: '20px',
                  border: '1px solid var(--color-primary)',
                  fontWeight: '600',
                  cursor: 'pointer',
                  background: filter === cat ? 'var(--color-primary)' : 'transparent',
                  color: filter === cat ? '#fff' : 'var(--color-primary)',
                  textTransform: 'capitalize',
                  transition: 'var(--transition)'
                }}
              >
                {cat === 'all' ? 'All Case Studies' : cat === 'ai' ? 'AI & ML' : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="grid-3">
          {filteredCases.map((item, idx) => (
            <div key={idx} style={{ background: '#fff', border: '1px solid var(--color-accent)', borderRadius: 'var(--radius-md)', padding: '32px', display: 'flex', flexDirection: 'column', justify: 'space-between', boxShadow: 'var(--shadow-sm)' }}>
              <div>
                <span style={{ fontSize: '12px', color: 'var(--color-secondary)', fontWeight: '700', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>
                  {item.category === 'ai' ? 'AI & ML' : item.category === 'saas' ? 'SaaS Platform' : 'Mobile App'}
                </span>
                <h3 style={{ fontSize: '20px', marginBottom: '16px' }}>{item.title}</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '14px', marginBottom: '24px' }}>{item.desc}</p>
              </div>
              <div style={{ borderTop: '1px solid rgba(61, 35, 20, 0.08)', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <span style={{ fontSize: '11px', color: 'var(--color-text-muted)', display: 'block' }}>KEY METRIC</span>
                  <strong style={{ fontSize: '15px', color: 'var(--color-primary)' }}>{item.metric}</strong>
                </div>
                <div style={{ color: 'var(--color-primary)' }}><ArrowUpRight size={20} /></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div style={{
          marginTop: '80px',
          textAlign: 'center',
          background: '#ffffff',
          borderRadius: '24px',
          padding: '56px 32px',
          border: '1px solid rgba(46, 41, 255, 0.1)',
          boxShadow: '0 10px 40px rgba(46, 41, 255, 0.05)'
        }}>
          <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#0A0A2E', marginBottom: '12px' }}>
            Ready to Build Your Next Big Idea?
          </h2>
          <p style={{ fontSize: '16px', color: '#64748B', maxWidth: '540px', margin: '0 auto 32px', lineHeight: '1.6' }}>
            Partner with NovaDesk for custom web applications, SaaS platforms, and enterprise AI solutions built to scale.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact-us" className="btn-primary">
              Book a Free Consultation ↗
            </Link>
            <Link to="/get-a-free-quote" className="btn-secondary">
              Get a Free Quote ↗
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
