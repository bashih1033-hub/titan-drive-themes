import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SEOHead from '@/components/SEOHead';
import WhyTitan from '@/components/WhyTitan';
import SuccessStories from '@/components/SuccessStories';
import EnrollmentJourney from '@/components/EnrollmentJourney';
import { 
  Truck, 
  GraduationCap, 
  Users, 
  Shield, 
  CheckCircle, 
  Star,
  Phone,
  Calendar,
  Award,
  Clock,
  MapPin,
  TrendingUp,
  Target,
  Zap,
  PlayCircle,
  ArrowRight
} from 'lucide-react';
import heroImage from '@/assets/hero-trucking-school.jpg';
import classACDL from '@/assets/class-a-cdl.jpg';
import aboutInstructors from '@/assets/about-instructors.jpg';

const Index = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const quickStats = [
    { label: "Graduates Placed", value: "4,200+", icon: <Users className="h-8 w-8" />, color: "text-blue-600" },
    { label: "Job Placement Rate", value: "98%", icon: <Award className="h-8 w-8" />, color: "text-green-600" },
    { label: "Average Starting Salary", value: "$62K", icon: <TrendingUp className="h-8 w-8" />, color: "text-purple-600" },
    { label: "Days to Get Hired", value: "14", icon: <Clock className="h-8 w-8" />, color: "text-orange-600" }
  ];

  const programs = [
    {
      title: "Class A CDL Training",
      description: "Tractor-trailer operation for high-paying OTR careers",
      duration: "3-4 Weeks",
      price: "$4,995",
      salary: "$65K+ starting",
      image: classACDL,
      features: ["98% Pass Rate", "Job Placement", "Financing Available"]
    },
    {
      title: "Class B CDL Training", 
      description: "Local delivery and straight truck opportunities",
      duration: "2-3 Weeks",
      price: "$3,995", 
      salary: "$55K+ starting",
      image: classACDL,
      features: ["Local Routes", "Home Daily", "Great Benefits"]
    },
    {
      title: "CDL Refresher Course",
      description: "Get back on the road with updated skills",
      duration: "1-2 Weeks",
      price: "$1,995",
      salary: "$60K+ returning",
      image: classACDL,
      features: ["Customized Training", "Quick Return", "Skill Updates"]
    }
  ];

  return (
    <>
      <SEOHead 
        title="Titan Trucking School - Minnesota's #1 CDL Training | 98% Pass Rate Guarantee"
        description="Transform your life with professional CDL training at Minnesota's premier trucking school. 98% pass rate, job placement guarantee, $62K average starting salary. Call (612) 699-1403"
        keywords="CDL training Minnesota, truck driving school St Paul, commercial drivers license training, CDL school near me, trucking career Minnesota"
        localArea="Twin Cities Metro"
      />

      {/* Success Banner */}
      <SuccessStories variant="banner" />

      {/* Hero Section - Desktop Optimized */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 border-2 border-white/20 rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 border-2 border-white/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-white/10 rounded-full"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            
            {/* Hero Content - Wider on Desktop */}
            <div className="lg:col-span-3">
              <Badge className="mb-6 bg-yellow-400 text-black px-6 py-3 text-lg font-bold">
                <Star className="mr-2 h-5 w-5" />
                Minnesota's #1 CDL School
              </Badge>
              
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black mb-6 leading-tight">
                Stop Dreaming.
                <span className="block text-yellow-400 mt-2">Start Driving.</span>
              </h1>
              
              <p className="text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed">
                <strong>98% pass rate.</strong> <strong>Job placement guarantee.</strong> <strong>$62K average starting salary.</strong>
                <br />
                Join 4,200+ successful graduates who transformed their lives in just 30 days.
              </p>

              {/* Mobile-Optimized Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8 lg:hidden">
                {quickStats.slice(0, 2).map((stat, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-yellow-400">{stat.value}</div>
                    <div className="text-sm text-blue-100">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-start">
                <a href="tel:6126991403">
                  <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-300 px-8 py-6 text-xl font-bold shadow-2xl w-full sm:w-auto">
                    <Phone className="mr-2 h-6 w-6" />
                    Call (612) 699-1403
                  </Button>
                </a>
              </div>

              <div className="mt-6 flex items-center space-x-6 text-sm text-blue-200">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-400" />
                  98% Pass Rate
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-400" />
                  Job Placement Assistance
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-400" />
                  Flexible Payment Plans
                </div>
              </div>
            </div>

            {/* Hero Visual - Better Proportioned */}
            <div className="lg:col-span-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                <img
                  src={heroImage}
                  alt="Professional CDL training at Titan Trucking School - modern trucks and expert instructors"
                  className="w-full h-96 lg:h-[400px] xl:h-[500px] object-cover object-center"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm font-semibold">4.9/5 Rating</span>
                  </div>
                  <p className="text-lg font-semibold">
                    "Best CDL school in Minnesota! Got hired making $65K within a week of graduation."
                  </p>
                  <p className="text-sm opacity-90">- Marcus J., UPS Driver</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop Stats Section - Prevents Overlap */}
      <section className="hidden lg:block bg-white py-12 -mt-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {quickStats.map((stat, index) => (
              <Card key={index} className="p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className={`${stat.color} mb-3 mx-auto w-fit`}>
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Titan Section */}
      <WhyTitan />

      {/* Programs Section - Mobile Optimized */}
      <section className="py-16 lg:py-24 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary text-primary-foreground px-6 py-2 text-base">
              <GraduationCap className="mr-2 h-4 w-4" />
              Professional CDL Programs
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Choose Your Path to Success
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Industry-leading training programs designed to get you hired fast at top-paying companies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all group border-0 shadow-lg">
                <div className="relative h-48">
                  <img
                    src={program.image}
                    alt={`${program.title} training at Titan Trucking School`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                    <Badge className="bg-black/70 text-white backdrop-blur">
                      {program.duration}
                    </Badge>
                    <div className="text-right">
                      <div className="bg-green-600 text-white px-3 py-1 rounded text-sm font-bold">
                        {program.salary}
                      </div>
                    </div>
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {program.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {program.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-2xl font-bold text-foreground">{program.price}</div>
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      Financing Available
                    </Badge>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col gap-2">
                    <Button className="w-full" asChild>
                      <Link to="/programs">
                        <GraduationCap className="mr-2 h-4 w-4" />
                        Learn More
                      </Link>
                    </Button>
                    <a href="tel:6126991403">
                      <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/5">
                        <Phone className="mr-2 h-4 w-4" />
                        Call for Info
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <SuccessStories variant="compact" />

      {/* Enrollment Journey */}
      <EnrollmentJourney variant="compact" />

      {/* About Section - Desktop Optimized */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            
            <div className="lg:col-span-3">
              <Badge className="mb-4 bg-secondary text-secondary-foreground">
                <Shield className="mr-2 h-4 w-4" />
                Trusted by 4,200+ Graduates
              </Badge>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-6">
                Why Minnesota Trusts Titan for CDL Training
              </h2>
              
              {/* Feature List with Better Desktop Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: <Award className="h-6 w-6" />, title: "98% Pass Rate Guarantee", desc: "Industry-leading success rate with money-back guarantee" },
                  { icon: <Users className="h-6 w-6" />, title: "4:1 Student Ratio", desc: "Personal attention you won't get at CDL mills" },
                  { icon: <Truck className="h-6 w-6" />, title: "Modern Equipment", desc: "Train on the same trucks you'll drive professionally" },
                  { icon: <Target className="h-6 w-6" />, title: "Job Placement", desc: "85+ employer partners for immediate hiring" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="text-primary flex-shrink-0">{feature.icon}</div>
                    <div>
                      <h3 className="font-semibold text-foreground">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/about">
                  <Button size="lg" className="w-full sm:w-auto">
                    <ArrowRight className="mr-2 h-5 w-5" />
                    Learn Our Story
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    <MapPin className="mr-2 h-5 w-5" />
                    Visit Our Campus
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-2 relative">
              <div className="relative">
                <img
                  src={aboutInstructors}
                  alt="Professional CDL instructors and modern training facilities at Titan Trucking School Minnesota"
                  className="rounded-lg shadow-strong w-full h-96 lg:h-[500px] object-cover object-center"
                  loading="lazy"
                />
                {/* Fixed positioning to prevent overlap */}
                <div className="mt-6 lg:absolute lg:-bottom-6 lg:-left-6 bg-accent text-accent-foreground p-6 rounded-lg shadow-lg max-w-xs">
                  <div className="flex items-center space-x-2 mb-2">
                    <Award className="h-6 w-6" />
                    <span className="font-bold">15+ Years</span>
                  </div>
                  <p className="text-sm">
                    Training Minnesota's best commercial drivers with proven results
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary via-blue-600 to-secondary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Zap className="h-20 w-20 mx-auto mb-8 text-yellow-400" />
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Your $60K+ Career Starts With One Call
          </h2>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto text-primary-foreground/90">
            Don't let another day pass wondering "what if." Thousands of Minnesotans have already 
            transformed their lives. Classes start weekly — your seat is waiting.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <a href="tel:6126991403">
              <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-300 px-12 py-6 text-xl font-bold shadow-2xl">
                <Phone className="mr-2 h-6 w-6" />
                Call (612) 699-1403 Now
              </Button>
            </a>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white bg-white/20 hover:bg-white/30 px-12 py-6 text-xl font-semibold">
                <Calendar className="mr-2 h-6 w-6" />
                Schedule Campus Visit
              </Button>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-primary-foreground/80">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2" />
              No Obligation Consultation
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2" />
              Same Day Enrollment Available
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2" />
              Financial Aid Counseling
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;