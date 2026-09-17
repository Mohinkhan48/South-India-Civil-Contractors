import React, { useState, useEffect, useRef } from 'react';
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
  Sparkles,
  ArrowRight,
  Play,
  X
} from 'lucide-react';

interface ResourcesPageProps {
  onNavigateHome: () => void;
  onOpenQuote: () => void;
  onNavigateContact?: () => void;
  initialSectionId?: string;
}

// Actual construction photos from the project
const constructionPhotos = [
  "/images/images of construction/WhatsApp Image 2026-09-05 at 1.01.10 PM.jpeg",
  "/images/images of construction/WhatsApp Image 2026-09-05 at 1.01.11 PM.jpeg",
  "/images/images of construction/WhatsApp Image 2026-09-05 at 1.01.15 PM (1).jpeg",
  "/images/images of construction/WhatsApp Image 2026-09-05 at 1.01.16 PM.jpeg",
  "/images/images of construction/WhatsApp Image 2026-09-05 at 1.01.21 PM.jpeg",
  "/images/images of construction/WhatsApp Image 2026-09-05 at 12.48.46 PM.jpeg",
  "/images/images of construction/WhatsApp Image 2026-09-05 at 12.48.51 PM (2).jpeg",
  "/images/images of construction/WhatsApp Image 2026-09-05 at 12.57.01 PM.jpeg",
  "/images/images of construction/WhatsApp Image 2026-09-05 at 12.57.07 PM (1).jpeg",
  "/images/images of construction/WhatsApp Image 2026-09-05 at 12.57.12 PM.jpeg",
  "/images/images of construction/WhatsApp Image 2026-09-05 at 12.55.30 PM.jpeg",
  "/images/images of construction/WhatsApp Image 2026-09-05 at 12.55.42 PM (1).jpeg",
];

