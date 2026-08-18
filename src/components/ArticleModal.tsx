import React from 'react';
import { X, Clock, ArrowLeft } from 'lucide-react';
import { ArticleUpdate } from '../types';

interface ArticleModalProps {
  article: ArticleUpdate | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white border border-[#E5E4DE] rounded-[32px] max-w-2xl w-full p-6 sm:p-10 shadow-2xl relative text-[#111111] my-8">
        
        {/* Header navigation */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E5E4DE]">
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 text-xs font-semibold text-neutral-600 hover:text-neutral-900 transition-colors cursor-pointer uppercase tracking-wider"
          >
            <ArrowLeft size={16} />
            <span>Back to updates</span>
          </button>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#FAF9F6] border border-[#E5E4DE] flex items-center justify-center text-[#666666] hover:border-[#111111] hover:text-[#111111] transition-colors cursor-pointer"
          >
            <X size={16} />
          </button>
        </div>

        {/* Tag & Time */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-semibold text-neutral-800 uppercase tracking-wider bg-[#F3F2EB] border border-[#E5E4DE] px-3 py-1 rounded-full">
            {article.tag}
          </span>
          <span className="text-xs text-neutral-500 flex items-center gap-1 font-medium">
            <Clock size={12} />
            {article.readTime}
          </span>
        </div>

        {/* Title */}
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight mb-6 leading-snug">
          {article.title}<span className="text-[#FF4B2B]">.</span>
        </h2>

        {/* Featured Image */}
        <div className="w-full h-[280px] sm:h-[340px] rounded-2xl overflow-hidden mb-6 shadow-md border border-[#E5E4DE] bg-[#FAF9F6]">
          <img
            alt={article.title}
            className="w-full h-full object-cover"
            src={article.imageUrl}
          />
        </div>

        {/* Article Body */}
        <div className="space-y-4 text-base text-neutral-700 leading-relaxed">
          <p className="font-semibold text-lg text-neutral-950 leading-relaxed font-sans">
            {article.summary}
          </p>
          {article.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-8 pt-6 border-t border-[#E5E4DE] flex items-center justify-between">
          <span className="text-xs text-neutral-500 font-medium">Published on {article.date}</span>
          <button
            onClick={onClose}
            className="bg-[#111111] text-white px-6 py-2.5 rounded-full text-xs font-semibold hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            Close Article
          </button>
        </div>

      </div>
    </div>
  );
};
