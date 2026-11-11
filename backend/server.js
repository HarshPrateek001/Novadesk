import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

import chatRouter from './routes/chat.js';
import leadsRouter from './routes/leads.js';
import uploadRouter from './routes/upload.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from backend folder first, with fallback to root .env
dotenv.config({ path: path.join(__dirname, '.env') });
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ── Strict CORS Allowlist: Allowed frontend origins & preview domains ──
const explicitOrigins = [
  'https://www.novadesk.site',
  'https://novadesk.site',
  'https://novadesk.vercel.app',
  'http://localhost:5173',
  'http://localhost:3000',
  'http://localhost:4173',
  'http://127.0.0.1:5173',
  'http://127.0.0.1:3000',
  'http://127.0.0.1:4173'
];

// Regex matching official NovaDesk Vercel preview deployments
const vercelPreviewRegex = /^https:\/\/novadesk(-[a-z0-9-]+)?\.vercel\.app$/;

const isOriginAllowed = (origin) => {
  if (!origin) return true;
  if (explicitOrigins.includes(origin)) return true;
  if (vercelPreviewRegex.test(origin)) return true;
  if (process.env.FRONTEND_URL) {
    const customOrigins = process.env.FRONTEND_URL.split(',').map((s) => s.trim()).filter(Boolean);
    if (customOrigins.includes(origin)) return true;
  }
  return false;
};

// Middleware
app.use(cors({
  origin: (origin, callback) => {
    // Allow server-to-server, Postman, curl, or mobile app requests (no origin header)
    if (!origin) return callback(null, true);

    if (isOriginAllowed(origin)) {
      return callback(null, true);
    }

    // Deny all other unlisted origins
    return callback(null, false);
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'x-admin-key', 'x-api-key'],
  credentials: true
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Static uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Health Check & Root Info
const statusResponse = (req, res) => {
  res.json({
    status: 'ok',
    service: 'NovaDesk Realtime AI & Lead Engine',
    timestamp: new Date().toISOString(),
    geminiConfigured: !!(process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== 'YOUR_GEMINI_API_KEY_HERE'),
    smtpConfigured: !!(process.env.SMTP_HOST && process.env.SMTP_USER),
    telegramConfigured: !!(process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_BOT_TOKEN !== 'YOUR_TELEGRAM_BOT_TOKEN')
  });
};

app.get('/', statusResponse);
app.get('/health', statusResponse);
app.get('/api/health', statusResponse);

// Mount Routes
app.use('/api/chat', chatRouter);
app.use('/api/leads', leadsRouter);
app.use('/api/upload', uploadRouter);

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Unhandled Server Error:', err);
  res.status(500).json({ error: err.message || 'Internal Server Error' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`\n======================================================`);
  console.log(`🚀 NovaDesk Backend Server running on http://localhost:${PORT}`);
  console.log(`📡 Health Check: http://localhost:${PORT}/api/health`);
  console.log(`💬 Chat Stream:  http://localhost:${PORT}/api/chat/stream`);
  console.log(`📥 Leads API:    http://localhost:${PORT}/api/leads/submit`);
  console.log(`📎 Uploads API:  http://localhost:${PORT}/api/upload`);
  console.log(`======================================================\n`);
});
