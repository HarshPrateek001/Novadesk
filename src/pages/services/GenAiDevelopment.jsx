import React, { useEffect, useState, useRef } from 'react';
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

// Interactive Hero Simulation Widget: Live Generative AI Token Streamer
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
        <div className="nd-browser-topbar nd-browser-topbar-flex">
          <div className="nd-browser-dots">
            <span className="nd-dot red"></span>
            <span className="nd-dot yellow"></span>
            <span className="nd-dot green"></span>
          </div>
          <div className="nd-status-tag active">
            <span className="nd-status-dot"></span>
            Private Enterprise Cluster · vLLM Engine
          </div>
        </div>

        <div className="nd-genai-body">
          {/* Model Switcher Tabs */}
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

          {/* User Prompt Box */}
          <div className="nd-genai-prompt-box">
            <span className="nd-genai-prompt-lbl">Enterprise Query / Task Trigger</span>
            <p className="nd-genai-prompt-txt">"{current.prompt}"</p>
          </div>

          {/* Live Streaming LLM Console */}
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

// Interactive Architecture Visualizer
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

  const capabilities = [
    {
      title: "Enterprise RAG Pipelines",
      tagline: "Hybrid Vector & Keyword Knowledge Vaults",
      badge: "High Accuracy",
      desc: "Connect LLMs to internal wikis, SQL databases, and unstructured PDF archives. We utilize pgvector, Cohere re-rankers, and semantic chunking to guarantee hallucination-free answers with precise line-item source citations.",
      bullets: ["Sub-second vector retrieval", "Hybrid dense (HNSW) + sparse (BM25) search", "Context window compression", "Automatic knowledge re-indexing"]
    },
    {
      title: "Private LLM Fine-Tuning",
      tagline: "Domain-Specific QLoRA Adaptation",
      badge: "Sovereign AI",
      desc: "Adapt open-weights foundation models (DeepSeek-R1, Llama 3.3, Mistral) to your industry terminology, internal style guides, and proprietary workflows with parameter-efficient fine-tuning on dedicated GPUs.",
      bullets: ["Curated instruction dataset synthesis", "4-bit / 8-bit QLoRA weight optimization", "Zero catastrophic forgetting", "Full model weights ownership"]
    },
    {
      title: "Autonomous Agent Swarms",
      tagline: "LangGraph Multi-Agent Workflows",
      badge: "Workflow Automation",
      desc: "Deploy collaborative agent teams that break down complex goals, conduct research, generate code in sandboxed interpreters, verify results, and push updates directly into your ERP or CRM.",
      bullets: ["Stateful multi-agent graphs", "Sandboxed Python execution", "Human-in-the-loop approval gates", "Self-healing tool retries"]
    },
    {
      title: "Multimodal Document Intelligence",
      tagline: "Vision-Language Document Parsing",
      badge: "Zero Manual Entry",
      desc: "Convert messy invoices, legal contracts, engineering schematics, and medical records into structured, type-safe JSON schemas with 99.8% field extraction precision.",
      bullets: ["Table & spatial bounding box extraction", "Complex handwriting & stamp OCR", "Pydantic schema validation", "Direct ERP/Database synchronization"]
    },
    {
      title: "Sovereign Air-Gapped Deployments",
      tagline: "On-Premise & Private VPC Clusters",
      badge: "Strict Compliance",
      desc: "Deploy enterprise inference clusters using vLLM and TensorRT-LLM inside your AWS, GCP, or private data centers. Complete immunity from external API outages and data egress regulations.",
      bullets: ["Continuous PagedAttention batching", "Zero external network egress", "HIPAA, SOC 2 & GDPR compliant", "Predictable compute pricing"]
    },
    {
      title: "Enterprise Guardrails & Red-Teaming",
      tagline: "Hallucination & Jailbreak Firewalls",
      badge: "Mission-Critical Safety",
      desc: "Protect brand reputation and sensitive data with automated NeMo guardrails, prompt injection firewalls, real-time PII anonymization, and continuous automated red-teaming.",
      bullets: ["Real-time prompt injection detection", "Field-level PII data redaction", "Automated Ragas evaluation benchmarks", "Deterministic safety fallbacks"]
    }
  ];

  const steps = [
    { num: "01", title: "Discovery & Data Readiness", time: "Week 1", desc: "Audit existing knowledge bases, API interfaces, compliance guidelines, and define quantitative eval benchmarks." },
    { num: "02", title: "Architecture Blueprinting", time: "Week 2", desc: "Select optimal model topologies (cloud API vs sovereign on-prem), design vector chunking schemas, and draft security guardrails." },
    { num: "03", title: "Vector Indexing & Ingestion", time: "Weeks 2–3", desc: "Build automated data pipelines that parse documents, generate vector embeddings, and establish hybrid BM25 + pgvector indexes." },
    { num: "04", title: "Agent & Prompt Orchestration", time: "Weeks 3–5", desc: "Develop LangGraph execution graphs, system prompt architectures, tool-calling interfaces, and structured output validators." },
    { num: "05", title: "Red-Teaming & Guardrail Hardening", time: "Weeks 5–6", desc: "Execute automated adversarial prompt injection attacks, verify PII masking filters, and calibrate hallucination detectors." },
    { num: "06", title: "Staging Benchmark Validation", time: "Weeks 6–7", desc: "Run golden evaluation datasets through Ragas and TruLens to benchmark faithfulness, answer relevancy, and context recall." },
    { num: "07", title: "Production Deployment & Evals", time: "Week 8+", desc: "Zero-downtime deployment with live telemetry (Langfuse), latency optimization, and ongoing drift monitoring." }
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
                ENTERPRISE GENERATIVE AI STUDIO
              </div>
              <h1 className="fs-hero-title">
                Generative AI Built for <span className="fs-text-blue">Real Business Workflows</span>
              </h1>
              <p className="fs-hero-desc" style={{ marginBottom: '32px' }}>
                Transform unstructured enterprise documents, databases, and repetitive workflows into grounded, high-accuracy AI tools. We engineer private RAG pipelines, autonomous agent swarms, and sovereign on-premise LLMs with zero vendor lock-in.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
                  <Link to="/contact-us" className="fs-btn fs-btn-primary" style={{ height: '52px', padding: '0 28px', borderRadius: '12px', fontSize: '15px', fontWeight: '700', boxShadow: '0 8px 20px rgba(46, 41, 255, 0.25)' }}>
                    Book Architecture Consultation <ArrowRight />
                  </Link>
                  <Link to="/case-studies" className="fs-btn" style={{ height: '52px', padding: '0 26px', borderRadius: '12px', fontSize: '15px', fontWeight: '700', backgroundColor: '#0B0F19', color: '#ffffff', textDecoration: 'none' }}>
                    Explore Case Studies →
                  </Link>
                </div>

                <div style={{ fontSize: '13.5px', color: '#475569', display: 'flex', flexWrap: 'wrap', gap: '22px', fontWeight: '600', marginTop: '6px', alignItems: 'center' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle /> 100% Code & Weights Ownership
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle /> Zero Data Egress / Air-Gapped Ready
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle /> Sub-Second Hybrid Vector Search
                  </span>
                </div>
              </div>
            </div>

            {/* Live Interactive Hero Simulation */}
            <div className="fs-hero-image-wrapper">
              <HeroGenAiAnimation />
            </div>
          </div>
        </section>

        {/* 2. FOUNDER-LED VALUE STRIP */}
        <section className="fs-agency-alt">
          <div className="fs-container">
            <div className="fs-agency-grid">
              <div className="fs-agency-card">
                <div className="fs-agency-num">99.8%</div>
                <div className="fs-agency-label">Grounded Accuracy</div>
                <div className="fs-agency-sub">Multi-layer hybrid RAG with citations</div>
              </div>
              <div className="fs-agency-card">
                <div className="fs-agency-num">&lt; 18ms</div>
                <div className="fs-agency-label">Time-to-First-Token</div>
                <div className="fs-agency-sub">Continuous batching on vLLM clusters</div>
              </div>
              <div className="fs-agency-card">
                <div className="fs-agency-num">$0</div>
                <div className="fs-agency-label">Vendor Seat Tax</div>
                <div className="fs-agency-sub">Pay only for raw compute & infrastructure</div>
              </div>
              <div className="fs-agency-card">
                <div className="fs-agency-num">100%</div>
                <div className="fs-agency-label">IP & Code Ownership</div>
                <div className="fs-agency-sub">You own all prompts, adapters & pipelines</div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. INTERACTIVE ARCHITECTURE VISUALIZER */}
        <section className="fs-section fs-section-bg-slate">
          <div className="fs-container">
            <div className="fs-tag-arrows">TECHNICAL BLUEPRINTS</div>
            <h2 className="fs-section-title">Production Generative AI Architectures</h2>
            <p className="fs-section-subtitle">
              We design custom AI pipelines tailored to your security posture, latency targets, and domain complexity. Click below to inspect our architectural blueprints.
            </p>

            <div className="av-tabs" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center', margin: '24px 0 32px' }}>
              {["Enterprise RAG Vault", "LoRA Fine-Tuning", "Multi-Agent Swarm", "Private Sovereign vLLM", "Multimodal Vision AI"].map((name, i) => (
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

            <ArchVizGenAi activeArch={activeArch} />
          </div>
        </section>

        {/* 4. COMPARISON: GENERIC WRAPPERS VS NOVADESK ARCHITECTURE */}
        <section className="fs-section">
          <div className="fs-container">
            <div className="fs-tag-arrows">ENGINEERING COMPARISON</div>
            <h2 className="fs-section-title">Why Off-The-Shelf Wrappers Fail in Production</h2>
            <p className="fs-section-subtitle">
              Most SaaS wrappers offer brittle API proxies that hallucinate, leak private data, and inflate monthly seat costs. Here is how NovaDesk delivers true enterprise software.
            </p>

            <div className="fs-comp-grid">
              <div className="fs-comp-card fs-comp-card-cookie">
                <div className="fs-comp-header">
                  <span className="fs-comp-badge">Generic SaaS / Off-the-shelf</span>
                  <h3>Fragile API Wrappers</h3>
                  <p>Shallow wrappers that break under real enterprise stress.</p>
                </div>
                <div className="fs-comp-list">
                  <div className="fs-comp-item">
                    <span className="fs-comp-item-icon">✕</span>
                    <div><strong>High Hallucination Rates:</strong> Unfiltered prompts answer from general web memory rather than your verified documents.</div>
                  </div>
                  <div className="fs-comp-item">
                    <span className="fs-comp-item-icon">✕</span>
                    <div><strong>Data Privacy Risks:</strong> Enterprise prompts transit third-party proxy servers without zero-retention guarantees.</div>
                  </div>
                  <div className="fs-comp-item">
                    <span className="fs-comp-item-icon">✕</span>
                    <div><strong>Per-Seat Subscriptions:</strong> Costs scale punitively with employee headcount rather than actual computational usage.</div>
                  </div>
                  <div className="fs-comp-item">
                    <span className="fs-comp-item-icon">✕</span>
                    <div><strong>No Source Verification:</strong> Outputs lack line-item page and paragraph citations, making compliance review impossible.</div>
                  </div>
                </div>
              </div>

              <div className="fs-comp-card fs-comp-card-custom">
                <div className="fs-comp-header">
                  <span className="fs-comp-badge">The NovaDesk Way</span>
                  <h3>Custom Grounded Systems</h3>
                  <p>Enterprise-grade architectures designed for security, accuracy, and longevity.</p>
                </div>
                <div className="fs-comp-list">
                  <div className="fs-comp-item">
                    <span className="fs-comp-item-icon">✓</span>
                    <div><strong>Deterministic Grounding:</strong> Hybrid vector + BM25 search with cross-encoder re-ranking guarantees answers cite verified facts.</div>
                  </div>
                  <div className="fs-comp-item">
                    <span className="fs-comp-item-icon">✓</span>
                    <div><strong>Private VPC / Air-Gapped:</strong> Host models in your own cloud or on-premise infrastructure with zero data egress.</div>
                  </div>
                  <div className="fs-comp-item">
                    <span className="fs-comp-item-icon">✓</span>
                    <div><strong>100% IP & Code Ownership:</strong> Zero recurring seat licensing. You own the code, weights, schemas, and infrastructure.</div>
                  </div>
                  <div className="fs-comp-item">
                    <span className="fs-comp-item-icon">✓</span>
                    <div><strong>Verifiable Citation Trails:</strong> Every synthesized sentence references the exact file name, page number, and paragraph block.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. 6 CORE CAPABILITIES */}
        <section className="fs-section fs-section-bg-slate">
          <div className="fs-container">
            <div className="fs-tag-arrows">CAPABILITIES</div>
            <h2 className="fs-section-title">Complete Generative AI Engineering Suite</h2>
            <p className="fs-section-subtitle">
              From high-accuracy internal knowledge vaults to autonomous multi-agent task forces, we build end-to-end AI applications ready for production scale.
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
            <div className="fs-tag-arrows">MEASURABLE ROI</div>
            <h2 className="fs-section-title">Real Business Impact in Numbers</h2>
            <p className="fs-section-subtitle">
              Generative AI is only valuable when it cuts operating costs, accelerates revenue cycles, or unlocks net-new business capabilities.
            </p>

            <div className="fs-roi-grid">
              <div className="fs-roi-card">
                <div className="fs-roi-stat">82%</div>
                <div className="fs-roi-title">Knowledge Retrieval Velocity</div>
                <p className="fs-roi-desc">Engineers and support staff locate critical answers across millions of files in seconds instead of hours.</p>
              </div>
              <div className="fs-roi-card">
                <div className="fs-roi-stat">94%</div>
                <div className="fs-roi-title">Document Processing Automation</div>
                <p className="fs-roi-desc">Invoices, claims, contracts, and clinical documents extracted with structured schema validation.</p>
              </div>
              <div className="fs-roi-card">
                <div className="fs-roi-stat">65%</div>
                <div className="fs-roi-title">Cost Reduction vs Off-The-Shelf</div>
                <p className="fs-roi-desc">Eliminate per-seat software licensing by routing queries through optimized private inference clusters.</p>
              </div>
              <div className="fs-roi-card">
                <div className="fs-roi-stat">0</div>
                <div className="fs-roi-title">Compliance & Data Leaks</div>
                <p className="fs-roi-desc">Zero external model training, automated PII sanitization, and strict enterprise VPC boundary enforcement.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. 7-STAGE DELIVERY METHODOLOGY */}
        <section className="fs-process-blue">
          <div className="fs-container">
            <div className="fs-tag-white">HOW WE SHIP PRODUCTION AI</div>
            <h2 className="fs-title-white">Our 7-Stage Engineering Roadmap</h2>
            <p className="fs-subtitle-white">
              We eliminate technical debt by following a rigorous evaluation-first methodology from initial data audit to production telemetry.
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
                  <div className="fs-tag-arrows">TECH STACK</div>
                  <h2 style={{ fontSize: '38px', fontWeight: '800', color: '#0b0f19', marginBottom: '16px' }}>
                    Modern Foundation Models & AI Tooling
                  </h2>
                  <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.6' }}>
                    We pick proven, open, and high-performance technologies. We never lock your business into closed proprietary black boxes, ensuring your engineering team can maintain and extend the code.
                  </p>

                  <div style={{ marginTop: '24px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '12px', color: '#0b0f19' }}>
                      Our Technology Selection Matrix:
                    </h3>
                    <ul className="fs-bullet-list">
                      <li className="fs-bullet-item">
                        <CheckCircle />
                        <div><strong>Reasoning & Foundation Models:</strong> Claude 3.7 Sonnet, OpenAI GPT-4o, DeepSeek-R1, Llama 3.3 70B.</div>
                      </li>
                      <li className="fs-bullet-item">
                        <CheckCircle />
                        <div><strong>Orchestration & Agents:</strong> LangChain, LangGraph, LlamaIndex, CrewAI, AutoGen.</div>
                      </li>
                      <li className="fs-bullet-item">
                        <CheckCircle />
                        <div><strong>Vector Databases:</strong> pgvector (PostgreSQL), Pinecone, Qdrant, Milvus, Chroma.</div>
                      </li>
                      <li className="fs-bullet-item">
                        <CheckCircle />
                        <div><strong>Serving & Telemetry:</strong> vLLM, TensorRT-LLM, Langfuse, TruLens, Docker, Kubernetes.</div>
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

        {/* 9. TRUST & SECURITY STANDARDS */}
        <section className="fs-section fs-section-bg-slate">
          <div className="fs-container">
            <div className="fs-tag-arrows">TRUST & COMPLIANCE</div>
            <h2 className="fs-section-title">An Engineering-First AI Partner</h2>
            <p className="fs-section-subtitle">
              We build production software with direct developer access, strict compliance boundaries, and zero hidden platform licensing.
            </p>

            <div className="fs-grid-3">
              <div className="fs-card-premium">
                <h3>100% IP & Weight Ownership</h3>
                <p>All source code, prompts, embeddings, and fine-tuned adapter weights belong to your company. Zero vendor lock-in.</p>
              </div>
              <div className="fs-card-premium">
                <h3>Direct Lead Engineer Access</h3>
                <p>Work directly with lead AI and systems engineers. No non-technical account managers slowing down technical scoping.</p>
              </div>
              <div className="fs-card-premium">
                <h3>Enterprise Security & Privacy</h3>
                <p>End-to-end data encryption, automated PII sanitization, and strict zero-data-retention API contracts by default.</p>
              </div>
              <div className="fs-card-premium">
                <h3>Production SLA Guarantees</h3>
                <p>Guaranteed uptime, sub-second latency targets, and dedicated post-launch support contracts for model drift monitoring.</p>
              </div>
              <div className="fs-card-premium">
                <h3>Cross-Platform Ecosystem</h3>
                <p>Seamlessly integrate with our <Link to="/services/chatbot-development" style={{ color: '#2E29FF', fontWeight: '700' }}>AI Chatbot</Link>, <Link to="/services/conversational-ai" style={{ color: '#2E29FF', fontWeight: '700' }}>Voice Agents</Link>, and <Link to="/forge-ai" style={{ color: '#2E29FF', fontWeight: '700' }}>FORGE AI</Link> frameworks.</p>
              </div>
              <div className="fs-card-premium">
                <h3>Transparent Project Scope</h3>
                <p>No vague hourly billing. You get clear milestones, deliverable checklists, and compute usage estimates before development begins.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 10. COMPREHENSIVE FAQ SECTION */}
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

        {/* 11. CLOSING HIGH-CONVERTING CTA BANNER */}
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
