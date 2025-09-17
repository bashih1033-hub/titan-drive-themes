import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Clock,
  Truck,
  Users,
  Star,
  Building,
  Navigation,
  CheckCircle
} from 'lucide-react';

const Minneapolis = () => {
  const serviceAreas = [
    "Minneapolis, MN",
    "Bloomington, MN", 
    "Richfield, MN",
    "Edina, MN",
    "St. Louis Park, MN",
    "Hopkins, MN",
    "Golden Valley, MN",
    "Crystal, MN"
  ];

  const localEmployers = [
    {
      name: "Target Corporation",
      type: "Retail Distribution",
      description: "Major retailer with distribution centers seeking CDL drivers for local and regional routes."
    },
    {
      name: "UPS & FedEx",
      type: "Package Delivery",
      description: "Leading package delivery companies with multiple Minneapolis area facilities."
    },
    {
      name: "Cargill",
      type: "Food & Agriculture",
      description: "Fortune 500 company with headquarters in Minneapolis area, needs bulk transport drivers."
    },
    {
      name: "General Mills",
      type: "Food Manufacturing",
      description: "Food manufacturing giant with distribution needs throughout the Twin Cities area."
    }
  ];

  const localStats = [
    { number: "2,100+", label: "CDL Jobs Available", icon: <Truck className="h-6 w-6" /> },
    { number: "$58,000", label: "Average Salary", icon: <Users className="h-6 w-6" /> },
    { number: "15%", label: "Job Growth", icon: <Star className="h-6 w-6" /> },
    { number: "50+", label: "Partner Companies", icon: <Building className="h-6 w-6" /> }
  ];

  return (
    <>
      <SEOHead 
        title="CDL Training Minneapolis MN - Titan Trucking School Serves Minneapolis Area"
        description="Professional CDL training serving Minneapolis, Bloomington, Richfield, and surrounding areas. Get your commercial driver's license with Minnesota's premier trucking school."
        keywords="CDL training Minneapolis, truck driving school Minneapolis, CDL classes Minneapolis MN, commercial drivers license Minneapolis, trucking school Bloomington Richfield"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-secondary text-secondary-foreground">
                Serving Minneapolis Area
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                CDL Training in Minneapolis & Surrounding Areas
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/90">
                Professional CDL training conveniently located for Minneapolis, Bloomington, 
                Richfield, and Hennepin County residents. Start your trucking career close to home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" variant="secondary" className="px-8 py-4">
                    Enroll Today
                  </Button>
                </Link>
                <a href="tel:6515551234">
                  <Button size="lg" variant="outline" className="px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20">
                    <Phone className="mr-2 h-5 w-5" />
                    Call (651) 555-1234
                  </Button>
                </a>
              </div>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                Service Areas
              </h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Stats */}
      <section className="py-16 lg:py-24 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Minneapolis Area CDL Opportunities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The Minneapolis metro area offers excellent opportunities for CDL drivers with 
              competitive salaries and growing demand.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {localStats.map((stat, index) => (
              <Card key={index} className="text-center p-6 border-border/50 hover:shadow-strong transition-all">
                <div className="mb-4 mx-auto bg-primary/10 p-3 rounded-full w-fit">
                  <div className="text-primary">{stat.icon}</div>
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Local Training */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Why Train Locally in the Twin Cities?
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Training in the Minneapolis area means you'll learn to drive in the same conditions 
                  you'll face as a professional driver - from urban traffic patterns to Minnesota weather conditions.
                </p>
                <p>
                  Our St. Paul location is easily accessible from anywhere in the Twin Cities metro, 
                  with convenient highway access and flexible scheduling to accommodate your commute.
                </p>
                <p>
                  We maintain strong relationships with local employers, meaning better job placement 
                  opportunities and the potential to work close to home after graduation.
                </p>
              </div>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <span>Learn local traffic patterns and routes</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <span>Train in Minnesota weather conditions</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <span>Strong local employer partnerships</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <span>Convenient Twin Cities location</span>
                </div>
              </div>
            </div>
            
            <Card className="p-6 border-border/50 shadow-strong">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Navigation className="mr-2 h-5 w-5 text-primary" />
                  Easy Access from Minneapolis
                </CardTitle>
                <CardDescription>
                  Our St. Paul campus is conveniently located for students throughout the metro area
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>From Downtown Minneapolis:</span>
                    <span className="font-medium">15 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span>From Bloomington:</span>
                    <span className="font-medium">20 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span>From Richfield:</span>
                    <span className="font-medium">18 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span>From Edina:</span>
                    <span className="font-medium">22 minutes</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-3">
                    <strong>Address:</strong> 123 Training Center Blvd, St. Paul, MN 55101
                  </p>
                  <Button variant="outline" className="w-full">
                    <MapPin className="mr-2 h-4 w-4" />
                    Get Directions
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Local Employers */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Local Employer Partners
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The Minneapolis area is home to major companies that regularly hire our CDL graduates 
              for competitive positions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {localEmployers.map((employer, index) => (
              <Card key={index} className="p-6 border-border/50 hover:shadow-strong transition-all">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">{employer.name}</CardTitle>
                      <CardDescription className="text-primary font-medium">
                        {employer.type}
                      </CardDescription>
                    </div>
                    <Building className="h-8 w-8 text-muted-foreground" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{employer.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Local Information */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            <Card className="p-6 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="mr-2 h-5 w-5 text-primary" />
                  Flexible Scheduling
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We understand Minneapolis area commute challenges and offer flexible class schedules:
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Morning classes (7:00 AM start)</li>
                  <li>• Evening classes (6:00 PM start)</li>
                  <li>• Weekend options available</li>
                  <li>• Part-time programs</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Truck className="mr-2 h-5 w-5 text-primary" />
                  Local Route Training
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Practice driving on routes you'll actually use as a professional driver:
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• I-35W and I-494 navigation</li>
                  <li>• Downtown Minneapolis delivery</li>
                  <li>• Industrial area access</li>
                  <li>• Mall of America vicinity</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2 h-5 w-5 text-primary" />
                  Community Focus
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We're part of the Twin Cities community and support local drivers:
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Local job placement priority</li>
                  <li>• Community networking events</li>
                  <li>• Ongoing career support</li>
                  <li>• Alumni mentorship program</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Start Your CDL Training?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Join hundreds of Minneapolis area residents who have launched successful trucking careers 
            with Titan Trucking School. Classes start every week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="px-8 py-4">
                Get Started Today
              </Button>
            </Link>
            <Link to="/programs">
              <Button size="lg" variant="outline" className="px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20">
                View Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Minneapolis;