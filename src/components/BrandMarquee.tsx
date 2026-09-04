import React from 'react';

interface BrandItem {
  id: string;
  name: string;
  category: string;
  logoSvg: React.ReactNode;
}

export const brandListRow1: BrandItem[] = [
  {
    id: 'ultratech',
    name: 'UltraTech Cement',
    category: 'Cement & Concrete',
    logoSvg: (
      <svg className="h-8 sm:h-9 w-auto" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="UltraTech Cement">
        <rect width="200" height="60" rx="6" fill="#FBBF24" />
        <rect x="140" y="0" width="60" height="60" rx="6" fill="#1E293B" />
        <text x="14" y="38" fill="#1E293B" fontSize="22" fontWeight="900" fontFamily="sans-serif" letterSpacing="-0.5">UltraTech</text>
        <text x="148" y="38" fill="#FBBF24" fontSize="13" fontWeight="800" fontFamily="sans-serif">CEMENT</text>
      </svg>
    ),
  },
  {
    id: 'acc',
    name: 'ACC Cement',
    category: 'Cement',
    logoSvg: (
      <svg className="h-8 sm:h-9 w-auto" viewBox="0 0 140 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="ACC Cement">
        <rect width="140" height="60" rx="6" fill="#DC2626" />
        <text x="24" y="42" fill="#FFFFFF" fontSize="32" fontWeight="900" fontFamily="sans-serif" letterSpacing="2">ACC</text>
      </svg>
    ),
  },
  {
    id: 'jsw',
    name: 'JSW Steel',
    category: 'Structural Steel',
    logoSvg: (
      <svg className="h-8 sm:h-9 w-auto" viewBox="0 0 170 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="JSW Steel">
        <path d="M10 10 L30 10 L45 50 L25 50 Z" fill="#1E3A8A" />
        <path d="M35 10 L55 10 L70 50 L50 50 Z" fill="#DC2626" />
        <text x="76" y="35" fill="#1E293B" fontSize="22" fontWeight="900" fontFamily="sans-serif">JSW</text>
        <text x="76" y="48" fill="#9A6048" fontSize="11" fontWeight="700" fontFamily="sans-serif" letterSpacing="3">STEEL</text>
      </svg>
    ),
  },
  {
    id: 'tatatiscon',
    name: 'Tata Tiscon',
    category: 'Rebar Steel',
    logoSvg: (
      <svg className="h-8 sm:h-9 w-auto" viewBox="0 0 180 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Tata Tiscon">
        <circle cx="28" cy="30" r="20" fill="#0284C7" />
        <text x="22" y="37" fill="#FFFFFF" fontSize="20" fontWeight="900" fontFamily="sans-serif">T</text>
        <text x="56" y="32" fill="#0F172A" fontSize="18" fontWeight="800" fontFamily="sans-serif">TATA</text>
        <text x="56" y="48" fill="#0284C7" fontSize="15" fontWeight="900" fontFamily="sans-serif" letterSpacing="1">TISCON</text>
      </svg>
    ),
  },
  {
    id: 'jindal',
    name: 'Jindal Steel',
    category: 'TMT Steel',
    logoSvg: (
      <svg className="h-8 sm:h-9 w-auto" viewBox="0 0 180 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Jindal Steel">
        <rect width="180" height="60" rx="6" fill="#1E293B" />
        <text x="14" y="35" fill="#EA580C" fontSize="20" fontWeight="900" fontFamily="sans-serif">JINDAL</text>
        <text x="14" y="49" fill="#FFFFFF" fontSize="11" fontWeight="700" fontFamily="sans-serif" letterSpacing="3">STEEL & POWER</text>
      </svg>
    ),
  },
  {
    id: 'astral',
    name: 'Astral Pipes',
    category: 'Plumbing & Pipes',
    logoSvg: (
      <svg className="h-8 sm:h-9 w-auto" viewBox="0 0 170 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Astral Pipes">
        <text x="10" y="37" fill="#2563EB" fontSize="24" fontWeight="900" fontFamily="sans-serif" letterSpacing="1">ASTRAL</text>
        <text x="10" y="50" fill="#DC2626" fontSize="12" fontWeight="800" fontFamily="sans-serif" letterSpacing="4">PIPES</text>
      </svg>
    ),
  },
  {
    id: 'finolex',
    name: 'Finolex',
    category: 'Plumbing & Cables',
    logoSvg: (
      <svg className="h-8 sm:h-9 w-auto" viewBox="0 0 160 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Finolex">
        <text x="10" y="40" fill="#0284C7" fontSize="26" fontWeight="900" fontFamily="sans-serif" letterSpacing="-0.5">Finolex</text>
        <circle cx="140" cy="22" r="5" fill="#DC2626" />
      </svg>
    ),
  },
  {
    id: 'kajaria',
    name: 'Kajaria',
    category: 'Vitrified Tiles',
    logoSvg: (
      <svg className="h-8 sm:h-9 w-auto" viewBox="0 0 160 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Kajaria">
        <text x="10" y="38" fill="#B91C1C" fontSize="26" fontWeight="900" fontFamily="serif" letterSpacing="0.5">Kajaria</text>
        <text x="10" y="50" fill="#475569" fontSize="10" fontWeight="700" fontFamily="sans-serif" letterSpacing="3">TILES</text>
      </svg>
    ),
  },
];

