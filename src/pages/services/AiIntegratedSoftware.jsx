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
function HeroIntegrationAnimation() {
  const [activePipeline, setActivePipeline] = useState(0);

  const pipelines = [
    {
      title: "Invoice & ERP Sync",
      trigger: "POST /api/v1/invoices/stream",
      source: "Accounts Payable Portal",
      steps: [
        { name: "Raw Ingestion", status: "200 OK", desc: "PDF received via secure S3 presigned URL (1.2MB)" },
        { name: "NovaDesk AI Parser", status: "Processed", desc: "Vision LLM extracted 28 line items & validated tax formulas" },
        { name: "ERP Database Sync", status: "Committed", desc: "Posted to SAP NetSuite Ledger with idempotency key" }
      ],
      consoleLogs: [
        { tag: "INFO", time: "14:22:01.102", msg: "Inbound webhook received from Stripe Billing." },
        { tag: "EXEC", time: "14:22:01.218", msg: "Celery task #8492 spawned. pgvector search match: confidence 99.7%." },
        { tag: "DONE", time: "14:22:01.394", msg: "PostgreSQL write committed in 48ms. Audit hash: 0x9f8a...3b21." }
      ]
    },
    {
      title: "CRM Ticket Deflection",
      trigger: "WEBHOOK /v2/zendesk/tickets/new",
      source: "Zendesk Enterprise Desk",
      steps: [
        { name: "Event Listener", status: "Triggered", desc: "Urgent ticket received: 'Payment gateway timeout in EU region'" },
        { name: "Semantic Vector Match", status: "Identified", desc: "Matched incident runbook #INC-402 in internal knowledge vault" },
        { name: "Automated Resolution", status: "Dispatched", desc: "Drafted high-context resolution & updated ticket status to PENDING_CUSTOMER" }
      ],
      consoleLogs: [
        { tag: "INFO", time: "14:23:10.015", msg: "Incoming support payload: 4,120 chars text." },
        { tag: "EXEC", time: "14:23:10.142", msg: "Intent classified: INFRA_INCIDENT. Route -> DevOps on-call." },
        { tag: "DONE", time: "14:23:10.285", msg: "Auto-remediation playbook generated & Slack alert sent to #alerts." }
      ]
    },
    {
      title: "Natural Language to SQL",
      trigger: "GET /api/v1/analytics/query-nl",
      source: "Executive BI Dashboard",
      steps: [
        { name: "Natural Query", status: "Received", desc: "'List our top 5 churned enterprise accounts in Q3 and their ARR'" },
        { name: "Schema-Aware LLM", status: "Compiled", desc: "Generated read-only parameterized SQL query with tenant partition" },
        { name: "Read-Only Execution", status: "Returned", desc: "Query executed in 34ms on PostgreSQL replica, returned visual table" }
      ],
      consoleLogs: [
        { tag: "INFO", time: "14:24:05.410", msg: "Text-to-SQL prompt analyzed against DB information_schema." },
        { tag: "EXEC", time: "14:24:05.520", msg: "AST security validator confirmed: SELECT ONLY. No mutating clauses." },
        { tag: "DONE", time: "14:24:05.612", msg: "5 rows returned. Memory footprint 42KB. Chart rendered on UI." }
      ]
    }
  ];

  const current = pipelines[activePipeline];

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
            <span className="nd-status-dot" style={{ background: '#2E29FF', boxShadow: '0 0 6px rgba(46, 41, 255, 0.4)', marginRight: '6px' }}></span>
            NovaDesk AI Middleware Gateway · Live
          </div>
        </div>

        <div className="nd-integ-body">
          <div className="nd-integ-tabs">
            {pipelines.map((p, idx) => (
              <button
                key={idx}
                type="button"
                className={`nd-integ-tab-btn ${activePipeline === idx ? 'active' : ''}`}
                onClick={() => setActivePipeline(idx)}
              >
                {p.title}
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#f8fafc', padding: '10px 14px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '12px' }}>
            <span style={{ fontFamily: 'monospace', color: '#2E29FF', fontWeight: '700' }}>{current.trigger}</span>
            <span style={{ color: '#64748b' }}>Origin: <strong>{current.source}</strong></span>
          </div>

          <div className="nd-integ-pipeline">
            {current.steps.map((st, i) => (
              <div key={i} className="nd-integ-stage active">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="nd-stage-num">Stage 0{i + 1}</span>
                  <span className="nd-status-tag active" style={{ fontSize: '9px', padding: '2px 6px' }}>{st.status}</span>
                </div>
                <h4 className="nd-stage-title">{st.name}</h4>
                <p className="nd-stage-desc">{st.desc}</p>
              </div>
            ))}
          </div>

          <div className="nd-integ-console">
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px', marginBottom: '10px', fontSize: '11px', color: '#94a3b8' }}>
              <span>SYSTEM EVENT BUS TELEMETRY</span>
              <span>Total Pipeline Latency: 292ms</span>
            </div>
            {current.consoleLogs.map((log, i) => (
              <div key={i} className="nd-console-line" style={{ marginBottom: '6px' }}>
                <span className={`nd-line-tag ${log.tag === 'DONE' ? 'success' : log.tag === 'EXEC' ? 'info' : 'warning'}`}>
                  {log.tag}
                </span>
                <span style={{ color: '#64748b', fontSize: '11px' }}>{log.time}</span>
                <span style={{ color: '#f1f5f9' }}>{log.msg}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// 2. Interactive Architecture Visualizer
function ArchVizIntegration({ activeArch }) {
  return (
    <div className="av-wrapper">

      {/* ── 1. Asynchronous Celery & Redis Queues ── */}
      {activeArch === 0 && (
        <div className="av-scene av-rule">
          <div className="av-chrome-bar">
            <span className="av-dot red"/><span className="av-dot yellow"/><span className="av-dot green"/>
            <span className="av-chrome-title">Asynchronous Task Queue — Non-Blocking UI Architecture</span>
          </div>
          <div className="av-rule-body">
            <div className="av-flow-chain">
              <div className="av-flow-node trigger">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                UI Action / User Click
              </div>
              <div className="av-flow-arrow av-arrow-anim-1">→</div>
              <div className="av-flow-node intent">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                FastAPI Gateway (202 Accepted)
              </div>
              <div className="av-flow-arrow av-arrow-anim-2">→</div>
              <div className="av-flow-node fetch">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/></svg>
                Redis Task Broker
              </div>
              <div className="av-flow-arrow av-arrow-anim-3">→</div>
              <div className="av-flow-node respond">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                Celery Worker Pool
              </div>
            </div>
            <div className="av-rule-chat" style={{ marginTop: '12px' }}>
              <div className="av-msg bot-msg">
                <span className="av-bot-label">Performance Benefit</span>
                User UI responds in under 45ms with an instant confirmation ID. Heavy LLM analysis, vector clustering, and database indexing execute in background worker threads without locking browser sessions.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── 2. Native In-Database pgvector ── */}
      {activeArch === 1 && (
        <div className="av-scene av-nlp">
          <div className="av-chrome-bar">
            <span className="av-dot red"/><span className="av-dot yellow"/><span className="av-dot green"/>
            <span className="av-chrome-title">Native PostgreSQL + pgvector — Zero Brittle Sync Pipelines</span>
          </div>
          <div className="av-scene-card-wrap">
            <div className="av-scene-flow-grid">
              <div className="av-node-box">
                <span className="av-node-badge">Standard DB</span>
                <span className="av-node-title">Existing Relational Schema</span>
                <span className="av-node-desc">Your users, orders, subscriptions, and tenancy records remain in primary PostgreSQL.</span>
              </div>
              <div className="av-node-box">
                <span className="av-node-badge">Extension</span>
                <span className="av-node-title">pgvector Column</span>
                <span className="av-node-desc">We add <code>embedding vector(1536)</code> columns directly to existing entity tables.</span>
              </div>
              <div className="av-node-box">
                <span className="av-node-badge">Index</span>
                <span className="av-node-title">HNSW Vector Index</span>
                <span className="av-node-desc">Hierarchical Navigable Small World index allows sub-12ms cosine distance lookups.</span>
              </div>
              <div className="av-node-box">
                <span className="av-node-badge">Simplicity</span>
                <span className="av-node-title">Zero Third-Party Sync</span>
                <span className="av-node-desc">No brittle sync jobs between SQL and standalone vector databases that desynchronize.</span>
              </div>
            </div>
            <div className="av-msg bot-msg" style={{ marginTop: '10px' }}>
              <span className="av-bot-label">Single SQL Query</span>
              <code>SELECT id, title, price, (embedding &lt;=&gt; query_vector) AS similarity FROM products WHERE tenant_id = 42 ORDER BY similarity ASC LIMIT 10;</code>
            </div>
          </div>
        </div>
      )}

      {/* ── 3. Deterministic Fallbacks & Circuit Breakers ── */}
      {activeArch === 2 && (
        <div className="av-scene av-rag">
          <div className="av-chrome-bar">
            <span className="av-dot red"/><span className="av-dot yellow"/><span className="av-dot green"/>
            <span className="av-chrome-title">Fault-Tolerant Circuit Breakers — 99.99% Availability</span>
          </div>
          <div className="av-scene-card-wrap">
            <div className="av-scene-flow-grid">
              <div className="av-node-box">
                <span className="av-node-badge">Primary Route</span>
                <span className="av-node-title">Cloud Foundation Model</span>
                <span className="av-node-desc">OpenAI GPT-4o / Claude 3.7 API with 800ms timeout threshold.</span>
              </div>
              <div className="av-node-box">
                <span className="av-node-badge">Fallback Level 1</span>
                <span className="av-node-title">Self-Hosted Local Model</span>
                <span className="av-node-desc">Auto-routes to local Ollama / vLLM Llama-3.3 cluster if cloud API returns 429/500.</span>
              </div>
              <div className="av-node-box">
                <span className="av-node-badge">Fallback Level 2</span>
                <span className="av-node-title">Deterministic Heuristics</span>
                <span className="av-node-desc">Regex & rule-based decision trees step in if GPU cluster undergoes maintenance.</span>
              </div>
              <div className="av-node-box">
                <span className="av-node-badge">Circuit Breaker</span>
                <span className="av-node-title">Graceful Degradation</span>
                <span className="av-node-desc">Your core software application NEVER crashes or hangs due to external AI vendor outages.</span>
              </div>
            </div>
            <div className="av-msg bot-msg" style={{ marginTop: '10px' }}>
              <span className="av-bot-label">Resilience Metric</span>
              100% mission-critical uptime. When major cloud LLM providers experienced outages in 2024, our client systems seamlessly auto-diverted traffic with zero downtime.
            </div>
          </div>
        </div>
      )}

      {/* ── 4. Bidirectional ERP & CRM Webhooks ── */}
      {activeArch === 3 && (
        <div className="av-scene av-hybrid">
          <div className="av-hybrid-col bot-col">
            <div className="av-col-header bot-hdr">
              <span className="av-col-dot"/>
              Enterprise Inbound Event
            </div>
            <div className="av-msg user-msg">Salesforce Opportunity Status Changed to "CLOSED_WON"</div>
            <div className="av-msg bot-msg">
              <span className="av-bot-label">Middleware Listener</span>
              Validating HMAC signature, extracting contract tier, and triggering automated onboarding copilot...
            </div>
          </div>

          <div className="av-transfer-lane">
            <div className="av-transfer-pulse"/>
            <svg className="av-transfer-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2E29FF" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </div>

          <div className="av-hybrid-col agent-col">
            <div className="av-col-header agent-hdr">
              <span className="av-col-dot green-dot"/>
              Automated Business Actions
            </div>
            <div className="av-agent-card">
              <div className="av-agent-avatar">⚡</div>
              <div>
                <div className="av-agent-name">Multi-System Orchestrator</div>
                <div className="av-agent-status">● 3 Actions Dispatched</div>
              </div>
            </div>
            <div className="av-msg agent-msg">
              1) Stripe invoice generated.<br />
              2) Jira provisioning ticket created.<br />
              3) Welcome email dispatched via SendGrid.
            </div>
          </div>
        </div>
      )}

      {/* ── 5. Enterprise RBAC & Data Masking ── */}
      {activeArch === 4 && (
        <div className="av-scene av-voice">
          <div className="av-voice-dark" style={{ background: '#0b0f19' }}>
            <div style={{ textAlign: 'center', padding: '10px 0' }}>
              <div style={{ display: 'inline-block', padding: '8px 16px', background: 'rgba(16, 185, 129, 0.2)', border: '1px solid #10B981', borderRadius: '8px', color: '#fff', fontSize: '12px', fontWeight: '800' }}>
                ZERO-TRUST MULTI-TENANT AI GOVERNANCE
              </div>
            </div>
            <div className="av-voice-rings">
              <div className="av-ring r1"/>
              <div className="av-ring r2"/>
              <div className="av-ring r3"/>
              <div className="av-mic-icon">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
            </div>
            <div className="av-voice-label" style={{ color: '#10B981' }}>Immutable Audit Trails · Langfuse & PII Masking</div>
          </div>
          <div className="av-voice-light">
            <div className="av-transcript">
              <span className="av-tr-lbl">🔒 Role-Based Permissions (RBAC)</span>
              <p>Employees only query data their permission role permits. Junior staff cannot prompt models for executive compensation or confidential board minutes.</p>
            </div>
            <div className="av-tts-reply">
              <span className="av-tr-lbl tts-col">📋 Cryptographic Audit Log</span>
              <p>Every inference request, retrieved context chunk, and resulting database mutation is logged with SHA-256 hashes for SOC2 and HIPAA compliance.</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default function AiIntegratedSoftware() {
  const [openFaq, setOpenFaq] = useState(0);
  const [activeArch, setActiveArch] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const architectures = [
    {
      title: "Asynchronous Task Queues",
      tagline: "Decoupled Celery & Redis Task Pools",
      badge: "High Throughput",
      complexity: "Medium",
      useCases: ["Non-blocking UI responses", "Heavy document OCR", "Batch vector embedding", "Scheduled background reporting"],
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
      )
    },
    {
      title: "Native In-DB pgvector",
      tagline: "PostgreSQL HNSW Vector Search",
      badge: "ACID Compliant",
      complexity: "Medium",
      useCases: ["In-database semantic search", "Relational + Vector queries", "Tenancy isolated records", "Product recommendation engines"],
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path>
        </svg>
      )
    },
    {
      title: "Circuit Breakers & Fallbacks",
      tagline: "Multi-Model Resilient Architecture",
      badge: "99.99% Availability",
      complexity: "High",
      useCases: ["Vendor API outage failover", "Token rate-limit mitigation", "Deterministic rule fallbacks", "Mission-critical systems"],
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
      )
    },
    {
      title: "Bidirectional ERP Webhooks",
      tagline: "Event-Driven System Orchestration",
      badge: "Enterprise Sync",
      complexity: "High",
      useCases: ["SAP / NetSuite ledger sync", "Salesforce CRM automation", "Stripe billing reconciliation", "Jira ticket triaging"],
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 3 21 3 21 8"></polyline>
          <line x1="4" y1="20" x2="21" y2="3"></line>
          <polyline points="21 16 21 21 16 21"></polyline>
          <line x1="15" y1="15" x2="21" y2="21"></line>
          <line x1="4" y1="4" x2="9" y2="9"></line>
        </svg>
      )
    },
    {
      title: "Zero-Trust RBAC & Governance",
      tagline: "Field-Level Masking & Audit Logging",
      badge: "SOC 2 & HIPAA",
      complexity: "High",
      useCases: ["Multi-tenant SaaS partitioning", "Sensitive PII obfuscation", "Executive compensation privacy", "Regulatory audit compliance"],
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
      )
    }
  ];

  const faqs = [
    {
      q: "What does AI-integrated software development mean?",
      a: "AI-integrated software development means embedding artificial intelligence directly into your existing software applications, ERPs, CRMs, or SaaS products. Rather than building standalone chatbots or forcing teams to use third-party tools, we build custom middleware, background workers, and semantic vector layers into your current codebase so AI operates natively inside your existing workflows."
    },
    {
      q: "Do we have to rewrite or replace our existing legacy software?",
      a: "No. Our core engineering philosophy is non-invasive augmentation. We connect to your existing SQL databases, REST/GraphQL APIs, and webhooks through a clean, microservice-based AI middleware layer. Your core business logic, user auth, and data stores remain untouched."
    },
    {
      q: "How do you prevent AI operations from slowing down our main application?",
      a: "We decouple all intensive AI workloads from your user-facing request/response cycle. Using asynchronous task queues (Celery, Redis, RabbitMQ) and event-driven architecture, user interfaces respond instantly (under 50ms) while AI reasoning, vector embedding, and document processing execute in parallel background worker pools."
    },
    {
      q: "How does in-database pgvector compare to third-party vector databases like Pinecone?",
      a: "For companies already running PostgreSQL, pgvector allows you to store vector embeddings directly inside your existing database tables. This eliminates the high cost, network latency, and brittle synchronization pipelines of third-party vector databases. You can run ACID-compliant relational SQL queries and vector similarity searches in a single transaction."
    },
    {
      q: "What happens if an external AI API (like OpenAI or Anthropic) goes down?",
      a: "We architect multi-tiered circuit breakers and deterministic fallbacks. If a primary API times out or returns rate limits, our middleware instantly cascades to a secondary model provider or a self-hosted local model (vLLM / Ollama). If all external models fail, deterministic heuristic rules ensure your application remains fully functional."
    },
    {
      q: "Can you integrate AI with enterprise ERPs like SAP, Oracle, NetSuite, or Salesforce?",
      a: "Yes. We frequently integrate AI capabilities with enterprise ERPs, billing systems, and CRMs using bidirectional webhooks and enterprise REST APIs. Common use cases include automated AP invoice reconciliation, intelligent lead routing, contract review, and automated ticket resolution."
    },
    {
      q: "How do you enforce security and prevent employees from seeing data they shouldn't?",
      a: "We implement strict multi-tenant Row-Level Security (RLS) and Role-Based Access Control (RBAC). When an AI agent performs a vector search or tool call, the query is cryptographically filtered by the user's specific session token and organization ID. Employees cannot retrieve documents or records outside their clearance."
    },
    {
      q: "What is the typical development timeline for an AI software integration project?",
      a: "A targeted integration (such as an automated document parsing pipeline or semantic search layer) is typically delivered in 3 to 5 weeks. Comprehensive multi-system integrations connecting ERPs, background queues, and custom in-app copilots usually take 6 to 10 weeks."
    },
    {
      q: "How much does it cost to integrate AI into existing software?",
      a: "Targeted middleware integrations generally range from $10,000 to $25,000 depending on API complexity and database topology. Because we design for compute efficiency and local vectorization, monthly operating costs are negligible compared to full software re-platforming."
    },
    {
      q: "Do we own the integration code and intellectual property?",
      a: "Yes. 100% of all middleware code, custom API endpoints, worker configurations, and schemas belong entirely to your company under full commercial IP ownership."
    }
  ];

  const schemaJson = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "AI-Integrated Software Development",
      "name": "AI-Integrated Software Development Services",
      "alternateName": ["Enterprise AI Modernization", "AI Middleware Development", "pgvector Database Integration", "Legacy System AI Integration"],
      "description": "Seamlessly integrate artificial intelligence into existing SaaS, ERP, CRM, and databases. Custom AI middleware, in-database vector search, background worker queues, and deterministic failover.",
      "url": "https://www.novadesk.site/services/ai-integrated-software",
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
        title="AI-Integrated Software Development | Modernize Legacy Systems & SaaS | NovaDesk"
        description="Integrate AI directly into your existing software, ERP, CRM, and databases. Custom AI middleware, in-database pgvector search, automated background task workers, and deterministic fallbacks."
        url="/services/ai-integrated-software"
        image="https://www.novadesk.site/og-image.png"
        keywords="AI Integrated Software Development Kolkata, Legacy System AI Modernization Kolkata, AI Middleware Engineering Kolkata, pgvector PostgreSQL Integration Kolkata, Celery Redis AI Task Workers India, Hybrid Cloud AI Deployment Kolkata, AI Software Integration Company Kolkata, NovaDesk AI Integrations"
        schema={schemaJson}
      />

      <div className="fs-page">

        {/* 1. HERO SECTION */}
        <section className="fs-hero">
          <div className="fs-container fs-hero-grid">
            <div className="fs-hero-text">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(46,41,255,0.08)', border: '1px solid rgba(46,41,255,0.2)', padding: '6px 16px', borderRadius: '40px', fontSize: '11px', fontWeight: '700', color: '#2E29FF', letterSpacing: '0.8px', textTransform: 'uppercase', marginBottom: '20px' }}>
                Enterprise Software Modernization
              </div>
              <h1 className="fs-hero-title">
                Embed AI Directly into <span className="fs-text-blue">Your Existing Software</span>
              </h1>
              <p className="fs-hero-desc" style={{ marginBottom: '38px' }}>
                Modernize legacy databases, ERPs, CRMs, and SaaS platforms with custom AI middleware. We build in-database vector search, asynchronous background task workers, and resilient circuit breakers with zero risky rewrites.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '36px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
                  <Link to="/contact-us" className="fs-btn fs-btn-primary" style={{ height: '52px', padding: '0 28px', borderRadius: '12px', fontSize: '15px', fontWeight: '700', boxShadow: '0 8px 20px rgba(46, 41, 255, 0.25)' }}>
                    Book Integration Consultation <ArrowRight />
                  </Link>
                  <Link to="/case-studies" className="fs-btn" style={{ height: '52px', padding: '0 26px', borderRadius: '12px', fontSize: '15px', fontWeight: '700', backgroundColor: '#0B0F19', color: '#ffffff', border: 'none', textDecoration: 'none' }}>
                    View Engineering Case Studies →
                  </Link>
                </div>

                <div style={{ fontSize: '13.5px', color: '#475569', display: 'flex', flexWrap: 'wrap', gap: '22px', fontWeight: '600', marginTop: '6px', alignItems: 'center' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <HeroCheckBadge /> Zero Risky Code Rewrites
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <HeroCheckBadge /> Native In-Database pgvector Search
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <HeroCheckBadge /> 99.99% Fault-Tolerant Circuit Breakers
                  </span>
                </div>
              </div>
            </div>

            <HeroIntegrationAnimation />
          </div>
        </section>

        {/* TRUST ACCREDITATION TICKER & ROYAL BLUE METRICS SECTION */}
        <section className="fs-agency-alt">
          <div className="nd-ticker-wrap">
            <div className="nd-ticker">
              <div className="nd-ticker-track">
                {[...Array(2)].map((_, idx) => (
                  <div key={idx} className="nd-ticker-group">
                    <span>✦ ASYNCHRONOUS CELERY QUEUES</span>
                    <span>✦ POSTGRESQL PGVECTOR NATIVE</span>
                    <span>✦ EVENT-DRIVEN FASTSTREAM ARCH</span>
                    <span>✦ FAULT-TOLERANT RETRY BROKERS</span>
                    <span>✦ IDEMPOTENT REST & WEBHOOKS</span>
                    <span>✦ ENTERPRISE ERP & CRM SYNC</span>
                    <span>✦ ZERO DOWNTIME ROLLING DEPLOYS</span>
                    <span>✦ DEDICATED DEV & SLA SUPPORT</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="fs-agency-alt-bg">
            <div className="nd-intro">
              <div className="nd-intro-inner">
                <div className="nd-intro-text">
                  <h2>Built for architectures that demand <em>rock-solid stability at scale</em></h2>
                  <p>Replace fragile third-party automation webhooks with fault-tolerant, resilient backend middleware that never freezes your UI or drops mission-critical payloads.</p>
                </div>
                <div className="nd-intro-stats">
                  <div className="nd-intro-stat">
                    <div className="nd-intro-stat-num">99.99<sub>%</sub></div>
                    <div className="nd-intro-stat-label">Event Delivery Guarantee</div>
                  </div>
                  <div className="nd-intro-divider" />
                  <div className="nd-intro-stat">
                    <div className="nd-intro-stat-num">&lt;250<sub>ms</sub></div>
                    <div className="nd-intro-stat-label">Async Queue Latency</div>
                  </div>
                  <div className="nd-intro-divider" />
                  <div className="nd-intro-stat">
                    <div className="nd-intro-stat-num">0</div>
                    <div className="nd-intro-stat-label">Production UI Freezes</div>
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
                  <div>Asynchronous Workers,<br/>Zero UI Blocking</div>
                </div>
                <div className="fs-usp-box">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z"/>
                  </svg>
                  <div>Native pgvector<br/>Database Extensions</div>
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
                  <div>Multi-Tiered Circuit<br/>Breakers & Fallbacks</div>
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
            <h2 className="fs-section-title">The Non-Invasive Approach to Software AI</h2>
            <p className="fs-section-subtitle">
              You don't need to rebuild core software from scratch to leverage artificial intelligence. We build a clean, decoupled middleware layer that attaches seamlessly to your existing APIs, databases, and background queues.
            </p>

            <div style={{ marginTop: '48px' }}>
              <h3 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '12px', color: '#0b0f19' }}>
                Integration Architectures We Deploy
              </h3>
              <p style={{ fontSize: '15px', color: '#64748b', marginBottom: '32px', fontWeight: '500' }}>
                Select an integration architecture below to examine its data flows, database impact, and fault tolerance.
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

                    <ArchVizIntegration activeArch={activeArch} />

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
                  What Makes an AI Software Integration Succeed
                </h3>
                <ul className="fs-split-list">
                  <li className="fs-split-item">
                    <div className="fs-split-item-icon"><CheckCircle /></div>
                    <div><strong>Asynchronous Decoupling:</strong> Isolating heavy model inference in Celery/Redis worker queues so the user interface never freezes or delays.</div>
                  </li>
                  <li className="fs-split-item">
                    <div className="fs-split-item-icon"><CheckCircle /></div>
                    <div><strong>Native Database Vectorization:</strong> Adding pgvector columns directly to existing relational tables, avoiding complex dual-write sync pipelines.</div>
                  </li>
                  <li className="fs-split-item">
                    <div className="fs-split-item-icon"><CheckCircle /></div>
                    <div><strong>Multi-Tiered Circuit Breakers:</strong> Automated failovers that step down to local models or deterministic rule engines if third-party APIs timeout.</div>
                  </li>
                  <li className="fs-split-item">
                    <div className="fs-split-item-icon"><CheckCircle /></div>
                    <div><strong>Strict Idempotency Keys:</strong> Every event carries unique cryptographic identifiers guaranteeing records are written exactly once.</div>
                  </li>
                  <li className="fs-split-item">
                    <div className="fs-split-item-icon"><CheckCircle /></div>
                    <div><strong>Zero-Trust Row-Level Security:</strong> Filtering every AI vector query by user role and tenant partition before returning data.</div>
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
                  Why Low-Code Integrations Fail (And How to Avoid It)
                </h3>
                <ul className="fs-split-list">
                  <li className="fs-split-item">
                    <div className="fs-split-item-icon" style={{ background: 'rgba(234, 67, 53, 0.1)', color: '#EA4335', fontWeight: 'bold' }}>✕</div>
                    <div><strong>Silent Webhook Drops:</strong> Zapier/Make chains drop payloads when external APIs hit rate limits, causing lost orders and orphaned records.</div>
                  </li>
                  <li className="fs-split-item">
                    <div className="fs-split-item-icon" style={{ background: 'rgba(234, 67, 53, 0.1)', color: '#EA4335', fontWeight: 'bold' }}>✕</div>
                    <div><strong>Blocking UI Cycles:</strong> Triggering synchronous LLM calls on web requests, causing browser spinners and 504 Gateway Timeout errors.</div>
                  </li>
                  <li className="fs-split-item">
                    <div className="fs-split-item-icon" style={{ background: 'rgba(234, 67, 53, 0.1)', color: '#EA4335', fontWeight: 'bold' }}>✕</div>
                    <div><strong>Desynchronized Vector Databases:</strong> Syncing data between SQL and third-party vector stores inevitably leads to state drift and corrupted searches.</div>
                  </li>
                  <li className="fs-split-item">
                    <div className="fs-split-item-icon" style={{ background: 'rgba(234, 67, 53, 0.1)', color: '#EA4335', fontWeight: 'bold' }}>✕</div>
                    <div><strong>Unencrypted Third-Party Transit:</strong> Routing sensitive corporate documents through no-code platforms violates basic SOC 2 and HIPAA compliance.</div>
                  </li>
                  <li className="fs-split-item">
                    <div className="fs-split-item-icon" style={{ background: 'rgba(234, 67, 53, 0.1)', color: '#EA4335', fontWeight: 'bold' }}>✕</div>
                    <div><strong>Astronomical Step Pricing:</strong> SaaS subscription costs balloon exponentially with every background action and webhook event.</div>
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
                  A Systems-First Approach to Software Modernization
                </h2>
                <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.65' }}>
                  We bridge the gap between traditional enterprise software engineering and modern artificial intelligence without forcing expensive, multi-year rebuilds.
                </p>

                <div className="fs-value-spotlight">
                  <h4>The NovaDesk Promise</h4>
                  <ul className="fs-spotlight-list">
                    <li className="fs-spotlight-item">
                      <CheckCircle />
                      <span>100% Source Code & Middleware Ownership</span>
                    </li>
                    <li className="fs-spotlight-item">
                      <CheckCircle />
                      <span>Zero Regressions on Existing Core Logic</span>
                    </li>
                    <li className="fs-spotlight-item">
                      <CheckCircle />
                      <span>Direct Developer Slack & Video Access</span>
                    </li>
                    <li className="fs-spotlight-item">
                      <CheckCircle />
                      <span>Strict ACID Database Consistency</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="fs-differentiators-stack">
                <div className="fs-diff-row">
                  <div className="fs-diff-number">01</div>
                  <div className="fs-diff-content">
                    <h3>Non-Invasive Augmentation</h3>
                    <p>We preserve your transactional databases, user authentication, and business logic. Our middleware attaches cleanly via webhooks and microservices.</p>
                  </div>
                </div>
                <div className="fs-diff-row">
                  <div className="fs-diff-number">02</div>
                  <div className="fs-diff-content">
                    <h3>Sub-45ms UI Latency</h3>
                    <p>Heavy AI reasoning and document extraction run in background Celery worker pools. Your web application responds to users with zero delay.</p>
                  </div>
                </div>
                <div className="fs-diff-row">
                  <div className="fs-diff-number">03</div>
                  <div className="fs-diff-content">
                    <h3>Native PostgreSQL In-DB Vectors</h3>
                    <p>We leverage pgvector extensions within your existing database instance, eliminating the high cost and maintenance of standalone vector DBs.</p>
                  </div>
                </div>
                <div className="fs-diff-row">
                  <div className="fs-diff-number">04</div>
                  <div className="fs-diff-content">
                    <h3>Multi-Tiered Circuit Breakers</h3>
                    <p>Third-party API downtime never takes down your application. Automatic failovers step down to local models or deterministic rule engines.</p>
                  </div>
                </div>
                <div className="fs-diff-row">
                  <div className="fs-diff-number">05</div>
                  <div className="fs-diff-content">
                    <h3>Cryptographic Audit Logging</h3>
                    <p>Every inference request, retrieved context chunk, and resulting database mutation is logged with SHA-256 hashes for compliance auditing.</p>
                  </div>
                </div>
                <div className="fs-diff-row">
                  <div className="fs-diff-number">06</div>
                  <div className="fs-diff-content">
                    <h3>Production SLA Support</h3>
                    <p>We stand by our code post-launch with guaranteed uptime support, API version upgrade patches, and continuous performance tuning.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Comparison Split */}
            <div className="fs-comparison-split">
              <div className="fs-comp-card fs-comp-card-cookie">
                <div className="fs-comp-header">
                  <span className="fs-comp-badge">Low-Code / Zapier / Make</span>
                  <h3>Fragile Webhook Chains</h3>
                  <p>Superficial no-code pipelines that silently break under enterprise loads.</p>
                </div>
                <div className="fs-comp-list">
                  <div className="fs-comp-item">
                    <span className="fs-comp-item-icon">✕</span>
                    <div><strong>Silent Data Drops:</strong> Payloads are discarded when third-party rate limits hit, creating ghost data discrepancies.</div>
                  </div>
                  <div className="fs-comp-item">
                    <span className="fs-comp-item-icon">✕</span>
                    <div><strong>No Idempotency:</strong> Duplicate events trigger duplicate database writes, double-billing clients or corrupting inventory.</div>
                  </div>
                  <div className="fs-comp-item">
                    <span className="fs-comp-item-icon">✕</span>
                    <div><strong>Synchronous UI Freezes:</strong> Long-running AI steps hang client browsers, degrading core product responsiveness.</div>
                  </div>
                  <div className="fs-comp-item">
                    <span className="fs-comp-item-icon">✕</span>
                    <div><strong>Zero Security Compliance:</strong> Confidential enterprise documents transit unmonitored third-party workflow platforms.</div>
                  </div>
                  <div className="fs-comp-item">
                    <span className="fs-comp-item-icon">✕</span>
                    <div><strong>Punitive Step Pricing:</strong> Platform fees scale with every event, turning automation into a massive monthly cost center.</div>
                  </div>
                  <div className="fs-comp-item">
                    <span className="fs-comp-item-icon">✕</span>
                    <div><strong>No Local Rollback:</strong> Failed multi-system mutations leave databases in half-written, corrupted intermediate states.</div>
                  </div>
                </div>
              </div>

              <div className="fs-comp-card fs-comp-card-custom">
                <div className="fs-comp-header">
                  <span className="fs-comp-badge">The NovaDesk Way</span>
                  <h3>Hardened Custom Middleware</h3>
                  <p>Production-grade microservices with ACID transactions, queues, and security.</p>
                </div>
                <div className="fs-comp-list">
                  <div className="fs-comp-item">
                    <span className="fs-comp-item-icon">✓</span>
                    <div><strong>Dead-Letter Queues & Backoff:</strong> Celery task queues automatically retry failed tasks with exponential backoff and persistence.</div>
                  </div>
                  <div className="fs-comp-item">
                    <span className="fs-comp-item-icon">✓</span>
                    <div><strong>Strict Idempotency Keys:</strong> Every event carries unique cryptographic identifiers guaranteeing records write exactly once.</div>
                  </div>
                  <div className="fs-comp-item">
                    <span className="fs-comp-item-icon">✓</span>
                    <div><strong>Sub-45ms UI Responses:</strong> Asynchronous background workers handle heavy processing while frontend UI returns immediately.</div>
                  </div>
                  <div className="fs-comp-item">
                    <span className="fs-comp-item-icon">✓</span>
                    <div><strong>Private Cloud Boundary:</strong> Middleware runs inside your private VPC with strict end-to-end data encryption.</div>
                  </div>
                  <div className="fs-comp-item">
                    <span className="fs-comp-item-icon">✓</span>
                    <div><strong>Predictable Compute Costs:</strong> Zero per-step platform tax. You pay only for your standard server infrastructure.</div>
                  </div>
                  <div className="fs-comp-item">
                    <span className="fs-comp-item-icon">✓</span>
                    <div><strong>Transactional Rollbacks:</strong> Database writes use atomic transactions that cleanly rollback if any downstream step fails.</div>
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
            <h2 className="fs-section-title">Enterprise Capabilities for Modernized Software</h2>
            <p className="fs-section-subtitle">
              We construct modular, robust middleware components designed to integrate cleanly with your existing software stack.
            </p>

            <div className="fs-bento-grid">
              {/* Card 1: Decoupled Asynchronous Task Queues (Wide - 2 Cols) */}
              <div className="fs-bento-card fs-bento-col-2">
                <div className="fs-bento-card-badge">Task Queues</div>
                <h3>Decoupled Asynchronous Task Architecture</h3>
                <p>Prevent heavy AI reasoning from locking client UI threads. Redis brokers and Celery worker pools process thousands of background jobs in parallel with dead-letter recovery.</p>

                <div style={{ marginTop: '20px', background: '#f8fafc', padding: '16px', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.05)', fontSize: '13px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ fontWeight: '700', color: '#2E29FF' }}>Queue Broker: Redis In-Memory Stream</span>
                    <span style={{ fontSize: '11px', background: '#e2e8f0', padding: '2px 8px', borderRadius: '4px' }}>Workers: 16 Active</span>
                  </div>
                  <code style={{ fontSize: '12px', color: '#0f172a', display: 'block', background: '#ffffff', padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1' }}>
                    POST /api/v1/invoices ➔ HTTP 202 Accepted (Latency: 28ms) · Task #8942 queued in background
                  </code>
                </div>
              </div>

              {/* Card 2: In-Database Vectorization (Regular - 1 Col) */}
              <div className="fs-bento-card">
                <div className="fs-bento-card-badge" style={{ background: 'rgba(52,168,83,0.05)', color: '#34A853' }}>pgvector</div>
                <h3>In-Database Vector Search</h3>
                <p>Native PostgreSQL pgvector extension stores embeddings directly alongside your orders, users, and product catalogs.</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '16px' }}>
                  <span className="fs-bento-channel-badge">PostgreSQL</span>
                  <span className="fs-bento-channel-badge">HNSW Index</span>
                  <span className="fs-bento-channel-badge">Zero Sync Lag</span>
                </div>
              </div>

              {/* Card 3: Microservice Gateway Layer (Regular - 1 Col) */}
              <div className="fs-bento-card">
                <div className="fs-bento-card-badge" style={{ background: 'rgba(251,188,5,0.08)', color: '#D97706' }}>Gateway</div>
                <h3>FastAPI Middleware Gateway</h3>
                <p>High-performance Python microservices act as a secure translation layer between your legacy databases and AI models.</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '16px' }}>
                  <span className="fs-lang-pill">FastAPI</span>
                  <span className="fs-lang-pill">Pydantic v2</span>
                  <span className="fs-lang-pill">OpenAPI</span>
                  <span className="fs-lang-pill">LiteLLM</span>
                </div>
              </div>

              {/* Card 4: Two-Way ERP Synchronization (Wide - 2 Cols) */}
              <div className="fs-bento-card fs-bento-col-2">
                <div className="fs-bento-card-badge" style={{ background: 'rgba(234,67,53,0.05)', color: '#EA4335' }}>System Webhooks</div>
                <h3>Two-Way ERP & CRM Webhook Orchestration</h3>
                <p>Bi-directional event synchronization with SAP, NetSuite, Salesforce, and Stripe. The middleware intercepts business events, executes AI extraction, and updates target records automatically.</p>

                <div style={{ marginTop: '20px', background: '#f8fafc', padding: '14px 18px', borderRadius: '12px', border: '1px dashed rgba(46,41,255,0.3)', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12.5px' }}>
                  <div style={{ color: '#2E29FF', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: '#10B981' }}></span>
                    Event Bus: Stripe Webhook ➔ Middleware Parser ➔ NetSuite Ledger Write Committed (Idempotency: 0x9f4a)
                  </div>
                </div>
              </div>

              {/* Card 5: High-Throughput Redis Caching */}
              <div className="fs-bento-card">
                <div className="fs-bento-card-badge">Cache Layer</div>
                <h3>Semantic Query Caching</h3>
                <p>Cache frequent semantic queries and embedding vectors in Redis, cutting redundant LLM API calls and accelerating responses to under 15ms.</p>
                <div style={{ marginTop: '12px' }}>
                  <span className="fs-lang-pill" style={{ background: 'rgba(46,41,255,0.08)', color: '#2E29FF' }}>Sub-15ms Cached Query</span>
                </div>
              </div>

              {/* Card 6: Observability with Langfuse */}
              <div className="fs-bento-card">
                <div className="fs-bento-card-badge">Telemetry</div>
                <h3>Full Telemetry & Audit Trails</h3>
                <p>Track token usage, API latency, error rates, and model outputs with Langfuse and OpenTelemetry down to individual users.</p>
                <div style={{ marginTop: '12px' }}>
                  <span className="fs-lang-pill" style={{ background: 'rgba(16,185,129,0.08)', color: '#10B981' }}>OpenTelemetry Tracing</span>
                </div>
              </div>

              {/* Card 7: Multi-Tenant Row-Level Security (Wide - 2 Cols) */}
              <div className="fs-bento-card fs-bento-col-2">
                <div className="fs-bento-card-badge">Data Isolation</div>
                <h3>Multi-Tenant Row-Level Security (RLS)</h3>
                <p>Cryptographically isolate tenant records. When an AI agent performs vector similarity searches, queries are strictly constrained to the user's authorized organizational boundaries.</p>
                <div style={{ display: 'flex', gap: '8px', marginTop: '14px' }}>
                  <span className="fs-bento-channel-badge">Postgres RLS</span>
                  <span className="fs-bento-channel-badge">RBAC Policies</span>
                  <span className="fs-bento-channel-badge">Zero Cross-Tenant Leakage</span>
                </div>
              </div>

              {/* Card 8: Transactional Rollbacks (Wide - 2 Cols) */}
              <div className="fs-bento-card fs-bento-col-2">
                <div className="fs-bento-card-badge">ACID Safety</div>
                <h3>Atomic Database Transactions & Rollbacks</h3>
                <p>AI-driven updates never leave databases in half-written states. Atomic transaction blocks ensure that if an ERP write fails, all intermediate database mutations roll back cleanly.</p>
                <div style={{ marginTop: '12px', background: '#0b0f19', color: '#38bdf8', padding: '10px 14px', borderRadius: '8px', fontSize: '11px', fontFamily: 'monospace' }}>
                  {'{ "transaction_status": "COMMITTED", "rollback_safe": true, "atomic": true }'}
                </div>
              </div>
            </div>

            {/* Feature Comparison Matrix Table */}
            <div style={{ marginTop: '60px' }}>
              <h3 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '20px', color: '#0b0f19' }}>
                Architecture Comparison: Low-Code Stacks vs NovaDesk Custom Middleware
              </h3>
              <div className="fs-table-container">
                <table className="fs-table">
                  <thead>
                    <tr>
                      <th>Integration Vector</th>
                      <th>No-Code / Zapier / Make</th>
                      <th>Standard ERP Custom Script</th>
                      <th>NovaDesk AI Middleware</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>UI Latency Impact</strong></td>
                      <td>Synchronous hang (3s - 10s)</td>
                      <td>Blocking DB queries</td>
                      <td><span className="fs-lang-pill" style={{ background: 'rgba(52,168,83,0.1)', color: '#34A853' }}>Sub-45ms (Async Celery)</span></td>
                    </tr>
                    <tr>
                      <td><strong>Failure & Rate Limiting</strong></td>
                      <td>Silent payload drop</td>
                      <td>Error 500 crash</td>
                      <td><span className="fs-lang-pill" style={{ background: 'rgba(52,168,83,0.1)', color: '#34A853' }}>Dead-letter queues + Backoff</span></td>
                    </tr>
                    <tr>
                      <td><strong>Database Synchronization</strong></td>
                      <td>Brittle API polling</td>
                      <td>Manual export scripts</td>
                      <td><span className="fs-lang-pill" style={{ background: 'rgba(52,168,83,0.1)', color: '#34A853' }}>Native in-DB pgvector (Zero Sync)</span></td>
                    </tr>
                    <tr>
                      <td><strong>Security & Data Governance</strong></td>
                      <td>Third-party multi-tenant transit</td>
                      <td>Basic API keys in plain text</td>
                      <td><span className="fs-lang-pill" style={{ background: 'rgba(52,168,83,0.1)', color: '#34A853' }}>Private VPC + Row-Level Security</span></td>
                    </tr>
                    <tr>
                      <td><strong>Cost Structure</strong></td>
                      <td>Exponential per-step SaaS tax</td>
                      <td>High maintenance retainer</td>
                      <td><span className="fs-lang-pill" style={{ background: 'rgba(52,168,83,0.1)', color: '#34A853' }}>$0 Platform Fee (Compute only)</span></td>
                    </tr>
                    <tr>
                      <td><strong>Code Ownership</strong></td>
                      <td>Locked to vendor platform</td>
                      <td>Vendor proprietary</td>
                      <td><span className="fs-lang-pill" style={{ background: 'rgba(52,168,83,0.1)', color: '#34A853' }}>100% Client Source Code Ownership</span></td>
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
              Modernizing operational software with embedded AI unlocks immense back-office efficiency without the multi-year risk of replatforming.
            </p>

            <div className="fs-grid-3">
              <div className="fs-card-premium">
                <h3>68% Back-Office Entry Reduction</h3>
                <p>AP invoice parsing, customs documentation, customer onboarding forms, and order syncing are handled automatically with strict validation.</p>
              </div>
              <div className="fs-card-premium">
                <h3>3.5x Faster Feature Rollout</h3>
                <p>Deploy modern AI search, copilots, and automation in weeks rather than spending 18 months rewriting software from scratch.</p>
              </div>
              <div className="fs-card-premium">
                <h3>99.99% Production Uptime</h3>
                <p>Multi-tiered circuit breakers ensure third-party API outages never cascade into core software downtime or user-facing errors.</p>
              </div>
              <div className="fs-card-premium">
                <h3>$0 Capital Re-Platforming Loss</h3>
                <p>Preserve millions invested in custom enterprise business logic, relational SQL schemas, and legacy integrations.</p>
              </div>
              <div className="fs-card-premium">
                <h3>Sub-15ms Native Semantic Search</h3>
                <p>pgvector integration unlocks instantaneous similarity search directly within your existing PostgreSQL database tables.</p>
              </div>
              <div className="fs-card-premium">
                <h3>Zero User Disruption</h3>
                <p>Your team continues using the same dashboards and interfaces they know, now supercharged with embedded AI assistance.</p>
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
                      <td><strong>Manual Process Automation</strong></td>
                      <td>Automates routine cross-system data transfer between CRMs, ERPs, and billing platforms.</td>
                    </tr>
                    <tr>
                      <td><strong>Zero Downtime Modernization</strong></td>
                      <td>Modernizes legacy monolithic software without taking systems offline or disrupting users.</td>
                    </tr>
                    <tr>
                      <td><strong>Predictable Server Compute</strong></td>
                      <td>Replaces ballooning low-code SaaS subscription invoices with efficient fixed cloud server costs.</td>
                    </tr>
                    <tr>
                      <td><strong>Audit & Compliance Immunity</strong></td>
                      <td>Meets SOC 2, HIPAA, and GDPR standards with cryptographic audit logs and automated PII masking.</td>
                    </tr>
                    <tr>
                      <td><strong>Long-Term Code Asset Ownership</strong></td>
                      <td>All custom middleware microservices and schemas are your company's permanent intellectual property.</td>
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
                <h2>A Structured Methodology for Software AI Integration</h2>
              </div>
              <div className="fs-process-header-right">
                <p>
                  A non-invasive, phased engineering process that delivers production AI capabilities without disrupting active business operations.
                </p>
              </div>
            </div>

            <div className="fs-timeline-blue">
              <div className="fs-timeline-item-blue">
                <div className="fs-timeline-dot-blue"></div>
                <div className="fs-timeline-content-blue">
                  <span className="fs-timeline-step-badge">STEP 01</span>
                  <h3>Architecture & Schema Audit</h3>
                  <p>In-depth audit of existing software databases, API endpoints, auth mechanisms, and throughput bottlenecks to map seamless integration touchpoints.</p>
                </div>
              </div>
              <div className="fs-timeline-item-blue">
                <div className="fs-timeline-dot-blue"></div>
                <div className="fs-timeline-content-blue">
                  <span className="fs-timeline-step-badge">STEP 02</span>
                  <h3>Non-Invasive Middleware Scaffolding</h3>
                  <p>We build a decoupled FastAPI/Node.js microservice gateway with Redis caching and webhook listeners that connects cleanly to existing services.</p>
                </div>
              </div>
              <div className="fs-timeline-item-blue">
                <div className="fs-timeline-dot-blue"></div>
                <div className="fs-timeline-content-blue">
                  <span className="fs-timeline-step-badge">STEP 03</span>
                  <h3>Vector Layer & pgvector Setup</h3>
                  <p>Configuring native pgvector extensions on your PostgreSQL instances, generating domain embeddings, and establishing HNSW vector indexes.</p>
                </div>
              </div>
              <div className="fs-timeline-item-blue">
                <div className="fs-timeline-dot-blue"></div>
                <div className="fs-timeline-content-blue">
                  <span className="fs-timeline-step-badge">STEP 04</span>
                  <h3>Background Worker & Task Queues</h3>
                  <p>Deploying distributed Celery worker pools with Redis brokers to handle asynchronous document ingestion and model inference without UI latency.</p>
                </div>
              </div>
              <div className="fs-timeline-item-blue">
                <div className="fs-timeline-dot-blue"></div>
                <div className="fs-timeline-content-blue">
                  <span className="fs-timeline-step-badge">STEP 05</span>
                  <h3>Circuit Breakers & Fallback Logic</h3>
                  <p>Engineering multi-model failover routes, token rate-limiting budgets, and fallback heuristic logic to guarantee 99.99% system availability.</p>
                </div>
              </div>
              <div className="fs-timeline-item-blue">
                <div className="fs-timeline-dot-blue"></div>
                <div className="fs-timeline-content-blue">
                  <span className="fs-timeline-step-badge">STEP 06</span>
                  <h3>RBAC & End-to-End Security Testing</h3>
                  <p>Validating tenant isolation filters, executing adversarial penetration tests, and verifying immutable Langfuse audit logs.</p>
                </div>
              </div>
              <div className="fs-timeline-item-blue">
                <div className="fs-timeline-dot-blue"></div>
                <div className="fs-timeline-content-blue">
                  <span className="fs-timeline-step-badge">STEP 07</span>
                  <h3>Zero-Downtime Rollout & Telemetry</h3>
                  <p>Canary rollout of AI features with real-time latency monitoring, error rate alarms, and continuous performance tuning.</p>
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
                      <td style={{ color: '#475569', borderBottom: '1px solid #e2e8f0' }}>API mapping, schema audit, queue sizing, security boundaries</td>
                      <td style={{ borderBottom: '1px solid #e2e8f0' }}><span className="fs-lang-pill" style={{ background: '#f1f5f9', color: '#0b0f19', border: '1px solid #cbd5e1' }}>1–2 weeks</span></td>
                    </tr>
                    <tr>
                      <td style={{ color: '#0b0f19', borderBottom: '1px solid #e2e8f0' }}><strong>Middleware & Ingestion</strong></td>
                      <td style={{ color: '#475569', borderBottom: '1px solid #e2e8f0' }}>FastAPI scaffold, pgvector setup, Celery worker pool deployment</td>
                      <td style={{ borderBottom: '1px solid #e2e8f0' }}><span className="fs-lang-pill" style={{ background: '#f1f5f9', color: '#0b0f19', border: '1px solid #cbd5e1' }}>1–3 weeks</span></td>
                    </tr>
                    <tr>
                      <td style={{ color: '#0b0f19', borderBottom: '1px solid #e2e8f0' }}><strong>ERP & Webhook Sync</strong></td>
                      <td style={{ color: '#475569', borderBottom: '1px solid #e2e8f0' }}>Bidirectional webhooks, HMAC validation, idempotent transactional writes</td>
                      <td style={{ borderBottom: '1px solid #e2e8f0' }}><span className="fs-lang-pill" style={{ background: 'rgba(46,41,255,0.08)', color: '#2E29FF', border: '1px solid rgba(46,41,255,0.2)' }}>2–4 weeks</span></td>
                    </tr>
                    <tr>
                      <td style={{ color: '#0b0f19', borderBottom: '1px solid #e2e8f0' }}><strong>Circuit Breakers & QA</strong></td>
                      <td style={{ color: '#475569', borderBottom: '1px solid #e2e8f0' }}>Failover simulation, timeout testing, multi-tenant RBAC penetration tests</td>
                      <td style={{ borderBottom: '1px solid #e2e8f0' }}><span className="fs-lang-pill" style={{ background: '#f1f5f9', color: '#0b0f19', border: '1px solid #cbd5e1' }}>1–2 weeks</span></td>
                    </tr>
                    <tr>
                      <td style={{ color: '#0b0f19', borderBottom: '1px solid #e2e8f0' }}><strong>Zero-Downtime Rollout</strong></td>
                      <td style={{ color: '#475569', borderBottom: '1px solid #e2e8f0' }}>Canary traffic shift, live latency alarms, OpenTelemetry dashboarding</td>
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
                    <div><strong>Weekly Working Demos:</strong> Review working API endpoints and queue metrics every single week.</div>
                  </div>
                  <div className="fs-track-item-blue">
                    <div style={{ background: 'rgba(52,168,83,0.15)', color: '#34A853', borderRadius: '50%', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '800', flexShrink: 0 }}>✓</div>
                    <div><strong>Shared Staging Sandboxes:</strong> Full access to staging environments and live queue test harnesses.</div>
                  </div>
                  <div className="fs-track-item-blue">
                    <div style={{ background: 'rgba(52,168,83,0.15)', color: '#34A853', borderRadius: '50%', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '800', flexShrink: 0 }}>✓</div>
                    <div><strong>Direct Developer Slack:</strong> Real-time engineering sync with lead backend and systems developers.</div>
                  </div>
                  <div className="fs-track-item-blue">
                    <div style={{ background: 'rgba(52,168,83,0.15)', color: '#34A853', borderRadius: '50%', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '800', flexShrink: 0 }}>✓</div>
                    <div><strong>Zero Regression Guarantees:</strong> Isolated microservices ensure zero disruption to core business logic.</div>
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
                    <div><strong>API Documentation:</strong> Existing REST/GraphQL endpoints, webhook specifications, and payloads.</div>
                  </div>
                  <div className="fs-track-item-blue">
                    <div style={{ background: 'rgba(96,165,250,0.15)', color: '#60A5FA', borderRadius: '50%', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '800', flexShrink: 0 }}>✦</div>
                    <div><strong>Database Schema Access:</strong> Read-only or staging access to PostgreSQL schema definitions.</div>
                  </div>
                  <div className="fs-track-item-blue">
                    <div style={{ background: 'rgba(96,165,250,0.15)', color: '#60A5FA', borderRadius: '50%', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '800', flexShrink: 0 }}>✦</div>
                    <div><strong>ERP / CRM Credentials:</strong> Sandbox API tokens for systems like NetSuite, Salesforce, or SAP.</div>
                  </div>
                  <div className="fs-track-item-blue">
                    <div style={{ background: 'rgba(96,165,250,0.15)', color: '#60A5FA', borderRadius: '50%', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '800', flexShrink: 0 }}>✦</div>
                    <div><strong>Technical Point of Contact:</strong> An internal engineer or architect to approve PRs and webhook routes.</div>
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
            <h2 className="fs-section-title">Software Integration Tailored to Your Sector</h2>
            <p className="fs-section-subtitle">
              We design integration middleware configured to meet the unique compliance guidelines, database topologies, and latency requirements of your industry.
            </p>

            <div className="fs-grid-3" style={{ marginBottom: '60px' }}>
              <div className="fs-card-premium">
                <h3>Enterprise SaaS Platforms</h3>
                <p>Embed native in-app copilots, semantic product search, and automated customer ticket triaging directly into your existing SaaS interface.</p>
              </div>
              <div className="fs-card-premium">
                <h3>E-Commerce & Retail</h3>
                <p>Automate vendor inventory catalog intake, sync accounts payable invoices to NetSuite, and generate personalized product recommendation feeds.</p>
              </div>
              <div className="fs-card-premium">
                <h3>Banking & Financial Services</h3>
                <p>Automate loan underwriting document processing, integrate real-time fraud alerts with core banking ledgers, and maintain strict SOC2 audit trails.</p>
              </div>
              <div className="fs-card-premium">
                <h3>Healthcare & HealthTech</h3>
                <p>Connect patient intake forms directly to EHR systems (Epic, Cerner), extract clinical pathology data, and comply with HIPAA security mandates.</p>
              </div>
              <div className="fs-card-premium">
                <h3>Logistics & Supply Chain</h3>
                <p>Sync bills of lading, customs declarations, and warehouse inventory updates across disparate legacy databases with zero human intervention.</p>
              </div>
              <div className="fs-card-premium">
                <h3>Professional & Legal Services</h3>
                <p>Automate client billing reconciliation, sync matter management systems, and extract timesheet data from unstructured email streams.</p>
              </div>
            </div>

            {/* Industry comparison table */}
            <div style={{ marginTop: '50px' }}>
              <h3 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '20px', color: '#0b0f19' }}>
                Common Industry Integration Use Cases
              </h3>
              <div className="fs-table-container">
                <table className="fs-table">
                  <thead>
                    <tr>
                      <th>Industry</th>
                      <th>Common Software Integration Use Cases</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Enterprise SaaS</strong></td>
                      <td>Embedded UI copilots, natural language database querying, automated ticket routing.</td>
                    </tr>
                    <tr>
                      <td><strong>E-Commerce & Retail</strong></td>
                      <td>Automated AP invoice ledger reconciliation, catalog vectorization, order fraud scoring.</td>
                    </tr>
                    <tr>
                      <td><strong>Fintech & Banking</strong></td>
                      <td>KYC document extraction, loan packet verification, real-time transaction anomaly flagging.</td>
                    </tr>
                    <tr>
                      <td><strong>Logistics & Freight</strong></td>
                      <td>Customs manifest parsing, automated dispatch scheduling, carrier invoice reconciliation.</td>
                    </tr>
                    <tr>
                      <td><strong>Healthcare</strong></td>
                      <td>EHR patient record enrichment, insurance pre-authorization validation, medical coding.</td>
                    </tr>
                    <tr>
                      <td><strong>Manufacturing</strong></td>
                      <td>ERP bill of materials sync, automated vendor quote comparison, predictive supply ordering.</td>
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
                  <div className="fs-tag-arrows">INTEGRATION STACK</div>
                  <h2 style={{ fontSize: '38px', fontWeight: '800', color: '#0b0f19', marginBottom: '16px' }}>
                    Robust Middleware & System Technologies
                  </h2>
                  <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.6' }}>
                    We build on hardened open-source foundations. Our middleware integrates cleanly with existing microservices and monolithic architectures alike.
                  </p>

                  <div style={{ marginTop: '24px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '12px', color: '#0b0f19' }}>
                      Key Architectural Pillars:
                    </h3>
                    <ul className="fs-bullet-list">
                      <li className="fs-bullet-item">
                        <CheckCircle />
                        <div><strong>Backend Services & APIs:</strong> FastAPI, Python 3.12, Node.js, Express, LiteLLM.</div>
                      </li>
                      <li className="fs-bullet-item">
                        <CheckCircle />
                        <div><strong>Distributed Task Queues:</strong> Celery Worker Pools, Redis Stream Broker, RabbitMQ.</div>
                      </li>
                      <li className="fs-bullet-item">
                        <CheckCircle />
                        <div><strong>Relational & Vector Storage:</strong> PostgreSQL + pgvector, Supabase, Redis Cache.</div>
                      </li>
                      <li className="fs-bullet-item">
                        <CheckCircle />
                        <div><strong>Security & Monitoring:</strong> Langfuse, OpenTelemetry, Docker, Kubernetes.</div>
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
                        <h3 className="sub">API & Middleware</h3>
                        <div className="skill">
                          <p className="skills">FastAPI (Python)</p>
                          <p className="skills">Node.js / Express</p>
                          <p className="skills">LiteLLM Gateway</p>
                          <p className="skills">Kong API Gateway</p>
                          <p className="skills">GraphQL / REST</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tech_stack">
                    <div className="framework">
                      <div className="bgcolorto">
                        <h3 className="sub">Task Queues & Events</h3>
                        <div className="skill">
                          <p className="skills bg">Celery Worker Pool</p>
                          <p className="skills bg">Redis Task Broker</p>
                          <p className="skills bg">RabbitMQ</p>
                          <p className="skills bg">AWS SQS / EventBridge</p>
                          <p className="skills bg">WebSockets</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tech_stack">
                    <div className="framework">
                      <div className="bg_cool_aqua">
                        <h3 className="sub">Databases & Vectors</h3>
                        <div className="skill">
                          <p className="skills cool_aqua">PostgreSQL</p>
                          <p className="skills cool_aqua">pgvector Extension</p>
                          <p className="skills cool_aqua">Supabase</p>
                          <p className="skills cool_aqua">Redis In-Memory</p>
                          <p className="skills cool_aqua">Prisma / SQLAlchemy</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tech_stack">
                    <div className="framework">
                      <div className="bg_lavender">
                        <h3 className="sub">Observability & Infra</h3>
                        <div className="skill">
                          <p className="skills lavender">Langfuse (Audit)</p>
                          <p className="skills lavender">Docker Containers</p>
                          <p className="skills lavender">Kubernetes (EKS/GKE)</p>
                          <p className="skills lavender">OpenTelemetry</p>
                          <p className="skills lavender">AWS Cloud Run</p>
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
            <h2 className="fs-section-title">An Engineering-First Partner for Software Teams</h2>
            <p className="fs-section-subtitle">
              We work alongside your internal developers with clean git repositories, comprehensive documentation, and zero vendor lock-in.
            </p>

            <div className="fs-grid-3">
              <div className="fs-card-premium">
                <h3>100% Source Code Ownership</h3>
                <p>All middleware source code, integration scripts, and schemas belong directly to you. No ongoing proprietary licensing.</p>
              </div>
              <div className="fs-card-premium">
                <h3>Direct Lead Engineer Collaboration</h3>
                <p>Collaborate via direct developer channels. We coordinate directly with your CTO and lead architects to ensure architectural synergy.</p>
              </div>
              <div className="fs-card-premium">
                <h3>ACID-Compliant Transactions</h3>
                <p>Every AI-triggered write operation adheres to strict relational database consistency with automatic rollback capabilities.</p>
              </div>
              <div className="fs-card-premium">
                <h3>Production SLA Guarantees</h3>
                <p>We provide long-term SLA contracts covering bug fixes, API version upgrades, and automated dependency patching.</p>
              </div>
              <div className="fs-card-premium">
                <h3>Cross-Platform Ecosystem</h3>
                <p>Pair integrated software with our <Link to="/services/gen-ai-development" style={{ color: '#2E29FF', fontWeight: '700' }}>Generative AI</Link>, <Link to="/services/chatbot-development" style={{ color: '#2E29FF', fontWeight: '700' }}>AI Chatbots</Link>, and <Link to="/forge-ai" style={{ color: '#2E29FF', fontWeight: '700' }}>FORGE AI</Link> solutions.</p>
              </div>
              <div className="fs-card-premium">
                <h3>Transparent Delivery Milestones</h3>
                <p>Fixed milestones with clear acceptance criteria and live staging environments where your engineering team can review PRs.</p>
              </div>
            </div>

          </div>
        </section>

        {/* 10. FAQ SECTION (EXACT MATCH HOMEPAGE / CHATBOT FAQ) */}
        <section className="nd-faq">
          <div className="nd-faq-inner">
            <div className="nd-faq-tag">✦ FAQS ✦</div>
            <h2 className="nd-faq-title">AI Software Integration: Frequently Asked Questions</h2>
            <div className="nd-faq-list">
              {faqs.map((f, i) => (
                <FaqItem key={i} q={f.q} a={f.a} open={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} />
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
              <Link to="/contact-us" className="nd-faq-cta-btn">
                Have specific database or API questions? Talk to Our Engineers ↗
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
                  <span className="fs-cta-badge-dot"></span> Direct Founder & Lead Systems Engineer Access
                </span>
                <h2>Ready to Upgrade Your Software with Production AI?</h2>
                <p>
                  Eliminate manual back-office entry, supercharge databases with semantic search, and build intelligent features with zero platform rewrites.
                </p>
                <div className="fs-cta-trust-items">
                  <span>✓ 100% Source Code Ownership</span>
                  <span>✓ Zero Risky Database Regressions</span>
                  <span>✓ Production SLA Support</span>
                </div>
              </div>

              <div className="fs-cta-actions-right">
                <Link to="/contact-us" className="fs-btn-cta-primary">
                  Book Technical Discovery Call <ArrowRight />
                </Link>
                <Link to="/get-a-free-quote" className="fs-btn-cta-secondary">
                  Request Integration Estimate
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
