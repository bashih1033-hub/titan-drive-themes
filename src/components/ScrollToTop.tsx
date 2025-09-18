import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Force immediate scroll to top to prevent position persistence
    // Using both immediate and delayed scrolls to ensure it works
    window.scrollTo(0, 0);
    
    if (hash) {
      // Handle hash navigation after a delay
      setTimeout(() => {
        const element = document.getElementById(hash.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          // If hash element not found, ensure we're at top
          window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        }
      }, 150);
    } else {
      // No hash - ensure we scroll to top with multiple methods
      // Immediate scroll (no animation)
      window.scrollTo(0, 0);
      
      // Additional scroll with slight delay to override any restoration
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }, 10);
      
      // Final smooth scroll for better UX
      setTimeout(() => {
        if (window.scrollY > 0) {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }
      }, 50);
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;