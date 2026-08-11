import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, key } = useLocation();
  const navigationType = useNavigationType();
  const scrollPositions = useRef({});

  // Listen to scroll events to save scroll position for the current history entry
  useEffect(() => {
    const handleScroll = () => {
      scrollPositions.current[key] = {
        x: window.scrollX,
        y: window.scrollY
      };
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [key]);

  // Restore scroll position on back/forward navigation (POP), or scroll to top on new navigation (PUSH)
  useEffect(() => {
    if (navigationType === "POP") {
      const savedPosition = scrollPositions.current[key];
      if (savedPosition) {
        window.scrollTo(savedPosition.x, savedPosition.y);
        
        // Secondary check/scroll in case of asynchronous content layout delays
        const timeoutId = setTimeout(() => {
          window.scrollTo(savedPosition.x, savedPosition.y);
        }, 50);
        return () => clearTimeout(timeoutId);
      } else {
        window.scrollTo(0, 0);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, key, navigationType]);

  return null;
};

export default ScrollToTop;
