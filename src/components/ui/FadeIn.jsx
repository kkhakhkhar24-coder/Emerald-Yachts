import React, { useRef, useEffect, useLayoutEffect, useState } from 'react';

// useLayoutEffect warns during server rendering; fall back to useEffect there.
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

// Singleton IntersectionObserver for better performance
let observer = null;
const callbacks = new Map();

const getObserver = () => {
  if (typeof window === 'undefined') return null;
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const callback = callbacks.get(entry.target);
            if (callback) {
              callback();
              observer.unobserve(entry.target);
              callbacks.delete(entry.target);
            }
          }
        });
      },
      { rootMargin: "0px 0px -50px 0px" } // trigger slightly before it comes into view
    );
  }
  return observer;
};

const FadeIn = ({ children, delay = 0, direction = 'up', className = '', hover = false, style: incomingStyle = {} }) => {
  // Start visible: the prerendered HTML must paint its content immediately (otherwise
  // the Largest Contentful Paint waits for JavaScript). After mount, only elements that
  // are still below the viewport are hidden and then faded in as they scroll into view.
  const [isVisible, setIsVisible] = useState(true);
  const ref = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    const obs = getObserver();
    if (obs) {
      setIsVisible(false);
      callbacks.set(el, () => setIsVisible(true));
      obs.observe(el);
      
      return () => {
        callbacks.delete(el);
        obs.unobserve(el);
      };
    } else {
      setIsVisible(true);
    }
  }, []);

  const getTransform = () => {
    if (isVisible) return 'translate3d(0, 0, 0)';
    switch (direction) {
      case 'up': return 'translate3d(0, 40px, 0)';
      case 'down': return 'translate3d(0, -40px, 0)';
      case 'left': return 'translate3d(40px, 0, 0)';
      case 'right': return 'translate3d(-40px, 0, 0)';
      default: return 'none';
    }
  };

  const normalizedDelay = delay > 5 ? delay / 1000 : delay;

  const style = {
    opacity: isVisible ? 1 : 0,
    transform: getTransform(),
    transition: `opacity 0.8s cubic-bezier(0.25, 0.25, 0, 1) ${normalizedDelay}s, transform 0.8s cubic-bezier(0.25, 0.25, 0, 1) ${normalizedDelay}s`,
    willChange: isVisible ? 'auto' : 'opacity, transform'
  };

  const handleTransitionEnd = (e) => {
    if (e.target === ref.current && isVisible) {
      // Clear inline styles so Tailwind hover classes work without React state updates
      if (ref.current) {
        ref.current.style.transform = '';
        ref.current.style.transition = '';
      }
    }
  };

  const combinedClassName = `${className} ${hover ? 'transition-transform duration-300 hover:-translate-y-2' : ''}`.trim();

  return (
    <div 
      ref={ref} 
      style={{ ...incomingStyle, ...style }} 
      className={combinedClassName}
      onTransitionEnd={handleTransitionEnd}
    >
      {children}
    </div>
  );
};

export default FadeIn;

