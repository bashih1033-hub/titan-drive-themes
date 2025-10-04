import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileCheck, MessageSquare, Calendar, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const LeadMagnets = () => {
  const magnets = [
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Free Consultation",
      description: "Speak with our CDL experts and get personalized career guidance",
      cta: "Schedule Free Call",
      action: "tel:6126991403",
      color: "text-blue-600"
    },
    {
      icon: <FileCheck className="h-8 w-8" />,
      title: "Free CDL Practice Test",
      description: "Test your knowledge with our comprehensive practice exam",
      cta: "Take Practice Test",
      action: "/contact",
      color: "text-green-600"
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Campus Tour",
      description: "See our training facilities and meet our expert instructors",
      cta: "Book Tour",
      action: "/contact",
      color: "text-purple-600"
    },
    {
      icon: <Download className="h-8 w-8" />,
      title: "Career Guide",
      description: "Download our free guide: 'Your First Year as a Truck Driver'",
      cta: "Get Free Guide",
      action: "/contact",
      color: "text-orange-600"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Get Started Today - 100% Free
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No commitment required. Explore your CDL training options with our free resources.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {magnets.map((magnet, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className={`${magnet.color} mb-3`}>
                  {magnet.icon}
                </div>
                <CardTitle className="text-xl">{magnet.title}</CardTitle>
                <CardDescription>{magnet.description}</CardDescription>
              </CardHeader>
              <CardContent>
                {magnet.action.startsWith('tel:') ? (
                  <a href={magnet.action}>
                    <Button className="w-full">{magnet.cta}</Button>
                  </a>
                ) : (
                  <Link to={magnet.action}>
                    <Button className="w-full">{magnet.cta}</Button>
                  </Link>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadMagnets;
