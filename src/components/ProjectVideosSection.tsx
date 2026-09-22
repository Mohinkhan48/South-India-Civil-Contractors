import React, { useState, useRef } from 'react';

interface ProjectVideosSectionProps {
  onNavigateToResources?: () => void;
}

interface VideoItem {
  id: string;
  title: string;
  thumb: string;
  src: string;
}

const videos: VideoItem[] = [
  {
    id: 'vid-1',
    title: 'Aerial Site Overview',
    thumb: '/images/video_thumb_1.png',
    src: '/videos/home video.mp4',
  },
  {
    id: 'vid-2',
    title: 'Masonry & AAC Block Work',
    thumb: '/images/video_thumb_2.png',
    src: '/videos/home video.mp4',
  },
  {
    id: 'vid-3',
    title: 'RCC Foundation Curing',
    thumb: '/images/video_thumb_3.png',
    src: '/videos/home video.mp4',
  },
];

export const ProjectVideosSection: React.FC<ProjectVideosSectionProps> = ({
  onNavigateToResources,
}) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const openVideo = (video: VideoItem) => {
    setActiveVideo(video);
  };

  const closeVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setActiveVideo(null);
  };

  return (
    <section
      id="project-videos"
      style={{
        background: '#F3EFE6',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        padding: '72px 0 80px',
        width: '100%',
      }}
    >
      <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.01em', marginBottom: '14px' }}>
            <span style={{ color: '#163048' }}>Project </span>
            <span style={{ color: '#4A2328' }}>Videos</span>
          </h2>
          <p style={{ color: '#556987', fontSize: 'clamp(0.88rem, 1.35vw, 1rem)', lineHeight: 1.65, maxWidth: '560px', margin: '0 auto' }}>
            Watch our construction journey through detailed project videos and testimonials
          </p>
        </div>

        <div className="pv-grid" style={{ marginBottom: '44px' }}>
          {videos.map((video) => {
            const isHovered = hoveredId === video.id;
            return (
              <div
                key={video.id}
                onMouseEnter={() => setHoveredId(video.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => openVideo(video)}
                style={{
                  position: 'relative',
                  borderRadius: '18px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  aspectRatio: '16/10',
                  boxShadow: isHovered ? '0 20px 50px rgba(0,0,0,0.18)' : '0 8px 28px rgba(0,0,0,0.10)',
                  transform: isHovered ? 'translateY(-5px) scale(1.01)' : 'translateY(0) scale(1)',
                  transition: 'transform 0.32s ease, box-shadow 0.32s ease',
                  background: '#1a1a1a',
                }}
              >
                <video
                  src="/videos/home video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    position: 'absolute', inset: 0, width: '100%', height: '100%',
                    objectFit: 'cover', objectPosition: 'center', display: 'block',
                    transform: isHovered ? 'scale(1.06)' : 'scale(1)',
                    transition: 'transform 0.5s ease',
                  }}
                />
                <div style={{ position: 'absolute', inset: 0, background: isHovered ? 'rgba(0,0,0,0.38)' : 'rgba(0,0,0,0.22)', transition: 'background 0.3s ease' }} />
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
                  <div style={{
                    width: isHovered ? '68px' : '56px', height: isHovered ? '68px' : '56px',
                    borderRadius: '50%', background: isHovered ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.80)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'width 0.3s ease, height 0.3s ease, background 0.3s ease',
                    boxShadow: '0 4px 24px rgba(0,0,0,0.30)', backdropFilter: 'blur(6px)',
                  }}>
                    <svg viewBox="0 0 24 24" style={{ width: isHovered ? '30px' : '22px', height: isHovered ? '30px' : '22px', marginLeft: '3px', transition: 'width 0.3s ease, height 0.3s ease' }}>
                      <path d="M5 3.5L20 12L5 20.5V3.5Z" fill={isHovered ? '#4A2328' : '#1a1a1a'} />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: 'center' }}>
          <button type="button" onClick={onNavigateToResources} className="pv-btn">
            <span>View All Videos</span>
            <span style={{ fontSize: '16px' }}>→</span>
          </button>
        </div>
      </div>

      {activeVideo && (
        <div
          onClick={closeVideo}
          style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.90)',
            zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '24px', backdropFilter: 'blur(10px)',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#111', borderRadius: '16px', overflow: 'hidden',
              width: '100%', maxWidth: '900px', position: 'relative',
              boxShadow: '0 40px 100px rgba(0,0,0,0.7)',
            }}
          >
            <button
              onClick={closeVideo}
              style={{
                position: 'absolute', top: '12px', right: '12px', zIndex: 10,
                background: 'rgba(255,255,255,0.15)', border: 'none', color: '#fff',
                width: '38px', height: '38px', borderRadius: '50%', cursor: 'pointer',
                fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                backdropFilter: 'blur(4px)', fontFamily: 'inherit',
              }}
            >
              ✕
            </button>
            <div style={{ padding: '14px 56px 14px 20px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              <p style={{ color: '#EDE3D3', fontSize: '14px', fontWeight: 600, margin: 0 }}>{activeVideo.title}</p>
            </div>
            <video
              ref={videoRef}
              src={activeVideo.src}
              autoPlay
              controls
              style={{ width: '100%', display: 'block', background: '#000', maxHeight: '70vh' }}
            />
          </div>
        </div>
      )}

      <style>{`
        .pv-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        @media (max-width: 768px) { .pv-grid { grid-template-columns: 1fr; } }
        @media (min-width: 769px) and (max-width: 1024px) { .pv-grid { grid-template-columns: repeat(2, 1fr); } }
        .pv-btn { display: inline-flex; align-items: center; gap: 8px; background: #4A2328; color: #fff; font-weight: 600; font-size: 15px; padding: 13px 32px; border-radius: 8px; border: none; cursor: pointer; letter-spacing: 0.01em; box-shadow: 0 4px 16px rgba(74,35,40,0.22); transition: background 0.25s ease, transform 0.2s ease, box-shadow 0.25s ease; font-family: inherit; }
        .pv-btn:hover { background: #3a1a1e; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(74,35,40,0.32); }
      `}</style>
    </section>
  );
};

export default ProjectVideosSection;
