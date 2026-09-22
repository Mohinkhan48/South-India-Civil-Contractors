import React, { useState, useEffect, useRef } from 'react';
import { siteConfig } from '../config/site';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';

interface HeaderProps {
  onOpenQuote: () => void;
  activeSection?: string;
  currentPage: 'home' | 'about' | 'services' | 'premium-construction' | 'civil-labour' | 'projects' | 'project-detail' | 'contact' | 'resources' | 'project-videos' | '3d-renders' | '404' | string;
  onNavigateHome: () => void;
  onNavigateToAbout?: () => void;
  onNavigateToServices?: () => void;
  onNavigateToPremiumConstruction?: () => void;
  onNavigateToCivilLabour?: () => void;
  onNavigateToProjects: () => void;
  onNavigateToProjectPhotos?: () => void;
  onNavigateToProjectVideos?: () => void;
  onNavigateTo3DRenders?: () => void;
  onNavigateToAssetsManpower?: () => void;
  onNavigateToContact?: () => void;
  onNavigateToResources: (sectionId?: string) => void;
  onNavigateToSection: (section: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenQuote,
  activeSection: _activeSection = 'hero',
  currentPage,
  onNavigateHome,
  onNavigateToAbout,
  onNavigateToServices,
  onNavigateToPremiumConstruction,
  onNavigateToCivilLabour,
  onNavigateToProjects,
  onNavigateToProjectPhotos,
  onNavigateToProjectVideos,
  onNavigateTo3DRenders,
  onNavigateToAssetsManpower,
  onNavigateToContact,
  onNavigateToResources,
  onNavigateToSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [ourWorkDropdownOpen, setOurWorkDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [mobileOurWorkOpen, setMobileOurWorkOpen] = useState(false);
  const servicesDropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const resourcesDropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const ourWorkDropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const resourceDropdownItems: { name: string; sectionId?: string; is3DRenders?: boolean; isAssetsManpower?: boolean }[] = [
    { name: 'Technical Specifications', sectionId: 'hero' },
    { name: 'Assets & Manpower', isAssetsManpower: true },
    { name: '3D Renders', is3DRenders: true },
  ];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.dropdown-container')) {
        setServicesDropdownOpen(false);
        setOurWorkDropdownOpen(false);
        setResourcesDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleMouseEnterServicesDropdown = () => {
    if (servicesDropdownTimeoutRef.current) clearTimeout(servicesDropdownTimeoutRef.current);
    setServicesDropdownOpen(true);
  };

  const handleMouseLeaveServicesDropdown = () => {
    servicesDropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 280);
  };

  const handleMouseEnterResourcesDropdown = () => {
    if (resourcesDropdownTimeoutRef.current) clearTimeout(resourcesDropdownTimeoutRef.current);
    setResourcesDropdownOpen(true);
  };

  const handleMouseLeaveResourcesDropdown = () => {
    resourcesDropdownTimeoutRef.current = setTimeout(() => {
      setResourcesDropdownOpen(false);
    }, 280);
  };

  const handleMouseEnterOurWorkDropdown = () => {
    if (ourWorkDropdownTimeoutRef.current) clearTimeout(ourWorkDropdownTimeoutRef.current);
    setOurWorkDropdownOpen(true);
  };

  const handleMouseLeaveOurWorkDropdown = () => {
    ourWorkDropdownTimeoutRef.current = setTimeout(() => {
      setOurWorkDropdownOpen(false);
    }, 280);
  };

  const isHomeActive = currentPage === 'home';
  const isAboutActive = currentPage === 'about';
  const isServicesActive =
    currentPage === 'services' ||
    currentPage === 'premium-construction' ||
    currentPage === 'civil-labour' ||
    currentPage === 'service-detail';
  const isOurWorkActive =
    currentPage === 'projects' ||
    currentPage === 'project-photos' ||
    currentPage === 'project-detail' ||
    currentPage === 'project-videos';
  const isResourcesActive =
    currentPage === 'resources' ||
    currentPage === 'assets-manpower' ||
    currentPage === '3d-renders';
  const isContactActive = currentPage === 'contact';

  const useLightHeader = isScrolled || currentPage !== 'home';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${useLightHeader
          ? 'bg-[#3E5C76]/95 backdrop-blur-md py-3 border-b border-[#2E4A62]/60 shadow-xs'
          : 'bg-gradient-to-b from-[#131D23]/90 via-[#131D23]/40 to-transparent py-4 border-b border-transparent'
        }`}
      style={{
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <button
            onClick={onNavigateHome}
            className="flex items-center gap-3.5 group focus:outline-none text-left cursor-pointer"
          >
            {/* SICC Logo */}
            <img
              src={useLightHeader ? '/images/logo_blue.png' : '/images/logo_transparent.png'}
              alt="South India Civil Contractors Logo"
              className="h-12 sm:h-14 w-auto object-contain scale-[1.45] origin-left transition-all duration-300"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <nav className="flex items-center space-x-1.5 xl:space-x-2">
              {/* Home */}
              <a
                href="#hero"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateHome();
                }}
                className={`px-3.5 py-1.5 text-xs xl:text-sm font-medium tracking-wide transition-all duration-200 rounded-[6px] ${isHomeActive
                    ? 'bg-[#4A2328] text-white font-semibold shadow-xs'
                    : useLightHeader
                      ? 'text-[#EDE3D3] hover:text-white hover:bg-white/10 font-medium'
                      : 'text-[#D4C9BC] hover:text-[#EDE3D3]'
                  }`}
              >
                Home
              </a>

              {/* About Us */}
              <a
                href="/about"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigateToAbout) onNavigateToAbout();
                  else onNavigateToSection('about');
                }}
                className={`px-3.5 py-1.5 text-xs xl:text-sm font-medium tracking-wide transition-all duration-200 rounded-[6px] ${isAboutActive
                    ? 'bg-[#4A2328] text-white font-semibold shadow-xs'
                    : useLightHeader
                      ? 'text-[#EDE3D3] hover:text-white hover:bg-white/10 font-medium'
                      : 'text-[#D4C9BC] hover:text-[#EDE3D3]'
                  }`}
              >
                About Us
              </a>

              {/* Services Dropdown */}
              <div
                className="relative dropdown-container"
                onMouseEnter={handleMouseEnterServicesDropdown}
                onMouseLeave={handleMouseLeaveServicesDropdown}
              >
                <a
                  href="/services"
                  onClick={(e) => {
                    e.preventDefault();
                    if (servicesDropdownTimeoutRef.current) clearTimeout(servicesDropdownTimeoutRef.current);
                    setServicesDropdownOpen(false);
                    setOurWorkDropdownOpen(false);
                    setResourcesDropdownOpen(false);
                    if (onNavigateToServices) onNavigateToServices();
                    else onNavigateToSection('services');
                  }}
                  className={`px-3.5 py-1.5 text-xs xl:text-sm font-medium tracking-wide transition-all duration-200 rounded-[6px] flex items-center gap-1 cursor-pointer ${isServicesActive
                      ? 'bg-[#4A2328] text-white font-semibold shadow-xs'
                      : useLightHeader
                        ? 'text-[#EDE3D3] hover:text-white hover:bg-white/10 font-medium'
                        : 'text-[#D4C9BC] hover:text-[#EDE3D3]'
                    }`}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''
                      } ${isServicesActive ? 'text-white' : useLightHeader ? 'text-[#EDE3D3]' : 'text-[#B78A55]'}`}
                  />
                </a>

