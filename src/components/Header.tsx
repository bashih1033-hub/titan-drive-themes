import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import titanLogoFull from '@/assets/titan-logo-full.png';
import titanLogoCompact from '@/assets/titan-logo-compact.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

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
    <>
      {/* Sticky Contact Bar - Enhanced */}
      <div className="bg-gradient-to-r from-primary via-blue-600 to-secondary text-primary-foreground py-3 sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <span className="hidden md:inline">📍 St. Paul, Minnesota</span>
              <span className="hidden lg:inline">⏰ Mon-Fri: 9AM-5PM, Sat: 10AM-2PM</span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <a 
                href="tel:6126991403" 
                className="flex items-center space-x-2 hover:text-yellow-300 transition-colors font-bold text-base sm:text-lg bg-white/10 px-3 sm:px-4 py-2 rounded-lg hover:bg-white/20"
              >
                <Phone className="h-5 w-5 animate-pulse" />
                <span>(612) 699-1403</span>
              </a>
              <span className="hidden sm:inline text-xs sm:text-sm bg-yellow-400 text-black px-3 py-1 rounded font-semibold">
                Free Consultation
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Non-Sticky Header */}
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
    </>
  );
};

export default Header;