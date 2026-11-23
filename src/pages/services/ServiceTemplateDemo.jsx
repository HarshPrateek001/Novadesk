import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import './service-template-demo.css';

const codeSnippets = {
  edge: `// Edge Runtime Gateway - Sub-millisecond Execution
export default async function handleRequest(req: Request) {
  const cacheKey = req.headers.get("x-edge-cache");
  const cached = await edgeKV.get(cacheKey);
  if (cached) return new Response(cached, { status: 200, headers: { "X-Cache": "HIT" } });

  const stream = await aiOrchestrator.streamPipeline({
    model: "claude-3-7-sonnet-enterprise",
    temperature: 0.2,
    streaming: true,
    telemetry: { p99TargetMs: 14 }
  });

  return new Response(stream, { headers: { "Content-Type": "text/event-stream" } });
}`,
  agentic: `# Agentic AI Core - Deterministic Reasoning Graph
class EnterpriseAgentWorker:
    def __init__(self, tenant_id: str):
        self.graph = StateGraph(AgentState)
        self.vector_store = PGVectorStore(conn_pool, table="rag_embeddings")
        self.guardrails = StructuredSchemaValidator(strict=True)

    async def execute_task(self, query: str) -> StreamResult:
        context = await self.vector_store.hybrid_search(query, top_k=6)
        response = await self.graph.invoke({"input": query, "context": context})
        return self.guardrails.enforce(response)`,
  vector: `-- pgvector Hyper-Scale Semantic Retrieval Index
CREATE TABLE enterprise_documents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id VARCHAR(64) NOT NULL,
  embedding vector(1536),
  metadata JSONB NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- HNSW Cosine Distance Index for < 3ms P99 Vector Search
CREATE INDEX ON enterprise_documents 
USING hnsw (embedding vector_cosine_ops)
WITH (m = 16, ef_construction = 64);`,
  micro: `// High-Throughput Event-Driven Microservice Pipeline
package pipeline

func DispatchLeadEvent(ctx context.Context, lead *LeadPayload) error {
	span, ctx := tracer.Start(ctx, "DispatchLeadEvent")
	defer span.End()

	payload, err := json.Marshal(lead)
	if err != nil {
		return err
	}

	return natsClient.Publish("leads.v1.stream", payload)
}`
};

