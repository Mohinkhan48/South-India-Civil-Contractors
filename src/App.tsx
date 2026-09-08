import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { KarnatakaPresence } from './components/KarnatakaPresence';
import { Projects } from './components/Projects';
import { WhyUs } from './components/WhyUs';
import { Process } from './components/Process';
import { CostEstimator } from './components/CostEstimator';
import { Testimonials } from './components/Testimonials';
import { CTABanner } from './components/CTABanner';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingControls } from './components/FloatingControls';
import { QuoteModal } from './components/QuoteModal';
import { PrivacyTermsModal } from './components/PrivacyTermsModal';
import { ProjectsPage } from './components/ProjectsPage';
import { ProjectDetailPage } from './components/ProjectDetailPage';
import { ServiceDetailPage } from './components/ServiceDetailPage';
import { ServicesPage } from './components/ServicesPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { ResourcesPage } from './components/ResourcesPage';
import { PremiumConstructionPage } from './components/PremiumConstructionPage';
import { NotFoundPage } from './components/NotFoundPage';
import { BrandMarquee } from './components/BrandMarquee';
import { siteConfig } from './config/site';

export type AppPage =
  | { type: 'home' }
  | { type: 'about' }
  | { type: 'services' }
  | { type: 'premium-construction' }
  | { type: 'service-detail'; slug: string }
  | { type: 'projects'; initialCity?: string }
  | { type: 'project-detail'; id: string }
  | { type: 'resources'; initialSectionId?: string }
  | { type: 'contact' }
  | { type: '404' };

