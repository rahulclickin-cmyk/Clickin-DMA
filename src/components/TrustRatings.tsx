import React from 'react';
import { GOOGLE_REVIEWS } from '../data/mockData';
import { Star, ShieldCheck, MapPin, CheckCircle } from 'lucide-react';

export const TrustRatings: React.FC = () => {
  return (
    <section className="bg-slate-50 text-slate-900 py-16 px-4 md:px-8 border-b border-amber-200/80">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Main Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 border border-amber-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
            <MapPin className="w-4 h-4 text-amber-600" />
            <span>Trusted Digital & Web Partner in Delhi NCR</span>
          </div>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
            Are you looking for a reliable web designing company in Delhi?
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-medium">
            Over 200+ businesses rely on Clickin Digital & Rahul Singh for custom web design, high-converting lead campaigns, and automated workflows.
          </p>
        </div>

        {/* 5-Star Badge & Ratings Showcase */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-around gap-8 text-center md:text-left shadow-sm">
          {/* Gold Badge graphic */}
          <div className="flex flex-col items-center">
            <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-yellow-600 via-amber-400 to-yellow-200 p-1 flex items-center justify-center shadow-xl shadow-amber-500/20">
              <div className="w-full h-full bg-slate-950 rounded-full flex flex-col items-center justify-center text-center p-2 border border-amber-400/50">
                <span className="text-[10px] font-black text-amber-300 uppercase tracking-widest">GOOGLE</span>
                <span className="text-xl font-black text-amber-400 leading-none">5-STAR</span>
                <span className="text-[9px] font-bold text-slate-300 uppercase">RATING</span>
                <div className="flex text-amber-400 text-[10px] mt-0.5">
                  ★★★★★
                </div>
              </div>
            </div>
          </div>

          {/* Certification Text Items */}
          <div className="space-y-3 font-bold text-sm text-slate-800">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <CheckCircle className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Rated 5 stars by Anzac Safety Canada</span>
            </div>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <CheckCircle className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Rated 5 stars by Bussines Summits India</span>
            </div>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <CheckCircle className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Rated 5 stars by Retro Constructions Australia</span>
            </div>
          </div>

          {/* Star visual */}
          <div className="flex flex-col items-center justify-center gap-1.5">
            <div className="flex text-amber-500 text-2xl tracking-widest font-bold">
              ★★★★★
            </div>
            <span className="text-xs font-bold text-slate-600">4.9 / 5.0 Rating based on 180+ Reviews</span>
          </div>
        </div>

        {/* 6 Google Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {GOOGLE_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-white border border-slate-200 hover:border-amber-400 rounded-xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between text-xs space-y-4"
            >
              {/* Review Header */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={rev.avatar}
                      alt={rev.author}
                      className="w-10 h-10 rounded-full object-cover border border-amber-400"
                    />
                    <div>
                      <h4 className="font-extrabold text-slate-900 text-sm flex items-center gap-1">
                        {rev.author}
                        <ShieldCheck className="w-3.5 h-3.5 text-blue-500 fill-blue-500/20" />
                      </h4>
                      <div className="flex items-center gap-2">
                        <div className="flex text-amber-500 text-xs font-bold">
                          {Array.from({ length: rev.rating }).map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-amber-500 text-amber-500" />
                          ))}
                        </div>
                        <span className="text-[10px] text-slate-500 font-medium">{rev.timeAgo}</span>
                      </div>
                    </div>
                  </div>

                  {/* Google G icon */}
                  <span className="text-slate-600 font-black text-sm bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                    <span className="text-blue-500">G</span>
                    <span className="text-red-500">o</span>
                    <span className="text-yellow-500">o</span>
                    <span className="text-blue-500">g</span>
                    <span className="text-green-500">l</span>
                    <span className="text-red-500">e</span>
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-slate-700 font-medium leading-relaxed text-xs">
                  "{rev.text}"
                </p>
              </div>

              {/* Owner Response Box */}
              {rev.ownerResponse && (
                <div className="bg-amber-50/80 border-l-2 border-amber-500 p-3 rounded-r-lg space-y-1 mt-2 text-[11px]">
                  <div className="flex items-center justify-between text-amber-900 font-bold">
                    <span>Response from the owner</span>
                    <span className="text-slate-500 text-[10px] font-normal">{rev.ownerResponse.dateAgo}</span>
                  </div>
                  <p className="text-slate-700 leading-snug">
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
