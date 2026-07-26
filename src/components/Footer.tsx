import React from 'react';
import { MapPin, Phone, Mail, Globe, Facebook, Instagram, Linkedin, Youtube, Award, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onGetInTouchClick: () => void;
  onViewLeadsClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onGetInTouchClick, onViewLeadsClick }) => {
  return (
    <footer className="bg-slate-100 text-slate-900 border-t border-amber-200/80 pt-16 pb-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Main 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Col 1: About Agency */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-2xl text-slate-900">Clickin DMA</span>
            </div>

            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              No digital plan is complete with just an online presence... We need to have a well-defined strategy to convert traffic into real sales and paying customers.
            </p>

            <div className="space-y-1 text-xs text-amber-900 font-extrabold">
              <p>Rahul Singh — Digital Marketing Specialist</p>
              <p className="text-slate-600 font-medium">Automation & Lead Generation Specialist</p>
            </div>

            {/* Badges */}
            <div className="flex items-center gap-2 pt-2 text-[10px] text-slate-700">
              <span className="bg-amber-100 border border-amber-300 text-amber-900 px-2.5 py-1 rounded font-bold flex items-center gap-1">
                <Award className="w-3 h-3 text-amber-600" />
                Google Certified
              </span>
              <span className="bg-white border border-slate-200 text-slate-700 px-2.5 py-1 rounded font-bold flex items-center gap-1 shadow-sm">
                <ShieldCheck className="w-3 h-3 text-emerald-600" />
                200+ 5-Star Reviews
              </span>
            </div>
          </div>

          {/* Col 2: Contact Information */}
          <div className="space-y-4">
            <h4 className="font-extrabold text-amber-900 text-sm uppercase tracking-wider">
              Contact Us
            </h4>

            <div className="space-y-3 text-xs text-slate-700 font-medium">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>Serving Clients Pan-India & Globally | New Delhi, India</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-600 shrink-0" />
                <a href="tel:+918882292448" className="hover:text-amber-800 transition-colors font-mono font-bold">
                  +91 88822 92448
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-600 shrink-0" />
                <a href="mailto:clickindma@gmail.com" className="hover:text-amber-800 transition-colors font-mono font-bold">
                  clickindma@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Serving Clients across India, Canada & Australia</span>
              </div>
            </div>
          </div>

          {/* Col 3: Quick Navigation & Social */}
          <div className="space-y-4">
            <h4 className="font-extrabold text-amber-900 text-sm uppercase tracking-wider">
              Connect & Follow Us
            </h4>

            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://in.linkedin.com/in/rahul-singh-ridham"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-amber-800 hover:border-amber-400 flex items-center justify-center transition-all shadow-sm"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/rahul.ridham.singh/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-amber-800 hover:border-amber-400 flex items-center justify-center transition-all shadow-sm"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/clickin.digitalmarketingagency/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-amber-800 hover:border-amber-400 flex items-center justify-center transition-all shadow-sm"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2 space-y-2 text-xs">
              <button
                onClick={onGetInTouchClick}
                className="text-amber-800 hover:underline block font-bold cursor-pointer"
              >
                • Request Free Proposal
              </button>
              <button
                onClick={onViewLeadsClick}
                className="text-slate-600 hover:text-slate-900 block cursor-pointer font-medium"
              >
                • Agency Inquiries Portal
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p>
            Copyright © 2026 Clickin DMA | Rahul Singh. All Rights Reserved.
          </p>
          <div className="flex items-center gap-3">
            <p className="flex items-center gap-1">
              <span>Powered by</span>
              <strong className="text-amber-800 font-extrabold">Clickin DMA</strong>
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};