export const App: React.FC = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
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
      if (path.startsWith('/services/')) {
        const slug = path.replace('/services/', '');
        return { type: 'service-detail', slug };
      }
      if (path === '/projects') return { type: 'projects' };
      if (path.startsWith('/projects/')) {
        const id = path.replace('/projects/', '');
        return { type: 'project-detail', id };
      }
      if (path === '/resources') return { type: 'resources', initialSectionId: hash || undefined };
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

  // Auto-open enquiry popup after 5 seconds — once per session
  useEffect(() => {
    const POPUP_KEY = 'sibc_enquiry_shown';
    if (sessionStorage.getItem(POPUP_KEY)) return;
    const timer = setTimeout(() => {
      setQuoteModalOpen(true);
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
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll, .reveal-scale');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
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

  const openQuote = useCallback(() => setQuoteModalOpen(true), []);

  /* ───────── ABOUT PAGE ───────── */
  if (page.type === 'about') {
    return (
      <div className="bg-[#131D23] text-[#EDE3D3] min-h-screen relative">
        <Header
          onOpenQuote={openQuote}
          onNavigateHome={navigateHome}
          onNavigateToAbout={navigateToAbout}
          onNavigateToServices={navigateToServices}
          onNavigateToPremiumConstruction={navigateToPremiumConstruction}
          onNavigateToProjects={() => navigateToProjects()}
          onNavigateToContact={navigateToContact}
          onNavigateToResources={navigateToResources}
          onNavigateToSection={navigateToSection}
          currentPage="about"
        />
        <AboutPage onNavigateHome={navigateHome} onOpenQuote={openQuote} />
        <Footer
          onNavigateToSection={navigateToSection}
          onNavigateToProjects={() => navigateToProjects()}
          onNavigateToAbout={navigateToAbout}
          onNavigateToContact={navigateToContact}
          onNavigateToResources={navigateToResources}
        />
        <FloatingControls />
        <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
      </div>
    );
  }

  /* ───────── DEDICATED SERVICES MAIN PAGE ───────── */
  if (page.type === 'services') {
    return (
      <div className="bg-[#131D23] text-[#EDE3D3] min-h-screen relative">
        <Header
          onOpenQuote={openQuote}
          onNavigateHome={navigateHome}
          onNavigateToAbout={navigateToAbout}
          onNavigateToServices={navigateToServices}
          onNavigateToPremiumConstruction={navigateToPremiumConstruction}
          onNavigateToProjects={() => navigateToProjects()}
          onNavigateToContact={navigateToContact}
          onNavigateToResources={navigateToResources}
          onNavigateToSection={navigateToSection}
          currentPage="services"
        />
        <ServicesPage
          onNavigateHome={navigateHome}
          onOpenQuote={openQuote}
          onNavigateToServiceSlug={navigateToServiceSlug}
        />
        <Footer
          onNavigateToSection={navigateToSection}
          onNavigateToProjects={() => navigateToProjects()}
          onNavigateToServiceSlug={navigateToServiceSlug}
          onNavigateToAbout={navigateToAbout}
          onNavigateToContact={navigateToContact}
          onNavigateToResources={navigateToResources}
        />
        <FloatingControls />
        <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
      </div>
    );
  }

  /* ───────── PREMIUM CONSTRUCTION HUB PAGE ───────── */
  if (page.type === 'premium-construction') {
    return (
      <div className="bg-[#131D23] text-[#EDE3D3] min-h-screen relative">
        <Header
          onOpenQuote={openQuote}
          onNavigateHome={navigateHome}
          onNavigateToAbout={navigateToAbout}
          onNavigateToServices={navigateToServices}
          onNavigateToPremiumConstruction={navigateToPremiumConstruction}
          onNavigateToProjects={() => navigateToProjects()}
          onNavigateToContact={navigateToContact}
          onNavigateToResources={navigateToResources}
          onNavigateToSection={navigateToSection}
          currentPage="premium-construction"
        />
        <PremiumConstructionPage
          onNavigateHome={navigateHome}
          onOpenQuote={openQuote}
        />
        <Footer
          onNavigateToSection={navigateToSection}
          onNavigateToProjects={() => navigateToProjects()}
          onNavigateToServiceSlug={navigateToServiceSlug}
          onNavigateToAbout={navigateToAbout}
          onNavigateToContact={navigateToContact}
          onNavigateToResources={navigateToResources}
        />
        <FloatingControls />
        <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
      </div>
    );
  }

  /* ───────── SERVICE DETAIL PAGE ───────── */
  if (page.type === 'service-detail') {
    return (
      <div className="bg-[#131D23] text-[#EDE3D3] min-h-screen relative">
        <Header
          onOpenQuote={openQuote}
          onNavigateHome={navigateHome}
          onNavigateToAbout={navigateToAbout}
          onNavigateToServices={navigateToServices}
          onNavigateToPremiumConstruction={navigateToPremiumConstruction}
          onNavigateToProjects={() => navigateToProjects()}
          onNavigateToContact={navigateToContact}
          onNavigateToResources={navigateToResources}
          onNavigateToSection={navigateToSection}
          currentPage="services"
        />
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
          onNavigateToContact={navigateToContact}
          onNavigateToResources={navigateToResources}
        />
        <FloatingControls />
        <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
      </div>
    );
  }

  /* ───────── DEDICATED PROJECTS GALLERY PAGE ───────── */
  if (page.type === 'projects') {
    return (
      <div className="bg-[#131D23] text-[#EDE3D3] min-h-screen relative">
        <Header
          onOpenQuote={openQuote}
          onNavigateHome={navigateHome}
          onNavigateToAbout={navigateToAbout}
          onNavigateToServices={navigateToServices}
          onNavigateToPremiumConstruction={navigateToPremiumConstruction}
          onNavigateToProjects={() => navigateToProjects()}
          onNavigateToContact={navigateToContact}
          onNavigateToResources={navigateToResources}
          onNavigateToSection={navigateToSection}
          currentPage="projects"
        />
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
          onNavigateToContact={navigateToContact}
          onNavigateToResources={navigateToResources}
        />
        <FloatingControls />
        <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
      </div>
    );
  }

  /* ───────── PROJECT DETAIL CASE STUDY PAGE ───────── */
  if (page.type === 'project-detail') {
    return (
      <div className="bg-[#131D23] text-[#EDE3D3] min-h-screen relative">
        <Header
          onOpenQuote={openQuote}
          onNavigateHome={navigateHome}
          onNavigateToAbout={navigateToAbout}
          onNavigateToServices={navigateToServices}
          onNavigateToPremiumConstruction={navigateToPremiumConstruction}
          onNavigateToProjects={() => navigateToProjects()}
          onNavigateToContact={navigateToContact}
          onNavigateToResources={navigateToResources}
          onNavigateToSection={navigateToSection}
          currentPage="project-detail"
        />
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
          onNavigateToContact={navigateToContact}
          onNavigateToResources={navigateToResources}
        />
        <FloatingControls />
        <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
      </div>
    );
  }

  /* ───────── RESOURCES PAGE ───────── */
  if (page.type === 'resources') {
    return (
      <div className="bg-[#131D23] text-[#EDE3D3] min-h-screen relative">
        <Header
          onOpenQuote={openQuote}
          onNavigateHome={navigateHome}
          onNavigateToAbout={navigateToAbout}
          onNavigateToServices={navigateToServices}
          onNavigateToPremiumConstruction={navigateToPremiumConstruction}
          onNavigateToProjects={() => navigateToProjects()}
          onNavigateToContact={navigateToContact}
          onNavigateToResources={navigateToResources}
          onNavigateToSection={navigateToSection}
          currentPage="resources"
        />
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
          onNavigateToContact={navigateToContact}
          onNavigateToResources={navigateToResources}
        />
        <FloatingControls />
        <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
      </div>
    );
  }

  /* ───────── CONTACT PAGE ───────── */
  if (page.type === 'contact') {
    return (
      <div className="bg-[#131D23] text-[#EDE3D3] min-h-screen relative">
        <Header
          onOpenQuote={openQuote}
          onNavigateHome={navigateHome}
          onNavigateToAbout={navigateToAbout}
          onNavigateToServices={navigateToServices}
          onNavigateToPremiumConstruction={navigateToPremiumConstruction}
          onNavigateToProjects={() => navigateToProjects()}
          onNavigateToContact={navigateToContact}
          onNavigateToResources={navigateToResources}
          onNavigateToSection={navigateToSection}
          currentPage="contact"
        />
        <ContactPage onNavigateHome={navigateHome} />
        <Footer
          onNavigateToSection={navigateToSection}
          onNavigateToProjects={() => navigateToProjects()}
          onNavigateToAbout={navigateToAbout}
          onNavigateToContact={navigateToContact}
          onNavigateToResources={navigateToResources}
        />
        <FloatingControls />
        <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
      </div>
    );
  }

  /* ───────── 404 NOT FOUND PAGE ───────── */
  if (page.type === '404') {
    return (
      <div className="bg-[#131D23] text-[#EDE3D3] min-h-screen relative">
        <Header
          onOpenQuote={openQuote}
          onNavigateHome={navigateHome}
          onNavigateToAbout={navigateToAbout}
          onNavigateToServices={navigateToServices}
          onNavigateToPremiumConstruction={navigateToPremiumConstruction}
          onNavigateToProjects={() => navigateToProjects()}
          onNavigateToContact={navigateToContact}
          onNavigateToResources={navigateToResources}
          onNavigateToSection={navigateToSection}
          currentPage="404"
        />
        <NotFoundPage
          onNavigateHome={navigateHome}
          onNavigateToServices={navigateToServices}
          onNavigateToContact={navigateToContact}
        />
        <Footer
          onNavigateToSection={navigateToSection}
          onNavigateToProjects={() => navigateToProjects()}
          onNavigateToAbout={navigateToAbout}
          onNavigateToContact={navigateToContact}
          onNavigateToResources={navigateToResources}
        />
        <FloatingControls />
        <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
      </div>
    );
  }

  /* ───────── HOME PAGE ───────── */
  return (
    <div className="bg-[#131D23] text-[#EDE3D3] min-h-screen relative selection:bg-[#9A6048]/30 selection:text-[#EDE3D3]">
      {/* Top Fixed Header */}
      <Header
        onOpenQuote={openQuote}
        activeSection={activeSection}
        onNavigateHome={navigateHome}
        onNavigateToAbout={navigateToAbout}
        onNavigateToServices={navigateToServices}
        onNavigateToPremiumConstruction={navigateToPremiumConstruction}
        onNavigateToProjects={() => navigateToProjects()}
        onNavigateToContact={navigateToContact}
        onNavigateToResources={navigateToResources}
        onNavigateToSection={navigateToSection}
        currentPage="home"
      />

      {/* Main Page Flow */}
      <main>
        <Hero onOpenQuote={openQuote} onNavigateToProjects={() => navigateToProjects()} />
        <About onOpenQuote={openQuote} />
        <Process onOpenQuote={openQuote} />
        <Services onOpenQuote={openQuote} onNavigateToServiceSlug={navigateToServiceSlug} />
        <BrandMarquee />
        <KarnatakaPresence onSelectCity={(city) => navigateToProjects(city)} onOpenQuote={openQuote} />
        <Projects
          onOpenQuote={openQuote}
          onNavigateToProjects={() => navigateToProjects()}
          onNavigateToProjectDetail={navigateToProjectDetail}
        />
        <WhyUs />
        <CostEstimator onOpenQuote={openQuote} />
        <Testimonials />
        <CTABanner onOpenQuote={openQuote} />
        <Contact />
      </main>

      {/* Footer */}
      <Footer
        onNavigateToSection={navigateToSection}
        onNavigateToProjects={() => navigateToProjects()}
        onNavigateToServiceSlug={navigateToServiceSlug}
        onNavigateToAbout={navigateToAbout}
        onNavigateToContact={navigateToContact}
        onNavigateToResources={navigateToResources}
      />

      {/* Floating Call / WhatsApp Controls */}
      <FloatingControls />

      {/* Popups & Modals */}
      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
      <PrivacyTermsModal type={legalModalType} onClose={() => setLegalModalType(null)} />
    </div>
  );
};

export default App;
