import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Clock, 
  Phone,
  Users,
  GraduationCap,
  Building,
  Navigation,
  CheckCircle,
  Truck,
  Award
} from 'lucide-react';

const Minneapolis = () => {
  const minneapolisStats = [
    { label: "Minneapolis Students Trained", value: "2,400+", icon: <Users className="h-6 w-6" /> },
    { label: "Job Placement Rate", value: "98%", icon: <Award className="h-6 w-6" /> },
    { label: "Local Trucking Companies", value: "150+", icon: <Building className="h-6 w-6" /> },
    { label: "Average Starting Salary", value: "$55,000", icon: <Truck className="h-6 w-6" /> }
  ];

  const minneapolisEmployers = [
    "UPS Minneapolis Hub",
    "FedEx Ground Minneapolis",
    "Sysco Minneapolis",
    "US Foods Minneapolis", 
    "Coca-Cola Minneapolis",
    "Pepsi Beverages Minneapolis",
    "Target Corporation",
    "Best Buy Corporate",
    "General Mills",
    "Land O'Lakes",
    "Cargill Transportation",
    "CHS Inc.",
    "Minnesota Trucking Companies",
    "Local Construction Companies",
    "Waste Management Minneapolis",
    "Republic Services"
  ];

const minneapolisNeighborhoods = [
    { name: "Downtown Minneapolis", commute: "15 min", description: "Financial district near Target Center and US Bank Stadium with major corporate headquarters", landmarks: "Target HQ, IDS Tower" },
    { name: "Northeast Minneapolis", commute: "12 min", description: "Industrial area along Broadway with distribution centers and arts district", landmarks: "Grain Belt Brewery, 13th Ave" },
    { name: "North Loop", commute: "18 min", description: "Historic warehouse district near Target Field with logistics companies", landmarks: "Target Field, Warehouse District" },
    { name: "Uptown Minneapolis", commute: "20 min", description: "Commercial district along Hennepin Ave with retail distribution near Lake Calhoun", landmarks: "Lake Calhoun, Hennepin Ave" },
    { name: "Minneapolis-St. Paul Airport (MSP)", commute: "25 min", description: "Major international cargo hub near Mall of America with freight operations", landmarks: "MSP Airport, Mall of America" },
    { name: "Fridley", commute: "10 min", description: "Industrial suburb along I-694 with trucking companies near Medtronic campus", landmarks: "Medtronic, Mississippi River" },
    { name: "Brooklyn Park", commute: "15 min", description: "Growing logistics hub along I-94 and US-169 near Osseo", landmarks: "Edinburgh Golf Course" },
    { name: "Plymouth", commute: "22 min", description: "Corporate headquarters along I-494 near Medicine Lake", landmarks: "Wayzata, Medicine Lake" },
    { name: "Edina", commute: "20 min", description: "Affluent suburb with retail delivery needs near Southdale Center", landmarks: "Southdale Mall, 50th & France" },
    { name: "Richfield", commute: "18 min", description: "Central suburb along I-494 near Best Buy headquarters", landmarks: "Best Buy HQ, Veterans Park" },
    { name: "Bloomington", commute: "22 min", description: "Home to Mall of America and major distribution centers along I-494", landmarks: "MOA, MSP Airport" },
    { name: "St. Louis Park", commute: "17 min", description: "Inner-ring suburb along I-394 with growing business district", landmarks: "West End, Wolfe Park" }
  ];

  return (
    <>
      <SEOHead 
        title="CDL Training Minneapolis MN - Truck Driver School Near Me | Titan Trucking School"
        description="Professional CDL training serving Minneapolis, Minnesota. Class A & B commercial driver's license training with 98% pass rate. Job placement with Minneapolis trucking companies. Call (612) 699-1403"
        keywords="CDL training Minneapolis, truck driving school Minneapolis MN, commercial driver license Minneapolis, CDL classes Minneapolis, trucking school near Minneapolis, Minneapolis CDL training center"
        localArea="Minneapolis Metro"
        courseData={{
          name: "CDL Training Programs - Minneapolis Area",
          description: "Professional commercial driver's license training serving Minneapolis, Minnesota and surrounding communities",
          provider: "Titan Trucking School",
          duration: "P2W/P4W",
          category: "Professional Training"
        }}
        reviewData={{
          rating: 4.8,
          reviewCount: 127,
          reviews: [
            {
              author: "Marcus Johnson - Minneapolis",
              rating: 5,
              reviewBody: "Great CDL school serving the Minneapolis area. Easy commute from downtown, excellent instructors, and they helped me get hired at UPS Minneapolis hub right after graduation.",
              datePublished: "2024-01-15"
            },
            {
              author: "Lisa Anderson - Northeast Minneapolis", 
              rating: 5,
              reviewBody: "Perfect location for Minneapolis residents. Professional training got me my Class A CDL and a local driving job with Target's distribution center. Highly recommend!",
              datePublished: "2024-02-20"
            }
          ]
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-4 bg-secondary text-secondary-foreground">
              Serving Minneapolis, Minnesota
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              CDL Training for Minneapolis Residents
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/90">
              Professional truck driver training serving Minneapolis and surrounding communities. 
              Get your CDL with Minnesota's premier trucking school - convenient location, 
              expert instruction, and guaranteed job placement assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:6126991403">
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (612) 699-1403
                </Button>
              </a>
              <Link to="/programs">
                <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  <GraduationCap className="mr-2 h-5 w-5" />
                  View CDL Programs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Stats */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            
            {/* Location Info */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Convenient Location for Minneapolis Residents
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Titan Trucking School</p>
                    <p className="text-muted-foreground">1821 University Ave W ste 464-1</p>
                    <p className="text-muted-foreground">St. Paul, MN 55104</p>
                    <p className="text-sm text-primary mt-1">Just 15 minutes from downtown Minneapolis</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p className="text-muted-foreground">Saturday: 10:00 AM - 2:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Navigation className="h-5 w-5 text-primary" />
                  <p className="text-muted-foreground">
                    Easy access via I-94 and University Avenue - convenient for all Minneapolis neighborhoods
                  </p>
                </div>
              </div>

              <Link to="/contact">
                <Button className="w-full sm:w-auto">
                  <MapPin className="mr-2 h-4 w-4" />
                  Get Directions & Visit
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Minneapolis CDL Training Success
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {minneapolisStats.map((stat, index) => (
                  <Card key={index} className="p-4 text-center">
                    <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-3">
                      <div className="text-primary">{stat.icon}</div>
                    </div>
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Minneapolis Employers */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
              Minneapolis Area Trucking Employers
            </h3>
            <p className="text-lg text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
              Our graduates work for top Minneapolis companies. From local delivery to regional routes, 
              we help you find the perfect trucking job in the Minneapolis metropolitan area.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {minneapolisEmployers.map((employer, index) => (
                <Card key={index} className="p-4 text-center hover:shadow-md transition-shadow">
                  <p className="text-sm font-medium text-foreground">{employer}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Neighborhoods Served */}
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
              Minneapolis Areas We Serve
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {minneapolisNeighborhoods.map((area, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-lg flex items-center justify-between">
                      <span>{area.name}</span>
                      <Badge variant="outline">{area.commute}</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-sm text-muted-foreground mb-2">{area.description}</p>
                    <p className="text-xs text-primary font-medium">Near: {area.landmarks}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Minneapolis Benefits */}
      <section className="py-16 lg:py-24 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Choose CDL Training Near Minneapolis?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Minneapolis offers excellent opportunities for truck drivers with diverse industries, 
              competitive wages, and strong job growth in transportation and logistics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <Building className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Major Corporate Hub</h3>
              <p className="text-sm text-muted-foreground">
                Home to Fortune 500 companies like Target, Best Buy, and General Mills creating 
                steady demand for commercial drivers.
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <Navigation className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Strategic Location</h3>
              <p className="text-sm text-muted-foreground">
                Minneapolis-St. Paul is a major transportation hub with interstate highways 
                connecting to Chicago, Denver, and Canada.
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">High Demand Market</h3>
              <p className="text-sm text-muted-foreground">
                Growing e-commerce and distribution centers create thousands of trucking jobs 
                with competitive salaries and benefits.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Start Your Minneapolis Trucking Career Today
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Join hundreds of Minneapolis residents who've launched successful trucking careers 
            with Titan Trucking School. Classes start weekly - don't wait to begin!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="px-8 py-4">
                <GraduationCap className="mr-2 h-5 w-5" />
                Enroll Today
              </Button>
            </Link>
            <a href="tel:6126991403">
              <Button size="lg" variant="outline" className="px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20">
                <Phone className="mr-2 h-5 w-5" />
                Call (612) 699-1403
              </Button>
            </a>
            <Link to="/faq">
              <Button size="lg" variant="outline" className="px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20">
                <CheckCircle className="mr-2 h-5 w-5" />
                View FAQ
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Minneapolis;