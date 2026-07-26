import React, { useState } from 'react';
import { SHOWCASE_PROJECTS } from '../data/mockData';
import { ShowcaseProject } from '../types';
import { ExternalLink, Eye, LayoutGrid, X, CheckCircle2, PhoneCall, MousePointerClick, FolderOpen } from 'lucide-react';

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
    <section className="bg-slate-50 text-slate-900 py-16 px-4 md:px-8 border-b border-amber-200/80">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-widest bg-amber-100 px-3.5 py-1.5 rounded-full border border-amber-300">
            <LayoutGrid className="w-4 h-4 text-amber-600" />
            <span>Proven Quality & Execution</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900">
            Our Project Showcase
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto font-medium">
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
            { id: 'automation', label: 'Lead Portals' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-4 py-2 rounded-lg text-xs md:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === tab.id
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
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
              className="bg-white border border-slate-200 hover:border-amber-400 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
            >
              {/* Browser Mockup Top Bar */}
              <div className="bg-slate-100 px-3.5 py-2 border-b border-slate-200 flex items-center justify-between gap-2 select-none">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
                <div className="bg-white border border-slate-200 px-2.5 py-0.5 rounded-full text-[10px] text-slate-500 font-mono truncate max-w-[160px] sm:max-w-[200px]">
                  https://{project.id}.clickindma.com
                </div>
                <div className="text-[10px] text-amber-700 font-bold flex items-center gap-1">
                  <MousePointerClick className="w-3 h-3 text-amber-600" />
                  <span className="hidden sm:inline">Hover to Scroll</span>
                </div>
              </div>

              {/* Auto-scrollable Website Image Container */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (project.image.includes('lh3.googleusercontent.com/d/')) {
                      const id = project.image.split('lh3.googleusercontent.com/d/')[1];
                      target.src = `https://drive.google.com/uc?export=view&id=${id}`;
                    }
                  }}
                  className="w-full h-auto object-top transition-transform duration-[6000ms] ease-in-out group-hover:-translate-y-[calc(100%-16rem)] sm:group-hover:-translate-y-[calc(100%-18rem)]"
                />

                {/* Hover Quick Action Overlay */}
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4 pointer-events-none">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-4 py-2 rounded-xl font-black text-xs flex items-center gap-1.5 shadow-md pointer-events-auto cursor-pointer transform hover:scale-105 transition-all"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Full Details</span>
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-extrabold text-slate-900 text-base group-hover:text-amber-800 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] bg-slate-100 text-slate-700 border border-slate-200 px-2 py-0.5 rounded-md font-semibold"
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
            className="bg-amber-600 hover:bg-amber-700 text-white font-black text-base px-10 py-4 rounded-xl shadow-md transition-all transform hover:scale-105 inline-flex items-center gap-2 cursor-pointer border border-amber-500 uppercase tracking-wider"
          >
            <span>CONTACT US</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Modal View for Project Preview */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 space-y-6 shadow-2xl relative animate-in fade-in zoom-in duration-200 text-slate-900">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 bg-slate-100 text-slate-600 hover:text-slate-900 p-2 rounded-full cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="text-xs font-bold text-amber-800 uppercase tracking-wider bg-amber-100 px-2.5 py-1 rounded border border-amber-200">
                Showcase Preview
              </span>
              <h3 className="text-xl md:text-2xl font-black text-slate-900">
                {selectedProject.title}
              </h3>
            </div>

            <div className="rounded-xl overflow-hidden border border-slate-200 h-80 bg-slate-100 relative group/modal">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (selectedProject.image.includes('lh3.googleusercontent.com/d/')) {
                    const id = selectedProject.image.split('lh3.googleusercontent.com/d/')[1];
                    target.src = `https://drive.google.com/uc?export=view&id=${id}`;
                  }
                }}
                className="w-full object-cover object-top transition-transform duration-[6000ms] ease-in-out group-hover/modal:-translate-y-[calc(100%-20rem)]"
              />
            </div>

            <p className="text-sm text-slate-700 font-medium leading-relaxed">
              {selectedProject.description}
            </p>

            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-500 uppercase">Built With Key Features:</h4>
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-800 font-semibold">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600" />
                  <span>100% Mobile Responsive</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600" />
                  <span>Fast Speed & SEO Optimized</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600" />
                  <span>Direct WhatsApp Lead Link</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600" />
                  <span>Custom Design Architecture</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex flex-wrap gap-3 justify-end items-center">
              {selectedProject.url && (
                <a
                  href={selectedProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-amber-50 hover:bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold flex items-center gap-1.5 transition-colors"
                >
                  <FolderOpen className="w-3.5 h-3.5 text-amber-600" />
                  <span>Open Google Drive File</span>
                  <ExternalLink className="w-3 h-3 text-amber-700" />
                </a>
              )}
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-lg bg-slate-100 text-slate-700 text-xs font-bold cursor-pointer hover:bg-slate-200"
              >
                Close Preview
              </button>
              <button
                onClick={() => {
                  setSelectedProject(null);
                  onContactClick();
                }}
                className="px-6 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-black flex items-center gap-1.5 cursor-pointer shadow-sm"
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

