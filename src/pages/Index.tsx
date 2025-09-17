import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import SEOHead from '@/components/SEOHead';
import { 
  Truck, 
  GraduationCap, 
  Users, 
  Shield, 
  CheckCircle, 
  Star,
  Phone,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Award,
  Clock,
  MapPin
} from 'lucide-react';
import heroImage from '@/assets/hero-trucking-school.jpg';
import classACDL from '@/assets/class-a-cdl.jpg';
import aboutInstructors from '@/assets/about-instructors.jpg';
import testimonial1 from '@/assets/student-testimonial-1.jpg';
import testimonial2 from '@/assets/student-testimonial-2.jpg';

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      image: testimonial1,
      rating: 5,
      text: "Titan Trucking School helped me get my Class A CDL in just 3 weeks. The instructors are patient and knowledgeable, and now I'm earning $65,000/year driving for a major freight company!",
      program: "Class A CDL"
    },
    {
      name: "Mike Rodriguez", 
      image: testimonial2,
      rating: 5,
      text: "Best decision I ever made! The job placement assistance was incredible - I had 3 job offers before I even graduated. Professional training and real-world experience.",
      program: "Class B CDL + HazMat"
    },
    {
      name: "Jennifer Chen",
      image: testimonial1,
      rating: 5,
      text: "As a career changer at 45, I was nervous about CDL training. The staff at Titan made me feel confident and prepared. Now I love my new career in trucking!",
      program: "Refresher Course"
    }
  ];

  const programs = [
    {
      title: "Class A CDL",
      description: "Complete training for tractor-trailer operation. 3-4 week program with job placement assistance.",
      icon: <Truck className="h-8 w-8 text-secondary" />,
      features: ["160 hours training", "Modern equipment", "Job placement"],
      link: "/programs#class-a"
    },
    {
      title: "Class B CDL",
      description: "Training for straight trucks, buses, and delivery vehicles. 2-3 week intensive program.",
      icon: <GraduationCap className="h-8 w-8 text-secondary" />,
      features: ["120 hours training", "Flexible schedule", "High success rate"],
      link: "/programs#class-b"
    },
    {
      title: "CDL Refresher",
      description: "Brush up on skills or upgrade your license. Perfect for returning drivers.",
      icon: <Shield className="h-8 w-8 text-secondary" />,
      features: ["Customized training", "1-2 week program", "Affordable rates"],
      link: "/programs#refresher"
    },
    {
      title: "Employer Training",
      description: "Corporate training programs for companies needing certified drivers.",
      icon: <Users className="h-8 w-8 text-secondary" />,
      features: ["Group discounts", "On-site options", "Flexible scheduling"],
      link: "/programs#employer"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>
      <SEOHead 
        title="Titan Trucking School - Professional CDL Training in St. Paul, MN"
        description="Get your CDL license at Minnesota's premier trucking school. Expert instruction, modern equipment, job placement assistance. Class A, Class B, and endorsement training available."
        keywords="CDL training, trucking school, Minnesota, St. Paul, Class A CDL, Class B CDL, commercial drivers license, truck driving school, CDL classes"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <Badge className="mb-6 bg-secondary text-secondary-foreground">
              🚛 Minnesota's #1 CDL Training School
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Launch Your <span className="text-secondary">Trucking Career</span> Today
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/90 leading-relaxed">
              Professional CDL training in St. Paul with experienced instructors, modern equipment, 
              and guaranteed job placement assistance. Start earning $50,000-$80,000+ annually.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                <GraduationCap className="mr-2 h-5 w-5" />
                Enroll Today
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20">
                <Phone className="mr-2 h-5 w-5" />
                Call (651) 555-1234
              </Button>
            </div>
            <div className="flex items-center mt-8 space-x-8 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span>Job Placement Assistance</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span>Financial Aid Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 lg:py-24 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Professional CDL Training Programs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our comprehensive CDL training programs designed to get you on the road fast with the skills employers demand.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <Card key={index} className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-1 border-border/50">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-muted rounded-full group-hover:bg-secondary/10 transition-colors">
                    {program.icon}
                  </div>
                  <CardTitle className="text-xl mb-2">{program.title}</CardTitle>
                  <CardDescription>{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to={program.link}>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                About Titan Trucking School
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                25+ Years of Excellence in CDL Training
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Since 1998, Titan Trucking School has been Minnesota's premier CDL training institution. 
                We've helped over 10,000 students launch successful trucking careers with our proven 
                training methods and industry connections.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Pass Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">10K+</div>
                  <div className="text-sm text-muted-foreground">Graduates</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">95%</div>
                  <div className="text-sm text-muted-foreground">Job Placement</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">25+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
              <Link to="/about">
                <Button variant="secondary" size="lg">
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src={aboutInstructors}
                alt="Titan Trucking School instructors and students at training facility"
                className="rounded-lg shadow-strong w-full"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Award className="h-6 w-6" />
                  <div>
                    <div className="font-bold">FMCSA Certified</div>
                    <div className="text-sm opacity-90">Training Provider</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Success Stories from Our Graduates
            </h2>
            <p className="text-lg text-muted-foreground">
              Hear from real students who transformed their careers with Titan Trucking School
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <Card className="p-8 shadow-strong">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-24 h-24 rounded-full object-cover shadow-soft"
                    loading="lazy"
                  />
                </div>
                <div className="text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-secondary fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-lg text-foreground mb-4 italic">
                    "{testimonials[currentTestimonial].text}"
                  </blockquote>
                  <div>
                    <div className="font-bold text-foreground">{testimonials[currentTestimonial].name}</div>
                    <div className="text-sm text-muted-foreground">{testimonials[currentTestimonial].program}</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Navigation */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                className="rounded-full p-2"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-primary' : 'bg-muted'
                    }`}
                    onClick={() => setCurrentTestimonial(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="rounded-full p-2"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Ready to Start Your CDL Training?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Contact us today for a free consultation and learn how we can help you launch 
                your new career in trucking. Our admissions team is here to answer all your questions.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Call Us Today</div>
                    <a href="tel:6515551234" className="text-primary hover:underline">
                      (651) 555-1234
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Visit Our Campus</div>
                    <div className="text-muted-foreground">123 Training Center Blvd, St. Paul, MN 55101</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Business Hours</div>
                    <div className="text-muted-foreground">Mon-Fri: 8AM-6PM | Sat: 9AM-3PM</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-6 shadow-strong">
              <CardHeader>
                <CardTitle>Get Free Information</CardTitle>
                <CardDescription>Fill out the form below and we'll contact you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-1">
                        First Name
                      </label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-1">
                        Last Name
                      </label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">
                      Phone
                    </label>
                    <Input id="phone" type="tel" placeholder="(651) 555-0123" />
                  </div>
                  <div>
                    <label htmlFor="program" className="block text-sm font-medium text-foreground mb-1">
                      Interested Program
                    </label>
                    <select id="program" className="w-full px-3 py-2 border border-input rounded-md bg-background">
                      <option>Class A CDL</option>
                      <option>Class B CDL</option>
                      <option>CDL Refresher</option>
                      <option>Endorsements</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Tell us about your goals and any questions you have..." />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    <Calendar className="mr-2 h-5 w-5" />
                    Request Information
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;