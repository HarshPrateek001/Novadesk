import React from 'react';
import { ShieldAlert, Award, Globe, Users } from 'lucide-react';

export default function AboutUs() {
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Intro section */}
      <section style={{ padding: '100px 0 80px 0', background: 'var(--color-cream)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <span style={{ color: 'var(--color-secondary)', fontWeight: 'bold', fontSize: '14px', textTransform: 'uppercase' }}>OUR STORY</span>
          <h1 style={{ fontSize: '48px', margin: '12px 0 24px 0', lineHeight: '1.2' }}>
            Empowering Startups and Enterprises with Premium Tech Pods
          </h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '18px' }}>
            EngineerBabu clone is a premier software engineering agency. We configure highly optimized offshore teams for businesses requiring custom Web apps, mobile systems, and AI deployments.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section style={{ padding: '100px 0', background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2>Our Core Engineering Values</h2>
          </div>

          <div className="grid-4">
            <div style={{ padding: '32px 24px', background: 'var(--color-light-bg)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(61, 35, 20, 0.05)' }}>
              <div style={{ color: 'var(--color-primary)', marginBottom: '16px' }}><Award size={32} /></div>
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>High Integrity</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '14px' }}>Transparent communication, clear IP allocation, and weekly source-code handovers.</p>
            </div>

            <div style={{ padding: '32px 24px', background: 'var(--color-light-bg)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(61, 35, 20, 0.05)' }}>
              <div style={{ color: 'var(--color-primary)', marginBottom: '16px' }}><Globe size={32} /></div>
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>Global Speed</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '14px' }}>Teams deploy in 7 days with senior engineering leads managing execution.</p>
            </div>

            <div style={{ padding: '32px 24px', background: 'var(--color-light-bg)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(61, 35, 20, 0.05)' }}>
              <div style={{ color: 'var(--color-primary)', marginBottom: '16px' }}><Users size={32} /></div>
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>Talent Quality</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '14px' }}>Rigorous testing process ensuring only the top 2% of engineers are hired.</p>
            </div>

            <div style={{ padding: '32px 24px', background: 'var(--color-light-bg)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(61, 35, 20, 0.05)' }}>
              <div style={{ color: 'var(--color-primary)', marginBottom: '16px' }}><ShieldAlert size={32} /></div>
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>IP Protection</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '14px' }}>100% legal coverage, NDA agreements, and secure sandbox development environments.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
