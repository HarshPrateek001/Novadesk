import express from 'express';
import nodemailer from 'nodemailer';

const router = express.Router();

// ── In-memory leads store (Vercel serverless compatible) ──
// Note: Persists within same function instance. Real persistence via email/Telegram.
const leadsStore = [];

// ── Nodemailer transporter ──
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

// ── Optional Telegram Bot notification ──
async function sendTelegramAlert(lead) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId || token === 'YOUR_TELEGRAM_BOT_TOKEN') return;

  const text =
    `🚀 *NEW NOVADESK LEAD*\n\n` +
    `👤 *Name:* ${lead.name || 'N/A'}\n` +
    `📧 *Email:* ${lead.email || 'N/A'}\n` +
    `📱 *Phone:* ${lead.phone || 'N/A'}\n` +
    `🏢 *Company:* ${lead.company || 'N/A'}\n` +
    `💰 *Budget:* ${lead.budget || 'N/A'}\n` +
    `⏱️ *Timeline:* ${lead.timeline || 'N/A'}\n` +
    `🎯 *Scope:* ${lead.scope || 'N/A'}\n` +
    `📅 *Received:* ${new Date().toLocaleString()}`;

  try {
    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'Markdown' })
    });
  } catch (err) {
    console.error('Telegram alert error:', err.message);
  }
}

/**
 * POST /api/leads/submit
 */
router.post('/submit', async (req, res) => {
  try {
    const lead = {
      id: `lead_${Date.now()}`,
      createdAt: new Date().toISOString(),
      ...req.body
    };

    // Store in memory (instance-level)
    leadsStore.unshift(lead);
    console.log(`[Lead Engine] ✅ New lead: ${lead.name} (${lead.email})`);

    const tasks = [];

    // Fire Telegram alert if configured
    if (process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID) {
      tasks.push(sendTelegramAlert(lead));
    }

    // Send emails if SMTP configured
    const transporter = getTransporter();
    const agencyEmail = process.env.AGENCY_RECEIVER_EMAIL || 'hello@novadesk.site';

    if (transporter) {
      const agencyMail = {
        from: `"NovaDesk Lead Bot" <${process.env.SMTP_USER}>`,
        to: agencyEmail,
        subject: `🔥 New Enquiry: ${lead.name} (${lead.budget || 'Custom Scope'})`,
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#1e293b;">
            <div style="background:#0f172a;padding:24px;border-radius:12px 12px 0 0;text-align:center;">
              <h2 style="color:#fff;margin:0;">NovaDesk Lead Alert</h2>
              <p style="color:#94a3b8;font-size:14px;margin-top:6px;">New Enquiry via AI Chatbot</p>
            </div>
            <div style="padding:24px;background:#fff;border:1px solid #e2e8f0;border-radius:0 0 12px 12px;">
              <table style="width:100%;border-collapse:collapse;">
                <tr><td style="padding:8px 0;color:#64748b;font-weight:bold;">Name:</td><td>${lead.name || 'N/A'}</td></tr>
                <tr><td style="padding:8px 0;color:#64748b;font-weight:bold;">Email:</td><td><a href="mailto:${lead.email}">${lead.email}</a></td></tr>
                <tr><td style="padding:8px 0;color:#64748b;font-weight:bold;">Phone:</td><td>${lead.phone || 'N/A'}</td></tr>
                <tr><td style="padding:8px 0;color:#64748b;font-weight:bold;">Company:</td><td>${lead.company || 'N/A'}</td></tr>
                <tr><td style="padding:8px 0;color:#64748b;font-weight:bold;">Budget:</td><td style="font-weight:bold;color:#2E29FF;">${lead.budget || 'N/A'}</td></tr>
                <tr><td style="padding:8px 0;color:#64748b;font-weight:bold;">Timeline:</td><td>${lead.timeline || 'N/A'}</td></tr>
                <tr><td style="padding:8px 0;color:#64748b;font-weight:bold;">Scope:</td><td>${lead.scope || lead.initialQuery || 'N/A'}</td></tr>
              </table>
            </div>
          </div>
        `
      };

      const clientMail = {
        from: `"NovaDesk Engineering" <${process.env.SMTP_USER}>`,
        to: lead.email,
        subject: `Your NovaDesk Project Enquiry — Confirmed`,
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#1e293b;">
            <div style="background:linear-gradient(135deg,#1e1b4b,#0f172a);padding:32px 24px;text-align:center;border-radius:12px 12px 0 0;">
              <h1 style="color:#fff;margin:0;font-size:22px;">NovaDesk</h1>
              <p style="color:#a5b4fc;font-size:14px;margin-top:8px;">Software Engineering & Digital Product Studio</p>
            </div>
            <div style="padding:28px 24px;background:#fff;border:1px solid #e2e8f0;border-radius:0 0 12px 12px;line-height:1.6;">
              <p>Hi <strong>${lead.name || 'there'}</strong>,</p>
              <p>We've received your enquiry about <em>"${lead.scope || 'Custom Development'}"</em>.</p>
              <p>Our senior architects will respond within <strong>2–4 business hours</strong> with a preliminary architecture overview and quote.</p>
              <div style="margin:24px 0;text-align:center;">
                <a href="https://calendly.com/itsharshprateek/30min" style="background:#2E29FF;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;display:inline-block;">Schedule Discovery Call</a>
              </div>
              <p style="font-size:13px;color:#64748b;border-top:1px solid #e2e8f0;padding-top:16px;">NovaDesk Studio • <a href="https://www.novadesk.site" style="color:#2E29FF;">novadesk.site</a></p>
            </div>
          </div>
        `
      };

      tasks.push(transporter.sendMail(agencyMail).catch(e => console.error('Agency email error:', e)));
      if (lead.email?.includes('@')) {
        tasks.push(transporter.sendMail(clientMail).catch(e => console.error('Client email error:', e)));
      }
    }

    // Safely wait for all background notification tasks to complete before ending serverless function
    if (tasks.length > 0) {
      await Promise.allSettled(tasks);
    }

    return res.status(200).json({ success: true, message: 'Lead received', leadId: lead.id });
  } catch (error) {
    console.error('Lead submission error:', error);
    return res.status(500).json({ error: 'Failed to process lead' });
  }
});

