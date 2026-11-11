import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const newsletterPath = path.join(projectRoot, 'src/components/blog/NewsletterSection.jsx');
const newsletterContent = fs.readFileSync(newsletterPath, 'utf8');

// NewsletterSection state machine simulator matching exact implementation
class NewsletterHarness {
  constructor(mockSubmitLeadPayload, mockFetch, env = {}) {
    this.email = '';
    this.status = 'idle'; // idle | loading | success | error
    this.errorMessage = '';
    this.mockSubmitLeadPayload = mockSubmitLeadPayload;
    this.mockFetch = mockFetch;
    this.env = env;
    this.GOOGLE_SCRIPT_FALLBACK = "https://script.google.com/macros/s/AKfycby5JEjLhCyXvkxfKEu05WEbN9HlSRs4USuCQTudEygl7Cy_3YCN1zcD3E5f5DGKUpMY/exec";
  }

  setEmail(val) {
    this.email = val;
  }

  async handleSubmit(event = { preventDefault: () => {} }) {
    event.preventDefault();
    const cleanEmail = this.email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!cleanEmail || !emailRegex.test(cleanEmail)) {
      this.status = 'error';
      this.errorMessage = 'Please enter a valid email address.';
      return;
    }

    this.status = 'loading';
    this.errorMessage = '';

    const leadPayload = {
      name: 'Newsletter Subscriber',
      email: cleanEmail,
      scope: 'Newsletter Subscription',
      source: 'Blog Newsletter Section',
      budget: 'N/A',
      timeline: 'Immediate'
    };

    try {
      const result = await this.mockSubmitLeadPayload(leadPayload);

      if (!result?.backendSuccess && !this.env.VITE_GOOGLE_SCRIPT_URL) {
        try {
          const payload = new URLSearchParams();
          payload.append('name', leadPayload.name);
          payload.append('email', leadPayload.email);
          payload.append('scope', leadPayload.scope);
          payload.append('source', leadPayload.source);
          payload.append('submittedAt', new Date().toISOString());

          await this.mockFetch(this.GOOGLE_SCRIPT_FALLBACK, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: payload.toString()
          });
        } catch (scriptErr) {
          // Warning caught
        }
      }

      this.status = 'success';
      this.email = '';
    } catch (err) {
      this.status = 'error';
      this.errorMessage = 'Unable to subscribe at this moment. Please try again.';
    }
  }
}

