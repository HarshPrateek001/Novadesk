import express from 'express';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { SYSTEM_INSTRUCTION, NOVADESK_KNOWLEDGE } from '../knowledge/agencyKnowledge.js';

const router = express.Router();

// Fallback intelligent responder when GEMINI_API_KEY is not set yet
function getSmartFallbackReply(userText, history = []) {
  const q = userText.toLowerCase();

  if (q.includes('your name') || q.includes('who are you') || q.includes('naam') || q.includes('kaun ho')) {
    return "I am Nova, Lead Technical Consultant at NovaDesk. I help founders scope, architect, and build custom web applications, SaaS platforms, mobile apps, and AI systems.";
  }

  if (q === 'hi' || q === 'hello' || q === 'hey' || q.startsWith('hi ') || q.startsWith('hello ') || q.includes('namaste')) {
    return "Hello. I am Nova from NovaDesk. What project or technical architecture are you planning to build?";
  }

  if (q.includes('price') || q.includes('cost') || q.includes('budget') || q.includes('quote') || q.includes('rate') || q.includes('kitna')) {
    return "Our typical project budgets are $1,500 – $3,500 for MVPs and $3,500 – $8,000 for full SaaS platforms. Share your work email for an itemized scope breakdown.";
  }

  if (q.includes('timeline') || q.includes('how long') || q.includes('weeks') || q.includes('time') || q.includes('duration')) {
    return "Early MVPs ship in 2 to 4 weeks, and comprehensive SaaS or mobile platforms take 4 to 8 weeks. What is your ideal launch timeline?";
  }

  if (q.includes('stack') || q.includes('tech') || q.includes('technology') || q.includes('react') || q.includes('next') || q.includes('python')) {
    return "We engineer with Next.js, React, Node.js, TypeScript, PostgreSQL, and Python/AI models. Do you have a preferred tech stack?";
  }

  if (q.includes('ai') || q.includes('rag') || q.includes('llm') || q.includes('chatbot') || q.includes('gpt')) {
    return "We engineer production RAG pipelines, fine-tuned LLM agents, and vector database workflows. Share your work email to review architecture options.";
  }

  if (q.includes('saas') || q.includes('web') || q.includes('app') || q.includes('mobile')) {
    return "We design and build scalable SaaS platforms and mobile apps with clean code ownership. Share your name and work email for a tailored proposal.";
  }

  if (q.includes('call') || q.includes('meet') || q.includes('consult') || q.includes('schedule') || q.includes('contact')) {
    return "You can schedule a free 30-minute discovery call using the button below, or share your work email here and our team will connect with you.";
  }

  return "NovaDesk is a software engineering studio for custom web apps, SaaS platforms, mobile apps, and AI systems. Share your project details for an itemized estimate.";
}

/**
 * POST /api/chat/stream
 * Realtime streaming endpoint using Server-Sent Events (SSE)
 */
router.post('/stream', async (req, res) => {
  const { message, history = [] } = req.body;
  console.log(`[Chat Route] Incoming message: "${message?.slice(0, 40)}" (History length: ${history.length})`);

  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Message text is required' });
  }

  // Set SSE response headers
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache, no-transform');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders?.();

  const apiKey = process.env.GEMINI_API_KEY;

  if (apiKey && apiKey !== 'YOUR_GEMINI_API_KEY_HERE') {
    const candidateModels = [
      process.env.GEMINI_MODEL,
      'gemini-2.0-flash',
      'gemini-2.0-flash-lite',
      'gemini-1.5-flash',
      'gemini-1.5-pro'
    ].filter(Boolean);

    for (const modelName of candidateModels) {
      try {
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({
          model: modelName,
          systemInstruction: SYSTEM_INSTRUCTION
        });

        const chatHistory = history
          .filter(m => m.text && (m.sender === 'user' || m.sender === 'bot'))
          .slice(-10)
          .map(m => ({
            role: m.sender === 'user' ? 'user' : 'model',
            parts: [{ text: m.text }]
          }));

        // Format previous history + current message for Gemini SDK
        const contents = [
          ...chatHistory,
          { role: 'user', parts: [{ text: message }] }
        ];

        console.log(`[Chat Route] Attempting model "${modelName}"...`);
        const result = await model.generateContent({ contents });
        console.log(`[Chat Route] Model "${modelName}" responded!`);
        const responseText = result.response.text();

        if (responseText) {
          // Stream the real Gemini response token-by-token to client for authentic live typing
          const words = responseText.split(' ');
          for (let i = 0; i < words.length; i++) {
            const chunk = (i === 0 ? '' : ' ') + words[i];
            res.write(`data: ${JSON.stringify({ chunk })}\n\n`);
            await new Promise(r => setTimeout(r, 20));
          }

          res.write(`data: [DONE]\n\n`);
          return res.end();
        }
      } catch (err) {
        console.warn(`[Chat Stream] Model ${modelName} encountered issue: ${err.message || err.status}. Trying next fallback...`);
      }
    }
  }

  // Fallback simulator with realistic token-by-token streaming
  const fallbackText = getSmartFallbackReply(message, history);
  const words = fallbackText.split(' ');

  for (let i = 0; i < words.length; i++) {
    const chunk = (i === 0 ? '' : ' ') + words[i];
    res.write(`data: ${JSON.stringify({ chunk })}\n\n`);
    // Non-blocking sleep for realistic typing effect
    await new Promise(resolve => setTimeout(resolve, 35));
  }

  res.write(`data: [DONE]\n\n`);
  res.end();
});

export default router;
