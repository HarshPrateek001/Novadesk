import React, { useEffect, useState } from 'react';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import './ai-service-template.css';

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

const IconChevronDown = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
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

// 1. Interactive Hero Simulation Widget
function HeroVoiceAnimation() {
  const [callerState, setCallerState] = useState(0);
  const [isInterrupted, setIsInterrupted] = useState(false);

  const voiceScenarios = [
    {
      caller: "Marcus Vance",
      phone: "+1 (800) 492-3821",
      topic: "Freight Pickup Reschedule",
      callerText: "Hi, I need to reschedule our logistics pickup for freight batch #9042 from 10 AM to 3 PM tomorrow.",
      agentText: "Got it! I have updated the pickup schedule for freight batch #9042 to 3:00 PM tomorrow. A confirmation SMS has been dispatched to your driver.",
      sttLatency: "112ms",
      llmLatency: "142ms",
      ttsLatency: "108ms",
      totalLatency: "362ms",
      intent: "LOGISTICS_RESCHEDULE",
      sentiment: "Positive (0.88)"
    },
    {
      caller: "Elena Rostova",
      phone: "+44 20 7946 0912",
      topic: "Card Security Inquiry",
      callerText: "I noticed a suspicious charge of €420 from a merchant in Munich on my corporate card.",
      agentText: "I have temporarily placed a security freeze on card ending in 4102 and flagged the Munich transaction. Would you like me to warm-transfer you to our Fraud Unit?",
      sttLatency: "118ms",
      llmLatency: "135ms",
      ttsLatency: "115ms",
      totalLatency: "368ms",
      intent: "FRAUD_SECURITY_ALERT",
      sentiment: "High Urgency (0.94)"
    }
  ];

  const current = voiceScenarios[callerState];

  const handleInterrupt = () => {
    setIsInterrupted(true);
    setTimeout(() => setIsInterrupted(false), 2400);
  };

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
            <span className="nd-status-dot" style={{ background: '#10B981', boxShadow: '0 0 6px #10B981', marginRight: '6px' }}></span>
            Real-Time SIP Telephony · WebSockets Audio
          </div>
        </div>

        <div className="nd-voice-body">
          <div className="nd-voice-call-card">
            <div className="nd-voice-caller-row">
              <div className="nd-caller-meta">
                <div className="nd-caller-avatar">
                  {current.caller.charAt(0)}
                </div>
                <div className="nd-caller-info">
                  <h4>{current.caller}</h4>
                  <p>{current.phone} · Inbound Telephony</p>
                </div>
              </div>
              <span className="nd-status-tag active" style={{ background: 'rgba(16, 185, 129, 0.2)', color: '#34d399' }}>
                ● Call Active (00:42)
              </span>
            </div>

            <div className="nd-waveform-wrap">
              {[18, 36, 48, 24, 42, 54, 30, 48, 22, 40, 50, 26, 44, 32].map((height, i) => (
                <div
                  key={i}
                  className="nd-wave-bar"
                  style={{
                    height: isInterrupted ? '8px' : `${height}px`,
                    animationDelay: `${i * 0.08}s`
                  }}
                />
              ))}
            </div>

            <div className="nd-voice-transcript">
              <div className="nd-vt-row">
                <span className="nd-vt-speaker caller">Caller:</span>
                <span style={{ color: '#e2e8f0' }}>"{current.callerText}"</span>
              </div>
              <div className="nd-vt-row">
                <span className="nd-vt-speaker agent">AI Agent:</span>
                <span style={{ color: '#f8fafc' }}>
                  {isInterrupted ? (
                    <strong style={{ color: '#fbbf24' }}>[Caller Interrupted / Barge-in Detected — Instant Model Audio Ceased]</strong>
                  ) : (
                    `"${current.agentText}"`
                  )}
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '4px' }}>
              <button
                type="button"
                onClick={handleInterrupt}
                className="fs-btn fs-btn-white"
                style={{ padding: '6px 12px', fontSize: '11px', borderRadius: '6px', height: 'auto', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', background: 'rgba(255,255,255,0.1)' }}
              >
                ⚡ Simulate Barge-in Interruption
              </button>
              <button
                type="button"
                onClick={() => setCallerState(callerState === 0 ? 1 : 0)}
                className="fs-btn fs-btn-white"
                style={{ padding: '6px 12px', fontSize: '11px', borderRadius: '6px', height: 'auto', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', background: 'rgba(255,255,255,0.1)' }}
              >
                Switch Call Scenario
              </button>
            </div>
          </div>

          <div className="nd-voice-metrics-strip">
            <div className="nd-vm-item">
              <span className="nd-vm-lbl">STT (Deepgram)</span>
              <span className="nd-vm-val" style={{ color: '#2E29FF' }}>{current.sttLatency}</span>
            </div>
            <div className="nd-vm-item">
              <span className="nd-vm-lbl">Inference (Groq)</span>
              <span className="nd-vm-val" style={{ color: '#2E29FF' }}>{current.llmLatency}</span>
            </div>
            <div className="nd-vm-item">
              <span className="nd-vm-lbl">TTS (Cartesia)</span>
              <span className="nd-vm-val" style={{ color: '#2E29FF' }}>{current.ttsLatency}</span>
            </div>
            <div className="nd-vm-item">
              <span className="nd-vm-lbl">Total Turn-Around</span>
              <span className="nd-vm-val" style={{ color: '#10B981' }}>{current.totalLatency}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 2. Interactive Architecture Visualizer
function ArchVizConversational({ activeArch }) {
  return (
    <div className="av-wrapper">

      {/* ── 1. Sub-500ms Real-Time Voice Pipeline ── */}
      {activeArch === 0 && (
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
              {[0.4, 0.9, 0.6, 1, 0.7, 0.5, 0.85, 0.65, 0.95, 0.5, 0.75, 0.4].map((h, i) => (
                <div key={i} className="av-wbar" style={{ animationDelay: `${i * 0.08}s`, '--wh': h }}/>
              ))}
            </div>
            <div className="av-voice-label">365ms Full-Duplex Audio Loop</div>
          </div>
          <div className="av-voice-light">
            <div className="av-transcript">
              <span className="av-tr-lbl">🎙 Deepgram Nova-2 (STT)</span>
              <p>Streams raw audio frames over WebSockets. Emits word timestamps in under 120ms with noise reduction.</p>
            </div>
            <div className="av-tts-reply">
              <span className="av-tr-lbl tts-col">🔊 Cartesia Sonic (TTS)</span>
              <p>Synthesizes lifelike speech with conversational pauses, natural breath sounds, and dynamic pitch variation.</p>
            </div>
          </div>
        </div>
      )}

      {/* ── 2. Telephony SIP Trunking & WebRTC ── */}
      {activeArch === 1 && (
        <div className="av-scene av-rule">
          <div className="av-chrome-bar">
            <span className="av-dot red"/><span className="av-dot yellow"/><span className="av-dot green"/>
            <span className="av-chrome-title">Telephony SIP Trunking & WebRTC Gateway</span>
          </div>
          <div className="av-rule-body">
            <div className="av-flow-chain">
              <div className="av-flow-node trigger">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                PSTN / Mobile Call
              </div>
              <div className="av-flow-arrow av-arrow-anim-1">→</div>
              <div className="av-flow-node intent">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
                Twilio / FreeSWITCH SIP
              </div>
              <div className="av-flow-arrow av-arrow-anim-2">→</div>
              <div className="av-flow-node fetch">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                Bi-Directional WebSockets
              </div>
              <div className="av-flow-arrow av-arrow-anim-3">→</div>
              <div className="av-flow-node respond">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                NovaDesk Voice Agent
              </div>
            </div>
            <div className="av-rule-chat" style={{ marginTop: '12px' }}>
              <div className="av-msg bot-msg">
                <span className="av-bot-label">Carrier Compatibility</span>
                Seamless integration with your existing telephony PBX. Supports Twilio Voice, Vonage, Telnyx, Amazon Chime, and self-hosted Asterisk / FreeSWITCH SIP servers.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── 3. Turn-Taking, Barge-in & Interruption ── */}
      {activeArch === 2 && (
        <div className="av-scene av-nlp">
          <div className="av-chrome-bar">
            <span className="av-dot red"/><span className="av-dot yellow"/><span className="av-dot green"/>
            <span className="av-chrome-title">Voice Activity Detection (VAD) & Natural Barge-In</span>
          </div>
          <div className="av-scene-card-wrap">
            <div className="av-scene-flow-grid">
              <div className="av-node-box">
                <span className="av-node-badge">Component</span>
                <span className="av-node-title">Silero VAD Filter</span>
                <span className="av-node-desc">Millisecond-level acoustic detection distinguishes between human speech and background coughs or street noise.</span>
              </div>
              <div className="av-node-box">
                <span className="av-node-badge">Protocol</span>
                <span className="av-node-title">Instant Audio Cancellation</span>
                <span className="av-node-desc">When caller speaks over the bot, active TTS audio stream buffers are purged in under 40ms.</span>
              </div>
              <div className="av-node-box">
                <span className="av-node-badge">Context</span>
                <span className="av-node-title">Dynamic Re-prompting</span>
                <span className="av-node-desc">The LLM incorporates the interruption seamlessly into conversation state without resetting context.</span>
              </div>
              <div className="av-node-box">
                <span className="av-node-badge">Human Feel</span>
                <span className="av-node-title">Zero Robotic Clashing</span>
                <span className="av-node-desc">Conversations feel natural, collaborative, and human rather than rigid one-way broadcast lectures.</span>
              </div>
            </div>
            <div className="av-msg bot-msg" style={{ marginTop: '10px' }}>
              <span className="av-bot-label">User Interruption</span>
              Caller: "Wait, actually make that 4 PM instead!" ➔ Agent immediately paused mid-sentence and replied: "Understood, updated to 4 PM!"
            </div>
          </div>
        </div>
      )}

      {/* ── 4. Omnichannel Unified Dispatcher ── */}
      {activeArch === 3 && (
        <div className="av-scene av-rag">
          <div className="av-chrome-bar">
            <span className="av-dot red"/><span className="av-dot yellow"/><span className="av-dot green"/>
            <span className="av-chrome-title">Unified Conversational Core — One Brain Across All Channels</span>
          </div>
          <div className="av-scene-card-wrap">
            <div className="av-scene-flow-grid">
              <div className="av-node-box">
                <span className="av-node-badge">Channel 01</span>
                <span className="av-node-title">Phone Call (Voice)</span>
                <span className="av-node-desc">High-bandwidth 16kHz audio streaming with natural prosody.</span>
              </div>
              <div className="av-node-box">
                <span className="av-node-badge">Channel 02</span>
                <span className="av-node-title">WhatsApp Business</span>
                <span className="av-node-desc">Interactive button menus, location sharing, and media PDFs.</span>
              </div>
              <div className="av-node-box">
                <span className="av-node-badge">Channel 03</span>
                <span className="av-node-title">Web & Mobile SDK</span>
                <span className="av-node-desc">Lightweight React/iOS/Android widget with live speech-to-speech.</span>
              </div>
              <div className="av-node-box">
                <span className="av-node-badge">Channel 04</span>
                <span className="av-node-title">SMS / RCS Messaging</span>
                <span className="av-node-desc">Two-way text automation for appointment confirmations and delivery updates.</span>
              </div>
            </div>
            <div className="av-msg bot-msg" style={{ marginTop: '10px' }}>
              <span className="av-bot-label">Centralized Logic</span>
              Update your business policies, FAQs, or API integrations in one place. Every channel updates instantly.
            </div>
          </div>
        </div>
      )}

      {/* ── 5. Sentiment Routing & Warm Human Escalation ── */}
      {activeArch === 4 && (
        <div className="av-scene av-hybrid">
          <div className="av-hybrid-col bot-col">
            <div className="av-col-header bot-hdr">
              <span className="av-col-dot"/>
              Frustration Score Threshold Exceeded
            </div>
            <div className="av-msg user-msg">"I've asked three times! Let me speak to a human manager immediately!"</div>
            <div className="av-msg bot-msg">
              <span className="av-bot-label">Voice Agent</span>
              "I completely understand. Transferring you to our Senior Support Lead right away with your full account history..."
            </div>
          </div>

          <div className="av-transfer-lane">
            <div className="av-transfer-pulse"/>
            <svg className="av-transfer-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2E29FF" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </div>

          <div className="av-hybrid-col agent-col">
            <div className="av-col-header agent-hdr">
              <span className="av-col-dot green-dot"/>
              Warm SIP Transfer (Screen Pop)
            </div>
            <div className="av-agent-card">
              <div className="av-agent-avatar">🎧</div>
              <div>
                <div className="av-agent-name">Senior Rep James K.</div>
                <div className="av-agent-status">● Call Connected · Screen Pop Active</div>
              </div>
            </div>
            <div className="av-msg agent-msg">
              Rep instantly sees: Caller ID, billing status, incident summary, and verbatim transcript before saying "Hello".
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default function ConversationalAi() {
  const [openFaq, setOpenFaq] = useState(0);
  const [activeArch, setActiveArch] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const architectures = [
    {
      title: "Sub-500ms Audio Pipeline",
      tagline: "Ultra-Low Latency Speech Loop",
      badge: "Human-Like Timing",
      complexity: "High",
      useCases: ["Natural voice calls", "High-urgency dispatch", "Hands-free field operations", "Phone booking deflection"],
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
      title: "Telephony SIP & WebRTC",
      tagline: "Carrier PBX & PSTN Trunking",
      badge: "Full Telephony",
      complexity: "High",
      useCases: ["Inbound toll-free routing", "Outbound campaign dialers", "Web app voice widgets", "Mobile SDK speech-to-speech"],
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      )
    },
    {
      title: "Turn-Taking & Barge-In",
      tagline: "Silero Voice Activity Detection",
      badge: "Adaptive Flow",
      complexity: "High",
      useCases: ["Caller corrections", "Conversational interruptions", "Acoustic background filtering", "Zero robotic pauses"],
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
        </svg>
      )
    },
    {
      title: "Omnichannel Unified Brain",
      tagline: "Single Conversational Core",
      badge: "Omnichannel",
      complexity: "Medium",
      useCases: ["WhatsApp Business API", "Two-way SMS workflows", "Cross-channel session linking", "Website conversational widgets"],
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      )
    },
    {
      title: "Sentiment & Warm Transfer",
      tagline: "Live Human Escalation & Screen Pop",
      badge: "Human-in-the-Loop",
      complexity: "Medium",
      useCases: ["VIP customer routing", "High-frustration handoff", "Complex transaction escalations", "Seamless context handoff"],
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

  const faqs = [
    {
      q: "What is Conversational AI, and how does it differ from a standard chatbot?",
      a: "Conversational AI encompasses full-duplex speech-to-speech agents, real-time telephony voice bots, and omnichannel messaging systems that understand human speech nuances, tone, intent, and context. Unlike static chatbots that follow rigid multiple-choice trees, our Conversational AI speaks with natural human prosody in under 450ms, handles interruptions (barge-in), and connects natively to your phone PBX."
    },
    {
      q: "How fast is your voice AI, and does it feel robotic?",
      a: "Our voice agents achieve sub-400ms end-to-end turnaround latency (Speech-to-Text in ~110ms, Model Reasoning in ~140ms, Text-to-Speech in ~110ms). Because humans naturally pause for 300 to 500ms in phone conversations, our voice bots feel completely natural, with realistic breathing, speech inflections, and zero awkward robotic delays."
    },
    {
      q: "Can callers interrupt the voice bot while it is speaking (barge-in)?",
      a: "Yes. We utilize low-latency Voice Activity Detection (Silero VAD) to instantly detect when a human caller begins speaking. The agent immediately halts its current audio playback within 40ms and adapts to the caller's new direction without losing previous context."
    },
    {
      q: "Can the voice agent transfer calls to live human support agents?",
      a: "Absolutely. We support both blind and warm SIP transfers. When an inquiry requires human escalation or a caller exhibits frustration, the voice bot executes a SIP REFER transfer to your call center queue. The human agent receives an instant screen-pop displaying the caller's identity, full transcript, and key problem summary."
    },
    {
      q: "Which telephony and PBX providers are compatible?",
      a: "We integrate with any SIP-compliant telephony provider including Twilio Voice, Vonage, Telnyx, Amazon Chime, RingCentral, and self-hosted Asterisk or FreeSWITCH PBX servers. We can also integrate voice widgets directly into your web applications or mobile apps via WebRTC."
    },
    {
      q: "Can the voice AI handle multilingual callers?",
      a: "Yes. Our conversational voice agents can automatically detect caller languages (e.g. English, Spanish, Hindi, French, German) and transition fluently between languages in real time while maintaining consistent brand persona and terminology."
    },
    {
      q: "How does the bot capture customer data during a phone call?",
      a: "Our conversational logic layer parses spoken customer details (names, dates, order IDs, addresses) and validates them against your backend APIs in real time. We apply strict phonetic spell-check algorithms to accurately capture names and alphanumeric codes."
    },
    {
      q: "What is the typical timeline to deploy a production voice agent?",
      a: "A focused inbound voice deflection agent (such as order status, appointment scheduling, or FAQ handling) is typically deployed in 3 to 5 weeks. Complex omnichannel voice and messaging call centers usually take 6 to 9 weeks including rigorous acoustic stress testing and live call shadowing."
    },
    {
      q: "How much does it cost to build and run a voice AI system?",
      a: "Engineering sprints typically range from $12,000 to $30,000 depending on telephony integrations and CRM workflow depth. Ongoing telephony and speech API costs are remarkably cost-effective — usually $0.05 to $0.12 per minute, delivering a 70% to 85% cost savings compared to human call center seats."
    },
    {
      q: "Do we own the software, voice models, and conversation data?",
      a: "Yes. NovaDesk provides 100% intellectual property ownership. You own all telephony orchestration code, agent prompt graphs, integration middleware, and customer call recordings. There are zero vendor lock-ins or proprietary platform fees."
    }
  ];

  const schemaJson = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Conversational AI Development",
      "name": "Conversational AI & Voice Agent Development Services",
      "alternateName": ["Voice AI Development", "Enterprise Conversational Agents", "Telephony AI Automation", "Real-Time Speech-to-Speech Agents"],
      "description": "Enterprise Conversational AI development: Sub-500ms voice agents, telephony SIP integration, intelligent turn-taking, omnichannel WhatsApp automation, and live human handoff with 100% IP ownership.",
      "url": "https://www.novadesk.site/services/conversational-ai",
      "provider": {
        "@type": "Organization",
        "name": "NovaDesk",
        "url": "https://www.novadesk.site",
        "logo": "https://www.novadesk.site/favicon.svg",
        "email": "novadesk.site@gmail.com"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((f) => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.a
        }
      }))
    }
  ];

  return (
    <>
      <SEO 
        title="Conversational AI Development Services | Voice Agents & Telephony | NovaDesk"
        description="Build enterprise conversational AI and real-time voice agents. Sub-500ms voice bots, telephony SIP integration, natural turn-taking, omnichannel WhatsApp automation, and live human handoff."
        url="/services/conversational-ai"
        image="https://www.novadesk.site/og-image.png"
        keywords="conversational AI development services, real-time voice agents, sub-500ms voice AI, telephony AI automation, Twilio voice AI bot, WhatsApp conversational AI, call center AI deflection, NovaDesk"
        schema={schemaJson}
      />

      <div className="fs-page">

        {/* 1. HERO SECTION */}
        <section className="fs-hero">
          <div className="fs-container fs-hero-grid">
            <div className="fs-hero-text">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(46,41,255,0.08)', border: '1px solid rgba(46,41,255,0.2)', padding: '6px 16px', borderRadius: '40px', fontSize: '11px', fontWeight: '700', color: '#2E29FF', letterSpacing: '0.8px', textTransform: 'uppercase', marginBottom: '20px' }}>
                Enterprise Conversational & Voice AI
              </div>
              <h1 className="fs-hero-title">
                Real-Time Voice AI Built for <span className="fs-text-blue">Customer Conversations</span>
              </h1>
              <p className="fs-hero-desc" style={{ marginBottom: '38px' }}>
                Replace rigid phone trees and overloaded call centers with sub-500ms conversational voice agents. We engineer natural full-duplex voice bots, SIP telephony trunking, and omnichannel WhatsApp automation with 100% IP ownership.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '36px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
                  <Link to="/contact-us" className="fs-btn fs-btn-primary" style={{ height: '52px', padding: '0 28px', borderRadius: '12px', fontSize: '15px', fontWeight: '700', boxShadow: '0 8px 20px rgba(46, 41, 255, 0.25)' }}>
                    Book Voice AI Consultation <ArrowRight />
                  </Link>
                  <Link to="/case-studies" className="fs-btn" style={{ height: '52px', padding: '0 26px', borderRadius: '12px', fontSize: '15px', fontWeight: '700', backgroundColor: '#0B0F19', color: '#ffffff', border: 'none', textDecoration: 'none' }}>
                    Listen to Voice Demos →
                  </Link>
                </div>

                <div style={{ fontSize: '13.5px', color: '#475569', display: 'flex', flexWrap: 'wrap', gap: '22px', fontWeight: '600', marginTop: '6px', alignItems: 'center' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <HeroCheckBadge /> Sub-400ms Turnaround Latency
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <HeroCheckBadge /> Native Carrier SIP Trunking
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <HeroCheckBadge /> Instant Warm Human Escalation
                  </span>
                </div>
              </div>
            </div>

            <HeroVoiceAnimation />
          </div>
        </section>

        {/* TRUST ACCREDITATION TICKER & ROYAL BLUE METRICS SECTION */}
        <section className="fs-agency-alt">
          <div className="nd-ticker-wrap">
            <div className="nd-ticker">
              <div className="nd-ticker-track">
                {[...Array(2)].map((_, idx) => (
                  <div key={idx} className="nd-ticker-group">
                    <span>✦ SUB-400MS VOICE TURNAROUND</span>
                    <span>✦ NATIVE TWILIO & SIP TRUNKING</span>
                    <span>✦ NATURAL BARGE-IN DETECTION</span>
                    <span>✦ WARM HUMAN ESCALATION TRANSFERS</span>
                    <span>✦ PHONETIC ALPHANUMERIC SPELL-CHECK</span>
                    <span>✦ 24/7 INBOUND CALL AUTOMATION</span>
                    <span>✦ ZERO COLD-TRANSFER DROPS</span>
                    <span>✦ ENTERPRISE PBX COMPLIANT</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="fs-agency-alt-bg">
            <div className="nd-intro">
              <div className="nd-intro-inner">
                <div className="nd-intro-text">
                  <h2>Built for contact centers that demand <em>human-quality conversations</em></h2>
                  <p>Replace clunky IVRs with ultra-low latency conversational voice agents that understand natural human pauses, background accents, and instantaneous mid-sentence interruptions.</p>
                </div>
                <div className="nd-intro-stats">
                  <div className="nd-intro-stat">
                    <div className="nd-intro-stat-num">&lt;380<sub>ms</sub></div>
                    <div className="nd-intro-stat-label">End-to-End Voice Latency</div>
                  </div>
                  <div className="nd-intro-divider" />
                  <div className="nd-intro-stat">
                    <div className="nd-intro-stat-num">84<sub>%</sub></div>
                    <div className="nd-intro-stat-label">First-Call Resolution</div>
                  </div>
                  <div className="nd-intro-divider" />
                  <div className="nd-intro-stat">
                    <div className="nd-intro-stat-num">0<sub>s</sub></div>
                    <div className="nd-intro-stat-label">Hold Time for Callers</div>
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
                  <div>Ultra-Low Latency,<br/>Sub-400ms Streaming</div>
                </div>
                <div className="fs-usp-box">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z"/>
                  </svg>
                  <div>Natural Barge-In<br/>Instant Speech Stop</div>
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
                  <div>Warm PBX Screen Pop<br/>& Full Transcript Sync</div>
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

        {/* 2. OVERVIEW SECTION (EXACT MATCH CHATBOT TEMPLATE WITH ARCHVIZ TABS & SPLIT CARDS) */}
        <section className="fs-section fs-section-bg-slate">
          <div className="fs-container">
            <div className="fs-tag-arrows">SERVICE OVERVIEW</div>
            <h2 className="fs-section-title">The Power of Natural Speech Automation</h2>
            <p className="fs-section-subtitle">
              Customers don't want to navigate numeric keypad menus or listen to static IVR scripts. They want to speak naturally and be understood immediately. We engineer conversational voice systems with realistic prosody, contextual understanding, and instantaneous response.
            </p>

            <div style={{ marginTop: '48px' }}>
              <h3 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '12px', color: '#0b0f19' }}>
                Voice & Conversational Architectures We Deploy
              </h3>
              <p style={{ fontSize: '15px', color: '#64748b', marginBottom: '32px', fontWeight: '500' }}>
                Select an architecture below to explore its audio streaming latency, telephony protocols, and practical use cases.
              </p>

              <div className="fs-overview-layout">
                {/* Vertical Tabs Selector */}
                <div className="fs-overview-tabs">
                  {architectures.map((arch, index) => (
                    <button
                      key={index}
                      type="button"
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
                          <span style={{ color: architectures[activeArch].complexity === 'High' ? '#EA4335' : '#FBBC05' }}>
                            {architectures[activeArch].complexity}
                          </span>
                        </div>
                      </div>
                      <h3>{architectures[activeArch].title}</h3>
                      <div className="fs-overview-preview-tagline" style={{ marginBottom: '16px' }}>{architectures[activeArch].tagline}</div>
                    </div>

                    <ArchVizConversational activeArch={activeArch} />

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
              <div className="fs-split-card fs-split-card-success">
                <h3>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  What Makes a Voice AI Project Succeed
                </h3>
                <ul className="fs-split-list">
                  <li className="fs-split-item">
                    <div className="fs-split-item-icon"><CheckCircle /></div>
                    <div><strong>Sub-400ms Turnaround Latency:</strong> Matching natural human conversational timing with streaming audio pipelines so the conversation flows seamlessly.</div>
                  </li>
                  <li className="fs-split-item">
                    <div className="fs-split-item-icon"><CheckCircle /></div>
                    <div><strong>Natural Barge-in Handling:</strong> Allowing callers to interrupt the bot mid-sentence, instantly stopping playback within 40ms without confusion.</div>
                  </li>
                  <li className="fs-split-item">
                    <div className="fs-split-item-icon"><CheckCircle /></div>
                    <div><strong>Warm SIP Screen Pop:</strong> Transferring escalated callers to human reps with full caller ID, transcript, and sentiment summary already visible.</div>
                  </li>
                  <li className="fs-split-item">
                    <div className="fs-split-item-icon"><CheckCircle /></div>
                    <div><strong>Phonetic Spell-Check Engine:</strong> Accurately capturing complex names, alphanumeric order numbers, and email addresses over noisy cellular connections.</div>
                  </li>
                  <li className="fs-split-item">
                    <div className="fs-split-item-icon"><CheckCircle /></div>
                    <div><strong>Native Carrier PBX Integration:</strong> Connecting directly to Twilio, FreeSWITCH, or Asterisk via standard SIP trunks rather than brittle audio proxies.</div>
                  </li>
                </ul>
              </div>

              <div className="fs-split-card fs-split-card-failure">
                <h3>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="15" y1="9" x2="9" y2="15"></line>
                    <line x1="9" y1="9" x2="15" y2="15"></line>
                  </svg>
                  Why Legacy IVRs & Bad Voice Bots Fail (And How to Avoid It)
                </h3>
                <ul className="fs-split-list">
                  <li className="fs-split-item">
                    <div className="fs-split-item-icon" style={{ background: 'rgba(234, 67, 53, 0.1)', color: '#EA4335', fontWeight: 'bold' }}>✕</div>
                    <div><strong>Awkward 3-Second Audio Delays:</strong> Clunky speech models that hesitate before answering, forcing callers and bots to talk over each other.</div>
                  </li>
                  <li className="fs-split-item">
                    <div className="fs-split-item-icon" style={{ background: 'rgba(234, 67, 53, 0.1)', color: '#EA4335', fontWeight: 'bold' }}>✕</div>
                    <div><strong>Inability to Handle Interruptions:</strong> The bot continues droning through a long paragraph even when the caller says "Wait, that's wrong!"</div>
                  </li>
                  <li className="fs-split-item">
                    <div className="fs-split-item-icon" style={{ background: 'rgba(234, 67, 53, 0.1)', color: '#EA4335', fontWeight: 'bold' }}>✕</div>
                    <div><strong>Cold Transfer Drops:</strong> Escalating frustrated callers into an unannounced hold queue where they must repeat their entire problem.</div>
                  </li>
                  <li className="fs-split-item">
                    <div className="fs-split-item-icon" style={{ background: 'rgba(234, 67, 53, 0.1)', color: '#EA4335', fontWeight: 'bold' }}>✕</div>
                    <div><strong>Acoustic Noise Brittleness:</strong> The bot completely fails when callers are on speakerphone, in a car, or on a busy street.</div>
                  </li>
                  <li className="fs-split-item">
                    <div className="fs-split-item-icon" style={{ background: 'rgba(234, 67, 53, 0.1)', color: '#EA4335', fontWeight: 'bold' }}>✕</div>
                    <div><strong>Rigid Multiple-Choice Scripts:</strong> Forcing human speech into artificial constraints rather than understanding flexible conversational phrasing.</div>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* 3. WHY CHOOSE US SECTION (EXACT STICKY SPOTLIGHT + DIFFERENTIATORS + SPLIT COMPARISON) */}
        <section className="fs-section">
          <div className="fs-container">
            <div className="fs-why-us-grid">
              <div className="fs-why-us-sticky">
                <div className="fs-tag-arrows">WHY CHOOSE US</div>
                <h2 className="fs-section-title" style={{ marginBottom: '24px' }}>
                  A Telephony-First Approach to Voice AI
                </h2>
                <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.65' }}>
                  Building voice agents requires deep systems expertise across WebSockets audio streaming, Voice Activity Detection, and SIP PBX routing. We engineer real enterprise software, not fragile wrappers.
                </p>

                <div className="fs-value-spotlight">
                  <h4>The NovaDesk Promise</h4>
                  <ul className="fs-spotlight-list">
                    <li className="fs-spotlight-item">
                      <CheckCircle />
                      <span>100% Code & Telephony Ownership</span>
                    </li>
                    <li className="fs-spotlight-item">
                      <CheckCircle />
                      <span>No Hidden Platform Per-Minute Markups</span>
                    </li>
                    <li className="fs-spotlight-item">
                      <CheckCircle />
                      <span>Direct Developer Slack & Video Channels</span>
                    </li>
                    <li className="fs-spotlight-item">
                      <CheckCircle />
                      <span>Strict HIPAA & SOC 2 Audio Compliance</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="fs-differentiators-stack">
                <div className="fs-diff-row">
                  <div className="fs-diff-number">01</div>
                  <div className="fs-diff-content">
                    <h3>Sub-400ms Conversational Turnaround</h3>
                    <p>We stream audio frames directly over WebSockets. Speech recognition, model inference, and voice synthesis complete in under 400ms total.</p>
                  </div>
                </div>
                <div className="fs-diff-row">
                  <div className="fs-diff-number">02</div>
                  <div className="fs-diff-content">
                    <h3>Fluid Interruption Handling (Barge-In)</h3>
                    <p>Callers can interrupt the bot naturally. Silero VAD detects speech in milliseconds and instantly clears outgoing audio buffers.</p>
                  </div>
                </div>
                <div className="fs-diff-row">
                  <div className="fs-diff-number">03</div>
                  <div className="fs-diff-content">
                    <h3>Carrier-Grade PBX Compatibility</h3>
                    <p>Integrate with any SIP carrier including Twilio Voice, Vonage, Telnyx, Amazon Chime, or your private Asterisk/FreeSWITCH servers.</p>
                  </div>
                </div>
                <div className="fs-diff-row">
                  <div className="fs-diff-number">04</div>
                  <div className="fs-diff-content">
                    <h3>Warm SIP Transfer with Screen Pop</h3>
                    <p>When callers need a human, they are transferred seamlessly with full identity, transcript history, and problem summaries sent to the rep's screen.</p>
                  </div>
                </div>
                <div className="fs-diff-row">
                  <div className="fs-diff-number">05</div>
                  <div className="fs-diff-content">
                    <h3>Acoustic Noise Resilience</h3>
                    <p>Our audio pipelines include advanced noise suppression and acoustic echo cancellation to perform flawlessly in cars and public transit.</p>
                  </div>
                </div>
                <div className="fs-diff-row">
                  <div className="fs-diff-number">06</div>
                  <div className="fs-diff-content">
                    <h3>Continuous Audio Retraining</h3>
                    <p>We review call transcripts and drop-off points post-launch, retraining intent graphs and acoustic phonetic dictionaries continuously.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Comparison Split */}
            <div className="fs-comparison-split">
              <div className="fs-comp-card fs-comp-card-cookie">
                <div className="fs-comp-header">
                  <span className="fs-comp-badge">Legacy IVR / Cookie-Cutter</span>
                  <h3>Rigid Robotic Phone Trees</h3>
                  <p>Frustrating phone systems that drive customers to hang up.</p>
                </div>
                <div className="fs-comp-list">
                  <div className="fs-comp-item">
                    <span className="fs-comp-item-icon">✕</span>
                    <div><strong>Endless Keypad Mazes:</strong> "Press 1 for Billing, Press 2 for Support" forces callers through cumbersome multi-minute menus.</div>
                  </div>
                  <div className="fs-comp-item">
                    <span className="fs-comp-item-icon">✕</span>
                    <div><strong>Awkward Multi-Second Pauses:</strong> Clunky speech models pause for 2 to 4 seconds, causing callers to talk over each other.</div>
                  </div>
                  <div className="fs-comp-item">
                    <span className="fs-comp-item-icon">✕</span>
                    <div><strong>Zero Interruption Support:</strong> The bot speaks over the customer and forces them to listen to entire pre-recorded audio blocks.</div>
                  </div>
                  <div className="fs-comp-item">
                    <span className="fs-comp-item-icon">✕</span>
                    <div><strong>Cold Transfer Drops:</strong> Callers are dumped into hold queues without context and must re-explain their issue from scratch.</div>
                  </div>
                  <div className="fs-comp-item">
                    <span className="fs-comp-item-icon">✕</span>
                    <div><strong>Monotone Robotic Voice:</strong> Unnatural synthetic speech devoid of conversational pacing, breath sounds, or empathy.</div>
                  </div>
                  <div className="fs-comp-item">
                    <span className="fs-comp-item-icon">✕</span>
                    <div><strong>High Telecom Platform Lock-in:</strong> Heavy proprietary per-minute markups on top of standard carrier costs.</div>
                  </div>
                </div>
              </div>

              <div className="fs-comp-card fs-comp-card-custom">
                <div className="fs-comp-header">
                  <span className="fs-comp-badge">The NovaDesk Way</span>
                  <h3>Real-Time Conversational AI</h3>
                  <p>Human-like conversational agents with sub-500ms timing and live empathy.</p>
                </div>
                <div className="fs-comp-list">
                  <div className="fs-comp-item">
                    <span className="fs-comp-item-icon">✓</span>
                    <div><strong>Natural Speech Intake:</strong> Callers speak freely in plain language: "I need to reschedule my freight pickup" — zero keypads required.</div>
                  </div>
                  <div className="fs-comp-item">
                    <span className="fs-comp-item-icon">✓</span>
                    <div><strong>Sub-400ms Audio Turnaround:</strong> Responses begin in under 400ms, matching natural human conversational timing.</div>
                  </div>
                  <div className="fs-comp-item">
                    <span className="fs-comp-item-icon">✓</span>
                    <div><strong>Fluid Barge-in & Interruption:</strong> The agent instantly pauses when the caller speaks and seamlessly handles corrections.</div>
                  </div>
                  <div className="fs-comp-item">
                    <span className="fs-comp-item-icon">✓</span>
                    <div><strong>Warm SIP Screen Pop:</strong> Human reps receive the live call along with caller ID, problem summary, and full chat logs.</div>
                  </div>
                  <div className="fs-comp-item">
                    <span className="fs-comp-item-icon">✓</span>
                    <div><strong>Expressive Neural Prosody:</strong> Realistic human pacing with conversational breathing and contextual emotional inflection.</div>
                  </div>
                  <div className="fs-comp-item">
                    <span className="fs-comp-item-icon">✓</span>
                    <div><strong>100% Code & Telephony Ownership:</strong> Zero platform markups. You pay raw carrier rates directly to Twilio or your SIP provider.</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 4. FEATURES SECTION (EXACT BENTO GRID MATCH) */}
        <section className="fs-section fs-section-bg-slate">
          <div className="fs-container">
            <div className="fs-tag-arrows">SYSTEM FEATURES</div>
            <h2 className="fs-section-title">Enterprise Capabilities for Real-Time Voice Agents</h2>
            <p className="fs-section-subtitle">
              We construct custom conversational voice bots equipped with advanced acoustic and telephony capabilities to handle complex business calls.
            </p>

            <div className="fs-bento-grid">
              {/* Card 1: Streaming Speech Recognition (Wide - 2 Cols) */}
              <div className="fs-bento-card fs-bento-col-2">
                <div className="fs-bento-card-badge">Streaming STT</div>
                <h3>Streaming Speech-to-Text & Acoustic Modeling</h3>
                <p>Deepgram Nova-2 and Whisper Large-v3 streaming audio pipelines transcribe speech in under 120ms with noise reduction and custom phonetic domain dictionaries.</p>

                <div style={{ marginTop: '20px', background: '#f8fafc', padding: '16px', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.05)', fontSize: '13px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ fontWeight: '700', color: '#2E29FF' }}>Acoustic Stream: 16kHz Linear PCM over WebSockets</span>
                    <span style={{ fontSize: '11px', background: '#e2e8f0', padding: '2px 8px', borderRadius: '4px' }}>STT Latency: 112ms</span>
                  </div>
                  <code style={{ fontSize: '12px', color: '#0f172a', display: 'block', background: '#ffffff', padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1' }}>
                    Transcribed: "Reschedule freight pickup batch #9042" ➔ Phonetic Match Confidence: 99.4%
                  </code>
                </div>
              </div>

              {/* Card 2: Neural Voice Synthesis (Regular - 1 Col) */}
              <div className="fs-bento-card">
                <div className="fs-bento-card-badge" style={{ background: 'rgba(52,168,83,0.05)', color: '#34A853' }}>Neural TTS</div>
                <h3>Expressive Neural Voice Synthesis</h3>
                <p>Cartesia Sonic and ElevenLabs Flash synthesize lifelike voice with conversational breathing, natural pauses, and zero robotic monotone.</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '16px' }}>
                  <span className="fs-bento-channel-badge">Cartesia Sonic</span>
                  <span className="fs-bento-channel-badge">ElevenLabs</span>
                  <span className="fs-bento-channel-badge">Natural Prosody</span>
                </div>
              </div>

              {/* Card 3: Carrier SIP Integration (Regular - 1 Col) */}
              <div className="fs-bento-card">
                <div className="fs-bento-card-badge" style={{ background: 'rgba(251,188,5,0.08)', color: '#D97706' }}>Telephony</div>
                <h3>Carrier SIP Trunking</h3>
                <p>Native integration with telecom carriers and PBX platforms supporting toll-free DIDs, call recording, and dual-channel audio.</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '16px' }}>
                  <span className="fs-lang-pill">Twilio Voice</span>
                  <span className="fs-lang-pill">FreeSWITCH</span>
                  <span className="fs-lang-pill">Asterisk</span>
                  <span className="fs-lang-pill">Telnyx</span>
                </div>
              </div>

              {/* Card 4: Voice Activity Detection & Barge-In (Wide - 2 Cols) */}
              <div className="fs-bento-card fs-bento-col-2">
                <div className="fs-bento-card-badge" style={{ background: 'rgba(234,67,53,0.05)', color: '#EA4335' }}>Turn-Taking</div>
                <h3>Natural Barge-In & Voice Activity Detection (VAD)</h3>
                <p>Callers can interrupt the bot naturally at any point. Silero VAD detects human speech in milliseconds and instantly flushes outbound audio buffers.</p>

                <div style={{ marginTop: '20px', background: '#f8fafc', padding: '14px 18px', borderRadius: '12px', border: '1px dashed rgba(234,67,53,0.3)', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12.5px' }}>
                  <div style={{ color: '#EA4335', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: '#EA4335' }}></span>
                    VAD Signal: Human Speech Detected ➔ Output Audio Stream Flushed in 34ms
                  </div>
                </div>
              </div>

              {/* Card 5: Multi-Dialect & Accent Modeling */}
              <div className="fs-bento-card">
                <div className="fs-bento-card-badge">Multilingual</div>
                <h3>30+ Dialects & Accents</h3>
                <p>Fluently detect and converse in English (US, UK, Aus, India), Spanish, French, German, and Hindi with localized regional phrasing.</p>
                <div style={{ marginTop: '12px' }}>
                  <span className="fs-lang-pill" style={{ background: 'rgba(46,41,255,0.08)', color: '#2E29FF' }}>Real-Time Language Detection</span>
                </div>
              </div>

              {/* Card 6: Acoustic Frustration Scoring */}
              <div className="fs-bento-card">
                <div className="fs-bento-card-badge">Sentiment</div>
                <h3>Acoustic Sentiment Scoring</h3>
                <p>Detect elevated voice pitch, speech speed, and frustration cues in real time, scoring sentiment to trigger proactive human escalation.</p>
                <div style={{ marginTop: '12px' }}>
                  <span className="fs-lang-pill" style={{ background: 'rgba(16,185,129,0.08)', color: '#10B981' }}>Live Sentiment Telemetry</span>
                </div>
              </div>

              {/* Card 7: Warm SIP REFER Live Human Handoff (Wide - 2 Cols) */}
              <div className="fs-bento-card fs-bento-col-2">
                <div className="fs-bento-card-badge">Escalation</div>
                <h3>Warm SIP REFER Transfer with Context Screen Pop</h3>
                <p>When high-value or frustrated callers need human assistance, the agent performs a warm SIP transfer. The support agent's screen pops with caller ID, CRM record, and verbatim transcript before answering.</p>
                <div style={{ display: 'flex', gap: '8px', marginTop: '14px' }}>
                  <span className="fs-bento-channel-badge">SIP REFER Protocol</span>
                  <span className="fs-bento-channel-badge">CRM Screen Pop</span>
                  <span className="fs-bento-channel-badge">Zero Context Loss</span>
                </div>
              </div>

              {/* Card 8: Omnichannel Messaging Unified Dispatcher (Wide - 2 Cols) */}
              <div className="fs-bento-card fs-bento-col-2">
                <div className="fs-bento-card-badge">Omnichannel</div>
                <h3>Unified Brain Across WhatsApp, SMS & Voice</h3>
                <p>Power your phone lines, WhatsApp Business API, SMS text reminders, and web voice widgets from one central conversational core. Update business rules once, deploy everywhere.</p>
                <div style={{ marginTop: '12px', background: '#0b0f19', color: '#38bdf8', padding: '10px 14px', borderRadius: '8px', fontSize: '11px', fontFamily: 'monospace' }}>
                  {'{ "channels": ["PHONE_SIP", "WHATSAPP_CLOUD", "TWILIO_SMS", "WEBRTC"], "unified_brain": true }'}
                </div>
              </div>
            </div>

            {/* Feature Comparison Matrix Table */}
            <div style={{ marginTop: '60px' }}>
              <h3 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '20px', color: '#0b0f19' }}>
                Architecture Comparison: Legacy IVR vs NovaDesk Real-Time Voice AI
              </h3>
              <div className="fs-table-container">
                <table className="fs-table">
                  <thead>
                    <tr>
                      <th>Telephony Vector</th>
                      <th>Traditional IVR ('Press 1')</th>
                      <th>Generic Voice Bot Wrapper</th>
                      <th>NovaDesk Real-Time Voice Agent</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>End-to-End Latency</strong></td>
                      <td>Static audio file lookup</td>
                      <td>2.5s - 4.5s (Awkward pauses)</td>
                      <td><span className="fs-lang-pill" style={{ background: 'rgba(52,168,83,0.1)', color: '#34A853' }}>Sub-400ms (Human Conversational)</span></td>
                    </tr>
                    <tr>
                      <td><strong>Interruption (Barge-In)</strong></td>
                      <td>Not supported (Plays until end)</td>
                      <td>Clashes with caller speech</td>
                      <td><span className="fs-lang-pill" style={{ background: 'rgba(52,168,83,0.1)', color: '#34A853' }}>Sub-40ms Silero VAD Cancellation</span></td>
                    </tr>
                    <tr>
                      <td><strong>Input Method</strong></td>
                      <td>Keypad DTMF digits only</td>
                      <td>Simple keyword matching</td>
                      <td><span className="fs-lang-pill" style={{ background: 'rgba(52,168,83,0.1)', color: '#34A853' }}>Natural Spoken Language Dialogue</span></td>
                    </tr>
                    <tr>
                      <td><strong>Human Agent Escalation</strong></td>
                      <td>Cold queue dump (No context)</td>
                      <td>Call drops or disconnected</td>
                      <td><span className="fs-lang-pill" style={{ background: 'rgba(52,168,83,0.1)', color: '#34A853' }}>Warm SIP REFER + Screen Pop</span></td>
                    </tr>
                    <tr>
                      <td><strong>Phonetic Spell Checking</strong></td>
                      <td>None</td>
                      <td>Fails on names / addresses</td>
                      <td><span className="fs-lang-pill" style={{ background: 'rgba(52,168,83,0.1)', color: '#34A853' }}>Phonetic Alphanumeric Matcher</span></td>
                    </tr>
                    <tr>
                      <td><strong>Platform Cost</strong></td>
                      <td>Expensive legacy PBX licenses</td>
                      <td>$0.30 - $0.80 per minute</td>
                      <td><span className="fs-lang-pill" style={{ background: 'rgba(52,168,83,0.1)', color: '#34A853' }}>Raw Carrier Pricing ($0.05-$0.12/min)</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </section>

        {/* 5. BENEFITS SECTION (EXACT MATCH CHATBOT TEMPLATE WITH CARDS & METRICS TABLE) */}
        <section className="fs-section">
          <div className="fs-container">
            <div className="fs-tag-arrows">BUSINESS BENEFITS</div>
            <h2 className="fs-section-title">Measurable Business Value From Day One</h2>
            <p className="fs-section-subtitle">
              Deploying autonomous voice agents slashes call center operating costs while delivering instant, queue-free customer service.
            </p>

            <div className="fs-grid-3">
              <div className="fs-card-premium">
                <h3>72% Inbound Call Deflection</h3>
                <p>Routine inquiries (order tracking, appointment scheduling, password resets) are resolved end-to-end without burdening human support agents.</p>
              </div>
              <div className="fs-card-premium">
                <h3>0 Second Queue Hold Times</h3>
                <p>Every customer is answered immediately on the first ring, effortlessly handling holiday shopping rushes or emergency weather surges.</p>
              </div>
              <div className="fs-card-premium">
                <h3>65% Cost Per Resolved Call Savings</h3>
                <p>Reduce cost per resolved call from $6–$12 with live call center staff down to $0.40–$0.90 with automated voice agents.</p>
              </div>
              <div className="fs-card-premium">
                <h3>4.8/5 Customer Satisfaction (CSAT)</h3>
                <p>Callers appreciate immediate answers, zero hold music, and intelligent warm transfers when complex problems require human specialists.</p>
              </div>
              <div className="fs-card-premium">
                <h3>Infinite Concurrency Scaling</h3>
                <p>Handle 1,000 simultaneous incoming phone calls with identical sub-400ms performance without hiring temporary call center staff.</p>
              </div>
              <div className="fs-card-premium">
                <h3>Unbroken Transcript Context</h3>
                <p>Every call recording and transcript is automatically summarized, tagged with sentiment, and logged directly into your CRM.</p>
              </div>
            </div>

            {/* Expected Business Impact Metrics Table */}
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
                      <td><strong>Inbound Hold Time Elimination</strong></td>
                      <td>Reduces abandoned call rates to near zero by answering calls instantaneously on ring one.</td>
                    </tr>
                    <tr>
                      <td><strong>Support Team Productivity</strong></td>
                      <td>Frees support agents to focus entirely on high-value, high-empathy customer retention cases.</td>
                    </tr>
                    <tr>
                      <td><strong>Telephony Compute Efficiency</strong></td>
                      <td>Delivers major cost savings compared to traditional outsourced overseas call center retainers.</td>
                    </tr>
                    <tr>
                      <td><strong>Omnichannel Identity Sync</strong></td>
                      <td>Links caller phone numbers to their WhatsApp and web accounts, providing a unified customer history.</td>
                    </tr>
                    <tr>
                      <td><strong>Full Telephony Stack Ownership</strong></td>
                      <td>All voice models, prompt state machines, and audio data belong permanently to your organization.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </section>

        {/* 6. OUR PROCESS SECTION (EXACT MATCH CHATBOT TIMELINE + PROCESS TABLE + TRACK CARDS) */}
        <section className="fs-process-blue">
          <div className="fs-container">
            <div className="fs-process-header-wrap">
              <div className="fs-process-header-left">
                <div className="fs-process-tag-lines">← OUR ROADMAP →</div>
                <h2>A Structured Methodology for Launching Voice Agents</h2>
              </div>
              <div className="fs-process-header-right">
                <p>
                  From acoustic modeling to live call shadowing and SLA monitoring, we engineer carrier-grade conversational voice systems.
                </p>
              </div>
            </div>

            <div className="fs-timeline-blue">
              <div className="fs-timeline-item-blue">
                <div className="fs-timeline-dot-blue"></div>
                <div className="fs-timeline-content-blue">
                  <span className="fs-timeline-step-badge">STEP 01</span>
                  <h3>Acoustic & Call Flow Audit</h3>
                  <p>In-depth audit of historical call recordings, typical customer inquiries, IVR trees, and acoustic background noise environments.</p>
                </div>
              </div>
              <div className="fs-timeline-item-blue">
                <div className="fs-timeline-dot-blue"></div>
                <div className="fs-timeline-content-blue">
                  <span className="fs-timeline-step-badge">STEP 02</span>
                  <h3>Telephony Architecture & SIP Hookup</h3>
                  <p>Configuring carrier SIP trunks, WebSockets audio streaming servers, and secure bi-directional audio codecs (G.711 / Opus).</p>
                </div>
              </div>
              <div className="fs-timeline-item-blue">
                <div className="fs-timeline-dot-blue"></div>
                <div className="fs-timeline-content-blue">
                  <span className="fs-timeline-step-badge">STEP 03</span>
                  <h3>Low-Latency STT & TTS Pipeline</h3>
                  <p>Tuning streaming speech-to-text models with custom phonetic domain glossaries and configuring expressive neural text-to-speech voices.</p>
                </div>
              </div>
              <div className="fs-timeline-item-blue">
                <div className="fs-timeline-dot-blue"></div>
                <div className="fs-timeline-content-blue">
                  <span className="fs-timeline-step-badge">STEP 04</span>
                  <h3>Dialogue State & Tool Calling</h3>
                  <p>Developing conversational graph logic with real-time CRM API lookups, appointment scheduling hooks, and database queries.</p>
                </div>
              </div>
              <div className="fs-timeline-item-blue">
                <div className="fs-timeline-dot-blue"></div>
                <div className="fs-timeline-content-blue">
                  <span className="fs-timeline-step-badge">STEP 05</span>
                  <h3>Barge-In & Stress Testing</h3>
                  <p>Simulating poor cellular connectivity, heavy background street noise, and rapid human interruptions to guarantee robust barge-in behavior.</p>
                </div>
              </div>
              <div className="fs-timeline-item-blue">
                <div className="fs-timeline-dot-blue"></div>
                <div className="fs-timeline-content-blue">
                  <span className="fs-timeline-step-badge">STEP 06</span>
                  <h3>Pilot Launch & Live Call Shadowing</h3>
                  <p>Routing a 10% slice of inbound telephony traffic to the voice agent while senior support reps shadow live calls and evaluate accuracy.</p>
                </div>
              </div>
              <div className="fs-timeline-item-blue">
                <div className="fs-timeline-dot-blue"></div>
                <div className="fs-timeline-content-blue">
                  <span className="fs-timeline-step-badge">STEP 07</span>
                  <h3>Full Scale Deployment & SLA</h3>
                  <p>100% call deflection rollout with real-time audio latency telemetry, sentiment tracking, and ongoing intent expansion.</p>
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
                      <td style={{ color: '#0b0f19', borderBottom: '1px solid #e2e8f0' }}><strong>Discovery & Audio Audit</strong></td>
                      <td style={{ color: '#475569', borderBottom: '1px solid #e2e8f0' }}>Acoustic analysis, intent tree scoping, telephony credentials, CRM access</td>
                      <td style={{ borderBottom: '1px solid #e2e8f0' }}><span className="fs-lang-pill" style={{ background: '#f1f5f9', color: '#0b0f19', border: '1px solid #cbd5e1' }}>1–2 weeks</span></td>
                    </tr>
                    <tr>
                      <td style={{ color: '#0b0f19', borderBottom: '1px solid #e2e8f0' }}><strong>SIP & Codec Setup</strong></td>
                      <td style={{ color: '#475569', borderBottom: '1px solid #e2e8f0' }}>Twilio/FreeSWITCH hookup, WebSockets pipeline, Silero VAD calibration</td>
                      <td style={{ borderBottom: '1px solid #e2e8f0' }}><span className="fs-lang-pill" style={{ background: '#f1f5f9', color: '#0b0f19', border: '1px solid #cbd5e1' }}>1–3 weeks</span></td>
                    </tr>
                    <tr>
                      <td style={{ color: '#0b0f19', borderBottom: '1px solid #e2e8f0' }}><strong>Dialogue & Integration</strong></td>
                      <td style={{ color: '#475569', borderBottom: '1px solid #e2e8f0' }}>Conversational state machine, database lookups, voice persona tuning</td>
                      <td style={{ borderBottom: '1px solid #e2e8f0' }}><span className="fs-lang-pill" style={{ background: 'rgba(46,41,255,0.08)', color: '#2E29FF', border: '1px solid rgba(46,41,255,0.2)' }}>2–4 weeks</span></td>
                    </tr>
                    <tr>
                      <td style={{ color: '#0b0f19', borderBottom: '1px solid #e2e8f0' }}><strong>Barge-In QA & Shadowing</strong></td>
                      <td style={{ color: '#475569', borderBottom: '1px solid #e2e8f0' }}>Noise stress tests, warm transfer validation, live 10% traffic pilot</td>
                      <td style={{ borderBottom: '1px solid #e2e8f0' }}><span className="fs-lang-pill" style={{ background: '#f1f5f9', color: '#0b0f19', border: '1px solid #cbd5e1' }}>1–2 weeks</span></td>
                    </tr>
                    <tr>
                      <td style={{ color: '#0b0f19', borderBottom: '1px solid #e2e8f0' }}><strong>Full Production Launch</strong></td>
                      <td style={{ color: '#475569', borderBottom: '1px solid #e2e8f0' }}>100% traffic shift, live latency monitoring, sentiment tracking, SLA active</td>
                      <td style={{ borderBottom: '1px solid #e2e8f0' }}><span className="fs-lang-pill" style={{ background: '#f1f5f9', color: '#0b0f19', border: '1px solid #cbd5e1' }}>1 week</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
                    <div><strong>Live Audio Demos:</strong> Call test telephone numbers and hear working voice agent milestones every week.</div>
                  </div>
                  <div className="fs-track-item-blue">
                    <div style={{ background: 'rgba(52,168,83,0.15)', color: '#34A853', borderRadius: '50%', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '800', flexShrink: 0 }}>✓</div>
                    <div><strong>Live Call Shadowing:</strong> Support managers listen in real time to pilot calls during the staging rollout.</div>
                  </div>
                  <div className="fs-track-item-blue">
                    <div style={{ background: 'rgba(52,168,83,0.15)', color: '#34A853', borderRadius: '50%', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '800', flexShrink: 0 }}>✓</div>
                    <div><strong>Direct Developer Slack:</strong> Rapid engineering coordination with lead telecom and speech developers.</div>
                  </div>
                  <div className="fs-track-item-blue">
                    <div style={{ background: 'rgba(52,168,83,0.15)', color: '#34A853', borderRadius: '50%', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '800', flexShrink: 0 }}>✓</div>
                    <div><strong>Fallback Trunking:</strong> Instant automated failover to human queues if latency exceeds preset SLA thresholds.</div>
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
                    <div><strong>Historical Call Recordings:</strong> Audio samples to train speech acoustic models and identify edge-case intents.</div>
                  </div>
                  <div className="fs-track-item-blue">
                    <div style={{ background: 'rgba(96,165,250,0.15)', color: '#60A5FA', borderRadius: '50%', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '800', flexShrink: 0 }}>✦</div>
                    <div><strong>Telephony Carrier Access:</strong> SIP trunk credentials (Twilio, FreeSWITCH, Asterisk, or Telnyx).</div>
                  </div>
                  <div className="fs-track-item-blue">
                    <div style={{ background: 'rgba(96,165,250,0.15)', color: '#60A5FA', borderRadius: '50%', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '800', flexShrink: 0 }}>✦</div>
                    <div><strong>Support Workflow Policies:</strong> Clarification on escalation thresholds and warm transfer destinations.</div>
                  </div>
                  <div className="fs-track-item-blue">
                    <div style={{ background: 'rgba(96,165,250,0.15)', color: '#60A5FA', borderRadius: '50%', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '800', flexShrink: 0 }}>✦</div>
                    <div><strong>Active Pilot Feedback:</strong> Reviewing call transcripts during the 10% shadow phase to calibrate accuracy.</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 7. INDUSTRIES WE SERVE (EXACT MATCH CHATBOT TEMPLATE WITH CARDS & TABLE) */}
        <section className="fs-section fs-section-bg-slate">
          <div className="fs-container">
            <div className="fs-tag-arrows">INDUSTRY APPLICATIONS</div>
            <h2 className="fs-section-title">Conversational AI Tailored to Your Sector</h2>
            <p className="fs-section-subtitle">
              We design conversational architectures configured to meet the unique compliance guidelines, telephony parameters, and customer intents of your industry.
            </p>

            <div className="fs-grid-3" style={{ marginBottom: '60px' }}>
              <div className="fs-card-premium">
                <h3>Healthcare & Clinics</h3>
                <p>Automate patient appointment bookings, prescription refill status lookups, and clinic hours inquiries aligned with HIPAA security guidelines.</p>
              </div>
              <div className="fs-card-premium">
                <h3>Logistics & Fleet Dispatch</h3>
                <p>Support driver check-ins, automate freight pickup reschedules, provide shipment transit ETAs, and dispatch emergency route updates.</p>
              </div>
              <div className="fs-card-premium">
                <h3>Banking & Financial Support</h3>
                <p>Automate card security freezes, balance checks, payment due date inquiries, and loan application status with multi-factor authentication.</p>
              </div>
              <div className="fs-card-premium">
                <h3>Hospitality & Travel</h3>
                <p>Handle hotel room reservation modifications, flight itinerary changes, check-in questions, and restaurant concierge bookings 24/7.</p>
              </div>
              <div className="fs-card-premium">
                <h3>Real Estate & Property Management</h3>
                <p>Qualify inbound tenant inquiries, schedule property walkthrough viewings, and coordinate emergency maintenance ticket intake.</p>
              </div>
              <div className="fs-card-premium">
                <h3>E-Commerce & Retail Support</h3>
                <p>Automate order shipment tracking, process return authorization requests, and answer sizing and inventory questions over the phone.</p>
              </div>
            </div>

            {/* Industry comparison table */}
            <div style={{ marginTop: '50px' }}>
              <h3 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '20px', color: '#0b0f19' }}>
                Common Industry Voice AI Use Cases
              </h3>
              <div className="fs-table-container">
                <table className="fs-table">
                  <thead>
                    <tr>
                      <th>Industry</th>
                      <th>Common Voice AI Applications</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Healthcare</strong></td>
                      <td>Patient intake, automated appointment reminders, prescription refill confirmations.</td>
                    </tr>
                    <tr>
                      <td><strong>Logistics & Freight</strong></td>
                      <td>Automated driver load check-ins, delivery scheduling, freight ETA inquiries.</td>
                    </tr>
                    <tr>
                      <td><strong>Banking & Financial</strong></td>
                      <td>Card security freezes, fraud confirmation prompts, balance and billing inquiries.</td>
                    </tr>
                    <tr>
                      <td><strong>Hospitality & Travel</strong></td>
                      <td>Reservation rescheduling, flight delay notifications, hotel concierge inquiries.</td>
                    </tr>
                    <tr>
                      <td><strong>Real Estate</strong></td>
                      <td>Automated buyer lead qualification, open house bookings, maintenance requests.</td>
                    </tr>
                    <tr>
                      <td><strong>E-Commerce</strong></td>
                      <td>Order tracking deflection, return authorization, product inventory checks.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </section>

        {/* 8. TOOLS & TECHNOLOGIES (EXACT MATCH CHATBOT 4-BOX TECH STACK) */}
        <section className="expertise experts">
          <div className="container">
            <div className="row" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '40px' }}>
              <div className="col" style={{ flex: '1', minWidth: '300px' }}>
                <div className="head epb">
                  <div className="fs-tag-arrows">SPEECH STACK</div>
                  <h2 style={{ fontSize: '38px', fontWeight: '800', color: '#0b0f19', marginBottom: '16px' }}>
                    Advanced Telephony & Speech Technologies
                  </h2>
                  <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.6' }}>
                    We combine ultra-low latency speech recognition, fast inference engines, and neural voice synthesis to create responsive full-duplex conversations.
                  </p>

                  <div style={{ marginTop: '24px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '12px', color: '#0b0f19' }}>
                      Key Architectural Pillars:
                    </h3>
                    <ul className="fs-bullet-list">
                      <li className="fs-bullet-item">
                        <CheckCircle />
                        <div><strong>Speech-to-Text (STT):</strong> Deepgram Nova-2, Whisper Large-v3, Silero VAD.</div>
                      </li>
                      <li className="fs-bullet-item">
                        <CheckCircle />
                        <div><strong>Text-to-Speech (TTS):</strong> Cartesia Sonic, ElevenLabs, OpenAI Audio, PlayHT.</div>
                      </li>
                      <li className="fs-bullet-item">
                        <CheckCircle />
                        <div><strong>Telephony & WebRTC:</strong> Twilio Voice SIP, FreeSWITCH, Asterisk, LiveKit, Pipecat.</div>
                      </li>
                      <li className="fs-bullet-item">
                        <CheckCircle />
                        <div><strong>Real-Time Serving:</strong> Python AsyncIO, FastAPI, WebSockets, Redis Cache.</div>
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
                        <h3 className="sub">Speech Recognition (STT)</h3>
                        <div className="skill">
                          <p className="skills">Deepgram Nova-2</p>
                          <p className="skills">Whisper Large-v3</p>
                          <p className="skills">Silero VAD (Noise)</p>
                          <p className="skills">AssemblyAI</p>
                          <p className="skills">Google Cloud STT</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tech_stack">
                    <div className="framework">
                      <div className="bgcolorto">
                        <h3 className="sub">Neural Voice Synthesis</h3>
                        <div className="skill">
                          <p className="skills bg">Cartesia Sonic (Fast)</p>
                          <p className="skills bg">ElevenLabs Flash</p>
                          <p className="skills bg">OpenAI Audio</p>
                          <p className="skills bg">PlayHT 2.0</p>
                          <p className="skills bg">Azure Neural TTS</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tech_stack">
                    <div className="framework">
                      <div className="bg_cool_aqua">
                        <h3 className="sub">Telephony & WebRTC</h3>
                        <div className="skill">
                          <p className="skills cool_aqua">Twilio Voice SIP</p>
                          <p className="skills cool_aqua">LiveKit WebRTC</p>
                          <p className="skills cool_aqua">FreeSWITCH PBX</p>
                          <p className="skills cool_aqua">Telnyx / Vonage</p>
                          <p className="skills cool_aqua">Pipecat Pipeline</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tech_stack">
                    <div className="framework">
                      <div className="bg_lavender">
                        <h3 className="sub">Messaging & Channels</h3>
                        <div className="skill">
                          <p className="skills lavender">WhatsApp Cloud API</p>
                          <p className="skills lavender">SMS / RCS Twilio</p>
                          <p className="skills lavender">Web Speech SDK</p>
                          <p className="skills lavender">FastAPI Python</p>
                          <p className="skills lavender">Redis Session Cache</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. WHY CLIENTS TRUST US (EXACT MATCH CHATBOT 6-CARD GRID) */}
        <section className="fs-section fs-section-bg-slate">
          <div className="fs-container">
            <div className="fs-tag-arrows">TRUST & TELEPHONY STANDARDS</div>
            <h2 className="fs-section-title">An Engineering-First Voice Partner</h2>
            <p className="fs-section-subtitle">
              We engineer mission-critical voice applications with direct developer access, carrier-grade uptime, and full IP ownership.
            </p>

            <div className="fs-grid-3">
              <div className="fs-card-premium">
                <h3>100% IP & Pipeline Ownership</h3>
                <p>All voice orchestration code, telephony scripts, and custom voice models belong entirely to you. Zero recurring platform licensing.</p>
              </div>
              <div className="fs-card-premium">
                <h3>Direct Lead Engineer Channels</h3>
                <p>Collaborate directly with lead systems and voice engineers. Avoid non-technical account manager delays during technical scoping.</p>
              </div>
              <div className="fs-card-premium">
                <h3>SOC2 & HIPAA Audio Compliance</h3>
                <p>Audio streams are encrypted end-to-end with TLS/SRTP. Automated PII scrubbing sanitizes credit card numbers and medical data.</p>
              </div>
              <div className="fs-card-premium">
                <h3>Carrier-Grade Production SLAs</h3>
                <p>Guaranteed 99.95% system uptime, automated failover SIP routes, and dedicated post-launch support contracts.</p>
              </div>
              <div className="fs-card-premium">
                <h3>Cross-Platform Ecosystem</h3>
                <p>Pair voice bots with our <Link to="/services/chatbot-development" style={{ color: '#2E29FF', fontWeight: '700' }}>AI Chatbot</Link>, <Link to="/services/gen-ai-development" style={{ color: '#2E29FF', fontWeight: '700' }}>Generative AI</Link>, and <Link to="/forge-ai" style={{ color: '#2E29FF', fontWeight: '700' }}>FORGE AI</Link> solutions.</p>
              </div>
              <div className="fs-card-premium">
                <h3>Transparent Pricing & Compute</h3>
                <p>Clear deliverable milestones and itemized carrier minute estimates. You never receive surprise platform markups.</p>
              </div>
            </div>

          </div>
        </section>

        {/* 10. FAQ SECTION (EXACT MATCH HOMEPAGE / CHATBOT FAQ) */}
        <section className="nd-faq">
          <div className="nd-faq-inner">
            <div className="nd-faq-tag">✦ FAQS ✦</div>
            <h2 className="nd-faq-title">Conversational AI & Voice Agents: Frequently Asked Questions</h2>
            <div className="nd-faq-list">
              {faqs.map((f, i) => (
                <FaqItem key={i} q={f.q} a={f.a} open={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} />
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
              <Link to="/contact-us" className="nd-faq-cta-btn">
                Need a custom telephony audit? Talk to Our Engineers ↗
              </Link>
            </div>
          </div>
        </section>

        {/* 11. FINAL CALL TO ACTION (REDESIGNED COMPACT BANNER) */}
        <div className="fs-container" style={{ paddingBottom: '60px' }}>
          <section className="fs-cta-bottom">
            <div className="fs-cta-content-grid">
              <div className="fs-cta-text-left">
                <span className="fs-cta-badge">
                  <span className="fs-cta-badge-dot"></span> Direct Founder & Lead Voice Engineer Access
                </span>
                <h2>Ready to Deploy Autonomous Voice Agents for Your Business?</h2>
                <p>
                  Eliminate hold queues, resolve routine support calls 24/7, and deliver responsive human-like customer service.
                </p>
                <div className="fs-cta-trust-items">
                  <span>✓ 100% Code & Telephony Ownership</span>
                  <span>✓ Sub-400ms Turnaround Latency</span>
                  <span>✓ Production SLA Support</span>
                </div>
              </div>

              <div className="fs-cta-actions-right">
                <Link to="/contact-us" className="fs-btn-cta-primary">
                  Book Voice AI Strategy Call <ArrowRight />
                </Link>
                <Link to="/get-a-free-quote" className="fs-btn-cta-secondary">
                  Request Telephony Quote
                </Link>
                <div className="fs-cta-email-note">
                  Or email directly: <a href="mailto:novadesk.site@gmail.com">novadesk.site@gmail.com</a>
                </div>
              </div>
            </div>
          </section>
        </div>

      </div>
    </>
  );
}
