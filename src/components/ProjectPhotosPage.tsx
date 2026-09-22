import React, { useState, useEffect } from 'react';
import { constructionImages } from '../data/constructionImages';
import {
  ArrowLeft,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  ZoomIn,
} from 'lucide-react';

interface ProjectPhotosPageProps {
  onNavigateHome: () => void;
  onOpenQuote: () => void;
}

type PhotoCategory = 'All' | 'Residential' | 'Commercial' | 'Under Construction';

const photoCategories: PhotoCategory[] = ['All', 'Residential', 'Commercial', 'Under Construction'];

// Map construction images to categories based on index for clean filtering
const categorizedPhotos = constructionImages.map((src, index) => {
  let category: PhotoCategory = 'Residential';
  if (index % 3 === 1) category = 'Commercial';
  if (index % 3 === 2) category = 'Under Construction';
  
  // Custom categorization for realistic showcase
  if (src.includes('image 1') || src.includes('image 2') || src.includes('image 3') || src.includes('image 4') || src.includes('1.01.05') || src.includes('1.01.06') || src.includes('1.01.10')) {
    category = 'Residential';
  } else if (src.includes('1.01.12') || src.includes('1.01.15') || src.includes('1.03.16')) {
    category = 'Commercial';
  } else if (src.includes('1.03.07') || src.includes('1.03.11') || src.includes('12.48')) {
    category = 'Under Construction';
  }

  return { id: `photo-${index}`, src, category, title: `Construction Project #${index + 1}` };
});

export const ProjectPhotosPage: React.FC<ProjectPhotosPageProps> = ({
  onNavigateHome,
  onOpenQuote,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<PhotoCategory>('All');
  const [visibleCount, setVisibleCount] = useState<number>(20);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Project Photos | South India Civil Contractors';
  }, []);

  const filteredPhotos =
    selectedCategory === 'All'
      ? categorizedPhotos
      : categorizedPhotos.filter((p) => p.category === selectedCategory);

  const displayedPhotos = filteredPhotos.slice(0, visibleCount);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const prevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + displayedPhotos.length) % displayedPhotos.length);
    }
  };

  const nextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % displayedPhotos.length);
    }
  };

  // Keyboard controls for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev !== null ? (prev - 1 + displayedPhotos.length) % displayedPhotos.length : null));
      }
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % displayedPhotos.length : null));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, displayedPhotos.length]);

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      
      {/* ──────────────────────────────────────────────────────────
          1. HERO HEADER BANNER (Project Photos Title)
      ────────────────────────────────────────────────────────── */}
      <header className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-[#1C3549] text-white overflow-hidden">
        {/* Subtle background graphic texture overlay */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 space-y-4">
          
          {/* Back Home Button */}
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-white/80 hover:text-white transition-colors mb-2 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Project Photos
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-white/80 font-normal max-w-2xl">
            Explore our portfolio of completed projects across various categories
          </p>
        </div>
      </header>

      {/* ──────────────────────────────────────────────────────────
          2. FILTER CATEGORIES STRIP
      ────────────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-200 sticky top-16 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 overflow-x-auto no-scrollbar">
          <div className="flex items-center justify-start gap-2 sm:gap-3 min-w-max">
            {photoCategories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setVisibleCount(20);
                  }}
                  className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer shrink-0 whitespace-nowrap ${
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
          3. MASONRY PHOTO GALLERY GRID
      ────────────────────────────────────────────────────────── */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
            {displayedPhotos.map((photo, idx) => (
              <div
                key={photo.id}
                onClick={() => openLightbox(idx)}
                className="group relative rounded-2xl overflow-hidden bg-white border border-gray-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer aspect-[4/5]"
              >
                <div className="w-full h-full overflow-hidden relative bg-gray-100">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />

                  {/* Hover Overlay with Zoom Icon */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 p-4 text-white">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                      <ZoomIn className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xs font-semibold tracking-wider uppercase bg-black/60 px-3 py-1 rounded-full">
                      {photo.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleCount < filteredPhotos.length && (
            <div className="text-center pt-12">
              <button
                onClick={() => setVisibleCount((prev) => prev + 16)}
                className="bg-[#1C3549] hover:bg-[#132838] text-white font-bold text-sm sm:text-base py-3.5 px-8 rounded-xl shadow-md transition-all duration-300 inline-flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Load More Photos</span>
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          4. FULLSCREEN LIGHTBOX MODAL
      ────────────────────────────────────────────────────────── */}
      {lightboxIndex !== null && displayedPhotos[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Left Arrow */}
          <button
            onClick={prevPhoto}
            className="absolute left-4 sm:left-8 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Previous Photo"
          >
            <ChevronLeft className="w-7 h-7 text-white" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextPhoto}
            className="absolute right-4 sm:right-8 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Next Photo"
          >
            <ChevronRight className="w-7 h-7 text-white" />
          </button>

          {/* Main Display Image */}
          <div
            className="max-w-5xl max-h-[85vh] relative flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={displayedPhotos[lightboxIndex].src}
              alt={displayedPhotos[lightboxIndex].title}
              className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl border border-white/10"
            />
            
            <div className="mt-4 text-center space-y-1 text-white">
              <span className="inline-block px-3 py-1 rounded-full bg-[#4A2328] text-xs font-bold uppercase tracking-wider text-white mb-1">
                {displayedPhotos[lightboxIndex].category}
              </span>
              <p className="text-xs sm:text-sm text-white/70 font-medium">
                Photo {lightboxIndex + 1} of {displayedPhotos.length}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ──────────────────────────────────────────────────────────
          5. BOTTOM CTA BANNER
      ────────────────────────────────────────────────────────── */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-[#1C3549] text-white text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Want to Build a Similar Masterpiece?
          </h2>
          <p className="text-sm sm:text-base text-white/80">
            Get in touch with our expert civil engineering team for a personalized consultation and project quote.
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
