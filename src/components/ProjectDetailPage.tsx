import React, { useEffect } from 'react';
import { projectsData } from '../data/projects';
import { MapPin, Maximize2, Clock, Calendar, CheckCircle2, ArrowLeft, ArrowRight, Phone, MessageSquare, Building2, HardHat } from 'lucide-react';
import { siteConfig } from '../config/site';

interface ProjectDetailPageProps {
  projectId: string;
  onNavigateHome: () => void;
  onNavigateToProjects: () => void;
  onNavigateToProjectDetail: (id: string) => void;
  onOpenQuote: () => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({
  projectId,
  onNavigateHome,
  onNavigateToProjects,
  onNavigateToProjectDetail,
  onOpenQuote,
}) => {
  const project = projectsData.find((p) => p.id === projectId);
  const currentIndex = projectsData.findIndex((p) => p.id === projectId);
  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : null;
  const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : null;

  useEffect(() => {
    if (project) {
      document.title = `${project.title} | South India Civil Contractors`;
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute(
        'content',
        `${project.title} - ${project.projectType} in ${project.location}. Civil construction & turnkey execution by South India Civil Contractors.`
      );
    }
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#131D23] text-[#EDE3D3] flex items-center justify-center text-center px-4">
        <div>
          <h1 className="font-serif-heading text-4xl font-bold text-[#EDE3D3] mb-4">Project Not Found</h1>
          <p className="text-[#D4C9BC] mb-6 text-sm">The project page you are looking for may have been moved.</p>
          <button onClick={onNavigateToProjects} className="bg-[#9A6048] text-[#EDE3D3] font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full">
            Back to All Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#131D23] text-[#EDE3D3] selection:bg-[#9A6048]/40">
      
      {/* ── HERO BANNER WITH PROJECT IMAGE ── */}
      <section className="relative h-[60vh] sm:h-[70vh] lg:h-[78vh] bg-[#1C1510] overflow-hidden" aria-label="Project Hero">
        <img
          src={project.image}
          alt={`${project.title} - ${project.category} project in ${project.location}`}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#131D23] via-[#131D23]/60 to-[#1C1510]/70"></div>

        {/* Top Breadcrumb Navigation */}
        <div className="absolute top-24 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="flex items-center gap-2.5 text-xs text-[#D4C9BC] font-medium uppercase tracking-wider">
            <button onClick={onNavigateHome} className="hover:text-[#EDE3D3] transition-colors">Home</button>
            <span className="text-[#B78A55]">/</span>
            <button onClick={onNavigateToProjects} className="hover:text-[#EDE3D3] transition-colors">Projects</button>
            <span className="text-[#B78A55]">/</span>
            <span className="text-[#B78A55] font-bold">{project.category}</span>
          </div>
        </div>

        {/* Bottom Hero Overlay Title */}
        <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 lg:px-8 pb-10 z-10">
          <div className="max-w-7xl mx-auto">
            <span className="inline-block bg-[#9A6048] text-[#EDE3D3] text-[10px] font-bold uppercase tracking-widest px-3.5 py-1 rounded-full mb-4 shadow-md">
              {project.category}
            </span>
            <h1 className="font-serif-heading text-3xl sm:text-5xl md:text-6xl font-bold text-[#EDE3D3] leading-tight max-w-4xl tracking-tight">
              {project.title}
            </h1>
            <p className="text-xs sm:text-sm text-[#D4C9BC] mt-2 font-medium flex items-center gap-1.5 uppercase tracking-wider">
              <MapPin className="w-4 h-4 text-[#B78A55]" />
              <span>{project.location}</span>
            </p>
          </div>
        </div>
      </section>

      {/* ── PROJECT META STRIP ── */}
      <section className="bg-[#1C1510] border-y border-[#EDE3D3]/12" aria-label="Project Quick Metrics">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs">
            {[
              { label: 'Location', value: project.location, icon: MapPin },
              { label: 'Built-up Area', value: project.area, icon: Maximize2 },
              { label: 'Construction Duration', value: project.duration, icon: Clock },
              { label: 'Year Completed', value: project.year, icon: Calendar },
            ].map((meta, i) => {
              const Icon = meta.icon;
              return (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#45382F] border border-[#B78A55]/30 flex items-center justify-center flex-shrink-0 text-[#B78A55]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#D4C9BC]/60 uppercase tracking-widest font-bold">{meta.label}</div>
                    <div className="font-bold text-[#EDE3D3] text-xs sm:text-sm mt-0.5">{meta.value}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── MAIN DETAIL CONTENT ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20" aria-label="Project Specifications">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Description, Highlights & Specifications */}
          <div className="lg:col-span-7 space-y-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[2px] bg-[#9A6048]"></div>
                <h2 className="text-xs font-bold tracking-[0.22em] text-[#B78A55] uppercase">PROJECT OVERVIEW</h2>
              </div>
              <p className="text-sm sm:text-base text-[#D4C9BC] leading-relaxed font-normal">{project.description}</p>
            </div>

            {/* Engineering Highlights */}
            <div className="bg-[#45382F]/60 border border-[#EDE3D3]/12 p-6 sm:p-8 rounded-lg">
              <h3 className="font-serif-heading text-xl font-bold text-[#EDE3D3] mb-5 flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#9A6048]" />
                Engineering Highlights & Key Features
              </h3>
              <ul className="space-y-3.5">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#D4C9BC]">
                    <span className="w-5 h-5 rounded-full bg-[#9A6048]/20 border border-[#9A6048] flex items-center justify-center text-[10px] font-bold text-[#B78A55] flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Construction Image Showcase */}
            <div>
              <h3 className="font-serif-heading text-xl font-bold text-[#EDE3D3] mb-4 flex items-center gap-2">
                <HardHat className="w-5 h-5 text-[#B78A55]" />
                Construction & Architectural Gallery
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative h-52 rounded-lg overflow-hidden border border-[#EDE3D3]/12">
                  <img
                    src={project.image}
                    alt={`${project.title} elevation view`}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="relative h-52 rounded-lg overflow-hidden border border-[#EDE3D3]/12">
                  <img
                    src="/images/enquiry_construction.jpg"
                    alt="Civil engineering site execution"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contract Scope & CTA Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Classification Card */}
            <div className="bg-[#45382F]/70 p-5 rounded-lg border border-[#EDE3D3]/12">
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#B78A55] mb-1">Classification</div>
              <div className="font-serif-heading text-lg font-bold text-[#EDE3D3]">{project.projectType}</div>
            </div>

            {/* Scope Executed Card */}
            <div className="bg-[#1C1510] p-6 sm:p-8 rounded-lg border border-[#EDE3D3]/12">
              <h3 className="font-serif-heading text-xl font-bold text-[#EDE3D3] mb-5 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#B78A55]" />
                Scope of Work Executed
              </h3>
              <ul className="space-y-3">
                {project.scope.map((s, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#D4C9BC]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9A6048] mt-2 flex-shrink-0"></span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Discuss Project CTA Box */}
            <div className="bg-gradient-to-br from-[#9A6048] to-[#86513B] p-6 sm:p-8 rounded-lg shadow-xl text-[#EDE3D3]">
              <h4 className="font-serif-heading text-2xl font-bold mb-2">
                Discuss Your Project
              </h4>
              <p className="text-xs text-[#EDE3D3]/90 mb-6 leading-relaxed">
                Planning a similar residential, commercial, or civil construction project? Speak to our lead engineers today for a BOQ estimate.
              </p>
              <div className="space-y-3">
                <button
                  onClick={onOpenQuote}
                  className="w-full bg-[#131D23] hover:bg-[#1C1510] text-[#EDE3D3] font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-full transition-all shadow-md text-center"
                >
                  Request Detailed BOQ & Consultation
                </button>
                <div className="flex gap-3">
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="flex-1 bg-white/10 hover:bg-white/20 text-[#EDE3D3] font-semibold text-xs uppercase tracking-wider py-3 rounded-full flex items-center justify-center gap-2 transition-all border border-white/20"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Direct</span>
                  </a>
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp.replace('+', '')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider py-3 rounded-full flex items-center justify-center gap-2 transition-all shadow-md"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Prev / Next Navigation */}
        <nav className="mt-16 pt-10 border-t border-[#EDE3D3]/12 flex flex-col sm:flex-row items-stretch gap-4" aria-label="Project Navigation">
          {prevProject ? (
            <button
              onClick={() => onNavigateToProjectDetail(prevProject.id)}
              className="group flex-1 flex items-center gap-4 p-5 bg-[#45382F]/40 hover:bg-[#45382F] border border-[#EDE3D3]/12 rounded-lg transition-all"
            >
              <ArrowLeft className="w-5 h-5 text-[#B78A55] transition-transform group-hover:-translate-x-1" />
              <div className="text-left">
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#B78A55]">Previous Project</div>
                <div className="font-serif-heading font-bold text-[#EDE3D3] text-sm sm:text-base mt-0.5">{prevProject.title}</div>
              </div>
            </button>
          ) : <div className="flex-1"></div>}

          <button
            onClick={onNavigateToProjects}
            className="sm:w-auto bg-[#1C1510] hover:bg-[#45382F] text-[#EDE3D3] font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-full border border-[#EDE3D3]/20 transition-all text-center"
          >
            All Projects
          </button>

          {nextProject ? (
            <button
              onClick={() => onNavigateToProjectDetail(nextProject.id)}
              className="group flex-1 flex items-center gap-4 p-5 bg-[#45382F]/40 hover:bg-[#45382F] border border-[#EDE3D3]/12 rounded-lg transition-all justify-end text-right"
            >
              <div className="text-right">
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#B78A55]">Next Project</div>
                <div className="font-serif-heading font-bold text-[#EDE3D3] text-sm sm:text-base mt-0.5">{nextProject.title}</div>
              </div>
              <ArrowRight className="w-5 h-5 text-[#B78A55] transition-transform group-hover:translate-x-1" />
            </button>
          ) : <div className="flex-1"></div>}
        </nav>

      </section>

    </main>
  );
};
