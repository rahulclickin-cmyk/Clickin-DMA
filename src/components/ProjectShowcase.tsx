import React, { useState } from 'react';
import { SHOWCASE_PROJECTS } from '../data/mockData';
import { ShowcaseProject } from '../types';
import { ExternalLink, Eye, LayoutGrid, X, CheckCircle2, PhoneCall, MousePointerClick } from 'lucide-react';

interface ProjectShowcaseProps {
  onContactClick: () => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ onContactClick }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ShowcaseProject | null>(null);

  const filteredProjects = activeCategory === 'all'
    ? SHOWCASE_PROJECTS
    : SHOWCASE_PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section className="bg-[#080808] text-white py-16 px-4 md:px-8 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-widest bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20">
            <LayoutGrid className="w-4 h-4" />
            <span>Proven Quality & Execution</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-amber-400">
            Our Project Showcase
          </h2>
          <p className="text-neutral-400 text-sm max-w-xl mx-auto">
            Explore live client websites & marketing design demos. Hover over any design box to scroll through the full webpage!
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'website', label: 'Business Websites' },
            { id: 'e-commerce', label: 'E-Commerce Stores' },
            { id: 'local-business', label: 'Local Business & Clinics' },
            { id: 'automation', label: 'AI Lead Portals' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-4 py-2 rounded-lg text-xs md:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === tab.id
                  ? 'bg-amber-500 text-black shadow-md shadow-amber-500/20'
                  : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800 border border-neutral-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#0e0e0e] border border-neutral-800 hover:border-amber-500/60 rounded-2xl overflow-hidden shadow-xl transition-all group flex flex-col justify-between"
            >
              {/* Browser Mockup Top Bar */}
              <div className="bg-neutral-900 px-3.5 py-2 border-b border-neutral-800/90 flex items-center justify-between gap-2 select-none">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <div className="bg-neutral-950 border border-neutral-800/80 px-2.5 py-0.5 rounded-full text-[10px] text-neutral-400 font-mono truncate max-w-[160px] sm:max-w-[200px]">
                  https://{project.id}.clickindma.com
                </div>
                <div className="text-[10px] text-amber-400/90 font-semibold flex items-center gap-1">
                  <MousePointerClick className="w-3 h-3 text-amber-400" />
                  <span className="hidden sm:inline">Hover to Scroll</span>
                </div>
              </div>

              {/* Auto-scrollable Website Image Container */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-neutral-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full object-cover object-top transition-transform duration-[5000ms] ease-in-out group-hover:-translate-y-[calc(100%-16rem)] sm:group-hover:-translate-y-[calc(100%-18rem)]"
                />

                {/* Hover Quick Action Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4 pointer-events-none">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="bg-amber-500 hover:bg-amber-400 text-black px-4 py-2 rounded-xl font-extrabold text-xs flex items-center gap-1.5 shadow-xl pointer-events-auto cursor-pointer transform hover:scale-105 transition-all"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Full Details</span>
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-bold text-white text-base group-hover:text-amber-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-800/80 flex flex-wrap gap-1.5">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] bg-neutral-900 text-neutral-300 border border-neutral-800 px-2 py-0.5 rounded-md font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact US Button */}
        <div className="text-center pt-4">
          <button
            onClick={onContactClick}
            className="bg-[#d94800] hover:bg-[#b33a00] text-white font-black text-base px-10 py-4 rounded-xl shadow-xl transition-all transform hover:scale-105 inline-flex items-center gap-2 cursor-pointer border border-amber-500/40 uppercase tracking-wider"
          >
            <span>CONTACT US</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Modal View for Project Preview */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#111111] border border-amber-500/50 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 space-y-6 shadow-2xl relative animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 bg-neutral-800 text-neutral-300 hover:text-white p-2 rounded-full cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider bg-amber-500/10 px-2.5 py-1 rounded">
                Showcase Preview
              </span>
              <h3 className="text-xl md:text-2xl font-black text-white">
                {selectedProject.title}
              </h3>
            </div>

            <div className="rounded-xl overflow-hidden border border-neutral-800 h-80 bg-neutral-950 relative group/modal">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full object-cover object-top transition-transform duration-[6000ms] ease-in-out group-hover/modal:-translate-y-[calc(100%-20rem)]"
              />
            </div>

            <p className="text-sm text-neutral-300 leading-relaxed">
              {selectedProject.description}
            </p>

            <div className="space-y-2">
              <h4 className="text-xs font-bold text-neutral-400 uppercase">Built With Key Features:</h4>
              <div className="grid grid-cols-2 gap-2 text-xs text-neutral-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>100% Mobile Responsive</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>Fast Speed & SEO Optimized</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>Direct WhatsApp Lead Link</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>Custom Design Architecture</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-800 flex flex-wrap gap-3 justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-lg bg-neutral-800 text-neutral-300 text-xs font-bold cursor-pointer"
              >
                Close Preview
              </button>
              <button
                onClick={() => {
                  setSelectedProject(null);
                  onContactClick();
                }}
                className="px-6 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-black text-xs font-black flex items-center gap-1.5 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                Want A Website Like This?
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

