import React, { useState, useEffect, useCallback } from 'react';
import { servicesDetailData } from './data/servicesData';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { OurExpertise } from './components/OurExpertise';
import { YearsOfExcellence } from './components/YearsOfExcellence';
import { PremiumPackageBanner } from './components/PremiumPackageBanner';
import { OurWorkShowcase } from './components/OurWorkShowcase';
import { ProjectVideosSection } from './components/ProjectVideosSection';
import { ProjectVideosPage } from './components/ProjectVideosPage';
import { ThreeDRendersSection } from './components/ThreeDRendersSection';
import { ThreeDRendersPage } from './components/ThreeDRendersPage';
import { Testimonials } from './components/Testimonials';
import { ReadyToStartBanner } from './components/ReadyToStartBanner';
import { Footer } from './components/Footer';
import { FloatingControls } from './components/FloatingControls';
import { QuoteModal } from './components/QuoteModal';
import { DownloadPackageModal } from './components/DownloadPackageModal';
import { EnquiryPopupModal } from './components/EnquiryPopupModal';
import { PrivacyTermsModal } from './components/PrivacyTermsModal';
import { ProjectsPage } from './components/ProjectsPage';
import { ProjectPhotosPage } from './components/ProjectPhotosPage';
import { ProjectDetailPage } from './components/ProjectDetailPage';
import { ServiceDetailPage } from './components/ServiceDetailPage';
import { ServicesPage } from './components/ServicesPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { ResourcesPage } from './components/ResourcesPage';
import { PremiumConstructionPage } from './components/PremiumConstructionPage';
import { CivilLabourContractPage } from './components/CivilLabourContractPage';
import { NotFoundPage } from './components/NotFoundPage';
import { BrandMarquee } from './components/BrandMarquee';
import { AssetsManpowerPage } from './components/AssetsManpowerPage';
import { siteConfig } from './config/site';

export type AppPage =
  | { type: 'home' }
  | { type: 'about' }
  | { type: 'services' }
  | { type: 'premium-construction' }
  | { type: 'civil-labour' }
  | { type: 'service-detail'; slug: string }
  | { type: 'projects'; initialCity?: string }
  | { type: 'project-photos' }
  | { type: 'project-detail'; id: string }
  | { type: 'resources'; initialSectionId?: string }
  | { type: 'assets-manpower' }
  | { type: 'project-videos' }
  | { type: '3d-renders' }
  | { type: 'contact' }
  | { type: '404' };

