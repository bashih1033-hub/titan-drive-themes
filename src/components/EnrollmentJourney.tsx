import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Calendar, 
  FileText, 
  GraduationCap, 
  Briefcase,
  CheckCircle,
  ArrowRight,
  Clock,
  DollarSign,
  Users,
  MapPin,
  Star,
  PlayCircle,
  Target
} from 'lucide-react';

interface Step {
  id: number;
  title: string;
  description: string;
  duration: string;
  icon: React.ReactNode;
  details: string[];
  nextAction: string;
  ctaText: string;
  ctaLink?: string;
  ctaPhone?: boolean;
}

const EnrollmentJourney = ({ variant = "full" }: { variant?: "full" | "compact" | "interactive" }) => {
  const [activeStep, setActiveStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const steps: Step[] = [
    {
      id: 1,
      title: "Free Consultation Call",
      description: "Discover if CDL training is right for you with our career counselors",
      duration: "15 minutes",
      icon: <Phone className="h-6 w-6" />,
      details: [
        "Discuss your career goals and current situation",
        "Learn about different CDL programs and which fits you best",
        "Get transparent information about costs and financing",
        "Ask questions about job placement and earning potential",
        "Schedule your campus visit or start application process"
      ],
      nextAction: "Call our admissions team for your free consultation",
      ctaText: "Get Free Consultation - (612) 699-1403",
      ctaPhone: true
    },
    {
      id: 2,
      title: "Campus Visit & Application",
      description: "Tour our facilities, meet instructors, and complete your application",
      duration: "1 hour",
      icon: <MapPin className="h-6 w-6" />,
      details: [
        "See our modern training equipment and driving range",
        "Meet certified instructors with real trucking experience", 
        "Complete application and document submission",
        "Discuss financing options and payment plans",
        "Get conditional acceptance pending medical clearance"
      ],
      nextAction: "Schedule your campus visit to see why Titan is different",
      ctaText: "Schedule Campus Visit",
      ctaLink: "/contact"
    },
    {
      id: 3, 
      title: "Medical Clearance & Permits",
      description: "Get DOT medical certificate and CDL learner's permit",
      duration: "1-2 weeks",
      icon: <FileText className="h-6 w-6" />,
      details: [
        "Complete DOT medical examination with certified examiner",
        "Study CDL manual and pass written knowledge tests",
        "Obtain CDL learner's permit from DMV",
        "Submit all required documentation to school",
        "Confirm your training start date and schedule"
      ],
      nextAction: "We guide you through every step of the medical and permit process",
      ctaText: "Learn About Requirements",
      ctaLink: "/faq"
    },
    {
      id: 4,
      title: "Professional CDL Training",
      description: "Hands-on training with personalized instruction and real-world experience",
      duration: "3-4 weeks",
      icon: <GraduationCap className="h-6 w-6" />,
      details: [
        "Learn pre-trip inspection, backing, and road driving",
        "Practice with modern trucks and professional instructors",
        "4:1 student-to-instructor ratio for personalized attention",
        "Prepare for CDL skills test with confidence",
        "Graduate with job-ready skills and industry connections"
      ],
      nextAction: "Experience the Titan training difference",
      ctaText: "View Training Programs",
      ctaLink: "/programs"
    },
    {
      id: 5,
      title: "Job Placement & Career Launch",
      description: "Get hired fast with our industry connections and career support",
      duration: "1-2 weeks",
      icon: <Briefcase className="h-6 w-6" />,
      details: [
        "Access exclusive job opportunities with our partner companies",
        "Get resume and interview preparation support",
        "Leverage our relationships with top Minnesota employers",
        "Start earning $50,000+ with benefits and growth opportunities",
        "Receive ongoing career support throughout your first year"
      ],
      nextAction: "Join 4,200+ successful Titan graduates earning great money",
      ctaText: "See Job Opportunities",
      ctaLink: "/about"
    }
  ];

  const completeStep = (stepId: number) => {
    if (!completedSteps.includes(stepId)) {
      setCompletedSteps([...completedSteps, stepId]);
    }
    if (stepId < steps.length) {
      setActiveStep(stepId + 1);
    }
  };

  if (variant === "compact") {
    return (
      <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
        <div className="text-center mb-6">
          <Badge className="mb-2 bg-blue-600 text-white">
            <Target className="mr-1 h-3 w-3" />
            Your Path to Success
          </Badge>
          <h3 className="text-xl font-bold text-foreground mb-2">
            From Application to Career in 30 Days
          </h3>
          <p className="text-sm text-muted-foreground">
            Our proven 5-step process gets you from interested to employed fast
          </p>
        </div>

        <div className="space-y-4 mb-6">
          {steps.slice(0, 3).map((step, index) => (
            <div key={step.id} className="flex items-center space-x-3 p-3 bg-white/50 rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                {index + 1}
              </div>
              <div className="flex-1">
                <div className="font-semibold text-sm text-foreground">{step.title}</div>
                <div className="text-xs text-muted-foreground">{step.duration}</div>
              </div>
              <Badge variant="outline" className="text-xs">
                {step.duration}
              </Badge>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="tel:6126991403">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 mb-3">
              <Phone className="mr-2 h-4 w-4" />
              Start Step 1 - Free Consultation
            </Button>
          </a>
          <Link to="/contact">
            <Button variant="outline" className="w-full text-blue-600 border-blue-600">
              See Complete Process
            </Button>
          </Link>
        </div>
      </Card>
    );
  }

  if (variant === "interactive") {
    const progress = (completedSteps.length / steps.length) * 100;
    
    return (
      <div className="bg-white rounded-xl shadow-xl p-8 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <Badge className="mb-4 bg-blue-600 text-white px-6 py-2">
            Interactive Journey Planner
          </Badge>
          <h3 className="text-2xl font-bold text-foreground mb-2">
            Your Path to a $60K+ Trucking Career
          </h3>
          <Progress value={progress} className="w-full max-w-md mx-auto mb-4" />
          <p className="text-muted-foreground">
            {completedSteps.length} of {steps.length} steps completed
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          {steps.map((step) => {
            const isCompleted = completedSteps.includes(step.id);
            const isActive = activeStep === step.id;
            const isAvailable = activeStep >= step.id || isCompleted;

            return (
              <div
                key={step.id}
                className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${
                  isCompleted
                    ? 'border-green-500 bg-green-50'
                    : isActive
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 bg-gray-50'
                } ${!isAvailable && 'opacity-50'}`}
                onClick={() => isAvailable && setActiveStep(step.id)}
              >
                <div className="text-center">
                  <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-2 ${
                    isCompleted
                      ? 'bg-green-500 text-white'
                      : isActive
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-300 text-gray-600'
                  }`}>
                    {isCompleted ? <CheckCircle className="h-6 w-6" /> : step.icon}
                  </div>
                  <h4 className="font-semibold text-sm">{step.title}</h4>
                  <p className="text-xs text-muted-foreground">{step.duration}</p>
                </div>
              </div>
            );
          })}
        </div>

        {activeStep <= steps.length && (
          <Card className="p-6">
            <CardHeader className="p-0 mb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center">
                    {steps[activeStep - 1].icon}
                  </div>
                  <div>
                    <div className="text-xl">{steps[activeStep - 1].title}</div>
                    <div className="text-sm text-muted-foreground font-normal">
                      {steps[activeStep - 1].description}
                    </div>
                  </div>
                </CardTitle>
                <Badge className="bg-blue-100 text-blue-800">
                  Step {activeStep} of {steps.length}
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="p-0">
              <ul className="space-y-2 mb-6">
                {steps[activeStep - 1].details.map((detail, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-sm">{detail}</span>
                  </li>
                ))}
              </ul>

              <div className="flex space-x-4">
                {steps[activeStep - 1].ctaPhone ? (
                  <a href="tel:6126991403" className="flex-1">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      <Phone className="mr-2 h-4 w-4" />
                      {steps[activeStep - 1].ctaText}
                    </Button>
                  </a>
                ) : (
                  <Link to={steps[activeStep - 1].ctaLink || '/'} className="flex-1">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      {steps[activeStep - 1].ctaText}
                    </Button>
                  </Link>
                )}
                
                {!completedSteps.includes(activeStep) && (
                  <Button 
                    variant="outline" 
                    onClick={() => completeStep(activeStep)}
                  >
                    Mark Complete
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    );
  }

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-600 text-white px-6 py-2 text-base">
            <Target className="mr-2 h-4 w-4" />
            Your Success Roadmap
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            From Application to 
            <span className="block text-blue-600 mt-2">$60K Career in 30 Days</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            No confusion, no surprises. Our proven 5-step process has helped 4,200+ students 
            launch successful trucking careers. Here's exactly what happens next.
          </p>
        </div>

        {/* Journey Steps */}
        <div className="relative">
          {/* Progress Line */}
          <div className="hidden md:block absolute top-20 left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-200 via-blue-300 to-blue-400 h-full -z-10"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={step.id} className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                index % 2 === 0 ? '' : 'md:grid-flow-col-dense'
              }`}>
                
                {/* Step Content */}
                <Card className={`p-8 shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-all ${
                  index % 2 === 0 ? '' : 'md:col-start-2'
                }`}>
                  <CardHeader className="p-0 mb-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {step.id}
                      </div>
                      <div>
                        <CardTitle className="text-xl text-foreground">{step.title}</CardTitle>
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span className="text-sm">{step.duration}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardHeader>

                  <CardContent className="p-0">
                    <ul className="space-y-2 mb-6">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="bg-blue-50 p-4 rounded-lg mb-4">
                      <p className="text-sm font-medium text-blue-800 mb-3">
                        <strong>Next Action:</strong> {step.nextAction}
                      </p>
                      
                      {step.ctaPhone ? (
                        <a href="tel:6126991403">
                          <Button className="w-full bg-blue-600 hover:bg-blue-700">
                            <Phone className="mr-2 h-4 w-4" />
                            {step.ctaText}
                          </Button>
                        </a>
                      ) : (
                        <Link to={step.ctaLink || '/'}>
                          <Button className="w-full bg-blue-600 hover:bg-blue-700">
                            {step.ctaText}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Step Visual */}
                <div className={`text-center ${index % 2 === 0 ? '' : 'md:col-start-1 md:row-start-1'}`}>
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mb-4 border-4 border-white shadow-lg">
                    <div className="text-blue-600">
                      {step.icon}
                    </div>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800 px-4 py-2">
                    Step {step.id}: {step.duration}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Guarantee */}
        <div className="mt-16 text-center bg-gradient-to-r from-green-600 to-blue-600 text-white p-12 rounded-2xl">
          <Star className="h-16 w-16 mx-auto mb-6 opacity-90" />
          <h3 className="text-3xl font-bold mb-4">Our Success Guarantee</h3>
          <p className="text-xl mb-6 opacity-90 max-w-2xl mx-auto">
            If you don't get hired within 60 days of graduation, we'll refund your tuition. 
            That's how confident we are in our process.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur">
              <div className="text-2xl font-bold">98%</div>
              <div className="text-sm opacity-90">Pass Rate</div>
            </div>
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur">
              <div className="text-2xl font-bold">14 Days</div>
              <div className="text-sm opacity-90">Average Time to Hire</div>
            </div>
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur">
              <div className="text-2xl font-bold">$62K</div>
              <div className="text-sm opacity-90">Average Graduate Salary</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:6126991403">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4">
                <Phone className="mr-2 h-5 w-5" />
                Start Your Journey - Call Now
              </Button>
            </a>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4">
                <PlayCircle className="mr-2 h-5 w-5" />
                Schedule Campus Visit
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnrollmentJourney;