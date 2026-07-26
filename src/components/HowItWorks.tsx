import React from 'react';
import { Calendar, Layout, RefreshCw, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onGetInTouchClick: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onGetInTouchClick }) => {
  const steps = [
    {
      num: '01',
      icon: Calendar,
      title: 'Book Free Appointment',
      desc: 'Get started by booking your free consultation with a Google certified website developer and AI Automation Expert (Rahul Singh).'
    },
    {
      num: '02',
      icon: Layout,
      title: 'Get Website Designed',
      desc: 'Once you finalize the requirement, We will start designing your website and automated lead workflows within a week.'
    },
    {
      num: '03',
      icon: RefreshCw,
      title: '1 Week unlimited revisions',
      desc: 'You can request unlimited revisions and modifications to change design, copy, or content until you are 100% satisfied.'
    }
  ];

  return (
    <section className="bg-[#080808] text-white py-16 px-4 md:px-8 border-b border-neutral-900">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-5xl font-black text-amber-400">
            How It Works ?
          </h2>
          <p className="text-neutral-400 text-sm max-w-xl mx-auto">
            Simple, hassle-free 3-step process to get your website and lead automation live.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <div
                key={idx}
                className="bg-[#0e0e0e] border border-neutral-800 hover:border-amber-500/50 rounded-2xl p-8 text-center space-y-4 relative shadow-lg group transition-all"
              >
                <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mx-auto group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-black transition-all">
                  <IconComp className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {step.title}
                </h3>
                <p className="text-xs md:text-sm text-neutral-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center pt-4">
          <button
            onClick={onGetInTouchClick}
            className="bg-[#d94800] hover:bg-[#b33a00] text-white font-black text-base px-10 py-4 rounded-xl shadow-xl transition-all transform hover:scale-105 inline-flex items-center gap-2 cursor-pointer border border-amber-500/40 uppercase tracking-wider"
          >
            <span>GET IN TOUCH</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
