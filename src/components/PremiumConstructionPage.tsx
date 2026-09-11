import React, { useState, useEffect } from 'react';
import { siteConfig } from '../config/site';
import { Breadcrumbs } from './Breadcrumbs';
import {
  CheckCircle2, ArrowRight, Phone,
  Layers, Droplets, Zap, Grid3X3,
  Paintbrush, ShieldCheck, Award, Wrench, Building2,
  Home, Warehouse, Sparkles, FileText,
  ChevronRight, ArrowUpRight
} from 'lucide-react';

interface PremiumConstructionPageProps {
  onNavigateHome: () => void;
  onOpenQuote: () => void;
}

// Available construction photos
const photos = {
  hero: "/images/resources_hero.jpg",
  foundation: "/images/images of construction/WhatsApp Image 2026-09-05 at 1.01.10 PM.jpeg",
  plumbing: "/images/Plumbing, Drainage & Sanitary Engineering.png",
  electrical: "/images/Electrical Excellence & Smart Cabling.png",
  doors: "/images/Teakwood Main Entrance.png",
  painting: "/images/Multi-Coat Painting &.png",
  villas: "/images/Luxury Independent Villas.png",
  apartments: "/images/Residential Apartments.png",
  commercial: "/images/Commercial Buildings.png",
  industrial: "/images/Industrial Warehouses.png",
  finishes: "/images/resources_safety.jpg",
  finalCta: "/images/resources_video_preview.jpg",
};