export const brandListRow2: BrandItem[] = [
  {
    id: 'johnson',
    name: 'Johnson Tiles',
    category: 'Ceramic & Marble',
    logoSvg: (
      <svg className="h-8 sm:h-9 w-auto" viewBox="0 0 180 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Johnson Tiles">
        <text x="10" y="32" fill="#0F172A" fontSize="14" fontWeight="800" fontFamily="sans-serif" letterSpacing="2">H & R</text>
        <text x="10" y="50" fill="#DC2626" fontSize="20" fontWeight="900" fontFamily="sans-serif" letterSpacing="1">JOHNSON</text>
      </svg>
    ),
  },
  {
    id: 'hindware',
    name: 'Hindware',
    category: 'Sanitaryware',
    logoSvg: (
      <svg className="h-8 sm:h-9 w-auto" viewBox="0 0 170 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Hindware">
        <text x="10" y="40" fill="#991B1B" fontSize="25" fontWeight="900" fontFamily="sans-serif" letterSpacing="-0.5">hindware</text>
      </svg>
    ),
  },
  {
    id: 'cera',
    name: 'CERA',
    category: 'Bath Fittings',
    logoSvg: (
      <svg className="h-8 sm:h-9 w-auto" viewBox="0 0 140 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="CERA">
        <rect width="140" height="60" rx="6" fill="#1E3A8A" />
        <text x="20" y="42" fill="#FFFFFF" fontSize="30" fontWeight="900" fontFamily="sans-serif" letterSpacing="3">CERA</text>
      </svg>
    ),
  },
  {
    id: 'jaquar',
    name: 'Jaquar',
    category: 'Luxury Fittings',
    logoSvg: (
      <svg className="h-8 sm:h-9 w-auto" viewBox="0 0 160 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Jaquar">
        <text x="10" y="38" fill="#1E293B" fontSize="26" fontWeight="900" fontFamily="sans-serif" letterSpacing="1">jaquar</text>
        <text x="10" y="50" fill="#B78A55" fontSize="10" fontWeight="800" fontFamily="sans-serif" letterSpacing="3">BATH FITTINGS</text>
      </svg>
    ),
  },
  {
    id: 'havells',
    name: 'Havells',
    category: 'Electricals & Wires',
    logoSvg: (
      <svg className="h-8 sm:h-9 w-auto" viewBox="0 0 170 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Havells">
        <rect width="170" height="60" rx="6" fill="#B91C1C" />
        <text x="16" y="41" fill="#FFFFFF" fontSize="25" fontWeight="900" fontFamily="sans-serif" letterSpacing="2">HAVELLS</text>
      </svg>
    ),
  },
  {
    id: 'centuryply',
    name: 'CenturyPly',
    category: 'Plywood & Boards',
    logoSvg: (
      <svg className="h-8 sm:h-9 w-auto" viewBox="0 0 180 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="CenturyPly">
        <text x="10" y="34" fill="#C2410C" fontSize="22" fontWeight="900" fontFamily="sans-serif">CENTURY</text>
        <text x="10" y="49" fill="#1E293B" fontSize="14" fontWeight="900" fontFamily="sans-serif" letterSpacing="3">PLY</text>
      </svg>
    ),
  },
  {
    id: 'greenply',
    name: 'Greenply',
    category: 'Structural Plywood',
    logoSvg: (
      <svg className="h-8 sm:h-9 w-auto" viewBox="0 0 170 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Greenply">
        <rect width="170" height="60" rx="6" fill="#15803D" />
        <text x="18" y="41" fill="#FFFFFF" fontSize="24" fontWeight="900" fontFamily="sans-serif" letterSpacing="1">Greenply</text>
      </svg>
    ),
  },
  {
    id: 'ultratech-2',
    name: 'UltraTech Cement',
    category: 'Structural Concrete',
    logoSvg: (
      <svg className="h-8 sm:h-9 w-auto" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="UltraTech Cement">
        <rect width="200" height="60" rx="6" fill="#FBBF24" />
        <rect x="140" y="0" width="60" height="60" rx="6" fill="#1E293B" />
        <text x="14" y="38" fill="#1E293B" fontSize="22" fontWeight="900" fontFamily="sans-serif" letterSpacing="-0.5">UltraTech</text>
        <text x="148" y="38" fill="#FBBF24" fontSize="13" fontWeight="800" fontFamily="sans-serif">CEMENT</text>
      </svg>
    ),
  },
];

