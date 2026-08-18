import { BrandFile, TeamUseCase, ArticleUpdate, GenerationPrompt } from '../types';

export const BRAND_FILES: BrandFile[] = [
  {
    id: 'file-1',
    name: 'Lumio_Strategy',
    icon: 'folder',
    iconColor: '#FF4B2B',
    type: 'Directory',
    size: '14.2 MB',
    lastUpdated: '2 hours ago',
    tags: ['Q3', 'Enterprise', 'Vision'],
    description: 'Core organizational roadmap, competitive intelligence, and positioning matrix for enterprise rollout.'
  },
  {
    id: 'file-2',
    name: 'BrandBook_v2',
    icon: 'description',
    iconColor: '#8A2387',
    type: 'PDF Document',
    size: '48.6 MB',
    lastUpdated: 'Yesterday at 4:15 PM',
    tags: ['Design System', 'Typography', 'Color Matrix'],
    description: 'Comprehensive brand standards, typography pairings, accessible color hierarchy, and icon guidelines.'
  },
  {
    id: 'file-3',
    name: 'Campaign_Assets',
    icon: 'image',
    iconColor: '#E94057',
    type: 'Asset Package',
    size: '1.4 GB',
    lastUpdated: 'Aug 14, 2026',
    tags: ['Social', 'Print', 'Keynotes'],
    description: 'High-resolution renders, motion templates, and photography suites curated for global product launches.'
  },
  {
    id: 'file-4',
    name: 'Q3_Performance',
    icon: 'analytics',
    iconColor: '#F27121',
    type: 'Data Model',
    size: '8.1 MB',
    lastUpdated: 'Aug 10, 2026',
    tags: ['ROI', 'Analytics', 'Conversion'],
    description: 'Predictive brand performance analytics, sentiment metrics across 12 distribution channels, and cohort lift.'
  }
];

export const TEAM_USE_CASES: TeamUseCase[] = [
  {
    id: 'strategy-1',
    category: 'Strategy',
    title: 'Campaign Briefs',
    description: 'Generate comprehensive briefs aligned with brand strategy in minutes instead of weeks.',
    imageUrl: 'https://images.unsplash.com/photo-1614852207233-e8d771f8e9fc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    badge: 'Strategy Hub',
    metrics: '94% alignment score',
    details: 'Lumio reads your active strategic pillars and generates fully scoped campaign briefs with KPI projections and target buyer personas.'
  },
  {
    id: 'marketing-1',
    category: 'Marketing',
    title: 'Social Assets',
    description: 'Ensure visual consistency and precise tonality across all digital platforms.',
    imageUrl: 'https://images.unsplash.com/photo-1645811791249-93a1e10d0169?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    badge: 'Omnichannel',
    metrics: '10x output speed',
    details: 'Adapt hero art into 16 aspect ratios with localized copy, compliant hashtags, and automatic visual contrast verification.'
  },
  {
    id: 'sales-1',
    category: 'Sales',
    title: 'Sales Decks',
    description: 'Empower reps with up-to-date, on-brand messaging tailored to high-value enterprise accounts.',
    imageUrl: 'https://images.unsplash.com/photo-1774420073915-96cc5e3abdb7?q=80&w=2021&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    badge: 'Enablement',
    metrics: '+38% win rate',
    details: 'Dynamic deck assembly pulls latest product metrics, verified customer quotes, and custom company branding in real-time.'
  },
  {
    id: 'design-1',
    category: 'Design',
    title: 'Voice Guidelines',
    description: "Codify your brand's unique tone, stylistic lexicon, and terminology into active guardrails.",
    imageUrl: 'https://images.unsplash.com/photo-1770791779732-7d1ef12524f2?q=80&w=2021&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    badge: 'Governance',
    metrics: 'Zero rogue copy',
    details: 'Automated linter checks every outgoing article, pitch deck, and press release against approved brand voice rules.'
  }
];

