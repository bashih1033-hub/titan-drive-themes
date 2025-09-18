import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: "how-to-get-cdl-minnesota",
      title: "How to Get Your CDL in Minnesota: Complete Step-by-Step Guide",
      excerpt: "Everything you need to know about getting your commercial driver's license in Minnesota, from requirements to testing and job opportunities.",
      author: "Mike Thompson",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Getting Started",
      featured: true
    },
    {
      id: "cdl-permit-minnesota",
      title: "How to Get Your CDL Permit in Minnesota: Requirements & Process",
      excerpt: "Learn the requirements, costs, and step-by-step process to obtain your commercial learner's permit in Minnesota.",
      author: "Sarah Martinez",
      date: "March 10, 2024", 
      readTime: "6 min read",
      category: "Permits & Licensing"
    },
    {
      id: "dot-medical-card-guide",
      title: "Steps to Get a DOT Medical Card: What Every CDL Driver Needs to Know",
      excerpt: "Complete guide to obtaining your DOT medical certificate, including what to expect during your physical exam and how to maintain certification.",
      author: "Dr. Jennifer Wilson",
      date: "March 5, 2024",
      readTime: "7 min read", 
      category: "Health & Safety"
    },
    {
      id: "hazmat-endorsement-process",
      title: "HazMat Endorsement: Process & Requirements for Minnesota Drivers",
      excerpt: "Detailed breakdown of getting your hazardous materials endorsement, including background checks, testing, and career benefits.",
      author: "Mike Thompson",
      date: "February 28, 2024",
      readTime: "9 min read",
      category: "Endorsements"
    },
    {
      id: "class-a-vs-class-b-cdl",
      title: "Class A vs Class B: Which CDL Is Right For Your Career Goals?",
      excerpt: "Compare Class A and Class B CDLs to determine which license type best fits your career goals, salary expectations, and lifestyle preferences.",
      author: "David Johnson",
      date: "February 20, 2024",
      readTime: "10 min read",
      category: "CDL Types"
    },
    {
      id: "cdl-road-test-minnesota",
      title: "What to Expect on Your CDL Road Test in Minnesota",
      excerpt: "Insider tips and detailed breakdown of the Minnesota CDL road test, including pre-trip inspection, skills test, and on-road driving evaluation.",
      author: "Sarah Martinez",
      date: "February 15, 2024",
      readTime: "12 min read",
      category: "Testing & Exams"
    },
    {
      id: "eldt-theory-training-prep",
      title: "How to Prepare for ELDT Theory Training: Study Guide & Tips",
      excerpt: "Master the Entry-Level Driver Training theory requirements with our comprehensive study guide and preparation strategies.",
      author: "Mike Thompson", 
      date: "February 8, 2024",
      readTime: "8 min read",
      category: "Training"
    },
    {
      id: "cdl-job-prospects-minnesota",
      title: "Job Prospects for CDL Drivers in Minnesota: Salary & Opportunities",
      excerpt: "Explore the thriving job market for CDL drivers in Minnesota, including salary ranges, top employers, and growth projections for 2024.",
      author: "Lisa Chen",
      date: "January 30, 2024", 
      readTime: "11 min read",
      category: "Career & Jobs"
    }
  ];

  const categories = [
    "All Posts",
    "Getting Started", 
    "Permits & Licensing",
    "Training",
    "Testing & Exams",
    "Endorsements",
    "Health & Safety",
    "Career & Jobs",
    "CDL Types"
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <>
      <SEOHead 
        title="CDL Training Blog Near Me - Tips, Guides & Resources Minneapolis St. Paul MN | Titan Trucking School"
        description="Expert CDL training advice for Minneapolis & St. Paul area drivers. Learn about CDL requirements, testing, endorsements, Minnesota trucking jobs. Free resources from local experts."
        keywords="CDL training blog, truck driving tips, CDL requirements Minnesota, trucking career advice, CDL test preparation, trucking school resources"
        localArea="Minneapolis-St. Paul"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-4 bg-secondary text-secondary-foreground">
              Knowledge & Resources
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              CDL Training Blog
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/90">
              Expert advice, guides, and resources to help you succeed in your trucking career. 
              Learn from our experienced instructors and industry professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-muted/30 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className="text-sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                Featured Article
              </h2>
            </div>
            
            <Card className="overflow-hidden shadow-strong hover:shadow-glow transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative bg-gradient-to-br from-primary to-primary-dark h-64 lg:h-auto flex items-center justify-center overflow-hidden">
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M50 50c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10-10-4.5-10-10zm-20 0c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10-10-4.5-10-10zm-20 0c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10-10-4.5-10-10z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
                  </div>
                  
                  <div className="relative text-center p-8 z-10">
                    <Badge className="mb-4 bg-secondary text-secondary-foreground shadow-lg">
                      {featuredPost.category}
                    </Badge>
                    
                    {/* Professional featured icon */}
                    <div className="mb-4">
                      <svg className="w-20 h-20 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    
                    <p className="text-white/90 font-medium">Featured Training Guide</p>
                    <div className="mt-2 flex items-center justify-center space-x-2">
                      <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                      <span className="text-white/70 text-sm">Must Read</span>
                      <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-2 border-white/30 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 border-2 border-white/20 rounded-full"></div>
                </div>
                <div className="p-8">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-2xl lg:text-3xl mb-2 line-clamp-2">
                      {featuredPost.title}
                    </CardTitle>
                    <CardDescription className="text-lg">
                      {featuredPost.excerpt}
                    </CardDescription>
                  </CardHeader>
                  
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>

                  <Link to={`/blog/${featuredPost.id}`}>
                    <Button size="lg" className="w-full sm:w-auto">
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 lg:py-24 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Latest Articles
            </h2>
            <p className="text-lg text-muted-foreground">
              Stay up-to-date with the latest CDL training tips, industry news, and career advice
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => {
              // Professional visual elements for each category
              const getCategoryVisual = (category: string) => {
                switch (category) {
                  case "Getting Started":
                    return {
                      gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
                      icon: (
                        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                        </svg>
                      ),
                      description: "Start your CDL journey"
                    };
                  case "Permits & Licensing":
                    return {
                      gradient: "bg-gradient-to-br from-green-500 to-green-600", 
                      icon: (
                        <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      ),
                      description: "Official documentation"
                    };
                  case "Training":
                    return {
                      gradient: "bg-gradient-to-br from-purple-500 to-purple-600",
                      icon: (
                        <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      ),
                      description: "Professional education"
                    };
                  case "Testing & Exams":
                    return {
                      gradient: "bg-gradient-to-br from-orange-500 to-orange-600",
                      icon: (
                        <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                        </svg>
                      ),
                      description: "Road test preparation"
                    };
                  case "Endorsements":
                    return {
                      gradient: "bg-gradient-to-br from-yellow-500 to-yellow-600",
                      icon: (
                        <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      ),
                      description: "Specialized certifications"
                    };
                  case "Health & Safety":
                    return {
                      gradient: "bg-gradient-to-br from-red-500 to-red-600",
                      icon: (
                        <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      ),
                      description: "Medical & safety requirements"
                    };
                  case "Career & Jobs":
                    return {
                      gradient: "bg-gradient-to-br from-indigo-500 to-indigo-600",
                      icon: (
                        <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                        </svg>
                      ),
                      description: "Professional opportunities"
                    };
                  case "CDL Types":
                    return {
                      gradient: "bg-gradient-to-br from-gray-600 to-gray-700",
                      icon: (
                        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                        </svg>
                      ),
                      description: "License classifications"
                    };
                  default:
                    return {
                      gradient: "bg-gradient-to-br from-gray-500 to-gray-600",
                      icon: (
                        <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      ),
                      description: "General information"
                    };
                }
              };
              
              const categoryVisual = getCategoryVisual(post.category);
              
              return (
              <Card key={post.id} className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-1 border-border/50 overflow-hidden">
                <div className={`relative h-48 ${categoryVisual.gradient} flex items-center justify-center border-b border-border`}>
                  {/* Background pattern overlay */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative text-center z-10">
                    <Badge className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm">
                      {post.category}
                    </Badge>
                    <div className="flex justify-center mb-2">
                      {categoryVisual.icon}
                    </div>
                    <p className="text-white/80 text-xs font-medium px-4">
                      {categoryVisual.description}
                    </p>
                  </div>
                  
                  {/* Hover animation overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center space-x-2">
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <Link to={`/blog/${post.id}`}>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              );
            })
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 lg:py-24 bg-gradient-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Stay Updated with CDL Training Tips
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Subscribe to our newsletter for the latest CDL training advice, industry updates, 
            and career opportunities delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md bg-white/10 border border-white/30 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <Button variant="secondary" size="lg" className="px-6">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;