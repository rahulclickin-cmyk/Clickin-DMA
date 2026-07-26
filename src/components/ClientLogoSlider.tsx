import React from 'react';
import { ShieldCheck, Award, Star, CheckCircle, MapPin, Building2, Globe2 } from 'lucide-react';

export const ClientLogoSlider: React.FC = () => {
  const clientLogos = [
    { name: "Anzac Safety Canada", location: "Global Client", rating: "5.0 ★" },
    { name: "Bussines Summits India", location: "Delhi NCR", rating: "5.0 ★" },
    { name: "Retro Constructions Australia", location: "Global Client", rating: "5.0 ★" },
    { name: "Najafgarh Commerce Hub", location: "Najafgarh", rating: "5.0 ★" },
    { name: "Dwarka Legal Clinic", location: "Dwarka Sector 12", rating: "5.0 ★" },
    { name: "Uttam Nagar Fashion Mart", location: "Uttam Nagar", rating: "5.0 ★" },
    { name: "Tilak Nagar Digital Store", location: "Tilak Nagar", rating: "5.0 ★" },
    { name: "Subhash Nagar Fitness Studio", location: "Subhash Nagar", rating: "5.0 ★" },
    { name: "Janakpuri Medical Centre", location: "Janakpuri", rating: "5.0 ★" },
    { name: "Vikaspuri Real Estate", location: "Vikaspuri", rating: "5.0 ★" },
    { name: "Google Business Verified", location: "Certified Partner", rating: "5.0 ★" },
    { name: "WhatsApp Lead Automation", location: "Verified Setup", rating: "5.0 ★" }
  ];

  // Tripled list for endless seamless infinite scroll loop
  const seamlessList = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <div className="bg-slate-900 border-y border-amber-400/30 py-6 overflow-hidden select-none relative shadow-inner">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/40 to-slate-950 pointer-events-none z-10" />
      
      <div className="max-w-7xl mx-auto px-4 mb-3 flex items-center justify-between text-xs text-amber-400/90 font-bold uppercase tracking-widest relative z-20">
        <span className="flex items-center gap-1.5">
          <Award className="w-4 h-4 text-amber-400" />
          <span>Trusted By 200+ Businesses & Local Brands Across Delhi NCR & Globally</span>
        </span>
        <span className="hidden sm:flex items-center gap-1 text-slate-400 font-medium normal-case">
          <MapPin className="w-3.5 h-3.5 text-amber-400" />
          Najafgarh • Dwarka • Uttam Nagar • Tilak Nagar • Subhash Nagar
        </span>
      </div>

      {/* Gently Moving Infinite Marquee Slider */}
      <div className="relative w-full overflow-hidden flex items-center py-2">
        
        {/* Left & Right Gradient Fade Masks */}
        <div className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-slate-900 to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-slate-900 to-transparent z-20 pointer-events-none" />

        <div className="flex items-center gap-6 animate-marquee-left whitespace-nowrap">
          {seamlessList.map((logo, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-3 bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-amber-400/60 px-4 py-2.5 rounded-xl text-slate-200 transition-colors shadow-sm shrink-0"
            >
              <div className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 font-black text-xs shrink-0">
                {logo.name.charAt(0)}
              </div>
              <div>
                <div className="text-xs font-black text-slate-100 flex items-center gap-1.5">
                  <span>{logo.name}</span>
                  <span className="text-[10px] text-amber-400 font-extrabold bg-amber-400/10 px-1.5 py-0.2 rounded border border-amber-400/20">
                    {logo.rating}
                  </span>
                </div>
                <div className="text-[10px] text-slate-400 font-medium flex items-center gap-1">
                  <Building2 className="w-2.5 h-2.5 text-amber-400/80" />
                  <span>{logo.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
