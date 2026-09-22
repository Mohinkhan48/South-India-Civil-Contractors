import React, { useState, useEffect } from 'react';
import { timelineData } from '../data/timelineData';
import {
  Calendar,
  ChevronDown,
  ChevronUp,
  Home,
  Building2,
  GraduationCap,
  School,
  Landmark,
  MapPin,
  Maximize2,
  ArrowLeft,
} from 'lucide-react';

interface ProjectsPageProps {
  onNavigateHome: () => void;
  onNavigateToProjectDetail?: (id: string) => void;
  onOpenQuote: () => void;
  initialCity?: string;
}

type CategoryFilter =
  | 'All'
  | 'Residential'
  | 'Commercial'
  | 'Villa'
  | 'PG'
  | 'Mosque'
  | 'School'
  | 'Guest House'
  | 'Educational'
  | 'College'
  | 'Bungalow';

const categoryOptions: CategoryFilter[] = [
  'All',
  'Residential',
  'Commercial',
  'Villa',
  'PG',
  'Mosque',
  'School',
  'Guest House',
  'Educational',
  'College',
  'Bungalow',
];

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onNavigateHome,
  onOpenQuote,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');
  // 1998 is expanded by default (matching Image 1), others collapsed initially or expandable
  const [expandedYears, setExpandedYears] = useState<Record<number, boolean>>({
    1998: true,
  });

  useEffect(() => {
    document.title = 'Work Timeline | South India Civil Contractors';
  }, []);

  const toggleYear = (year: number) => {
    setExpandedYears((prev) => ({
      ...prev,
      [year]: !prev[year],
    }));
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Commercial':
      case 'Guest House':
        return <Building2 className="w-5 h-5 text-[#4A2328]" />;
      case 'College':
      case 'Educational':
        return <GraduationCap className="w-5 h-5 text-[#4A2328]" />;
      case 'School':
        return <School className="w-5 h-5 text-[#4A2328]" />;
      case 'Mosque':
        return <Landmark className="w-5 h-5 text-[#4A2328]" />;
      case 'Residential':
      case 'Villa':
      case 'Bungalow':
      case 'PG':
      default:
        return <Home className="w-5 h-5 text-[#4A2328]" />;
    }
  };

  return (
    <main className="min-h-screen bg-[#FAF5EE] text-gray-900 font-sans">
      
      {/* ──────────────────────────────────────────────────────────
          1. HERO HEADER BANNER (Work Timeline Title)
      ────────────────────────────────────────────────────────── */}
      <header className="pt-28 pb-16 sm:pt-36 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-[#1C3549] text-white">
        <div className="max-w-7xl mx-auto space-y-4">
          
          {/* Back Home Button */}
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-white/80 hover:text-white transition-colors mb-2 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Work Timeline
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-white/80 font-normal max-w-2xl">
            27+ years of construction excellence - Our journey from 1998 to present
          </p>
        </div>
      </header>

      {/* ──────────────────────────────────────────────────────────
          2. FILTER CATEGORIES STRIP
      ────────────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-[#E8DFC8]/60 sticky top-16 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 sm:gap-2.5 min-w-max">
            {categoryOptions.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#4A2328] text-white shadow-sm scale-102'
                      : 'bg-[#F4ECE1] text-[#1C3549] hover:bg-[#EBE2D4] hover:text-gray-900'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          3. TIMELINE YEAR ACCORDIONS LIST
      ────────────────────────────────────────────────────────── */}
      <section className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4 sm:space-y-5">
          {timelineData.map((yearItem) => {
            // Filter projects based on selected category
            const filteredProjects =
              selectedCategory === 'All'
                ? yearItem.projects
                : yearItem.projects.filter((p) => p.category === selectedCategory);

            // If a filter is active and this year has 0 projects, hide the year accordion
            if (selectedCategory !== 'All' && filteredProjects.length === 0) {
              return null;
            }

            const isExpanded = !!expandedYears[yearItem.year];

            return (
              <div
                key={yearItem.year}
                className="bg-white rounded-2xl border border-[#E8DFC8]/70 shadow-xs overflow-hidden transition-all duration-300"
              >
                {/* Year Accordion Header */}
                <button
                  onClick={() => toggleYear(yearItem.year)}
                  className="w-full p-5 sm:p-6 flex items-center justify-between text-left cursor-pointer hover:bg-orange-50/20 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    {/* Calendar Icon Circle in Brown */}
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#4A2328] text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                      <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-extrabold text-[#163048] tracking-tight">
                        {yearItem.year}
                      </h2>
                      <p className="text-xs sm:text-sm font-medium text-gray-500 mt-0.5">
                        {filteredProjects.length}{' '}
                        {filteredProjects.length === 1 ? 'Project' : 'Projects'}
                      </p>
                    </div>
                  </div>

                  <div className="w-9 h-9 rounded-full bg-gray-100 text-[#163048] flex items-center justify-center flex-shrink-0">
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-[#163048]" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#163048]" />
                    )}
                  </div>
                </button>

                {/* Expanded Projects List */}
                {isExpanded && (
                  <div className="p-4 sm:p-6 pt-1 border-t border-gray-100 bg-[#FAF6EF]/40 space-y-3">
                    {filteredProjects.map((proj) => (
                      <div
                        key={proj.id}
                        className="bg-[#FAF6EF] rounded-xl p-4 sm:p-5 border border-[#E8DEC4]/70 shadow-2xs hover:border-[#4A2328]/30 transition-all"
                      >
                        {/* Title & Badge Row */}
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                          <div className="flex items-center gap-3">
                            <div className="p-1.5 rounded-lg bg-white shadow-2xs border border-[#E8DEC4]/60">
                              {getCategoryIcon(proj.category)}
                            </div>
                            <h3 className="text-base sm:text-lg font-bold text-[#163048] tracking-tight">
                              {proj.title}
                            </h3>
                          </div>

                          <span className="px-3 py-1 rounded-md bg-[#F4ECE1] text-[#4A2328] border border-[#E8DEC4] text-xs font-bold tracking-wide">
                            {proj.category}
                          </span>
                        </div>

                        {/* Details Row */}
                        <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-600 pt-2 border-t border-[#E8DEC4]/40">
                          <div className="flex items-center gap-1.5 font-medium text-gray-700">
                            <Maximize2 className="w-4 h-4 text-[#4A2328] flex-shrink-0" />
                            <span>{proj.area}</span>
                          </div>

                          <div className="flex items-center gap-1.5 text-gray-600">
                            <MapPin className="w-4 h-4 text-[#4A2328] flex-shrink-0" />
                            <span>{proj.location}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#1C3549] text-white text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Ready to Build Your Project With Us?
          </h2>
          <p className="text-sm sm:text-base text-white/80">
            Over 27+ years of structural excellence across South India. Get a free consultation for your project today.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenQuote}
              className="bg-[#4A2328] hover:bg-[#3D1D21] text-white font-bold text-sm sm:text-base py-3.5 px-8 rounded-xl shadow-md transition-all cursor-pointer inline-flex items-center gap-2 active:scale-95"
            >
              Get Free Consultation & Quote
            </button>
          </div>
        </div>
      </section>

    </main>
  );
};
