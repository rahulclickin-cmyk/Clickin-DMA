import React from 'react';
import { GOOGLE_REVIEWS } from '../data/mockData';
import { Star, ShieldCheck, MapPin, CheckCircle } from 'lucide-react';

export const TrustRatings: React.FC = () => {
  return (
    <section className="bg-[#050505] text-white py-16 px-4 md:px-8 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Main Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 border border-amber-500/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>Trusted Digital & AI Partner in Delhi NCR</span>
          </div>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-amber-400 leading-tight">
            Are you looking for a reliable web designing & AI company in Delhi?
          </h2>
          <p className="text-neutral-400 text-sm md:text-base">
            Over 200+ businesses rely on Clickin Digital & Rahul Singh for custom web design, high-converting lead campaigns, and automated workflows.
          </p>
        </div>

        {/* 5-Star Badge & Ratings Showcase */}
        <div className="bg-[#0c0c0c] border border-neutral-800 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-around gap-8 text-center md:text-left shadow-xl">
          {/* Gold Badge graphic */}
          <div className="flex flex-col items-center">
            <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-yellow-600 via-amber-400 to-yellow-200 p-1 flex items-center justify-center shadow-2xl shadow-amber-500/30">
              <div className="w-full h-full bg-black rounded-full flex flex-col items-center justify-center text-center p-2 border border-amber-400/50">
                <span className="text-[10px] font-black text-amber-300 uppercase tracking-widest">GOOGLE</span>
                <span className="text-xl font-black text-amber-400 leading-none">5-STAR</span>
                <span className="text-[9px] font-bold text-neutral-300 uppercase">RATING</span>
                <div className="flex text-amber-400 text-[10px] mt-0.5">
                  ★★★★★
                </div>
              </div>
            </div>
          </div>

          {/* Certification Text Items */}
          <div className="space-y-3 font-semibold text-sm text-neutral-200">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Rated 5 stars by Anzac Safety Canada</span>
            </div>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Rated 5 stars by Bussines Summits India</span>
            </div>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Rated 5 stars by Retro Constructions Australia</span>
            </div>
          </div>

          {/* Star visual */}
          <div className="flex flex-col items-center justify-center gap-1.5">
            <div className="flex text-amber-400 text-2xl tracking-widest">
              ★★★★★
            </div>
            <span className="text-xs font-bold text-neutral-400">4.9 / 5.0 Rating based on 180+ Reviews</span>
          </div>
        </div>

        {/* 6 Google Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {GOOGLE_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#0e0e0e] border border-neutral-800 hover:border-amber-500/50 rounded-xl p-5 shadow-lg transition-all flex flex-col justify-between text-xs space-y-4"
            >
              {/* Review Header */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={rev.avatar}
                      alt={rev.author}
                      className="w-10 h-10 rounded-full object-cover border border-amber-500/40"
                    />
                    <div>
                      <h4 className="font-bold text-white text-sm flex items-center gap-1">
                        {rev.author}
                        <ShieldCheck className="w-3.5 h-3.5 text-blue-400 fill-blue-400/20" />
                      </h4>
                      <div className="flex items-center gap-2">
                        <div className="flex text-amber-400 text-xs">
                          {Array.from({ length: rev.rating }).map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        <span className="text-[10px] text-neutral-500">{rev.timeAgo}</span>
                      </div>
                    </div>
                  </div>

                  {/* Google G icon */}
                  <span className="text-neutral-500 font-black text-sm bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800">
                    <span className="text-blue-500">G</span>
                    <span className="text-red-500">o</span>
                    <span className="text-yellow-500">o</span>
                    <span className="text-blue-500">g</span>
                    <span className="text-green-500">l</span>
                    <span className="text-red-500">e</span>
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-neutral-300 leading-relaxed text-xs">
                  "{rev.text}"
                </p>
              </div>

              {/* Owner Response Box */}
              {rev.ownerResponse && (
                <div className="bg-neutral-900/90 border-l-2 border-amber-500 p-3 rounded-r-lg space-y-1 mt-2 text-[11px]">
                  <div className="flex items-center justify-between text-amber-400 font-bold">
                    <span>Response from the owner</span>
                    <span className="text-neutral-500 text-[10px] font-normal">{rev.ownerResponse.dateAgo}</span>
                  </div>
                  <p className="text-neutral-400 leading-snug">
                    {rev.ownerResponse.text}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
