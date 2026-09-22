import React from 'react';

interface OurExpertiseProps {
  onOpenQuote: (defaultType?: string) => void;
  onNavigateToProjects?: () => void;
  onNavigateToServices?: () => void;
}

interface ExpertiseCard {
  id: string;
  title: string;
  description: string;
  image: string;
  type: string;
  icon: React.ReactNode;
}

const expertiseList: ExpertiseCard[] = [
  {
    id: 'high-rise',
    title: 'High Rise Projects',
    description: 'Modern high-rise construction with advanced engineering',
    image: '/images/High Rise Project.png',
    type: 'Commercial',
    icon: (
      <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <line x1="9" y1="6" x2="9" y2="6.01" />
        <line x1="15" y1="6" x2="15" y2="6.01" />
        <line x1="9" y1="10" x2="9" y2="10.01" />
        <line x1="15" y1="10" x2="15" y2="10.01" />
        <line x1="9" y1="14" x2="9" y2="14.01" />
        <line x1="15" y1="14" x2="15" y2="14.01" />
        <line x1="9" y1="18" x2="15" y2="18" />
      </svg>
    ),
  },
  {
    id: 'residential',
    title: 'Residential Buildings',
    description: 'Quality homes built with precision and care',
    image: '/images/Residential Building.png',
    type: 'Residential',
    icon: (
      <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    id: 'commercial',
    title: 'Commercial Buildings',
    description: 'State-of-the-art commercial infrastructure',
    image: '/images/Commercial Buildings.png',
    type: 'Commercial',
    icon: (
      <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
        <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
        <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
        <path d="M10 6h4" />
        <path d="M10 10h4" />
        <path d="M10 14h4" />
        <path d="M10 18h4" />
      </svg>
    ),
  },
  {
    id: 'hotel',
    title: 'Hotel Projects',
    description: 'Luxury hospitality construction services',
    image: '/images/Hotel Project.png',
    type: 'Hotel',
    icon: (
      <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z" />
        <path d="m9 16 .348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16" />
        <path d="M8 7h.01" />
        <path d="M16 7h.01" />
        <path d="M12 7h.01" />
        <path d="M12 11h.01" />
        <path d="M16 11h.01" />
        <path d="M8 11h.01" />
        <path d="M10 22v-4h4v4" />
      </svg>
    ),
  },
  {
    id: 'hospital',
    title: 'Hospital Projects',
    description: 'Healthcare facilities built to highest standards',
    image: '/images/Hospital Project.png',
    type: 'Hospital',
    icon: (
      <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 6v4" />
        <path d="M14 8h-4" />
        <path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z" />
      </svg>
    ),
  },
  {
    id: 'educational',
    title: 'Educational Buildings',
    description: 'Schools and colleges for the future',
    image: '/images/College Building.png',
    type: 'Educational',
    icon: (
      <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5" />
      </svg>
    ),
  },
];

export const OurExpertise: React.FC<OurExpertiseProps> = ({ onOpenQuote, onNavigateToProjects: _onNavigateToProjects, onNavigateToServices }) => {
  return (
    <section
      id="expertise"
      className="w-full relative"
      style={{
        backgroundColor: '#EEEEEE',
        paddingTop: '64px',
        paddingBottom: '88px',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-14">
          <h2
            className="font-bold tracking-tight text-[#163048]"
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3rem)',
              lineHeight: 1.16,
              marginBottom: '14px',
            }}
          >
            Our Expertise
          </h2>
          <p
            className="text-[#4E5D70] mx-auto font-normal"
            style={{
              fontSize: 'clamp(0.95rem, 1.4vw, 1.05rem)',
              lineHeight: 1.55,
              maxWidth: '680px',
            }}
          >
            From residential to commercial, we handle all types of construction projects with excellence
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {expertiseList.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[18px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.09)] transition-all duration-300 flex flex-col group border border-[#E5E7EB]"
            >
              {/* Image Frame with centered icon badge */}
              <div className="relative w-full h-[210px] overflow-hidden bg-[#1A2530]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors duration-300" />

                {/* Centered Translucent Glass Icon Badge */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[54px] h-[54px] rounded-[14px] bg-black/40 backdrop-blur-md border border-white/25 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-[19px] sm:text-[20px] font-bold text-[#163048] mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[#556987] text-[13.5px] sm:text-[14px] leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => onOpenQuote(item.type)}
                    className="bg-[#4A2328] hover:bg-[#381a1e] active:scale-95 text-white font-semibold text-[13.5px] px-5 py-2.5 rounded-[8px] transition-all shadow-sm flex-shrink-0 cursor-pointer"
                  >
                    Get Quote
                  </button>
                  <button
                    type="button"
                    onClick={onNavigateToServices}
                    className="text-[#163048] hover:text-[#4A2328] font-semibold text-[13.5px] flex items-center gap-1.5 transition-colors cursor-pointer ml-1"
                  >
                    <span>Learn More</span>
                    <span className="text-[15px]">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurExpertise;
