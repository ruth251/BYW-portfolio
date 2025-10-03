import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, Shield, Leaf, Users } from "lucide-react";
import welin from "@/assets/welin.jpg";

const Welin = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${welin})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/60" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground animate-fadeInUp">
            Welin
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Advanced Agrochemical Solutions for Sustainable Agriculture
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-foreground text-gradient">Who We Are</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Welin is a leading provider of advanced agrochemical solutions, specializing in crop protection 
              and yield enhancement products. With over 15 years of experience, we have established ourselves 
              as a trusted partner for farmers seeking innovative and effective agricultural inputs.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our commitment to quality and innovation has made us a preferred choice for farmers across the region, 
              helping them achieve better harvests while maintaining environmental sustainability.
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
              <Leaf className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-foreground">Crop Protection</h3>
              <p className="text-muted-foreground">
                Comprehensive range of herbicides, insecticides, and fungicides for effective pest and disease management.
              </p>
            </div>
            <div className="glass-card p-8 rounded-lg card-modern">
              <CheckCircle2 className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-foreground">Yield Enhancement</h3>
              <p className="text-muted-foreground">
                Innovative fertilizers and growth regulators designed to maximize crop productivity and quality.
              </p>
            </div>
            <div className="glass-card p-8 rounded-lg card-modern">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-foreground">Technical Support</h3>
              <p className="text-muted-foreground">
                Expert agronomic advice and training programs to help farmers optimize their crop management practices.
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
                  To empower farmers with safe, effective, and environmentally responsible agrochemical solutions 
                  that enhance crop productivity and contribute to sustainable agriculture.
                </p>
              </div>
              <div className="glass-card p-8 rounded-lg card-modern">
                <h2 className="text-3xl font-bold mb-6 text-primary">Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be the most trusted and innovative agrochemical company in the region, recognized for our 
                  commitment to quality, sustainability, and farmer success.
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
                We maintain the highest standards in product quality, sourcing only from reputable manufacturers 
                and conducting rigorous quality checks.
              </p>
            </div>
            <div className="glass-card p-6 rounded-lg card-modern">
              <h3 className="text-xl font-semibold mb-3 text-primary flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6" />
                Integrity and Reliability
              </h3>
              <p className="text-muted-foreground">
                We build trust through transparent business practices, reliable product delivery, and honest 
                communication with our customers.
              </p>
            </div>
            <div className="glass-card p-6 rounded-lg card-modern">
              <h3 className="text-xl font-semibold mb-3 text-primary flex items-center gap-2">
                <Leaf className="h-6 w-6" />
                Sustainability
              </h3>
              <p className="text-muted-foreground">
                We promote environmentally responsible farming practices and offer products that minimize 
                ecological impact while maximizing results.
              </p>
            </div>
            <div className="glass-card p-6 rounded-lg card-modern">
              <h3 className="text-xl font-semibold mb-3 text-primary flex items-center gap-2">
                <Users className="h-6 w-6" />
                Customer-Centric Approach
              </h3>
              <p className="text-muted-foreground">
                We prioritize farmer needs, providing personalized support, technical guidance, and solutions 
                tailored to local agricultural conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground text-gradient">Why Choose Welin</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="glass-card p-6 rounded-lg card-modern">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Proven Track Record</h3>
              <p className="text-muted-foreground">
                Over 15 years of successful partnerships with farmers, delivering consistent results and 
                building lasting relationships based on trust and performance.
              </p>
            </div>
            <div className="glass-card p-6 rounded-lg card-modern">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Comprehensive Product Range</h3>
              <p className="text-muted-foreground">
                Wide selection of registered, high-quality agrochemicals suitable for various crops and 
                agricultural conditions.
              </p>
            </div>
            <div className="glass-card p-6 rounded-lg card-modern">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Expert Technical Support</h3>
              <p className="text-muted-foreground">
                Dedicated team of agronomists providing on-field support, training, and customized crop 
                management solutions.
              </p>
            </div>
            <div className="glass-card p-6 rounded-lg card-modern">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Competitive Pricing</h3>
              <p className="text-muted-foreground">
                Fair and transparent pricing with excellent value for money, helping farmers optimize their 
                input costs without compromising on quality.
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
                <p className="text-muted-foreground">Welin Agricultural Solutions PLC</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Registration Status</h3>
                <p className="text-muted-foreground">
                  Fully licensed and registered with relevant agricultural and trade authorities
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Compliance</h3>
                <p className="text-muted-foreground">
                  All products are registered and approved by the Ministry of Agriculture, meeting international 
                  safety and quality standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Partner With Welin Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied farmers who trust Welin for their agrochemical needs.
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

export default Welin;