export default function ServiceTemplateDemo() {
  const [activeTab, setActiveTab] = useState('edge');
  const [promptSimulated, setPromptSimulated] = useState(false);
  const [streamProgress, setStreamProgress] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let interval = null;
    if (promptSimulated) {
      setStreamProgress(0);
      interval = setInterval(() => {
        setStreamProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 20;
        });
      }, 150);
    }
    return () => clearInterval(interval);
  }, [promptSimulated]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "NovaDesk Visual Service Template Showcase",
    "serviceType": "Next-Gen Software Engineering & AI Systems",
    "provider": {
      "@type": "Organization",
      "name": "NovaDesk",
      "url": "https://www.novadesk.site"
    },
    "description": "High-velocity modern software engineering, generative AI integration, and enterprise cloud architecture built for agile founders."
  };

  return (
    <div className="vsd-root">
      <SEO
        title="Visual Service Showcase & Architecture Template | NovaDesk"
        description="Experience NovaDesk's next-generation service architecture. High-velocity visual engineering, ultra-low latency edge microservices, and AI-native digital systems."
        canonicalUrl="/services/template-showcase"
        structuredData={serviceSchema}
      />

      <div className="vsd-ambient-mesh" aria-hidden="true" />

      {/* 1. HERO SECTION */}
      <section className="vsd-hero">
        <div className="vsd-container">
          <div className="vsd-hero-grid">
            <div className="vsd-hero-content">
              <div className="vsd-status-pill">
                <span className="vsd-pulse-dot" />
                <span>Next-Gen Service Architecture • v3.0</span>
              </div>

              <h1 className="vsd-hero-title">
                ENGINEERED FOR <span className="vsd-gradient-text">VELOCITY</span>.<br />
                SCALED WITHOUT LIMITS.
              </h1>

              <p className="vsd-hero-lead">
                Eliminate agency theater. Direct access to senior full-stack & AI engineers shipping sub-millisecond cloud backends, deterministic LLM pipelines, and production-ready web apps in 7-day milestones.
              </p>

              <div className="vsd-hero-ctas">
                <Link to="/contact-us" className="vsd-btn-primary">
                  <span>Start Your Build</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
                <a 
                  href="https://calendly.com/itsharshprateek/30min" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="vsd-btn-secondary"
                >
                  <span>Book Architecture Audit</span>
                </a>
              </div>

              <div className="vsd-hero-trust-chips">
                <div className="vsd-trust-chip">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>100% Code Ownership</span>
                </div>
                <div className="vsd-trust-chip">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Direct Slack Access</span>
                </div>
                <div className="vsd-trust-chip">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>SOC2 & GDPR Aligned</span>
                </div>
              </div>
            </div>

            {/* Interactive Holographic Terminal Showcase */}
            <div className="vsd-hero-visual">
              <div className="vsd-float-badge vsd-badge-1">
                <span className="vsd-pulse-dot" />
                <span>P99 &lt; 14ms Edge Latency</span>
              </div>

              <div className="vsd-float-badge vsd-badge-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2E29FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <span>Zero Hallucination Guardrails</span>
              </div>

              <div className="vsd-float-badge vsd-badge-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                  <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                  <line x1="6" y1="6" x2="6.01" y2="6"></line>
                  <line x1="6" y1="18" x2="6.01" y2="18"></line>
                </svg>
                <span>Serverless Microservices</span>
              </div>

              <div className="vsd-terminal-card">
                <div className="vsd-terminal-topbar">
                  <div className="vsd-dots">
                    <span className="vsd-dot red" />
                    <span className="vsd-dot yellow" />
                    <span className="vsd-dot green" />
                  </div>
                  <div className="vsd-terminal-title">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="4 17 10 11 4 5"></polyline>
                      <line x1="12" y1="19" x2="20" y2="19"></line>
                    </svg>
                    <span>novadesk-engine@v3.0.4</span>
                  </div>
                </div>

                <div className="vsd-terminal-tabs">
                  <button
                    type="button"
                    className={`vsd-tab-btn ${activeTab === 'edge' ? 'active' : ''}`}
                    onClick={() => setActiveTab('edge')}
                  >
                    edge.ts
                  </button>
                  <button
                    type="button"
                    className={`vsd-tab-btn ${activeTab === 'agentic' ? 'active' : ''}`}
                    onClick={() => setActiveTab('agentic')}
                  >
                    agent.py
                  </button>
                  <button
                    type="button"
                    className={`vsd-tab-btn ${activeTab === 'vector' ? 'active' : ''}`}
                    onClick={() => setActiveTab('vector')}
                  >
                    vectors.sql
                  </button>
                  <button
                    type="button"
                    className={`vsd-tab-btn ${activeTab === 'micro' ? 'active' : ''}`}
                    onClick={() => setActiveTab('micro')}
                  >
                    pipeline.go
                  </button>
                </div>

                <pre className="vsd-terminal-code">
                  <code>{codeSnippets[activeTab]}</code>
                </pre>

                <div className="vsd-terminal-footer">
                  <div className="vsd-footer-metric">
                    <span className="vsd-pulse-dot" />
                    <span>Live Cluster: Health 100%</span>
                  </div>
                  <div>Build Status: PASSING (70/70)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. REAL-TIME METRICS TELEMETRY STRIP */}
      <div className="vsd-container">
        <div className="vsd-metrics-strip">
          <div className="vsd-metrics-grid">
            <div className="vsd-metric-item">
              <div className="vsd-metric-val">12<span>ms</span></div>
              <div className="vsd-metric-lbl">Global CDN TTFB Latency</div>
            </div>
            <div className="vsd-metric-item">
              <div className="vsd-metric-val">100<span>%</span></div>
              <div className="vsd-metric-lbl">Day-One IP & Repo Ownership</div>
            </div>
            <div className="vsd-metric-item">
              <div className="vsd-metric-val">420<span>+</span></div>
              <div className="vsd-metric-lbl">Production Pipelines Shipped</div>
            </div>
            <div className="vsd-metric-item">
              <div className="vsd-metric-val">7<span>d</span></div>
              <div className="vsd-metric-lbl">Sprint to Live Clickable Staging</div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. ANIMATED CONNECTED PIPELINE (DATAFLOW) */}
      <section className="vsd-section">
        <div className="vsd-container">
          <div className="vsd-section-header">
            <span className="vsd-section-tag">How We Build & Ship</span>
            <h2 className="vsd-section-title">End-to-End Autonomous Engineering Lifecycle</h2>
            <p className="vsd-section-sub">
              From vector data indexing to zero-downtime distributed deployments, every system is engineered for measurable ROI and seamless developer handoff.
            </p>
          </div>

          <div className="vsd-pipeline-grid">
            <div className="vsd-pipe-node">
              <div className="vsd-node-head">
                <span className="vsd-node-num">01 // INGEST</span>
                <div className="vsd-node-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                </div>
              </div>
              <h3>Telemetry & API Ingestion</h3>
              <p>Hook into existing databases, event queues, and third-party APIs with high-throughput webhook consumers.</p>
            </div>

            <div className="vsd-pipe-node">
              <div className="vsd-node-head">
                <span className="vsd-node-num">02 // ARCHITECT</span>
                <div className="vsd-node-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                    <polyline points="2 17 12 22 22 17"></polyline>
                    <polyline points="2 12 12 17 22 12"></polyline>
                  </svg>
                </div>
              </div>
              <h3>Agentic & Data Modeling</h3>
              <p>Construct deterministic state graphs, RAG embeddings, and vector similarity indexes with zero hallucinations.</p>
            </div>

            <div className="vsd-pipe-node">
              <div className="vsd-node-head">
                <span className="vsd-node-num">03 // SHIP</span>
                <div className="vsd-node-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polygon points="10 8 16 12 10 16 10 8"></polygon>
                  </svg>
                </div>
              </div>
              <h3>Continuous 7-Day Staging</h3>
              <p>Weekly milestone builds pushed to isolated staging environments where you test live features with your team.</p>
            </div>

            <div className="vsd-pipe-node">
              <div className="vsd-node-head">
                <span className="vsd-node-num">04 // SCALE</span>
                <div className="vsd-node-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="18" y1="20" x2="18" y2="10"></line>
                    <line x1="12" y1="20" x2="12" y2="4"></line>
                    <line x1="6" y1="20" x2="6" y2="14"></line>
                  </svg>
                </div>
              </div>
              <h3>Zero-Downtime Global Edge</h3>
              <p>Auto-scaling serverless containers, global edge caching, and automated audit trails deployed with 99.99% uptime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. VISUAL BENTO GRID (CAPABILITIES & INTERACTIVE DEMOS) */}
      <section className="vsd-section" style={{ paddingTop: 0 }}>
        <div className="vsd-container">
          <div className="vsd-section-header">
            <span className="vsd-section-tag">High-Impact Capabilities</span>
            <h2 className="vsd-section-title">Engineered to Outperform Legacy Software</h2>
            <p className="vsd-section-sub">
              Explore the core architectural building blocks we deploy across every custom client engagement.
            </p>
          </div>

          <div className="vsd-bento-grid">
            {/* Card 1: 2-column interactive prompt stream */}
            <div className="vsd-bento-card vsd-bento-col-2">
              <div>
                <span className="vsd-bento-badge blue">Autonomous AI Simulation</span>
                <h3>Deterministic Multi-Agent Runtime</h3>
                <p>
                  Experience real-time prompt routing and schema validation without unpredictable hallucinations. Click below to trigger our deterministic streaming pipeline.
                </p>
              </div>

              <div className="vsd-interactive-box">
                <div className="vsd-prompt-pill">
                  <span>Query: "Analyze Q3 Enterprise Churn & Synthesize Retention Strategy"</span>
                  <button
                    type="button"
                    onClick={() => setPromptSimulated(true)}
                    style={{
                      background: '#2E29FF',
                      border: 'none',
                      color: '#FFF',
                      padding: '6px 14px',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '12px',
                      fontWeight: '700'
                    }}
                  >
                    {promptSimulated ? 'Re-run Pipeline' : 'Simulate Pipeline'}
                  </button>
                </div>

                {promptSimulated && (
                  <div className="vsd-stream-output">
                    [0.012s] Embedding query (1536-dim vector)...<br />
                    [0.024s] Matched 4 historical cohorts in pgvector (cosine sim &gt; 0.91)...<br />
                    [0.051s] Enforcing strict Zod validation schema...<br />
                    [0.088s] Output validated: <strong>{streamProgress}% Completed</strong><br />
                    {streamProgress >= 100 && (
                      <span style={{ color: '#38BDF8', display: 'block', marginTop: '6px' }}>
                        ✓ Strategy synthesized: Identified 3 core friction points; zero hallucinations detected.
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Card 2: 1-column Edge Radar */}
            <div className="vsd-bento-card">
              <div>
                <span className="vsd-bento-badge green">Sub-ms Global Edge</span>
                <h3>Real-Time Edge Network</h3>
                <p>Distributed CDN execution across 300+ PoPs worldwide with zero cold starts.</p>
              </div>

              <div className="vsd-mini-radar">
                <div className="vsd-radar-circle">
                  <div className="vsd-radar-sweep" />
                  <div className="vsd-radar-core" />
                </div>
                <div className="vsd-radar-stats">
                  <div className="vsd-rs-item">P99: <span>14ms</span></div>
                  <div className="vsd-rs-item">Nodes: <span>320+ PoPs</span></div>
                  <div className="vsd-rs-item">SLA: <span>99.99%</span></div>
                </div>
              </div>
            </div>

            {/* Card 3: Vector Security Shield */}
            <div className="vsd-bento-card">
              <div>
                <span className="vsd-bento-badge cyan">Enterprise Security</span>
                <h3>SOC2 & Zero-Trust Architecture</h3>
                <p>Row-level database security, automated secrets rotation, and sanitized data masking for enterprise compliance.</p>
              </div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <span style={{ background: 'rgba(255,255,255,0.06)', padding: '6px 12px', borderRadius: '8px', fontSize: '12px', color: '#CBD5E1' }}>End-to-End TLS 1.3</span>
                <span style={{ background: 'rgba(255,255,255,0.06)', padding: '6px 12px', borderRadius: '8px', fontSize: '12px', color: '#CBD5E1' }}>Role-Based Access</span>
                <span style={{ background: 'rgba(255,255,255,0.06)', padding: '6px 12px', borderRadius: '8px', fontSize: '12px', color: '#CBD5E1' }}>Automated Pentests</span>
              </div>
            </div>

            {/* Card 4: 60fps UX Design Systems */}
            <div className="vsd-bento-card">
              <div>
                <span className="vsd-bento-badge green">Modern Frontend</span>
                <h3>60fps Fluid Design Systems</h3>
                <p>Component-driven UI built with React 19, CSS hardware acceleration, and seamless micro-interactions that captivate users.</p>
              </div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <span style={{ background: 'rgba(0,255,178,0.1)', color: '#00FFB2', padding: '6px 12px', borderRadius: '8px', fontSize: '12px', fontWeight: '600' }}>100/100 Lighthouse</span>
                <span style={{ background: 'rgba(56,189,248,0.1)', color: '#38BDF8', padding: '6px 12px', borderRadius: '8px', fontSize: '12px', fontWeight: '600' }}>Zero Jitter</span>
              </div>
            </div>

            {/* Card 5: Multi-Cloud Containers */}
            <div className="vsd-bento-card">
              <div>
                <span className="vsd-bento-badge blue">Cloud Infrastructure</span>
                <h3>Multi-Cloud Container Stacks</h3>
                <p>Vendor-neutral Docker and Kubernetes setups that can run effortlessly on AWS, GCP, Vercel, or on-premise hardware.</p>
              </div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <span style={{ background: 'rgba(46,41,255,0.15)', color: '#93C5FD', padding: '6px 12px', borderRadius: '8px', fontSize: '12px', fontWeight: '600' }}>Docker & K8s</span>
                <span style={{ background: 'rgba(46,41,255,0.15)', color: '#93C5FD', padding: '6px 12px', borderRadius: '8px', fontSize: '12px', fontWeight: '600' }}>Terraform IaC</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SIDE-BY-SIDE VISUAL COMPARISON */}
      <section className="vsd-section" style={{ paddingTop: 0 }}>
        <div className="vsd-container">
          <div className="vsd-section-header">
            <span className="vsd-section-tag">The NovaDesk Difference</span>
            <h2 className="vsd-section-title">Why Modern Founders Reject Agency Theater</h2>
            <p className="vsd-section-sub">
              Traditional agencies profit off prolonged timelines and layer after layer of middle managers. We build lean, ship weekly, and give you complete control.
            </p>
          </div>

          <div className="vsd-comp-split">
            {/* Legacy Agency */}
            <div className="vsd-comp-card vsd-comp-legacy">
              <div className="vsd-comp-head">
                <h4>Traditional Agencies</h4>
                <span className="vsd-comp-badge">Outdated Model</span>
              </div>
              <ul className="vsd-comp-list">
                <li className="vsd-comp-item">
                  <span className="vsd-comp-icon">✕</span>
                  <span>Months of bloated discovery meetings before a single line of production code is written.</span>
                </li>
                <li className="vsd-comp-item">
                  <span className="vsd-comp-icon">✕</span>
                  <span>Non-technical project managers acting as communication bottlenecks between you and the developers.</span>
                </li>
                <li className="vsd-comp-item">
                  <span className="vsd-comp-icon">✕</span>
                  <span>Work outsourced to junior off-shore teams with inconsistent code quality and zero automated tests.</span>
                </li>
                <li className="vsd-comp-item">
                  <span className="vsd-comp-icon">✕</span>
                  <span>Vendor lock-in: Proprietary platforms, hidden hosting fees, and holding your repository hostage.</span>
                </li>
              </ul>
            </div>

            {/* NovaDesk Model */}
            <div className="vsd-comp-card vsd-comp-modern">
              <div className="vsd-comp-head">
                <h4>NovaDesk Autonomous Engine</h4>
                <span className="vsd-comp-badge">Modern Velocity</span>
              </div>
              <ul className="vsd-comp-list">
                <li className="vsd-comp-item">
                  <span className="vsd-comp-icon">✓</span>
                  <span>First clickable milestone and live staging environment deployed within 7 business days.</span>
                </li>
                <li className="vsd-comp-item">
                  <span className="vsd-comp-icon">✓</span>
                  <span>Direct Slack/WhatsApp access to the senior engineers writing your code, with same-day responses.</span>
                </li>
                <li className="vsd-comp-item">
                  <span className="vsd-comp-icon">✓</span>
                  <span>Senior-only engineering pods with comprehensive test suites (CI/CD, 100% verified builds).</span>
                </li>
                <li className="vsd-comp-item">
                  <span className="vsd-comp-icon">✓</span>
                  <span>100% Day-One IP Ownership: Git repo transferred directly to your organization on day one.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. HIGH-IMPACT VISUAL BOTTOM CTA BANNER */}
      <div className="vsd-container">
        <div className="vsd-cta-wrap">
          <h2 className="vsd-cta-title">
            READY TO BUILD AT <span className="vsd-gradient-text">LIGHTSPEED</span>?
          </h2>
          <p className="vsd-cta-desc">
            Let's discuss your project scope. Speak directly with a principal architect and receive a comprehensive architecture roadmap and quote within 24 hours.
          </p>
          <div className="vsd-cta-actions">
            <Link to="/contact-us" className="vsd-btn-primary">
              <span>Start Your Project</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
            <a 
              href="https://calendly.com/itsharshprateek/30min" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="vsd-btn-secondary"
            >
              <span>Schedule 30-Min Strategy Call</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
