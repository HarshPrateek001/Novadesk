import React, { useState } from 'react';

/**
 * NewsletterSection — email newsletter signup CTA.
 * Shown on the blog listing page and optionally on post pages.
 *
 * In a real implementation, the onSubmit handler would call
 * a Mailchimp/ConvertKit/Brevo API endpoint.
 */
export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | success | error

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes('@')) {
      setStatus('error');
      return;
    }
    // TODO: Connect to your email service provider (Mailchimp, ConvertKit, etc.)
    console.log('[Newsletter] Subscriber email:', email);
    setStatus('success');
    setEmail('');
  };

  return (
    <section className="newsletter-section" aria-label="Newsletter signup">
      <div className="newsletter-section__inner">
        <span className="newsletter-section__tag">Newsletter</span>

        <h2 className="newsletter-section__title">
          Stay Ahead in Tech
        </h2>
        <p className="newsletter-section__subtitle">
          Get weekly insights on software development, AI trends, and digital strategy — straight to your inbox.
        </p>

        {status === 'success' ? (
          <div style={{
            background: 'rgba(16, 185, 129, 0.2)',
            border: '1px solid rgba(16, 185, 129, 0.4)',
            borderRadius: '12px',
            padding: '16px 24px',
            color: '#d1fae5',
            fontWeight: '600',
            fontSize: '15px',
          }}>
            ✅ You're subscribed! Welcome to the NovaDesk community.
          </div>
        ) : (
          <form className="newsletter-form" onSubmit={handleSubmit} noValidate>
            <input
              type="email"
              className="newsletter-form__input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              aria-label="Your email address"
              aria-describedby={status === 'error' ? 'newsletter-error' : undefined}
            />
            <button type="submit" className="newsletter-form__btn">
              Subscribe
            </button>
          </form>
        )}

        {status === 'error' && (
          <p id="newsletter-error" style={{ color: '#fca5a5', fontSize: '13px', marginTop: '8px' }}>
            Please enter a valid email address.
          </p>
        )}

        <p className="newsletter-section__note">
          No spam. Unsubscribe anytime. Read our{' '}
          <a href="/privacy-policy" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'underline' }}>
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </section>
  );
}

export default NewsletterSection;
