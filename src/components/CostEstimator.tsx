import React from 'react';
import {
  Shield,
  HardHat,
  Leaf,
  MessageSquare,
  FileText,
  Settings,
  CheckCircle2,
  Download,
  Building2,
  ArrowRight
} from 'lucide-react';

interface CostEstimatorProps {
  onOpenQuote: () => void;
}

export const CostEstimator: React.FC<CostEstimatorProps> = ({ onOpenQuote }) => {
  const steps = [
    {
      num: '01',
      title: 'Consultation',
      desc: 'Understand your requirements',
      icon: MessageSquare
    },
    {
      num: '02',
      title: 'Planning & Design',
      desc: 'Create the best solution',
      icon: FileText
    },
    {
      num: '03',
      title: 'Approvals',
      desc: 'Handle regulatory processes',
      icon: Settings
    },
    {
      num: '04',
      title: 'Construction',
      desc: 'Quality execution with regular updates',
      icon: HardHat
    },
    {
      num: '05',
      title: 'Handover',
      desc: 'On-time delivery and support',
      icon: CheckCircle2
    }
  ];

  const handleDownloadBrochure = () => {
    onOpenQuote();
  };

  return (
    <section id="estimator" className="py-12 lg:py-16 bg-[#131D23] text-white relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Panel Card Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10 reveal-scale">
          
          {/* ══════════════ LEFT PANEL: OUR COMMITMENT ══════════════ */}
          <div className="lg:col-span-5 relative p-8 sm:p-12 flex flex-col justify-between min-h-[500px] lg:min-h-[580px] overflow-hidden group">
            
            {/* Background Image with Dark Contrast Overlay */}
            <div className="absolute inset-0 z-0">
              <img
                src="/images/about_craft.jpg"
                alt="Construction structural frame and tower crane"
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D151A] via-[#0D151A]/85 to-[#0D151A]/60"></div>
            </div>

            {/* Top Eyebrow & Headline */}
            <div className="relative z-10 space-y-4">
              <div className="flex items-center gap-3 reveal-on-scroll">
                <div className="w-8 h-[2px] bg-[#B78A55] transition-all duration-300 group-hover:w-12"></div>
                <span className="text-xs font-bold tracking-[0.22em] text-[#D4C9BC] uppercase transition-colors hover:text-[#B78A55]">
                  OUR COMMITMENT
                </span>
              </div>

              <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.12] reveal-on-scroll reveal-delay-1">
                <span className="inline-block transition-transform duration-300 hover:translate-x-1">From Vision</span><br />
                <span className="inline-block transition-transform duration-300 hover:translate-x-1">to Reality</span><br />
                <span className="animate-text-shimmer inline-block font-extrabold transition-transform duration-300 hover:scale-105 origin-left">
                  With Confidence
                </span>
              </h2>

              <p className="text-xs sm:text-sm text-[#D4C9BC]/90 leading-relaxed max-w-sm pt-2 font-normal reveal-on-scroll reveal-delay-2 transition-colors duration-300 hover:text-white">
                We combine experience, planning and modern construction practices to deliver spaces that are strong, functional and built for the future.
              </p>
            </div>

            {/* Bottom 3 Feature Pills */}
            <div className="relative z-10 grid grid-cols-3 gap-3 sm:gap-4 pt-10 mt-8 border-t border-white/15 reveal-on-scroll reveal-delay-3">
              
              {/* Feature 1: Quality Assurance */}
              <div className="space-y-1.5 group/feat transition-all duration-300 hover:-translate-y-1 cursor-default">
                <Shield className="w-6 h-6 text-[#B78A55] transition-transform duration-300 group-hover/feat:scale-110 group-hover/feat:rotate-6" />
                <h3 className="text-xs sm:text-sm font-bold text-white leading-snug transition-colors duration-300 group-hover/feat:text-[#B78A55]">
                  Quality Assurance
                </h3>
                <p className="text-[11px] text-[#D4C9BC]/75 leading-tight transition-colors duration-300 group-hover/feat:text-[#D4C9BC]">
                  Built to last
                </p>
              </div>

              {/* Feature 2: Safety First */}
              <div className="space-y-1.5 group/feat transition-all duration-300 hover:-translate-y-1 cursor-default">
                <HardHat className="w-6 h-6 text-[#B78A55] transition-transform duration-300 group-hover/feat:scale-110 group-hover/feat:rotate-6" />
                <h3 className="text-xs sm:text-sm font-bold text-white leading-snug transition-colors duration-300 group-hover/feat:text-[#B78A55]">
                  Safety First
                </h3>
                <p className="text-[11px] text-[#D4C9BC]/75 leading-tight transition-colors duration-300 group-hover/feat:text-[#D4C9BC]">
                  On-site safety at every step
                </p>
              </div>

              {/* Feature 3: Modern Construction */}
              <div className="space-y-1.5 group/feat transition-all duration-300 hover:-translate-y-1 cursor-default">
                <Leaf className="w-6 h-6 text-[#B78A55] transition-transform duration-300 group-hover/feat:scale-110 group-hover/feat:rotate-6" />
                <h3 className="text-xs sm:text-sm font-bold text-white leading-snug transition-colors duration-300 group-hover/feat:text-[#B78A55]">
                  Modern Construction
                </h3>
                <p className="text-[11px] text-[#D4C9BC]/75 leading-tight transition-colors duration-300 group-hover/feat:text-[#D4C9BC]">
                  Sustainable building practices
                </p>
              </div>

            </div>

          </div>

          {/* ══════════════ RIGHT PANEL: OUR CONSTRUCTION PROCESS ══════════════ */}
          <div className="lg:col-span-7 bg-white text-[#131D23] p-8 sm:p-12 flex flex-col justify-between">
            
            <div>
              {/* Top Row: Eyebrow + Download Brochure Button */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3 reveal-on-scroll">
                  <div className="w-8 h-[2px] bg-[#B78A55]"></div>
                  <span className="text-xs font-bold tracking-[0.22em] text-[#131D23] uppercase">
                    OUR CONSTRUCTION PROCESS
                  </span>
                </div>

                {/* Download Brochure Box */}
                <button
                  onClick={handleDownloadBrochure}
                  className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl border border-black/10 bg-[#FAFAFA] hover:bg-[#F4EFE6] hover:border-[#B78A55]/40 transition-all duration-300 text-left shadow-sm self-start sm:self-auto group reveal-on-scroll hover:scale-105 active:scale-95"
                >
                  <FileText className="w-6 h-6 text-[#B78A55] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                  <div>
                    <div className="text-xs font-bold text-[#131D23] leading-none transition-colors duration-300 group-hover:text-[#B78A55]">Download</div>
                    <div className="text-[11px] text-[#6F6256] mt-0.5 leading-none">Our Brochure</div>
                  </div>
                  <Download className="w-4 h-4 text-[#6F6256] group-hover:text-[#B78A55] transition-transform duration-300 group-hover:translate-y-0.5 ml-1" />
                </button>
              </div>

              {/* Main Headline */}
              <h3 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-bold text-[#131D23] tracking-tight leading-tight mb-3 reveal-on-scroll reveal-delay-1">
                <span className="inline-block transition-transform duration-300 hover:translate-x-1">A Clear Process for</span><br />
                <span className="animate-text-shimmer inline-block font-extrabold transition-transform duration-300 hover:scale-105 origin-left">
                  Successful Projects
                </span>
              </h3>

              <p className="text-xs sm:text-sm text-[#6F6256] leading-relaxed max-w-xl mb-10 reveal-on-scroll reveal-delay-2 transition-colors duration-300 hover:text-[#131D23]">
                We follow a well-defined process to ensure transparency, quality and on-time delivery for every project.
              </p>

              {/* 5-Step Process Timeline */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 sm:gap-2 relative mb-8 reveal-on-scroll reveal-delay-3">
                {steps.map((step, idx) => {
                  const Icon = step.icon;
                  const delayClasses = ['reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3', 'reveal-delay-4', 'reveal-delay-4'];
                  return (
                    <div
                      key={step.num}
                      className={`relative flex flex-col items-center text-center group transition-all duration-300 hover:-translate-y-1.5 cursor-pointer ${delayClasses[idx]}`}
                    >
                      
                      {/* Connecting line between icons on desktop */}
                      {idx < steps.length - 1 && (
                        <div className="hidden sm:block absolute top-6 left-[60%] w-[80%] h-[1.5px] bg-black/10 z-0 group-hover:bg-[#B78A55]/40 transition-colors duration-300"></div>
                      )}

                      {/* Step Icon Circle */}
                      <div className="w-12 h-12 rounded-full bg-white border border-black/10 shadow-sm flex items-center justify-center text-[#131D23] group-hover:border-[#B78A55] group-hover:text-[#B78A55] group-hover:bg-[#F9F5EF] group-hover:scale-110 group-hover:shadow-md transition-all duration-300 relative z-10 mb-3">
                        <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                      </div>

                      {/* Step Number */}
                      <div className="text-xs font-bold text-[#B78A55] mb-0.5 transition-transform duration-300 group-hover:scale-110">
                        {step.num}
                      </div>

                      {/* Step Title */}
                      <div className="text-xs sm:text-sm font-bold text-[#131D23] leading-snug mb-1 transition-colors duration-300 group-hover:text-[#B78A55]">
                        {step.title}
                      </div>

                      {/* Step Description */}
                      <div className="text-[11px] text-[#6F6256] leading-tight max-w-[130px] transition-colors duration-300 group-hover:text-[#131D23]">
                        {step.desc}
                      </div>

                    </div>
                  );
                })}
              </div>

            </div>

            {/* Bottom CTA Card */}
            <div className="bg-[#F1E8DC] hover:bg-[#EBE0D2] transition-colors duration-300 rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border border-black/[0.04] shadow-sm mt-4 reveal-on-scroll reveal-delay-4 group/cta">
              
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white/80 border border-black/5 flex items-center justify-center flex-shrink-0 text-[#B78A55] group-hover/cta:scale-110 transition-transform duration-300">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-[#131D23] leading-tight group-hover/cta:text-[#B78A55] transition-colors duration-300">
                    Let's Build Your Next Project
                  </h4>
                  <p className="text-xs text-[#6F6256] mt-0.5">
                    Get in touch with our team for a personalized consultation.
                  </p>
                </div>
              </div>

              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto bg-[#B78A55] hover:bg-[#9A6048] text-white font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl shadow-md hover:shadow-terracotta-glow transition-all duration-300 flex items-center justify-center gap-2 flex-shrink-0 cursor-pointer active:scale-95 group/btn"
              >
                <span className="transition-transform duration-300 group-hover/btn:translate-x-0.5">Get a Free Quote</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
