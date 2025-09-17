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
        title="CDL Training Blog - Tips, Guides & Resources | Titan Trucking School"
        description="Expert CDL training advice, guides, and resources from Minnesota's premier trucking school. Learn about CDL requirements, testing, endorsements, and career opportunities."
        keywords="CDL training blog, truck driving tips, CDL requirements Minnesota, trucking career advice, CDL test preparation, trucking school resources"
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
                <div className="bg-gradient-subtle h-64 lg:h-auto flex items-center justify-center">
                  <div className="text-center p-8">
                    <Badge className="mb-4 bg-secondary text-secondary-foreground">
                      {featuredPost.category}
                    </Badge>
                    <div className="text-6xl mb-4">📖</div>
                    <p className="text-muted-foreground">Featured Guide</p>
                  </div>
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
            {regularPosts.map((post, index) => (
              <Card key={post.id} className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-1 border-border/50">
                <div className="bg-gradient-subtle h-48 flex items-center justify-center border-b border-border">
                  <div className="text-center">
                    <Badge className="mb-2 bg-primary/10 text-primary border-primary/20">
                      {post.category}
                    </Badge>
                    <div className="text-4xl">
                      {post.category === "Getting Started" && "🚀"}
                      {post.category === "Permits & Licensing" && "📄"}
                      {post.category === "Training" && "🎓"}
                      {post.category === "Testing & Exams" && "📝"}
                      {post.category === "Endorsements" && "⭐"}
                      {post.category === "Health & Safety" && "🏥"}
                      {post.category === "Career & Jobs" && "💼"}
                      {post.category === "CDL Types" && "🚛"}
                    </div>
                  </div>
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
            ))}
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