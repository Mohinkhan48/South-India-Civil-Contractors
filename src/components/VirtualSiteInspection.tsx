import React, { useState } from 'react';
import {
  ShieldCheck, CheckCircle2, ArrowRight, Sparkles,
  Building2, FileCheck, Award
} from 'lucide-react';

interface VirtualSiteInspectionProps {
  onOpenQuote: () => void;
}

interface TechnicalAuditItem {
  title: string;
  detail: string;
  status: string;
}

interface StageData {
  id: number;
  stageName: string;
  phaseLabel: string;
  progressPercent: number;
  image: string;
  description: string;
  isCode: string;
  qualityScore: number;
  audits: TechnicalAuditItem[];
  checkpoints: string[];
}

const STAGES: StageData[] = [
  {
    id: 1,
    stageName: 'Soil Excavation & Foundation',
    phaseLabel: 'Stage 01 — Substructure Mechanics',
    progressPercent: 15,
    image: '/images/Soil Excavation & Foundation.png',
    description: 'Controlled depth excavation to hard rock stratum, Anti-Termite chemical soil treatment, and M25 isolated/raft RCC footings.',
    isCode: 'IS 2911 & IS 456:2000',
    qualityScore: 100,
    audits: [
      { title: 'Soil Bearing Capacity Test', detail: 'Safe Bearing Capacity (SBC) verified via plate load testing.', status: 'PASSED (220 kN/m²)' },
      { title: 'Anti-Termite Soil Barrier', detail: 'Chlorpyrifos chemical barrier sprayed under footing base & perimeter.', status: '10-YEAR GUARANTEE' },
      { title: 'PCC Blinding Layer', detail: '100mm lean concrete (1:4:8) leveling layer under all footings.', status: 'VERIFIED (100mm)' },
    ],
    checkpoints: [
      'Excavation depth verified against structural drawing',
      'Anti-termite chemical soil injection completed',
      'M25 grade footing rebar mesh aligned with cover blocks',
      '7-Day & 28-Day concrete cube compression testing initiated'
    ]
  },
  {
    id: 2,
    stageName: 'Column & RCC Frame Casting',
    phaseLabel: 'Stage 02 — Superstructure Framework',
    progressPercent: 35,
    image: '/images/Column & RCC Frame Casting.png',
    description: 'Precision formwork erection, Tata Tiscon Fe-550D TMT rebar tying, and RMC pouring for vertical columns and floor slabs.',
    isCode: 'IS 456 & IS 1786',
    qualityScore: 100,
    audits: [
      { title: 'TMT Reinforcement Steel', detail: 'Fe-550D TMT main bars tied with 8mm stirrups at 150mm c/c.', status: 'VERIFIED Fe-550D' },
      { title: 'Concrete Cover Blocks', detail: '40mm PVC cover blocks installed to protect steel rebar from weather.', status: 'PASSED (40mm)' },
      { title: 'Slump Cone Test', detail: 'Ready-mix concrete slump tested at site prior to pump discharge.', status: 'PASSED (110mm Slump)' },
    ],
    checkpoints: [
      'Formwork plumb & alignment inspected with laser level',
      'Column lap length & stirrup hook angle (135°) verified',
      'Mechanical needle vibrator compaction applied during pour',
      'Continuous 21-day pond curing schedule established'
    ]
  },
  {
    id: 3,
    stageName: 'Brickwork Masonry & Lintels',
    phaseLabel: 'Stage 03 — Envelope Construction',
    progressPercent: 55,
    image: '/images/Brickwork Masonry & Lintels.png',
    description: 'High-density solid concrete block and wire-cut red brick masonry laid with 1:6 cement-sand mortar and RCC seismic band lintels.',
    isCode: 'IS 1905 & IS 2185',
    qualityScore: 99.8,
    audits: [
      { title: 'Mortar Mix Proportion', detail: 'Rich 1:6 cement mortar with graded river sand for high bond strength.', status: 'AUDITED (1:6 Mix)' },
      { title: 'Continuous RCC Lintel Band', detail: '150mm RCC continuous seismic band over all door & window spans.', status: 'PASSED' },
      { title: 'Galvanized Wall Tie Mesh', detail: 'Steel wall tie mesh embedded every 4th masonry course for stability.', status: 'VERIFIED' },
    ],
    checkpoints: [
      'Masonry line, plumb, and right-angle corner verification',
      'RCC lintel beam casting over all window/door spans',
      'Joint racking completed for high-grip plaster bonding',
      '7-day wet curing of masonry walls executed'
    ]
  },
  {
    id: 4,
    stageName: 'MEP Conduit Routing & Plastering',
    phaseLabel: 'Stage 04 — Concealed Building Utilities',
    progressPercent: 75,
    image: '/images/MEP Conduit Routing & Plastering.png',
    description: 'Concealed FR-LSH electrical PVC conduits, Astral CPVC water lines, hydrostatic pressure testing, and double-coat wall plastering.',
    isCode: 'IS 732 & IS 3043',
    qualityScore: 100,
    audits: [
      { title: 'Hydrostatic Pressure Test', detail: 'CPVC water lines pressurized at 10 kg/cm² for 24 continuous hours.', status: 'PASSED (10 kg/cm²)' },
      { title: 'FR-LSH Electrical Wiring', detail: 'Heavy-duty fire-retardant PVC conduits chased into masonry walls.', status: 'VERIFIED' },
      { title: 'Double-Coat Cement Plaster', detail: 'Rough scratch coat + 12mm smooth finish cement plaster application.', status: 'AUDITED' },
    ],
    checkpoints: [
      '10 kg/cm² hydrostatic pressure test on all water lines',
      'Concealed electrical box alignment and grounding check',
      'Chicken wire mesh applied over brick-concrete junction joints',
      'Sanding and surface moisture test prior to putty'
    ]
  },
  {
    id: 5,
    stageName: 'Waterproofing & Tile Finishes',
    phaseLabel: 'Stage 05 — Surface Protection & Aesthetics',
    progressPercent: 90,
    image: '/images/Waterproofing & Tile Finishes.png',
    description: 'Dr. Fixit 12mm elastomeric terrace waterproofing, toilet wet-area flood testing, and laser-leveled vitrified tile laying.',
    isCode: 'IS 3067 & IS 13712',
    qualityScore: 100,
    audits: [
      { title: 'Terrace Flood Test', detail: '48-hour standing water ponding test on terrace elastomeric coating.', status: 'PASSED (0 Seepage)' },
      { title: 'Laser Tile Leveling', detail: 'Vitrified tiles laid with 2mm tile spacers and epoxy grout.', status: 'VERIFIED' },
      { title: 'Wet Area Waterproofing', detail: 'Dr. Fixit Fastflex 2-coat slurry extended 3ft up bathroom walls.', status: 'PASSED' },
    ],
    checkpoints: [
      '48-hour standing water flood test on terrace & bathrooms',
      'Tile floor slope verification towards shower drainage traps',
      'Asian Paints Royale 5-coat interior paint system application',
      'Sanitary fixture water flow & leak-free joint audit'
    ]
  },
  {
    id: 6,
    stageName: 'Final Snag Audit & Handover',
    phaseLabel: 'Stage 06 — Turnkey Delivery',
    progressPercent: 100,
    image: '/images/Final Snag Audit & Handover.png',
    description: 'Senior structural engineer snag list inspection, electrical load testing, deep site cleaning, and 10-year warranty document handover.',
    isCode: 'ISO 9001:2015 Quality Standard',
    qualityScore: 100,
    audits: [
      { title: 'Senior Engineer Snag Audit', detail: 'Comprehensive 100-point physical inspection sign-off before keys.', status: 'PASSED (0 Snags)' },
      { title: '3-Phase Load & Thermal Scan', detail: 'Thermal camera check of MCB distribution panel under load.', status: 'VERIFIED SAFE' },
      { title: '10-Year Structural Warranty', detail: 'Formal handover of structural & waterproofing guarantee cards.', status: 'ISSUED' },
    ],
    checkpoints: [
      '100-point structural, MEP & finish snag list clearance',
      'Electrical RCCB trip test & thermal camera panel scan',
      'Deep site sanitation & glass window cleaning',
      'Handover of architectural as-built drawings & warranty cards'
    ]
  }
];

