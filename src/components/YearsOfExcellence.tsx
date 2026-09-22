import React from 'react';

interface YearsOfExcellenceProps {
  onNavigateToAbout?: () => void;
}

const points = [
  'Certified and experienced team of professionals',
  'Advanced equipment and modern construction techniques',
  'Timely delivery and quality assurance',
];

export const YearsOfExcellence: React.FC<YearsOfExcellenceProps> = ({ onNavigateToAbout }) => {
  return (
    <section
      id="excellence"
      className="w-full relative overflow-hidden bg-white"
      style={{
        paddingTop: '96px',
        paddingBottom: '110px',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      {/* Giant Light Background Watermark "70+" Spanning Across Section */}
      <div
        className="absolute left-[3%] sm:left-[8%] lg:left-[12%] top-1/2 -translate-y-1/2 select-none pointer-events-none font-black text-[#163048]/[0.045] leading-none z-0"
        style={{
          fontSize: 'clamp(200px, 32vw, 420px)',
          letterSpacing: '-0.06em',
          fontWeight: 900,
        }}
        aria-hidden="true"
      >
        70+
      </div>

      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 xl:gap-20">
          {/* Left Column — Text & Stats */}
          <div className="w-full lg:w-[48%] flex-1 text-left relative">
            {/* Since Badge */}
            <div className="inline-block mb-3.5">
              <span className="bg-[#F3EFE6] text-[#4A2328] font-bold text-[12.5px] px-4 py-1.5 rounded-full tracking-wide">
                Since 1952
              </span>
            </div>

            {/* Giant Stat Row */}
            <div className="flex items-baseline gap-1.5 mb-2.5">
              <span
                className="font-extrabold text-[#4A2328] tracking-tight leading-none"
                style={{ fontSize: 'clamp(64px, 8vw, 88px)' }}
              >
                70
              </span>
              <div className="flex flex-col ml-1 justify-end pb-2">
                <span className="text-[30px] font-extrabold text-[#163048] leading-none mb-1">
                  +
                </span>
                <span className="text-[12px] font-extrabold tracking-[0.22em] text-[#163048] uppercase leading-none">
                  YEARS
                </span>
              </div>
            </div>

            {/* Section Title */}
            <h2
              className="font-bold tracking-tight text-[#163048] mb-4"
              style={{
                fontSize: 'clamp(2.25rem, 4vw, 3.25rem)',
                lineHeight: 1.15,
              }}
            >
              Years of Excellence
            </h2>

            {/* Description Paragraph */}
            <p className="text-[#556987] text-[15px] sm:text-[15.5px] leading-relaxed mb-7 max-w-xl">
              South India Civil Contractors (SICC) has been at the forefront of construction innovation since 1952. With a strong workforce of over 435 professionals and state-of-the-art equipment, we deliver projects that stand the test of time.
            </p>

            {/* 3 Checkmark Feature Points */}
            <div className="space-y-4 mb-8">
              {points.map((pt, i) => (
                <div key={i} className="flex items-center gap-3.5">
                  <div className="w-[22px] h-[22px] rounded-full border-[1.5px] border-[#4A2328] flex items-center justify-center flex-shrink-0 text-[#4A2328]">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[14.5px] text-[#334155] font-medium">
                    {pt}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              type="button"
              onClick={onNavigateToAbout}
              className="text-[#163048] hover:text-[#4A2328] font-bold text-[15px] inline-flex items-center gap-2 transition-colors cursor-pointer group"
            >
              <span>Learn More About Us</span>
              <span className="transition-transform group-hover:translate-x-1.5 text-[17px]">→</span>
            </button>
          </div>

          {/* Right Column — Large Team Image */}
          <div className="w-full lg:w-[52%] flex-1 flex justify-center lg:justify-end">
            <div className="w-full max-w-[620px] rounded-[24px] overflow-hidden shadow-[0_20px_50px_-10px_rgba(0,0,0,0.16)] border border-[#E5E7EB] bg-[#1A2530]">
              <img
                src="/images/Years of Excellence.png"
                alt="SICC Years of Excellence"
                className="w-full h-auto object-cover object-center transform hover:scale-102 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YearsOfExcellence;
