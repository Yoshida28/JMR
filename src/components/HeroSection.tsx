import React from 'react';
import { ArrowUpRight, ShieldCheck, Sparkles, Terminal } from 'lucide-react';

interface HeroSectionProps {
  onBookDemo: () => void;
  onExploreStudio: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onBookDemo, onExploreStudio }) => {
  return (
    <section className="pt-[160px] md:pt-[200px] lg:pt-[220px] px-4 sm:px-8 md:px-12 max-w-[1728px] mx-auto flex flex-col items-center text-center relative overflow-visible bg-[#FAF9F6] pb-[100px] md:pb-[160px] lg:pb-[180px]">
      
      {/* Badge Header */}
      <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-[#E5E4DE] mb-8 shadow-xs">
        <span className="w-2 h-2 rounded-full bg-[#10B981]" />
        <span className="text-xs font-semibold text-neutral-700 tracking-normal">
          Enterprise Brand Intelligence Platform
        </span>
      </div>

      {/* Main Display Headline with Coral Period Accent */}
      <h1 className="font-display text-[48px] sm:text-[68px] md:text-[88px] lg:text-[104px] text-balance max-w-6xl mb-6 md:mb-8 text-[#111111] font-extrabold tracking-[-0.035em] leading-[0.94]">
        Bring every team into focus<span className="text-[#FF4B2B]">.</span>
      </h1>

      {/* Subtitle */}
      <p className="text-base sm:text-lg md:text-[19px] text-neutral-600 max-w-2xl mb-10 leading-relaxed font-normal">
        The unified operating system for brand governance, creative intelligence, and multi-channel asset distribution across global teams.
      </p>

      {/* Action Controls */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
        <button
          onClick={onBookDemo}
          className="bg-[#111111] text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-neutral-800 hover:scale-[1.02] transition-all shadow-[0_10px_25px_rgba(0,0,0,0.1)] flex items-center gap-2 cursor-pointer group"
        >
          <span>Schedule an Enterprise Demo</span>
          <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>

        <button
          onClick={onExploreStudio}
          className="bg-white hover:bg-[#F3F2EB] text-[#111111] border border-[#DCDAD2] hover:border-neutral-900 px-7 py-3.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer shadow-xs"
        >
          <Sparkles size={16} className="text-[#111111]" />
          <span>Explore Lumio Studio</span>
        </button>
      </div>

      {/* Hero Visual Canvas */}
      <div className="w-full max-w-[1492px] bg-[#F0EFEB] overflow-hidden relative z-10 rounded-[28px] sm:rounded-[36px] md:rounded-[40px] h-[460px] sm:h-[600px] md:h-[720px] lg:h-[780px] group border border-[#E5E4DE] shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
        <img
          alt="Vibrant abstract gradient"
          className="w-full h-full object-cover group-hover:scale-103 transition-all duration-1000"
          src="https://images.unsplash.com/photo-1776009009253-759b31cd3908?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />

        {/* Data Overlay (Top-Left) */}
        <div className="absolute top-6 left-6 md:top-10 md:left-10 bg-white/95 backdrop-blur-xl border border-[#E5E4DE] rounded-2xl p-4 text-[#111111] text-left max-w-xs shadow-xl hidden sm:block">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#111111]">
              Live Ecosystem Sync
            </span>
            <span className="text-[11px] font-medium text-neutral-500">Continuous</span>
          </div>
          <p className="text-xs text-neutral-600 leading-relaxed">
            3,420 design tokens synchronized across Figma, Adobe Creative Cloud, and design repositories in real time.
          </p>
        </div>

        {/* Live Status Indicator & Circle Button (Bottom-Right) */}
        <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 flex items-center gap-4">
          <div className="bg-white/95 backdrop-blur-xl border border-[#E5E4DE] rounded-2xl p-4 text-left shadow-xl flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#F4F3EE] border border-[#E5E4DE] flex items-center justify-center text-[#111111]">
              <ShieldCheck size={20} />
            </div>
            <div>
              <div className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider">Brand Governance</div>
              <div className="text-sm font-bold text-neutral-900 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                99.4% Adherence
              </div>
            </div>
          </div>

          <div
            onClick={onExploreStudio}
            className="w-14 h-14 rounded-full border border-[#111111] bg-white hover:bg-[#111111] hover:text-white text-[#111111] flex items-center justify-center shadow-xl transition-all cursor-pointer group"
          >
            <ArrowUpRight size={22} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>
      </div>
    </section>
  );
};
