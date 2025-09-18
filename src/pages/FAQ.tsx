import SEOHead from '@/components/SEOHead';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Clock, 
  DollarSign, 
  GraduationCap, 
  Users, 
  FileText,
  CheckCircle,
  Phone,
  MapPin,
  Calendar
} from 'lucide-react';

const FAQ = () => {
  const faqCategories = [
    {
      category: "CDL Training Duration & Requirements",
      icon: <Clock className="h-5 w-5" />,
      faqs: [
        {
          question: "How long does CDL training take at Titan Trucking School?",
          answer: "CDL training duration varies by license type: Class A CDL training takes 3-4 weeks (160 hours), Class B CDL training takes 2-3 weeks (120 hours), and CDL refresher courses take 1-2 weeks (40-80 hours). We offer both full-time and part-time schedules to accommodate your needs.",
          keywords: "how long does CDL training take, CDL training duration, Class A CDL time, Class B CDL length"
        },
        {
          question: "What are the requirements to get a CDL in Minnesota?",
          answer: "To get a CDL in Minnesota, you must be at least 18 years old (21+ for interstate driving), have a valid driver's license for 1+ years, maintain a clean driving record for 3+ years, pass a DOT physical examination, pass drug and alcohol screening, and complete Entry Level Driver Training (ELDT) from a certified school like Titan Trucking School.",
          keywords: "Minnesota CDL requirements, CDL eligibility Minnesota, ELDT training requirements"
        },
        {
          question: "Can I get my CDL if I have a DUI or criminal record?",
          answer: "Having a DUI or criminal record doesn't automatically disqualify you from getting a CDL, but it depends on the severity, timing, and type of offense. Generally, you must wait 1-3 years after a DUI conviction. We recommend discussing your specific situation with our admissions team who can provide personalized guidance based on Minnesota CDL regulations.",
          keywords: "CDL with DUI Minnesota, criminal record CDL eligibility, CDL background check requirements"
        },
        {
          question: "Do I need a CDL permit before starting training?",
          answer: "Yes, you must obtain your CDL learner's permit before beginning hands-on training. You can get your permit by studying the Minnesota CDL Manual and passing the written knowledge tests at the DMV. We provide study materials and can guide you through the permit process before your training starts.",
          keywords: "CDL permit Minnesota, CDL learner's permit requirements, when to get CDL permit"
        }
      ]
    },
    {
      category: "CDL Training Costs & Financing",
      icon: <DollarSign className="h-5 w-5" />,
      faqs: [
        {
          question: "How much does CDL training cost at Titan Trucking School?",
          answer: "CDL training costs vary by program: Class A CDL training is $4,995, Class B CDL training is $3,995, and CDL refresher courses start at $1,995. We offer multiple financing options including federal financial aid (Pell Grants), payment plans, employer sponsorship programs, and VA benefits for qualified veterans.",
          keywords: "CDL training cost Minnesota, CDL school tuition, Class A CDL price, Class B CDL cost"
        },
        {
          question: "Does financial aid cover CDL training?",
          answer: "Yes, CDL training at Titan Trucking School is eligible for federal financial aid including Pell Grants and student loans. We also work with Minnesota nonprofits like Avivo and CareerForce that can cover CDL tuition for qualified individuals. These nonprofit partnerships provide additional funding opportunities to help students achieve their career goals.",
          keywords: "CDL training financial aid, Pell Grant CDL school, FAFSA CDL training, federal aid trucking school"
        },
        {
          question: "Will trucking companies pay for my CDL training?",
          answer: "Yes, many trucking companies offer paid CDL training programs or tuition reimbursement. We partner with numerous carriers who sponsor student training in exchange for employment commitments. Company-sponsored training typically requires 6-12 months of employment with the sponsoring company after graduation.",
          keywords: "company paid CDL training, trucking company sponsorship, employer CDL programs Minnesota"
        },
        {
          question: "Can veterans use VA benefits for CDL training?",
          answer: "Yes, veterans can use VA education benefits including the GI Bill for CDL training at Titan Trucking School. VA benefits can cover tuition and fees for qualified veterans seeking professional CDL training.",
          keywords: "VA benefits CDL training, GI Bill trucking school, veterans CDL training Minnesota"
        }
      ]
    },
    {
      category: "Job Placement & Career Opportunities",
      icon: <Users className="h-5 w-5" />,
      faqs: [
        {
          question: "How much money can I make as a truck driver in Minnesota?",
          answer: "Truck driver salaries in Minnesota vary by experience and route type. Entry-level Class A CDL drivers earn $50,000-$65,000 annually, experienced drivers earn $65,000-$85,000+, and specialized hauling (hazmat, oversized loads) can exceed $90,000. Local Class B drivers typically earn $40,000-$55,000, while owner-operators can earn $100,000-$150,000+ annually.",
          keywords: "truck driver salary Minnesota, CDL driver pay Minnesota, trucking wages Minneapolis St Paul"
        },
        {
          question: "Do you help graduates find truck driving jobs?",
          answer: "Yes, Titan Trucking School provides comprehensive job placement assistance to all graduates. We maintain partnerships with over 50 trucking companies in Minnesota and surrounding states. Our career services include resume writing, interview preparation, job matching based on your preferences, and ongoing support during your first year of employment.",
          keywords: "CDL job placement Minnesota, truck driving jobs after training, trucking companies hiring Minnesota"
        },
        {
          question: "What types of truck driving jobs are available in Minnesota?",
          answer: "Minnesota offers diverse trucking opportunities including local delivery (home daily), regional routes (2-3 states, home weekends), over-the-road (OTR) long-distance, specialized transport (heavy haul, tanker, flatbed), construction and mining operations, and government/municipal positions. The Twin Cities area has particularly strong demand for local and regional drivers.",
          keywords: "types of truck driving jobs Minnesota, local trucking jobs Minneapolis, regional trucking Minnesota"
        },
        {
          question: "Can I start truck driving immediately after getting my CDL?",
          answer: "Yes, you can start working immediately after receiving your CDL and graduating from Titan Trucking School. Many of our students have job offers before graduation through our employer partnerships. However, some positions may require additional experience or endorsements, which we can help you obtain through advanced training programs.",
          keywords: "immediate truck driving jobs CDL, entry level trucking jobs Minnesota, new CDL driver opportunities"
        }
      ]
    },
    {
      category: "CDL Endorsements & Specialized Training",
      icon: <FileText className="h-5 w-5" />,
      faqs: [
        {
          question: "What CDL endorsements should I get for better job opportunities?",
          answer: "The most valuable CDL endorsements for job opportunities include HazMat (hazardous materials) which increases pay by $5,000-$10,000 annually, Passenger endorsement for bus driving opportunities, School Bus endorsement for steady local work with benefits, Tanker endorsement for liquid transport, and Doubles/Triples for multiple trailer operations. We offer training for all major endorsements.",
          keywords: "best CDL endorsements Minnesota, HazMat endorsement training, passenger endorsement CDL, school bus endorsement"
        },
        {
          question: "How do I get a HazMat endorsement in Minnesota?",
          answer: "To get a HazMat endorsement in Minnesota, you must pass the HazMat knowledge test, complete a TSA background check and fingerprinting, pay the required fees (approximately $94), and maintain a clean driving record. Titan Trucking School provides comprehensive HazMat training including test preparation and guidance through the application process.",
          keywords: "HazMat endorsement Minnesota, hazmat CDL training, TSA background check CDL"
        },
        {
          question: "What is the difference between Class A and Class B CDL?",
          answer: "Class A CDL allows you to operate combination vehicles (truck with trailer) with a combined weight over 26,000 lbs, including tractor-trailers, truck and trailer combinations, and livestock carriers. Class B CDL allows operation of single vehicles over 26,000 lbs without trailers, including straight trucks, large buses, segmented buses, and trucks with small trailers under 10,000 lbs.",
          keywords: "Class A vs Class B CDL difference, CDL license types Minnesota, tractor trailer vs straight truck"
        },
        {
          question: "Can I upgrade from Class B to Class A CDL later?",
          answer: "Yes, you can easily upgrade from Class B to Class A CDL by taking additional training focused on combination vehicle operation, pre-trip inspection differences, and coupling/uncoupling procedures. At Titan Trucking School, Class B graduates receive discounted rates for Class A upgrade training, typically requiring 1-2 weeks of additional instruction.",
          keywords: "upgrade Class B to Class A CDL, CDL license upgrade training, Class A CDL upgrade cost"
        }
      ]
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqCategories.flatMap(category => 
      category.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    )
  };

  return (
    <>
      <SEOHead 
        title="CDL Training FAQ - Your Questions Answered | Titan Trucking School Minnesota"
        description="Get answers to frequently asked questions about CDL training costs, requirements, duration, job placement, and career opportunities at Titan Trucking School in Minnesota."
        keywords="CDL training FAQ, how long does CDL training take, CDL training cost Minnesota, CDL requirements Minnesota, truck driver salary Minnesota, CDL job placement"
        localArea="Twin Cities Metro"
        faqData={{
          questions: faqCategories.flatMap(category => 
            category.faqs.map(faq => ({
              question: faq.question,
              answer: faq.answer
            }))
          )
        }}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-4 bg-secondary text-secondary-foreground">
              Frequently Asked Questions
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              CDL Training Questions Answered
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/90">
              Get instant answers to the most common questions about CDL training, costs, 
              requirements, and career opportunities in Minnesota.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Everything You Need to Know About CDL Training
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From training duration and costs to career opportunities and requirements, 
              find comprehensive answers to help you start your trucking career.
            </p>
          </div>

          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{category.category}</h3>
                </div>

                <div className="grid gap-6">
                  {category.faqs.map((faq, faqIndex) => (
                    <Card key={faqIndex} className="border-border/50 hover:shadow-strong transition-all">
                      <CardHeader className="pb-4">
                        <CardTitle className="text-lg text-foreground flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                          <span>{faq.question}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </div>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {faq.keywords.split(', ').map((keyword, keywordIndex) => (
                            <Badge key={keywordIndex} variant="outline" className="text-xs">
                              {keyword}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 lg:py-24 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Still Have Questions About CDL Training?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
            Our experienced admissions team is ready to provide personalized answers 
            and help you start your trucking career at Titan Trucking School.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:6126991403" className="inline-flex items-center justify-center">
              <div className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Call (612) 699-1403</span>
              </div>
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center">
              <div className="bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-secondary/90 transition-colors flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>Visit Our School</span>
              </div>
            </Link>
            <Link to="/programs" className="inline-flex items-center justify-center">
              <div className="border border-border px-8 py-4 rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-colors flex items-center space-x-2">
                <GraduationCap className="h-5 w-5" />
                <span>View Programs</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;