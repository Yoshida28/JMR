import React, { useState } from 'react';
import { X, Check, Mail, User } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    company: '',
    teamSize: '50-200',
    primaryInterest: 'Brand OS & Asset Governance'
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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

        {submitted ? (
          <div className="py-8 flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-[#111111] flex items-center justify-center text-white mb-4 shadow-xl">
              <Check size={28} />
            </div>
            <h3 className="font-display text-2xl font-bold mb-2">Demo Request Received</h3>
            <p className="text-sm text-neutral-600 max-w-xs mb-6 font-normal">
              A Lumio enterprise specialist will contact you at <span className="text-neutral-950 font-semibold">{formData.workEmail}</span> within 24 hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="bg-[#111111] text-white px-6 py-2.5 rounded-full text-xs font-semibold hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-full border border-[#DCDAD2] flex items-center justify-center shrink-0 bg-[#111111]">
                <span className="text-white font-black text-xs">L</span>
              </div>
              <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Enterprise Evaluation</span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-bold mb-2 tracking-tight">
              Book a live walkthrough<span className="text-[#FF4B2B]">.</span>
            </h3>
            <p className="text-sm text-neutral-600 mb-6 font-normal">
              See how Lumio unifies creative assets and enforces brand guardrails at enterprise scale.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                  Full Name
                </label>
                <div className="relative">
                  <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
                  <input
                    type="text"
                    required
                    placeholder="Alex Morgan"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-[#FAF9F6] border border-[#E5E4DE] rounded-xl pl-10 pr-4 py-2.5 text-sm text-neutral-900 focus:outline-none focus:border-neutral-900 placeholder-neutral-400 font-normal"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                  Work Email
                </label>
                <div className="relative">
                  <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    className="w-full bg-[#FAF9F6] border border-[#E5E4DE] rounded-xl pl-10 pr-4 py-2.5 text-sm text-neutral-900 focus:outline-none focus:border-neutral-900 placeholder-neutral-400 font-normal"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    Company
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Acme Corp"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-[#FAF9F6] border border-[#E5E4DE] rounded-xl px-3.5 py-2.5 text-sm text-neutral-900 focus:outline-none focus:border-neutral-900 placeholder-neutral-400 font-normal"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    Organization Size
                  </label>
                  <select
                    value={formData.teamSize}
                    onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                    className="w-full bg-[#FAF9F6] border border-[#E5E4DE] rounded-xl px-3.5 py-2.5 text-sm text-neutral-900 focus:outline-none focus:border-neutral-900 font-normal cursor-pointer"
                  >
                    <option>10-50 employees</option>
                    <option>50-200 employees</option>
                    <option>200-1,000 employees</option>
                    <option>1,000+ enterprise</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                  Primary Area of Interest
                </label>
                <select
                  value={formData.primaryInterest}
                  onChange={(e) => setFormData({ ...formData, primaryInterest: e.target.value })}
                  className="w-full bg-[#FAF9F6] border border-[#E5E4DE] rounded-xl px-3.5 py-2.5 text-sm text-neutral-900 focus:outline-none focus:border-neutral-900 font-normal cursor-pointer"
                >
                  <option>Brand OS & Asset Governance</option>
                  <option>Lumio Studio Generative Workflows</option>
                  <option>Omnichannel Distribution & Sync</option>
                  <option>Multi-Agent Brand Consistency</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-[#111111] text-white py-3.5 rounded-full text-sm font-semibold hover:bg-neutral-800 transition-all shadow-[0_10px_25px_rgba(0,0,0,0.1)] mt-4 cursor-pointer"
              >
                Schedule Walkthrough
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
