import React from 'react';
import { X, FileText, Download, Tag, Calendar, HardDrive } from 'lucide-react';
import { BrandFile } from '../types';

interface FileDetailModalProps {
  file: BrandFile | null;
  onClose: () => void;
}

export const FileDetailModal: React.FC<FileDetailModalProps> = ({ file, onClose }) => {
  if (!file) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white border border-[#E5E4DE] rounded-[32px] max-w-lg w-full p-6 sm:p-8 shadow-2xl relative text-[#111111]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#FAF9F6] border border-[#E5E4DE] flex items-center justify-center text-[#666666] hover:border-[#111111] hover:text-[#111111] transition-colors cursor-pointer"
        >
          <X size={16} />
        </button>

        {/* File Header */}
        <div className="flex items-center gap-3.5 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-[#FAF9F6] border border-[#E5E4DE] flex items-center justify-center text-[#111111] shadow-xs">
            <FileText size={24} />
          </div>
          <div>
            <h3 className="font-display text-xl font-bold text-neutral-900">{file.name}<span className="text-[#FF4B2B]">.</span></h3>
            <span className="text-xs text-neutral-500 font-medium">{file.type} • {file.size}</span>
          </div>
        </div>

        {/* File Description */}
        <div className="bg-[#FAF9F6] p-4 rounded-2xl border border-[#E5E4DE] mb-6">
          <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider block mb-1">
            Asset Overview
          </span>
          <p className="text-sm text-neutral-700 leading-relaxed font-normal">
            {file.description}
          </p>
        </div>

        {/* Metadata Details */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-[#FAF9F6] p-3.5 rounded-xl border border-[#E5E4DE]">
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider block mb-1 flex items-center gap-1.5">
              <Calendar size={13} /> Last Synced
            </span>
            <span className="text-xs font-semibold text-neutral-900">{file.lastUpdated}</span>
          </div>
          <div className="bg-[#FAF9F6] p-3.5 rounded-xl border border-[#E5E4DE]">
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider block mb-1 flex items-center gap-1.5">
              <HardDrive size={13} /> File Size
            </span>
            <span className="text-xs font-semibold text-neutral-900">{file.size}</span>
          </div>
        </div>

        {/* Semantic Tags */}
        <div className="mb-6">
          <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider block mb-2 flex items-center gap-1.5">
            <Tag size={13} /> Taxonomy & Tags
          </span>
          <div className="flex flex-wrap gap-2">
            {file.tags.map((tag, idx) => (
              <span key={idx} className="bg-[#FAF9F6] px-3 py-1 rounded-full text-xs font-medium border border-[#E5E4DE] text-neutral-600">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => {
              alert(`Exporting archive package: ${file.name}`);
              onClose();
            }}
            className="flex-1 bg-[#111111] text-white py-3 rounded-full text-xs font-semibold hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer"
          >
            <Download size={14} />
            <span>Download Package</span>
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
