import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import chatRouter from '../routes/chat.js';
import leadsRouter from '../routes/leads.js';
import uploadRouter from '../routes/upload.js';

dotenv.config();

const app = express();

// ── CORS: Allow frontend Vercel domain + localhost dev ──
app.use(cors({
  origin: [
    'https://www.novadesk.site',
    'https://novadesk.site',
    'https://novadesk.vercel.app',
    'http://localhost:5173',
    'http://localhost:3000'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// ── Health Check ──
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'NovaDesk AI & Lead Engine',
    timestamp: new Date().toISOString(),
    geminiConfigured: !!(process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== 'YOUR_GEMINI_API_KEY_HERE'),
  });
});

// ── Mount Routes ──
app.use('/api/chat', chatRouter);
app.use('/api/leads', leadsRouter);
app.use('/api/upload', uploadRouter);

// ── Global Error Handler ──
app.use((err, req, res, next) => {
  console.error('Server Error:', err);
  res.status(500).json({ error: err.message || 'Internal Server Error' });
});

// ── Export for Vercel Serverless (no app.listen) ──
export default app;
