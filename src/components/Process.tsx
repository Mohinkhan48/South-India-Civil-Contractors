import React, { useState } from 'react';
import {
  Shield,
  HardHat,
  Leaf,
  Users,
  ArrowRight,
  Check
} from 'lucide-react';

interface ProcessProps {
  onOpenQuote?: () => void;
}

interface StageInfo {
  id: number;
  num: string;
  name: string;
  subtitle: string;
  shortDesc: string;
  description: string;
  image: string;
  stats: string;
}

export const Process: React.FC<ProcessProps> = ({ onOpenQuote }) => {
  const [currentStage, setCurrentStage] = useState<number>(1); // Default to Stage 1 Foundation

  const stages: StageInfo[] = [
    {
      id: 1,
      num: '01',
      name: 'Foundation',
      subtitle: 'Site preparation and strong foundation work',
      shortDesc: 'Site preparation and strong foundation work',
      description: 'Excavation of red soil, PCC bedding, deep reinforced concrete footings, and damp-proof plinth beam grid with seismic resistance.',
      image: '/assets/process/01-foundation.jpg',
      stats: '100% Compaction Tested & Waterproofed'
    },
    {
      id: 2,
      num: '02',
      name: 'Steel Structure',
      subtitle: 'Reinforcement and structural framework',
      shortDesc: 'Reinforcement and structural framework',
      description: 'High-yield Fe 550D TMT steel rebar column cages, ring stirrup tying, beam frameworks, and monolithic concrete core casting.',
      image: '/assets/process/02-steel.jpg',
      stats: 'Fe 550D TMT Primary Structural Core'
    },
    {
      id: 3,
      num: '03',
      name: 'Brickwork',
      subtitle: 'High-quality brick construction for strong and durable walls.',
      shortDesc: 'High-quality brick construction',
      description: 'High-density kiln-fired red clay bricks laid in interlocking staggered Flemish bond with polymer-modified cement mortar joints.',
      image: '/assets/process/03-brickwork.jpg',
      stats: 'Precision Alignment with Mortar Leveling'
    },
    {
      id: 4,
      num: '04',
      name: 'Cement & Plaster',
      subtitle: 'Durable plastering for smooth finish',
      shortDesc: 'Durable plastering for smooth finish',
      description: 'Double-coat external sand-face cement plastering with crystalline waterproofing compound for seamless, crack-free longevity.',
      image: '/assets/process/04-plaster.jpg',
      stats: 'Double-Coat Sand-Face Weather Seal'
    },
    {
      id: 5,
      num: '05',
      name: 'Painting',
      subtitle: 'Premium paints for long-lasting beauty',
      shortDesc: 'Premium paints for long-lasting beauty',
      description: 'Professional painters applying multi-layer primer followed by 2 coats of architectural exterior weather-guard acrylic emulsion.',
      image: '/assets/process/05-painting.jpg',
      stats: '10-Year Weather-Shield Exterior Coating'
    },
    {
      id: 6,
      num: '06',
      name: 'Finishing',
      subtitle: 'Doors, windows and final touches',
      shortDesc: 'Doors, windows and final touches',
      description: 'Turnkey architectural completion with double-glazed glass windows, solid teak entrance, balcony balustrades, and lush landscaping.',
      image: '/assets/process/06-finishing.jpg',
      stats: 'Turnkey Handover & Quality Certification'
    },
  ];

  const handleStageSelect = (stageId: number) => {
    setCurrentStage(stageId);
  };

  const activeStageData = stages[currentStage - 1];

  return (
    <section id="process" className="py-20 lg:py-28 bg-[#F9F6F0] text-[#1C262D] relative overflow-hidden font-sans border-t border-[#EAE3D6]">
      
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#1C262D 1px, transparent 1px)', backgroundSize: '28px 28px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ══════════════════════════════════════════════════════════════
            1. SECTION HEADER
           ══════════════════════════════════════════════════════════════ */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 lg:mb-12">
          
          {/* Left Title Area */}
          <div>
            <div className="flex items-center gap-2.5 mb-2.5">
              <span className="w-6 h-[2px] bg-[#B78A55]"></span>
              <span className="text-xs font-bold tracking-[0.2em] text-[#B78A55] uppercase">
                OUR CONSTRUCTION PROCESS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-extrabold text-[#1A2329] tracking-tight leading-tight mb-2.5">
              From Foundation to <span className="text-[#A06C3E]">Finish</span>
            </h2>
            <p className="text-base sm:text-lg text-[#5A6872] font-normal max-w-xl leading-relaxed">
              Explore each stage and see how your dream space takes shape.
            </p>
          </div>

          {/* Right Brand Subtitle */}
          <div className="lg:max-w-xs text-left lg:text-right pb-1">
            <p className="text-xs sm:text-sm text-[#76848F] leading-relaxed">
              A step-by-step journey of quality, precision and craftsmanship by <strong className="text-[#1A2329] font-bold">SOUTH INDIA CIVIL CONTRACTORS</strong>.
            </p>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            2. MAIN TWO-COLUMN INTERACTIVE REALISTIC SECTION
           ══════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch mb-12">
          
          {/* ────────────────── LEFT COLUMN: REALISTIC STAGE CANVAS ────────────────── */}
          <div className="lg:col-span-8 bg-[#111A20] rounded-[28px] overflow-hidden shadow-2xl relative flex flex-col justify-between min-h-[480px] sm:min-h-[580px] lg:min-h-[660px] border border-[#23313A]/50 group">
            
            {/* Top Scene Floating Header Badges */}
            <div className="absolute top-0 left-0 right-0 p-5 sm:p-7 flex items-start justify-between z-40 pointer-events-none">
              
              {/* Stage Pill + Name + Subtitle */}
              <div className="max-w-md">
                <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#1A262E]/90 backdrop-blur-md border border-white/15 text-white text-xs font-bold tracking-wider mb-2.5 shadow-lg">
                  {activeStageData.num} / 06
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight mb-1 drop-shadow-md">
                  {activeStageData.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#D7E2EA] font-normal leading-snug drop-shadow">
                  {activeStageData.subtitle}
                </p>
              </div>

            </div>

            {/* ── PHOTO-REALISTIC STAGE VISUALIZATION ── */}
            <div className="relative flex-1 w-full h-full overflow-hidden bg-black flex items-center justify-center">
              
              {/* Background Authentic Realistic Photography for Each Stage */}
              {stages.map((stage) => {
                const isActive = stage.id === currentStage;
                return (
                  <div
                    key={stage.id}
                    className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
                      isActive ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-[1.02]'
                    }`}
                    style={{
                      backgroundImage: `url(${stage.image})`,
                      backgroundPosition: stage.id >= 5 ? 'center top' : 'center center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat'
                    }}
                  />
                );
              })}

              {/* Dark subtle vignette to emphasize text and bottom timeline */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1014]/90 via-transparent to-[#0A1014]/40 z-20 pointer-events-none" />

            </div>

            {/* ── BOTTOM TIMELINE PROGRESS BAR ── */}
            <div className="relative z-30 p-4 sm:p-6 bg-gradient-to-t from-[#0A1014] to-transparent">
              <div className="bg-[#152028]/90 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-white/10 shadow-2xl relative">
                
                {/* 6 Stage Timeline Steps with Connected Line */}
                <div className="relative flex items-center justify-between">
                  
                  {/* Background Track Line spanning between first and last circle centers */}
                  <div className="absolute left-[14px] right-[14px] top-[13px] h-[2px] bg-white/15 -z-0"></div>
                  
                  {/* Active Progress Track Line covering smoothly from stage 1 all the way to stage 6 */}
                  <div 
                    className="absolute left-[14px] top-[13px] h-[2px] bg-[#E5A855] shadow-[0_0_8px_rgba(229,168,85,0.7)] -z-0 transition-all duration-500 ease-out"
                    style={{ width: `calc((100% - 28px) * ${((currentStage - 1) / 5)})` }}
                  ></div>

                  {/* 6 Timeline Stage Markers */}
                  {stages.map((stage) => {
                    const isCompleted = stage.id < currentStage;
                    const isActive = stage.id === currentStage;

                    return (
                      <button
                        key={stage.id}
                        onClick={() => handleStageSelect(stage.id)}
                        className="flex flex-col items-center group relative z-10 focus:outline-none"
                      >
                        {/* Timeline Circle */}
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold transition-all duration-300 ${
                            isActive
                              ? 'bg-[#E5A855] text-[#111A20] shadow-[0_0_16px_rgba(229,168,85,0.7)] scale-110 ring-4 ring-[#E5A855]/20'
                              : isCompleted
                              ? 'bg-[#A06C3E] text-white shadow-md'
                              : 'bg-[#1F2B33] text-white/50 border border-white/10 hover:border-[#E5A855]/50 group-hover:text-white'
                          }`}
                        >
                          {isCompleted ? (
                            <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                          ) : (
                            stage.num
                          )}
                        </div>

                        {/* Stage Name Label */}
                        <span
                          className={`text-[10px] sm:text-[11px] font-semibold mt-1.5 tracking-tight transition-colors hidden xs:block ${
                            isActive
                              ? 'text-[#E5A855] font-bold'
                              : isCompleted
                              ? 'text-white/90'
                              : 'text-white/40 group-hover:text-white/70'
                          }`}
                        >
                          {stage.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>

          {/* ────────────────── RIGHT COLUMN: CONSTRUCTION STAGES SELECTOR CARD ────────────────── */}
          <div className="lg:col-span-4 bg-white rounded-[28px] p-5 sm:p-7 border border-[#E5DFD7] shadow-xl flex flex-col justify-between">
            
            {/* Card Top Title Header */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-4 h-[2px] bg-[#B78A55]"></span>
                <span className="text-[11px] font-bold tracking-[0.2em] text-[#B78A55] uppercase">
                  CONSTRUCTION STAGES
                </span>
              </div>
              <p className="text-xs text-[#5A6872] font-medium">
                Click on each stage to see the transformation.
              </p>
            </div>

            {/* 6 Stage Clickable Buttons with Photorealistic Thumbnails & Arrow */}
            <div className="space-y-2.5 flex-1 flex flex-col justify-center">
              {stages.map((stage) => {
                const isActive = stage.id === currentStage;

                return (
                  <button
                    key={stage.id}
                    onClick={() => handleStageSelect(stage.id)}
                    className={`w-full text-left p-2.5 sm:p-3 rounded-2xl border transition-all duration-200 flex items-center justify-between group relative ${
                      isActive
                        ? 'bg-[#F7EFE4] border-[#B78A55] shadow-sm'
                        : 'bg-[#FAFAF7] hover:bg-[#F2ECE1]/60 border-[#E8E2D8] hover:border-[#D5C9B8]'
                    }`}
                  >
                    {/* Left Thumbnail + Info */}
                    <div className="flex items-center gap-3 min-w-0">
                      
                      {/* Photorealistic Stage Thumbnail */}
                      <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden flex-shrink-0 border border-black/10 shadow-inner">
                        <img
                          src={stage.image}
                          alt={stage.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {isActive && (
                          <div className="absolute inset-0 bg-[#B78A55]/15 ring-2 ring-inset ring-[#B78A55]" />
                        )}
                      </div>

                      {/* Text details */}
                      <div className="min-w-0 pr-2">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span
                            className={`text-xs font-bold ${
                              isActive ? 'text-[#A06C3E]' : 'text-[#7A8892]'
                            }`}
                          >
                            {stage.num}
                          </span>
                          <h4
                            className={`text-sm sm:text-[15px] font-bold truncate leading-tight ${
                              isActive ? 'text-[#1A2329]' : 'text-[#2D3A43] group-hover:text-[#1A2329]'
                            }`}
                          >
                            {stage.name}
                          </h4>
                        </div>
                        <p className="text-[11px] sm:text-xs text-[#6A7882] truncate leading-tight font-normal">
                          {stage.shortDesc}
                        </p>
                      </div>
                    </div>

                    {/* Right Arrow Button */}
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                        isActive
                          ? 'bg-[#B78A55] text-white shadow-sm'
                          : 'text-[#8A98A2] group-hover:text-[#1A2329] group-hover:translate-x-0.5'
                      }`}
                    >
                      <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Quick Stage Metric Note */}
            <div className="mt-4 pt-3 border-t border-[#EDE7DC] flex items-center justify-between text-[11px] text-[#76848F]">
              <span className="font-semibold text-[#1A2329]">Standard:</span>
              <span className="text-[#A06C3E] font-medium">{activeStageData.stats}</span>
            </div>

          </div>

        </div>

        {/* ══════════════════════════════════════════════════════════════
            3. BOTTOM FEATURE STRIP
           ══════════════════════════════════════════════════════════════ */}
        <div className="bg-transparent rounded-3xl pt-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 items-center">
            
            {/* Feature 1: Quality Construction */}
            <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/60 border border-[#E8E2D8]/80 shadow-sm">
              <div className="w-11 h-11 rounded-xl bg-[#F7EFE4] text-[#A06C3E] flex items-center justify-center flex-shrink-0 border border-[#B78A55]/30">
                <Shield className="w-5 h-5 stroke-[2]" />
              </div>
              <div>
                <h5 className="text-xs sm:text-sm font-bold text-[#1A2329] leading-tight">
                  Quality Construction
                </h5>
                <p className="text-[11px] text-[#71808B] font-normal leading-tight">
                  Built to last
                </p>
              </div>
            </div>

            {/* Feature 2: Safety First */}
            <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/60 border border-[#E8E2D8]/80 shadow-sm">
              <div className="w-11 h-11 rounded-xl bg-[#F7EFE4] text-[#A06C3E] flex items-center justify-center flex-shrink-0 border border-[#B78A55]/30">
                <HardHat className="w-5 h-5 stroke-[2]" />
              </div>
              <div>
                <h5 className="text-xs sm:text-sm font-bold text-[#1A2329] leading-tight">
                  Safety First
                </h5>
                <p className="text-[11px] text-[#71808B] font-normal leading-tight">
                  Secure sites, safer tomorrows
                </p>
              </div>
            </div>

            {/* Feature 3: Sustainable Practices */}
            <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/60 border border-[#E8E2D8]/80 shadow-sm">
              <div className="w-11 h-11 rounded-xl bg-[#F7EFE4] text-[#A06C3E] flex items-center justify-center flex-shrink-0 border border-[#B78A55]/30">
                <Leaf className="w-5 h-5 stroke-[2]" />
              </div>
              <div>
                <h5 className="text-xs sm:text-sm font-bold text-[#1A2329] leading-tight">
                  Sustainable Practices
                </h5>
                <p className="text-[11px] text-[#71808B] font-normal leading-tight">
                  Building a better future
                </p>
              </div>
            </div>

            {/* Feature 4: Expert Team */}
            <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/60 border border-[#E8E2D8]/80 shadow-sm">
              <div className="w-11 h-11 rounded-xl bg-[#F7EFE4] text-[#A06C3E] flex items-center justify-center flex-shrink-0 border border-[#B78A55]/30">
                <Users className="w-5 h-5 stroke-[2]" />
              </div>
              <div>
                <h5 className="text-xs sm:text-sm font-bold text-[#1A2329] leading-tight">
                  Expert Team
                </h5>
                <p className="text-[11px] text-[#71808B] font-normal leading-tight">
                  Experience you can trust
                </p>
              </div>
            </div>

            {/* Right CTA Button: Get a Free Quote */}
            <div className="w-full">
              <button
                onClick={onOpenQuote}
                className="w-full py-3.5 px-6 rounded-2xl bg-[#A06C3E] hover:bg-[#8B5A2B] text-white font-bold text-sm tracking-wide shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Process;
