import React, { useState, useEffect } from 'react';
import { siteConfig } from '../config/site';
import {
  CheckCircle2,
  ArrowRight,
  Download,
  HardHat,
  Wrench,
  Building2,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Play,
  Award,
  FileText,
  DollarSign,
  ShieldCheck,
  X,
} from 'lucide-react';

interface CivilLabourContractPageProps {
  onNavigateHome: () => void;
  onOpenQuote: () => void;
  onOpenDownloadModal?: (pkgName?: string) => void;
  onNavigateToProjects?: () => void;
}

const laborServicesList = [
  'Earth Work for Footing, Foundation & Sump tank',
  'Back filling soil till plinth level',
  'Footing and foundation work',
  'Masonry work',
  'Bar bending works',
  'Centering works',
  'Ground floor flooring concrete works',
  'Sump Tank work',
  'Column centering box work',
  'Wall Partition Work',
  'Concrete work for columns lintel loft and chejjas',
  'Staircase work',
  'Plastering work for internal and external walls',
  'Scaffolding for plastering work',
  'Plumbing works',
  'Electric works',
  'Floor and wall tiles work',
  'Doors and windows work',
  'Raling, Grills, and gate work',
  'Painting works for internal and external works',
];

export const CivilLabourContractPage: React.FC<CivilLabourContractPageProps> = ({
  onNavigateHome: _onNavigateHome,
  onOpenQuote,
  onOpenDownloadModal,
  onNavigateToProjects,
}) => {
  const canonicalUrl = `${siteConfig.siteUrl}/civil-labour-contract`;
  const [showAllServices, setShowAllServices] = useState(false);
  const [activeProjectPage, setActiveProjectPage] = useState(0);
  const [activeLightboxImage, setActiveLightboxImage] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'Civil Labor Contract Package (₹999/sq.ft) | South India Civil Contractors';
    window.scrollTo({ top: 0, behavior: 'smooth' });

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      'content',
      'Comprehensive Civil Labor Contract Package at ₹999/sq.ft by South India Civil Contractors — skilled workforce, complete structural and finishing labor services across South India.'
    );

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);
  }, [canonicalUrl]);

  const projectPages = [
    // Page 1
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
    // Page 2
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
    // Page 3
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
    // Page 4
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

  return (
    <main className="min-h-screen bg-[#FAF5EE] text-[#163048]">
      
      {/* ──────────────────────────────────────────────────────────
          SECTION 1: HERO (Image 1 - Orange Construction Banner)
      ────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-[85vh] flex items-center justify-center py-28 lg:py-36 text-center">
        {/* Background Construction Image with Vibrant Orange Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/Soil Excavation & Foundation.png"
            alt="Civil Labor Construction Site"
            className="w-full h-full object-cover object-center scale-105"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(110deg, rgba(234, 88, 12, 0.92) 0%, rgba(217, 74, 8, 0.90) 50%, rgba(194, 65, 12, 0.92) 100%)',
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6 pt-8">
          <div className="space-y-2">
            <h1 className="font-sans text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight whitespace-normal md:whitespace-nowrap">
              Civil Labor Contract Package
            </h1>
          </div>

          <div className="flex items-baseline justify-center gap-2 pt-1">
            <span className="font-sans text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight">
              ₹999
            </span>
            <span className="text-xl sm:text-2xl text-white/90 font-medium">
              per sq ft
            </span>
          </div>

          <p className="text-sm sm:text-base md:text-lg text-white/95 max-w-4xl mx-auto leading-relaxed font-normal whitespace-normal md:whitespace-nowrap">
            Comprehensive civil labor services with skilled workforce and expert craftsmanship
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <button
              onClick={() => onOpenQuote()}
              className="bg-white hover:bg-gray-100 text-[#EA580C] font-bold text-sm sm:text-base py-3.5 px-8 rounded-lg shadow-lg transition-all duration-300 flex items-center gap-2 active:scale-95 cursor-pointer"
            >
              <span>Get Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onOpenDownloadModal ? onOpenDownloadModal('Download Civil Labor Contract Package Details') : onOpenQuote()}
              className="bg-transparent hover:bg-white/10 text-white font-semibold text-sm sm:text-base py-3.5 px-8 rounded-lg border border-white transition-all duration-300 flex items-center gap-2 active:scale-95 cursor-pointer"
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
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 z-20 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center text-gray-700 hover:text-[#EA580C] hover:bg-gray-50 transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Right Nav Arrow */}
            <button
              onClick={handleNextProject}
              aria-label="Next project type"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 z-20 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center text-gray-700 hover:text-[#EA580C] hover:bg-gray-50 transition-all cursor-pointer"
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
                                  <CheckCircle2 className="w-4 h-4 text-[#4A2328] flex-shrink-0" />
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

            {/* Slider Dots (Orange Theme) */}
            <div className="flex items-center justify-center gap-2 pt-8">
              {projectPages.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setActiveProjectPage(dotIdx)}
                  aria-label={`Slide ${dotIdx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeProjectPage === dotIdx ? 'w-8 bg-[#4A2328]' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SECTION 3: COMPREHENSIVE SERVICE COVERAGE (Image 3)
      ────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white" aria-label="Comprehensive Service Coverage">
        <div className="max-w-6xl mx-auto space-y-12">
          
          <div className="text-center space-y-3">
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#163048] tracking-tight">
              Comprehensive Service Coverage
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto font-normal">
              Complete end-to-end labor solutions for your construction project
            </p>
          </div>

          {/* 3 Large Coverage Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Card 1: Foundation & Structure */}
            <div className="bg-white rounded-2xl p-7 sm:p-8 border border-gray-200 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-[#4A2328] text-white flex items-center justify-center mb-5 shadow-sm">
                <HardHat className="w-7 h-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#163048] mb-5">
                Foundation & Structure
              </h3>
              <div className="space-y-3 w-full text-left">
                {[
                  'Earth Work & Foundation',
                  'Masonry & Bar Bending',
                  'Concrete & Centering',
                  'Column & Beam Work',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#4A2328] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 2: Finishing Works */}
            <div className="bg-white rounded-2xl p-7 sm:p-8 border border-gray-200 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-[#4A2328] text-white flex items-center justify-center mb-5 shadow-sm">
                <Wrench className="w-7 h-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#163048] mb-5">
                Finishing Works
              </h3>
              <div className="space-y-3 w-full text-left">
                {[
                  'Plastering & Tiles',
                  'Plumbing & Electrical',
                  'Painting & Fittings',
                  'Doors & Windows',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#4A2328] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 3: Complete Coverage */}
            <div className="bg-white rounded-2xl p-7 sm:p-8 border border-gray-200 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-[#4A2328] text-white flex items-center justify-center mb-5 shadow-sm">
                <Building2 className="w-7 h-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#163048] mb-5">
                Complete Coverage
              </h3>
              <div className="space-y-3 w-full text-left">
                {[
                  '20 Services Included',
                  'Quality Assurance',
                  'Timely Completion',
                  'Skilled Workforce',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#4A2328] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SECTION 4: COMPLETE SERVICE LIST (Image 4 - Accordion)
      ────────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF5EE]" aria-label="Complete Service List">
        <div className="max-w-4xl mx-auto space-y-8">
          
          <div className="text-center space-y-2">
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#163048] tracking-tight">
              Complete Service List
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto font-normal">
              20 comprehensive services included in your labor contract package
            </p>
          </div>

          {/* Accordion Card Container */}
          <div className="bg-white rounded-2xl border border-[#4A2328] shadow-sm overflow-hidden transition-all duration-300">
            <button
              onClick={() => setShowAllServices(!showAllServices)}
              className="w-full p-6 sm:p-7 flex items-center justify-between text-left cursor-pointer hover:bg-[#4A2328]/5 transition-colors"
            >
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#4A2328]">
                  View All 20 Services
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                  Complete list of services included in the package
                </p>
              </div>

              <div className="w-9 h-9 rounded-full bg-[#4A2328]/10 text-[#4A2328] flex items-center justify-center flex-shrink-0">
                {showAllServices ? (
                  <ChevronUp className="w-5 h-5 text-[#4A2328]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#4A2328]" />
                )}
              </div>
            </button>

            {/* Expandable 20 Services Grid */}
            {showAllServices && (
              <div className="p-6 sm:p-8 pt-2 border-t border-[#4A2328]/15 bg-[#4A2328]/[0.03]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {laborServicesList.map((service, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3 bg-white rounded-xl border border-[#4A2328]/20 shadow-xs"
                    >
                      <span className="w-6 h-6 rounded-full bg-[#4A2328] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-gray-800 leading-snug">
                        {service}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SECTION 5: OUR PROJECT GALLERY (Image 5)
      ────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#E8DFC8]/60" aria-label="Our Project Gallery">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center space-y-3">
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#163048] tracking-tight">
              Our Project Gallery
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto font-normal">
              Explore our completed projects showcasing quality craftsmanship and attention to detail
            </p>
          </div>

          {/* 4 Projects Grid with Photos and Video Play Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                title: 'Apartment Building Construction',
                image: '/images/image 1.png',
                isVideo: false,
              },
              {
                title: 'Site Survey & Layout Aerial Work',
                image: '/images/image 2.png',
                isVideo: false,
              },
              {
                title: 'RCC Frame & Superstructure Casting',
                image: '/images/image 3.png',
                isVideo: false,
              },
              {
                title: 'Solid Brick Masonry & Lintel Work',
                image: '/images/image 4.png',
                isVideo: false,
              },
            ].map((proj, pIdx) => (
              <div
                key={pIdx}
                className="group relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 bg-gray-100 border border-gray-200/80 cursor-pointer"
                onClick={() => setActiveLightboxImage(proj.image)}
              >
                <div className="w-full h-64 sm:h-72 lg:h-80 overflow-hidden relative">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  {/* Video Play Overlay Button */}
                  {proj.isVideo && (
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                      <div className="w-12 h-12 rounded-full bg-black/60 text-white border-2 border-white/80 flex items-center justify-center shadow-lg group-hover:scale-115 transition-transform">
                        <Play className="w-5 h-5 fill-white text-white ml-0.5" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* View All Projects Button */}
          <div className="text-center pt-2">
            <button
              onClick={() => {
                if (onNavigateToProjects) onNavigateToProjects();
                else onOpenQuote();
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
          SECTION 6: WHY CHOOSE OUR LABOR CONTRACT PACKAGE (Image 1)
      ────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#E8DFC8]/60" aria-label="Why Choose Our Labor Contract Package">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center space-y-3">
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#163048] tracking-tight">
              Why Choose Our Labor Contract Package
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Card 1 */}
            <div className="bg-[#FFFDF9] rounded-2xl p-6 sm:p-7 border border-[#F5EBE0] shadow-xs flex flex-col items-center text-center hover:shadow-md transition-all duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#4A2328] text-white flex items-center justify-center mb-5 shadow-xs">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#163048] mb-2">
                20-Point Coverage
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-xs">
                Comprehensive service coverage from foundation to finishing
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#FFFDF9] rounded-2xl p-6 sm:p-7 border border-[#F5EBE0] shadow-xs flex flex-col items-center text-center hover:shadow-md transition-all duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#4A2328] text-white flex items-center justify-center mb-5 shadow-xs">
                <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#163048] mb-2">
                Skilled Workforce
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-xs">
                Experienced and trained professionals for quality work
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#FFFDF9] rounded-2xl p-6 sm:p-7 border border-[#F5EBE0] shadow-xs flex flex-col items-center text-center hover:shadow-md transition-all duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#4A2328] text-white flex items-center justify-center mb-5 shadow-xs">
                <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#163048] mb-2">
                Competitive Pricing
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-xs">
                Transparent pricing at ₹999 per sq ft with no hidden costs
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#FFFDF9] rounded-2xl p-6 sm:p-7 border border-[#F5EBE0] shadow-xs flex flex-col items-center text-center hover:shadow-md transition-all duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#4A2328] text-white flex items-center justify-center mb-5 shadow-xs">
                <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#163048] mb-2">
                Quality Assurance
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-xs">
                Guaranteed quality standards and timely project completion
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SECTION 7: GET STARTED TODAY (Image 2 - CTA Banner)
      ────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#EA580C] via-[#E65200] to-[#D94600] text-white text-center" aria-label="Get Started Today">
        <div className="max-w-4xl mx-auto space-y-6">
          
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Get Started Today
          </h2>

          <div className="flex items-baseline justify-center gap-2">
            <span className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
              ₹999
            </span>
            <span className="text-lg sm:text-2xl font-bold text-white/90">
              per sq ft
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-2 text-sm sm:text-base font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0" />
              <span>20 comprehensive services</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0" />
              <span>Skilled workforce</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onOpenQuote()}
              className="w-full sm:w-auto bg-white text-[#EA580C] hover:bg-orange-50 font-bold text-sm sm:text-base py-3.5 px-8 rounded-xl shadow-lg transition-all duration-300 inline-flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onOpenDownloadModal ? onOpenDownloadModal('Download Civil Labor Contract Package Details') : onOpenQuote()}
              className="w-full sm:w-auto border-2 border-white/90 hover:bg-white/10 text-white font-bold text-sm sm:text-base py-3.5 px-8 rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
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

export default CivilLabourContractPage;
