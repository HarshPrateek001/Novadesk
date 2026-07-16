import React, { useState, useRef, useEffect } from 'react';

// Icons SVG Helper
const IconSmileChat = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    <path d="M8 11.5c1 1.5 2.5 2 4 2s3-.5 4-2"/>
  </svg>
);

const IconChevronDown = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const IconBack = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const IconClose = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const IconMore = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="1"></circle>
    <circle cx="19" cy="12" r="1"></circle>
    <circle cx="5" cy="12" r="1"></circle>
  </svg>
);

const IconSend = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="19" x2="12" y2="5"></line>
    <polyline points="5 12 12 5 19 12"></polyline>
  </svg>
);

const IconClip = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
  </svg>
);

const IconSmileInput = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
    <line x1="9" y1="9" x2="9.01" y2="9"></line>
    <line x1="15" y1="9" x2="15.01" y2="9"></line>
  </svg>
);

const IconGif = () => (
  <span style={{ fontSize: '10px', fontWeight: 'bold', border: '1.5px solid currentColor', borderRadius: '4px', padding: '0 2px', lineHeight: '1', display: 'inline-block' }}>GIF</span>
);

const IconMic = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
    <line x1="12" y1="19" x2="12" y2="23"></line>
    <line x1="8" y1="23" x2="16" y2="23"></line>
  </svg>
);

const IconExpand = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 3 21 3 21 9"></polyline>
    <polyline points="9 21 3 21 3 15"></polyline>
    <line x1="21" y1="3" x2="14" y2="10"></line>
    <line x1="3" y1="21" x2="10" y2="14"></line>
  </svg>
);

