import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { DollarSign, CreditCard, Building, Users, CheckCircle } from 'lucide-react';

const FinancingOptions = () => {
  const options = [
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Payment Plans",
      description: "Flexible monthly installments",
      details: [
        "As low as $199/month",
        "No credit check required",
        "Start training while you pay",
        "Interest-free options available"
      ],
      popular: false
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Third-Party Financing",
      description: "Partner lenders for qualified students",
      details: [
        "Quick approval process",
        "Competitive interest rates",
        "Deferred payment options",
        "Credit building opportunity"
      ],
      popular: true
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Employer Sponsorship",
      description: "Company-paid training programs",
      details: [
        "100% tuition covered",
        "Job guaranteed upon graduation",
        "Work while you learn",
        "85+ partner companies"
      ],
      popular: false
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Workforce Programs",
      description: "State and federal assistance",
      details: [
        "WIOA grants available",
        "Veterans benefits accepted",
        "State retraining programs",
        "Unemployment assistance"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-green-600 text-white px-6 py-2">
            <DollarSign className="mr-2 h-4 w-4" />
            Affordable Training
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Multiple Ways to Finance Your CDL Training
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't let cost hold you back. We offer flexible financing solutions to fit every budget 
            and help you start your trucking career without financial stress.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {options.map((option, index) => (
            <Card key={index} className={cn(
              "relative hover:shadow-xl transition-all",
              option.popular && "border-primary border-2"
            )}>
              {option.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                  Most Popular
                </Badge>
              )}
              <CardHeader>
                <div className="text-primary mb-3">
                  {option.icon}
                </div>
                <CardTitle className="text-xl">{option.title}</CardTitle>
                <CardDescription>{option.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {option.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-primary">
          <CardContent className="p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Get Your Personalized Financing Quote
              </h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Call us today for a free consultation. We'll review all available options and help you 
                choose the best financing solution for your situation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:6126991403">
                  <Button size="lg" className="px-8 py-4">
                    <DollarSign className="mr-2 h-5 w-5" />
                    Discuss Financing Options
                  </Button>
                </a>
                <Button size="lg" variant="outline" className="px-8 py-4">
                  <CheckCircle className="mr-2 h-5 w-5" />
                  Check Eligibility
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}

export default FinancingOptions;