                {/* Services Dropdown Menu */}
                {servicesDropdownOpen && (
                  <div className="absolute top-full left-0 pt-1.5 w-60 z-50">
                    <div className="rounded-lg py-1 shadow-2xl backdrop-blur-lg animate-fadeIn bg-[#152E44] border border-white/15 overflow-hidden">
                      <a
                        href="/services"
                        onClick={(e) => {
                          e.preventDefault();
                          setServicesDropdownOpen(false);
                          if (onNavigateToServices) onNavigateToServices();
                          else onNavigateToSection('services');
                        }}
                        className={`block px-5 py-3 text-sm font-semibold transition-colors cursor-pointer ${currentPage === 'services'
                            ? 'bg-[#4E2827] text-white'
                            : 'text-white hover:bg-white/10 hover:text-white'
                          }`}
                      >
                        All Services
                      </a>

                      <a
                        href="/premium-construction"
                        onClick={(e) => {
                          e.preventDefault();
                          setServicesDropdownOpen(false);
                          if (onNavigateToPremiumConstruction) onNavigateToPremiumConstruction();
                          else if (onNavigateToServices) onNavigateToServices();
                        }}
                        className={`block px-5 py-3 text-sm font-semibold transition-colors cursor-pointer ${currentPage === 'premium-construction'
                            ? 'bg-[#4E2827] text-white'
                            : 'text-white hover:bg-white/10 hover:text-white'
                          }`}
                      >
                        Premium Construction
                      </a>

                      <a
                        href="/civil-labour-contract"
                        onClick={(e) => {
                          e.preventDefault();
                          setServicesDropdownOpen(false);
                          if (onNavigateToCivilLabour) onNavigateToCivilLabour();
                          else if (onNavigateToServices) onNavigateToServices();
                        }}
                        className={`block px-5 py-3 text-sm font-semibold transition-colors cursor-pointer ${currentPage === 'civil-labour'
                            ? 'bg-[#4E2827] text-white'
                            : 'text-white hover:bg-white/10 hover:text-white'
                          }`}
                      >
                        Civil Labour Contract
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Our Work Dropdown */}
              <div
                className="relative dropdown-container"
                onMouseEnter={handleMouseEnterOurWorkDropdown}
                onMouseLeave={handleMouseLeaveOurWorkDropdown}
              >
                <a
                  href="/projects"
                  onClick={(e) => {
                    e.preventDefault();
                    if (ourWorkDropdownTimeoutRef.current) clearTimeout(ourWorkDropdownTimeoutRef.current);
                    setOurWorkDropdownOpen(false);
                    setServicesDropdownOpen(false);
                    setResourcesDropdownOpen(false);
                    onNavigateToProjects();
                  }}
                  className={`px-3.5 py-1.5 text-xs xl:text-sm font-medium tracking-wide transition-all duration-200 rounded-[6px] flex items-center gap-1 cursor-pointer ${isOurWorkActive
                      ? 'bg-[#4A2328] text-white font-semibold shadow-xs'
                      : useLightHeader
                        ? 'text-[#EDE3D3] hover:text-white hover:bg-white/10 font-medium'
                        : 'text-[#D4C9BC] hover:text-[#EDE3D3]'
                    }`}
                >
                  <span>Our Work</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${ourWorkDropdownOpen ? 'rotate-180' : ''
                      } ${isOurWorkActive
                        ? 'text-white'
                        : useLightHeader ? 'text-[#EDE3D3]' : 'text-[#B78A55]'
                      }`}
                  />
                </a>

                {ourWorkDropdownOpen && (
                  <div className="absolute top-full left-0 pt-1.5 w-52 z-50">
                    <div className="rounded-lg py-1 shadow-2xl backdrop-blur-lg animate-fadeIn bg-[#152E44] border border-white/15 overflow-hidden">
                      <a
                        href="/projects"
                        onClick={(e) => {
                          e.preventDefault();
                          setOurWorkDropdownOpen(false);
                          onNavigateToProjects();
                        }}
                        className={`block px-5 py-2.5 text-sm font-semibold transition-colors cursor-pointer ${currentPage === 'projects'
                            ? 'bg-[#4E2827] text-white'
                            : 'text-white/95 hover:bg-white/10 hover:text-white'
                          }`}
                      >
                        Work Timeline
                      </a>
                      <a
                        href="/project-photos"
                        onClick={(e) => {
                          e.preventDefault();
                          setOurWorkDropdownOpen(false);
                          if (onNavigateToProjectPhotos) onNavigateToProjectPhotos();
                          else onNavigateToProjects();
                        }}
                        className={`block px-5 py-2.5 text-sm font-semibold transition-colors cursor-pointer ${currentPage === 'project-photos'
                            ? 'bg-[#4E2827] text-white'
                            : 'text-white/95 hover:bg-white/10 hover:text-white'
                          }`}
                      >
                        Project Photos
                      </a>
                      <a
                        href="/project-videos"
                        onClick={(e) => {
                          e.preventDefault();
                          setOurWorkDropdownOpen(false);
                          if (onNavigateToProjectVideos) onNavigateToProjectVideos();
                        }}
                        className={`block px-5 py-2.5 text-sm font-semibold transition-colors cursor-pointer ${currentPage === 'project-videos'
                            ? 'bg-[#4E2827] text-white'
                            : 'text-white/95 hover:bg-white/10 hover:text-white'
                          }`}
                      >
                        Project Videos
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Resources */}
              <div
                className="relative dropdown-container"
                onMouseEnter={handleMouseEnterResourcesDropdown}
                onMouseLeave={handleMouseLeaveResourcesDropdown}
              >
                <a
                  href="/resources"
                  onClick={(e) => {
                    e.preventDefault();
                    if (resourcesDropdownTimeoutRef.current) clearTimeout(resourcesDropdownTimeoutRef.current);
                    setResourcesDropdownOpen(false);
                    setServicesDropdownOpen(false);
                    setOurWorkDropdownOpen(false);
                    onNavigateToResources('hero');
                  }}
                  className={`px-3.5 py-1.5 text-xs xl:text-sm font-medium tracking-wide transition-all duration-200 rounded-[6px] flex items-center gap-1 cursor-pointer ${isResourcesActive
                      ? 'bg-[#4A2328] text-white font-semibold shadow-xs'
                      : useLightHeader
                        ? 'text-[#EDE3D3] hover:text-white hover:bg-white/10 font-medium'
                        : 'text-[#D4C9BC] hover:text-[#EDE3D3]'
                    }`}
                >
                  <span>Resources</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${resourcesDropdownOpen ? 'rotate-180' : ''
                      } ${isResourcesActive ? 'text-white' : useLightHeader ? 'text-[#EDE3D3]' : 'text-[#B78A55]'}`}
                  />
                </a>

