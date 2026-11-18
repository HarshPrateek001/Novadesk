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

// Interactive Hero Simulation Widget: Live Voice Agent & Telephony Streamer
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
        <div className="nd-browser-topbar nd-browser-topbar-flex">
          <div className="nd-browser-dots">
            <span className="nd-dot red"></span>
            <span className="nd-dot yellow"></span>
            <span className="nd-dot green"></span>
          </div>
          <div className="nd-status-tag active">
            <span className="nd-status-dot"></span>
            Real-Time SIP Telephony · WebSockets Audio
          </div>
        </div>

        <div className="nd-voice-body">
          {/* Active Call UI Card */}
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

            {/* Pulsing Audio Waveform */}
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

            {/* Live Streaming Audio Transcript */}
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

            {/* Interactive Telephony Action Controls */}
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

          {/* Sub-500ms Latency Metrics Strip */}
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

// Interactive Architecture Visualizer
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

  const capabilities = [
    {
      title: "Sub-500ms Real-Time Voice Agents",
      tagline: "Ultra-Low Latency Speech Pipeline",
      badge: "Human-Like Timing",
      desc: "Deploy voice agents that converse with lifelike pauses, emotion, and dynamic pacing in under 400ms end-to-end turnaround latency via streaming WebSockets.",
      bullets: ["Streaming Deepgram Nova-2 STT", "Groq & vLLM fast token inference", "Cartesia Sonic natural TTS", "Sub-400ms roundtrip turnaround"]
    },
    {
      title: "Telephony SIP & PBX Trunking",
      tagline: "Carrier-Grade Inbound/Outbound",
      badge: "Full Telephony",
      desc: "Connect voice agents directly to your existing telephone infrastructure. We support Twilio Voice, Vonage, Telnyx, Amazon Chime, and Asterisk/FreeSWITCH SIP servers.",
      bullets: ["Bi-directional PCM audio streaming", "Direct DID phone number routing", "Automated outbound campaign dialers", "WebRTC web & mobile SDKs"]
    },
    {
      title: "Natural Turn-Taking & Barge-In",
      tagline: "Voice Activity Detection (VAD)",
      badge: "Adaptive Flow",
      desc: "Allow callers to interrupt the AI agent mid-sentence just like a human conversation. Silero VAD purges outgoing audio buffers in under 40ms to adapt to new input.",
      bullets: ["Acoustic noise & cough filtering", "Sub-40ms audio stream cancellation", "Preserved conversation context", "Zero robotic clashing"]
    },
    {
      title: "Omnichannel WhatsApp & SMS",
      tagline: "Unified Multi-Channel Brain",
      badge: "24/7 Automation",
      desc: "Power your phone calls, WhatsApp Business API, SMS, and website chat from a single conversational core. Update your business logic once, deploy everywhere.",
      bullets: ["WhatsApp interactive lists & buttons", "Two-way SMS dispatch & notifications", "Omnichannel user identity linking", "Shared knowledge base vault"]
    },
    {
      title: "Sentiment Routing & Warm Transfer",
      tagline: "Live Human Escalation",
      badge: "Zero Dropped Context",
      desc: "Detect caller frustration, high-value inquiries, or complex issues in real time. The agent executes a warm SIP transfer with live context screen-pop to human specialists.",
      bullets: ["Real-time acoustic sentiment scoring", "Warm SIP REFER transfer protocol", "Full transcript & CRM screen pop", "Zero customer repetition required"]
    },
    {
      title: "Multilingual Real-Time Translation",
      tagline: "Global Dialect & Accent Support",
      badge: "Global Reach",
      desc: "Serve international callers with real-time speech translation and language detection across 30+ languages and localized regional accents with accurate phonetic matching.",
      bullets: ["Automatic spoken language detection", "Localized regional accent modeling", "Phonetic alphanumeric name spelling", "Cross-lingual intent recognition"]
    }
  ];

  const steps = [
    { num: "01", title: "Acoustic & Call Flow Audit", time: "Week 1", desc: "Analyze historical call recordings, IVR call trees, typical customer intents, and acoustic background noise environments." },
    { num: "02", title: "Telephony Architecture & SIP Hookup", time: "Week 2", desc: "Configure carrier SIP trunks, WebSockets audio streaming servers, and secure bi-directional audio codecs (G.711 / Opus)." },
    { num: "03", title: "Low-Latency STT & TTS Pipeline", time: "Weeks 2–3", desc: "Tune streaming speech-to-text models with custom phonetic domain glossaries and configure expressive neural text-to-speech voices." },
    { num: "04", title: "Dialogue State & Tool Calling", time: "Weeks 3–5", desc: "Develop conversational graph logic with real-time CRM API lookups, appointment scheduling hooks, and database queries." },
    { num: "05", title: "Barge-In & Stress Testing", time: "Weeks 5–6", desc: "Simulate poor cellular connectivity, heavy background street noise, and rapid human interruptions to guarantee robust barge-in behavior." },
    { num: "06", title: "Pilot Launch & Live Call Shadowing", time: "Weeks 6–7", desc: "Route a 10% slice of inbound telephony traffic to the voice agent while senior support reps shadow live calls and evaluate accuracy." },
    { num: "07", title: "Full Scale Deployment & SLA", time: "Week 8+", desc: "100% call deflection rollout with real-time audio latency telemetry, sentiment tracking, and ongoing intent expansion." }
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
                ENTERPRISE CONVERSATIONAL & VOICE AI
              </div>
              <h1 className="fs-hero-title">
                Real-Time Voice AI Built for <span className="fs-text-blue">Customer Conversations</span>
              </h1>
              <p className="fs-hero-desc" style={{ marginBottom: '32px' }}>
                Replace rigid phone trees and overloaded call centers with sub-500ms conversational voice agents. We engineer natural full-duplex voice bots, SIP telephony trunking, and omnichannel WhatsApp automation with 100% IP ownership.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
                  <Link to="/contact-us" className="fs-btn fs-btn-primary" style={{ height: '52px', padding: '0 28px', borderRadius: '12px', fontSize: '15px', fontWeight: '700', boxShadow: '0 8px 20px rgba(46, 41, 255, 0.25)' }}>
                    Book Voice AI Consultation <ArrowRight />
                  </Link>
                  <Link to="/case-studies" className="fs-btn" style={{ height: '52px', padding: '0 26px', borderRadius: '12px', fontSize: '15px', fontWeight: '700', backgroundColor: '#0B0F19', color: '#ffffff', textDecoration: 'none' }}>
                    Listen to Voice Demos →
                  </Link>
                </div>

                <div style={{ fontSize: '13.5px', color: '#475569', display: 'flex', flexWrap: 'wrap', gap: '22px', fontWeight: '600', marginTop: '6px', alignItems: 'center' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle /> Sub-400ms Real-Time Audio Response
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle /> Native Telephony & SIP PBX Integration
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle /> Instant Warm Human Escalation
                  </span>
                </div>
              </div>
            </div>

            {/* Live Interactive Hero Simulation */}
            <div className="fs-hero-image-wrapper">
              <HeroVoiceAnimation />
            </div>
          </div>
        </section>

        {/* 2. FOUNDER-LED VALUE STRIP */}
        <section className="fs-agency-alt">
          <div className="fs-container">
            <div className="fs-agency-grid">
              <div className="fs-agency-card">
                <div className="fs-agency-num">&lt; 400ms</div>
                <div className="fs-agency-label">End-to-End Latency</div>
                <div className="fs-agency-sub">Streaming WebSockets audio pipeline</div>
              </div>
              <div className="fs-agency-card">
                <div className="fs-agency-num">72%</div>
                <div className="fs-agency-label">Inbound Call Deflection</div>
                <div className="fs-agency-sub">Routine inquiries resolved without human reps</div>
              </div>
              <div className="fs-agency-card">
                <div className="fs-agency-num">100%</div>
                <div className="fs-agency-label">Barge-In Support</div>
                <div className="fs-agency-sub">VAD halts playback when caller interrupts</div>
              </div>
              <div className="fs-agency-card">
                <div className="fs-agency-num">0</div>
                <div className="fs-agency-label">Vendor Lock-In</div>
                <div className="fs-agency-sub">You own all telephony and prompt code</div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. INTERACTIVE ARCHITECTURE VISUALIZER */}
        <section className="fs-section fs-section-bg-slate">
          <div className="fs-container">
            <div className="fs-tag-arrows">TELEPHONY BLUEPRINTS</div>
            <h2 className="fs-section-title">Production Conversational Architectures</h2>
            <p className="fs-section-subtitle">
              Voice software requires precision engineering across streaming codecs, voice activity detection, and SIP telephony gateways. Click below to inspect our architecture.
            </p>

            <div className="av-tabs" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center', margin: '24px 0 32px' }}>
              {["Sub-500ms Audio Pipeline", "Telephony SIP & WebRTC", "Turn-Taking & Barge-In", "Omnichannel Brain", "Sentiment Escalation"].map((name, i) => (
                <button
                  key={i}
                  type="button"
                  className={`fs-btn ${activeArch === i ? 'fs-btn-primary' : 'fs-btn-white'}`}
                  style={{ padding: '10px 20px', borderRadius: '8px', fontSize: '13px' }}
                  onClick={() => setActiveArch(i)}
                >
                  {name}
                </button>
              ))}
            </div>

            <ArchVizConversational activeArch={activeArch} />
          </div>
        </section>

        {/* 4. COMPARISON: RIGID ROBOTIC IVR VS NOVADESK REAL-TIME VOICE */}
        <section className="fs-section">
          <div className="fs-container">
            <div className="fs-tag-arrows">CUSTOMER EXPERIENCE</div>
            <h2 className="fs-section-title">Why Legacy IVR Menus Destroy Brand Loyalty</h2>
            <p className="fs-section-subtitle">
              Customers dread "Press 1 for billing" mazes with monotone voices that don't listen. NovaDesk delivers responsive, empathetic voice agents that resolve problems in seconds.
            </p>

            <div className="fs-comp-grid">
              <div className="fs-comp-card fs-comp-card-cookie">
                <div className="fs-comp-header">
                  <span className="fs-comp-badge">Legacy Telephony / Old IVR</span>
                  <h3>Rigid Robotic Phone Menus</h3>
                  <p>Frustrating automated phone systems that drive customers to hang up.</p>
                </div>
                <div className="fs-comp-list">
                  <div className="fs-comp-item">
                    <span className="fs-comp-item-icon">✕</span>
                    <div><strong>Endless Keypad Trees:</strong> "Press 1 for Sales, Press 2 for Support" forces customers through cumbersome multi-minute menus.</div>
                  </div>
                  <div className="fs-comp-item">
                    <span className="fs-comp-item-icon">✕</span>
                    <div><strong>Awkward Multi-Second Delays:</strong> Clunky speech models pause for 2 to 4 seconds, causing callers to talk over each other.</div>
                  </div>
                  <div className="fs-comp-item">
                    <span className="fs-comp-item-icon">✕</span>
                    <div><strong>No Interruption Handling:</strong> The bot speaks over the customer and forces them to listen to pre-recorded audio blocks.</div>
                  </div>
                  <div className="fs-comp-item">
                    <span className="fs-comp-item-icon">✕</span>
                    <div><strong>Cold Transfer Drops:</strong> When callers demand a human, they are dumped into hold queues without context and must repeat themselves.</div>
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
                    <div><strong>Natural Speech Intake:</strong> Callers speak freely in plain language: "I need to change my flight" — zero keypads required.</div>
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
                    <div><strong>Warm SIP Screen Pop:</strong> Human agents receive the live call along with caller ID, problem summary, and full chat logs.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. 6 CORE CAPABILITIES */}
        <section className="fs-section fs-section-bg-slate">
          <div className="fs-container">
            <div className="fs-tag-arrows">VOICE CAPABILITIES</div>
            <h2 className="fs-section-title">End-to-End Conversational AI Engineering</h2>
            <p className="fs-section-subtitle">
              From carrier telephony trunking to omnichannel WhatsApp messaging, we engineer conversational systems that scale effortlessly.
            </p>

            <div className="fs-grid-3">
              {capabilities.map((cap, i) => (
                <div key={i} className="fs-card-premium">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                    <span style={{ fontSize: '11px', fontWeight: '800', color: '#2E29FF', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      {cap.tagline}
                    </span>
                    <span style={{ fontSize: '10px', background: 'rgba(46,41,255,0.08)', color: '#2E29FF', padding: '3px 8px', borderRadius: '4px', fontWeight: '700' }}>
                      {cap.badge}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#0B0F19', marginBottom: '10px' }}>
                    {cap.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.6', marginBottom: '18px' }}>
                    {cap.desc}
                  </p>
                  <ul className="fs-bullet-list" style={{ marginTop: 'auto' }}>
                    {cap.bullets.map((b, idx) => (
                      <li key={idx} className="fs-bullet-item" style={{ fontSize: '13px' }}>
                        <CheckCircle />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. BUSINESS IMPACT & ROI */}
        <section className="fs-section">
          <div className="fs-container">
            <div className="fs-tag-arrows">MEASURABLE IMPACT</div>
            <h2 className="fs-section-title">Commercial ROI for Support & Operations</h2>
            <p className="fs-section-subtitle">
              Voice automation drastically slashes call center operational expenses while accelerating customer resolution times.
            </p>

            <div className="fs-roi-grid">
              <div className="fs-roi-card">
                <div className="fs-roi-stat">72%</div>
                <div className="fs-roi-title">Routine Call Deflection</div>
                <p className="fs-roi-desc">Resolves order tracking, scheduling, balance checks, and tier-1 inquiries automatically without human reps.</p>
              </div>
              <div className="fs-roi-card">
                <div className="fs-roi-stat">0 Sec</div>
                <div className="fs-roi-title">Customer Queue Hold Time</div>
                <p className="fs-roi-desc">Every caller is answered instantly on the first ring, handling massive concurrent call spikes with ease.</p>
              </div>
              <div className="fs-roi-card">
                <div className="fs-roi-stat">65%</div>
                <div className="fs-roi-title">Cost Per Resolved Ticket Savings</div>
                <p className="fs-roi-desc">Reduces cost per resolved call from $6–$12 with human agents down to $0.40–$0.90 with automated voice AI.</p>
              </div>
              <div className="fs-roi-card">
                <div className="fs-roi-stat">4.8/5</div>
                <div className="fs-roi-title">Customer Satisfaction (CSAT)</div>
                <p className="fs-roi-desc">Callers appreciate immediate answers, zero hold music, and intelligent warm transfers when needed.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. 7-STAGE DELIVERY METHODOLOGY */}
        <section className="fs-process-blue">
          <div className="fs-container">
            <div className="fs-tag-white">DELIVERY PROCESS</div>
            <h2 className="fs-title-white">Our 7-Stage Voice Engineering Roadmap</h2>
            <p className="fs-subtitle-white">
              From initial acoustic auditing to live call shadowing and SLA monitoring, we deliver enterprise-grade conversational systems.
            </p>

            <div className="fs-process-cards">
              {steps.map((st, i) => (
                <div key={i} className="fs-process-card">
                  <div className="fs-step-number">{st.num}</div>
                  <div className="fs-step-time">{st.time}</div>
                  <h3 className="fs-step-title">{st.title}</h3>
                  <p className="fs-step-desc">{st.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. TOOLS & TECH STACK */}
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
                        <div><strong>Speech-to-Text (STT):</strong> Deepgram Nova-2, Whisper Large-v3, AssemblyAI.</div>
                      </li>
                      <li className="fs-bullet-item">
                        <CheckCircle />
                        <div><strong>Text-to-Speech (TTS):</strong> Cartesia Sonic, ElevenLabs, OpenAI Voice, PlayHT.</div>
                      </li>
                      <li className="fs-bullet-item">
                        <CheckCircle />
                        <div><strong>Telephony & WebRTC:</strong> Twilio Voice, FreeSWITCH, Asterisk, LiveKit, Pipecat.</div>
                      </li>
                      <li className="fs-bullet-item">
                        <CheckCircle />
                        <div><strong>Real-Time Serving:</strong> Python AsyncIO, FastAPI, WebSockets, Redis Session Cache.</div>
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

        {/* 9. TRUST & SECURITY STANDARDS */}
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
                <p>Clear deliverable milestones and itemized carrier minute estimates. You never receive surprise platform charges.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 10. COMPREHENSIVE FAQ SECTION */}
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

        {/* 11. CLOSING HIGH-CONVERTING CTA BANNER */}
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
