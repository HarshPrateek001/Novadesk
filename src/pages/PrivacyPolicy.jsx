import React, { useEffect } from 'react';
import SEO from '../components/SEO';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      
      <Helmet>
        <title>Privacy Policy | NovaDesk</title>
        <meta name="description" content="Read the NovaDesk Privacy Policy. Learn how we collect, use, and protect your data when you use our software development and consulting services." />
        <meta name="keywords" content="Privacy policy, data protection, NovaDesk privacy" />
        <meta property="og:title" content="Privacy Policy | NovaDesk" />
        <meta property="og:description" content="Read the NovaDesk Privacy Policy. Learn how we collect, use, and protect your data when you use our software development and consulting services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.novadesk.site" />
      </Helmet>
<SEO 
        title="Privacy Policy"
        description="NovaDesk Privacy Policy - Learn how we collect, use, and protect your data."
        url="/privacy-policy"
      />
      <style>{`
        .privacy-page {
          padding: 120px 20px 80px;
          max-width: 800px;
          margin: 0 auto;
          font-family: 'Space Grotesk', sans-serif;
          color: #374151;
          line-height: 1.8;
        }
        .privacy-page h1 {
          font-size: 36px;
          font-weight: 800;
          color: #0A0A2E;
          margin-bottom: 12px;
          line-height: 1.2;
        }
        .privacy-page .last-updated {
          font-size: 14px;
          color: #6B7280;
          margin-bottom: 40px;
          font-weight: 600;
        }
        .privacy-page h2 {
          font-size: 24px;
          font-weight: 700;
          color: #0A0A2E;
          margin-top: 48px;
          margin-bottom: 16px;
          border-bottom: 1px solid rgba(46, 41, 255, 0.1);
          padding-bottom: 8px;
        }
        .privacy-page h3 {
          font-size: 18px;
          font-weight: 700;
          color: #0A0A2E;
          margin-top: 24px;
          margin-bottom: 12px;
        }
        .privacy-page p {
          margin-bottom: 16px;
        }
        .privacy-page ul {
          margin-bottom: 24px;
          padding-left: 24px;
        }
        .privacy-page li {
          margin-bottom: 8px;
        }
        .privacy-page strong {
          color: #0A0A2E;
        }
        .privacy-page hr {
          border: 0;
          border-top: 1px dashed rgba(46, 41, 255, 0.2);
          margin: 40px 0;
        }
        @media (max-width: 768px) {
          .privacy-page {
            padding: 100px 20px 60px;
          }
          .privacy-page h1 {
            font-size: 28px;
          }
          .privacy-page h2 {
            font-size: 20px;
          }
        }
      `}</style>
      <div className="privacy-page">
        <h1>Privacy Policy — NovaDesk</h1>
        <div className="last-updated">Last Updated: July 2026</div>

        <p>NovaDesk ("we," "us," "our," "NovaDesk") operates novadesk.dev (the "Site") and provides full-stack and AI development services (the "Services"). This Privacy Policy explains how we collect, use, disclose, and protect information when you visit our Site or engage our Services.</p>

        <p>By using this Site or contacting us through it, you agree to the practices described in this policy. If you do not agree, please do not use the Site.</p>

        <hr />

        <h2>1. Information We Collect</h2>

        <h3>1.1 Information You Provide Directly</h3>
        <p>When you interact with our Site or engage our Services, we may collect:</p>
        <ul>
          <li><strong>Contact form submissions</strong>: Name, email address, project type, and project details you enter.</li>
          <li><strong>Email correspondence</strong>: Any information you share when emailing us directly (e.g., hello@novadesk.dev).</li>
          <li><strong>Project-related information</strong>: If you become a client, we may collect additional details necessary to deliver the Services — such as business information, technical requirements, login credentials for third-party tools (handled securely and only as needed), and project documentation you share with us.</li>
          <li><strong>Payment information</strong>: If applicable, billing details processed through third-party payment processors (we do not directly store full card numbers).</li>
        </ul>

        <h3>1.2 Information Collected Automatically</h3>
        <p>When you visit the Site, we may automatically collect:</p>
        <ul>
          <li><strong>Usage data</strong>: Pages visited, time spent on the Site, referring URLs, and interaction patterns.</li>
          <li><strong>Device and browser information</strong>: IP address, browser type, operating system, device type.</li>
          <li><strong>Cookies and similar technologies</strong>: See Section 5 below.</li>
        </ul>

        <h3>1.3 Information from Third Parties</h3>
        <p>If you reach us via a third-party platform (e.g., LinkedIn, Upwork, a referral), we may receive information you've made available on that platform, such as your name, profile details, or message content.</p>

        <hr />

        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Respond to inquiries and project requests submitted via the contact form or email</li>
          <li>Provide, deliver, and manage the Services you've engaged us for</li>
          <li>Communicate with you about your project, including updates, invoices, and support</li>
          <li>Improve the Site's functionality, content, and user experience</li>
          <li>Maintain security and prevent fraud or misuse of the Site</li>
          <li>Comply with legal obligations (e.g., tax and accounting requirements)</li>
        </ul>
        <p>We do <strong>not</strong> sell your personal information to third parties.</p>

        <hr />

        <h2>3. Legal Basis for Processing (For Visitors in the EU/UK)</h2>
        <p>If you are located in the European Economic Area or United Kingdom, we process your information based on:</p>
        <ul>
          <li><strong>Consent</strong> — when you voluntarily submit information via our contact form</li>
          <li><strong>Contractual necessity</strong> — when processing is required to deliver Services you've engaged us for</li>
          <li><strong>Legitimate interests</strong> — for Site analytics, security, and improving our Services, provided this doesn't override your rights</li>
        </ul>

        <hr />

        <h2>4. How We Share Your Information</h2>
        <p>We may share your information with:</p>
        <ul>
          <li><strong>Service providers</strong>: Third-party tools we use to operate our business, such as hosting providers (e.g., Vercel), database/backend services (e.g., Supabase), email services, and analytics tools. These providers only receive the information necessary to perform their function and are bound by confidentiality obligations.</li>
          <li><strong>Legal compliance</strong>: If required by law, regulation, legal process, or government request.</li>
          <li><strong>Business transfers</strong>: If NovaDesk is involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction — you will be notified of any such change.</li>
        </ul>
        <p>We do not share your information with third parties for their own independent marketing purposes.</p>

        <hr />

        <h2>5. Cookies and Tracking Technologies</h2>
        <p>Our Site may use cookies and similar technologies to:</p>
        <ul>
          <li>Remember your preferences</li>
          <li>Understand how visitors use the Site (via analytics tools, if implemented)</li>
          <li>Improve Site performance</li>
        </ul>
        <p>You can control or disable cookies through your browser settings. Disabling cookies may affect certain Site functionality.</p>

        <hr />

        <h2>6. Data Retention</h2>
        <p>We retain personal information only as long as necessary to:</p>
        <ul>
          <li>Fulfill the purposes described in this policy</li>
          <li>Comply with legal, accounting, or reporting obligations</li>
          <li>Resolve disputes and enforce agreements</li>
        </ul>
        <p>Contact form submissions and inquiry-related data not converted into a client engagement are retained for a reasonable period (e.g., 12 months) and then deleted, unless you request earlier deletion.</p>
        <p>Client project data is retained for the duration of the engagement and a reasonable period afterward for support and legal purposes, after which it is securely deleted or anonymized upon request.</p>

        <hr />

        <h2>7. Data Security</h2>
        <p>We implement reasonable technical and organizational measures to protect your information, including:</p>
        <ul>
          <li>Secure, encrypted connections (HTTPS) for data transmitted through the Site</li>
          <li>Access controls limiting who can view sensitive project or client data</li>
          <li>Use of reputable, security-conscious third-party infrastructure providers (e.g., Supabase, Vercel)</li>
        </ul>
        <p>However, no method of transmission or storage is 100% secure. We cannot guarantee absolute security but are committed to protecting your information using industry-standard practices.</p>

        <hr />

        <h2>8. Your Rights</h2>
        <p>Depending on your location, you may have the right to:</p>
        <ul>
          <li><strong>Access</strong> the personal information we hold about you</li>
          <li><strong>Correct</strong> inaccurate or incomplete information</li>
          <li><strong>Delete</strong> your personal information ("right to be forgotten")</li>
          <li><strong>Object to or restrict</strong> certain processing</li>
          <li><strong>Data portability</strong> — receive your data in a portable format</li>
          <li><strong>Withdraw consent</strong> at any time, where processing is based on consent</li>
        </ul>
        <p>To exercise any of these rights, contact us at <strong>hello@novadesk.dev</strong>. We will respond within a reasonable timeframe, generally within 30 days.</p>

        <hr />

        <h2>9. International Data Transfers</h2>
        <p>If you are located outside India, please note that your information may be transferred to, stored, and processed in India or other countries where our service providers operate (e.g., hosting infrastructure). We take reasonable steps to ensure your information receives an adequate level of protection wherever it is processed.</p>

        <hr />

        <h2>10. Third-Party Links</h2>
        <p>Our Site may contain links to third-party websites (e.g., LinkedIn, GitHub, payment processors). We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies separately.</p>

        <hr />

        <h2>11. Children's Privacy</h2>
        <p>Our Site and Services are not directed at individuals under the age of 18. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us so we can delete it.</p>

        <hr />

        <h2>12. Changes to This Privacy Policy</h2>
        <p>We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. The "Last Updated" date at the top of this page will reflect the most recent revision. Continued use of the Site after changes are posted constitutes acceptance of the updated policy.</p>

        <hr />

        <h2>13. Contact Us</h2>
        <p>If you have questions, concerns, or requests regarding this Privacy Policy or how your information is handled, contact us at:</p>
        <p>
          <strong>Email:</strong> hello@novadesk.dev<br />
          <strong>Business:</strong> NovaDesk — Full-Stack + AI Development Studio<br />
          <strong>Location:</strong> New Delhi, India
        </p>
      </div>
    </>
  );
}
