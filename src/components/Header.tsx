import React, { useState, useEffect, useRef } from 'react';
import { siteConfig } from '../config/site';
import { Phone, Menu, X, ArrowUpRight, ChevronDown, Layers } from 'lucide-react';

interface HeaderProps {
  onOpenQuote: () => void;
  activeSection?: string;
  currentPage: 'home' | 'about' | 'services' | 'premium-construction' | 'projects' | 'project-detail' | 'contact' | 'resources' | '404' | string;
  onNavigateHome: () => void;
  onNavigateToAbout?: () => void;
  onNavigateToServices?: () => void;
  onNavigateToPremiumConstruction?: () => void;
  onNavigateToProjects: () => void;
  onNavigateToContact?: () => void;
  onNavigateToResources: (sectionId?: string) => void;
  onNavigateToSection: (section: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenQuote,
  activeSection = 'hero',
  currentPage,
  onNavigateHome,
  onNavigateToAbout,
  onNavigateToServices,
  onNavigateToPremiumConstruction,
  onNavigateToProjects,
  onNavigateToContact,
  onNavigateToResources,
  onNavigateToSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const servicesDropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const resourcesDropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const resourceDropdownItems = [
    { name: 'Technical Specifications', sectionId: 'technical-specifications' },
    { name: 'Premium Materials & Brands', sectionId: 'materials-brands' },
    { name: 'Construction Methodologies', sectionId: 'construction-methodologies' },
    { name: 'Safety Protocols', sectionId: 'safety-protocols' },
    { name: 'Compliance & Industry Standards', sectionId: 'compliance-standards' },
  ];

  const handleMouseEnterServicesDropdown = () => {
    if (servicesDropdownTimeoutRef.current) clearTimeout(servicesDropdownTimeoutRef.current);
    setServicesDropdownOpen(true);
  };

  const handleMouseLeaveServicesDropdown = () => {
    servicesDropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 150);
  };

  const handleMouseEnterResourcesDropdown = () => {
    if (resourcesDropdownTimeoutRef.current) clearTimeout(resourcesDropdownTimeoutRef.current);
    setResourcesDropdownOpen(true);
  };

  const handleMouseLeaveResourcesDropdown = () => {
    resourcesDropdownTimeoutRef.current = setTimeout(() => {
      setResourcesDropdownOpen(false);
    }, 150);
  };

  const isServicesActive =
    currentPage === 'services' ||
    currentPage === 'premium-construction' ||
    (currentPage === 'home' && activeSection === 'services');

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || currentPage !== 'home'
          ? 'bg-[#131D23]/95 backdrop-blur-md py-3.5 border-b border-[#EDE3D3]/10 shadow-editorial-dark'
          : 'bg-gradient-to-b from-[#131D23]/90 via-[#131D23]/40 to-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <button
            onClick={onNavigateHome}
            className="flex items-center gap-3.5 group focus:outline-none text-left"
          >
            {/* Architectural Geometric Mark */}
            <div className="w-10 h-10 rounded-sm bg-[#45382F] border border-[#B78A55]/40 flex items-center justify-center relative overflow-hidden group-hover:border-[#9A6048] transition-colors duration-300 shadow-md">
              <div className="w-5 h-5 border-t-2 border-l-2 border-[#B78A55] absolute top-2 left-2 transition-transform duration-300 group-hover:scale-95"></div>
              <div className="w-3.5 h-3.5 border-b-2 border-r-2 border-[#9A6048] absolute bottom-2 right-2 transition-transform duration-300 group-hover:scale-105"></div>
              <span className="font-serif-heading text-xs font-bold text-[#EDE3D3] tracking-tighter">
                SIBC
              </span>
            </div>

