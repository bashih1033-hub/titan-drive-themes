import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import titanLogoFull from '@/assets/titan-logo-full.png';
import titanLogoCompact from '@/assets/titan-logo-compact.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show header when scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsVisible(true);
      } 
      // Hide header when scrolling down (and not at the top)
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setIsMenuOpen(false); // Close mobile menu when hiding
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Programs', href: '/programs' },
    { name: 'Endorsements', href: '/endorsements' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transform transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      {/* Contact Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <span>📍 St. Paul, Minnesota</span>
              <span>⏰ Mon-Fri: 9AM-5PM, Sat: 10AM-2PM</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="tel:6126991403" className="flex items-center space-x-1 hover:text-secondary transition-colors">
                <Phone className="h-4 w-4" />
                <span>(612) 699-1403</span>
              </a>
              <span className="hidden sm:inline">Call for Free Consultation</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              {/* Desktop Logo */}
              <img 
                src={titanLogoFull} 
                alt="Titan Trucking School - Professional CDL Training"
                className="hidden sm:block h-16 w-auto max-w-[240px] object-contain"
                loading="eager"
              />
              {/* Mobile Logo */}
              <img 
                src={titanLogoCompact} 
                alt="Titan Trucking School"
                className="sm:hidden h-12 w-auto object-contain"
                loading="eager"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(item.href) 
                      ? 'text-primary border-b-2 border-primary' 
                      : 'text-foreground'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button variant="secondary" size="sm" className="ml-4">
                Enroll Today
              </Button>
            </nav>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-md text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border">
            <div className="px-4 py-3 space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-primary bg-primary/10 rounded-md'
                      : 'text-foreground hover:text-primary'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-3">
                <Button variant="secondary" className="w-full">
                  Enroll Today
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;