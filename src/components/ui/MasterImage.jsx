import React, { useState, useEffect, useRef } from 'react';
import { Image as ImageIcon } from 'lucide-react';

// Singleton IntersectionObserver for better performance
let imageObserver = null;
const imageCallbacks = new Map();

const getImageObserver = () => {
  if (typeof window === 'undefined') return null;
  if (!imageObserver) {
    imageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const callback = imageCallbacks.get(entry.target);
            if (callback) {
              callback();
              imageObserver.unobserve(entry.target);
              imageCallbacks.delete(entry.target);
            }
          }
        });
      },
      { rootMargin: '200px 0px' }
    );
  }
  return imageObserver;
};

const MAX_RETRIES = 2;

const MasterImage = ({
  src,
  alt = "Image",
  className = "",
  fallbackSrc = null,
  placeholderLabel = "",
  asBackground = false,
  priority = false,
  children
}) => {
  const [retryCount, setRetryCount] = useState(0);
  const [permanentError, setPermanentError] = useState(false);
  const [inView, setInView] = useState(priority);
  const ref = useRef(null);

  // Reset error/retry status if src prop changes
  useEffect(() => {
    setRetryCount(0);
    setPermanentError(false);
  }, [src]);

  useEffect(() => {
    if (priority || !asBackground) return;

    const el = ref.current;
    if (!el) return;

    const obs = getImageObserver();
    if (obs) {
      imageCallbacks.set(el, () => setInView(true));
      obs.observe(el);

      return () => {
        imageCallbacks.delete(el);
        obs.unobserve(el);
      };
    } else {
      setInView(true);
    }
  }, [priority, asBackground]);

  const handleError = () => {
    if (retryCount < MAX_RETRIES) {
      // Retry with cache-busting — handles stale Vite HMR or transient load failures
      setRetryCount(prev => prev + 1);
    } else {
      // All retries exhausted — show placeholder
      console.warn('[MasterImage] Image failed after', MAX_RETRIES, 'retries:', src, '| label:', placeholderLabel || alt);
      setPermanentError(true);
    }
  };

  // Resolve src — handle both plain string URLs and module objects ({default: url})
  const resolvedSrc = (typeof src === 'object' && src !== null && src.default) ? src.default : src;
  const hasValidSrc = !!resolvedSrc && typeof resolvedSrc === 'string' && resolvedSrc.trim() !== '' && resolvedSrc !== 'null' && resolvedSrc !== 'undefined';

  const shouldRenderPlaceholder = !hasValidSrc || (permanentError && !fallbackSrc);

  const displayLabel = placeholderLabel || alt || "IMAGE PLACEHOLDER";

  if (shouldRenderPlaceholder) {
    if (asBackground) {
      return (
        <div 
          className={`bg-navy-950 flex flex-col items-center justify-center p-6 text-center border border-navy-900 relative overflow-hidden ${className}`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-navy-900/40 via-navy-950 to-navy-950 pointer-events-none" />
          <div className="z-10 flex flex-col items-center justify-center gap-2.5 max-w-md mx-auto">
            <div className="w-12 h-12 rounded-full bg-navy-900 border border-[#c9a15c]/30 flex items-center justify-center text-[#c9a15c] mb-1 shadow-inner">
              <ImageIcon className="w-5 h-5 text-[#c9a15c]" />
            </div>
            <span className="text-[10px] font-mono tracking-widest text-[#c9a15c] font-bold uppercase px-3 py-1 bg-navy-950 rounded-full border border-[#c9a15c]/40 shadow-sm">
              [ IMAGE PLACEHOLDER ]
            </span>
            <span className="font-display text-sm font-normal text-slate-200 uppercase tracking-wider line-clamp-2">
              {displayLabel}
            </span>
          </div>
          {children}
        </div>
      );
    }

    return (
      <div 
        className={`bg-navy-950 flex flex-col items-center justify-center p-6 text-center border border-navy-900 relative overflow-hidden select-none ${className}`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900/40 via-navy-950 to-navy-950 pointer-events-none" />
        <div className="z-10 flex flex-col items-center justify-center gap-2.5 max-w-md mx-auto">
          <div className="w-12 h-12 rounded-full bg-navy-900 border border-[#c9a15c]/30 flex items-center justify-center text-[#c9a15c] mb-1 shadow-inner">
            <ImageIcon className="w-5 h-5 text-[#c9a15c]" />
          </div>
          <span className="text-[10px] font-mono tracking-widest text-[#c9a15c] font-bold uppercase px-3 py-1 bg-navy-950 rounded-full border border-[#c9a15c]/40 shadow-sm">
            [ IMAGE PLACEHOLDER ]
          </span>
          <span className="font-display text-sm font-normal text-slate-200 uppercase tracking-wider line-clamp-2">
            {displayLabel}
          </span>
        </div>
      </div>
    );
  }

  // Build final src — use fallback if permanently errored, otherwise add cache-bust for retries
  let finalSrc = permanentError && fallbackSrc ? fallbackSrc : resolvedSrc;
  if (retryCount > 0 && !permanentError) {
    // Append cache-busting param to force browser re-fetch on retry
    const separator = finalSrc.includes('?') ? '&' : '?';
    finalSrc = finalSrc + separator + 'retry=' + retryCount;
  }

  if (asBackground) {
    return (
      <div 
        ref={ref}
        className={className}
        style={{ backgroundImage: (inView && finalSrc) ? `url("${finalSrc}")` : 'none' }}
      >
        {children}
      </div>
    );
  }

  return (
    <img
      src={finalSrc}
      alt={alt}
      className={className}
      onError={handleError}
      loading={priority ? "eager" : "lazy"}
      // Lowercase on purpose: React 18 drops the camelCase `fetchPriority` prop from the DOM.
      fetchpriority={priority ? "high" : "auto"}
    />
  );
};

export default MasterImage;
