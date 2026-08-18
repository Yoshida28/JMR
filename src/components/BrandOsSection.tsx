import React, { useState } from 'react';
import { Folder, FileText, Image as ImageIcon, BarChart3, MoreHorizontal, Eye } from 'lucide-react';
import { BRAND_FILES } from '../data/mockData';
import { BrandFile } from '../types';

interface BrandOsSectionProps {
  onSelectFile: (file: BrandFile) => void;
}

export const BrandOsSection: React.FC<BrandOsSectionProps> = ({ onSelectFile }) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [selectedFileId, setSelectedFileId] = useState<string>('file-1');

  const selectedFile = BRAND_FILES.find((f) => f.id === selectedFileId) || BRAND_FILES[0];

  const tabs = [
    {
      title: 'Centralized Knowledge',
      description: 'Bring all your disparate assets, guidelines, and strategic documents into one cohesive, searchable environment.'
    },
    {
      title: 'Contextual Intelligence',
      description: 'Our neural agent understands the nuances of your brand, providing contextual recommendations and surfacing verified creative assets.'
    },
    {
      title: 'Seamless Distribution',
      description: 'Ensure every team member, agency partner, and global office has access to the latest, approved brand materials instantly.'
    }
  ];

  const getIconComponent = (icon: string) => {
    switch (icon) {
      case 'folder':
        return <Folder size={18} className="text-[#111111]" />;
      case 'description':
        return <FileText size={18} className="text-[#111111]" />;
      case 'image':
        return <ImageIcon size={18} className="text-[#111111]" />;
      case 'analytics':
        return <BarChart3 size={18} className="text-[#111111]" />;
      default:
        return <Folder size={18} className="text-[#111111]" />;
    }
  };

  return (
    <section id="brand-os" className="py-[100px] md:py-[140px] px-6 md:px-12 max-w-[1728px] mx-auto bg-[#FAF9F6] border-t border-[#E5E4DE]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[100px] items-center">
        
        {/* Left Side: Bright OS File Explorer Window */}
        <div className="bg-[#F3F2EB] rounded-[32px] md:rounded-[40px] p-6 sm:p-8 h-[640px] sm:h-[700px] flex flex-col justify-center items-center relative overflow-hidden border border-[#E5E4DE] shadow-[0_20px_50px_rgba(0,0,0,0.04)]">
          
          {/* Main Card */}
          <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-[#E5E4DE] p-6 flex flex-col">
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#E5E4DE]">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-900">Brand Knowledge Graph</span>
                <span className="text-[10px] bg-neutral-100 text-neutral-800 border border-neutral-200 px-2 py-0.5 rounded-full font-semibold">Live Sync</span>
              </div>
              <MoreHorizontal size={18} className="text-neutral-400" />
            </div>

            {/* File List */}
            <div className="space-y-3 mb-6">
              {BRAND_FILES.map((file) => {
                const isSelected = file.id === selectedFileId;
                return (
                  <div
                    key={file.id}
                    onClick={() => setSelectedFileId(file.id)}
                    className={`flex items-center justify-between p-3.5 rounded-xl cursor-pointer transition-all duration-200 ${
                      isSelected
                        ? 'bg-[#FAF9F6] border border-[#111111]/50 shadow-xs'
                        : 'bg-white hover:bg-[#FAF9F6] border border-[#E5E4DE]'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-8 h-8 rounded-lg bg-[#F3F2EB] border border-[#E5E4DE] flex items-center justify-center shadow-xs">
                        {getIconComponent(file.icon)}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-neutral-900">{file.name}</span>
                        <span className="text-xs text-neutral-500">{file.size} · {file.type}</span>
                      </div>
                    </div>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-[#111111]" />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Selected File Inspector Card */}
            <div className="bg-[#FAF9F6] p-4 rounded-xl border border-[#E5E4DE]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider">Asset Overview</span>
                <button
                  onClick={() => onSelectFile(selectedFile)}
                  className="text-xs font-semibold text-neutral-900 hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Eye size={13} />
                  <span>Inspect</span>
                </button>
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed mb-3 line-clamp-2">
                {selectedFile.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {selectedFile.tags.map((tag, idx) => (
                  <span key={idx} className="text-[11px] bg-white px-2.5 py-0.5 rounded-full border border-[#E5E4DE] text-neutral-600 font-medium">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Right Side: Features Content & Tab Switcher */}
        <div className="flex flex-col justify-center h-full max-w-lg">
          <span className="text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-3">
            Unified Knowledge Architecture
          </span>
          <h3 className="font-display text-[32px] md:text-[40px] mb-8 font-extrabold tracking-tight text-[#111111] leading-tight">
            The intelligent foundation<br />for your brand<span className="text-[#FF4B2B]">.</span>
          </h3>

          <div className="relative pl-8 border-l-[2px] border-[#E5E4DE] space-y-8">
            {/* Dynamic Accent Indicator */}
            <div
              className="absolute left-[-2px] w-[2px] bg-[#111111] shadow-xs transition-all duration-300"
              style={{
                height: '33.33%',
                top: `${activeTab * 33.33}%`
              }}
            />

            {tabs.map((tab, idx) => {
              const isActive = activeTab === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`cursor-pointer transition-opacity duration-300 ${
                    isActive ? 'opacity-100' : 'opacity-40 hover:opacity-80'
                  }`}
                >
                  <h4 className="font-display text-xl font-bold mb-2 text-[#111111] flex items-baseline gap-2">
                    <span className="text-xs font-semibold text-neutral-400">0{idx + 1}.</span>
                    {tab.title}
                  </h4>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {tab.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
