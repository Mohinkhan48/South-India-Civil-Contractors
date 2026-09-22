import React from 'react';

interface PremiumPackageBannerProps {
  onNavigateToPremiumConstruction?: () => void;
  onOpenQuote?: (type?: string) => void;
}

const checkPoints = [
  'Premium branded materials only',
  'Complete end-to-end construction solution',
  'Transparent pricing with no hidden costs',
];

export const PremiumPackageBanner: React.FC<PremiumPackageBannerProps> = ({
  onNavigateToPremiumConstruction,
  onOpenQuote,
}) => {
  const handleClick = () => {
    if (onNavigateToPremiumConstruction) {
      onNavigateToPremiumConstruction();
    } else if (onOpenQuote) {
      onOpenQuote('Turnkey Construction');
    }
  };

  return (
    <section
      id="premium-package"
      className="w-full relative overflow-hidden bg-[#0C1926] py-24 sm:py-28 lg:py-32"
      style={{
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      {/* Background Architectural House with Seamless Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0 w-full h-full pointer-events-none">
        <img
          src="/images/The grand contemporary villa.png"
          alt="Premium Architecture Villa"
          className="w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background:
              'linear-gradient(110deg, rgba(12, 25, 38, 0.96) 0%, rgba(17, 24, 34, 0.90) 50%, rgba(48, 18, 26, 0.94) 100%)',
          }}
        />
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14 xl:gap-16">
          {/* Left Column — Package Info */}
          <div className="w-full lg:w-[48%] text-left">
            {/* Pill Badge */}
            <div className="inline-block mb-3.5">
              <span className="bg-[#484F59]/80 backdrop-blur-md text-white/95 text-[12.5px] font-semibold px-4 py-1.5 rounded-full border border-white/15">
                Premium Solution
              </span>
            </div>

            {/* Heading */}
            <h2
              className="font-bold tracking-tight text-white mb-2.5"
              style={{
                fontSize: 'clamp(2.3rem, 4vw, 3.25rem)',
                lineHeight: 1.15,
              }}
            >
              Premium Construction Package
            </h2>

            {/* Price Row */}
            <div className="flex items-baseline gap-2.5 mb-4">
              <span
                className="font-extrabold text-white tracking-tight leading-none"
                style={{ fontSize: 'clamp(36px, 4.5vw, 46px)' }}
              >
                ₹2,499
              </span>
              <span className="text-white/80 font-medium text-[16px] sm:text-[17px]">
                per sq ft
              </span>
            </div>

            {/* Description Paragraph */}
            <p className="text-white/80 text-[14.5px] sm:text-[15px] leading-relaxed mb-6 max-w-lg">
              Comprehensive construction solution with premium materials and expert craftsmanship. Everything you need for your dream home in one complete package.
            </p>

            {/* 3 Checkmark Feature Points */}
            <div className="space-y-3 mb-8">
              {checkPoints.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-white/90 text-[14px]">
                  <div className="w-[18px] h-[18px] rounded-full border border-white/35 flex items-center justify-center flex-shrink-0 text-white/90">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              type="button"
              onClick={handleClick}
              className="bg-[#414B57]/90 hover:bg-[#525E6E] active:scale-98 text-white font-semibold text-[14.5px] px-6 py-3 rounded-[8px] inline-flex items-center gap-2 shadow-lg transition-all cursor-pointer border border-white/15"
            >
              <span>Explore Package Details</span>
              <span className="text-[16px]">→</span>
            </button>
          </div>

          {/* Right Column — 4 Real Pristine White Cards with Interactive Logos */}
          <div className="w-full lg:w-[52%] flex items-stretch justify-center gap-4 sm:gap-5">
            {/* Column 1: Materials + Fixtures */}
            <div className="flex flex-col gap-4 sm:gap-5 w-1/2 max-w-[275px]">
              {/* Card 1: Premium Materials */}
              <div className="bg-white rounded-[16px] p-5 sm:p-6 shadow-[0_12px_32px_rgba(0,0,0,0.25)] flex flex-col justify-between flex-1 min-h-[205px] sm:min-h-[235px] transition-transform duration-300 hover:-translate-y-1">
                <div>
                  <div className="flex items-center gap-2 text-[#334155] mb-1">
                    <svg className="w-5 h-5 text-[#334155]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <rect x="4" y="2" width="16" height="20" rx="2" />
                      <line x1="9" y1="6" x2="9" y2="6.01" />
                      <line x1="15" y1="6" x2="15" y2="6.01" />
                      <line x1="9" y1="10" x2="9" y2="10.01" />
                      <line x1="15" y1="10" x2="15" y2="10.01" />
                    </svg>
                  </div>
                  <h4 className="text-[14px] font-semibold text-[#334155] mb-3">
                    Premium Materials
                  </h4>
                </div>

                {/* Individual Interactive Logos */}
                <div className="space-y-3 pt-1">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    {/* ACC */}
                    <div
                      className="bg-[#DC2626] text-white font-black text-[17.5px] sm:text-[18.5px] px-4 py-1.5 rounded-[6px] tracking-wider shadow-xs cursor-pointer transition-all duration-300 hover:scale-108 hover:brightness-115 hover:shadow-md select-none"
                      title="ACC Cement"
                    >
                      ACC
                    </div>
                    {/* Birla Super */}
                    <div
                      className="bg-[#0284C7] text-white text-[12px] sm:text-[13px] font-bold px-3 py-1.5 rounded-[6px] leading-tight shadow-xs cursor-pointer transition-all duration-300 hover:scale-108 hover:brightness-115 hover:shadow-md select-none flex flex-col items-center"
                      title="Birla Super 53 Grade Cement"
                    >
                      <span className="font-extrabold tracking-tight">BIRLA SUPER</span>
                      <span className="text-[9px] font-semibold tracking-wide opacity-90">53 GRADE CEMENT</span>
                    </div>
                  </div>

                  {/* Jindal Steel */}
                  <div
                    className="flex items-center gap-1.5 pt-1 cursor-pointer transition-all duration-300 hover:scale-108 hover:brightness-115 select-none w-fit"
                    title="Jindal Steel"
                  >
                    <span className="text-[#EA580C] text-[20px] sm:text-[22px] font-black tracking-tight">JINDAL</span>
                    <span className="text-[#1E293B] text-[12px] sm:text-[13px] font-extrabold tracking-widest">STEEL</span>
                  </div>
                </div>
              </div>

              {/* Card 3: Branded Fixtures */}
              <div className="bg-white rounded-[16px] p-5 sm:p-6 shadow-[0_12px_32px_rgba(0,0,0,0.25)] flex flex-col justify-between flex-1 min-h-[185px] sm:min-h-[210px] transition-transform duration-300 hover:-translate-y-1">
                <div>
                  <div className="flex items-center gap-2 text-[#334155] mb-1">
                    <svg className="w-5 h-5 text-[#334155]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                    </svg>
                  </div>
                  <h4 className="text-[14px] font-semibold text-[#334155] mb-3">
                    Branded Fixtures
                  </h4>
                </div>

                {/* Individual Interactive Logos */}
                <div className="space-y-3.5 pt-1">
                  <div className="flex items-center gap-3.5">
                    {/* Hindware */}
                    <div
                      className="bg-[#DC2626] text-white text-[15.5px] sm:text-[16.5px] font-bold px-3.5 py-1.5 rounded-[5px] shadow-xs cursor-pointer transition-all duration-300 hover:scale-108 hover:brightness-115 hover:shadow-md select-none"
                      title="Hindware"
                    >
                      hindware
                    </div>
                    {/* CERA */}
                    <div
                      className="text-[#1E3A8A] font-black text-[21px] sm:text-[23px] tracking-widest cursor-pointer transition-all duration-300 hover:scale-108 hover:brightness-115 select-none"
                      title="CERA"
                    >
                      CERA
                    </div>
                  </div>

                  {/* Jaquar */}
                  <div
                    className="text-[#0D9488] font-black text-[19px] sm:text-[21px] tracking-wider flex items-center gap-1.5 cursor-pointer transition-all duration-300 hover:scale-108 hover:brightness-115 select-none w-fit"
                    title="Jaquar"
                  >
                    <span className="text-[22px] leading-none">~</span>
                    <span>jaquar</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: Electrical + Painting */}
            <div className="flex flex-col gap-4 sm:gap-5 w-1/2 max-w-[275px]">
              {/* Card 2: Electrical */}
              <div className="bg-white rounded-[16px] p-5 sm:p-6 shadow-[0_12px_32px_rgba(0,0,0,0.25)] flex flex-col justify-between flex-1 min-h-[205px] sm:min-h-[235px] transition-transform duration-300 hover:-translate-y-1">
                <div>
                  <div className="flex items-center gap-2 text-[#334155] mb-1">
                    <svg className="w-5 h-5 text-[#334155]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                    </svg>
                  </div>
                  <h4 className="text-[14px] font-semibold text-[#334155] mb-3">
                    Electrical
                  </h4>
                </div>

                {/* Individual Interactive Logos - Stacked Vertically */}
                <div className="space-y-4 pt-1">
                  {/* Havells (Up) */}
                  <div
                    className="text-[#B91C1C] font-black text-[21px] sm:text-[23px] tracking-wider flex items-center gap-2 cursor-pointer transition-all duration-300 hover:scale-108 hover:brightness-115 select-none w-fit"
                    title="Havells"
                  >
                    <span className="text-[22px]">◈</span> HAVELLS
                  </div>
                  {/* Anchor (Bottom) */}
                  <div
                    className="flex flex-col text-left cursor-pointer transition-all duration-300 hover:scale-108 hover:brightness-115 select-none w-fit"
                    title="Anchor by Panasonic"
                  >
                    <span className="text-[#DC2626] text-[19px] sm:text-[21px] font-black tracking-wider leading-none">⚓ ANCHOR</span>
                    <span className="text-[12.5px] sm:text-[13px] text-[#64748B] font-bold mt-1">by Panasonic</span>
                  </div>
                </div>
              </div>

              {/* Card 4: Painting */}
              <div className="bg-white rounded-[16px] p-5 sm:p-6 shadow-[0_12px_32px_rgba(0,0,0,0.25)] flex flex-col justify-between flex-1 min-h-[185px] sm:min-h-[210px] transition-transform duration-300 hover:-translate-y-1">
                <div>
                  <div className="flex items-center gap-2 text-[#334155] mb-1">
                    <svg className="w-5 h-5 text-[#334155]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z" />
                      <path d="m5 2 5 5" />
                      <path d="M2 13h15" />
                      <path d="M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z" />
                    </svg>
                  </div>
                  <h4 className="text-[14px] font-semibold text-[#334155] mb-3">
                    Painting
                  </h4>
                </div>

                {/* Individual Interactive Logos - Stacked Vertically */}
                <div className="space-y-4 pt-1">
                  {/* Asian Paints (Up) */}
                  <div
                    className="flex items-center gap-2 cursor-pointer transition-all duration-300 hover:scale-108 hover:brightness-115 select-none w-fit"
                    title="Asian Paints"
                  >
                    <span className="text-[#EA580C] font-black text-[25px] sm:text-[27px] leading-none">ap</span>
                    <span className="text-[#DC2626] text-[20px] sm:text-[22px] font-black tracking-tight">asianpaints</span>
                  </div>
                  {/* Berger (Bottom) */}
                  <div
                    className="border border-[#DC2626]/40 bg-[#FEF2F2] px-4 py-1.5 rounded-[6px] text-[#DC2626] font-extrabold text-[16.5px] sm:text-[18px] tracking-wider shadow-xs cursor-pointer transition-all duration-300 hover:scale-108 hover:brightness-115 select-none w-fit"
                    title="Berger Paints"
                  >
                    Berger
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumPackageBanner;
