import React, { useState, useRef, useCallback } from 'react';
import { projectVideos } from '../data/projectVideos';

interface ProjectVideosSectionProps {
  onNavigateToResources?: () => void;
}

// Skip the first 2 videos
const featuredVideos = projectVideos.slice(2, 5);

export const ProjectVideosSection: React.FC<ProjectVideosSectionProps> = ({
  onNavigateToResources,
}) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const videoRefsMap = useRef<Map<string, HTMLVideoElement>>(new Map());

  // When any video plays, pause all other videos
  const handleVideoPlay = useCallback((playingId: string) => {
    videoRefsMap.current.forEach((videoEl, id) => {
      if (id !== playingId && !videoEl.paused) {
        videoEl.pause();
      }
    });
  }, []);

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
          {featuredVideos.map((video) => {
            const isHovered = hoveredId === video.id;
            return (
              <div
                key={video.id}
                onMouseEnter={() => setHoveredId(video.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  position: 'relative',
                  borderRadius: '18px',
                  overflow: 'hidden',
                  aspectRatio: '16/10',
                  boxShadow: isHovered ? '0 20px 50px rgba(0,0,0,0.18)' : '0 8px 28px rgba(0,0,0,0.10)',
                  transform: isHovered ? 'translateY(-5px) scale(1.01)' : 'translateY(0) scale(1)',
                  transition: 'transform 0.32s ease, box-shadow 0.32s ease',
                  background: '#1a1a1a',
                }}
              >
                <video
                  controls
                  src={video.videoUrl}
                  preload="metadata"
                  playsInline
                  ref={(el) => {
                    if (el) videoRefsMap.current.set(video.id, el);
                    else videoRefsMap.current.delete(video.id);
                  }}
                  onPlay={() => handleVideoPlay(video.id)}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block',
                  }}
                />
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
