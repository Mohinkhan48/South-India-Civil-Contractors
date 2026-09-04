import React from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

interface ServiceModalProps {
  service: import('../types').ServiceItem | null;
  onClose: () => void;
  onOpenQuote: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onOpenQuote }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#131D23]/85 backdrop-blur-md">
      <div className="relative w-full max-w-3xl bg-[#EDE3D3] rounded-sm shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">

        {/* Modal Header */}
        <div className="p-6 bg-[#131D23] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-serif-heading text-lg font-bold text-[#B78A55]">{service.number}</span>
            <div className="h-4 w-[1px] bg-[#EDE3D3]/25"></div>
            <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#EDE3D3]">{service.title}</h3>
          </div>
          <button onClick={onClose} className="p-2 text-[#D4C9BC] hover:text-[#EDE3D3] transition-colors focus:outline-none" aria-label="Close">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
          {service.featuredImage && (
            <div className="w-full h-52 rounded-sm overflow-hidden border border-[#131D23]/15">
              <img src={service.featuredImage} alt={service.title} className="w-full h-full object-cover" />
            </div>
          )}

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#9A6048] mb-2">Scope of Engineering</h4>
            <p className="text-sm sm:text-base text-[#6F6256] leading-relaxed">{service.fullDesc}</p>
          </div>

          <div className="bg-[#F1E8DC] border border-[#131D23]/12 p-5 rounded-sm space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#131D23] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#9A6048]" /> Standard Deliverables
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {service.deliverables.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#131D23]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9A6048] mt-1.5 flex-shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#DCCDBA]/60 border border-[#131D23]/10 p-5 rounded-sm space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#6F6256]">Material & Quality Standards</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {service.specs.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#6F6256]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B78A55] mt-1.5 flex-shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-5 border-t border-[#131D23]/12 bg-[#F1E8DC] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-[#6F6256]">Need a detailed project proposal?</span>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button onClick={onClose} className="w-1/2 sm:w-auto px-4 py-2 text-xs font-semibold text-[#6F6256] hover:text-[#131D23] border border-[#131D23]/20 rounded-sm uppercase tracking-wider">
              Close
            </button>
            <button
              onClick={() => { onClose(); onOpenQuote(); }}
              className="w-1/2 sm:w-auto bg-[#9A6048] hover:bg-[#86513B] text-[#EDE3D3] text-xs font-bold px-5 py-2.5 rounded-sm tracking-wider uppercase flex items-center justify-center gap-2"
            >
              <span>Request Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
