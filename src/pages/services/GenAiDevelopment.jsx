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
function HeroGenAiAnimation() {
  const [activeModel, setActiveModel] = useState(0);
  const [streamProgress, setStreamProgress] = useState(0);

  const scenarios = [
    {
      model: 'Claude 3.7 Sonnet',
      tag: 'Anthropic Reasoning',
      latency: '142ms',
      speed: '128 tok/s',
      accuracy: '99.8%',
      prompt: 'Synthesize Q3 multi-region SaaS retention metrics, flag churn risks & generate executive recovery playbooks.',
      thinking: 'Analyzing 4 enterprise cohorts across US, EMEA, APAC... Verifying retention anomalies...',
      output: 'Executive Summary: Net Revenue Retention stabilized at 114%. Identified churn inflection at Month 9 in mid-market tier due to SSO onboarding friction. Action Plan: 1) Deploy self-serve SAML wizard, 2) Trigger automated CS outreach on 14-day inactivity.',
      citations: ['10-Q_Q3_SaaS.pdf §4.2', 'Cohort_Retention_Matrix.csv', 'Zendesk_Churn_Logs.json']
    },
    {
      model: 'DeepSeek-R1',
      tag: 'Open Weights Distilled',
      latency: '118ms',
      speed: '144 tok/s',
      accuracy: '99.4%',
      prompt: 'Audit smart contract escrow routing for reentrancy vulnerabilities and emit gas-optimized Solidity patch.',
      thinking: 'Inspecting EVM opcode trace for state-change ordering... Detected state update after external transfer call...',
      output: 'Vulnerability Mitigated: Reentrancy guard injected on depositEscrow(). Mutated state balances before dispatching call.value{}. Gas optimization: packed storage slots saved 4,200 gas per execution.',
      citations: ['EVM_Security_Standard_EIP-1153', 'Slither_Static_AST.log']
    },
    {
      model: 'Llama 3.3 70B',
      tag: 'Air-Gapped Sovereign vLLM',
      latency: '165ms',
      speed: '112 tok/s',
      accuracy: '99.6%',
      prompt: 'Parse 45 complex clinical pathology reports and extract biomarker mutations into FHIR compliant JSON.',
      thinking: 'Parsing unstructured histological notes... Extracting KRAS G12C and BRAF V600E status...',
      output: 'Extraction Complete: 45/45 patient records parsed. 0 missing mandatory identifiers. FHIR Observation resource generated with LOINC codes (49549-9) and verified against SNOMED-CT clinical ontology.',
      citations: ['Histology_Specimen_Batch45.dcm', 'FHIR_v4_Observation_Spec.json']
    }
  ];

  const current = scenarios[activeModel];

  useEffect(() => {
    setStreamProgress(0);
    const interval = setInterval(() => {
      setStreamProgress((prev) => (prev < 100 ? prev + 25 : 100));
    }, 400);
    return () => clearInterval(interval);
  }, [activeModel]);

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
            Private Enterprise Cluster · vLLM Engine
          </div>
        </div>

        <div className="nd-genai-body">
          <div className="nd-genai-model-tabs">
            {scenarios.map((sc, idx) => (
              <button
                key={idx}
                type="button"
                className={`nd-model-pill ${activeModel === idx ? 'active' : ''}`}
                onClick={() => setActiveModel(idx)}
              >
                {sc.model}
              </button>
            ))}
          </div>

          <div className="nd-genai-prompt-box">
            <span className="nd-genai-prompt-lbl">Enterprise Query / Task Trigger</span>
            <p className="nd-genai-prompt-txt">"{current.prompt}"</p>
          </div>

          <div className="nd-genai-stream-box">
            <div className="nd-genai-stream-head">
              <span>● INFERENCE IN PROGRESS</span>
              <span>TTFT: {current.latency} · Speed: {current.speed}</span>
            </div>

            {streamProgress < 50 ? (
              <div className="nd-genai-thinking">
                <span className="nd-status-dot"></span> {current.thinking}
              </div>
            ) : (
              <div className="nd-genai-out-text">
                {current.output}
              </div>
            )}

            <div className="nd-genai-citations">
              <span style={{ fontSize: '11px', color: '#94a3b8', marginRight: '4px', alignSelf: 'center' }}>Grounded Citations:</span>
              {current.citations.map((cite, i) => (
                <span key={i} className="nd-cite-badge">
                  📄 {cite}
                </span>
              ))}
            </div>

            <div className="nd-genai-stats-row">
              <span>Confidence: <strong style={{ color: '#10B981' }}>{current.accuracy}</strong></span>
              <span>Zero Data Egress · On-Premise Guardrails</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 2. Interactive Architecture Visualizer
function ArchVizGenAi({ activeArch }) {
  return (
    <div className="av-wrapper">

      {/* ── 1. Enterprise RAG Pipeline ── */}
      {activeArch === 0 && (
        <div className="av-scene av-rag">
          <div className="av-chrome-bar">
            <span className="av-dot red"/><span className="av-dot yellow"/><span className="av-dot green"/>
            <span className="av-chrome-title">Enterprise RAG Pipeline — Hybrid Dense + Sparse Search</span>
          </div>
          <div className="av-scene-card-wrap">
            <div className="av-scene-flow-grid">
              <div className="av-node-box">
                <span className="av-node-badge">Step 01 · Ingestion</span>
                <span className="av-node-title">Document Parser</span>
                <span className="av-node-desc">PDF, DOCX, Notion & SQL tables parsed with semantic chunking & table preservation.</span>
              </div>
              <div className="av-node-box">
                <span className="av-node-badge">Step 02 · Indexing</span>
                <span className="av-node-title">Hybrid Vector Storage</span>
                <span className="av-node-desc">pgvector + BM25 keyword index for high-precision exact keyword & semantic recall.</span>
              </div>
              <div className="av-node-box">
                <span className="av-node-badge">Step 03 · Re-ranking</span>
                <span className="av-node-title">Cohere Cross-Encoder</span>
                <span className="av-node-desc">Re-ranks top 50 chunks down to 5 highest-relevance passages before LLM synthesis.</span>
              </div>
              <div className="av-node-box">
                <span className="av-node-badge">Step 04 · Guardrails</span>
                <span className="av-node-title">NeMo & PII Sanitizer</span>
                <span className="av-node-desc">Strips credit cards, SSNs, and blocks jailbreaks before prompting the model.</span>
              </div>
            </div>
            <div className="av-rule-chat" style={{ marginTop: '8px' }}>
              <div className="av-msg user-msg">What is our SLA guarantee for enterprise multi-tenant databases?</div>
              <div className="av-msg bot-msg">
                <span className="av-bot-label">Enterprise RAG</span>
                According to the 2025 Enterprise Service Schedule (Sec 3.1), multi-tenant databases carry a 99.95% uptime SLA with 15-minute response times for Severity-1 incidents.
                <span className="av-cite">📄 Service_Level_Agreement_2025.pdf (Page 14)</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── 2. LoRA Fine-Tuning ── */}
      {activeArch === 1 && (
        <div className="av-scene av-nlp">
          <div className="av-chrome-bar">
            <span className="av-dot red"/><span className="av-dot yellow"/><span className="av-dot green"/>
            <span className="av-chrome-title">LoRA / QLoRA Domain Adaptation & Evaluation Engine</span>
          </div>
          <div className="av-scene-card-wrap">
            <div className="av-scene-flow-grid">
              <div className="av-node-box">
                <span className="av-node-badge">Phase 1</span>
                <span className="av-node-title">Data Curation</span>
                <span className="av-node-desc">15,000 domain-specific instruction pairs formatted with automated quality filters.</span>
              </div>
              <div className="av-node-box">
                <span className="av-node-badge">Phase 2</span>
                <span className="av-node-title">QLoRA Training</span>
                <span className="av-node-desc">Low-Rank Adaptation applied to attention heads on dual A100 GPUs in 4-bit precision.</span>
              </div>
              <div className="av-node-box">
                <span className="av-node-badge">Phase 3</span>
                <span className="av-node-title">Adapter Merging</span>
                <span className="av-node-desc">Merged rank-16 adapter weights into base Llama-3.3-70B model with zero latency overhead.</span>
              </div>
              <div className="av-node-box">
                <span className="av-node-badge">Phase 4</span>
                <span className="av-node-title">Eval Benchmark</span>
                <span className="av-node-desc">99.4% syntax adherence, 0% hallucination on proprietary internal taxonomy tests.</span>
              </div>
            </div>
            <div className="av-msg bot-msg" style={{ marginTop: '10px' }}>
              <span className="av-bot-label">Evaluation Metric</span>
              Benchmark complete: Domain Accuracy increased from 61.2% (Base Llama 3) to 99.4% (NovaDesk Fine-Tuned). Training cost: $340 total.
            </div>
          </div>
        </div>
      )}

      {/* ── 3. Multi-Agent Swarm (LangGraph) ── */}
      {activeArch === 2 && (
        <div className="av-scene av-rule">
          <div className="av-chrome-bar">
            <span className="av-dot red"/><span className="av-dot yellow"/><span className="av-dot green"/>
            <span className="av-chrome-title">Multi-Agent LangGraph Swarm — Autonomous Execution</span>
          </div>
          <div className="av-rule-body">
            <div className="av-flow-chain">
              <div className="av-flow-node trigger">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                Supervisor
              </div>
              <div className="av-flow-arrow av-arrow-anim-1">→</div>
              <div className="av-flow-node intent">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                Research Agent
              </div>
              <div className="av-flow-arrow av-arrow-anim-2">→</div>
              <div className="av-flow-node fetch">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                Python Sandbox
              </div>
              <div className="av-flow-arrow av-arrow-anim-3">→</div>
              <div className="av-flow-node respond">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                Critic & Validator
              </div>
            </div>
            <div className="av-rule-chat">
              <div className="av-msg bot-msg">
                <span className="av-bot-label">Agent Swarm Output</span>
                Supervisor delegated task to 3 parallel agents: Research Agent fetched SEC filings, Python Sandbox computed CAGR across 12 quarters, and Critic verified formula outputs. Synthesis validated in 4.2 seconds.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── 4. Sovereign On-Premise vLLM ── */}
      {activeArch === 3 && (
        <div className="av-scene av-voice">
          <div className="av-voice-dark" style={{ background: '#0b0f19' }}>
            <div style={{ textAlign: 'center', padding: '10px 0' }}>
              <div style={{ display: 'inline-block', padding: '8px 16px', background: 'rgba(46,41,255,0.2)', border: '1px solid #2E29FF', borderRadius: '8px', color: '#fff', fontSize: '12px', fontWeight: '800' }}>
                AIR-GAPPED SOVEREIGN AI INFRASTRUCTURE
              </div>
            </div>
            <div className="av-voice-rings">
              <div className="av-ring r1"/>
              <div className="av-ring r2"/>
              <div className="av-ring r3"/>
              <div className="av-mic-icon">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              </div>
            </div>
            <div className="av-voice-label" style={{ color: '#10B981' }}>Zero External Data Egress · Private VPC</div>
          </div>
          <div className="av-voice-light">
            <div className="av-transcript">
              <span className="av-tr-lbl">🔒 Enterprise Security</span>
              <p>Host DeepSeek, Llama 3.3, or Mistral on your own AWS/GCP Kubernetes clusters. No vendor training, no public API token metering, full HIPAA & SOC2 compliance.</p>
            </div>
            <div className="av-tts-reply">
              <span className="av-tr-lbl tts-col">⚡ PagedAttention vLLM</span>
              <p>Continuous batching handles 500+ concurrent requests with sub-18ms time-to-first-token.</p>
            </div>
          </div>
        </div>
      )}

      {/* ── 5. Multimodal Document AI ── */}
      {activeArch === 4 && (
        <div className="av-scene av-hybrid">
          <div className="av-hybrid-col bot-col">
            <div className="av-col-header bot-hdr">
              <span className="av-col-dot"/>
              Scanned File / Vision Input
            </div>
            <div className="av-msg user-msg">Unstructured PDF Invoice #INV-9281 (Messy handwriting, stamped seal)</div>
            <div className="av-msg bot-msg">
              <span className="av-bot-label">Vision OCR</span>
              Extracting bounding boxes, line items, tax IDs & currency tables with spatial coordinates...
            </div>
          </div>

          <div className="av-transfer-lane">
            <div className="av-transfer-pulse"/>
            <svg className="av-transfer-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2E29FF" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </div>

          <div className="av-hybrid-col agent-col">
            <div className="av-col-header agent-hdr">
              <span className="av-col-dot green-dot"/>
              Validated JSON Schema
            </div>
            <div className="av-agent-card">
              <div className="av-agent-avatar">✓</div>
              <div>
                <div className="av-agent-name">Pydantic Schema Validation</div>
                <div className="av-agent-status">● 100% Type-Safe Output</div>
              </div>
            </div>
            <div className="av-msg agent-msg">
              <code>{'{ "vendor": "Apex Logistics", "total": 14250.00, "currency": "USD", "status": "APPROVED" }'}</code>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default function GenAiDevelopment() {
  const [openFaq, setOpenFaq] = useState(0);
  const [activeArch, setActiveArch] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const architectures = [
    {
      title: "Enterprise RAG Pipeline",
      tagline: "Hybrid Vector (HNSW) + Keyword (BM25)",
      badge: "High Accuracy",
      complexity: "High",
      useCases: ["Technical knowledge vaults", "Regulatory compliance search", "Legal document analysis", "Medical literature discovery"],
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
        </svg>
      )
    },
    {
      title: "LoRA Domain Fine-Tuning",
      tagline: "QLoRA Parameter-Efficient Adaptation",
      badge: "Domain Specialized",
      complexity: "High",
      useCases: ["Custom coding styles", "Proprietary dialect matching", "Complex medical nomenclature", "Internal audit protocols"],
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      )
    },
    {
      title: "Multi-Agent LangGraph Swarm",
      tagline: "Stateful Autonomous Task Forces",
      badge: "Autonomous Execution",
      complexity: "Very High",
      useCases: ["Financial report synthesis", "Automated code generation & QA", "Competitor intelligence tracking", "Supply chain disruption analysis"],
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      )
    },
    {
      title: "Sovereign Private vLLM",
      tagline: "Air-Gapped Private VPC Clusters",
      badge: "Zero Data Egress",
      complexity: "High",
      useCases: ["Defense & aerospace data", "HIPAA clinical pipelines", "Banking transaction analysis", "Proprietary trade secrets"],
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
          <line x1="6" y1="6" x2="6.01" y2="6"></line>
          <line x1="6" y1="18" x2="6.01" y2="18"></line>
        </svg>
      )
    },
    {
      title: "Multimodal Document Intelligence",
      tagline: "Vision OCR + Spatial JSON Extractor",
      badge: "Zero Manual Entry",
      complexity: "Medium",
      useCases: ["Accounts payable invoices", "Customs declarations", "Legal contracts & amendments", "Complex blueprint annotations"],
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      )
    }
  ];

  const faqs = [
    {
      q: "What is enterprise Generative AI development, and how does it differ from public ChatGPT?",
      a: "Enterprise Generative AI is custom-engineered around your proprietary data, internal APIs, and specific corporate security policies. Unlike consumer web apps, enterprise AI solutions run through private, secure APIs or air-gapped on-premise infrastructure. They utilize Retrieval-Augmented Generation (RAG) and domain fine-tuning so models answer strictly using your verified business knowledge, without training public models or leaking sensitive intellectual property."
    },
    {
      q: "How do you prevent hallucinations in Generative AI applications?",
      a: "We implement multi-stage deterministic guardrails: 1) Advanced hybrid RAG combining pgvector embeddings with BM25 keyword search, 2) Cross-encoder re-ranking to filter irrelevant noise, 3) Strict system grounding instructions requiring citation of document source IDs, and 4) NeMo Guardrails that validate facts against your knowledge base before returning a response to the user."
    },
    {
      q: "Can we run LLMs on our own private cloud or on-premise servers?",
      a: "Yes. For organizations with strict compliance requirements (HIPAA, SOC 2, defense, or banking), we deploy open-weights models like DeepSeek-R1, Llama 3.3, and Mistral on your private AWS, GCP, or on-premise GPU clusters using vLLM and TensorRT-LLM. Your data never leaves your VPC."
    },
    {
      q: "What is the difference between RAG and fine-tuning, and which one do we need?",
      a: "RAG connects an LLM to dynamic databases so it can look up the latest facts and cite verifiable source documents. Fine-tuning teaches an LLM a specific style, dialect, or strict output format (like complex medical coding or proprietary DSLs). Most successful enterprise projects start with high-accuracy RAG and add LoRA fine-tuning for specialized formatting."
    },
    {
      q: "How do you handle data privacy and ensure our proprietary data isn't used for training?",
      a: "We only use enterprise-tier zero-data-retention (ZDR) API contracts with providers like OpenAI and Anthropic, or self-hosted models running inside your own Kubernetes cluster. We enforce strict SOC2-compliant encryption at rest and in transit, and apply field-level PII masking before tokenization."
    },
    {
      q: "What are autonomous AI agents and LangGraph swarms?",
      a: "AI agents go beyond answering questions — they plan multi-step workflows, call APIs, run SQL queries, execute Python code in sandboxed runtimes, and self-correct errors. Using LangGraph and CrewAI, we build agent swarms that automate complex analytical tasks that previously required multiple human hours."
    },
    {
      q: "What is the typical timeline to build and launch an enterprise Gen AI application?",
      a: "A production-ready Enterprise RAG prototype is typically deployed in 3 to 5 weeks. Complex multi-agent systems, multimodal document parsing engines, or custom fine-tuned models usually take 6 to 10 weeks including rigorous red-teaming, eval benchmarking, and security audits."
    },
    {
      q: "How much does it cost to build and run an enterprise Gen AI solution?",
      a: "Custom engineering sprints range from $12,000 for focused RAG applications to $35,000+ for enterprise multi-agent platforms. Ongoing token and hosting costs are surprisingly economical: by pairing local models with efficient chunking, many clients run production workloads for under $200 to $800/month."
    },
    {
      q: "Do we own the intellectual property and code created for our project?",
      a: "100% yes. NovaDesk gives you full intellectual property ownership. You receive all source code, fine-tuned LoRA adapter weights, prompt pipelines, and deployment scripts. There are zero ongoing license fees or vendor locks."
    },
    {
      q: "How do you benchmark and evaluate LLM accuracy over time?",
      a: "We set up automated evaluation pipelines using tools like Ragas, TruLens, and Langfuse. Every pull request and model version is scored against a golden test dataset for context precision, context recall, faithfulness, and answer relevance."
    }
  ];

  const schemaJson = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Generative AI Development",
      "name": "Enterprise Generative AI Development Services",
      "alternateName": ["Custom LLM Development", "Enterprise RAG Development", "Autonomous AI Agents", "Private AI Model Deployment"],
      "description": "Custom enterprise Generative AI solutions: RAG vector pipelines, private LLM fine-tuning, autonomous LangGraph agent swarms, and secure sovereign AI deployment with 100% IP ownership.",
      "url": "https://www.novadesk.site/services/gen-ai-development",
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
        title="Generative AI Development Services | Enterprise LLM & RAG Solutions | NovaDesk"
        description="Build secure, high-accuracy Generative AI applications for your enterprise. Custom RAG vector vaults, private LLM fine-tuning, autonomous agent swarms, and on-premise vLLM deployment with 100% IP ownership."
        url="/services/gen-ai-development"
        image="https://www.novadesk.site/og-image.png"
        keywords="enterprise generative AI development, custom LLM fine-tuning, enterprise RAG architecture, autonomous AI agents, LangGraph development, private vLLM hosting, pgvector knowledge vault, NovaDesk AI"
        schema={schemaJson}
      />

      <div className="fs-page">

        {/* 1. HERO SECTION */}
        <section className="fs-hero">
          <div className="fs-container fs-hero-grid">
            <div className="fs-hero-text">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(46,41,255,0.08)', border: '1px solid rgba(46,41,255,0.2)', padding: '6px 16px', borderRadius: '40px', fontSize: '11px', fontWeight: '700', color: '#2E29FF', letterSpacing: '0.8px', textTransform: 'uppercase', marginBottom: '20px' }}>
                Enterprise Generative AI Studio
              </div>
              <h1 className="fs-hero-title">
                Generative AI Built for <span className="fs-text-blue">Real Business Workflows</span>
              </h1>
              <p className="fs-hero-desc" style={{ marginBottom: '38px' }}>
                Transform unstructured enterprise documents, databases, and repetitive workflows into grounded, high-accuracy AI tools. We engineer private RAG pipelines, autonomous agent swarms, and sovereign on-premise LLMs with zero vendor lock-in.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '36px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
                  <Link to="/contact-us" className="fs-btn fs-btn-primary" style={{ height: '52px', padding: '0 28px', borderRadius: '12px', fontSize: '15px', fontWeight: '700', boxShadow: '0 8px 20px rgba(46, 41, 255, 0.25)' }}>
                    Book Architecture Consultation <ArrowRight />
                  </Link>
                  <Link to="/case-studies" className="fs-btn" style={{ height: '52px', padding: '0 26px', borderRadius: '12px', fontSize: '15px', fontWeight: '700', backgroundColor: '#0B0F19', color: '#ffffff', border: 'none', textDecoration: 'none' }}>
                    Explore Case Studies →
                  </Link>
                </div>

                <div style={{ fontSize: '13.5px', color: '#475569', display: 'flex', flexWrap: 'wrap', gap: '22px', fontWeight: '600', marginTop: '6px', alignItems: 'center' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <HeroCheckBadge /> 100% Code & Weights Ownership
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <HeroCheckBadge /> Zero Public Data Egress
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <HeroCheckBadge /> Sub-Second Hybrid Vector Search
                  </span>
                </div>
              </div>
            </div>

            <HeroGenAiAnimation />
          </div>
        </section>

        {/* TRUST ACCREDITATION TICKER & ROYAL BLUE METRICS SECTION */}
        <section className="fs-agency-alt">
          <div className="nd-ticker-wrap">
            <div className="nd-ticker">
              <div className="nd-ticker-track">
                {[...Array(2)].map((_, idx) => (
                  <div key={idx} className="nd-ticker-group">
                    <span>✦ ENTERPRISE RAG PIPELINES</span>
                    <span>✦ PRIVATE VLLM HOSTING</span>
                    <span>✦ AUTONOMOUS LANGGRAPH AGENTS</span>
                    <span>✦ HYBRID PGVECTOR SEARCH</span>
                    <span>✦ GROUNDED MULTI-MODAL MODELS</span>
                    <span>✦ 100% IP & WEIGHT OWNERSHIP</span>
                    <span>✦ ZERO PUBLIC DATA EGRESS</span>
                    <span>✦ GUARANTEED SUB-SECOND SLA</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="fs-agency-alt-bg">
            <div className="nd-intro">
              <div className="nd-intro-inner">
                <div className="nd-intro-text">
                  <h2>Built for enterprises that demand <em>grounded, verifiable reasoning</em></h2>
                  <p>Skip generic prompts and hallucinated wrappers. We engineer high-precision enterprise generative architectures anchored to private databases with deterministic guardrails.</p>
                </div>
                <div className="nd-intro-stats">
                  <div className="nd-intro-stat">
                    <div className="nd-intro-stat-num">&lt;0.8<sub>s</sub></div>
                    <div className="nd-intro-stat-label">Time to First Token</div>
                  </div>
                  <div className="nd-intro-divider" />
                  <div className="nd-intro-stat">
                    <div className="nd-intro-stat-num">99.4<sub>%</sub></div>
                    <div className="nd-intro-stat-label">Citation Groundedness</div>
                  </div>
                  <div className="nd-intro-divider" />
                  <div className="nd-intro-stat">
                    <div className="nd-intro-stat-num">100<sub>%</sub></div>
                    <div className="nd-intro-stat-label">Weights & IP Ownership</div>
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
                  <div>Custom-Built,<br/>Fully Owned Weights</div>
                </div>
                <div className="fs-usp-box">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z"/>
                  </svg>
                  <div>Hybrid Vector Search<br/>& Dense Re-Ranking</div>
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
                  <div>Continuous Evals<br/>& Ragas Benchmarking</div>
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
            <h2 className="fs-section-title">The Foundation of Enterprise Reasoning</h2>
            <p className="fs-section-subtitle">
              Generative AI is not about generic prompts. It is about connecting foundational models to your private corporate knowledge vaults, establishing deterministic guardrails, and automating complex decision chains.
            </p>

            <div style={{ marginTop: '48px' }}>
              <h3 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '12px', color: '#0b0f19' }}>
                Generative AI Architectures We Deploy
              </h3>
              <p style={{ fontSize: '15px', color: '#64748b', marginBottom: '32px', fontWeight: '500' }}>
                Select an architecture below to explore its data topology, latency metrics, and enterprise use cases.
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
                          <span style={{ color: architectures[activeArch].complexity === 'Very High' || architectures[activeArch].complexity === 'High' ? '#EA4335' : '#FBBC05' }}>
                            {architectures[activeArch].complexity}
                          </span>
                        </div>
                      </div>
                      <h3>{architectures[activeArch].title}</h3>
                      <div className="fs-overview-preview-tagline" style={{ marginBottom: '16px' }}>{architectures[activeArch].tagline}</div>
                    </div>

                    <ArchVizGenAi activeArch={activeArch} />

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
                  What Makes an Enterprise Gen AI Project Succeed
                </h3>
                <ul className="fs-split-list">
                  <li className="fs-split-item">
                    <div className="fs-split-item-icon"><CheckCircle /></div>
                    <div><strong>Hybrid Dense + Sparse Search:</strong> Combining HNSW vector search with BM25 keyword matching to prevent missing crucial domain acronyms and exact serial numbers.</div>
                  </li>
                  <li className="fs-split-item">
                    <div className="fs-split-item-icon"><CheckCircle /></div>
                    <div><strong>Cross-Encoder Re-Ranking:</strong> Scoring retrieved chunks with Cohere/BGE re-rankers to discard irrelevant background noise before prompting the LLM.</div>
                  </li>
                  <li className="fs-split-item">
                    <div className="fs-split-item-icon"><CheckCircle /></div>
                    <div><strong>Automated Golden Evals:</strong> Continuous testing against ground-truth QA datasets using Ragas to measure faithfulness and context precision on every deployment.</div>
                  </li>
                  <li className="fs-split-item">
                    <div className="fs-split-item-icon"><CheckCircle /></div>
                    <div><strong>Deterministic Guardrails:</strong> NeMo guardrails and PII scrubbers intercepting inputs/outputs to guarantee compliance and block prompt injections.</div>
                  </li>
                  <li className="fs-split-item">
                    <div className="fs-split-item-icon"><CheckCircle /></div>
                    <div><strong>Sub-Second Latency Architecture:</strong> Streaming token responses over WebSockets with speculative decoding and vLLM continuous batching.</div>
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
                  Why Generic LLM Wrappers Fail (And How to Avoid It)
                </h3>
                <ul className="fs-split-list">
                  <li className="fs-split-item">
                    <div className="fs-split-item-icon" style={{ background: 'rgba(234, 67, 53, 0.1)', color: '#EA4335', fontWeight: 'bold' }}>✕</div>
                    <div><strong>Unanchored Hallucinations:</strong> Naive vector search returns generic fragments, causing the model to invent plausible-sounding false answers.</div>
                  </li>
                  <li className="fs-split-item">
                    <div className="fs-split-item-icon" style={{ background: 'rgba(234, 67, 53, 0.1)', color: '#EA4335', fontWeight: 'bold' }}>✕</div>
                    <div><strong>Data Sovereignty Leaks:</strong> Transmitting unmasked PII and sensitive trade secrets through consumer-grade public API endpoints.</div>
                  </li>
                  <li className="fs-split-item">
                    <div className="fs-split-item-icon" style={{ background: 'rgba(234, 67, 53, 0.1)', color: '#EA4335', fontWeight: 'bold' }}>✕</div>
                    <div><strong>Astronomical Token Inefficiencies:</strong> Dumping entire PDF files into context windows instead of semantic chunking, causing massive monthly bills.</div>
                  </li>
                  <li className="fs-split-item">
                    <div className="fs-split-item-icon" style={{ background: 'rgba(234, 67, 53, 0.1)', color: '#EA4335', fontWeight: 'bold' }}>✕</div>
                    <div><strong>Fragile Prompt Chaining:</strong> Building multi-step logic on brittle strings rather than stateful LangGraph agent control planes.</div>
                  </li>
                  <li className="fs-split-item">
                    <div className="fs-split-item-icon" style={{ background: 'rgba(234, 67, 53, 0.1)', color: '#EA4335', fontWeight: 'bold' }}>✕</div>
                    <div><strong>Zero Verifiable Citations:</strong> Producing responses without line-item page and paragraph references, making enterprise compliance impossible.</div>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* 3. WHY CHOOSE US SECTION (EXACT STICKY SPOTLIGHT + DIFFERENTIATORS + SPLIT COMPARISON) */}
        <section className="fs-section">
          <div className="fs-container">
            <div className="fs-tag-arrows">WHY CHOOSE US</div>

            <div className="fs-why-us-grid">
              <div className="fs-why-us-sticky">
                <h2 className="fs-section-title" style={{ marginBottom: '24px' }}>
                  An Engineering-First Generative AI Partner
                </h2>
                <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.65' }}>
                  There is no shortage of shallow SaaS wrappers. NovaDesk differentiates itself by engineering custom enterprise software, deterministic security boundaries, and sovereign model architectures.
                </p>

                <div className="fs-value-spotlight">
                  <h4>The NovaDesk Promise</h4>
                  <ul className="fs-spotlight-list">
                    <li className="fs-spotlight-item">
                      <CheckCircle />
                      <span>100% Source Code & Adapter Weights</span>
                    </li>
                    <li className="fs-spotlight-item">
                      <CheckCircle />
                      <span>No Proprietary Vendor Platform Lock-In</span>
                    </li>
                    <li className="fs-spotlight-item">
                      <CheckCircle />
                      <span>Direct Developer Slack & Video Channels</span>
                    </li>
                    <li className="fs-spotlight-item">
                      <CheckCircle />
                      <span>Strict SOC 2 & HIPAA Compliance</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="fs-differentiators-stack">
                <div className="fs-diff-row">
                  <div className="fs-diff-number">01</div>
                  <div className="fs-diff-content">
                    <h3>Deterministic Grounding First</h3>
                    <p>We eliminate guesswork. Models answer exclusively from verified internal document indexes with line-item page and paragraph citations.</p>
                  </div>
                </div>
                <div className="fs-diff-row">
                  <div className="fs-diff-number">02</div>
                  <div className="fs-diff-content">
                    <h3>Sovereign On-Premise Infrastructure</h3>
                    <p>Host open-weights foundation models (DeepSeek-R1, Llama 3.3) on your own AWS/GCP Kubernetes clusters with zero external network egress.</p>
                  </div>
                </div>
                <div className="fs-diff-row">
                  <div className="fs-diff-number">03</div>
                  <div className="fs-diff-content">
                    <h3>Continuous Evaluation (CI/CD for AI)</h3>
                    <p>Every pull request is scored against golden evaluation datasets via Ragas and TruLens to benchmark accuracy and faithfulness.</p>
                  </div>
                </div>
                <div className="fs-diff-row">
                  <div className="fs-diff-number">04</div>
                  <div className="fs-diff-content">
                    <h3>Stateful Multi-Agent Workflows</h3>
                    <p>Move beyond linear prompts. LangGraph swarms execute complex multi-step research, Python data analysis, and validation autonomously.</p>
                  </div>
                </div>
                <div className="fs-diff-row">
                  <div className="fs-diff-number">05</div>
                  <div className="fs-diff-content">
                    <h3>Production Latency Engineering</h3>
                    <p>We optimize token generation speed using vLLM continuous batching, PagedAttention, and streaming WebSockets for sub-18ms TTFT.</p>
                  </div>
                </div>
                <div className="fs-diff-row">
                  <div className="fs-diff-number">06</div>
                  <div className="fs-diff-content">
                    <h3>Post-Launch Continuous Evals</h3>
                    <p>We establish active Langfuse telemetry to detect real-time semantic drift, catch edge-case errors, and continuously retrain LoRA adapters.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Comparison Split */}
            <div className="fs-comparison-split">
              <div className="fs-comp-card fs-comp-card-cookie">
                <div className="fs-comp-header">
                  <span className="fs-comp-badge">Generic SaaS / Low-Code</span>
                  <h3>Fragile API Wrappers</h3>
                  <p>Shallow wrappers that break under real enterprise compliance loads.</p>
                </div>
                <div className="fs-comp-list">
                  <div className="fs-comp-item">
                    <span className="fs-comp-item-icon">✕</span>
                    <div><strong>High Hallucination Rates:</strong> Unfiltered prompts answer from general web memory rather than verified enterprise files.</div>
                  </div>
                  <div className="fs-comp-item">
                    <span className="fs-comp-item-icon">✕</span>
                    <div><strong>Data Privacy Risks:</strong> Prompts transit multi-tenant third-party proxy servers without zero-data-retention guarantees.</div>
                  </div>
                  <div className="fs-comp-item">
                    <span className="fs-comp-item-icon">✕</span>
                    <div><strong>Per-Seat Subscriptions:</strong> Software costs inflate punitively with employee headcount rather than actual compute usage.</div>
                  </div>
                  <div className="fs-comp-item">
                    <span className="fs-comp-item-icon">✕</span>
                    <div><strong>No Source Citations:</strong> Outputs lack verifiable file and paragraph references, failing basic compliance audits.</div>
                  </div>
                  <div className="fs-comp-item">
                    <span className="fs-comp-item-icon">✕</span>
                    <div><strong>No Model Fine-Tuning:</strong> Restricted to generic system prompts without the ability to adapt model weights to domain terminology.</div>
                  </div>
                  <div className="fs-comp-item">
                    <span className="fs-comp-item-icon">✕</span>
                    <div><strong>Proprietary Lock-In:</strong> If you leave the SaaS platform, all prompts, conversation history, and workflows are permanently lost.</div>
                  </div>
                </div>
              </div>

              <div className="fs-comp-card fs-comp-card-custom">
                <div className="fs-comp-header">
                  <span className="fs-comp-badge">The NovaDesk Way</span>
                  <h3>Custom Grounded Systems</h3>
                  <p>Enterprise-grade architectures engineered for accuracy, sovereignty, and longevity.</p>
                </div>
                <div className="fs-comp-list">
                  <div className="fs-comp-item">
                    <span className="fs-comp-item-icon">✓</span>
                    <div><strong>Deterministic Grounding:</strong> Hybrid vector + BM25 search with cross-encoders ensures models only answer from verified data.</div>
                  </div>
                  <div className="fs-comp-item">
                    <span className="fs-comp-item-icon">✓</span>
                    <div><strong>Private VPC / Air-Gapped:</strong> Deploy inside your AWS/GCP clusters with zero external network data egress.</div>
                  </div>
                  <div className="fs-comp-item">
                    <span className="fs-comp-item-icon">✓</span>
                    <div><strong>100% Code & Weight Ownership:</strong> You own all source code, LoRA adapter weights, prompt pipelines, and vector schemas.</div>
                  </div>
                  <div className="fs-comp-item">
                    <span className="fs-comp-item-icon">✓</span>
                    <div><strong>Verifiable Citation Trails:</strong> Every synthesized sentence references the exact file name, page number, and paragraph block.</div>
                  </div>
                  <div className="fs-comp-item">
                    <span className="fs-comp-item-icon">✓</span>
                    <div><strong>QLoRA Domain Adaptation:</strong> Specialized 4-bit adapter weights fine-tuned on your internal syntax and protocols.</div>
                  </div>
                  <div className="fs-comp-item">
                    <span className="fs-comp-item-icon">✓</span>
                    <div><strong>Zero Recurring License Tax:</strong> Pay only for your raw server infrastructure with zero per-seat software fees.</div>
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
            <h2 className="fs-section-title">Enterprise-Grade Features for Mission-Critical Gen AI</h2>
            <p className="fs-section-subtitle">
              We construct custom Generative AI applications equipped with advanced operational capabilities to handle complex business use cases.
            </p>

            <div className="fs-bento-grid">
              {/* Card 1: Advanced Semantic Chunking & Re-Ranking (Wide - 2 Cols) */}
              <div className="fs-bento-card fs-bento-col-2">
                <div className="fs-bento-card-badge">Hybrid RAG</div>
                <h3>Advanced Semantic Chunking & Re-Ranking</h3>
                <p>We preserve tables, header hierarchies, and spatial schemas across complex documents. Cross-encoder re-rankers filter the top 50 passages down to the exact relevant context.</p>

                <div style={{ marginTop: '20px', background: '#f8fafc', padding: '16px', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.05)', fontSize: '13px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ fontWeight: '700', color: '#2E29FF' }}>Semantic Chunker: ParentDocumentRetriever</span>
                    <span style={{ fontSize: '11px', background: '#e2e8f0', padding: '2px 8px', borderRadius: '4px' }}>Chunk Size: 512 tokens</span>
                  </div>
                  <code style={{ fontSize: '12px', color: '#0f172a', display: 'block', background: '#ffffff', padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1' }}>
                    Matched: 10-K_Report.pdf (Section 4.2 - Multi-Tenant SLA) ➔ Cross-Encoder Score: 0.984
                  </code>
                </div>
              </div>

              {/* Card 2: Multi-Model Routing (Regular - 1 Col) */}
              <div className="fs-bento-card">
                <div className="fs-bento-card-badge" style={{ background: 'rgba(52,168,83,0.05)', color: '#34A853' }}>Dynamic Routing</div>
                <h3>Intelligent Model Routing</h3>
                <p>Route simple lookups to fast local models and complex multi-step reasoning to frontier reasoning engines, reducing token costs by up to 65%.</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '16px' }}>
                  <span className="fs-bento-channel-badge">Claude 3.7</span>
                  <span className="fs-bento-channel-badge">GPT-4o</span>
                  <span className="fs-bento-channel-badge">DeepSeek-R1</span>
                  <span className="fs-bento-channel-badge">Llama 3.3</span>
                </div>
              </div>

              {/* Card 3: Vector Storage Matrix (Regular - 1 Col) */}
              <div className="fs-bento-card">
                <div className="fs-bento-card-badge" style={{ background: 'rgba(251,188,5,0.08)', color: '#D97706' }}>Vector DBs</div>
                <h3>Enterprise Vector Stores</h3>
                <p>Native integration with high-throughput vector databases supporting HNSW indexing and metadata filtering.</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '16px' }}>
                  <span className="fs-lang-pill">pgvector</span>
                  <span className="fs-lang-pill">Pinecone</span>
                  <span className="fs-lang-pill">Qdrant</span>
                  <span className="fs-lang-pill">Milvus</span>
                </div>
              </div>

              {/* Card 4: Hallucination Guardrails (Wide - 2 Cols) */}
              <div className="fs-bento-card fs-bento-col-2">
                <div className="fs-bento-card-badge" style={{ background: 'rgba(234,67,53,0.05)', color: '#EA4335' }}>Safety Firewall</div>
                <h3>Enterprise Guardrails & PII Sanitization</h3>
                <p>Automated NeMo guardrails intercept prompts in real time, masking Social Security Numbers, credit cards, and proprietary source code while blocking prompt injection attacks.</p>

                <div style={{ marginTop: '20px', background: '#f8fafc', padding: '14px 18px', borderRadius: '12px', border: '1px dashed rgba(234,67,53,0.3)', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12.5px' }}>
                  <div style={{ color: '#EA4335', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: '#EA4335' }}></span>
                    Security Interceptor: Sanitized 2 PII entities (Tax ID, Employee Phone) before LLM inference.
                  </div>
                </div>
              </div>

              {/* Card 5: Stateful Multi-Turn Memory */}
              <div className="fs-bento-card">
                <div className="fs-bento-card-badge">Stateful Memory</div>
                <h3>Contextual Session Cache</h3>
                <p>Redis-powered multi-turn conversation caching preserves context across hours of user interaction without context window overflows.</p>
                <div style={{ marginTop: '12px' }}>
                  <span className="fs-lang-pill" style={{ background: 'rgba(46,41,255,0.08)', color: '#2E29FF' }}>TTL Managed Redis Cache</span>
                </div>
              </div>

              {/* Card 6: Continuous Eval Observability */}
              <div className="fs-bento-card">
                <div className="fs-bento-card-badge">Observability</div>
                <h3>Langfuse Telemetry</h3>
                <p>Full observability across token costs, latency traces, confidence scores, and user feedback down to the individual request.</p>
                <div style={{ marginTop: '12px' }}>
                  <span className="fs-lang-pill" style={{ background: 'rgba(16,185,129,0.08)', color: '#10B981' }}>Live Request Tracing</span>
                </div>
              </div>

              {/* Card 7: Air-Gapped Private VPC (Wide - 2 Cols) */}
              <div className="fs-bento-card fs-bento-col-2">
                <div className="fs-bento-card-badge">Strict Compliance</div>
                <h3>Air-Gapped Sovereign Deployment</h3>
                <p>Host models inside your private AWS VPC, GCP, or on-premise Kubernetes clusters. Zero external token metering, complete immunity from cloud outages, and full HIPAA/SOC2 compliance.</p>
                <div style={{ display: 'flex', gap: '8px', marginTop: '14px' }}>
                  <span className="fs-bento-channel-badge">AWS EKS</span>
                  <span className="fs-bento-channel-badge">Google GKE</span>
                  <span className="fs-bento-channel-badge">On-Premises GPUs</span>
                </div>
              </div>

              {/* Card 8: Structured JSON Schema Extraction (Wide - 2 Cols) */}
              <div className="fs-bento-card fs-bento-col-2">
                <div className="fs-bento-card-badge">Type Safety</div>
                <h3>Guaranteed JSON Schema Outputs</h3>
                <p>Models output strictly validated Pydantic and JSON Schema structures with zero markdown syntax errors, ready for direct database ingestion.</p>
                <div style={{ marginTop: '12px', background: '#0b0f19', color: '#38bdf8', padding: '10px 14px', borderRadius: '8px', fontSize: '11px', fontFamily: 'monospace' }}>
                  {'{ "status": "PARSED", "confidence": 0.998, "schema_valid": true }'}
                </div>
              </div>
            </div>

            {/* Feature Comparison Matrix Table */}
            <div style={{ marginTop: '60px' }}>
              <h3 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '20px', color: '#0b0f19' }}>
                Architecture Comparison: Basic Wrappers vs NovaDesk Enterprise Systems
              </h3>
              <div className="fs-table-container">
                <table className="fs-table">
                  <thead>
                    <tr>
                      <th>Capability</th>
                      <th>Consumer AI / Basic Wrapper</th>
                      <th>Generic SaaS Tool</th>
                      <th>NovaDesk Enterprise Gen AI</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Data Privacy & Egress</strong></td>
                      <td>Public training pool</td>
                      <td>Third-party multi-tenant cloud</td>
                      <td><span className="fs-lang-pill" style={{ background: 'rgba(52,168,83,0.1)', color: '#34A853' }}>100% Private VPC / Air-Gapped</span></td>
                    </tr>
                    <tr>
                      <td><strong>Hallucination Defense</strong></td>
                      <td>Zero grounding controls</td>
                      <td>Basic vector search</td>
                      <td><span className="fs-lang-pill" style={{ background: 'rgba(52,168,83,0.1)', color: '#34A853' }}>Hybrid RAG + Re-Ranker + NeMo</span></td>
                    </tr>
                    <tr>
                      <td><strong>Verifiable Citations</strong></td>
                      <td>None</td>
                      <td>Generic document name</td>
                      <td><span className="fs-lang-pill" style={{ background: 'rgba(52,168,83,0.1)', color: '#34A853' }}>Line-item page & paragraph tags</span></td>
                    </tr>
                    <tr>
                      <td><strong>Code & Model IP</strong></td>
                      <td>Vendor owned</td>
                      <td>Proprietary platform locked</td>
                      <td><span className="fs-lang-pill" style={{ background: 'rgba(52,168,83,0.1)', color: '#34A853' }}>100% Client IP Ownership</span></td>
                    </tr>
                    <tr>
                      <td><strong>Domain Fine-Tuning</strong></td>
                      <td>Not supported</td>
                      <td>Prompt templates only</td>
                      <td><span className="fs-lang-pill" style={{ background: 'rgba(52,168,83,0.1)', color: '#34A853' }}>QLoRA Adapter Weights</span></td>
                    </tr>
                    <tr>
                      <td><strong>Latency & Serving</strong></td>
                      <td>1.5s - 4.0s (Rate limited)</td>
                      <td>800ms - 2.0s</td>
                      <td><span className="fs-lang-pill" style={{ background: 'rgba(52,168,83,0.1)', color: '#34A853' }}>Sub-18ms TTFT (vLLM PagedAttention)</span></td>
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
              Deploying custom Generative AI allows enterprises to eliminate manual research bottlenecks, automate document intake, and reduce operational overhead.
            </p>

            <div className="fs-grid-3">
              <div className="fs-card-premium">
                <h3>82% Faster Knowledge Retrieval</h3>
                <p>Engineers, paralegals, and analysts query millions of internal pages and receive grounded answers in seconds rather than digging through static wikis.</p>
              </div>
              <div className="fs-card-premium">
                <h3>94% Automated Document Intake</h3>
                <p>Eliminate manual data entry. Invoices, claims, legal contracts, and medical records are parsed directly into database schemas with validation.</p>
              </div>
              <div className="fs-card-premium">
                <h3>$0 Vendor Seat Taxation</h3>
                <p>Ditch expensive per-seat software licenses. Deploy custom private infrastructure where costs scale with compute usage rather than headcount.</p>
              </div>
              <div className="fs-card-premium">
                <h3>Zero Human Hallucination Risk</h3>
                <p>Strict cross-encoder re-ranking and verifiable citation trails guarantee that every statement is grounded in your verified corporate files.</p>
              </div>
              <div className="fs-card-premium">
                <h3>Autonomous Agent Execution</h3>
                <p>Multi-agent LangGraph workflows handle end-to-end task chains: planning, data querying, code execution, validation, and database updates.</p>
              </div>
              <div className="fs-card-premium">
                <h3>Sovereign Regulatory Immunity</h3>
                <p>Comply with strict HIPAA, GDPR, and defense data regulations by keeping all model weights and embeddings within your private cloud perimeter.</p>
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
                      <td><strong>Document Intake Automation</strong></td>
                      <td>Reduces manual data entry time by over 90% while cutting error rates to near zero.</td>
                    </tr>
                    <tr>
                      <td><strong>Cross-Repository Search</strong></td>
                      <td>Unifies data trapped across Google Drive, Notion, PostgreSQL, and PDF archives into one instant interface.</td>
                    </tr>
                    <tr>
                      <td><strong>Compute Cost Efficiency</strong></td>
                      <td>Cuts API expenses by up to 65% through intelligent model routing and prompt context compression.</td>
                    </tr>
                    <tr>
                      <td><strong>Autonomous Analysis Sprints</strong></td>
                      <td>Multi-agent teams conduct research and financial modeling in minutes that previously required days of analyst time.</td>
                    </tr>
                    <tr>
                      <td><strong>Full Intellectual Property Rights</strong></td>
                      <td>Zero platform dependency risk; all code, weights, prompts, and embeddings remain your company assets.</td>
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
                <h2>A Structured Methodology for Launching Enterprise Gen AI</h2>
              </div>
              <div className="fs-process-header-right">
                <p>
                  We eliminate technical debt by following an evaluation-first engineering process from initial data audit to production telemetry.
                </p>
              </div>
            </div>

            <div className="fs-timeline-blue">
              <div className="fs-timeline-item-blue">
                <div className="fs-timeline-dot-blue"></div>
                <div className="fs-timeline-content-blue">
                  <span className="fs-timeline-step-badge">STEP 01</span>
                  <h3>Discovery & Data Readiness Audit</h3>
                  <p>In-depth audit of knowledge repositories, document schemas, API tokens, and compliance boundaries. We establish quantitative golden eval datasets.</p>
                </div>
              </div>
              <div className="fs-timeline-item-blue">
                <div className="fs-timeline-dot-blue"></div>
                <div className="fs-timeline-content-blue">
                  <span className="fs-timeline-step-badge">STEP 02</span>
                  <h3>Architecture & Security Blueprinting</h3>
                  <p>Selecting optimal model topologies (cloud API vs sovereign private vLLM), designing chunking strategies, and drafting deterministic safety guardrails.</p>
                </div>
              </div>
              <div className="fs-timeline-item-blue">
                <div className="fs-timeline-dot-blue"></div>
                <div className="fs-timeline-content-blue">
                  <span className="fs-timeline-step-badge">STEP 03</span>
                  <h3>Vector Indexing & Hybrid Ingestion</h3>
                  <p>We build automated ingestion pipelines that parse documents, generate high-dimensional embeddings, and create hybrid pgvector + BM25 indexes.</p>
                </div>
              </div>
              <div className="fs-timeline-item-blue">
                <div className="fs-timeline-dot-blue"></div>
                <div className="fs-timeline-content-blue">
                  <span className="fs-timeline-step-badge">STEP 04</span>
                  <h3>Agent & Prompt Graph Orchestration</h3>
                  <p>Developing stateful LangGraph execution graphs, system prompt architectures, tool-calling interfaces, and Pydantic schema output validators.</p>
                </div>
              </div>
              <div className="fs-timeline-item-blue">
                <div className="fs-timeline-dot-blue"></div>
                <div className="fs-timeline-content-blue">
                  <span className="fs-timeline-step-badge">STEP 05</span>
                  <h3>Red-Teaming & Guardrail Hardening</h3>
                  <p>Executing automated adversarial prompt injection attacks, verifying PII masking filters, and calibrating NeMo hallucination detectors.</p>
                </div>
              </div>
              <div className="fs-timeline-item-blue">
                <div className="fs-timeline-dot-blue"></div>
                <div className="fs-timeline-content-blue">
                  <span className="fs-timeline-step-badge">STEP 06</span>
                  <h3>Staging Benchmark Validation (CI/CD)</h3>
                  <p>Running golden evaluation datasets through Ragas and TruLens to benchmark faithfulness, answer relevancy, and context recall prior to release.</p>
                </div>
              </div>
              <div className="fs-timeline-item-blue">
                <div className="fs-timeline-dot-blue"></div>
                <div className="fs-timeline-content-blue">
                  <span className="fs-timeline-step-badge">STEP 07</span>
                  <h3>Production Deployment & Live Telemetry</h3>
                  <p>Zero-downtime release with Langfuse real-time latency tracing, token cost monitoring, automated alerting, and continuous LoRA retraining.</p>
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
                      <td style={{ color: '#0b0f19', borderBottom: '1px solid #e2e8f0' }}><strong>Discovery & Scoping</strong></td>
                      <td style={{ color: '#475569', borderBottom: '1px solid #e2e8f0' }}>Data readiness audit, golden test set creation, compliance definition</td>
                      <td style={{ borderBottom: '1px solid #e2e8f0' }}><span className="fs-lang-pill" style={{ background: '#f1f5f9', color: '#0b0f19', border: '1px solid #cbd5e1' }}>1–2 weeks</span></td>
                    </tr>
                    <tr>
                      <td style={{ color: '#0b0f19', borderBottom: '1px solid #e2e8f0' }}><strong>Vector Indexing & RAG</strong></td>
                      <td style={{ color: '#475569', borderBottom: '1px solid #e2e8f0' }}>Document ingestion, chunk optimization, pgvector/HNSW configuration</td>
                      <td style={{ borderBottom: '1px solid #e2e8f0' }}><span className="fs-lang-pill" style={{ background: '#f1f5f9', color: '#0b0f19', border: '1px solid #cbd5e1' }}>1–3 weeks</span></td>
                    </tr>
                    <tr>
                      <td style={{ color: '#0b0f19', borderBottom: '1px solid #e2e8f0' }}><strong>Agent / Model Tuning</strong></td>
                      <td style={{ color: '#475569', borderBottom: '1px solid #e2e8f0' }}>LangGraph state machine build, tool calling hooks, QLoRA adapter training</td>
                      <td style={{ borderBottom: '1px solid #e2e8f0' }}><span className="fs-lang-pill" style={{ background: 'rgba(46,41,255,0.08)', color: '#2E29FF', border: '1px solid rgba(46,41,255,0.2)' }}>2–4 weeks</span></td>
                    </tr>
                    <tr>
                      <td style={{ color: '#0b0f19', borderBottom: '1px solid #e2e8f0' }}><strong>Red-Teaming & Evals</strong></td>
                      <td style={{ color: '#475569', borderBottom: '1px solid #e2e8f0' }}>Adversarial penetration tests, PII scrubbing, Ragas accuracy scoring</td>
                      <td style={{ borderBottom: '1px solid #e2e8f0' }}><span className="fs-lang-pill" style={{ background: '#f1f5f9', color: '#0b0f19', border: '1px solid #cbd5e1' }}>1–2 weeks</span></td>
                    </tr>
                    <tr>
                      <td style={{ color: '#0b0f19', borderBottom: '1px solid #e2e8f0' }}><strong>Production Rollout</strong></td>
                      <td style={{ color: '#475569', borderBottom: '1px solid #e2e8f0' }}>Zero-downtime deployment, vLLM continuous batching, Langfuse monitoring</td>
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
                    <div><strong>Weekly Working Demos:</strong> Review working RAG prototypes and agent traces every week.</div>
                  </div>
                  <div className="fs-track-item-blue">
                    <div style={{ background: 'rgba(52,168,83,0.15)', color: '#34A853', borderRadius: '50%', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '800', flexShrink: 0 }}>✓</div>
                    <div><strong>Live Eval Dashboards:</strong> Real-time access to automated Ragas accuracy scores on golden test sets.</div>
                  </div>
                  <div className="fs-track-item-blue">
                    <div style={{ background: 'rgba(52,168,83,0.15)', color: '#34A853', borderRadius: '50%', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '800', flexShrink: 0 }}>✓</div>
                    <div><strong>Direct Developer Slack:</strong> Real-time engineering communication with zero account manager telephone games.</div>
                  </div>
                  <div className="fs-track-item-blue">
                    <div style={{ background: 'rgba(52,168,83,0.15)', color: '#34A853', borderRadius: '50%', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '800', flexShrink: 0 }}>✓</div>
                    <div><strong>Rollback Safeguards:</strong> Immutable git commits and adapter checkpoints for zero-risk production deploys.</div>
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
                    <div><strong>Sample Documentation:</strong> Clean or messy, internal PDFs, wikis, and guidelines to seed the vector vault.</div>
                  </div>
                  <div className="fs-track-item-blue">
                    <div style={{ background: 'rgba(96,165,250,0.15)', color: '#60A5FA', borderRadius: '50%', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '800', flexShrink: 0 }}>✦</div>
                    <div><strong>Domain Subject Matter Expert:</strong> A key point of contact to clarify specialized industry acronyms.</div>
                  </div>
                  <div className="fs-track-item-blue">
                    <div style={{ background: 'rgba(96,165,250,0.15)', color: '#60A5FA', borderRadius: '50%', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '800', flexShrink: 0 }}>✦</div>
                    <div><strong>API & Cloud Access:</strong> Sandbox access to target AWS/GCP clusters or databases.</div>
                  </div>
                  <div className="fs-track-item-blue">
                    <div style={{ background: 'rgba(96,165,250,0.15)', color: '#60A5FA', borderRadius: '50%', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '800', flexShrink: 0 }}>✦</div>
                    <div><strong>Timely Review Feedback:</strong> Active validation during conversation flow and acceptance testing.</div>
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
            <h2 className="fs-section-title">Generative AI Tailored to Your Sector</h2>
            <p className="fs-section-subtitle">
              We design generative architectures configured to meet the unique compliance guidelines, data formats, and latency requirements of your industry.
            </p>

            <div className="fs-grid-3" style={{ marginBottom: '60px' }}>
              <div className="fs-card-premium">
                <h3>Banking & Fintech</h3>
                <p>Automate fraud investigation memos, parse loan documentation, conduct AML screening, and generate investment analysis briefs with strict audit logging.</p>
              </div>
              <div className="fs-card-premium">
                <h3>Healthcare & Life Sciences</h3>
                <p>Extract clinical pathology biomarkers into FHIR schemas, synthesize clinical trial data, and build HIPAA-compliant internal doctor research assistants.</p>
              </div>
              <div className="fs-card-premium">
                <h3>Legal & Compliance</h3>
                <p>Redline massive contracts in seconds, identify non-standard indemnification clauses, and cite precedent court filings with exact page citations.</p>
              </div>
              <div className="fs-card-premium">
                <h3>E-Commerce & Retail</h3>
                <p>Generate hyper-personalized product descriptions, automate vendor catalog onboarding, and deploy conversational shopping recommendation assistants.</p>
              </div>
              <div className="fs-card-premium">
                <h3>Logistics & Supply Chain</h3>
                <p>Parse complex customs declarations, extract shipping manifests, optimize freight schedules, and predict supply chain bottleneck disruptions.</p>
              </div>
              <div className="fs-card-premium">
                <h3>Enterprise SaaS</h3>
                <p>Embed native in-app AI copilots, automate customer ticket deflection, and generate SQL analytics queries directly from natural language.</p>
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
                      <th>Common Generative AI Use Cases</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Banking & Fintech</strong></td>
                      <td>Credit risk memo generation, KYC verification, anti-money laundering anomaly detection.</td>
                    </tr>
                    <tr>
                      <td><strong>Healthcare</strong></td>
                      <td>Clinical trial patient matching, radiology report synthesis, HIPAA doctor intake forms.</td>
                    </tr>
                    <tr>
                      <td><strong>Legal & Contracts</strong></td>
                      <td>Automated contract redlining, compliance audit cross-checks, patent prior art discovery.</td>
                    </tr>
                    <tr>
                      <td><strong>Manufacturing & Hardware</strong></td>
                      <td>CAD blueprint extraction, equipment maintenance troubleshooting, bill of materials validation.</td>
                    </tr>
                    <tr>
                      <td><strong>E-Commerce & Retail</strong></td>
                      <td>Dynamic SEO product copy, multilingual catalog translation, intelligent returns triaging.</td>
                    </tr>
                    <tr>
                      <td><strong>Enterprise Software</strong></td>
                      <td>Natural language to SQL, automatic documentation generation, automated pull request reviews.</td>
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
                  <div className="fs-tag-arrows">TECH STACK</div>
                  <h2 style={{ fontSize: '38px', fontWeight: '800', color: '#0b0f19', marginBottom: '16px' }}>
                    Modern Foundation Models & AI Tooling
                  </h2>
                  <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.6' }}>
                    We pick proven, open, and high-performance technologies. We never lock your business into closed proprietary black boxes, ensuring your internal team can maintain and extend the code.
                  </p>

                  <div style={{ marginTop: '24px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '12px', color: '#0b0f19' }}>
                      How We Choose Your Stack:
                    </h3>
                    <ul className="fs-bullet-list">
                      <li className="fs-bullet-item">
                        <CheckCircle />
                        <div><strong>Reasoning & Foundation Models:</strong> Claude 3.7 Sonnet, OpenAI GPT-4o, DeepSeek-R1, Llama 3.3 70B.</div>
                      </li>
                      <li className="fs-bullet-item">
                        <CheckCircle />
                        <div><strong>Orchestration & Agents:</strong> LangChain, LangGraph, LlamaIndex, CrewAI, FastAPI.</div>
                      </li>
                      <li className="fs-bullet-item">
                        <CheckCircle />
                        <div><strong>Vector Databases:</strong> pgvector (PostgreSQL), Pinecone, Qdrant, Milvus, Redis.</div>
                      </li>
                      <li className="fs-bullet-item">
                        <CheckCircle />
                        <div><strong>Serving & Telemetry:</strong> vLLM, TensorRT-LLM, Langfuse, Ragas, Docker, Kubernetes.</div>
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
                        <h3 className="sub">Foundation Models</h3>
                        <div className="skill">
                          <p className="skills">Claude 3.7 Sonnet</p>
                          <p className="skills">OpenAI GPT-4o</p>
                          <p className="skills">DeepSeek-R1</p>
                          <p className="skills">Llama 3.3 70B</p>
                          <p className="skills">Mistral Large</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tech_stack">
                    <div className="framework">
                      <div className="bgcolorto">
                        <h3 className="sub">Agent Frameworks</h3>
                        <div className="skill">
                          <p className="skills bg">LangGraph</p>
                          <p className="skills bg">LangChain</p>
                          <p className="skills bg">LlamaIndex</p>
                          <p className="skills bg">FastAPI (Python)</p>
                          <p className="skills bg">CrewAI</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tech_stack">
                    <div className="framework">
                      <div className="bg_cool_aqua">
                        <h3 className="sub">Vector & Storage</h3>
                        <div className="skill">
                          <p className="skills cool_aqua">pgvector</p>
                          <p className="skills cool_aqua">Pinecone</p>
                          <p className="skills cool_aqua">Qdrant</p>
                          <p className="skills cool_aqua">Redis Cache</p>
                          <p className="skills cool_aqua">PostgreSQL</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tech_stack">
                    <div className="framework">
                      <div className="bg_lavender">
                        <h3 className="sub">Serving & Eval</h3>
                        <div className="skill">
                          <p className="skills lavender">vLLM Engine</p>
                          <p className="skills lavender">TensorRT-LLM</p>
                          <p className="skills lavender">Langfuse Observability</p>
                          <p className="skills lavender">Ragas Benchmarks</p>
                          <p className="skills lavender">Kubernetes</p>
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
            <div className="fs-tag-arrows">TRUST & SECURITY</div>
            <h2 className="fs-section-title">An Engineering-First Partner</h2>
            <p className="fs-section-subtitle">
              We focus on clean coding standards, robust integrations, and clear communication patterns to build reliable software.
            </p>

            <div className="fs-grid-3">
              <div className="fs-card-premium">
                <h3>100% IP & Weight Ownership</h3>
                <p>All source code, prompt graphs, embeddings, and fine-tuned LoRA weights belong to your company. Zero vendor lock-in.</p>
              </div>
              <div className="fs-card-premium">
                <h3>Direct Lead Engineer Channels</h3>
                <p>Communicate directly with lead AI and systems engineers. Avoid account manager telephone games for faster code scoping.</p>
              </div>
              <div className="fs-card-premium">
                <h3>Production-Ready Security</h3>
                <p>We implement end-to-end data encryption protocols, clean authorization headers, and secure database parameters by default.</p>
              </div>
              <div className="fs-card-premium">
                <h3>SLA Support Contracts</h3>
                <p>We guarantee system uptime and active post-launch bug patches. Our engineering team is always available for version upgrades.</p>
              </div>
              <div className="fs-card-premium">
                <h3>Transparent Estimation</h3>
                <p>No arbitrary pricing packages. You receive an itemized list of deliverables, project schedules, and server usage expectations.</p>
              </div>
              <div className="fs-card-premium">
                <h3>Cross-Platform Ecosystem</h3>
                <p>Seamlessly integrate with our <Link to="/services/chatbot-development" style={{ color: '#2E29FF', fontWeight: '700' }}>AI Chatbot</Link>, <Link to="/services/conversational-ai" style={{ color: '#2E29FF', fontWeight: '700' }}>Voice Agents</Link>, and <Link to="/forge-ai" style={{ color: '#2E29FF', fontWeight: '700' }}>FORGE AI</Link> frameworks.</p>
              </div>
            </div>

          </div>
        </section>

        {/* 10. FAQ SECTION (EXACT MATCH HOMEPAGE / CHATBOT FAQ) */}
        <section className="nd-faq">
          <div className="nd-faq-inner">
            <div className="nd-faq-tag">✦ FAQS ✦</div>
            <h2 className="nd-faq-title">Generative AI Development: Frequently Asked Questions</h2>
            <div className="nd-faq-list">
              {faqs.map((f, i) => (
                <FaqItem key={i} q={f.q} a={f.a} open={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} />
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
              <Link to="/contact-us" className="nd-faq-cta-btn">
                Have a unique technical requirement? Talk to Our Engineers ↗
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
                  <span className="fs-cta-badge-dot"></span> Direct Founder & Lead AI Engineer Access
                </span>
                <h2>Ready to Build Custom Generative AI for Your Business?</h2>
                <p>
                  Eliminate manual document workflows, automate high-value reasoning tasks, and deploy secure AI tailored to your private data.
                </p>
                <div className="fs-cta-trust-items">
                  <span>✓ 100% Code & Model Ownership</span>
                  <span>✓ Zero Data Egress / Air-Gapped Ready</span>
                  <span>✓ Production SLA Support</span>
                </div>
              </div>

              <div className="fs-cta-actions-right">
                <Link to="/contact-us" className="fs-btn-cta-primary">
                  Book Free Architecture Call <ArrowRight />
                </Link>
                <Link to="/get-a-free-quote" className="fs-btn-cta-secondary">
                  Request Custom Quote
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
