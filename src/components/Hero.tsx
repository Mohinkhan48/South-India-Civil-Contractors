import React, { useRef, useEffect } from 'react';
import { siteConfig } from '../config/site';
import { ArrowRight, Sparkles, ChevronDown } from 'lucide-react';

interface HeroProps {
  onOpenQuote: () => void;
  onNavigateToProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote: _onOpenQuote, onNavigateToProjects }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().catch(() => {});
    }
  }, []);

  const trustMetrics = [
    { value: siteConfig.yearsOfExperience, label: 'Years Experience' },
    { value: siteConfig.projectsCompleted, label: 'Projects Completed' },
    { value: siteConfig.happyClients, label: 'Happy Clients' },
    { value: '100%', label: 'Quality Commitment' },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] lg:min-h-screen flex flex-col overflow-hidden bg-[#131D23]"
      aria-label="Hero — South India Civil Contractors"
    >
      {/* ─── CINEMATIC VIDEO LAYER ────────────────────────────────────────────── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center opacity-100"
          aria-hidden="true"
        >
          <source
            src="/videos/hero_construction_building.mp4"
            type="video/mp4"
          />
          <source
            src="/videos/hero_skyscraper_glass.mp4"
            type="video/mp4"
          />
          <source
            src="/videos/building_2887460.mp4"
            type="video/mp4"
          />
        </video>

        {/* ── Gradient Overlays ──
            Left-heavy warm gradient so hero text reads clearly.
            Right side stays lighter so property remains fully visible.
            Top and bottom edges darkened for polish.
        */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background: `
              linear-gradient(
                to right,
                rgba(28, 21, 16, 0.88) 0%,
                rgba(28, 21, 16, 0.65) 38%,
                rgba(28, 21, 16, 0.22) 65%,
                rgba(28, 21, 16, 0.10) 100%
              )
            `,
          }}
        />
        {/* Top edge fade (behind nav) */}
        <div
          className="absolute inset-x-0 top-0 h-40 pointer-events-none"
          aria-hidden="true"
          style={{ background: 'linear-gradient(to bottom, rgba(28, 21, 16, 0.72) 0%, transparent 100%)' }}
        />
        {/* Bottom edge fade (into stats strip) */}
        <div
          className="absolute inset-x-0 bottom-0 h-48 pointer-events-none"
          aria-hidden="true"
          style={{ background: 'linear-gradient(to top, rgba(28, 21, 16, 0.80) 0%, transparent 100%)' }}
        />
        {/* Subtle warm tint for architectural identity */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{ background: 'rgba(60, 30, 10, 0.08)', mixBlendMode: 'multiply' }}
        />
      </div>

      {/* ─── HERO TEXT CONTENT ────────────────────────────────────────────────── */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-8 lg:pt-40 lg:pb-16">
        <div className="max-w-2xl lg:max-w-3xl">

          {/* Eyebrow Label */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-5 sm:mb-7 slide-up">
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.26em] text-[#B78A55] uppercase">
              SOUTH INDIA CIVIL CONTRACTORS
            </span>
            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-[#9A6048]"></div>
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.18em] text-[#D4C9BC] uppercase flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-[#B78A55]" />
              {siteConfig.tagline}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif-heading text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-7xl font-bold text-[#EDE3D3] leading-[1.08] tracking-tight mb-5 sm:mb-7 slide-up slide-up-delay-1">
            Building Strong
            <br />
            Foundations.
            <br />
            <span className="italic font-normal text-[#B78A55]">
              Creating Lasting{' '}
              <span className="not-italic font-bold text-[#DCCDBA]">
                Legacies.
              </span>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-sm sm:text-base md:text-lg text-[#D4C9BC]/90 font-normal leading-relaxed mb-9 sm:mb-11 max-w-xl slide-up slide-up-delay-2">
            {siteConfig.heroSubheadline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 slide-up slide-up-delay-3">
            <a
              href="#services"
              id="hero-cta-services"
              className="bg-[#9A6048] hover:bg-[#86513B] text-[#EDE3D3] font-bold text-xs sm:text-sm tracking-wider uppercase px-7 py-4 rounded-sm shadow-xl hover:shadow-terracotta-glow transition-all duration-300 flex items-center justify-center gap-2.5 group active:scale-95"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <button
              onClick={onNavigateToProjects}
              id="hero-cta-projects"
              className="bg-transparent hover:bg-white/10 text-[#EDE3D3] font-semibold text-xs sm:text-sm tracking-wider uppercase px-7 py-4 rounded-sm border border-[#EDE3D3]/45 hover:border-[#EDE3D3]/80 transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 backdrop-blur-sm"
            >
              <span>View Our Projects</span>
            </button>
          </div>

        </div>
      </div>

      {/* ─── TRUST STRIP (transparent, floats above video) ───────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-6 sm:pb-8">
        <div className="border-t border-[#EDE3D3]/18 pt-5">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-4 sm:gap-6">
            {trustMetrics.map((metric, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#9A6048] flex-shrink-0"></div>
                <div>
                  <div className="font-serif-heading text-xl sm:text-2xl font-bold text-[#EDE3D3] tracking-tight leading-tight">
                    {metric.value}
                  </div>
                  <div className="text-[10px] sm:text-xs text-[#D4C9BC]/80 font-medium tracking-wide leading-tight">
                    {metric.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── SCROLL INDICATOR ─────────────────────────────────────────────────── */}
      <div className="absolute bottom-6 right-6 z-10 hidden lg:flex flex-col items-center gap-2 animate-bounce">
        <ChevronDown className="w-5 h-5 text-[#EDE3D3]/50" />
      </div>

    </section>
  );
};
