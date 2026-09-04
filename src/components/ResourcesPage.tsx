import React, { useState, useEffect } from 'react';
import { siteConfig } from '../config/site';
import { Breadcrumbs } from './Breadcrumbs';
import {
  ShieldCheck,
  Building2,
  Layers,
  HardHat,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  ArrowUpRight,
  FileCheck2,
  Zap,
  Droplet,
  Paintbrush,
  Ruler,
  Hammer,
  Sparkles
} from 'lucide-react';

interface ResourcesPageProps {
  onNavigateHome: () => void;
  onOpenQuote: () => void;
  onNavigateContact?: () => void;
  initialSectionId?: string;
}

export const ResourcesPage: React.FC<ResourcesPageProps> = ({
  onNavigateHome: _onNavigateHome,
  onOpenQuote,
  onNavigateContact,
  initialSectionId
}) => {
  const canonicalUrl = `${siteConfig.siteUrl}/resources`;

  // Section anchor scroll effect
  useEffect(() => {
    if (initialSectionId) {
      setTimeout(() => {
        const el = document.getElementById(initialSectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
    }
  }, [initialSectionId]);

  // Page title & metadata
  useEffect(() => {
    document.title = 'Resources | South India Civil Contractors';
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      'content',
      'Technical knowledge, construction standards, materials and practices that reflect our commitment to quality.'
    );

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);
  }, [canonicalUrl]);

  // Accordion active states
  const [openTechSpec, setOpenTechSpec] = useState<string | null>('footings');
  const [openMaterial, setOpenMaterial] = useState<string | null>('steel');

  const toggleTechSpec = (id: string) => {
    setOpenTechSpec(openTechSpec === id ? null : id);
  };

  const toggleMaterial = (id: string) => {
    setOpenMaterial(openMaterial === id ? null : id);
  };

  // Structured Data Schema
  const resourceSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Resources',
    url: canonicalUrl,
    description: 'Technical knowledge, construction standards, materials and practices that reflect our commitment to quality.',
    publisher: {
      '@type': 'ConstructionBusiness',
      name: siteConfig.companyName,
      url: siteConfig.siteUrl,
    },
  };

  // Section 2: Quality Standards
  const qualityStandards = [
    {
      icon: ShieldCheck,
      title: 'Quality Assurance',
      description: 'Multi-stage inspection and quality checks throughout every phase of construction.',
      details: 'From raw material testing to final inspection, our engineers perform rigorous quality control checks at every critical milestone.'
    },
    {
      icon: Building2,
      title: 'Structural Standards',
      description: 'Careful structural planning, engineering practices and construction standards.',
      details: 'Every foundation, beam, and column design undergoes structural audit and load testing to ensure complete stability.'
    },
    {
      icon: Layers,
      title: 'Material Quality',
      description: 'Selection of reliable construction materials and trusted brands.',
      details: 'We source high-grade TMT steel, high-strength cement, aggregates, and verified construction inputs from reputed manufacturers.'
    },
    {
      icon: HardHat,
      title: 'Safety Standards',
      description: 'Safety-focused construction practices designed to protect workers, clients and projects.',
      details: 'Strict on-site safety guidelines, protective equipment compliance, and routine safety audits protect every site worker and visitor.'
    }
  ];

  // Section 3: Technical Specifications
  const techSpecs = [
    {
      id: 'footings',
      title: 'Types of Footings',
      shortDesc: 'Isolated, raft, strip, and pile footings designed according to soil bearing capacity.',
      content: 'Foundation choices depend heavily on site soil analysis and structural load requirements. We execute Isolated Footings for residential structures with stable soil, Combined & Raft Footings for multi-story load distribution, and Reinforced Concrete Pile Footings for high load or clayey soil conditions.'
    },
    {
      id: 'columns',
      title: 'Types of Columns',
      shortDesc: 'Rectangular, square, circular, and composite reinforced concrete columns.',
      content: 'Columns serve as primary vertical load-bearing members. We construct reinforced concrete columns using precision formwork, high-yield TMT rebar detailing, and high-performance concrete mix grades to resist compression and lateral bending loads.'
    },
    {
      id: 'retaining-walls',
      title: 'Retaining Walls',
      shortDesc: 'Cantilever, gravity, and basement retaining walls for earth pressure mitigation.',
      content: 'Designed to retain soil and resist lateral hydrostatic pressures, our reinforced concrete retaining walls feature proper weep-hole drainage systems, waterproof membrane barriers, and structural reinforcement for long-term earth stability.'
    },
    {
      id: 'partition-walls',
      title: 'Partition Walls',
      shortDesc: 'AAC block, solid concrete block, and traditional clay brick wall systems.',
      content: 'Non-load-bearing internal partitions built using lightweight AAC blocks for superior thermal insulation and sound dampening, or solid concrete masonry for high durability in wet and utility zones.'
    },
    {
      id: 'beams',
      title: 'Beams',
      shortDesc: 'T-beams, L-beams, continuous beams, and plinth beams for flexural load support.',
      content: 'Horizontal structural members engineered to transfer floor loads directly to columns. Proper rebar placement, stirrup spacing, and adequate concrete cover ensure maximum moment capacity and crack resistance.'
    },
    {
      id: 'staircases',
      title: 'Staircases',
      shortDesc: 'Dog-legged, cantilevered, spiral, and straight flight RCC staircase structures.',
      content: 'Custom-designed RCC staircases built with precise tread and riser geometry for ergonomic comfort, sound acoustic dampening, and high structural safety under live loading.'
    },
    {
      id: 'slabs',
      title: 'Slabs',
      shortDesc: 'One-way, two-way, ribbed, and flat slab structural floor systems.',
      content: 'Reinforced concrete floor slabs designed with optimal thickness and steel reinforcement ratios to minimize deflection. We ensure strict curing processes to attain target compressive strength.'
    },
    {
      id: 'brick-walls',
      title: 'Brick Walls',
      shortDesc: 'First-class wire-cut clay bricks and fly-ash bricks laid with rich mortar mix.',
      content: 'Outer envelope masonry utilizing high-density clay or fly-ash bricks bonded with rich cement-sand mortar, offering excellent structural rigidity, weather resistance, and thermal mass.'
    },
    {
      id: 'concrete',
      title: 'Concrete',
      shortDesc: 'Ready-mix concrete (RMC) and site-mixed concrete with strict water-cement ratios.',
      content: 'We use laboratory-tested M20, M25, and M30 grade concrete mixes with controlled slump, vibrating compaction, and continuous moist curing for maximum durability and dense matrix formation.'
    }
  ];

  // Section 4: Premium Materials & Brands
  const materialCategories = [
    {
      id: 'steel',
      title: 'Steel',
      icon: Hammer,
      shortDesc: 'High-ductility Fe 550D grade Thermo-Mechanically Treated (TMT) steel bars.',
      criteria: 'When selecting steel, South India Civil Contractors prioritizes yield strength, ductility, corrosion resistance, and seismic resistance. High-grade Fe 550D TMT rebars ensure superior bonding with concrete and flexibility during earth movement.'
    },
    {
      id: 'cement',
      title: 'Cement',
      icon: Layers,
      shortDesc: '53 Grade Ordinary Portland Cement (OPC) and Portland Pozzolana Cement (PPC).',
      criteria: 'We choose cement based on compressive strength development, setting times, and chemical resistance. 53-grade OPC is specified for structural columns and beams, while PPC is preferred for plastering and masonry due to low heat of hydration.'
    },
    {
      id: 'wood',
      title: 'Wood',
      icon: Sparkles,
      shortDesc: 'Seasoned teak wood, engineered wood, and high-density fiberboard (HDF).',
      criteria: 'Selection centers on moisture content, grain density, termiticide treatment, and structural dimensional stability. Hardwoods are thoroughly seasoned to prevent warping and shrinkage over time.'
    },
    {
      id: 'electrical',
      title: 'Electrical',
      icon: Zap,
      shortDesc: 'Flame-retardant low-smoke (FR-LSH) copper wiring and modular switchgear.',
      criteria: 'Electrical safety requires fire-retardant insulation, high conductivity, thermal overload protection, and reliable grounding systems to safeguard building occupants and electronic appliances.'
    },
    {
      id: 'plumbing',
      title: 'Plumbing',
      icon: Droplet,
      shortDesc: 'CPVC pipes for hot water supply, UPVC for cold lines, and SWR for drainage.',
      criteria: 'Plumbing materials are evaluated for pressure ratings, lead-free composition, chemical resistance, leak-proof jointing technology, and smooth internal walls that prevent scaling and clogging.'
    },
    {
      id: 'painting',
      title: 'Painting',
      icon: Paintbrush,
      shortDesc: 'Low-VOC acrylic emulsions, weather-shield exterior paints, and wall putties.',
      criteria: 'Paints are selected for scrub resistance, color retention, low volatile organic compound (VOC) emissions, fungal resistance, and waterproofing capabilities against tropical monsoon conditions.'
    },
    {
      id: 'flooring',
      title: 'Flooring & Vitrified Tiles',
      icon: Ruler,
      shortDesc: 'Double-charged vitrified tiles, natural granite, and anti-skid porcelain flooring.',
      criteria: 'Flooring materials are chosen for breaking strength, water absorption rate (under 0.05%), stain resistance, slip resistance in wet zones, and uniform tonal aesthetics.'
    },
    {
      id: 'sanitary',
      title: 'Bathroom & Sanitary Fittings',
      icon: CheckCircle2,
      shortDesc: 'Brass-core chrome faucets, dual-flush water closets, and ceramic sanitaryware.',
      criteria: 'Sanitary fixtures are evaluated for water efficiency, solid brass construction, anti-bacterial glaze coatings, smooth valve cartridge operation, and ease of maintenance.'
    },
    {
      id: 'doors',
      title: 'Doors & Fittings',
      icon: Building2,
      shortDesc: 'Heavy-duty flush doors, UPVC/aluminum sliding windows, and stainless steel hardware.',
      criteria: 'Door and window assemblies are selected based on wind-load resistance, acoustic insulation, multi-point locking security, smooth bearing hinges, and weather stripping.'
    }
  ];

  // Section 5: Construction Methodologies
  const methodologies = [
    {
      step: '01',
      title: 'Site Survey & Planning',
      description: 'Site assessment, measurements, soil considerations and detailed project planning.',
      details: 'Topographical surveying, soil bearing test reports, boundary verification, and master schedule creation before ground excavation starts.'
    },
    {
      step: '02',
      title: 'Foundation Engineering',
      description: 'Appropriate foundation planning based on site conditions and structural requirements.',
      details: 'Controlled excavation, Anti-Termite Treatment (ATT), lean PCC blinding layer, rebar mat fabrication, and precision foundation casting.'
    },
    {
      step: '03',
      title: 'Structural Construction',
      description: 'Professional execution of columns, beams, slabs and other structural components.',
      details: 'Erection of rigid shuttering formwork, rebar placement with concrete cover blocks, RMC pouring, mechanical compaction, and 14 to 28 days wet curing.'
    },
    {
      step: '04',
      title: 'MEP Integration',
      description: 'Coordination of mechanical, electrical and plumbing requirements.',
      details: 'Concealed electrical conduit routing, plumbing pipe chase cutting, pressure testing, HVAC duct provisions, and distribution panel wiring.'
    },
    {
      step: '05',
      title: 'Finishing Works',
      description: 'Flooring, painting, doors, fittings and other finishing works.',
      details: 'Wall plastering, tile leveling, waterproof membrane application, door frame installation, primer coats, and surface texture applications.'
    },
    {
      step: '06',
      title: 'Quality Control',
      description: 'Inspection and quality checks throughout the construction process.',
      details: 'Continuous dimensional verification, slump tests, concrete cube compression testing, plumbing leak testing, and final snag list resolution.'
    }
  ];

  // Section 6: Safety Protocols
  const safetyProtocols = [
    { title: 'Personal Protective Equipment (PPE)', desc: 'Mandatory helmets, safety shoes, high-vis vests, and safety harnesses for elevated work.' },
    { title: 'Regular Safety Training', desc: 'Toolbox talks and safety briefings prior to high-risk construction activities.' },
    { title: 'Scaffolding Inspection', desc: 'Rigid steel scaffolding with guardrails, toe boards, and certified safety tag inspections.' },
    { title: 'Emergency Response', desc: 'On-site first aid stations, designated safety marshals, and established emergency contact procedures.' },
    { title: 'Fire Safety Measures', desc: 'Fire extinguishers stationed at critical risk zones and hot-work safety permits.' },
    { title: 'Proper Site Signage', desc: 'Clear warning signs, hazard markings, deep excavation barricades, and entry restrictions.' },
    { title: 'Electrical Safety', desc: 'Residual Current Circuit Breakers (RCCB), industrial power distribution boxes, and insulated cabling.' },
    { title: 'Material Handling & Storage', desc: 'Safe crane rigging protocols, structured material stacking, and secured hazardous substance storage.' }
  ];

  // Section 7: Compliance & Industry Standards
  const complianceCards = [
    {
      title: 'Building Regulations',
      description: 'Aligned with applicable requirements, local municipal bylaws, setback rules, and building floor coverage guidelines.'
    },
    {
      title: 'Environmental Practices',
      description: 'Responsible waste management, rainwater harvesting integration, and dust containment procedures on every site.'
    },
    {
      title: 'Labour & Worker Safety',
      description: 'Aligned with applicable requirements for worker welfare, safe working hours, and protective workplace amenities.'
    },
    {
      title: 'Fire Safety',
      description: 'Structural designs incorporate fire-resistant masonry, designated escape stairwells, and emergency exit planning.'
    },
    {
      title: 'Structural Safety',
      description: 'Engineering calculations aligned with applicable load distribution, wind speed parameters, and site-specific structural considerations.'
    },
    {
      title: 'Occupancy & Project Approvals',
      description: 'Assistance with documentation required for utility connections, completion certificates, and local body sign-offs.'
    }
  ];

  return (
    <main className="min-h-screen bg-[#EDE3D3] text-[#131D23] selection:bg-[#9A6048]/30">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(resourceSchema) }}
      />

      {/* ──────────────────────────────────────────────────
          SECTION 1 — RESOURCES HERO (WARM CREAM THEME)
      ────────────────────────────────────────────────── */}
      <header className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 px-4 sm:px-6 lg:px-8 border-b border-[#131D23]/10 bg-[#EDE3D3] overflow-hidden">
        {/* Subtle decorative background circle */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#DCCDBA] rounded-full translate-x-1/3 -translate-y-1/3 opacity-50 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <Breadcrumbs items={[{ name: 'Resources' }]} />

          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-[#9A6048]"></div>
            <span className="text-xs font-bold tracking-[0.24em] text-[#9A6048] uppercase">
              TECHNICAL KNOWLEDGE & STANDARDS
            </span>
          </div>

          <h1 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[#131D23] leading-[1.1] tracking-tight mb-4">
            Construction Resources
          </h1>
          <p className="text-sm sm:text-base text-[#6F6256] max-w-3xl leading-relaxed">
            Knowledge, standards and materials behind quality construction.
          </p>
        </div>
      </header>

      {/* ──────────────────────────────────────────────────
          SECTION 2 — QUALITY STANDARDS (DARK BROWN-BLACK THEME)
      ────────────────────────────────────────────────── */}
      <section id="quality-standards" className="bg-[#18130E] text-[#EDE3D3] py-16 lg:py-20 border-b border-[#EDE3D3]/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-6 h-[2px] bg-[#9A6048]"></div>
              <span className="text-xs font-bold tracking-[0.24em] text-[#B78A55] uppercase">BENCHMARK OF EXCELLENCE</span>
              <div className="w-6 h-[2px] bg-[#9A6048]"></div>
            </div>
            <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#EDE3D3] mb-4">
              Quality Standards
            </h2>
            <p className="text-sm sm:text-base text-[#D4C9BC]">
              Our commitment to quality through rigorous standards and proven construction practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityStandards.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-[#251E17] border border-[#EDE3D3]/12 rounded-2xl p-6 hover:border-[#B78A55]/50 transition-all duration-300 card-popup-hover shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#131D23] border border-[#B78A55]/30 flex items-center justify-center text-[#B78A55] mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif-heading text-xl font-bold text-[#EDE3D3] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#D4C9BC] leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[#EDE3D3]/10 text-[11px] text-[#D4C9BC]/80 leading-relaxed">
                    {item.details}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────
          SECTION 3 — TECHNICAL SPECIFICATIONS (WARM CREAM & WHITE ROUNDED ACCORDIONS)
      ────────────────────────────────────────────────── */}
      <section id="technical-specifications" className="bg-[#EDE3D3] py-16 lg:py-20 border-b border-[#131D23]/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-[2px] bg-[#9A6048]"></div>
              <span className="text-xs font-bold tracking-[0.24em] text-[#9A6048] uppercase">ENGINEERING COMPONENTS</span>
            </div>
            <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#131D23] mb-4">
              Technical Specifications
            </h2>
            <p className="text-sm sm:text-base text-[#6F6256]">
              Comprehensive construction elements and structural components.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {techSpecs.map((spec) => {
              const isOpen = openTechSpec === spec.id;
              return (
                <div
                  key={spec.id}
                  className={`rounded-2xl transition-all duration-300 border ${
                    isOpen
                      ? 'bg-white border-[#9A6048]/60 shadow-lg'
                      : 'bg-white/90 border-[#131D23]/10 hover:border-[#9A6048]/30 shadow-sm'
                  }`}
                >
                  <button
                    onClick={() => toggleTechSpec(spec.id)}
                    className="w-full text-left p-5 flex items-start justify-between gap-4 focus:outline-none"
                  >
                    <div>
                      <h3 className="font-serif-heading text-lg font-bold text-[#131D23] mb-1">
                        {spec.title}
                      </h3>
                      <p className="text-xs text-[#6F6256] leading-relaxed">
                        {spec.shortDesc}
                      </p>
                    </div>
                    <div className="p-1.5 rounded-xl bg-[#F1E8DC] text-[#9A6048] flex-shrink-0 mt-0.5">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-2 border-t border-[#131D23]/10 text-xs sm:text-sm text-[#45382F] leading-relaxed animate-fadeIn">
                      {spec.content}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────
          SECTION 4 — PREMIUM MATERIALS & BRANDS (LIGHT LINEN & WHITE ROUNDED CARDS)
      ────────────────────────────────────────────────── */}
      <section id="materials-brands" className="bg-[#F1E8DC] py-16 lg:py-20 border-b border-[#131D23]/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-[2px] bg-[#9A6048]"></div>
              <span className="text-xs font-bold tracking-[0.24em] text-[#9A6048] uppercase">RAW MATERIAL SELECTION</span>
            </div>
            <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#131D23] mb-4">
              Premium Materials & Brands
            </h2>
            <p className="text-sm sm:text-base text-[#6F6256]">
              Quality materials selected for durability, performance and long-term value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {materialCategories.map((mat) => {
              const Icon = mat.icon;
              const isOpen = openMaterial === mat.id;
              return (
                <div
                  key={mat.id}
                  className={`rounded-2xl transition-all duration-300 border ${
                    isOpen
                      ? 'bg-white border-[#B78A55]/70 shadow-lg'
                      : 'bg-white/90 border-[#131D23]/10 hover:border-[#9A6048]/30 shadow-sm'
                  }`}
                >
                  <button
                    onClick={() => toggleMaterial(mat.id)}
                    className="w-full text-left p-5 flex items-start justify-between gap-4 focus:outline-none"
                  >
                    <div className="flex gap-3.5">
                      <div className="w-10 h-10 rounded-2xl bg-[#EDE3D3] border border-[#B78A55]/30 flex items-center justify-center text-[#9A6048] flex-shrink-0 mt-0.5">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-serif-heading text-lg font-bold text-[#131D23] mb-1">
                          {mat.title}
                        </h3>
                        <p className="text-xs text-[#6F6256] leading-relaxed">
                          {mat.shortDesc}
                        </p>
                      </div>
                    </div>
                    <div className="p-1.5 rounded-xl bg-[#F1E8DC] text-[#9A6048] flex-shrink-0 mt-0.5">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-3 border-t border-[#131D23]/10 text-xs sm:text-sm text-[#45382F] leading-relaxed animate-fadeIn">
                      <div className="font-semibold text-[#9A6048] text-xs uppercase tracking-wider mb-1.5">
                        Selection Criteria & Engineering Considerations:
                      </div>
                      {mat.criteria}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────
          SECTION 5 — CONSTRUCTION METHODOLOGIES (WARM CREAM & WHITE ROUNDED CARDS)
      ────────────────────────────────────────────────── */}
      <section id="construction-methodologies" className="bg-[#EDE3D3] py-16 lg:py-20 border-b border-[#131D23]/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-6 h-[2px] bg-[#9A6048]"></div>
              <span className="text-xs font-bold tracking-[0.24em] text-[#9A6048] uppercase">SYSTEMATIC WORKFLOW</span>
              <div className="w-6 h-[2px] bg-[#9A6048]"></div>
            </div>
            <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#131D23] mb-4">
              Construction Methodologies
            </h2>
            <p className="text-sm sm:text-base text-[#6F6256]">
              A systematic approach to planning, execution and quality control.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {methodologies.map((item) => (
              <div
                key={item.step}
                className="bg-white border border-[#131D23]/10 rounded-2xl p-6 relative hover:border-[#9A6048]/60 transition-all duration-300 card-popup-hover shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif-heading text-3xl font-bold text-[#9A6048]">
                      {item.step}
                    </span>
                    <div className="w-8 h-[1.5px] bg-[#B78A55]"></div>
                  </div>
                  <h3 className="font-serif-heading text-xl font-bold text-[#131D23] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6F6256] leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#131D23]/10 text-[11px] text-[#6F6256]/80 leading-relaxed">
                  {item.details}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────
          SECTION 6 — SAFETY PROTOCOLS (HIGH-CONTRAST DARK SECTION WITH ROUNDED CARDS)
      ────────────────────────────────────────────────── */}
      <section id="safety-protocols" className="bg-[#1C1510] text-[#EDE3D3] py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#EDE3D3]/10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-14">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-[2px] bg-[#9A6048]"></div>
              <span className="text-xs font-bold tracking-[0.24em] text-[#B78A55] uppercase">ZERO ACCIDENT CULTURE</span>
            </div>
            <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#EDE3D3] mb-4">
              Safety Protocols
            </h2>
            <p className="text-sm sm:text-base text-[#D4C9BC]/90">
              Safety-focused practices for responsible construction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {safetyProtocols.map((protocol, index) => (
              <div
                key={index}
                className="bg-[#131D23]/90 border border-[#EDE3D3]/12 rounded-2xl p-5 hover:border-[#9A6048] transition-all duration-300 flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#45382F] border border-[#B78A55]/30 flex items-center justify-center text-[#B78A55] mb-4">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif-heading text-base font-bold text-[#EDE3D3] mb-2">
                    {protocol.title}
                  </h3>
                </div>
                <p className="text-xs text-[#D4C9BC]/75 leading-relaxed pt-3 border-t border-[#EDE3D3]/8">
                  {protocol.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────
          SECTION 7 — COMPLIANCE & INDUSTRY STANDARDS (LIGHT LINEN & WHITE ROUNDED CARDS)
      ────────────────────────────────────────────────── */}
      <section id="compliance-standards" className="bg-[#F1E8DC] py-16 lg:py-20 border-b border-[#131D23]/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-6 h-[2px] bg-[#9A6048]"></div>
              <span className="text-xs font-bold tracking-[0.24em] text-[#9A6048] uppercase">REGULATORY ALIGNMENT</span>
              <div className="w-6 h-[2px] bg-[#9A6048]"></div>
            </div>
            <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#131D23] mb-4">
              Compliance & Industry Standards
            </h2>
            <p className="text-sm sm:text-base text-[#6F6256]">
              Responsible construction practices aligned with applicable requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceCards.map((card, index) => (
              <div
                key={index}
                className="bg-white border border-[#131D23]/10 rounded-2xl p-6 hover:border-[#9A6048]/50 transition-all duration-300 shadow-md card-popup-hover"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-[#EDE3D3] flex items-center justify-center text-[#9A6048]">
                    <FileCheck2 className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif-heading text-lg font-bold text-[#131D23]">
                    {card.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#6F6256] leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────
          SECTION 8 — RESOURCE CTA (RICH CONTRAST CTA WITH ROUNDED-3XL CARD)
      ────────────────────────────────────────────────── */}
      <section className="bg-[#EDE3D3] py-16 lg:py-20 px-4 sm:px-6 lg:px-8 text-center border-t border-[#131D23]/10">
        <div className="max-w-5xl mx-auto bg-[#1C1510] text-[#EDE3D3] rounded-3xl p-8 sm:p-12 lg:p-16 shadow-editorial-dark relative overflow-hidden">
          {/* Subtle accent corner glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#9A6048]/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#131D23] border border-[#B78A55]/30 text-xs font-semibold text-[#B78A55] uppercase tracking-wider">
              <span>GET IN TOUCH</span>
            </div>

            <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#EDE3D3]">
              Planning Your Next Construction Project?
            </h2>

            <p className="text-sm sm:text-base text-[#D4C9BC] leading-relaxed max-w-2xl mx-auto">
              Speak with South India Civil Contractors about your requirements, project scope and construction goals.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                onClick={onOpenQuote}
                className="bg-[#9A6048] hover:bg-[#86513B] text-[#EDE3D3] font-semibold text-xs sm:text-sm tracking-wider uppercase px-6 sm:px-8 py-3.5 rounded-full shadow-md hover:shadow-terracotta-glow transition-all duration-300 flex items-center gap-2 active:scale-95"
              >
                <span>Get a Quote</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  if (onNavigateContact) {
                    onNavigateContact();
                  } else {
                    window.location.href = '/contact';
                  }
                }}
                className="bg-[#45382F] hover:bg-[#131D23] border border-[#EDE3D3]/20 text-[#EDE3D3] font-semibold text-xs sm:text-sm tracking-wider uppercase px-6 sm:px-8 py-3.5 rounded-full shadow-md transition-all duration-300"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
