import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, Shield, Heart, Users } from "lucide-react";
import bnosha from "@/assets/bnosha.jpg";

const Bnosha = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bnosha})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/60" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground animate-fadeInUp">
            Bnosha
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Leading Veterinary Pharmaceutical Distribution & Animal Health Solutions
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-foreground text-gradient">Who We Are</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Bnosha is a premier veterinary pharmaceutical distribution company dedicated to improving animal 
              health and welfare. With extensive experience in the veterinary sector, we provide comprehensive 
              solutions for livestock health management, disease prevention, and treatment.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our mission is to ensure that veterinarians and livestock owners have access to high-quality, 
              effective veterinary products that promote animal health, productivity, and welfare across the region.
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
              <Heart className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-foreground">Veterinary Pharmaceuticals</h3>
              <p className="text-muted-foreground">
                Comprehensive range of veterinary medicines including antibiotics, antiparasitics, and vaccines 
                for all types of livestock.
              </p>
            </div>
            <div className="glass-card p-8 rounded-lg card-modern">
              <CheckCircle2 className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-foreground">Animal Health Products</h3>
              <p className="text-muted-foreground">
                Nutritional supplements, feed additives, and health management products designed to enhance 
                animal productivity and well-being.
              </p>
            </div>
            <div className="glass-card p-8 rounded-lg card-modern">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-foreground">Professional Support</h3>
              <p className="text-muted-foreground">
                Expert veterinary guidance, technical training, and herd health management programs for 
                optimal livestock care.
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
                  To provide veterinarians and livestock owners with reliable, effective, and safe veterinary 
                  products and services that promote animal health, welfare, and productivity.
                </p>
              </div>
              <div className="glass-card p-8 rounded-lg card-modern">
                <h2 className="text-3xl font-bold mb-6 text-primary">Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be the leading veterinary pharmaceutical distribution company in the region, recognized 
                  for our commitment to animal welfare, product quality, and professional excellence.
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
                We ensure all veterinary products meet the highest quality standards, sourced from reputable 
                manufacturers and properly stored to maintain efficacy.
              </p>
            </div>
            <div className="glass-card p-6 rounded-lg card-modern">
              <h3 className="text-xl font-semibold mb-3 text-primary flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6" />
                Integrity and Reliability
              </h3>
              <p className="text-muted-foreground">
                We build trust through ethical business practices, reliable supply chains, and honest 
                professional relationships with our customers.
              </p>
            </div>
            <div className="glass-card p-6 rounded-lg card-modern">
              <h3 className="text-xl font-semibold mb-3 text-primary flex items-center gap-2">
                <Heart className="h-6 w-6" />
                Animal Welfare
              </h3>
              <p className="text-muted-foreground">
                We prioritize animal welfare in all our operations, promoting responsible use of veterinary 
                medicines and humane livestock management practices.
              </p>
            </div>
            <div className="glass-card p-6 rounded-lg card-modern">
              <h3 className="text-xl font-semibold mb-3 text-primary flex items-center gap-2">
                <Users className="h-6 w-6" />
                Customer-Centric Approach
              </h3>
              <p className="text-muted-foreground">
                We understand the unique needs of veterinarians and livestock owners, providing personalized 
                support and tailored solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground text-gradient">Why Choose Bnosha</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="glass-card p-6 rounded-lg card-modern">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Extensive Product Portfolio</h3>
              <p className="text-muted-foreground">
                Wide range of registered veterinary pharmaceuticals covering all major therapeutic categories 
                and livestock species.
              </p>
            </div>
            <div className="glass-card p-6 rounded-lg card-modern">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Professional Expertise</h3>
              <p className="text-muted-foreground">
                Team of experienced veterinary professionals providing technical support, training, and 
                herd health management consultation.
              </p>
            </div>
            <div className="glass-card p-6 rounded-lg card-modern">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Reliable Supply Chain</h3>
              <p className="text-muted-foreground">
                Efficient distribution network ensuring timely delivery of products with proper cold chain 
                management where required.
              </p>
            </div>
            <div className="glass-card p-6 rounded-lg card-modern">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Quality Assurance</h3>
              <p className="text-muted-foreground">
                Rigorous quality control measures and proper storage facilities maintaining product integrity 
                from warehouse to customer.
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
                <p className="text-muted-foreground">Bnosha Veterinary Pharmaceuticals PLC</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Registration Status</h3>
                <p className="text-muted-foreground">
                  Fully licensed veterinary pharmaceutical distributor with all necessary permits and certifications
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Compliance</h3>
                <p className="text-muted-foreground">
                  All products are registered with the Veterinary Drugs and Animal Feeds Administration and Control 
                  Authority (VDFACA), meeting international veterinary standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Partner With Bnosha Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join veterinary professionals who trust Bnosha for quality animal health solutions.
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

export default Bnosha;