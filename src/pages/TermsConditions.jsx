import React, { useEffect } from 'react';
import SEO from '../components/SEO';

export default function TermsConditions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      
      <Helmet>
        <title>Terms and Conditions | NovaDesk</title>
        <meta name="description" content="Review the Terms and Conditions for working with NovaDesk. Guidelines, agreements, and policies for our software engineering services." />
        <meta name="keywords" content="Terms and conditions, NovaDesk terms, service agreement" />
        <meta property="og:title" content="Terms and Conditions | NovaDesk" />
        <meta property="og:description" content="Review the Terms and Conditions for working with NovaDesk. Guidelines, agreements, and policies for our software engineering services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.novadesk.site" />
      </Helmet>
<SEO 
        title="Terms & Conditions"
        description="NovaDesk Terms & Conditions - Rules and regulations for using our services."
        url="/terms"
      />
      <style>{`
        .terms-page {
          padding: 120px 20px 80px;
          max-width: 800px;
          margin: 0 auto;
          font-family: 'Space Grotesk', sans-serif;
          color: #374151;
          line-height: 1.8;
        }
        .terms-page h1 {
          font-size: 36px;
          font-weight: 800;
          color: #0A0A2E;
          margin-bottom: 12px;
          line-height: 1.2;
        }
        .terms-page .last-updated {
          font-size: 14px;
          color: #6B7280;
          margin-bottom: 40px;
          font-weight: 600;
        }
        .terms-page h2 {
          font-size: 24px;
          font-weight: 700;
          color: #0A0A2E;
          margin-top: 48px;
          margin-bottom: 16px;
          border-bottom: 1px solid rgba(46, 41, 255, 0.1);
          padding-bottom: 8px;
        }
        .terms-page p {
          margin-bottom: 16px;
        }
        .terms-page ul {
          margin-bottom: 24px;
          padding-left: 24px;
        }
        .terms-page li {
          margin-bottom: 8px;
        }
        .terms-page strong {
          color: #0A0A2E;
        }
        .terms-page hr {
          border: 0;
          border-top: 1px dashed rgba(46, 41, 255, 0.2);
          margin: 40px 0;
        }
        @media (max-width: 768px) {
          .terms-page {
            padding: 100px 20px 60px;
          }
          .terms-page h1 {
            font-size: 28px;
          }
          .terms-page h2 {
            font-size: 20px;
          }
        }
      `}</style>
      <div className="terms-page">
        <h1>Terms & Conditions — NovaDesk</h1>
        <div className="last-updated">Last Updated: July 2026</div>

        <p>These Terms & Conditions ("Terms") govern your use of novadesk.site (the "Site") and any services provided by NovaDesk ("we," "us," "our," "NovaDesk") to you ("Client," "you"). By using the Site, submitting an inquiry, or engaging our Services, you agree to be bound by these Terms.</p>

        <p>If you do not agree to these Terms, please do not use the Site or engage our Services.</p>

        <hr />

        <h2>1. Overview of Services</h2>
        <p>NovaDesk provides freelance software development services, including but not limited to:</p>
        <ul>
          <li>Full-stack web application development</li>
          <li>AI integration and automation development</li>
          <li>MVP and product development</li>
          <li>API and backend systems development</li>
        </ul>
        <p>The specific scope, deliverables, timeline, and cost for any project will be defined in a separate <strong>Project Proposal / Statement of Work (SOW)</strong> or written agreement (including email confirmation) between NovaDesk and the Client before work begins. These Terms apply in addition to, and alongside, any such project-specific agreement. In case of conflict, the specific written agreement takes precedence over these general Terms.</p>

        <hr />

        <h2>2. Project Engagement Process</h2>
        <ol>
          <li><strong>Discovery & Scoping</strong>: An initial discussion (call/email) to understand requirements. This is free and non-binding.</li>
          <li><strong>Proposal & Quote</strong>: A written proposal outlining scope, deliverables, timeline, and cost will be shared before any commitment is made.</li>
          <li><strong>Agreement & Deposit</strong>: Work begins only after the Client approves the proposal and pays the agreed deposit (see Section 4).</li>
          <li><strong>Development & Delivery</strong>: Work proceeds per the agreed timeline, with regular progress updates as outlined in the proposal.</li>
        </ol>

        <hr />

        <h2>3. Client Responsibilities</h2>
        <p>To ensure timely delivery, the Client agrees to:</p>
        <ul>
          <li>Provide necessary information, content, access credentials, and feedback in a timely manner</li>
          <li>Designate a single point of contact for project communication and approvals</li>
          <li>Review and respond to deliverables, drafts, or milestone check-ins within a reasonable time (delays on the Client's part may extend the project timeline accordingly)</li>
          <li>Ensure they have the legal right to any content, branding, or third-party materials provided to NovaDesk for use in the project</li>
        </ul>
        <p>Delays caused by the Client (late feedback, missing content, unavailability) may result in adjusted timelines and are not the responsibility of NovaDesk.</p>

        <hr />

        <h2>4. Payment Terms</h2>
        <ul>
          <li><strong>Deposit</strong>: A non-refundable deposit (typically 30-50% of total project cost) is required before work begins, unless otherwise agreed in writing.</li>
          <li><strong>Milestone/Final Payments</strong>: Remaining payment is due per the schedule outlined in the project proposal — typically at defined milestones or upon project completion, before final handover of source code/deployment credentials.</li>
          <li><strong>Payment Methods</strong>: Bank transfer, UPI, PayPal, or Razorpay.</li>
          <li><strong>Late Payments</strong>: Payments overdue by more than 7 days may result in a pause of work until payment is received. Repeated late payments may result in project suspension or termination.</li>
          <li><strong>Currency</strong>: All quotes are in INR/USD, unless otherwise stated. International clients are responsible for any currency conversion fees or transfer charges.</li>
          <li><strong>Taxes</strong>: Prices quoted do not include applicable taxes (e.g., GST) unless explicitly stated. Taxes will be added as required by law.</li>
        </ul>

        <hr />

        <h2>5. Revisions & Change Requests</h2>
        <ul>
          <li>Each project proposal specifies a defined number of revision rounds included in the price.</li>
          <li>Revisions requested <strong>within the original agreed scope</strong> are included as specified.</li>
          <li>Requests that expand the original scope (new features, design changes beyond what was agreed, additional pages/functionality) will be treated as a <strong>change request</strong>, quoted separately, and may affect the timeline.</li>
          <li>Excessive revision requests beyond the agreed rounds will be billed at an hourly or per-request rate, communicated before additional work begins.</li>
        </ul>

        <hr />

        <h2>6. Timeline & Delays</h2>
        <ul>
          <li>Project timelines are estimates based on the agreed scope and assume timely Client cooperation (feedback, content, approvals).</li>
          <li>NovaDesk will communicate proactively if a delay is anticipated, along with the reason and a revised estimate.</li>
          <li>NovaDesk is not liable for delays caused by:
            <ul>
              <li>Client-side delays in providing feedback, content, or access</li>
              <li>Third-party service outages (hosting providers, APIs, payment gateways, etc.)</li>
              <li>Force majeure events (natural disasters, internet/infrastructure outages, etc.)</li>
            </ul>
          </li>
        </ul>

        <hr />

        <h2>7. Intellectual Property & Ownership</h2>
        <ul>
          <li>Upon <strong>full and final payment</strong>, ownership of the custom code, designs, and deliverables created specifically for the Client's project transfers to the Client.</li>
          <li>Until final payment is received, all work remains the intellectual property of NovaDesk.</li>
          <li>NovaDesk retains the right to use general knowledge, techniques, and non-proprietary code snippets/components developed during the project in future work for other clients.</li>
          <li>NovaDesk retains the right to showcase completed projects (screenshots, descriptions, links) in its portfolio, case studies, and marketing materials, <strong>unless the Client explicitly requests confidentiality in writing</strong> (see Section 8).</li>
          <li>Any third-party tools, libraries, frameworks, or paid services (e.g., Supabase, Vercel, third-party APIs) used in the project remain subject to their own respective licenses and terms. NovaDesk does not claim ownership over third-party software.</li>
        </ul>

        <hr />

        <h2>8. Confidentiality</h2>
        <ul>
          <li>NovaDesk agrees to keep confidential any proprietary business information, credentials, or sensitive data shared by the Client during the course of the project.</li>
          <li>If the Client requires a formal Non-Disclosure Agreement (NDA), one can be signed before detailed project discussions begin — contact us to arrange this.</li>
          <li>The Client agrees not to share NovaDesk's proprietary processes, pricing, or internal documentation without written consent.</li>
        </ul>

        <hr />

        <h2>9. Warranties & Limitations</h2>
        <ul>
          <li>NovaDesk will perform Services with reasonable skill, care, and in accordance with generally accepted industry standards.</li>
          <li>NovaDesk provides a <strong>bug-fix support window</strong> (as specified in the project proposal, typically 15-30 days post-launch) to address defects in the delivered work that are not the result of Client-side changes, third-party updates, or misuse.</li>
          <li>Beyond the defined support window, ongoing maintenance, updates, or bug fixes are available under a separate agreement or hourly rate.</li>
          <li>NovaDesk does <strong>not warrant</strong> that the software will be error-free, uninterrupted, or fully compatible with all future third-party updates, browser versions, or platform changes beyond our control.</li>
          <li>NovaDesk is not responsible for issues arising from Client-side modifications made after handover, or from third-party service changes (e.g., API deprecations, hosting provider changes).</li>
        </ul>

        <hr />

        <h2>10. Limitation of Liability</h2>
        <ul>
          <li>To the maximum extent permitted by law, NovaDesk's total liability for any claim arising from the Services shall not exceed the total amount paid by the Client for the specific project in question.</li>
          <li>NovaDesk is not liable for indirect, incidental, consequential, or special damages, including loss of profits, data, or business opportunities, arising from the use of the delivered software.</li>
          <li>The Client is responsible for maintaining their own backups of data, content, and business-critical information once the project is handed over.</li>
        </ul>

        <hr />

        <h2>11. Termination</h2>
        <ul>
          <li>Either party may terminate the engagement with written notice if the other party materially breaches these Terms and fails to remedy the breach within 7 days of notice.</li>
          <li>If the Client terminates a project midway without cause, payment is due for all work completed up to that point, and the deposit is non-refundable.</li>
          <li>If NovaDesk terminates a project due to Client breach (e.g., non-payment, abusive conduct, illegal use requests), the Client remains liable for payment of work completed to date.</li>
          <li>Upon termination, NovaDesk will deliver all work completed and paid for, in its current state.</li>
        </ul>

        <hr />

        <h2>12. Acceptable Use</h2>
        <p>The Client agrees not to request or use NovaDesk's Services for:</p>
        <ul>
          <li>Building software intended for illegal activities, fraud, or deceptive practices</li>
          <li>Content that infringes third-party intellectual property rights</li>
          <li>Applications designed to harm, exploit, or deceive end users</li>
          <li>Any use that violates applicable laws or regulations</li>
        </ul>
        <p>NovaDesk reserves the right to decline or terminate any project that violates this policy, without refund of the deposit.</p>

        <hr />

        <h2>13. Third-Party Services & Costs</h2>
        <p>Projects may rely on third-party services (hosting, databases, APIs, domain registration, etc.). Unless explicitly included in the project quote:</p>
        <ul>
          <li>Costs for third-party services (e.g., Vercel hosting, Supabase, API usage fees, domain registration) are the Client's responsibility.</li>
          <li>NovaDesk will recommend appropriate services but is not liable for pricing changes, downtime, or policy changes made by third-party providers.</li>
        </ul>

        <hr />

        <h2>14. Governing Law & Dispute Resolution</h2>
        <ul>
          <li>These Terms are governed by the laws of India.</li>
          <li>Any disputes arising from these Terms or the Services shall first be attempted to be resolved through good-faith negotiation between the parties.</li>
          <li>If unresolved, disputes shall be subject to the exclusive jurisdiction of the courts of New Delhi, India.</li>
          <li>For international clients, both parties agree to attempt resolution via negotiation before pursuing formal legal action, given the practical challenges of cross-border litigation.</li>
        </ul>

        <hr />

        <h2>15. Changes to These Terms</h2>
        <p>NovaDesk may update these Terms from time to time to reflect changes in business practices or legal requirements. The "Last Updated" date will reflect the most recent revision. Continued use of the Site or engagement of Services after changes are posted constitutes acceptance of the updated Terms.</p>

        <hr />

        <h2>16. Contact Us</h2>
        <p>For questions about these Terms, contact:</p>
        <p>
          <strong>Email:</strong> itsharshprateek@gmail.com<br />
          <strong>Business:</strong> NovaDesk — Full-Stack + AI Development Studio<br />
          <strong>Location:</strong> New Delhi, India
        </p>
      </div>
    </>
  );
}