                {resourcesDropdownOpen && (
                  <div className="absolute top-full left-0 pt-1.5 w-60 z-50">
                    <div className="rounded-lg py-1 shadow-2xl backdrop-blur-lg animate-fadeIn bg-[#152E44] border border-white/15 overflow-hidden">
                      {resourceDropdownItems.map((item, idx) => {
                        const isItemActive =
                          (item.is3DRenders && currentPage === '3d-renders') ||
                          (item.isAssetsManpower && currentPage === 'assets-manpower') ||
                          (!item.is3DRenders && !item.isAssetsManpower && currentPage === 'resources');
                        return (
                          <a
                            key={idx}
                            href={item.is3DRenders ? '/3d-renders' : item.isAssetsManpower ? '/assets-manpower' : `/resources#${item.sectionId}`}
                            onClick={(e) => {
                              e.preventDefault();
                              setResourcesDropdownOpen(false);
                              if (item.is3DRenders) {
                                if (onNavigateTo3DRenders) onNavigateTo3DRenders();
                              } else if (item.isAssetsManpower) {
                                if (onNavigateToAssetsManpower) onNavigateToAssetsManpower();
                              } else {
                                onNavigateToResources(item.sectionId);
                              }
                            }}
                            className={`block px-5 py-2.5 text-sm font-semibold transition-colors cursor-pointer ${isItemActive
                                ? 'bg-[#4E2827] text-white'
                                : 'text-white/95 hover:bg-white/10 hover:text-white'
                              }`}
                          >
                            {item.name}
                          </a>
                        );
                      })}
                    </div>
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
                className={`px-3.5 py-1.5 text-xs xl:text-sm font-medium tracking-wide transition-all duration-200 rounded-[6px] ${isContactActive
                    ? 'bg-[#4A2328] text-white font-semibold shadow-xs'
                    : useLightHeader
                      ? 'text-[#EDE3D3] hover:text-white hover:bg-white/10 font-medium'
                      : 'text-[#D4C9BC] hover:text-[#EDE3D3]'
                  }`}
              >
                Contact Us
              </a>
            </nav>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={`tel:${siteConfig.phone}`}
              className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${useLightHeader
                  ? 'border-white/30 bg-white/10 text-white'
                  : 'border-[#EDE3D3]/20 bg-white/5 text-[#B78A55]'
                }`}
              aria-label="Call Us"
            >
              <Phone className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onOpenQuote}
              className="bg-[#4A2328] text-white text-xs font-semibold px-3 py-1.5 rounded-[4px] tracking-wider uppercase cursor-pointer"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              className={`p-2 rounded-sm focus:outline-none cursor-pointer ${useLightHeader ? 'text-white' : 'text-[#EDE3D3]'
                }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden fixed inset-x-0 top-full shadow-2xl border-b py-6 px-6 z-50 ${useLightHeader ? 'bg-[#3E5C76] border-[#2E4A62] text-white' : 'bg-[#131D23] border-[#EDE3D3]/15 text-[#EDE3D3]'
            }`}
        >
          <div className="flex flex-col space-y-4">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                onNavigateHome();
              }}
              className="text-base font-semibold py-1"
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
              className="text-base font-semibold py-1"
            >
              About Us
            </a>

            {/* Mobile Services */}
            <div>
              <div className="flex items-center justify-between w-full text-base font-semibold py-1">
                <a
                  href="/services"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    if (onNavigateToServices) onNavigateToServices();
                  }}
                  className="cursor-pointer flex-1"
                >
                  Services
                </a>
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="p-1 cursor-pointer"
                  aria-label="Toggle Services submenu"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
              {mobileServicesOpen && (
                <div className="pl-4 pt-2 space-y-2">
                  <a
                    href="/services"
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileMenuOpen(false);
                      if (onNavigateToServices) onNavigateToServices();
                    }}
                    className="block text-sm py-1 opacity-80"
                  >
                    All Services
                  </a>
                  <a
                    href="/premium-construction"
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileMenuOpen(false);
                      if (onNavigateToPremiumConstruction) onNavigateToPremiumConstruction();
                    }}
                    className={`block text-sm py-1 ${currentPage === 'premium-construction' ? 'font-bold text-[#4A2026]' : 'opacity-80'}`}
                  >
                    Premium Construction
                  </a>
                  <a
                    href="/civil-labour-contract"
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileMenuOpen(false);
                      if (onNavigateToCivilLabour) onNavigateToCivilLabour();
                      else if (onNavigateToServices) onNavigateToServices();
                    }}
                    className={`block text-sm py-1 ${currentPage === 'civil-labour' ? 'font-bold text-[#4A2026]' : 'opacity-80'}`}
                  >
                    Civil Labour Contract
                  </a>
                </div>
              )}
            </div>

            {/* Mobile Our Work */}
            <div>
              <div className="flex items-center justify-between w-full text-base font-semibold py-1">
                <a
                  href="/projects"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    onNavigateToProjects();
                  }}
                  className="cursor-pointer flex-1"
                >
                  Our Work
                </a>
                <button
                  type="button"
                  onClick={() => setMobileOurWorkOpen(!mobileOurWorkOpen)}
                  className="p-1 cursor-pointer"
                  aria-label="Toggle Our Work submenu"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileOurWorkOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
              {mobileOurWorkOpen && (
                <div className="pl-4 pt-2 space-y-2">
                  <a
                    href="/projects"
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileMenuOpen(false);
                      onNavigateToProjects();
                    }}
                    className="block text-sm py-1 opacity-80"
                  >
                    Work Timeline
                  </a>
                  <a
                    href="/project-photos"
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileMenuOpen(false);
                      if (onNavigateToProjectPhotos) onNavigateToProjectPhotos();
                      else onNavigateToProjects();
                    }}
                    className={`block text-sm py-1 ${currentPage === 'project-photos' ? 'font-bold text-[#4A2026]' : 'opacity-80'}`}
                  >
                    Project Photos
                  </a>
                  <a
                    href="/project-videos"
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileMenuOpen(false);
                      if (onNavigateToProjectVideos) onNavigateToProjectVideos();
                    }}
                    className="block text-sm py-1 opacity-80"
                  >
                    Project Videos
                  </a>
                </div>
              )}
            </div>

            {/* Mobile Resources */}
            <div>
              <div className="flex items-center justify-between w-full text-base font-semibold py-1">
                <a
                  href="/resources"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    onNavigateToResources('hero');
                  }}
                  className="cursor-pointer flex-1"
                >
                  Resources
                </a>
                <button
                  type="button"
                  onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                  className="p-1 cursor-pointer"
                  aria-label="Toggle Resources submenu"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileResourcesOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
              {mobileResourcesOpen && (
                <div className="pl-4 pt-2 space-y-2">
                  {resourceDropdownItems.map((item, idx) => {
                    const isItemActive =
                      (item.is3DRenders && currentPage === '3d-renders') ||
                      (item.isAssetsManpower && currentPage === 'assets-manpower') ||
                      (!item.is3DRenders && !item.isAssetsManpower && currentPage === 'resources');
                    return (
                      <a
                        key={idx}
                        href={item.is3DRenders ? '/3d-renders' : item.isAssetsManpower ? '/assets-manpower' : `/resources#${item.sectionId}`}
                        onClick={(e) => {
                          e.preventDefault();
                          setMobileMenuOpen(false);
                          if (item.is3DRenders) {
                            if (onNavigateTo3DRenders) onNavigateTo3DRenders();
                          } else if (item.isAssetsManpower) {
                            if (onNavigateToAssetsManpower) onNavigateToAssetsManpower();
                          } else {
                            onNavigateToResources(item.sectionId);
                          }
                        }}
                        className={`block text-sm py-1 ${isItemActive ? 'font-bold text-[#4A2328]' : 'opacity-80'
                          }`}
                      >
                        {item.name}
                      </a>
                    );
                  })}
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
              className="text-base font-semibold py-1"
            >
              Contact Us
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full bg-[#4A2328] text-white font-bold py-3 rounded-[8px] text-sm mt-4 shadow cursor-pointer"
            >
              Get Free Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