const IconCollapse = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="4 14 10 14 10 20"></polyline>
    <polyline points="20 10 14 10 14 4"></polyline>
    <line x1="14" y1="10" x2="21" y2="3"></line>
    <line x1="10" y1="14" x2="3" y2="21"></line>
  </svg>
);

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, sender: 'bot', text: 'Hey! Thanks for dropping by. Harsh here. What startup/idea are you building?', time: 'Just now' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);

  // Scroll to bottom helper
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isTyping, isOpen]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMessage = {
      id: Date.now(),
      sender: 'user',
      text: inputText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI response after 1.2s
    setTimeout(() => {
      setIsTyping(false);
      const responses = [
        "That sounds awesome! I specialize in shipping startup MVPs in 2-4 weeks. Drop your email/WhatsApp here so we can connect directly!",
        "Got it! Let's build it out. You can also book a free 30-min call on our website to discuss the scope. What stack are you thinking of?",
        "Awesome! I build with Next.js, Supabase, FastAPI, and Mobile Flutter. Leave your contact info and I'll ping you in a few minutes!"
      ];
      const randomReply = responses[Math.floor(Math.random() * responses.length)];

      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        sender: 'bot',
        text: randomReply,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    }, 1500);
  };

  const handleClipClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const fileMessage = {
      id: Date.now(),
      sender: 'user',
      text: `📎 Attached file: ${file.name} (${(file.size / 1024).toFixed(1)} KB)`,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages(prev => [...prev, fileMessage]);

    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        sender: 'bot',
        text: `Got your file "${file.name}"! I'll review it and get back to you.`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    }, 1200);
  };

  const handleSmileyClick = () => {
    const emojis = ["😊", "👍", "🚀", "🔥", "💡", "🙌"];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    setInputText(prev => prev + (prev ? ' ' : '') + randomEmoji);
  };

  const handleGifClick = () => {
    const gifMessage = {
      id: Date.now(),
      sender: 'user',
      text: '👾 [GIF: Let\'s build it!]',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages(prev => [...prev, gifMessage]);

    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        sender: 'bot',
        text: 'Awesome GIF! 🚀 Let\'s scope your project features.',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    }, 1200);
  };

  const handleMicClick = () => {
    setInputText("🎙️ Hey Harsh, I want to build a SaaS application!");
  };

  return (
    <div className="nd-chat-widget">
      <style>{`
        .nd-chat-widget {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 9999;
          font-family: 'Space Grotesk', sans-serif;
        }
        .nd-chat-fab {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background-color: #007bc4;
          border: none;
          cursor: pointer;
          box-shadow: 0 8px 24px rgba(0, 118, 198, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .nd-chat-fab:hover {
          transform: scale(1.08);
          box-shadow: 0 12px 28px rgba(0, 118, 198, 0.45);
        }
        .nd-chat-window {
          position: absolute;
          bottom: 80px;
          right: 0;
          width: 370px;
          height: 560px;
          background-color: #0f172a;
          border-radius: 24px;
          box-shadow: 0 16px 48px rgba(0, 0, 0, 0.4);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.08);
          animation: slideUpChat 0.35s cubic-bezier(0.16, 1, 0.3, 1) both;
          transition: width 0.3s cubic-bezier(0.16, 1, 0.3, 1), height 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .nd-chat-window.expanded {
          width: 480px;
          height: 720px;
        }
        @keyframes slideUpChat {
          from { opacity: 0; transform: translateY(24px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        
        /* Dropdown Menu */
        .nd-chat-menu {
          position: absolute;
          top: 64px;
          right: 20px;
          background-color: #1e293b;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 6px;
          z-index: 1000;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
          width: 160px;
          display: flex;
          flex-direction: column;
          gap: 2px;
          animation: slideUpChatMenu 0.2s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        @keyframes slideUpChatMenu {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .nd-chat-menu-item {
          width: 100%;
          background: transparent;
          border: none;
          color: #ffffff;
          padding: 10px 12px;
          font-size: 13px;
          text-align: left;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          border-radius: 8px;
          transition: background-color 0.2s;
          font-family: inherit;
        }
        .nd-chat-menu-item:hover {
          background-color: #334155;
        }
        
        /* HEADER */
        .nd-chat-header {
          background-color: #0b0f19;
          padding: 16px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }
        .nd-chat-header-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .nd-chat-header-back {
          color: #94a3b8;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: color 0.2s;
        }
        .nd-chat-header-back:hover {
          color: #ffffff;
        }
        .nd-chat-avatar-wrapper {
          position: relative;
          width: 38px;
          height: 38px;
        }
        .nd-chat-avatar-inner {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
          border: 1.5px solid rgba(255, 255, 255, 0.15);
          background: #1e293b;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .nd-chat-avatar {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(2.2);
          transform-origin: center 18%;
        }
        .nd-chat-status-dot {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background-color: #10B981;
          border: 2px solid #0b0f19;
          z-index: 2;
        }
        .nd-chat-header-info {
          text-align: left;
        }
        .nd-chat-header-info h4 {
          font-size: 14.5px;
          font-weight: 700;
          color: #ffffff;
          margin: 0;
        }
        .nd-chat-header-info p {
          font-size: 11px;
          color: #94a3b8;
          margin: 2px 0 0 0;
          display: flex;
          align-items: center;
          gap: 4px;
          font-weight: 500;
        }
        .nd-chat-header-right {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .nd-chat-header-btn {
          background: transparent;
          border: none;
          color: #94a3b8;
          cursor: pointer;
          padding: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: color 0.2s;
        }
        .nd-chat-header-btn:hover {
          color: #ffffff;
        }

        /* MESSAGES CONTAINER */
        .nd-chat-messages {
          flex: 1;
          padding: 20px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .nd-chat-prompt {
          font-size: 12px;
          color: #64748b;
          text-align: center;
          margin: 4px 0 12px 0;
          font-weight: 500;
        }
        .nd-chat-msg {
          display: flex;
          flex-direction: column;
          max-width: 80%;
          text-align: left;
        }
        .nd-chat-msg.user {
          align-self: flex-end;
        }
        .nd-chat-msg.bot {
          align-self: flex-start;
        }
        .nd-chat-msg-bubble {
          padding: 12px 16px;
          border-radius: 18px;
          font-size: 13.5px;
          line-height: 1.5;
          font-weight: 400;
        }
        .nd-chat-msg.user .nd-chat-msg-bubble {
          background-color: #007bc4;
          color: #ffffff;
          border-bottom-right-radius: 4px;
        }
        .nd-chat-msg.bot .nd-chat-msg-bubble {
          background-color: #1e293b;
          color: #f1f5f9;
          border-bottom-left-radius: 4px;
        }
        .nd-chat-msg-time {
          font-size: 10px;
          color: #475569;
          margin-top: 4px;
          align-self: flex-end;
        }
        .nd-chat-msg.bot .nd-chat-msg-time {
          align-self: flex-start;
        }

        /* TYPING STATE */
        .nd-chat-typing {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 12px 16px;
          background-color: #1e293b;
          border-radius: 18px;
          border-bottom-left-radius: 4px;
          align-self: flex-start;
          width: fit-content;
        }
        .nd-chat-typing span {
          width: 6px;
          height: 6px;
          background-color: #94a3b8;
          border-radius: 50%;
          display: inline-block;
          animation: bounce 1.4s infinite ease-in-out both;
        }
        .nd-chat-typing span:nth-child(1) { animation-delay: -0.32s; }
        .nd-chat-typing span:nth-child(2) { animation-delay: -0.16s; }
        @keyframes bounce {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1.0); }
        }

        /* INPUT PANEL */
        .nd-chat-input-area {
          padding: 16px 20px 24px 20px;
          background-color: #0b0f19;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }
        .nd-chat-input-box {
          border: 1px solid #1e293b;
          border-radius: 18px;
          padding: 12px 14px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          background-color: #0f172a;
          transition: border-color 0.25s;
        }
        .nd-chat-input-box:focus-within {
          border-color: #007bc4;
        }
        .nd-chat-input-field {
          background: transparent;
          border: none;
          outline: none;
          color: #ffffff;
          font-size: 13.5px;
          width: 100%;
          font-family: inherit;
          resize: none;
        }
        .nd-chat-input-field::placeholder {
          color: #475569;
        }
        .nd-chat-input-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .nd-chat-input-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #475569;
        }
        .nd-chat-action-btn {
          background: transparent;
          border: none;
          color: #475569;
          cursor: pointer;
          padding: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: color 0.2s;
        }
        .nd-chat-action-btn:hover {
          color: #94a3b8;
        }
        .nd-chat-send-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background-color: #1e293b;
          border: none;
          color: #94a3b8;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.25s;
        }
        .nd-chat-send-btn.active {
          background-color: #007bc4;
          color: #ffffff;
        }
      `}</style>

      {/* CHAT WINDOW */}
      {isOpen && (
        <div className={`nd-chat-window ${isExpanded ? 'expanded' : ''}`}>
          {/* Header */}
          <div className="nd-chat-header">
            <div className="nd-chat-header-left">
              <button className="nd-chat-header-back" onClick={() => setIsOpen(false)}>
                <IconBack />
              </button>
              <div className="nd-chat-avatar-wrapper">
                <div className="nd-chat-avatar-inner">
                  <img src="/hero-my-image.webp" alt="Founder" className="nd-chat-avatar" />
                </div>
                <span className="nd-chat-status-dot" />
              </div>
              <div className="nd-chat-header-info">
                <h4>Harsh Prateek</h4>
                <p>
                  <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10B981' }} />
                  Online
                </p>
              </div>
            </div>
            
            <div className="nd-chat-header-right">
              <button className="nd-chat-header-btn" onClick={() => setShowMenu(!showMenu)}>
                <IconMore />
              </button>
              <button className="nd-chat-header-btn" onClick={() => setIsOpen(false)}>
                <IconClose />
              </button>
            </div>
          </div>

          {/* Expand Dropdown Menu */}
          {showMenu && (
            <div className="nd-chat-menu">
              <button
                type="button"
                className="nd-chat-menu-item"
                onClick={() => {
                  setIsExpanded(!isExpanded);
                  setShowMenu(false);
                }}
              >
                {isExpanded ? <IconCollapse /> : <IconExpand />}
                {isExpanded ? 'Collapse window' : 'Expand window'}
              </button>
            </div>
          )}

          {/* Messages */}
          <div className="nd-chat-messages">
            <div className="nd-chat-prompt">Ask us anything, or share your feedback.</div>
            
            {messages.map((m) => (
              <div key={m.id} className={`nd-chat-msg ${m.sender}`}>
                <div className="nd-chat-msg-bubble">{m.text}</div>
                <div className="nd-chat-msg-time">{m.time}</div>
              </div>
            ))}

            {isTyping && (
              <div className="nd-chat-typing">
                <span />
                <span />
                <span />
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input Panel */}
          <div className="nd-chat-input-area">
            {/* Hidden file input */}
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
            
            <form onSubmit={handleSend} className="nd-chat-input-box">
              <input
                type="text"
                className="nd-chat-input-field"
                placeholder="Message..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
              <div className="nd-chat-input-bottom">
                <div className="nd-chat-input-actions">
                  <button type="button" className="nd-chat-action-btn" onClick={handleClipClick}><IconClip /></button>
                  <button type="button" className="nd-chat-action-btn" onClick={handleSmileyClick}><IconSmileInput /></button>
                  <button type="button" className="nd-chat-action-btn" onClick={handleGifClick}><IconGif /></button>
                  <button type="button" className="nd-chat-action-btn" onClick={handleMicClick}><IconMic /></button>
                </div>
                <button
                  type="submit"
                  className={`nd-chat-send-btn ${inputText.trim() ? 'active' : ''}`}
                  disabled={!inputText.trim()}
                >
                  <IconSend />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* FAB BUTTON */}
      <button className="nd-chat-fab" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <IconChevronDown /> : <IconSmileChat />}
      </button>
    </div>
  );
}
