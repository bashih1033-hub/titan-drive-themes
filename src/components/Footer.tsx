import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import titanLogoCompact from '@/assets/titan-logo-compact.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-hero text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <Link to="/" className="inline-block">
                <img 
                  src={titanLogoCompact} 
                  alt="Titan Trucking School - Professional CDL Training"
                  className="h-16 w-auto object-contain filter brightness-110"
                  loading="lazy"
                />
              </Link>
            </div>
            <p className="text-sm opacity-90 mb-4">
              Minnesota's premier CDL training school. Get your commercial driver's license 
              with expert instruction and hands-on training.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground hover:text-secondary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground hover:text-secondary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground hover:text-secondary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground hover:text-secondary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 text-secondary" />
                <div>
                  <p className="text-sm">1821 University Ave W ste 464-1</p>
                  <p className="text-sm">St. Paul, MN 55104</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary" />
                <a href="tel:6126991403" className="text-sm hover:text-secondary transition-colors">
                  (612) 699-1403
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-secondary" />
                <a href="mailto:info@titantruckingschool.com" className="text-sm hover:text-secondary transition-colors">
                  info@titantruckingschool.com
                </a>
              </div>
            </div>
            <div className="mt-4">
              <h5 className="font-medium mb-2">Business Hours</h5>
              <p className="text-sm opacity-90">Monday - Friday: 9:00 AM - 5:00 PM</p>
              <p className="text-sm opacity-90">Saturday: 10:00 AM - 2:00 PM</p>
              <p className="text-sm opacity-90">Sunday: Office Closed (Training Available)</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link to="/programs" className="text-sm hover:text-secondary transition-colors">CDL Programs</Link></li>
              <li><Link to="/endorsements" className="text-sm hover:text-secondary transition-colors">Endorsements</Link></li>
              <li><Link to="/blog" className="text-sm hover:text-secondary transition-colors">Blog & Resources</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-secondary transition-colors">Contact Us</Link></li>
              <li><Link to="/faq" className="text-sm hover:text-secondary transition-colors">FAQ</Link></li>
              <li><Link to="/minneapolis" className="text-sm hover:text-secondary transition-colors">Minneapolis CDL Training</Link></li>
              <li><Link to="/st-paul" className="text-sm hover:text-secondary transition-colors">St. Paul CDL Training</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Training Programs</h4>
            <ul className="space-y-2">
              <li><Link to="/programs#class-a" className="text-sm hover:text-secondary transition-colors">Class A CDL</Link></li>
              <li><Link to="/programs#class-b" className="text-sm hover:text-secondary transition-colors">Class B CDL</Link></li>
              <li><Link to="/programs#refresher" className="text-sm hover:text-secondary transition-colors">CDL Refresher</Link></li>
              <li><Link to="/endorsements/hazmat" className="text-sm hover:text-secondary transition-colors">HazMat Endorsement</Link></li>
              <li><Link to="/endorsements/passenger" className="text-sm hover:text-secondary transition-colors">Passenger Endorsement</Link></li>
              <li><Link to="/endorsements/school-bus" className="text-sm hover:text-secondary transition-colors">School Bus</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-light/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm opacity-90">
              © {currentYear} Titan Trucking School. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-sm hover:text-secondary transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-sm hover:text-secondary transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;