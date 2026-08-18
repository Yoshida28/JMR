import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ARTICLES } from '../data/mockData';
import { ArticleUpdate } from '../types';

interface LatestUpdatesSectionProps {
  onSelectArticle: (article: ArticleUpdate) => void;
}

export const LatestUpdatesSection: React.FC<LatestUpdatesSectionProps> = ({ onSelectArticle }) => {
  return (
    <section id="updates" className="py-[100px] md:py-[130px] px-6 md:px-12 max-w-[1728px] mx-auto bg-[#FAF9F6] border-t border-[#E5E4DE]">
      
      {/* Section Header */}
      <div className="flex justify-between items-end mb-10 md:mb-14">
        <div>
          <span className="text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-2 block">
            Insights & Thought Leadership
          </span>
          <h2 className="font-display text-[32px] md:text-[40px] font-extrabold tracking-tight text-[#111111]">
            Latest Updates<span className="text-[#FF4B2B]">.</span>
          </h2>
        </div>

        <button
          onClick={() => onSelectArticle(ARTICLES[0])}
          className="text-xs font-semibold uppercase tracking-wider border-b-2 border-[#111111] text-[#111111] pb-1 hover:opacity-70 transition-opacity cursor-pointer"
        >
          View All Articles
        </button>
      </div>

      {/* 3 Update Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {ARTICLES.map((article) => (
          <div
            key={article.id}
            onClick={() => onSelectArticle(article)}
            className="group cursor-pointer flex flex-col"
          >
            {/* Image Container */}
            <div className="w-full h-[380px] sm:h-[420px] md:h-[450px] rounded-[32px] md:rounded-[40px] mb-6 overflow-hidden bg-[#F0EFEB] border border-[#E5E4DE] group-hover:border-[#111111]/30 relative transition-all duration-300 shadow-[0_15px_40px_rgba(0,0,0,0.04)]">
              <img
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                src={article.imageUrl}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/95 border border-[#E5E4DE] flex items-center justify-center text-[#111111] opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md">
                <ArrowUpRight size={16} />
              </div>
            </div>

            {/* Meta & Title */}
            <div className="flex items-center justify-between mb-2.5">
              <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                {article.tag}
              </p>
              <span className="text-xs text-neutral-500 font-medium">
                {article.readTime}
              </span>
            </div>

            <h4 className="font-display text-xl md:text-[22px] font-bold text-[#111111] group-hover:text-neutral-600 transition-colors leading-snug">
              {article.title}
            </h4>
          </div>
        ))}
      </div>

    </section>
  );
};
