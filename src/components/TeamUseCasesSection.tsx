import React, { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { TEAM_USE_CASES } from '../data/mockData';
import { TeamUseCase } from '../types';

interface TeamUseCasesSectionProps {
  onSelectCase: (useCase: TeamUseCase) => void;
}

export const TeamUseCasesSection: React.FC<TeamUseCasesSectionProps> = ({ onSelectCase }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Strategy', 'Marketing', 'Design', 'Sales'];

  const filteredCases = activeCategory === 'All'
    ? TEAM_USE_CASES
    : TEAM_USE_CASES.filter((c) => c.category === activeCategory);

  return (
    <section id="team-cases" className="py-[120px] md:py-[160px] px-6 md:px-12 max-w-[1728px] mx-auto flex flex-col items-center bg-[#FAF9F6] border-t border-[#E5E4DE]">
      
      <span className="text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-3">
        Cross-Functional Capabilities
      </span>
      <h2 className="font-display text-[36px] md:text-[48px] mb-10 font-extrabold tracking-tight text-center text-[#111111]">
        Built for every team<span className="text-[#FF4B2B]">.</span>
      </h2>

      {/* Category Pills */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 mb-14">
        {categories.map((cat) => {
          const isSelected = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                isSelected
                  ? 'bg-[#111111] text-white shadow-md'
                  : 'bg-white text-neutral-600 hover:text-neutral-900 border border-[#E5E4DE]'
              }`}
            >
              {cat === 'All' ? 'All Teams' : cat}
            </button>
          );
        })}
      </div>

      {/* Grid of 4 Visual Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-[1400px]">
        {filteredCases.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => onSelectCase(item)}
            className="relative h-[360px] sm:h-[400px] rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 flex flex-col justify-end group overflow-hidden bg-white border border-[#E5E4DE] hover:border-[#111111]/40 cursor-pointer transition-all duration-300 shadow-[0_15px_40px_rgba(0,0,0,0.06)]"
          >
            {/* Background Image */}
            <img
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-106 opacity-85 group-hover:opacity-95"
              src={item.imageUrl}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

            {/* Top Category Badge */}
            <div className="absolute top-6 left-6 z-10 flex items-center gap-2">
              <span className="bg-white/95 backdrop-blur-md border border-[#E5E4DE] text-neutral-900 text-[11px] font-semibold tracking-wide px-3 py-1 rounded-full shadow-xs">
                {item.badge}
              </span>
              {item.metrics && (
                <span className="bg-white/95 border border-[#E5E4DE] text-neutral-900 text-[11px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-xs">
                  <CheckCircle size={12} className="text-[#10B981]" />
                  {item.metrics}
                </span>
              )}
            </div>

            {/* Card Content */}
            <div className="relative z-10 text-left">
              <h4 className="font-display text-xl sm:text-2xl font-bold mb-2 text-white transition-colors">
                {item.title}
              </h4>
              <p className="text-sm text-neutral-200 leading-relaxed max-w-lg mb-3 font-normal">
                {item.description}
              </p>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-white uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                <span>Explore Workflow</span>
                <ArrowRight size={13} />
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
