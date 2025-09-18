import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Award, 
  Users, 
  Clock, 
  TrendingUp, 
  Shield, 
  Phone,
  CheckCircle,
  Star,
  Target,
  Zap
} from 'lucide-react';

const WhyTitan = ({ variant = "full" }: { variant?: "full" | "compact" }) => {
  const differentiators = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "98% Pass Rate Guarantee",
      description: "Industry-leading success rate with money-back guarantee if you don't pass on first attempt",
      highlight: "vs 75% industry average",
      color: "text-green-600"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "4:1 Student-to-Instructor Ratio", 
      description: "Personal attention you won't get at large CDL mills. Every student gets individualized training",
      highlight: "vs 12:1 at competitors",
      color: "text-blue-600"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Job Placement in 2 Weeks",
      description: "Our industry connections get you hired fast. Average placement time just 14 days after graduation",
      highlight: "vs 6-8 weeks elsewhere",
      color: "text-orange-600"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "$8,000+ Higher Starting Salary",
      description: "Our graduates earn more because we train you for premium positions at top-paying companies",
      highlight: "vs generic CDL schools",
      color: "text-purple-600"
    }
  ];

  const trustFactors = [
    { label: "Years Training Drivers", value: "15+", icon: <Shield className="h-5 w-5" /> },
    { label: "Graduates Placed", value: "4,200+", icon: <Users className="h-5 w-5" /> },
    { label: "Partner Companies", value: "85+", icon: <Award className="h-5 w-5" /> },
    { label: "Average Graduate Salary", value: "$62K", icon: <TrendingUp className="h-5 w-5" /> }
  ];

  if (variant === "compact") {
    return (
      <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 rounded-lg border border-primary/20">
        <div className="text-center mb-6">
          <Badge className="mb-2 bg-primary/10 text-primary">Why Choose Titan?</Badge>
          <h3 className="text-2xl font-bold text-foreground mb-2">
            Minnesota's #1 CDL Training School
          </h3>
          <p className="text-muted-foreground">
            Don't settle for generic training. Get the competitive edge that gets you hired faster at higher pay.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          {trustFactors.map((factor, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center mb-2">
                <div className="p-2 bg-primary/10 rounded-full text-primary mr-2">
                  {factor.icon}
                </div>
              </div>
              <div className="text-xl font-bold text-foreground">{factor.value}</div>
              <div className="text-xs text-muted-foreground">{factor.label}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <a href="tel:6126991403" className="flex-1">
            <Button className="w-full bg-primary hover:bg-primary/90">
              <Phone className="mr-2 h-4 w-4" />
              Call (612) 699-1403
            </Button>
          </a>
          <Link to="/programs" className="flex-1">
            <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/5">
              View Programs
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-primary/20 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-secondary/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/20 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary text-primary-foreground px-6 py-2 text-base">
            <Star className="mr-2 h-4 w-4" />
            Why Choose Titan Trucking School?
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Don't Just Get Your CDL —
            <span className="block text-primary mt-2">Get The Competitive Edge</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            While other schools just teach you to pass the test, we prepare you to dominate the industry. 
            Our graduates don't just get jobs — they get the <strong>best jobs</strong> with the <strong>highest pay</strong>.
          </p>
        </div>

        {/* Trust Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trustFactors.map((factor, index) => (
            <Card key={index} className="text-center p-6 border-border/50 hover:shadow-strong transition-all hover:border-primary/30">
              <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">
                <div className="text-primary">{factor.icon}</div>
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{factor.value}</div>
              <div className="text-sm text-muted-foreground font-medium">{factor.label}</div>
            </Card>
          ))}
        </div>

        {/* Differentiators */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {differentiators.map((item, index) => (
            <Card key={index} className="p-8 border-border/50 hover:shadow-strong transition-all group hover:border-primary/30">
              <div className="flex items-start space-x-6">
                <div className={`p-3 rounded-lg bg-gradient-to-br from-white to-gray-50 group-hover:scale-110 transition-transform ${item.color}`}>
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-3 leading-relaxed">
                    {item.description}
                  </p>
                  <Badge variant="outline" className={`${item.color} border-current`}>
                    <CheckCircle className="mr-1 h-3 w-3" />
                    {item.highlight}
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bold CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary to-secondary p-12 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <Target className="h-16 w-16 mx-auto mb-6 opacity-90" />
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Stop Settling For Average Training
            </h3>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Join the elite 4,200+ drivers who chose Titan and now earn $8,000+ more per year. 
              Your career deserves premium training.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:6126991403" className="w-full sm:w-auto">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-6 py-3 text-base font-semibold w-full shadow-lg">
                  <Phone className="mr-2 h-4 w-4" />
                  Get Premium Training - Call Now
                </Button>
              </a>
              <Link to="/programs" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="border-2 border-white bg-white/10 text-white hover:bg-white hover:text-primary px-6 py-3 text-base font-semibold w-full backdrop-blur-sm shadow-lg">
                  <Zap className="mr-2 h-4 w-4" />
                  View Elite Programs
                </Button>
              </Link>
            </div>
            
            <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-white/80">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-1" />
                98% Pass Rate
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-1" />
                Job Placement Assistance
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-1" />
                Flexible Payment Plans
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTitan;