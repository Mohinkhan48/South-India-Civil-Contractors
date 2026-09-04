import React from 'react';
import { ProjectItem } from '../types';
import { X, MapPin, Maximize2, Clock, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenQuote: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onOpenQuote }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#131D23]/90 backdrop-blur-md">
      <div className="relative w-full max-w-4xl bg-[#EDE3D3] rounded-sm shadow-2xl overflow-hidden my-8 max-h-[92vh] flex flex-col">

        {/* Header */}
        <div className="p-5 sm:p-6 bg-[#131D23] flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B78A55]">{project.category} Portfolio</span>
            <h3 className="font-serif-heading text-xl sm:text-2xl lg:text-3xl font-bold text-[#EDE3D3]">{project.title}</h3>
          </div>
          <button onClick={onClose} className="p-2 text-[#D4C9BC] hover:text-[#EDE3D3] transition-colors focus:outline-none" aria-label="Close">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-5 sm:p-8 space-y-6 overflow-y-auto">
          {/* Hero image */}
          <div className="relative rounded-sm overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-64 sm:h-96 object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#131D23]/80 via-transparent to-transparent"></div>

            {/* Quick specs overlay */}
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-3 sm:gap-6 bg-[#131D23]/90 backdrop-blur-md border border-[#EDE3D3]/15 px-4 py-3 rounded-sm text-xs text-[#EDE3D3]">
              <div className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-[#B78A55]" /><span>{project.location}</span></div>
              <div className="flex items-center gap-1.5"><Maximize2 className="w-3.5 h-3.5 text-[#B78A55]" /><span>{project.area}</span></div>
              <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-[#B78A55]" /><span>{project.duration}</span></div>
              <div className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-[#B78A55]" /><span>Completed: {project.year}</span></div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#9A6048] mb-2">Project Overview</h4>
            <p className="text-sm sm:text-base text-[#6F6256] leading-relaxed">{project.description}</p>
          </div>

          {/* Two column: highlights + scope */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#F1E8DC] border border-[#131D23]/12 p-5 rounded-sm">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#131D23] flex items-center gap-1.5 mb-3">
                <CheckCircle2 className="w-4 h-4 text-[#9A6048]" /> Engineering Highlights
              </h4>
              <ul className="space-y-2">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#131D23]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9A6048] mt-1.5 flex-shrink-0"></span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#DCCDBA]/60 border border-[#131D23]/10 p-5 rounded-sm">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#6F6256] flex items-center gap-1.5 mb-3">
                <CheckCircle2 className="w-4 h-4 text-[#B78A55]" /> Contract Scope
              </h4>
              <ul className="space-y-2">
                {project.scope.map((s, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#6F6256]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B78A55] mt-1.5 flex-shrink-0"></span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 sm:p-6 border-t border-[#131D23]/12 bg-[#F1E8DC] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-[#6F6256]">Interested in a similar project?</span>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button onClick={onClose} className="w-1/2 sm:w-auto px-4 py-2 text-xs font-semibold text-[#6F6256] border border-[#131D23]/20 rounded-sm uppercase tracking-wider">Close</button>
            <button
              onClick={() => { onClose(); onOpenQuote(); }}
              className="w-1/2 sm:w-auto bg-[#9A6048] hover:bg-[#86513B] text-[#EDE3D3] text-xs font-bold px-5 py-2.5 rounded-sm tracking-wider uppercase flex items-center justify-center gap-2"
            >
              <span>Consult On This</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
