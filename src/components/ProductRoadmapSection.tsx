import React, { useState, useEffect, useRef, useMemo } from 'react';
import * as d3 from 'd3';
import { 
  Sparkles, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  Volume2, 
  CheckCircle2, 
  Clock, 
  Flame, 
  ChevronRight, 
  ArrowUpRight, 
  ThumbsUp, 
  Filter,
  Compass,
  Calendar,
  Zap,
  Radio
} from 'lucide-react';
import { RoadmapMilestone } from '../types';

const ROADMAP_DATA: RoadmapMilestone[] = [
  {
    id: 'agentic-design-ops',
    title: 'Autonomous Multi-Agent DesignOps',
    subtitle: 'Figma branch auto-auditing & instant token reconciliation',
    quarter: 'Q3 2026',
    year: 2026,
    monthIndex: 8,
    category: 'AI & Neural',
    status: 'In Beta',
    progress: 88,
    description: 'Autonomous background AI agents that continuously monitor Figma team workspaces and pull requests, verifying typography scales, spatial grids, and color token compliance before release.',
    impact: 'Reduces design QA review cycles by 74% across distributed design systems.',
    keyFeatures: [
      'Git-style pull request visual diff engine for Figma',
      'Automated semantic token resolution algorithms',
      'Zero-latency conflict alerting directly into Slack & Teams'
    ],
    teamLead: 'Dr. Elena Rostova (VP Neural Systems)',
    tags: ['DesignOps', 'Multi-Agent', 'Figma Sync']
  },
  {
    id: 'spatial-3d-synthesis',
    title: 'Spatial 3D & Material Generator',
    subtitle: 'USDZ, glTF & NeRF procedural asset pipeline',
    quarter: 'Q4 2026',
    year: 2026,
    monthIndex: 11,
    category: 'Multimodal',
    status: 'In Development',
    progress: 62,
    description: 'Enterprise 3D asset generator trained on proprietary brand CAD files and physical materials. Generates photorealistic product renders and interactive WebGL assets matching packaging guidelines.',
    impact: 'Eliminates weeks of 3D studio rendering time for omnichannel eCommerce campaigns.',
    keyFeatures: [
      'Direct export to USDZ (Apple Vision Pro) & glTF 2.0',
      'PBR material graph synthesizer with brand finishes',
      'Lighting studio presets strictly calibrated to brand palettes'
    ],
    teamLead: 'Marcus Vance (Head of Multimodal 3D)',
    tags: ['3D Asset Gen', 'Apple Vision Pro', 'PBR Shaders']
  },
  {
    id: 'cross-enterprise-graph-v4',
    title: 'Universal Vector Graph v4',
    subtitle: 'Bidirectional sync across Webflow, Framer, and Contentful',
    quarter: 'Q1 2027',
    year: 2027,
    monthIndex: 2,
    category: 'Ecosystem',
    status: 'In Development',
    progress: 45,
    description: 'Decentralized vector embeddings supporting real-time cross-platform content hydration. Write once in Lumio, instantly propagate brand-verified layouts to production CMS frameworks.',
    impact: 'Unified content distribution across 20+ global staging and production environments.',
    keyFeatures: [
      'Live streaming webhooks with cryptographic verification',
      'Headless CMS synchronizers (Contentful, Sanity, Strapi)',
      'Framer and Webflow custom component injection'
    ],
    teamLead: 'Sarah Chen (Lead Ecosystem Architect)',
    tags: ['Vector DB', 'CMS Connectors', 'Webhooks']
  },
  {
    id: 'sonic-voiceprint-guard',
    title: 'Sonic Branding & Voiceprint Synthesizer',
    subtitle: 'Neural voice cloning with broadcast audio watermarking',
    quarter: 'Q2 2027',
    year: 2027,
    monthIndex: 5,
    category: 'Multimodal',
    status: 'Architecture',
    progress: 30,
    description: 'Next-generation sonic branding engine delivering high-fidelity corporate voice synthesis in 42 languages, complete with invisible spectral audio watermarking to verify brand authenticity.',
    impact: 'Empowers global marketing teams to localize keynote and ad audio seamlessly in under 5 minutes.',
    keyFeatures: [
      '42-language neural voice matching with cadence control',
      'Cryptographic spectral audio watermark embedder',
      'Harmonic logo tone generator and sonic cue library'
    ],
    teamLead: 'Julian Thorne (Principal Audio Researcher)',
    tags: ['Voice Synthesis', 'Sonic Identity', 'Multilingual']
  },
  {
    id: 'predictive-drift-sentinel',
    title: 'Predictive Cultural & Brand Drift Sentinel',
    subtitle: 'Autonomous global monitoring for asset misalignments',
    quarter: 'Q3 2027',
    year: 2027,
    monthIndex: 8,
    category: 'Governance',
    status: 'Planned',
    progress: 15,
    description: 'Proactive intelligence crawler indexing multi-channel marketing campaigns across the web and social media. Detects off-brand rogue assets, outdated logos, or conflicting brand narratives.',
    impact: 'Guarantees 99.9% global brand compliance across third-party agencies and partner networks.',
    keyFeatures: [
      'Global web-crawler indexing public marketing endpoints',
      'Visual drift heatmap generator and automated executive reports',
      'One-click remediation request dispatch'
    ],
    teamLead: 'Aria Thorne (Director of Governance Systems)',
    tags: ['Brand Governance', 'Audit Crawler', 'Anomaly Detection']
  },
  {
    id: 'edge-runtime-wasm',
    title: 'Lumio Edge Runtime & WASM Engine',
    subtitle: 'Sub-2ms personalized dynamic asset compilation',
    quarter: 'Q4 2027',
    year: 2027,
    monthIndex: 11,
    category: 'AI & Neural',
    status: 'Planned',
    progress: 8,
    description: 'Ultralight WebAssembly compilation target enabling dynamic, hyper-personalized brand creative rendering at the Cloudflare and Vercel edge in under two milliseconds.',
    impact: 'Enables 1-to-1 tailored enterprise visual storytelling without backend latency.',
    keyFeatures: [
      'Compiled WASM rendering core with zero cold-start latency',
      'Localized geo-targeted typography and visual fallback rules',
      'Ultra-efficient vector rasterizer running at 60fps in browser'
    ],
    teamLead: 'David K. O’Connor (Chief Systems Architect)',
    tags: ['Edge AI', 'WebAssembly', 'Performance']
  }
];

