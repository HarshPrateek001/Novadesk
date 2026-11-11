export const FORGE_ASSETS = {
  scrubVideo: '/assets/forge/source/forge-core-scrub.mp4',
  originalVideo: '/assets/forge/source/forge-core-original.mp4',
  poster: '/assets/forge/poster/forge-core-poster.webp',
  contactSheet: '/assets/forge/frames/contact-sheet.jpg',
  keyframes: [
    { id: 'kf-1', src: '/assets/forge/frames/frame-001.jpg', time: 0.0, label: 'Research & Exploration' },
    { id: 'kf-2', src: '/assets/forge/frames/frame-002.jpg', time: 1.5, label: 'Foundation & Architecture' },
    { id: 'kf-3', src: '/assets/forge/frames/frame-003.jpg', time: 3.5, label: 'Experimentation & Development' },
    { id: 'kf-4', src: '/assets/forge/frames/frame-004.jpg', time: 6.0, label: 'Connected Applications' },
    { id: 'kf-5', src: '/assets/forge/frames/frame-005.jpg', time: 7.25, label: 'Continuous Evolution' },
    { id: 'kf-6', src: '/assets/forge/frames/frame-006.jpg', time: 9.5, label: 'System Equilibrium' },
  ],
};

export const FORGE_VIDEO_SPECS = {
  width: 1920,
  height: 1080,
  fps: 24,
  duration: 9.958984,
  totalFrames: 239,
};

export const FORGE_SEQUENCE = {
  frameCount: 159,
  width: 1080,
  height: 608,
  fps: 16,
  duration: 9.958984,
  basePath: '/assets/forge/sequence/seq-',
  extension: '.webp',
};

/**
 * Resolve 0-based frame index [0..158] to extracted WebP URL (seq-001.webp .. seq-159.webp).
 */
export function getSequenceFrameUrl(index) {
  const clamped = Math.max(0, Math.min(FORGE_SEQUENCE.frameCount - 1, Math.round(index)));
  const padded = String(clamped + 1).padStart(3, '0');
  return `${FORGE_SEQUENCE.basePath}${padded}${FORGE_SEQUENCE.extension}`;
}

export const INTELLIGENCE_LAYERS = [
  {
    id: 'ai-models',
    title: 'AI Models',
    description:
      'Different models bring different strengths. FORGE explores a model-agnostic approach to choosing the right intelligence for a particular task.',
  },
  {
    id: 'intelligent-agents',
    title: 'Intelligent Agents',
    description:
      'Specialised agents can take responsibility for different parts of a workflow, collaborate and coordinate their work.',
  },
  {
    id: 'tools-integrations',
    title: 'Tools & Integrations',
    description:
      'APIs, software applications and external services connect intelligence with the systems people already use.',
  },
  {
    id: 'data-context',
    title: 'Data & Context',
    description:
      'Useful decisions require relevant information. Context and knowledge help systems understand what a task actually needs.',
  },
  {
    id: 'orchestration',
    title: 'Orchestration',
    description:
      'The coordination layer brings these capabilities together, manages task flow and handles handoffs between different components.',
  },
  {
    id: 'human-oversight',
    title: 'Human Oversight',
    description:
      'Automation should not mean losing control. Permissions, validation and human approval remain important parts of responsible system design.',
  },
];

export const CORE_PILLARS = [
  {
    id: 'ithink',
    number: '01',
    name: 'iTHINK',
    tagline: 'Where Intelligence Begins.',
    paragraphs: [
      'Every meaningful solution starts with understanding the problem.',
      'iTHINK represents our exploration of intelligent reasoning, contextual understanding and structured problem-solving.',
      'The focus is on helping AI systems move beyond simple responses towards understanding goals, evaluating possibilities and supporting better decisions.',
    ],
    visualType: 'neural',
  },
  {
    id: 'iforge',
    number: '02',
    name: 'iFORGE',
    tagline: 'Where Ideas Become Systems.',
    paragraphs: [
      'An idea becomes valuable when it can be put into action.',
      'iFORGE represents our vision for AI-assisted engineering, intelligent automation and the creation of practical digital systems.',
      'From software development to complex workflows, the goal is to turn ideas into something useful.',
    ],
    visualType: 'geometry',
  },
  {
    id: 'ievolve',
    number: '03',
    name: 'iEVOLVE',
    tagline: 'Where Systems Keep Getting Better.',
    paragraphs: [
      'Technology should never stand still.',
      'iEVOLVE represents our focus on adaptable systems, continuous improvement and the ability to evolve as requirements, technology and real-world needs change.',
      'Because building something useful is only the beginning. Making it better is the journey.',
    ],
    visualType: 'rings',
  },
];

export const CAPABILITY_AREAS = [
  {
    id: 'agent-orchestration',
    title: 'AI Agent Orchestration',
    description:
      'Connecting specialised agents so they can collaborate on complex tasks and coordinated workflows.',
  },
  {
    id: 'autonomous-engineering',
    title: 'Autonomous Software Engineering',
    description:
      'Exploring AI-assisted development workflows, from understanding requirements to building, testing and improving software.',
  },
  {
    id: 'business-automation',
    title: 'Intelligent Business Automation',
    description:
      'Connecting AI capabilities with everyday business processes, applications and operational systems.',
  },
  {
    id: 'model-agnostic-infra',
    title: 'Model-Agnostic AI Infrastructure',
    description:
      'Exploring architectures that can work with different AI models and providers rather than depending on a single ecosystem.',
  },
  {
    id: 'context-intelligence',
    title: 'Context-Aware Intelligence',
    description:
      'Using structured data, knowledge and relevant context to make AI interactions more useful and meaningful.',
  },
  {
    id: 'digital-systems',
    title: 'Advanced Digital Systems',
    description:
      'Experimenting with new approaches to software architecture, intelligent applications and interconnected technology.',
  },
];

export const OPPORTUNITY_OUTCOMES = [
  'More connected business operations.',
  'Reduced repetitive manual work.',
  'Better coordination between digital tools.',
  'Faster software development cycles.',
  'More consistent workflow execution.',
  'Improved visibility and control over automation.',
];

export const APPROACH_PRINCIPLES = [
  {
    number: '01',
    title: 'Think Before Building',
    summary: 'Understand the problem before choosing the technology.',
  },
  {
    number: '02',
    title: 'Choose the Right Intelligence',
    summary: 'Use capabilities based on the task, not assumptions about a particular model.',
  },
  {
    number: '03',
    title: 'Connect What Matters',
    summary: 'Build systems that can work with relevant tools, data and applications.',
  },
  {
    number: '04',
    title: 'Keep Humans in Control',
    summary: 'Make reliability, permissions, transparency and oversight part of the design.',
  },
  {
    number: '05',
    title: 'Improve Continuously',
    summary: 'Experiment, learn, test and refine.',
  },
];

export const JOURNEY_STAGES = [
  {
    step: '01',
    title: 'Research & Exploration',
    summary:
      'Understanding the AI landscape, identifying real problems and exploring possible architectures.',
  },
  {
    step: '02',
    title: 'Foundation & Architecture',
    summary:
      'Designing the foundations for intelligent coordination, integrations and modular systems.',
  },
  {
    step: '03',
    title: 'Experimentation & Development',
    summary:
      'Building prototypes, testing workflows and validating practical use cases.',
  },
  {
    step: '04',
    title: 'Connected Applications',
    summary:
      'Exploring how coordinated intelligence can support software engineering and business operations.',
  },
  {
    step: '05',
    title: 'Continuous Evolution',
    summary:
      'Improving the ecosystem through experimentation, collaboration and real-world feedback.',
  },
];