            {/* Brand Typography */}
            <div className="flex flex-col">
              <span className="font-serif-heading text-sm sm:text-base font-bold text-[#EDE3D3] tracking-wider leading-tight group-hover:text-[#B78A55] transition-colors">
                SOUTH INDIA
              </span>
              <span className="text-[10px] font-semibold tracking-[0.22em] text-[#B78A55] uppercase leading-tight">
                CIVIL CONTRACTORS
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {/* Home */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                onNavigateHome();
              }}
              className={`px-3 py-1.5 text-xs xl:text-sm font-medium tracking-wide transition-all duration-200 rounded-sm relative ${
                currentPage === 'home' && activeSection === 'hero'
                  ? 'text-[#EDE3D3] font-semibold'
                  : 'text-[#D4C9BC] hover:text-[#EDE3D3]'
              }`}
            >
              Home
              {currentPage === 'home' && activeSection === 'hero' && (
                <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#9A6048] rounded-full"></span>
              )}
            </a>

            {/* About Us */}
            <a
              href="/about"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigateToAbout) onNavigateToAbout();
                else onNavigateToSection('about');
              }}
              className={`px-3 py-1.5 text-xs xl:text-sm font-medium tracking-wide transition-all duration-200 rounded-sm relative ${
                currentPage === 'about' || (currentPage === 'home' && activeSection === 'about')
                  ? 'text-[#EDE3D3] font-semibold'
                  : 'text-[#D4C9BC] hover:text-[#EDE3D3]'
              }`}
            >
              About Us
              {(currentPage === 'about' || (currentPage === 'home' && activeSection === 'about')) && (
                <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#9A6048] rounded-full"></span>
              )}
            </a>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnterServicesDropdown}
              onMouseLeave={handleMouseLeaveServicesDropdown}
            >
              <button
                onClick={() => {
                  setServicesDropdownOpen(false);
                  if (onNavigateToServices) onNavigateToServices();
                  else onNavigateToSection('services');
                }}
                className={`px-3 py-1.5 text-xs xl:text-sm font-medium tracking-wide transition-all duration-200 rounded-sm flex items-center gap-1 relative ${
                  isServicesActive
                    ? 'text-[#EDE3D3] font-semibold'
                    : 'text-[#D4C9BC] hover:text-[#EDE3D3]'
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  onClick={(e) => {
                    e.stopPropagation();
                    setServicesDropdownOpen((prev) => !prev);
                  }}
                  className={`w-3.5 h-3.5 text-[#B78A55] transition-transform duration-200 cursor-pointer ${servicesDropdownOpen ? 'rotate-180' : ''}`}
                />
                {isServicesActive && (
                  <span className="absolute bottom-0 left-3 right-7 h-[2px] bg-[#9A6048] rounded-full"></span>
                )}
              </button>

              {/* Services Dropdown Menu - Exactly 2 Options */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-[#131D23] border border-[#EDE3D3]/18 rounded-md shadow-editorial-dark py-2 z-50 backdrop-blur-lg"
                  style={{ animation: 'fadeIn 0.15s ease-out' }}
                >
                  {/* Option 1: Premium Construction */}
                  <a
                    href="/premium-construction"
                    onClick={(e) => {
                      e.preventDefault();
                      setServicesDropdownOpen(false);
                      if (onNavigateToPremiumConstruction) onNavigateToPremiumConstruction();
                      else if (onNavigateToServices) onNavigateToServices();
                    }}
                    className="flex items-center gap-3 px-4 py-2.5 hover:bg-[#45382F]/70 transition-colors group border-b border-[#EDE3D3]/5"
                  >
                    <div className="w-6 h-6 rounded-sm bg-[#9A6048]/20 border border-[#9A6048]/30 flex items-center justify-center flex-shrink-0 group-hover:bg-[#9A6048]/30 transition-colors">
                      <Layers className="w-3.5 h-3.5 text-[#B78A55]" />
                    </div>
                    <div>
                      <span className="text-xs xl:text-sm font-semibold text-[#EDE3D3] block tracking-wide">Premium Construction</span>
                      <span className="text-[10px] text-[#D4C9BC]/60 block">Full construction breakdown & specs</span>
                    </div>
                  </a>

                  {/* Option 2: General Services & Solutions */}
                  <a
                    href="/services"
                    onClick={(e) => {
                      e.preventDefault();
                      setServicesDropdownOpen(false);
                      if (onNavigateToServices) onNavigateToServices();
                      else onNavigateToSection('services');
                    }}
                    className="flex items-center gap-3 px-4 py-2.5 hover:bg-[#45382F]/70 transition-colors group"
                  >
                    <div className="w-6 h-6 rounded-sm bg-[#B78A55]/20 border border-[#B78A55]/30 flex items-center justify-center flex-shrink-0 group-hover:bg-[#B78A55]/30 transition-colors">
                      <Layers className="w-3.5 h-3.5 text-[#B78A55]" />
                    </div>
                    <div>
                      <span className="text-xs xl:text-sm font-semibold text-[#EDE3D3] block tracking-wide">General Services & Solutions</span>
                      <span className="text-[10px] text-[#D4C9BC]/60 block">Project types & building solutions</span>
                    </div>
                  </a>
                </div>
              )}
            </div>

            {/* Projects */}
            <a
              href="/projects"
              onClick={(e) => {
                e.preventDefault();
                onNavigateToProjects();
              }}
              className={`px-3 py-1.5 text-xs xl:text-sm font-medium tracking-wide transition-all duration-200 rounded-sm relative ${
                currentPage === 'projects' || currentPage === 'project-detail' || (currentPage === 'home' && activeSection === 'projects')
                  ? 'text-[#EDE3D3] font-semibold'
                  : 'text-[#D4C9BC] hover:text-[#EDE3D3]'
              }`}
            >
              Projects
              {(currentPage === 'projects' || currentPage === 'project-detail' || (currentPage === 'home' && activeSection === 'projects')) && (
                <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#9A6048] rounded-full"></span>
              )}
            </a>

            {/* Resources with Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnterResourcesDropdown}
              onMouseLeave={handleMouseLeaveResourcesDropdown}
            >
              <button
                onClick={() => onNavigateToResources()}
                className={`px-3 py-1.5 text-xs xl:text-sm font-medium tracking-wide transition-all duration-200 rounded-sm flex items-center gap-1 relative ${
                  currentPage === 'resources'
                    ? 'text-[#EDE3D3] font-semibold'
                    : 'text-[#D4C9BC] hover:text-[#EDE3D3]'
                }`}
              >
                <span>Resources</span>
                <ChevronDown className={`w-3.5 h-3.5 text-[#B78A55] transition-transform duration-200 ${resourcesDropdownOpen ? 'rotate-180' : ''}`} />
                {currentPage === 'resources' && (
                  <span className="absolute bottom-0 left-3 right-7 h-[2px] bg-[#9A6048] rounded-full"></span>
                )}
              </button>

              {/* Resources Dropdown Menu */}
              {resourcesDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-[#131D23] border border-[#EDE3D3]/18 rounded-md shadow-editorial-dark py-2 z-50 animate-fadeIn backdrop-blur-lg">
                  {resourceDropdownItems.map((item, idx) => (
                    <a
                      key={idx}
                      href={`/resources#${item.sectionId}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setResourcesDropdownOpen(false);
                        onNavigateToResources(item.sectionId);
                      }}
                      className="block px-4 py-2.5 text-xs xl:text-sm text-[#D4C9BC] hover:text-[#EDE3D3] hover:bg-[#45382F]/70 transition-colors border-b border-[#EDE3D3]/5 last:border-0"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Contact Us */}
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigateToContact) onNavigateToContact();
                else onNavigateToSection('contact');
              }}
              className={`px-3 py-1.5 text-xs xl:text-sm font-medium tracking-wide transition-all duration-200 rounded-sm relative ${
                currentPage === 'contact' || (currentPage === 'home' && activeSection === 'contact')
                  ? 'text-[#EDE3D3] font-semibold'
                  : 'text-[#D4C9BC] hover:text-[#EDE3D3]'
              }`}
            >
              Contact Us
              {(currentPage === 'contact' || (currentPage === 'home' && activeSection === 'contact')) && (
                <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#9A6048] rounded-full"></span>
              )}
            </a>
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={onOpenQuote}
              className="bg-[#9A6048] hover:bg-[#86513B] text-[#EDE3D3] font-semibold text-xs sm:text-sm tracking-wider uppercase px-4 sm:px-5 py-2.5 rounded-sm shadow-md hover:shadow-terracotta-glow transition-all duration-300 flex items-center gap-2 active:scale-95"
            >
              <span>Get A Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenQuote}
              className="bg-[#9A6048] text-[#EDE3D3] text-xs font-semibold px-3 py-1.5 rounded-sm tracking-wider uppercase"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              className="p-2 rounded-sm text-[#EDE3D3] hover:text-[#B78A55] focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#131D23]/98 border-b border-[#EDE3D3]/15 backdrop-blur-xl px-5 pt-3 pb-6 space-y-3 animate-fadeIn">
          <div className="flex flex-col space-y-2 pt-2">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                onNavigateHome();
              }}
              className="py-2 text-sm font-medium tracking-wider uppercase border-b border-[#45382F]/70 text-[#D4C9BC] hover:text-[#EDE3D3] transition-colors"
            >
              Home
            </a>

            <a
              href="/about"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                if (onNavigateToAbout) onNavigateToAbout();
                else onNavigateToSection('about');
              }}
              className="py-2 text-sm font-medium tracking-wider uppercase border-b border-[#45382F]/70 text-[#D4C9BC] hover:text-[#EDE3D3] transition-colors"
            >
              About Us
            </a>

            {/* Mobile Services expandable menu */}
            <div className="border-b border-[#45382F]/70 py-2">
              <div className="flex items-center justify-between">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onNavigateToServices) onNavigateToServices();
                    else onNavigateToSection('services');
                  }}
                  className="text-sm font-medium tracking-wider uppercase text-[#D4C9BC] hover:text-[#EDE3D3] transition-colors text-left"
                >
                  Services
                </button>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="p-1 text-[#B78A55] focus:outline-none"
                  aria-label="Expand Services Menu"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {mobileServicesOpen && (
                <div className="pl-4 pt-2 pb-1 space-y-1 mt-1 border-l border-[#B78A55]/30">
                  <a
                    href="/premium-construction"
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileMenuOpen(false);
                      if (onNavigateToPremiumConstruction) onNavigateToPremiumConstruction();
                      else if (onNavigateToServices) onNavigateToServices();
                    }}
                    className="flex items-center gap-2 py-2 text-xs font-semibold text-[#EDE3D3] hover:text-[#B78A55] transition-colors"
                  >
                    <Layers className="w-3.5 h-3.5 text-[#B78A55] flex-shrink-0" />
                    Premium Construction
                  </a>
                  <a
                    href="/services"
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileMenuOpen(false);
                      if (onNavigateToServices) onNavigateToServices();
                      else onNavigateToSection('services');
                    }}
                    className="flex items-center gap-2 py-2 text-xs font-semibold text-[#D4C9BC] hover:text-[#EDE3D3] transition-colors"
                  >
                    <Layers className="w-3.5 h-3.5 text-[#B78A55] flex-shrink-0" />
                    General Services & Solutions
                  </a>
                </div>
              )}
            </div>

            <a
              href="/projects"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                onNavigateToProjects();
              }}
              className="py-2 text-sm font-medium tracking-wider uppercase border-b border-[#45382F]/70 text-[#D4C9BC] hover:text-[#EDE3D3] transition-colors"
            >
              Projects
            </a>

            {/* Mobile Resources expandable menu */}
            <div className="border-b border-[#45382F]/70 py-2">
              <div className="flex items-center justify-between">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavigateToResources();
                  }}
                  className="text-sm font-medium tracking-wider uppercase text-[#D4C9BC] hover:text-[#EDE3D3] transition-colors text-left"
                >
                  Resources
                </button>
                <button
                  onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                  className="p-1 text-[#B78A55] focus:outline-none"
                  aria-label="Expand Resources Menu"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileResourcesOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {mobileResourcesOpen && (
                <div className="pl-4 pt-2 pb-1 space-y-2 mt-1 border-l border-[#B78A55]/30">
                  {resourceDropdownItems.map((item, idx) => (
                    <a
                      key={idx}
                      href={`/resources#${item.sectionId}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setMobileMenuOpen(false);
                        onNavigateToResources(item.sectionId);
                      }}
                      className="block text-xs font-normal text-[#D4C9BC]/80 hover:text-[#EDE3D3] py-1 transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                if (onNavigateToContact) onNavigateToContact();
                else onNavigateToSection('contact');
              }}
              className="py-2 text-sm font-medium tracking-wider uppercase border-b border-[#45382F]/70 text-[#D4C9BC] hover:text-[#EDE3D3] transition-colors"
            >
              Contact Us
            </a>
          </div>

          <div className="pt-3 flex flex-col gap-3">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-sm border border-[#EDE3D3]/20 text-[#EDE3D3] text-xs font-medium tracking-wider uppercase"
            >
              <Phone className="w-4 h-4 text-[#B78A55]" />
              <span>Call: {siteConfig.phoneDisplay}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full bg-[#9A6048] hover:bg-[#86513B] text-[#EDE3D3] font-bold text-xs uppercase tracking-widest py-3 rounded-sm shadow-md"
            >
              Get A Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
