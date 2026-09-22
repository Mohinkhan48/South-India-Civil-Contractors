import React, { useState } from 'react';

interface AboutProps {
  onOpenQuote?: () => void;
}

interface FeatureItem {
  id: number;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: (active: boolean) => React.ReactNode;
}

const features: FeatureItem[] = [
  {
    id: 0,
    title: 'Comprehensive Project Management',
    description:
      'From conception to completion, we manage every aspect of your construction project with precision and care, ensuring timelines and budgets are met without compromise.',
    image: '/images/comprehensive project management.png',
    imageAlt: 'Comprehensive Project Management',
    icon: (active: boolean) => (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke={active ? '#FFFFFF' : '#475569'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 21h18" />
        <path d="M5 21V7l8-4v18" />
        <path d="M19 21V11l-6-3" />
        <path d="M9 9h1" />
        <path d="M9 13h1" />
        <path d="M9 17h1" />
      </svg>
    ),
  },
  {
    id: 1,
    title: 'Diverse Project Portfolio',
    description:
      'Our expertise spans across residential complexes, luxury villas, commercial hubs, hospitals, and educational institutions, demonstrating our versatility and adaptability.',
    image: '/images/diverse project portfolio.png',
    imageAlt: 'Diverse Project Portfolio',
    icon: (active: boolean) => (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke={active ? '#FFFFFF' : '#475569'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Quality & Safety First',
    description:
      'We adhere to the strictest quality standards and safety protocols. Our ISO-certified processes ensure that every structure is built to last and safe for its occupants.',
    image: '/images/quality and safety first.png',
    imageAlt: 'Quality & Safety First',
    icon: (active: boolean) => (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke={active ? '#FFFFFF' : '#475569'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
];

const CYCLE_DURATION = 4500; // ms per slide

export const About: React.FC<AboutProps> = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [progressKey, setProgressKey] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Switch to next slide when progress bar finishes reaching 100%
  const handleProgressEnd = () => {
    if (!isPaused) {
      setActiveIdx((prev) => (prev + 1) % features.length);
      setProgressKey((k) => k + 1);
    }
  };

  const handleCardClick = (idx: number) => {
    if (idx === activeIdx) return;
    setActiveIdx(idx);
    setProgressKey((k) => k + 1);
  };

  return (
    <section
      id="about"
      className="w-full relative overflow-hidden"
      style={{
        backgroundColor: '#F3EFE6',
        paddingTop: '80px',
        paddingBottom: '96px',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <style>{`
        @keyframes siccProgressLine {
          0% {
            width: 0%;
          }
          99% {
            width: 100%;
          }
          100% {
            width: 100%;
          }
        }
        .animate-sicc-progress {
          animation: siccProgressLine ${CYCLE_DURATION}ms linear forwards;
        }
      `}</style>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2
            className="font-bold tracking-tight text-[#163048]"
            style={{
              fontSize: 'clamp(2.25rem, 4.2vw, 3.25rem)',
              lineHeight: 1.15,
              marginBottom: '16px',
            }}
          >
            Building Spaces for Life
          </h2>
          <p
            className="text-[#4E5D70] mx-auto"
            style={{
              fontSize: 'clamp(0.95rem, 1.5vw, 1.125rem)',
              lineHeight: 1.65,
              maxWidth: '640px',
            }}
          >
            Our expertise includes translating architectural and engineering designs into tangible, functional
            structures.
          </p>
        </div>

        {/* Main Two-Column Large Frame */}
        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-center gap-8 lg:gap-12 xl:gap-16">
          {/* Left: Large Image Card */}
          <div
            className="w-full max-w-[560px] lg:w-[520px] xl:w-[560px] flex-shrink-0 relative overflow-hidden rounded-[22px] shadow-[0_16px_40px_-6px_rgba(0,0,0,0.16)] bg-[#1A2530]"
            style={{
              height: '460px',
            }}
          >
            {features.map((feat, idx) => {
              const isCurrent = activeIdx === idx;
              return (
                <img
                  key={feat.id}
                  src={feat.image}
                  alt={feat.imageAlt}
                  className="w-full h-full object-cover object-center absolute inset-0 transition-all duration-700 ease-in-out"
                  style={{
                    opacity: isCurrent ? 1 : 0,
                    transform: isCurrent ? 'scale(1)' : 'scale(1.03)',
                    zIndex: isCurrent ? 2 : 1,
                    pointerEvents: isCurrent ? 'auto' : 'none',
                  }}
                />
              );
            })}
          </div>

          {/* Right: Large Accordion / Tab Cards */}
          <div
            className="w-full max-w-[580px] lg:w-[540px] xl:w-[580px] flex flex-col justify-center space-y-4 sm:space-y-5"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {features.map((feat, idx) => {
              const isActive = activeIdx === idx;
              return (
                <div
                  key={feat.id}
                  onClick={() => handleCardClick(idx)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleCardClick(idx);
                    }
                  }}
                  className={`w-full transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) cursor-pointer rounded-[16px] select-none ${
                    isActive
                      ? 'bg-white border-[1.5px] border-[#4A2328] shadow-[0_10px_30px_rgba(0,0,0,0.08)]'
                      : 'bg-[#FBF8F2] border-[1.5px] border-transparent hover:bg-[#F5EFE4] hover:shadow-sm'
                  }`}
                  style={{
                    padding: isActive ? '22px 26px 20px 26px' : '18px 26px',
                  }}
                >
                  {/* Card Header */}
                  <div className="flex items-center gap-4">
                    {/* Icon Badge */}
                    <div
                      className={`w-[46px] h-[46px] rounded-[11px] flex items-center justify-center flex-shrink-0 transition-all duration-500 ease-out ${
                        isActive ? 'bg-[#4A2328] shadow-sm' : 'bg-[#EAE4D7]'
                      }`}
                    >
                      {feat.icon(isActive)}
                    </div>

                    {/* Title */}
                    <h3
                      className={`text-[16.5px] sm:text-[18px] leading-snug transition-colors duration-300 ${
                        isActive ? 'font-bold text-[#163048]' : 'font-semibold text-[#2D3748]'
                      }`}
                    >
                      {feat.title}
                    </h3>
                  </div>

                  {/* Expanded Body with Smooth Grid Transition */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateRows: isActive ? '1fr' : '0fr',
                      transition: 'grid-template-rows 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                    className="overflow-hidden"
                  >
                    <div className="min-h-0">
                      <div
                        className="transition-opacity duration-400 ease-in-out pl-[62px]"
                        style={{
                          opacity: isActive ? 1 : 0,
                          transitionDelay: isActive ? '0.1s' : '0s',
                        }}
                      >
                        <p
                          className="text-[#556987] leading-relaxed mt-3 mb-3.5"
                          style={{
                            fontSize: '13.5px',
                            lineHeight: 1.6,
                          }}
                        >
                          {feat.description}
                        </p>

                        {/* Animated Progress Bar (triggers next slide on completion) */}
                        <div className="w-full h-[2.5px] bg-[#E2E8F0] rounded-full overflow-hidden">
                          {isActive && (
                            <div
                              key={`prog-${progressKey}-${idx}`}
                              onAnimationEnd={handleProgressEnd}
                              className="h-full bg-[#4A2328] rounded-full animate-sicc-progress"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
