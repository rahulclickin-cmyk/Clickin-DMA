import React from 'react';
import { Phone, MessageCircle, Sparkles, Tag, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  onBookCallClick: () => void;
  onDiscountClick: () => void;
  onViewLeadsClick?: () => void;
  leadCount?: number;
}

export const Header: React.FC<HeaderProps> = ({
  onBookCallClick,
  onDiscountClick,
  onViewLeadsClick,
  leadCount = 0
}) => {
  return (
    <header className="sticky top-0 z-40 w-full shadow-2xl">
      {/* Top Yellow Announcement Banner */}
      <div className="bg-[#ffb700] text-black px-4 py-2 font-bold flex flex-wrap items-center justify-between gap-2 border-b border-amber-600">
        <div className="mx-auto flex items-center gap-2 text-sm md:text-base tracking-wide">
          <Sparkles className="w-4 h-4 text-black animate-pulse" />
          <span>GET YOUR WEBSITE & LEAD AUTOMATION DONE BY US?</span>
        </div>
        <button
          onClick={onBookCallClick}
          className="bg-[#d94800] hover:bg-[#b33a00] text-white px-4 py-1.5 rounded-full text-xs md:text-sm font-black transition-all transform hover:scale-105 shadow-md flex items-center gap-1.5 cursor-pointer ml-auto sm:ml-0"
        >
          <Phone className="w-3.5 h-3.5" />
          BOOK A FREE CALL
        </button>
      </div>

      {/* Main Agency Header */}
      <div className="bg-white/95 text-slate-900 border-b border-amber-200/80 px-4 md:px-8 py-3.5 flex items-center justify-between backdrop-blur-md">
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-xl md:text-2xl tracking-tight text-slate-900 group-hover:text-amber-600 transition-colors">
                Clickin DMA
              </span>
              <span className="bg-amber-500/15 text-amber-800 border border-amber-400/40 text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                Official Agency
              </span>
            </div>
            <span className="text-xs text-slate-600 font-medium">
              Rahul Singh • Web & Lead Gen Specialist
            </span>
          </div>
        </a>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onDiscountClick}
            className="hidden sm:flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-extrabold px-3.5 py-2 rounded-lg text-xs md:text-sm shadow-sm transition-all cursor-pointer"
          >
            <Tag className="w-4 h-4" />
            Special Offers
          </button>

          <a
            href="https://wa.me/918882292448?text=Hi%20Rahul%20Singh%2C%20I%20want%20to%20get%20a%20website%20and%20lead%20automation%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-3 py-2 rounded-lg text-xs md:text-sm transition-all shadow-sm"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span className="hidden md:inline">WhatsApp</span>
          </a>

          <a
            href="tel:+918882292448"
            className="flex items-center gap-1.5 bg-amber-50 hover:bg-amber-100 text-slate-900 border border-amber-300 font-bold px-3 py-2 rounded-lg text-xs md:text-sm transition-all"
          >
            <Phone className="w-4 h-4 text-amber-600" />
            <span className="hidden lg:inline">+91 88822 92448</span>
          </a>

          {/* Admin Leads View Trigger */}
          {onViewLeadsClick && (
            <button
              onClick={onViewLeadsClick}
              title="Admin Privacy Leads Panel (Password Protected)"
              className="relative p-2 text-slate-600 hover:text-amber-600 bg-slate-100 border border-slate-300 rounded-lg text-xs transition-colors cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4" />
              {leadCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-500 text-slate-950 text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
                  {leadCount}
                </span>
              )}
            </button>
          )}
        </div>
      </div>

      {/* Sub Navigation Bar for Internal SEO Links */}
      <nav className="bg-slate-900 text-slate-200 px-4 md:px-8 py-2 border-b border-slate-800 text-xs font-semibold overflow-x-auto whitespace-nowrap">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-6 md:gap-8">
          <a href="#services" className="hover:text-amber-400 transition-colors">Web Services</a>
          <a href="#pricing" className="hover:text-amber-400 transition-colors">Pricing Packages</a>
          <a href="#local-areas" className="hover:text-amber-400 transition-colors">West Delhi Areas</a>
          <a href="#geo-ai-search" className="hover:text-amber-400 transition-colors">GEO & AI Search</a>
          <a href="#portfolio" className="hover:text-amber-400 transition-colors">Live Demos</a>
          <a href="#faq" className="hover:text-amber-400 transition-colors">FAQ</a>
        </div>
      </nav>
    </header>
  );
};
