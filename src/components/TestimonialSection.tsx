import React from 'react';

export const TestimonialSection: React.FC = () => {
  return (
    <section className="py-[120px] md:py-[160px] px-6 md:px-12 max-w-[1200px] mx-auto flex flex-col items-center text-center bg-[#FAF9F6] border-t border-[#E5E4DE]">
      
      <span className="text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-8">
        Executive Perspective
      </span>

      {/* Quotation Headline */}
      <h2 className="font-display text-[32px] sm:text-[44px] md:text-[54px] leading-[1.15] tracking-tight text-neutral-950 mb-12 md:mb-16 text-balance max-w-[1000px] font-light">
        "Lumio was built with the desire to liberate creative teams from menial tasks, allowing them to focus on <span className="font-extrabold text-neutral-950 underline decoration-[#FF4B2B] decoration-2 underline-offset-8">true strategic innovation</span>."
      </h2>

      {/* Profile Card */}
      <div className="flex items-center gap-4 bg-white px-6 py-3 rounded-full border border-[#E5E4DE] shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#FAF9F6] overflow-hidden shadow-xs shrink-0 border border-[#E5E4DE]">
          <img
            alt="Alex Morgan"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_dQOYUXm-9ocUk-1cRA5ZyP6tu7OdWwNIU7SRhouWt3u89anzj3A5_pr7FGCCICOiz6a2FoSpC-bN53AYbiVQ-spgKPawBtGZtLq-9c6QyNclym7oEuOsCnQllJenEGuMkAeM3mwnTOLdgJakEE63ozCYcDA2l-C2EQnZiozAakUbDrwJG_jxTwrvV9I5p2oiVPXIDBv-rltdG9P0TX6X2OUHQcwckpskXXJEawplcI8ff_rzn1YnIDgrniF27Vjc0Lz4LKcazue9"
          />
        </div>
        <div className="text-left">
          <p className="text-sm font-bold text-neutral-900">Alex Morgan</p>
          <p className="text-xs text-neutral-500 font-medium">VP of Brand, Northline Global</p>
        </div>
      </div>

    </section>
  );
};