export const ARTICLES: ArticleUpdate[] = [
  {
    id: 'update-1',
    tag: 'Product Update • Oct 12',
    date: 'October 12, 2026',
    readTime: '4 min read',
    title: 'Introducing Lumio Studio Analytics',
    imageUrl: 'https://images.unsplash.com/photo-1615714259003-5db15f3cf5f5?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    summary: 'Analyze how your brand creative performs across global markets with real-time sentiment analysis and resonance scoring.',
    content: [
      'Today we are announcing Lumio Studio Analytics — a new capability built directly into your creative workflows to measure creative consistency and resonance before launch.',
      'Our neural brand evaluation engine grades copy, graphics, and video against historical benchmarks, pinpointing areas where tone drifts from approved brand standards.',
      'Teams using the beta report a 70% decrease in revision cycles and greater cross-departmental alignment.'
    ]
  },
  {
    id: 'update-2',
    tag: 'Insights • Oct 08',
    date: 'October 08, 2026',
    readTime: '6 min read',
    title: 'The Modern Brand Architecture',
    imageUrl: 'https://images.unsplash.com/photo-1646388286080-62887d1b34ab?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    summary: 'Why fragmented brand systems fail in the AI era and how unified intelligence creates compound brand equity.',
    content: [
      'As generative tools proliferate across marketing, sales, and product teams, traditional static brand books are no longer sufficient.',
      'A modern brand architecture requires active, contextual intelligence that lives inside every tool your organization uses every day.',
      'Discover how market leaders structure their asset graphs, semantic layers, and automated governance to build consistent customer experiences.'
    ]
  },
  {
    id: 'update-3',
    tag: 'News • Sep 24',
    date: 'September 24, 2026',
    readTime: '3 min read',
    title: 'Lumio raises Series B to expand AI',
    imageUrl: 'https://images.unsplash.com/photo-1615714259121-c9870fd23fcd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    summary: '$45M investment led by Horizon Capital to accelerate autonomous brand intelligence and enterprise creative agents.',
    content: [
      'We are thrilled to announce our $45M Series B funding round, bringing our total capital raised to $68M.',
      'This investment will accelerate our core research into multi-modal brand models and expand our integration ecosystem with major enterprise creative suites.',
      'We would like to thank our 350+ enterprise partners who trust Lumio as their central brand operating system.'
    ]
  }
];

export const SAMPLE_PROMPTS: GenerationPrompt[] = [
  {
    id: 'p1',
    label: 'Product Announcement Email',
    prompt: "Draft a product announcement email for the new 'Pro' tier, adopting our confident but approachable tone.",
    response: "Subject: Introducing Lumio Pro: Precision intelligence for scaling teams.\n\nOver the past year, your teams have unified creative workflows at an unprecedented scale. Today, we're proud to unveil Lumio Pro — engineered with contextual brand memory, sub-second generative workflows, and real-time governance.\n\nHere is what changes for your organization:\n• Autonomous Multi-Channel Adaptation\n• Live Brand Voice Synthesizer\n• Enterprise-grade RBAC and compliance audit trail\n\nExperience Lumio Pro today.",
    toneScore: 99,
    channels: ['Email', 'Newsletter', 'Enterprise Portal']
  },
  {
    id: 'p2',
    label: 'Social Campaign Teaser',
    prompt: "Generate an engaging LinkedIn teaser for our upcoming Q3 Brand Equity report with a punchy hook.",
    response: "Static brand guidelines are dead. Contextual brand intelligence is how top teams win.\n\nIn our newly released 2026 Brand Architecture Report, we analyzed 5,000+ creative campaigns. The finding? Teams with active AI guardrails ship 4.2x faster with 98% brand adherence.\n\nRead the full executive briefing below. ⬇️ #BrandStrategy #CreativeOps #EnterpriseAI",
    toneScore: 97,
    channels: ['LinkedIn', 'Twitter/X', 'Thread']
  },
  {
    id: 'p3',
    label: 'Executive Keynote Talking Points',
    prompt: "Summarize 3 executive talking points for the All-Hands presentation regarding creative velocity.",
    response: "1. Velocity without Drift: We've eliminated the friction between creative freedom and brand consistency.\n2. Singular Source of Truth: All strategic pillars, visual tokens, and voice rules are now real-time API endpoints.\n3. Measurable Lift: Every marketing asset now delivers verifiable ROI with automated tone alignment.",
    toneScore: 98,
    channels: ['Keynote', 'Internal All-Hands', 'Executive Memo']
  }
];

