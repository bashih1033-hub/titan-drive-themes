import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import SuccessStories from '@/components/SuccessStories';
import EnrollmentJourney from '@/components/EnrollmentJourney';
import MobileOptimizedContactForm from '@/components/MobileOptimizedContactForm';
import { 
  Truck, 
  Clock, 
  DollarSign, 
  CheckCircle, 
  Users,
  GraduationCap,
  Shield,
  Calendar,
  Award,
  Phone
} from 'lucide-react';
import classACDL from '@/assets/class-a-cdl.jpg';
import classBDumpTruck from '@/assets/class-b-dump-truck.jpg';
import cdlRefresherHighway from '@/assets/cdl-refresher-highway.jpg';

const Programs = () => {
  const programs = [
    {
      id: "class-a",
      title: "Class A CDL Training",
      duration: "3-4 Weeks",
      hours: "160 Hours",
      price: "$4,995",
      image: classACDL,
      altText: "Class A semi-truck tractor-trailer for CDL training at Titan Trucking School",
      description: "Complete training for tractor-trailer operation. Our most popular program for those seeking high-paying OTR careers.",
      features: [
        "Pre-trip inspection training",
        "Backing maneuvers (parallel, alley dock, straight line)",
        "Road driving with experienced instructors",
        "DOT physical and drug screening",
        "Job placement assistance",
        "Financial aid available"
      ],
      jobOutlook: "Average starting salary: $50,000-$65,000",
      schedule: "Full-time (Mon-Fri 7AM-5PM) or Part-time (Evening/Weekend options)",
      requirements: [
        "Valid driver's license for 1+ years",
        "Clean driving record (3+ years)",
        "Pass DOT physical and drug test",
        "18+ years old (21+ for interstate)",
        "Basic English reading/writing skills"
      ]
    },
    {
      id: "class-b",
      title: "Class B CDL Training", 
      duration: "2-3 Weeks",
      hours: "120 Hours",
      price: "$3,995",
      image: classBDumpTruck,
      altText: "Class B dump truck and straight truck vehicles for CDL training at Titan Trucking School",
      description: "Training for straight trucks, buses, and delivery vehicles. Perfect for local driving careers.",
      features: [
        "Straight truck operation",
        "Pre-trip inspection",
        "Urban driving skills",
        "Backing and maneuvering",
        "Passenger and school bus prep available",
        "Local job placement focus"
      ],
      jobOutlook: "Average starting salary: $40,000-$55,000",
      schedule: "Flexible scheduling available - Full-time or Part-time",
      requirements: [
        "Valid driver's license",
        "Clean driving record",
        "Pass DOT physical",
        "18+ years old",
        "Basic mechanical understanding helpful"
      ]
    },
    {
      id: "refresher",
      title: "CDL Refresher Course",
      duration: "1-2 Weeks", 
      hours: "40-80 Hours",
      price: "$1,995",
      image: cdlRefresherHighway,
      altText: "Multiple commercial trucks on highway for CDL refresher course training at Titan Trucking School",
      description: "Perfect for drivers returning to trucking or upgrading skills. Customized training based on individual needs.",
      features: [
        "Skills assessment and customized training",
        "Brush up on pre-trip inspection",
        "Backing practice and road driving",
        "Current regulation updates",
        "Equipment familiarization", 
        "Flexible scheduling"
      ],
      jobOutlook: "Return to previous earning potential: $45,000-$70,000+",
      schedule: "Flexible - customize to your needs",
      requirements: [
        "Current or expired CDL (within 2 years)",
        "Pass DOT physical if expired",
        "Skills assessment completed"
      ]
    },
    {
      id: "employer",
      title: "Employer Training Programs",
      duration: "Varies",
      hours: "Custom",
      price: "Contact for Quote",
      image: classACDL,
      altText: "Professional semi-truck for employer CDL training programs at Titan Trucking School",
      description: "Customized CDL training programs for companies needing certified drivers. Group discounts and on-site options available.",
      features: [
        "On-site training available",
        "Group discount rates",
        "Customized curriculum",
        "Flexible scheduling",
        "Company-specific equipment training",
        "Progress reporting and certificates"
      ],
      jobOutlook: "Immediate employment with sponsoring company",
      schedule: "Flexible - arranged with employer",
      requirements: [
        "Employer sponsorship",
        "Meet company hiring requirements",
        "Group minimum varies"
      ]
    }
  ];

  const financingOptions = [
    {
      title: "Payment Plans",
      description: "Flexible payment options to spread costs over training period",
      icon: <Calendar className="h-6 w-6" />
    },
    {
      title: "Employer Sponsorship",
      description: "Many trucking companies will pay for your training in exchange for employment commitment",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "VA Benefits",
      description: "Veterans can use VA education benefits for CDL training",
      icon: <Shield className="h-6 w-6" />
    }
  ];

  return (
    <>
      <SEOHead 
        title="CDL Training Programs Near Me - Class A, Class B & Refresher Courses | Titan Trucking School St. Paul, MN"
        description="Professional CDL training programs near Minneapolis & St. Paul. Class A, Class B, refresher courses with 98% pass rate. Job placement assistance, financing available. Call (612) 699-1403"
        keywords="CDL training programs, Class A CDL training, Class B CDL training, CDL refresher course, truck driving school Minnesota, employer CDL training, ELDT training"
        courseData={{
          name: "Professional CDL Training Programs",
          description: "Comprehensive commercial driver's license training including Class A, Class B, and refresher courses with hands-on instruction and job placement assistance",
          provider: "Titan Trucking School",
          duration: "P2W/P4W", // 2-4 weeks
          category: "Professional Training"
        }}
        reviewData={{
          rating: 4.8,
          reviewCount: 127,
          reviews: [
            {
              author: "Sarah Johnson",
              rating: 5,
              reviewBody: "Excellent CDL training program! The instructors were knowledgeable and patient. I got my Class A CDL and found a great job within weeks of graduating.",
              datePublished: "2024-01-15"
            },
            {
              author: "Mike Rodriguez", 
              rating: 5,
              reviewBody: "Best CDL school in Minnesota! Professional training, modern equipment, and amazing job placement assistance. Highly recommend Titan Trucking School.",
              datePublished: "2024-02-20"
            },
            {
              author: "Jennifer Chen",
              rating: 5,
              reviewBody: "As a career changer, I was nervous about CDL training. The staff made me feel confident and prepared. Great investment in my future!",
              datePublished: "2024-03-10"
            }
          ]
        }}
        localArea="Twin Cities Metro"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-4 bg-secondary text-secondary-foreground">
              Professional CDL Training
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              CDL Training Programs
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/90">
              Choose from our comprehensive CDL training programs designed to get you on the road fast 
              with the skills employers demand.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {programs.map((program, index) => (
            <div key={program.id} id={program.id} className="mb-16 last:mb-0">
              <Card className="overflow-hidden shadow-strong">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={program.image}
                      alt={program.altText || `${program.title} training at Titan Trucking School`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-secondary text-secondary-foreground">
                        {program.duration}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-8">
                    <CardHeader className="p-0 mb-6">
                      <CardTitle className="text-2xl lg:text-3xl mb-2">{program.title}</CardTitle>
                      <CardDescription className="text-lg">{program.description}</CardDescription>
                    </CardHeader>
                    
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <Clock className="h-6 w-6 text-primary mx-auto mb-2" />
                        <div className="font-semibold text-sm">{program.hours}</div>
                        <div className="text-xs text-muted-foreground">Training</div>
                      </div>
                      <div className="text-center">
                        <DollarSign className="h-6 w-6 text-primary mx-auto mb-2" />
                        <div className="font-semibold text-sm">{program.price}</div>
                        <div className="text-xs text-muted-foreground">Tuition</div>
                      </div>
                      <div className="text-center">
                        <Award className="h-6 w-6 text-primary mx-auto mb-2" />
                        <div className="font-semibold text-sm">98%</div>
                        <div className="text-xs text-muted-foreground">Pass Rate</div>
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">What's Included:</h4>
                        <ul className="space-y-1">
                          {program.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start text-sm">
                              <CheckCircle className="h-4 w-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium text-foreground">Job Outlook: </span>
                          {program.jobOutlook}
                        </p>
                      </div>
                      
                      <div>
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium text-foreground">Schedule: </span>
                          {program.schedule}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link to="/contact" className="flex-1">
                        <Button className="w-full" size="lg">
                          Enroll Now
                        </Button>
                      </Link>
                      <a href="tel:6126991403" className="flex-1">
                        <Button variant="outline" size="lg" className="w-full">
                          <Phone className="mr-2 h-4 w-4" />
                          Call for Info: (612) 699-1403
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Financing Section */}
      <section className="py-16 lg:py-24 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Financing Options Available
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't let cost be a barrier to your new career. We offer multiple financing options 
              to help make CDL training affordable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {financingOptions.map((option, index) => (
              <Card key={index} className="p-6 text-center border-border/50 hover:shadow-strong transition-all">
                <div className="mb-4 mx-auto bg-primary/10 p-3 rounded-full w-fit">
                  <div className="text-primary">{option.icon}</div>
                </div>
                <h3 className="font-semibold text-foreground mb-2">{option.title}</h3>
                <p className="text-sm text-muted-foreground">{option.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <SuccessStories variant="compact" />

      {/* Enrollment Journey */}
      <EnrollmentJourney variant="compact" />

      {/* Mobile-Optimized Contact Form */}
      <section className="py-16 lg:py-24 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Ready to Start Your CDL Training?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Join thousands of successful graduates who started their trucking careers at Titan. 
              Classes start every week - don't wait to begin your new career.
            </p>
          </div>
          <MobileOptimizedContactForm variant="compact" />
        </div>
      </section>
    </>
  );
};

export default Programs;