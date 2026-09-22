import React from 'react';

interface BrandItem {
  id: string;
  name: string;
  category: string;
  logoSvg: React.ReactNode;
}

export const brandListRow1: BrandItem[] = [
  {
    id: 'tatatiscon',
    name: 'Tata Tiscon',
    category: 'Rebar Steel',
    logoSvg: (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-[#0284C7] flex items-center justify-center text-white font-black text-sm">
          T
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[14px] font-black tracking-wider text-[#0F172A] leading-tight">TATA</span>
          <span className="text-[12px] font-extrabold tracking-widest text-[#0284C7] leading-none">TISCON</span>
        </div>
      </div>
    ),
  },
  {
    id: 'jindal',
    name: 'Jindal Steel',
    category: 'TMT Steel',
    logoSvg: (
      <div className="bg-[#1E293B] px-3.5 py-2 rounded-[6px] flex flex-col items-center justify-center">
        <span className="text-[#EA580C] text-[13px] font-black tracking-wider leading-tight">JINDAL</span>
        <span className="text-white text-[8.5px] font-bold tracking-[0.2em] leading-none">STEEL & POWER</span>
      </div>
    ),
  },
  {
    id: 'astral',
    name: 'Astral Pipes',
    category: 'Plumbing & Pipes',
    logoSvg: (
      <div className="flex flex-col items-center justify-center">
        <span className="text-[#2563EB] text-[16px] font-black tracking-wider leading-tight">ASTRAL</span>
        <span className="text-[#DC2626] text-[9.5px] font-extrabold tracking-[0.25em] leading-none">PIPES</span>
      </div>
    ),
  },
  {
    id: 'finolex',
    name: 'Finolex',
    category: 'Plumbing & Cables',
    logoSvg: (
      <div className="flex items-center gap-1">
        <span className="text-[#0284C7] text-[18px] font-bold tracking-tight">Finolex</span>
        <span className="text-[#DC2626] text-[16px] font-bold">★</span>
      </div>
    ),
  },
  {
    id: 'kajaria',
    name: 'Kajaria',
    category: 'Vitrified Tiles',
    logoSvg: (
      <div className="flex flex-col items-center justify-center">
        <span className="text-[#B91C1C] text-[17px] font-serif font-bold tracking-wide leading-tight">Kajaria</span>
        <span className="text-[#64748B] text-[8.5px] font-bold tracking-[0.25em] leading-none">TILES</span>
      </div>
    ),
  },
  {
    id: 'ultratech',
    name: 'UltraTech Cement',
    category: 'Cement & Concrete',
    logoSvg: (
      <div className="flex rounded-[5px] overflow-hidden">
        <div className="bg-[#FBBF24] px-3 py-1.5 flex items-center">
          <span className="text-[#1E293B] text-[14px] font-black tracking-tight">UltraTech</span>
        </div>
        <div className="bg-[#1E293B] px-2 py-1.5 flex items-center">
          <span className="text-[#FBBF24] text-[9px] font-extrabold tracking-widest">CEMENT</span>
        </div>
      </div>
    ),
  },
  {
    id: 'acc',
    name: 'ACC Cement',
    category: 'Cement',
    logoSvg: (
      <div className="bg-[#DC2626] px-5 py-2 rounded-[6px] flex items-center justify-center shadow-xs">
        <span className="text-white text-[18px] font-black tracking-widest">ACC</span>
      </div>
    ),
  },
  {
    id: 'jsw',
    name: 'JSW Steel',
    category: 'Structural Steel',
    logoSvg: (
      <div className="flex items-center gap-2">
        <div className="flex -space-x-1">
          <div className="w-2.5 h-6 bg-[#1E3A8A] transform -skew-x-12" />
          <div className="w-2.5 h-6 bg-[#DC2626] transform -skew-x-12" />
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[#1E293B] text-[14px] font-black leading-tight">JSW</span>
          <span className="text-[#9A6048] text-[8.5px] font-bold tracking-widest leading-none">STEEL</span>
        </div>
      </div>
    ),
  },
];

export const brandListRow2: BrandItem[] = [
  {
    id: 'cera',
    name: 'CERA',
    category: 'Bath Fittings',
    logoSvg: (
      <div className="bg-[#1E3A8A] px-4 py-2 rounded-[6px] flex items-center justify-center">
        <span className="text-white text-[16px] font-black tracking-widest">CERA</span>
      </div>
    ),
  },
  {
    id: 'jaquar',
    name: 'Jaquar',
    category: 'Luxury Fittings',
    logoSvg: (
      <div className="flex flex-col items-center justify-center">
        <span className="text-[#1E293B] text-[17px] font-extrabold tracking-wide leading-tight">jaquar</span>
        <span className="text-[#B78A55] text-[7.5px] font-black tracking-[0.25em] leading-none">BATH FITTINGS</span>
      </div>
    ),
  },
  {
    id: 'havells',
    name: 'Havells',
    category: 'Electricals & Wires',
    logoSvg: (
      <div className="bg-[#B91C1C] px-4 py-1.5 rounded-[5px] flex items-center justify-center">
        <span className="text-white text-[14px] font-black tracking-widest">HAVELLS</span>
      </div>
    ),
  },
  {
    id: 'centuryply',
    name: 'CenturyPly',
    category: 'Plywood & Boards',
    logoSvg: (
      <div className="flex flex-col items-center justify-center">
        <span className="text-[#C2410C] text-[14px] font-black tracking-wider leading-tight">CENTURY</span>
        <span className="text-[#1E293B] text-[10px] font-black tracking-widest leading-none">PLY</span>
      </div>
    ),
  },
  {
    id: 'greenply',
    name: 'Greenply',
    category: 'Structural Plywood',
    logoSvg: (
      <div className="bg-[#15803D] px-3.5 py-1.5 rounded-[5px] flex items-center justify-center">
        <span className="text-white text-[14px] font-bold tracking-wide">Greenply</span>
      </div>
    ),
  },
  {
    id: 'ultratech-2',
    name: 'UltraTech Cement',
    category: 'Structural Concrete',
    logoSvg: (
      <div className="flex rounded-[5px] overflow-hidden">
        <div className="bg-[#FBBF24] px-3 py-1.5 flex items-center">
          <span className="text-[#1E293B] text-[14px] font-black tracking-tight">UltraTech</span>
        </div>
        <div className="bg-[#1E293B] px-2 py-1.5 flex items-center">
          <span className="text-[#FBBF24] text-[9px] font-extrabold tracking-widest">CEMENT</span>
        </div>
      </div>
    ),
  },
  {
    id: 'johnson',
    name: 'Johnson Tiles',
    category: 'Ceramic & Marble',
    logoSvg: (
      <div className="flex flex-col items-center justify-center">
        <span className="text-[#0F172A] text-[9px] font-extrabold tracking-[0.2em] leading-tight">H & R</span>
        <span className="text-[#DC2626] text-[13px] font-black tracking-wider leading-none">JOHNSON</span>
      </div>
    ),
  },
  {
    id: 'hindware',
    name: 'Hindware',
    category: 'Sanitaryware',
    logoSvg: (
      <div className="flex items-center justify-center">
        <span className="text-[#991B1B] text-[17px] font-bold tracking-tight">hindware</span>
      </div>
    ),
  },
];

export const BrandMarquee: React.FC = () => {
  const row1Duplicated = [...brandListRow1, ...brandListRow1, ...brandListRow1, ...brandListRow1];
  const row2Duplicated = [...brandListRow2, ...brandListRow2, ...brandListRow2, ...brandListRow2];

  return (
    <section
      id="brands"
      className="py-16 sm:py-20 relative overflow-hidden"
      style={{
        backgroundColor: '#F3EFE6',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
      aria-label="Brands We Work With"
    >
      <style>{`
        @keyframes marqueeLeft {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee-left {
          display: flex;
          width: max-content;
          animation: marqueeLeft 38s linear infinite;
        }
        .animate-marquee-left:hover,
        .animate-marquee-right:hover {
          animation-play-state: paused;
        }
        .animate-marquee-right {
          display: flex;
          width: max-content;
          animation: marqueeRight 38s linear infinite;
        }
      `}</style>

      {/* Header */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10 sm:mb-14">
        <h2
          className="font-bold tracking-tight text-[#163048]"
          style={{
            fontSize: 'clamp(2rem, 3.8vw, 2.75rem)',
            lineHeight: 1.2,
            marginBottom: '14px',
          }}
        >
          Premium Brands We Use
        </h2>

        <p
          className="text-[#4E5D70] mx-auto"
          style={{
            fontSize: 'clamp(0.875rem, 1.4vw, 0.975rem)',
            lineHeight: 1.6,
            maxWidth: '680px',
          }}
        >
          Only the finest branded materials for lasting quality and durability
        </p>
      </div>

      {/* Marquee Tracks with Smooth Gradient Edge Masks (Edge-to-Edge Full Screen Bleed) */}
      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] space-y-5 sm:space-y-6 overflow-hidden py-2">
        {/* Side fade masks */}
        <div
          className="absolute top-0 bottom-0 left-0 w-20 sm:w-40 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #F3EFE6, transparent)' }}
        />
        <div
          className="absolute top-0 bottom-0 right-0 w-20 sm:w-40 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #F3EFE6, transparent)' }}
        />

        {/* ROW 1: Moves Left */}
        <div className="flex overflow-hidden w-full">
          <div className="animate-marquee-left flex items-center gap-5 sm:gap-7">
            {row1Duplicated.map((brand, idx) => (
              <div
                key={`r1-${brand.id}-${idx}`}
                className="flex-shrink-0 bg-white rounded-2xl px-8 sm:px-10 py-4.5 sm:py-5 min-h-[80px] sm:min-h-[88px] min-w-[210px] sm:min-w-[250px] flex items-center justify-center shadow-sm border border-[#EAE3D6] hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
                title={`${brand.name} - ${brand.category}`}
              >
                {brand.logoSvg}
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2: Moves Right */}
        <div className="flex overflow-hidden w-full">
          <div className="animate-marquee-right flex items-center gap-5 sm:gap-7">
            {row2Duplicated.map((brand, idx) => (
              <div
                key={`r2-${brand.id}-${idx}`}
                className="flex-shrink-0 bg-white rounded-2xl px-8 sm:px-10 py-4.5 sm:py-5 min-h-[80px] sm:min-h-[88px] min-w-[210px] sm:min-w-[250px] flex items-center justify-center shadow-sm border border-[#EAE3D6] hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
                title={`${brand.name} - ${brand.category}`}
              >
                {brand.logoSvg}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandMarquee;
