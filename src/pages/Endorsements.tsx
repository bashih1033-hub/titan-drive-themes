import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Users, 
  Bus, 
  Droplet, 
  Truck,
  CheckCircle,
  Clock,
  DollarSign
} from 'lucide-react';

const Endorsements = () => {
  const endorsements = [
    {
      id: "hazmat",
      title: "HazMat Endorsement",
      icon: <Shield className="h-8 w-8 text-secondary" />,
      duration: "1-2 Days",
      price: "$395",
      description: "Transport hazardous materials safely and legally. Required for many high-paying trucking positions.",
      requirements: [
        "Current CDL license",
        "Pass TSA background check",
        "Pass written exam (30 questions)",
        "Fingerprinting required",
        "No disqualifying criminal history"
      ],
      benefits: [
        "Access to higher-paying loads",
        "More job opportunities", 
        "Premium pay rates ($5,000-$15,000 more annually)",
        "Specialized career path",
        "Job security in essential freight"
      ],
      process: [
        "Complete application and background check",
        "Study hazmat regulations and safety procedures",
        "Take practice tests and classroom training",
        "Pass written exam at DMV",
        "Receive endorsement on CDL"
      ]
    },
    {
      id: "passenger",
      title: "Passenger Endorsement", 
      icon: <Users className="h-8 w-8 text-secondary" />,
      duration: "1 Day",
      price: "$295",
      description: "Drive vehicles designed to transport passengers, including city buses and charter coaches.",
      requirements: [
        "Current CDL license",
        "Pass written exam (20 questions)",
        "Pass skills test if required",
        "Clean driving record",
        "Physical fitness requirements"
      ],
      benefits: [
        "Stable local employment",
        "Good benefits packages",
        "Regular home time",
        "Growing industry demand",
        "Public service opportunity"
      ],
      process: [
        "Study passenger vehicle safety",
        "Learn evacuation procedures",
        "Practice pre-trip inspections",
        "Pass written exam",
        "Complete skills test if applicable"
      ]
    },
    {
      id: "school-bus",
      title: "School Bus Endorsement",
      icon: <Bus className="h-8 w-8 text-secondary" />,
      duration: "2-3 Days", 
      price: "$495",
      description: "Safely transport students to and from school. Includes both Passenger and School Bus endorsements.",
      requirements: [
        "Current CDL license",
        "Pass background check",
        "Pass written exams (Passenger + School Bus)",
        "Pass skills test",
        "Clean driving record (5+ years)"
      ],
      benefits: [
        "Excellent work-life balance",
        "Summers off option",
        "Good benefits and pension",
        "Meaningful work with children",
        "Local routes only"
      ],
      process: [
        "Complete application and background check",
        "Study school bus safety procedures",
        "Learn student management techniques",
        "Pass written and skills tests",
        "Complete district-specific training"
      ]
    },
    {
      id: "tanker",
      title: "Tanker Endorsement",
      icon: <Droplet className="h-8 w-8 text-secondary" />,
      duration: "1 Day",
      price: "$295", 
      description: "Transport liquid cargo in tanker vehicles. Essential for fuel, chemical, and food-grade hauling.",
      requirements: [
        "Current CDL license",
        "Pass written exam (20 questions)",
        "Understand liquid surge effects",
        "Safety training completion"
      ],
      benefits: [
        "Specialized high-demand skill",
        "Premium pay rates",
        "Less competition for jobs",
        "Variety of cargo types",
        "Regional and local opportunities"
      ],
      process: [
        "Study tanker vehicle characteristics",
        "Learn liquid surge management",
        "Understand loading/unloading procedures",
        "Pass written exam",
        "Practice with experienced drivers"
      ]
    },
    {
      id: "doubles-triples",
      title: "Doubles/Triples Endorsement",
      icon: <Truck className="h-8 w-8 text-secondary" />,
      duration: "1 Day",
      price: "$295",
      description: "Operate combination vehicles with multiple trailers. Common in LTL (Less-Than-Truckload) operations.",
      requirements: [
        "Current CDL license", 
        "Pass written exam (20 questions)",
        "Understand coupling/uncoupling",
        "Safety inspection knowledge"
      ],
      benefits: [
        "LTL company opportunities",
        "Higher hourly wages",
        "More freight efficiency",
        "Specialized skill set",
        "Career advancement potential"
      ],
      process: [
        "Study multiple trailer safety",
        "Learn coupling procedures",
        "Understand weight distribution",
        "Pass written exam",
        "Practice backing with multiple trailers"
      ]
    }
  ];

  return (
    <>
      <SEOHead 
        title="CDL Endorsements - HazMat, Passenger, School Bus | Titan Trucking School"
        description="Add valuable endorsements to your CDL at Titan Trucking School. HazMat, Passenger, School Bus, Tanker, and Doubles/Triples endorsement training in Minnesota."
        keywords="CDL endorsements, HazMat endorsement, passenger endorsement, school bus endorsement, tanker endorsement, doubles triples endorsement, Minnesota CDL training"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-4 bg-secondary text-secondary-foreground">
              Specialized Training
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              CDL Endorsements
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/90">
              Expand your career opportunities and earning potential with specialized CDL endorsements. 
              Open doors to higher-paying positions and unique driving opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Get CDL Endorsements?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Endorsements make you more valuable to employers and can significantly increase your earning potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 border-border/50">
              <DollarSign className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Higher Pay</h3>
              <p className="text-muted-foreground">Endorsements can increase your annual salary by $5,000-$15,000 or more</p>
            </Card>
            <Card className="text-center p-6 border-border/50">
              <Users className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">More Opportunities</h3>
              <p className="text-muted-foreground">Access specialized positions that many drivers can't qualify for</p>
            </Card>
            <Card className="text-center p-6 border-border/50">
              <Shield className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Job Security</h3>
              <p className="text-muted-foreground">Specialized skills make you more valuable and harder to replace</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Endorsements Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {endorsements.map((endorsement, index) => (
              <Card key={endorsement.id} id={endorsement.id} className="overflow-hidden shadow-strong">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  <div className="bg-gradient-subtle p-8 flex flex-col justify-center items-center text-center">
                    <div className="mb-4 bg-white p-4 rounded-full shadow-soft">
                      {endorsement.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{endorsement.title}</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-center space-x-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">{endorsement.duration}</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <DollarSign className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">{endorsement.price}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2 p-8">
                    <p className="text-lg text-muted-foreground mb-6">{endorsement.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Requirements:</h4>
                        <ul className="space-y-1">
                          {endorsement.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start text-sm">
                              <CheckCircle className="h-4 w-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Benefits:</h4>
                        <ul className="space-y-1">
                          {endorsement.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start text-sm">
                              <CheckCircle className="h-4 w-4 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Training Process:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                        {endorsement.process.map((step, idx) => (
                          <div key={idx} className="flex items-start text-sm">
                            <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5 flex-shrink-0">
                              {idx + 1}
                            </span>
                            {step}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link to="/contact" className="flex-1">
                        <Button className="w-full" size="lg">
                          Enroll in {endorsement.title}
                        </Button>
                      </Link>
                      <Button variant="outline" size="lg" className="flex-1">
                        Get More Information
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Add Endorsements to Your CDL?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Invest in your career with specialized endorsements. Our expert instructors will prepare you 
            for success with hands-on training and comprehensive exam preparation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="px-8 py-4">
                <Shield className="mr-2 h-5 w-5" />
                Start Training Today
              </Button>
            </Link>
            <a href="tel:6515551234">
              <Button size="lg" variant="outline" className="px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20">
                Call (651) 555-1234
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Endorsements;