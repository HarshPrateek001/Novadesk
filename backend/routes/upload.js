import express from 'express';
import multer from 'multer';
import path from 'path';

const router = express.Router();

// ── Memory storage for Vercel (ephemeral filesystem not supported) ──
const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB on Vercel
  fileFilter: (req, file, cb) => {
    const allowed = /pdf|doc|docx|txt|png|jpg|jpeg|webp/i;
    const ext = path.extname(file.originalname).slice(1);
    if (allowed.test(ext)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Allowed: PDF, DOC, DOCX, TXT, PNG, JPG, WEBP.'));
    }
  }
});

/**
 * POST /api/upload
 * Returns file metadata (file is in memory — attach to lead payload)
 */
router.post('/', upload.single('file'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    console.log(`[Upload] ✅ Received: ${req.file.originalname} (${req.file.size} bytes)`);

    return res.status(200).json({
      success: true,
      originalName: req.file.originalname,
      size: req.file.size,
      mimetype: req.file.mimetype,
      // On Vercel, file is in-memory — no persistent URL
      url: null,
      message: 'File received successfully'
    });
  } catch (err) {
    console.error('Upload error:', err);
    return res.status(500).json({ error: err.message || 'Upload failed' });
  }
});

export default router;