export const VirtualSiteInspection: React.FC<VirtualSiteInspectionProps> = ({ onOpenQuote }) => {
  const [activeStageId, setActiveStageId] = useState(1);
  const [selectedAuditIdx, setSelectedAuditIdx] = useState(0);

  const currentStage = STAGES.find(s => s.id === activeStageId) || STAGES[0];

  return (
    <section id="virtual-inspection" className="py-24 lg:py-32 bg-[#0F172A] text-white relative overflow-hidden selection:bg-[#9A6048]/30">
      {/* Subtle Background Blueprint Grid */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#B78A55_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#9A6048]/20 border border-[#B78A55]/40 text-xs font-bold uppercase tracking-widest text-[#B78A55]">
            <Sparkles className="w-4 h-4" />
            Interactive Construction & Quality Inspector
          </div>
          <h2 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Virtual Site Inspection <br />
            <span className="text-[#B78A55]">& Quality Audit Hub</span>
          </h2>
          <p className="text-base sm:text-lg text-[#D4C9BC] leading-relaxed">
            Click through each construction stage below to view real site progress photos, IS code compliance standards, and structural engineering checkpoints.
          </p>
        </div>

        {/* TIMELINE STEPPER BAR */}
        <div className="bg-[#1E293B]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 mb-12 shadow-2xl">
          <div className="flex flex-col gap-6">
            
            {/* Top Info Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#B78A55] block mb-1">
                  {currentStage.phaseLabel}
                </span>
                <h3 className="font-serif-heading text-2xl font-bold text-white">
                  {currentStage.stageName}
                </h3>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <div className="px-4 py-2 bg-[#9A6048]/20 border border-[#9A6048]/40 rounded-full text-xs font-bold text-[#B78A55] uppercase tracking-wider flex items-center gap-2">
                  <FileCheck className="w-4 h-4" />
                  <span>{currentStage.isCode}</span>
                </div>
                <div className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>100% On-Site Inspected</span>
                </div>
              </div>
            </div>

            {/* Stage Selector Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {STAGES.map((s) => {
                const isActive = s.id === activeStageId;
                return (
                  <button
                    key={s.id}
                    onClick={() => {
                      setActiveStageId(s.id);
                      setSelectedAuditIdx(0);
                    }}
                    className={`p-4 rounded-2xl text-left border transition-all duration-300 relative overflow-hidden group ${
                      isActive
                        ? 'bg-[#9A6048] border-[#9A6048] text-white shadow-xl scale-[1.02]'
                        : 'bg-[#0F172A]/80 border-white/10 text-[#D4C9BC] hover:border-white/25 hover:bg-[#0F172A]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className={`text-xs font-bold ${isActive ? 'text-white' : 'text-[#B78A55]'}`}>
                        0{s.id}
                      </span>
                      <span className="text-[10px] opacity-75">{s.progressPercent}%</span>
                    </div>
                    <div className="text-xs font-bold line-clamp-1 leading-tight">{s.stageName}</div>
                  </button>
                );
              })}
            </div>

            {/* Smooth Progress Track */}
            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden relative">
              <div
                className="bg-gradient-to-r from-[#9A6048] to-[#B78A55] h-full transition-all duration-500 rounded-full"
                style={{ width: `${currentStage.progressPercent}%` }}
              />
            </div>

          </div>
        </div>

        {/* MAIN STAGE CONTENT DISPLAY GRID */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT — CLEAN MATCHING STAGE PHOTO */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden h-[460px] sm:h-[540px] border border-white/15 shadow-2xl group">
              <img
                src={currentStage.image}
                alt={currentStage.stageName}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/20 to-transparent" />

              {/* Bottom Photo Caption */}
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-[#0F172A]/90 backdrop-blur-md rounded-2xl border border-white/15">
                <div className="flex items-center justify-between gap-4 mb-2">
                  <span className="text-xs font-bold text-[#B78A55] uppercase tracking-wider">
                    {currentStage.phaseLabel}
                  </span>
                  <span className="text-xs text-emerald-400 font-bold flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verified On Site
                  </span>
                </div>
                <h4 className="text-lg font-serif-heading font-bold text-white mb-1">
                  {currentStage.stageName}
                </h4>
                <p className="text-xs text-[#D4C9BC] leading-relaxed">
                  {currentStage.description}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT — AUDIT PARAMETERS & SENIOR ENGINEER CHECKLIST */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Technical Audits Cards */}
            <div className="space-y-3">
              <div className="text-xs font-bold text-[#B78A55] uppercase tracking-wider flex items-center gap-2 mb-2">
                <Award className="w-4 h-4" />
                Key Engineering Quality Audits
              </div>

              {currentStage.audits.map((audit, idx) => {
                const isSelected = selectedAuditIdx === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setSelectedAuditIdx(idx)}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all duration-300 ${
                      isSelected
                        ? 'bg-[#1E293B] border-[#B78A55] shadow-lg'
                        : 'bg-[#1E293B]/60 border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h5 className="font-serif-heading text-sm font-bold text-white">{audit.title}</h5>
                      <span className="px-2.5 py-0.5 bg-emerald-500/15 text-emerald-400 text-[10px] font-bold uppercase tracking-wider rounded-full border border-emerald-500/30">
                        {audit.status}
                      </span>
                    </div>
                    <p className="text-xs text-[#D4C9BC] leading-relaxed">{audit.detail}</p>
                  </div>
                );
              })}
            </div>

            {/* Senior Engineer Verification Checklist */}
            <div className="bg-[#1E293B] border border-white/10 rounded-3xl p-6 shadow-xl flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#B78A55] uppercase tracking-wider mb-4">
                  <Building2 className="w-4 h-4" />
                  Senior Structural Engineer Verification Checklist
                </div>

                <div className="space-y-3">
                  {currentStage.checkpoints.map((cp, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs text-[#EDE3D3]">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">
                        ✓
                      </div>
                      <span className="leading-relaxed">{cp}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10">
                <button
                  onClick={onOpenQuote}
                  className="w-full bg-[#9A6048] hover:bg-[#86513B] text-white font-bold py-3.5 rounded-full text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#9A6048]/30 active:scale-95"
                >
                  <span>Book Engineering Inspection</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default VirtualSiteInspection;
