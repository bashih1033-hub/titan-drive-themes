import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  const location = useLocation();
  
  // Generate breadcrumbs from URL path if no custom items provided
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    if (items) return items;
    
    const pathSegments = location.pathname.split('/').filter(segment => segment);
    const breadcrumbs: BreadcrumbItem[] = [];
    
    // Add home
    breadcrumbs.push({ name: 'Home', href: '/' });
    
    // Generate breadcrumbs from path
    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      
      // Convert segment to readable name
      let name = segment;
      switch (segment) {
        case 'programs':
          name = 'CDL Programs';
          break;
        case 'about':
          name = 'About Us';
          break;
        case 'blog':
          name = 'Blog & Resources';
          break;
        case 'contact':
          name = 'Contact Us';
          break;
        case 'endorsements':
          name = 'CDL Endorsements';
          break;
        case 'faq':
          name = 'Frequently Asked Questions';
          break;
        case 'minneapolis':
          name = 'Minneapolis CDL Training';
          break;
        case 'st-paul':
          name = 'St. Paul CDL Training';
          break;
        case 'hazmat':
          name = 'HazMat Endorsement';
          break;
        case 'passenger':
          name = 'Passenger Endorsement';
          break;
        case 'school-bus':
          name = 'School Bus Endorsement';
          break;
        default:
          // Convert kebab-case to title case
          name = segment
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
      }
      
      breadcrumbs.push({ name, href: currentPath });
    });
    
    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();
  
  // Don't show breadcrumbs on home page
  if (location.pathname === '/') {
    return null;
  }

  // Generate structured data for breadcrumbs
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((breadcrumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": breadcrumb.name,
      "item": `${window.location.origin}${breadcrumb.href}`
    }))
  };

  return (
    <>
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} 
      />
      
      <nav 
        aria-label="Breadcrumb" 
        className="bg-background/95 backdrop-blur-sm border-b border-border/50 py-3"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-sm">
            {breadcrumbs.map((breadcrumb, index) => (
              <li key={breadcrumb.href} className="flex items-center">
                {index === 0 && (
                  <Home className="h-4 w-4 text-muted-foreground mr-2" />
                )}
                
                {index < breadcrumbs.length - 1 ? (
                  <>
                    <Link
                      to={breadcrumb.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {breadcrumb.name}
                    </Link>
                    <ChevronRight className="h-4 w-4 text-muted-foreground mx-2" />
                  </>
                ) : (
                  <span className="text-foreground font-medium" aria-current="page">
                    {breadcrumb.name}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
};

export default Breadcrumb;