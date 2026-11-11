import React, { useState } from 'react';
import { submitLeadPayload } from '../../services/novaAiService';

const GOOGLE_SCRIPT_FALLBACK = "https://script.google.com/macros/s/AKfycby5JEjLhCyXvkxfKEu05WEbN9HlSRs4USuCQTudEygl7Cy_3YCN1zcD3E5f5DGKUpMY/exec";

/**
 * NewsletterSection — email newsletter signup CTA.
 * Shown on the blog listing page and optionally on post pages.
 * Integrates directly with NovaDesk lead ingestion backend and Google Apps Script.
 */
export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cleanEmail = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!cleanEmail || !emailRegex.test(cleanEmail)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    const leadPayload = {
      name: 'Newsletter Subscriber',
      email: cleanEmail,
      scope: 'Newsletter Subscription',
      source: 'Blog Newsletter Section',
      budget: 'N/A',
      timeline: 'Immediate'
    };

    try {
      const result = await submitLeadPayload(leadPayload);

      // If backend failed and VITE_GOOGLE_SCRIPT_URL wasn't configured, fallback to Google Apps Script directly
      if (!result?.backendSuccess && !import.meta.env.VITE_GOOGLE_SCRIPT_URL) {
        try {
          const payload = new URLSearchParams();
          payload.append('name', leadPayload.name);
          payload.append('email', leadPayload.email);
          payload.append('scope', leadPayload.scope);
          payload.append('source', leadPayload.source);
          payload.append('submittedAt', new Date().toISOString());

          await fetch(GOOGLE_SCRIPT_FALLBACK, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: payload.toString()
          });
        } catch (scriptErr) {
          console.warn('[Newsletter] Fallback script sync warning:', scriptErr);
        }
      }

      setStatus('success');
      setEmail('');
    } catch (err) {
      console.error('[Newsletter] Submission error:', err);
      setStatus('error');
      setErrorMessage('Unable to subscribe at this moment. Please try again.');
    }
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
              disabled={status === 'loading'}
              aria-label="Your email address"
              aria-describedby={status === 'error' ? 'newsletter-error' : undefined}
            />
            <button 
              type="submit" 
              className="newsletter-form__btn"
              disabled={status === 'loading'}
              style={{ opacity: status === 'loading' ? 0.7 : 1, cursor: status === 'loading' ? 'not-allowed' : 'pointer' }}
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
        )}

        {status === 'error' && (
          <p id="newsletter-error" style={{ color: '#fca5a5', fontSize: '13px', marginTop: '8px' }}>
            {errorMessage || 'Please enter a valid email address.'}
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
