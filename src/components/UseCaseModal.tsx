import React from 'react';
import { X, ArrowRight } from 'lucide-react';
import { TeamUseCase } from '../types';

interface UseCaseModalProps {
  useCase: TeamUseCase | null;
  onClose: () => void;
  onBookDemo: () => void;
}

export const UseCaseModal: React.FC<UseCaseModalProps> = ({ useCase, onClose, onBookDemo }) => {
  if (!useCase) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white border border-[#E5E4DE] rounded-[32px] max-w-lg w-full p-6 sm:p-8 shadow-2xl relative text-[#111111]">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#FAF9F6] border border-[#E5E4DE] flex items-center justify-center text-[#666666] hover:border-[#111111] hover:text-[#111111] transition-colors cursor-pointer"
        >
          <X size={16} />
        </button>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-800 uppercase tracking-wider bg-[#F3F2EB] border border-[#E5E4DE] px-3 py-1 rounded-full">
            {useCase.category} Workflow
          </span>
          <span className="text-xs font-semibold text-neutral-600 bg-[#FAF9F6] px-2.5 py-1 rounded-full border border-[#E5E4DE]">
            {useCase.metrics}
          </span>
        </div>

        <h3 className="font-display text-2xl font-bold mb-3 text-neutral-950">{useCase.title}<span className="text-[#FF4B2B]">.</span></h3>
        
        <div className="w-full h-[200px] rounded-2xl overflow-hidden mb-5 border border-[#E5E4DE] bg-[#FAF9F6]">
          <img
            alt={useCase.title}
            className="w-full h-full object-cover"
            src={useCase.imageUrl}
          />
        </div>

        <p className="text-sm text-neutral-700 leading-relaxed mb-4 font-normal">
          {useCase.description}
        </p>

        {useCase.details && (
          <div className="bg-[#FAF9F6] p-4 rounded-xl border border-[#E5E4DE] mb-6">
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider block mb-1">
              Capability Highlights
            </span>
            <p className="text-xs text-neutral-600 leading-relaxed font-normal">
              {useCase.details}
            </p>
          </div>
        )}

        <div className="flex gap-3">
          <button
            onClick={() => {
              onClose();
              onBookDemo();
            }}
            className="flex-1 bg-[#111111] text-white py-3 rounded-full text-xs font-semibold hover:bg-neutral-800 transition-colors flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
          >
            <span>Request {useCase.category} Evaluation</span>
            <ArrowRight size={14} />
          </button>
          <button
            onClick={onClose}
            className="px-5 py-3 rounded-full border border-[#E5E4DE] text-xs font-semibold text-neutral-600 hover:text-neutral-900 hover:border-neutral-900 transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
