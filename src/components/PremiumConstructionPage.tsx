import React, { useEffect } from 'react';
import { siteConfig } from '../config/site';
import { Breadcrumbs } from './Breadcrumbs';
import {
  CheckCircle2, ArrowRight, Phone,
  Layers, Droplets, Zap, DoorOpen, Grid3X3,
  Paintbrush, ShieldCheck, Award, Wrench, Building2,
  Home, Warehouse, Sparkles, FileText
} from 'lucide-react';

interface PremiumConstructionPageProps {
  onNavigateHome: () => void;
  onOpenQuote: () => void;
}

export const PremiumConstructionPage: React.FC<PremiumConstructionPageProps> = ({
  onNavigateHome,
  onOpenQuote,
}) => {
  useEffect(() => {
    document.title = 'Premium Construction Services & Technical Specifications | South India Civil Contractors';
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  return (
    <div className="pt-24 pb-20 bg-[#131D23] text-[#EDE3D3] selection:bg-[#9A6048]/30 selection:text-[#EDE3D3]">
      
      {/* ──────────────────────────────────────────────────────────
          SECTION 1: HERO BANNER
      ────────────────────────────────────────────────────────── */}
      <section className="relative py-16 md:py-24 border-b border-[#EDE3D3]/10 overflow-hidden bg-gradient-to-b from-[#131D23] via-[#1A262C] to-[#131D23]">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#EDE3D3_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[
              { name: 'Services', onClick: onNavigateHome },
              { name: 'Premium Construction' },
            ]}
          />

          <div className="mt-8 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#9A6048]/15 border border-[#9A6048]/30 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#B78A55]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#B78A55]">
                End-to-End Civil & Architectural Engineering
              </span>
            </div>

            <h1 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#EDE3D3] leading-[1.15]">
              Premium Construction <br className="hidden sm:inline" />
              <span className="text-[#B78A55]">Hub & Technical Masterclass</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[#D4C9BC] leading-relaxed max-w-3xl">
              From structural foundation engineering to handcrafted high-end interior finishes, explore our comprehensive building specifications, materials, and turnkey construction methodology across South India.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <button
                onClick={onOpenQuote}
                className="bg-[#9A6048] hover:bg-[#86513B] text-[#EDE3D3] font-semibold px-7 py-3.5 rounded-sm shadow-editorial-dark hover:shadow-terracotta-glow transition-all duration-300 flex items-center gap-2 text-sm uppercase tracking-wider"
              >
                <span>Request Custom Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={`tel:${siteConfig.phone}`}
                className="px-6 py-3.5 rounded-sm border border-[#EDE3D3]/20 hover:border-[#B78A55] text-[#EDE3D3] font-medium text-sm transition-colors flex items-center gap-2 uppercase tracking-wider"
              >
                <Phone className="w-4 h-4 text-[#B78A55]" />
                <span>Call Engineer ({siteConfig.phoneDisplay})</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SECTION 2: FOUNDATION & STRUCTURE
      ────────────────────────────────────────────────────────── */}
      <section className="py-20 border-b border-[#EDE3D3]/10 bg-[#131D23]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#B78A55] uppercase tracking-widest">
                <Layers className="w-4 h-4" />
                <span>Phase 01 — Structural Mechanics</span>
              </div>
              <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#EDE3D3]">
                Foundation & RCC Structure
              </h2>
              <p className="text-[#D4C9BC] leading-relaxed text-sm sm:text-base">
                Our structural engineering conforms rigorously to IS 456:2000 code standards. We calculate soil bearing capacities for isolated, raft, or pile foundations customized to local geological parameters across South India.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'IS 456:2000 Compliant RCC Frame Construction',
                  'M20 / M25 Ready-Mix Concrete with UltraTech / ACC Cement',
                  'Fe-550D TMT Reinforcement Steel (Tata Tiscon / JSW)',
                  'Anti-Termite Treatment with 10-Year Soil Barrier Warranty',
                  'Engineered Column Footings & Seismic Band Integration',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#EDE3D3]">
                    <CheckCircle2 className="w-4 h-4 text-[#B78A55] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual Grid */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              <div className="p-6 bg-[#1A262C] border border-[#EDE3D3]/10 rounded-sm relative overflow-hidden group hover:border-[#9A6048]/50 transition-colors">
                <div className="w-10 h-10 rounded-sm bg-[#9A6048]/20 border border-[#9A6048]/40 flex items-center justify-center mb-4 text-[#B78A55]">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="font-serif-heading text-lg font-bold text-[#EDE3D3] mb-2">Concrete Mix Grade</h3>
                <p className="text-xs text-[#D4C9BC] leading-relaxed">
                  Design mix concrete (M20 grade for slabs, M25 for columns & footings) tested at 7, 14, and 28 days for compressive strength verification.
                </p>
              </div>

              <div className="p-6 bg-[#1A262C] border border-[#EDE3D3]/10 rounded-sm relative overflow-hidden group hover:border-[#9A6048]/50 transition-colors">
                <div className="w-10 h-10 rounded-sm bg-[#9A6048]/20 border border-[#9A6048]/40 flex items-center justify-center mb-4 text-[#B78A55]">
                  <Wrench className="w-5 h-5" />
                </div>
                <h3 className="font-serif-heading text-lg font-bold text-[#EDE3D3] mb-2">TMT Steel Specifications</h3>
                <p className="text-xs text-[#D4C9BC] leading-relaxed">
                  Primary steel brands Tata Tiscon / JSW / SAIL Fe-550D grade featuring high ductility and seismic resistance for earthquake safety.
                </p>
              </div>

              <div className="p-6 bg-[#1A262C] border border-[#EDE3D3]/10 rounded-sm relative overflow-hidden group hover:border-[#9A6048]/50 transition-colors sm:col-span-2">
                <div className="flex items-center gap-3 mb-3">
                  <ShieldCheck className="w-5 h-5 text-[#B78A55]" />
                  <h3 className="font-serif-heading text-lg font-bold text-[#EDE3D3]">Soil Excavation & Anti-Termite Protection</h3>
                </div>
                <p className="text-xs text-[#D4C9BC] leading-relaxed">
                  Excavation performed to hard stratum depth. Pre-construction anti-termite chemical treatment applied under footings, plinth beam top, and surrounding soil perimeter with certified 10-year guarantee.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SECTION 3: PLUMBING & SANITARY
      ────────────────────────────────────────────────────────── */}
      <section className="py-20 border-b border-[#EDE3D3]/10 bg-[#162026]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Visual Cards */}
            <div className="lg:col-span-6 order-2 lg:order-1 space-y-4">
              <div className="p-6 bg-[#131D23] border border-[#EDE3D3]/10 rounded-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-[#B78A55]/20 border border-[#B78A55]/40 flex items-center justify-center shrink-0 text-[#B78A55]">
                  <Droplets className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif-heading text-base font-bold text-[#EDE3D3]">Astral / Ashirvad CPVC & SWR Piping</h3>
                  <p className="text-xs text-[#D4C9BC] mt-1 leading-relaxed">
                    Hot & cold water distribution using Class 1 SDR-11 CPVC pipes. SWR PVC pipes for rain water and soil discharge with leak-proof solvent joints.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-[#131D23] border border-[#EDE3D3]/10 rounded-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-[#B78A55]/20 border border-[#B78A55]/40 flex items-center justify-center shrink-0 text-[#B78A55]">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif-heading text-base font-bold text-[#EDE3D3]">Kohler & Jaquar Sanitary Fittings</h3>
                  <p className="text-xs text-[#D4C9BC] mt-1 leading-relaxed">
                    Wall-hung EWC toilets with concealed flush tanks (Geberit / Grohe), diverter shower controls, single-lever basin mixers, and stainless steel 304 sink drains.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-[#131D23] border border-[#EDE3D3]/10 rounded-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-[#B78A55]/20 border border-[#B78A55]/40 flex items-center justify-center shrink-0 text-[#B78A55]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif-heading text-base font-bold text-[#EDE3D3]">Hydrostatic Pressure Testing</h3>
                  <p className="text-xs text-[#D4C9BC] mt-1 leading-relaxed">
                    All concealed water pipelines are pressure-tested at 10 kg/cm² for a continuous 24-hour period prior to wall plastering to guarantee zero seepage.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#B78A55] uppercase tracking-widest">
                <Droplets className="w-4 h-4" />
                <span>Phase 02 — Fluid & Drainage Dynamics</span>
              </div>
              <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#EDE3D3]">
                Plumbing, Drainage & Sanitary Engineering
              </h2>
              <p className="text-[#D4C9BC] leading-relaxed text-sm sm:text-base">
                Water tightness and hygiene form the core of our sanitary engineering. We isolate greywater from blackwater, install dual-chambered septic tanks, and integrate rainwater harvesting recharge pits compliant with municipal guidelines.
              </p>
              <div className="pt-2">
                <button
                  onClick={onOpenQuote}
                  className="bg-[#45382F] hover:bg-[#9A6048] text-[#EDE3D3] font-semibold px-6 py-3 rounded-sm transition-all duration-300 text-xs uppercase tracking-widest border border-[#B78A55]/30 flex items-center gap-2"
                >
                  <span>Explore Sanitary Packages</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SECTION 4: ELECTRICAL EXCELLENCE
      ────────────────────────────────────────────────────────── */}
      <section className="py-20 border-b border-[#EDE3D3]/10 bg-[#131D23]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1A262C] border border-[#EDE3D3]/15 rounded-md p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#9A6048]/10 rounded-full filter blur-3xl pointer-events-none"></div>

            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#B78A55] uppercase tracking-widest">
                <Zap className="w-4 h-4" />
                <span>Phase 03 — Power Grid & Home Automation</span>
              </div>

              <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#EDE3D3]">
                Electrical Excellence & Smart Cabling
              </h2>

              <p className="text-[#D4C9BC] text-sm sm:text-base leading-relaxed">
                Fire-retardant low-smoke (FR-LSH) copper wiring housed inside concealed heavy-duty PVC conduits. Designed to support high-draw appliances, EV charging points, and home automation hubs.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                <div className="space-y-2 border-l-2 border-[#9A6048] pl-4">
                  <h4 className="font-serif-heading text-base font-bold text-[#EDE3D3]">Finolex / Havells FR-LSH Cables</h4>
                  <p className="text-xs text-[#D4C9BC]">Multi-strand electrolytic grade copper wires with flame retardant insulation.</p>
                </div>
                <div className="space-y-2 border-l-2 border-[#9A6048] pl-4">
                  <h4 className="font-serif-heading text-base font-bold text-[#EDE3D3]">Legrand / Schneider Modular Switches</h4>
                  <p className="text-xs text-[#D4C9BC]">Sleek glass/matte touch plates, USB wall sockets, and foot lamps in bedrooms.</p>
                </div>
                <div className="space-y-2 border-l-2 border-[#9A6048] pl-4">
                  <h4 className="font-serif-heading text-base font-bold text-[#EDE3D3]">MCB & RCCB Protection</h4>
                  <p className="text-xs text-[#D4C9BC]">3-Phase distribution board with ABB/Siemens MCBs and earth leakage breakers.</p>
                </div>
                <div className="space-y-2 border-l-2 border-[#9A6048] pl-4">
                  <h4 className="font-serif-heading text-base font-bold text-[#EDE3D3]">Copper Plate Earthing & Lightning Arrester</h4>
                  <p className="text-xs text-[#D4C9BC]">Dual chemical earthing pits for equipment safety and lightning protection system.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SECTION 5: DOORS & WINDOWS
      ────────────────────────────────────────────────────────── */}
      <section className="py-20 border-b border-[#EDE3D3]/10 bg-[#162026]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#B78A55] uppercase tracking-widest">
              <DoorOpen className="w-4 h-4" />
              <span>Phase 04 — Joinery & Fenestration</span>
            </div>
            <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#EDE3D3]">
              Doors, Windows & Architectural Openings
            </h2>
            <p className="text-[#D4C9BC] text-sm sm:text-base">
              Crafted for acoustic insulation, weatherproofing, and architectural elegance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#131D23] border border-[#EDE3D3]/10 p-8 rounded-sm space-y-4">
              <div className="text-[#B78A55] font-serif-heading text-2xl font-bold">01</div>
              <h3 className="font-serif-heading text-xl font-bold text-[#EDE3D3]">Teakwood Main Entrance</h3>
              <p className="text-xs text-[#D4C9BC] leading-relaxed">
                First-grade Burma / Teakwood main door frame (5" x 3") with 38mm solid teak flush door shutter, heavy brass hardware, bi-metric smart lock, and melamine polish.
              </p>
            </div>

            <div className="bg-[#131D23] border border-[#EDE3D3]/10 p-8 rounded-sm space-y-4">
              <div className="text-[#B78A55] font-serif-heading text-2xl font-bold">02</div>
              <h3 className="font-serif-heading text-xl font-bold text-[#EDE3D3]">Internal Flush & WPC Doors</h3>
              <p className="text-xs text-[#D4C9BC] leading-relaxed">
                Honne/Salwood internal door frames with waterproof membrane shutters for bedrooms and WPC (Wood Polymer Composite) 100% waterproof doors for toilets.
              </p>
            </div>

            <div className="bg-[#131D23] border border-[#EDE3D3]/10 p-8 rounded-sm space-y-4">
              <div className="text-[#B78A55] font-serif-heading text-2xl font-bold">03</div>
              <h3 className="font-serif-heading text-xl font-bold text-[#EDE3D3]">Kommerling UPVC Windows</h3>
              <p className="text-xs text-[#D4C9BC] leading-relaxed">
                Multi-chambered German UPVC sliding / openable windows (Fenesta / Kommerling) with 5mm toughened glass, stainless steel bug mesh, and steel reinforced profiles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SECTION 6: FLOORING & FINISHES
      ────────────────────────────────────────────────────────── */}
      <section className="py-20 border-b border-[#EDE3D3]/10 bg-[#131D23]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#B78A55] uppercase tracking-widest">
              <Grid3X3 className="w-4 h-4" />
              <span>Phase 05 — Surface Flooring & Wall Cladding</span>
            </div>
            <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#EDE3D3]">
              Flooring, Marble & Countertop Selection
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#1A262C] p-6 border border-[#EDE3D3]/10 rounded-sm">
              <h4 className="font-serif-heading text-base font-bold text-[#EDE3D3] mb-2">Vitrified Living Tiles</h4>
              <p className="text-xs text-[#D4C9BC] leading-relaxed mb-4">
                Double charged / glazed vitrified tiles (4ft x 2ft or 8ft x 4ft slabs) from Kajaria, Nitco, or Somany.
              </p>
              <span className="text-[11px] font-semibold text-[#B78A55] uppercase tracking-wider">Kajaria / Nitco / Somany</span>
            </div>

            <div className="bg-[#1A262C] p-6 border border-[#EDE3D3]/10 rounded-sm">
              <h4 className="font-serif-heading text-base font-bold text-[#EDE3D3] mb-2">Italian Marble / Granite</h4>
              <p className="text-xs text-[#D4C9BC] leading-relaxed mb-4">
                Premium imported Italian marble for master bedrooms & staircase, or lapotra finish Black Galaxy granite.
              </p>
              <span className="text-[11px] font-semibold text-[#B78A55] uppercase tracking-wider">Imported Marble / Black Granite</span>
            </div>

            <div className="bg-[#1A262C] p-6 border border-[#EDE3D3]/10 rounded-sm">
              <h4 className="font-serif-heading text-base font-bold text-[#EDE3D3] mb-2">Bathroom Anti-Skid Tiles</h4>
              <p className="text-xs text-[#D4C9BC] leading-relaxed mb-4">
                GVT anti-skid floor tiles with full-height 7ft designer wall dado cladding and epoxy grout joints.
              </p>
              <span className="text-[11px] font-semibold text-[#B78A55] uppercase tracking-wider">RAK / Simpolo Anti-Skid</span>
            </div>

            <div className="bg-[#1A262C] p-6 border border-[#EDE3D3]/10 rounded-sm">
              <h4 className="font-serif-heading text-base font-bold text-[#EDE3D3] mb-2">Kitchen Granite Slab</h4>
              <p className="text-xs text-[#D4C9BC] leading-relaxed mb-4">
                40mm thick edge-moulded premium jet-black granite countertop with 2ft height wall tile dado & Carysil quartz sink.
              </p>
              <span className="text-[11px] font-semibold text-[#B78A55] uppercase tracking-wider">Jet Black / Quartz</span>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SECTION 7: PAINTING & WEATHER-PROOFING
      ────────────────────────────────────────────────────────── */}
      <section className="py-20 border-b border-[#EDE3D3]/10 bg-[#162026]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#B78A55] uppercase tracking-widest">
                <Paintbrush className="w-4 h-4" />
                <span>Phase 06 — Chemical Coating & Painting</span>
              </div>
              <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#EDE3D3]">
                Multi-Coat Painting & Damp-Proofing
              </h2>
              <p className="text-[#D4C9BC] leading-relaxed text-sm sm:text-base">
                We follow a rigorous 5-step surface preparation process for both interior and exterior surfaces to ensure flawless sheen and long-term weatherproofing.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-[#131D23] border border-[#EDE3D3]/10 rounded-sm">
                  <span className="w-7 h-7 rounded-full bg-[#9A6048] text-[#EDE3D3] flex items-center justify-center font-bold text-xs shrink-0">1</span>
                  <div>
                    <h4 className="font-serif-heading text-sm font-bold text-[#EDE3D3]">Surface Curing & Sanding</h4>
                    <p className="text-xs text-[#D4C9BC] mt-0.5">Thorough water curing of cement plaster followed by mechanised surface sanding.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-[#131D23] border border-[#EDE3D3]/10 rounded-sm">
                  <span className="w-7 h-7 rounded-full bg-[#9A6048] text-[#EDE3D3] flex items-center justify-center font-bold text-xs shrink-0">2</span>
                  <div>
                    <h4 className="font-serif-heading text-sm font-bold text-[#EDE3D3]">Asian Paints Acrylic Wall Putty (2 Coats)</h4>
                    <p className="text-xs text-[#D4C9BC] mt-0.5">Provides a mirror-smooth level base for interior walls.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-[#131D23] border border-[#EDE3D3]/10 rounded-sm">
                  <span className="w-7 h-7 rounded-full bg-[#9A6048] text-[#EDE3D3] flex items-center justify-center font-bold text-xs shrink-0">3</span>
                  <div>
                    <h4 className="font-serif-heading text-sm font-bold text-[#EDE3D3]">Asian Paints Royale / Apex Ultima Finish</h4>
                    <p className="text-xs text-[#D4C9BC] mt-0.5">1 Coat primer + 2 coats of Asian Paints Royale luxury emulsion for indoors, and Apex Ultima Protek anti-dust for exterior walls.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#131D23] p-8 border border-[#EDE3D3]/10 rounded-sm space-y-6">
              <h3 className="font-serif-heading text-xl font-bold text-[#EDE3D3] flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#B78A55]" />
                <span>Terrazzo & Waterproofing Systems</span>
              </h3>

              <div className="space-y-4 text-xs text-[#D4C9BC] leading-relaxed">
                <div className="p-4 bg-[#1A262C] border-l-2 border-[#B78A55]">
                  <strong className="text-[#EDE3D3] block mb-1">Terrace Waterproofing (Dr. Fixit Newcoat)</strong>
                  Slope concrete with 12mm elastomeric liquid membrane coating and heat-reflective white cool tiles.
                </div>

                <div className="p-4 bg-[#1A262C] border-l-2 border-[#B78A55]">
                  <strong className="text-[#EDE3D3] block mb-1">Toilet Wet Area Waterproofing</strong>
                  2 Coats of polymer modified cementitious slurry (Dr. Fixit Fastflex) continuous up to 3ft height on bathroom walls.
                </div>

                <div className="p-4 bg-[#1A262C] border-l-2 border-[#B78A55]">
                  <strong className="text-[#EDE3D3] block mb-1">Retaining Wall & Basement Protection</strong>
                  App-modified bituminous membrane sheeting for subterranean concrete walls to block groundwater ingress.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SECTION 8: PREMIUM BRANDS WE USE
      ────────────────────────────────────────────────────────── */}
      <section className="py-20 border-b border-[#EDE3D3]/10 bg-[#131D23]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#B78A55] uppercase tracking-widest">
              <Award className="w-4 h-4" />
              <span>Material Assurance</span>
            </div>
            <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#EDE3D3]">
              100% Brand-Certified Building Materials
            </h2>
            <p className="text-[#D4C9BC] text-sm sm:text-base">
              We never compromise on structural integrity. Only Tier-1 manufacturer-certified materials are delivered directly to your site.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { category: 'Cement (53 Grade OPC/PPC)', brands: ['UltraTech', 'ACC', 'Ramco Cement', 'Coromandel'] },
              { category: 'Steel (Fe-550D TMT)', brands: ['Tata Tiscon', 'JSW NeoSteel', 'SAIL', 'Vizag Steel'] },
              { category: 'Electrical Wires & Switches', brands: ['Finolex', 'Havells', 'Legrand', 'Schneider Electric'] },
              { category: 'Plumbing & Drainage Pipes', brands: ['Astral Pipes', 'Ashirvad', 'Supreme', 'Finolex'] },
              { category: 'Sanitaryware & CP Fittings', brands: ['Jaquar', 'Kohler', 'Hindware', 'Grohe'] },
              { category: 'Paints & Wall Coatings', brands: ['Asian Paints Royale', 'Berger Paints', 'Dulux', 'Dr. Fixit'] },
            ].map((group, idx) => (
              <div key={idx} className="p-6 bg-[#1A262C] border border-[#EDE3D3]/10 rounded-sm">
                <h3 className="font-serif-heading text-base font-bold text-[#B78A55] mb-3">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.brands.map((b, bIdx) => (
                    <span key={bIdx} className="px-3 py-1 bg-[#131D23] border border-[#EDE3D3]/15 text-[#EDE3D3] text-xs font-medium rounded-sm">
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SECTION 9: PROJECT TYPES WE UNDERTAKE
      ────────────────────────────────────────────────────────── */}
      <section className="py-20 border-b border-[#EDE3D3]/10 bg-[#162026]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#B78A55] uppercase tracking-widest">
              <Building2 className="w-4 h-4" />
              <span>Project Spectrum</span>
            </div>
            <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#EDE3D3]">
              Civil Construction Capabilities
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#131D23] p-6 border border-[#EDE3D3]/10 rounded-sm hover:border-[#9A6048] transition-colors">
              <div className="w-10 h-10 rounded-sm bg-[#9A6048]/20 border border-[#9A6048]/40 flex items-center justify-center text-[#B78A55] mb-4">
                <Home className="w-5 h-5" />
              </div>
              <h3 className="font-serif-heading text-lg font-bold text-[#EDE3D3] mb-2">Luxury Independent Villas</h3>
              <p className="text-xs text-[#D4C9BC] leading-relaxed">
                Custom duplex and triplex independent residences crafted to Vaastu and modern architectural aesthetics.
              </p>
            </div>

            <div className="bg-[#131D23] p-6 border border-[#EDE3D3]/10 rounded-sm hover:border-[#9A6048] transition-colors">
              <div className="w-10 h-10 rounded-sm bg-[#9A6048]/20 border border-[#9A6048]/40 flex items-center justify-center text-[#B78A55] mb-4">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="font-serif-heading text-lg font-bold text-[#EDE3D3] mb-2">Residential Apartments</h3>
              <p className="text-xs text-[#D4C9BC] leading-relaxed">
                Multi-story G+4 to G+12 residential apartment complexes with lift cores and stilt parking structures.
              </p>
            </div>

            <div className="bg-[#131D23] p-6 border border-[#EDE3D3]/10 rounded-sm hover:border-[#9A6048] transition-colors">
              <div className="w-10 h-10 rounded-sm bg-[#9A6048]/20 border border-[#9A6048]/40 flex items-center justify-center text-[#B78A55] mb-4">
                <Warehouse className="w-5 h-5" />
              </div>
              <h3 className="font-serif-heading text-lg font-bold text-[#EDE3D3] mb-2">Commercial Buildings</h3>
              <p className="text-xs text-[#D4C9BC] leading-relaxed">
                Retail showrooms, office headquarters, and mixed-use commercial space construction.
              </p>
            </div>

            <div className="bg-[#131D23] p-6 border border-[#EDE3D3]/10 rounded-sm hover:border-[#9A6048] transition-colors">
              <div className="w-10 h-10 rounded-sm bg-[#9A6048]/20 border border-[#9A6048]/40 flex items-center justify-center text-[#B78A55] mb-4">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="font-serif-heading text-lg font-bold text-[#EDE3D3] mb-2">Industrial Warehouses</h3>
              <p className="text-xs text-[#D4C9BC] leading-relaxed">
                Pre-engineered steel building (PEB) structures, industrial flooring, and factory shed execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SECTION 10: PRICING & TRANSPARENCY
      ────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#131D23]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#1A262C] via-[#223139] to-[#1A262C] border border-[#B78A55]/30 rounded-md p-8 sm:p-12 relative overflow-hidden">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#B78A55] uppercase tracking-widest">
                  <FileText className="w-4 h-4" />
                  <span>Turnkey Pricing Standard</span>
                </div>

                <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#EDE3D3]">
                  Transparent Pricing starting from <span className="text-[#B78A55]">₹2,499 / sq.ft</span>
                </h2>

                <p className="text-[#D4C9BC] text-sm sm:text-base leading-relaxed">
                  No hidden costs. Escrow-protected stage-wise payment schedules tied directly to engineering milestones inspected by senior project managers.
                </p>

                <div className="flex flex-wrap gap-4 text-xs text-[#EDE3D3] pt-2">
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#B78A55]" /> 100+ Quality Checks</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#B78A55]" /> 10-Year Structural Warranty</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#B78A55]" /> On-Time Penalty Clause</span>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4 justify-center">
                <button
                  onClick={onOpenQuote}
                  className="bg-[#9A6048] hover:bg-[#86513B] text-[#EDE3D3] font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-sm shadow-lg hover:shadow-terracotta-glow transition-all text-center flex items-center justify-center gap-2"
                >
                  <span>Get Detailed Cost Estimate</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="border border-[#EDE3D3]/20 hover:border-[#B78A55] text-[#EDE3D3] font-semibold text-sm uppercase tracking-wider px-6 py-4 rounded-sm transition-colors text-center flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#B78A55]" />
                  <span>Speak to Structural Engineer</span>
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PremiumConstructionPage;
