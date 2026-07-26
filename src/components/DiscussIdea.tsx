import React from 'react';
import { ArrowRight, MessageSquareCode } from 'lucide-react';

interface DiscussIdeaProps {
  onGetInTouchClick: () => void;
}

export const DiscussIdea: React.FC<DiscussIdeaProps> = ({ onGetInTouchClick }) => {
  return (
    <section className="bg-[#090909] text-white py-12 px-4 md:px-8 border-b border-neutral-800/80">
      <div className="max-w-6xl mx-auto bg-gradient-to-r from-neutral-900 via-[#121212] to-neutral-900 border border-amber-500/30 rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
            <MessageSquareCode className="w-4 h-4" />
            <span>Got a Custom Project?</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-amber-400">
            Discuss Your Idea
          </h2>
          <p className="text-neutral-300 text-sm md:text-base max-w-xl">
            Our Experts (Rahul Singh & Team) are ready to transform your ideas into valuable business results.
          </p>
        </div>

        <div>
          <button
            onClick={onGetInTouchClick}
            className="bg-[#d94800] hover:bg-[#b33a00] text-white font-black text-base px-8 py-3.5 rounded-xl shadow-lg transition-all transform hover:scale-105 flex items-center gap-2 cursor-pointer border border-amber-500/40 uppercase tracking-wide"
          >
            <span>GET IN TOUCH</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
