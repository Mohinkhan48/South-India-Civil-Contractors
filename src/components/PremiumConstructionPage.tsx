import React, { useState, useEffect } from 'react';
import { siteConfig } from '../config/site';
import {
  CheckCircle2,
  ArrowRight,
  Download,
  Building2,
  Wrench,
  ChevronLeft,
  ChevronRight,
  FileText,
  Zap,
  ShieldCheck,
  Paintbrush,
  Award,
  DollarSign,
  X,
} from 'lucide-react';

interface PremiumConstructionPageProps {
  onNavigateHome: () => void;
  onOpenQuote: () => void;
  onOpenDownloadModal?: (pkgName?: string) => void;
  onNavigateToServices?: () => void;
  onNavigateToProjects?: () => void;
}

export const PremiumConstructionPage: React.FC<PremiumConstructionPageProps> = ({
  onNavigateHome: _onNavigateHome,
  onOpenQuote,
  onOpenDownloadModal,
  onNavigateToServices: _onNavigateToServices,
  onNavigateToProjects,
}) => {
  const [activeLightboxImage, setActiveLightboxImage] = useState<string | null>(null);
  const canonicalUrl = `${siteConfig.siteUrl}/premium-construction`;

  useEffect(() => {
    document.title = 'Premium Construction Package (₹2,499/sq.ft) | South India Civil Contractors';
    window.scrollTo({ top: 0, behavior: 'smooth' });

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      'content',
      'Comprehensive Premium Construction Solution at ₹2,499/sq.ft by South India Civil Contractors — premium branded materials, transparent pricing, and expert civil engineering.'
    );

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);
  }, [canonicalUrl]);

  // Project Types Slider State (4 Pages of 3 Cards each)
  const [activeProjectPage, setActiveProjectPage] = useState(0);

  const projectPages = [
    // Page 1 (Screenshot 1)
    [
      {
        id: 'apartment',
        title: 'Apartment Project',
        desc: 'Comprehensive civil contracting services for residential apartment complexes, from foundation to finishing.',
        image: '/images/Apartment Project.png',
        features: [
          'Multi-story construction',
          'Modern amenities installation',
          'Quality assurance',
        ],
      },
      {
        id: 'bungalow',
        title: 'Bungalow Building',
        desc: 'Specialized services for luxury bungalow construction with attention to architectural details.',
        image: '/images/The grand contemporary villa.png',
        features: [
          'Custom design execution',
          'Premium materials',
          'Landscape integration',
        ],
      },
      {
        id: 'commercial',
        title: 'Commercial Building',
        desc: 'Professional commercial construction services for offices, retail spaces, and business complexes.',
        image: '/images/Commercial Building.png',
        features: [
          'Code compliance',
          'Modern infrastructure',
          'Energy efficiency',
        ],
      },
    ],
    // Page 2 (Screenshot 2)
    [
      {
        id: 'college',
        title: 'College Building',
        desc: 'Educational facility construction with focus on functionality and student safety.',
        image: '/images/College Building.png',
        features: [
          'Large-scale projects',
          'Safety standards',
          'Sustainable design',
        ],
      },
      {
        id: 'highrise',
        title: 'High Rise Project',
        desc: 'Expert high-rise construction services with advanced engineering and safety protocols.',
        image: '/images/High Rise Project.png',
        features: [
          'Structural engineering',
          'Advanced safety systems',
          'Vertical construction',
        ],
      },
      {
        id: 'hospital',
        title: 'Hospital Project',
        desc: 'Healthcare facility construction meeting stringent medical and safety requirements.',
        image: '/images/Hospital Project.png',
        features: [
          'Medical standards',
          'Specialized infrastructure',
          'Infection control',
        ],
      },
    ],
    // Page 3 (Screenshot 3)
    [
      {
        id: 'hotel',
        title: 'Hotel Project',
        desc: 'Hospitality construction services for hotels and resorts with premium finishes.',
        image: '/images/Hotel Project.png',
        features: [
          'Guest comfort focus',
          'Luxury finishes',
          'Amenity installation',
        ],
      },
      {
        id: 'pg',
        title: 'PG Building',
        desc: 'Paying guest accommodation construction optimized for comfort and efficiency.',
        image: '/images/PG Building.png',
        features: [
          'Space optimization',
          'Multiple units',
          'Cost-effective design',
        ],
      },
      {
        id: 'renovation',
        title: 'Renovation Work',
        desc: 'Expert renovation and remodeling services for existing structures.',
        image: '/images/Renovation Work.png',
        features: [
          'Minimal disruption',
          'Modern upgrades',
          'Structural repairs',
        ],
      },
    ],
    // Page 4 (Screenshot 4)
    [
      {
        id: 'renovation-4',
        title: 'Renovation Work',
        desc: 'Expert renovation and remodeling services for existing structures.',
        image: '/images/Renovation Work.png',
        features: [
          'Minimal disruption',
          'Modern upgrades',
          'Structural repairs',
        ],
      },
      {
        id: 'residential',
        title: 'Residential Building',
        desc: 'Complete residential construction services for homes and housing projects.',
        image: '/images/Residential Building.png',
        features: [
          'Custom homes',
          'Quality construction',
          'Timely delivery',
        ],
      },
      {
        id: 'villa',
        title: 'Villa Building',
        desc: 'Luxury villa construction with premium materials and exclusive designs.',
        image: '/images/Contemporary Courtyard Residence.png',
        features: [
          'Luxury finishes',
          'Landscape design',
          'Smart home integration',
        ],
      },
    ],
  ];

  const handlePrevProject = () => {
    setActiveProjectPage((prev) => (prev === 0 ? projectPages.length - 1 : prev - 1));
  };

  const handleNextProject = () => {
    setActiveProjectPage((prev) => (prev === projectPages.length - 1 ? 0 : prev + 1));
  };

  // 4 Foundation Cards
  const foundationItems = [
    {
      title: 'Architectural Design',
      desc: 'Professional architectural planning and design services',
    },
    {
      title: 'ACC Birla Super Cement',
      desc: 'Premium grade cement for superior strength',
    },
    {
      title: 'Jindal/Turbo Steel',
      desc: 'High-quality TMT bars for structural integrity',
    },
    {
      title: 'Quality Sand',
      desc: 'M sand and P sand for optimal construction quality',
    },
  ];

  return (
    <main className="min-h-screen bg-[#FAF5EE] text-[#163048]">
      
      {/* ──────────────────────────────────────────────────────────
          SECTION 1: HERO (Image 1)
      ────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center justify-center py-28 lg:py-36 text-center">
        {/* Background Image with Dark Vignette */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero_residence.jpg"
            alt="Premium Construction Villa"
            className="w-full h-full object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#142636]/90 via-[#162D42]/85 to-[#1A344D]/95"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6 pt-12">
          <div className="space-y-2">
            <h1 className="font-sans text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
              Premium Construction<br />Package
            </h1>
          </div>

          <div className="flex items-baseline justify-center gap-2 pt-2">
            <span className="font-sans text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight">
              ₹2,499
            </span>
            <span className="text-xl sm:text-2xl text-gray-200 font-medium">
              per sq ft
            </span>
          </div>

          <p className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed font-normal">
            Comprehensive construction solution with premium materials and expert craftsmanship
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <button
              onClick={() => { console.log('[PremiumPage] Get Quote clicked, calling onOpenQuote'); onOpenQuote(); }}
              className="bg-[#4A2026] hover:bg-[#3B191E] text-white font-semibold text-sm sm:text-base py-4 px-8 rounded-lg shadow-lg transition-all duration-300 flex items-center gap-2 active:scale-95 cursor-pointer"
            >
              <span>Get Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onOpenDownloadModal ? onOpenDownloadModal('Download Premium Construction Package Details') : onOpenQuote()}
              className="bg-transparent hover:bg-white/10 text-white font-semibold text-sm sm:text-base py-4 px-8 rounded-lg border border-white/80 transition-all duration-300 flex items-center gap-2 active:scale-95 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Package Details</span>
            </button>
          </div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SECTION 2: PROJECT TYPES WE UNDERTAKE (Image 2)
      ────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#FAF5EE]" aria-label="Project Types We Undertake">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center space-y-3">
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#163048] tracking-tight">
              Project Types We Undertake
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto font-normal">
              Comprehensive construction services across diverse project types
            </p>
          </div>

          {/* Cards Carousel Container with Prev / Next Arrows */}
          <div className="relative">
            {/* Left Nav Arrow */}
            <button
              onClick={handlePrevProject}
              aria-label="Previous project type"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 z-20 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center text-gray-700 hover:text-[#4A2026] hover:bg-gray-50 transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Right Nav Arrow */}
            <button
              onClick={handleNextProject}
              aria-label="Next project type"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 z-20 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center text-gray-700 hover:text-[#4A2026] hover:bg-gray-50 transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Smooth Animated Carousel Track Container */}
            <div className="overflow-hidden w-full px-1">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeProjectPage * 100}%)` }}
              >
                {projectPages.map((pageCards, pageIdx) => (
                  <div
                    key={pageIdx}
                    className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 px-1 sm:px-2"
                  >
                    {pageCards.map((project) => {
                      return (
                        <div
                          key={project.id}
                          className="bg-white rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between border border-gray-200 shadow-md p-5 hover:shadow-lg"
                        >
                          <div>
                            {/* Project Image */}
                            <div className="w-full h-48 sm:h-52 rounded-xl overflow-hidden mb-5 bg-gray-100">
                              <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                              />
                            </div>

                            <h3 className="text-lg sm:text-xl font-bold text-[#163048] mb-2">
                              {project.title}
                            </h3>

                            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4 min-h-[38px]">
                              {project.desc}
                            </p>

                            {/* Feature Checklist */}
                            <div className="space-y-2 pt-1 border-t border-gray-100">
                              {project.features.map((feature, fIdx) => (
                                <div key={fIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-700">
                                  <CheckCircle2 className="w-4 h-4 text-[#4A2026] flex-shrink-0" />
                                  <span>{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>

            {/* Slider Dots (4 Pages) */}
            <div className="flex items-center justify-center gap-2 pt-8">
              {projectPages.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setActiveProjectPage(dotIdx)}
                  aria-label={`Slide ${dotIdx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeProjectPage === dotIdx ? 'w-8 bg-[#4A2026]' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

          </div>

          {/* Centered Get Quote Button */}
          <div className="text-center pt-2">
            <button
              onClick={onOpenQuote}
              className="bg-[#4A2026] hover:bg-[#3B191E] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider py-3 px-8 rounded-lg shadow-md transition-all duration-300 inline-flex items-center gap-2 active:scale-95 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Get Quote</span>
            </button>
          </div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SECTION 3: MATERIALS WE TRUST (Image 3)
      ────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white border-t border-b border-gray-100" aria-label="Materials We Trust">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center space-y-3">
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#163048] tracking-tight max-w-3xl mx-auto">
              Premium Brands We Use
            </h2>

            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto font-normal">
              Only the finest branded materials for lasting quality and durability
            </p>
          </div>

          {/* Full Screen Width Horizontal Infinite Marquee Rows (edge-to-edge) */}
          <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden py-6 space-y-6">
            
            {/* Subtle Edge Fade Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

            {/* Row 1: Scrolling Left */}
            <div className="overflow-hidden w-full">
              <div className="animate-marquee-left flex gap-5 sm:gap-7 items-center">
                {[
                  { name: 'ASTRAL', sub: 'PIPES', color: 'text-[#1E40AF] font-black text-lg sm:text-xl', subColor: 'text-[#DC2626]' },
                  { name: 'Finolex', star: '★', color: 'text-[#0284C7] font-black text-lg sm:text-xl', starColor: 'text-[#DC2626]' },
                  { name: 'Kajaria', sub: 'TILES', color: 'text-[#DC2626] font-bold text-lg sm:text-xl' },
                  { name: 'UltraTech', subBadge: 'CEMENT', color: 'bg-[#FBBF24] text-black px-3.5 py-1.5 rounded-md font-black text-sm sm:text-base' },
                  { name: 'ACC', color: 'bg-[#DC2626] text-white px-5 py-2 rounded-lg font-black italic text-lg sm:text-xl tracking-wider' },
                  { name: 'JSW', sub: 'STEEL', color: 'text-[#1E3A8A] font-black italic text-lg sm:text-xl' },
                  { name: 'TATA', sub: 'TISCON', color: 'bg-[#0284C7] text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-black' },
                  { name: 'JINDAL', sub: 'STEEL & POWER', color: 'bg-[#1E293B] text-white px-4 py-2 rounded-lg font-bold text-xs sm:text-sm tracking-wider' },
                  // Seamless duplicate
                  { name: 'ASTRAL', sub: 'PIPES', color: 'text-[#1E40AF] font-black text-lg sm:text-xl', subColor: 'text-[#DC2626]' },
                  { name: 'Finolex', star: '★', color: 'text-[#0284C7] font-black text-lg sm:text-xl', starColor: 'text-[#DC2626]' },
                  { name: 'Kajaria', sub: 'TILES', color: 'text-[#DC2626] font-bold text-lg sm:text-xl' },
                  { name: 'UltraTech', subBadge: 'CEMENT', color: 'bg-[#FBBF24] text-black px-3.5 py-1.5 rounded-md font-black text-sm sm:text-base' },
                  { name: 'ACC', color: 'bg-[#DC2626] text-white px-5 py-2 rounded-lg font-black italic text-lg sm:text-xl tracking-wider' },
                  { name: 'JSW', sub: 'STEEL', color: 'text-[#1E3A8A] font-black italic text-lg sm:text-xl' },
                  { name: 'TATA', sub: 'TISCON', color: 'bg-[#0284C7] text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-black' },
                  { name: 'JINDAL', sub: 'STEEL & POWER', color: 'bg-[#1E293B] text-white px-4 py-2 rounded-lg font-bold text-xs sm:text-sm tracking-wider' },
                ].map((brand, bIdx) => (
                  <div
                    key={bIdx}
                    className="bg-white rounded-2xl px-8 sm:px-10 py-5 sm:py-6 shadow-sm border border-[#E8DFC8]/90 flex items-center justify-center gap-3 min-w-[210px] sm:min-w-[250px] min-h-[80px] sm:min-h-[88px] flex-shrink-0 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <span className={`tracking-tight ${brand.color}`}>
                        {brand.name}
                      </span>
                      {brand.star && (
                        <span className={`text-base font-black ${brand.starColor}`}>
                          {brand.star}
                        </span>
                      )}
                    </div>
                    {brand.sub && (
                      <span className={`text-xs font-black uppercase tracking-wider ${brand.subColor || 'text-gray-600'}`}>
                        {brand.sub}
                      </span>
                    )}
                    {brand.subBadge && (
                      <span className="text-[10px] font-black bg-black text-white px-2 py-0.5 rounded">
                        {brand.subBadge}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2: Scrolling Right */}
            <div className="overflow-hidden w-full">
              <div className="animate-marquee-right flex gap-5 sm:gap-7 items-center">
                {[
                  { name: 'H & R', sub: 'JOHNSON', color: 'text-[#DC2626] font-black text-xs sm:text-sm tracking-wider flex flex-col items-center leading-tight' },
                  { name: 'hindware', color: 'text-[#DC2626] font-bold text-lg sm:text-xl tracking-tight' },
                  { name: 'CERA', color: 'bg-[#1D4ED8] text-white px-5 py-2 rounded-lg font-black tracking-widest text-sm sm:text-base' },
                  { name: 'jaquar', sub: 'BATH FITTINGS', color: 'text-gray-900 font-serif italic font-bold text-lg sm:text-xl flex flex-col items-center leading-tight' },
                  { name: 'HAVELLS', color: 'bg-[#B91C1C] text-white px-5 py-2 rounded-lg font-black tracking-wider text-sm sm:text-base' },
                  { name: 'CENTURY', sub: 'PLY', color: 'text-[#B91C1C] font-black text-base sm:text-lg flex flex-col items-center leading-tight' },
                  { name: 'Greenply', color: 'bg-[#15803D] text-white px-5 py-2 rounded-lg font-bold text-sm sm:text-base' },
                  { name: 'UltraTech', subBadge: 'CEMENT', color: 'bg-[#FBBF24] text-black px-3.5 py-1.5 rounded-md font-black text-sm sm:text-base' },
                  // Seamless duplicate
                  { name: 'H & R', sub: 'JOHNSON', color: 'text-[#DC2626] font-black text-xs sm:text-sm tracking-wider flex flex-col items-center leading-tight' },
                  { name: 'hindware', color: 'text-[#DC2626] font-bold text-lg sm:text-xl tracking-tight' },
                  { name: 'CERA', color: 'bg-[#1D4ED8] text-white px-5 py-2 rounded-lg font-black tracking-widest text-sm sm:text-base' },
                  { name: 'jaquar', sub: 'BATH FITTINGS', color: 'text-gray-900 font-serif italic font-bold text-lg sm:text-xl flex flex-col items-center leading-tight' },
                  { name: 'HAVELLS', color: 'bg-[#B91C1C] text-white px-5 py-2 rounded-lg font-black tracking-wider text-sm sm:text-base' },
                  { name: 'CENTURY', sub: 'PLY', color: 'text-[#B91C1C] font-black text-base sm:text-lg flex flex-col items-center leading-tight' },
                  { name: 'Greenply', color: 'bg-[#15803D] text-white px-5 py-2 rounded-lg font-bold text-sm sm:text-base' },
                  { name: 'UltraTech', subBadge: 'CEMENT', color: 'bg-[#FBBF24] text-black px-3.5 py-1.5 rounded-md font-black text-sm sm:text-base' },
                ].map((brand, bIdx) => (
                  <div
                    key={bIdx}
                    className="bg-white rounded-2xl px-8 sm:px-10 py-5 sm:py-6 shadow-sm border border-[#E8DFC8]/90 flex items-center justify-center gap-3 min-w-[210px] sm:min-w-[250px] min-h-[80px] sm:min-h-[88px] flex-shrink-0 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex flex-col items-center justify-center">
                      <span className={brand.color}>
                        {brand.name}
                      </span>
                      {brand.sub && (
                        <span className="text-[10px] sm:text-xs font-extrabold text-[#DC2626] uppercase tracking-wider">
                          {brand.sub}
                        </span>
                      )}
                    </div>
                    {brand.subBadge && (
                      <span className="text-[10px] font-black bg-black text-white px-2 py-0.5 rounded">
                        {brand.subBadge}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SECTION 4: FOUNDATION & STRUCTURE (Image 4)
      ────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#FAF5EE]" aria-label="Foundation & Structure">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center space-y-3">
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#163048] tracking-tight">
              Foundation & Structure
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto font-normal">
              Built on a strong foundation with premium materials for lasting durability
            </p>
          </div>

          {/* 4 Cards in 1 Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {foundationItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F5EADB] rounded-2xl p-7 text-center border border-[#E8D7C3] flex flex-col items-center justify-between min-h-[220px] shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                {/* Circle Icon */}
                <div className="w-14 h-14 rounded-full bg-[#4A2026] text-white flex items-center justify-center mb-4 shadow-sm">
                  <Building2 className="w-6 h-6" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-sans text-base sm:text-lg font-bold text-[#163048]">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SECTION 5: PLUMBING & SANITARY (Image 5)
      ────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#FAF5EE]" aria-label="Plumbing & Sanitary">
        <div className="max-w-7xl mx-auto space-y-10">
          
          <div className="space-y-2">
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#163048] tracking-tight">
              Plumbing & Sanitary
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: 3 White Cards */}
            <div className="lg:col-span-6 space-y-5">
              
              {/* Card 1: Premium Plumbing */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-gray-200 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <Wrench className="w-5 h-5 text-[#4A2026]" />
                  <h3 className="text-base sm:text-lg font-bold text-[#163048]">
                    Premium Plumbing
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 mb-3">
                  Astral/Ashirawad pipes and fittings
                </p>
                <div className="space-y-2 pt-1 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#4A2026]" />
                    <span>Durable pipe systems</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#4A2026]" />
                    <span>Leak-proof fittings</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#4A2026]" />
                    <span>Long-lasting quality</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Sanitary Fittings */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-gray-200 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <Wrench className="w-5 h-5 text-[#4A2026]" />
                  <h3 className="text-base sm:text-lg font-bold text-[#163048]">
                    Sanitary Fittings
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-600">
                  Premium brands: Hindware & Cera
                </p>
              </div>

              {/* Card 3: Bathroom Fittings */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-gray-200 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <Wrench className="w-5 h-5 text-[#4A2026]" />
                  <h3 className="text-base sm:text-lg font-bold text-[#163048]">
                    Bathroom Fittings
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-600">
                  Jaquar & Parryware premium fixtures
                </p>
              </div>

            </div>

            {/* Right Column: High Quality Architecture Photo */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200/80 bg-white">
                <img
                  src="/images/Plumbing & Sanitary.png"
                  alt="Premium Plumbing and Sanitary Architecture"
                  className="w-full h-[440px] sm:h-[480px] object-cover hover:scale-103 transition-transform duration-500"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SECTION 6: ELECTRICAL EXCELLENCE (Image 1)
      ────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white" aria-label="Electrical Excellence">
        <div className="max-w-5xl mx-auto space-y-10">
          
          <div className="text-center">
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#163048] tracking-tight">
              Electrical Excellence
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Card 1: Havells & V-Guard */}
            <div className="bg-[#FEF9EE] rounded-2xl p-7 sm:p-9 border border-[#FDE6BA]/70 shadow-xs hover:shadow-md transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-[#D97706] mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-sans text-lg sm:text-xl font-bold text-[#163048] mb-2">
                Havells & V-Guard Wires
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Premium electrical wires ensuring safety and durability for all electrical installations
              </p>
            </div>

            {/* Card 2: GM or Anchor Switches */}
            <div className="bg-[#F0F7FF] rounded-2xl p-7 sm:p-9 border border-[#BFDBFE]/70 shadow-xs hover:shadow-md transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-[#2563EB] mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-sans text-lg sm:text-xl font-bold text-[#163048] mb-2">
                GM or Anchor Switches
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                High-quality switches and sockets for reliable electrical connectivity
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SECTION 7: DOORS & WINDOWS (Image 2)
      ────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#FAF5EE]" aria-label="Doors & Windows">
        <div className="max-w-5xl mx-auto space-y-10">
          
          <div className="text-center">
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#163048] tracking-tight">
              Doors & Windows
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                num: '01',
                title: 'Premium Door Frames',
                desc: 'Teak/Sal wood frames for durability and elegance',
              },
              {
                num: '02',
                title: 'Ready-Made Panel Doors',
                desc: 'High-quality panel doors with premium finish',
              },
              {
                num: '03',
                title: 'Godrej Locks & Fittings',
                desc: 'Secure and reliable locking systems',
              },
              {
                num: '04',
                title: '3-Track UPVC Windows',
                desc: 'Modern UPVC windows for energy efficiency',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-gray-200/80 flex items-start gap-4 hover:shadow-md transition-all duration-300"
              >
                <span className="font-sans text-2xl sm:text-3xl font-black text-[#4A2026] leading-none pt-0.5">
                  {item.num}
                </span>
                <div className="space-y-1">
                  <h3 className="font-sans text-base sm:text-lg font-bold text-[#163048]">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SECTION 8: FLOORING & FINISHES (Image 3)
      ────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white" aria-label="Flooring & Finishes">
        <div className="max-w-5xl mx-auto space-y-10">
          
          <div className="text-center">
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#163048] tracking-tight">
              Flooring & Finishes
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-[#F5EADB] rounded-2xl p-8 text-center border border-[#E8D7C3] flex flex-col items-center justify-between min-h-[220px] shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-[#4A2026] text-white flex items-center justify-center mb-4 shadow-sm">
                <div className="w-5 h-5 border-2 border-white rounded-sm" />
              </div>
              <div className="space-y-1.5">
                <h3 className="font-sans text-base sm:text-lg font-bold text-[#163048]">
                  Premium Flooring
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Kajaria/Somany premium tiles for elegant floors
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#F5EADB] rounded-2xl p-8 text-center border border-[#E8D7C3] flex flex-col items-center justify-between min-h-[220px] shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-[#4A2026] text-white flex items-center justify-center mb-4 shadow-sm">
                <div className="w-5 h-5 border-2 border-white rounded-sm" />
              </div>
              <div className="space-y-1.5">
                <h3 className="font-sans text-base sm:text-lg font-bold text-[#163048]">
                  Staircase Excellence
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  20mm granite steps with premium finish
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#F5EADB] rounded-2xl p-8 text-center border border-[#E8D7C3] flex flex-col items-center justify-between min-h-[220px] shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-[#4A2026] text-white flex items-center justify-center mb-4 shadow-sm">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="space-y-1.5">
                <h3 className="font-sans text-base sm:text-lg font-bold text-[#163048]">
                  Safety Features
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Stainless steel railings for safety and aesthetics
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SECTION 9: PREMIUM PAINTING (Image 4)
      ────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#FAF5EE]" aria-label="Premium Painting">
        <div className="max-w-4xl mx-auto space-y-8">
          
          <div className="text-center">
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#163048] tracking-tight">
              Premium Painting
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* Card 1: Asian Paints */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200/80 flex flex-col items-center justify-center text-center hover:shadow-md transition-all duration-300">
              <Paintbrush className="w-7 h-7 text-[#4A2026] mb-3" />
              <h3 className="font-sans text-base sm:text-lg font-bold text-[#163048] mb-1">
                Asian Paints
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Premium interior and exterior paints
              </p>
            </div>

            {/* Card 2: Birla Opus */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200/80 flex flex-col items-center justify-center text-center hover:shadow-md transition-all duration-300">
              <Paintbrush className="w-7 h-7 text-[#4A2026] mb-3" />
              <h3 className="font-sans text-base sm:text-lg font-bold text-[#163048] mb-1">
                Birla Opus
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                High-quality paint solutions
              </p>
            </div>
          </div>

          <p className="text-xs text-gray-500 italic text-center pt-2">
            Premium quality paints for lasting beauty and protection
          </p>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SECTION 10: MATERIAL BREAKDOWN (Image 5)
      ────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white" aria-label="Material Breakdown">
        <div className="max-w-5xl mx-auto space-y-12 text-center">
          
          <div className="space-y-2">
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#163048] tracking-tight">
              Material Breakdown
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 font-normal">
              Comprehensive allocation of materials in your premium construction package
            </p>
          </div>

          {/* 5 Donut Gauges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-center pt-4">
            {[
              { percent: 35, color: '#4A2026', label: 'Structure' },
              { percent: 15, color: '#2563EB', label: 'Plumbing' },
              { percent: 12, color: '#EAB308', label: 'Electrical' },
              { percent: 23, color: '#10B981', label: 'Fixtures' },
              { percent: 15, color: '#A855F7', label: 'Finishes' },
            ].map((gauge, gIdx) => (
              <div key={gIdx} className="flex flex-col items-center">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-gray-100"
                      strokeWidth="3.5"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      strokeWidth="3.5"
                      strokeDasharray={`${gauge.percent}, 100`}
                      strokeLinecap="round"
                      stroke={gauge.color}
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <span className="absolute font-sans font-bold text-base sm:text-lg text-[#163048]">
                    {gauge.percent}%
                  </span>
                </div>
                <span className="mt-3 text-xs sm:text-sm font-bold text-[#163048]">
                  {gauge.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SECTION 11: OUR PROJECT GALLERY (Image 1)
      ────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#E8DFC8]/60" aria-label="Our Project Gallery">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center space-y-3">
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#163048] tracking-tight">
              Our Project Gallery
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto font-normal">
              Explore our completed projects showcasing premium quality craftsmanship and attention to detail
            </p>
          </div>

          {/* 4 Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { title: 'Contemporary Residential Apartment', image: '/images/image 1.png' },
              { title: 'Modern Multi-Storey Villa', image: '/images/image 2.png' },
              { title: 'Luxury Architectural Residence', image: '/images/image 3.png' },
              { title: 'Commercial & Living Complex', image: '/images/image 4.png' },
            ].map((proj, pIdx) => (
              <div
                key={pIdx}
                onClick={() => setActiveLightboxImage(proj.image)}
                className="group relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 bg-gray-100 border border-gray-200/80 cursor-pointer"
              >
                <div className="w-full h-64 sm:h-72 lg:h-80 overflow-hidden">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* View All Projects Button */}
          <div className="text-center pt-2">
            <button
              onClick={() => {
                if (onNavigateToProjects) {
                  onNavigateToProjects();
                } else {
                  onOpenQuote();
                }
              }}
              className="bg-[#1C364D] hover:bg-[#122638] text-white font-bold text-sm sm:text-base py-3.5 px-8 rounded-xl shadow-md transition-all duration-300 inline-flex items-center gap-2 active:scale-95 cursor-pointer"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* Image Lightbox Preview Modal */}
      {activeLightboxImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveLightboxImage(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center">
            <button
              onClick={() => setActiveLightboxImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
              aria-label="Close Preview"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={activeLightboxImage}
              alt="Project Full View"
              className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl border border-white/20"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* ──────────────────────────────────────────────────────────
          SECTION 12: WHY CHOOSE OUR PREMIUM PACKAGE (Image 2)
      ────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#FAF5EE] border-t border-[#E8DFC8]" aria-label="Why Choose Our Premium Package">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center space-y-3">
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#163048] tracking-tight">
              Why Choose Our Premium Package
            </h2>
          </div>

          {/* 4 White Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: Award,
                title: 'Premium Brands Only',
                desc: 'We use only the finest branded materials for lasting quality',
              },
              {
                icon: FileText,
                title: 'Comprehensive Coverage',
                desc: 'Complete end-to-end construction solution in one package',
              },
              {
                icon: DollarSign,
                title: 'Transparent Pricing',
                desc: 'No hidden costs - clear pricing at ₹2,499 per sq ft',
              },
              {
                icon: ShieldCheck,
                title: 'Quality Assurance',
                desc: 'Guaranteed quality standards with comprehensive warranty',
              },
            ].map((feature, fIdx) => {
              const IconComp = feature.icon;
              return (
                <div
                  key={fIdx}
                  className="bg-white rounded-2xl p-7 sm:p-8 shadow-sm border border-[#E8DFC8]/90 text-center flex flex-col items-center justify-start hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 min-h-[220px]"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#4A2026] text-white flex items-center justify-center mb-5 shadow-sm">
                    <IconComp className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  <h3 className="font-sans text-base sm:text-lg font-bold text-[#163048] mb-2">
                    {feature.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SECTION 13: BUILD YOUR DREAM HOME (BOTTOM HERO BANNER - Image 3)
      ────────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-[#142330] via-[#1E2D3E] to-[#2B1B24] py-20 lg:py-28 px-4 sm:px-6 lg:px-8 text-center text-white relative overflow-hidden" aria-label="Build Your Dream Home">
        <div className="max-w-4xl mx-auto relative z-10 space-y-6">
          
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Build Your Dream Home
          </h2>

          <div className="py-2">
            <span className="font-sans text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
              ₹2,499 <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-300">per sq ft</span>
            </span>
          </div>

          {/* Badges with Green Checkmarks */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 pt-2 pb-4">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-emerald-400 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span className="text-gray-100">Premium materials & brands</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-emerald-400 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span className="text-gray-100">Expert craftsmanship</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenQuote()}
              className="bg-[#5C2B29] hover:bg-[#471E1C] text-white font-semibold text-sm sm:text-base py-3.5 px-8 rounded-lg shadow-lg inline-flex items-center gap-2 transition-all active:scale-95 cursor-pointer"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onOpenDownloadModal ? onOpenDownloadModal('Download Premium Construction Package Details') : onOpenQuote()}
              className="bg-white hover:bg-gray-100 text-[#163048] font-semibold text-sm sm:text-base py-3.5 px-8 rounded-lg shadow-lg inline-flex items-center gap-2 transition-all active:scale-95 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Package Details</span>
            </button>
          </div>

        </div>
      </section>

    </main>
  );
};

export default PremiumConstructionPage;
