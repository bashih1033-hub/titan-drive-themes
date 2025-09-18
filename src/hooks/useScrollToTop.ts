import { useEffect } from 'react';

export const useScrollToTop = (trigger?: any) => {
  useEffect(() => {
    // Small delay to ensure DOM is fully loaded
    const timeoutId = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }, 50);

    return () => clearTimeout(timeoutId);
  }, [trigger]);
};

export default useScrollToTop;