export const BrandMarquee: React.FC = () => {
  // Duplicate arrays to guarantee continuous seamless marquee loop with zero gaps
  const row1Duplicated = [...brandListRow1, ...brandListRow1, ...brandListRow1];
  const row2Duplicated = [...brandListRow2, ...brandListRow2, ...brandListRow2];

  return (
    <section className="py-20 lg:py-24 bg-[#F1E8DC] text-[#131D23] relative overflow-hidden border-t border-[#131D23]/10" aria-label="Materials & Brands We Trust">
      
      {/* Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center justify-center gap-3 mb-3">
          <div className="w-8 h-[2px] bg-[#9A6048]"></div>
          <span className="text-xs font-bold tracking-[0.24em] text-[#9A6048] uppercase">
            MATERIALS WE TRUST
          </span>
          <div className="w-8 h-[2px] bg-[#9A6048]"></div>
        </div>

        <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#131D23] tracking-tight leading-tight mb-4">
          Quality construction begins with quality materials.
        </h2>

        <p className="text-sm sm:text-base text-[#6F6256] max-w-2xl mx-auto leading-relaxed font-normal">
          Trusted materials and leading manufacturers selected for strength, durability and long-term performance across all our civil contracting projects.
        </p>
      </div>

      {/* ── CONTINUOUS MARQUEE SLIDER CONTAINER ── */}
      <div className="space-y-4 sm:space-y-6 overflow-hidden relative w-full">

        {/* Gradient edge masks to fade logos at screen boundaries */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#F1E8DC] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#F1E8DC] to-transparent z-10 pointer-events-none"></div>

        {/* ── ROW 1: RIGHT → LEFT ── */}
        <div className="flex overflow-hidden w-full">
          <div className="animate-marquee-left flex items-center gap-4 sm:gap-6">
            {row1Duplicated.map((brand, idx) => (
              <div
                key={`row1-${brand.id}-${idx}`}
                className="flex-shrink-0 bg-white/80 backdrop-blur-sm border border-[#131D23]/12 rounded-xl px-6 sm:px-8 py-4 sm:py-5 h-20 sm:h-24 flex items-center justify-center shadow-xs hover:border-[#9A6048] hover:shadow-md transition-all duration-300 group"
                title={`${brand.name} - ${brand.category}`}
              >
                <div className="flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
                  {brand.logoSvg}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── ROW 2: LEFT → RIGHT ── */}
        <div className="flex overflow-hidden w-full">
          <div className="animate-marquee-right flex items-center gap-4 sm:gap-6">
            {row2Duplicated.map((brand, idx) => (
              <div
                key={`row2-${brand.id}-${idx}`}
                className="flex-shrink-0 bg-white/80 backdrop-blur-sm border border-[#131D23]/12 rounded-xl px-6 sm:px-8 py-4 sm:py-5 h-20 sm:h-24 flex items-center justify-center shadow-xs hover:border-[#9A6048] hover:shadow-md transition-all duration-300 group"
                title={`${brand.name} - ${brand.category}`}
              >
                <div className="flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
                  {brand.logoSvg}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Disclaimer Note */}
      <div className="max-w-4xl mx-auto text-center px-4 mt-10">
        <p className="text-[11px] text-[#6F6256]/60 leading-relaxed italic">
          * Brand names and logos are registered trademarks of their respective manufacturers. Represented as trusted material specifications selected for civil contracting and building projects.
        </p>
      </div>

    </section>
  );
};
