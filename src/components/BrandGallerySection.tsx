import React from 'react';
import { DemoOne } from './ui/demo';
import { Sparkles, Layers, Image as ImageIcon } from 'lucide-react';

interface BrandGallerySectionProps {
  onBookDemo?: () => void;
}

export const BrandGallerySection: React.FC<BrandGallerySectionProps> = ({ onBookDemo }) => {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-black text-white relative overflow-hidden border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 text-center mb-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 mb-4 shadow-xs">
          <Sparkles size={14} className="text-[#FF4B2B]" />
          <span className="text-xs font-semibold text-neutral-200 tracking-wide">
            Living Brand Gallery
          </span>
        </div>

        <h2 className="font-display text-[32px] sm:text-[44px] md:text-[52px] font-extrabold tracking-tight text-white leading-[1.08] mb-4">
          Infinite brand assets, calibrated in real time<span className="text-[#FF4B2B]">.</span>
        </h2>

        <p className="text-sm sm:text-base text-neutral-400 leading-relaxed font-normal max-w-2xl mx-auto">
          Explore dynamic generative visual outputs seamlessly synchronized across enterprise design systems with automated token compliance.
        </p>
      </div>

      {/* Auto Slider Component */}
      <DemoOne />

      {/* Interactive CTA Footnote */}
      <div className="max-w-xl mx-auto px-6 text-center mt-6 relative z-20">
        {onBookDemo && (
          <button
            onClick={onBookDemo}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-neutral-200 transition-all duration-200 shadow-xl cursor-pointer"
          >
            <ImageIcon size={14} />
            <span>Generate Custom Brand Assets</span>
          </button>
        )}
      </div>
    </section>
  );
};

export default BrandGallerySection;
