import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import SuccessStories from '@/components/SuccessStories';
import EnrollmentJourney from '@/components/EnrollmentJourney';
import MobileOptimizedContactForm from '@/components/MobileOptimizedContactForm';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  Calendar,
  MessageCircle,
  Truck,
  GraduationCap
} from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: ["(612) 699-1403", "Call for immediate assistance"],
      action: "tel:6126991403"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email", 
      details: ["info@titantruckingschool.com", "We respond within 24 hours"],
      action: "mailto:info@titantruckingschool.com"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      details: ["1821 University Ave W ste 464-1", "St. Paul, MN 55104"],
      action: "https://maps.google.com"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Hours",
      details: ["Mon-Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 3:00 PM"],
      action: null
    }
  ];

  const faqs = [
    {
      question: "How long does CDL training take?",
      answer: "Our Class A CDL program is 3-4 weeks (160 hours), Class B is 2-3 weeks (120 hours). We offer flexible scheduling including full-time and part-time options."
    },
    {
      question: "Do you offer job placement assistance?",
      answer: "Yes! We have partnerships with over 50 trucking companies and maintain a 95% job placement rate. Our career services team helps with resume building, interview prep, and connecting you with employers."
    },
    {
      question: "What financing options are available?",
      answer: "We offer federal financial aid, payment plans, employer sponsorship programs, and accept VA benefits. Our financial aid team can help you find the best option for your situation."
    },
    {
      question: "What's included in the training cost?",
      answer: "Training includes all classroom instruction, hands-on vehicle training, DOT physical, drug screening, study materials, and job placement assistance. No hidden fees."
    }
  ];

  return (
    <>
      <SEOHead 
        title="Contact Titan Trucking School Near Me - CDL Training St. Paul, Minneapolis MN | (612) 699-1403"
        description="Contact Minnesota's premier CDL training school. Located in St. Paul serving Minneapolis, Bloomington, Richfield. Call (612) 699-1403 for free consultation. Financing available."
        keywords="contact Titan Trucking School, CDL training St. Paul, trucking school contact, CDL school phone number, trucking school address Minnesota, CDL training near me contact"
        localArea="Minneapolis-St. Paul Metro"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-4 bg-secondary text-secondary-foreground">
              Get In Touch
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Contact Us Today
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/90">
              Ready to start your CDL training? Have questions about our programs? 
              Our admissions team is here to help you take the next step in your trucking career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:6126991403">
                <Button size="lg" variant="secondary" className="px-8 py-4">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
              </a>
              <Button size="lg" variant="outline" className="px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Visit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 lg:py-24 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center p-6 border-border/50 hover:shadow-strong transition-all">
                <div className="mb-4 mx-auto bg-primary/10 p-3 rounded-full w-fit">
                  <div className="text-primary">{info.icon}</div>
                </div>
                <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className={`text-sm ${idx === 0 ? 'font-medium text-foreground' : 'text-muted-foreground'}`}>
                      {detail}
                    </p>
                  ))}
                </div>
                {info.action && (
                  <a href={info.action} className="inline-block mt-3">
                    <Button variant="outline" size="sm">
                      {info.title === "Phone" && "Call"}
                      {info.title === "Email" && "Email"}
                      {info.title === "Location" && "Directions"}
                    </Button>
                  </a>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Mobile-Optimized Contact Form */}
            <div className="lg:col-span-1">
              <MobileOptimizedContactForm variant="full" />
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              
              {/* Why Choose Us */}
              <Card className="p-6 border-border/50">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
                  <GraduationCap className="mr-2 h-5 w-5 text-primary" />
                  Why Choose Titan Trucking School?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-accent/10 p-1 rounded-full mr-3 mt-0.5">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                    </div>
                    <span className="text-sm">25+ years of experience training professional drivers</span>
                  </li>
                  <li className="flex items-start">  
                    <div className="bg-accent/10 p-1 rounded-full mr-3 mt-0.5">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                    </div>
                    <span className="text-sm">98% pass rate on CDL exams</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-accent/10 p-1 rounded-full mr-3 mt-0.5">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                    </div>
                    <span className="text-sm">95% job placement rate with top employers</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-accent/10 p-1 rounded-full mr-3 mt-0.5">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                    </div>
                    <span className="text-sm">Modern training fleet and equipment</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-accent/10 p-1 rounded-full mr-3 mt-0.5">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                    </div>
                    <span className="text-sm">Flexible scheduling and financing options</span>
                  </li>
                </ul>
              </Card>

              {/* FAQs */}
              <Card className="p-6 border-border/50">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
                  <MessageCircle className="mr-2 h-5 w-5 text-primary" />
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index}>
                      <h4 className="font-medium text-foreground mb-2">{faq.question}</h4>
                      <p className="text-sm text-muted-foreground">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Map Placeholder */}
              <Card className="p-6 border-border/50">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-primary" />
                  Visit Our Campus
                </h3>
                <div className="bg-gradient-subtle h-48 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <Truck className="h-12 w-12 text-primary mx-auto mb-2" />
                    <p className="text-muted-foreground">Interactive Map</p>
                    <p className="text-sm text-muted-foreground">1821 University Ave W ste 464-1, St. Paul, MN</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  <MapPin className="mr-2 h-4 w-4" />
                  Get Directions
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <SuccessStories variant="compact" />

      {/* Enrollment Journey */}
      <EnrollmentJourney variant="compact" />
    </>
  );
};

export default Contact;