export const ResourcesPage: React.FC<ResourcesPageProps> = ({
  onNavigateHome: _onNavigateHome,
  onOpenQuote,
  onNavigateContact,
  initialSectionId
}) => {
  const canonicalUrl = `${siteConfig.siteUrl}/resources`;

  const [activeMaterialTab, setActiveMaterialTab] = useState('steel');
  const [openTechSpec, setOpenTechSpec] = useState<string | null>('footings');
  const [lightboxPhoto, setLightboxPhoto] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const revealRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    if (initialSectionId) {
      setTimeout(() => {
        const el = document.getElementById(initialSectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 150);
    }
  }, [initialSectionId]);

  useEffect(() => {
    document.title = 'Resources | South India Civil Contractors';
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'Technical knowledge, construction standards, materials and practices that reflect our commitment to quality.');
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);
  }, [canonicalUrl]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('is-revealed'); }),
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    revealRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addRevealRef = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!lightboxPhoto) return;
      if (e.key === 'Escape') setLightboxPhoto(null);
      if (e.key === 'ArrowRight') {
        const next = (lightboxIndex + 1) % constructionPhotos.length;
        setLightboxIndex(next); setLightboxPhoto(constructionPhotos[next]);
      }
      if (e.key === 'ArrowLeft') {
        const prev = (lightboxIndex - 1 + constructionPhotos.length) % constructionPhotos.length;
        setLightboxIndex(prev); setLightboxPhoto(constructionPhotos[prev]);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxPhoto, lightboxIndex]);

  const toggleTechSpec = (id: string) => setOpenTechSpec(openTechSpec === id ? null : id);

  const resourceSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Resources',
    url: canonicalUrl,
    description: 'Technical knowledge, construction standards, materials and practices that reflect our commitment to quality.',
    publisher: { '@type': 'ConstructionBusiness', name: siteConfig.companyName, url: siteConfig.siteUrl },
  };

  const qualityStandards = [
    { icon: ShieldCheck, title: 'Quality Assurance', stat: '100%', statLabel: 'Inspected', description: 'Multi-stage inspection and quality checks throughout every phase of construction.', details: 'From raw material testing to final inspection, our engineers perform rigorous quality control checks at every critical milestone.', image: '/images/Quality Assurance 1.png' },
    { icon: Building2, title: 'Structural Standards', stat: '15+', statLabel: 'Years Experience', description: 'Careful structural planning, engineering practices and construction standards.', details: 'Every foundation, beam, and column design undergoes structural audit and load testing to ensure complete stability.', image: '/images/Structural Standards 1.png' },
    { icon: Layers, title: 'Material Quality', stat: 'Grade A', statLabel: 'Materials Only', description: 'Selection of reliable construction materials and trusted brands.', details: 'We source high-grade TMT steel, high-strength cement, aggregates, and verified construction inputs from reputed manufacturers.', image: '/images/Material Quality 1.png' },
    { icon: HardHat, title: 'Safety Standards', stat: 'Zero', statLabel: 'Accident Policy', description: 'Safety-focused construction practices designed to protect workers, clients and projects.', details: 'Strict on-site safety guidelines, protective equipment compliance, and routine safety audits protect every site worker and visitor.', image: '/images/Safety Standards 1.png' }
  ];

  const techSpecs = [
    { id: 'footings', title: 'Types of Footings', shortDesc: 'Isolated, raft, strip, and pile footings designed according to soil bearing capacity.', content: 'Foundation choices depend heavily on site soil analysis and structural load requirements. We execute Isolated Footings for residential structures with stable soil, Combined & Raft Footings for multi-story load distribution, and Reinforced Concrete Pile Footings for high load or clayey soil conditions.' },
    { id: 'columns', title: 'Types of Columns', shortDesc: 'Rectangular, square, circular, and composite reinforced concrete columns.', content: 'Columns serve as primary vertical load-bearing members. We construct reinforced concrete columns using precision formwork, high-yield TMT rebar detailing, and high-performance concrete mix grades to resist compression and lateral bending loads.' },
    { id: 'retaining-walls', title: 'Retaining Walls', shortDesc: 'Cantilever, gravity, and basement retaining walls for earth pressure mitigation.', content: 'Designed to retain soil and resist lateral hydrostatic pressures, our reinforced concrete retaining walls feature proper weep-hole drainage systems, waterproof membrane barriers, and structural reinforcement for long-term earth stability.' },
    { id: 'partition-walls', title: 'Partition Walls', shortDesc: 'AAC block, solid concrete block, and traditional clay brick wall systems.', content: 'Non-load-bearing internal partitions built using lightweight AAC blocks for superior thermal insulation and sound dampening, or solid concrete masonry for high durability in wet and utility zones.' },
    { id: 'beams', title: 'Beams', shortDesc: 'T-beams, L-beams, continuous beams, and plinth beams for flexural load support.', content: 'Horizontal structural members engineered to transfer floor loads directly to columns. Proper rebar placement, stirrup spacing, and adequate concrete cover ensure maximum moment capacity and crack resistance.' },
    { id: 'staircases', title: 'Staircases', shortDesc: 'Dog-legged, cantilevered, spiral, and straight flight RCC staircase structures.', content: 'Custom-designed RCC staircases built with precise tread and riser geometry for ergonomic comfort, sound acoustic dampening, and high structural safety under live loading.' },
    { id: 'slabs', title: 'Slabs', shortDesc: 'One-way, two-way, ribbed, and flat slab structural floor systems.', content: 'Reinforced concrete floor slabs designed with optimal thickness and steel reinforcement ratios to minimize deflection. We ensure strict curing processes to attain target compressive strength.' },
    { id: 'brick-walls', title: 'Brick Walls', shortDesc: 'First-class wire-cut clay bricks and fly-ash bricks laid with rich mortar mix.', content: 'Outer envelope masonry utilizing high-density clay or fly-ash bricks bonded with rich cement-sand mortar, offering excellent structural rigidity, weather resistance, and thermal mass.' },
    { id: 'concrete', title: 'Concrete', shortDesc: 'Ready-mix concrete (RMC) and site-mixed concrete with strict water-cement ratios.', content: 'We use laboratory-tested M20, M25, and M30 grade concrete mixes with controlled slump, vibrating compaction, and continuous moist curing for maximum durability and dense matrix formation.' }
  ];

  const materialCategories = [
    { id: 'steel', title: 'Steel', icon: Hammer, badge: 'Fe 550D TMT', shortDesc: 'High-ductility Fe 550D grade Thermo-Mechanically Treated (TMT) steel bars.', criteria: 'When selecting steel, South India Civil Contractors prioritizes yield strength, ductility, corrosion resistance, and seismic resistance. High-grade Fe 550D TMT rebars ensure superior bonding with concrete and flexibility during earth movement.', highlight: 'Seismic-resistant & corrosion-proof' },
    { id: 'cement', title: 'Cement', icon: Layers, badge: '53 Grade OPC', shortDesc: '53 Grade Ordinary Portland Cement (OPC) and Portland Pozzolana Cement (PPC).', criteria: 'We choose cement based on compressive strength development, setting times, and chemical resistance. 53-grade OPC is specified for structural columns and beams, while PPC is preferred for plastering and masonry due to low heat of hydration.', highlight: 'High compressive strength development' },
    { id: 'wood', title: 'Wood', icon: Sparkles, badge: 'Seasoned Teak', shortDesc: 'Seasoned teak wood, engineered wood, and high-density fiberboard (HDF).', criteria: 'Selection centers on moisture content, grain density, termiticide treatment, and structural dimensional stability. Hardwoods are thoroughly seasoned to prevent warping and shrinkage over time.', highlight: 'Termiticide treated & dimensionally stable' },
    { id: 'electrical', title: 'Electrical', icon: Zap, badge: 'FR-LSH Wiring', shortDesc: 'Flame-retardant low-smoke (FR-LSH) copper wiring and modular switchgear.', criteria: 'Electrical safety requires fire-retardant insulation, high conductivity, thermal overload protection, and reliable grounding systems to safeguard building occupants and electronic appliances.', highlight: 'Fire-retardant & high conductivity' },
    { id: 'plumbing', title: 'Plumbing', icon: Droplet, badge: 'CPVC / UPVC', shortDesc: 'CPVC pipes for hot water supply, UPVC for cold lines, and SWR for drainage.', criteria: 'Plumbing materials are evaluated for pressure ratings, lead-free composition, chemical resistance, leak-proof jointing technology, and smooth internal walls that prevent scaling and clogging.', highlight: 'Lead-free & pressure-rated' },
    { id: 'painting', title: 'Painting', icon: Paintbrush, badge: 'Low-VOC Acrylic', shortDesc: 'Low-VOC acrylic emulsions, weather-shield exterior paints, and wall putties.', criteria: 'Paints are selected for scrub resistance, color retention, low volatile organic compound (VOC) emissions, fungal resistance, and waterproofing capabilities against tropical monsoon conditions.', highlight: 'Weather-shield & fungal resistant' },
    { id: 'flooring', title: 'Flooring', icon: Ruler, badge: 'Vitrified Tiles', shortDesc: 'Double-charged vitrified tiles, natural granite, and anti-skid porcelain flooring.', criteria: 'Flooring materials are chosen for breaking strength, water absorption rate (under 0.05%), stain resistance, slip resistance in wet zones, and uniform tonal aesthetics.', highlight: 'Water absorption under 0.05%' },
    { id: 'sanitary', title: 'Sanitary', icon: CheckCircle2, badge: 'Brass-Core Chrome', shortDesc: 'Brass-core chrome faucets, dual-flush water closets, and ceramic sanitaryware.', criteria: 'Sanitary fixtures are evaluated for water efficiency, solid brass construction, anti-bacterial glaze coatings, smooth valve cartridge operation, and ease of maintenance.', highlight: 'Anti-bacterial glaze & water-efficient' },
    { id: 'doors', title: 'Doors & Windows', icon: Building2, badge: 'UPVC / Aluminum', shortDesc: 'Heavy-duty flush doors, UPVC/aluminum sliding windows, and stainless steel hardware.', criteria: 'Door and window assemblies are selected based on wind-load resistance, acoustic insulation, multi-point locking security, smooth bearing hinges, and weather stripping.', highlight: 'Wind-load resistant & acoustic insulated' }
  ];

  const methodologies = [
    { step: '01', title: 'Site Survey & Planning', description: 'Topographical surveying, soil bearing test reports, boundary verification, and master schedule creation before ground excavation starts.', photo: '/images/Site Survey & Planning.png' },
    { step: '02', title: 'Foundation Engineering', description: 'Controlled excavation, Anti-Termite Treatment (ATT), lean PCC blinding layer, rebar mat fabrication, and precision foundation casting.', photo: '/images/Foundation Engineering.png' },
    { step: '03', title: 'Structural Construction', description: 'Erection of rigid shuttering formwork, rebar placement with concrete cover blocks, RMC pouring, mechanical compaction, and 14 to 28 days wet curing.', photo: '/images/Structural Construction.png' },
    { step: '04', title: 'MEP Integration', description: 'Concealed electrical conduit routing, plumbing pipe chase cutting, pressure testing, HVAC duct provisions, and distribution panel wiring.', photo: '/images/MEP Conduit Routing & Plastering.png' },
    { step: '05', title: 'Finishing Works', description: 'Wall plastering, tile leveling, waterproof membrane application, door frame installation, primer coats, and surface texture applications.', photo: '/images/Finishing Works.png' },
    { step: '06', title: 'Quality Control', description: 'Continuous dimensional verification, slump tests, concrete cube compression testing, plumbing leak testing, and final snag list resolution.', photo: '/images/Quality Control.png' }
  ];

  const safetyProtocols = [
    { title: 'Personal Protective Equipment', desc: 'Mandatory helmets, safety shoes, high-vis vests, and safety harnesses for elevated work.' },
    { title: 'Regular Safety Training', desc: 'Toolbox talks and safety briefings prior to high-risk construction activities.' },
    { title: 'Scaffolding Inspection', desc: 'Rigid steel scaffolding with guardrails, toe boards, and certified safety tag inspections.' },
    { title: 'Emergency Response', desc: 'On-site first aid stations, designated safety marshals, and established emergency contact procedures.' },
    { title: 'Fire Safety Measures', desc: 'Fire extinguishers stationed at critical risk zones and hot-work safety permits.' },
    { title: 'Proper Site Signage', desc: 'Clear warning signs, hazard markings, deep excavation barricades, and entry restrictions.' },
    { title: 'Electrical Safety', desc: 'Residual Current Circuit Breakers (RCCB), industrial power distribution boxes, and insulated cabling.' },
    { title: 'Material Handling & Storage', desc: 'Safe crane rigging protocols, structured material stacking, and secured hazardous substance storage.' }
  ];

  const complianceCards = [
    { icon: FileCheck2, title: 'Building Regulations', description: 'Aligned with applicable requirements, local municipal bylaws, setback rules, and building floor coverage guidelines.' },
    { icon: Layers, title: 'Environmental Practices', description: 'Responsible waste management, rainwater harvesting integration, and dust containment procedures on every site.' },
    { icon: HardHat, title: 'Labour & Worker Safety', description: 'Aligned with applicable requirements for worker welfare, safe working hours, and protective workplace amenities.' },
    { icon: ShieldCheck, title: 'Fire Safety', description: 'Structural designs incorporate fire-resistant masonry, designated escape stairwells, and emergency exit planning.' },
    { icon: Building2, title: 'Structural Safety', description: 'Engineering calculations aligned with applicable load distribution, wind speed parameters, and site-specific structural considerations.' },
    { icon: CheckCircle2, title: 'Occupancy & Approvals', description: 'Assistance with documentation required for utility connections, completion certificates, and local body sign-offs.' }
  ];

  const activeMaterial = materialCategories.find(m => m.id === activeMaterialTab)!;

  return (
    <main className="min-h-screen bg-[#EDE3D3] text-[#131D23] selection:bg-[#9A6048]/30">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(resourceSchema) }} />

      {/* LIGHTBOX */}
      {lightboxPhoto && (
        <div className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center" onClick={() => setLightboxPhoto(null)}>
          <button onClick={() => setLightboxPhoto(null)} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors" aria-label="Close">
            <X className="w-5 h-5" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); const prev = (lightboxIndex - 1 + constructionPhotos.length) % constructionPhotos.length; setLightboxIndex(prev); setLightboxPhoto(constructionPhotos[prev]); }} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors" aria-label="Previous">
            <ChevronDown className="w-5 h-5 -rotate-90" />
          </button>
          <img src={lightboxPhoto} alt="Construction site" className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl shadow-2xl" onClick={(e) => e.stopPropagation()} />
          <button onClick={(e) => { e.stopPropagation(); const next = (lightboxIndex + 1) % constructionPhotos.length; setLightboxIndex(next); setLightboxPhoto(constructionPhotos[next]); }} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors" aria-label="Next">
            <ChevronDown className="w-5 h-5 rotate-90" />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-xs">{lightboxIndex + 1} / {constructionPhotos.length} · Press ESC or click outside to close</div>
        </div>
      )}

      {/* ═══ SECTION 1 — CINEMATIC HERO ═══ */}
      <header className="relative h-[90vh] min-h-[600px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/resources_hero.jpg" alt="South India Civil Contractors construction site" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B09] via-[#0D0B09]/60 to-[#131D23]/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0B09]/60 via-transparent to-transparent" />
        </div>
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <Breadcrumbs items={[{ name: 'Resources' }]} />
            </div>
            <div className="flex items-center gap-3 mb-5 slide-up">
              <div className="w-8 h-[2px] bg-[#B78A55]" />
              <span className="text-[11px] font-bold tracking-[0.28em] text-[#B78A55] uppercase">Technical Knowledge & Construction Standards</span>
            </div>
            <h1 className="font-serif-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-[#EDE3D3] leading-[1.05] tracking-tight mb-6 slide-up slide-up-delay-1 max-w-4xl">
              Construction{' '}<span className="animate-text-shimmer">Resources</span>
            </h1>
            <p className="text-base sm:text-lg text-[#D4C9BC]/90 max-w-2xl leading-relaxed slide-up slide-up-delay-2 mb-8">
              The technical knowledge, engineering standards, premium materials, and construction practices that define every project we build.
            </p>
            <div className="flex flex-wrap gap-2 slide-up slide-up-delay-3">
              {[
                { label: 'Quality Standards', href: '#quality-standards' },
                { label: 'Technical Specs', href: '#technical-specifications' },
                { label: 'Materials', href: '#materials-brands' },
                { label: 'Process', href: '#construction-methodologies' },
                { label: 'Safety', href: '#safety-protocols' },
                { label: 'Site Gallery', href: '#site-gallery' },
              ].map((item) => (
                <a key={item.href} href={item.href} className="px-4 py-2 rounded-full border border-[#EDE3D3]/25 bg-[#EDE3D3]/10 backdrop-blur-sm text-[#EDE3D3]/85 text-xs font-semibold tracking-wide hover:bg-[#B78A55]/30 hover:border-[#B78A55]/60 hover:text-[#EDE3D3] transition-all duration-300">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* ═══ STATS RIBBON ═══ */}
      <div className="bg-[#1C1510] border-b border-[#EDE3D3]/8 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-[#EDE3D3]/10">
          {[
            { value: '500+', label: 'Projects Delivered' },
            { value: '15+', label: 'Years Experience' },
            { value: 'M20–M30', label: 'Concrete Grades Used' },
            { value: '100%', label: 'Site Quality Inspected' },
          ].map((stat, i) => (
            <div key={i} className={`text-center ${i > 0 ? 'pl-6' : ''}`}>
              <div className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#B78A55]">{stat.value}</div>
              <div className="text-[10px] tracking-widest text-[#D4C9BC]/60 uppercase mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ═══ SECTION 2 — QUALITY STANDARDS — PHOTO CARDS ═══ */}
      <section id="quality-standards" className="bg-[#EDE3D3] py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div ref={addRevealRef} className="reveal-on-scroll">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-[2px] bg-[#9A6048]" />
                <span className="text-[11px] font-bold tracking-[0.24em] text-[#9A6048] uppercase">Benchmark of Excellence</span>
              </div>
              <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#131D23]">Quality Standards</h2>
            </div>
            <p ref={addRevealRef} className="reveal-on-scroll text-sm text-[#6F6256] max-w-sm leading-relaxed reveal-delay-1">
              Our commitment to quality through rigorous standards and proven construction practices at every stage.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {qualityStandards.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} ref={addRevealRef} className={`reveal-scale reveal-delay-${index + 1} group relative overflow-hidden rounded-2xl bg-white border border-[#131D23]/10 hover:border-[#9A6048]/40 shadow-md card-popup-hover flex flex-col`}>
                  <div className="relative h-44 overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#131D23]/80 via-[#131D23]/20 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <div className="bg-[#9A6048] text-white px-3 py-1 rounded-full text-xs font-bold">{item.stat} <span className="font-normal opacity-80">{item.statLabel}</span></div>
                    </div>
                    <div className="absolute top-3 right-3 w-9 h-9 rounded-xl bg-[#EDE3D3] flex items-center justify-center text-[#9A6048]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-serif-heading text-lg font-bold text-[#131D23] mb-2">{item.title}</h3>
                    <p className="text-xs text-[#6F6256] leading-relaxed mb-4 flex-1">{item.description}</p>
                    <div className="pt-4 border-t border-[#131D23]/8 text-[11px] text-[#6F6256]/80 leading-relaxed">{item.details}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 3 — TECHNICAL SPECIFICATIONS — SPLIT LAYOUT ═══ */}
      <section id="technical-specifications" className="bg-[#18130E] text-[#EDE3D3] py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4 lg:sticky lg:top-24 lg:self-start">
              <div ref={addRevealRef} className="reveal-on-scroll">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-[2px] bg-[#9A6048]" />
                  <span className="text-[11px] font-bold tracking-[0.24em] text-[#B78A55] uppercase">Engineering Components</span>
                </div>
                <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#EDE3D3] mb-5">Technical Specs</h2>
                <p className="text-sm text-[#D4C9BC]/80 leading-relaxed mb-8">Comprehensive construction elements and structural components designed to the highest engineering standards.</p>
                <div className="relative rounded-2xl overflow-hidden h-64 sm:h-72">
                  <img src="/images/Technical Specs.png" alt="Structural construction" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#18130E]/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-[#B78A55] text-xs font-bold tracking-widest uppercase mb-1">Our Approach</p>
                    <p className="text-white/90 text-xs leading-relaxed">Every structural element is engineered with precision formwork, quality rebar and controlled curing.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-8 space-y-3">
              {techSpecs.map((spec, idx) => {
                const isOpen = openTechSpec === spec.id;
                return (
                  <div key={spec.id} ref={addRevealRef} className={`reveal-on-scroll reveal-delay-${Math.min(idx + 1, 4)} rounded-2xl border transition-all duration-300 ${isOpen ? 'bg-[#251E17] border-[#9A6048]/60 shadow-lg' : 'bg-[#251E17]/60 border-[#EDE3D3]/8 hover:border-[#B78A55]/30'}`}>
                    <button onClick={() => toggleTechSpec(spec.id)} className="w-full text-left p-5 flex items-start justify-between gap-4 focus:outline-none" aria-expanded={isOpen}>
                      <div>
                        <h3 className="font-serif-heading text-base sm:text-lg font-bold text-[#EDE3D3] mb-1">{spec.title}</h3>
                        <p className="text-xs text-[#D4C9BC]/60 leading-relaxed">{spec.shortDesc}</p>
                      </div>
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${isOpen ? 'bg-[#9A6048] text-white' : 'bg-[#EDE3D3]/10 text-[#B78A55]'}`}>
                        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 border-t border-[#EDE3D3]/10 text-sm text-[#D4C9BC] leading-relaxed animate-fadeIn">{spec.content}</div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 4 — MATERIALS — INTERACTIVE TAB PANEL ═══ */}
      <section id="materials-brands" className="bg-[#F1E8DC] pt-16 pb-12 lg:pt-24 lg:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div ref={addRevealRef} className="reveal-on-scroll">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-[2px] bg-[#9A6048]" />
                <span className="text-[11px] font-bold tracking-[0.24em] text-[#9A6048] uppercase">Raw Material Selection</span>
              </div>
              <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#131D23]">Premium Materials</h2>
            </div>
            <p ref={addRevealRef} className="reveal-on-scroll text-sm text-[#6F6256] max-w-sm leading-relaxed reveal-delay-1">Quality materials selected for durability, performance, and long-term structural value.</p>
          </div>
          <div ref={addRevealRef} className="reveal-on-scroll flex flex-wrap gap-2 mb-10">
            {materialCategories.map((mat) => {
              const Icon = mat.icon;
              const isActive = activeMaterialTab === mat.id;
              return (
                <button key={mat.id} onClick={() => setActiveMaterialTab(mat.id)} className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold tracking-wide border transition-all duration-250 ${isActive ? 'bg-[#131D23] border-[#131D23] text-[#EDE3D3] shadow-md' : 'bg-white border-[#131D23]/12 text-[#45382F] hover:border-[#9A6048]/50 hover:bg-[#EDE3D3]'}`}>
                  <Icon className="w-3.5 h-3.5" />
                  {mat.title}
                </button>
              );
            })}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
            <div className="lg:col-span-3 bg-white rounded-3xl p-8 sm:p-10 border border-[#131D23]/10 shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#EDE3D3] flex items-center justify-center text-[#9A6048]">
                    {React.createElement(activeMaterial.icon, { className: 'w-6 h-6' })}
                  </div>
                  <div>
                    <div className="text-[10px] font-bold tracking-widest text-[#9A6048] uppercase mb-0.5">{activeMaterial.badge}</div>
                    <h3 className="font-serif-heading text-2xl font-bold text-[#131D23]">{activeMaterial.title}</h3>
                  </div>
                </div>
                <p className="text-[#45382F] text-sm leading-relaxed mb-6">{activeMaterial.shortDesc}</p>
                <div className="bg-[#EDE3D3] rounded-2xl p-5 mb-6">
                  <div className="text-[10px] font-bold tracking-widest text-[#9A6048] uppercase mb-2">Selection Criteria & Engineering Considerations</div>
                  <p className="text-[#45382F] text-xs leading-relaxed">{activeMaterial.criteria}</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5 px-4 py-3 bg-[#131D23] rounded-full w-fit">
                <CheckCircle2 className="w-4 h-4 text-[#B78A55] flex-shrink-0" />
                <span className="text-xs text-[#EDE3D3] font-semibold">{activeMaterial.highlight}</span>
              </div>
            </div>
            <div className="lg:col-span-2 grid grid-cols-3 gap-2">
              {materialCategories.map((mat) => {
                const Icon = mat.icon;
                const isActive = mat.id === activeMaterialTab;
                return (
                  <button key={mat.id} onClick={() => setActiveMaterialTab(mat.id)} className={`aspect-square rounded-2xl flex flex-col items-center justify-center gap-1.5 p-2 border transition-all duration-250 ${isActive ? 'bg-[#131D23] border-[#131D23] text-[#EDE3D3] shadow-lg scale-95' : 'bg-white border-[#131D23]/10 text-[#6F6256] hover:border-[#9A6048]/40 hover:bg-[#EDE3D3]'}`}>
                    <Icon className="w-5 h-5" />
                    <span className="text-[9px] font-bold tracking-wide uppercase text-center leading-tight">{mat.title}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 5 — PROCESS — ALTERNATING PHOTO/TEXT ROWS ═══ */}
      <section id="construction-methodologies" className="bg-[#EDE3D3] pt-12 pb-20 lg:pt-16 lg:pb-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div ref={addRevealRef} className="reveal-on-scroll">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="w-6 h-[2px] bg-[#9A6048]" />
                <span className="text-[11px] font-bold tracking-[0.24em] text-[#9A6048] uppercase">Systematic Workflow</span>
                <div className="w-6 h-[2px] bg-[#9A6048]" />
              </div>
              <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#131D23] mb-4">Construction Methodology</h2>
              <p className="text-sm text-[#6F6256] leading-relaxed">A systematic approach to planning, execution and quality control — from survey to handover.</p>
            </div>
          </div>
          <div className="space-y-5">
            {methodologies.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={item.step} ref={addRevealRef} className="reveal-on-scroll group grid grid-cols-1 md:grid-cols-12 gap-0 rounded-3xl overflow-hidden border border-[#131D23]/10 shadow-md hover:shadow-xl hover:border-[#9A6048]/30 transition-all duration-500">
                  <div className={`md:col-span-4 relative h-52 md:h-auto ${isEven ? 'md:order-1' : 'md:order-2'} overflow-hidden`}>
                    <img src={item.photo} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#131D23]/60 to-transparent" />
                    <div className="absolute top-4 left-4 font-serif-heading text-5xl font-bold text-white/20 leading-none select-none">{item.step}</div>
                  </div>
                  <div className={`md:col-span-8 bg-white p-7 sm:p-9 flex flex-col justify-center ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-serif-heading text-3xl font-bold text-[#9A6048]">{item.step}</span>
                      <div className="w-8 h-[1.5px] bg-[#B78A55]" />
                    </div>
                    <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#131D23] mb-3">{item.title}</h3>
                    <p className="text-sm text-[#6F6256] leading-relaxed">{item.description}</p>
                    <div className="mt-5 flex items-center gap-2 text-[#9A6048] text-xs font-bold tracking-wide group-hover:gap-3 transition-all duration-300">
                      <span>Stage Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 6 — SITE GALLERY ═══ */}
      <section id="site-gallery" className="bg-[#131D23] py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#EDE3D3]/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div ref={addRevealRef} className="reveal-on-scroll">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-[2px] bg-[#9A6048]" />
                <span className="text-[11px] font-bold tracking-[0.24em] text-[#B78A55] uppercase">Live Project Documentation</span>
              </div>
              <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#EDE3D3]">Site Gallery</h2>
            </div>
            <div ref={addRevealRef} className="reveal-on-scroll reveal-delay-1 flex items-center gap-2 text-[#D4C9BC]/60 text-sm">
              <Play className="w-4 h-4 text-[#B78A55]" />
              <span>Click any photo to view full screen (12 Photos)</span>
            </div>
          </div>

          {/* Structured & Uniform 4x3 Grid (No gaps, balanced aspect ratio) */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {constructionPhotos.map((photo, i) => (
              <button
                key={i}
                ref={addRevealRef}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer border border-[#EDE3D3]/10 hover:border-[#B78A55] transition-all duration-300 shadow-md hover:shadow-2xl bg-[#1C242A]"
                onClick={() => { setLightboxIndex(i); setLightboxPhoto(photo); }}
                aria-label={`View construction photo ${i + 1}`}
              >
                <img
                  src={photo}
                  alt={`South India Civil Contractors construction site ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#131D23]/0 group-hover:bg-[#131D23]/50 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100 w-11 h-11 rounded-full bg-white/25 backdrop-blur-md flex items-center justify-center border border-white/40 shadow-xl">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-2.5 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 bg-[#131D23]/90 text-[#B78A55] rounded-md backdrop-blur-sm border border-white/10">
                    Photo 0{i + 1}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 7 — SAFETY PROTOCOLS ═══ */}
      <section id="safety-protocols" className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0D0B09]">
        {/* Background Image & Light Gradient Overlay — Bright & Visible matching reference image */}
        <div className="absolute inset-0">
          <img
            src="/images/resources_safety.jpg"
            alt="Construction safety"
            className="w-full h-full object-cover object-center brightness-95 contrast-105"
          />
          {/* Subtle gradient: soft shadow behind left text, clear photo on center/right */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Intro Column with drop-shadows for high readability over visible photo */}
            <div className="lg:col-span-5">
              <div ref={addRevealRef} className="reveal-on-scroll">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-[2px] bg-[#9A6048]" />
                  <span className="text-[11px] font-bold tracking-[0.26em] text-[#B78A55] uppercase drop-shadow">
                    Zero Accident Culture
                  </span>
                </div>
                <h2 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1] drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
                  Safety <br />
                  <span className="text-[#E86C38]">Protocols</span>
                </h2>
                <p className="text-base text-[#EDE3D3] leading-relaxed mb-8 max-w-lg drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                  Safety-focused practices for responsible construction — protecting every worker, visitor, and client across all site operations.
                </p>
                <div className="flex items-center gap-4">
                  <div className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#9A6048] hover:bg-[#86513B] text-white rounded-full text-xs font-bold tracking-wider uppercase transition-all shadow-xl shadow-black/40 cursor-pointer">
                    <ShieldCheck className="w-4 h-4 text-white" />
                    <span>PPE Mandatory On All Sites</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Container — Translucent Dark Panel matching reference image */}
            <div className="lg:col-span-7">
              <div ref={addRevealRef} className="reveal-on-scroll bg-[#12171D]/85 backdrop-blur-md border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {safetyProtocols.slice(0, 4).map((protocol, index) => (
                    <div
                      key={index}
                      className="group bg-[#1A222A]/75 border border-white/10 hover:border-[#9A6048]/80 rounded-2xl p-5 hover:bg-[#202B35]/90 transition-all duration-300 flex flex-col justify-between"
                    >
                      <div>
                        <div className="w-12 h-12 rounded-full bg-[#9A6048]/20 border border-[#9A6048]/50 flex items-center justify-center text-[#B78A55] mb-4 group-hover:bg-[#9A6048] group-hover:text-white transition-all duration-300">
                          <ShieldCheck className="w-5 h-5" />
                        </div>
                        <h3 className="font-serif-heading text-base font-bold text-white mb-2 leading-snug">
                          {protocol.title}
                        </h3>
                        <p className="text-xs text-[#D4C9BC] leading-relaxed mb-4">
                          {protocol.desc}
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5 text-[#B78A55] text-xs font-semibold group-hover:text-[#E86C38] transition-colors">
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Stats Bar matching website reference image */}
          <div className="border-t border-white/15 mt-16 pt-8 grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-white/10 bg-black/30 backdrop-blur-sm rounded-2xl p-4">
            <div className="flex items-center gap-3.5 pl-2">
              <div className="w-10 h-10 rounded-full bg-[#9A6048]/20 border border-[#9A6048]/40 flex items-center justify-center text-[#B78A55] flex-shrink-0">
                <HardHat className="w-5 h-5" />
              </div>
              <div>
                <div className="font-serif-heading text-lg font-bold text-white">100+</div>
                <div className="text-[11px] text-[#D4C9BC]">Skilled Professionals</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 pl-6">
              <div className="w-10 h-10 rounded-full bg-[#9A6048]/20 border border-[#9A6048]/40 flex items-center justify-center text-[#B78A55] flex-shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <div className="font-serif-heading text-lg font-bold text-white">50+</div>
                <div className="text-[11px] text-[#D4C9BC]">Projects Completed</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 pl-6">
              <div className="w-10 h-10 rounded-full bg-[#9A6048]/20 border border-[#9A6048]/40 flex items-center justify-center text-[#B78A55] flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="font-serif-heading text-lg font-bold text-white">Safety First</div>
                <div className="text-[11px] text-[#D4C9BC]">On Every Site</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 pl-6">
              <div className="w-10 h-10 rounded-full bg-[#9A6048]/20 border border-[#9A6048]/40 flex items-center justify-center text-[#B78A55] flex-shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <div className="font-serif-heading text-lg font-bold text-white">Trusted Partner</div>
                <div className="text-[11px] text-[#D4C9BC]">For a Stronger Tomorrow</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 8 — COMPLIANCE ═══ */}
      <section id="compliance-standards" className="bg-[#F1E8DC] py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div ref={addRevealRef} className="reveal-on-scroll">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="w-6 h-[2px] bg-[#9A6048]" />
                <span className="text-[11px] font-bold tracking-[0.24em] text-[#9A6048] uppercase">Regulatory Alignment</span>
                <div className="w-6 h-[2px] bg-[#9A6048]" />
              </div>
              <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#131D23] mb-4">Compliance & Standards</h2>
              <p className="text-sm text-[#6F6256] leading-relaxed">Responsible construction practices aligned with applicable industry and regulatory requirements.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {complianceCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div key={index} ref={addRevealRef} className={`reveal-scale reveal-delay-${Math.min(index % 3 + 1, 4)} group bg-white rounded-2xl p-7 border border-[#131D23]/10 hover:border-[#9A6048]/50 transition-all duration-300 card-popup-hover shadow-md`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#EDE3D3] flex items-center justify-center text-[#9A6048] group-hover:bg-[#9A6048] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif-heading text-base font-bold text-[#131D23]">{card.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#6F6256] leading-relaxed">{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 9 — CTA ═══ */}
      <section className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/resources_video_preview.jpg" alt="Construction project" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#131D23]/95 via-[#131D23]/80 to-[#131D23]/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <div ref={addRevealRef} className="reveal-on-scroll">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#9A6048]/20 border border-[#B78A55]/30 text-xs font-semibold text-[#B78A55] uppercase tracking-wider mb-6">Get In Touch</div>
              <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#EDE3D3] mb-5 leading-[1.1]">Planning Your Next Construction Project?</h2>
              <p className="text-sm sm:text-base text-[#D4C9BC] leading-relaxed mb-8">Speak with South India Civil Contractors about your requirements, project scope and construction goals.</p>
              <div className="flex flex-wrap gap-4">
                <button onClick={onOpenQuote} className="bg-[#9A6048] hover:bg-[#86513B] text-[#EDE3D3] font-semibold text-xs sm:text-sm tracking-wider uppercase px-8 py-4 rounded-full shadow-md hover:shadow-terracotta-glow transition-all duration-300 flex items-center gap-2.5 active:scale-95">
                  <span>Get a Quote</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => { if (onNavigateContact) { onNavigateContact(); } else { window.location.href = '/contact'; } }}
                  className="bg-white/10 hover:bg-white/20 border border-[#EDE3D3]/30 text-[#EDE3D3] font-semibold text-xs sm:text-sm tracking-wider uppercase px-8 py-4 rounded-full transition-all duration-300"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
