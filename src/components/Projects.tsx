import React, { useState } from 'react';
import { projectsData } from '../data/projects';
import { MapPin, ArrowUpRight, Maximize2, MoveRight } from 'lucide-react';

interface ProjectsProps {
  onOpenQuote: () => void;
  onNavigateToProjects: () => void;
  onNavigateToProjectDetail: (id: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({
  onOpenQuote: _onOpenQuote,
  onNavigateToProjects,
  onNavigateToProjectDetail,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Residential', 'Commercial', 'Renovation'];
  const filtered = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  // Take first 6 for homepage preview
  const preview = filtered.slice(0, 6);

  return (
    <section id="projects" className="pt-4 pb-20 lg:pt-6 lg:pb-28 bg-[#131D23] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 reveal-on-scroll">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-[#9A6048]"></div>
              <span className="text-xs font-bold tracking-[0.22em] text-[#B78A55] uppercase">
                PORTFOLIO OF DISTINCTION
              </span>
            </div>
            <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#EDE3D3] leading-tight">
              Selected Projects
            </h2>
            <p className="text-sm sm:text-base text-[#D4C9BC] mt-3 max-w-lg">
              A selection of spaces shaped through precision, planning and craftsmanship.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-full transition-all duration-300 border ${
                  activeCategory === cat
                    ? 'bg-[#9A6048] text-[#EDE3D3] border-[#9A6048]'
                    : 'bg-transparent text-[#D4C9BC] border-[#EDE3D3]/20 hover:border-[#EDE3D3]/50 hover:text-[#EDE3D3]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Clean 3-Column Grid Layout (6 cards fill 2 full rows perfectly) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mb-10">
          {preview.map((project, idx) => {
            return (
              <div
                key={project.id}
                onClick={() => onNavigateToProjectDetail(project.id)}
                className={`group relative overflow-hidden rounded-xl cursor-pointer h-[250px] sm:h-[275px] lg:h-[290px] border border-[#EDE3D3]/12 shadow-editorial-dark hover:border-[#9A6048]/80 card-popup-hover reveal-scale reveal-delay-${(idx % 3) + 1}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#131D23] via-[#131D23]/35 to-transparent"></div>

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#9A6048] text-[#EDE3D3] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                    {project.category}
                  </span>
                </div>

                {/* Area tag */}
                <div className="absolute top-4 right-4">
                  <span className="bg-[#1C1510]/85 backdrop-blur-sm text-[#D4C9BC] text-[10px] font-medium px-2.5 py-1 rounded-md flex items-center gap-1 border border-[#EDE3D3]/15">
                    <Maximize2 className="w-3 h-3 text-[#B78A55]" />
                    {project.area}
                  </span>
                </div>

                {/* Hover action icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#9A6048] text-[#EDE3D3] flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300 shadow-lg">
                  <ArrowUpRight className="w-5 h-5" />
                </div>

                {/* Bottom text */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center gap-1.5 text-xs text-[#B78A55] font-semibold mb-1 uppercase tracking-wider">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{project.location}</span>
                  </div>
                  <h3 className="font-serif-heading text-lg sm:text-xl font-bold text-[#EDE3D3] group-hover:text-[#B78A55] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#EDE3D3]/10">
                    <span className="text-xs text-[#D4C9BC]/70">{project.projectType}</span>
                    <span className="text-xs text-[#B78A55] font-semibold">{project.year}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* MORE PROJECTS Button — prominently visible */}
        <div className="flex justify-center pt-4">
          <button
            onClick={onNavigateToProjects}
            className="group inline-flex items-center gap-3 border border-[#9A6048] text-[#EDE3D3] hover:bg-[#9A6048] hover:text-[#EDE3D3] font-bold text-sm tracking-[0.14em] uppercase px-10 py-4 rounded-full transition-all duration-300"
          >
            <span>More Projects</span>
            <MoveRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </section>
  );
};
