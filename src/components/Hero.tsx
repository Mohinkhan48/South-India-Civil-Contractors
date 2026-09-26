import React, { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenQuote: () => void;
  onNavigateToProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote, onNavigateToProjects }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().catch(() => { });
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ minHeight: '100vh' }}
      aria-label="Hero — South India Civil Contractors"
    >
      {/* ─── VIDEO LAYER ─────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center"
          aria-hidden="true"
          style={{
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
          }}
        >
          <source src="/videos/home video.mp4" type="video/mp4" />
        </video>

        {/* Cinematic gradient overlay — preserves text readability on left while keeping video crisp and HD */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background: `
              linear-gradient(to right, rgba(10, 18, 26, 0.68) 0%, rgba(10, 18, 26, 0.40) 45%, rgba(10, 18, 26, 0.12) 100%),
              linear-gradient(to bottom, rgba(10, 18, 26, 0.40) 0%, transparent 25%, rgba(10, 18, 26, 0.35) 100%)
            `,
          }}
        />
      </div>

      {/* ─── HERO CONTENT ────────────────────────────────────────────────────────── */}
      <div
        className="relative z-10 flex flex-col justify-start max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full pt-[110px] sm:pt-[clamp(160px,20vh,220px)] pb-16 sm:pb-20"
        style={{ minHeight: '100vh' }}
      >

        {/* Main Headline */}
        <h1
          className="font-extrabold text-white leading-[1.08] mb-7 sm:mb-8 tracking-tight text-[2.65rem] xs:text-[2.85rem] sm:text-[clamp(2.2rem,5vw,4.15rem)] sm:leading-[1.12]"
          style={{ maxWidth: '980px' }}
        >
          <span className="block sm:inline-block sm:whitespace-nowrap">
            <span className="block sm:inline">South India's</span>
            <span className="block sm:inline sm:ml-2.5">Most Trusted</span>
          </span>
          <br className="hidden sm:inline" />{' '}
          <span className="block sm:inline-block">Civil Contractors</span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-white/90 font-normal leading-relaxed mb-8 sm:mb-9 text-[15.5px] sm:text-[clamp(1.05rem,1.25vw,1.18rem)]"
          style={{ maxWidth: '640px' }}
        >
          End-to-end civil construction solutions across South India. From planning to execution, we deliver
          projects across all building types and sectors.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-4 w-full sm:w-auto max-w-full sm:max-w-none">
          {/* Get Free Consultation */}
          <button
            onClick={onOpenQuote}
            id="hero-cta-consultation"
            className="flex items-center justify-center gap-2.5 text-white font-bold text-base sm:text-[15.5px] tracking-wide px-6 sm:px-8 py-4 sm:py-3.5 rounded-[6px] transition-all duration-300 active:scale-95 cursor-pointer shadow-md w-full sm:w-auto"
            style={{ background: '#4A2328', border: 'none' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#381a1e')}
            onMouseLeave={e => (e.currentTarget.style.background = '#4A2328')}
          >
            <span>Get Free Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* View Our Projects */}
          <button
            onClick={onNavigateToProjects}
            id="hero-cta-projects"
            className="flex items-center justify-center text-white font-bold text-base sm:text-[15.5px] tracking-wide px-6 sm:px-8 py-4 sm:py-3.5 rounded-[6px] transition-all duration-300 active:scale-95 cursor-pointer w-full sm:w-auto"
            style={{ background: 'rgba(255,255,255,0.06)', border: '2px solid rgba(255,255,255,0.85)' }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.14)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.06)')}
          >
            <span>View Our Projects</span>
          </button>
        </div>

        {/* ─── THIN WHITE DIVIDER LINE ─── */}
        <div className="w-full max-w-[760px] h-[1px] bg-white/30 mt-9 mb-9 sm:mt-11 sm:mb-9 lg:mt-12" />

        {/* ─── STATS — immediately below line ─── */}
        <div className="grid grid-cols-2 gap-x-7 gap-y-8 sm:flex sm:flex-wrap sm:gap-x-16 lg:gap-x-20 sm:gap-y-7">

          {/* 1952 */}
          <div className="flex items-center gap-3 sm:gap-3.5">
            <svg className="w-7 h-7 sm:w-7 sm:h-7 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <div>
              <div className="text-white font-extrabold leading-tight tracking-tight text-[2.1rem] sm:text-[2rem]">1952</div>
              <div className="text-white/90 font-medium leading-tight mt-0.5 text-[13px] sm:text-[0.92rem]">Since 1952</div>
            </div>
          </div>

          {/* 117 */}
          <div className="flex items-center gap-3 sm:gap-3.5">
            <svg className="w-7 h-7 sm:w-7 sm:h-7 text-white flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="4" y="2" width="16" height="20" rx="1.5" />
              <line x1="8" y1="6" x2="10" y2="6" />
              <line x1="14" y1="6" x2="16" y2="6" />
              <line x1="8" y1="10" x2="10" y2="10" />
              <line x1="14" y1="10" x2="16" y2="10" />
              <line x1="8" y1="14" x2="10" y2="14" />
              <line x1="14" y1="14" x2="16" y2="14" />
              <line x1="8" y1="18" x2="10" y2="18" />
              <line x1="14" y1="18" x2="16" y2="18" />
            </svg>
            <div>
              <div className="text-white font-extrabold leading-tight tracking-tight text-[2.1rem] sm:text-[2rem]">117</div>
              <div className="text-white/90 font-medium leading-tight mt-0.5 text-[13px] sm:text-[0.92rem]">Projects Completed</div>
            </div>
          </div>

          {/* 435+ */}
          <div className="flex items-center gap-3 sm:gap-3.5">
            <svg className="w-7 h-7 sm:w-7 sm:h-7 text-white flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <div>
              <div className="text-white font-extrabold leading-tight tracking-tight text-[2.1rem] sm:text-[2rem]">435+</div>
              <div className="text-white/90 font-medium leading-tight mt-0.5 text-[13px] sm:text-[0.92rem]">Workforce</div>
            </div>
          </div>

          {/* 70+ */}
          <div className="flex items-center gap-3 sm:gap-3.5">
            <svg className="w-7 h-7 sm:w-7 sm:h-7 text-white flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="8" r="6" />
              <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
            </svg>
            <div>
              <div className="text-white font-extrabold leading-tight tracking-tight text-[2.1rem] sm:text-[2rem]">70+</div>
              <div className="text-white/90 font-medium leading-tight mt-0.5 text-[13px] sm:text-[0.92rem]">Years of Experience</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
