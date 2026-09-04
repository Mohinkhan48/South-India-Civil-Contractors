import React from 'react';
import { siteConfig } from '../config/site';
import { Phone, ArrowRight } from 'lucide-react';

interface CTABannerProps {
  onOpenQuote: () => void;
}

export const CTABanner: React.FC<CTABannerProps> = ({ onOpenQuote }) => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background architectural image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/project_waterfront.jpg"
          alt="Architectural masterwork by South India Civil Contractors"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#131D23]/80"></div>
        <div className="absolute inset-0 bg-[#9A6048]/20 mix-blend-multiply"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="w-12 h-[1px] bg-[#B78A55]"></div>
          <span className="text-xs font-bold tracking-[0.22em] text-[#B78A55] uppercase">BEGIN YOUR PROJECT</span>
          <div className="w-12 h-[1px] bg-[#B78A55]"></div>
        </div>

        <h2 className="font-serif-heading text-4xl sm:text-5xl md:text-6xl font-bold text-[#EDE3D3] leading-tight mb-5 max-w-3xl mx-auto">
          Ready To Build Something{' '}
          <span className="italic font-normal text-[#B78A55]">Remarkable?</span>
        </h2>

        <p className="text-base sm:text-lg text-[#D4C9BC] leading-relaxed max-w-xl mx-auto mb-10">
          "Let's turn your vision into a space built to last."
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <button
            onClick={onOpenQuote}
            className="w-full sm:w-auto bg-[#9A6048] hover:bg-[#86513B] text-[#EDE3D3] font-bold text-sm tracking-wider uppercase px-8 py-4 rounded-sm shadow-xl hover:shadow-terracotta-glow transition-all duration-300 flex items-center justify-center gap-2.5 group"
          >
            <span>Get A Free Consultation</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <a
            href={`tel:${siteConfig.phone}`}
            className="w-full sm:w-auto bg-transparent hover:bg-[#EDE3D3]/10 text-[#EDE3D3] font-semibold text-sm tracking-wider uppercase px-8 py-4 rounded-sm border border-[#EDE3D3]/40 hover:border-[#EDE3D3] transition-all duration-300 flex items-center justify-center gap-2.5"
          >
            <Phone className="w-4 h-4 text-[#B78A55]" />
            <span>Call Us: {siteConfig.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
