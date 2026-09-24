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

// Middleware
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
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
