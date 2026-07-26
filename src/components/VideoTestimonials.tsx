import React, { useState } from 'react';
import { VIDEO_TESTIMONIALS, TEXT_TESTIMONIALS } from '../data/mockData';
import { Play, Youtube, Heart, Quote, X } from 'lucide-react';

export const VideoTestimonials: React.FC = () => {
  const [activeVideoModal, setActiveVideoModal] = useState<string | null>(null);

  return (
    <section className="bg-slate-50 text-slate-900 py-16 px-4 md:px-8 border-b border-amber-200/80">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Title */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-widest bg-amber-100 px-3.5 py-1.5 rounded-full border border-amber-300">
            <Heart className="w-4 h-4 fill-amber-500/20 text-amber-600" />
            <span>Real Results & Success Stories</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900">
            Happy Clients
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto font-medium">
            Hear directly from business owners who scaled their sales with Clickin Digital & Rahul Singh.
          </p>
        </div>

        {/* Video Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VIDEO_TESTIMONIALS.map((video) => (
            <div
              key={video.id}
              onClick={() => setActiveVideoModal(video.name)}
              className="bg-white border border-slate-200 hover:border-amber-400 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
            >
              {/* Video Thumbnail Box */}
              <div className="relative aspect-video bg-slate-100 overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-slate-900/30 flex items-center justify-center">
                  <div className="w-14 h-14 bg-red-600 group-hover:bg-red-500 text-white rounded-2xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                    <Play className="w-7 h-7 fill-white ml-1" />
                  </div>
                </div>

                {/* Top Badge */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md border border-slate-200 px-3 py-1 rounded-md text-[11px] font-bold text-slate-800 flex items-center gap-1.5 shadow-sm">
                  <Youtube className="w-4 h-4 text-red-500 fill-current" />
                  <span>Testimonials Clickin Digital</span>
                </div>

                {/* Bottom Youtube bar */}
                <div className="absolute bottom-2 right-2 bg-slate-900/80 px-2.5 py-0.5 rounded text-[10px] font-semibold text-white flex items-center gap-1">
                  <span>Watch on</span>
                  <span className="text-red-400 font-bold">YouTube</span>
                </div>
              </div>

              {/* Client Info */}
              <div className="p-4 bg-white text-center space-y-1">
                <h3 className="font-extrabold text-slate-900 text-base">
                  {video.name}
                </h3>
                <span className="text-xs text-slate-500 font-medium">
                  {video.company}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Text Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {TEXT_TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col justify-between space-y-4 hover:border-amber-400 transition-colors"
            >
              <div className="space-y-3">
                <Quote className="w-6 h-6 text-amber-500" />
                <p className="text-xs md:text-sm text-slate-700 font-medium leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover border border-amber-400"
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    {item.name}
                  </h4>
                  <span className="text-xs text-amber-800 font-semibold">
                    {item.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Video Modal Player Mockup */}
      {activeVideoModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-2xl max-w-xl w-full p-6 space-y-4 relative shadow-2xl animate-in zoom-in-95 duration-200 text-slate-900">
            <button
              onClick={() => setActiveVideoModal(null)}
              className="absolute top-4 right-4 bg-slate-100 text-slate-600 hover:text-slate-900 p-2 rounded-full cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              <Youtube className="w-5 h-5 text-red-500 fill-current" />
              <h3 className="font-bold text-slate-900 text-base">
                Client Video Review: {activeVideoModal}
              </h3>
            </div>

            <div className="aspect-video bg-slate-100 rounded-xl flex flex-col items-center justify-center p-6 text-center space-y-3 border border-slate-200">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white text-2xl shadow-lg">
                ▶
              </div>
              <p className="text-xs text-slate-700 max-w-sm font-medium">
                Playing verified video testimonial from <strong>{activeVideoModal}</strong> for Clickin Digital Marketing Agency.
              </p>
            </div>

            <div className="text-right">
              <button
                onClick={() => setActiveVideoModal(null)}
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs px-5 py-2 rounded-lg cursor-pointer"
              >
                Close Video
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
