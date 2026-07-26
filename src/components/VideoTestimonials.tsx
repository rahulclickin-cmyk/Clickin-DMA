import React, { useState } from 'react';
import { VIDEO_TESTIMONIALS, TEXT_TESTIMONIALS } from '../data/mockData';
import { Play, Youtube, Heart, Quote, X } from 'lucide-react';

export const VideoTestimonials: React.FC = () => {
  const [activeVideoModal, setActiveVideoModal] = useState<string | null>(null);

  return (
    <section className="bg-[#050505] text-white py-16 px-4 md:px-8 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Title */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-widest bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20">
            <Heart className="w-4 h-4 fill-amber-400/20" />
            <span>Real Results & Success Stories</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-amber-400">
            Happy Clients
          </h2>
          <p className="text-neutral-400 text-sm max-w-xl mx-auto">
            Hear directly from business owners who scaled their sales with Clickin Digital & Rahul Singh.
          </p>
        </div>

        {/* Video Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VIDEO_TESTIMONIALS.map((video) => (
            <div
              key={video.id}
              onClick={() => setActiveVideoModal(video.name)}
              className="bg-[#0e0e0e] border border-neutral-800 hover:border-amber-500/60 rounded-2xl overflow-hidden shadow-xl transition-all cursor-pointer group flex flex-col justify-between"
            >
              {/* Video Thumbnail Box */}
              <div className="relative aspect-video bg-neutral-900 overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-14 h-14 bg-red-600 group-hover:bg-red-500 text-white rounded-2xl flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
                    <Play className="w-7 h-7 fill-white ml-1" />
                  </div>
                </div>

                {/* Top Badge */}
                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md border border-neutral-700 px-3 py-1 rounded-md text-[11px] font-bold text-white flex items-center gap-1.5">
                  <Youtube className="w-4 h-4 text-red-500 fill-current" />
                  <span>Testimonials Clickin Digital</span>
                </div>

                {/* Bottom Youtube bar */}
                <div className="absolute bottom-2 right-2 bg-black/80 px-2.5 py-0.5 rounded text-[10px] font-semibold text-neutral-300 flex items-center gap-1">
                  <span>Watch on</span>
                  <span className="text-red-500 font-bold">YouTube</span>
                </div>
              </div>

              {/* Client Info */}
              <div className="p-4 bg-[#0a0a0a] text-center space-y-1">
                <h3 className="font-bold text-white text-base text-amber-400">
                  {video.name}
                </h3>
                <span className="text-xs text-neutral-400">
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
              className="bg-[#0d0d0d] border border-neutral-800 rounded-xl p-6 shadow-md flex flex-col justify-between space-y-4 hover:border-amber-500/40 transition-colors"
            >
              <div className="space-y-3">
                <Quote className="w-6 h-6 text-amber-500/60" />
                <p className="text-xs md:text-sm text-neutral-300 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-neutral-800/80">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover border border-amber-500/30"
                />
                <div>
                  <h4 className="font-bold text-white text-sm">
                    {item.name}
                  </h4>
                  <span className="text-xs text-amber-400 font-medium">
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
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#111111] border border-amber-500/50 rounded-2xl max-w-xl w-full p-6 space-y-4 relative shadow-2xl animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setActiveVideoModal(null)}
              className="absolute top-4 right-4 bg-neutral-800 text-neutral-300 hover:text-white p-2 rounded-full cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              <Youtube className="w-5 h-5 text-red-500 fill-current" />
              <h3 className="font-bold text-white text-base">
                Client Video Review: {activeVideoModal}
              </h3>
            </div>

            <div className="aspect-video bg-neutral-950 rounded-xl flex flex-col items-center justify-center p-6 text-center space-y-3 border border-neutral-800">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white text-2xl animate-bounce">
                ▶
              </div>
              <p className="text-xs text-neutral-300 max-w-sm">
                Playing verified video testimonial from <strong>{activeVideoModal}</strong> for Clickin Digital Marketing Agency.
              </p>
            </div>

            <div className="text-right">
              <button
                onClick={() => setActiveVideoModal(null)}
                className="bg-amber-500 text-black font-bold text-xs px-5 py-2 rounded-lg cursor-pointer"
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
