import React, { useState } from 'react';
import { 
  Play, 
  Quote, 
  CheckCircle, 
  ArrowUpRight, 
  Sparkles, 
  Filter, 
  Clock, 
  Award, 
  TrendingUp, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { VIDEO_STORIES } from '../data/mockData';
import { VideoStory } from '../types';

interface BrandOsSectionProps {
  onSelectVideoStory?: (story: VideoStory) => void;
  onBookDemo?: () => void;
}

const CATEGORIES = ['All', 'Brand Strategy', 'Design Systems', 'Marketing Ops', 'Creative Direction'] as const;

export const BrandOsSection: React.FC<BrandOsSectionProps> = ({ 
  onSelectVideoStory,
  onBookDemo 
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeStoryIndex, setActiveStoryIndex] = useState<number>(0);

  const filteredStories = selectedCategory === 'All'
    ? VIDEO_STORIES
    : VIDEO_STORIES.filter((s) => s.category === selectedCategory);

  return (
    <section id="brand-os" className="py-[120px] md:py-[160px] px-6 md:px-12 max-w-[1728px] mx-auto bg-[#FAF9F6] border-t border-[#E5E4DE] relative overflow-hidden">
      
      {/* Background Subtle Accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-b from-neutral-200/30 via-neutral-100/10 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5E4DE] mb-4 shadow-xs">
          <Award size={14} className="text-[#FF4B2B]" />
          <span className="text-xs font-semibold text-neutral-700 tracking-wide">
            Social Proof • Video Stories
          </span>
        </div>

        <h2 className="font-display text-[36px] sm:text-[48px] md:text-[56px] font-extrabold tracking-tight text-neutral-950 leading-[1.06] mb-4">
          Trusted by visionary leaders shaping global brands<span className="text-[#FF4B2B]">.</span>
        </h2>

        <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal max-w-2xl mx-auto">
          Hear directly from executive creative directors, enterprise CMOs, and design systems architects on how Lumio accelerates brand velocity.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center items-center gap-2 mt-8">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-500 mr-2">
            <Filter size={13} />
            <span>Role:</span>
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
      </div>

      {/* Video Story Cards Grid (Social Proof 12 Pattern) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto mb-16">
        {filteredStories.map((story) => {
          return (
            <div
              key={story.id}
              onClick={() => onSelectVideoStory && onSelectVideoStory(story)}
              className="group relative bg-white rounded-3xl border border-[#E5E4DE] hover:border-neutral-900 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col cursor-pointer"
            >
              {/* Video Thumbnail with Play Button Overlay */}
              <div className="relative w-full aspect-16/10 sm:aspect-16/9 bg-neutral-900 overflow-hidden">
                {/* Poster Image */}
                <img
                  src={story.thumbnailUrl}
                  alt={story.author.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95 group-hover:brightness-90"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="bg-black/60 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-xs font-semibold text-white">
                    {story.category}
                  </span>

                  <div className="flex items-center gap-2">
                    <span className="bg-black/60 backdrop-blur-md border border-white/20 px-2.5 py-1 rounded-full text-xs font-mono text-neutral-200 flex items-center gap-1.5">
                      <Clock size={12} />
                      {story.videoDuration}
                    </span>
                  </div>
                </div>

                {/* Center Play Button Overlay with Pulse & Hover Dynamics */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="relative flex items-center justify-center">
                    {/* Ripple Aura on Hover */}
                    <div className="absolute w-20 h-20 rounded-full bg-white/20 scale-90 group-hover:scale-125 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out" />
                    
                    {/* Play Button */}
                    <button 
                      aria-label={`Play story by ${story.author.name}`}
                      className="w-16 h-16 rounded-full bg-white/95 group-hover:bg-white text-neutral-950 flex items-center justify-center shadow-2xl transition-all duration-300 transform group-hover:scale-110 cursor-pointer border border-white/80"
                    >
                      <Play size={22} className="fill-neutral-950 text-neutral-950 translate-x-0.5" />
                    </button>
                  </div>
                </div>

                {/* Bottom Highlight Stat Pill on Video */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="bg-[#FF4B2B] text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                    {story.metricBadge}
                  </span>

                  <span className="text-white/80 text-xs font-medium bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10 flex items-center gap-1">
                    <span>Watch Story</span>
                    <ArrowUpRight size={12} />
                  </span>
                </div>
              </div>

              {/* Card Body: Member Quote & Author Bio */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 text-left bg-white">
                {/* Member Quote */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Quote size={20} className="text-[#FF4B2B] opacity-60" />
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                      Executive Perspective
                    </span>
                  </div>
                  <p className="text-base sm:text-lg font-medium text-neutral-900 leading-relaxed font-sans line-clamp-3">
                    "{story.quote}"
                  </p>
                </div>

                {/* Author Info & Verified Result Footer */}
                <div className="pt-5 border-t border-[#F0EFEB] flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={story.author.avatar}
                      alt={story.author.name}
                      className="w-11 h-11 rounded-full object-cover border border-[#E5E4DE] shrink-0"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-neutral-950 flex items-center gap-1">
                        <span>{story.author.name}</span>
                        <CheckCircle size={14} className="text-blue-600 fill-blue-50" />
                      </h4>
                      <p className="text-xs text-neutral-500 font-normal">
                        {story.author.role}, <span className="font-semibold text-neutral-700">{story.author.company}</span>
                      </p>
                    </div>
                  </div>

                  {/* Impact Mini Stat */}
                  <div className="text-right shrink-0 hidden sm:block">
                    <span className="text-xs font-bold text-neutral-900 block">
                      {story.highlightStat.value}
                    </span>
                    <span className="text-[11px] text-neutral-500 font-medium">
                      {story.highlightStat.label}
                    </span>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* Enterprise Social Proof Banner */}
      <div className="max-w-6xl mx-auto bg-[#F3F2EB] rounded-3xl p-6 sm:p-8 border border-[#E5E4DE] flex flex-col md:flex-row items-center justify-between gap-6 text-left">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
          <div className="flex -space-x-3 overflow-hidden p-1">
            {VIDEO_STORIES.map((s, i) => (
              <img
                key={i}
                src={s.author.avatar}
                alt={s.author.name}
                className="inline-block h-10 w-10 rounded-full ring-2 ring-[#F3F2EB] object-cover"
              />
            ))}
          </div>
          <div>
            <h4 className="text-sm font-bold text-neutral-900">
              Join 350+ enterprise brand leaders worldwide
            </h4>
            <p className="text-xs text-neutral-600 font-normal">
              Average 70% reduction in revision cycles and 99.8% multi-region brand compliance.
            </p>
          </div>
        </div>

        {onBookDemo && (
          <button
            onClick={onBookDemo}
            className="w-full sm:w-auto bg-neutral-950 hover:bg-neutral-800 text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 shrink-0 shadow-sm cursor-pointer"
          >
            Request Enterprise Pilot
          </button>
        )}
      </div>

    </section>
  );
};
