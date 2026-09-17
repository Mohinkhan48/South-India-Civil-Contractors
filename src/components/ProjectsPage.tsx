import React, { useState, useEffect } from 'react';
import { constructionImages } from '../data/constructionImages';
import { ArrowLeft, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface ProjectsPageProps {
  onNavigateHome: () => void;
  onNavigateToProjectDetail?: (id: string) => void;
  onOpenQuote: () => void;
  initialCity?: string;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onNavigateHome,
  onOpenQuote,
  initialCity,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [selectedCity, setSelectedCity] = useState<string>(initialCity || 'ALL');
  const [visibleCount, setVisibleCount] = useState<number>(16);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  useEffect(() => {
    if (initialCity) {
      setSelectedCity(initialCity);
    }
  }, [initialCity]);

  useEffect(() => {
    const pageTitle = selectedCity !== 'ALL'
      ? `Construction Projects in ${selectedCity} | South India Civil Contractors`
      : 'Construction Projects | South India Civil Contractors';
    document.title = pageTitle;
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      'content',
      'Explore residential, commercial, turnkey, renovation and civil construction projects by South India Civil Contractors across South India.'
    );
  }, [selectedCity]);

  const categories = ['ALL', 'RESIDENTIAL', 'COMMERCIAL', 'TURNKEY', 'RENOVATION', 'CIVIL & STRUCTURAL'];
  const cities = ['ALL', 'Bangalore', 'Chennai', 'Hyderabad', 'Kochi', 'Mysore', 'Coimbatore'];

  const visibleImages = constructionImages.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 16, constructionImages.length));
  };

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + visibleImages.length) % visibleImages.length);
    }
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % visibleImages.length);
    }
  };

  // Keyboard navigation for Lightbox viewer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') {
        setSelectedImageIndex((prev) => (prev !== null ? (prev - 1 + visibleImages.length) % visibleImages.length : null));
      }
      if (e.key === 'ArrowRight') {
        setSelectedImageIndex((prev) => (prev !== null ? (prev + 1) % visibleImages.length : null));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, visibleImages.length]);

  return (
    <main className="min-h-screen bg-[#131D23] text-[#EDE3D3] selection:bg-[#9A6048]/40">
      
      {/* ── HEADER BANNER ── */}
      <header className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 px-4 sm:px-6 lg:px-8 border-b border-[#EDE3D3]/10 overflow-hidden bg-gradient-to-b from-[#1C1510] to-[#131D23]">
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Back Navigation */}
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 text-xs text-[#D4C9BC] hover:text-[#EDE3D3] transition-colors mb-8 group uppercase tracking-widest font-semibold"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-[#B78A55]" />
            <span>Back to Home</span>
          </button>

          {/* Tagline */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-[#9A6048]"></div>
            <span className="text-xs font-bold tracking-[0.24em] text-[#B78A55] uppercase">
              EXCELLENCE IN CIVIL CONTRACTING
            </span>
          </div>

          <div className="max-w-3xl mb-8">
            <h1 className="font-serif-heading text-4xl sm:text-5xl md:text-6xl font-bold text-[#EDE3D3] leading-[1.1] tracking-tight">
              Our Construction Projects
            </h1>
            <p className="text-sm sm:text-base text-[#D4C9BC] mt-4 leading-relaxed font-normal">
              Explore our portfolio of residential, commercial, civil and turnkey construction projects delivered across South India.
            </p>
          </div>

          {/* Category & City Filter Controls */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center flex-nowrap gap-1.5 sm:gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pb-1">
              <span className="text-[10px] font-bold text-[#B78A55] uppercase tracking-wider self-center mr-1 whitespace-nowrap shrink-0">Category:</span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 text-[11px] font-bold tracking-wider uppercase rounded-full transition-all duration-300 border whitespace-nowrap shrink-0 ${
                    activeCategory === cat
                      ? 'bg-[#9A6048] text-[#EDE3D3] border-[#9A6048] shadow-terracotta-glow'
                      : 'bg-[#45382F]/60 text-[#D4C9BC] border-[#EDE3D3]/18 hover:border-[#B78A55] hover:text-[#EDE3D3]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex items-center flex-nowrap gap-1.5 sm:gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pb-1">
              <span className="text-[10px] font-bold text-[#B78A55] uppercase tracking-wider self-center mr-1 whitespace-nowrap shrink-0">City:</span>
              {cities.map((city) => (
                <button
                  key={city}
                  onClick={() => setSelectedCity(city)}
                  className={`px-3.5 py-1.5 text-[11px] font-semibold tracking-wider uppercase rounded-full transition-all duration-300 border whitespace-nowrap shrink-0 ${
                    selectedCity === city
                      ? 'bg-[#B78A55] text-[#131D23] border-[#B78A55] font-bold'
                      : 'bg-transparent text-[#D4C9BC]/80 border-[#EDE3D3]/15 hover:border-[#EDE3D3]/40 hover:text-[#EDE3D3]'
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>
          </div>

        </div>
      </header>

      {/* ── CLEAN STRUCTURED CONSTRUCTION IMAGES GRID ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20" aria-label="Construction Images Gallery">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {visibleImages.map((imagePath, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className="group relative overflow-hidden rounded-xl bg-[#1C1510] border border-[#EDE3D3]/12 shadow-editorial-dark hover:border-[#9A6048]/80 transition-all duration-500 hover:-translate-y-1.5 cursor-pointer aspect-[4/3]"
            >
              <img
                src={imagePath}
                alt={`South India Civil Construction Project Image ${index + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              
              {/* Clean minimalist hover icon overlay */}
              <div className="absolute inset-0 bg-[#131D23]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-[#9A6048]/90 text-[#EDE3D3] flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── LOAD MORE BUTTON ── */}
        {visibleCount < constructionImages.length && (
          <div className="flex justify-center mt-12 sm:mt-16">
            <button
              onClick={handleLoadMore}
              className="group inline-flex items-center gap-2.5 bg-[#9A6048] hover:bg-[#86513B] text-[#EDE3D3] font-bold text-xs sm:text-sm tracking-[0.14em] uppercase px-10 py-4 rounded-full shadow-lg hover:shadow-terracotta-glow transition-all duration-300"
            >
              <span>LOAD MORE</span>
            </button>
          </div>
        )}
      </section>

      {/* ── FULLSCREEN LIGHTBOX MODAL ── */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-50 w-11 h-11 rounded-full bg-[#1C1510]/80 text-[#EDE3D3] border border-[#EDE3D3]/20 flex items-center justify-center hover:bg-[#9A6048] transition-colors"
            aria-label="Close image viewer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Arrow */}
          <button
            onClick={prevImage}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-[#1C1510]/80 text-[#EDE3D3] border border-[#EDE3D3]/20 flex items-center justify-center hover:bg-[#9A6048] transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          {/* Image Container */}
          <div
            className="relative max-w-5xl max-h-[85vh] overflow-hidden rounded-xl border border-[#EDE3D3]/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={visibleImages[selectedImageIndex]}
              alt={`Construction Site Image ${selectedImageIndex + 1}`}
              className="max-w-full max-h-[85vh] object-contain rounded-xl"
            />
          </div>

          {/* Next Arrow */}
          <button
            onClick={nextImage}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-[#1C1510]/80 text-[#EDE3D3] border border-[#EDE3D3]/20 flex items-center justify-center hover:bg-[#9A6048] transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-7 h-7" />
          </button>
        </div>
      )}

      {/* ── FOOTER CTA ── */}
      <footer className="bg-[#1C1510] py-16 px-4 sm:px-6 lg:px-8 border-t border-[#EDE3D3]/10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="text-xs text-[#B78A55] font-bold uppercase tracking-[0.2em]">
            READY TO START YOUR CONSTRUCTION PROJECT?
          </p>

          <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#EDE3D3]">
            Let's Build Something Lasting Together.
          </h2>

          <p className="text-xs sm:text-sm text-[#D4C9BC]/80 max-w-lg mx-auto leading-relaxed">
            Contact our engineering team today for a complimentary architectural consultation and customized Bill of Quantities (BOQ).
          </p>

          <div className="pt-2">
            <button
              onClick={onOpenQuote}
              className="bg-[#9A6048] hover:bg-[#86513B] text-[#EDE3D3] font-bold text-xs sm:text-sm tracking-wider uppercase px-8 py-3.5 rounded-full shadow-lg hover:shadow-terracotta-glow transition-all duration-300"
            >
              Request Free Consultation
            </button>
          </div>
        </div>
      </footer>

    </main>
  );
};
