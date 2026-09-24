import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import chatRouter from '../routes/chat.js';
import leadsRouter from '../routes/leads.js';
import uploadRouter from '../routes/upload.js';

dotenv.config();

const app = express();

// ── Dynamic CORS: Allow frontend domains, previews & localhost ──
const explicitOrigins = [
  'https://www.novadesk.site',
  'https://novadesk.site',
  'https://novadesk.vercel.app',
  'http://localhost:5173',
  'http://localhost:3000'
];

app.use(cors({
  origin: (origin, callback) => {
    // Allow server-to-server, Postman, curl, or mobile app requests (no origin header)
    if (!origin) return callback(null, true);

    if (
      explicitOrigins.includes(origin) ||
      origin.endsWith('.vercel.app') ||
      origin.includes('novadesk.site') ||
      origin.includes('localhost') ||
      (process.env.FRONTEND_URL && origin === process.env.FRONTEND_URL)
    ) {
      return callback(null, true);
    }

    // Allow other origins with callback to avoid unexpected CORS blocks on custom domains
    return callback(null, true);
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// ── Health Check / Root Status Handler ──
const statusHandler = (req, res) => {
  res.json({
    status: 'ok',
    service: 'NovaDesk AI & Lead Engine',
    timestamp: new Date().toISOString(),
    geminiConfigured: !!(process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== 'YOUR_GEMINI_API_KEY_HERE'),
    smtpConfigured: !!(process.env.SMTP_HOST && process.env.SMTP_USER),
    telegramConfigured: !!(process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_BOT_TOKEN !== 'YOUR_TELEGRAM_BOT_TOKEN'),
    endpoints: {
      health: '/api/health',
      chatStream: '/api/chat/stream',
      leadsSubmit: '/api/leads/submit',
      upload: '/api/upload'
    }
  });
};

app.get('/', statusHandler);
app.get('/health', statusHandler);
app.get('/api/health', statusHandler);

// ── Mount Routes (Both /api/* and /* for maximum routing resilience on Vercel) ──
app.use('/api/chat', chatRouter);
app.use('/chat', chatRouter);

app.use('/api/leads', leadsRouter);
app.use('/leads', leadsRouter);

app.use('/api/upload', uploadRouter);
app.use('/upload', uploadRouter);

// ── Global Error Handler ──
app.use((err, req, res, next) => {
  console.error('Server Error:', err);
  res.status(500).json({ error: err.message || 'Internal Server Error' });
});

// ── Export for Vercel Serverless Function ──
export default app;
