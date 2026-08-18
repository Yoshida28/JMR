import React, { useState } from 'react';
import { Sparkles, RefreshCw, Volume2, Mic, Heart } from 'lucide-react';

export const VisualCollageSection: React.FC = () => {
  const [autoSync, setAutoSync] = useState(true);
  const [processingPercent, setProcessingPercent] = useState(78);
  const [likedComment, setLikedComment] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);

  const triggerProgressBump = () => {
    setProcessingPercent((prev) => (prev >= 100 ? 50 : Math.min(100, prev + 11)));
  };

  return (
    <section className="min-h-[1100px] md:min-h-[1350px] lg:min-h-[1450px] w-full max-w-[1728px] mx-auto relative overflow-hidden bg-[#FAF9F6] py-16 md:py-24 select-none">
      
      {/* Central Anchor Typography */}
      <div className="absolute inset-0 flex justify-center items-center opacity-100 pointer-events-none mt-10 md:mt-20 z-0">
        <h2 className="font-display text-[58px] sm:text-[84px] md:text-[110px] lg:text-[130px] font-black text-[#111111]/[0.06] tracking-tighter leading-[0.9] text-center px-4">
          Creative<br />Intelligence<span className="text-[#111111]/15">.</span>
        </h2>
      </div>

      {/* Floating Collage Container */}
      <div className="relative w-full h-[1050px] md:h-[1300px] max-w-[1500px] mx-auto">
        
        {/* 1. Top-left: Image with Glass UI Overlay */}
        <div
          onClick={triggerProgressBump}
          className="absolute rounded-[28px] md:rounded-[32px] overflow-hidden bg-white border border-[#E5E4DE] shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:border-[#111111]/30 transition-all duration-300 hover:scale-[1.02] cursor-pointer group"
          style={{ left: '6%', top: '6%', width: '320px', height: '240px', zIndex: 10 }}
        >
          <img
            alt="Design asset"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
            src="https://images.unsplash.com/photo-1751467928435-22c8826b5310?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div className="absolute bottom-3.5 left-3.5 right-3.5 bg-white/95 backdrop-blur-xl border border-[#E5E4DE] rounded-2xl p-3.5 shadow-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-neutral-900 font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-ping" />
                Asset Vectorization
              </span>
              <span className="text-xs text-neutral-900 font-bold">{processingPercent}%</span>
            </div>
            <div className="w-full bg-[#F0EFEB] rounded-full h-1.5 overflow-hidden">
              <div
                className="bg-[#111111] h-1.5 rounded-full transition-all duration-500 shadow-xs"
                style={{ width: `${processingPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* 2. Top-right: Tall Card with Image & Sparkle */}
        <div
          className="absolute rounded-[28px] md:rounded-[32px] overflow-hidden bg-white border border-[#E5E4DE] shadow-[0_15px_40px_rgba(0,0,0,0.06)] transition-all duration-300 hover:scale-[1.02]"
          style={{ right: '8%', top: '8%', width: '270px', height: '320px', zIndex: 10 }}
        >
          <img
            alt="Abstract visual"
            className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
            src="https://images.unsplash.com/photo-1762532264999-7dde57d37f22?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/95 backdrop-blur-md border border-[#E5E4DE] flex items-center justify-center shadow-md text-[#111111]">
            <Sparkles size={16} />
          </div>
        </div>

        {/* 3. Mid-left: Floating Glass UI with Auto-Sync Toggle */}
        <div
          className="absolute rounded-[26px] overflow-hidden bg-white/95 backdrop-blur-3xl border border-[#E5E4DE] shadow-[0_20px_50px_rgba(0,0,0,0.08)] flex flex-col p-5 transition-transform duration-300 hover:scale-105"
          style={{ left: '4%', top: '38%', width: '260px', zIndex: 20 }}
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-800">Auto-Sync</span>
            <button
              onClick={() => setAutoSync(!autoSync)}
              className={`w-10 h-6 rounded-full relative transition-colors duration-300 border border-[#DCDAD2] cursor-pointer ${
                autoSync ? 'bg-[#111111]' : 'bg-[#E5E4DE]'
              }`}
              aria-label="Toggle Auto-Sync"
            >
              <div
                className={`absolute top-0.5 w-4 h-4 rounded-full shadow-md transition-all duration-300 ${
                  autoSync ? 'right-0.5 bg-white' : 'left-0.5 bg-white'
                }`}
              />
            </button>
          </div>
          <div className="flex items-center gap-3 bg-[#FAF9F6] p-2.5 rounded-2xl border border-[#E5E4DE]">
            <div className="w-10 h-10 rounded-full bg-white border border-[#E5E4DE] flex items-center justify-center text-[#111111] shrink-0 shadow-xs">
              <RefreshCw size={16} className={autoSync ? 'animate-spin' : ''} style={{ animationDuration: '8s' }} />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs font-semibold text-neutral-900">Creative Cloud</span>
              <span className="text-xs text-neutral-500 leading-tight flex items-center gap-1.5 mt-0.5">
                <span className={`w-1.5 h-1.5 rounded-full ${autoSync ? 'bg-[#10B981]' : 'bg-[#888888]'}`} />
                {autoSync ? 'Connected' : 'Idle'}
              </span>
            </div>
          </div>
        </div>

        {/* 4. Mid-right: Image with Content Guidelines Label (Audio & Music) */}
        <div
          onClick={() => setAudioPlaying(!audioPlaying)}
          className="absolute rounded-[28px] md:rounded-[32px] overflow-hidden bg-white border border-[#E5E4DE] shadow-[0_15px_40px_rgba(0,0,0,0.06)] transition-all duration-300 hover:scale-[1.02] cursor-pointer"
          style={{ right: '5%', top: '44%', width: '310px', height: '220px', zIndex: 12 }}
        >
          <img
            alt="Audio landscape"
            className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
            src="https://images.unsplash.com/photo-1607874089816-bf5af74fe2c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xl px-3.5 py-1.5 rounded-full border border-[#E5E4DE] shadow-md flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${audioPlaying ? 'bg-[#10B981] animate-pulse' : 'bg-[#111111]'}`} />
            <span className="text-xs font-semibold text-neutral-900 tracking-tight flex items-center gap-1.5">
              Audio & Sonic Branding {audioPlaying && '♫'}
            </span>
          </div>
        </div>

        {/* 5. Bottom-left: Large Image with Brand Voice Badge */}
        <div
          className="absolute rounded-[28px] md:rounded-[32px] overflow-hidden bg-white border border-[#E5E4DE] shadow-[0_15px_40px_rgba(0,0,0,0.06)] transition-all duration-300 hover:scale-[1.02]"
          style={{ left: '12%', top: '64%', width: '360px', height: '250px', zIndex: 15 }}
        >
          <img
            alt="Portrait sculpture"
            className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
            src="https://images.unsplash.com/photo-1758369636841-241369c12f3b?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-xl px-4 py-2 rounded-full border border-[#E5E4DE] shadow-md flex items-center gap-2">
            <Mic size={14} className="text-[#111111]" />
            <span className="text-xs font-semibold text-neutral-900 tracking-tight">Tone of Voice Guidelines</span>
          </div>
        </div>

        {/* 6. Bottom-right: Wide Creative Image */}
        <div
          className="absolute rounded-[28px] md:rounded-[32px] overflow-hidden bg-white border border-[#E5E4DE] shadow-[0_15px_40px_rgba(0,0,0,0.06)] transition-all duration-300 hover:scale-[1.02]"
          style={{ right: '12%', top: '70%', width: '350px', height: '230px', zIndex: 14 }}
        >
          <img
            alt="Architecture texture"
            className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
            src="https://images.unsplash.com/photo-1661962399580-80301d32d791?q=80&w=1625&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>

        {/* 7. Floating Comment / Profile - Alex Morgan */}
        <div
          onClick={() => setLikedComment(!likedComment)}
          className="absolute bg-white/95 backdrop-blur-3xl rounded-[24px] flex items-center gap-3.5 p-3 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-[#E5E4DE] hover:border-[#111111]/30 z-30 cursor-pointer transition-all duration-300 hover:scale-105"
          style={{ left: '42%', top: '80%', width: 'max-content' }}
        >
          <div className="w-10 h-10 rounded-full bg-[#FAF9F6] overflow-hidden shadow-xs border border-[#E5E4DE] shrink-0">
            <img
              alt="Alex Morgan"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxUZpAK7kBAK1H5Anlz-i_nh19XyaGUt1hLDC6ZASnuBK2vRcwFDP46vx7HodMWCGvWJVA3aKLfp00pDRGNPsH0LVYvOGBSQ1KJIx2wTCxFcEJMNlnv9DHJKT0wyVelxRunXJN3d41Z2MPDK4poxQF_iybQaYL4ebVjC52RWnq9U6Y-VA7k5seZ7Z4c1n3nq7ply6CwSNm8-OH_B6wae1-h-Zmn2y3jh9urDyal2zhahuy408MHHCcPTmA9TNKUOA7WEsjuEy1iMvC"
            />
          </div>
          <div className="flex flex-col pr-2 text-left">
            <span className="text-[11px] text-neutral-500 font-semibold">Alex Morgan · VP of Brand</span>
            <span className="text-[13px] text-neutral-900 leading-tight font-medium">Unbelievably fast and accurate workflow.</span>
          </div>
          <div className={`p-1.5 rounded-full ${likedComment ? 'bg-[#FF4B2B]/10 text-[#FF4B2B]' : 'text-gray-400 hover:text-gray-600'}`}>
            <Heart size={16} fill={likedComment ? '#FF4B2B' : 'none'} />
          </div>
        </div>

      </div>
    </section>
  );
};
