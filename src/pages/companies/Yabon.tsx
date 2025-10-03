import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, Shield, Sprout, Users } from "lucide-react";
import yabon from "@/assets/yabon.jpg";

const Yabon = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${yabon})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/60" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground animate-fadeInUp">
            Yabon
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Innovative Agricultural Inputs & Technical Support for Modern Farming
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-foreground text-gradient">Who We Are</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Yabon is a forward-thinking agricultural inputs company committed to supporting modern farming 
              practices with innovative products and comprehensive technical services. We specialize in providing 
              farmers with the tools, knowledge, and support they need to succeed in today's competitive agricultural landscape.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our approach combines quality agricultural inputs with hands-on technical support, ensuring that 
              farmers not only have access to the best products but also know how to use them effectively for 
              maximum benefit.
            </p>
          </div>
        </div>
      </section>

      {/* Core Business Areas */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground text-gradient">Core Business Areas</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="glass-card p-8 rounded-lg card-modern">
              <Sprout className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-foreground">Agricultural Inputs</h3>
              <p className="text-muted-foreground">
                Premium seeds, fertilizers, and specialty agricultural products designed for optimal crop 
                performance and sustainability.
              </p>
            </div>
            <div className="glass-card p-8 rounded-lg card-modern">
              <CheckCircle2 className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-foreground">Technical Services</h3>
              <p className="text-muted-foreground">
                Comprehensive agronomic support including soil testing, crop planning, and precision 
                agriculture consultation.
              </p>
            </div>
            <div className="glass-card p-8 rounded-lg card-modern">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-foreground">Farmer Training</h3>
              <p className="text-muted-foreground">
                Educational programs and workshops on modern farming techniques, sustainable practices, 
                and technology adoption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="glass-card p-8 rounded-lg card-modern">
                <h2 className="text-3xl font-bold mb-6 text-primary">Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To empower farmers with innovative agricultural inputs and expert technical support that 
                  enable sustainable, profitable farming and contribute to food security.
                </p>
              </div>
              <div className="glass-card p-8 rounded-lg card-modern">
                <h2 className="text-3xl font-bold mb-6 text-primary">Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be the preferred partner for progressive farmers, recognized for our innovation, technical 
                  excellence, and commitment to sustainable agriculture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground text-gradient">Our Core Values</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="glass-card p-6 rounded-lg card-modern">
              <h3 className="text-xl font-semibold mb-3 text-primary flex items-center gap-2">
                <Shield className="h-6 w-6" />
                Commitment to Quality
              </h3>
              <p className="text-muted-foreground">
                We offer only premium agricultural inputs from trusted suppliers, ensuring consistent quality 
                and performance for our farmers.
              </p>
            </div>
            <div className="glass-card p-6 rounded-lg card-modern">
              <h3 className="text-xl font-semibold mb-3 text-primary flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6" />
                Integrity and Reliability
              </h3>
              <p className="text-muted-foreground">
                We maintain honest, transparent relationships with farmers, providing accurate information 
                and dependable service.
              </p>
            </div>
            <div className="glass-card p-6 rounded-lg card-modern">
              <h3 className="text-xl font-semibold mb-3 text-primary flex items-center gap-2">
                <Sprout className="h-6 w-6" />
                Sustainability
              </h3>
              <p className="text-muted-foreground">
                We promote environmentally responsible farming practices and products that protect soil health, 
                water resources, and biodiversity.
              </p>
            </div>
            <div className="glass-card p-6 rounded-lg card-modern">
              <h3 className="text-xl font-semibold mb-3 text-primary flex items-center gap-2">
                <Users className="h-6 w-6" />
                Customer-Centric Approach
              </h3>
              <p className="text-muted-foreground">
                We listen to farmers' needs and challenges, providing customized solutions and ongoing support 
                throughout the growing season.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground text-gradient">Why Choose Yabon</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="glass-card p-6 rounded-lg card-modern">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Innovation Focus</h3>
              <p className="text-muted-foreground">
                We continuously introduce new technologies and products that help farmers stay competitive 
                and improve their operations.
              </p>
            </div>
            <div className="glass-card p-6 rounded-lg card-modern">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Comprehensive Support</h3>
              <p className="text-muted-foreground">
                Beyond product supply, we provide complete technical assistance including agronomic advice, 
                training, and problem-solving support.
              </p>
            </div>
            <div className="glass-card p-6 rounded-lg card-modern">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Local Knowledge</h3>
              <p className="text-muted-foreground">
                Deep understanding of local soil conditions, climate patterns, and crop requirements enables 
                us to provide highly relevant recommendations.
              </p>
            </div>
            <div className="glass-card p-6 rounded-lg card-modern">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Results-Driven</h3>
              <p className="text-muted-foreground">
                We measure our success by our farmers' success, focusing on delivering tangible improvements 
                in yield, quality, and profitability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Details */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-foreground text-gradient">Legal Details</h2>
            <div className="glass-card p-8 rounded-lg card-modern space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Registered Company Name</h3>
                <p className="text-muted-foreground">Yabon Agricultural Inputs PLC</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Registration Status</h3>
                <p className="text-muted-foreground">
                  Fully licensed agricultural input supplier registered with relevant authorities
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Compliance</h3>
                <p className="text-muted-foreground">
                  All products meet national and international agricultural standards, with proper registration 
                  and quality certifications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Partner With Yabon Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join progressive farmers who choose Yabon for innovative solutions and expert support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="outline" size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 btn-modern">
                Contact Us
              </Button>
            </Link>
            <Link to="/products">
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 btn-modern">
                View Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Yabon;
