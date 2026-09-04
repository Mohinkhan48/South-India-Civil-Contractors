import React, { useState, useEffect } from 'react';
import { projectsData } from '../data/projects';
import { MapPin, ArrowRight, ArrowLeft, Calendar, Maximize2 } from 'lucide-react';

interface ProjectsPageProps {
  onNavigateHome: () => void;
  onNavigateToProjectDetail: (id: string) => void;
  onOpenQuote: () => void;
  initialCity?: string;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onNavigateHome,
  onNavigateToProjectDetail,
  onOpenQuote,
  initialCity,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [selectedCity, setSelectedCity] = useState<string>(initialCity || 'ALL');

  useEffect(() => {
    if (initialCity) {
      setSelectedCity(initialCity);
    }
  }, [initialCity]);

  useEffect(() => {
    const pageTitle = selectedCity !== 'ALL'
      ? `Construction Projects in ${selectedCity} | South India Civil Contractors`
      : 'Construction Projects | South India Civil Contractors';
    document.title = pageTitle;
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      'content',
      'Explore residential, commercial, turnkey, renovation and civil construction projects by South India Civil Contractors across South India.'
    );
  }, [selectedCity]);

  const categories = ['ALL', 'RESIDENTIAL', 'COMMERCIAL', 'TURNKEY', 'RENOVATION', 'CIVIL & STRUCTURAL'];
  const cities = ['ALL', 'Bangalore', 'Chennai', 'Hyderabad', 'Kochi', 'Mysore', 'Coimbatore'];

  const filtered = projectsData.filter((p) => {
    const matchesCategory = activeCategory === 'ALL' || p.category.toUpperCase() === activeCategory;
    const matchesCity = selectedCity === 'ALL' || p.location.toLowerCase().includes(selectedCity.toLowerCase());
    return matchesCategory && matchesCity;
  });

  return (
    <main className="min-h-screen bg-[#131D23] text-[#EDE3D3] selection:bg-[#9A6048]/40">
      
      {/* ── HEADER BANNER ── */}
      <header className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 px-4 sm:px-6 lg:px-8 border-b border-[#EDE3D3]/10 overflow-hidden bg-gradient-to-b from-[#1C1510] to-[#131D23]">
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Back Navigation */}
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 text-xs text-[#D4C9BC] hover:text-[#EDE3D3] transition-colors mb-8 group uppercase tracking-widest font-semibold"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-[#B78A55]" />
            <span>Back to Home</span>
          </button>

          {/* Tagline */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-[#9A6048]"></div>
            <span className="text-xs font-bold tracking-[0.24em] text-[#B78A55] uppercase">
              EXCELLENCE IN CIVIL CONTRACTING
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <h1 className="font-serif-heading text-4xl sm:text-5xl md:text-6xl font-bold text-[#EDE3D3] leading-[1.1] tracking-tight">
                Our Construction Projects
              </h1>
              <p className="text-sm sm:text-base text-[#D4C9BC] mt-4 leading-relaxed font-normal">
                Explore our portfolio of residential, commercial, civil and turnkey construction projects delivered across South India.
              </p>
            </div>

            {/* Category & City Filter Controls */}
            <div className="space-y-3 pt-2">
              <div className="flex flex-wrap gap-2">
                <span className="text-[10px] font-bold text-[#B78A55] uppercase tracking-wider self-center mr-1">Category:</span>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3.5 py-1.5 text-[11px] font-bold tracking-wider uppercase rounded-full transition-all duration-300 border ${
                      activeCategory === cat
                        ? 'bg-[#9A6048] text-[#EDE3D3] border-[#9A6048] shadow-terracotta-glow'
                        : 'bg-[#45382F]/60 text-[#D4C9BC] border-[#EDE3D3]/18 hover:border-[#B78A55] hover:text-[#EDE3D3]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="text-[10px] font-bold text-[#B78A55] uppercase tracking-wider self-center mr-1">City:</span>
                {cities.map((city) => (
                  <button
                    key={city}
                    onClick={() => setSelectedCity(city)}
                    className={`px-3.5 py-1.5 text-[11px] font-semibold tracking-wider uppercase rounded-full transition-all duration-300 border ${
                      selectedCity === city
                        ? 'bg-[#B78A55] text-[#131D23] border-[#B78A55] font-bold'
                        : 'bg-transparent text-[#D4C9BC]/80 border-[#EDE3D3]/15 hover:border-[#EDE3D3]/40 hover:text-[#EDE3D3]'
                    }`}
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* ── PROJECT GRID SECTION ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20" aria-label="Project Portfolio Grid">
        {filtered.length === 0 ? (
          <div className="text-center py-24 text-[#D4C9BC] bg-[#45382F]/30 rounded-lg border border-[#EDE3D3]/10">
            <p className="font-serif-heading text-2xl mb-2 text-[#EDE3D3]">No projects found in this category.</p>
            <p className="text-xs text-[#D4C9BC]/70">Select "ALL" or choose another category above.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filtered.map((project) => (
              <article
                key={project.id}
                className="group bg-[#45382F]/50 border border-[#EDE3D3]/12 rounded-lg overflow-hidden flex flex-col justify-between hover:border-[#9A6048]/60 transition-all duration-500 hover:-translate-y-1.5 shadow-editorial-dark"
              >
                <div>
                  {/* Image Header */}
                  <div className="relative h-60 sm:h-64 overflow-hidden bg-[#1C1510]">
                    <img
                      src={project.image}
                      alt={`${project.title} - ${project.category} construction project in ${project.location}`}
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    {/* Subtle Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#131D23] via-[#131D23]/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#9A6048] text-[#EDE3D3] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                        {project.category}
                      </span>
                    </div>

                    {/* Built-up Area Tag */}
                    <div className="absolute bottom-3 right-3 bg-[#1C1510]/80 backdrop-blur-sm border border-[#EDE3D3]/15 text-[#D4C9BC] text-[10px] font-medium px-2.5 py-1 rounded-md flex items-center gap-1">
                      <Maximize2 className="w-3 h-3 text-[#B78A55]" />
                      <span>{project.area}</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    {/* Location */}
                    <div className="flex items-center gap-1.5 text-xs text-[#B78A55] font-semibold mb-2 uppercase tracking-wider">
                      <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>{project.location}</span>
                    </div>

                    {/* Project Title */}
                    <h3 className="font-serif-heading text-xl font-bold text-[#EDE3D3] group-hover:text-[#B78A55] transition-colors leading-snug mb-3">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-[#D4C9BC]/80 leading-relaxed line-clamp-3 mb-4 font-normal">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-6 pb-6 pt-3 border-t border-[#EDE3D3]/10 flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-1.5 text-xs text-[#D4C9BC]/70 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-[#B78A55]" />
                    <span>{project.year}</span>
                  </div>

                  {/* View Project Button */}
                  <button
                    onClick={() => onNavigateToProjectDetail(project.id)}
                    className="inline-flex items-center gap-1.5 text-[#EDE3D3] group-hover:text-[#B78A55] font-bold text-xs uppercase tracking-wider transition-colors"
                  >
                    <span>View Project</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-[#9A6048]" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* ── FOOTER CTA & DISCLAIMER ── */}
      <footer className="bg-[#1C1510] py-16 px-4 sm:px-6 lg:px-8 border-t border-[#EDE3D3]/10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="text-xs text-[#B78A55] font-bold uppercase tracking-[0.2em]">
            READY TO START YOUR CONSTRUCTION PROJECT?
          </p>

          <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#EDE3D3]">
            Let's Build Something Lasting Together.
          </h2>

          <p className="text-xs sm:text-sm text-[#D4C9BC]/80 max-w-lg mx-auto leading-relaxed">
            Contact our engineering team today for a complimentary architectural consultation and customized Bill of Quantities (BOQ).
          </p>

          <div className="pt-2">
            <button
              onClick={onOpenQuote}
              className="bg-[#9A6048] hover:bg-[#86513B] text-[#EDE3D3] font-bold text-xs sm:text-sm tracking-wider uppercase px-8 py-3.5 rounded-full shadow-lg hover:shadow-terracotta-glow transition-all duration-300"
            >
              Request Free Consultation
            </button>
          </div>

          <div className="pt-8 border-t border-[#EDE3D3]/10">
            <p className="text-[11px] text-[#D4C9BC]/40 max-w-xl mx-auto italic leading-relaxed">
              * Note: Project showcase items are illustrative engineering portfolio representations for civil contracting and construction capabilities across South India.
            </p>
          </div>
        </div>
      </footer>

    </main>
  );
};
