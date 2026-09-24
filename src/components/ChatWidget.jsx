import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import lottie from 'lottie-web';
import novaRobotCleanData from '../assets/nova_robot_clean.json';
import novaRobotData from '../assets/nova_robot.json';
import { streamChatResponse, submitLeadPayload, uploadDocument, extractContactDetails } from '../services/novaAiService';

// Animated Lottie Robot Avatar Component
function NovaLottieAvatar({ width = 24, height = 24, clean = true, style = {} }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: clean ? novaRobotCleanData : novaRobotData
    });

    return () => {
      anim.destroy();
    };
  }, [clean]);

  return (
    <div
      ref={containerRef}
      style={{
        width,
        height,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        pointerEvents: 'none',
        ...style
      }}
    />
  );
}

// Minimal Clean SVG Icons (Zero Emojis)
const IconClose = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const IconRefresh = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 4 23 10 17 10"></polyline>
    <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
  </svg>
);

const IconSend = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="19" x2="12" y2="5"></line>
    <polyline points="5 12 12 5 19 12"></polyline>
  </svg>
);

const IconClip = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
  </svg>
);

const IconExternal = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: 3, verticalAlign: 'middle' }}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

// Strict Emoji Stripper
function stripAllEmojis(text) {
  if (!text) return '';
  return text
    .replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{FE00}-\u{FE0F}]/gu, '')
    .trim();
}

// Inline Markdown Renderer for bold and links
function renderInlineText(text, onNavigate) {
  const clean = stripAllEmojis(text);
  const tokenRegex = /(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g;
  const parts = clean.split(tokenRegex);

  return parts.map((part, index) => {
    if (!part) return null;
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      const href = linkMatch[2];
      const isContactOrCalendly = href.includes('calendly.com') || href.includes('contact-us') || href.startsWith('/');
      return (
        <a
          key={index}
          href={href}
          onClick={(e) => {
            if (isContactOrCalendly && onNavigate) {
              e.preventDefault();
              onNavigate('/contact-us');
            }
          }}
          target={isContactOrCalendly ? "_self" : "_blank"}
          rel="noopener noreferrer"
          className="nd-msg-link"
        >
          {linkMatch[1]}
          <IconExternal />
        </a>
      );
    }
    const boldMatch = part.match(/^\*\*([^*]+)\*\*$/);
    if (boldMatch) {
      return (
        <strong key={index} className="nd-msg-bold">
          {boldMatch[1]}
        </strong>
      );
    }
    return <span key={index}>{part}</span>;
  });
}

// Clean Formatted Message Component
function FormattedMessage({ text, isStreaming, onNavigate }) {
  const cleanText = stripAllEmojis(text);
  const lines = cleanText.split('\n');

  return (
    <div className="nd-msg-rich-block">
      {lines.map((line, idx) => {
        const trimmed = line.trim();
        if (!trimmed) {
          return <div key={idx} className="nd-msg-gap" />;
        }
        if (trimmed.startsWith('- ') || trimmed.startsWith('• ') || trimmed.startsWith('* ')) {
          const itemText = trimmed.replace(/^[-•*]\s*/, '');
          return (
            <div key={idx} className="nd-msg-bullet-row">
              <span className="nd-msg-bullet-dot">•</span>
              <span className="nd-msg-bullet-body">{renderInlineText(itemText, onNavigate)}</span>
            </div>
          );
        }
        return (
          <p key={idx} className="nd-msg-para">
            {renderInlineText(line, onNavigate)}
          </p>
        );
      })}
      {isStreaming && <span className="nd-cursor-blink" />}
    </div>
  );
}

// Minimal, airy initial message with only 3 horizontal pills
const INITIAL_MESSAGES = [
  {
    id: 1,
    sender: 'bot',
    text: "Hi! I am Nova, your technical advisor at NovaDesk.\n\nTell me about your project, timeline, or budget, and I will prepare an itemized scope breakdown.",
    time: 'Just now',
    options: [
      { label: "Get a Quote", action: "quote" },
      { label: "Book a Call", action: "calendly" },
      { label: "WhatsApp", action: "whatsapp" }
    ]
  }
];

