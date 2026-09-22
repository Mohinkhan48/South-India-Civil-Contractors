import React, { useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { FloatingControls } from './FloatingControls';
import { X, ChevronLeft, ChevronRight, ZoomIn, CheckCircle2 } from 'lucide-react';

interface ThreeDRendersPageProps {
  onNavigateHome: () => void;
  onNavigateToAbout: () => void;
  onNavigateToServices: () => void;
  onNavigateToPremiumConstruction: () => void;
  onNavigateToCivilLabour?: () => void;
  onNavigateToProjects: () => void;
  onNavigateToProjectPhotos?: () => void;
  onNavigateToProjectVideos: () => void;
  onNavigateTo3DRenders: () => void;
  onNavigateToAssetsManpower?: () => void;
  onNavigateToContact: () => void;
  onNavigateToResources: (sectionId?: string) => void;
  onOpenQuote: () => void;
}

export interface DetailedRenderItem {
  id: string;
  title: string;
  image: string;
}

export const detailedRenders: DetailedRenderItem[] = [
  {
    id: 'render-page-1',
    title: 'Modern Luxury Villa Elevation',
    image: '/images/renders/render_3d_1.jpg',
  },
  {
    id: 'render-page-2',
    title: 'Contemporary Multi-Tier Residence',
    image: '/images/renders/render_3d_2.jpg',
  },
  {
    id: 'render-page-3',
    title: 'Suburban Villa Elevation',
    image: '/images/renders/render_3d_3.jpg',
  },
  {
    id: 'render-page-4',
    title: 'Minimalist Bungalow Elevation',
    image: '/images/renders/render_3d_4.jpg',
  },
  {
    id: 'render-page-5',
    title: 'Ultra-Modern Cantilevered Residence',
    image: '/images/renders/render_3d_5.jpg',
  },
  {
    id: 'render-page-6',
    title: 'The Grand Contemporary Villa',
    image: '/images/The grand contemporary villa.png',
  },
  {
    id: 'render-page-7',
    title: 'Luxury Independent Villas',
    image: '/images/Luxury Independent Villas.png',
  },
  {
    id: 'render-page-8',
    title: 'Contemporary Courtyard Residence',
    image: '/images/Contemporary Courtyard Residence.png',
  },
  {
    id: 'render-page-9',
    title: 'Modern Corporate Centre 3D Elevation',
    image: '/images/Modern Corporate Centre.png',
  },
  {
    id: 'render-page-10',
    title: 'Luxury Business & Hospitality Complex',
    image: '/images/Luxury Business & Hospitality Complex.png',
  },
  {
    id: 'render-page-11',
    title: 'High-Rise Architectural Visualization',
    image: '/images/High Rise Project.png',
  },
  {
    id: 'render-page-12',
    title: 'Premium Apartment Complex Render',
    image: '/images/Apartment Project.png',
  },
  {
    id: 'render-page-13',
    title: 'Contemporary Residential Building Render',
    image: '/images/Residential Building.png',
  },
  {
    id: 'render-page-14',
    title: 'Modern Commercial Center Visualization',
    image: '/images/Commercial Building.png',
  },
  {
    id: 'render-page-15',
    title: 'Hospital & Healthcare Facility 3D Model',
    image: '/images/Hospital Project.png',
  },
  {
    id: 'render-page-16',
    title: 'Modern Hotel & Resort 3D Render',
    image: '/images/Hotel Project.png',
  },
];

export const ThreeDRendersPage: React.FC<ThreeDRendersPageProps> = ({
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
  onOpenQuote,
}) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % detailedRenders.length);
  };

  const prevImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + detailedRenders.length) % detailedRenders.length);
  };

  const currentLightboxItem = lightboxIndex !== null ? detailedRenders[lightboxIndex] : null;

  return (
    <div
      className="min-h-screen bg-[#FFFFFF] flex flex-col selection:bg-[#4A2328] selection:text-white"
      style={{
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      {/* Header */}
      <Header
        onOpenQuote={onOpenQuote}
        currentPage="3d-renders"
        onNavigateHome={onNavigateHome}
        onNavigateToAbout={onNavigateToAbout}
        onNavigateToServices={onNavigateToServices}
        onNavigateToPremiumConstruction={onNavigateToPremiumConstruction}
        onNavigateToCivilLabour={onNavigateToCivilLabour}
        onNavigateToProjects={onNavigateToProjects}
        onNavigateToProjectPhotos={onNavigateToProjectPhotos}
        onNavigateToProjectVideos={onNavigateToProjectVideos}
        onNavigateTo3DRenders={onNavigateTo3DRenders}
        onNavigateToAssetsManpower={onNavigateToAssetsManpower}
        onNavigateToContact={onNavigateToContact}
        onNavigateToResources={onNavigateToResources}
        onNavigateToSection={() => {}}
      />

      {/* Hero Banner with clearly visible light background image matching Image 2 */}
      <section className="relative pt-32 sm:pt-36 pb-16 sm:pb-20 bg-[#163048] overflow-hidden text-white border-b border-[#254664]">
        {/* Clearly visible background image lightly behind the hero text */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35 mix-blend-luminosity"
          style={{ backgroundImage: `url('/images/resources_hero.jpg')` }}
        />
        {/* Soft overlay gradient to preserve text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#163048]/85 via-[#163048]/70 to-[#163048]/85" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-xs font-medium text-[#D4C9BC] mb-4">
            <button onClick={onNavigateHome} className="hover:text-white transition-colors cursor-pointer">
              Home
            </button>
            <span>›</span>
            <button
              onClick={() => onNavigateToResources()}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Resources
            </button>
            <span>›</span>
            <span className="text-white font-semibold">3D Renders</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-3">
            3D Renders
          </h1>
          <p className="text-base sm:text-lg text-[#D4C9BC] max-w-2xl leading-relaxed">
            Explore our photorealistic 3D architectural renders and visualizations
          </p>
        </div>
      </section>

      {/* Clean 4-Column Renders Grid (PURE IMAGES ONLY - NO TEXT, NO BADGES, NO FILTER BAR) */}
      <main className="flex-grow py-12 sm:py-16 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {detailedRenders.map((renderItem, idx) => (
              <div
                key={renderItem.id}
                onClick={() => openLightbox(idx)}
                className="group relative bg-[#F9F8F6] rounded-[18px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer border border-[#EBE7DF]"
              >
                {/* Pure Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                  <img
                    src={renderItem.image}
                    alt={renderItem.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />

                  {/* Subtle Zoom Icon Hover Overlay */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/95 text-[#163048] flex items-center justify-center shadow-lg transform scale-80 group-hover:scale-100 transition-transform duration-300">
                      <ZoomIn className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Need Custom 3D Renders? CTA Banner */}
      <section className="w-full bg-[#18364B] py-16 sm:py-20 lg:py-24 text-center text-white border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Need Custom 3D Renders?
          </h2>
          <p className="text-sm sm:text-base sm:text-lg text-blue-100/80 max-w-2xl mx-auto leading-relaxed font-normal">
            We can create custom 3D visualizations tailored to your specific project requirements
          </p>
          <div className="pt-4">
            <button
              onClick={() => onNavigateToContact()}
              className="px-8 py-3.5 bg-[#4D2425] hover:bg-[#3D1A1B] text-white font-semibold text-sm sm:text-base rounded-xl transition-all duration-300 shadow-xl active:scale-95 cursor-pointer border border-white/10"
            >
              Request Custom Render
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {currentLightboxItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn">
          <div className="relative max-w-5xl w-full bg-[#163048] rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col max-h-[92vh]">
            {/* Top Bar */}
            <div className="flex items-center justify-between px-6 py-4 bg-[#0F2334] text-white border-b border-white/10">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white">{currentLightboxItem.title}</h3>
                <p className="text-xs text-[#D4C9BC]">Photorealistic 3D Architectural CAD Visualization</p>
              </div>
              <button
                onClick={closeLightbox}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Image Display */}
            <div className="relative flex-grow bg-black/80 flex items-center justify-center overflow-hidden min-h-[400px] max-h-[70vh]">
              <img
                src={currentLightboxItem.image}
                alt={currentLightboxItem.title}
                className="max-h-[70vh] w-auto max-w-full object-contain p-2"
              />

              {/* Prev Button */}
              {detailedRenders.length > 1 && (
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-black/85 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20 shadow-lg"
                  aria-label="Previous render"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}

              {/* Next Button */}
              {detailedRenders.length > 1 && (
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-black/85 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20 shadow-lg"
                  aria-label="Next render"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              )}
            </div>

            {/* Bottom Bar CTA */}
            <div className="px-6 py-4 bg-[#0F2334] text-white flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/10">
              <span className="text-xs text-[#D4C9BC]">
                Render {lightboxIndex !== null ? lightboxIndex + 1 : 1} of {detailedRenders.length}
              </span>
              <button
                onClick={() => {
                  closeLightbox();
                  onOpenQuote();
                }}
                className="px-6 py-2.5 bg-[#4A2328] hover:bg-[#602D33] text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors shadow-md flex items-center gap-2 cursor-pointer"
              >
                <span>Request 3D Design Consultation</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer & Floating Controls */}
      <Footer
        onNavigateToSection={() => {}}
        onNavigateToProjects={onNavigateToProjects}
        onNavigateToAbout={onNavigateToAbout}
        onNavigateToContact={onNavigateToContact}
        onNavigateToResources={onNavigateToResources}
      />
      <FloatingControls />
    </div>
  );
};
