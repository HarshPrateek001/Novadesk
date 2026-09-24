import express from 'express';
import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();
const DATA_DIR = path.join(__dirname, '../data');
const LEADS_FILE = path.join(DATA_DIR, 'leads.json');

// Ensure data folder and leads.json exist
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}
if (!fs.existsSync(LEADS_FILE)) {
  fs.writeFileSync(LEADS_FILE, JSON.stringify([], null, 2));
}

// Nodemailer transporter helper
function getTransporter() {
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587', 10),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });
  }
  return null;
}

// Optional Telegram Bot notification helper
async function sendTelegramAlert(lead) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId || token === 'YOUR_TELEGRAM_BOT_TOKEN') {
    return;
  }

  const text = `🚀 *NEW NOVADESK LEAD RECEIVED*\n\n` +
    `👤 *Name:* ${lead.name || 'N/A'}\n` +
    `📧 *Email:* ${lead.email || 'N/A'}\n` +
    `📱 *Phone:* ${lead.phone || 'N/A'}\n` +
    `🏢 *Company:* ${lead.company || 'N/A'}\n` +
    `📍 *Location:* ${lead.location || 'N/A'}\n` +
    `💰 *Budget:* ${lead.budget || 'N/A'}\n` +
    `⏱️ *Timeline:* ${lead.timeline || 'N/A'}\n` +
    `🎯 *Scope:* ${lead.scope || 'N/A'}\n` +
    (lead.attachmentUrl ? `📎 *Attachment:* ${lead.attachmentUrl}\n` : '') +
    `\n📅 *Received:* ${new Date().toLocaleString()}`;

  try {
    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: 'Markdown'
      })
    });
  } catch (err) {
    console.error('Telegram notification error:', err.message);
  }
}

/**
 * POST /api/leads/submit
 * Handles lead submission, persistent saving, dual email dispatch, and instant alerts
 */