export const VIDEO_STORIES: import('../types').VideoStory[] = [
  {
    id: 'story-1',
    author: {
      name: 'Elena Rostova',
      role: 'VP of Global Brand',
      company: 'Northline Commerce',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop'
    },
    quote: 'Lumio eliminated months of brand fragmentation across 14 international markets. Our teams now ship verified campaign assets in days instead of weeks.',
    fullQuote: 'Before Lumio, managing creative consistency across 14 international markets was our biggest operational bottleneck. Our regional teams were constantly working with outdated logos, diverging color palettes, and off-brand copy. With Lumio’s active neural governance, our entire global organization shares a singular living source of truth. We accelerated time-to-market by 74% while reducing agency revision fees by over a million dollars annually.',
    videoDuration: '2:14',
    thumbnailUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop',
    category: 'Brand Strategy',
    metricBadge: '74% Faster Launches',
    highlightStat: {
      value: '74%',
      label: 'Faster Campaign Rollout'
    },
    tags: ['Global Scale', 'Governance', 'Enterprise']
  },
  {
    id: 'story-2',
    author: {
      name: 'Marcus Vance',
      role: 'Head of Creative Tech',
      company: 'Veloce Labs',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop'
    },
    quote: 'The neural knowledge graph understands our exact color harmony and typography curves. It’s like having our entire design system alive and interactive.',
    fullQuote: 'We build digital products for fast-moving startups and Fortune 500 enterprises. Lumio Studio allows our creative technologists to test multi-channel design tokens in real time. The moment a designer generates or adapts an asset, Lumio automatically verifies contrast ratios, spatial grids, and typography scales with zero manual intervention.',
    videoDuration: '1:48',
    thumbnailUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop',
    category: 'Design Systems',
    metricBadge: '100% Token Compliance',
    highlightStat: {
      value: '10x',
      label: 'Asset Scaling Speed'
    },
    tags: ['Figma Sync', 'DesignOps', 'Typography']
  },
  {
    id: 'story-3',
    author: {
      name: 'Sophia Al-Mansoor',
      role: 'Chief Marketing Officer',
      company: 'Arcus Enterprise',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop'
    },
    quote: 'We deployed Lumio across 850 marketers worldwide. Rogue marketing copy dropped to absolute zero within thirty days of onboarding.',
    fullQuote: 'Empowering hundreds of decentralized sales reps and regional field marketers without diluting brand prestige was our biggest challenge. Lumio’s contextual voice synthesizer and guardrails enable every rep to generate bespoke pitch decks and social assets while staying strictly inside our legal and stylistic boundaries.',
    videoDuration: '3:05',
    thumbnailUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop',
    category: 'Marketing Ops',
    metricBadge: 'Zero Rogue Copy',
    highlightStat: {
      value: '$1.2M',
      label: 'Annual Cost Savings'
    },
    tags: ['Sales Enablement', 'Tone AI', 'Risk Mitigation']
  },
  {
    id: 'story-4',
    author: {
      name: 'Claire Beauchamp',
      role: 'Creative Director',
      company: 'Maison Studio',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop'
    },
    quote: 'Our designers spend their energy on real creative concepts rather than tedious manual formatting, export checklists, and resizing.',
    fullQuote: 'Creative teams get burned out when 70% of their workday is spent generating 45 banner iterations for different ad sizes. Lumio automates all the mechanical resizing and localized typography while preserving artistic nuance and art direction.',
    videoDuration: '1:55',
    thumbnailUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
    category: 'Creative Direction',
    metricBadge: '30+ hrs saved / wk',
    highlightStat: {
      value: '85%',
      label: 'Creator Satisfaction Lift'
    },
    tags: ['Automation', 'Creative Flow', 'Asset Studio']
  }
];
