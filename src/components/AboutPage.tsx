import React, { useEffect } from 'react';
import { siteConfig } from '../config/site';
import { Breadcrumbs } from './Breadcrumbs';
import {
  ShieldCheck, Clock, MessageSquare,
  TrendingUp, FileText, Users, Award,
  ArrowRight, Sparkles, MapPin, Building2, HardHat
} from 'lucide-react';

interface AboutPageProps {
  onNavigateHome: () => void;
  onOpenQuote: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigateHome: _onNavigateHome, onOpenQuote }) => {
  const canonicalUrl = `${siteConfig.siteUrl}/about`;

  useEffect(() => {
    document.title = 'About South India Civil Contractors | Premier Engineering & Construction';
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      'content',
      'Learn about South India Civil Contractors — 25+ years of civil engineering mastery, bespoke residential villas, and Grade-A commercial construction across South India.'
    );

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [canonicalUrl]);

  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About South India Civil Contractors',
    url: canonicalUrl,
    description: 'Learn about South India Civil Contractors — 25+ years of civil engineering excellence across South India.',
    publisher: {
      '@type': 'ConstructionBusiness',
      name: siteConfig.companyName,
      url: siteConfig.siteUrl,
      telephone: siteConfig.phoneDisplay,
      email: siteConfig.email,
    },
  };

  const cities = [
    { name: 'Chennai', image: '/images/cities/chennai.jpg', label: 'Tamil Nadu Hub' },
    { name: 'Bangalore', image: '/images/cities/bangalore.jpg', label: 'Karnataka HQ' },
    { name: 'Hyderabad', image: '/images/cities/hyderabad.jpg', label: 'Telangana Region' },
    { name: 'Kochi', image: '/images/cities/kochi.jpg', label: 'Kerala Coastal' },
    { name: 'Coimbatore', image: '/images/cities/coimbatore.jpg', label: 'Industrial Corridor' },
    { name: 'Mysore', image: '/images/cities/mysore.jpg', label: 'Heritage Belt' },
  ];

  const principles = [
    { num: '01', title: 'Precision', desc: 'Accurate planning and execution.' },
    { num: '02', title: 'Transparency', desc: 'Open communication at every stage.' },
    { num: '03', Quality: 'Quality', title: 'Quality', desc: 'Superior materials and workmanship.' },
    { num: '04', title: 'Safety', desc: 'Strict adherence to safety standards.' },
    { num: '05', title: 'Long-Term Durability', desc: 'Built to last for generations.' },
  ];

  return (
    <main className="min-h-screen bg-[#131D23] text-[#EDE3D3] selection:bg-[#9A6048]/30 selection:text-[#EDE3D3]">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      {/* ──────────────────────────────────────────────────────────
          1. PREMIUM HERO SECTION (MATCHING REFERENCE IMAGE)
      ────────────────────────────────────────────────────────── */}
      <header className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 px-4 sm:px-6 lg:px-8 border-b border-[#EDE3D3]/10 overflow-hidden bg-[#131D23]">
        {/* Background Image & Architectural Gradients */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/resources_hero.jpg"
            alt="South India Civil Contractors Engineering"
            className="w-full h-full object-cover object-center brightness-75 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/95 via-[#0F172A]/85 to-[#0F172A]/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#131D23] via-transparent to-[#0F172A]/60" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6">
              <Breadcrumbs items={[{ name: 'About Us' }]} />

              <div className="flex items-center gap-3">
                <div className="w-8 h-[2px] bg-[#9A6048]" />
                <span className="text-xs font-bold tracking-[0.26em] text-[#B78A55] uppercase">
                  25+ YEARS OF ENGINEERING MASTERY
                </span>
              </div>

              <h1 className="font-serif-heading text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1]">
                About South India <br />
                <span className="text-[#B78A55]">Civil Contractors</span>
              </h1>

              <p className="text-base sm:text-lg text-[#D4C9BC] max-w-xl leading-relaxed">
                Delivering precision civil contracting, bespoke residential villas, and Grade-A commercial construction across South India.
              </p>

              {/* Three Trust Highlights */}
              <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#9A6048]/20 border border-[#9A6048]/40 flex items-center justify-center text-[#B78A55] shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-white">Quality Craftsmanship</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#9A6048]/20 border border-[#9A6048]/40 flex items-center justify-center text-[#B78A55] shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-white">On-Time Delivery</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#9A6048]/20 border border-[#9A6048]/40 flex items-center justify-center text-[#B78A55] shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-white">Transparent Communication</span>
                </div>
              </div>
            </div>

            {/* Right Hero Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/15 group">
                <img
                  src="/images/resources_safety.jpg"
                  alt="Senior Civil Construction Engineer"
                  className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/20 to-transparent" />
                
                {/* Top Badge */}
                <div className="absolute top-6 right-6 p-4 bg-[#131D23]/85 backdrop-blur-md rounded-2xl border border-white/10 text-right">
                  <span className="text-[10px] font-bold text-[#B78A55] uppercase tracking-widest block">
                    BUILDING STRONGER
                  </span>
                  <span className="text-xs font-bold text-white tracking-wider block">
                    SOUTH INDIA SINCE 2009
                  </span>
                </div>

                {/* Bottom Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#131D23]/90 backdrop-blur-md rounded-2xl border border-white/15 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#B78A55]" />
                    <span className="text-xs font-bold text-white uppercase tracking-wider">
                      People · Engineering · Progress
                    </span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </header>


      {/* ──────────────────────────────────────────────────────────
          2. OUR STORY SECTION (WARM CREAM SECTION)
      ────────────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#EDE3D3] text-[#131D23] border-b border-[#131D23]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Story Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[2px] bg-[#9A6048]" />
                <span className="text-xs font-bold tracking-[0.24em] text-[#9A6048] uppercase">
                  Our Story
                </span>
              </div>

              <h2 className="font-serif-heading text-4xl sm:text-5xl font-bold text-[#131D23] leading-tight">
                Rooted in <br />
                <span className="text-[#9A6048]">Engineering Excellence</span>
              </h2>

              <p className="text-[#45382F] leading-relaxed text-base sm:text-lg">
                Founded in 2009, South India Civil Contractors has established itself as one of the region's premier civil contracting firms. We manage full-spectrum construction projects across Chennai, Bangalore, Hyderabad, Kochi, Coimbatore, and Mysore.
              </p>

              <p className="text-[#6F6256] leading-relaxed text-sm sm:text-base">
                Our philosophy centers on structural integrity, transparent Bill of Quantities (BOQ) estimations, daily site engineer supervision, and strict adherence to NBC national building safety standards.
              </p>

              <div className="pt-2">
                <button
                  onClick={onOpenQuote}
                  className="bg-[#9A6048] hover:bg-[#86513B] text-white font-bold px-8 py-4 rounded-full text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-[#9A6048]/30 active:scale-95"
                >
                  <span>Our Approach</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Story Visual with Floating Overlapping Credentials Card */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#131D23]/10 group">
                <img
                  src="/images/images of construction/WhatsApp Image 2026-09-05 at 1.01.10 PM.jpeg"
                  alt="South India Civil Contractors Engineering Site"
                  className="w-full h-[520px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131D23]/60 via-transparent to-transparent" />
              </div>

              {/* Floating Verified Credentials Panel */}
              <div className="sm:absolute -bottom-8 -right-6 bg-white p-6 sm:p-8 rounded-3xl border border-[#131D23]/15 shadow-2xl space-y-4 max-w-xs mt-6 sm:mt-0">
                <div>
                  <div className="font-serif-heading text-3xl font-bold text-[#9A6048]">15+</div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#131D23]">Years of Experience</div>
                </div>
                <div className="h-[1px] bg-[#131D23]/10" />
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#9A6048]">Multi-City</div>
                  <div className="text-sm font-bold text-[#131D23]">Active Presence Across South India</div>
                </div>
                <div className="h-[1px] bg-[#131D23]/10" />
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#9A6048]">End-to-End</div>
                  <div className="text-sm font-bold text-[#131D23]">Turnkey Civil Contracting</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ──────────────────────────────────────────────────────────
          3. ENGINEERING & QUALITY CREDENTIALS (DARK NAVY SECTION)
      ────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#131D23] text-white border-b border-[#EDE3D3]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            
            {/* Credential 1 */}
            <div className="pt-6 sm:pt-0 sm:pr-6 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#9A6048]/20 border border-[#9A6048]/40 flex items-center justify-center text-[#B78A55]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="font-serif-heading text-3xl sm:text-4xl font-bold text-white">100%</div>
              <h3 className="font-serif-heading text-base font-bold text-[#B78A55]">Certified Raw Materials</h3>
              <p className="text-xs text-[#D4C9BC] leading-relaxed">
                Fe 550D TMT steel and 53-grade OPC/PPC cement sourced directly from primary manufacturers.
              </p>
            </div>

            {/* Credential 2 */}
            <div className="pt-6 sm:pt-0 sm:px-6 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#9A6048]/20 border border-[#9A6048]/40 flex items-center justify-center text-[#B78A55]">
                <Award className="w-6 h-6" />
              </div>
              <div className="font-serif-heading text-3xl sm:text-4xl font-bold text-white">10-Year</div>
              <h3 className="font-serif-heading text-base font-bold text-[#B78A55]">Structural Guarantee</h3>
              <p className="text-xs text-[#D4C9BC] leading-relaxed">
                Written structural warranty backing RCC frameworks, foundation mechanics, and load-bearing elements.
              </p>
            </div>

            {/* Credential 3 */}
            <div className="pt-6 sm:pt-0 sm:px-6 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#9A6048]/20 border border-[#9A6048]/40 flex items-center justify-center text-[#B78A55]">
                <FileText className="w-6 h-6" />
              </div>
              <div className="font-serif-heading text-3xl sm:text-4xl font-bold text-white">Zero</div>
              <h3 className="font-serif-heading text-base font-bold text-[#B78A55]">Cost Overruns</h3>
              <p className="text-xs text-[#D4C9BC] leading-relaxed">
                Itemized transparent BOQ with fixed contract budgets and milestone-based payments.
              </p>
            </div>

            {/* Credential 4 */}
            <div className="pt-6 sm:pt-0 sm:pl-6 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#9A6048]/20 border border-[#9A6048]/40 flex items-center justify-center text-[#B78A55]">
                <HardHat className="w-6 h-6" />
              </div>
              <div className="font-serif-heading text-3xl sm:text-4xl font-bold text-white">Daily</div>
              <h3 className="font-serif-heading text-base font-bold text-[#B78A55]">Engineering Audits</h3>
              <p className="text-xs text-[#D4C9BC] leading-relaxed">
                Slump testing, ultrasonic checks, rebar cover audits & concrete cube compression tests.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* ──────────────────────────────────────────────────────────
          4. WHY CHOOSE US SECTION (WARM CREAM SECTION)
      ────────────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#EDE3D3] text-[#131D23] border-b border-[#131D23]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-[2px] bg-[#9A6048]" />
                <span className="text-xs font-bold tracking-[0.24em] text-[#9A6048] uppercase">
                  Why Choose Us
                </span>
              </div>
              <h2 className="font-serif-heading text-4xl sm:text-5xl font-bold text-[#131D23]">
                A Construction Partner <br />
                <span className="text-[#9A6048]">You Can Rely On</span>
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 max-w-xl">
              <p className="text-[#6F6256] text-sm leading-relaxed">
                We bring together engineering expertise, transparent processes, and a commitment to quality to deliver spaces that stand the test of time.
              </p>
              <button
                onClick={onOpenQuote}
                className="bg-[#9A6048] hover:bg-[#86513B] text-white font-bold px-6 py-3.5 rounded-full text-xs uppercase tracking-wider shrink-0 transition-all shadow-md"
              >
                Our Values →
              </button>
            </div>
          </div>

          {/* 4 Value Points Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: TrendingUp, title: 'Engineering-Led Execution', desc: 'Technical expertise in every detail, from soil strata testing to finishing tolerances.' },
              { icon: FileText, title: 'Transparent Project Costing', desc: 'Clear, comprehensive estimates with zero hidden costs or ambiguous line items.' },
              { icon: Users, title: 'Experienced Site Supervision', desc: 'Dedicated qualified civil engineers stationed full-time at every project site.' },
              { icon: Clock, title: 'Timely Project Delivery', desc: 'Strict milestone tracking and penalty clauses ensuring on-schedule handover.' },
            ].map((v, idx) => {
              const Icon = v.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-3xl border border-[#131D23]/10 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#EDE3D3] flex items-center justify-center text-[#9A6048] mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif-heading text-lg font-bold text-[#131D23] mb-2">{v.title}</h3>
                    <p className="text-xs text-[#6F6256] leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* ──────────────────────────────────────────────────────────
          5. OUR APPROACH / PRINCIPLES (DARK NAVY SECTION)
      ────────────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#131D23] text-white border-b border-[#EDE3D3]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Intro */}
            <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[2px] bg-[#B78A55]" />
                <span className="text-xs font-bold tracking-[0.24em] text-[#B78A55] uppercase">
                  Our Approach
                </span>
              </div>

              <h2 className="font-serif-heading text-4xl sm:text-5xl font-bold text-white leading-tight">
                Built on <br />
                <span className="text-[#B78A55]">Strong Principles</span>
              </h2>

              <p className="text-[#D4C9BC] leading-relaxed text-sm sm:text-base">
                Our core values guide every project, ensuring exceptional results, uncompromised structural stability, and long-term client relationships.
              </p>

              <div className="pt-2">
                <button
                  onClick={onOpenQuote}
                  className="bg-[#9A6048] hover:bg-[#86513B] text-white font-bold px-8 py-4 rounded-full text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-[#9A6048]/30"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Center Visual */}
            <div className="lg:col-span-4">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/15 h-[420px] group">
                <img
                  src="/images/about_craft.jpg"
                  alt="Civil Engineer at Work"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#131D23]/90 backdrop-blur-md rounded-2xl border border-white/15">
                  <span className="text-xs font-bold text-[#B78A55] uppercase tracking-wider block">
                    Engineering Integrity
                  </span>
                  <span className="text-xs text-[#D4C9BC]">Strict adherence to NBC safety codes</span>
                </div>
              </div>
            </div>

            {/* Right Numbered Principles Progression */}
            <div className="lg:col-span-4 space-y-4">
              {principles.map((p, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-[#1A262C]/70 border border-white/10 hover:border-[#B78A55]/50 hover:bg-[#1A262C] transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-full bg-[#9A6048]/20 border border-[#B78A55]/40 flex items-center justify-center text-[#B78A55] font-bold text-xs shrink-0 mt-0.5">
                    {p.num}
                  </div>
                  <div>
                    <h3 className="font-serif-heading text-base font-bold text-white">{p.title}</h3>
                    <p className="text-xs text-[#D4C9BC]/80 leading-relaxed mt-0.5">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>


      {/* ──────────────────────────────────────────────────────────
          6. SOUTH INDIA REGIONAL PRESENCE (WARM CREAM SECTION)
      ────────────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#EDE3D3] text-[#131D23] border-b border-[#131D23]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
            {/* Left Stylized Map Visualization */}
            <div className="lg:col-span-5 relative">
              <div className="bg-[#131D23] p-8 rounded-3xl shadow-2xl border border-[#131D23]/20 text-white relative overflow-hidden">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#B78A55]" />
                    <span className="text-xs font-bold uppercase tracking-widest text-[#B78A55]">
                      South India Coverage
                    </span>
                  </div>
                  <span className="px-3 py-1 bg-[#9A6048]/30 border border-[#9A6048]/40 rounded-full text-[10px] font-bold text-white uppercase">
                    6 Major Hubs
                  </span>
                </div>

                {/* Map Graphic with Interactive Pins — All 6 Cities Listed */}
                <div className="relative rounded-2xl overflow-hidden bg-[#1A262C] border border-white/10 p-4 flex flex-col justify-between">
                  <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#EDE3D3_1px,transparent_1px)] [background-size:16px_16px]" />
                  
                  {/* City Markers Layout — All 6 Individual Hubs */}
                  <div className="relative z-10 space-y-2">
                    <div className="flex items-center justify-between p-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#B78A55]/40 transition-colors">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                        <span className="text-xs font-bold text-white">Bangalore (Corporate HQ)</span>
                      </div>
                      <span className="text-[10px] text-[#B78A55] font-semibold">Active Sites</span>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#B78A55]/40 transition-colors">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#B78A55] shrink-0" />
                        <span className="text-xs font-bold text-white">Chennai (Tamil Nadu Hub)</span>
                      </div>
                      <span className="text-[10px] text-[#B78A55] font-semibold">Turnkey Projects</span>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#B78A55]/40 transition-colors">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#B78A55] shrink-0" />
                        <span className="text-xs font-bold text-white">Hyderabad (Telangana)</span>
                      </div>
                      <span className="text-[10px] text-[#B78A55] font-semibold">Commercial</span>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#B78A55]/40 transition-colors">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#B78A55] shrink-0" />
                        <span className="text-xs font-bold text-white">Kochi (Kerala Region)</span>
                      </div>
                      <span className="text-[10px] text-[#B78A55] font-semibold">Coastal Projects</span>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#B78A55]/40 transition-colors">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#B78A55] shrink-0" />
                        <span className="text-xs font-bold text-white">Coimbatore (Tamil Nadu)</span>
                      </div>
                      <span className="text-[10px] text-[#B78A55] font-semibold">Industrial</span>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#B78A55]/40 transition-colors">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#B78A55] shrink-0" />
                        <span className="text-xs font-bold text-white">Mysore (Heritage Belt)</span>
                      </div>
                      <span className="text-[10px] text-[#B78A55] font-semibold">Residential</span>
                    </div>
                  </div>

                  <div className="relative z-10 pt-3 mt-2 border-t border-white/10 text-[11px] text-[#D4C9BC]/80 flex items-center justify-between">
                    <span>Full regional logistics support</span>
                    <span className="text-[#B78A55] font-bold">100% On-Site Engineers</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Presence Description */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[2px] bg-[#9A6048]" />
                <span className="text-xs font-bold tracking-[0.24em] text-[#9A6048] uppercase">
                  Our Presence
                </span>
              </div>

              <h2 className="font-serif-heading text-4xl sm:text-5xl font-bold text-[#131D23] leading-tight">
                Serving Key Cities <br />
                <span className="text-[#9A6048]">Across South India</span>
              </h2>

              <p className="text-[#45382F] leading-relaxed text-base sm:text-lg">
                We proudly manage residential, commercial, and industrial projects across major cities including Chennai, Bangalore, Hyderabad, Kochi, Coimbatore, and Mysore.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {cities.map((c, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-white border border-[#131D23]/15 text-[#131D23] rounded-full text-xs font-bold shadow-sm"
                  >
                    📍 {c.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* City Image Cards Grid (6 Cities) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {cities.map((city, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl overflow-hidden border border-[#131D23]/10 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={city.image}
                    alt={city.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131D23]/80 via-transparent to-transparent" />
                  <span className="absolute bottom-2 left-2 text-[10px] font-bold text-[#B78A55] uppercase tracking-wider">
                    {city.label}
                  </span>
                </div>
                <div className="p-3 text-center">
                  <h3 className="font-serif-heading text-sm font-bold text-[#131D23]">{city.name}</h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ──────────────────────────────────────────────────────────
          7. FINAL CTA (MATCHING REFERENCE IMAGE)
      ────────────────────────────────────────────────────────── */}
      <section className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Cinematic Sunset Construction Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/resources_video_preview.jpg"
            alt="South India Civil Contractors Turnkey Project"
            className="w-full h-full object-cover object-center brightness-90 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/95 via-[#0F172A]/90 to-[#0F172A]/70" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 bg-[#131D23]/85 backdrop-blur-xl border border-[#B78A55]/30 rounded-3xl p-8 sm:p-14 shadow-2xl">
            
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#B78A55] uppercase tracking-widest">
                <Building2 className="w-4 h-4" />
                <span>Let's Build Together</span>
              </div>

              <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold text-white leading-tight">
                Partner with South India's <br />
                <span className="text-[#B78A55]">Trusted Civil Contractors</span>
              </h2>

              <p className="text-[#D4C9BC] text-sm sm:text-base leading-relaxed">
                Speak with our senior structural engineers today for a complimentary project consultation and detailed engineering BOQ estimate.
              </p>
            </div>

            <div className="shrink-0">
              <button
                onClick={onOpenQuote}
                className="bg-[#9A6048] hover:bg-[#86513B] text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-9 py-4 rounded-full shadow-2xl hover:shadow-[#9A6048]/40 transition-all flex items-center gap-2.5 active:scale-95"
              >
                <span>Request Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
};

export default AboutPage;
