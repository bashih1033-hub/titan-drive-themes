import { useEffect } from 'react';

export const useScrollToTop = (trigger?: any) => {
  useEffect(() => {
    // Immediate scroll to top
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Additional scroll with requestAnimationFrame for reliability
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });
    
    // Final smooth scroll after a tiny delay
    const timeoutId = setTimeout(() => {
      if (window.scrollY > 0) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    }, 10);

    return () => clearTimeout(timeoutId);
  }, [trigger]);
};

export default useScrollToTop;