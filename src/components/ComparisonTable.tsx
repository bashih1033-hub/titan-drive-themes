import { CheckCircle, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ComparisonTable = () => {
  const features = [
    { feature: "98% Pass Rate Guarantee", titan: true, others: false },
    { feature: "4:1 Student-to-Instructor Ratio", titan: true, others: false },
    { feature: "Job Placement Assistance", titan: true, others: true },
    { feature: "Modern Training Equipment", titan: true, others: false },
    { feature: "Flexible Financing Options", titan: true, others: true },
    { feature: "Weekend Training Available", titan: true, others: false },
    { feature: "85+ Employer Partnerships", titan: true, others: false },
    { feature: "Money-Back Guarantee", titan: true, others: false },
    { feature: "Average Time to Get Hired", titanValue: "14 days", othersValue: "30-45 days" },
    { feature: "Average Class Size", titanValue: "4 students", othersValue: "12+ students" },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary text-primary-foreground px-6 py-2">
            See the Difference
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Why Titan Outperforms Other CDL Schools
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Not all CDL schools are created equal. Here's how we compare to typical CDL training programs.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto overflow-hidden">
          <CardHeader className="bg-primary text-primary-foreground">
            <div className="grid grid-cols-3 gap-4 items-center">
              <div></div>
              <CardTitle className="text-center">
                <div className="text-2xl font-bold">Titan Trucking</div>
                <Badge className="mt-2 bg-yellow-400 text-black">Minnesota's #1</Badge>
              </CardTitle>
              <CardTitle className="text-center text-xl">
                Typical CDL Schools
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            {features.map((item, index) => (
              <div 
                key={index}
                className={cn(
                  "grid grid-cols-3 gap-4 items-center p-4 border-b border-border",
                  index % 2 === 0 ? "bg-background" : "bg-accent/30"
                )}
              >
                <div className="font-medium text-foreground text-sm md:text-base">
                  {item.feature}
                </div>
                <div className="text-center">
                  {item.titanValue ? (
                    <span className="text-green-600 font-bold">{item.titanValue}</span>
                  ) : item.titan ? (
                    <CheckCircle className="h-6 w-6 text-green-600 mx-auto" />
                  ) : (
                    <X className="h-6 w-6 text-red-500 mx-auto" />
                  )}
                </div>
                <div className="text-center">
                  {item.othersValue ? (
                    <span className="text-muted-foreground">{item.othersValue}</span>
                  ) : item.others ? (
                    <CheckCircle className="h-6 w-6 text-green-600 mx-auto" />
                  ) : (
                    <X className="h-6 w-6 text-muted-foreground mx-auto" />
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}

export default ComparisonTable;