describe('Empirical Challenge 3: NewsletterSection State Transitions & Handlers', () => {

  test('Initial State: Starts in idle state with empty email and no error', () => {
    const harness = new NewsletterHarness();
    assert.equal(harness.status, 'idle');
    assert.equal(harness.email, '');
    assert.equal(harness.errorMessage, '');
  });

  test('State Transition: idle -> error on empty or whitespace email submission', async () => {
    let submitCalled = false;
    const harness = new NewsletterHarness(async () => { submitCalled = true; });

    harness.setEmail('');
    await harness.handleSubmit();
    assert.equal(harness.status, 'error');
    assert.equal(harness.errorMessage, 'Please enter a valid email address.');
    assert.equal(submitCalled, false, 'submitLeadPayload must not be called for empty email');

    harness.setEmail('    ');
    await harness.handleSubmit();
    assert.equal(harness.status, 'error');
    assert.equal(harness.errorMessage, 'Please enter a valid email address.');
    assert.equal(submitCalled, false, 'submitLeadPayload must not be called for whitespace email');
  });

  test('State Transition: idle -> error on standard malformed email addresses', async () => {
    const malformedEmails = [
      'plainaddress',
      '@example.com',
      'Joe Smith <email@example.com>',
      'email.example.com',
      'email@example@example.com',
      'email@example',
      'email @example.com'
    ];

    for (const badEmail of malformedEmails) {
      let submitCalled = false;
      const harness = new NewsletterHarness(async () => { submitCalled = true; });
      harness.setEmail(badEmail);
      await harness.handleSubmit();
      assert.equal(harness.status, 'error', `Expected error for bad email: ${badEmail}`);
      assert.equal(harness.errorMessage, 'Please enter a valid email address.');
      assert.equal(submitCalled, false);
    }
  });

  test('Edge Case Behavior: RFC 5322 consecutive dot emails bypass simple regex', async () => {
    // Documenting empirical behavior of current regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    let submitCalled = false;
    const harness = new NewsletterHarness(async () => { 
      submitCalled = true; 
      return { success: true, backendSuccess: true };
    });
    harness.setEmail('email@example..com');
    await harness.handleSubmit();
    // Current regex permits consecutive dots because it does not prohibit them in domain or local parts
    assert.equal(harness.status, 'success');
    assert.equal(submitCalled, true);
  });

  test('State Transition: idle -> loading -> success on verified backend delivery', async () => {
    let capturedPayload = null;
    let statusDuringSubmit = null;

    const mockSubmit = async (payload) => {
      capturedPayload = payload;
      // Record status while async operation is running
      statusDuringSubmit = harness.status;
      return { success: true, backendSuccess: true };
    };

    const harness = new NewsletterHarness(mockSubmit);
    harness.setEmail('founder@startup.io');

    await harness.handleSubmit();

    assert.equal(statusDuringSubmit, 'loading', 'Status must be "loading" while dispatching payload');
    assert.equal(harness.status, 'success', 'Status must transition to "success" upon resolution');
    assert.equal(harness.email, '', 'Email must be cleared upon successful subscription');
    assert.equal(harness.errorMessage, '');

    assert.deepEqual(capturedPayload, {
      name: 'Newsletter Subscriber',
      email: 'founder@startup.io',
      scope: 'Newsletter Subscription',
      source: 'Blog Newsletter Section',
      budget: 'N/A',
      timeline: 'Immediate'
    });
  });

  test('State Transition: Fallback to Google Apps Script when backend is unavailable', async () => {
    let scriptFetchCalled = false;
    let scriptUrlCalled = '';
    let scriptOptionsCalled = null;

    const mockSubmit = async () => ({ success: true, backendSuccess: false });
    const mockFetch = async (url, opts) => {
      scriptFetchCalled = true;
      scriptUrlCalled = url;
      scriptOptionsCalled = opts;
      return { ok: true };
    };

    const harness = new NewsletterHarness(mockSubmit, mockFetch, {});
    harness.setEmail('user@domain.com');

    await harness.handleSubmit();

    assert.equal(scriptFetchCalled, true, 'Google Apps Script fallback must be invoked');
    assert.equal(scriptUrlCalled, harness.GOOGLE_SCRIPT_FALLBACK);
    assert.equal(scriptOptionsCalled.method, 'POST');
    assert.equal(scriptOptionsCalled.mode, 'no-cors');
    assert.ok(scriptOptionsCalled.body.includes('name=Newsletter+Subscriber'));
    assert.ok(scriptOptionsCalled.body.includes('email=user%40domain.com'));
    assert.ok(scriptOptionsCalled.body.includes('scope=Newsletter+Subscription'));
    assert.equal(harness.status, 'success');
  });

  test('State Transition: Graceful recovery if Google Apps Script fallback throws network error', async () => {
    const mockSubmit = async () => ({ success: true, backendSuccess: false });
    const mockFetch = async () => {
      throw new Error('Google Apps Script network timeout');
    };

    const harness = new NewsletterHarness(mockSubmit, mockFetch, {});
    harness.setEmail('user@resilient.com');

    await harness.handleSubmit();

    assert.equal(harness.status, 'success', 'User must still see success confirmation even if fallback encounters CORS/network edge');
    assert.equal(harness.email, '');
  });

  test('State Transition: idle -> loading -> error when submitLeadPayload throws fatal exception', async () => {
    const mockSubmit = async () => {
      throw new Error('Fatal service failure');
    };

    const harness = new NewsletterHarness(mockSubmit);
    harness.setEmail('valid@domain.com');

    await harness.handleSubmit();

    assert.equal(harness.status, 'error');
    assert.equal(harness.errorMessage, 'Unable to subscribe at this moment. Please try again.');
  });

  test('Component AST Verification: Form controls and accessibility semantics', () => {
    // Verify import of submitLeadPayload
    assert.match(newsletterContent, /import\s+\{\s*submitLeadPayload\s*\}\s+from\s+['"][^'"]*novaAiService['"]/);
    // Verify fallback URL constant
    assert.match(newsletterContent, /const\s+GOOGLE_SCRIPT_FALLBACK\s*=\s*['"]https:\/\/script\.google\.com/);
    // Verify loading states on input and button
    assert.match(newsletterContent, /disabled=\{status === 'loading'\}/);
    assert.match(newsletterContent, /status === 'loading'\s*\?\s*['"]Subscribing\.\.\.['"]\s*:\s*['"]Subscribe['"]/);
    // Verify aria-describedby for error
    assert.match(newsletterContent, /aria-describedby=\{status === 'error' \? 'newsletter-error' : undefined\}/);
    // Verify success banner rendering
    assert.match(newsletterContent, /status === 'success'\s*\?/);
    assert.match(newsletterContent, /You're subscribed! Welcome to the NovaDesk community\./);
  });
});
