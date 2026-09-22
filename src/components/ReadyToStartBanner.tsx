import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ReadyToStartBannerProps {
  onOpenQuote?: () => void;
  onNavigateToContact?: () => void;
}

export const ReadyToStartBanner: React.FC<ReadyToStartBannerProps> = ({ onOpenQuote, onNavigateToContact }) => {
  const handleClick = () => {
    if (onNavigateToContact) {
      onNavigateToContact();
    } else if (onOpenQuote) {
      onOpenQuote();
    }
  };

  return (
    <section
      className="w-full bg-[#4A2328] text-white py-16 sm:py-20 lg:py-24 transition-colors"
      style={{
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3 sm:mb-4">
          Ready to Start Your Project?
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-[#EDE3D3]/90 font-normal leading-relaxed mb-6 sm:mb-8 max-w-xl mx-auto">
          Get in touch with us today for a free consultation and quote
        </p>

        {/* Action Button */}
        <div className="flex justify-center">
          <button
            onClick={handleClick}
            className="px-7 py-3.5 bg-[#F3EFE6] hover:bg-[#EDE3D3] text-[#4A2328] font-bold rounded-xl text-sm sm:text-base transition-all duration-200 shadow-md hover:shadow-lg inline-flex items-center gap-2 cursor-pointer group"
          >
            <span>Contact Us Now</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};
