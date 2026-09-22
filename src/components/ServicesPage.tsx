import React, { useEffect, useState } from 'react';
import { siteConfig } from '../config/site';
import { Breadcrumbs } from './Breadcrumbs';
import {
  CheckCircle2,
  ArrowRight,
  Building2,
  HardHat,
  Wrench,
  Zap,
  Paintbrush,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

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

interface ServiceCardItem {
  id: string;
  slug?: string;
  title: string;
  category: string;
  desc: string;
  image: string;
  features: string[];
}

interface ServicesPageProps {
  onNavigateHome: () => void;
  onOpenQuote: (defaultType?: string) => void;
  onNavigateToServiceSlug?: (slug: string) => void;
  onNavigateToPremiumConstruction?: () => void;
  onNavigateToCivilLabour?: () => void;
  onNavigateToContact?: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigateHome: _onNavigateHome,
  onOpenQuote,
  onNavigateToServiceSlug: _onNavigateToServiceSlug,
  onNavigateToPremiumConstruction,
  onNavigateToCivilLabour,
  onNavigateToContact,
}) => {
  const [showAllLaborServices, setShowAllLaborServices] = useState(false);
  const canonicalUrl = `${siteConfig.siteUrl}/services`;

  useEffect(() => {
    document.title = 'Premium Construction Services | South India Civil Contractors';
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      'content',
      'Premium construction services by South India Civil Contractors — residential villas, commercial high-rises, hospitals, hotels, and industrial facilities built to the highest standards across South India.'
    );

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);
  }, [canonicalUrl]);

  const servicesList: ServiceCardItem[] = [
    {
      id: 'apartment',
      slug: 'commercial-construction',
      title: 'Apartment Project',
      category: 'Multi-Family Residential',
      desc: 'Comprehensive civil contracting services for residential apartment complexes, from foundation to finishing.',
      image: '/images/Apartment Project.png',
      features: [
        'High-load RCC Shear Wall Superstructures',
        'Dual-tier Basement Parking & Sump Tanks',
        'NBC National Building Fire Safety Certified',
      ],
    },
    {
      id: 'villa',
      slug: 'residential-construction',
      title: 'Bungalow Building',
      category: 'Luxury Residential',
      desc: 'Specialized services for luxury bungalow construction with attention to architectural details.',
      image: '/images/project_villa.jpg',
      features: [
        'Post-Tensioned Cantilevered Concrete Slabs',
        'Custom Imported Stone & Teak Woodwork',
        '10-Year Written Structural Warranty',
      ],
    },
    {
      id: 'commercial',
      slug: 'commercial-construction',
      title: 'Commercial Building',
      category: 'Corporate & Retail',
      desc: 'Professional commercial construction services for offices, retail spaces, and business complexes.',
      image: '/images/Commercial Building.png',
      features: [
        'Large-span Column-free Post-Tensioned Slabs',
        'Unitized Glass Curtain-wall Facade Glazing',
        'Integrated BMS Raceways & High-speed Lifts',
      ],
    },
    {
      id: 'college',
      slug: 'commercial-construction',
      title: 'College Building',
      category: 'Institutional',
      desc: 'Educational universities, campus blocks, auditoriums, and laboratory complexes built to withstand heavy student occupancy with superior acoustic comfort.',
      image: '/images/College Building.png',
      features: [
        'High-density Structural Occupancy Load Ratings',
        'Large Span Column-less Auditoriums & Halls',
        'Campus Stormwater & STP Civil Infrastructure',
      ],
    },
    {
      id: 'high-rise',
      slug: 'commercial-construction',
      title: 'High Rise Project',
      category: 'Towers & Sky Complexes',
      desc: 'Multi-story skyscraper towers engineered with automated climbing formwork, earthquake-resistant shear cores, and strict laser-guided vertical alignment.',
      image: '/images/High Rise Project.png',
      features: [
        'Seismic Zone III & IV Compliant Engineering',
        'Mivan Aluminum / Climbing Formwork Systems',
        'Certified M40/M50 Grade Ready-Mix Concrete',
      ],
    },
    {
      id: 'hospital',
      slug: 'commercial-construction',
      title: 'Hospital Project',
      category: 'Healthcare Infrastructure',
      desc: 'Specialty medical centers, diagnostic hospitals, and surgical complexes adhering to strict medical zoning, sterile HVAC ducting, and emergency power civil rooms.',
      image: '/images/Hospital Project.png',
      features: [
        'Vibration-isolated Diagnostic Machine Foundations',
        'Hermetic & Sterile Medical Wall Civil Envelopes',
        'Uninterrupted Backup Generator Yards & Gas Rooms',
      ],
    },
    {
      id: 'hotel',
      slug: 'commercial-construction',
      title: 'Hotel Project',
      category: 'Hospitality & Leisure',
      desc: 'Luxury hotels, boutique resorts, banquet pavilions, and clubhouse complexes blending structural grandeur with world-class hospitality finishes.',
      image: '/images/Hotel Project.png',
      features: [
        'Infinity Pool, Spa & Waterbody Structural Civil Works',
        'High-STC Acoustic Soundproof Partition Envelopes',
        'Grand Atrium & Column-less Banquet Structural Frames',
      ],
    },
    {
      id: 'pg-building',
      slug: 'residential-construction',
      title: 'PG Building',
      category: 'Co-Living & Student Housing',
      desc: 'High-density student accommodations and modern co-living multi-room buildings optimized for spatial utility, rapid execution, and low-maintenance durability.',
      image: '/images/PG Building.png',
      features: [
        'Optimized Modular Room Layouts & Attached Baths',
        'Commercial Solar Water & Heavy-duty Sump Integration',
        'Durable Fire-rated AAC Block Partition Walls',
      ],
    },
    {
      id: 'renovation',
      slug: 'renovation',
      title: 'Renovation Work',
      category: 'Remodeling & Retrofitting',
      desc: 'Comprehensive structural retrofitting, beam strengthening, floor additions, heritage modernizations, and spatial reconfigurations with zero structural risk.',
      image: '/images/Renovation Work.png',
      features: [
        'Carbon-fiber Wrapping & Steel Jacketing Retrofits',
        'Non-destructive Ultrasonic Strength Testing (NDT)',
        'Comprehensive 5-Year Waterproofing Guarantee',
      ],
    },
    {
      id: 'residential',
      slug: 'residential-construction',
      title: 'Residential Building',
      category: 'Custom Homes & Duplexes',
      desc: 'Custom independent residences, modern duplex homes, and family bungalows constructed with certified Fe 550D TMT steel and daily engineering audits.',
      image: '/images/Residential Building.png',
      features: [
        '100% Fe 550D Steel & 53-grade Certified Cement',
        'Itemized Transparent BOQ with Zero Cost Overruns',
        'Daily Site Engineer Supervision & Slump Testing',
      ],
    },
    {
      id: 'industrial',
      slug: 'civil-construction',
      title: 'Industrial Construction',
      category: 'Factories & Warehouses',
      desc: 'Pre-engineered steel buildings (PEB), manufacturing plants, and logistics warehouses with laser-screed floor leveling and heavy axle loading capacity.',
      image: '/images/Industrial Construction.png',
      features: [
        'Pre-Engineered Building (PEB) Structural Steelwork',
        'Laser-screed Industrial Hardener Floor Slabs',
        'Heavy Crane Gantry Girder Foundations & Sump Pits',
      ],
    },
    {
      id: 'structural',
      slug: 'civil-construction',
      title: 'Structural Work & Civil Contracting',
      category: 'Foundation & Earthworks',
      desc: 'Complex geotechnical earthworks, contiguous pile foundations, retaining walls, deep basement shoring, and monolithic RCC structural casting.',
      image: '/images/Structural Work & Civil Contracting.png',
      features: [
        'Geotechnical Soil Investigation & Deep Piling',
        'Diaphragm Retaining Walls & Subterranean Tanking',
        'Rigorous On-site Concrete Cube Compression Testing',
      ],
    },
  ];

  // Map service id to the matching building type option in the quote modal
  const serviceToQuoteType: Record<string, string> = {
    'apartment':   'Apartment',
    'villa':       'Villa',
    'commercial':  'Commercial',
    'college':     'Educational',
    'high-rise':   'Apartment',
    'hospital':    'Hospital',
    'hotel':       'Hotel',
    'pg-building': 'Residential',
    'renovation':  'Renovation',
    'residential': 'Residential',
    'industrial':  'Commercial',
    'structural':  'Commercial',
  };

  const handleCardClick = (service: ServiceCardItem) => {
    onOpenQuote(serviceToQuoteType[service.id] ?? 'Residential');
  };

  return (
    <main className="min-h-screen bg-white text-[#163048] selection:bg-[#163048]/10">
      {/* ── MAIN SERVICES SECTION ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-16 lg:pb-24" aria-label="Civil Construction Services">
        <Breadcrumbs items={[{ name: 'Services' }]} variant="light" />

        {/* Section Title Header (Matched to Image 2) */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#163048] tracking-tight mb-3">
            Civil Contractor Services
          </h1>

          <p className="text-sm sm:text-base text-[#556987] leading-relaxed font-normal max-w-2xl mx-auto">
            Expert construction services across all project types
          </p>
        </div>

        {/* 3-Column Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesList.map((service) => (
            <div
              key={service.id}
              className="bg-white text-[#163048] rounded-2xl p-4 sm:p-5 border border-[#E5E7EB] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Service Card Image */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden rounded-xl bg-gray-100 mb-4">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[#163048]/85 backdrop-blur-md text-white px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase border border-white/20 shadow-sm">
                    {service.category}
                  </div>
                </div>

                {/* Service Card Content */}
                <div className="px-1">
                  <h3 className="font-sans text-xl sm:text-2xl font-bold text-[#163048] mb-2 leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#556987] leading-relaxed mb-4 font-normal">
                    {service.desc}
                  </p>

                  {/* 3 Bullet Features */}
                  <div className="space-y-2 pt-3 border-t border-gray-100 mb-4">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#2D3748] font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#2563EB] flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="pt-2 px-1">
                <button
                  onClick={() => handleCardClick(service)}
                  className="w-full bg-[#163048] hover:bg-[#0F2133] text-white font-bold text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-sm active:scale-98"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-white/80" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PACKAGE 1: PREMIUM CONSTRUCTION PACKAGE (₹2,499 / sq.ft) - FULL HORIZONTAL WIDTH ── */}
      <section className="w-full relative overflow-hidden py-16 sm:py-24" aria-label="Premium Construction Package">
        
        {/* Full horizontal width background image & dark vignette overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero_residence.jpg"
            alt="Premium residential construction villa background"
            className="w-full h-full object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#142230]/95 via-[#1C2C3A]/90 to-[#4A2026]/85"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="inline-block px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs font-bold tracking-wider text-white uppercase">
                Premium Solution
              </div>

              <h2 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                Premium Construction Package
              </h2>

              <div className="flex items-baseline gap-2">
                <span className="font-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
                  ₹2,499
                </span>
                <span className="text-base sm:text-xl text-gray-200 font-medium">
                  per sq ft
                </span>
              </div>

              <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-normal max-w-xl">
                Comprehensive construction solution with premium materials and expert craftsmanship. Everything you need for your dream home in one complete package.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'Premium branded materials only',
                  'Complete end-to-end construction solution',
                  'Transparent pricing with no hidden costs',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm sm:text-base text-white font-medium">
                    <CheckCircle2 className="w-5 h-5 text-white/90 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={() => onOpenQuote()}
                  className="bg-[#4A5568] hover:bg-[#2D3748] text-white font-bold text-xs sm:text-sm uppercase tracking-wider py-4 px-7 rounded-xl shadow-lg transition-all duration-300 flex items-center gap-2.5 active:scale-95"
                >
                  <span>Get Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    if (onNavigateToPremiumConstruction) onNavigateToPremiumConstruction();
                    else onOpenQuote();
                  }}
                  className="bg-transparent hover:bg-white/10 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider py-4 px-7 rounded-xl border border-white/30 transition-all duration-300 flex items-center gap-2.5 cursor-pointer"
                >
                  <span>Explore Package Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Right Column: 4 White Brand Logo Grid Cards (2 Big on Left, 2 Small on Right) */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5 items-start">
              
              {/* Left Column (2 Big Cards) */}
              <div className="flex flex-col gap-5">
                {/* Card 1: Premium Materials */}
                <div className="bg-white rounded-2xl p-6 shadow-xl border border-white/20 flex flex-col justify-between min-h-[175px] group transition-all duration-300 hover:shadow-2xl">
                  <div>
                    <div className="flex items-center gap-3 text-base font-bold text-[#163048] mb-4">
                      <Building2 className="w-5 h-5 text-[#163048]" />
                      <span>Premium Materials</span>
                    </div>
                    <div className="space-y-3 pt-1">
                      <div className="flex items-center gap-3">
                        <span className="font-black text-2xl italic tracking-tighter text-[#E53E3E] font-serif cursor-pointer transition-all duration-300 transform hover:scale-110 hover:brightness-125">
                          ACC
                        </span>
                        <div className="bg-[#2B6CB0] text-white px-2.5 py-1 rounded text-center leading-none shadow-xs cursor-pointer transition-all duration-300 transform hover:scale-110 hover:brightness-125">
                          <span className="block font-black text-[10px] tracking-wider">BIRLA</span>
                          <span className="block font-extrabold text-[8px] tracking-widest text-[#90CDF4]">SUPER</span>
                          <span className="block text-[6px] text-white/90">53 GRADE CEMENT</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:brightness-125">
                        <span className="text-[#38A169] font-black text-sm">✓</span>
                        <span className="font-extrabold text-xs tracking-tight text-gray-700">JINDAL</span>
                        <span className="font-extrabold text-xs text-[#38A169]">STEEL</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2: Branded Fixtures */}
                <div className="bg-white rounded-2xl p-6 shadow-xl border border-white/20 flex flex-col justify-between min-h-[175px] group transition-all duration-300 hover:shadow-2xl">
                  <div>
                    <div className="flex items-center gap-3 text-base font-bold text-[#163048] mb-4">
                      <Wrench className="w-5 h-5 text-[#163048]" />
                      <span>Branded Fixtures</span>
                    </div>
                    <div className="space-y-3 pt-1">
                      <div className="flex items-center gap-3">
                        <div className="bg-[#E53E3E] text-white font-bold text-xs px-3 py-1.5 rounded flex items-center justify-center tracking-tight shadow-xs cursor-pointer transition-all duration-300 transform hover:scale-110 hover:brightness-125">
                          hindware
                        </div>
                        <span className="font-black text-base text-[#2B6CB0] tracking-widest cursor-pointer transition-all duration-300 transform hover:scale-110 hover:brightness-125">
                          CERA
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:brightness-125">
                        <span className="text-[#0D9488] font-black text-base italic">∬</span>
                        <span className="font-bold text-sm italic text-[#0D9488] tracking-tight">Jaquar</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column (2 Small Cards) */}
              <div className="flex flex-col gap-5">
                {/* Card 3: Electrical */}
                <div className="bg-white rounded-2xl p-6 shadow-xl border border-white/20 flex flex-col justify-between min-h-[140px] group transition-all duration-300 hover:shadow-2xl">
                  <div>
                    <div className="flex items-center gap-3 text-base font-bold text-[#163048] mb-4">
                      <Zap className="w-5 h-5 text-[#163048]" />
                      <span>Electrical</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 pt-1">
                      <div className="flex items-center gap-1.5 cursor-pointer transition-all duration-300 transform hover:scale-110 hover:brightness-125">
                        <div className="w-5 h-5 rounded-full bg-[#E53E3E] flex items-center justify-center text-white text-[9px] font-bold">H</div>
                        <span className="font-extrabold text-xs text-[#E53E3E] tracking-wider">HAVELLS</span>
                      </div>
                      <div className="cursor-pointer transition-all duration-300 transform hover:scale-110 hover:brightness-125">
                        <span className="font-extrabold text-xs text-[#E53E3E] tracking-wider flex items-center gap-1">
                          <span className="w-3.5 h-3.5 bg-[#E53E3E] text-white text-[8px] flex items-center justify-center font-bold rounded-xs">⚓</span>
                          ANCHOR
                        </span>
                        <span className="text-[8px] text-gray-500 block leading-tight">by Panasonic</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 4: Painting */}
                <div className="bg-white rounded-2xl p-6 shadow-xl border border-white/20 flex flex-col justify-between min-h-[140px] group transition-all duration-300 hover:shadow-2xl">
                  <div>
                    <div className="flex items-center gap-3 text-base font-bold text-[#163048] mb-4">
                      <Paintbrush className="w-5 h-5 text-[#163048]" />
                      <span>Painting</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 pt-1">
                      <div className="flex items-center gap-1 cursor-pointer transition-all duration-300 transform hover:scale-110 hover:brightness-125">
                        <span className="text-amber-500 font-bold text-sm">ap</span>
                        <span className="text-[#E53E3E] font-bold text-xs tracking-tight">asianpaints</span>
                      </div>
                      <div className="border border-purple-200 bg-purple-50/50 rounded px-2 py-0.5 text-center shadow-xs cursor-pointer transition-all duration-300 transform hover:scale-110 hover:brightness-125">
                        <span className="block text-[6px] text-purple-600 font-bold tracking-widest">Since 1760</span>
                        <span className="block text-xs font-serif font-black text-[#553C9A] italic leading-tight">Berger</span>
                        <span className="block text-[6px] text-gray-500">Paint your imagination</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ── PACKAGE 2: CIVIL LABOR CONTRACT PACKAGE (₹999 / sq.ft) - FULL HORIZONTAL WIDTH ── */}
      <section className="w-full relative overflow-hidden py-16 sm:py-24 shadow-2xl" aria-label="Civil Labor Contract Package">
        
        {/* Full horizontal width background overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/about_craft.jpg"
            alt="Civil construction labor workforce background"
            className="w-full h-full object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#DD5A24]/95 via-[#E86328]/92 to-[#EE6B2B]/85"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs font-bold tracking-wider text-white uppercase">
                Labor Solution
              </div>

              <h2 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                Civil Labor Contract Package
              </h2>

              <div className="flex items-baseline gap-2">
                <span className="font-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
                  ₹999
                </span>
                <span className="text-base sm:text-xl text-white/90 font-medium">
                  per sq ft
                </span>
              </div>

              <p className="text-sm sm:text-base text-white/90 leading-relaxed font-normal max-w-xl">
                Comprehensive civil labor services with skilled workforce and expert craftsmanship. Complete end-to-end labor solutions for your construction project.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  '20-point comprehensive service coverage',
                  'Skilled and experienced workforce',
                  'Competitive pricing with no hidden costs',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm sm:text-base text-white font-medium">
                    <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={() => onOpenQuote()}
                  className="bg-white hover:bg-gray-100 text-[#DD5A24] font-bold text-xs sm:text-sm uppercase tracking-wider py-4 px-7 rounded-xl shadow-lg transition-all duration-300 flex items-center gap-2.5 active:scale-95"
                >
                  <span>Get a Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    if (onNavigateToCivilLabour) onNavigateToCivilLabour();
                    else onOpenQuote();
                  }}
                  className="bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider py-4 px-7 rounded-xl border border-white/30 transition-all duration-300 flex items-center gap-2.5 cursor-pointer"
                >
                  <span>Explore Package Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Right Column: 4 Scope Cards (2 Big on Left, 2 on Right with Accordion Expand) */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5 items-start">
              
              {/* Left Column (2 Big Cards) */}
              <div className="flex flex-col gap-5">
                {/* Card 1: Foundation & Structure */}
                <div className="bg-white rounded-2xl p-6 shadow-xl border border-black/5 transition-all duration-300 hover:shadow-2xl">
                  <div className="flex items-center gap-2.5 text-base font-bold text-[#DD5A24] mb-4">
                    <HardHat className="w-5 h-5 text-[#DD5A24]" />
                    <span>Foundation & Structure</span>
                  </div>
                  <div className="space-y-2.5 text-xs sm:text-sm text-[#2D3748]">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#DD5A24] flex-shrink-0" />
                      <span className="font-medium">Earth Work & Foundation</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#DD5A24] flex-shrink-0" />
                      <span className="font-medium">Masonry & Bar Bending</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#DD5A24] flex-shrink-0" />
                      <span className="font-medium">Concrete & Centering</span>
                    </div>
                  </div>
                </div>

                {/* Card 2: Finishing Works */}
                <div className="bg-white rounded-2xl p-6 shadow-xl border border-black/5 transition-all duration-300 hover:shadow-2xl">
                  <div className="flex items-center gap-2.5 text-base font-bold text-[#DD5A24] mb-4">
                    <Wrench className="w-5 h-5 text-[#DD5A24]" />
                    <span>Finishing Works</span>
                  </div>
                  <div className="space-y-2.5 text-xs sm:text-sm text-[#2D3748]">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#DD5A24] flex-shrink-0" />
                      <span className="font-medium">Plastering & Tiles</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#DD5A24] flex-shrink-0" />
                      <span className="font-medium">Plumbing & Electrical</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#DD5A24] flex-shrink-0" />
                      <span className="font-medium">Painting & Fittings</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column (2 Cards: Complete Coverage & Expandable View All Services) */}
              <div className="flex flex-col gap-5">
                {/* Card 3: Complete Coverage */}
                <div className="bg-white rounded-2xl p-6 shadow-xl border border-black/5 transition-all duration-300 hover:shadow-2xl">
                  <div className="flex items-center gap-2.5 text-base font-bold text-[#DD5A24] mb-4">
                    <Building2 className="w-5 h-5 text-[#DD5A24]" />
                    <span>Complete Coverage</span>
                  </div>
                  <div className="space-y-2.5 text-xs sm:text-sm text-[#2D3748]">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#DD5A24] flex-shrink-0" />
                      <span className="font-medium">20 Services Included</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#DD5A24] flex-shrink-0" />
                      <span className="font-medium">Quality Assurance</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#DD5A24] flex-shrink-0" />
                      <span className="font-medium">Timely Completion</span>
                    </div>
                  </div>
                </div>

                {/* Card 4: View All Services (Expandable Accordion) */}
                <div
                  onClick={() => setShowAllLaborServices(!showAllLaborServices)}
                  className={`bg-white rounded-2xl p-6 shadow-xl border border-black/5 cursor-pointer transition-all duration-300 hover:shadow-2xl ${
                    showAllLaborServices ? 'ring-2 ring-orange-400/40' : 'hover:bg-orange-50/30'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[#DD5A24] leading-tight">
                        View All Services
                      </h3>
                      <p className="text-xs sm:text-sm text-[#4A5568] mt-1 font-medium">
                        20-point comprehensive coverage
                      </p>
                    </div>
                    <button
                      type="button"
                      aria-label="Toggle All Services"
                      className="p-1 rounded-full text-[#DD5A24] hover:bg-orange-100 transition-colors flex-shrink-0"
                    >
                      {showAllLaborServices ? (
                        <ChevronUp className="w-6 h-6" />
                      ) : (
                        <ChevronDown className="w-6 h-6" />
                      )}
                    </button>
                  </div>

                  {/* Expanded 20-point List */}
                  {showAllLaborServices && (
                    <div className="mt-5 space-y-2 max-h-[480px] overflow-y-auto pr-1 animate-fadeIn">
                      {laborServicesList.map((service, idx) => (
                        <div
                          key={idx}
                          className="bg-[#FFF8F3] border border-[#FFE8D6] rounded-xl px-3.5 py-2.5 flex items-center gap-3 transition-colors hover:bg-orange-50/80 shadow-xs"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#DD5A24] flex-shrink-0" />
                          <span className="text-[#2D3748] text-xs sm:text-sm font-medium leading-snug">
                            {service}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ── READY TO DISCUSS YOUR PROJECT CTA SECTION ── */}
      <section className="bg-[#1C364D] py-20 sm:py-24 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden" aria-label="Discuss Your Project">
        <div className="max-w-3xl mx-auto relative z-10 space-y-5">
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Ready to Discuss Your Project?
          </h2>

          <p className="text-sm sm:text-base text-[#CBD5E1] max-w-lg mx-auto leading-relaxed font-normal">
            Contact us today to learn more about our services and get a customized quote
          </p>

          <div className="pt-2">
            <button
              onClick={() => {
                if (onNavigateToContact) onNavigateToContact();
                else onOpenQuote();
              }}
              className="bg-[#5C2B29] hover:bg-[#4B2220] text-white font-medium text-xs sm:text-sm py-3 px-7 rounded-md shadow-md transition-all duration-300 active:scale-95 inline-flex items-center justify-center cursor-pointer"
            >
              Contact Us Now
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};
