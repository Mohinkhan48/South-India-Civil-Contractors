import React, { useEffect } from 'react';
import { siteConfig } from '../config/site';
import { Breadcrumbs } from './Breadcrumbs';
import { CheckCircle2, ArrowRight, Phone, MessageSquare } from 'lucide-react';
import { VirtualSiteInspection } from './VirtualSiteInspection';

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
  onOpenQuote: () => void;
  onNavigateToServiceSlug?: (slug: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigateHome: _onNavigateHome,
  onOpenQuote,
  onNavigateToServiceSlug,
}) => {
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
      desc: 'High-rise and mid-rise residential apartment complexes built with precision RCC shear wall framing, double basement parking, and complete MEP infrastructure.',
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
      title: 'Villa Building',
      category: 'Luxury Residential',
      desc: 'Bespoke luxury villas, modern duplex residences, and private gated community estates engineered with double-height glazing and premium architectural masonry.',
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
      desc: 'Grade-A corporate office hubs, IT parks, retail plazas, and commercial business towers with column-free floor plates and unitized glass facades.',
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

  const handleCardClick = (service: ServiceCardItem) => {
    if (service.slug && onNavigateToServiceSlug) {
      onNavigateToServiceSlug(service.slug);
    } else {
      onOpenQuote();
    }
  };

  return (
    <main className="min-h-screen bg-[#131D23] text-[#EDE3D3] selection:bg-[#9A6048]/40">
      {/* ── MAIN SERVICES SECTION ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-16 lg:pb-24" aria-label="Civil Construction Services">
        <Breadcrumbs items={[{ name: 'Services' }]} />

        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-3">
            <div className="w-8 h-[1px] bg-[#B78A55]"></div>
            <span className="text-xs font-bold tracking-[0.24em] text-[#B78A55] uppercase">
              CIVIL CONTRACTOR SERVICES
            </span>
            <div className="w-8 h-[1px] bg-[#B78A55]"></div>
          </div>

          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-[#EDE3D3] tracking-tight mb-4">
            Expert Construction Services Across All Project Types
          </h2>

          <p className="text-sm sm:text-base text-[#D4C9BC]/80 leading-relaxed font-normal max-w-2xl mx-auto">
            Explore our specialized civil contracting divisions backed by 25+ years of engineering mastery, transparent BOQ billing, and strict NBC safety standards.
          </p>
        </div>

        {/* 3-Column Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service) => (
            <div
              key={service.id}
              className="bg-white text-[#131D23] rounded-2xl overflow-hidden border border-black/[0.08] shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.2)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Service Card Image */}
                <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3.5 left-3.5 bg-[#131D23]/90 backdrop-blur-md text-[#B78A55] px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase border border-white/10 shadow-sm">
                    {service.category}
                  </div>
                </div>

                {/* Service Card Content */}
                <div className="p-6 sm:p-7">
                  <h3 className="font-sans text-xl sm:text-2xl font-bold text-[#131D23] mb-2 leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#6F6256] leading-relaxed mb-6 font-normal">
                    {service.desc}
                  </p>

                  {/* 3 Bullet Features */}
                  <div className="space-y-2.5 pt-4 border-t border-black/[0.06]">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[#131D23] font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#B78A55] flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="px-6 pb-6 pt-2">
                <button
                  onClick={() => handleCardClick(service)}
                  className="w-full bg-[#131D23] hover:bg-[#9A6048] text-[#EDE3D3] font-bold text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-md group-hover:shadow-lg active:scale-98"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#B78A55]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PACKAGE 1: PREMIUM CONSTRUCTION PACKAGE (₹2,499 / sq.ft) ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-20" aria-label="Premium Construction Package">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
          
          {/* Background Image & Contrast Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/hero_residence.jpg"
              alt="Premium residential construction villa"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0D151A]/95 via-[#131D23]/92 to-[#131D23]/80"></div>
          </div>

          <div className="relative z-10 p-8 sm:p-12 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="inline-block px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs font-bold tracking-wider text-[#EDE3D3] uppercase">
                Premium Solution
              </div>

              <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                Premium Construction Package
              </h2>

              <div className="flex items-baseline gap-2">
                <span className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
                  ₹2,499
                </span>
                <span className="text-base sm:text-lg text-[#D4C9BC] font-medium">
                  per sq ft
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#D4C9BC]/90 leading-relaxed font-normal max-w-lg">
                Comprehensive construction solution with premium materials and expert craftsmanship. Everything you need for your dream home in one complete package.
              </p>

              <div className="space-y-2.5 pt-2">
                {[
                  'Premium branded materials only',
                  'Complete end-to-end construction solution',
                  'Transparent pricing with no hidden costs',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#EDE3D3]">
                    <CheckCircle2 className="w-4 h-4 text-[#B78A55] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={onOpenQuote}
                  className="bg-[#2D3748] hover:bg-[#1A202C] text-white font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl shadow-md transition-all flex items-center gap-2"
                >
                  <span>Get Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onOpenQuote}
                  className="bg-transparent hover:bg-white/10 text-white font-semibold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl border border-white/20 transition-all flex items-center gap-2"
                >
                  <span>Explore Package Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Right Column: 4 Brand Logo Grid Cards */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              
              {/* Card 1: Premium Materials */}
              <div className="bg-white rounded-2xl p-5 shadow-lg border border-black/5 flex flex-col justify-between min-h-[140px]">
                <div className="flex items-center gap-2 text-xs font-bold text-[#131D23] mb-3">
                  <span className="text-base">🏢</span>
                  <span>Premium Materials</span>
                </div>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <span className="font-extrabold text-sm text-[#E53E3E] tracking-tight bg-red-50 px-2.5 py-1 rounded">ACC</span>
                  <span className="font-bold text-xs text-[#2B6CB0] bg-blue-50 px-2 py-1 rounded">BIRLA SUPER</span>
                  <span className="font-bold text-xs text-[#2F855A] bg-green-50 px-2 py-1 rounded">JINDAL STEEL</span>
                </div>
              </div>

              {/* Card 2: Electrical */}
              <div className="bg-white rounded-2xl p-5 shadow-lg border border-black/5 flex flex-col justify-between min-h-[140px]">
                <div className="flex items-center gap-2 text-xs font-bold text-[#131D23] mb-3">
                  <span className="text-base">⚡</span>
                  <span>Electrical</span>
                </div>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <span className="font-extrabold text-sm text-[#C53030] tracking-wider">HAVELLS</span>
                  <span className="font-bold text-xs text-[#E53E3E] bg-gray-50 px-2 py-1 rounded border border-red-100">ANCHOR by Panasonic</span>
                </div>
              </div>

              {/* Card 3: Branded Fixtures */}
              <div className="bg-white rounded-2xl p-5 shadow-lg border border-black/5 flex flex-col justify-between min-h-[140px]">
                <div className="flex items-center gap-2 text-xs font-bold text-[#131D23] mb-3">
                  <span className="text-base">🔧</span>
                  <span>Branded Fixtures</span>
                </div>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <span className="font-bold text-xs text-[#C53030] bg-red-50 px-2 py-1 rounded">hindware</span>
                  <span className="font-extrabold text-xs text-[#2B6CB0]">CERA</span>
                  <span className="font-bold text-xs text-[#234E52] italic">Jaquar</span>
                </div>
              </div>

              {/* Card 4: Painting */}
              <div className="bg-white rounded-2xl p-5 shadow-lg border border-black/5 flex flex-col justify-between min-h-[140px]">
                <div className="flex items-center gap-2 text-xs font-bold text-[#131D23] mb-3">
                  <span className="text-base">🖌️</span>
                  <span>Painting</span>
                </div>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <span className="font-bold text-xs text-[#D69E2E] bg-yellow-50 px-2 py-1 rounded">asianpaints</span>
                  <span className="font-bold text-xs text-[#805AD5] bg-purple-50 px-2 py-1 rounded">Berger</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ── PACKAGE 2: CIVIL LABOR CONTRACT PACKAGE (₹999 / sq.ft) ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24" aria-label="Civil Labor Contract Package">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
          
          {/* Vibrant Warm Amber/Orange Background Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/about_craft.jpg"
              alt="Civil construction labor workforce"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#DD5A24]/95 via-[#E86328]/92 to-[#EE6B2B]/85"></div>
          </div>

          <div className="relative z-10 p-8 sm:p-12 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="inline-block px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs font-bold tracking-wider text-white uppercase">
                Labor Solution
              </div>

              <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                Civil Labor Contract Package
              </h2>

              <div className="flex items-baseline gap-2">
                <span className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
                  ₹999
                </span>
                <span className="text-base sm:text-lg text-white/90 font-medium">
                  per sq ft
                </span>
              </div>

              <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal max-w-lg">
                Comprehensive civil labor services with skilled workforce and expert craftsmanship. Complete end-to-end labor solutions for your construction project.
              </p>

              <div className="space-y-2.5 pt-2">
                {[
                  '20-point comprehensive service coverage',
                  'Skilled and experienced workforce',
                  'Competitive pricing with no hidden costs',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-white">
                    <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={onOpenQuote}
                  className="bg-white hover:bg-gray-100 text-[#DD5A24] font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl shadow-md transition-all flex items-center gap-2 active:scale-95"
                >
                  <span>Get a Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onOpenQuote}
                  className="bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl border border-white/30 transition-all flex items-center gap-2"
                >
                  <span>Explore Package Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Right Column: 4 Scope Cards */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              
              {/* Card 1: Foundation & Structure */}
              <div className="bg-white rounded-2xl p-5 shadow-lg border border-black/5 flex flex-col justify-between min-h-[140px]">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-[#DD5A24] mb-3">
                    <span className="text-base">⛑️</span>
                    <span>Foundation & Structure</span>
                  </div>
                  <div className="space-y-1.5 text-xs text-[#2D3748]">
                    <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#DD5A24]" /> <span>Earth Work & Foundation</span></div>
                    <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#DD5A24]" /> <span>Masonry & Bar Bending</span></div>
                    <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#DD5A24]" /> <span>Concrete & Centering</span></div>
                  </div>
                </div>
              </div>

              {/* Card 2: Complete Coverage */}
              <div className="bg-white rounded-2xl p-5 shadow-lg border border-black/5 flex flex-col justify-between min-h-[140px]">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-[#DD5A24] mb-3">
                    <span className="text-base">🏢</span>
                    <span>Complete Coverage</span>
                  </div>
                  <div className="space-y-1.5 text-xs text-[#2D3748]">
                    <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#DD5A24]" /> <span>20 Services Included</span></div>
                    <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#DD5A24]" /> <span>Quality Assurance</span></div>
                    <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#DD5A24]" /> <span>Timely Completion</span></div>
                  </div>
                </div>
              </div>

              {/* Card 3: Finishing Works */}
              <div className="bg-white rounded-2xl p-5 shadow-lg border border-black/5 flex flex-col justify-between min-h-[140px]">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-[#DD5A24] mb-3">
                    <span className="text-base">🔧</span>
                    <span>Finishing Works</span>
                  </div>
                  <div className="space-y-1.5 text-xs text-[#2D3748]">
                    <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#DD5A24]" /> <span>Plastering & Tiles</span></div>
                    <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#DD5A24]" /> <span>Plumbing & Electrical</span></div>
                    <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#DD5A24]" /> <span>Painting & Fittings</span></div>
                  </div>
                </div>
              </div>

              {/* Card 4: View All Services */}
              <div
                onClick={onOpenQuote}
                className="bg-white rounded-2xl p-5 shadow-lg border border-black/5 flex flex-col justify-between min-h-[140px] cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-bold text-[#DD5A24] mb-1">
                    <span>View All Services</span>
                    <span className="text-base">⌄</span>
                  </div>
                  <p className="text-[11px] text-[#6F6256] leading-relaxed">
                    20-point comprehensive coverage
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ── VIRTUAL SITE INSPECTION ── */}
      <VirtualSiteInspection onOpenQuote={onOpenQuote} />

      {/* ── BOTTOM CONSULTATION CTA BANNER ── */}
      <section className="bg-[#0D151A] py-16 lg:py-20 px-4 sm:px-6 lg:px-8 border-t border-[#EDE3D3]/10 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#131D23] border border-[#B78A55]/30 text-xs font-semibold text-[#B78A55] uppercase tracking-wider">
            <span>GET A PERSONALIZED BOQ ESTIMATE</span>
          </div>

          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-[#EDE3D3] tracking-tight">
            Ready to Build with South India Civil Contractors?
          </h2>

          <p className="text-sm sm:text-base text-[#D4C9BC] max-w-2xl mx-auto leading-relaxed font-normal">
            Speak directly with our senior civil engineers for architectural drawings, soil analysis, and an itemized fixed-budget BOQ.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenQuote}
              className="w-full sm:w-auto bg-[#9A6048] hover:bg-[#86513B] text-[#EDE3D3] font-bold text-xs sm:text-sm uppercase tracking-wider py-4 px-8 rounded-full shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Request Project Consultation</span>
            </button>

            <a
              href={`tel:${siteConfig.phone}`}
              className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-[#EDE3D3] font-semibold text-xs sm:text-sm uppercase tracking-wider py-4 px-8 rounded-full border border-[#EDE3D3]/30 transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#B78A55]" />
              <span>Call {siteConfig.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};
