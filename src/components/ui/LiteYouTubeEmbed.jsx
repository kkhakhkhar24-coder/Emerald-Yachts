import React, { useState } from 'react';

// Drop-in replacement for a YouTube <iframe>. Until the visitor presses play it renders
// only the video thumbnail, so pages don't download YouTube's player (~1 MB of script
// per video) on load. Accepts the same props as the iframe it replaces.

function getVideoId(src) {
  if (!src) return null;
  const m = String(src).match(/(?:youtube(?:-nocookie)?\.com\/embed\/|youtu\.be\/|[?&]v=)([A-Za-z0-9_-]{11})/);
  return m ? m[1] : null;
}

function withAutoplay(src) {
  const s = String(src);
  if (/[?&]autoplay=/.test(s)) return s.replace(/([?&]autoplay=)0/, '$11');
  return s + (s.includes('?') ? '&' : '?') + 'autoplay=1';
}

const LiteYouTubeEmbed = ({ src, title, className, style, ...iframeProps }) => {
  const [active, setActive] = useState(false);
  const id = getVideoId(src);

  if (!id || active) {
    return (
      <iframe
        {...iframeProps}
        src={id ? withAutoplay(src) : src}
        title={title}
        className={className}
        style={style}
        loading="lazy"
        allow={iframeProps.allow || 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'}
        allowFullScreen
      />
    );
  }

  const label = title ? `Play video: ${title}` : 'Play video';
  return (
    <button
      type="button"
      onClick={() => setActive(true)}
      aria-label={label}
      title={label}
      className={`group relative block overflow-hidden bg-black cursor-pointer ${className || ''}`}
      style={{
        ...(iframeProps.width ? { width: /^\d+$/.test(String(iframeProps.width)) ? `${iframeProps.width}px` : iframeProps.width } : {}),
        ...(iframeProps.height ? { height: /^\d+$/.test(String(iframeProps.height)) ? `${iframeProps.height}px` : iframeProps.height } : {}),
        ...(style || {}),
        padding: 0,
        border: 0,
      }}
    >
      <img
        src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
        alt={title || 'Video thumbnail'}
        loading="lazy"
        decoding="async"
        width="480"
        height="360"
        className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
      />
      <span className="absolute inset-0 flex items-center justify-center">
        <svg viewBox="0 0 68 48" width="68" height="48" aria-hidden="true">
          <path d="M66.5 7.7a8.5 8.5 0 0 0-6-6C55.3.3 34 .3 34 .3s-21.3 0-26.5 1.4a8.5 8.5 0 0 0-6 6C.1 13 .1 24 .1 24s0 11 1.4 16.3a8.5 8.5 0 0 0 6 6C12.7 47.7 34 47.7 34 47.7s21.3 0 26.5-1.4a8.5 8.5 0 0 0 6-6C67.9 35 67.9 24 67.9 24s0-11-1.4-16.3z" fill="#f00" className="group-hover:opacity-90" />
          <path d="M45 24 27 14v20z" fill="#fff" />
        </svg>
      </span>
    </button>
  );
};

export default LiteYouTubeEmbed;
