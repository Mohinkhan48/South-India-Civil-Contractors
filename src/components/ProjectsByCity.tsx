import React from 'react';
import { MapPin, ArrowUpRight } from 'lucide-react';

interface ProjectsByCityProps {
  onSelectCity: (city: string) => void;
}

export interface CityCardData {
  id: string;
  city: string;
  state: string;
  supportingText: string;
  image: string;
  altText: string;
}

export const cityCards: CityCardData[] = [
  {
    id: 'bangalore',
    city: 'Bangalore',
    state: 'Karnataka',
    supportingText: 'Residential & Commercial Projects',
    image: '/images/project_villa.jpg',
    altText: 'Modern luxury villa construction project in Bangalore',
  },
  {
    id: 'chennai',
    city: 'Chennai',
    state: 'Tamil Nadu',
    supportingText: 'Residential & Commercial Projects',
    image: '/images/project_commercial.jpg',
    altText: 'Commercial building construction project in Chennai',
  },
  {
    id: 'hyderabad',
    city: 'Hyderabad',
    state: 'Telangana',
    supportingText: 'Residential & Commercial Projects',
    image: '/images/project_apartment.jpg',
    altText: 'Modern residential construction project in Hyderabad',
  },
  {
    id: 'kochi',
    city: 'Kochi',
    state: 'Kerala',
    supportingText: 'Residential & Turnkey Projects',
    image: '/images/project_waterfront.jpg',
    altText: 'Luxury villa construction project in Kochi',
  },
  {
    id: 'mysore',
    city: 'Mysore',
    state: 'Karnataka',
    supportingText: 'Residential & Civil Projects',
    image: '/images/why_us_arch.jpg',
    altText: 'Residential construction project in Mysore',
  },
  {
    id: 'coimbatore',
    city: 'Coimbatore',
    state: 'Tamil Nadu',
    supportingText: 'Residential & Commercial Projects',
    image: '/images/about_craft.jpg',
    altText: 'Modern building construction project in Coimbatore',
  },
];

export const ProjectsByCity: React.FC<ProjectsByCityProps> = ({ onSelectCity }) => {
  return (
    <section id="projects-by-city" className="pt-20 pb-8 lg:pt-28 lg:pb-10 bg-[#131D23] text-[#EDE3D3] relative overflow-hidden border-t border-[#EDE3D3]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-[#9A6048]"></div>
            <span className="text-xs font-bold tracking-[0.24em] text-[#B78A55] uppercase">
              SOUTH INDIA COVERAGE
            </span>
            <div className="w-8 h-[2px] bg-[#9A6048]"></div>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#EDE3D3] tracking-tight leading-tight mb-4">
            Projects By City
          </h2>

          <p className="text-sm sm:text-base text-[#D4C9BC] max-w-2xl mx-auto leading-relaxed font-normal">
            Explore our construction portfolio across major cities in South India, featuring residential, commercial, turnkey and civil construction projects.
          </p>
        </div>

        {/* 6 City Cards Responsive Grid (3 col desktop, 2 col tablet, 1 col mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cityCards.map((card) => (
            <article
              key={card.id}
              onClick={() => onSelectCity(card.city)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer border border-[#EDE3D3]/14 bg-[#1C1510] shadow-editorial-dark card-popup-hover focus:outline-none"
              tabIndex={0}
              role="button"
              aria-label={`View construction projects in ${card.city}, ${card.state}`}
            >
              {/* Larger Architectural Image Container */}
              <div className="relative h-[320px] sm:h-[360px] lg:h-[390px] w-full overflow-hidden bg-[#1C1510]">
                <img
                  src={card.image}
                  alt={card.altText}
                  className="w-full h-full object-cover object-center transform group-hover:scale-[1.05] transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1510] via-[#1C1510]/50 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500"></div>

                {/* Top Location Badge */}
                <div className="absolute top-5 left-5 z-10">
                  <span className="inline-flex items-center gap-1.5 bg-[#1C1510]/85 backdrop-blur-md text-[#EDE3D3] text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-[#EDE3D3]/20 shadow-md">
                    <MapPin className="w-3.5 h-3.5 text-[#B78A55]" />
                    {card.state}
                  </span>
                </div>

                {/* Card Bottom Info Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7 z-10 flex items-end justify-between gap-4">
                  <div>
                    {/* City Name (H3) */}
                    <h3 className="font-serif-heading text-3xl sm:text-4xl lg:text-[2.25rem] font-bold text-[#EDE3D3] group-hover:text-[#B78A55] transition-colors leading-tight mb-1.5">
                      {card.city}
                    </h3>

                    {/* Supporting Project Category Text */}
                    <p className="text-xs sm:text-sm text-[#D4C9BC] font-medium tracking-wide">
                      {card.supportingText}
                    </p>
                  </div>

                  {/* Circular Arrow Button */}
                  <div className="w-12 h-12 rounded-full bg-[#9A6048] text-[#EDE3D3] group-hover:bg-[#B78A55] flex items-center justify-center flex-shrink-0 shadow-xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <ArrowUpRight className="w-6 h-6 stroke-[2.2]" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
