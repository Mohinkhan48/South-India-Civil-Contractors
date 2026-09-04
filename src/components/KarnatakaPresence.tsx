import React, { useState, useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';

interface KarnatakaPresenceProps {
  onSelectCity?: (city: string) => void;
  onOpenQuote?: () => void;
}

export const KarnatakaPresence: React.FC<KarnatakaPresenceProps> = () => {
  // Counter animation state
  const [isVisible, setIsVisible] = useState(false);
  const [countPercent, setCountPercent] = useState(0);
  const [countProjects, setCountProjects] = useState(0);
  const [countCities, setCountCities] = useState(0);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Intersection Observer for viewport count-up trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Count up animation logic
  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 50;
    const stepTime = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeProgress = 1 - Math.pow(1 - progress, 3); // Easing out cubic

      setCountPercent(Math.min(100, Math.round(easeProgress * 100)));
      setCountProjects(Math.min(200, Math.round(easeProgress * 200)));
      setCountCities(Math.min(30, Math.round(easeProgress * 30)));

      if (step >= steps) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <section
      id="projects-by-city"
      ref={sectionRef}
      className="py-20 lg:py-28 bg-[#131D23] text-[#EDE3D3] relative overflow-hidden border-t border-[#B78A55]/20 selection:bg-[#B78A55]/30"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#B78A55]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ── TOP SECTION HEADER ── */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-[#B78A55]"></div>
            <span className="text-xs font-bold tracking-[0.3em] text-[#B78A55] uppercase">
              OUR PRESENCE
            </span>
            <div className="w-8 h-[1px] bg-[#B78A55]"></div>
          </div>

          <h2 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[#EDE3D3] tracking-tight leading-tight mb-4">
            Building Across Karnataka
          </h2>

          <p className="text-sm sm:text-base text-[#D4C9BC]/80 max-w-2xl mx-auto leading-relaxed font-normal">
            Delivering quality construction services to homes, businesses and communities across the state.
          </p>
        </div>

        {/* ── MAIN 2-COLUMN GRID (Map Image 55%, Stats 45%) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ── LEFT COLUMN: KARNATAKA MAP IMAGE DISPLAY ── */}
          <div className="lg:col-span-7 relative flex justify-center items-center w-full">
            <div className="relative w-full max-w-[540px] overflow-hidden rounded-2xl border border-[#B78A55]/30 shadow-2xl group">
              <img
                src="/images/karnataka_map_presence.jpg"
                alt="South India Civil Contractors Karnataka Construction Presence Map"
                className="w-full h-auto object-cover object-center transform group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-[#B78A55]/20 rounded-2xl pointer-events-none"></div>
            </div>
          </div>

          {/* ── RIGHT COLUMN: EDITORIAL STATISTICS ── */}
          <div className="lg:col-span-5 space-y-10 lg:pl-6">
            
            {/* Stat 1: 100% */}
            <div className="group">
              <div className="font-serif-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-[#B78A55] leading-none mb-3 tracking-tight">
                {countPercent}%
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#EDE3D3] mb-1 tracking-wide">
                Karnataka Focused
              </h3>
              <p className="text-xs sm:text-sm text-[#D4C9BC]/75 leading-relaxed">
                Local expertise. Better understanding.
              </p>
              <div className="mt-8 h-[1px] w-full bg-gradient-to-r from-[#B78A55]/40 via-[#B78A55]/15 to-transparent"></div>
            </div>

            {/* Stat 2: 200+ */}
            <div className="group">
              <div className="font-serif-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-[#B78A55] leading-none mb-3 tracking-tight">
                {countProjects}+
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#EDE3D3] mb-1 tracking-wide">
                Completed Projects
              </h3>
              <p className="text-xs sm:text-sm text-[#D4C9BC]/75 leading-relaxed">
                Homes, villas, apartments & commercial spaces.
              </p>
              <div className="mt-8 h-[1px] w-full bg-gradient-to-r from-[#B78A55]/40 via-[#B78A55]/15 to-transparent"></div>
            </div>

            {/* Stat 3: 30+ */}
            <div className="group">
              <div className="font-serif-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-[#B78A55] leading-none mb-3 tracking-tight">
                {countCities}+
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#EDE3D3] mb-1 tracking-wide">
                Cities Served
              </h3>
              <p className="text-xs sm:text-sm text-[#D4C9BC]/75 leading-relaxed">
                Expanding our footprint every day
              </p>
            </div>

            {/* NON-CLICKABLE DECORATIVE BUTTON & SUBTITLE */}
            <div className="pt-4 space-y-3">
              <button
                type="button"
                onClick={(e) => e.preventDefault()}
                aria-label="View all locations list"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-sm border border-[#B78A55] text-[#EDE3D3] font-semibold text-xs sm:text-sm tracking-[0.2em] uppercase hover:bg-[#B78A55] hover:text-[#131D23] transition-all duration-300 group shadow-lg cursor-default select-none"
              >
                <MapPin className="w-4 h-4 text-[#B78A55] group-hover:text-[#131D23] transition-colors" />
                <span>VIEW ALL LOCATIONS</span>
              </button>

              <p className="text-xs text-[#D4C9BC]/60 tracking-wider">
                See all the cities we are present in
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
