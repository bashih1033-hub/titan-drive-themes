import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Calendar,
  User,
  MapPin,
  Clock,
  CheckCircle,
  Star,
  GraduationCap,
  ArrowRight
} from 'lucide-react';

interface FormData {
  name: string;
  phone: string;
  email: string;
  program: string;
  message: string;
  timeframe: string;
  experience: string;
}

const MobileOptimizedContactForm = ({ variant = "full" }: { variant?: "full" | "compact" | "inline" }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    program: '',
    message: '',
    timeframe: '',
    experience: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const programs = [
    "Class A CDL Training",
    "Class B CDL Training", 
    "CDL Refresher Course",
    "Employer Training Program",
    "Not Sure - Need Guidance"
  ];

  const timeframes = [
    "ASAP - This Week",
    "Within 1 Month",
    "Within 3 Months", 
    "More Than 3 Months",
    "Just Researching"
  ];

  const experienceLevels = [
    "No Experience",
    "Some Training/Permit",
    "Have CDL - Need Refresher",
    "Experienced - Looking to Upgrade"
  ];

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // In real implementation, submit to your backend
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    
    // Show success or redirect
    alert('Thank you! We\'ll contact you within 2 hours during business hours.');
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (variant === "inline") {
    return (
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-6 rounded-lg">
        <div className="text-center mb-4">
          <Phone className="h-8 w-8 mx-auto mb-2" />
          <h3 className="text-lg font-bold">Get Started Today</h3>
          <p className="text-sm opacity-90">Free consultation • No obligation</p>
        </div>
        
        <div className="space-y-3">
          <Input
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className="bg-white/10 border-white/30 text-white placeholder-white/70 focus:bg-white/20"
          />
          <Input
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className="bg-white/10 border-white/30 text-white placeholder-white/70 focus:bg-white/20"
          />
          <select
            value={formData.program}
            onChange={(e) => handleInputChange('program', e.target.value)}
            className="w-full p-3 rounded-lg bg-white/10 border border-white/30 text-white focus:bg-white/20"
          >
            <option value="" className="text-gray-800">Select Program of Interest</option>
            {programs.map((program, index) => (
              <option key={index} value={program} className="text-gray-800">{program}</option>
            ))}
          </select>
        </div>

        <div className="flex space-x-2 mt-4">
          <Button 
            onClick={handleSubmit}
            disabled={isSubmitting || !formData.name || !formData.phone}
            className="flex-1 bg-yellow-400 text-black hover:bg-yellow-300 font-bold"
          >
            {isSubmitting ? 'Sending...' : 'Get Free Info'}
          </Button>
          <a href="tel:6126991403">
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              <Phone className="h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <Card className="p-6 shadow-lg border-l-4 border-primary">
        <CardHeader className="p-0 mb-4">
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
              <MessageCircle className="h-5 w-5 text-primary" />
            </div>
            <div>
              <CardTitle className="text-lg">Quick Contact</CardTitle>
              <p className="text-sm text-muted-foreground">Get info in under 2 minutes</p>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-0 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Input
              placeholder="Name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="focus:border-primary"
            />
            <Input
              placeholder="Phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="focus:border-primary"
            />
          </div>
          
          <select
            value={formData.program}
            onChange={(e) => handleInputChange('program', e.target.value)}
            className="w-full p-3 border border-border rounded-lg focus:border-primary focus:outline-none"
          >
            <option value="">Which program interests you?</option>
            {programs.map((program, index) => (
              <option key={index} value={program}>{program}</option>
            ))}
          </select>

          <div className="flex space-x-2">
            <Button 
              onClick={handleSubmit}
              disabled={isSubmitting || !formData.name || !formData.phone}
              className="flex-1"
            >
              {isSubmitting ? 'Sending...' : 'Get Free Info'}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <a href="tel:6126991403">
              <Button variant="outline" className="border-primary text-primary">
                <Phone className="h-4 w-4" />
              </Button>
            </a>
          </div>

          <div className="flex items-center justify-center space-x-4 text-xs text-muted-foreground">
            <div className="flex items-center">
              <CheckCircle className="h-3 w-3 mr-1 text-green-500" />
              No spam
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-3 w-3 mr-1 text-green-500" />
              Response in 2 hours
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-3 w-3 mr-1 text-green-500" />
              Free consultation
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Full multi-step form
  return (
    <Card className="max-w-2xl mx-auto shadow-2xl border-0">
      <CardHeader className="text-center pb-4 bg-gradient-to-r from-primary to-secondary text-white rounded-t-lg">
        <div className="flex items-center justify-center space-x-2 mb-3">
          <Star className="h-6 w-6 text-yellow-400" />
          <Badge className="bg-yellow-400 text-black px-4 py-1">
            FREE Consultation
          </Badge>
          <Star className="h-6 w-6 text-yellow-400" />
        </div>
        <CardTitle className="text-2xl font-bold">
          Get Your CDL Career Started Today
        </CardTitle>
        <p className="text-primary-foreground/90">
          Quick 3-step form • Get personalized program recommendations • Response within 2 hours
        </p>
        
        {/* Progress Bar */}
        <div className="mt-4 flex justify-center space-x-2">
          {[1, 2, 3].map((step) => (
            <div
              key={step}
              className={`w-8 h-2 rounded-full transition-all ${
                step <= currentStep ? 'bg-yellow-400' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
        <p className="text-sm mt-2 opacity-90">Step {currentStep} of {totalSteps}</p>
      </CardHeader>

      <CardContent className="p-6">
        <form onSubmit={handleSubmit}>
          {/* Step 1: Basic Info */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <div className="text-center mb-6">
                <User className="h-12 w-12 mx-auto mb-3 text-primary" />
                <h3 className="text-xl font-semibold">Tell Us About Yourself</h3>
                <p className="text-muted-foreground">Basic information to get started</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <Input
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="h-12 text-lg"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number *</label>
                  <Input
                    placeholder="(612) 555-0123"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="h-12 text-lg"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <Input
                    placeholder="your.email@example.com"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="h-12 text-lg"
                  />
                  <p className="text-xs text-muted-foreground mt-1">Optional but recommended for updates</p>
                </div>
              </div>

              <Button
                type="button"
                onClick={nextStep}
                disabled={!formData.name || !formData.phone}
                className="w-full h-12 text-lg font-semibold mt-6"
              >
                Next: Program Selection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          )}

          {/* Step 2: Program & Timeline */}
          {currentStep === 2 && (
            <div className="space-y-4">
              <div className="text-center mb-6">
                <GraduationCap className="h-12 w-12 mx-auto mb-3 text-primary" />
                <h3 className="text-xl font-semibold">Choose Your Path</h3>
                <p className="text-muted-foreground">Help us recommend the best program for you</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-3">Which CDL program interests you most?</label>
                  <div className="grid grid-cols-1 gap-3">
                    {programs.map((program, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => handleInputChange('program', program)}
                        className={`p-4 border-2 rounded-lg text-left transition-all ${
                          formData.program === program
                            ? 'border-primary bg-primary/5 text-primary font-semibold'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{program}</span>
                          {formData.program === program && (
                            <CheckCircle className="h-5 w-5 text-primary" />
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-3">When would you like to start?</label>
                  <div className="grid grid-cols-1 gap-2">
                    {timeframes.map((timeframe, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => handleInputChange('timeframe', timeframe)}
                        className={`p-3 border rounded-lg text-left transition-all ${
                          formData.timeframe === timeframe
                            ? 'border-primary bg-primary/5 text-primary font-semibold'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        {timeframe}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex space-x-3 mt-6">
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                  className="flex-1 h-12"
                >
                  Back
                </Button>
                <Button
                  type="button"
                  onClick={nextStep}
                  disabled={!formData.program}
                  className="flex-1 h-12 text-lg font-semibold"
                >
                  Next: Final Details
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Experience & Message */}
          {currentStep === 3 && (
            <div className="space-y-4">
              <div className="text-center mb-6">
                <MessageCircle className="h-12 w-12 mx-auto mb-3 text-primary" />
                <h3 className="text-xl font-semibold">Almost Done!</h3>
                <p className="text-muted-foreground">Last details to personalize your experience</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-3">Your CDL experience level?</label>
                  <div className="grid grid-cols-1 gap-2">
                    {experienceLevels.map((experience, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => handleInputChange('experience', experience)}
                        className={`p-3 border rounded-lg text-left transition-all ${
                          formData.experience === experience
                            ? 'border-primary bg-primary/5 text-primary font-semibold'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        {experience}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Any questions or specific goals? (Optional)
                  </label>
                  <Textarea
                    placeholder="Tell us about your goals, concerns, or questions about CDL training..."
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="min-h-[100px] resize-none"
                  />
                </div>
              </div>

              <div className="flex space-x-3 mt-6">
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                  className="flex-1 h-12"
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting || !formData.experience}
                  className="flex-1 h-12 text-lg font-semibold bg-green-600 hover:bg-green-700"
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      Get My Free Consultation
                      <CheckCircle className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </div>
            </div>
          )}
        </form>

        {/* Contact Options */}
        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-center text-muted-foreground mb-4">
            Prefer to talk now? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="tel:6126991403" className="flex-1">
              <Button variant="outline" className="w-full h-12 border-primary text-primary">
                <Phone className="mr-2 h-5 w-5" />
                Call (612) 699-1403
              </Button>
            </a>
            <div className="flex-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start space-x-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>Mon-Fri: 9AM-5PM, Sat: 10AM-2PM</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MobileOptimizedContactForm;