router.post('/submit', async (req, res) => {
  try {
    const lead = {
      id: `lead_${Date.now()}`,
      createdAt: new Date().toISOString(),
      ...req.body
    };

    // Save lead to local JSON storage
    let currentLeads = [];
    try {
      const raw = fs.readFileSync(LEADS_FILE, 'utf-8');
      currentLeads = JSON.parse(raw);
    } catch {
      currentLeads = [];
    }

    currentLeads.unshift(lead);
    fs.writeFileSync(LEADS_FILE, JSON.stringify(currentLeads, null, 2), 'utf-8');
    console.log(`[Lead Engine] ✅ Saved new lead: ${lead.name} (${lead.email})`);

    // Trigger instant Telegram alert in background
    sendTelegramAlert(lead).catch(err => console.error(err));

    // Dispatch Emails if SMTP is configured
    const transporter = getTransporter();
    const agencyEmail = process.env.AGENCY_RECEIVER_EMAIL || 'hello@novadesk.site';

    if (transporter) {
      // 1. Alert to Agency Team
      const agencyMailOptions = {
        from: `"NovaDesk Lead Bot" <${process.env.SMTP_USER}>`,
        to: agencyEmail,
        subject: `🔥 New Project Enquiry: ${lead.name} (${lead.budget || 'Custom Scope'})`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b;">
            <div style="background: #0f172a; padding: 24px; border-radius: 12px 12px 0 0; text-align: center;">
              <h2 style="color: #ffffff; margin: 0;">NovaDesk Agency Lead Alert</h2>
              <p style="color: #94a3b8; font-size: 14px; margin-top: 6px;">New Enquiry via Realtime Chatbot</p>
            </div>
            <div style="padding: 24px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 0 0 12px 12px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px 0; color: #64748b; font-weight: bold;">Name:</td><td style="padding: 8px 0;">${lead.name || 'N/A'}</td></tr>
                <tr><td style="padding: 8px 0; color: #64748b; font-weight: bold;">Email:</td><td style="padding: 8px 0;"><a href="mailto:${lead.email}">${lead.email}</a></td></tr>
                <tr><td style="padding: 8px 0; color: #64748b; font-weight: bold;">Phone:</td><td style="padding: 8px 0;">${lead.phone || 'N/A'}</td></tr>
                <tr><td style="padding: 8px 0; color: #64748b; font-weight: bold;">Company:</td><td style="padding: 8px 0;">${lead.company || 'N/A'}</td></tr>
                <tr><td style="padding: 8px 0; color: #64748b; font-weight: bold;">Location:</td><td style="padding: 8px 0;">${lead.location || 'N/A'}</td></tr>
                <tr><td style="padding: 8px 0; color: #64748b; font-weight: bold;">Budget:</td><td style="padding: 8px 0; font-weight: bold; color: #2E29FF;">${lead.budget || 'N/A'}</td></tr>
                <tr><td style="padding: 8px 0; color: #64748b; font-weight: bold;">Timeline:</td><td style="padding: 8px 0;">${lead.timeline || 'N/A'}</td></tr>
                <tr><td style="padding: 8px 0; color: #64748b; font-weight: bold;">Scope:</td><td style="padding: 8px 0;">${lead.scope || lead.initialQuery || 'N/A'}</td></tr>
                ${lead.attachmentUrl ? `<tr><td style="padding: 8px 0; color: #64748b; font-weight: bold;">Attachment:</td><td style="padding: 8px 0;"><a href="${lead.attachmentUrl}" target="_blank">View Document</a></td></tr>` : ''}
              </table>
            </div>
          </div>
        `
      };

      // 2. Confirmation to Client
      const clientMailOptions = {
        from: `"NovaDesk Engineering" <${process.env.SMTP_USER}>`,
        to: lead.email,
        subject: `Your NovaDesk Project Enquiry Confirmation`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b;">
            <div style="background: linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%); padding: 32px 24px; text-align: center; border-radius: 12px 12px 0 0;">
              <h1 style="color: #ffffff; margin: 0; font-size: 22px;">NovaDesk</h1>
              <p style="color: #a5b4fc; font-size: 14px; margin-top: 8px;">Software Engineering & Digital Product Studio</p>
            </div>
            <div style="padding: 28px 24px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 0 0 12px 12px; line-height: 1.6;">
              <p>Hi <strong>${lead.name || 'there'}</strong>,</p>
              <p>Thank you for reaching out to NovaDesk. We have successfully received your project requirements regarding <em>"${lead.scope || 'Custom Development'}"</em>.</p>
              <p>Our senior technical architects are reviewing your specifications and will get back to you within <strong>2 to 4 business hours</strong> with a preliminary architecture overview and itemized quote.</p>
              <div style="margin: 24px 0; text-align: center;">
                <a href="https://calendly.com/itsharshprateek/30min" style="background: #2E29FF; color: #ffffff; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block;">Schedule Discovery Call Immediately</a>
              </div>
              <p style="font-size: 13px; color: #64748b; border-top: 1px solid #e2e8f0; padding-top: 16px;">NovaDesk Studio • <a href="https://www.novadesk.site" style="color: #2E29FF;">novadesk.site</a> • WhatsApp: +91 7870142813</p>
            </div>
          </div>
        `
      };

      transporter.sendMail(agencyMailOptions).catch(err => console.error('Agency Email Error:', err));
      if (lead.email && lead.email.includes('@')) {
        transporter.sendMail(clientMailOptions).catch(err => console.error('Client Email Error:', err));
      }
    }

    return res.status(200).json({
      success: true,
      message: 'Lead received and processed successfully',
      leadId: lead.id
    });
  } catch (error) {
    console.error('Lead submission error:', error);
    return res.status(500).json({ error: 'Failed to process lead' });
  }
});

/**
 * GET /api/leads
 * Get recent leads (for admin review)
 */
router.get('/', (req, res) => {
  try {
    if (!fs.existsSync(LEADS_FILE)) {
      return res.json({ leads: [] });
    }
    const raw = fs.readFileSync(LEADS_FILE, 'utf-8');
    const leads = JSON.parse(raw);
    return res.json({ leads });
  } catch {
    return res.status(500).json({ error: 'Unable to retrieve leads' });
  }
});

export default router;