export const App: React.FC = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [downloadPackageName, setDownloadPackageName] = useState('Download Premium Construction Package Details');
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [quoteInitialType, setQuoteInitialType] = useState<string | undefined>(undefined);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);
  const [activeSection, setActiveSection] = useState('hero');
  const [page, setPage] = useState<AppPage>({ type: 'home' });

  // Initial URL Router Parsing
  useEffect(() => {
    const parseUrl = (): AppPage => {
      const path = window.location.pathname;
      const hash = window.location.hash.replace('#', '');
      if (path === '/' || path === '') return { type: 'home' };
      if (path === '/about') return { type: 'about' };
      if (path === '/services') return { type: 'services' };
      if (path === '/premium-construction') return { type: 'premium-construction' };
      if (path === '/civil-labour-contract' || path === '/civil-labour') return { type: 'civil-labour' };
      if (path.startsWith('/services/')) {
        const slug = path.replace('/services/', '');
        if (servicesDetailData[slug]) {
          return { type: 'service-detail', slug };
        }
        return { type: 'services' };
      }
      if (path === '/projects') return { type: 'projects' };
      if (path === '/project-photos') return { type: 'project-photos' };
      if (path.startsWith('/projects/')) {
        const id = path.replace('/projects/', '');
        return { type: 'project-detail', id };
      }
      if (path === '/resources') return { type: 'resources', initialSectionId: hash || undefined };
      if (path === '/assets-manpower') return { type: 'assets-manpower' };
      if (path === '/project-videos') return { type: 'project-videos' };
      if (path === '/3d-renders') return { type: '3d-renders' };
      if (path === '/contact') return { type: 'contact' };
      return { type: 'home' };
    };

    setPage(parseUrl());

    const handlePopState = () => {
      setPage(parseUrl());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update Browser URL on page change
  const navigateToPage = useCallback((newPage: AppPage, urlPath?: string) => {
    setPage(newPage);
    if (urlPath && window.location.pathname !== urlPath) {
      window.history.pushState(null, '', urlPath);
    }
  }, []);

  // Auto-open enquiry consultation form popup after 5 seconds — once per session
  useEffect(() => {
    const POPUP_KEY = 'sibc_enquiry_shown';
    if (sessionStorage.getItem(POPUP_KEY)) return;
    const timer = setTimeout(() => {
      setEnquiryModalOpen(true);
      sessionStorage.setItem(POPUP_KEY, '1');
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  // Scroll Reveal Observer for cinematic section entry animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          }
        });
      },
      { threshold: 0.02, rootMargin: '0px 0px -10px 0px' }
    );

    const observeElements = () => {
      const elements = document.querySelectorAll('.reveal-on-scroll, .reveal-scale');
      elements.forEach((el) => observer.observe(el));
    };

    observeElements();
    const timer = setTimeout(observeElements, 250);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [page]);

  // Set Homepage SEO Meta & Canonical Link
  useEffect(() => {
    if (page.type === 'home') {
      document.title = 'South India Civil Contractors | Residential & Commercial Construction';
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute(
        'content',
        'South India Civil Contractors delivers custom residential villa, commercial building, turnkey and civil construction services across Chennai, Bangalore, Hyderabad, Kochi & Coimbatore.'
      );

      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', `${siteConfig.siteUrl}/`);
    }
  }, [page.type]);

  // Track active section on the home page
  useEffect(() => {
    if (page.type !== 'home') return;

    const handleScrollObserver = () => {
      const sections = ['hero', 'about', 'services', 'projects-by-city', 'projects', 'why-us', 'process', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollObserver, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollObserver);
  }, [page.type]);

  const navigateHome = useCallback(() => {
    navigateToPage({ type: 'home' }, '/');
  }, [navigateToPage]);

  const navigateToAbout = useCallback(() => {
    navigateToPage({ type: 'about' }, '/about');
  }, [navigateToPage]);

  const navigateToServices = useCallback(() => {
    navigateToPage({ type: 'services' }, '/services');
  }, [navigateToPage]);

  const navigateToPremiumConstruction = useCallback(() => {
    navigateToPage({ type: 'premium-construction' }, '/premium-construction');
  }, [navigateToPage]);

  const navigateToCivilLabour = useCallback(() => {
    navigateToPage({ type: 'civil-labour' }, '/civil-labour-contract');
  }, [navigateToPage]);

  const navigateToServiceSlug = useCallback((slug: string) => {
    navigateToPage({ type: 'service-detail', slug }, `/services/${slug}`);
  }, [navigateToPage]);

  const navigateToProjects = useCallback((initialCity?: string) => {
    navigateToPage({ type: 'projects', initialCity }, '/projects');
  }, [navigateToPage]);

  const navigateToProjectDetail = useCallback((id: string) => {
    navigateToPage({ type: 'project-detail', id }, `/projects/${id}`);
  }, [navigateToPage]);

  const navigateToContact = useCallback(() => {
    navigateToPage({ type: 'contact' }, '/contact');
  }, [navigateToPage]);

  const navigateToResources = useCallback((initialSectionId?: string) => {
    const urlPath = initialSectionId ? `/resources#${initialSectionId}` : '/resources';
    navigateToPage({ type: 'resources', initialSectionId }, urlPath);
  }, [navigateToPage]);

  const navigateToAssetsManpower = useCallback(() => {
    navigateToPage({ type: 'assets-manpower' }, '/assets-manpower');
  }, [navigateToPage]);

  const navigateToProjectVideos = useCallback(() => {
    navigateToPage({ type: 'project-videos' }, '/project-videos');
  }, [navigateToPage]);

  const navigateTo3DRenders = useCallback(() => {
    navigateToPage({ type: '3d-renders' }, '/3d-renders');
  }, [navigateToPage]);

  const navigateToProjectPhotos = useCallback(() => {
    navigateToPage({ type: 'project-photos' }, '/project-photos');
  }, [navigateToPage]);

  const navigateToSection = useCallback((sectionId: string) => {
    if (page.type !== 'home') {
      navigateToPage({ type: 'home' }, '/');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 150);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [page.type, navigateToPage]);

  const openQuote = useCallback((defaultType?: string) => {
    console.log('[App] openQuote called with:', defaultType, 'typeof:', typeof defaultType);
    setQuoteInitialType(typeof defaultType === 'string' ? defaultType : undefined);
    setQuoteModalOpen(true);
  }, []);

  const openDownloadModal = useCallback((packageName?: string) => {
    setDownloadPackageName(packageName || 'Download Premium Construction Package Details');
    setDownloadModalOpen(true);
  }, []);

  const commonHeaderProps = {
    onOpenQuote: openQuote,
    onNavigateHome: navigateHome,
    onNavigateToAbout: navigateToAbout,
    onNavigateToServices: navigateToServices,
    onNavigateToPremiumConstruction: navigateToPremiumConstruction,
    onNavigateToCivilLabour: navigateToCivilLabour,
    onNavigateToProjects: () => navigateToProjects(),
    onNavigateToProjectPhotos: navigateToProjectPhotos,
    onNavigateToProjectVideos: navigateToProjectVideos,
    onNavigateTo3DRenders: navigateTo3DRenders,
    onNavigateToAssetsManpower: navigateToAssetsManpower,
    onNavigateToContact: navigateToContact,
    onNavigateToResources: navigateToResources,
    onNavigateToSection: navigateToSection,
  };

  /* ───────── ABOUT PAGE ───────── */
  if (page.type === 'about') {
    return (
      <div className="bg-[#131D23] text-[#EDE3D3] min-h-screen relative">
        <Header {...commonHeaderProps} currentPage="about" />
        <AboutPage onNavigateHome={navigateHome} onOpenQuote={openQuote} />
        <Footer
          onNavigateToSection={navigateToSection}
          onNavigateToProjects={() => navigateToProjects()}
          onNavigateToAbout={navigateToAbout}
          onNavigateToServices={navigateToServices}
          onNavigateToContact={navigateToContact}
          onNavigateToResources={navigateToResources}
        />
        <FloatingControls />
        <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} initialType={quoteInitialType} />
      </div>
    );
  }

  /* ───────── DEDICATED SERVICES MAIN PAGE ───────── */
  if (page.type === 'services') {
    return (
      <div className="bg-[#131D23] text-[#EDE3D3] min-h-screen relative">
        <Header {...commonHeaderProps} currentPage="services" />
        <ServicesPage
          onNavigateHome={navigateHome}
          onOpenQuote={openQuote}
          onNavigateToServiceSlug={navigateToServiceSlug}
          onNavigateToPremiumConstruction={navigateToPremiumConstruction}
          onNavigateToCivilLabour={navigateToCivilLabour}
          onNavigateToContact={navigateToContact}
        />
        <Footer
          onNavigateToSection={navigateToSection}
          onNavigateToProjects={() => navigateToProjects()}
          onNavigateToAbout={navigateToAbout}
          onNavigateToServices={navigateToServices}
          onNavigateToContact={navigateToContact}
          onNavigateToResources={navigateToResources}
        />
        <FloatingControls />
        <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} initialType={quoteInitialType} />
      </div>
    );
  }

  /* ───────── PREMIUM CONSTRUCTION HUB PAGE ───────── */
  if (page.type === 'premium-construction') {
    return (
      <div className="bg-[#131D23] text-[#EDE3D3] min-h-screen relative">
        <Header {...commonHeaderProps} currentPage="premium-construction" />
        <PremiumConstructionPage
          onNavigateHome={navigateHome}
          onOpenQuote={openQuote}
          onOpenDownloadModal={openDownloadModal}
          onNavigateToProjects={navigateToProjectPhotos}
        />
        <Footer
          onNavigateToSection={navigateToSection}
          onNavigateToProjects={() => navigateToProjects()}
          onNavigateToAbout={navigateToAbout}
          onNavigateToServices={navigateToServices}
          onNavigateToContact={navigateToContact}
          onNavigateToResources={navigateToResources}
        />
        <FloatingControls />
        <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} initialType={quoteInitialType} />
        <DownloadPackageModal isOpen={downloadModalOpen} onClose={() => setDownloadModalOpen(false)} packageName={downloadPackageName} />
      </div>
    );
  }

  /* ───────── CIVIL LABOUR CONTRACT PAGE ───────── */
  if (page.type === 'civil-labour') {
    return (
      <div className="bg-[#FAF5EE] text-[#1E293B] min-h-screen relative">
        <Header {...commonHeaderProps} currentPage="civil-labour" />
        <CivilLabourContractPage
          onNavigateHome={navigateHome}
          onOpenQuote={openQuote}
          onOpenDownloadModal={openDownloadModal}
          onNavigateToProjects={navigateToProjectPhotos}
        />
        <Footer
          onNavigateToSection={navigateToSection}
          onNavigateToProjects={() => navigateToProjects()}
          onNavigateToAbout={navigateToAbout}
          onNavigateToServices={navigateToServices}
          onNavigateToContact={navigateToContact}
          onNavigateToResources={navigateToResources}
        />
        <FloatingControls />
        <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} initialType={quoteInitialType} />
        <DownloadPackageModal isOpen={downloadModalOpen} onClose={() => setDownloadModalOpen(false)} packageName={downloadPackageName} />
      </div>
    );
  }

  /* ───────── SERVICE DETAIL PAGE ───────── */
  if (page.type === 'service-detail') {
    return (
      <div className="bg-[#131D23] text-[#EDE3D3] min-h-screen relative">
        <Header {...commonHeaderProps} currentPage="service-detail" />
        <ServiceDetailPage
          slug={page.slug}
          onNavigateHome={navigateHome}
          onNavigateToServices={navigateToServices}
          onNavigateToServiceSlug={navigateToServiceSlug}
          onOpenQuote={openQuote}
        />
        <Footer
          onNavigateToSection={navigateToSection}
          onNavigateToProjects={() => navigateToProjects()}
          onNavigateToAbout={navigateToAbout}
          onNavigateToServices={navigateToServices}
          onNavigateToContact={navigateToContact}
          onNavigateToResources={navigateToResources}
        />
        <FloatingControls />
        <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} initialType={quoteInitialType} />
      </div>
    );
  }

  /* ───────── DEDICATED PROJECTS GALLERY PAGE ───────── */
  if (page.type === 'projects') {
    return (
      <div className="bg-[#131D23] text-[#EDE3D3] min-h-screen relative">
        <Header {...commonHeaderProps} currentPage="projects" />
        <ProjectsPage
          initialCity={page.initialCity}
          onNavigateHome={navigateHome}
          onNavigateToProjectDetail={navigateToProjectDetail}
          onOpenQuote={openQuote}
        />
        <Footer
          onNavigateToSection={navigateToSection}
          onNavigateToProjects={() => navigateToProjects()}
          onNavigateToAbout={navigateToAbout}
          onNavigateToServices={navigateToServices}
          onNavigateToContact={navigateToContact}
          onNavigateToResources={navigateToResources}
        />
        <FloatingControls />
        <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} initialType={quoteInitialType} />
      </div>
    );
  }

  /* ───────── PROJECT DETAIL CASE STUDY PAGE ───────── */
  if (page.type === 'project-detail') {
    return (
      <div className="bg-[#131D23] text-[#EDE3D3] min-h-screen relative">
        <Header {...commonHeaderProps} currentPage="project-detail" />
        <ProjectDetailPage
          projectId={page.id}
          onNavigateHome={navigateHome}
          onNavigateToProjects={() => navigateToProjects()}
          onNavigateToProjectDetail={navigateToProjectDetail}
          onOpenQuote={openQuote}
        />
        <Footer
          onNavigateToSection={navigateToSection}
          onNavigateToProjects={() => navigateToProjects()}
          onNavigateToAbout={navigateToAbout}
          onNavigateToServices={navigateToServices}
          onNavigateToContact={navigateToContact}
          onNavigateToResources={navigateToResources}
        />
        <FloatingControls />
        <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} initialType={quoteInitialType} />
      </div>
    );
  }

  /* ───────── RESOURCES PAGE ───────── */
  if (page.type === 'resources') {
    return (
      <div className="bg-[#131D23] text-[#EDE3D3] min-h-screen relative">
        <Header {...commonHeaderProps} currentPage="resources" />
        <ResourcesPage
          initialSectionId={page.initialSectionId}
          onNavigateHome={navigateHome}
          onOpenQuote={openQuote}
          onNavigateContact={navigateToContact}
        />
        <Footer
          onNavigateToSection={navigateToSection}
          onNavigateToProjects={() => navigateToProjects()}
          onNavigateToAbout={navigateToAbout}
          onNavigateToServices={navigateToServices}
          onNavigateToContact={navigateToContact}
          onNavigateToResources={navigateToResources}
        />
        <FloatingControls />
        <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} initialType={quoteInitialType} />
      </div>
    );
  }

  /* ───────── ASSETS & MANPOWER PAGE ───────── */
  if (page.type === 'assets-manpower') {
    return (
      <div className="relative" style={{ background: '#ffffff' }}>
        <Header {...commonHeaderProps} currentPage="assets-manpower" />
        <AssetsManpowerPage
          onNavigateHome={navigateHome}
          onOpenQuote={openQuote}
          onNavigateContact={navigateToContact}
        />
        <Footer
          onNavigateToSection={navigateToSection}
          onNavigateToProjects={() => navigateToProjects()}
          onNavigateToAbout={navigateToAbout}
          onNavigateToServices={navigateToServices}
          onNavigateToContact={navigateToContact}
          onNavigateToResources={navigateToResources}
        />
        <FloatingControls />
        <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} initialType={quoteInitialType} />
      </div>
    );
  }

  /* ───────── CONTACT PAGE ───────── */
  if (page.type === 'contact') {
    return (
      <div className="bg-[#131D23] text-[#EDE3D3] min-h-screen relative">
        <Header {...commonHeaderProps} currentPage="contact" />
        <ContactPage onNavigateHome={navigateHome} />
        <Footer
          onNavigateToSection={navigateToSection}
          onNavigateToProjects={() => navigateToProjects()}
          onNavigateToAbout={navigateToAbout}
          onNavigateToServices={navigateToServices}
          onNavigateToContact={navigateToContact}
          onNavigateToResources={navigateToResources}
        />
        <FloatingControls />
        <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} initialType={quoteInitialType} />
      </div>
    );
  }

  /* ───────── 404 NOT FOUND PAGE ───────── */
  if (page.type === '404') {
    return (
      <div className="bg-[#131D23] text-[#EDE3D3] min-h-screen relative">
        <Header {...commonHeaderProps} currentPage="404" />
        <NotFoundPage
          onNavigateHome={navigateHome}
          onNavigateToServices={navigateToServices}
          onNavigateToContact={navigateToContact}
        />
        <Footer
          onNavigateToSection={navigateToSection}
          onNavigateToProjects={() => navigateToProjects()}
          onNavigateToAbout={navigateToAbout}
          onNavigateToServices={navigateToServices}
          onNavigateToContact={navigateToContact}
          onNavigateToResources={navigateToResources}
        />
        <FloatingControls />
        <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} initialType={quoteInitialType} />
      </div>
    );
  }

  /* ───────── PROJECT PHOTOS PAGE ───────── */
  if (page.type === 'project-photos') {
    return (
      <div className="bg-white text-gray-900 min-h-screen relative">
        <Header {...commonHeaderProps} currentPage="project-photos" />
        <ProjectPhotosPage
          onNavigateHome={navigateHome}
          onOpenQuote={openQuote}
        />
        <Footer
          onNavigateToSection={navigateToSection}
          onNavigateToProjects={() => navigateToProjects()}
          onNavigateToAbout={navigateToAbout}
          onNavigateToServices={navigateToServices}
          onNavigateToContact={navigateToContact}
          onNavigateToResources={navigateToResources}
        />
        <FloatingControls />
        <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} initialType={quoteInitialType} />
      </div>
    );
  }

  /* ───────── PROJECT VIDEOS PAGE ───────── */
  if (page.type === 'project-videos') {
    return (
      <div className="relative" style={{ background: '#F3EFE6' }}>
        <Header {...commonHeaderProps} currentPage="project-videos" />
        <ProjectVideosPage onNavigateHome={navigateHome} onOpenQuote={openQuote} onNavigateToContact={navigateToContact} />
        <Footer
          onNavigateToSection={navigateToSection}
          onNavigateToProjects={() => navigateToProjects()}
          onNavigateToAbout={navigateToAbout}
          onNavigateToServices={navigateToServices}
          onNavigateToContact={navigateToContact}
          onNavigateToResources={navigateToResources}
        />
        <FloatingControls />
        <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} initialType={quoteInitialType} />
      </div>
    );
  }

  /* ───────── 3D RENDERS PAGE ───────── */
  if (page.type === '3d-renders') {
    return (
      <ThreeDRendersPage
        onNavigateHome={navigateHome}
        onNavigateToAbout={navigateToAbout}
        onNavigateToServices={navigateToServices}
        onNavigateToPremiumConstruction={navigateToPremiumConstruction}
        onNavigateToCivilLabour={navigateToCivilLabour}
        onNavigateToProjects={() => navigateToProjects()}
        onNavigateToProjectPhotos={navigateToProjectPhotos}
        onNavigateToProjectVideos={navigateToProjectVideos}
        onNavigateTo3DRenders={navigateTo3DRenders}
        onNavigateToAssetsManpower={navigateToAssetsManpower}
        onNavigateToContact={navigateToContact}
        onNavigateToResources={navigateToResources}
        onOpenQuote={openQuote}
      />
    );
  }

  /* ───────── HOME PAGE ───────── */
  return (
    <div className="bg-[#131D23] text-[#EDE3D3] min-h-screen relative selection:bg-[#9A6048]/30 selection:text-[#EDE3D3]">
      {/* Top Fixed Header */}
      <Header
        {...commonHeaderProps}
        activeSection={activeSection}
        currentPage="home"
      />

      {/* Main Page Flow */}
      <main>
        <Hero onOpenQuote={openQuote} onNavigateToProjects={navigateToProjectPhotos} />
        <About onOpenQuote={openQuote} />
        <OurExpertise onOpenQuote={openQuote} onNavigateToProjects={() => navigateToProjects()} onNavigateToServices={navigateToServices} />
        <BrandMarquee />
        <YearsOfExcellence onNavigateToAbout={navigateToAbout} />
        <PremiumPackageBanner onNavigateToPremiumConstruction={navigateToPremiumConstruction} onOpenQuote={openQuote} />
        <OurWorkShowcase onNavigateToProjects={navigateToProjectPhotos} />
        <ProjectVideosSection onNavigateToResources={navigateToProjectVideos} />
        <ThreeDRendersSection onNavigateTo3DRenders={navigateTo3DRenders} />
        <Testimonials />
        <ReadyToStartBanner onNavigateToContact={navigateToContact} onOpenQuote={openQuote} />
      </main>

      {/* Footer */}
      <Footer
        onNavigateToSection={navigateToSection}
        onNavigateToProjects={() => navigateToProjects()}
        onNavigateToServices={navigateToServices}
        onNavigateToAbout={navigateToAbout}
        onNavigateToContact={navigateToContact}
        onNavigateToResources={navigateToResources}
      />

      {/* Floating Call / WhatsApp Controls */}
      <FloatingControls />

      {/* Popups & Modals */}
      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} initialType={quoteInitialType} />
      <EnquiryPopupModal isOpen={enquiryModalOpen} onClose={() => setEnquiryModalOpen(false)} />
      <PrivacyTermsModal type={legalModalType} onClose={() => setLegalModalType(null)} />
    </div>
  );
};

export default App;
