import React from 'react';
import { PRICING_PACKAGES, OPTIONAL_ADDONS } from '../data/mockData';
import { PackageItem } from '../types';
import { 
  Check, 
  Sparkles, 
  ArrowRight, 
  ShieldAlert, 
  FileText, 
  Mail, 
  Palette, 
  PenTool, 
  Image as ImageIcon, 
  CreditCard, 
  Layout, 
  Calendar, 
  Search, 
  Bot, 
  MessageSquare, 
  ShieldCheck,
  PlusCircle
} from 'lucide-react';

interface PricingPackagesProps {
  onSelectPackage: (pkg: PackageItem) => void;
}

// Icon mapper for Optional Add-ons
const getAddonIcon = (iconName: string) => {
  const props = { className: "w-4 h-4 text-amber-400 shrink-0" };
  switch (iconName) {
    case 'FileText': return <FileText {...props} />;
    case 'Mail': return <Mail {...props} />;
    case 'Palette': return <Palette {...props} />;
    case 'PenTool': return <PenTool {...props} />;
    case 'Image': return <ImageIcon {...props} />;
    case 'CreditCard': return <CreditCard {...props} />;
    case 'Layout': return <Layout {...props} />;
    case 'Calendar': return <Calendar {...props} />;
    case 'Search': return <Search {...props} />;
    case 'Bot': return <Bot {...props} />;
    case 'MessageSquare': return <MessageSquare {...props} />;
    case 'ShieldCheck': return <ShieldCheck {...props} />;
    default: return <PlusCircle {...props} />;
  }
};

export const PricingPackages: React.FC<PricingPackagesProps> = ({ onSelectPackage }) => {
  return (
    <section id="pricing" className="bg-[#0a0a0a] text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-neutral-900">
      
      {/* Background Radial Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold text-xs uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Agency Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Web Development & <span className="text-amber-400">Digital Packages</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            High-converting websites tailored for Indian businesses & global brands. No hidden renewal tricks, realistic deliverable timelines, and full ongoing support.
          </p>
        </div>

        {/* 4 Equal Height Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">
          {PRICING_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative group ${
                pkg.popular
                  ? 'bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-900 border-2 border-amber-400 shadow-[0_0_30px_rgba(251,191,36,0.15)] md:-translate-y-2'
                  : 'bg-neutral-900/70 backdrop-blur-md border border-neutral-800 hover:border-amber-500/40 hover:shadow-xl hover:shadow-amber-500/5'
              }`}
            >
              {/* Most Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-black text-xs px-4 py-1 rounded-full uppercase tracking-widest shadow-lg flex items-center gap-1.5 z-20 whitespace-nowrap">
                  <Sparkles className="w-3.5 h-3.5 fill-black" />
                  <span>{pkg.badge || 'Most Popular'}</span>
                </div>
              )}

              {/* Card Main Info */}
              <div className="space-y-6">
                {/* Header info */}
                <div className="text-center space-y-2 border-b border-neutral-800 pb-5">
                  <h3 className="text-sm font-extrabold uppercase tracking-widest text-amber-400">
                    {pkg.name}
                  </h3>
                  
                  <div className="text-3xl sm:text-4xl font-black text-white tracking-tight pt-1">
                    {pkg.price}
                  </div>

                  <p className="text-xs text-neutral-400 font-medium min-h-[36px] flex items-center justify-center leading-snug">
                    {pkg.subtitle}
                  </p>
                </div>

                {/* Features List */}
                <ul className="space-y-3 pt-1 text-xs sm:text-sm">
                  {pkg.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-neutral-300">
                      <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="pt-8 mt-auto">
                <button
                  onClick={() => onSelectPackage(pkg)}
                  className={`w-full py-3.5 px-5 rounded-xl font-extrabold text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-black shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02]'
                      : 'bg-neutral-800 hover:bg-amber-500 hover:text-black text-white border border-neutral-700 hover:border-amber-400 hover:scale-[1.02]'
                  }`}
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Optional Add-ons Section */}
        <div className="space-y-8 pt-8">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Optional <span className="text-amber-400">Add-ons & Upgrades</span>
            </h3>
            <p className="text-neutral-400 text-xs sm:text-sm">
              Customize your project with standalone modules and specialized integrations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {OPTIONAL_ADDONS.map((addon, idx) => (
              <div
                key={idx}
                className="bg-neutral-900/60 backdrop-blur-md border border-neutral-800/80 hover:border-amber-500/40 p-4 rounded-xl flex items-center justify-between gap-3 transition-all duration-300 hover:bg-neutral-900/90 group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2 rounded-lg bg-neutral-800/80 group-hover:bg-amber-500/10 transition-colors">
                    {getAddonIcon(addon.icon)}
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-neutral-200 truncate group-hover:text-white">
                    {addon.name}
                  </span>
                </div>
                <span className="bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold px-2.5 py-1 rounded-lg shrink-0">
                  {addon.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer Note */}
        <div className="bg-amber-500/5 border border-amber-500/20 rounded-2xl p-5 max-w-4xl mx-auto text-center space-y-1">
          <p className="text-xs sm:text-sm text-neutral-300 font-medium flex items-center justify-center gap-2">
            <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 inline-block" />
            <span>
              *Domain, Hosting, Premium Themes, Premium Plugins and Third-party Subscription Charges are not included in the above packages.*
            </span>
          </p>
        </div>

      </div>
    </section>
  );
};
