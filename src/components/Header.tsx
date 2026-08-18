import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onBookDemo: () => void;
  onGetStarted: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onBookDemo, onGetStarted }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-[20px] left-0 right-0 z-50 flex items-center justify-center px-4 md:px-6 w-full pointer-events-none">
      <div className="pointer-events-auto w-full max-w-[760px] flex items-center justify-between bg-white/90 backdrop-blur-2xl rounded-full px-3 py-1.5 shadow-[0_10px_35px_rgba(0,0,0,0.06)] border border-[#E5E4DE] h-[58px] transition-all duration-300">
        <div className="flex items-center gap-6 md:gap-8 pl-1">
          {/* Logo */}
          <a
            href="#"
            className="w-[36px] h-[36px] rounded-full border border-[#DCDAD2] hover:border-[#111111] flex items-center justify-center shrink-0 hover:scale-105 transition-all bg-[#111111] group"
            aria-label="Lumio Home"
          >
            <span className="text-[#FFFFFF] font-black text-sm leading-none font-display">L<span className="text-[#FF4B2B]">.</span></span>
          </a>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-7">
            <button
              onClick={() => scrollToSection('brand-os')}
              className="text-xs font-medium text-neutral-600 hover:text-neutral-950 transition-colors duration-200 cursor-pointer"
            >
              Stories
            </button>
            <button
              onClick={() => scrollToSection('lumio-studio')}
              className="text-xs font-medium text-neutral-600 hover:text-neutral-950 transition-colors duration-200 cursor-pointer"
            >
              Studio
            </button>
            <button
              onClick={() => scrollToSection('team-cases')}
              className="text-xs font-medium text-neutral-600 hover:text-neutral-950 transition-colors duration-200 cursor-pointer"
            >
              Solutions
            </button>
            <button
              onClick={() => scrollToSection('manifesto')}
              className="text-xs font-medium text-neutral-600 hover:text-neutral-950 transition-colors duration-200 cursor-pointer"
            >
              Vision
            </button>
            <button
              onClick={() => scrollToSection('updates')}
              className="text-xs font-medium text-neutral-600 hover:text-neutral-950 transition-colors duration-200 cursor-pointer"
            >
              Updates
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-xs font-medium text-neutral-600 hover:text-neutral-950 transition-colors duration-200 cursor-pointer flex items-center gap-1"
            >
              <span>Gallery</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF4B2B]" />
            </button>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onBookDemo}
            className="border border-[#111111] bg-[#111111] text-white hover:bg-neutral-800 rounded-full transition-all duration-200 shrink-0 flex items-center px-4 text-xs h-[36px] font-semibold tracking-tight cursor-pointer group shadow-sm"
          >
            <span>Book a Demo</span>
            <span className="text-white ml-1.5 transition-transform group-hover:translate-x-0.5">→</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-8 h-8 rounded-full border border-[#E5E4DE] text-[#111111] flex items-center justify-center hover:border-[#111111] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto fixed top-[90px] left-4 right-4 bg-white border border-[#E5E4DE] rounded-3xl p-6 shadow-2xl md:hidden z-50 text-[#111111] flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2 text-sm font-medium">
            <button
              onClick={() => scrollToSection('brand-os')}
              className="text-left py-2.5 px-3 rounded-lg hover:bg-neutral-100 text-neutral-600 hover:text-neutral-900"
            >
              Platform Overview
            </button>
            <button
              onClick={() => scrollToSection('lumio-studio')}
              className="text-left py-2.5 px-3 rounded-lg hover:bg-neutral-100 text-neutral-600 hover:text-neutral-900 flex items-center justify-between"
            >
              <span>Lumio Studio</span>
              <span className="text-[10px] bg-neutral-900 text-white px-2 py-0.5 rounded-full font-semibold">AI</span>
            </button>
            <button
              onClick={() => scrollToSection('team-cases')}
              className="text-left py-2.5 px-3 rounded-lg hover:bg-neutral-100 text-neutral-600 hover:text-neutral-900"
            >
              Enterprise Solutions
            </button>
            <button
              onClick={() => scrollToSection('manifesto')}
              className="text-left py-2.5 px-3 rounded-lg hover:bg-neutral-100 text-neutral-600 hover:text-neutral-900"
            >
              Strategic Vision
            </button>
            <button
              onClick={() => scrollToSection('updates')}
              className="text-left py-2.5 px-3 rounded-lg hover:bg-neutral-100 text-neutral-600 hover:text-neutral-900"
            >
              Dispatches & News
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-left py-2.5 px-3 rounded-lg hover:bg-neutral-100 text-neutral-600 hover:text-neutral-900 flex items-center justify-between"
            >
              <span>Brand Asset Gallery</span>
              <span className="text-[10px] bg-[#FF4B2B] text-white px-2 py-0.5 rounded-full font-semibold">New</span>
            </button>
          </div>

          <div className="pt-4 border-t border-[#E5E4DE] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookDemo();
              }}
              className="w-full py-2.5 rounded-full bg-neutral-900 text-white font-semibold text-xs text-center hover:bg-neutral-800"
            >
              Book a demo
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onGetStarted();
              }}
              className="w-full py-2.5 rounded-full border border-neutral-300 text-neutral-900 font-semibold text-xs text-center hover:bg-neutral-50"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