export const PremiumConstructionPage: React.FC<PremiumConstructionPageProps> = ({
  onNavigateHome,
  onOpenQuote,
}) => {
  useEffect(() => {
    document.title = 'Premium Construction Services & Technical Specifications | South India Civil Contractors';
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  // State for Section 4 — Doors & Joinery active tab
  const [activeDoorTab, setActiveDoorTab] = useState(0);

  // State for Section 8 — Civil Capabilities active project type
  const [activeProjectCap, setActiveProjectCap] = useState(0);

  const doorItems = [
    {
      id: '01',
      title: 'Teakwood Main Entrance',
      subtitle: 'First-Grade Burma / Teakwood',
      desc: 'First-grade Burma / Teakwood main door frame (5" x 3") with 38mm solid teak flush door shutter, heavy brass hardware, bi-metric smart lock, and melamine polish finish.',
      specs: ['Frame: 5" x 3" Burma Teak', 'Shutter: 38mm Solid Teak', 'Lock: Biometric Smart Lock', 'Finish: Multi-coat Melamine'],
      image: '/images/Teakwood Main Entrance.png'
    },
    {
      id: '02',
      title: 'Internal Flush & WPC Doors',
      subtitle: 'Waterproof Membrane & WPC',
      desc: 'Honne/Salwood internal door frames with waterproof membrane shutters for bedrooms and WPC (Wood Polymer Composite) 100% waterproof doors for toilets and utility areas.',
      specs: ['Frames: Honne / Salwood', 'Bedroom Shutters: Waterproof Membrane', 'Toilet Doors: 100% WPC Composite', 'Hardware: Stainless Steel 304'],
      image: '/images/Internal Flush & WPC Doors.png'
    },
    {
      id: '03',
      title: 'Kommerling UPVC Windows',
      subtitle: 'German Multi-Chambered UPVC',
      desc: 'Multi-chambered German UPVC sliding / openable windows (Fenesta / Kommerling) with 5mm toughened glass, stainless steel bug mesh, and steel reinforced internal profiles.',
      specs: ['Profile: German Kommerling UPVC', 'Glass: 5mm Toughened Clear Glass', 'Mesh: Stainless Steel Bug Mesh', 'Reinforcement: Galvanized Steel Core'],
      image: '/images/Kommerling UPVC Windows.png'
    }
  ];

  const flooringMaterials = [
    {
      title: 'Vitrified Living Tiles',
      brand: 'Kajaria / Nitco / Somany',
      desc: 'Double charged / glazed vitrified tiles (4ft x 2ft or 8ft x 4ft slabs) featuring ultra-low porosity, stain resistance, and high breaking strength.',
      specs: 'Water absorption < 0.05% · High stain resistance · 8ft x 4ft Slabs',
      image: '/images/Vitrified Living Tiles.png'
    },
    {
      title: 'Italian Marble / Granite',
      brand: 'Imported Marble / Black Granite',
      desc: 'Premium imported Italian marble for master bedrooms & staircase, or lapotra finish Black Galaxy granite for heavy foot-traffic areas.',
      specs: 'Mirror-polished Italian Marble · Lapotra Finish Black Granite · Book-matched patterns',
      image: '/images/Italian Marble  Granite.png'
    },
    {
      title: 'Bathroom Anti-Skid Tiles',
      brand: 'RAK / Simpolo Anti-Skid',
      desc: 'GVT anti-skid floor tiles with full-height 7ft designer wall dado cladding and epoxy grout joints to eliminate moisture seepage.',
      specs: 'R10 anti-skid rating · 7ft Wall dado cladding · Waterproof epoxy grout',
      image: '/images/Bathroom Anti-Skid Tiles.png'
    },
    {
      title: 'Kitchen Granite Countertop',
      brand: 'Jet Black Granite / Quartz',
      desc: '40mm thick edge-moulded premium jet-black granite countertop with 2ft height wall tile dado & Carysil quartz double-bowl sink.',
      specs: '40mm edge-moulded granite · 2ft wall dado · Carysil Quartz sink',
      image: '/images/Kitchen Granite Countertop.png'
    }
  ];

  const civilCapabilities = [
    {
      icon: Home,
      title: 'Luxury Independent Villas',
      desc: 'Custom duplex and triplex independent residences crafted to Vaastu and modern architectural aesthetics with premium structural finishes.',
      features: ['Turnkey Architecture & Construction', 'Custom Floor Plan Customization', 'High-End Interior Integration'],
      image: '/images/Luxury Independent Villas.png'
    },
    {
      icon: Building2,
      title: 'Residential Apartments',
      desc: 'Multi-story G+4 to G+12 residential apartment complexes built with heavy lift cores, stilt parking structures, and fire safety systems.',
      features: ['Stilt + Multi-Story Frame', 'RMC Concrete & High-Yield Steel', 'Municipal Bylaw Approvals'],
      image: '/images/Residential Apartments.png'
    },
    {
      icon: Warehouse,
      title: 'Commercial Buildings',
      desc: 'Retail showrooms, corporate headquarters, and mixed-use commercial space construction engineered for high structural load distribution.',
      features: ['High Clear-Height Floor Slabs', 'Structural Glass Facade Provision', 'Heavy-Duty MEP Infrastructure'],
      image: '/images/Commercial Buildings.png'
    },
    {
      icon: Wrench,
      title: 'Industrial Warehouses',
      desc: 'Pre-engineered steel building (PEB) structures, industrial trimix flooring, and factory shed execution built for logistically demanding operations.',
      features: ['Trimix Laser-Screed Flooring', 'PEB Steel Frame Erection', 'Heavy Load Bearing Slab Design'],
      image: '/images/Industrial Warehouses.png'
    }
  ];

  return (
    <div className="min-h-screen bg-[#131D23] text-[#EDE3D3] selection:bg-[#9A6048]/30 selection:text-[#EDE3D3]">
      
      {/* ──────────────────────────────────────────────────────────
          PAGE HERO: RE-DESIGNED CINEMATIC HERO
      ────────────────────────────────────────────────────────── */}
      <header className="relative py-20 lg:py-32 border-b border-[#EDE3D3]/10 overflow-hidden min-h-[85vh] flex items-center">
        {/* Background Image with Dark Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={photos.hero}
            alt="South India Civil Contractors Engineering Site"
            className="w-full h-full object-cover object-center brightness-90 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/95 via-[#0F172A]/85 to-[#0F172A]/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#131D23] via-transparent to-[#0F172A]/70" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-12">
          <Breadcrumbs
            items={[
              { name: 'Services', onClick: onNavigateHome },
              { name: 'Premium Construction' },
            ]}
          />

          <div className="mt-8 max-w-4xl">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#9A6048]/20 border border-[#B78A55]/40 mb-6 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-[#B78A55]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#B78A55]">
                Turnkey Engineering & Technical Masterclass
              </span>
            </div>

            <h1 className="font-serif-heading text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6">
              Premium Construction <br />
              <span className="text-[#B78A55]">Built With Precision. Finished With Confidence.</span>
            </h1>

            <p className="text-base sm:text-xl text-[#D4C9BC] leading-relaxed max-w-3xl mb-10 drop-shadow">
              Explore our detailed construction specifications, material standards, engineering practices, and turnkey execution. From foundation mechanics to high-end interior joinery across South India.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <button
                onClick={onOpenQuote}
                className="bg-[#9A6048] hover:bg-[#86513B] text-white font-bold px-8 py-4 rounded-full shadow-2xl hover:shadow-[#9A6048]/40 transition-all duration-300 flex items-center gap-3 text-xs sm:text-sm uppercase tracking-wider active:scale-95"
              >
                <span>Request Custom Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${siteConfig.phone}`}
                className="px-7 py-4 rounded-full border border-[#EDE3D3]/30 hover:border-[#B78A55] bg-white/10 hover:bg-white/15 backdrop-blur-sm text-white font-semibold text-xs sm:text-sm transition-all flex items-center gap-2.5 uppercase tracking-wider"
              >
                <Phone className="w-4 h-4 text-[#B78A55]" />
                <span>Call Engineer ({siteConfig.phoneDisplay})</span>
              </a>
            </div>
          </div>
        </div>
      </header>


      {/* ──────────────────────────────────────────────────────────
          SECTION 1: FOUNDATION & RCC STRUCTURE (WARM CREAM SECTION)
      ────────────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#EDE3D3] text-[#131D23] border-b border-[#131D23]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* LEFT — EDITORIAL ENGINEERING IMAGE */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#131D23]/10 group">
                <img
                  src={photos.foundation}
                  alt="Foundation & RCC Structure Engineering"
                  className="w-full h-[520px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131D23]/90 via-[#131D23]/20 to-transparent" />
                
                {/* Technical Blueprint Badge */}
                <div className="absolute top-6 left-6 px-4 py-2 bg-[#9A6048] text-white rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                  Phase 01 — Structural Mechanics
                </div>

                <div className="absolute bottom-6 left-6 right-6 p-6 bg-[#131D23]/90 backdrop-blur-md rounded-2xl border border-white/10 text-white">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {['IS 456:2000', 'M20 / M25 Grade', 'Fe-550D TMT'].map((tag, i) => (
                      <span key={i} className="px-2.5 py-1 bg-[#9A6048]/30 border border-[#B78A55]/40 text-[#B78A55] text-[10px] font-bold tracking-wider uppercase rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-[#D4C9BC] leading-relaxed">
                    Soil-bearing analysis, engineered footings & seismic band integration built to withstand extreme load parameters.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT — EDITORIAL TECHNICAL CONTENT */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[2px] bg-[#9A6048]" />
                <span className="text-xs font-bold tracking-[0.24em] text-[#9A6048] uppercase">
                  Foundation & Frame Engineering
                </span>
              </div>

              <h2 className="font-serif-heading text-4xl sm:text-5xl font-bold text-[#131D23] leading-tight">
                Foundation & <br />
                <span className="text-[#9A6048]">RCC Structure</span>
              </h2>

              <p className="text-[#45382F] leading-relaxed text-base sm:text-lg font-medium">
                Our structural engineering conforms rigorously to IS 456:2000 code standards. We calculate soil bearing capacities for isolated, raft, or pile foundations customized to local geological parameters across South India.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  { title: 'IS 456:2000 Compliant RCC Frame Construction', desc: 'Calculated moment distribution and shear resistance for column-beam junctions.' },
                  { title: 'M20 / M25 Ready-Mix Concrete', desc: 'UltraTech / ACC Cement with batching plant lab cube testing at 7, 14, and 28 days.' },
                  { title: 'Fe-550D TMT Reinforcement Steel', desc: 'Tata Tiscon / JSW high-ductility rebar for superior seismic performance.' },
                  { title: '10-Year Anti-Termite Soil Barrier', desc: 'Pre-construction chemical treatment under footings, plinth beam top & perimeter.' },
                  { title: 'Engineered Column Footings & Seismic Bands', desc: 'Custom isolated, combined, or raft footings built for site-specific soil strata.' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-[#131D23]/10 shadow-sm">
                    <div className="w-7 h-7 rounded-full bg-[#9A6048] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-serif-heading text-sm font-bold text-[#131D23]">{item.title}</h4>
                      <p className="text-xs text-[#6F6256] mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ──────────────────────────────────────────────────────────
          SECTION 2: PLUMBING, DRAINAGE & SANITARY (DARK CHARCOAL SECTION)
      ────────────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#131D23] text-[#EDE3D3] border-b border-[#EDE3D3]/10 relative overflow-hidden">
        {/* Subtle Background Copper Line Graphic */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#B78A55_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* LEFT — CONTENT */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[2px] bg-[#B78A55]" />
                <span className="text-xs font-bold tracking-[0.24em] text-[#B78A55] uppercase">
                  Fluid & Sanitary Dynamics
                </span>
              </div>

              <h2 className="font-serif-heading text-4xl sm:text-5xl font-bold text-white leading-tight">
                Plumbing, Drainage & <br />
                <span className="text-[#B78A55]">Sanitary Engineering</span>
              </h2>

              <p className="text-[#D4C9BC] leading-relaxed text-base">
                Water tightness and hygiene form the core of our sanitary engineering. We isolate greywater from blackwater, install dual-chambered septic tanks, and integrate rainwater harvesting recharge pits compliant with municipal guidelines.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-6 bg-[#1A262C] border border-[#EDE3D3]/10 rounded-2xl flex items-start gap-4 hover:border-[#B78A55]/40 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-[#9A6048]/20 border border-[#9A6048]/40 flex items-center justify-center shrink-0 text-[#B78A55]">
                    <Droplets className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif-heading text-base font-bold text-white">Astral / Ashirvad CPVC & SWR Piping</h3>
                    <p className="text-xs text-[#D4C9BC] mt-1 leading-relaxed">
                      Hot & cold water distribution using Class 1 SDR-11 CPVC pipes. SWR PVC pipes for rainwater and soil discharge with leak-proof solvent joints.
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-[#1A262C] border border-[#EDE3D3]/10 rounded-2xl flex items-start gap-4 hover:border-[#B78A55]/40 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-[#9A6048]/20 border border-[#9A6048]/40 flex items-center justify-center shrink-0 text-[#B78A55]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif-heading text-base font-bold text-white">Kohler & Jaquar Sanitary Fittings</h3>
                    <p className="text-xs text-[#D4C9BC] mt-1 leading-relaxed">
                      Wall-hung EWC toilets with concealed flush tanks (Geberit / Grohe), diverter shower controls, single-lever basin mixers, and stainless steel 304 sink drains.
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-[#1A262C] border border-[#EDE3D3]/10 rounded-2xl flex items-start gap-4 hover:border-[#B78A55]/40 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-[#9A6048]/20 border border-[#9A6048]/40 flex items-center justify-center shrink-0 text-[#B78A55]">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif-heading text-base font-bold text-white">Hydrostatic Pressure Testing (10 kg/cm²)</h3>
                    <p className="text-xs text-[#D4C9BC] mt-1 leading-relaxed">
                      All concealed water pipelines are pressure-tested at 10 kg/cm² for a continuous 24-hour period prior to wall plastering to guarantee zero seepage.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT — LARGE PLUMBING INSTALLATION IMAGE */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                <img
                  src={photos.plumbing}
                  alt="Plumbing and Piping Installation"
                  className="w-full h-[580px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131D23] via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-6 bg-[#131D23]/90 backdrop-blur-md rounded-2xl border border-white/15">
                  <div className="flex items-center gap-3 text-[#B78A55] text-xs font-bold uppercase tracking-wider mb-2">
                    <ShieldCheck className="w-4 h-4" />
                    Zero-Leakage Assurance Guarantee
                  </div>
                  <p className="text-xs text-[#D4C9BC] leading-relaxed">
                    Dual-chamber septic tanks, municipal rainwater recharge pits, and 24-hour hydrostatic line testing before wall closure.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ──────────────────────────────────────────────────────────
          SECTION 3: ELECTRICAL EXCELLENCE & SMART CABLING (WARM OFF-WHITE)
      ────────────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#F4EFE6] text-[#131D23] border-b border-[#131D23]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#9A6048] uppercase tracking-[0.24em]">
              <Zap className="w-4 h-4" />
              <span>Power Grid & Home Automation</span>
            </div>
            <h2 className="font-serif-heading text-4xl sm:text-5xl font-bold text-[#131D23]">
              Electrical Excellence & Smart Cabling
            </h2>
            <p className="text-[#6F6256] text-base leading-relaxed">
              Fire-retardant low-smoke (FR-LSH) copper wiring housed inside concealed heavy-duty PVC conduits. Designed to support high-draw appliances, EV charging points, and home automation hubs.
            </p>
          </div>

          {/* Interactive Technical Diagram / Panel Presentation Layout */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 border border-[#131D23]/10 shadow-xl relative overflow-hidden">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-5 relative">
                <div className="rounded-2xl overflow-hidden border border-[#131D23]/10 shadow-md">
                  <img
                    src={photos.electrical}
                    alt="Electrical Infrastructure"
                    className="w-full h-80 object-cover"
                  />
                  <div className="p-6 bg-[#131D23] text-white">
                    <span className="text-[10px] font-bold text-[#B78A55] uppercase tracking-widest block mb-1">
                      Power Safety Standard
                    </span>
                    <h3 className="font-serif-heading text-lg font-bold">FR-LSH Multi-Strand Wiring</h3>
                    <p className="text-xs text-[#D4C9BC] mt-1 leading-relaxed">
                      Concealed heavy-duty PVC conduits with isolated neutral & chemical earthing pits for 100% surge safety.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Finolex / Havells FR-LSH Cables',
                    badge: 'Multi-Strand Electrolytic',
                    desc: 'Multi-strand electrolytic grade copper wires with flame retardant low-smoke insulation for safe long-term current flow.'
                  },
                  {
                    title: 'Legrand / Schneider Modular Switches',
                    badge: 'Glass / Matte Touch Plates',
                    desc: 'Sleek glass/matte touch plates, USB wall sockets, foot lamps, and AC heavy-duty power points in all rooms.'
                  },
                  {
                    title: 'MCB & RCCB Protection',
                    badge: 'ABB / Siemens Break Panel',
                    desc: '3-Phase distribution board with individual MCBs and earth leakage residual current breakers (RCCB) for full shock prevention.'
                  },
                  {
                    title: 'Copper Earthing & Lightning Arrester',
                    badge: 'Dual Chemical Pits',
                    desc: 'Dual chemical earthing pits for sensitive electronics protection paired with roof-level copper lightning arresters.'
                  },
                  {
                    title: 'EV Charging Provisions',
                    badge: 'High-Amperage Circuit',
                    desc: 'Dedicated 32A high-load circuit wiring installed at parking bays for electric vehicle fast charging.'
                  },
                  {
                    title: 'Smart Home Automation Ready',
                    badge: 'Concealed Bus Lines',
                    desc: 'Pre-routed neutral and data bus lines for smart touch switches, motorized curtains, and Wi-Fi access points.'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-[#F4EFE6] border border-[#131D23]/8 hover:border-[#9A6048]/40 transition-colors">
                    <span className="text-[10px] font-bold text-[#9A6048] uppercase tracking-wider block mb-1">
                      {item.badge}
                    </span>
                    <h4 className="font-serif-heading text-sm font-bold text-[#131D23] mb-1.5">{item.title}</h4>
                    <p className="text-xs text-[#6F6256] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* ──────────────────────────────────────────────────────────
          SECTION 4: DOORS, WINDOWS & JOINERY (DEEP NAVY SECTION WITH HOVER INTERACTION)
      ────────────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#182228] text-[#EDE3D3] border-b border-[#EDE3D3]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-[2px] bg-[#B78A55]" />
                <span className="text-xs font-bold tracking-[0.24em] text-[#B78A55] uppercase">
                  Joinery & Fenestration
                </span>
              </div>
              <h2 className="font-serif-heading text-4xl sm:text-5xl font-bold text-white">
                Doors, Windows & Architectural Openings
              </h2>
            </div>
            <p className="text-sm text-[#D4C9BC] max-w-md leading-relaxed">
              Crafted for acoustic insulation, weatherproofing, and timeless architectural elegance. Hover/click tabs to preview specs.
            </p>
          </div>

          {/* Premium Image-Led Interactive Composition */}
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            
            {/* LEFT — 3 NUMBERED INTERACTIVE TABS */}
            <div className="lg:col-span-5 space-y-4">
              {doorItems.map((item, idx) => {
                const isActive = activeDoorTab === idx;
                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveDoorTab(idx)}
                    className={`p-6 rounded-2xl border cursor-pointer transition-all duration-300 ${
                      isActive
                        ? 'bg-[#131D23] border-[#B78A55] shadow-xl translate-x-2'
                        : 'bg-[#131D23]/50 border-white/10 hover:border-white/20 hover:bg-[#131D23]/80'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-serif-heading text-2xl font-bold text-[#B78A55]">{item.id}</span>
                      <ChevronRight className={`w-5 h-5 transition-transform ${isActive ? 'rotate-90 text-[#B78A55]' : 'text-white/30'}`} />
                    </div>
                    <h3 className="font-serif-heading text-lg font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-xs text-[#D4C9BC]/80 leading-relaxed mb-3">{item.subtitle}</p>
                    {isActive && (
                      <div className="pt-3 border-t border-white/10 space-y-1.5 animate-fadeIn">
                        {item.specs.map((s, sIdx) => (
                          <div key={sIdx} className="flex items-center gap-2 text-xs text-[#EDE3D3]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#B78A55]" />
                            <span>{s}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* RIGHT — LARGE DYNAMIC PREVIEW IMAGE */}
            <div className="lg:col-span-7">
              <div className="relative rounded-3xl overflow-hidden h-full min-h-[480px] border border-white/15 shadow-2xl group">
                <img
                  src={doorItems[activeDoorTab].image}
                  alt={doorItems[activeDoorTab].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131D23]/95 via-[#131D23]/30 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-[#131D23]/90 backdrop-blur-md rounded-2xl border border-white/15">
                  <span className="text-xs font-bold text-[#B78A55] uppercase tracking-widest block mb-2">
                    {doorItems[activeDoorTab].id} — {doorItems[activeDoorTab].subtitle}
                  </span>
                  <h4 className="font-serif-heading text-xl font-bold text-white mb-2">
                    {doorItems[activeDoorTab].title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#D4C9BC] leading-relaxed">
                    {doorItems[activeDoorTab].desc}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ──────────────────────────────────────────────────────────
          SECTION 5: FLOORING, MARBLE & COUNTERTOP SELECTION (WARM CREAM)
      ────────────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#EDE3D3] text-[#131D23] border-b border-[#131D23]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#9A6048] uppercase tracking-[0.24em]">
              <Grid3X3 className="w-4 h-4" />
              <span>Surface Flooring & Wall Cladding</span>
            </div>
            <h2 className="font-serif-heading text-4xl sm:text-5xl font-bold text-[#131D23]">
              Flooring, Marble & Countertop Selection
            </h2>
            <p className="text-[#6F6256] text-base leading-relaxed">
              Explore our curated palette of premium vitrified tiles, imported Italian marble, lapotra granite, and quartz kitchen worktops.
            </p>
          </div>

          {/* Material Explorer Grid Layout */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {flooringMaterials.map((mat, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-3xl overflow-hidden border border-[#131D23]/10 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={mat.image}
                      alt={mat.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#131D23]/80 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-3 px-3 py-1 bg-[#9A6048] text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow">
                      {mat.brand}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif-heading text-lg font-bold text-[#131D23] mb-2">{mat.title}</h3>
                    <p className="text-xs text-[#6F6256] leading-relaxed mb-4">{mat.desc}</p>
                  </div>
                </div>
                <div className="p-6 pt-0 border-t border-[#131D23]/8 mt-auto">
                  <span className="text-[11px] font-semibold text-[#9A6048] leading-tight block">
                    {mat.specs}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ──────────────────────────────────────────────────────────
          SECTION 6: PAINTING & WATERPROOFING (SPLIT NUMBERED SEQUENCE)
      ────────────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#131D23] text-[#EDE3D3] border-b border-[#EDE3D3]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* LEFT — LARGE PAINTING & WATERPROOFING IMAGE */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/15 group">
                <img
                  src={photos.painting}
                  alt="Multi-Coat Painting & Damp Proofing Work"
                  className="w-full h-[620px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131D23] via-[#131D23]/30 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-[#131D23]/90 backdrop-blur-md rounded-2xl border border-white/15">
                  <div className="flex items-center gap-2 text-[#B78A55] text-xs font-bold uppercase tracking-wider mb-2">
                    <Paintbrush className="w-4 h-4" />
                    Asian Paints Royale & Dr. Fixit Certified
                  </div>
                  <p className="text-xs text-[#D4C9BC] leading-relaxed">
                    5-Step surface preparation process, 12mm elastomeric terrace waterproofing, and toilet wet-area polymer slurry coatings.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT — NUMBERED VERTICAL PROCESS SEQUENCE WITH CONNECTING COPPER LINE */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[2px] bg-[#B78A55]" />
                <span className="text-xs font-bold tracking-[0.24em] text-[#B78A55] uppercase">
                  Chemical Coating & Protection
                </span>
              </div>

              <h2 className="font-serif-heading text-4xl sm:text-5xl font-bold text-white leading-tight">
                Multi-Coat Painting & <br />
                <span className="text-[#B78A55]">Damp-Proofing</span>
              </h2>

              <p className="text-[#D4C9BC] leading-relaxed text-base">
                We follow a rigorous 6-stage surface curing and damp-proofing protocol for both interior and exterior walls to guarantee mirror smooth sheen and 100% moisture isolation.
              </p>

              {/* Vertical Sequence with Copper Line */}
              <div className="relative pl-6 space-y-6 border-l-2 border-[#B78A55]/40 pt-2">
                {[
                  { num: '01', title: 'Surface Curing & Sanding', desc: 'Thorough water curing of cement plaster followed by mechanized surface sanding for smooth bonding.' },
                  { num: '02', title: 'Asian Paints Acrylic Wall Putty (2 Coats)', desc: 'Provides a mirror-smooth level base for interior walls.' },
                  { num: '03', title: 'Asian Paints Royale / Apex Ultima Finish', desc: '1 coat primer + 2 coats Asian Paints Royale luxury emulsion for indoors, and Apex Ultima Protek anti-dust exterior paint.' },
                  { num: '04', title: 'Terrace Waterproofing (Dr. Fixit Newcoat)', desc: 'Slope concrete with 12mm elastomeric liquid membrane coating and heat-reflective white cool tiles.' },
                  { num: '05', title: 'Toilet Wet Area Waterproofing', desc: '2 coats of polymer modified cementitious slurry (Dr. Fixit Fastflex) continuous up to 3ft height on bathroom walls.' },
                  { num: '06', title: 'Retaining Wall & Basement Protection', desc: 'App-modified bituminous membrane sheeting for subterranean concrete walls to block groundwater ingress.' },
                ].map((step, idx) => (
                  <div key={idx} className="relative group">
                    <div className="absolute -left-[31px] top-0 w-6 h-6 rounded-full bg-[#131D23] border-2 border-[#B78A55] text-[#B78A55] flex items-center justify-center font-bold text-[10px] group-hover:bg-[#B78A55] group-hover:text-white transition-colors">
                      {idx + 1}
                    </div>
                    <h4 className="font-serif-heading text-base font-bold text-white mb-1">{step.title}</h4>
                    <p className="text-xs text-[#D4C9BC]/80 leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ──────────────────────────────────────────────────────────
          SECTION 7: MATERIAL ASSURANCE (PREMIUM SPECIFICATION LIBRARY)
      ────────────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#F4EFE6] text-[#131D23] border-b border-[#131D23]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#9A6048] uppercase tracking-[0.24em]">
              <Award className="w-4 h-4" />
              <span>Specification Library</span>
            </div>
            <h2 className="font-serif-heading text-4xl sm:text-5xl font-bold text-[#131D23]">
              100% Brand-Certified Material Library
            </h2>
            <p className="text-[#6F6256] text-base leading-relaxed">
              We never compromise on structural integrity. Only Tier-1 manufacturer-certified materials are delivered directly to your site.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { category: 'Cement (53 Grade OPC/PPC)', icon: Layers, brands: ['UltraTech Cement', 'ACC Concrete', 'Ramco Cement', 'Coromandel'] },
              { category: 'Steel (Fe-550D TMT)', icon: Wrench, brands: ['Tata Tiscon', 'JSW NeoSteel', 'SAIL Steel', 'Vizag Steel'] },
              { category: 'Electrical Wires & Switches', icon: Zap, brands: ['Finolex Wires', 'Havells FR-LSH', 'Legrand Switches', 'Schneider Electric'] },
              { category: 'Plumbing & Drainage Pipes', icon: Droplets, brands: ['Astral Pipes', 'Ashirvad CPVC', 'Supreme SWR', 'Finolex'] },
              { category: 'Sanitaryware & CP Fittings', icon: CheckCircle2, brands: ['Jaquar Fittings', 'Kohler Sanitary', 'Hindware', 'Grohe'] },
              { category: 'Paints & Wall Coatings', icon: Paintbrush, brands: ['Asian Paints Royale', 'Berger Paints', 'Dulux Emulsion', 'Dr. Fixit Waterproofing'] },
            ].map((group, idx) => {
              const Icon = group.icon;
              return (
                <div key={idx} className="p-8 bg-white border border-[#131D23]/10 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-[#9A6048]/10 text-[#9A6048] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif-heading text-base font-bold text-[#131D23] mb-4">{group.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.brands.map((b, bIdx) => (
                      <span key={bIdx} className="px-3.5 py-1.5 bg-[#F4EFE6] border border-[#131D23]/10 text-[#131D23] text-xs font-semibold rounded-lg">
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* ──────────────────────────────────────────────────────────
          SECTION 8: CIVIL CONSTRUCTION CAPABILITIES (PROJECT TYPE SELECTOR)
      ────────────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#131D23] text-[#EDE3D3] border-b border-[#EDE3D3]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-[2px] bg-[#B78A55]" />
                <span className="text-xs font-bold tracking-[0.24em] text-[#B78A55] uppercase">
                  Project Spectrum
                </span>
              </div>
              <h2 className="font-serif-heading text-4xl sm:text-5xl font-bold text-white">
                Civil Construction Capabilities
              </h2>
            </div>
            <p className="text-sm text-[#D4C9BC] max-w-md leading-relaxed">
              From luxury independent homes to multi-story commercial and industrial facilities. Click below to explore each category.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            
            {/* LEFT — SELECTOR CARDS */}
            <div className="lg:col-span-5 space-y-4">
              {civilCapabilities.map((cap, idx) => {
                const Icon = cap.icon;
                const isActive = activeProjectCap === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setActiveProjectCap(idx)}
                    className={`p-6 rounded-2xl border cursor-pointer transition-all duration-300 ${
                      isActive
                        ? 'bg-[#1A262C] border-[#B78A55] shadow-xl translate-x-2'
                        : 'bg-[#1A262C]/40 border-white/10 hover:border-white/20 hover:bg-[#1A262C]/70'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${isActive ? 'bg-[#9A6048] text-white' : 'bg-white/10 text-[#B78A55]'}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-serif-heading text-base font-bold text-white">{cap.title}</h3>
                    </div>
                    <p className="text-xs text-[#D4C9BC]/80 leading-relaxed mb-3">{cap.desc}</p>
                    {isActive && (
                      <div className="pt-3 border-t border-white/10 space-y-1.5 animate-fadeIn">
                        {cap.features.map((f, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2 text-xs text-[#EDE3D3]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#B78A55]" />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* RIGHT — LARGE PROJECT TYPE PHOTO PREVIEW */}
            <div className="lg:col-span-7">
              <div className="relative rounded-3xl overflow-hidden h-full min-h-[480px] border border-white/15 shadow-2xl group">
                <img
                  src={civilCapabilities[activeProjectCap].image}
                  alt={civilCapabilities[activeProjectCap].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131D23]/95 via-[#131D23]/30 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-[#131D23]/90 backdrop-blur-md rounded-2xl border border-white/15">
                  <span className="text-xs font-bold text-[#B78A55] uppercase tracking-widest block mb-2">
                    Turnkey Civil Capability
                  </span>
                  <h4 className="font-serif-heading text-2xl font-bold text-white mb-2">
                    {civilCapabilities[activeProjectCap].title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#D4C9BC] leading-relaxed mb-4">
                    {civilCapabilities[activeProjectCap].desc}
                  </p>
                  <button
                    onClick={onOpenQuote}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#B78A55] uppercase tracking-wider hover:text-white transition-colors"
                  >
                    <span>Discuss {civilCapabilities[activeProjectCap].title}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ──────────────────────────────────────────────────────────
          SECTION 9: TRANSPARENT PRICING & FINAL CTA
      ────────────────────────────────────────────────────────── */}
      <section className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image & Architectural Gradient */}
        <div className="absolute inset-0 z-0">
          <img
            src={photos.finalCta}
            alt="South India Civil Contractors Workmanship"
            className="w-full h-full object-cover object-center brightness-90 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/95 via-[#0F172A]/90 to-[#0F172A]/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* PRICING BANNER */}
          <div className="bg-[#131D23]/90 backdrop-blur-xl border border-[#B78A55]/40 rounded-3xl p-8 sm:p-12 mb-16 shadow-2xl">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#B78A55] uppercase tracking-widest">
                  <FileText className="w-4 h-4" />
                  <span>Turnkey Construction Pricing</span>
                </div>

                <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold text-white leading-tight">
                  Transparent Pricing starting from <br />
                  <span className="text-[#B78A55]">₹2,499 / sq.ft</span>
                </h2>

                <p className="text-[#D4C9BC] text-sm sm:text-base leading-relaxed">
                  No hidden costs. Escrow-protected stage-wise payment schedules tied directly to engineering milestones inspected by senior project managers.
                </p>

                <div className="flex flex-wrap gap-4 text-xs text-white pt-2">
                  <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-[#B78A55]" /> 100+ Quality Checks
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-[#B78A55]" /> 10-Year Structural Warranty
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-[#B78A55]" /> On-Time Penalty Clause
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4 justify-center">
                <button
                  onClick={onOpenQuote}
                  className="bg-[#9A6048] hover:bg-[#86513B] text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-4 rounded-full shadow-2xl hover:shadow-[#9A6048]/40 transition-all text-center flex items-center justify-center gap-2"
                >
                  <span>Get Detailed Cost Estimate</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="border border-[#EDE3D3]/30 hover:border-[#B78A55] bg-white/10 hover:bg-white/15 backdrop-blur-sm text-white font-semibold text-xs sm:text-sm uppercase tracking-wider px-7 py-4 rounded-full transition-all text-center flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#B78A55]" />
                  <span>Speak to Structural Engineer</span>
                </a>
              </div>

            </div>
          </div>

          {/* FINAL CTA SECTION */}
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h2 className="font-serif-heading text-4xl sm:text-6xl font-bold text-white">
              Ready to Build?
            </h2>
            <p className="text-base sm:text-lg text-[#D4C9BC] leading-relaxed">
              Let's discuss your project and create a detailed construction estimate backed by South India Civil Contractors.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <button
                onClick={onOpenQuote}
                className="bg-[#9A6048] hover:bg-[#86513B] text-white font-bold px-9 py-4 rounded-full shadow-2xl hover:shadow-[#9A6048]/50 transition-all text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2.5 active:scale-95"
              >
                <span>Get A Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${siteConfig.phone}`}
                className="px-8 py-4 rounded-full border border-white/30 hover:border-[#B78A55] bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm transition-all flex items-center gap-2.5 uppercase tracking-wider"
              >
                <Phone className="w-4 h-4 text-[#B78A55]" />
                <span>Call Our Engineer</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PremiumConstructionPage;
