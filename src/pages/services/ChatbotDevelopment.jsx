import React, { useEffect, useState, useRef } from 'react';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';

// SVG Icons
const ArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.0032 9.41421L7.39663 18.0208L5.98242 16.6066L14.589 8H7.00324V6H18.0032V17H16.0032V9.41421Z" fill="currentColor"/>
  </svg>
);

const CheckCircle = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"/>
  </svg>
);

const ChevronDown = ({ isOpen }) => (
  <svg 
    width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const IconChevronDown = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
);

const HeroCheckBadge = () => (
  <span style={{
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    background: 'rgba(46, 41, 255, 0.1)',
    color: '#2E29FF',
    flexShrink: 0
  }}>
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  </span>
);

function FaqItem({ q, a, open, onToggle }) {
  return (
    <div className={`nd-faq-item ${open ? 'nd-faq-open' : ''}`}>
      <button className="nd-faq-q" onClick={onToggle}>
        <span>{q}</span>
        <span className="nd-faq-icon">
          <IconChevronDown />
        </span>
      </button>
      {open && <div className="nd-faq-a">{a}</div>}
    </div>
  );
}

function HeroChatAnimation() {
  const [messages, setMessages] = useState([
    { id: 1, type: 'user', text: "Hi! What's your most popular AI service?" }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [step, setStep] = useState(0);
  const chatRef = useRef(null);

  const conversationSteps = [
    {
      type: 'ai',
      text: "Our top solution is the 24/7 Conversational AI Assistant 🤖 — simple, intelligent, and trained directly on your business knowledge.",
      note: "NovaDesk AI Answered ✨"
    },
    {
      type: 'user',
      text: "Can it integrate with Shopify and WhatsApp?"
    },
    {
      type: 'ai',
      text: "Absolutely! 🚀 We seamlessly connect chatbots with Shopify, WhatsApp, Salesforce, Zendesk, and custom APIs.",
      note: "NovaDesk AI Answered ✨"
    },
    {
      type: 'user',
      text: "Awesome! How fast can we launch?"
    },
    {
      type: 'ai',
      text: "We can deploy your custom AI chatbot in as fast as 2 to 4 weeks! ⚡",
      note: "NovaDesk AI Answered ✨"
    }
  ];

  useEffect(() => {
    let timer;
    if (step < conversationSteps.length) {
      const nextItem = conversationSteps[step];
      if (nextItem.type === 'ai') {
        setIsTyping(true);
        timer = setTimeout(() => {
          setIsTyping(false);
          setMessages((prev) => [...prev, { ...nextItem, id: Date.now() }]);
          setStep((s) => s + 1);
        }, 1800);
      } else {
        timer = setTimeout(() => {
          setMessages((prev) => [...prev, { ...nextItem, id: Date.now() }]);
          setStep((s) => s + 1);
        }, 1400);
      }
    } else {
      timer = setTimeout(() => {
        setMessages([{ id: 1, type: 'user', text: "Hi! What's your most popular AI service?" }]);
        setStep(0);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [step]);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  return (
    <div className="nd-hero-browser-wrapper">
      <div className="nd-browser-card">
        <div className="nd-browser-topbar">
          <div className="nd-browser-dots">
            <span className="nd-dot red"></span>
            <span className="nd-dot yellow"></span>
            <span className="nd-dot green"></span>
          </div>
          <div className="nd-browser-url">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '6px', color: '#10B981'}}>
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            yourwebsite.com
          </div>
        </div>

        <div className="nd-browser-content">
          <div className="nd-wireframe-left">
            <div className="nd-wf-bar header-bar"></div>
            <div className="nd-wf-bar sub-bar"></div>
            <div className="nd-wf-line line-1"></div>
            <div className="nd-wf-line line-2"></div>
            <div className="nd-wf-buttons">
              <div className="nd-wf-btn primary"></div>
              <div className="nd-wf-btn secondary"></div>
            </div>
            <div className="nd-wf-footer-box"></div>
          </div>

          <div className="nd-chat-phone">
            <div className="nd-phone-header">
              <div className="nd-phone-user">
                <div className="nd-avatar-wrapper">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80" 
                    alt="AI Assistant" 
                    className="nd-avatar-img"
                  />
                  <span className="nd-online-dot"></span>
                </div>
                <div className="nd-user-info">
                  <span className="nd-user-name">AI Assistant</span>
                  <span className="nd-user-status">Online 24/7</span>
                </div>
              </div>
              <button className="nd-close-btn" aria-label="Close">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            <div className="nd-phone-body" ref={chatRef}>
              <div className="nd-messages-list">
                {messages.map((msg) => (
                  <div key={msg.id} className={`nd-chat-bubble-wrap ${msg.type}`}>
                    {msg.type === 'user' ? (
                      <div className="nd-bubble user-bubble">
                        {msg.text}
                      </div>
                    ) : (
                      <div className="nd-bubble ai-bubble">
                        <p className="nd-ai-text">{msg.text}</p>
                        {msg.note && <span className="nd-ai-badge">{msg.note}</span>}
                      </div>
                    )}
                  </div>
                ))}

                {isTyping && (
                  <div className="nd-chat-bubble-wrap ai">
                    <div className="nd-bubble ai-bubble typing-bubble">
                      <span className="typing-dot"></span>
                      <span className="typing-dot"></span>
                      <span className="typing-dot"></span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="nd-phone-footer">
              <input 
                type="text" 
                placeholder="Ask AI anything..." 
                className="nd-phone-input" 
                readOnly 
              />
              <button className="nd-phone-send" aria-label="Send">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ArchViz({ activeArch }) {
  return (
    <div className="av-wrapper">

      {/* ── 1. Rule-Based: Flowchart Decision Tree ── */}
      {activeArch === 0 && (
        <div className="av-scene av-rule">
          <div className="av-chrome-bar">
            <span className="av-dot red"/><span className="av-dot yellow"/><span className="av-dot green"/>
            <span className="av-chrome-title">Customer Service Bot — Decision Flow</span>
          </div>
          <div className="av-rule-body">
            <div className="av-flow-chain">
              <div className="av-flow-node trigger">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                User Message
              </div>
              <div className="av-flow-arrow av-arrow-anim-1">→</div>
              <div className="av-flow-node intent">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                Match Intent
              </div>
              <div className="av-flow-arrow av-arrow-anim-2">→</div>
              <div className="av-flow-node fetch">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/></svg>
                Fetch from DB
              </div>
              <div className="av-flow-arrow av-arrow-anim-3">→</div>
              <div className="av-flow-node respond">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                Return Answer
              </div>
            </div>
            <div className="av-rule-chat">
              <div className="av-msg user-msg av-slide-in" style={{ animationDelay: '0.2s' }}>Track my order #8492 📦</div>
              <div className="av-msg bot-msg av-slide-in" style={{ animationDelay: '0.7s' }}>
                <span className="av-bot-label">Bot</span>
                Order #8492 — Out for delivery. ETA: 4:30 PM today ✓
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── 2. NLP Chatbot: Intent + Entity highlighting ── */}
      {activeArch === 1 && (
        <div className="av-scene av-nlp">
          <div className="av-chrome-bar">
            <span className="av-dot red"/><span className="av-dot yellow"/><span className="av-dot green"/>
            <span className="av-chrome-title">NLP Engine — Intent Parser</span>
          </div>
          <div className="av-nlp-body">
            <div className="av-nlp-input-area">
              <span className="av-nlp-user-lbl">User</span>
              <p className="av-nlp-raw">Can I&nbsp;
                <span className="av-highlight intent-hl">reschedule</span>
                &nbsp;my appointment to&nbsp;
                <span className="av-highlight entity-loc">Delhi</span>
                &nbsp;<span className="av-highlight entity-time">tomorrow morning</span>?
              </p>
            </div>
            <div className="av-nlp-tags-row">
              <div className="av-tag-card av-pop" style={{ animationDelay: '0.3s' }}>
                <span className="av-tag-lbl">INTENT</span>
                <span className="av-tag-val intent-col">Reschedule_Appointment</span>
                <span className="av-tag-conf">98.4%</span>
              </div>
              <div className="av-tag-card av-pop" style={{ animationDelay: '0.65s' }}>
                <span className="av-tag-lbl">ENTITY · LOCATION</span>
                <span className="av-tag-val entity-col">Delhi</span>
              </div>
              <div className="av-tag-card av-pop" style={{ animationDelay: '0.95s' }}>
                <span className="av-tag-lbl">ENTITY · TIME</span>
                <span className="av-tag-val entity-col">Tomorrow Morning</span>
              </div>
            </div>
            <div className="av-msg bot-msg av-slide-in" style={{ animationDelay: '1.4s', marginTop: '10px' }}>
              <span className="av-bot-label">NLP Bot</span>
              Got it! Rescheduling your Delhi appointment to tomorrow at 9 AM ✓
            </div>
          </div>
        </div>
      )}

      {/* ── 3. GenAI / RAG: Document scan + response ── */}
      {activeArch === 2 && (
        <div className="av-scene av-rag">
          <div className="av-chrome-bar">
            <span className="av-dot red"/><span className="av-dot yellow"/><span className="av-dot green"/>
            <span className="av-chrome-title">RAG Pipeline — Knowledge Retrieval</span>
          </div>
          <div className="av-rag-body">
            <div className="av-rag-left">
              <div className="av-rag-lbl">Knowledge Base</div>
              <div className="av-doc av-doc-scan">
                <div className="av-scan-beam"/>
                <div className="av-doc-icon">📄</div>
                <span>API_Docs_v2.pdf</span>
              </div>
              <div className="av-doc" style={{ animationDelay: '0.3s' }}>
                <div className="av-doc-icon">📄</div>
                <span>Onboarding_Guide.md</span>
              </div>
              <div className="av-doc" style={{ animationDelay: '0.5s' }}>
                <div className="av-doc-icon">📄</div>
                <span>FAQ_2024.pdf</span>
              </div>
              <div className="av-rag-match av-pop" style={{ animationDelay: '1s' }}>
                ✦ Matched Chunk #42
              </div>
            </div>
            <div className="av-rag-right">
              <div className="av-msg user-msg av-slide-in" style={{ animationDelay: '0.1s' }}>How do I configure OAuth2 refresh tokens?</div>
              <div className="av-rag-processing av-pop" style={{ animationDelay: '0.8s' }}>
                <span className="av-spin">⟳</span> GPT-4 Synthesizing...
              </div>
              <div className="av-msg bot-msg av-slide-in" style={{ animationDelay: '1.5s' }}>
                <span className="av-bot-label">AI</span>
                Set <code>grant_type=refresh_token</code> in your POST body. Tokens expire in 3600s.
                <span className="av-cite">📄 API_Docs_v2.pdf</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── 4. Voice Assistant: Waveform + STT + TTS ── */}
      {activeArch === 3 && (
        <div className="av-scene av-voice">
          <div className="av-voice-dark">
            <div className="av-voice-rings">
              <div className="av-ring r1"/>
              <div className="av-ring r2"/>
              <div className="av-ring r3"/>
              <div className="av-mic-icon">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v1a7 7 0 0 1-14 0v-1"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
              </div>
            </div>
            <div className="av-wave-bars">
              {[0.4,0.9,0.6,1,0.7,0.5,0.85,0.65,0.95,0.5,0.75,0.4].map((h,i) => (
                <div key={i} className="av-wbar" style={{ animationDelay: `${i*0.08}s`, '--wh': h }}/>
              ))}
            </div>
            <div className="av-voice-label">Listening...</div>
          </div>
          <div className="av-voice-light">
            <div className="av-transcript av-slide-in" style={{ animationDelay: '0.3s' }}>
              <span className="av-tr-lbl">🎙 Heard</span>
              <p>"Transfer $50 to Alex for yesterday's dinner."</p>
            </div>
            <div className="av-tts-reply av-slide-in" style={{ animationDelay: '1.1s' }}>
              <span className="av-tr-lbl tts-col">🔊 Response</span>
              <p>"Transfer of $50 to Alex — confirmed successfully."</p>
            </div>
          </div>
        </div>
      )}

      {/* ── 5. Hybrid: Bot column → pulse → Human agent column ── */}
      {activeArch === 4 && (
        <div className="av-scene av-hybrid">
          <div className="av-hybrid-col bot-col">
            <div className="av-col-header bot-hdr">
              <span className="av-col-dot"/>
              AI Bot
            </div>
            <div className="av-msg user-msg av-slide-in" style={{ animationDelay: '0.1s' }}>We need pricing for 500 enterprise seats</div>
            <div className="av-msg bot-msg av-slide-in" style={{ animationDelay: '0.7s' }}>
              <span className="av-bot-label">Bot</span>
              Enterprise inquiry detected! Let me connect you to a Solutions Engineer.
            </div>
            <div className="av-escalate-badge av-pop" style={{ animationDelay: '1.3s' }}>
              ⚡ Escalating...
            </div>
          </div>

          <div className="av-transfer-lane">
            <div className="av-transfer-pulse"/>
            <svg className="av-transfer-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2E29FF" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </div>

          <div className="av-hybrid-col agent-col">
            <div className="av-col-header agent-hdr">
              <span className="av-col-dot green-dot"/>
              Agent Sarah
            </div>
            <div className="av-agent-card av-pop" style={{ animationDelay: '1.6s' }}>
              <div className="av-agent-avatar">S</div>
              <div>
                <div className="av-agent-name">Sarah M. · Solutions</div>
                <div className="av-agent-status">● Online Now</div>
              </div>
            </div>
            <div className="av-msg agent-msg av-slide-in" style={{ animationDelay: '2s' }}>
              Hi! I have your full chat history ready. Let's build your 500-seat plan.
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default function ChatbotDevelopment() {
  const [openFaq, setOpenFaq] = useState(0);
  const [activeArch, setActiveArch] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      "q": "What is chatbot development, and how does it work?",
      "a": "Chatbot development is the process of designing, building, and deploying a software application that can simulate conversation with users through text or voice. It typically involves natural language processing (NLP) to understand user input, a logic layer to determine the appropriate response, and integrations with business systems. Depending on complexity, this can range from simple rule-based scripts to sophisticated AI models trained on your specific business data."
    },
    {
      "q": "How long does it take to build a custom chatbot?",
      "a": "A simple FAQ chatbot with one or two integrations can often be built in 2–4 weeks. A more advanced AI-powered chatbot with multiple integrations and multilingual support typically takes 6–12 weeks. Enterprise-level conversational AI platforms can take three months or longer."
    },
    {
      "q": "How much does it cost to develop a chatbot?",
      "a": "Basic rule-based chatbots can start around $2,000–$6,000, while advanced AI-driven or enterprise conversational AI solutions can range from $18,000 to well over $45,000. We provide a detailed quote after a discovery call, and it's worth budgeting for modest ongoing costs like hosting and AI API usage."
    },
    {
      "q": "What's the difference between a rule-based chatbot and an AI chatbot?",
      "a": "A rule-based chatbot follows a predefined decision tree and only responds to inputs it's programmed to recognize. An AI-powered chatbot uses NLP and machine learning to understand varied phrasing, context, and intent. Many businesses start rule-based and evolve toward AI-driven capabilities as needs grow."
    },
    {
      "q": "Can a chatbot integrate with my existing CRM and helpdesk software?",
      "a": "Yes. We regularly integrate chatbots with CRM platforms like Salesforce and HubSpot, helpdesk tools like Zendesk and Freshdesk, e-commerce platforms like Shopify, and other business systems via APIs and webhooks."
    },
    {
      "q": "Which messaging platforms can a chatbot be deployed on?",
      "a": "Websites, mobile apps, WhatsApp, Facebook Messenger, Instagram, Telegram, SMS, Slack, Microsoft Teams, and voice assistants like Amazon Alexa and Google Assistant."
    },
    {
      "q": "Do I need AI or machine learning expertise on my team to use a chatbot?",
      "a": "No. We handle the technical work and build user-friendly admin dashboards that let your team update FAQs and review analytics without any coding background."
    },
    {
      "q": "How accurate are AI chatbots at understanding customer questions?",
      "a": "Accuracy depends on training data quality and ongoing optimization. Accuracy improves over time as we refine intents based on real conversation data, and fallback mechanisms with human handoff manage cases the bot doesn't understand."
    },
    {
      "q": "Will the chatbot be able to handle multiple languages?",
      "a": "Yes. We can build chatbots that detect a user's language and respond fluently, or support explicit language selection, with training data adapted for each supported language."
    },
    {
      "q": "What happens when the chatbot can't answer a customer's question?",
      "a": "Every chatbot includes fallback logic and a clear escalation path to a live human agent, with full conversation history preserved so customers don't have to repeat themselves."
    }
  ];

  const schemaJson = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Chatbot Development",
      "name": "Custom Chatbot Development Services",
      "alternateName": ["AI Chatbot Development", "Conversational AI Development", "NLP Chatbot Development", "LLM Bot Development"],
      "description": "End-to-end custom chatbot development — rule-based bots, NLP chatbots, GenAI/RAG assistants, voice-enabled agents, and hybrid systems. Integrated with CRM, helpdesk, and omnichannel platforms.",
      "url": "https://www.novadesk.site/services/chatbot-development",
      "provider": {
        "@type": "Organization",
        "name": "NovaDesk",
        "url": "https://www.novadesk.site",
        "logo": "https://www.novadesk.site/favicon.svg",
        "email": "novadesk.site@gmail.com",
        "description": "NovaDesk is a full-stack AI and software development agency specializing in chatbots, GenAI, web apps, and enterprise systems.",
        "areaServed": "Worldwide",
        "sameAs": ["https://www.novadesk.site"]
      },
      "areaServed": {
        "@type": "Place",
        "name": "Worldwide"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Chatbot Development Services Catalog",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Rule-Based Chatbot Development", "description": "Deterministic decision-tree chatbots for FAQs, lead capture, and order tracking" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI-Powered NLP Chatbot Development", "description": "Intent recognition and entity extraction chatbots using Dialogflow and Rasa" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Generative AI (LLM/RAG) Chatbot Development", "description": "GPT-4 and LLM chatbots with RAG pipelines for knowledge-base Q&A" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Voice-Enabled Chatbot Development", "description": "Speech-to-text and text-to-speech voice assistant integrations" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hybrid AI + Human Handoff Chatbots", "description": "Seamless AI-to-live-agent escalation with full context transfer" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "WhatsApp & Omnichannel Chatbot Deployment", "description": "Chatbot deployment on WhatsApp, Messenger, Telegram, Slack, and website" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CRM & Helpdesk Chatbot Integration", "description": "Chatbot integrations with Salesforce, HubSpot, Zendesk, and Freshdesk" } }
        ]
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "novadesk.site@gmail.com",
        "contactType": "Sales",
        "availableLanguage": ["English"]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Custom Chatbot Development Services | AI Chatbot Solutions — NovaDesk",
      "url": "https://www.novadesk.site/services/chatbot-development",
      "description": "NovaDesk builds custom AI chatbots — rule-based bots, NLP chatbots, LLM/RAG assistants, and voice agents. Full-cycle chatbot development with CRM integration and omnichannel deployment.",
      "inLanguage": "en-US",
      "datePublished": "2026-07-01",
      "dateModified": "2026-08-01",
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://www.novadesk.site/og-image.png",
        "width": 1200,
        "height": 630
      },
      "isPartOf": {
        "@type": "WebSite",
        "name": "NovaDesk",
        "url": "https://www.novadesk.site"
      },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2", ".fs-hero-desc"]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.novadesk.site/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.novadesk.site/services" },
        { "@type": "ListItem", "position": 3, "name": "Chatbot Development", "item": "https://www.novadesk.site/services/chatbot-development" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    }
  ];

  const architectures = [
    {
      title: "Rule-Based Chatbots",
      tagline: "Predictable Decision Trees",
      badge: "Best for FAQs & Direct Forms",
      complexity: "Low",
      description: "Ideal for straightforward, highly structured customer journeys. These chatbots follow rigid logic workflows and decision trees to capture lead contact details, schedule calendar bookings, or fetch direct database outputs like order statuses. They feature zero risk of response hallucination and serve as highly reliable data capturing utilities.",
      useCases: ["Direct FAQ databases", "Meeting scheduling tools", "Order tracking systems", "Feedback surveys"],
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="5" r="3"></circle>
          <circle cx="6" cy="12" r="3"></circle>
          <circle cx="18" cy="19" r="3"></circle>
          <path d="M9 12h3a3 3 0 0 0 3-3V8"></path>
          <path d="M15 15v1a3 3 0 0 0-3 3H9"></path>
        </svg>
      )
    },
    {
      title: "AI-Powered NLP Chatbots",
      tagline: "Natural Language Processing (NLP)",
      badge: "Best for Dynamic Customer Support",
      complexity: "Medium",
      description: "Leverages machine learning models (Dialogflow, Rasa) to interpret customer intent, extract crucial transactional entities, and retain context across multiple conversational turns. These bots handle varied user phrasings, typos, and slang, translating unstructured customer messages into clean database updates.",
      useCases: ["Contextual customer support", "Conversational order assistance", "Dynamic product search engines", "Interactive account dashboards"],
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      )
    },
    {
      title: "Generative AI (LLM) Bots",
      tagline: "Retrieval-Augmented Generation (RAG)",
      badge: "Best for Technical Databases",
      complexity: "High",
      description: "Built using leading foundation models (GPT-4, Claude, Llama) combined with semantic document search (Vector Databases). The bot dynamically crawls your documentation, knowledge base files, or internal wikis to answer open-ended user inquiries with human-like fluidity, brand-aligned tones, and context-relevant reasoning.",
      useCases: ["Advanced product troubleshooting", "Smart conversational search", "Interactive onboarding guides", "Context-rich sales assistants"],
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707-.707M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"></path>
        </svg>
      )
    },
    {
      title: "Voice-Enabled Assistants",
      tagline: "Speech Recognition & Speech APIs",
      badge: "Best for IVR & Call Deflection",
      complexity: "High",
      description: "Bridges voice call channels directly with your conversational logic engine. Utilizing ultra-low latency speech-to-text (STT) and text-to-speech (TTS) pipelines, these solutions operate call deflection queues, smart IVR telephone systems, and hands-free field operations.",
      useCases: ["Phone support deflection", "Hands-free operations logs", "Voice portal navigators", "Accessibility voice features"],
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
          <path d="M19 10v1a7 7 0 0 1-14 0v-1"></path>
          <line x1="12" y1="19" x2="12" y2="23"></line>
          <line x1="8" y1="23" x2="16" y2="23"></line>
        </svg>
      )
    },
    {
      title: "Hybrid Conversational Systems",
      tagline: "AI Automation + Live Agent Handoff",
      badge: "Best for High-Value Transactions",
      complexity: "Medium",
      description: "Pairs automated dialogue flows with intelligent live human routing protocols. The chatbot conducts initial intake vetting and lead qualification, escalating complex or high-priority inquiries to live support reps along with complete chat history logs.",
      useCases: ["High-tier sales consultation", "Intelligent customer onboarding", "HIPAA patient intake forms", "Financial support ticket routing"],
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    }
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <SEO 
        title="Custom Chatbot Development Services | AI Chatbot Solutions"
        description="Build custom AI chatbots that automate customer support, qualify leads 24/7, and integrate with your CRM. We develop rule-based bots, NLP chatbots, GPT-4/LLM RAG assistants, voice agents & hybrid systems. Free consultation."
        url="/services/chatbot-development"
        image="https://www.novadesk.site/og-image.png"
        keywords="enterprise AI chatbot development services, RAG chatbot integration, WhatsApp AI chatbot automation, omnichannel conversational AI agents, customer support AI assistant, LLM tool-calling chatbot, lead qualification AI bot, NovaDesk"
        schema={schemaJson}
      />

      <style>{`
        .fs-page {
          font-family: 'Space Grotesk', sans-serif;
          background-color: #ffffff;
          overflow-x: hidden;
          color: #0b0f19;
        }
        
        .fs-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .fs-text-blue { color: #2E29FF; }
        .fs-bg-blue { background-color: #2E29FF; color: white; }

        /* BUTTONS */
        .fs-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 16px 32px;
          border-radius: 50px;
          font-size: 16px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s;
          cursor: pointer;
          border: none;
        }
        .fs-btn-primary {
          background-color: #2E29FF;
          color: #ffffff;
        }
        .fs-btn-primary:hover {
          background-color: #1a16d9;
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(46,41,255,0.2);
        }
        .fs-btn-white {
          background-color: #ffffff;
          color: #2E29FF;
          border: 1px solid #2E29FF;
        }
        .fs-btn-white:hover {
          background-color: #f8fafc;
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.05);
        }
        .fs-btn-solid-white {
          background-color: #ffffff;
          color: #2E29FF;
        }
        .fs-btn-solid-white:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }

        /* TAGS */
        .fs-tag {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-size: 14px;
          font-weight: 800;
          color: #2E29FF;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 24px;
        }
        .fs-tag::before, .fs-tag::after {
          content: "";
          display: block;
          width: 24px;
          height: 1px;
          background-color: #2E29FF;
        }
        .fs-tag-white { color: #ffffff; }
        .fs-tag-white::before, .fs-tag-white::after { background-color: rgba(255,255,255,0.5); }

        /* HERO SECTION */
        .fs-hero { 
          position: relative; 
          overflow: hidden; 
          padding: 80px 0 60px 0; 
          background-color: #ffffff;
          background-image: 
            linear-gradient(rgba(46, 41, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(46, 41, 255, 0.05) 1px, transparent 1px);
          background-size: 26px 26px;
        }
        .fs-hero::before { 
          content: ''; 
          position: absolute; 
          top: -100px; 
          left: 15%; 
          width: 600px; 
          height: 600px; 
          border-radius: 50%; 
          background: radial-gradient(circle, rgba(255, 182, 219, 0.45) 0%, transparent 75%); 
          filter: blur(50px);
          pointer-events: none; 
          z-index: 0;
        }
        .fs-hero::after { 
          content: ''; 
          position: absolute; 
          bottom: -50px; 
          right: 10%; 
          width: 500px; 
          height: 500px; 
          border-radius: 50%; 
          background: radial-gradient(circle, rgba(255, 105, 180, 0.25) 0%, transparent 75%); 
          filter: blur(60px);
          pointer-events: none; 
          z-index: 0;
        }
        .fs-hero-grid {
          max-width: 1500px; 
          margin: 0 auto; 
          padding: 0 40px; 
          display: grid; 
          grid-template-columns: 0.9fr 1.1fr; 
          gap: 60px; 
          align-items: center; 
          position: relative;
          z-index: 2;
        }
        @media (max-width: 991px) {
          .fs-hero-grid {
            grid-template-columns: 1fr;
            gap: 48px;
            padding: 0 20px;
          }
          .fs-hero-title {
            font-size: 36px !important;
          }
        }
        .fs-hero-text { padding-bottom: 20px; }
        .fs-hero-title {
          font-size: 48px;
          line-height: 1.15;
          letter-spacing: -1.5px;
          color: #0A0A2E;
          font-weight: 800;
          margin-bottom: 20px;
        }
        .fs-hero-desc {
          font-size: 16.5px;
          line-height: 1.65;
          color: #4B5563;
          margin-bottom: 32px;
          font-weight: 400;
          max-width: 540px;
        }
        .fs-hero-image-wrapper {
          position:relative; display:flex; flex-direction:column; align-items:center; justify-content:center; z-index:5;
        }
        .fs-hero-image {
          width:100%; max-width:450px; display:block; border-radius:24px; margin-top:-20px; transition:transform 0.4s cubic-bezier(0.16,1,0.3,1); cursor:pointer;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        .fs-hero-image:hover { transform:translateY(-8px) scale(1.03); }

        /* DYNAMIC HERO CHAT ANIMATION MOCKUP */
        .nd-hero-browser-wrapper {
          width: 100%;
          max-width: 660px;
          margin: 0 auto;
          position: relative;
          z-index: 5;
        }
        .nd-browser-card {
          background: #FFFFFF;
          border-radius: 24px;
          border: 1px solid rgba(46, 41, 255, 0.15);
          box-shadow: 0 25px 60px -15px rgba(46, 41, 255, 0.12), 0 10px 30px rgba(0, 0, 0, 0.04);
          overflow: hidden;
          padding-bottom: 20px;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .nd-browser-card:hover {
          transform: translateY(-4px);
        }
        .nd-browser-topbar {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          height: 44px;
          background: #F8FAFC;
          border-bottom: 1px solid #E2E8F0;
          padding: 0 16px;
        }
        .nd-browser-dots {
          position: absolute;
          left: 16px;
          display: flex;
          gap: 6px;
        }
        .nd-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .nd-dot.red { background: #FF5F56; }
        .nd-dot.yellow { background: #FFBD2E; }
        .nd-dot.green { background: #27C93F; }
        .nd-browser-url {
          background: #FFFFFF;
          border: 1px solid #CBD5E1;
          border-radius: 20px;
          padding: 4px 18px;
          font-size: 12px;
          font-weight: 600;
          color: #475569;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
        }
        .nd-browser-content {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 16px;
          padding: 24px 20px 10px 20px;
          position: relative;
          min-height: 380px;
          align-items: flex-start;
        }
        .nd-wireframe-left {
          display: flex;
          flex-direction: column;
          gap: 14px;
          padding-top: 10px;
        }
        .nd-wf-bar {
          background: #EEF2FF;
          border-radius: 20px;
        }
        .nd-wf-bar.header-bar { height: 22px; width: 90%; }
        .nd-wf-bar.sub-bar { height: 16px; width: 70%; }
        .nd-wf-line {
          background: #F1F5F9;
          border-radius: 10px;
        }
        .nd-wf-line.line-1 { height: 8px; width: 100%; }
        .nd-wf-line.line-2 { height: 8px; width: 80%; }
        .nd-wf-buttons {
          display: flex;
          gap: 10px;
          margin-top: 10px;
        }
        .nd-wf-btn {
          height: 34px;
          width: 75px;
          background: #E0E7FF;
          border-radius: 10px;
        }
        .nd-wf-footer-box {
          height: 100px;
          width: 100%;
          background: #F1F5F9;
          border-radius: 14px;
          margin-top: 14px;
        }
        .nd-chat-phone {
          position: relative;
          z-index: 5;
          background: #FFFFFF;
          border-radius: 18px;
          box-shadow: 0 20px 45px rgba(15, 23, 42, 0.16), 0 4px 14px rgba(46, 41, 255, 0.08);
          overflow: hidden;
          border: 1px solid rgba(0, 0, 0, 0.08);
          display: flex;
          flex-direction: column;
          height: 355px;
          margin-top: -6px;
        }
        .nd-phone-header {
          background: #0B0F19;
          color: #FFFFFF;
          padding: 10px 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .nd-phone-user {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .nd-avatar-wrapper {
          position: relative;
          width: 32px;
          height: 32px;
        }
        .nd-avatar-img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          object-fit: cover;
          border: 1.5px solid #2E29FF;
        }
        .nd-online-dot {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 8px;
          height: 8px;
          background: #10B981;
          border: 2px solid #0B0F19;
          border-radius: 50%;
        }
        .nd-user-info {
          display: flex;
          flex-direction: column;
        }
        .nd-user-name {
          font-size: 13px;
          font-weight: 700;
          color: #FFFFFF;
          line-height: 1.2;
        }
        .nd-user-status {
          font-size: 10px;
          color: #94A3B8;
        }
        .nd-close-btn {
          background: transparent;
          border: none;
          color: #94A3B8;
          cursor: pointer;
          padding: 4px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: color 0.2s;
        }
        .nd-close-btn:hover { color: #FFFFFF; }
        .nd-phone-body {
          flex: 1;
          padding: 12px;
          overflow-y: auto;
          background: #F8FAFC;
          scroll-behavior: smooth;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .nd-phone-body::-webkit-scrollbar {
          display: none;
          width: 0;
          height: 0;
        }
        .nd-messages-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .nd-chat-bubble-wrap {
          display: flex;
          width: 100%;
        }
        .nd-chat-bubble-wrap.user {
          justify-content: flex-end;
        }
        .nd-chat-bubble-wrap.ai {
          justify-content: flex-start;
        }
        .nd-bubble {
          max-width: 88%;
          font-size: 12px;
          line-height: 1.45;
          border-radius: 14px;
          padding: 9px 12px;
          position: relative;
          animation: popInMsg 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .user-bubble {
          background: #2E29FF;
          color: #FFFFFF;
          border-bottom-right-radius: 3px;
          font-weight: 500;
          box-shadow: 0 4px 12px rgba(46, 41, 255, 0.2);
        }
        .ai-bubble {
          background: #FFFFFF;
          color: #0F172A;
          border-bottom-left-radius: 3px;
          border: 1px solid #E2E8F0;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
        }
        .nd-ai-text {
          margin: 0;
        }
        .nd-ai-badge {
          display: inline-block;
          margin-top: 6px;
          font-size: 10px;
          font-weight: 700;
          color: #2E29FF;
        }
        .typing-bubble {
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 10px 14px;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
        }
        .typing-dot {
          width: 6px;
          height: 6px;
          background: #2E29FF;
          border-radius: 50%;
          animation: bounceTyping 1.4s infinite ease-in-out both;
        }
        .typing-dot:nth-child(1) { animation-delay: 0s; }
        .typing-dot:nth-child(2) { animation-delay: 0.2s; }
        .typing-dot:nth-child(3) { animation-delay: 0.4s; }
        .nd-phone-footer {
          padding: 8px 10px;
          background: #FFFFFF;
          border-top: 1px solid #F1F5F9;
          display: flex;
          gap: 6px;
          align-items: center;
        }
        .nd-phone-input {
          flex: 1;
          border: 1px solid #E2E8F0;
          border-radius: 20px;
          padding: 7px 12px;
          font-size: 11px;
          background: #F8FAFC;
          color: #64748B;
          outline: none;
        }
        .nd-phone-send {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #2E29FF;
          border: none;
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          cursor: pointer;
          transition: transform 0.2s;
        }
        .nd-phone-send:hover { transform: scale(1.08); }

        @keyframes popInMsg {
          0% { opacity: 0; transform: translateY(8px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes bounceTyping {
          0%, 80%, 100% { transform: scale(0.3); opacity: 0.4; }
          40% { transform: scale(1); opacity: 1; }
        }

        @media (max-width: 640px) {
          .nd-browser-content {
            grid-template-columns: 1fr;
            padding: 16px 12px;
          }
          .nd-wireframe-left {
            display: none;
          }
          .nd-chat-phone {
            margin-top: 0;
            height: 330px;
          }
        }

        /* ══ ARCHVIZ — Animated Mockup Scenes ══ */
        .av-wrapper {
          background: #F1F5F9;
          border: 1px solid rgba(46, 41, 255, 0.12);
          border-radius: 16px;
          overflow: hidden;
          margin: 20px 0;
        }
        .av-scene {
          display: flex;
          flex-direction: column;
          min-height: 240px;
        }
        /* Chrome titlebar */
        .av-chrome-bar {
          background: #1E293B;
          padding: 8px 14px;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .av-dot { width: 10px; height: 10px; border-radius: 50%; }
        .av-dot.red { background: #FF5F57; }
        .av-dot.yellow { background: #FEBC2E; }
        .av-dot.green { background: #28C840; }
        .av-chrome-title { margin-left: 10px; font-size: 11px; font-weight: 600; color: #94A3B8; font-family: monospace; }

        /* Shared chat bubble styles */
        .av-msg { font-size: 12px; font-weight: 500; padding: 8px 12px; border-radius: 12px; max-width: 88%; line-height: 1.5; }
        .av-msg.user-msg { background: #2E29FF; color: white; align-self: flex-end; border-bottom-right-radius: 4px; }
        .av-msg.bot-msg { background: white; color: #0F172A; border: 1px solid #E2E8F0; align-self: flex-start; border-bottom-left-radius: 4px; }
        .av-msg.agent-msg { background: #F0FDF4; color: #0F172A; border: 1px solid #BBF7D0; align-self: flex-start; border-bottom-left-radius: 4px; font-size: 11.5px; }
        .av-bot-label { display: block; font-size: 9px; font-weight: 800; color: #2E29FF; margin-bottom: 2px; }

        /* ── Shared keyframes ── */
        @keyframes av-slidein { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes av-popin { from { opacity: 0; transform: scale(0.88); } to { opacity: 1; transform: scale(1); } }
        @keyframes av-pulse-ring { 0% { transform: scale(1); opacity: 0.6; } 100% { transform: scale(2.2); opacity: 0; } }
        @keyframes av-wbar-anim { 0%,100% { transform: scaleY(0.3); } 50% { transform: scaleY(1); } }
        @keyframes av-flow-glow { 0%,100% { box-shadow: 0 0 0 0 rgba(46,41,255,0); } 50% { box-shadow: 0 0 0 4px rgba(46,41,255,0.18); } }
        @keyframes av-scan { 0% { top: 0; opacity: 1; } 100% { top: 100%; opacity: 0; } }
        @keyframes av-transfer-pulse { 0%,100% { transform: scaleX(0); opacity: 0; } 50% { transform: scaleX(1); opacity: 1; } }
        @keyframes av-spin { from { display: inline-block; transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .av-slide-in { animation: av-slidein 0.5s ease both; }
        .av-pop { animation: av-popin 0.4s ease both; }

        /* ── 1. Rule-Based scene ── */
        .av-rule-body { padding: 16px; display: flex; flex-direction: column; gap: 14px; }
        .av-flow-chain { display: flex; align-items: center; gap: 4px; flex-wrap: nowrap; overflow-x: auto; padding-bottom: 4px; }
        .av-flow-node { display: flex; align-items: center; gap: 5px; font-size: 10.5px; font-weight: 700; padding: 6px 10px; border-radius: 8px; white-space: nowrap; animation: av-flow-glow 2.5s ease-in-out infinite; }
        .av-flow-node.trigger { background: #EEF2FF; color: #2E29FF; animation-delay: 0s; }
        .av-flow-node.intent { background: #FFF7ED; color: #EA580C; animation-delay: 0.6s; }
        .av-flow-node.fetch { background: #F0FDF4; color: #16A34A; animation-delay: 1.2s; }
        .av-flow-node.respond { background: #EEF2FF; color: #2E29FF; animation-delay: 1.8s; }
        .av-flow-arrow { font-size: 14px; color: #94A3B8; font-weight: 700; opacity: 0; animation: av-slidein 0.3s ease both; }
        .av-arrow-anim-1 { animation-delay: 0.4s; }
        .av-arrow-anim-2 { animation-delay: 1s; }
        .av-arrow-anim-3 { animation-delay: 1.6s; }
        .av-rule-chat { display: flex; flex-direction: column; gap: 7px; }

        /* ── 2. NLP scene ── */
        .av-nlp-body { padding: 16px; display: flex; flex-direction: column; gap: 12px; }
        .av-nlp-input-area { background: white; border: 1px solid #E2E8F0; border-radius: 10px; padding: 10px 14px; }
        .av-nlp-user-lbl { font-size: 9px; font-weight: 800; color: #2E29FF; display: block; margin-bottom: 4px; }
        .av-nlp-raw { font-size: 13px; font-weight: 500; color: #1E293B; margin: 0; line-height: 1.7; }
        .av-highlight { border-radius: 4px; padding: 1px 4px; font-weight: 700; }
        .av-highlight.intent-hl { background: #EDE9FE; color: #7C3AED; }
        .av-highlight.entity-loc { background: #DBEAFE; color: #1D4ED8; }
        .av-highlight.entity-time { background: #DCFCE7; color: #16A34A; }
        .av-nlp-tags-row { display: flex; gap: 8px; flex-wrap: wrap; }
        .av-tag-card { background: white; border: 1px solid #E2E8F0; border-radius: 10px; padding: 8px 12px; min-width: 110px; }
        .av-tag-lbl { font-size: 8.5px; font-weight: 800; color: #94A3B8; display: block; margin-bottom: 3px; }
        .av-tag-val { font-size: 12px; font-weight: 700; display: block; }
        .av-tag-val.intent-col { color: #7C3AED; }
        .av-tag-val.entity-col { color: #1D4ED8; }
        .av-tag-conf { font-size: 9px; font-weight: 700; color: #10B981; margin-top: 2px; display: block; }

        /* ── 3. RAG scene ── */
        .av-rag-body { display: flex; gap: 0; flex: 1; min-height: 200px; }
        .av-rag-left { background: #1E293B; padding: 14px; display: flex; flex-direction: column; gap: 8px; min-width: 155px; }
        .av-rag-lbl { font-size: 9px; font-weight: 800; color: #64748B; text-transform: uppercase; }
        .av-doc { display: flex; align-items: center; gap: 6px; background: rgba(255,255,255,0.05); border-radius: 6px; padding: 5px 8px; color: #94A3B8; font-size: 10.5px; font-weight: 600; position: relative; overflow: hidden; animation: av-popin 0.4s ease both; }
        .av-doc-scan { border: 1px solid rgba(46,41,255,0.4); }
        .av-scan-beam { position: absolute; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, transparent, #2E29FF, transparent); animation: av-scan 2s ease-in-out infinite; }
        .av-doc-icon { font-size: 13px; }
        .av-rag-match { background: rgba(46,41,255,0.2); color: #818CF8; font-size: 10px; font-weight: 700; padding: 4px 8px; border-radius: 6px; }
        .av-rag-right { flex: 1; padding: 14px; display: flex; flex-direction: column; gap: 8px; background: #F8FAFC; }
        .av-rag-processing { font-size: 11px; font-weight: 700; color: #7C3AED; display: flex; align-items: center; gap: 6px; }
        .av-spin { display: inline-block; animation: av-spin 1s linear infinite; }
        .av-cite { display: inline-block; margin-left: 6px; font-size: 9px; color: #64748B; font-style: normal; }
        .av-msg.bot-msg code { background: #EEF2FF; color: #2E29FF; font-size: 10px; padding: 1px 4px; border-radius: 3px; }

        /* ── 4. Voice scene ── */
        .av-voice { flex-direction: row; min-height: 220px; }
        .av-voice-dark { background: #0B0F19; width: 180px; flex-shrink: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 14px; padding: 20px 14px; }
        .av-voice-rings { position: relative; width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; }
        .av-ring { position: absolute; border-radius: 50%; border: 2px solid rgba(46,41,255,0.5); animation: av-pulse-ring 2s ease-out infinite; }
        .av-ring.r1 { width: 60px; height: 60px; animation-delay: 0s; }
        .av-ring.r2 { width: 60px; height: 60px; animation-delay: 0.6s; }
        .av-ring.r3 { width: 60px; height: 60px; animation-delay: 1.2s; }
        .av-mic-icon { position: relative; z-index: 2; width: 40px; height: 40px; background: #2E29FF; border-radius: 50%; display: flex; align-items: center; justify-content: center; }
        .av-wave-bars { display: flex; align-items: center; gap: 3px; height: 32px; }
        .av-wbar { width: 3px; background: #10B981; border-radius: 2px; height: calc(var(--wh) * 32px); transform-origin: center; animation: av-wbar-anim 0.8s ease-in-out infinite alternate; }
        .av-voice-label { font-size: 10px; font-weight: 700; color: #10B981; }
        .av-voice-light { flex: 1; padding: 14px; display: flex; flex-direction: column; gap: 10px; background: white; }
        .av-transcript, .av-tts-reply { background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 10px; padding: 8px 12px; }
        .av-tr-lbl { font-size: 9px; font-weight: 800; color: #64748B; display: block; margin-bottom: 3px; }
        .av-tr-lbl.tts-col { color: #2E29FF; }
        .av-transcript p, .av-tts-reply p { margin: 0; font-size: 12px; color: #1E293B; font-weight: 500; }

        /* ── 5. Hybrid scene ── */
        .av-hybrid { flex-direction: row; align-items: stretch; min-height: 240px; }
        .av-hybrid-col { flex: 1; padding: 14px; display: flex; flex-direction: column; gap: 8px; }
        .av-hybrid-col.bot-col { background: #F8FAFC; border-right: 1px solid #E2E8F0; }
        .av-hybrid-col.agent-col { background: #F0FDF4; }
        .av-col-header { font-size: 11px; font-weight: 800; color: #334155; display: flex; align-items: center; gap: 6px; margin-bottom: 4px; }
        .av-col-dot { width: 8px; height: 8px; border-radius: 50%; background: #2E29FF; }
        .av-col-dot.green-dot { background: #10B981; }
        .av-col-header.bot-hdr { color: #2E29FF; }
        .av-col-header.agent-hdr { color: #16A34A; }
        .av-escalate-badge { background: rgba(46,41,255,0.1); color: #2E29FF; font-size: 10px; font-weight: 800; padding: 5px 10px; border-radius: 20px; text-align: center; }
        .av-transfer-lane { width: 36px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 8px; background: white; padding: 0 4px; }
        .av-transfer-pulse { width: 2px; height: 50px; background: linear-gradient(180deg, #2E29FF, transparent); animation: av-slidein 0.5s ease 1.4s both; }
        .av-transfer-arrow { animation: av-popin 0.4s ease 1.5s both; opacity: 0; }
        .av-agent-card { background: white; border: 1px solid #BBF7D0; border-radius: 10px; padding: 8px 10px; display: flex; align-items: center; gap: 8px; }
        .av-agent-avatar { width: 30px; height: 30px; border-radius: 50%; background: #10B981; color: white; font-weight: 800; font-size: 14px; display: flex; align-items: center; justify-content: center; }
        .av-agent-name { font-size: 11px; font-weight: 700; color: #0F172A; }
        .av-agent-status { font-size: 10px; color: #10B981; font-weight: 600; }

        /* TRUST BAR */
        .fs-trust {
          text-align: center;
          padding: 60px 0;
          background-color: #ffffff;
        }
        .fs-trust p {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 30px;
        }
        .fs-marquee-container {
          overflow: hidden;
          width: 100%;
          display: flex;
          align-items: center;
          position: relative;
        }
        .fs-marquee-container::before, .fs-marquee-container::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          width: 150px;
          z-index: 2;
          pointer-events: none;
        }
        .fs-marquee-container::before {
          left: 0;
          background: linear-gradient(to right, white, transparent);
        }
        .fs-marquee-container::after {
          right: 0;
          background: linear-gradient(to left, white, transparent);
        }
        .fs-marquee-track {
          display: flex;
          gap: 60px;
          animation: scrollMarquee 30s linear infinite;
          padding-left: 60px;
          width: max-content;
        }
        .fs-marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes scrollMarquee {
          0% { transform: translateX(calc(-50% - 30px)); }
          100% { transform: translateX(0); }
        }
        .fs-marquee-icon-wrap {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          margin: 0 40px;
        }
        .fs-marquee-icon {
          width: 73%;
          height: 100%;
          object-fit: contain;
          opacity: 0.5;
          filter: grayscale(100%);
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .fs-marquee-icon:hover {
          opacity: 1;
          filter: grayscale(0%);
          transform: scale(1.15);
        }

        /* AGENCY ALTERNATIVE SECTION */
        .fs-agency-alt {
          background-color: #2E29FF;
          border-top: 1px solid rgba(255,255,255,0.1);
        }
        .nd-ticker-wrap { background:transparent; padding:18px 0; overflow:hidden; border-bottom:1px solid rgba(255,255,255,0.1); position: relative; z-index: 10; }
        .nd-ticker { display:flex; width:100%; }
        .nd-ticker-track { display:flex; width:max-content; animation:ticker-slide 32s linear infinite; }
        .nd-ticker-group { display:flex; align-items:center; gap:50px; padding-right:50px; white-space:nowrap; }
        .nd-ticker-group span { font-family:'Space Grotesk',sans-serif; font-size:14px; font-weight:800; color:#fff; letter-spacing:1.5px; text-transform:uppercase; display:flex; align-items:center; gap:8px; }
        @keyframes ticker-slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 25px)); }
        }
        
        .fs-agency-alt-bg {
          background-image: radial-gradient(rgba(255, 255, 255, 0.15) 1.5px, transparent 1.5px);
          background-size: 24px 24px;
          padding-bottom: 60px;
        }

        .nd-intro { padding:72px 0 40px; background:transparent; }
        .nd-intro-inner { max-width:1330px; margin:0 auto; padding:0 24px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:40px; }
        .nd-intro-text h2 { color:#fff; font-size:36px; max-width:600px; line-height:1.2; margin-bottom:12px; }
        .nd-intro-text h2 em { color:#FFB6DB; font-style:normal; }
        .nd-intro-text p { color:rgba(255,255,255,0.75); font-size:15px; max-width:560px; font-weight:400; }
        .nd-intro-stats { display:flex; gap:32px; flex-wrap:wrap; }
        .nd-intro-stat { text-align:center; }
        .nd-intro-stat-num { font-size:48px; font-weight:700; color:#fff; line-height:1; }
        .nd-intro-stat-num sub { font-size:20px; color:#FFB6DB; }
        .nd-intro-stat-label { font-size:12px; color:#FFB6DB; font-weight:700; text-transform:uppercase; letter-spacing:0.5px; margin-top:4px; }
        .nd-intro-divider { width:1px; height:60px; background:rgba(255,255,255,0.2); align-self:center; }

        .fs-usp-bar-transparent {
          background: transparent;
        }
        .fs-usp-grid {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          position: relative;
          z-index: 2;
        }
        .fs-usp-box {
          border: 1px solid rgba(255,255,255,0.6);
          border-radius: 8px;
          padding: 16px 20px;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          font-size: 12px;
          font-weight: 600;
          line-height: 1.4;
          transition: all 0.3s;
          flex: 1;
          min-width: 180px;
          background: transparent;
        }
        .fs-usp-box svg {
          flex-shrink: 0;
          width: 24px;
          height: 24px;
        }
        .fs-usp-box:hover {
          background: rgba(255,255,255,0.1);
          transform: translateY(-2px);
        }

        /* SECTION STYLING */
        .fs-section {
          padding: 100px 0;
        }
        .fs-section-bg-slate {
          background-color: #f8fafc;
        }
        
        .fs-tag-arrows {
          color: #2E29FF;
          font-weight: 800;
          font-size: 14px;
          letter-spacing: 1px;
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .fs-tag-arrows::before { content: "←"; font-size: 18px; font-weight: normal; }
        .fs-tag-arrows::after { content: "→"; font-size: 18px; font-weight: normal; }
        .fs-tag-arrows-blue {
          color: #2E29FF;
          font-weight: 800;
          font-size: 14px;
          letter-spacing: 1px;
          margin-bottom: 16px;
          display: inline-block;
        }
        .fs-tag-arrows-white {
          color: #ffffff;
          font-weight: 800;
          font-size: 14px;
          letter-spacing: 1px;
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .fs-tag-arrows-white::before { content: "←"; font-size: 18px; font-weight: normal; }
        .fs-tag-arrows-white::after { content: "→"; font-size: 18px; font-weight: normal; }

        .fs-section-title {
          font-size: 38px;
          font-weight: 800;
          line-height: 1.25;
          color: #0b0f19;
          margin-bottom: 24px !important;
        }
        .fs-section-subtitle {
          font-size: 16px;
          color: #475569;
          line-height: 1.6;
          max-width: 800px;
          margin-bottom: 48px !important;
        }
        .fs-section-subtitle + .fs-grid-3,
        .fs-section-subtitle + .fs-grid-2,
        .fs-section-subtitle + .fs-pricing-grid,
        .fs-section-subtitle + .fs-table-container,
        .fs-section-subtitle + .fs-timeline,
        .fs-section-subtitle + div {
          margin-top: 40px !important;
        }

        /* GRIDS & CARDS */
        .fs-grid-2 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
        }
        .fs-grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }
        .fs-card-premium {
          background: #ffffff;
          border: 1px solid rgba(46, 41, 255, 0.12);
          border-radius: 16px;
          padding: 32px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.01);
          display: flex;
          flex-direction: column;
        }
        .fs-card-premium:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(46, 41, 255, 0.07);
          border-color: #2E29FF;
        }
        .fs-card-premium h3 {
          font-size: 20px;
          font-weight: 800;
          margin-bottom: 14px;
          color: #0b0f19;
        }
        .fs-card-premium p {
          font-size: 14.5px;
          color: #475569;
          line-height: 1.6;
          margin: 0;
          flex: 1;
        }

        .fs-bullet-list {
          list-style: none;
          padding: 0;
          margin: 20px 0;
        }
        .fs-bullet-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 16px;
          font-size: 15px;
          color: #475569;
          line-height: 1.5;
        }
        .fs-bullet-item svg {
          color: #2E29FF;
          flex-shrink: 0;
          margin-top: 3px;
        }

        /* TABLES */
        .fs-table-container {
          width: 100%;
          overflow-x: auto;
          margin: 40px 0 20px 0;
          border-radius: 12px;
          border: 1px solid rgba(46, 41, 255, 0.15);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
        }
        .fs-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
          background: white;
          min-width: 700px;
        }
        .fs-table th {
          background-color: #f8fafc;
          color: #0b0f19;
          padding: 18px 24px;
          font-weight: 700;
          font-size: 15px;
          border-bottom: 2px solid rgba(46, 41, 255, 0.15);
        }
        .fs-table td {
          padding: 18px 24px;
          color: #475569;
          font-size: 14.5px;
          border-bottom: 1px solid #E2E8F0;
          line-height: 1.6;
          transition: background-color 0.2s;
        }
        .fs-table tr:last-child td {
          border-bottom: none;
        }
        .fs-table tr:hover td {
          background-color: rgba(46, 41, 255, 0.02);
        }

        /* FEATURES SECTION (LIGHT BENTO LAYOUT) */
        .fs-features-light {
          background-color: #f8fafc;
          color: #0b0f19;
          background-image: 
            linear-gradient(rgba(15, 23, 42, 0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15, 23, 42, 0.015) 1px, transparent 1px);
          background-size: 28px 28px;
        }
        .fs-features-light .fs-section-title {
          color: #0b0f19;
          margin-bottom: 24px !important;
        }
        .fs-features-light .fs-section-subtitle {
          color: #475569;
          margin-bottom: 48px !important;
        }
        
        /* BENTO GRID */
        .fs-bento-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 48px;
        }
        .fs-bento-card {
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.06);
          border-radius: 20px;
          padding: 32px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.01);
        }
        .fs-bento-card:hover {
          transform: translateY(-6px);
          background: #ffffff;
          border-color: #2E29FF;
          box-shadow: 0 20px 40px rgba(46, 41, 255, 0.08);
        }
        .fs-bento-col-2 {
          grid-column: span 2;
        }
        .fs-bento-card h3 {
          font-size: 19px;
          font-weight: 800;
          color: #0b0f19;
          margin: 0 0 12px 0;
        }
        .fs-bento-card p {
          font-size: 14px;
          color: #475569;
          line-height: 1.6;
          margin: 0;
        }
        .fs-bento-card-badge {
          align-self: flex-start;
          background: rgba(46, 41, 255, 0.05);
          color: #2E29FF;
          border: 1px solid rgba(46, 41, 255, 0.12);
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          padding: 4px 10px;
          border-radius: 30px;
          margin-bottom: 16px;
        }
        .fs-bento-channel-badge {
          border: 1px solid rgba(0, 0, 0, 0.08);
          color: #0b0f19;
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 600;
          background: #f8fafc;
        }
        .fs-lang-pill {
          background: rgba(46, 41, 255, 0.04);
          border: 1px solid rgba(46, 41, 255, 0.08);
          color: #2E29FF;
          font-size: 12px;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 6px;
        }
        @keyframes pulse {
          0% { transform: scale(0.9); opacity: 0.5; }
          50% { transform: scale(1.2); opacity: 1; }
          100% { transform: scale(0.9); opacity: 0.5; }
        }
        @media (max-width: 991px) {
          .fs-bento-col-2 {
            grid-column: span 1;
          }
          .fs-bento-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .fs-bento-grid {
            grid-template-columns: 1fr;
          }
        }

        /* PROCESS TIMELINE (ROYAL BLUE DOT GRID THEME) */
        .fs-process-blue {
          background-color: #2E29FF;
          background-image: radial-gradient(rgba(255, 255, 255, 0.25) 1.5px, transparent 1.5px);
          background-size: 28px 28px;
          color: #ffffff;
          padding: 100px 0;
        }
        .fs-process-header-wrap {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 60px;
        }
        @media (max-width: 768px) {
          .fs-process-header-wrap {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }
          .fs-process-header-left {
            max-width: 100% !important;
          }
          .fs-process-header-right p {
            text-align: left !important;
          }
        }
        .fs-process-header-left {
          max-width: 55%;
        }
        .fs-process-tag-lines {
          text-transform: uppercase;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 1px;
          margin-bottom: 16px;
          color: #60A5FA;
        }
        .fs-process-header-left h2 {
          font-size: 36px;
          font-weight: 800;
          line-height: 1.2;
          color: #ffffff;
        }
        .fs-process-header-right p {
          max-width: 450px;
          text-align: right;
          color: rgba(255, 255, 255, 0.75);
          font-size: 15px;
          line-height: 1.6;
        }
        .fs-timeline-blue {
          position: relative;
          margin: 40px auto 60px;
          padding-left: 40px;
          border-left: 2px solid rgba(255, 255, 255, 0.15);
          max-width: 1000px;
        }
        .fs-timeline-item-blue {
          position: relative;
          margin-bottom: 32px;
        }
        .fs-timeline-item-blue:last-child {
          margin-bottom: 0;
        }
        .fs-timeline-dot-blue {
          position: absolute;
          left: -51px;
          top: 18px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #0A0A2E;
          border: 4px solid #60A5FA;
          box-shadow: 0 0 15px rgba(96, 165, 250, 0.5);
        }
        .fs-timeline-content-blue {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 24px 30px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .fs-timeline-content-blue:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: #60A5FA;
          box-shadow: 0 15px 35px rgba(46, 41, 255, 0.25);
          transform: translateX(6px);
        }
        .fs-timeline-step-badge {
          display: inline-block;
          background: rgba(96, 165, 250, 0.12);
          color: #60A5FA;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.5px;
          padding: 4px 12px;
          border-radius: 20px;
          margin-bottom: 10px;
          border: 1px solid rgba(96, 165, 250, 0.2);
        }
        .fs-timeline-content-blue h3 {
          font-size: 18px;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 8px;
        }
        .fs-timeline-content-blue p {
          font-size: 14.5px;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          margin: 0;
        }
        
        .fs-track-card-blue {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 32px;
          height: 100%;
        }
        .fs-track-card-blue h3 {
          font-size: 20px;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .fs-track-item-blue {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 16px;
          font-size: 14px;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.5;
        }
        .fs-track-item-blue:last-child {
          margin-bottom: 0;
        }
        .fs-track-item-blue strong {
          color: #ffffff;
        }

        /* TECH STACKS ANIMATED CARDS (MATCHING FINTECH PAGE) */
        .expertise.experts {
          padding: 100px 0;
          background: #ffffff;
        }
        .eb_box {
          display: flex;
          flex-direction: column;
          gap: 24px !important;
          overflow-y: auto;
          max-height: 520px;
          padding-right: 8px;
          padding-bottom: 20px;
        }
        .eb_box::-webkit-scrollbar {
          width: 6px;
        }
        .eb_box::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 10px;
        }
        .eb_box::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
        .eb_box .tech_stack {
          background: #FFFFFF;
          padding: 16px;
          width: 100%;
          max-width: 480px;
          border: 1px solid #D9D9D9;
          border-radius: 16px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
          transition: all 0.3s ease;
        }
        .eb_box .tech_stack:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(46, 41, 255, 0.1);
        }
        .eb_box .tech_stack .framework h3.sub {
          font-style: normal;
          padding: 0px 0px 20px 0px;
          font-weight: 700;
          font-size: 24px;
          line-height: 28px;
          text-transform: uppercase;
          color: #0F0D1D;
          margin: 0;
        }
        .eb_box .tech_stack .framework .bgcolor {
          background: #E0F3FF;
          border-radius: 16px;
          padding: 20px;
        }
        .eb_box .tech_stack .framework .skill {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .eb_box .tech_stack .framework p.skills {
          display: inline-flex;
          font-style: normal;
          font-weight: 600;
          font-size: 14px;
          line-height: 16px;
          text-transform: capitalize;
          padding: 10px 16px;
          background: #C0EAFC;
          border-radius: 50px;
          color: #1E1E1E;
          margin: 0;
        }
        .eb_box .tech_stack .framework .bgcolorto {
          background: #FFE1CB;
          border-radius: 16px;
          padding: 20px;
        }
        .eb_box .tech_stack .framework p.bg.skills {
          display: inline-flex;
          font-style: normal;
          font-weight: 600;
          font-size: 14px;
          line-height: 16px;
          text-transform: capitalize;
          padding: 10px 16px;
          background: #FFD2B4;
          border-radius: 50px;
          color: #1E1E1E;
          margin: 0;
        }
        .eb_box .tech_stack .framework .bg_cool_aqua {
          background: #D5F6ED;
          border-radius: 16px;
          padding: 20px;
        }
        .eb_box .tech_stack .framework p.cool_aqua.skills {
          display: inline-flex;
          font-style: normal;
          font-weight: 600;
          font-size: 14px;
          line-height: 16px;
          text-transform: capitalize;
          padding: 10px 16px;
          background: #A6E7D6;
          border-radius: 50px;
          color: #1E1E1E;
          margin: 0;
        }
        .eb_box .tech_stack .framework .bg_lavender {
          background: #E2DBF9;
          border-radius: 16px;
          padding: 20px;
        }
        .eb_box .tech_stack .framework p.lavender.skills {
          display: inline-flex;
          font-style: normal;
          font-weight: 600;
          font-size: 14px;
          line-height: 16px;
          text-transform: capitalize;
          padding: 10px 16px;
          background: #D5C7FF;
          border-radius: 50px;
          color: #1E1E1E;
          margin: 0;
        }

        /* AUDIENCE CARDS */
        .fs-audience {
          background-color: #f8fafc;
          padding: 100px 0;
          text-align: center;
        }
        .fs-audience-title {
          font-size: 38px;
          font-weight: 800;
          margin-bottom: 16px;
          line-height: 1.25;
          color: #0b0f19;
        }
        .fs-audience-desc {
          font-size: 16px;
          color: #475569;
          margin-bottom: 50px;
          max-width: 650px;
          margin-left: auto;
          margin-right: auto;
        }
        .fs-audience-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          text-align: left;
        }
        .fs-audience-card {
          background: #ffffff;
          border-radius: 16px;
          padding: 28px;
          border: 1px solid rgba(46, 41, 255, 0.15);
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.01);
          transition: all 0.3s ease;
        }
        .fs-audience-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 30px rgba(46,41,255,0.1);
          border-color: #2E29FF;
        }
        .fs-audience-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
        }
        .fs-audience-card h3 {
          font-size: 18px;
          font-weight: 800;
          color: #0b0f19;
          line-height: 1.3;
          margin: 0;
          max-width: 70%;
        }
        .fs-audience-icon {
          width: 44px;
          height: 44px;
          background-color: #2E29FF;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
        }
        .fs-audience-icon svg {
          width: 22px;
          height: 22px;
        }
        .fs-audience-card p {
          font-size: 14.2px;
          color: #475569;
          line-height: 1.6;
          flex: 1;
          margin-bottom: 24px;
        }
        .fs-audience-link {
          color: #2E29FF;
          font-weight: 700;
          font-size: 14px;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .fs-audience-link svg {
          transition: transform 0.3s;
        }
        .fs-audience-link:hover svg {
          transform: translateX(3px) translateY(-3px);
        }

        /* TECH STACKS SECTION */
        .fs-tech {
          background-color: #ffffff;
          background-image: 
            linear-gradient(rgba(46, 41, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(46, 41, 255, 0.05) 1px, transparent 1px);
          background-size: 26px 26px;
          padding: 100px 0;
          position: relative;
          z-index: 1;
        }
        .fs-tech::before {
          content: '';
          position: absolute;
          top: 0; left: 10%; width: 500px; height: 500px; border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 182, 219, 0.3) 0%, transparent 70%);
          filter: blur(50px); pointer-events: none; z-index: -1;
        }
        .fs-tech::after {
          content: '';
          position: absolute;
          bottom: 0; right: 10%; width: 400px; height: 400px; border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 105, 180, 0.2) 0%, transparent 70%);
          filter: blur(60px); pointer-events: none; z-index: -1;
        }
        .fs-tech-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 60px;
          align-items: start;
        }
        .fs-tech-text {
          position: sticky;
          top: 120px;
        }
        .fs-tech-text h2 {
          font-size: 40px;
          font-weight: 800;
          margin-bottom: 24px;
          line-height: 1.25;
          color: #2E29FF;
          letter-spacing: -0.5px;
        }
        .fs-tech-text p {
          font-size: 16px;
          color: #475569;
          line-height: 1.65;
          margin-bottom: 40px;
        }
        .fs-btn-outline-blue {
          border: 1px solid #2E29FF;
          color: #2E29FF;
          background: transparent;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 15px;
          transition: all 0.3s;
          text-decoration: none;
        }
        .fs-btn-outline-blue:hover {
          background: #2E29FF;
          color: white;
        }
        .fs-btn-outline-blue svg {
          width: 18px;
          height: 18px;
          transition: transform 0.3s;
        }
        .fs-btn-outline-blue:hover svg {
          transform: translateX(4px) translateY(-4px);
        }
        .fs-tech-cards {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .fs-tech-card-outer {
          background-color: #ffffff;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 8px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.03);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .fs-tech-card-outer:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.08);
        }
        .fs-tech-card-inner {
          border-radius: 12px;
          padding: 35px 30px;
          min-height: 160px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .fs-tech-card-front { background-color: #FFF0E6; }
        .fs-tech-card-back { background-color: #F0F4FF; }
        .fs-tech-card-db { background-color: #EAE5FF; }
        .fs-tech-card-api { background-color: #E2FDF5; }
        .fs-tech-card-channels { background-color: #FFF0F5; }
        
        .fs-tech-card-inner h3 {
          font-size: 20px;
          font-weight: 800;
          margin-bottom: 18px;
          text-transform: uppercase;
          color: #0b0f19;
          letter-spacing: 0.5px;
        }
        .fs-tech-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }
        .fs-tech-pill {
          padding: 8px 18px;
          border-radius: 50px;
          font-size: 13.5px;
          font-weight: 700;
          color: #0b0f19;
        }
        .fs-tech-card-front .fs-tech-pill { background-color: #FFDECC; }
        .fs-tech-card-back .fs-tech-pill { background-color: #D6E4FF; }
        .fs-tech-card-db .fs-tech-pill { background-color: #DCD3FF; }
        .fs-tech-card-api .fs-tech-pill { background-color: #CFF3E9; }
        .fs-tech-card-channels .fs-tech-pill { background-color: #FFD2E5; }

        /* API CTA */
        .fs-api-cta {
          background-color: #2E29FF;
          color: white;
          padding: 100px 0 60px;
        }
        .fs-api-cta-top {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          margin-bottom: 60px;
          align-items: flex-start;
        }
        .fs-api-cta-left h2 {
          font-size: 40px;
          font-weight: 800;
          line-height: 1.25;
          color: white;
          margin: 0;
        }
        .fs-api-cta-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          text-align: right;
        }
        .fs-api-cta-right p {
          font-size: 16px;
          line-height: 1.6;
          opacity: 0.9;
          max-width: 480px;
          margin-bottom: 24px;
          margin-top: 0;
        }
        .fs-btn-outline-white {
          border: 1px solid white;
          color: white;
          background: transparent;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 14px;
          text-decoration: none;
          transition: all 0.3s;
        }
        .fs-btn-outline-white:hover {
          background: white;
          color: #2E29FF;
        }
        .fs-api-cta-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .fs-api-stat-card {
          border: 1px solid rgba(255,255,255,0.4);
          border-radius: 12px;
          padding: 40px 24px;
          text-align: center;
          background: rgba(255,255,255,0.03);
          transition: transform 0.3s, background 0.3s, border-color 0.3s;
        }
        .fs-api-stat-card:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.8);
          transform: translateY(-4px);
        }
        .fs-api-stat-card h3 {
          font-size: 56px;
          font-weight: 900;
          color: white;
          margin-bottom: 8px;
          margin-top: 0;
          letter-spacing: -2px;
        }
        .fs-api-stat-card p {
          font-size: 18px;
          font-weight: 700;
          opacity: 0.9;
          margin: 0;
        }

        /* PRICING */
        .fs-pricing-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-top: 40px;
        }
        .fs-pricing-card {
          background: #ffffff;
          border: 1px solid rgba(46, 41, 255, 0.15);
          border-radius: 20px;
          padding: 35px 25px;
          display: flex;
          flex-direction: column;
          position: relative;
          transition: all 0.3s ease;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.01);
        }
        .fs-pricing-card.featured {
          border: 2px solid #2E29FF;
          box-shadow: 0 20px 40px rgba(46, 41, 255, 0.1);
        }
        .fs-pricing-card.featured::before {
          content: 'RECOMMENDED';
          position: absolute;
          top: -14px;
          left: 50%;
          transform: translateX(-50%);
          background: #2E29FF;
          color: white;
          padding: 4px 16px;
          border-radius: 50px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1px;
        }
        .fs-pricing-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 48px rgba(46, 41, 255, 0.09);
        }
        .fs-pricing-card h3 {
          font-size: 21px;
          font-weight: 800;
          margin-bottom: 8px;
          margin-top: 0;
          color: #0b0f19;
        }
        .fs-pricing-card .best-for {
          font-size: 13.5px;
          color: #64748b;
          margin-bottom: 24px;
          line-height: 1.4;
          min-height: 38px;
        }
        .fs-pricing-card .price {
          font-size: 28px;
          font-weight: 800;
          color: #2E29FF;
          margin-bottom: 24px;
          border-bottom: 1px solid #E2E8F0;
          padding-bottom: 20px;
        }
        .fs-pricing-card ul {
          list-style: none;
          padding: 0;
          margin: 0 0 32px 0;
          flex: 1;
        }
        .fs-pricing-card li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 14px;
          font-size: 14px;
          color: #475569;
          line-height: 1.4;
        }
        .fs-pricing-card li svg {
          color: #2E29FF;
          flex-shrink: 0;
          margin-top: 2px;
        }
        
        .fs-roi-timeline {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 40px;
        }
        .fs-roi-item {
          background: white;
          border-radius: 12px;
          padding: 24px;
          border: 1px solid #E2E8F0;
        }
        .fs-roi-item h4 {
          font-size: 16px;
          font-weight: 800;
          color: #2E29FF;
          margin-bottom: 10px;
          margin-top: 0;
          text-transform: uppercase;
        }
        .fs-roi-item p {
          font-size: 14.5px;
          color: #475569;
          line-height: 1.5;
          margin: 0;
        }

        /* FAQ SECTION (NEW ACCORDION LAYOUT) */
        .fs-faq-section {
          padding: 100px 0;
          background-color: #ffffff;
          background-image: 
            linear-gradient(rgba(46, 41, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(46, 41, 255, 0.05) 1px, transparent 1px);
          background-size: 26px 26px;
          position: relative;
          z-index: 1;
        }
        .fs-faq-section::before {
          content: '';
          position: absolute;
          top: 50px; left: 15%; width: 500px; height: 500px; border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 182, 219, 0.3) 0%, transparent 70%);
          filter: blur(50px); pointer-events: none; z-index: -1;
        }
        .fs-faq-section::after {
          content: '';
          position: absolute;
          bottom: 50px; right: 10%; width: 400px; height: 400px; border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 105, 180, 0.2) 0%, transparent 70%);
          filter: blur(60px); pointer-events: none; z-index: -1;
        }
        .fs-faq-grid {
          display: grid;
          grid-template-columns: 420px 1fr;
          gap: 60px;
          align-items: stretch;
          position: relative;
        }
        @media (max-width: 991px) {
          .fs-faq-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
        .fs-faq-left-col {
          height: 100%;
          position: relative;
        }
        .fs-faq-sticky-img-wrap {
          position: sticky;
          top: 100px;
          width: 100%;
          height: 520px;
          z-index: 10;
          padding-bottom: 24px;
        }
        .fs-faq-img-main {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 440px;
          background: #EEF0FF url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80') center/cover no-repeat;
          border-radius: 24px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .fs-faq-img-overlap {
          position: absolute;
          bottom: 0; right: -20px;
          width: 220px; height: 210px;
          background: #ffffff url('/faq_small.webp') center/contain no-repeat;
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.18);
          border: 4px solid #ffffff;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .fs-faq-sticky-img-wrap:hover .fs-faq-img-main {
          transform: scale(1.02);
        }
        .fs-faq-sticky-img-wrap:hover .fs-faq-img-overlap {
          transform: translateY(-8px) scale(1.04);
        }
        
        .fs-faq-content {
          display: flex;
          flex-direction: column;
        }
        .fs-faq-title {
          font-size: 40px;
          font-weight: 800;
          line-height: 1.25;
          margin-top: 10px;
          margin-bottom: 12px;
          color: #0b0f19;
        }
        .fs-faq-subtitle {
          font-size: 15.5px;
          color: #475569;
          line-height: 1.6;
          margin-bottom: 32px;
        }
        .fs-faq-accordion {
          border-top: 1px solid #E2E8F0;
        }
        .fs-faq-item {
          border-bottom: 1px solid #E2E8F0;
          padding: 22px 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          border-radius: 8px;
        }
        .fs-faq-item:hover {
          background-color: #f8fafc;
        }
        .fs-faq-item.active {
          background-color: #f1f5f9;
          border-bottom: 2px solid #2E29FF;
        }
        .fs-faq-question {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 18px;
          font-weight: 700;
          color: #0b0f19;
          transition: color 0.3s;
        }
        .fs-faq-item.active .fs-faq-question {
          color: #2E29FF;
        }
        .fs-faq-answer {
          margin-top: 16px;
          font-size: 15px;
          color: #475569;
          line-height: 1.65;
        }

        /* BOTTOM CTA (COMPACT ATTRACTIVE BANNER) */
        .fs-cta-bottom {
          padding: 56px 60px;
          background-color: #2E29FF;
          background-image: 
            radial-gradient(rgba(255, 255, 255, 0.25) 1.5px, transparent 1.5px),
            linear-gradient(135deg, #2E29FF 0%, #1511A8 100%);
          background-size: 24px 24px, 100% 100%;
          border-radius: 28px;
          color: white;
          position: relative;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(46, 41, 255, 0.25);
        }
        .fs-cta-bottom::before {
          content: '';
          position: absolute;
          top: -120px; right: -50px; width: 350px; height: 350px; border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.25) 0%, transparent 70%);
          filter: blur(50px); pointer-events: none;
        }
        .fs-cta-content-grid {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 48px;
          align-items: center;
          position: relative;
          z-index: 2;
        }
        @media (max-width: 991px) {
          .fs-cta-bottom {
            padding: 40px 28px;
          }
          .fs-cta-content-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }
        .fs-cta-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(10px);
          padding: 6px 14px;
          border-radius: 50px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.5px;
          color: #ffffff;
          margin-bottom: 16px;
        }
        .fs-cta-badge-dot {
          width: 8px;
          height: 8px;
          background: #4ADE80;
          border-radius: 50%;
          box-shadow: 0 0 10px #4ADE80;
        }
        .fs-cta-text-left h2 {
          font-size: 36px;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.2;
          margin: 0 0 12px 0;
        }
        .fs-cta-text-left p {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.55;
          margin: 0 0 20px 0;
          max-width: 620px;
        }
        .fs-cta-trust-items {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          font-size: 13.5px;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.95);
        }
        .fs-cta-actions-right {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .fs-btn-cta-primary {
          background: #ffffff !important;
          color: #2E29FF !important;
          font-weight: 800 !important;
          font-size: 15px !important;
          padding: 14px 24px !important;
          border-radius: 12px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 8px !important;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15) !important;
          transition: all 0.3s ease !important;
          text-decoration: none !important;
        }
        .fs-btn-cta-primary:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25) !important;
          background: #f8fafc !important;
        }
        .fs-btn-cta-secondary {
          background: rgba(255, 255, 255, 0.1) !important;
          color: #ffffff !important;
          border: 1px solid rgba(255, 255, 255, 0.3) !important;
          font-weight: 700 !important;
          font-size: 14.5px !important;
          padding: 12px 24px !important;
          border-radius: 12px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          transition: all 0.3s ease !important;
          text-decoration: none !important;
        }
        .fs-btn-cta-secondary:hover {
          background: rgba(255, 255, 255, 0.2) !important;
          border-color: rgba(255, 255, 255, 0.6) !important;
        }
        .fs-cta-email-note {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.8);
          text-align: center;
          margin-top: 4px;
        }
        .fs-cta-email-note a {
          color: #ffffff;
          font-weight: 700;
          text-decoration: underline;
        }

        @media (max-width: 1200px) {
          .fs-pricing-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 1024px) {
          .fs-hero-grid, .fs-tech-grid, .fs-faq-grid, .fs-api-cta-top { grid-template-columns: 1fr; }
          .fs-hero-text { order: 2; }
          .fs-hero-image-wrapper { order: 1; margin-bottom: 40px; }
          .fs-audience-grid { grid-template-columns: repeat(2, 1fr); }
          .fs-faq-images { display: none; }
          .fs-api-cta-right { align-items: flex-start; text-align: left; }
          .fs-process-header-wrap { flex-direction: column; align-items: flex-start; gap: 20px; }
          .fs-process-header-left { max-width: 100%; }
          .fs-process-header-right p { text-align: left; }
        }
        @media (max-width: 768px) {
          .fs-section { padding: 60px 0; }
          .fs-hero-title { font-size: 36px; }
          .fs-grid-3, .fs-grid-2, .fs-audience-grid, .fs-pricing-grid, .fs-roi-timeline { grid-template-columns: 1fr; }
          .fs-api-cta-stats { grid-template-columns: 1fr; gap: 20px; }
          .fs-hero-image-wrapper { margin-top: 0; margin-bottom: 40px; max-width: 100%; }
          .fs-usp-box { min-width: 100%; }
          .fs-tech-card-inner { padding: 30px 20px; min-height: auto; }
          .fs-cta-bottom { padding: 60px 20px; }
          .fs-timeline { padding-left: 24px; }
          .fs-timeline-dot { left: -34px; }
          .fs-timeline-content { padding: 20px; }
          h2, .fs-section-title { font-size: 32px !important; }
        }

        /* OVERVIEW INTERACTIVE COMPONENT */
        .fs-overview-layout {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 40px;
          margin-top: 48px;
        }
        @media (max-width: 991px) {
          .fs-overview-layout {
            grid-template-columns: 1fr;
          }
        }
        .fs-overview-tabs {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .fs-overview-tab {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px 24px;
          border-radius: 12px;
          border: 1px solid rgba(46, 41, 255, 0.1);
          background: #ffffff;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-align: left;
          width: 100%;
        }
        .fs-overview-tab:hover {
          border-color: #2E29FF;
          background: rgba(46, 41, 255, 0.02);
          transform: translateX(4px);
        }
        .fs-overview-tab.active {
          border-color: #2E29FF;
          background: #2E29FF;
          color: #ffffff;
          box-shadow: 0 10px 25px rgba(46, 41, 255, 0.15);
        }
        .fs-overview-tab-icon {
          width: 44px;
          height: 44px;
          border-radius: 8px;
          background: rgba(46, 41, 255, 0.08);
          color: #2E29FF;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.3s;
        }
        .fs-overview-tab.active .fs-overview-tab-icon {
          background: rgba(255, 255, 255, 0.15);
          color: #ffffff;
        }
        .fs-overview-tab-text h4 {
          font-size: 16px;
          font-weight: 700;
          margin: 0 0 4px 0;
          color: #0b0f19;
          transition: color 0.3s;
        }
        .fs-overview-tab.active .fs-overview-tab-text h4 {
          color: #ffffff;
        }
        .fs-overview-tab-text span {
          font-size: 12px;
          color: #64748b;
          font-weight: 500;
          transition: color 0.3s;
        }
        .fs-overview-tab.active .fs-overview-tab-text span {
          color: rgba(255, 255, 255, 0.8);
        }

        .fs-overview-preview {
          position: relative;
        }
        .fs-overview-preview-card {
          background: #ffffff;
          border: 1px solid rgba(46, 41, 255, 0.12);
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.02);
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all 0.4s ease;
        }
        .fs-overview-preview-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 24px;
        }
        .fs-overview-preview-badge {
          background: rgba(46, 41, 255, 0.08);
          color: #2E29FF;
          padding: 6px 14px;
          border-radius: 30px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.5px;
        }
        .fs-overview-preview-card h3 {
          font-size: 26px;
          font-weight: 800;
          color: #0b0f19;
          margin: 0 0 8px 0;
        }
        .fs-overview-preview-tagline {
          font-size: 14px;
          color: #64748b;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 16px;
        }
        .fs-overview-preview-desc {
          font-size: 15px;
          line-height: 1.7;
          color: #475569;
          margin-bottom: 28px;
        }
        .fs-overview-preview-usecases {
          margin-top: auto;
          padding-top: 24px;
          border-top: 1px solid rgba(46, 41, 255, 0.08);
        }
        .fs-overview-preview-usecases h4 {
          font-size: 15px;
          font-weight: 800;
          color: #0b0f19;
          margin-bottom: 16px;
        }
        .fs-overview-usecases-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }
        @media (max-width: 575px) {
          .fs-overview-usecases-grid {
            grid-template-columns: 1fr;
          }
        }
        .fs-overview-usecase-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13.5px;
          color: #475569;
          font-weight: 500;
        }
        .fs-overview-usecase-item svg {
          color: #34A853;
          flex-shrink: 0;
        }

        /* SUCCESS VS FAILURE CARDS */
        .fs-split-cards {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
          margin-top: 64px;
        }
        @media (max-width: 991px) {
          .fs-split-cards {
            grid-template-columns: 1fr;
          }
        }
        .fs-split-card {
          border-radius: 20px;
          padding: 40px;
          border: 1px solid;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.01);
        }
        .fs-split-card-success {
          background: #ffffff;
          border-color: rgba(52, 168, 83, 0.2);
          box-shadow: 0 12px 30px rgba(52, 168, 83, 0.04);
        }
        .fs-split-card-failure {
          background: #ffffff;
          border-color: rgba(234, 67, 53, 0.2);
          box-shadow: 0 12px 30px rgba(234, 67, 53, 0.04);
        }
        .fs-split-card h3 {
          font-size: 22px;
          font-weight: 800;
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .fs-split-card-success h3 { color: #1e7e34; }
        .fs-split-card-failure h3 { color: #c92a2a; }
        .fs-split-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .fs-split-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 20px;
          font-size: 14.5px;
          line-height: 1.6;
        }
        .fs-split-item:last-child {
          margin-bottom: 0;
        }
        .fs-split-item-icon {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .fs-split-card-success .fs-split-item-icon {
          background: rgba(52, 168, 83, 0.1);
          color: #34A853;
        }
        .fs-split-card-failure .fs-split-item-icon {
          background: rgba(234, 67, 53, 0.1);
          color: #EA4335;
        }

        /* WHY CHOOSE US REDESIGN */
        .fs-why-us-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 60px;
          align-items: start;
          margin-top: 48px;
        }
        @media (max-width: 991px) {
          .fs-why-us-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
        .fs-why-us-sticky {
          position: sticky;
          top: 100px;
        }
        .fs-value-spotlight {
          background: rgba(46, 41, 255, 0.04);
          border: 1px solid rgba(46, 41, 255, 0.1);
          border-radius: 16px;
          padding: 30px;
          margin-top: 30px;
        }
        .fs-value-spotlight h4 {
          font-size: 16px;
          font-weight: 800;
          color: #2E29FF;
          margin-bottom: 16px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .fs-spotlight-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .fs-spotlight-item {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
          font-size: 14.5px;
          font-weight: 700;
          color: #0b0f19;
        }
        .fs-spotlight-item svg {
          color: #2E29FF;
        }
        
        .fs-differentiators-stack {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .fs-diff-row {
          display: flex;
          gap: 24px;
          padding: 24px;
          border-radius: 12px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .fs-diff-row:hover {
          background: #ffffff;
          box-shadow: 0 10px 30px rgba(46, 41, 255, 0.06);
          border-bottom-color: transparent;
          transform: translateX(6px);
        }
        .fs-diff-number {
          font-size: 24px;
          font-weight: 800;
          color: #2E29FF;
          opacity: 0.5;
          line-height: 1;
          transition: all 0.3s;
        }
        .fs-diff-row:hover .fs-diff-number {
          opacity: 1;
          transform: translateY(-2px);
        }
        .fs-diff-content h3 {
          font-size: 18px;
          font-weight: 800;
          color: #0b0f19;
          margin: 0 0 8px 0;
        }
        .fs-diff-content p {
          font-size: 14.5px;
          color: #475569;
          line-height: 1.6;
          margin: 0;
        }

        /* SIDE BY SIDE COMPARISON REDESIGN */
        .fs-comparison-split {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
          margin-top: 48px;
        }
        @media (max-width: 768px) {
          .fs-comparison-split {
            grid-template-columns: 1fr;
          }
        }
        .fs-comp-card {
          border-radius: 20px;
          padding: 32px;
          border: 1px solid;
        }
        .fs-comp-card-cookie {
          background: #fcfcfd;
          border-color: #E2E8F0;
        }
        .fs-comp-card-custom {
          background: #ffffff;
          border-color: rgba(46, 41, 255, 0.2);
          box-shadow: 0 10px 25px rgba(46, 41, 255, 0.04);
        }
        .fs-comp-card h4 {
          font-size: 18px;
          font-weight: 800;
          margin-bottom: 24px;
        }
        .fs-comp-card-cookie h4 { color: #64748b; }
        .fs-comp-card-custom h4 { color: #2E29FF; }
        .fs-comp-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .fs-comp-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 16px;
          font-size: 14px;
          line-height: 1.5;
        }
        .fs-comp-item:last-child {
          margin-bottom: 0;
        }
        .fs-comp-item-icon {
          flex-shrink: 0;
          margin-top: 2px;
          font-weight: 800;
        }
        .fs-comp-card-cookie .fs-comp-item-icon {
          color: #EA4335;
        }
        .fs-comp-card-custom .fs-comp-item-icon {
          color: #34A853;
        }
      `}</style>

      <div className="fs-page">
        
        {/* 1. HERO SECTION */}
        <section className="fs-hero">
          <div className="fs-container fs-hero-grid">
            <div className="fs-hero-text">
              <div style={{display:'inline-flex', alignItems:'center', gap:'8px', background:'rgba(46,41,255,0.08)', border:'1px solid rgba(46,41,255,0.2)', padding:'6px 16px', borderRadius:'40px', fontSize:'11px', fontWeight:'700', color:'#2E29FF', letterSpacing:'0.8px', textTransform:'uppercase', marginBottom:'20px'}}>
                Custom AI Solutions
              </div>
              <h1 className="fs-hero-title">
                AI Chatbot Development for <span className="fs-text-blue">Your Site & Business</span>
              </h1>
              <p className="fs-hero-desc" style={{ marginBottom: '38px' }}>
                Build intelligent, 24/7 conversational AI assistants that learn directly from your website and business data to answer visitor questions automatically.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '36px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
                  <Link to="/contact-us" className="fs-btn fs-btn-primary" style={{ height: '52px', padding: '0 28px', borderRadius: '12px', fontSize: '15px', fontWeight: '700', boxShadow: '0 8px 20px rgba(46, 41, 255, 0.25)' }}>
                    Get Started Free <ArrowRight />
                  </Link>
                  <button onClick={() => scrollToSection('pricing')} className="fs-btn" style={{ height: '52px', padding: '0 26px', borderRadius: '12px', fontSize: '15px', fontWeight: '700', backgroundColor: '#0B0F19', color: '#ffffff', border: 'none' }}>
                    Request a Custom Quote →
                  </button>
                </div>
                <div style={{ fontSize: '13.5px', color: '#475569', display: 'flex', flexWrap: 'wrap', gap: '22px', fontWeight: '600', marginTop: '6px', alignItems: 'center' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <HeroCheckBadge /> 24/7 Live AI Support
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <HeroCheckBadge /> Zero Credit Card Required
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <HeroCheckBadge /> 100% IP Ownership
                  </span>
                </div>
              </div>
            </div>
            <HeroChatAnimation />
          </div>
        </section>

        {/* TRUST ACCREDITATION TICKER */}
        <section className="fs-agency-alt">
          <div className="nd-ticker-wrap">
            <div className="nd-ticker">
              <div className="nd-ticker-track">
                {[...Array(2)].map((_, idx) => (
                  <div key={idx} className="nd-ticker-group">
                    <span>✦ OPENAI API INTEGRATION</span>
                    <span>✦ DIALOGFLOW & RASA EXPERTS</span>
                    <span>✦ 24/7 CUSTOMER AUTOMATION</span>
                    <span>✦ CRM & HELPDESK SYNC</span>
                    <span>✦ MULTILINGUAL SUPPORT</span>
                    <span>✦ 100% IP OWNERSHIP</span>
                    <span>✦ DIRECT DEVELOPER ACCESS</span>
                    <span>✦ GUARANTEED SLA & SUPPORT</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="fs-agency-alt-bg">
            <div className="nd-intro">
              <div className="nd-intro-inner">
                <div className="nd-intro-text">
                  <h2>Built for businesses that demand <em>conversations that convert</em></h2>
                  <p>Skip the basic keyword templates. We engineer advanced, context-aware conversational systems with seamless backend connections.</p>
                </div>
                <div className="nd-intro-stats">
                  <div className="nd-intro-stat">
                    <div className="nd-intro-stat-num">&lt;2<sub>s</sub></div>
                    <div className="nd-intro-stat-label">AI Response Time</div>
                  </div>
                  <div className="nd-intro-divider" />
                  <div className="nd-intro-stat">
                    <div className="nd-intro-stat-num">7<sub>day</sub></div>
                    <div className="nd-intro-stat-label">To First Prototype</div>
                  </div>
                  <div className="nd-intro-divider" />
                  <div className="nd-intro-stat">
                    <div className="nd-intro-stat-num">100<sub>%</sub></div>
                    <div className="nd-intro-stat-label">Code & IP Ownership</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="fs-usp-bar-transparent">
              <div className="fs-container fs-usp-grid">
                <div className="fs-usp-box">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                  <div>Custom-Built,<br/>Fully Owned Code</div>
                </div>
                <div className="fs-usp-box">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z"/>
                  </svg>
                  <div>State-of-the-Art<br/>LLMs & NLP Stacks</div>
                </div>
                <div className="fs-usp-box">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  <div>Free Initial Strategy<br/>& Architecture Call</div>
                </div>
                <div className="fs-usp-box">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                  </svg>
                  <div>Active Support<br/>SLA & Monitoring</div>
                </div>
                <div className="fs-usp-box">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
                  </svg>
                  <div>Transparent,<br/>Milestone-Based Fees</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. OVERVIEW SECTION */}
        <section className="fs-section fs-section-bg-slate">
          <div className="fs-container">
            <div className="fs-tag-arrows">SERVICE OVERVIEW</div>
            <h2 className="fs-section-title">The Power of Conversational Automation</h2>
            <p className="fs-section-subtitle">
              In a digital-first world, customers expect instant answers. They don't want to wait on hold, dig through FAQ pages, or send an email and hope for a same-day reply. They want a conversation — immediate, relevant, and available whenever they need it. This is exactly why businesses across every industry are investing in chatbot development, and why conversational AI has become one of the fastest-growing segments of enterprise software.
            </p>

            <div style={{ marginTop: '48px' }}>
              <h3 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '12px', color: '#0b0f19' }}>
                Chatbot Architectures We Support
              </h3>
              <p style={{ fontSize: '15px', color: '#64748b', marginBottom: '32px', fontWeight: '500' }}>
                Select an architecture below to explore its capabilities, complexity, and common industry use cases.
              </p>

              <div className="fs-overview-layout">
                {/* Tabs Selector */}
                <div className="fs-overview-tabs">
                  {architectures.map((arch, index) => (
                    <button
                      key={index}
                      className={`fs-overview-tab ${activeArch === index ? 'active' : ''}`}
                      onClick={() => setActiveArch(index)}
                    >
                      <div className="fs-overview-tab-icon">
                        {arch.icon}
                      </div>
                      <div className="fs-overview-tab-text">
                        <h4>{arch.title}</h4>
                        <span>{arch.tagline}</span>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Preview Detail Card */}
                <div className="fs-overview-preview">
                  <div className="fs-overview-preview-card">
                    <div>
                      <div className="fs-overview-preview-header">
                        <span className="fs-overview-preview-badge">{architectures[activeArch].badge}</span>
                        <div style={{ fontSize: '13px', fontWeight: '700', color: '#64748b', display: 'flex', alignItems: 'center', gap: '6px' }}>
                          Complexity: 
                          <span style={{ 
                            color: architectures[activeArch].complexity === 'High' ? '#EA4335' : 
                                   architectures[activeArch].complexity === 'Medium' ? '#FBBC05' : '#34A853' 
                          }}>
                            {architectures[activeArch].complexity}
                          </span>
                        </div>
                      </div>
                      <h3>{architectures[activeArch].title}</h3>
                      <div className="fs-overview-preview-tagline" style={{ marginBottom: '16px' }}>{architectures[activeArch].tagline}</div>
                    </div>

                    <ArchViz activeArch={activeArch} />

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '16px' }}>
                      {architectures[activeArch].useCases.map((useCase, idx) => (
                        <div key={idx} style={{ background: 'rgba(46, 41, 255, 0.05)', border: '1px solid rgba(46, 41, 255, 0.15)', borderRadius: '20px', padding: '6px 14px', fontSize: '12px', fontWeight: '600', color: '#2E29FF', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                          <span>✦ {useCase}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Split Cards: Do's vs Don'ts */}
            <div className="fs-split-cards">
              {/* Success Pillars (Do's) */}
              <div className="fs-split-card fs-split-card-success">
                <h3>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  What Makes a Chatbot Project Succeed
                </h3>
                <ul className="fs-split-list">
                  <li className="fs-split-item">
                    <div className="fs-split-item-icon">
                      <CheckCircle />
                    </div>
                    <div>
                      <strong>Focused Initial Scope:</strong> Launching with a targeted array of high-value FAQs and core user flows, adding features iteratively.
                    </div>
                  </li>
                  <li className="fs-split-item">
                    <div className="fs-split-item-icon">
                      <CheckCircle />
                    </div>
                    <div>
                      <strong>Conversation Design UX:</strong> Designing dialogue trees that feel natural, handle human context adjustments, and minimize friction.
                    </div>
                  </li>
                  <li className="fs-split-item">
                    <div className="fs-split-item-icon">
                      <CheckCircle />
                    </div>
                    <div>
                      <strong>Quality Model Training:</strong> Feeding the NLP intent engine high-quality training phrases mapping real-world user interactions.
                    </div>
                  </li>
                  <li className="fs-split-item">
                    <div className="fs-split-item-icon">
                      <CheckCircle />
                    </div>
                    <div>
                      <strong>Smooth Live Handoff:</strong> Offering an instant, context-preserved transition to a human support agent whenever the bot reaches its limits.
                    </div>
                  </li>
                  <li className="fs-split-item">
                    <div className="fs-split-item-icon">
                      <CheckCircle />
                    </div>
                    <div>
                      <strong>Continuous Retraining:</strong> Actively monitoring conversation drop-offs and refinement loops after going live.
                    </div>
                  </li>
                </ul>
              </div>

              {/* Pitfalls (Don'ts) */}
              <div className="fs-split-card fs-split-card-failure">
                <h3>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="15" y1="9" x2="9" y2="15"></line>
                    <line x1="9" y1="9" x2="15" y2="15"></line>
                  </svg>
                  Why Chatbots Fail (And How to Avoid It)
                </h3>
                <ul className="fs-split-list">
                  <li className="fs-split-item">
                    <div className="fs-split-item-icon" style={{ background: 'rgba(234, 67, 53, 0.1)', color: '#EA4335', fontWeight: 'bold' }}>
                      ✕
                    </div>
                    <div>
                      <strong>Overambitious Scope:</strong> Attempting to automate every business operation on Day 1, which confuses the intent routing.
                    </div>
                  </li>
                  <li className="fs-split-item">
                    <div className="fs-split-item-icon" style={{ background: 'rgba(234, 67, 53, 0.1)', color: '#EA4335', fontWeight: 'bold' }}>
                      ✕
                    </div>
                    <div>
                      <strong>Rigid Scripts & Dead Ends:</strong> Failing to map custom phrasing and leaving users trapped in dialogue loops with no route forward.
                    </div>
                  </li>
                  <li className="fs-split-item">
                    <div className="fs-split-item-icon" style={{ background: 'rgba(234, 67, 53, 0.1)', color: '#EA4335', fontWeight: 'bold' }}>
                      ✕
                    </div>
                    <div>
                      <strong>Untrained Language Workspaces:</strong> Leaving the machine learning model unoptimized and prone to misunderstanding basic intents.
                    </div>
                  </li>
                  <li className="fs-split-item">
                    <div className="fs-split-item-icon" style={{ background: 'rgba(234, 67, 53, 0.1)', color: '#EA4335', fontWeight: 'bold' }}>
                      ✕
                    </div>
                    <div>
                      <strong>Trapped User Experience:</strong> Keeping users locked inside the chat interface with no escape paths or human ticketing.
                    </div>
                  </li>
                  <li className="fs-split-item">
                    <div className="fs-split-item-icon" style={{ background: 'rgba(234, 67, 53, 0.1)', color: '#EA4335', fontWeight: 'bold' }}>
                      ✕
                    </div>
                    <div>
                      <strong>"Set and Forget" Mentality:</strong> Treating launch day as the end of the project and ignoring analytical drop-off insights.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 3. WHY CHOOSE OUR CHATBOT DEVELOPMENT COMPANY */}
        <section className="fs-section">
          <div className="fs-container">
            <div className="fs-tag-arrows">WHY CHOOSE US</div>
            
            <div className="fs-why-us-grid">
              {/* Left Column: Sticky Title & Spotlight Value Promise */}
              <div className="fs-why-us-sticky">
                <h2 className="fs-section-title" style={{ marginBottom: '24px' }}>
                  A Business-First Approach to Conversational AI
                </h2>
                <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.65' }}>
                  There is no shortage of template-based chatbot builders. We differentiate ourselves by delivering bespoke software engineering, enterprise security, and long-term data optimization.
                </p>
                
                {/* Spotlight Card */}
                <div className="fs-value-spotlight">
                  <h4>The NovaDesk Promise</h4>
                  <ul className="fs-spotlight-list">
                    <li className="fs-spotlight-item">
                      <CheckCircle />
                      <span>100% Source Code Ownership</span>
                    </li>
                    <li className="fs-spotlight-item">
                      <CheckCircle />
                      <span>No Vendor Platform Lock-In</span>
                    </li>
                    <li className="fs-spotlight-item">
                      <CheckCircle />
                      <span>Direct Developer Slack Access</span>
                    </li>
                    <li className="fs-spotlight-item">
                      <CheckCircle />
                      <span>Strict Compliance Standards</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column: 6 Differentiators Stack */}
              <div className="fs-differentiators-stack">
                <div className="fs-diff-row">
                  <div className="fs-diff-number">01</div>
                  <div className="fs-diff-content">
                    <h3>Business Goals First</h3>
                    <p>We start with your specific goals—reducing support tickets, qualifying leads, or recovering shopping carts—and design the chatbot architecture to achieve those specific outcomes.</p>
                  </div>
                </div>
                <div className="fs-diff-row">
                  <div className="fs-diff-number">02</div>
                  <div className="fs-diff-content">
                    <h3>Custom-Built, Not Cookie-Cutter</h3>
                    <p>Template platforms struggle with complex flows and tone. Our custom solutions are engineered from scratch around your brand voice, user data, and system workflows.</p>
                  </div>
                </div>
                <div className="fs-diff-row">
                  <div className="fs-diff-number">03</div>
                  <div className="fs-diff-content">
                    <h3>Deep Platform Expertise</h3>
                    <p>Our engineers have deep expertise in Dialogflow, Rasa, Microsoft Bot Framework, AWS Lex, and custom-trained OpenAI LLM pipelines.</p>
                  </div>
                </div>
                <div className="fs-diff-row">
                  <div className="fs-diff-number">04</div>
                  <div className="fs-diff-content">
                    <h3>UX & Conversation Designers</h3>
                    <p>A bot is only as good as the dialogue it delivers. Our UX specialists map out fallback strategies, edge cases, and brand tone before code is written.</p>
                  </div>
                </div>
                <div className="fs-diff-row">
                  <div className="fs-diff-number">05</div>
                  <div className="fs-diff-content">
                    <h3>Regulated Data & Compliance</h3>
                    <p>Security is baked into our development lifecycle. We implement encryption and access controls aligned with HIPAA, GDPR, and PCI-DSS compliance.</p>
                  </div>
                </div>
                <div className="fs-diff-row">
                  <div className="fs-diff-number">06</div>
                  <div className="fs-diff-content">
                    <h3>Ongoing Optimization</h3>
                    <p>We don't "set and forget." We provide post-launch optimization contracts to review analytics, resolve drop-offs, and retrain NLP models.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Comparison Cards */}
            <div className="fs-comparison-split">
              {/* Cookie Cutter */}
              <div className="fs-comp-card fs-comp-card-cookie">
                <h4>The Template Route</h4>
                <ul className="fs-comp-list">
                  <li className="fs-comp-item">
                    <span className="fs-comp-item-icon">✕</span>
                    <div><strong>Closed ecosystems:</strong> Hard vendor lock-in to visual builders requiring high monthly platform subscription fees.</div>
                  </li>
                  <li className="fs-comp-item">
                    <span className="fs-comp-item-icon">✕</span>
                    <div><strong>Rigid dialogues:</strong> Incapable of managing context shifts or open-ended inquiries, frustrating customer users.</div>
                  </li>
                  <li className="fs-comp-item">
                    <span className="fs-comp-item-icon">✕</span>
                    <div><strong>Generic brand voice:</strong> Follows standard word patterns, failing to represent your unique brand identity or tone.</div>
                  </li>
                  <li className="fs-comp-item">
                    <span className="fs-comp-item-icon">✕</span>
                    <div><strong>Basic integrations:</strong> Restricted to pre-existing app plugins without support for legacy or custom APIs.</div>
                  </li>
                </ul>
              </div>

              {/* Custom engineering */}
              <div className="fs-comp-card fs-comp-card-custom">
                <h4>The NovaDesk Custom Route</h4>
                <ul className="fs-comp-list">
                  <li className="fs-comp-item">
                    <span className="fs-comp-item-icon">✓</span>
                    <div><strong>Full IP ownership:</strong> Complete source code and server configurations belong to you, with zero monthly usage markups.</div>
                  </li>
                  <li className="fs-comp-item">
                    <span className="fs-comp-item-icon">✓</span>
                    <div><strong>Flexible NLP & LLMs:</strong> Dynamically interprets context changes and handles open-ended questions fluently.</div>
                  </li>
                  <li className="fs-comp-item">
                    <span className="fs-comp-item-icon">✓</span>
                    <div><strong>Brand alignment:</strong> Tailored dialogue structures and response guidelines built around your specific brand guidelines.</div>
                  </li>
                  <li className="fs-comp-item">
                    <span className="fs-comp-item-icon">✓</span>
                    <div><strong>Any database sync:</strong> Custom webhook middleware connecting with CRMs, ERPs, inventory portals, and internal logs.</div>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* 4. FEATURES SECTION */}
        <section className="fs-section fs-features-light">
          <div className="fs-container">
            <div className="fs-tag-arrows">SYSTEM FEATURES</div>
            <h2 className="fs-section-title">Enterprise-Grade Features for High-Performing Chatbots</h2>
            <p className="fs-section-subtitle">
              We construct custom chatbots equipped with advanced operational capabilities to handle complex business use cases.
            </p>

            <div className="fs-bento-grid">
              {/* Card 1: NLP & Intent Recognition (Wide - 2 Cols) */}
              <div className="fs-bento-card fs-bento-col-2">
                <div className="fs-bento-card-badge">Smart NLP</div>
                <h3>NLP & Intent Recognition</h3>
                <p>Our chatbots understand natural human language, handling typos, slang, and context shifting effortlessly to give instant, accurate replies.</p>
                
                {/* Chat Visual Mockup */}
                <div style={{ marginTop: '20px', background: '#f8fafc', padding: '16px', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.05)', fontSize: '13px' }}>
                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
                    <div style={{ background: '#2E29FF', color: '#ffffff', padding: '8px 14px', borderRadius: '12px 12px 2px 12px', maxWidth: '80%', fontWeight: '500' }}>
                      "Hey, can I change my shipping address for order #A402?"
                    </div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <div style={{ background: '#ffffff', color: '#0b0f19', border: '1px solid rgba(0,0,0,0.08)', padding: '8px 14px', borderRadius: '12px 12px 12px 2px', maxWidth: '80%', fontWeight: '500', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
                      "Sure! I've updated the shipping address for order <strong>#A402</strong>. You'll receive a confirmation email shortly."
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Multi-Channel Deployments (Regular - 1 Col) */}
              <div className="fs-bento-card">
                <div className="fs-bento-card-badge" style={{ background: 'rgba(52,168,83,0.05)', color: '#34A853' }}>Channels</div>
                <h3>Multi-Channel Deployments</h3>
                <p>Engage your audience across their favorite messaging platforms from a single normalized chat workflow.</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '16px' }}>
                  <span className="fs-bento-channel-badge">Website Widget</span>
                  <span className="fs-bento-channel-badge">WhatsApp</span>
                  <span className="fs-bento-channel-badge">iOS & Android</span>
                  <span className="fs-bento-channel-badge">Slack</span>
                  <span className="fs-bento-channel-badge">SMS</span>
                </div>
              </div>

              {/* Card 3: Seamless Integrations (Regular - 1 Col) */}
              <div className="fs-bento-card">
                <div className="fs-bento-card-badge" style={{ background: 'rgba(251,188,5,0.08)', color: '#D97706' }}>APIs</div>
                <h3>Seamless Integrations</h3>
                <p>Syncs data instantly with your CRMs, support ticket channels, and inventory systems.</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '16px' }}>
                  <span className="fs-lang-pill">Salesforce</span>
                  <span className="fs-lang-pill">HubSpot</span>
                  <span className="fs-lang-pill">Shopify</span>
                  <span className="fs-lang-pill">Zendesk</span>
                </div>
              </div>

              {/* Card 4: Live Human Handoff (Wide - 2 Cols) */}
              <div className="fs-bento-card fs-bento-col-2">
                <div className="fs-bento-card-badge" style={{ background: 'rgba(234,67,53,0.05)', color: '#EA4335' }}>Human-in-the-Loop</div>
                <h3>Live Human Handoff</h3>
                <p>When customer requests get complex, the chatbot smoothly transfers the dialogue to a live team member, passing along the full history.</p>
                
                {/* Visual Handoff Simulation */}
                <div style={{ marginTop: '20px', background: '#f8fafc', padding: '14px 18px', borderRadius: '12px', border: '1px border-dashed rgba(234,67,53,0.3)', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12.5px' }}>
                  <div style={{ color: '#EA4335', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: '#EA4335', animation: 'pulse 1.5s infinite' }}></span>
                    Customer requested live agent support...
                  </div>
                  <div style={{ background: '#ffffff', padding: '10px 14px', borderRadius: '8px', border: '1px solid rgba(52,168,83,0.2)', color: '#0b0f19' }}>
                    <strong style={{ color: '#34A853' }}>Sarah (Support):</strong> "Hi there! I have your details open. Let me assist you with that order refund right away."
                  </div>
                </div>
              </div>

              {/* Card 5: Context Retention (Regular - 1 Col) */}
              <div className="fs-bento-card">
                <div className="fs-bento-card-badge">Smart Memory</div>
                <h3>Context Retention</h3>
                <p>The chatbot remembers user attributes and active shopping carts, ensuring a personalized experience without asking the customer to repeat themselves.</p>
                <div style={{ marginTop: '16px', padding: '10px 14px', background: '#f8fafc', borderRadius: '10px', border: '1px solid rgba(46,41,255,0.1)', fontSize: '12px', color: '#2E29FF', fontWeight: '600' }}>
                  "Welcome back, Jane! Would you like to view the items left in your cart?"
                </div>
              </div>

              {/* Card 6: Multilingual Support (Regular - 1 Col) */}
              <div className="fs-bento-card">
                <div className="fs-bento-card-badge" style={{ background: 'rgba(52,168,83,0.05)', color: '#34A853' }}>Global Reach</div>
                <h3>Multilingual Support</h3>
                <p>Greets and chats in 60+ languages fluently, allowing your brand to support global markets without hiring multilingual agents.</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '16px' }}>
                  <span className="fs-lang-pill">English</span>
                  <span className="fs-lang-pill">Español</span>
                  <span className="fs-lang-pill">Français</span>
                  <span className="fs-lang-pill">Deutsch</span>
                  <span className="fs-lang-pill">日本語</span>
                </div>
              </div>

              {/* Card 8: Interactive Rich Media (Regular - 1 Col) */}
              <div className="fs-bento-card">
                <div className="fs-bento-card-badge" style={{ background: 'rgba(0,0,0,0.04)', color: '#0b0f19' }}>UX Features</div>
                <h3>Interactive Rich Media</h3>
                <p>Give customers rich experiences with image carousels, quick-reply options, and scheduling calendars inside the chat window.</p>
                <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
                  <button style={{ background: 'rgba(46,41,255,0.08)', border: '1px solid #2E29FF', color: '#2E29FF', fontSize: '11px', padding: '6px 12px', borderRadius: '20px', cursor: 'pointer', fontWeight: '600' }}>Select Size</button>
                  <button style={{ background: '#f8fafc', border: '1px solid rgba(0,0,0,0.1)', color: '#475569', fontSize: '11px', padding: '6px 12px', borderRadius: '20px', cursor: 'pointer', fontWeight: '600' }}>View Cart</button>
                </div>
              </div>

              {/* Card 7: Analytics & Metrics (Wide - 2 Cols) */}
              <div className="fs-bento-card fs-bento-col-2">
                <div className="fs-bento-card-badge" style={{ background: 'rgba(52,168,83,0.05)', color: '#34A853' }}>Performance</div>
                <h3>Analytics & Metrics</h3>
                <p>Monitor customer inquiries, capture satisfaction levels, and trace resolution improvements directly in a simple dashboard.</p>
                
                {/* Metrics Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginTop: '20px' }}>
                  <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.05)', textAlign: 'center' }}>
                    <div style={{ fontSize: '28px', fontWeight: '800', color: '#34A853' }}>84%</div>
                    <div style={{ fontSize: '11px', color: '#475569', marginTop: '4px', fontWeight: '600' }}>Tickets Deflected</div>
                  </div>
                  <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.05)', textAlign: 'center' }}>
                    <div style={{ fontSize: '28px', fontWeight: '800', color: '#2E29FF' }}>&lt; 1s</div>
                    <div style={{ fontSize: '11px', color: '#475569', marginTop: '4px', fontWeight: '600' }}>Reply Speed</div>
                  </div>
                  <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.05)', textAlign: 'center' }}>
                    <div style={{ fontSize: '28px', fontWeight: '800', color: '#0b0f19' }}>24/7</div>
                    <div style={{ fontSize: '11px', color: '#475569', marginTop: '4px', fontWeight: '600' }}>Uptime Availability</div>
                  </div>
                </div>
              </div>

              {/* Card 9: Content Management (Regular - 1 Col) */}
              <div className="fs-bento-card">
                <div className="fs-bento-card-badge" style={{ background: 'rgba(52,168,83,0.05)', color: '#34A853' }}>No-Code Admin</div>
                <h3>Content Management</h3>
                <p>Update answers, FAQs, and welcome greetings in seconds using a simple, intuitive admin dashboard. No code required.</p>
                <div style={{ marginTop: '16px', padding: '12px', background: '#f8fafc', borderRadius: '10px', border: '1px solid rgba(0,0,0,0.05)', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '8px', color: '#0b0f19' }}>
                  <span style={{ fontWeight: 'bold', color: '#34A853' }}>Greeting:</span> "Hello! How can we help you today?"
                </div>
              </div>
            </div>

            {/* Features summary table (Light Theme) */}
            <div style={{ marginTop: '60px' }}>
              <h3 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '20px', color: '#0b0f19' }}>
                Feature Matrix Overview
              </h3>
              <div className="fs-table-container">
                <table className="fs-table">
                  <thead>
                    <tr>
                      <th>Feature Category</th>
                      <th>What's Included</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Language Understanding</strong></td>
                      <td>NLP, intent recognition, entity extraction, sentiment detection, context tracking</td>
                    </tr>
                    <tr>
                      <td><strong>Channels</strong></td>
                      <td>Website widget, custom mobile apps, WhatsApp Business, Facebook Messenger, Instagram, Telegram, SMS, Slack, MS Teams</td>
                    </tr>
                    <tr>
                      <td><strong>Integrations</strong></td>
                      <td>CRM, helpdesk platforms, e-commerce engines, payment gateways, calendar booking APIs, marketing automation tools</td>
                    </tr>
                    <tr>
                      <td><strong>AI Capabilities</strong></td>
                      <td>Generative AI/LLM search, personalization engine, item recommendations, vector database query matching</td>
                    </tr>
                    <tr>
                      <td><strong>Analytics</strong></td>
                      <td>Conversion tracking, fallback rates, CSAT score reports, message path drop-off analytics</td>
                    </tr>
                    <tr>
                      <td><strong>Security</strong></td>
                      <td>End-to-end data encryption, role-based access control, secure authentication webhooks, GDPR/HIPAA compliance setups</td>
                    </tr>
                    <tr>
                      <td><strong>Management</strong></td>
                      <td>No-code admin panel, simple content editor, visual dialogue flowchart adjusting</td>
                    </tr>
                    <tr>
                      <td><strong>Human Support</strong></td>
                      <td>Live agent routing, ticket creation webhooks, complete dialog transcript transfer</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </section>

        {/* 5. BENEFITS SECTION */}
        <section className="fs-section">
          <div className="fs-container">
            <div className="fs-tag-arrows">BUSINESS BENEFITS</div>
            <h2 className="fs-section-title">Measurable Business Value From Day One</h2>
            <p className="fs-section-subtitle">
              Deploying custom chatbots allows businesses to optimize resources, capture cold leads, and scale response times instantly.
            </p>

            <div className="fs-grid-3">
              <div className="fs-card-premium">
                <h3>24/7/365 Availability</h3>
                <p>Never leave a customer waiting. Provide immediate support, resolve FAQs, and log leads in the middle of the night without hiring night-shift staff.</p>
              </div>
              <div className="fs-card-premium">
                <h3>Minimized Support Costs</h3>
                <p>Automate high-volume repetitive queries (shipping status, password resets). Free up support agents to resolve high-value complex customer cases.</p>
              </div>
              <div className="fs-card-premium">
                <h3>Increased CSAT Scores</h3>
                <p>Eliminate queues and delays. Customer satisfaction increases when people receive accurate answers within seconds instead of hours.</p>
              </div>
              <div className="fs-card-premium">
                <h3>Lead Qualification at Scale</h3>
                <p>Engage web visitors proactively. Ask qualifying questions and sync hot leads directly to your sales CRM automatically.</p>
              </div>
              <div className="fs-card-premium">
                <h3>Conversational Commerce</h3>
                <p>Guide shoppers to product pages, resolve buying objections in real-time, recover carts, and upsell orders directly inside the chat window.</p>
              </div>
              <div className="fs-card-premium">
                <h3>Instant Capacity Scaling</h3>
                <p>Easily absorb sudden holiday shopping surges or PR traffic spikes without the need to hire and train temporary seasonal staff.</p>
              </div>
            </div>

            {/* Benefits summary table */}
            <div style={{ marginTop: '50px' }}>
              <h3 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '20px', color: '#0b0f19' }}>
                Expected Business Impact Metrics
              </h3>
              <div className="fs-table-container">
                <table className="fs-table">
                  <thead>
                    <tr>
                      <th>Benefit</th>
                      <th>Expected Business Impact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>24/7 availability</strong></td>
                      <td>Ensures zero missed customer inquiries, regardless of time zone or operational hours.</td>
                    </tr>
                    <tr>
                      <td><strong>Faster response times</strong></td>
                      <td>Improves overall CSAT score ratings and reduces user attrition due to support delay frustration.</td>
                    </tr>
                    <tr>
                      <td><strong>Lower support costs</strong></td>
                      <td>Drastically reduces average cost-per-ticket by deflecting routine queries away from live queues.</td>
                    </tr>
                    <tr>
                      <td><strong>Better lead qualification</strong></td>
                      <td>Delivers highly qualified, sales-ready prospects directly to your sales reps with context.</td>
                    </tr>
                    <tr>
                      <td><strong>Higher e-commerce conversions</strong></td>
                      <td>Decreases cart abandonment rate and boosts average order value through conversational recommendations.</td>
                    </tr>
                    <tr>
                      <td><strong>Consistent messaging</strong></td>
                      <td>Builds a reliable, uniform brand experience that accurately displays pricing, FAQs, and policies.</td>
                    </tr>
                    <tr>
                      <td><strong>Actionable customer insights</strong></td>
                      <td>Logs data points on what customers ask most, informing product roadmaps and support documentation.</td>
                    </tr>
                    <tr>
                      <td><strong>Instant scalability</strong></td>
                      <td>Handles millions of simultaneous queries without adding support infrastructure headcount.</td>
                    </tr>
                    <tr>
                      <td><strong>Reduced employee burnout</strong></td>
                      <td>Improves team morale and retention by filtering out repetitive questions.</td>
                    </tr>
                    <tr>
                      <td><strong>Multilingual capability</strong></td>
                      <td>Expands market reach into new countries without hiring native-speaking support staff in every market.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </section>

        {/* 6. OUR PROCESS SECTION */}
        <section className="fs-process-blue">
          <div className="fs-container">
            <div className="fs-process-header-wrap">
              <div className="fs-process-header-left">
                <div className="fs-process-tag-lines">← OUR ROADMAP →</div>
                <h2>A Structured Process for Launching Conversational Assistants</h2>
              </div>
              <div className="fs-process-header-right">
                <p>
                  We coordinate discovery, conversational design, NLP training, backend systems integration, and post-launch refinement to ensure project success.
                </p>
              </div>
            </div>

            <div className="fs-timeline-blue">
              <div className="fs-timeline-item-blue">
                <div className="fs-timeline-dot-blue"></div>
                <div className="fs-timeline-content-blue">
                  <span className="fs-timeline-step-badge">STEP 01</span>
                  <h3>Discovery & Strategy Mapping</h3>
                  <p>In-depth discovery session. We audit customer support history, FAQs, and database structures to identify the highest-value automation paths and build a detailed scoping sheet.</p>
                </div>
              </div>
              <div className="fs-timeline-item-blue">
                <div className="fs-timeline-dot-blue"></div>
                <div className="fs-timeline-content-blue">
                  <span className="fs-timeline-step-badge">STEP 02</span>
                  <h3>Conversation Design & Persona Calibration</h3>
                  <p>Our UX designers outline dialogue trees, context flows, fallback intents, and brand persona tone. We validate these wireframe flows with you before development starts.</p>
                </div>
              </div>
              <div className="fs-timeline-item-blue">
                <div className="fs-timeline-dot-blue"></div>
                <div className="fs-timeline-content-blue">
                  <span className="fs-timeline-step-badge">STEP 03</span>
                  <h3>Tech Stack & Architecture Design</h3>
                  <p>We finalize the underlying technologies (Dialogflow, OpenAI API, AWS, etc.) based on your scalability needs, security parameters, and integration points.</p>
                </div>
              </div>
              <div className="fs-timeline-item-blue">
                <div className="fs-timeline-dot-blue"></div>
                <div className="fs-timeline-content-blue">
                  <span className="fs-timeline-step-badge">STEP 04</span>
                  <h3>Functional Prototyping</h3>
                  <p>We build a simple, working proof-of-concept covering primary workflows. This allows you to test the conversation flow and intent accuracy in a mock environment early on.</p>
                </div>
              </div>
              <div className="fs-timeline-item-blue">
                <div className="fs-timeline-dot-blue"></div>
                <div className="fs-timeline-content-blue">
                  <span className="fs-timeline-step-badge">STEP 05</span>
                  <h3>NLP Training & Backend Development</h3>
                  <p>We train the NLP models on custom support datasets, build backend API webhooks, set up database storage nodes, and connect required CRM/helpdesk pipelines.</p>
                </div>
              </div>
              <div className="fs-timeline-item-blue">
                <div className="fs-timeline-dot-blue"></div>
                <div className="fs-timeline-content-blue">
                  <span className="fs-timeline-step-badge">STEP 06</span>
                  <h3>Rigorous Testing & QA</h3>
                  <p>Multi-layered validation covering functional webhooks, dialogue loops, stressed request volume limits, data encryption security checks, and cross-channel layout matching.</p>
                </div>
              </div>
              <div className="fs-timeline-item-blue">
                <div className="fs-timeline-dot-blue"></div>
                <div className="fs-timeline-content-blue">
                  <span className="fs-timeline-step-badge">STEP 07</span>
                  <h3>Launch & Post-Launch Optimization</h3>
                  <p>Deploying the chatbot widget and API nodes live across channels. We monitor logs closely during the launch window, identify fallbacks, and retrain the intent models continuously.</p>
                </div>
              </div>
            </div>

            {/* Process duration table (Clean White Executive Theme) */}
            <div style={{ marginTop: '60px' }}>
              <h3 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '20px', color: '#ffffff' }}>
                Timeline Breakdown
              </h3>
              <div className="fs-table-container" style={{ background: '#ffffff', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.2)', boxShadow: '0 20px 40px rgba(0,0,0,0.12)', padding: '8px', overflow: 'hidden' }}>
                <table className="fs-table" style={{ background: '#ffffff', color: '#0b0f19' }}>
                  <thead>
                    <tr style={{ background: '#f8fafc' }}>
                      <th style={{ color: '#0b0f19', borderBottom: '2px solid #e2e8f0', background: '#f8fafc', fontWeight: '800' }}>Phase</th>
                      <th style={{ color: '#0b0f19', borderBottom: '2px solid #e2e8f0', background: '#f8fafc', fontWeight: '800' }}>Key Activities</th>
                      <th style={{ color: '#0b0f19', borderBottom: '2px solid #e2e8f0', background: '#f8fafc', fontWeight: '800' }}>Typical Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ color: '#0b0f19', borderBottom: '1px solid #e2e8f0' }}><strong>Discovery</strong></td>
                      <td style={{ color: '#475569', borderBottom: '1px solid #e2e8f0' }}>Scoping, audit logs review, API access tokens, goal definition</td>
                      <td style={{ borderBottom: '1px solid #e2e8f0' }}><span className="fs-lang-pill" style={{ background: '#f1f5f9', color: '#0b0f19', border: '1px solid #cbd5e1' }}>1–2 weeks</span></td>
                    </tr>
                    <tr>
                      <td style={{ color: '#0b0f19', borderBottom: '1px solid #e2e8f0' }}><strong>Conversation Design</strong></td>
                      <td style={{ color: '#475569', borderBottom: '1px solid #e2e8f0' }}>Flowchart mapping, dialogue drafts, brand persona styling</td>
                      <td style={{ borderBottom: '1px solid #e2e8f0' }}><span className="fs-lang-pill" style={{ background: '#f1f5f9', color: '#0b0f19', border: '1px solid #cbd5e1' }}>1–2 weeks</span></td>
                    </tr>
                    <tr>
                      <td style={{ color: '#0b0f19', borderBottom: '1px solid #e2e8f0' }}><strong>Prototype Build</strong></td>
                      <td style={{ color: '#475569', borderBottom: '1px solid #e2e8f0' }}>Core workflow wireframing, initial NLP workspace testing</td>
                      <td style={{ borderBottom: '1px solid #e2e8f0' }}><span className="fs-lang-pill" style={{ background: '#f1f5f9', color: '#0b0f19', border: '1px solid #cbd5e1' }}>1–3 weeks</span></td>
                    </tr>
                    <tr>
                      <td style={{ color: '#0b0f19', borderBottom: '1px solid #e2e8f0' }}><strong>Full Development</strong></td>
                      <td style={{ color: '#475569', borderBottom: '1px solid #e2e8f0' }}>Intent NLP training, webhooks APIs code, CRM integrations, channels link</td>
                      <td style={{ borderBottom: '1px solid #e2e8f0' }}><span className="fs-lang-pill" style={{ background: 'rgba(46,41,255,0.08)', color: '#2E29FF', border: '1px solid rgba(46,41,255,0.2)' }}>3–8 weeks</span></td>
                    </tr>
                    <tr>
                      <td style={{ color: '#0b0f19', borderBottom: '1px solid #e2e8f0' }}><strong>Testing & QA</strong></td>
                      <td style={{ color: '#475569', borderBottom: '1px solid #e2e8f0' }}>Security check, edge cases testing, channel responsive layout tests</td>
                      <td style={{ borderBottom: '1px solid #e2e8f0' }}><span className="fs-lang-pill" style={{ background: '#f1f5f9', color: '#0b0f19', border: '1px solid #cbd5e1' }}>1–2 weeks</span></td>
                    </tr>
                    <tr>
                      <td style={{ color: '#0b0f19', borderBottom: '1px solid #e2e8f0' }}><strong>User Review / UAT</strong></td>
                      <td style={{ color: '#475569', borderBottom: '1px solid #e2e8f0' }}>Client dashboard testing, wording tweaks, final adjustments</td>
                      <td style={{ borderBottom: '1px solid #e2e8f0' }}><span className="fs-lang-pill" style={{ background: '#f1f5f9', color: '#0b0f19', border: '1px solid #cbd5e1' }}>1 week</span></td>
                    </tr>
                    <tr>
                      <td style={{ color: '#0b0f19', borderBottom: 'none' }}><strong>Launch & Support</strong></td>
                      <td style={{ color: '#475569', borderBottom: 'none' }}>Deploying production workspace, active logging monitoring, fallback training</td>
                      <td style={{ borderBottom: 'none' }}><span className="fs-lang-pill" style={{ background: 'rgba(52,168,83,0.08)', color: '#34A853', border: '1px solid rgba(52,168,83,0.2)' }}>Continuous</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.8)', fontStyle: 'italic', marginTop: '12px' }}>
                Note: Overall timelines vary depending on integration requirements, channel counts, and database mapping complexity.
              </p>
            </div>

            {/* Split cards for Project Track & Client Requirements */}
            <div className="fs-grid-2" style={{ marginTop: '50px', gap: '24px' }}>
              <div className="fs-track-card-blue">
                <h3>
                  <span style={{ color: '#34A853' }}>✓</span> How We Keep Projects On Track
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div className="fs-track-item-blue">
                    <div style={{ background: 'rgba(52,168,83,0.15)', color: '#34A853', borderRadius: '50%', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '800', flexShrink: 0 }}>✓</div>
                    <div><strong>Weekly Demos:</strong> Review working prototype milestones every week so there are no surprises at launch.</div>
                  </div>
                  <div className="fs-track-item-blue">
                    <div style={{ background: 'rgba(52,168,83,0.15)', color: '#34A853', borderRadius: '50%', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '800', flexShrink: 0 }}>✓</div>
                    <div><strong>Shared Dashboards:</strong> Full access to live task lists, sprint updates, and staging environments.</div>
                  </div>
                  <div className="fs-track-item-blue">
                    <div style={{ background: 'rgba(52,168,83,0.15)', color: '#34A853', borderRadius: '50%', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '800', flexShrink: 0 }}>✓</div>
                    <div><strong>Direct Channels:</strong> Slack or Teams communication directly with developers, avoiding account manager layers.</div>
                  </div>
                  <div className="fs-track-item-blue">
                    <div style={{ background: 'rgba(52,168,83,0.15)', color: '#34A853', borderRadius: '50%', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '800', flexShrink: 0 }}>✓</div>
                    <div><strong>Rollback Scenarios:</strong> Complete safe deployment and rollback plans mapped out for launch day.</div>
                  </div>
                </div>
              </div>

              <div className="fs-track-card-blue">
                <h3>
                  <span style={{ color: '#60A5FA' }}>✦</span> What We Need From You
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div className="fs-track-item-blue">
                    <div style={{ background: 'rgba(96,165,250,0.15)', color: '#60A5FA', borderRadius: '50%', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '800', flexShrink: 0 }}>✦</div>
                    <div><strong>Historical Logs:</strong> Messy or structured, customer support transcripts and FAQ lists help train NLP.</div>
                  </div>
                  <div className="fs-track-item-blue">
                    <div style={{ background: 'rgba(96,165,250,0.15)', color: '#60A5FA', borderRadius: '50%', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '800', flexShrink: 0 }}>✦</div>
                    <div><strong>Subject Matter Expert:</strong> A key point-of-contact to clarify business processes and policies.</div>
                  </div>
                  <div className="fs-track-item-blue">
                    <div style={{ background: 'rgba(96,165,250,0.15)', color: '#60A5FA', borderRadius: '50%', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '800', flexShrink: 0 }}>✦</div>
                    <div><strong>API Credentials:</strong> Sandbox or staging access keys for platforms you want integrated.</div>
                  </div>
                  <div className="fs-track-item-blue">
                    <div style={{ background: 'rgba(96,165,250,0.15)', color: '#60A5FA', borderRadius: '50%', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '800', flexShrink: 0 }}>✦</div>
                    <div><strong>Timely Reviews:</strong> Active feedback during flow design and acceptance testing phases.</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 7. INDUSTRIES WE SERVE */}
        <section className="fs-section fs-section-bg-slate">
          <div className="fs-container">
            <div className="fs-tag-arrows">INDUSTRIES WE SERVE</div>
            <h2 className="fs-section-title">Custom Solutions Tailored to Industry Workflows</h2>
            <p className="fs-section-subtitle">
              We design conversational architectures configured to meet the unique compliance guidelines, transactional parameters, and user intents of your specific industry.
            </p>

            <div className="fs-grid-3" style={{ marginBottom: '60px' }}>
              <div className="fs-card-premium">
                <h3>E-Commerce & Retail</h3>
                <p>Support product recommendations, cart abandonment workflows, payment integrations, and direct shipment tracking inquiries.</p>
              </div>
              <div className="fs-card-premium">
                <h3>Healthcare</h3>
                <p>Secure symptom triaging, patient intake forms, scheduling calendars, and policy FAQs aligned with strict HIPAA compliance guidelines.</p>
              </div>
              <div className="fs-card-premium">
                <h3>Banking & Fintech</h3>
                <p>Balance inquiries, secure account authentication portals, transaction logs, loan calculations, and fraud detection alert triggers.</p>
              </div>
              <div className="fs-card-premium">
                <h3>Real Estate</h3>
                <p>Automate property listing FAQs, capture lead contact sheets, and schedule direct house viewings with sales agents.</p>
              </div>
              <div className="fs-card-premium">
                <h3>SaaS & Technology</h3>
                <p>Coordinate customer onboarding milestones, support technical troubleshooting, link documentation pages, and create helpdesk tickets.</p>
              </div>
              <div className="fs-card-premium">
                <h3>Professional Services</h3>
                <p>Qualify inbound consultation requests, coordinate meeting calendar bookings, and answer pricing package queries automatically.</p>
              </div>
            </div>

            {/* Industry comparison table */}
            <div style={{ marginTop: '50px' }}>
              <h3 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '20px', color: '#0b0f19' }}>
                Common Industry Use Cases
              </h3>
              <div className="fs-table-container">
                <table className="fs-table">
                  <thead>
                    <tr>
                      <th>Industry</th>
                      <th>Common Chatbot Use Cases</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>E-Commerce & Retail</strong></td>
                      <td>Product discovery, cart recovery flows, automated order tracking, refund status questions.</td>
                    </tr>
                    <tr>
                      <td><strong>Healthcare</strong></td>
                      <td>Patient intake questionnaires, appointment calendars, prescription pick-up times, symptom checks.</td>
                    </tr>
                    <tr>
                      <td><strong>Banking & Finance</strong></td>
                      <td>Secure card activations, balance inquiries, billing statements, mortgage calculator tools.</td>
                    </tr>
                    <tr>
                      <td><strong>Real Estate</strong></td>
                      <td>Lead vetting, property details lists, virtual touring schedules, office hour questions.</td>
                    </tr>
                    <tr>
                      <td><strong>Travel & Hospitality</strong></td>
                      <td>Hotel booking adjustment prompts, flight status updates, check-in policies, local guide tips.</td>
                    </tr>
                    <tr>
                      <td><strong>Education & E-Learning</strong></td>
                      <td>Course registration guides, enrollment timeline FAQs, tuition costs, class syllabus search.</td>
                    </tr>
                    <tr>
                      <td><strong>SaaS & Technology</strong></td>
                      <td>Interactive troubleshooting steps, billing questions, dashboard navigation, API help.</td>
                    </tr>
                    <tr>
                      <td><strong>Legal & Professional Services</strong></td>
                      <td>Client intake forms, booking consults, lawyer practice area FAQs, document submission checklists.</td>
                    </tr>
                    <tr>
                      <td><strong>Government & Public Sector</strong></td>
                      <td>Public program eligibility checkers, office locator tools, document license filings, public transit updates.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </section>

        {/* 8. TOOLS & TECHNOLOGIES */}
        <section className="expertise experts">
          <div className="container">
            <div className="row" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '40px' }}>
              <div className="col" style={{ flex: '1', minWidth: '300px' }}>
                <div className="head epb">
                  <div className="fs-tag-arrows">TECH STACKS</div>
                  <h2 style={{ fontSize: '38px', fontWeight: '800', color: '#0b0f19', marginBottom: '16px' }}>
                    Advanced Tools behind Conversational AI
                  </h2>
                  <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.6' }}>
                    We do not lock you into a single proprietary framework. We build modular software components using industry-standard platforms, programming languages, and server infrastructures to ensure your code is maintainable.
                  </p>
                  
                  <div style={{ marginTop: '24px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '12px', color: '#0b0f19' }}>
                      How We Choose Your Tech Stack:
                    </h3>
                    <ul className="fs-bullet-list">
                      <li className="fs-bullet-item">
                        <CheckCircle />
                        <div><strong>Dialogue complexity:</strong> Rule-based matching vs Generative AI models.</div>
                      </li>
                      <li className="fs-bullet-item">
                        <CheckCircle />
                        <div><strong>Compliance requirements:</strong> Dedicated on-premise servers (Rasa) vs API structures.</div>
                      </li>
                      <li className="fs-bullet-item">
                        <CheckCircle />
                        <div><strong>Existing platforms:</strong> Building natively within your AWS, GCP, or Azure spaces.</div>
                      </li>
                      <li className="fs-bullet-item">
                        <CheckCircle />
                        <div><strong>Maintenance capacity:</strong> Handing off tools that your internal team can manage.</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col d-flex justify-content-end align-items-center" style={{ flex: '1', minWidth: '300px' }}>
                <div className="eb_box">
                  <div className="tech_stack">
                    <div className="framework">
                      <div className="bgcolor">
                        <h3 className="sub">NLP & AI Platforms</h3>
                        <div className="skill">
                          <p className="skills">Google Dialogflow</p>
                          <p className="skills">Rasa Open Source</p>
                          <p className="skills">OpenAI GPT-4</p>
                          <p className="skills">Claude AI</p>
                          <p className="skills">MS Bot Framework</p>
                          <p className="skills">Amazon Lex</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tech_stack">
                    <div className="framework">
                      <div className="bgcolorto">
                        <h3 className="sub">Languages & Frameworks</h3>
                        <div className="skill">
                          <p className="skills bg">Python (AI/ML)</p>
                          <p className="skills bg">Node.js (Backend)</p>
                          <p className="skills bg">LangChain</p>
                          <p className="skills bg">React JS (Widget UI)</p>
                          <p className="skills bg">FastAPI</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tech_stack">
                    <div className="framework">
                      <div className="bg_cool_aqua">
                        <h3 className="sub">Databases & Session Cache</h3>
                        <div className="skill">
                          <p className="skills cool_aqua">PostgreSQL</p>
                          <p className="skills cool_aqua">Pinecone (Vector)</p>
                          <p className="skills cool_aqua">Redis (Session Cache)</p>
                          <p className="skills cool_aqua">MongoDB</p>
                          <p className="skills cool_aqua">Supabase</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tech_stack">
                    <div className="framework">
                      <div className="bg_lavender">
                        <h3 className="sub">Channels & Deployments</h3>
                        <div className="skill">
                          <p className="skills lavender">Web Widget</p>
                          <p className="skills lavender">WhatsApp Business</p>
                          <p className="skills lavender">FB Messenger</p>
                          <p className="skills lavender">Instagram API</p>
                          <p className="skills lavender">Slack SDK</p>
                          <p className="skills lavender">iOS / Android SDK</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. WHY CLIENTS TRUST US */}
        <section className="fs-section fs-section-bg-slate">
          <div className="fs-container">
            <div className="fs-tag-arrows">TRUST & SECURITY</div>
            <h2 className="fs-section-title">An Engineering-First Partner</h2>
            <p className="fs-section-subtitle">
              We focus on clean coding standards, robust integrations, and clear communication patterns to build reliable software.
            </p>

            <div className="fs-grid-3">
              <div className="fs-card-premium">
                <h3>100% IP Ownership</h3>
                <p>The code we write belongs entirely to you. No proprietary licensing, no locked API containers, and no hidden vendor platforms.</p>
              </div>
              <div className="fs-card-premium">
                <h3>Direct Developer Channels</h3>
                <p>Communicate directly with lead software engineers. Avoid account manager telephone games for faster code scoping and updates.</p>
              </div>
              <div className="fs-card-premium">
                <h3>Production-Ready Security</h3>
                <p>We implement end-to-end data encryption protocols, clean authorization headers, and secure database parameters by default.</p>
              </div>
              <div className="fs-card-premium">
                <h3>SLA Support Contracts</h3>
                <p>We guarantee system uptime and active post-launch bug patches. Our engineering team is always available to implement version upgrades.</p>
              </div>
              <div className="fs-card-premium">
                <h3>Transparent Estimation</h3>
                <p>No arbitrary pricing packages. You receive a itemized list of deliverables, project schedules, and server usage expectations.</p>
              </div>
              <div className="fs-card-premium">
                <h3>Direct CRM Sync</h3>
                <p>We do not dump chats in static spreadsheets. All customer transcripts and data sheets sync directly with your primary CRM.</p>
              </div>
            </div>

          </div>
        </section>



        {/* ── 11. FAQ SECTION (HOMEPAGE DESIGN - EXACT MATCH) ── */}
        <section className="nd-faq">
          <div className="nd-faq-inner">
            <div className="nd-faq-tag">✦ FAQs ✦</div>
            <h2 className="nd-faq-title">Your Chatbot Development Questions, Answered</h2>
            <div className="nd-faq-list">
              {faqs.map((f, i) => (
                <FaqItem key={i} q={f.q} a={f.a} open={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} />
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
              <Link to="/contact-us" className="nd-faq-cta-btn">
                Still have questions? Talk to Us ↗
              </Link>
            </div>
          </div>
        </section>

        {/* 12. FINAL CALL TO ACTION (REDESIGNED COMPACT BANNER) */}
        <div className="fs-container" style={{ paddingBottom: '60px' }}>
          <section className="fs-cta-bottom">
            <div className="fs-cta-content-grid">
              <div className="fs-cta-text-left">
                <span className="fs-cta-badge">
                  <span className="fs-cta-badge-dot"></span> Free Architecture & Strategy Call
                </span>
                <h2>Ready to Build a Custom AI Chatbot?</h2>
                <p>
                  Automate support, capture qualified leads 24/7, and connect directly to your CRM with zero vendor lock-in.
                </p>
                <div className="fs-cta-trust-items">
                  <span>✓ 100% Code Ownership</span>
                  <span>✓ Live CRM Integrations</span>
                  <span>✓ Production SLA Support</span>
                </div>
              </div>

              <div className="fs-cta-actions-right">
                <Link to="/contact-us" className="fs-btn-cta-primary">
                  Book Free Consultation <ArrowRight />
                </Link>
                <Link to="/contact-us" className="fs-btn-cta-secondary">
                  Get a Free Quote
                </Link>
                <div className="fs-cta-email-note">
                  Or email: <a href="mailto:novadesk.site@gmail.com">novadesk.site@gmail.com</a>
                </div>
              </div>
            </div>
          </section>
        </div>

      </div>
    </>
  );
}
