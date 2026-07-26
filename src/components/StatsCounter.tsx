import React from 'react';
import { Briefcase, HeartHandshake, Rocket, Clock } from 'lucide-react';

export const StatsCounter: React.FC = () => {
  const stats = [
    {
      value: '1,000+',
      label: 'Projects Accomplished',
      icon: Briefcase
    },
    {
      value: '99.9%',
      label: 'Satisfied Clients',
      icon: HeartHandshake
    },
    {
      value: '50+',
      label: 'Ongoing Projects',
      icon: Rocket
    },
    {
      value: '100%',
      label: 'On-Time Delivery',
      icon: Clock
    }
  ];

  return (
    <section className="bg-slate-50 text-slate-900 py-12 px-4 md:px-8 border-b border-amber-200/80">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        {stats.map((st, idx) => {
          const IconComp = st.icon;
          return (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-xl p-6 space-y-2 hover:border-amber-400 transition-all shadow-sm"
            >
              <IconComp className="w-6 h-6 text-amber-600 mx-auto" />
              <div className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
                {st.value}
              </div>
              <div className="text-xs md:text-sm font-bold text-slate-600">
                {st.label}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
