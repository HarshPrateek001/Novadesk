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

// Interactive Hero Simulation Widget: Live AI Middleware & Pipeline Integration
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
        <div className="nd-browser-topbar nd-browser-topbar-flex">
          <div className="nd-browser-dots">
            <span className="nd-dot red"></span>
            <span className="nd-dot yellow"></span>
            <span className="nd-dot green"></span>
          </div>
          <div className="nd-status-tag blue">
            <span className="nd-status-dot"></span>
            NovaDesk AI Middleware Gateway · Live
          </div>
        </div>

        <div className="nd-integ-body">
          {/* Scenario Tabs */}
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

          {/* Integration Trigger Pill */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#f8fafc', padding: '10px 14px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '12px' }}>
            <span style={{ fontFamily: 'monospace', color: '#2E29FF', fontWeight: '700' }}>{current.trigger}</span>
            <span style={{ color: '#64748b' }}>Origin: <strong>{current.source}</strong></span>
          </div>

          {/* 3-Stage Pipeline Visualization */}
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

          {/* Live Execution Console */}
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

// Interactive Architecture Visualizer
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

  const capabilities = [
    {
      title: "Legacy SaaS AI Modernization",
      tagline: "Non-Invasive System Upgrades",
      badge: "Zero Re-platforming",
      desc: "Inject predictive intelligence, semantic search, and autonomous data processing into decade-old enterprise software without rewriting core business logic or risking database regressions.",
      bullets: ["Microservice middleware architecture", "Preserved transactional schemas", "Sub-50ms API response pass-through", "Incremental feature deployment"]
    },
    {
      title: "In-Database Vectorization",
      tagline: "PostgreSQL & pgvector Integration",
      badge: "ACID Compliant",
      desc: "Supercharge your existing relational databases with native HNSW vector embeddings. Query relational business columns and high-dimensional semantic vectors in a single performant SQL statement.",
      bullets: ["Native pgvector extensions", "Zero third-party DB synchronization", "Sub-15ms vector similarity queries", "ACID transactional consistency"]
    },
    {
      title: "Asynchronous AI Task Workers",
      tagline: "Celery & Redis Worker Pools",
      badge: "High Throughput",
      desc: "Prevent model inference from locking web application threads. Background worker pools handle bulk document OCR, batch embeddings, and multi-step agent reasoning with horizontal autoscaling.",
      bullets: ["Decoupled task queues (Celery/Redis)", "Dead-letter queue error recovery", "Real-time WebSocket status updates", "Automatic retry with backoff"]
    },
    {
      title: "Enterprise ERP & CRM Gateways",
      tagline: "Bidirectional System Webhooks",
      badge: "Workflow Automation",
      desc: "Connect LLM intelligence directly to SAP, NetSuite, Salesforce, HubSpot, and Stripe. The AI listens to business events, parses incoming documents, and executes validated records automatically.",
      bullets: ["HMAC signature verification", "Idempotent transactional writes", "Automated accounts payable reconciliation", "Two-way CRM record synchronization"]
    },
    {
      title: "Embedded In-App AI Copilots",
      tagline: "Native UI Contextual Assistants",
      badge: "User Experience",
      desc: "Empower end-users with contextual AI copilots embedded directly in your SaaS dashboard. Copilots draft emails, summarize user activity, suggest next best actions, and execute complex UI actions.",
      bullets: ["Context-aware user session tracking", "Role-based action execution", "Inline text completion & suggestions", "Rich interactive UI widgets"]
    },
    {
      title: "Zero-Trust Security & Auditing",
      tagline: "Multi-Tenant RBAC & Logging",
      badge: "SOC 2 & HIPAA Ready",
      desc: "Enforce multi-tenant data isolation, column-level PII obfuscation, and cryptographic audit logs for every model inference and database write using Langfuse and OpenTelemetry.",
      bullets: ["Tenant Row-Level Security (RLS)", "Automated PII scrubbing pipelines", "Immutable SHA-256 audit logging", "Compliance-ready telemetry exports"]
    }
  ];

  const steps = [
    { num: "01", title: "Architecture & Schema Audit", time: "Week 1", desc: "Audit existing software databases, API endpoints, auth mechanisms, and throughput bottlenecks to map seamless integration touchpoints." },
    { num: "02", title: "Non-Invasive Middleware Scaffolding", time: "Week 2", desc: "Build a decoupled FastAPI/Node.js middleware gateway with Redis caching and webhook listeners that connects to your existing services." },
    { num: "03", title: "Vector Layer & pgvector Setup", time: "Weeks 2–3", desc: "Configure native pgvector extensions on your PostgreSQL instances, generate domain embeddings, and establish HNSW vector indexes." },
    { num: "04", title: "Background Worker & Task Queues", time: "Weeks 3–4", desc: "Deploy distributed Celery worker pools with Redis brokers to handle asynchronous document ingestion and model inference without UI latency." },
    { num: "05", title: "Circuit Breakers & Deterministic Fallbacks", time: "Weeks 4–5", desc: "Engineer multi-model failover routes, token rate-limiting budgets, and fallback heuristic logic to guarantee 99.99% system availability." },
    { num: "06", title: "RBAC & End-to-End Security Testing", time: "Weeks 5–6", desc: "Validate tenant isolation filters, execute adversarial penetration tests, and verify immutable Langfuse audit logs." },
    { num: "07", title: "Zero-Downtime Rollout & Telemetry", time: "Week 7+", desc: "Canary rollout of AI features with real-time latency monitoring, error rate alarms, and continuous performance tuning." }
  ];

  return (
    <>
      <SEO 
        title="AI-Integrated Software Development | Modernize Legacy Systems & SaaS | NovaDesk"
        description="Integrate AI directly into your existing software, ERP, CRM, and databases. Custom AI middleware, in-database pgvector search, automated background task workers, and deterministic fallbacks."
        url="/services/ai-integrated-software"
        image="https://www.novadesk.site/og-image.png"
        keywords="AI integrated software development, legacy system AI modernization, AI middleware engineering, pgvector postgresql integration, Celery Redis AI task workers, ERP AI integration, enterprise SaaS AI copilot"
        schema={schemaJson}
      />

      <div className="fs-page">

        {/* 1. HERO SECTION */}
        <section className="fs-hero">
          <div className="fs-container fs-hero-grid">
            <div className="fs-hero-text">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(46,41,255,0.08)', border: '1px solid rgba(46,41,255,0.2)', padding: '6px 16px', borderRadius: '40px', fontSize: '11px', fontWeight: '700', color: '#2E29FF', letterSpacing: '0.8px', textTransform: 'uppercase', marginBottom: '20px' }}>
                ENTERPRISE SOFTWARE MODERNIZATION
              </div>
              <h1 className="fs-hero-title">
                Embed AI Directly into <span className="fs-text-blue">Your Existing Software</span>
              </h1>
              <p className="fs-hero-desc" style={{ marginBottom: '32px' }}>
                Modernize legacy databases, ERPs, CRMs, and SaaS platforms with custom AI middleware. We build in-database vector search, asynchronous background task workers, and resilient circuit breakers with zero risky rewrites.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
                  <Link to="/contact-us" className="fs-btn fs-btn-primary" style={{ height: '52px', padding: '0 28px', borderRadius: '12px', fontSize: '15px', fontWeight: '700', boxShadow: '0 8px 20px rgba(46, 41, 255, 0.25)' }}>
                    Book Integration Consultation <ArrowRight />
                  </Link>
                  <Link to="/case-studies" className="fs-btn" style={{ height: '52px', padding: '0 26px', borderRadius: '12px', fontSize: '15px', fontWeight: '700', backgroundColor: '#0B0F19', color: '#ffffff', textDecoration: 'none' }}>
                    View Engineering Case Studies →
                  </Link>
                </div>

                <div style={{ fontSize: '13.5px', color: '#475569', display: 'flex', flexWrap: 'wrap', gap: '22px', fontWeight: '600', marginTop: '6px', alignItems: 'center' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle /> Zero Risky Code Rewrites
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle /> Native In-Database pgvector Search
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle /> 99.99% Fault-Tolerant Circuit Breakers
                  </span>
                </div>
              </div>
            </div>

            {/* Live Interactive Hero Simulation */}
            <div className="fs-hero-image-wrapper">
              <HeroIntegrationAnimation />
            </div>
          </div>
        </section>

        {/* 2. FOUNDER-LED VALUE STRIP */}
        <section className="fs-agency-alt">
          <div className="fs-container">
            <div className="fs-agency-grid">
              <div className="fs-agency-card">
                <div className="fs-agency-num">0</div>
                <div className="fs-agency-label">Legacy Rewrites Needed</div>
                <div className="fs-agency-sub">Non-invasive middleware attaches cleanly</div>
              </div>
              <div className="fs-agency-card">
                <div className="fs-agency-num">&lt; 45ms</div>
                <div className="fs-agency-label">UI Response Latency</div>
                <div className="fs-agency-sub">Heavy inference runs in Celery task queues</div>
              </div>
              <div className="fs-agency-card">
                <div className="fs-agency-num">99.99%</div>
                <div className="fs-agency-label">System Availability</div>
                <div className="fs-agency-sub">Deterministic failovers & circuit breakers</div>
              </div>
              <div className="fs-agency-card">
                <div className="fs-agency-num">100%</div>
                <div className="fs-agency-label">IP & Middleware Ownership</div>
                <div className="fs-agency-sub">You own all integration adapters & code</div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. INTERACTIVE ARCHITECTURE VISUALIZER */}
        <section className="fs-section fs-section-bg-slate">
          <div className="fs-container">
            <div className="fs-tag-arrows">SYSTEM ARCHITECTURE</div>
            <h2 className="fs-section-title">Battle-Tested Integration Blueprints</h2>
            <p className="fs-section-subtitle">
              We design integration pipelines that preserve your database performance, protect multi-tenant security, and never freeze the user interface. Click below to inspect our architecture.
            </p>

            <div className="av-tabs" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center', margin: '24px 0 32px' }}>
              {["Async Celery Queues", "In-DB pgvector", "Circuit Breakers", "ERP Webhook Bus", "Zero-Trust RBAC"].map((name, i) => (
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

            <ArchVizIntegration activeArch={activeArch} />
          </div>
        </section>

        {/* 4. COMPARISON: LOW-CODE WRAPPERS VS CUSTOM HARDENED MIDDLEWARE */}
        <section className="fs-section">
          <div className="fs-container">
            <div className="fs-tag-arrows">ENGINEERING REALITY</div>
            <h2 className="fs-section-title">Why Low-Code Zapier / Make Stacks Break at Scale</h2>
            <p className="fs-section-subtitle">
              Stitching enterprise software with no-code tools creates unmonitored security holes, massive payload latency, and silent data drop-offs. Here is why custom middleware wins.
            </p>

            <div className="fs-comp-grid">
              <div className="fs-comp-card fs-comp-card-cookie">
                <div className="fs-comp-header">
                  <span className="fs-comp-badge">Low-Code / Zapier / Make</span>
                  <h3>Fragile Webhook Chains</h3>
                  <p>Superficial no-code pipelines that silently fail under production loads.</p>
                </div>
                <div className="fs-comp-list">
                  <div className="fs-comp-item">
                    <span className="fs-comp-item-icon">✕</span>
                    <div><strong>Silent Data Drops:</strong> When third-party APIs hit rate limits or timeout, webhook payloads are dropped without transactional rollbacks.</div>
                  </div>
                  <div className="fs-comp-item">
                    <span className="fs-comp-item-icon">✕</span>
                    <div><strong>No Idempotency:</strong> Duplicate webhook firings create duplicate records, double-billing customers or corrupting inventory ledgers.</div>
                  </div>
                  <div className="fs-comp-item">
                    <span className="fs-comp-item-icon">✕</span>
                    <div><strong>Zero Security Compliance:</strong> Sensitive enterprise data transits unencrypted third-party workflow platforms, violating SOC 2 and HIPAA.</div>
                  </div>
                  <div className="fs-comp-item">
                    <span className="fs-comp-item-icon">✕</span>
                    <div><strong>Crippling Step Pricing:</strong> SaaS subscription costs scale exponentially with every background action and webhook event.</div>
                  </div>
                </div>
              </div>

              <div className="fs-comp-card fs-comp-card-custom">
                <div className="fs-comp-header">
                  <span className="fs-comp-badge">The NovaDesk Way</span>
                  <h3>Hardened Custom Middleware</h3>
                  <p>Enterprise-grade microservices with ACID transactions, queues, and security.</p>
                </div>
                <div className="fs-comp-list">
                  <div className="fs-comp-item">
                    <span className="fs-comp-item-icon">✓</span>
                    <div><strong>Dead-Letter Queues & Backoff:</strong> Celery task queues automatically retry failed calls with exponential backoff and persistent state preservation.</div>
                  </div>
                  <div className="fs-comp-item">
                    <span className="fs-comp-item-icon">✓</span>
                    <div><strong>Strict Idempotency Keys:</strong> Every event carries unique cryptographic identifiers guaranteeing records are written exactly once.</div>
                  </div>
                  <div className="fs-comp-item">
                    <span className="fs-comp-item-icon">✓</span>
                    <div><strong>Private VPC Isolation:</strong> Middleware executes inside your own cloud infrastructure with zero third-party data leaks.</div>
                  </div>
                  <div className="fs-comp-item">
                    <span className="fs-comp-item-icon">✓</span>
                    <div><strong>Predictable Compute Costs:</strong> Zero per-step platform tax. You pay only for your standard server infrastructure.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. 6 CORE CAPABILITIES */}
        <section className="fs-section fs-section-bg-slate">
          <div className="fs-container">
            <div className="fs-tag-arrows">INTEGRATION CAPABILITIES</div>
            <h2 className="fs-section-title">Comprehensive AI Software Modernization</h2>
            <p className="fs-section-subtitle">
              We provide the complete technical pipeline required to embed intelligent features directly into your core business systems.
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
            <div className="fs-tag-arrows">BUSINESS VALUE</div>
            <h2 className="fs-section-title">Measurable Efficiency Gains Across the Business</h2>
            <p className="fs-section-subtitle">
              Embedding AI into existing operational software unlocks immense efficiency without the multi-year risk of replatforming.
            </p>

            <div className="fs-roi-grid">
              <div className="fs-roi-card">
                <div className="fs-roi-stat">68%</div>
                <div className="fs-roi-title">Manual Data Entry Reduction</div>
                <p className="fs-roi-desc">AP invoice parsing, customer onboarding forms, and order syncing handled automatically with schema validation.</p>
              </div>
              <div className="fs-roi-card">
                <div className="fs-roi-stat">3.5x</div>
                <div className="fs-roi-title">Faster Feature Velocity</div>
                <p className="fs-roi-desc">Deploy modern AI search, copilots, and automation in weeks rather than spending 18 months rewriting software.</p>
              </div>
              <div className="fs-roi-card">
                <div className="fs-roi-stat">99.99%</div>
                <div className="fs-roi-title">Production SLA Uptime</div>
                <p className="fs-roi-desc">Multi-tiered circuit breakers ensure third-party API outages never cascade into core software downtime.</p>
              </div>
              <div className="fs-roi-card">
                <div className="fs-roi-stat">$0</div>
                <div className="fs-roi-title">Re-Platforming Capital Loss</div>
                <p className="fs-roi-desc">Preserve millions invested in custom enterprise business logic, SQL schemas, and legacy integrations.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. 7-STAGE DELIVERY METHODOLOGY */}
        <section className="fs-process-blue">
          <div className="fs-container">
            <div className="fs-tag-white">INTEGRATION CADENCE</div>
            <h2 className="fs-title-white">Our 7-Stage Engineering Roadmap</h2>
            <p className="fs-subtitle-white">
              A structured, risk-free methodology that delivers functional AI capabilities without interrupting ongoing operations.
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
                  <div className="fs-tag-arrows">INTEGRATION STACK</div>
                  <h2 style={{ fontSize: '38px', fontWeight: '800', color: '#0b0f19', marginBottom: '16px' }}>
                    Robust Middleware & System Technologies
                  </h2>
                  <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.6' }}>
                    We build on hardened open-source foundations. Our middleware integrates cleanly with existing microservices and monolithic architectures alike.
                  </p>

                  <div style={{ marginTop: '24px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '12px', color: '#0b0f19' }}>
                      Key Architectural Components:
                    </h3>
                    <ul className="fs-bullet-list">
                      <li className="fs-bullet-item">
                        <CheckCircle />
                        <div><strong>Backend Services & APIs:</strong> FastAPI, Python 3.12, Node.js, Express, Go.</div>
                      </li>
                      <li className="fs-bullet-item">
                        <CheckCircle />
                        <div><strong>Distributed Task Queues:</strong> Celery, Redis Broker, RabbitMQ, Amazon SQS.</div>
                      </li>
                      <li className="fs-bullet-item">
                        <CheckCircle />
                        <div><strong>Relational & Vector Storage:</strong> PostgreSQL + pgvector, Supabase, Redis Cache.</div>
                      </li>
                      <li className="fs-bullet-item">
                        <CheckCircle />
                        <div><strong>Security & Monitoring:</strong> Langfuse, OpenTelemetry, Prometheus, Docker, Kubernetes.</div>
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

        {/* 9. TRUST & SECURITY STANDARDS */}
        <section className="fs-section fs-section-bg-slate">
          <div className="fs-container">
            <div className="fs-tag-arrows">SECURITY & COMPLIANCE</div>
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
                <h3>Direct Engineer Collaboration</h3>
                <p>Collaborate via direct developer channels. We coordinate directly with your CTO and lead architects to ensure architectural synergy.</p>
              </div>
              <div className="fs-card-premium">
                <h3>ACID-Compliant Transactions</h3>
                <p>Every AI-triggered write operation adheres to strict relational database consistency with rollback capabilities.</p>
              </div>
              <div className="fs-card-premium">
                <h3>Production SLA Guarantees</h3>
                <p>We provide long-term SLA contracts covering bug fixes, API version upgrades, and automated dependency patching.</p>
              </div>
              <div className="fs-card-premium">
                <h3>Cross-Product Ecosystem</h3>
                <p>Pair integrated software with our <Link to="/services/gen-ai-development" style={{ color: '#2E29FF', fontWeight: '700' }}>Generative AI</Link>, <Link to="/services/chatbot-development" style={{ color: '#2E29FF', fontWeight: '700' }}>AI Chatbots</Link>, and <Link to="/forge-ai" style={{ color: '#2E29FF', fontWeight: '700' }}>FORGE AI</Link> solutions.</p>
              </div>
              <div className="fs-card-premium">
                <h3>Transparent Delivery Milestones</h3>
                <p>Fixed milestones with clear acceptance criteria and live staging environments where your engineering team can review PRs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 10. COMPREHENSIVE FAQ SECTION */}
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

        {/* 11. CLOSING HIGH-CONVERTING CTA BANNER */}
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
