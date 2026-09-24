/**
 * Nova AI Service — Realtime Client Engine for NovaDesk
 * Handles:
 * 1. Server-Sent Events (SSE) streaming with backend AI (/api/chat/stream)
 * 2. Instant Lead dispatch to backend (/api/leads/submit) + optional Google Sheet sync
 * 3. File attachments upload (/api/upload)
 * 4. Intelligent offline fallback when server is starting or disconnected
 */

const API_BASE = import.meta.env.VITE_API_BASE_URL || '';

/**
 * Streams AI response token-by-token using Server-Sent Events (SSE)
 */
export async function streamChatResponse({ message, history = [], onChunk, onDone, onError }) {
  try {
    const response = await fetch(`${API_BASE}/api/chat/stream`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, history })
    });

    if (!response.ok || !response.body) {
      throw new Error(`Chat stream request failed: ${response.status}`);
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder('utf-8');
    let buffer = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n\n');
      buffer = lines.pop() || '';

      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed.startsWith('data:')) continue;
        const dataStr = trimmed.replace(/^data:\s*/, '');

        if (dataStr === '[DONE]') {
          onDone?.();
          return;
        }

        try {
          const parsed = JSON.parse(dataStr);
          if (parsed.chunk) {
            onChunk?.(parsed.chunk);
          }
        } catch {
          // ignore heartbeat / unparseable lines
        }
      }
    }

    onDone?.();
  } catch (err) {
    console.warn('Realtime streaming fallback activated:', err.message);
    // Offline simulated streaming fallback
    const fallbackText = getOfflineFallbackReply(message);
    const words = fallbackText.split(' ');
    for (let i = 0; i < words.length; i++) {
      const chunk = (i === 0 ? '' : ' ') + words[i];
      onChunk?.(chunk);
      await new Promise(r => setTimeout(r, 30));
    }
    onDone?.();
  }
}

/**
 * Submits verified project lead to backend & Google Apps Script
 */
export async function submitLeadPayload(leadPayload) {
  let backendSuccess = false;

  // 1. Send to Node.js Backend Engine
  try {
    const res = await fetch(`${API_BASE}/api/leads/submit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(leadPayload)
    });
    if (res.ok) {
      backendSuccess = true;
    }
  } catch (err) {
    console.error('Backend lead submission error:', err);
  }

  // 2. Secondary dispatch to Google Apps Script Web App if configured
  const googleScriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL;
  if (googleScriptUrl) {
    try {
      fetch(googleScriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          action: 'submit_lead_with_dual_email',
          timestamp: new Date().toISOString(),
          source: 'NovaDesk Realtime AI Chatbot',
          ...leadPayload
        })
      });
    } catch (err) {
      console.warn('Google Script secondary sync error:', err);
    }
  }

  return { success: true, backendSuccess };
}

/**
 * Uploads a document/file attachment to the backend
 */
export async function uploadDocument(file) {
  const formData = new FormData();
  formData.append('file', file);

  const res = await fetch(`${API_BASE}/api/upload`, {
    method: 'POST',
    body: formData
  });

  if (!res.ok) {
    const errData = await res.json().catch(() => ({}));
    throw new Error(errData.error || 'Failed to upload document');
  }

  return await res.json();
}

/**
 * Natural language helper to detect email, phone, or budget in user input
 */
export function extractContactDetails(text) {
  const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/i;
  const phoneRegex = /(\+?\d[\d -]{7,14}\d)/;
  
  const emailMatch = text.match(emailRegex);
  const phoneMatch = text.match(phoneRegex);

  return {
    email: emailMatch ? emailMatch[1] : null,
    phone: phoneMatch ? phoneMatch[1].trim() : null
  };
}

/**
 * Offline fallback generator for resilient UX
 */
function getOfflineFallbackReply(text) {
  const q = text.toLowerCase().trim();

  if (q.includes('your name') || q.includes('who are you') || q.includes('naam') || q.includes('kaun ho')) {
    return "I am Nova, Lead Technical Consultant at NovaDesk. I help founders scope, architect, and build custom web applications, SaaS platforms, mobile apps, and AI systems.";
  }

  if (q === 'hi' || q === 'hello' || q === 'hey' || q.startsWith('hi ') || q.startsWith('hello ') || q.includes('namaste')) {
    return "Hello. I am Nova from NovaDesk. What project or technical architecture are you planning to build?";
  }

  if (q.includes('quote') || q.includes('price') || q.includes('cost') || q.includes('rate') || q.includes('budget') || q.includes('kitna')) {
    return "Our typical project budgets are $1,500 – $3,500 for MVPs and $3,500 – $8,000 for full SaaS platforms. Share your work email for an itemized scope breakdown.";
  }

  if (q.includes('timeline') || q.includes('how long') || q.includes('duration') || q.includes('time')) {
    return "Early MVPs ship in 2 to 4 weeks, and comprehensive SaaS or mobile platforms take 4 to 8 weeks. What is your ideal launch timeline?";
  }

  if (q.includes('ai') || q.includes('rag') || q.includes('chatbot') || q.includes('llm')) {
    return "We engineer production RAG pipelines, fine-tuned LLM agents, and vector database workflows. Share your work email to review architecture options.";
  }

  if (q.includes('consult') || q.includes('call') || q.includes('meeting') || q.includes('schedule')) {
    return "You can schedule a free 30-minute discovery call using the button below, or share your work email here and our team will connect with you.";
  }

  return "NovaDesk is a software development studio specializing in custom web applications, SaaS platforms, mobile apps, and AI engineering. Share your project details for an itemized estimate.";
}
