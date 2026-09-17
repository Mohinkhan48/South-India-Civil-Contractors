import React, { useState, useEffect, useRef, useMemo } from 'react';
import { MapPin, X, ArrowUpRight, Search, Building2, ShieldCheck, Sparkles } from 'lucide-react';

interface KarnatakaPresenceProps {
  onSelectCity?: (city: string) => void;
  onOpenQuote?: () => void;
}

interface DistrictInfo {
  name: string;
  region: 'Bengaluru & Central' | 'Coastal' | 'North Karnataka' | 'South Karnataka';
  projectsType: string;
  status: string;
  leadTime: string;
  highlight?: boolean;
}

const KARNATAKA_DISTRICTS: DistrictInfo[] = [
  { name: 'Bengaluru Urban', region: 'Bengaluru & Central', projectsType: 'Villas, Commercial & Luxury Homes', status: 'Corporate HQ & Active Sites', leadTime: 'Immediate Dispatch', highlight: true },
  { name: 'Bengaluru Rural', region: 'Bengaluru & Central', projectsType: 'Gated Communities & Industrial', status: 'Active Construction Sites', leadTime: 'Immediate Dispatch', highlight: true },
  { name: 'Mysuru', region: 'South Karnataka', projectsType: 'Heritage & Modern Residential', status: 'Regional Project Office', leadTime: '24-48 Hours', highlight: true },
  { name: 'Mangaluru', region: 'Coastal', projectsType: 'Coastal Villas & Turnkey Commercial', status: 'Coastal Operations Hub', leadTime: '24-48 Hours', highlight: true },
  { name: 'Hubballi - Dharwad', region: 'North Karnataka', projectsType: 'Commercial Complexes & Residences', status: 'North Karnataka Hub', leadTime: '24-48 Hours', highlight: true },
  { name: 'Belagavi', region: 'North Karnataka', projectsType: 'Industrial & Turnkey Homes', status: 'Active Project Sites', leadTime: '48 Hours' },
  { name: 'Kalaburagi', region: 'North Karnataka', projectsType: 'Institutional & Civil Contracts', status: 'Active Engineering Teams', leadTime: '48 Hours' },
  { name: 'Davanagere', region: 'Bengaluru & Central', projectsType: 'Commercial & Multi-Storey Homes', status: 'Active Construction Sites', leadTime: '24-48 Hours' },
  { name: 'Ballari', region: 'North Karnataka', projectsType: 'Heavy Civil & Commercial', status: 'Civil Contracts Active', leadTime: '48 Hours' },
  { name: 'Shivamogga', region: 'Bengaluru & Central', projectsType: 'Custom Villas & Estate Homes', status: 'Turnkey Operations', leadTime: '24-48 Hours' },
  { name: 'Tumakuru', region: 'Bengaluru & Central', projectsType: 'Residential Layouts & Commercial', status: 'Active Sites', leadTime: '24 Hours' },
  { name: 'Udupi', region: 'Coastal', projectsType: 'Architectural Villas & Coastal Homes', status: 'Active Turnkey Projects', leadTime: '24-48 Hours' },
  { name: 'Hassan', region: 'Bengaluru & Central', projectsType: 'Farmhouses & Modern Residences', status: 'Project Support Office', leadTime: '48 Hours' },
  { name: 'Chikkamagaluru', region: 'Bengaluru & Central', projectsType: 'Estate Bungalows & Luxury Resorts', status: 'Active Turnkey Projects', leadTime: '48 Hours' },
  { name: 'Mandya', region: 'South Karnataka', projectsType: 'Residential & Turnkey Civil', status: 'Active Operations', leadTime: '24 Hours' },
  { name: 'Vijayapura', region: 'North Karnataka', projectsType: 'Commercial & Institutional', status: 'Active Engineering Teams', leadTime: '48 Hours' },
  { name: 'Bidar', region: 'North Karnataka', projectsType: 'Residential & Civil Engineering', status: 'Engineering Support', leadTime: '48-72 Hours' },
  { name: 'Bagalkot', region: 'North Karnataka', projectsType: 'Commercial & Structural Works', status: 'Turnkey Support', leadTime: '48 Hours' },
  { name: 'Raichur', region: 'North Karnataka', projectsType: 'Civil & Commercial Infrastructure', status: 'Active Project Sites', leadTime: '48 Hours' },
  { name: 'Koppal', region: 'North Karnataka', projectsType: 'Residential & Turnkey Contracts', status: 'Engineering Support', leadTime: '48 Hours' },
  { name: 'Gadag', region: 'North Karnataka', projectsType: 'Commercial Buildings & Civil', status: 'Active Operations', leadTime: '48 Hours' },
  { name: 'Haveri', region: 'North Karnataka', projectsType: 'Residential Homes & Renovation', status: 'Turnkey Support', leadTime: '48 Hours' },
  { name: 'Uttara Kannada (Karwar)', region: 'Coastal', projectsType: 'Coastal Bungalows & Hospitality', status: 'Active Operations', leadTime: '48 Hours' },
  { name: 'Kodagu (Madikeri)', region: 'South Karnataka', projectsType: 'Estate Villas & Plantation Homes', status: 'Active Luxury Sites', leadTime: '48 Hours' },
  { name: 'Chamarajanagara', region: 'South Karnataka', projectsType: 'Residential & Institutional', status: 'Engineering Support', leadTime: '48 Hours' },
  { name: 'Chitradurga', region: 'Bengaluru & Central', projectsType: 'Commercial & Structural Works', status: 'Active Operations', leadTime: '48 Hours' },
  { name: 'Kolar', region: 'South Karnataka', projectsType: 'Residential Villas & Turnkey Units', status: 'Active Construction Sites', leadTime: '24 Hours' },
  { name: 'Chikkaballapura', region: 'South Karnataka', projectsType: 'Villa Communities & Luxury Homes', status: 'Active Operations', leadTime: '24 Hours' },
  { name: 'Ramanagara', region: 'South Karnataka', projectsType: 'Custom Homes & Industrial Units', status: 'Active Sites', leadTime: '24 Hours' },
  { name: 'Yadgir', region: 'North Karnataka', projectsType: 'Civil Contracts & Commercial', status: 'Engineering Support', leadTime: '48-72 Hours' },
  { name: 'Vijayanagara (Hosapete)', region: 'North Karnataka', projectsType: 'Commercial & Luxury Residences', status: 'Active Operations', leadTime: '48 Hours' },
];

