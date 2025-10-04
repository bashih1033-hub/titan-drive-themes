import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const StickyFloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 500px down
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isDismissed) return null;

  return (
    <div 
      className={cn(
        "fixed bottom-6 right-6 z-40 transition-all duration-300 transform",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      )}
    >
      <div className="relative">
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute -top-2 -right-2 bg-background border border-border rounded-full p-1 hover:bg-accent transition-colors"
          aria-label="Dismiss"
        >
          <X className="h-3 w-3" />
        </button>
        
        <a href="tel:6126991403">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-2xl hover:shadow-3xl px-8 py-6 text-lg font-bold animate-pulse hover:animate-none"
          >
            <Phone className="mr-2 h-6 w-6" />
            <div className="flex flex-col items-start">
              <span>Call Now</span>
              <span className="text-xs font-normal opacity-90">(612) 699-1403</span>
            </div>
          </Button>
        </a>
      </div>
    </div>
  );
};

export default StickyFloatingCTA;
