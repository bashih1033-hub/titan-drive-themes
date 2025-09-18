import { Badge } from '@/components/ui/badge';

interface BlogImagePlaceholderProps {
  category: string;
  title: string;
  className?: string;
}

const BlogImagePlaceholder = ({ category, title, className = "" }: BlogImagePlaceholderProps) => {
  // Generate visual elements based on category
  const getCategoryVisuals = (category: string) => {
    switch (category) {
      case "Getting Started":
        return {
          gradient: "bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700",
          pattern: (
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" fill="none">
              <path d="M20 20L80 20L50 80Z" fill="rgba(255,255,255,0.1)" />
              <circle cx="50" cy="30" r="15" fill="rgba(255,255,255,0.05)" />
            </svg>
          ),
          icon: (
            <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          )
        };
      case "Testing & Exams":
        return {
          gradient: "bg-gradient-to-br from-orange-500 via-orange-600 to-red-600",
          pattern: (
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" fill="none">
              <rect x="20" y="20" width="60" height="60" fill="rgba(255,255,255,0.1)" rx="5" />
              <path d="M30 40L40 50L70 30" stroke="rgba(255,255,255,0.2)" strokeWidth="3" fill="none" />
            </svg>
          ),
          icon: (
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
          )
        };
      case "Training":
        return {
          gradient: "bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-600",
          pattern: (
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" fill="none">
              <rect x="25" y="30" width="50" height="40" fill="rgba(255,255,255,0.1)" rx="3" />
              <path d="M35 40L45 40M35 50L55 50M35 60L50 60" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
            </svg>
          ),
          icon: (
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          )
        };
      case "Career & Jobs":
        return {
          gradient: "bg-gradient-to-br from-indigo-500 via-indigo-600 to-purple-600",
          pattern: (
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" fill="none">
              <rect x="30" y="35" width="40" height="30" fill="rgba(255,255,255,0.1)" rx="2" />
              <circle cx="40" cy="45" r="3" fill="rgba(255,255,255,0.2)" />
              <circle cx="60" cy="45" r="3" fill="rgba(255,255,255,0.2)" />
            </svg>
          ),
          icon: (
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
            </svg>
          )
        };
      default:
        return {
          gradient: "bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800",
          pattern: (
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="20" fill="rgba(255,255,255,0.1)" />
            </svg>
          ),
          icon: (
            <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
            </svg>
          )
        };
    }
  };

  const visuals = getCategoryVisuals(category);

  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      <div className={`relative h-full ${visuals.gradient} flex items-center justify-center`}>
        {/* Background pattern */}
        <div className="absolute inset-0">
          {visuals.pattern}
        </div>
        
        {/* Geometric background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-32 h-32 border border-white/20 rounded-full -translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 border border-white/20 rounded-full translate-x-12 translate-y-12"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center p-6">
          <Badge className="mb-3 bg-white/20 text-white border-white/30 backdrop-blur-sm">
            {category}
          </Badge>
          <div className="mb-3">
            {visuals.icon}
          </div>
          <h3 className="text-white font-bold text-lg mb-2 line-clamp-2">{title}</h3>
          <div className="w-12 h-0.5 bg-white/50 mx-auto"></div>
        </div>
        
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
      </div>
    </div>
  );
};

export default BlogImagePlaceholder;