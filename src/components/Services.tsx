import React, { useState } from 'react';
import { servicesData } from '../data/services';
import { ServiceItem } from '../types';
import { ServiceModal } from './ServiceModal';
import {
  Home, Building2, KeyRound, Hammer, Compass, ShieldCheck, ArrowUpRight,
} from 'lucide-react';

interface ServicesProps {
  onOpenQuote: () => void;
  onNavigateToServiceSlug?: (slug: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenQuote, onNavigateToServiceSlug }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home': return Home;
      case 'Building2': return Building2;
      case 'KeyRound': return KeyRound;
      case 'Hammer': return Hammer;
      case 'Compass': return Compass;
      case 'ShieldCheck': return ShieldCheck;
      default: return Building2;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F1E8DC] relative overflow-hidden">
      {/* Subtle background geometric accent */}
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#DCCDBA] opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header: 2-column editorial split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-14 lg:mb-18 reveal-on-scroll">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-[#9A6048]"></div>
              <span className="text-xs font-bold tracking-[0.22em] text-[#9A6048] uppercase">
                OUR CORE DISCIPLINES
              </span>
            </div>
            <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#131D23] leading-tight">
              Construction Expertise,{' '}
              <span className="italic font-normal text-[#9A6048]">
                Built Around Your Vision.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-8 flex items-end">
            <p className="text-sm sm:text-base text-[#6F6256] leading-relaxed">
              From geotechnical deep foundations to ultra-luxury turnkey handovers, each discipline is executed with uncompromising engineering precision and client transparency.
            </p>
          </div>
        </div>

        {/* Editorial Services Grid — Asymmetric Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-[#131D23]/12">
          {servicesData.map((service, index) => {
            const IconComponent = getIcon(service.iconName);
            const isLarge = index === 0 || index === 3;
            const hasBgImage = service.featuredImage && (index === 0 || index === 4);

            const slugMap: Record<string, string> = {
              'res-const': 'residential-construction',
              'comm-const': 'commercial-construction',
              'turnkey-const': 'turnkey-construction',
              'civil-const': 'civil-construction',
              'renovation': 'renovation',
            };
            const targetSlug = slugMap[service.id] || 'residential-construction';

            return (
              <div
                key={service.id}
                onClick={() => {
                  if (onNavigateToServiceSlug) {
                    onNavigateToServiceSlug(targetSlug);
                  } else {
                    setSelectedService(service);
                  }
                }}
                className={`relative group cursor-pointer border-r border-b border-[#131D23]/12 card-popup-hover overflow-hidden
                  ${isLarge ? 'sm:col-span-2 lg:col-span-1' : ''}
                  ${hasBgImage ? 'min-h-[360px]' : 'min-h-[260px]'}
                `}
              >
                {/* Optional Subtle Architectural Background Image */}
                {hasBgImage && service.featuredImage && (
                  <div className="absolute inset-0">
                    <img
                      src={service.featuredImage}
                      alt={service.title}
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out opacity-20 group-hover:opacity-30"
                    />
                  </div>
                )}

                {/* Card Background */}
                <div className={`absolute inset-0 transition-colors duration-300 ${
                  hasBgImage
                    ? 'bg-[#131D23] group-hover:bg-[#45382F]'
                    : 'bg-[#F1E8DC] group-hover:bg-[#EDE3D3]'
                }`}></div>

                {/* Content */}
                <div className="relative z-10 p-7 sm:p-8 h-full flex flex-col justify-between">
                  <div>
                    {/* Number & Icon Row */}
                    <div className="flex items-start justify-between mb-6">
                      <span className={`font-serif-heading text-2xl font-bold transition-colors ${
                        hasBgImage ? 'text-[#B78A55]' : 'text-[#9A6048]/60 group-hover:text-[#9A6048]'
                      }`}>
                        {service.number}
                      </span>
                      <div className={`w-10 h-10 rounded-sm flex items-center justify-center border transition-colors duration-300 ${
                        hasBgImage
                          ? 'bg-[#131D23]/40 border-[#EDE3D3]/20 group-hover:border-[#B78A55]'
                          : 'bg-[#DCCDBA]/60 border-[#131D23]/15 group-hover:border-[#9A6048] group-hover:bg-[#9A6048]/10'
                      }`}>
                        <IconComponent className={`w-5 h-5 stroke-[1.5] ${hasBgImage ? 'text-[#B78A55]' : 'text-[#9A6048]'}`} />
                      </div>
                    </div>

                    {/* Service Title */}
                    <h3 className={`font-serif-heading text-xl sm:text-2xl font-bold leading-snug mb-3 transition-colors ${
                      hasBgImage ? 'text-[#EDE3D3] group-hover:text-white' : 'text-[#131D23]'
                    }`}>
                      {service.title}
                    </h3>

                    {/* Short Description */}
                    <p className={`text-xs sm:text-sm leading-relaxed font-normal ${
                      hasBgImage ? 'text-[#DCCDBA]/80' : 'text-[#6F6256]'
                    }`}>
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Bottom Arrow Row */}
                  <div className={`pt-5 mt-4 border-t flex items-center justify-between transition-colors ${
                    hasBgImage ? 'border-[#EDE3D3]/15' : 'border-[#131D23]/12'
                  }`}>
                    <span className={`text-[11px] font-bold uppercase tracking-widest transition-colors ${
                      hasBgImage ? 'text-[#B78A55] group-hover:text-[#EDE3D3]' : 'text-[#9A6048] group-hover:text-[#131D23]'
                    }`}>
                      Explore Scope
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                      hasBgImage
                        ? 'bg-[#9A6048]/30 text-[#EDE3D3] group-hover:bg-[#9A6048]'
                        : 'bg-[#DCCDBA] text-[#9A6048] group-hover:bg-[#9A6048] group-hover:text-[#EDE3D3]'
                    }`}>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Service Detail Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenQuote={onOpenQuote}
      />
    </section>
  );
};
