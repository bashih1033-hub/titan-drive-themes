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
  Award,
  Home
} from 'lucide-react';

const StPaul = () => {
  const stPaulStats = [
    { label: "St. Paul Students Trained", value: "1,800+", icon: <Users className="h-6 w-6" /> },
    { label: "Job Placement Rate", value: "98%", icon: <Award className="h-6 w-6" /> },
    { label: "Local Trucking Companies", value: "120+", icon: <Building className="h-6 w-6" /> },
    { label: "Average Starting Salary", value: "$54,000", icon: <Truck className="h-6 w-6" /> }
  ];

  const stPaulEmployers = [
    "3M Corporate Campus",
    "Ecolab Transportation",
    "MillerCoors Distribution",
    "SuperValu Distribution",
    "CHS St. Paul Terminal",
    "Flint Hills Resources",
    "St. Paul Port Authority",
    "BNSF Railway St. Paul",
    "Union Pacific St. Paul",
    "US Postal Service St. Paul",
    "FedEx St. Paul Hub",
    "UPS St. Paul Center",
    "Xcel Energy Fleet",
    "City of St. Paul Fleet",
    "Ramsey County Fleet",
    "Local Construction Companies"
  ];

  const stPaulNeighborhoods = [
    { name: "Downtown St. Paul", commute: "8 min", description: "State government and corporate headquarters" },
    { name: "West Side St. Paul", commute: "5 min", description: "Industrial corridor with major distribution centers" },
    { name: "Highland Park", commute: "12 min", description: "Former Ford plant area, growing logistics hub" },
    { name: "Midway District", commute: "3 min", description: "Transportation hub between Minneapolis-St. Paul" },
    { name: "East Side St. Paul", commute: "10 min", description: "Industrial area with rail and truck terminals" },
    { name: "Roseville", commute: "15 min", description: "Suburban commercial and distribution center" },
    { name: "Woodbury", commute: "18 min", description: "Growing eastern suburb with logistics companies" },
    { name: "Maplewood", commute: "12 min", description: "Industrial suburb with 3M and manufacturing" }
  ];

  return (
    <>
      <SEOHead 
        title="CDL Training St. Paul MN - Local Truck Driving School | Titan Trucking School"
        description="CDL training in St. Paul, Minnesota. Professional truck driver education with job placement assistance. Convenient St. Paul location, expert instructors. Classes starting weekly. Call (612) 699-1403"
        keywords="CDL training St Paul, truck driving school St Paul MN, commercial driver license St Paul, CDL classes St Paul Minnesota, St Paul trucking school, St Paul CDL training center"
        localArea="St. Paul Metro"
        courseData={{
          name: "CDL Training Programs - St. Paul Area",
          description: "Professional commercial driver's license training in St. Paul, Minnesota with local job placement assistance",
          provider: "Titan Trucking School",
          duration: "P2W/P4W",
          category: "Professional Training"
        }}
        reviewData={{
          rating: 4.9,
          reviewCount: 98,
          reviews: [
            {
              author: "Robert Thompson - St. Paul",
              rating: 5,
              reviewBody: "Excellent CDL school right in St. Paul! The location is super convenient from downtown, and they helped me get a great local job with 3M's transportation division.",
              datePublished: "2024-01-10"
            },
            {
              author: "Maria Garcia - West Side St. Paul", 
              rating: 5,
              reviewBody: "Perfect for St. Paul residents - easy to get to from anywhere in the city. Professional training got me my Class A CDL and a job at the Port of St. Paul.",
              datePublished: "2024-02-15"
            }
          ]
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-4 bg-secondary text-secondary-foreground">
              Located in St. Paul, Minnesota
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Professional CDL Training in St. Paul
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/90">
              Get your commercial driver's license at Minnesota's capital city. 
              Titan Trucking School provides expert CDL training with personalized instruction 
              and guaranteed job placement assistance for St. Paul residents.
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
                Right in the Heart of St. Paul
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <Home className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Titan Trucking School - St. Paul Campus</p>
                    <p className="text-muted-foreground">1821 University Ave W ste 464-1</p>
                    <p className="text-muted-foreground">St. Paul, MN 55104</p>
                    <p className="text-sm text-primary mt-1">Located on University Avenue corridor</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p className="text-muted-foreground">Saturday: 10:00 AM - 2:00 PM</p>
                    <p className="text-muted-foreground">Sunday: Training Available at Yard</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Navigation className="h-5 w-5 text-primary" />
                  <p className="text-muted-foreground">
                    Easily accessible from all St. Paul neighborhoods via University Avenue, I-94, and Highway 280
                  </p>
                </div>
              </div>

              <Link to="/contact">
                <Button className="w-full sm:w-auto">
                  <MapPin className="mr-2 h-4 w-4" />
                  Get Directions to St. Paul Campus
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                St. Paul CDL Training Excellence
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {stPaulStats.map((stat, index) => (
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

          {/* St. Paul Employers */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
              Major St. Paul Trucking Employers
            </h3>
            <p className="text-lg text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
              St. Paul is home to major corporations and government operations creating excellent 
              career opportunities for commercial drivers. Our graduates work for these top employers.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {stPaulEmployers.map((employer, index) => (
                <Card key={index} className="p-4 text-center hover:shadow-md transition-shadow">
                  <p className="text-sm font-medium text-foreground">{employer}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Neighborhoods Served */}
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
              St. Paul Communities We Serve
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stPaulNeighborhoods.map((area, index) => (
                <Card key={index} className="p-6">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-lg flex items-center justify-between">
                      <span>{area.name}</span>
                      <Badge variant="outline">{area.commute}</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-sm text-muted-foreground">{area.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* St. Paul Benefits */}
      <section className="py-16 lg:py-24 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why St. Paul is Perfect for Truck Drivers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              St. Paul offers unique advantages for commercial drivers with stable government jobs, 
              major corporate headquarters, and strategic transportation infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <Building className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">State Capital Hub</h3>
              <p className="text-sm text-muted-foreground">
                Home to Minnesota state government and major corporations like 3M, Ecolab, 
                creating stable, well-paying trucking jobs.
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <Navigation className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Transportation Center</h3>
              <p className="text-sm text-muted-foreground">
                Major rail and river port city with excellent highway access to I-94, I-35E, 
                and Highway 280 for regional and local routes.
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Stable Job Market</h3>
              <p className="text-sm text-muted-foreground">
                Government fleets, Fortune 500 companies, and established businesses provide 
                consistent employment with excellent benefits.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Launch Your St. Paul Trucking Career
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Join St. Paul residents who've built successful trucking careers with Titan Trucking School. 
            Our convenient location and local employer connections make us the smart choice.
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
            </Link>
            <Link to="/faq">
              <Button size="lg" variant="outline" className="px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20">
                <CheckCircle className="mr-2 h-5 w-5" />
                Get Answers
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default StPaul;