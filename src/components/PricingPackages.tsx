import React from 'react';
import { PRICING_PACKAGES } from '../data/mockData';
import { PackageItem } from '../types';
import { Check, Sparkles, ArrowRight, ShieldAlert } from 'lucide-react';

interface PricingPackagesProps {
  onSelectPackage: (pkg: PackageItem) => void;
}

export const PricingPackages: React.FC<PricingPackagesProps> = ({ onSelectPackage }) => {
  return (
    <section className="bg-[#050505] text-white py-16 px-4 md:px-8 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-amber-400">
            Waiting For What ?
          </h2>
          <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
            Our Prices are lower than freelancers and other companies. So choose a suitable package and take the initiative toward your dream project with Clickin Digital.
          </p>
        </div>

        {/* 4 Packages Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PRICING_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all relative ${
                pkg.popular
                  ? 'bg-[#0f0f0f] border-2 border-amber-500 shadow-2xl shadow-amber-500/20 transform md:-translate-y-2'
                  : 'bg-[#0a0a0a] border border-neutral-800 hover:border-amber-500/50'
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-500 text-black font-black text-xs px-4 py-1 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 fill-black" />
                  {pkg.badge || 'Most Popular'}
                </div>
              )}

              {/* Package Top */}
              <div className="space-y-4">
                <div className="text-center space-y-2 border-b border-neutral-800 pb-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                    {pkg.name}
                  </span>
                  <div className="text-3xl md:text-4xl font-black text-amber-400">
                    {pkg.price}
                  </div>
                  <span className="text-[11px] text-neutral-400 block">
                    One-Time Cost • No Hidden Renewal Fees
                  </span>
                </div>

                {/* Features List */}
                <ul className="space-y-3 pt-2 text-xs md:text-sm">
                  {pkg.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-neutral-200">
                      <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              <div className="pt-8 text-center">
                <button
                  onClick={() => onSelectPackage(pkg)}
                  className={`w-full py-3.5 px-6 rounded-xl font-extrabold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider ${
                    pkg.popular
                      ? 'bg-amber-500 hover:bg-amber-400 text-black shadow-lg shadow-amber-500/30'
                      : 'bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700'
                  }`}
                >
                  <span>KNOW MORE</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance note */}
        <div className="bg-neutral-900/60 border border-neutral-800 rounded-xl p-4 text-center text-xs text-neutral-400 max-w-2xl mx-auto flex items-center justify-center gap-2">
          <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
          <span>Need custom features or custom web/AI development? Contact Rahul Singh directly for a bespoke quote.</span>
        </div>

      </div>
    </section>
  );
};
