import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

// Safely load local .env if available
try {
  if (typeof process.loadEnvFile === 'function') {
    process.loadEnvFile();
  }
} catch {
  // Ignored in environments where .env is not on disk (e.g. Vercel production)
}

const SMTP_HOST = process.env.SMTP_HOST || 'smtp.gmail.com';
const SMTP_PORT = parseInt(process.env.SMTP_PORT || '465', 10);
const SMTP_SECURE = process.env.SMTP_SECURE !== 'false';
const SMTP_USER = process.env.SMTP_USER || 'novadesk.site@gmail.com';
const SMTP_PASS = process.env.SMTP_PASS || '';
const AGENCY_RECEIVER = process.env.AGENCY_RECEIVER_EMAIL || 'novadesk.site@gmail.com';

function getTransporter() {
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_SECURE,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS
    }
  });
}

export async function processEmailPayload(data) {
  const transporter = getTransporter();

  const name = [data.firstName, data.lastName].filter(Boolean).join(' ') || data.name || 'Potential Client';
  const email = data.email || '';
  const phone = data.phone || 'N/A';
  const company = data.companyName || data.company || 'N/A';
  const country = data.country || 'N/A';
  const projectType = data.projectType || data.scope || 'Custom Software Development';
  const budget = data.budget || 'Flexible / Custom';
  const timeline = data.maxTime || data.timeline || 'Flexible';
  const requiredSkills = data.requiredSkills || 'N/A';
  const message = data.message || data.description || data.initialQuery || 'No message provided';
  const fileName = data.fileName || '';
  const submittedAt = data.submittedAt || new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  // Attach inline crisp PNG images
  const attachments = [];
  try {
    const headerBannerPath = path.join(process.cwd(), 'public', 'email-header-banner.png');
    const headerLogoPath = path.join(process.cwd(), 'public', 'email-header-logo.png');
    const heroIconPath = path.join(process.cwd(), 'public', 'email-confirmation-hero.png');
    const footerLogoPath = path.join(process.cwd(), 'public', 'email-footer-logo.png');

    if (fs.existsSync(headerBannerPath)) {
      attachments.push({
        filename: 'header-banner.png',
        path: headerBannerPath,
        cid: 'novadeskheaderbanner'
      });
    }
    if (fs.existsSync(headerLogoPath)) {
      attachments.push({
        filename: 'header-logo.png',
        path: headerLogoPath,
        cid: 'novadeskheaderlogo'
      });
    }
    if (fs.existsSync(heroIconPath)) {
      attachments.push({
        filename: 'hero-icon.png',
        path: heroIconPath,
        cid: 'novadeskheroicon'
      });
    }
    if (fs.existsSync(footerLogoPath)) {
      attachments.push({
        filename: 'footer-logo.png',
        path: footerLogoPath,
        cid: 'novadeskfooterlogo'
      });
    }
  } catch (e) {
    console.warn('[send-email] Attachment path error:', e.message);
  }

  const headerBannerSrc = attachments.some(a => a.cid === 'novadeskheaderbanner')
    ? 'cid:novadeskheaderbanner'
    : 'https://www.novadesk.site/email-header-banner.png';

  const headerLogoSrc = attachments.some(a => a.cid === 'novadeskheaderlogo')
    ? 'cid:novadeskheaderlogo'
    : 'https://www.novadesk.site/email-header-logo.png';

  const heroIconSrc = attachments.some(a => a.cid === 'novadeskheroicon')
    ? 'cid:novadeskheroicon'
    : 'https://www.novadesk.site/email-confirmation-hero.png';

  const footerLogoSrc = attachments.some(a => a.cid === 'novadeskfooterlogo')
    ? 'cid:novadeskfooterlogo'
    : 'https://www.novadesk.site/email-footer-logo.png';

  // 1. Lead Notification Email to NovaDesk Team
  const agencyMailOptions = {
    from: `"NovaDesk Inquiries" <${SMTP_USER}>`,
    to: AGENCY_RECEIVER,
    replyTo: email || AGENCY_RECEIVER,
    subject: `🔥 New Project Inquiry: ${name} (${projectType})`,
    attachments: attachments,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F1F5F9; margin: 0; padding: 24px; color: #1E293B; }
          .card { max-width: 580px; margin: 0 auto; background: #FFFFFF; border-radius: 14px; overflow: hidden; box-shadow: 0 4px 14px rgba(0,0,0,0.06); }
          .header-banner { width: 100%; line-height: 0; background-color: #2E29FF; margin: 0; padding: 0; }
          .header-banner img { width: 100%; max-width: 580px; height: auto; display: block; border: 0; }
          .body { padding: 32px; background: #FFFFFF; }
          .table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
          .table td { padding: 10px 8px; border-bottom: 1px solid #F1F5F9; font-size: 13.5px; vertical-align: top; }
          .table td.label { width: 35%; color: #64748B; font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; }
          .table td.value { color: #0F172A; font-weight: 500; }
          .badge { display: inline-block; padding: 4px 10px; border-radius: 6px; font-size: 12px; font-weight: 700; background: #EEF2FF; color: #2E29FF; }
          .msg-box { background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 8px; padding: 16px; color: #334155; font-size: 13.5px; line-height: 1.6; white-space: pre-wrap; }
          .footer { padding: 18px 24px; background: #0B1B3D; color: #94A3B8; font-size: 11.5px; text-align: center; }
        </style>
      </head>
      <body>
        <div class="card">
          <div class="header-banner">
            <img src="${headerBannerSrc}" alt="NovaDesk Solutions" width="580" style="width: 100%; max-width: 580px; height: auto; display: block; border: 0;" />
          </div>
          <div class="body">
            <h2 style="margin: 0 0 16px 0; font-size: 20px; color: #0F172A;">Client Project Submission</h2>
            <table class="table">
              <tr>
                <td class="label">Client Name</td>
                <td class="value"><strong>${name}</strong></td>
              </tr>
              <tr>
                <td class="label">Email Address</td>
                <td class="value"><a href="mailto:${email}" style="color: #0284C7; font-weight: 600; text-decoration: underline;">${email}</a></td>
              </tr>
              <tr>
                <td class="label">Phone</td>
                <td class="value">${phone}</td>
              </tr>
              <tr>
                <td class="label">Company</td>
                <td class="value">${company}</td>
              </tr>
              <tr>
                <td class="label">Country / Location</td>
                <td class="value">${country}</td>
              </tr>
              <tr>
                <td class="label">Project Type</td>
                <td class="value"><span class="badge">${projectType}</span></td>
              </tr>
              <tr>
                <td class="label">Budget Estimate</td>
                <td class="value"><strong style="color: #0284C7;">${budget}</strong></td>
              </tr>
              <tr>
                <td class="label">Expected Timeline</td>
                <td class="value">${timeline}</td>
              </tr>
              ${requiredSkills !== 'N/A' ? `<tr><td class="label">Skills / Tech</td><td class="value">${requiredSkills}</td></tr>` : ''}
              ${fileName ? `<tr><td class="label">Attached File</td><td class="value">📎 ${fileName}</td></tr>` : ''}
              <tr>
                <td class="label">Received Timestamp</td>
                <td class="value">${submittedAt} IST</td>
              </tr>
            </table>

            <div style="margin-top: 18px;">
              <div style="font-size: 11.5px; font-weight: 700; color: #64748B; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Project Scope / Message</div>
              <div class="msg-box">${message}</div>
            </div>
          </div>
          <div class="footer">
            NovaDesk Solutions Lead Engine • Direct Client Inquiry Notification
          </div>
        </div>
      </body>
      </html>
    `
  };

  const emailPromises = [transporter.sendMail(agencyMailOptions)];

  // 2. Client Auto-Reply Confirmation Email (Strictly matching Fin Flow reference layout)
  if (email && email.includes('@')) {
    const clientMailOptions = {
      from: `"NovaDesk Solutions" <${SMTP_USER}>`,
      to: email,
      replyTo: AGENCY_RECEIVER,
      subject: `Your Project Inquiry is Confirmed — NovaDesk Solutions`,
      attachments: attachments,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Your Project Inquiry is Confirmed</title>
          <style>
            body { 
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; 
              background-color: #F8FAFC; 
              margin: 0; 
              padding: 24px 10px; 
              color: #1E293B;
              -webkit-font-smoothing: antialiased;
            }
            .wrapper {
              max-width: 580px;
              margin: 0 auto;
              background-color: #FFFFFF;
              border-radius: 12px;
              overflow: hidden;
              box-shadow: 0 4px 18px rgba(0, 0, 0, 0.05);
            }
            /* Full-Width Edge-to-Edge Brand Banner Header */
            .header-banner {
              width: 100%;
              line-height: 0;
              background-color: #2E29FF;
              margin: 0;
              padding: 0;
              border-radius: 12px 12px 0 0;
              overflow: hidden;
            }
            .header-banner img {
              width: 100%;
              max-width: 580px;
              height: auto;
              display: block;
              border: 0;
            }
            .body-content {
              padding: 40px 32px 32px 32px;
              text-align: center;
              background-color: #FFFFFF;
            }
            .hero-icon-img {
              width: 96px;
              height: 96px;
              display: block;
              margin: 0 auto 18px auto;
              border: 0;
            }
            .hero-title {
              font-size: 25px;
              font-weight: 800;
              color: #111827;
              margin: 0 0 14px 0;
              letter-spacing: -0.4px;
              line-height: 1.25;
            }
            .salutation {
              font-size: 14.5px;
              font-weight: 600;
              color: #374151;
              margin: 0 0 10px 0;
            }
            .intro-text {
              font-size: 13.5px;
              line-height: 1.65;
              color: #4B5563;
              max-width: 480px;
              margin: 0 auto 30px auto;
            }
            .section-title {
              font-size: 19px;
              font-weight: 700;
              color: #111827;
              margin: 0 0 16px 0;
              letter-spacing: -0.2px;
            }
            .details-table {
              margin: 0 auto 30px auto;
              border-collapse: collapse;
              text-align: left;
            }
            .details-table td {
              padding: 5px 8px;
              font-size: 13.5px;
              line-height: 1.5;
            }
            .details-table td.lbl {
              font-weight: 700;
              color: #111827;
              text-align: right;
              padding-right: 12px;
              white-space: nowrap;
            }
            .details-table td.val {
              color: #4B5563;
              font-weight: 500;
            }
            .divider-line {
              border: 0;
              border-top: 1px solid #E5E7EB;
              margin: 28px 0;
            }
            /* Soft Blue Box (Matching "Important Updates" in Reference) */
            .update-banner {
              background-color: #DDF2FD;
              border-radius: 8px;
              padding: 20px 24px;
              margin: 0 auto 24px auto;
              max-width: 490px;
              text-align: center;
            }
            .update-banner-title {
              font-size: 18px;
              font-weight: 800;
              color: #0284C7;
              margin: 0 0 8px 0;
            }
            .update-banner-p {
              font-size: 13px;
              color: #334155;
              line-height: 1.65;
              margin: 0;
            }
            .action-label {
              font-size: 13px;
              color: #64748B;
              line-height: 1.5;
              max-width: 440px;
              margin: 0 auto 20px auto;
            }
            /* Action Buttons (Matching Blue Rounded Buttons in Reference) */
            .btn-table {
              margin: 0 auto 28px auto;
              border-collapse: separate;
              border-spacing: 12px;
            }
            .btn-blue {
              background-color: #0284C7;
              color: #FFFFFF !important;
              text-decoration: none;
              padding: 13px 22px;
              border-radius: 8px;
              font-weight: 700;
              font-size: 13.5px;
              display: inline-block;
              letter-spacing: 0.2px;
              text-align: center;
            }
            .sig-block {
              margin-top: 24px;
              padding-top: 20px;
              border-top: 1px solid #F1F5F9;
              text-align: center;
            }
            .sig-name {
              font-size: 15px;
              font-weight: 800;
              color: #111827;
              margin-bottom: 2px;
            }
            .sig-title {
              font-size: 12.5px;
              color: #6B7280;
            }
            .sig-site {
              font-size: 12.5px;
              color: #0284C7;
              text-decoration: none;
              font-weight: 600;
              display: inline-block;
              margin-top: 3px;
            }
            /* Reduced Height Dark Navy Footer */
            .footer-bar {
              background-color: #0B1B3D;
              padding: 24px 20px 20px 20px;
              text-align: center;
              color: #FFFFFF;
            }
            .footer-logo-img {
              width: 160px;
              height: auto;
              display: block;
              margin: 0 auto 14px auto;
              border: 0;
            }
            .social-table {
              margin: 0 auto 14px auto;
              border-collapse: separate;
              border-spacing: 8px;
            }
            .social-circle {
              width: 28px;
              height: 28px;
              background-color: #1E293B;
              border-radius: 50%;
              text-align: center;
              line-height: 28px;
              display: block;
            }
            .social-circle a {
              color: #FFFFFF !important;
              text-decoration: none;
              font-size: 12px;
              font-weight: bold;
              display: block;
            }
            .footer-links {
              font-size: 11.5px;
              color: #94A3B8;
              margin: 0 0 6px 0;
            }
            .footer-links a {
              color: #94A3B8;
              text-decoration: none;
              margin: 0 6px;
            }
            .footer-inbox {
              font-size: 11px;
              color: #64748B;
              margin: 0;
            }
            .footer-inbox a {
              color: #38BDF8;
              text-decoration: none;
            }
          </style>
        </head>
        <body>
          <div class="wrapper">
            <!-- 1. Header: Full-Width Brand Banner -->
            <div class="header-banner">
              <img src="${headerBannerSrc}" alt="NovaDesk Solutions" width="580" style="width: 100%; max-width: 580px; height: auto; display: block; border: 0;" />
            </div>

            <!-- 2. Body Section: Matching Fin Flow Layout Exactly -->
            <div class="body-content">
              <!-- Confirmation Hero Icon (3D Calendar & Checkmark) -->
              <img src="${heroIconSrc}" alt="Project Confirmation" class="hero-icon-img" />

              <h1 class="hero-title">Your Project Inquiry is Confirmed</h1>

              <div class="salutation">Hello ${name.split(' ')[0]},</div>

              <p class="intro-text">
                We're reaching out to confirm that your project specifications with <strong>NovaDesk Solutions</strong> have been successfully received. Our engineering team is currently scoping your technical requirements to prepare an accurate delivery roadmap.
              </p>

              <!-- 3. Project Inquiry Details Table -->
              <div class="section-title">Project Inquiry Details</div>
              <table class="details-table">
                <tr>
                  <td class="lbl">Service Requested:</td>
                  <td class="val">${projectType}</td>
                </tr>
                <tr>
                  <td class="lbl">Target Budget:</td>
                  <td class="val" style="color: #0284C7; font-weight: 700;">${budget}</td>
                </tr>
                <tr>
                  <td class="lbl">Estimated Timeline:</td>
                  <td class="val">${timeline}</td>
                </tr>
                <tr>
                  <td class="lbl">Received Date:</td>
                  <td class="val">${submittedAt}</td>
                </tr>
              </table>

              <!-- Divider Line -->
              <hr class="divider-line" />

              <!-- 4. Important Updates Box (Soft Sky Blue) -->
              <div class="update-banner">
                <div class="update-banner-title">Important Updates</div>
                <p class="update-banner-p">
                  Please note that all project scopes at NovaDesk Solutions are directly reviewed by senior software engineers and our agency founder — zero non-technical account managers. You will receive an initial architectural breakdown within <strong>24 business hours</strong>.
                </p>
              </div>

              <!-- 5. Action Notice & Dual Matching Blue Buttons -->
              <p class="action-label">
                To schedule a technical walkthrough or update your project details, please follow the links below:
              </p>

              <table class="btn-table">
                <tr>
                  <td>
                    <a href="https://calendly.com/itsharshprateek/30min" class="btn-blue" target="_blank">
                      Book Consultation Call
                    </a>
                  </td>
                  <td>
                    <a href="https://www.novadesk.site/case-studies" class="btn-blue" target="_blank">
                      Explore Case Studies
                    </a>
                  </td>
                </tr>
              </table>

              <!-- 6. Founder Signature -->
              <div class="sig-block">
                <div class="sig-name">Harsh Prateek</div>
                <div class="sig-title">Founder &amp; Lead Developer &bull; NovaDesk Solutions</div>
                <a href="https://www.novadesk.site" class="sig-site" target="_blank">www.novadesk.site</a>
              </div>
            </div>

            <!-- 7. Footer Bar: Reduced Height, Dark Navy -->
            <div class="footer-bar">
              <img src="${footerLogoSrc}" alt="NovaDesk Solutions" class="footer-logo-img" />

              <!-- Social Circles -->
              <table class="social-table">
                <tr>
                  <td>
                    <div class="social-circle">
                      <a href="https://www.linkedin.com/company/novadesk-solutions/" target="_blank" title="LinkedIn">in</a>
                    </div>
                  </td>
                  <td>
                    <div class="social-circle">
                      <a href="https://www.linkedin.com/in/itsharshprateek/" target="_blank" title="Personal LinkedIn">👤</a>
                    </div>
                  </td>
                  <td>
                    <div class="social-circle">
                      <a href="https://www.novadesk.site" target="_blank" title="Website">🌐</a>
                    </div>
                  </td>
                  <td>
                    <div class="social-circle">
                      <a href="mailto:novadesk.site@gmail.com" title="Email">✉</a>
                    </div>
                  </td>
                </tr>
              </table>

              <div class="footer-links">
                <a href="https://www.novadesk.site/privacy-policy" target="_blank">Privacy Policy</a> &bull;
                <a href="https://www.novadesk.site/contact-us" target="_blank">Contact Us</a> &bull;
                <a href="https://www.novadesk.site/terms" target="_blank">Terms of Service</a>
              </div>

              <p class="footer-inbox">
                Direct Team Inbox: <a href="mailto:novadesk.site@gmail.com">novadesk.site@gmail.com</a>
              </p>
            </div>
          </div>
        </body>
        </html>
      `
    };

    emailPromises.push(transporter.sendMail(clientMailOptions));
  }

  const results = await Promise.all(emailPromises);
  return {
    success: true,
    message: 'Emails dispatched successfully',
    agencyMessageId: results[0]?.messageId,
    clientMessageId: results[1]?.messageId || null
  };
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const data = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const result = await processEmailPayload(data || {});
    return res.status(200).json(result);
  } catch (error) {
    console.error('[send-email API error]:', error);
    return res.status(500).json({
      error: 'Failed to send email',
      details: error.message
    });
  }
}
