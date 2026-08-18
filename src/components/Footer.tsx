import React, { useState } from 'react';
import { Share2, Globe, Network, ArrowRight, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#111111] text-white pt-12 pb-12 px-6 md:px-12 rounded-t-[40px] sm:rounded-t-[54px] md:rounded-t-[64px] relative z-20 border-t border-[#222222]">
      
      {/* Marquee Ticker at Top of Footer */}
      <div className="max-w-[1728px] mx-auto pb-10 mb-12 border-b border-[#222222] overflow-hidden">
        <div className="marquee-container">
          <div className="marquee-content animate-marquee flex gap-12 items-center text-xs text-neutral-400 font-medium tracking-wider uppercase">
            <span>Enterprise SLA 99.99%</span>
            <span className="text-[#FF4B2B]">✦</span>
            <span>SOC 2 Type II Certified</span>
            <span className="text-[#FF4B2B]">✦</span>
            <span>Global Edge Synchronization</span>
            <span className="text-[#FF4B2B]">✦</span>
            <span>GDPR & ISO 27001 Compliant</span>
            <span className="text-[#FF4B2B]">✦</span>
            <span>Enterprise SLA 99.99%</span>
            <span className="text-[#FF4B2B]">✦</span>
            <span>SOC 2 Type II Certified</span>
            <span className="text-[#FF4B2B]">✦</span>
            <span>Global Edge Synchronization</span>
          </div>
        </div>
      </div>

      <div className="max-w-[1728px] mx-auto">
        
        {/* Main 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16 md:mb-20">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <div className="w-10 h-10 rounded-full border border-[#333333] flex items-center justify-center shrink-0 bg-[#1A1A1A]">
              <span className="text-white font-black text-lg leading-none font-display">L<span className="text-[#FF4B2B]">.</span></span>
            </div>
            <p className="text-sm text-neutral-400 max-w-xs leading-relaxed font-normal">
              The operating system for modern creative teams. Empowering focus through intelligent brand management and kinetic governance.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-[#333333] flex items-center justify-center hover:border-white hover:text-white transition-colors text-neutral-400"
                aria-label="Share"
              >
                <Share2 size={16} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-[#333333] flex items-center justify-center hover:border-white hover:text-white transition-colors text-neutral-400"
                aria-label="Global"
              >
                <Globe size={16} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-[#333333] flex items-center justify-center hover:border-white hover:text-white transition-colors text-neutral-400"
                aria-label="Ecosystem"
              >
                <Network size={16} />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-white mb-6 uppercase tracking-wider text-xs font-semibold">
              Product
            </h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><a className="text-neutral-400 hover:text-white transition-colors" href="#brand-os">Knowledge Graph</a></li>
              <li><a className="text-neutral-400 hover:text-white transition-colors" href="#lumio-studio">Lumio Studio</a></li>
              <li><a className="text-neutral-400 hover:text-white transition-colors" href="#gallery">Brand Asset Gallery</a></li>
              <li><a className="text-neutral-400 hover:text-white transition-colors" href="#team-cases">Enterprise Workflows</a></li>
              <li><a className="text-neutral-400 hover:text-white transition-colors" href="#brand-os">Creative Cloud Sync</a></li>
              <li><a className="text-neutral-400 hover:text-white transition-colors" href="#updates">Security Whitepaper</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white mb-6 uppercase tracking-wider text-xs font-semibold">
              Company
            </h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><a className="text-neutral-400 hover:text-white transition-colors" href="#manifesto">Manifesto & Vision</a></li>
              <li><a className="text-neutral-400 hover:text-white transition-colors" href="#">Careers <span className="text-[10px] bg-white text-black px-1.5 py-0.5 rounded font-bold ml-1">HIRING</span></a></li>
              <li><a className="text-neutral-400 hover:text-white transition-colors" href="#updates">Newsroom</a></li>
              <li><a className="text-neutral-400 hover:text-white transition-colors" href="#">Leadership</a></li>
              <li><a className="text-neutral-400 hover:text-white transition-colors" href="#">Brand Assets</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white mb-6 uppercase tracking-wider text-xs font-semibold">
              Executive Briefing
            </h4>
            <p className="text-xs text-neutral-400 mb-4 leading-relaxed font-normal">
              Receive our quarterly executive briefing on brand architecture and AI transformation.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                className="bg-[#1A1A1A] border border-[#333333] rounded-full px-4 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-white w-full"
              />
              <button
                type="submit"
                className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center shrink-0 hover:bg-neutral-200 transition-colors"
                aria-label="Submit newsletter"
              >
                {subscribed ? <Check size={14} /> : <ArrowRight size={14} />}
              </button>
            </form>
            {subscribed && (
              <p className="text-xs text-emerald-400 mt-2 font-medium">Thank you for subscribing.</p>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#222222] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-neutral-500">
            © 2026 Lumio Technologies Inc. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-6 text-xs text-neutral-500">
            <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-white transition-colors" href="#">Terms of Service</a>
            <a className="hover:text-white transition-colors" href="#">Security Standards</a>
            <a className="hover:text-white transition-colors" href="#">Cookie Preferences</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
