import React from 'react';
import { MapPin, Phone, Mail, Globe, Facebook, Instagram, Linkedin, Youtube, Award, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onGetInTouchClick: () => void;
  onViewLeadsClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onGetInTouchClick, onViewLeadsClick }) => {
  return (
    <footer className="bg-[#050505] text-white border-t border-neutral-900 pt-16 pb-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Main 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Col 1: About Agency */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-2xl text-white">Clickin DMA</span>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed">
              No digital plan is complete with just an online presence... We need to have a well-defined strategy to convert traffic into real sales and paying customers.
            </p>

            <div className="space-y-1 text-xs text-amber-400 font-semibold">
              <p>Rahul Singh — Digital Marketing Specialist</p>
              <p className="text-neutral-400 font-normal">AI Automation Superlist • Lead Generation Expert</p>
            </div>

            {/* Badges */}
            <div className="flex items-center gap-2 pt-2 text-[10px] text-neutral-300">
              <span className="bg-amber-500/10 border border-amber-500/30 text-amber-400 px-2.5 py-1 rounded font-bold flex items-center gap-1">
                <Award className="w-3 h-3" />
                Google Certified
              </span>
              <span className="bg-neutral-900 border border-neutral-800 text-neutral-300 px-2.5 py-1 rounded font-bold flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                200+ 5-Star Reviews
              </span>
            </div>
          </div>

          {/* Col 2: Contact Information */}
          <div className="space-y-4">
            <h4 className="font-bold text-amber-400 text-sm uppercase tracking-wider">
              Contact Us
            </h4>

            <div className="space-y-3 text-xs text-neutral-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Serving Clients Pan-India & Globally | New Delhi, India</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:+918882292448" className="hover:text-amber-400 transition-colors font-mono">
                  +91 88822 92448
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="mailto:clickindma@gmail.com" className="hover:text-amber-400 transition-colors font-mono">
                  clickindma@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Serving Clients across India, Canada & Australia</span>
              </div>
            </div>
          </div>

          {/* Col 3: Quick Navigation & Social */}
          <div className="space-y-4">
            <h4 className="font-bold text-amber-400 text-sm uppercase tracking-wider">
              Connect & Follow Us
            </h4>

            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://in.linkedin.com/in/rahul-singh-ridham"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-amber-400 hover:border-amber-500/50 flex items-center justify-center transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/rahul.ridham.singh/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-amber-400 hover:border-amber-500/50 flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/clickin.digitalmarketingagency/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-amber-400 hover:border-amber-500/50 flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2 space-y-2 text-xs">
              <button
                onClick={onGetInTouchClick}
                className="text-amber-400 hover:underline block font-semibold cursor-pointer"
              >
                • Request Free Proposal
              </button>
              <button
                onClick={onViewLeadsClick}
                className="text-neutral-400 hover:text-white block cursor-pointer"
              >
                • Agency Inquiries Portal
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>
            Copyright © 2026 Clickin DMA | Rahul Singh. All Rights Reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 text-amber-400 font-mono text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Sanity CMS Connected (<code className="font-bold">vuo3tmag</code>)
            </span>
            <p className="flex items-center gap-1">
              <span>Powered by</span>
              <strong className="text-amber-400 font-bold">Clickin DMA</strong>
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};