export default function ChatWidget() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState(() => {
    try {
      const saved = localStorage.getItem('novadesk_chat_history');
      return saved ? JSON.parse(saved) : INITIAL_MESSAGES;
    } catch {
      return INITIAL_MESSAGES;
    }
  });
  const [isStreaming, setIsStreaming] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [showTeaser, setShowTeaser] = useState(false);
  const [teaserDismissed, setTeaserDismissed] = useState(false);

  const [leadData, setLeadData] = useState(() => {
    try {
      const saved = localStorage.getItem('novadesk_lead_data');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);

  // Sync state to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('novadesk_chat_history', JSON.stringify(messages.slice(-25)));
    } catch (e) {}
  }, [messages]);

  useEffect(() => {
    try {
      localStorage.setItem('novadesk_lead_data', JSON.stringify(leadData));
    } catch (e) {}
  }, [leadData]);

  // Global ⌘K / Ctrl+K keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Subtle teaser prompt after 2s
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen && !teaserDismissed) {
        setShowTeaser(true);
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [isOpen, teaserDismissed]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isStreaming, isOpen]);

  // Minimal, light follow-up suggestion chips (Zero Emojis, Max 2-3 pills)
  const getContextOptions = (userText) => {
    const t = userText.toLowerCase();
    if (t.includes('price') || t.includes('cost') || t.includes('budget') || t.includes('rate') || t.includes('kitna')) {
      return [
        { label: "Request Proposal", action: "quote" },
        { label: "Book 30-Min Call", action: "calendly" }
      ];
    }
    if (t.includes('consult') || t.includes('call') || t.includes('schedule') || t.includes('meeting')) {
      return [
        { label: "Book via Calendly", action: "calendly" },
        { label: "Chat on WhatsApp", action: "whatsapp" }
      ];
    }
    return [
      { label: "Get a Quote", action: "quote" },
      { label: "Book a Call", action: "calendly" }
    ];
  };

  // Realtime SSE streaming
  const handleUserMessage = async (userText) => {
    if (!userText.trim() || isStreaming) return;

    const userMessage = {
      id: Date.now(),
      sender: 'user',
      text: userText.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    // Auto-extract contact info
    const contactInfo = extractContactDetails(userText);
    const updatedLead = {
      ...leadData,
      ...(contactInfo.email ? { email: contactInfo.email } : {}),
      ...(contactInfo.phone ? { phone: contactInfo.phone } : {}),
      lastQuery: userText
    };
    setLeadData(updatedLead);

    // Auto submit lead when email detected
    if (contactInfo.email) {
      submitLeadPayload({
        ...updatedLead,
        email: contactInfo.email,
        scope: userText,
        source: 'NovaDesk AI Consultation'
      });
    }

    const botMsgId = Date.now() + 1;
    const initialBotMessage = {
      id: botMsgId,
      sender: 'bot',
      text: '',
      streaming: true,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage, initialBotMessage]);
    setIsStreaming(true);

    let streamBuffer = '';

    await streamChatResponse({
      message: userText,
      history: messages.slice(-8),
      onChunk: (chunk) => {
        streamBuffer += chunk;
        setMessages(prev =>
          prev.map(m => (m.id === botMsgId ? { ...m, text: streamBuffer } : m))
        );
      },
      onDone: () => {
        setIsStreaming(false);
        const options = getContextOptions(userText);
        setMessages(prev =>
          prev.map(m =>
            m.id === botMsgId ? { ...m, streaming: false, options } : m
          )
        );
      },
      onError: (err) => {
        setIsStreaming(false);
        console.error('Chat error:', err);
      }
    });
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    const text = inputText;
    setInputText('');
    handleUserMessage(text);
  };

  const handleNavigateToContact = () => {
    navigate('/contact-us');
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOptionClick = (option) => {
    if (option.action === 'whatsapp') {
      window.open("https://wa.me/917870142813?text=Hi%20NOVADESK,%20I'm%20interested%20in%20building%20a%20project!", "_blank");
      return;
    }
    if (option.action === 'calendly' || option.action === 'contact_us') {
      handleNavigateToContact();
      return;
    }
    if (option.action === 'quote') {
      handleUserMessage("I would like an itemized project proposal and quote.");
      return;
    }
    handleUserMessage(option.label);
  };

  const handleRestartChat = () => {
    localStorage.removeItem('novadesk_chat_history');
    localStorage.removeItem('novadesk_lead_data');
    setMessages(INITIAL_MESSAGES);
    setLeadData({});
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsUploading(true);
    const uploadNoticeId = Date.now();
    setMessages(prev => [
      ...prev,
      {
        id: uploadNoticeId,
        sender: 'user',
        text: `Attached: ${file.name}`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);

    try {
      const uploadRes = await uploadDocument(file);
      setIsUploading(false);

      setLeadData(prev => ({
        ...prev,
        attachmentUrl: uploadRes.url,
        attachmentName: file.name
      }));

      // Bot acknowledges real file upload
      const botReplyId = Date.now() + 1;
      setMessages(prev => [
        ...prev,
        {
          id: botReplyId,
          sender: 'bot',
          text: `Document "${file.name}" received. Please share your Name and Work Email so our engineering team can review specifications and send a tailored proposal.`,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          options: [
            { label: "Request a Quote", action: "quote" },
            { label: "Book a Call", action: "calendly" }
          ]
        }
      ]);
    } catch (err) {
      setIsUploading(false);
      setMessages(prev =>
        prev.map(m =>
          m.id === uploadNoticeId
            ? { ...m, text: `Upload failed: ${err.message}` }
            : m
        )
      );
    }
  };

  return (
    <div className="nd-light-consult-widget">
      <style>{`
        /* =========================================================
           NOVADESK AIRY LIGHT THEME — CLUTTER-FREE & MINIMAL
           ========================================================= */

        .nd-light-consult-widget {
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          z-index: 9999;
          position: fixed;
          bottom: 20px;
          right: 20px;
          letter-spacing: -0.01em;
          -webkit-font-smoothing: antialiased;
        }

        /* ─── FUTURISTIC CYBER LAUNCHER BUTTON (Ultra-Sleek & Light) ─── */
        .nd-futuristic-capsule-wrap {
          position: relative;
          display: inline-block;
          user-select: none;
        }

        /* Ambient Pulsing Aura */
        .nd-capsule-aura {
          position: absolute;
          inset: -4px;
          border-radius: 9999px;
          background: linear-gradient(135deg, rgba(46, 41, 255, 0.4), rgba(0, 210, 255, 0.25), rgba(139, 92, 246, 0.3));
          filter: blur(10px);
          opacity: 0.55;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          animation: ndAuraBreath 4s ease-in-out infinite alternate;
          pointer-events: none;
        }

        @keyframes ndAuraBreath {
          0% { opacity: 0.4; filter: blur(8px); transform: scale(0.98); }
          100% { opacity: 0.75; filter: blur(13px); transform: scale(1.03); }
        }

        /* Main Futuristic Glass Capsule */
        .nd-futuristic-capsule {
          position: relative;
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.94);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(46, 41, 255, 0.22);
          border-radius: 9999px;
          padding: 6px 14px 6px 8px;
          cursor: pointer;
          box-shadow: 
            0 10px 28px -4px rgba(15, 23, 42, 0.12),
            0 2px 6px rgba(0, 0, 0, 0.04),
            inset 0 1px 0 rgba(255, 255, 255, 1);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;
        }

        /* Cyber Sheen Reflection Sweep */
        .nd-futuristic-capsule::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -120%;
          width: 60%;
          height: 200%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.8),
            rgba(0, 210, 255, 0.2),
            transparent
          );
          transform: rotate(25deg);
          animation: ndCyberSheen 5s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes ndCyberSheen {
          0%, 65% { left: -120%; }
          85%, 100% { left: 220%; }
        }

        .nd-futuristic-capsule-wrap:hover .nd-capsule-aura {
          opacity: 0.95;
          filter: blur(14px);
          transform: scale(1.06);
        }

        .nd-futuristic-capsule-wrap:hover .nd-futuristic-capsule {
          transform: translateY(-2px) scale(1.02);
          border-color: #2E29FF;
          box-shadow: 
            0 16px 36px -4px rgba(46, 41, 255, 0.24),
            0 0 16px rgba(0, 210, 255, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 1);
        }

        /* Holographic Avatar Core */
        .nd-avatar-core {
          position: relative;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: linear-gradient(135deg, #f8fafc 0%, #eef2ff 100%);
          border: 1px solid rgba(46, 41, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: inset 0 1px 3px rgba(46, 41, 255, 0.08);
        }

        /* Pulsing Radar Ring */
        .nd-core-radar {
          position: absolute;
          inset: -3px;
          border-radius: 50%;
          border: 1.5px solid rgba(46, 41, 255, 0.4);
          animation: ndRadarPing 2.5s cubic-bezier(0.16, 1, 0.3, 1) infinite;
          pointer-events: none;
        }

        @keyframes ndRadarPing {
          0% { transform: scale(0.85); opacity: 0.9; }
          70%, 100% { transform: scale(1.4); opacity: 0; }
        }

        /* Active Green Quantum Beacon */
        .nd-quantum-beacon {
          position: absolute;
          bottom: 0px;
          right: 0px;
          width: 7.5px;
          height: 7.5px;
          border-radius: 50%;
          background: #10B981;
          border: 1.5px solid #ffffff;
          box-shadow: 0 0 6px rgba(16, 185, 129, 0.8);
        }

        /* Content Meta */
        .nd-capsule-body {
          display: flex;
          flex-direction: column;
          gap: 1px;
        }

        .nd-capsule-title-row {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .nd-capsule-main-text {
          font-size: 13px;
          font-weight: 700;
          color: #0f172a;
          letter-spacing: -0.2px;
          line-height: 1.2;
        }

        /* Futuristic Micro AI Badge */
        .nd-ai-glow-tag {
          font-size: 8.5px;
          font-weight: 800;
          letter-spacing: 0.6px;
          color: #ffffff;
          background: linear-gradient(135deg, #2E29FF 0%, #00D2FF 100%);
          padding: 1px 5px;
          border-radius: 4px;
          line-height: 1.2;
          box-shadow: 0 2px 6px rgba(46, 41, 255, 0.3);
        }

        /* Animated Neural Waveform Visualizer */
        .nd-neural-equalizer {
          display: flex;
          align-items: center;
          gap: 2px;
          height: 9px;
          margin-top: 1px;
        }

        .nd-eq-bar {
          width: 2px;
          border-radius: 9999px;
          background: linear-gradient(180deg, #2E29FF, #00D2FF);
          animation: ndEqDance 1.2s ease-in-out infinite alternate;
        }

        .nd-eq-bar.b-1 { height: 3px; animation-delay: 0.0s; }
        .nd-eq-bar.b-2 { height: 8px; animation-delay: 0.25s; }
        .nd-eq-bar.b-3 { height: 5px; animation-delay: 0.1s; }
        .nd-eq-bar.b-4 { height: 7px; animation-delay: 0.35s; }

        @keyframes ndEqDance {
          0% { transform: scaleY(0.4); opacity: 0.7; }
          100% { transform: scaleY(1.3); opacity: 1; }
        }

        /* Tactile Metallic Keycap Badge */
        .nd-metallic-kbd {
          display: inline-flex;
          align-items: center;
          gap: 2px;
          background: linear-gradient(180deg, #ffffff 0%, #f1f5f9 100%);
          border: 1px solid #cbd5e1;
          color: #475569;
          font-size: 10px;
          font-weight: 700;
          padding: 2px 6px;
          border-radius: 6px;
          box-shadow: 
            0 1px 2px rgba(0, 0, 0, 0.06),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        }

        /* ─── POPUP TEASER CARD ─── */
        .nd-teaser-bubble {
          position: absolute;
          bottom: 48px;
          right: 0;
          width: 260px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 9px 12px;
          box-shadow: 0 10px 26px rgba(15, 23, 42, 0.08);
          animation: ndTeaserFade 0.2s cubic-bezier(0.16, 1, 0.3, 1) both;
          cursor: pointer;
        }

        @keyframes ndTeaserFade {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* ─── COMPACT, AIRY MODAL (440px Height, Zero Clutter) ─── */
        .nd-consult-modal {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 350px;
          max-width: calc(100vw - 28px);
          height: 450px;
          max-height: calc(100vh - 90px);
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          box-shadow: 0 16px 40px -6px rgba(15, 23, 42, 0.12), 0 0 1px 1px rgba(0, 0, 0, 0.03);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          z-index: 10000;
          animation: ndModalSlide 0.22s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        @keyframes ndModalSlide {
          from { opacity: 0; transform: translateY(10px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* ─── MINIMAL AIRY HEADER ─── */
        .nd-modal-header {
          padding: 10px 14px;
          background: #ffffff;
          border-bottom: 1px solid #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-shrink: 0;
        }

        .nd-header-profile {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .nd-header-avatar-circle {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .nd-header-title-row {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .nd-header-brand-title {
          font-size: 13.5px;
          font-weight: 700;
          color: #0f172a;
          margin: 0;
          line-height: 1.2;
        }

        .nd-header-online-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #10B981;
          display: inline-block;
        }

        .nd-header-controls {
          display: flex;
          align-items: center;
          gap: 2px;
        }

        .nd-icon-button {
          background: transparent;
          border: none;
          color: #94a3b8;
          padding: 5px;
          border-radius: 6px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.15s;
        }

        .nd-icon-button:hover {
          color: #0f172a;
          background: #f1f5f9;
        }

        /* ─── CHAT MESSAGES BODY (CLEAN & SPACIOUS) ─── */
        .nd-chat-stream {
          flex: 1;
          padding: 14px 14px 10px 14px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 12px;
          background: #ffffff;
          scrollbar-width: thin;
          scrollbar-color: #e2e8f0 transparent;
        }

        .nd-chat-stream::-webkit-scrollbar {
          width: 4px;
        }

        .nd-chat-stream::-webkit-scrollbar-track {
          background: transparent;
        }

        .nd-chat-stream::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 9999px;
        }

        .nd-chat-stream::-webkit-scrollbar-thumb:hover {
          background: #cbd5e1;
        }

        .nd-stream-msg {
          display: flex;
          flex-direction: column;
          max-width: 90%;
        }

        .nd-stream-msg.user {
          align-self: flex-end;
          max-width: 84%;
        }

        .nd-stream-msg.bot {
          align-self: flex-start;
        }

        .nd-bot-row {
          display: flex;
          align-items: flex-start;
          gap: 8px;
        }

        .nd-chat-bubble {
          padding: 8px 12px;
          border-radius: 14px;
          font-size: 12.5px;
          line-height: 1.5;
          word-break: break-word;
        }

        .nd-stream-msg.user .nd-chat-bubble {
          background: #2E29FF;
          color: #ffffff;
          border-bottom-right-radius: 3px;
        }

        .nd-stream-msg.bot .nd-chat-bubble {
          background: #f8fafc;
          color: #334155;
          border: 1px solid #f1f5f9;
          border-bottom-left-radius: 3px;
        }

        /* ─── RICH TEXT FORMATTING ─── */
        .nd-msg-rich-block {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .nd-msg-para {
          margin: 0;
          font-size: 12.5px;
          line-height: 1.5;
        }

        .nd-msg-gap {
          height: 3px;
        }

        .nd-msg-bullet-row {
          display: flex;
          align-items: baseline;
          gap: 6px;
          margin-top: 1px;
        }

        .nd-msg-bullet-dot {
          color: #2E29FF;
          font-weight: 700;
          font-size: 13px;
          line-height: 1;
        }

        .nd-msg-bullet-body {
          flex: 1;
          font-size: 12.5px;
          line-height: 1.45;
        }

        .nd-msg-bold {
          font-weight: 650;
          color: #0f172a;
        }

        .nd-msg-link {
          color: #2E29FF;
          text-decoration: underline;
          text-underline-offset: 2px;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
        }

        .nd-cursor-blink {
          display: inline-block;
          width: 3.5px;
          height: 12px;
          background: #2E29FF;
          margin-left: 2px;
          vertical-align: middle;
          animation: ndCursorPulse 0.75s infinite;
        }

        @keyframes ndCursorPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .nd-time-stamp {
          font-size: 9.5px;
          color: #94a3b8;
          margin-top: 2px;
          align-self: flex-end;
        }

        .nd-stream-msg.bot .nd-time-stamp {
          align-self: flex-start;
          margin-left: 32px;
        }

        /* ─── FUTURISTIC ACTION CHIPS (FROSTED GLASS & GRADIENT HOVER) ─── */
        .nd-pills-row {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 6px;
          margin-left: 32px;
        }

        .nd-action-chip {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(46, 41, 255, 0.16);
          color: #334155;
          padding: 4px 11px;
          border-radius: 9999px;
          font-size: 11px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          font-family: inherit;
          box-shadow: 0 1px 3px rgba(46, 41, 255, 0.04);
        }

        .nd-action-chip:hover {
          background: linear-gradient(135deg, #2E29FF 0%, #4338CA 100%);
          border-color: #2E29FF;
          color: #ffffff;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(46, 41, 255, 0.25);
        }

        /* ─── SLEEK SINGLE-LINE INPUT BAR ─── */
        .nd-bottom-dock {
          padding: 8px 12px 10px 12px;
          background: #ffffff;
          border-top: 1px solid #f8fafc;
          flex-shrink: 0;
        }

        .nd-clean-input-bar {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 9999px;
          padding: 3px 4px 3px 10px;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: all 0.15s ease;
        }

        .nd-clean-input-bar:focus-within {
          background: #ffffff;
          border-color: #2E29FF;
          box-shadow: 0 0 0 2px rgba(46, 41, 255, 0.08);
        }

        .nd-attach-icon-btn {
          background: transparent;
          border: none;
          color: #94a3b8;
          cursor: pointer;
          padding: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: color 0.15s;
        }

        .nd-attach-icon-btn:hover {
          color: #2E29FF;
        }

        .nd-clean-input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: #0f172a;
          font-size: 12.5px;
          font-family: inherit;
          min-width: 0;
        }

        .nd-clean-input::placeholder {
          color: #94a3b8;
        }

        .nd-send-btn {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #e2e8f0;
          border: none;
          color: #94a3b8;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          flex-shrink: 0;
        }

        .nd-send-btn.active {
          background: linear-gradient(135deg, #2E29FF 0%, #00C6FF 100%);
          color: #ffffff;
          box-shadow: 0 3px 12px rgba(46, 41, 255, 0.35);
          transform: scale(1.05);
        }

        /* ─── MOBILE RESPONSIVENESS ─── */
        @media (max-width: 768px) {
          .nd-light-consult-widget {
            bottom: 12px;
            right: 12px;
          }
          .nd-consult-modal {
            bottom: 8px;
            right: 8px;
            left: 8px;
            width: auto;
            max-width: none;
            height: min(480px, calc(100vh - 50px));
            border-radius: 16px;
          }
        }
      `}</style>

      {/* FUTURISTIC FLOATING TRIGGER CAPSULE */}
      {!isOpen && (
        <div className="nd-futuristic-capsule-wrap">
          {showTeaser && !teaserDismissed && (
            <div
              className="nd-teaser-bubble"
              onClick={() => {
                setIsOpen(true);
                setShowTeaser(false);
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '3px' }}>
                <span style={{ fontSize: '10.5px', color: '#2E29FF', fontWeight: '700', letterSpacing: '0.4px' }}>
                  NovaDesk AI
                </span>
                <button
                  type="button"
                  style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer', fontSize: '11px', padding: 0 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowTeaser(false);
                    setTeaserDismissed(true);
                  }}
                >
                  ✕
                </button>
              </div>
              <div style={{ fontSize: '12px', color: '#475569', fontWeight: '500', lineHeight: '1.35' }}>
                Planning a project? Get an instant scope breakdown and estimate.
              </div>
            </div>
          )}

          {/* Ambient Cyber Glow Aura */}
          <div className="nd-capsule-aura" />

          {/* Main Futuristic Capsule */}
          <div
            className="nd-futuristic-capsule"
            onClick={() => {
              setIsOpen(true);
              setShowTeaser(false);
            }}
            title="Press ⌘K or click to consult Nova AI"
          >
            <div className="nd-avatar-core">
              <div className="nd-core-radar" />
              <NovaLottieAvatar width={24} height={24} clean={false} />
              <div className="nd-quantum-beacon" />
            </div>

            <div className="nd-capsule-body">
              <div className="nd-capsule-title-row">
                <span className="nd-capsule-main-text">Ask Nova</span>
                <span className="nd-ai-glow-tag">AI</span>
              </div>
              <div className="nd-neural-equalizer" title="Autonomous AI Active">
                <span className="nd-eq-bar b-1" />
                <span className="nd-eq-bar b-2" />
                <span className="nd-eq-bar b-3" />
                <span className="nd-eq-bar b-4" />
              </div>
            </div>

            <span className="nd-metallic-kbd">
              <span>⌘</span>K
            </span>
          </div>
        </div>
      )}

      {/* COMPACT, AIRY MODAL (Clean, Zero Clutter) */}
      {isOpen && (
        <div className="nd-consult-modal">
          {/* Header */}
          <div className="nd-modal-header">
            <div className="nd-header-profile">
              <div className="nd-header-avatar-circle">
                <NovaLottieAvatar width={20} height={20} />
              </div>
              <div className="nd-header-title-row">
                <h4 className="nd-header-brand-title">Nova</h4>
                <span className="nd-header-online-dot" title="Online" />
              </div>
            </div>

            <div className="nd-header-controls">
              <button
                type="button"
                className="nd-icon-button"
                title="Restart chat"
                onClick={handleRestartChat}
              >
                <IconRefresh />
              </button>
              <button
                type="button"
                className="nd-icon-button"
                title="Close (Esc)"
                onClick={() => setIsOpen(false)}
              >
                <IconClose />
              </button>
            </div>
          </div>

          {/* Messages Stream */}
          <div className="nd-chat-stream">
            {messages.map((m) => (
              <div key={m.id} className={`nd-stream-msg ${m.sender}`}>
                <div className="nd-bot-row">
                  {m.sender === 'bot' && (
                    <div style={{ width: '22px', height: '22px', flexShrink: 0, marginTop: '2px' }}>
                      <NovaLottieAvatar width={22} height={22} />
                    </div>
                  )}
                  <div className="nd-chat-bubble">
                    <FormattedMessage text={m.text} isStreaming={m.streaming} onNavigate={handleNavigateToContact} />
                  </div>
                </div>

                {/* Subtle Horizontal Option Chips */}
                {m.options && !m.streaming && (
                  <div className="nd-pills-row">
                    {m.options.map((opt, idx) => (
                      <button
                        key={idx}
                        type="button"
                        className="nd-action-chip"
                        onClick={() => handleOptionClick(opt)}
                      >
                        {stripAllEmojis(opt.label)}
                      </button>
                    ))}
                  </div>
                )}

                <span className="nd-time-stamp">{m.time}</span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Clean Single-Line Input Dock */}
          <div className="nd-bottom-dock">
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg,.zip"
            />

            <form onSubmit={handleSend} className="nd-clean-input-bar">
              <button
                type="button"
                className="nd-attach-icon-btn"
                title="Attach project brief"
                onClick={() => fileInputRef.current?.click()}
                disabled={isUploading}
              >
                <IconClip />
              </button>
              <input
                type="text"
                className="nd-clean-input"
                placeholder={isStreaming ? "Nova is thinking..." : isUploading ? "Uploading..." : "Message Nova..."}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                disabled={isStreaming || isUploading}
              />
              <button
                type="submit"
                className={`nd-send-btn ${inputText.trim() && !isStreaming ? 'active' : ''}`}
                disabled={!inputText.trim() || isStreaming}
                title="Send"
              >
                <IconSend />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
