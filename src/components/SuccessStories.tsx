import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Star, 
  Quote, 
  TrendingUp, 
  MapPin, 
  Calendar,
  Truck,
  DollarSign,
  ChevronLeft,
  ChevronRight,
  Play,
  Award,
  Phone
} from 'lucide-react';

interface SuccessStory {
  id: string;
  name: string;
  age: number;
  location: string;
  previousJob: string;
  graduationDate: string;
  currentEmployer: string;
  salaryIncrease: string;
  timeToHire: string;
  testimonial: string;
  quote: string;
  achievements: string[];
  image: string;
  rating: number;
  program: string;
}

const SuccessStories = ({ variant = "full" }: { variant?: "full" | "compact" | "banner" }) => {
  const [currentStory, setCurrentStory] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const successStories: SuccessStory[] = [
    {
      id: "marcus-johnson",
      name: "Marcus Johnson",
      age: 34,
      location: "Minneapolis, MN", 
      previousJob: "Warehouse Supervisor",
      graduationDate: "January 2024",
      currentEmployer: "UPS Freight",
      salaryIncrease: "+$18,000/year",
      timeToHire: "8 days after graduation",
      testimonial: "Titan didn't just teach me to drive a truck - they transformed my entire career trajectory. The personalized training and industry connections got me into UPS making $65K my first year. My family's financial stress is gone.",
      quote: "Best investment I ever made for my family's future",
      achievements: ["$65K first-year salary", "Home daily routes", "Full benefits package", "Promoted to trainer in 6 months"],
      image: "/api/placeholder/120/120",
      rating: 5,
      program: "Class A CDL"
    },
    {
      id: "sarah-martinez",
      name: "Sarah Martinez", 
      age: 29,
      location: "St. Paul, MN",
      previousJob: "Retail Manager",
      graduationDate: "February 2024",
      currentEmployer: "Sysco Foods",
      salaryIncrease: "+$22,000/year",
      timeToHire: "5 days after graduation",
      testimonial: "As a single mom, I needed stable income and benefits fast. Titan's job placement team had me working at Sysco before I even got my final certification. The respect I get as a professional driver versus retail is incredible.",
      quote: "Finally a career that respects my worth and provides for my daughter",
      achievements: ["$58K starting salary", "Local routes (home daily)", "Health insurance", "Career advancement track"],
      image: "/api/placeholder/120/120",
      rating: 5,
      program: "Class A CDL"
    },
    {
      id: "robert-chen",
      name: "Robert Chen",
      age: 45, 
      location: "Bloomington, MN",
      previousJob: "Factory Worker (laid off)",
      graduationDate: "March 2024",
      currentEmployer: "Owner-Operator",
      salaryIncrease: "+$35,000/year",
      timeToHire: "Started immediately after graduation",
      testimonial: "After 20 years in manufacturing, getting laid off felt like the end. Titan showed me trucking could be my second career. Now I'm an owner-operator making more than I ever did in the factory, with complete freedom.",
      quote: "Turned my biggest setback into my greatest comeback",
      achievements: ["$75K+ as owner-operator", "Complete schedule freedom", "Own business owner", "Multiple revenue streams"],
      image: "/api/placeholder/120/120",
      rating: 5,
      program: "Class A CDL + Business Training"
    },
    {
      id: "jennifer-rodriguez",
      name: "Jennifer Rodriguez",
      age: 38,
      location: "Rochester, MN",
      previousJob: "Office Administrator",
      graduationDate: "December 2023", 
      currentEmployer: "FedEx Ground",
      salaryIncrease: "+$15,000/year",
      timeToHire: "3 days after graduation",
      testimonial: "I was tired of office politics and wanted something real. The instructors at Titan treated me with respect from day one and prepared me for everything. FedEx hired me immediately and I love the independence.",
      quote: "Finally found a career where hard work actually pays off",
      achievements: ["$52K starting salary", "Performance bonuses", "Regional routes", "Promotion opportunities"],
      image: "/api/placeholder/120/120",
      rating: 5,
      program: "Class B CDL"
    }
  ];

  // Auto-advance testimonials
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentStory((prev) => (prev + 1) % successStories.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, successStories.length]);

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % successStories.length);
    setIsAutoPlaying(false);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + successStories.length) % successStories.length);
    setIsAutoPlaying(false);
  };

  if (variant === "banner") {
    return (
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-4 px-4 border-b-4 border-yellow-400">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Award className="h-6 w-6 text-yellow-400" />
            <div>
              <span className="font-bold text-lg">🎉 SUCCESS ALERT:</span>
              <span className="ml-2">Marcus J. just got hired at UPS making $65K!</span>
            </div>
          </div>
          <Link to="/contact">
            <Button size="sm" className="bg-yellow-400 text-black hover:bg-yellow-300 font-semibold">
              Your Turn →
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  if (variant === "compact") {
    const story = successStories[currentStory];
    return (
      <Card className="p-6 bg-gradient-to-br from-green-50 to-blue-50 border-green-200">
        <div className="text-center mb-4">
          <Badge className="bg-green-600 text-white mb-2">
            <Star className="mr-1 h-3 w-3" />
            Success Story
          </Badge>
          <div className="flex justify-center mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>
        
        <div className="text-center mb-4">
          <Quote className="h-8 w-8 text-green-600 mx-auto mb-2" />
          <p className="text-sm italic text-muted-foreground mb-3">
            "{story.quote}"
          </p>
          <div className="font-semibold text-foreground">
            {story.name}, {story.age}
          </div>
          <div className="text-xs text-muted-foreground">
            {story.location} • {story.currentEmployer}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 text-xs text-center mb-4">
          <div className="bg-green-100 p-2 rounded">
            <TrendingUp className="h-4 w-4 mx-auto text-green-600 mb-1" />
            <div className="font-semibold text-green-800">{story.salaryIncrease}</div>
            <div className="text-green-600">Salary Increase</div>
          </div>
          <div className="bg-blue-100 p-2 rounded">
            <Calendar className="h-4 w-4 mx-auto text-blue-600 mb-1" />
            <div className="font-semibold text-blue-800">{story.timeToHire}</div>
            <div className="text-blue-600">Time to Hire</div>
          </div>
        </div>

        <div className="flex justify-center space-x-2 mb-4">
          {successStories.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentStory(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentStory ? 'bg-green-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
          <Link to="/contact">
            <Phone className="mr-2 h-4 w-4" />
            Start Your Success Story
          </Link>
        </Button>
      </Card>
    );
  }

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-600 text-white px-6 py-2 text-base">
            <Star className="mr-2 h-4 w-4" />
            Real Success Stories
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Graduates Don't Just Get Jobs —
            <span className="block text-green-600 mt-2">They Transform Their Lives</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet real Titan graduates who went from struggling to thriving in just weeks. 
            Their success isn't luck — it's the Titan advantage.
          </p>
        </div>

        {/* Main Success Story */}
        <div className="mb-12">
          <Card className="p-0 overflow-hidden shadow-2xl border-0 bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              
              {/* Story Content */}
              <div className="lg:col-span-2 p-8 lg:p-12">
                <div className="flex items-center mb-6">
                  <div className="flex space-x-1 mr-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Badge className="bg-green-600 text-white">
                    {successStories[currentStory].program}
                  </Badge>
                </div>

                <Quote className="h-12 w-12 text-green-600 mb-4" />
                
                <blockquote className="text-xl lg:text-2xl font-medium text-foreground mb-6 leading-relaxed">
                  "{successStories[currentStory].testimonial}"
                </blockquote>

                <div className="border-l-4 border-green-600 pl-6 mb-8">
                  <p className="text-lg font-semibold text-green-600 mb-2">
                    "{successStories[currentStory].quote}"
                  </p>
                  <div className="flex items-center text-muted-foreground">
                    <div className="mr-6">
                      <div className="font-semibold text-foreground text-lg">
                        {successStories[currentStory].name}, {successStories[currentStory].age}
                      </div>
                      <div className="flex items-center text-sm">
                        <MapPin className="h-4 w-4 mr-1" />
                        {successStories[currentStory].location}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm">
                        <span className="font-medium">From:</span> {successStories[currentStory].previousJob}
                      </div>
                      <div className="text-sm">
                        <span className="font-medium">To:</span> {successStories[currentStory].currentEmployer}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {successStories.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentStory(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          index === currentStory ? 'bg-green-600' : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" onClick={prevStory}>
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" onClick={nextStory}>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Stats Sidebar */}
              <div className="bg-gradient-to-b from-green-600 to-blue-600 text-white p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-8 text-center">Life-Changing Results</h3>
                
                <div className="space-y-6">
                  <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur">
                    <TrendingUp className="h-8 w-8 mx-auto mb-2" />
                    <div className="text-3xl font-bold">{successStories[currentStory].salaryIncrease}</div>
                    <div className="text-sm opacity-90">Salary Increase</div>
                  </div>
                  
                  <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur">
                    <Calendar className="h-8 w-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold">{successStories[currentStory].timeToHire}</div>
                    <div className="text-sm opacity-90">Time to Get Hired</div>
                  </div>

                  <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur">
                    <Award className="h-8 w-8 mx-auto mb-2" />
                    <div className="text-xl font-bold">Graduated {successStories[currentStory].graduationDate}</div>
                    <div className="text-sm opacity-90">Started Career</div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-semibold mb-4">Key Achievements:</h4>
                  <ul className="space-y-2 text-sm">
                    {successStories[currentStory].achievements.map((achievement, index) => (
                      <li key={index} className="flex items-center">
                        <Star className="h-4 w-4 mr-2 text-yellow-400" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-white/20">
                  <Button className="w-full bg-white text-green-600 hover:bg-gray-100 font-semibold" asChild>
                    <Link to="/contact">
                      <Phone className="mr-2 h-4 w-4" />
                      Start Your Success Story
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: "Graduates Placed", value: "4,200+", icon: Users },
            { label: "Average Salary Increase", value: "+$19K", icon: TrendingUp },
            { label: "Job Placement Rate", value: "98%", icon: Award },
            { label: "Days to Get Hired", value: "14", icon: Calendar }
          ].map((stat, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-all">
              <stat.icon className="h-8 w-8 mx-auto mb-3 text-green-600" />
              <div className="text-3xl font-bold text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Write Your Success Story?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            These aren't just testimonials — they're proof that Titan transforms lives. 
            Your success story could be next.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:6126991403">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8 py-4">
                <Phone className="mr-2 h-5 w-5" />
                Call (612) 699-1403 - Start Today
              </Button>
            </a>
            <Link to="/programs">
              <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-4">
                <Play className="mr-2 h-5 w-5" />
                See All Success Stories
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;