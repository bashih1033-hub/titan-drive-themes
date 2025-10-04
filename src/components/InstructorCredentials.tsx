import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, GraduationCap, Truck, Shield, Users, Clock } from 'lucide-react';

const InstructorCredentials = () => {
  const credentials = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "Certified Instructors",
      stat: "100%",
      description: "State-certified with active CDL"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Combined Experience",
      stat: "125+ Years",
      description: "Real-world trucking experience"
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Miles Driven",
      stat: "10M+",
      description: "Professional driving experience"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Students Trained",
      stat: "4,200+",
      description: "Successful graduates placed"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Safety Record",
      stat: "Zero",
      description: "Training accidents in 5 years"
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Pass Rate",
      stat: "98%",
      description: "Industry-leading success"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary text-primary-foreground px-6 py-2">
            <Shield className="mr-2 h-4 w-4" />
            Meet Our Expert Team
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Learn from Minnesota's Best CDL Instructors
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our instructors aren't just teachers—they're experienced professional truck drivers 
            with decades of real-world experience who are passionate about your success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {credentials.map((cred, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="text-primary mb-3 flex justify-center">
                  {cred.icon}
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">
                  {cred.stat}
                </div>
                <div className="font-semibold text-foreground mb-1">
                  {cred.title}
                </div>
                <div className="text-sm text-muted-foreground">
                  {cred.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-r from-primary to-secondary text-primary-foreground p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Why Our Instructors Make the Difference</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Award className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                  <span>Every instructor holds an active Class A CDL and professional teaching certification</span>
                </li>
                <li className="flex items-start">
                  <Truck className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                  <span>Average 15+ years of professional truck driving experience across multiple truck types</span>
                </li>
                <li className="flex items-start">
                  <Users className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                  <span>Small class sizes mean personalized attention—we maintain a 4:1 student-to-instructor ratio</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                  <span>Perfect safety record with zero training accidents over the past 5 years</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
              <blockquote className="text-lg italic mb-4">
                "I've been driving for 20 years and training students for the past 8. There's nothing more 
                rewarding than seeing someone master their skills and land their dream trucking job. That's 
                why I maintain such high standards—I want every graduate to succeed."
              </blockquote>
              <p className="font-semibold">— Mike Thompson</p>
              <p className="text-sm opacity-90">Lead CDL Instructor, 20+ years experience</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default InstructorCredentials;
