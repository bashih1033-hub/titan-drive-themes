import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import WhyTitan from '@/components/WhyTitan';
import SuccessStories from '@/components/SuccessStories';
import EnrollmentJourney from '@/components/EnrollmentJourney';
import { 
  Award, 
  Users, 
  Shield, 
  CheckCircle, 
  Clock,
  GraduationCap,
  Truck,
  Star
} from 'lucide-react';
import aboutInstructors from '@/assets/about-instructors.jpg';
import heroImage from '@/assets/hero-trucking-school.jpg';

const About = () => {
  const achievements = [
    { number: "10,000+", label: "Graduates", icon: <GraduationCap className="h-6 w-6" /> },
    { number: "98%", label: "Pass Rate", icon: <Award className="h-6 w-6" /> },
    { number: "95%", label: "Job Placement", icon: <Users className="h-6 w-6" /> },
    { number: "25+", label: "Years Experience", icon: <Clock className="h-6 w-6" /> }
  ];

  const certifications = [
    "FMCSA Entry-Level Driver Training (ELDT) Provider",
    "Minnesota Department of Transportation Approved",
    "Better Business Bureau A+ Rating", 
    "National Association of Publicly Funded Truck Driving Schools Member",
    "Commercial Vehicle Training Association (CVTA) Member"
  ];

  const instructors = [
    {
      name: "Mike Thompson",
      title: "Lead CDL Instructor",
      experience: "20+ years OTR driving, 15 years teaching",
      specialties: "Class A CDL, HazMat, Doubles/Triples"
    },
    {
      name: "Sarah Martinez", 
      title: "CDL Theory Instructor",
      experience: "Former DOT inspector, 10 years teaching",
      specialties: "DOT regulations, Safety compliance, ELDT theory"
    },
    {
      name: "David Johnson",
      title: "Equipment Training Specialist", 
      experience: "25+ years commercial driving, Fleet manager",
      specialties: "Pre-trip inspections, Backing maneuvers, Road test prep"
    }
  ];

  return (
    <>
      <SEOHead 
        title="About Titan Trucking School Near Me - 25+ Years CDL Training Excellence Minneapolis, St. Paul MN"
        description="Minnesota's trusted CDL school since 1998. 25+ years experience, 98% pass rate, 10,000+ graduates. FMCSA certified ELDT provider serving Twin Cities metro area."
        keywords="about Titan Trucking School, CDL school Minnesota, FMCSA certified, ELDT provider, trucking school history, CDL instructors"
        localArea="Twin Cities"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-16 lg:py-24">
        <div className="absolute inset-0 bg-black/40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-secondary text-secondary-foreground">
              Est. 1998
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              About Titan Trucking School
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/90">
              For over 25 years, we've been Minnesota's trusted leader in professional CDL training, 
              helping thousands of students launch successful trucking careers.
            </p>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 lg:py-24 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center p-6 border-border/50 hover:shadow-strong transition-all">
                <div className="mb-4 mx-auto bg-primary/10 p-3 rounded-full w-fit">
                  <div className="text-primary">{achievement.icon}</div>
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {achievement.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {achievement.label}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Founded in 1998 by veteran truck driver Tom Mitchell, Titan Trucking School began 
                  with a simple mission: provide the highest quality CDL training in Minnesota while 
                  treating every student like family.
                </p>
                <p>
                  What started as a small operation with just two trucks has grown into Minnesota's 
                  premier CDL training facility, equipped with modern training vehicles and 
                  state-of-the-art classrooms.
                </p>
                <p>
                  We've maintained our commitment to personalized attention and hands-on training, 
                  ensuring every graduate is fully prepared for a successful career in trucking.
                </p>
                <p>
                  Today, our graduates drive for major carriers nationwide, many earning $50,000-$80,000+ 
                  annually. We're proud to have helped transform thousands of lives through professional 
                  truck driving careers.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={aboutInstructors}
                alt="Titan Trucking School facility and training fleet"
                className="rounded-lg shadow-strong w-full"
                loading="lazy"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Truck className="h-6 w-6 text-primary" />
                  <div>
                    <div className="font-bold text-foreground">Modern Fleet</div>
                    <div className="text-sm text-muted-foreground">12 Training Vehicles</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Certifications & Accreditations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We maintain the highest standards through continuous certification and accreditation 
              with industry-leading organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-6 text-center border-border/50 hover:shadow-strong transition-all">
                <div className="mb-4 mx-auto bg-accent/10 p-3 rounded-full w-fit">
                  <Shield className="h-8 w-8 text-accent" />
                </div>
                <p className="font-medium text-foreground">{cert}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Meet Our Expert Instructors
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn from industry veterans with decades of real-world experience and a passion for teaching.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <Card key={index} className="p-6 border-border/50 hover:shadow-strong transition-all">
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{instructor.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{instructor.title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">{instructor.experience}</p>
                  <div className="text-sm">
                    <span className="font-medium text-foreground">Specialties: </span>
                    <span className="text-muted-foreground">{instructor.specialties}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Titan */}
      <WhyTitan variant="compact" />

      {/* Success Stories */}
      <SuccessStories variant="compact" />

      {/* Enrollment Journey */}
      <EnrollmentJourney variant="compact" />

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Join the Titan Family?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Experience the difference that 25+ years of excellence makes. 
            Start your CDL training journey with Minnesota's most trusted trucking school.
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

export default About;