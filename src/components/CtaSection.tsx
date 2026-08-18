import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface CtaSectionProps {
  onScheduleCall: () => void;
  onGetStarted: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onScheduleCall, onGetStarted }) => {
  return (
    <section className="py-[120px] md:py-[180px] px-6 md:px-12 bg-[#FAF9F6] border-t border-[#E5E4DE]">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center text-center">
        <div className="relative z-10 flex flex-col items-center">
          
          {/* Central Logo Ring */}
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-[#E5E4DE] flex items-center justify-center mb-10 md:mb-12 shadow-xl bg-white">
            <span className="text-[#111111] font-black text-2xl md:text-3xl leading-none font-display">L<span className="text-[#FF4B2B]">.</span></span>
          </div>

          <span className="text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-4">
            Transform Your Brand Operations
          </span>

          {/* Headline */}
          <h2 className="font-display text-[44px] sm:text-[64px] md:text-[84px] font-extrabold text-[#111111] tracking-tight leading-[0.96] mb-12 max-w-4xl text-balance">
            Experience the future of brand intelligence<span className="text-[#FF4B2B]">.</span>
          </h2>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <button
              onClick={onScheduleCall}
              className="bg-[#111111] text-white rounded-full hover:bg-neutral-800 transition-all duration-200 shrink-0 flex items-center justify-center px-8 text-sm h-[48px] font-semibold shadow-[0_10px_25px_rgba(0,0,0,0.1)] hover:scale-[1.02] cursor-pointer"
            >
              Schedule an Enterprise Demo
            </button>
            <button
              onClick={onGetStarted}
              className="bg-white border border-[#DCDAD2] text-neutral-900 hover:border-neutral-900 hover:bg-[#FAF9F6] rounded-full transition-all duration-200 shrink-0 flex items-center justify-center px-8 text-sm h-[48px] font-semibold cursor-pointer shadow-xs"
            >
              Explore Free Pilot
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
