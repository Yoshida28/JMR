import React, { useState } from 'react';
import { Sparkles, Copy, Check, RefreshCw, ShieldCheck, Terminal } from 'lucide-react';
import { SAMPLE_PROMPTS } from '../data/mockData';

export const LumioStudioSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [selectedPromptIndex, setSelectedPromptIndex] = useState<number>(0);
  const [customPrompt, setCustomPrompt] = useState<string>(SAMPLE_PROMPTS[0].prompt);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [output, setOutput] = useState<string>(SAMPLE_PROMPTS[0].response);
  const [copied, setCopied] = useState<boolean>(false);

  const features = [
    {
      title: 'Automated Brand Alignment',
      description: 'Every asset generated is instantly vetted against your core brand identity and tone lexicon.'
    },
    {
      title: 'Contextual Layouts',
      description: 'Intelligence that understands the medium, whether it is social, print, sales decks, or digital apps.'
    },
    {
      title: 'Multi-Channel Distribution',
      description: 'Sync and deploy approved creative across all marketing and sales platforms simultaneously.'
    },
    {
      title: 'Predictive Analytics',
      description: 'Gain real-time insights into how your visual and textual assets will perform before they go live.'
    }
  ];

  const handleSelectPreset = (index: number) => {
    setSelectedPromptIndex(index);
    setCustomPrompt(SAMPLE_PROMPTS[index].prompt);
    setOutput(SAMPLE_PROMPTS[index].response);
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const matched = SAMPLE_PROMPTS.find(p => p.prompt.trim() === customPrompt.trim());
      if (matched) {
        setOutput(matched.response);
      } else {
        setOutput(
          `// LUMIO NEURAL SYNTHESIS [SYS-809]\n\n` +
          `TONE VECTOR: Confident // High-Precision // Minimalist.\n` +
          `PROMPT: "${customPrompt}"\n\n` +
          `[01] Structured for zero drift across multi-modal touchpoints.\n` +
          `[02] Verified against 2026 visual guidelines and contrast tokens.\n` +
          `[03] Ready for instant distribution to enterprise repository.`
        );
      }
      setIsGenerating(false);
    }, 600);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="lumio-studio" className="py-[100px] md:py-[140px] px-6 md:px-12 max-w-[1728px] mx-auto bg-[#FAF9F6] border-t border-[#E5E4DE]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[100px] items-center">
        
        {/* Left Side: Feature Narrative */}
        <div className="flex flex-col justify-center h-full max-w-lg order-2 lg:order-1">
          <span className="text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-3">
            Autonomous Generation
          </span>
          <h3 className="font-display text-[32px] md:text-[40px] mb-8 font-extrabold tracking-tight text-[#111111] leading-tight">
            Generate on-brand<br />assets in seconds<span className="text-[#FF4B2B]">.</span>
          </h3>

          <div className="relative pl-8 border-l-[2px] border-[#E5E4DE] space-y-8">
            <div
              className="absolute left-[-2px] w-[2px] bg-[#111111] shadow-xs transition-all duration-300"
              style={{
                height: '25%',
                top: `${activeTab * 25}%`
              }}
            />

            {features.map((item, idx) => {
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
                    {item.title}
                  </h4>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Studio Console */}
        <div className="bg-[#F3F2EB] rounded-[32px] md:rounded-[40px] p-6 sm:p-8 h-[640px] sm:h-[700px] flex flex-col items-center justify-center relative overflow-hidden border border-[#E5E4DE] shadow-[0_20px_50px_rgba(0,0,0,0.04)] order-1 lg:order-2">
          
          <div className="w-full max-w-lg bg-white rounded-3xl shadow-xl p-6 sm:p-7 border border-[#E5E4DE] flex flex-col h-full max-h-[580px]">
            
            {/* Top Bar */}
            <div className="flex items-center justify-between mb-5 pb-3 border-b border-[#E5E4DE]">
              <div className="flex items-center gap-2.5">
                <div className="w-[24px] h-[24px] rounded-full border border-[#DCDAD2] flex items-center justify-center shrink-0 bg-[#111111]">
                  <span className="text-white font-black text-[10px] leading-none">L</span>
                </div>
                <span className="text-xs font-bold text-neutral-900 uppercase tracking-wider">Studio Workspace</span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#10B981]/10 border border-[#10B981]/20 px-2.5 py-1 rounded-full text-[#10B981] text-xs font-semibold">
                <ShieldCheck size={13} />
                <span>99.4% Adherence</span>
              </div>
            </div>

            {/* Prompt Selector Pills */}
            <div className="flex gap-2 overflow-x-auto pb-2 mb-3 no-scrollbar">
              {SAMPLE_PROMPTS.map((p, i) => (
                <button
                  key={p.id}
                  onClick={() => handleSelectPreset(i)}
                  className={`text-xs px-3 py-1.5 rounded-full font-medium whitespace-nowrap transition-colors cursor-pointer border ${
                    selectedPromptIndex === i
                      ? 'bg-[#111111] text-white border-[#111111]'
                      : 'bg-[#FAF9F6] text-neutral-600 hover:text-neutral-900 border-[#E5E4DE]'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>

            {/* Prompt Input Box */}
            <div className="bg-[#FAF9F6] rounded-2xl p-3.5 mb-4 border border-[#E5E4DE] shadow-xs relative">
              <textarea
                value={customPrompt}
                onChange={(e) => setCustomPrompt(e.target.value)}
                rows={2}
                className="w-full bg-transparent text-sm text-neutral-900 focus:outline-none resize-none placeholder-neutral-400 font-normal leading-relaxed"
                placeholder="Describe the asset or copy you want to create..."
              />
              <div className="flex justify-between items-center mt-2 pt-2 border-t border-[#E5E4DE]">
                <span className="text-[11px] font-medium text-neutral-500">Engine: Lumio Brand Intelligence</span>
                <button
                  onClick={handleGenerate}
                  disabled={isGenerating}
                  className="w-8 h-8 rounded-full bg-[#111111] text-white flex items-center justify-center shadow-md hover:bg-neutral-800 hover:scale-105 transition-transform cursor-pointer disabled:opacity-50"
                  aria-label="Generate output"
                >
                  {isGenerating ? <RefreshCw size={14} className="animate-spin" /> : <Sparkles size={14} />}
                </button>
              </div>
            </div>

            {/* Output Box */}
            <div className="flex-1 bg-[#FAF9F6] rounded-2xl p-4 border border-[#E5E4DE] overflow-y-auto relative flex flex-col justify-between">
              <div className="text-sm text-neutral-800 leading-relaxed whitespace-pre-wrap font-normal">
                {isGenerating ? (
                  <div className="flex items-center gap-2 text-neutral-800 py-6 justify-center text-sm font-medium">
                    <RefreshCw size={16} className="animate-spin" />
                    <span>Synthesizing brand assets...</span>
                  </div>
                ) : (
                  output
                )}
              </div>

              {/* Action Bar */}
              <div className="flex items-center justify-between pt-3 mt-3 border-t border-[#E5E4DE]">
                <div className="flex gap-1.5">
                  <span className="text-[11px] bg-white border border-[#E5E4DE] px-2.5 py-0.5 rounded-full text-neutral-600 font-medium">
                    Verified
                  </span>
                  <span className="text-[11px] bg-white border border-[#E5E4DE] px-2.5 py-0.5 rounded-full text-neutral-600 font-medium">
                    Omnichannel
                  </span>
                </div>
                <button
                  onClick={copyToClipboard}
                  className="text-xs font-semibold flex items-center gap-1.5 text-neutral-600 hover:text-neutral-950 transition-colors cursor-pointer bg-white px-3 py-1 rounded-lg border border-[#E5E4DE]"
                >
                  {copied ? <Check size={13} className="text-[#10B981]" /> : <Copy size={13} />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
