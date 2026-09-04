import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface AboutProps {
  onOpenQuote: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenQuote }) => {
  const pillars = [
    'Quality Construction & Certified Materials',
    'Experienced Engineers & Site Managers',
    'Transparent BOQ & Zero Hidden Costs',
    'Reliable Milestone-Based Delivery',
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F1E8DC] text-[#131D23] relative overflow-hidden font-sans border-t border-[#E5DACB]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* LEFT: Large Architectural Construction Site Image with Floating Experience Card */}
          <div className="lg:col-span-6 relative">
            
            {/* Top-left corner decorative bracket line */}
            <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-[#9A6048] pointer-events-none z-20"></div>

            {/* Main Image Frame */}
            <div className="relative rounded-sm overflow-hidden shadow-2xl group border border-[#D5C7B4]/50">
              <img
                src="/images/about_craft.jpg"
                alt="Precision civil engineering at a South India Civil Contractors project site"
                className="w-full h-[380px] sm:h-[460px] lg:h-[520px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>

            {/* Overlapping Floating Experience Badge */}
            <div className="absolute -bottom-6 right-0 sm:right-2 lg:-right-4 bg-[#9A6048] p-5 sm:p-6 shadow-2xl max-w-[260px] rounded-none z-30 text-white">
              <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1 tracking-tight">
                25+
              </div>
              <div className="text-[11px] font-bold text-white/95 uppercase tracking-wider leading-tight mb-2">
                YEARS OF CONSTRUCTION MASTERY
              </div>
              <div className="text-[11px] text-white/80 font-normal leading-snug">
                Across Tamil Nadu, Karnataka, Kerala & Telangana
              </div>
            </div>
          </div>

          {/* RIGHT: Editorial Content */}
          <div className="lg:col-span-6 mt-6 lg:mt-0">
            
            {/* Small Label */}
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-6 h-[2px] bg-[#9A6048]"></div>
              <span className="text-xs font-bold tracking-[0.2em] text-[#9A6048] uppercase">
                ABOUT SOUTH INDIA CIVIL CONTRACTORS
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-[44px] font-extrabold text-[#131D23] leading-[1.18] tracking-tight mb-6">
              Building With Purpose.{' '}
              <span className="italic font-normal text-[#9A6048] block sm:inline">
                Delivering With Precision.
              </span>
            </h2>

            {/* Body Text */}
            <div className="space-y-4 text-sm sm:text-base text-[#5C5046] leading-relaxed mb-7 font-normal">
              <p>
                Founded with a clear mission to redefine the standard of civil construction and architectural contracting in South India, <strong className="text-[#131D23] font-bold">SOUTH INDIA CIVIL CONTRACTORS</strong> stands as a name built on structural integrity, radical transparency, and meticulous craftsmanship.
              </p>
              <p>
                From custom luxury residences in Bangalore and Chennai to high-load commercial complexes in Hyderabad and serene waterfront estates in Kerala, every project we undertake is executed with the same obsessive attention to engineering detail and client communication.
              </p>
            </div>

            {/* 4 Pillars Checklist */}
            <ul className="space-y-3 mb-8">
              {pillars.map((pillar, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm sm:text-[15px] text-[#1A242B] font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#9A6048] flex-shrink-0 stroke-[2.5]" />
                  <span>{pillar}</span>
                </li>
              ))}
            </ul>

            {/* Bottom Actions */}
            <div className="flex flex-wrap items-center gap-6 pt-1">
              <a
                href="#why-us"
                className="inline-flex items-center gap-2 text-sm font-bold tracking-wide text-[#9A6048] hover:text-[#7A4B36] transition-colors group"
              >
                <span>Discover Our Approach</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <button
                onClick={onOpenQuote}
                className="bg-[#131D23] hover:bg-[#2A3B47] text-white text-xs font-bold tracking-widest uppercase px-6 py-3.5 rounded-sm transition-all shadow-md"
              >
                SCHEDULE CONSULTATION
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
