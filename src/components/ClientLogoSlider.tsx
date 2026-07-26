import React from 'react';
import { Award, MapPin, Building2, Star } from 'lucide-react';

export const ClientLogoSlider: React.FC = () => {
  const clientLogos = [
    { name: "Anzac Safety Canada", location: "Global Client", rating: "5.0 ★" },
    { name: "Business Summits India", location: "Delhi NCR", rating: "5.0 ★" },
    { name: "Retro Constructions Australia", location: "Global Client", rating: "5.0 ★" },
    { name: "Sharma Dental Clinic", location: "Dwarka Sector 12", rating: "5.0 ★" },
    { name: "Gupta Sweets & Bakers", location: "Najafgarh", rating: "5.0 ★" },
    { name: "Janakpuri Medical Centre", location: "Janakpuri", rating: "5.0 ★" },
    { name: "Vikaspuri Real Estate", location: "Vikaspuri", rating: "5.0 ★" },
    { name: "West Delhi Business Hub", location: "Verified Local Client", rating: "5.0 ★" }
  ];

  // Tripled list for endless seamless infinite scroll loop
  const seamlessList = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <div className="bg-gradient-to-r from-amber-50/90 via-amber-100/60 to-amber-50/90 border-y border-amber-200/80 py-4 overflow-hidden select-none relative shadow-xs">
      
      <div className="max-w-7xl mx-auto px-4 mb-2.5 flex items-center justify-between text-xs text-slate-800 font-extrabold uppercase tracking-wider relative z-20">
        <span className="flex items-center gap-1.5 text-amber-900">
          <Award className="w-4 h-4 text-amber-600" />
          <span>Trusted By 200+ Businesses Across Delhi NCR & Globally</span>
        </span>
        <span className="hidden sm:flex items-center gap-1 text-slate-600 font-bold normal-case text-xs">
          <MapPin className="w-3.5 h-3.5 text-amber-600" />
          Najafgarh • Dwarka • Uttam Nagar • Tilak Nagar • Subhash Nagar
        </span>
      </div>

      {/* Gently Moving Infinite Marquee Slider */}
      <div className="relative w-full overflow-hidden flex items-center py-1">
        
        {/* Left & Right Gradient Fade Masks */}
        <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-amber-50 to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-amber-50 to-transparent z-20 pointer-events-none" />

        <div className="flex items-center gap-4 animate-marquee-left whitespace-nowrap">
          {seamlessList.map((logo, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-3 bg-white hover:bg-amber-50 border border-amber-200/90 hover:border-amber-400 px-4 py-2 rounded-xl text-slate-800 transition-colors shadow-xs shrink-0"
            >
              <div className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-300 flex items-center justify-center text-amber-700 font-black text-xs shrink-0">
                {logo.name.charAt(0)}
              </div>
              <div>
                <div className="text-xs font-black text-slate-900 flex items-center gap-1.5">
                  <span>{logo.name}</span>
                  <span className="text-[10px] text-amber-800 font-black bg-amber-100 px-1.5 py-0.2 rounded border border-amber-200">
                    {logo.rating}
                  </span>
                </div>
                <div className="text-[10px] text-slate-500 font-semibold flex items-center gap-1">
                  <Building2 className="w-2.5 h-2.5 text-amber-600" />
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
