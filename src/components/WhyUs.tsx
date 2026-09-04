import React, { useState } from 'react';
import { whyUsData } from '../data/whyUs';
import { ChevronDown, ChevronUp, Check } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#DCCDBA] relative overflow-hidden">
      {/* Subtle texture spot */}
      <div className="absolute top-1/2 -right-20 w-64 h-64 bg-[#EDE3D3] rounded-full opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 reveal-on-scroll">

        {/* Section Label & Title */}
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-[#9A6048]"></div>
            <span className="text-xs font-bold tracking-[0.22em] text-[#9A6048] uppercase">THE DIFFERENCE</span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#131D23] leading-tight">
            Why Choose{' '}
            <span className="italic font-normal text-[#9A6048]">
              South India Civil Contractors?
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#6F6256] mt-4 max-w-xl">
            Our philosophy combines architectural beauty with rigorous civil engineering. Here is how we guarantee peace of mind for every client.
          </p>
        </div>

        {/* 2-Column: 01–04 list + large architectural image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* Left: 4 Numbered Pillars as Interactive Accordions */}
          <div className="lg:col-span-7 space-y-4">
            {whyUsData.map((item, idx) => {
              const isActive = activeTab === idx;
              return (
                <div
                  key={item.number}
                  onClick={() => setActiveTab(idx)}
                  className={`border-l-4 pl-6 pr-5 py-5 rounded-r-sm cursor-pointer transition-all duration-300 ${
                    isActive
                      ? 'border-[#9A6048] bg-[#EDE3D3] shadow-editorial'
                      : 'border-[#131D23]/20 hover:border-[#9A6048]/50 hover:bg-[#EDE3D3]/60'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <span className={`font-serif-heading text-3xl sm:text-4xl font-bold leading-none transition-colors mt-1 ${
                        isActive ? 'text-[#9A6048]' : 'text-[#131D23]/30'
                      }`}>
                        {item.number}
                      </span>
                      <div>
                        <h3 className="font-serif-heading text-lg sm:text-xl font-bold text-[#131D23]">{item.title}</h3>
                        <p className={`text-xs font-semibold tracking-wide mt-0.5 transition-colors ${
                          isActive ? 'text-[#9A6048]' : 'text-[#6F6256]'
                        }`}>{item.subtitle}</p>
                      </div>
                    </div>
                    {isActive ? (
                      <ChevronUp className="w-5 h-5 text-[#9A6048] flex-shrink-0 mt-1" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#6F6256] flex-shrink-0 mt-1" />
                    )}
                  </div>

                  {isActive && (
                    <div className="mt-4 pt-4 border-t border-[#131D23]/12 space-y-3">
                      <p className="text-sm text-[#6F6256] leading-relaxed">{item.description}</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {item.bullets.map((b, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-[#131D23]">
                            <Check className="w-3.5 h-3.5 text-[#9A6048] mt-0.5 flex-shrink-0" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: Large Architectural Image with editorial quote */}
          <div className="lg:col-span-5">
            <div className="relative rounded-sm overflow-hidden shadow-editorial group">
              <img
                src="/images/why_us_arch.jpg"
                alt="Premium architectural interior crafted by South India Civil Contractors"
                className="w-full h-[400px] sm:h-[480px] lg:h-[540px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#131D23]/90 via-transparent to-transparent"></div>

              {/* Bottom editorial quote */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <p className="font-serif-heading italic text-sm sm:text-base text-[#EDE3D3] leading-snug mb-3">
                  "True quality lives in the structural core, the precision joinery, and the integrity of what cannot be seen."
                </p>
                <div className="flex items-center gap-2 text-[11px] text-[#B78A55] font-bold uppercase tracking-widest">
                  <div className="w-4 h-[1px] bg-[#B78A55]"></div>
                  SIBC Engineering Standard
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