const CATEGORIES = ['All', 'AI & Neural', 'Ecosystem', 'Governance', 'Multimodal'] as const;

interface ProductRoadmapSectionProps {
  onBookDemo?: () => void;
}

export const ProductRoadmapSection: React.FC<ProductRoadmapSectionProps> = ({ onBookDemo }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeMilestoneId, setActiveMilestoneId] = useState<string>(ROADMAP_DATA[0].id);
  const [votes, setVotes] = useState<Record<string, number>>({
    'agentic-design-ops': 342,
    'spatial-3d-synthesis': 289,
    'cross-enterprise-graph-v4': 415,
    'sonic-voiceprint-guard': 198,
    'predictive-drift-sentinel': 274,
    'edge-runtime-wasm': 312
  });
  const [votedIds, setVotedIds] = useState<Set<string>>(new Set());
  const [voteToast, setVoteToast] = useState<string | null>(null);

  const svgRef = useRef<SVGSVGElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const filteredMilestones = useMemo(() => {
    if (selectedCategory === 'All') return ROADMAP_DATA;
    return ROADMAP_DATA.filter((m) => m.category === selectedCategory);
  }, [selectedCategory]);

  const activeMilestone = useMemo(() => {
    return ROADMAP_DATA.find((m) => m.id === activeMilestoneId) || filteredMilestones[0] || ROADMAP_DATA[0];
  }, [activeMilestoneId, filteredMilestones]);

  const handleVote = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (votedIds.has(id)) {
      setVotes((prev) => ({ ...prev, [id]: prev[id] - 1 }));
      setVotedIds((prev) => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
      setVoteToast('Vote withdrawn');
    } else {
      setVotes((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
      setVotedIds((prev) => new Set(prev).add(id));
      setVoteToast('Upvoted feature priority!');
    }
    setTimeout(() => setVoteToast(null), 3000);
  };

  // D3 Timeline rendering
  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const containerWidth = containerRef.current.clientWidth;
    const width = Math.max(containerWidth, 680);
    const height = 180;
    const margin = { top: 40, right: 60, bottom: 45, left: 60 };

    svg.attr('width', width).attr('height', height);

    // Time horizon points from Q3 2026 to Q4 2027
    const quarters = ['Q3 2026', 'Q4 2026', 'Q1 2027', 'Q2 2027', 'Q3 2027', 'Q4 2027'];

    const xScale = d3.scalePoint<string>()
      .domain(quarters)
      .range([margin.left, width - margin.right])
      .padding(0.2);

    const g = svg.append('g');

    // Base background track line
    g.append('line')
      .attr('x1', margin.left)
      .attr('y1', 70)
      .attr('x2', width - margin.right)
      .attr('y2', 70)
      .attr('stroke', '#E5E4DE')
      .attr('stroke-width', 3)
      .attr('stroke-linecap', 'round');

    // Active progress line representing current platform capability (at Q3 2026)
    const q3X = xScale('Q3 2026') || margin.left;
    const q4X = xScale('Q4 2026') || margin.left;
    const currentProgressX = q3X + (q4X - q3X) * 0.45;

    g.append('line')
      .attr('x1', margin.left)
      .attr('y1', 70)
      .attr('x2', currentProgressX)
      .attr('y2', 70)
      .attr('stroke', '#111111')
      .attr('stroke-width', 3.5)
      .attr('stroke-linecap', 'round');

    // Current Time Marker Badge
    const currentMarker = g.append('g')
      .attr('transform', `translate(${currentProgressX}, 70)`);

    currentMarker.append('circle')
      .attr('r', 8)
      .attr('fill', '#FF4B2B')
      .attr('stroke', '#FFFFFF')
      .attr('stroke-width', 2.5);

    currentMarker.append('circle')
      .attr('r', 16)
      .attr('fill', 'rgba(255, 75, 43, 0.15)')
      .attr('class', 'animate-pulse');

    // Quarter markers and labels
    quarters.forEach((q) => {
      const x = xScale(q) || 0;

      // Tick mark
      g.append('line')
        .attr('x1', x)
        .attr('y1', 62)
        .attr('x2', x)
        .attr('y2', 78)
        .attr('stroke', '#DCDAD2')
        .attr('stroke-width', 2);

      // Quarter text label
      g.append('text')
        .attr('x', x)
        .attr('y', 110)
        .attr('text-anchor', 'middle')
        .attr('font-size', '12px')
        .attr('font-weight', '600')
        .attr('fill', '#444444')
        .text(q);

      // Sub-label for Current vs Next
      let statusLabel = 'Future';
      if (q === 'Q3 2026') statusLabel = 'Now / Live Beta';
      else if (q === 'Q4 2026') statusLabel = 'Target Horizon';
      else if (q === 'Q1 2027') statusLabel = 'Next Horizon';

      g.append('text')
        .attr('x', x)
        .attr('y', 130)
        .attr('text-anchor', 'middle')
        .attr('font-size', '10px')
        .attr('font-weight', '500')
        .attr('fill', q === 'Q3 2026' ? '#FF4B2B' : '#888888')
        .text(statusLabel);
    });

    // Render milestone nodes along the D3 scale
    filteredMilestones.forEach((milestone) => {
      const x = xScale(milestone.quarter) || 0;
      const isSelected = milestone.id === activeMilestoneId;

      const nodeGroup = g.append('g')
        .attr('transform', `translate(${x}, 70)`)
        .attr('class', 'cursor-pointer group')
        .style('cursor', 'pointer')
        .on('click', () => {
          setActiveMilestoneId(milestone.id);
        });

      // Outer halo for selected state
      if (isSelected) {
        nodeGroup.append('circle')
          .attr('r', 20)
          .attr('fill', 'rgba(17, 17, 17, 0.08)')
          .attr('stroke', '#111111')
          .attr('stroke-width', 1.5)
          .attr('stroke-dasharray', '3,3');
      }

      // Milestone circle
      const circleFill = isSelected 
        ? '#111111' 
        : milestone.status === 'In Beta' 
          ? '#10B981' 
          : milestone.status === 'In Development'
            ? '#2563EB'
            : '#FAF9F6';

      const circleStroke = isSelected
        ? '#111111'
        : milestone.status === 'Planned'
          ? '#CCCCCC'
          : circleFill;

      nodeGroup.append('circle')
        .attr('r', isSelected ? 12 : 9)
        .attr('fill', circleFill)
        .attr('stroke', circleStroke)
        .attr('stroke-width', 2.5)
        .attr('class', 'transition-all duration-200');

      // Center dot for planned/architecture
      if (milestone.status === 'Planned' || milestone.status === 'Architecture') {
        nodeGroup.append('circle')
          .attr('r', 3)
          .attr('fill', isSelected ? '#FFFFFF' : '#888888');
      }

      // Feature title banner above marker
      const textGroup = nodeGroup.append('g')
        .attr('transform', 'translate(0, -28)');

      const isLongText = milestone.title.length > 22;
      const displayTitle = isLongText ? `${milestone.title.slice(0, 20)}...` : milestone.title;

      textGroup.append('text')
        .attr('text-anchor', 'middle')
        .attr('font-size', isSelected ? '11px' : '10px')
        .attr('font-weight', isSelected ? '700' : '600')
        .attr('fill', isSelected ? '#111111' : '#666666')
        .text(displayTitle);
    });

  }, [filteredMilestones, activeMilestoneId]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Neural':
        return <Cpu size={16} className="text-neutral-900" />;
      case 'Ecosystem':
        return <Layers size={16} className="text-neutral-900" />;
      case 'Governance':
        return <ShieldCheck size={16} className="text-neutral-900" />;
      case 'Multimodal':
        return <Volume2 size={16} className="text-neutral-900" />;
      default:
        return <Sparkles size={16} className="text-neutral-900" />;
    }
  };

  const getStatusBadge = (status: RoadmapMilestone['status']) => {
    switch (status) {
      case 'In Beta':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Live Private Beta
          </span>
        );
      case 'In Development':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            Active Development
          </span>
        );
      case 'Architecture':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            Architecture & Specs
          </span>
        );
      case 'Planned':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-neutral-100 text-neutral-600 border border-neutral-200">
            <Clock size={12} />
            Target Horizon
          </span>
        );
    }
  };

  return (
    <section id="roadmap" className="py-[120px] md:py-[160px] px-6 md:px-12 max-w-[1728px] mx-auto flex flex-col items-center bg-[#FAF9F6] border-t border-[#E5E4DE] relative overflow-hidden">
      
      {/* Toast Alert */}
      {voteToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-neutral-900 text-white px-4 py-2.5 rounded-xl shadow-2xl flex items-center gap-2.5 text-xs font-semibold animate-fade-in border border-neutral-700">
          <CheckCircle2 size={16} className="text-emerald-400" />
          <span>{voteToast}</span>
        </div>
      )}

      {/* Section Header */}
      <div className="text-center max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-[#E5E4DE] mb-4 shadow-xs">
          <Compass size={14} className="text-neutral-700" />
          <span className="text-xs font-semibold text-neutral-700 tracking-normal">
            Product Roadmap & Engineering Horizon
          </span>
        </div>

        <h2 className="font-display text-[36px] sm:text-[48px] md:text-[54px] font-extrabold tracking-tight text-neutral-950 leading-[1.08] mb-4">
          Architecting the future of brand systems<span className="text-[#FF4B2B]">.</span>
        </h2>

        <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal max-w-2xl mx-auto">
          Explore upcoming capabilities across autonomous design intelligence, multi-modal asset synthesis, and enterprise edge governance.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap justify-center items-center gap-2 mb-10">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-500 mr-2">
          <Filter size={13} />
          <span>Filter:</span>
        </div>
        {CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                isSelected
                  ? 'bg-neutral-950 text-white shadow-xs'
                  : 'bg-white text-neutral-600 hover:text-neutral-950 border border-[#E5E4DE] hover:border-neutral-400'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Interactive D3 Timeline Container */}
      <div 
        ref={containerRef}
        className="w-full max-w-6xl bg-white rounded-3xl border border-[#E5E4DE] p-6 sm:p-8 shadow-[0_10px_35px_rgba(0,0,0,0.03)] mb-12 overflow-x-auto relative"
      >
        <div className="flex items-center justify-between mb-4 pb-4 border-b border-[#F0EFEB]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-neutral-100 border border-[#E5E4DE] flex items-center justify-center text-neutral-900">
              <Calendar size={16} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-neutral-900">Interactive Timeline Visualizer</h3>
              <p className="text-xs text-neutral-500">Click any milestone node along the axis to inspect technical specifications</p>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-xs font-medium text-neutral-500">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              Private Beta
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
              Development
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
              Target Horizon
            </span>
          </div>
        </div>

        {/* SVG Render Target for D3 */}
        <div className="w-full flex justify-center overflow-x-auto py-2">
          <svg ref={svgRef} className="mx-auto block" />
        </div>
      </div>

      {/* Deep-Dive Inspection Card & Interactive Cards Grid */}
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Active Milestone Deep-Dive */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-[#E5E4DE] p-6 sm:p-8 shadow-sm text-left flex flex-col justify-between h-full">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-neutral-100 border border-[#E5E4DE] flex items-center justify-center">
                  {getCategoryIcon(activeMilestone.category)}
                </div>
                <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                  {activeMilestone.category} · {activeMilestone.quarter}
                </span>
              </div>
              {getStatusBadge(activeMilestone.status)}
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-neutral-950 mb-2 leading-tight">
              {activeMilestone.title}
            </h3>

            <p className="text-sm font-medium text-[#FF4B2B] mb-4">
              {activeMilestone.subtitle}
            </p>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-6 font-normal">
              {activeMilestone.description}
            </p>

            {/* Impact Metric Banner */}
            <div className="bg-[#FAF9F6] rounded-2xl p-4 border border-[#E5E4DE] mb-6">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-white border border-[#E5E4DE] text-neutral-900 shrink-0">
                  <Zap size={16} className="text-amber-500" />
                </div>
                <div>
                  <span className="text-xs font-bold text-neutral-800 uppercase tracking-wider block mb-0.5">
                    Strategic Business Impact
                  </span>
                  <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
                    {activeMilestone.impact}
                  </p>
                </div>
              </div>
            </div>

            {/* Key Deliverables */}
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 block mb-3">
                Core Architectural Deliverables
              </span>
              <div className="space-y-2.5">
                {activeMilestone.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Progress Gauge */}
            <div className="mb-6">
              <div className="flex justify-between items-center text-xs font-semibold text-neutral-700 mb-2">
                <span>Engineering Completion</span>
                <span>{activeMilestone.progress}%</span>
              </div>
              <div className="w-full bg-neutral-100 rounded-full h-2 overflow-hidden border border-neutral-200">
                <div 
                  className="bg-neutral-900 h-full rounded-full transition-all duration-500"
                  style={{ width: `${activeMilestone.progress}%` }}
                />
              </div>
            </div>
          </div>

          {/* Card Footer: Team & Upvote Interaction */}
          <div className="pt-6 border-t border-[#F0EFEB] flex flex-wrap items-center justify-between gap-4">
            <div className="text-left">
              <span className="text-[11px] text-neutral-400 font-medium block">Engineering Lead</span>
              <span className="text-xs font-semibold text-neutral-800">{activeMilestone.teamLead}</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={(e) => handleVote(activeMilestone.id, e)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer border ${
                  votedIds.has(activeMilestone.id)
                    ? 'bg-neutral-900 text-white border-neutral-900 shadow-sm'
                    : 'bg-white text-neutral-700 border-[#E5E4DE] hover:border-neutral-900'
                }`}
              >
                <ThumbsUp size={13} className={votedIds.has(activeMilestone.id) ? 'fill-white' : ''} />
                <span>Upvote Priority ({votes[activeMilestone.id] || 0})</span>
              </button>

              {onBookDemo && (
                <button
                  onClick={onBookDemo}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-white text-neutral-900 border border-[#E5E4DE] hover:border-neutral-900 transition-colors cursor-pointer"
                >
                  <span>Request Early Beta</span>
                  <ArrowUpRight size={14} />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Milestone Directory List */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          <div className="flex items-center justify-between mb-1 px-1">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
              Roadmap Releases ({filteredMilestones.length})
            </span>
            <span className="text-xs text-neutral-400">Select to inspect</span>
          </div>

          {filteredMilestones.map((milestone) => {
            const isSelected = milestone.id === activeMilestoneId;
            const isVoted = votedIds.has(milestone.id);

            return (
              <div
                key={milestone.id}
                onClick={() => setActiveMilestoneId(milestone.id)}
                className={`p-4 sm:p-5 rounded-2xl border transition-all duration-200 text-left cursor-pointer ${
                  isSelected
                    ? 'bg-white border-neutral-950 shadow-md ring-1 ring-neutral-950'
                    : 'bg-white/80 hover:bg-white border-[#E5E4DE] hover:border-neutral-400 shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-neutral-900 bg-[#F0EFEB] px-2.5 py-0.5 rounded-full">
                      {milestone.quarter}
                    </span>
                    <span className="text-xs text-neutral-500 font-medium">
                      {milestone.category}
                    </span>
                  </div>

                  <span className="text-xs font-semibold text-neutral-700 flex items-center gap-1">
                    <Flame size={12} className={isVoted ? 'text-[#FF4B2B]' : 'text-neutral-400'} />
                    {votes[milestone.id] || 0} votes
                  </span>
                </div>

                <h4 className="text-sm sm:text-base font-bold text-neutral-950 mb-1 flex items-center justify-between">
                  <span>{milestone.title}</span>
                  <ChevronRight size={16} className={`transition-transform ${isSelected ? 'translate-x-1 text-neutral-900' : 'text-neutral-300'}`} />
                </h4>

                <p className="text-xs text-neutral-500 line-clamp-2 leading-relaxed mb-3 font-normal">
                  {milestone.subtitle}
                </p>

                <div className="flex flex-wrap items-center gap-1.5">
                  {milestone.tags.map((t, idx) => (
                    <span key={idx} className="text-[11px] bg-[#FAF9F6] border border-[#E5E4DE] text-neutral-600 px-2 py-0.5 rounded-md font-normal">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Enterprise Co-Creation Banner */}
      <div className="w-full max-w-6xl mt-12 bg-neutral-950 text-white rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden border border-neutral-800 shadow-xl">
        <div className="relative z-10 text-left max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-neutral-200 mb-3">
            <Radio size={12} className="text-emerald-400 animate-pulse" />
            <span>Enterprise Advisory Council</span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-2 tracking-tight">
            Influence the Lumio product roadmap<span className="text-[#FF4B2B]">.</span>
          </h3>
          <p className="text-sm text-neutral-300 font-normal leading-relaxed">
            Enterprise design and marketing leaders have direct advisory access to our product steering committee. Co-design custom integrations tailored to your organization.
          </p>
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3 shrink-0">
          <button
            onClick={onBookDemo}
            className="w-full sm:w-auto bg-white text-neutral-950 hover:bg-neutral-100 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer"
          >
            Join Advisory Council
          </button>
        </div>
      </div>

    </section>
  );
};
