import { useEffect, ReactNode } from 'react';
import { useNavigationType, useLocation } from 'react-router-dom';

interface RouterWithScrollControlProps {
  children: ReactNode;
}

const RouterWithScrollControl = ({ children }: RouterWithScrollControlProps) => {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    // Always scroll to top on route changes, regardless of navigation type
    const scrollToTop = () => {
      // Multiple scroll attempts to ensure it works
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      
      // Force scroll with requestAnimationFrame for better reliability
      requestAnimationFrame(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      });
    };

    // Immediate scroll
    scrollToTop();

    // Additional scroll after a short delay to override any browser restoration
    const timeoutId = setTimeout(scrollToTop, 1);
    
    // Cleanup
    return () => clearTimeout(timeoutId);
  }, [location.pathname]);

  // Also handle hash changes separately
  useEffect(() => {
    if (location.hash) {
      // First scroll to top, then to hash element
      window.scrollTo(0, 0);
      
      setTimeout(() => {
        const element = document.getElementById(location.hash.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location.hash]);

  return <>{children}</>;
};

export default RouterWithScrollControl;