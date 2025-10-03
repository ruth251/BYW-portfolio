import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, Users, BookOpen, Headphones, MapPin, Clock } from "lucide-react";
import greenbg from "@/assets/greenbg.jpg";

const Services = () => {
  const services = [
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Reliable Distribution",
      description: "Efficient distribution network ensuring timely delivery of products across the region.",
      features: [
        "Regional warehouse facilities",
        "Cold chain for sensitive products", 
        "Scheduled delivery routes",
        "Emergency supply services"
      ]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Technical Consultation",
      description: "Expert guidance from our experienced team of agricultural and veterinary specialists.",
      features: [
        "Product selection guidance",
        "Application recommendations",
        "Dosage calculations",
        "Problem-solving support"
      ]
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Training Programs",
      description: "Educational programs and workshops for farmers and veterinary professionals.",
      features: [
        "Product training sessions",
        "Best practice workshops",
        "Safety protocol training",
        "Certification programs"
      ]
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "Customer Support",
      description: "Dedicated customer service team available to assist with all your needs.",
      features: [
        "24/7 emergency hotline",
        "Order tracking system",
        "Technical helpdesk",
        "Multi-language support"
      ]
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Field Support",
      description: "On-site technical assistance and field visits by our expert team.",
      features: [
        "Farm/facility visits",
        "Product demonstrations",
        "Application monitoring",
        "Results evaluation"
      ]
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "After-Sales Service",
      description: "Comprehensive post-purchase support ensuring customer satisfaction.",
      features: [
        "Product performance monitoring",
        "Issue resolution",
        "Replacement guarantee",
        "Continuous improvement feedback"
      ]
    }
  ];

  const ServiceCard = ({ service }: { service: any }) => (
    <Card className="h-full shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 card-modern group">
      <CardHeader className="relative overflow-hidden">
        <div className="text-primary mb-4 group-hover:scale-105 transition-transform duration-300">{service.icon}</div>
        <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{service.title}</CardTitle>
        <div className="absolute inset-0 bg-gradient-subtle opacity-0 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none" />
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{service.description}</p>
        <ul className="space-y-2">
          {service.features.map((feature: string, index: number) => (
            <li key={index} className="flex items-start transition-colors duration-300">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">{feature}</span>
            </li>
          ))}
        </ul>
        <Button variant="outline" className="w-full btn-modern" asChild>
          <Link to="/contact">Learn More</Link>
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}

<section 
  className="py-20 bg-cover bg-center bg-no-repeat relative flex flex-col items-center justify-center text-center px-4"
  style={{ backgroundImage: `url(${greenbg})` }}
>
  <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
    Our Services
  </h1>
  <p className="text-xl text-muted-black max-w-3xl mx-auto">
    Comprehensive support services designed to help you succeed in agriculture and veterinary care. Beyond products, we provide the expertise and assistance you need.
  </p>
</section>


      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Complete Service Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We go beyond product supply to provide comprehensive support throughout your journey. 
              Our services are designed to maximize your success and ensure optimal outcomes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              How We Serve You
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our systematic approach ensures you receive the best service from initial consultation 
              to ongoing support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Consultation</h3>
              <p className="text-muted-foreground">
                Initial assessment of your needs and requirements
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Recommendation</h3>
              <p className="text-muted-foreground">
                Customized product and service recommendations
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Implementation</h3>
              <p className="text-muted-foreground">
                Product delivery and application support
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Follow-up</h3>
              <p className="text-muted-foreground">
                Ongoing support and performance monitoring
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Experience Our Services?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Get in touch with our expert team to discuss how we can support your agricultural 
            or veterinary needs with our comprehensive service solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90" asChild>
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90" asChild>
              <Link to="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;