export const KarnatakaPresence: React.FC<KarnatakaPresenceProps> = ({ onSelectCity, onOpenQuote }) => {
  // Counter animation state
  const [isVisible, setIsVisible] = useState(false);
  const [countPercent, setCountPercent] = useState(0);
  const [countProjects, setCountProjects] = useState(0);
  const [countCities, setCountCities] = useState(0);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Locations Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string>('ALL');

  // Intersection Observer for viewport count-up trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Count up animation logic
  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 50;
    const stepTime = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeProgress = 1 - Math.pow(1 - progress, 3); // Easing out cubic

      setCountPercent(Math.min(100, Math.round(easeProgress * 100)));
      setCountProjects(Math.min(200, Math.round(easeProgress * 200)));
      setCountCities(Math.min(30, Math.round(easeProgress * 30)));

      if (step >= steps) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible]);

  // Lock scroll when modal is active
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  // ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  // Filtered districts
  const filteredDistricts = useMemo(() => {
    return KARNATAKA_DISTRICTS.filter((d) => {
      const matchesSearch =
        d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        d.projectsType.toLowerCase().includes(searchQuery.toLowerCase()) ||
        d.status.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesRegion = selectedRegion === 'ALL' || d.region === selectedRegion;
      return matchesSearch && matchesRegion;
    });
  }, [searchQuery, selectedRegion]);

  const handleCitySelect = (cityName: string) => {
    setIsModalOpen(false);
    if (onSelectCity) {
      // Map district name to project filter city if applicable
      const cleanCity = cityName.includes('Bengaluru') ? 'Bangalore' : cityName.includes('Mysuru') ? 'Mysore' : cityName;
      onSelectCity(cleanCity);
    }
  };

  const handleGetQuoteForCity = (_cityName: string) => {
    setIsModalOpen(false);
    if (onOpenQuote) {
      onOpenQuote();
    }
  };

  return (
    <section
      id="projects-by-city"
      ref={sectionRef}
      className="py-20 lg:py-28 bg-[#131D23] text-[#EDE3D3] relative overflow-hidden border-t border-[#B78A55]/20 selection:bg-[#B78A55]/30"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#B78A55]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ── TOP SECTION HEADER ── */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-[#B78A55]"></div>
            <span className="text-xs font-bold tracking-[0.3em] text-[#B78A55] uppercase">
              OUR PRESENCE
            </span>
            <div className="w-8 h-[1px] bg-[#B78A55]"></div>
          </div>

          <h2 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[#EDE3D3] tracking-tight leading-tight mb-4">
            Building Across Karnataka
          </h2>

          <p className="text-sm sm:text-base text-[#D4C9BC]/80 max-w-2xl mx-auto leading-relaxed font-normal">
            Delivering quality construction services to homes, businesses and communities across the state.
          </p>
        </div>

        {/* ── MAIN 2-COLUMN GRID (Map Image 55%, Stats 45%) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ── LEFT COLUMN: KARNATAKA MAP IMAGE DISPLAY ── */}
          <div className="lg:col-span-7 relative flex justify-center items-center w-full">
            <div 
              onClick={() => setIsModalOpen(true)}
              className="relative w-full max-w-[540px] overflow-hidden rounded-2xl border border-[#B78A55]/30 shadow-2xl group cursor-pointer"
              title="Click to view all 30+ Karnataka locations"
            >
              <img
                src="/images/karnataka_map_presence.jpg"
                alt="South India Civil Contractors Karnataka Construction Presence Map"
                className="w-full h-auto object-cover object-center transform group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#131D23]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <span className="inline-flex items-center gap-2 bg-[#B78A55] text-[#131D23] font-bold text-xs uppercase tracking-wider px-4 py-2 rounded shadow-xl">
                  <MapPin className="w-4 h-4" /> View All 30+ Locations
                </span>
              </div>
              <div className="absolute inset-0 ring-1 ring-inset ring-[#B78A55]/20 rounded-2xl pointer-events-none"></div>
            </div>
          </div>

          {/* ── RIGHT COLUMN: EDITORIAL STATISTICS ── */}
          <div className="lg:col-span-5 space-y-10 lg:pl-6">
            
            {/* Stat 1: 100% */}
            <div className="group">
              <div className="font-serif-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-[#B78A55] leading-none mb-3 tracking-tight">
                {countPercent}%
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#EDE3D3] mb-1 tracking-wide">
                Karnataka Focused
              </h3>
              <p className="text-xs sm:text-sm text-[#D4C9BC]/75 leading-relaxed">
                Local expertise. Better understanding.
              </p>
              <div className="mt-8 h-[1px] w-full bg-gradient-to-r from-[#B78A55]/40 via-[#B78A55]/15 to-transparent"></div>
            </div>

            {/* Stat 2: 200+ */}
            <div className="group">
              <div className="font-serif-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-[#B78A55] leading-none mb-3 tracking-tight">
                {countProjects}+
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#EDE3D3] mb-1 tracking-wide">
                Completed Projects
              </h3>
              <p className="text-xs sm:text-sm text-[#D4C9BC]/75 leading-relaxed">
                Homes, villas, apartments & commercial spaces.
              </p>
              <div className="mt-8 h-[1px] w-full bg-gradient-to-r from-[#B78A55]/40 via-[#B78A55]/15 to-transparent"></div>
            </div>

            {/* Stat 3: 30+ */}
            <div className="group">
              <div className="font-serif-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-[#B78A55] leading-none mb-3 tracking-tight">
                {countCities}+
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#EDE3D3] mb-1 tracking-wide">
                Cities Served
              </h3>
              <p className="text-xs sm:text-sm text-[#D4C9BC]/75 leading-relaxed">
                Expanding our footprint every day
              </p>
            </div>

            {/* CLICKABLE INTERACTIVE BUTTON & SUBTITLE */}
            <div className="pt-4 space-y-3">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                aria-label="View all locations list"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-sm border border-[#B78A55] text-[#EDE3D3] font-semibold text-xs sm:text-sm tracking-[0.2em] uppercase bg-[#1C1510]/60 hover:bg-[#B78A55] hover:text-[#131D23] active:scale-95 transition-all duration-300 group shadow-lg cursor-pointer select-none"
              >
                <MapPin className="w-4 h-4 text-[#B78A55] group-hover:text-[#131D23] transition-colors" />
                <span>VIEW ALL LOCATIONS</span>
                <ArrowUpRight className="w-4 h-4 text-[#B78A55] group-hover:text-[#131D23] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <p className="text-xs text-[#D4C9BC]/60 tracking-wider">
                See all 30+ districts and cities we are present in
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* ── ALL KARNATAKA LOCATIONS MODAL / POPUP ── */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0B1013]/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="bg-[#18232B] border border-[#B78A55]/35 rounded-2xl w-full max-w-5xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 sm:p-8 border-b border-[#B78A55]/20 bg-[#131D23] relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#B78A55] animate-ping"></span>
                  <span className="text-[11px] font-bold tracking-[0.25em] text-[#B78A55] uppercase">
                    Karnataka State Coverage
                  </span>
                </div>
                <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#EDE3D3]">
                  All 30+ Districts & Active Service Locations
                </h3>
                <p className="text-xs sm:text-sm text-[#D4C9BC]/80 mt-1">
                  Click on any district to explore project portfolios or request instant civil engineering consultation.
                </p>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 sm:static p-2.5 rounded-full bg-[#1C2830] text-[#EDE3D3]/80 hover:text-[#EDE3D3] hover:bg-[#B78A55] hover:text-[#131D23] transition-all"
                aria-label="Close locations modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Filter & Search Bar */}
            <div className="p-4 sm:p-6 bg-[#152027] border-b border-[#B78A55]/15 flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
              {/* Search Box */}
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-[#B78A55] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search city, district, or project type..."
                  className="w-full bg-[#111A20] text-[#EDE3D3] text-xs sm:text-sm pl-10 pr-4 py-2.5 rounded-lg border border-[#B78A55]/25 focus:border-[#B78A55] focus:outline-none placeholder-[#D4C9BC]/40 transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#D4C9BC]/60 hover:text-[#EDE3D3]"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Region Category Chips */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
                {['ALL', 'Bengaluru & Central', 'Coastal', 'North Karnataka', 'South Karnataka'].map((region) => (
                  <button
                    key={region}
                    type="button"
                    onClick={() => setSelectedRegion(region)}
                    className={`px-3 py-1.5 rounded-md text-xs font-semibold whitespace-nowrap transition-all ${
                      selectedRegion === region
                        ? 'bg-[#B78A55] text-[#131D23] shadow-md'
                        : 'bg-[#1C2830] text-[#D4C9BC] hover:bg-[#22323D] hover:text-[#EDE3D3]'
                    }`}
                  >
                    {region === 'ALL' ? 'All Karnataka' : region}
                  </button>
                ))}
              </div>
            </div>

            {/* District Cards Grid (Scrollable Body) */}
            <div className="p-4 sm:p-6 overflow-y-auto max-h-[50vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredDistricts.length === 0 ? (
                <div className="col-span-full text-center py-12 text-[#D4C9BC]/60">
                  <MapPin className="w-8 h-8 text-[#B78A55]/40 mx-auto mb-2" />
                  <p className="text-sm font-medium">No locations matching "{searchQuery}"</p>
                  <button
                    onClick={() => { setSearchQuery(''); setSelectedRegion('ALL'); }}
                    className="mt-3 text-xs text-[#B78A55] hover:underline"
                  >
                    Reset Search Filters
                  </button>
                </div>
              ) : (
                filteredDistricts.map((district) => (
                  <div
                    key={district.name}
                    className={`p-4 rounded-xl border transition-all duration-300 flex flex-col justify-between group ${
                      district.highlight
                        ? 'bg-[#1D2C36]/90 border-[#B78A55]/40 hover:border-[#B78A55]'
                        : 'bg-[#141F26] border-[#EDE3D3]/10 hover:border-[#B78A55]/40 hover:bg-[#1A262F]'
                    }`}
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-[#B78A55] flex-shrink-0" />
                          <h4 className="font-bold text-base text-[#EDE3D3] group-hover:text-[#B78A55] transition-colors">
                            {district.name}
                          </h4>
                        </div>
                        <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-[#10171C] text-[#B78A55] border border-[#B78A55]/20 flex-shrink-0">
                          {district.region.split(' ')[0]}
                        </span>
                      </div>

                      <p className="text-xs text-[#D4C9BC]/80 mb-2 leading-relaxed">
                        {district.projectsType}
                      </p>

                      <div className="flex items-center gap-1.5 text-[11px] text-[#A3B899] mb-4">
                        <ShieldCheck className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{district.status} • {district.leadTime}</span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-[#EDE3D3]/10 flex items-center justify-between gap-2 mt-auto">
                      <button
                        type="button"
                        onClick={() => handleCitySelect(district.name)}
                        className="text-xs font-semibold text-[#EDE3D3] hover:text-[#B78A55] inline-flex items-center gap-1 transition-colors"
                      >
                        <span>View Projects</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        type="button"
                        onClick={() => handleGetQuoteForCity(district.name)}
                        className="px-2.5 py-1 rounded text-[11px] font-bold bg-[#B78A55]/15 text-[#B78A55] hover:bg-[#B78A55] hover:text-[#131D23] transition-colors"
                      >
                        Enquire Here
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Modal Bottom Footer Actions */}
            <div className="p-4 sm:p-5 border-t border-[#B78A55]/20 bg-[#131D23] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#D4C9BC]/80">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#B78A55]" />
                <span>Showing {filteredDistricts.length} of {KARNATAKA_DISTRICTS.length} covered districts across Karnataka</span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => {
                    setIsModalOpen(false);
                    if (onSelectCity) onSelectCity('ALL');
                  }}
                  className="flex-1 sm:flex-initial px-4 py-2 rounded border border-[#EDE3D3]/20 hover:border-[#B78A55] text-[#EDE3D3] font-semibold text-xs transition-colors"
                >
                  Browse Full Project Gallery
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setIsModalOpen(false);
                    if (onOpenQuote) onOpenQuote();
                  }}
                  className="flex-1 sm:flex-initial px-4 py-2 rounded bg-[#B78A55] hover:bg-[#9A6048] text-[#131D23] font-bold text-xs transition-colors inline-flex items-center justify-center gap-1.5 shadow-lg"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Get Free Consultation</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
