import React, { useState, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX, CheckCircle, ArrowRight, Quote, Clock, Share2, Sparkles } from 'lucide-react';
import { VideoStory } from '../types';

interface VideoStoryModalProps {
  story: VideoStory | null;
  onClose: () => void;
  onBookDemo?: () => void;
}

export const VideoStoryModal: React.FC<VideoStoryModalProps> = ({ story, onClose, onBookDemo }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(24);

  useEffect(() => {
    if (!story) return;
    setIsPlaying(true);
    setProgress(20);

    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1.2));
    }, 250);

    return () => clearInterval(interval);
  }, [story]);

  if (!story) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-4xl bg-neutral-950 text-white rounded-3xl border border-neutral-800 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800/80 bg-neutral-900/60 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center">
              <span className="text-white font-black text-xs">L<span className="text-[#FF4B2B]">.</span></span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-neutral-300 uppercase tracking-wider">Executive Story</span>
              <span className="text-neutral-600">•</span>
              <span className="text-xs text-neutral-400 font-medium">{story.category}</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close story"
          >
            <X size={16} />
          </button>
        </div>

        {/* Modal Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 overflow-y-auto">
          
          {/* Left: Video Player Mockup */}
          <div className="lg:col-span-7 bg-black flex flex-col justify-center items-center relative aspect-video sm:aspect-4/3 lg:aspect-auto min-h-[280px] sm:min-h-[380px] overflow-hidden group">
            {/* Background Poster Image */}
            <img
              src={story.thumbnailUrl}
              alt={story.author.name}
              className={`w-full h-full object-cover transition-transform duration-700 ${isPlaying ? 'scale-105 filter brightness-90' : 'filter brightness-75'}`}
            />

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-black/40" />

            {/* Center Play/Pause Overlay Indicator */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="absolute z-20 w-16 h-16 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/40 flex items-center justify-center text-white transition-all transform hover:scale-110 shadow-2xl cursor-pointer"
            >
              {isPlaying ? (
                <Pause size={24} className="fill-white text-white" />
              ) : (
                <Play size={24} className="fill-white text-white translate-x-0.5" />
              )}
            </button>

            {/* Top Left Pill on Player */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
              <span className="bg-black/60 backdrop-blur-md border border-white/15 px-3 py-1 rounded-full text-xs font-semibold text-white flex items-center gap-1.5">
                <span className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-emerald-400 animate-pulse' : 'bg-neutral-400'}`} />
                {isPlaying ? 'Playing Interview' : 'Paused'}
              </span>
              <span className="bg-black/60 backdrop-blur-md border border-white/15 px-2.5 py-1 rounded-full text-xs text-neutral-300 font-mono">
                {story.videoDuration}
              </span>
            </div>

            {/* Bottom Controls Bar */}
            <div className="absolute bottom-0 inset-x-0 z-20 p-4 bg-gradient-to-t from-black/90 to-transparent">
              {/* Progress Line */}
              <div 
                className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden mb-3 cursor-pointer"
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const clickX = e.clientX - rect.left;
                  setProgress((clickX / rect.width) * 100);
                }}
              >
                <div 
                  className="h-full bg-[#FF4B2B] rounded-full transition-all duration-150"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-xs text-neutral-300">
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                  </button>
                  <button 
                    onClick={() => setIsMuted(!isMuted)}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                  </button>
                  <span className="font-mono text-[11px] text-neutral-400">
                    0:{Math.floor((progress / 100) * 134).toString().padStart(2, '0')} / {story.videoDuration}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] uppercase font-bold tracking-wider text-neutral-300">
                    HD 1080p
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Member Quote, Metrics & Story Details */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-neutral-900/90 text-left">
            <div>
              {/* Author Header */}
              <div className="flex items-center gap-3.5 mb-6 pb-5 border-b border-neutral-800">
                <img
                  src={story.author.avatar}
                  alt={story.author.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-neutral-700"
                />
                <div>
                  <h4 className="text-base font-bold text-white flex items-center gap-1.5">
                    <span>{story.author.name}</span>
                    <CheckCircle size={14} className="text-blue-400 fill-blue-400/20" />
                  </h4>
                  <p className="text-xs text-neutral-400 font-normal">
                    {story.author.role}, <span className="text-neutral-200 font-medium">{story.author.company}</span>
                  </p>
                </div>
              </div>

              {/* Quote Block */}
              <div className="relative mb-6">
                <Quote size={24} className="text-[#FF4B2B] opacity-40 mb-2" />
                <p className="text-sm sm:text-base text-neutral-200 leading-relaxed font-normal italic">
                  "{story.fullQuote || story.quote}"
                </p>
              </div>

              {/* Verified Result / ROI Pill */}
              <div className="bg-neutral-800/80 rounded-2xl p-4 border border-neutral-700/80 mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-neutral-400 uppercase tracking-wider block font-semibold mb-0.5">
                      Verified Result
                    </span>
                    <span className="text-xs text-neutral-300 font-medium">
                      {story.highlightStat.label}
                    </span>
                  </div>
                  <span className="text-2xl font-black text-white font-display">
                    {story.highlightStat.value}
                  </span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {story.tags.map((tag, idx) => (
                  <span key={idx} className="text-[11px] bg-neutral-800 text-neutral-300 border border-neutral-700 px-2.5 py-1 rounded-full font-medium">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 border-t border-neutral-800 flex flex-col sm:flex-row gap-2.5">
              <button
                onClick={() => {
                  onClose();
                  if (onBookDemo) onBookDemo();
                }}
                className="flex-1 bg-white text-neutral-950 hover:bg-neutral-200 py-3 px-4 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
              >
                <span>Schedule Similar Workflow Demo</span>
                <ArrowRight size={14} />
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
