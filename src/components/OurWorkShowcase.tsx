import React, { useState } from 'react';
import { X } from 'lucide-react';

interface OurWorkShowcaseProps {
  onNavigateToProjects: () => void;
}

const workProjects = [
  {
    id: 'work-1',
    title: 'Modern Residential Complex',
    image: '/images/image 1.png',
    category: 'Residential',
  },
  {
    id: 'work-2',
    title: 'Contemporary Luxury Villa',
    image: '/images/image 2.png',
    category: 'Villas',
  },
  {
    id: 'work-3',
    title: 'Architectural Residence',
    image: '/images/image 3.png',
    category: 'Residential',
  },
  {
    id: 'work-4',
    title: 'Multi-Level Commercial & Residential',
    image: '/images/image 4.png',
    category: 'Commercial',
  },
];

export const OurWorkShowcase: React.FC<OurWorkShowcaseProps> = ({ onNavigateToProjects }) => {
  const [activeLightboxImage, setActiveLightboxImage] = useState<string | null>(null);

  return (
    <section
      id="our-work"
      className="w-full relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
      style={{
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2
            className="font-bold tracking-tight mb-3"
            style={{
              fontSize: 'clamp(2.3rem, 4.2vw, 3.25rem)',
              lineHeight: 1.15,
            }}
          >
            <span className="text-[#163048]">Our </span>
            <span className="text-[#4A2328]">Work</span>
          </h2>
          <p
            className="text-[#556987] mx-auto"
            style={{
              fontSize: 'clamp(0.9rem, 1.4vw, 1.05rem)',
              lineHeight: 1.6,
              maxWidth: '620px',
            }}
          >
            Explore our portfolio of completed projects across residential, commercial, and construction categories
          </p>
        </div>

        {/* 4 Image Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 mb-10 sm:mb-12">
          {workProjects.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxImage(item.image)}
              className="group cursor-pointer rounded-[20px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.16)] transition-all duration-300 hover:-translate-y-1.5 bg-[#F1F3F5]"
              style={{
                height: '320px',
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="flex justify-center">
          <button
            type="button"
            onClick={onNavigateToProjects}
            className="bg-[#1C3B53] hover:bg-[#152B3C] active:scale-98 text-white font-semibold text-[14.5px] px-8 py-3.5 rounded-[8px] inline-flex items-center gap-2 shadow-md transition-all cursor-pointer"
          >
            <span>View All Projects</span>
            <span className="text-[16px]">→</span>
          </button>
        </div>
      </div>

      {/* Image Lightbox Preview Modal */}
      {activeLightboxImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveLightboxImage(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center">
            <button
              onClick={() => setActiveLightboxImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
              aria-label="Close Preview"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={activeLightboxImage}
              alt="Project Full View"
              className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl border border-white/20"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default OurWorkShowcase;
