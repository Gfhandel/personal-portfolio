import React from 'react';
import { PROJECTS } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-black mb-4 uppercase tracking-tighter">Case Studies</h2>
          <div className="w-20 h-1.5 bg-brand-primary mx-auto rounded-full mb-6"></div>
          <p className="text-brand-gray max-w-2xl mx-auto text-lg font-medium">
            Strategic engineering solutions balancing rapid execution with enterprise scalability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="group bg-neutral-50 rounded-[2.5rem] overflow-hidden border border-neutral-100 hover:border-brand-primary/30 transition-all duration-500 shadow-sm hover:shadow-2xl"
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale-0 group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-brand-primary/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a href={project.link} className="p-4 bg-white text-brand-primary rounded-full hover:scale-110 transition-transform shadow-xl">
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className="p-10">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="px-4 py-1.5 bg-white text-brand-primary text-[10px] font-black uppercase tracking-widest border border-brand-primary/10 rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-black text-black mb-3 uppercase tracking-tight group-hover:text-brand-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-brand-gray leading-relaxed text-xs font-semibold mb-8">
                  {project.description}
                </p>
                <a href={project.link} className="inline-flex items-center text-[10px] font-black uppercase tracking-[0.25em] text-black group-hover:text-brand-primary transition-all">
                  Inspect Project <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;