import React from 'react';

export const ManifestoSection: React.FC = () => {
  return (
    <section id="manifesto" className="py-[120px] md:py-[180px] lg:py-[220px] px-6 md:px-12 max-w-[1728px] mx-auto relative flex flex-col items-center text-center bg-[#FAF9F6] overflow-hidden border-t border-[#E5E4DE]">
      
      {/* Background Geometric Wireframe Orb */}
      <div className="absolute top-1/2 -translate-y-1/2 right-[5%] md:right-[10%] w-[320px] md:w-[480px] h-[320px] md:h-[480px] opacity-25 pointer-events-none transition-transform duration-1000">
        <svg className="w-full h-full animate-spin" style={{ animationDuration: '60s' }} fill="none" stroke="url(#manifesto-grad)" strokeWidth="0.8" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="manifesto-grad" x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#111111" />
              <stop offset="100%" stopColor="#DCDAD2" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="48" />
          <ellipse cx="50" cy="50" rx="24" ry="48" />
          <ellipse cx="50" cy="50" rx="48" ry="24" />
          <line x1="2" x2="98" y1="50" y2="50" />
          <line x1="50" x2="50" y1="2" y2="98" />
        </svg>
      </div>

      {/* Manifesto Headline */}
      <div className="relative z-10 max-w-[1020px] flex flex-col items-center">
        <span className="text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-6">
          The Unified Source of Truth
        </span>
        <h2 className="font-display text-[32px] sm:text-[42px] md:text-[50px] lg:text-[54px] leading-[1.18] text-balance tracking-tight text-neutral-950 font-normal">
          As generative AI tools expand across the enterprise, the need for a singular source of brand truth has never been more critical. <span className="font-extrabold text-neutral-950 underline decoration-neutral-900 decoration-2 underline-offset-8">Lumio unifies your strategy.</span>
        </h2>
      </div>
    </section>
  );
};