/**
 * Admin Authentication Middleware
 * Protects administrative endpoints against unauthenticated access.
 * Validates request header credentials against process.env.ADMIN_API_KEY:
 * - x-admin-key: <key>
 * - x-api-key: <key>
 * - Authorization: Bearer <key>
 *
 * Fail-safe: If ADMIN_API_KEY is not configured or empty, access is rejected by default.
 */
export function requireAdminAuth(req, res, next) {
  const configuredKey = process.env.ADMIN_API_KEY?.trim();

  // Fail-safe: reject requests by default if ADMIN_API_KEY is unset or default placeholder
  if (!configuredKey || configuredKey === 'YOUR_ADMIN_API_KEY_HERE') {
    return res.status(401).json({
      success: false,
      error: 'Unauthorized: Admin API key required'
    });
  }

  const authHeader = req.headers.authorization;
  let bearerToken = null;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    bearerToken = authHeader.slice(7).trim();
  }

  const providedKey =
    req.headers['x-admin-key'] ||
    req.headers['x-api-key'] ||
    bearerToken;

  if (!providedKey || providedKey !== configuredKey) {
    return res.status(401).json({
      success: false,
      error: 'Unauthorized: Admin API key required'
    });
  }

  next();
}

/**
 * GET /api/leads — View recent leads (in-memory, admin protected)
 */
router.get('/', requireAdminAuth, (req, res) => {
  return res.json({ success: true, leads: leadsStore });
});

export default router;
