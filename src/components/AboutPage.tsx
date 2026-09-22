import React, { useEffect } from 'react';
import { siteConfig } from '../config/site';
import {
  Shield, Users, Target, Heart, Award, Briefcase, TrendingUp,
  Calendar, FileText, DollarSign, CheckCircle2, Clock
} from 'lucide-react';

interface AboutPageProps {
  onNavigateHome: () => void;
  onOpenQuote: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigateHome: _onNavigateHome, onOpenQuote: _onOpenQuote }) => {
  const canonicalUrl = `${siteConfig.siteUrl}/about`;

  useEffect(() => {
    document.title = 'About SICC | South India Civil Contractors';
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      'content',
      'Learn about South India Civil Contractors (SICC) — Building spaces for life since 1952. Your trusted partner in construction excellence across South India.'
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

  return (
    <main
      className="min-h-screen bg-white text-[#131D23] selection:bg-[#4A2328] selection:text-white"
      style={{
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      {/* ──────────────────────────────────────────────────────────
          1. HERO BANNER
      ────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 sm:pt-36 pb-16 sm:pb-20 bg-[#163048] overflow-hidden text-white border-b border-[#254664]">
        {/* Background Image Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity"
          style={{ backgroundImage: `url('/images/resources_hero.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#163048]/90 via-[#163048]/75 to-[#163048]/90" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-3">
            About SICC
          </h1>
          <p className="text-base sm:text-lg text-[#D4C9BC] max-w-3xl leading-relaxed font-medium">
            Building spaces for life since 1952 - Your trusted partner in construction excellence
          </p>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          2. OUR STORY
      ────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white text-[#131D23]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column Text */}
            <div className="lg:col-span-6 space-y-5">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#163048] tracking-tight">
                Our Story
              </h2>
              <p className="text-sm sm:text-base text-[#556987] leading-relaxed">
                Founded in 1952, South India Civil Contractors (SICC) began with a simple vision: to deliver construction projects that combine quality, innovation, and reliability. Over the past 70+ years, we've grown from a small team to one of the most trusted names in civil construction across South India.
              </p>
              <p className="text-sm sm:text-base text-[#556987] leading-relaxed">
                Our journey has been marked by continuous growth, learning, and adaptation to new technologies and methodologies. Today, we stand proud with a workforce of over 435 professionals, state-of-the-art equipment, and a portfolio of successful projects spanning residential, commercial, and institutional sectors.
              </p>
              <p className="text-sm sm:text-base text-[#556987] leading-relaxed">
                What sets us apart is not just our technical expertise, but our commitment to understanding and exceeding our clients' expectations. Every project we undertake is treated as a partnership, where your vision becomes our mission.
              </p>
            </div>

            {/* Right Column 2 Images */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-5 sm:gap-6 items-start">
              <div className="rounded-[20px] overflow-hidden shadow-lg aspect-[3/4.2] bg-gray-100 transition-transform duration-300 hover:scale-[1.02]">
                <img
                  src="/images/our story 1.png"
                  alt="SICC Our Story 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-[20px] overflow-hidden shadow-lg aspect-[3/4.2] bg-gray-100 mt-6 sm:mt-10 transition-transform duration-300 hover:scale-[1.02]">
                <img
                  src="/images/our story 2.png"
                  alt="SICC Our Story 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          3. WHY CHOOSE SICC
      ────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#F3F4F6] text-[#131D23]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#163048] tracking-tight mb-3">
              Why Choose SICC
            </h2>
            <p className="text-sm sm:text-base text-[#556987] font-medium">
              We bring together experience, expertise, and dedication to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 text-center shadow-xs border border-[#E5E7EB] hover:shadow-lg transition-all duration-300 flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#4A2328]/10 text-[#4A2328] flex items-center justify-center mb-5">
                <Shield className="w-7 h-7" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#163048] mb-2">Quality First</h3>
              <p className="text-xs sm:text-sm text-[#556987] leading-relaxed">
                We never compromise on quality, using only the best materials and techniques
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 text-center shadow-xs border border-[#E5E7EB] hover:shadow-lg transition-all duration-300 flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#4A2328]/10 text-[#4A2328] flex items-center justify-center mb-5">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#163048] mb-2">Expert Team</h3>
              <p className="text-xs sm:text-sm text-[#556987] leading-relaxed">
                Our certified professionals bring decades of combined experience
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 text-center shadow-xs border border-[#E5E7EB] hover:shadow-lg transition-all duration-300 flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#4A2328]/10 text-[#4A2328] flex items-center justify-center mb-5">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#163048] mb-2">Timely Delivery</h3>
              <p className="text-xs sm:text-sm text-[#556987] leading-relaxed">
                We respect deadlines and deliver projects on time, every time
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 text-center shadow-xs border border-[#E5E7EB] hover:shadow-lg transition-all duration-300 flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#4A2328]/10 text-[#4A2328] flex items-center justify-center mb-5">
                <Heart className="w-7 h-7" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#163048] mb-2">Client Satisfaction</h3>
              <p className="text-xs sm:text-sm text-[#556987] leading-relaxed">
                Your satisfaction is our priority, and we go above and beyond
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          4. OUR JOURNEY
      ────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white text-[#131D23]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#163048] tracking-tight mb-3">
              Our Journey
            </h2>
            <p className="text-sm sm:text-base text-[#556987] font-medium">
              Key milestones that shaped our path to excellence
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[2px] bg-[#E2DDD2]" />

            <div className="space-y-10 sm:space-y-14">
              <div className="relative flex items-center justify-between flex-row-reverse sm:flex-row">
                <div className="w-full sm:w-[45%] bg-white p-6 sm:p-7 rounded-2xl border border-[#EBE7DF] shadow-sm hover:shadow-md transition-shadow sm:text-right text-left">
                  <div className="text-lg sm:text-xl font-extrabold text-[#4A2328] mb-1.5">1952</div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#163048] mb-1.5">Company Founded</h3>
                  <p className="text-sm sm:text-base text-[#556987] leading-relaxed">Started with a vision to transform construction</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#4A2328] border-4 border-white shadow-xs z-10" />
                <div className="hidden sm:block w-[45%]" />
              </div>

              <div className="relative flex items-center justify-between">
                <div className="hidden sm:block w-[45%]" />
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#4A2328] border-4 border-white shadow-xs z-10" />
                <div className="w-full sm:w-[45%] bg-white p-6 sm:p-7 rounded-2xl border border-[#EBE7DF] shadow-sm hover:shadow-md transition-shadow text-left">
                  <div className="text-lg sm:text-xl font-extrabold text-[#4A2328] mb-1.5">2005</div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#163048] mb-1.5">100+ Projects</h3>
                  <p className="text-sm sm:text-base text-[#556987] leading-relaxed">Reached significant milestone in project delivery</p>
                </div>
              </div>

              <div className="relative flex items-center justify-between flex-row-reverse sm:flex-row">
                <div className="w-full sm:w-[45%] bg-white p-6 sm:p-7 rounded-2xl border border-[#EBE7DF] shadow-sm hover:shadow-md transition-shadow sm:text-right text-left">
                  <div className="text-lg sm:text-xl font-extrabold text-[#4A2328] mb-1.5">2010</div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#163048] mb-1.5">Regional Expansion</h3>
                  <p className="text-sm sm:text-base text-[#556987] leading-relaxed">Extended services across South India</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#4A2328] border-4 border-white shadow-xs z-10" />
                <div className="hidden sm:block w-[45%]" />
              </div>

              <div className="relative flex items-center justify-between">
                <div className="hidden sm:block w-[45%]" />
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#4A2328] border-4 border-white shadow-xs z-10" />
                <div className="w-full sm:w-[45%] bg-white p-6 sm:p-7 rounded-2xl border border-[#EBE7DF] shadow-sm hover:shadow-md transition-shadow text-left">
                  <div className="text-lg sm:text-xl font-extrabold text-[#4A2328] mb-1.5">2015</div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#163048] mb-1.5">Industry Recognition</h3>
                  <p className="text-sm sm:text-base text-[#556987] leading-relaxed">Received multiple awards for excellence</p>
                </div>
              </div>

              <div className="relative flex items-center justify-between flex-row-reverse sm:flex-row">
                <div className="w-full sm:w-[45%] bg-white p-6 sm:p-7 rounded-2xl border border-[#EBE7DF] shadow-sm hover:shadow-md transition-shadow sm:text-right text-left">
                  <div className="text-lg sm:text-xl font-extrabold text-[#4A2328] mb-1.5">2020</div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#163048] mb-1.5">117 Projects</h3>
                  <p className="text-sm sm:text-base text-[#556987] leading-relaxed">Continued growth despite challenges</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#4A2328] border-4 border-white shadow-xs z-10" />
                <div className="hidden sm:block w-[45%]" />
              </div>

              <div className="relative flex items-center justify-between">
                <div className="hidden sm:block w-[45%]" />
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#4A2328] border-4 border-white shadow-xs z-10" />
                <div className="w-full sm:w-[45%] bg-white p-6 sm:p-7 rounded-2xl border border-[#EBE7DF] shadow-sm hover:shadow-md transition-shadow text-left">
                  <div className="text-lg sm:text-xl font-extrabold text-[#4A2328] mb-1.5">2025</div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#163048] mb-1.5">Innovation Leader</h3>
                  <p className="text-sm sm:text-base text-[#556987] leading-relaxed">Leading with modern construction techniques</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          5. OUR PROFESSIONAL TEAM (PLACED RIGHT AFTER OUR JOURNEY)
      ────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#163048] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3">
            Our Professional Team
          </h2>
          <p className="text-sm sm:text-base text-[#D4C9BC] max-w-2xl mx-auto mb-12 font-medium">
            Experienced professionals dedicated to bringing your vision to life
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#4A2328] flex items-center justify-center text-white mb-4 shadow-md">
                <Award className="w-7 h-7" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">7</div>
              <div className="text-xs sm:text-sm text-[#D4C9BC] font-medium">Certified Architects</div>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#4A2328] flex items-center justify-center text-white mb-4 shadow-md">
                <Briefcase className="w-7 h-7" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">5</div>
              <div className="text-xs sm:text-sm text-[#D4C9BC] font-medium">Structural Engineers</div>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#4A2328] flex items-center justify-center text-white mb-4 shadow-md">
                <Users className="w-7 h-7" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">48</div>
              <div className="text-xs sm:text-sm text-[#D4C9BC] font-medium">Technical Team</div>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#4A2328] flex items-center justify-center text-white mb-4 shadow-md">
                <TrendingUp className="w-7 h-7" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">435+</div>
              <div className="text-xs sm:text-sm text-[#D4C9BC] font-medium">Total Workforce</div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          6. OUR CORE RESPONSIBILITIES (AFTER OUR PROFESSIONAL TEAM)
      ────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white text-[#131D23]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#163048] tracking-tight mb-3">
              Our Core Responsibilities
            </h2>
            <p className="text-sm sm:text-base text-[#556987] font-medium">
              We're committed to delivering exceptional results through our comprehensive approach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-7 border border-[#E5E7EB] shadow-xs hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#4A2328]/10 text-[#4A2328] flex items-center justify-center mb-5">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#163048] mb-2">Project Planning & Management</h3>
              <p className="text-xs sm:text-sm text-[#556987] leading-relaxed">
                Strategic planning and seamless management from start to finish
              </p>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-[#E5E7EB] shadow-xs hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#4A2328]/10 text-[#4A2328] flex items-center justify-center mb-5">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#163048] mb-2">Design Interpretation & Implementation</h3>
              <p className="text-xs sm:text-sm text-[#556987] leading-relaxed">
                Translating architectural visions into functional, beautiful structures
              </p>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-[#E5E7EB] shadow-xs hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#4A2328]/10 text-[#4A2328] flex items-center justify-center mb-5">
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#163048] mb-2">Budgeting & Cost Management</h3>
              <p className="text-xs sm:text-sm text-[#556987] leading-relaxed">
                Transparent budgeting with strict adherence to financial parameters
              </p>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-[#E5E7EB] shadow-xs hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#4A2328]/10 text-[#4A2328] flex items-center justify-center mb-5">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#163048] mb-2">Quality Control & Assurance</h3>
              <p className="text-xs sm:text-sm text-[#556987] leading-relaxed">
                Rigorous quality checks at every stage of construction
              </p>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-[#E5E7EB] shadow-xs hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#4A2328]/10 text-[#4A2328] flex items-center justify-center mb-5">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#163048] mb-2">Safety & Risk Management</h3>
              <p className="text-xs sm:text-sm text-[#556987] leading-relaxed">
                Comprehensive safety protocols and proactive risk mitigation
              </p>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-[#E5E7EB] shadow-xs hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#4A2328]/10 text-[#4A2328] flex items-center justify-center mb-5">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#163048] mb-2">Timely Execution & Delivery</h3>
              <p className="text-xs sm:text-sm text-[#556987] leading-relaxed">
                On-time project completion without compromising on quality
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          7. SERVING SOUTH INDIA WITH EXCELLENCE
      ────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#F5EFE6] text-[#131D23]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#163048] tracking-tight leading-tight">
                Serving South India<br />with Excellence
              </h2>
              <p className="text-sm sm:text-base text-[#556987] leading-relaxed">
                As South India civil contractors, we focus on diverse building types across South India. Our deep understanding of local regulations, climate considerations, and regional requirements ensures projects that are perfectly suited to the South India landscape.
              </p>

              <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-2">
                <div className="bg-white rounded-2xl p-4 sm:p-5 text-center shadow-xs border border-[#E2DDD2]">
                  <div className="text-xl sm:text-2xl font-extrabold text-[#163048] mb-1">70+</div>
                  <div className="text-[11px] sm:text-xs text-[#556987] font-medium leading-tight">Years in South India</div>
                </div>
                <div className="bg-white rounded-2xl p-4 sm:p-5 text-center shadow-xs border border-[#E2DDD2]">
                  <div className="text-xs sm:text-sm font-bold text-[#163048] mb-1">Major Cities</div>
                  <div className="text-[10px] sm:text-[11px] text-[#556987] leading-tight">Bangalore, Mysore, Mangalore, Hubli</div>
                </div>
                <div className="bg-white rounded-2xl p-4 sm:p-5 text-center shadow-xs border border-[#E2DDD2]">
                  <div className="text-xs sm:text-sm font-bold text-[#163048] mb-1">Local Expertise</div>
                  <div className="text-[10px] sm:text-[11px] text-[#556987] leading-tight">Global Standards</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <img
                src="/images/map.png"
                alt="South India Presence Map - Karnataka, Telangana, Andhra Pradesh, Tamil Nadu, Kerala, Puducherry, Lakshadweep"
                className="w-full h-auto max-w-lg object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          8. CERTIFICATIONS & CREDENTIALS
      ────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#F5EFE6] text-[#131D23] border-t border-[#E8E2D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#163048] tracking-tight mb-3">
              Certifications & Credentials
            </h2>
            <p className="text-sm sm:text-base text-[#556987] font-medium">
              Our commitment to excellence is validated by industry-recognized certifications
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-5 border border-[#E2DDD2] shadow-xs flex items-center gap-3.5 hover:shadow-md transition-shadow">
              <CheckCircle2 className="w-6 h-6 text-[#163048] flex-shrink-0" />
              <span className="text-xs sm:text-sm font-bold text-[#163048]">ISO 9001:2015 Certified</span>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-[#E2DDD2] shadow-xs flex items-center gap-3.5 hover:shadow-md transition-shadow">
              <CheckCircle2 className="w-6 h-6 text-[#163048] flex-shrink-0" />
              <div>
                <span className="text-xs sm:text-sm font-bold text-[#163048] block">Government Approved</span>
                <span className="text-[11px] text-[#556987]">Contractor</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-[#E2DDD2] shadow-xs flex items-center gap-3.5 hover:shadow-md transition-shadow">
              <CheckCircle2 className="w-6 h-6 text-[#163048] flex-shrink-0" />
              <span className="text-xs sm:text-sm font-bold text-[#163048]">Safety Compliance Certified</span>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-[#E2DDD2] shadow-xs flex items-center gap-3.5 hover:shadow-md transition-shadow">
              <CheckCircle2 className="w-6 h-6 text-[#163048] flex-shrink-0" />
              <div>
                <span className="text-xs sm:text-sm font-bold text-[#163048] block">Green Building Council</span>
                <span className="text-[11px] text-[#556987]">Member</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-[#E2DDD2] shadow-xs flex items-center gap-3.5 hover:shadow-md transition-shadow">
              <CheckCircle2 className="w-6 h-6 text-[#163048] flex-shrink-0" />
              <div>
                <span className="text-xs sm:text-sm font-bold text-[#163048] block">National Building Code</span>
                <span className="text-[11px] text-[#556987]">Compliant</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-[#E2DDD2] shadow-xs flex items-center gap-3.5 hover:shadow-md transition-shadow">
              <CheckCircle2 className="w-6 h-6 text-[#163048] flex-shrink-0" />
              <span className="text-xs sm:text-sm font-bold text-[#163048]">Quality Management System</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
