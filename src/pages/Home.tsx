import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CompanyCard from "@/components/sections/CompanyCard";
import heroFarmer from "@/assets/hero-farmer.jpg";
import welin from "@/assets/welin.jpg";
import bnosha from "@/assets/bnosha.jpg";
import yabon from "@/assets/yabon.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-mesh">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroFarmer})` }}
        />
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl animate-fadeInUp">
            <h6 className="text-4xl md:text-6xl font-bold mb-6 animate-slideInRight text-foreground leading-tight">
  Empowering<br/>
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-lime-500 animate-pulse-glow">
    Agriculture &amp;<br/>
    Veterinary Care
  </span>
</h6>
<p className="text-xl md:text-2xl mb-4 text-black font-bold animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
  We've been walking alongside farmers for 15+ years.
</p>
<p className="text-lg md:text-xl mb-8 text-black font-bold animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
  Trusted by over 1,000 farmers and veterinarians who rely on us every day.
</p>
            <div className="animate-scaleIn" style={{ animationDelay: '0.6s' }}>
              <div
                className="inline-block will-change-transform transform-gpu animate-bounce"
                style={{ animationDuration: '1.2s', animationTimingFunction: 'cubic-bezier(.25,.46,.45,.94)' }}
              >
                <Link to="/products">
                  <Button variant="hero" size="lg" className="btn-modern glow">
                    Explore Products
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-gradient">
              Our Sister Companies
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Three integrated companies working together to serve farmers and veterinary professionals 
              with innovative solutions and reliable products.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              <CompanyCard
                name="Welin"
                description="Specializing in advanced agrochemical solutions for crop protection and yield enhancement."
                image={welin}
                alt="Female farmer with vegetables representing Welin agrochemical solutions"
              />
            </div>
            <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <CompanyCard
                name="Bnosha"
                description="Leading veterinary pharmaceutical distribution with comprehensive animal health solutions."
                image={bnosha}
                alt="Veterinarian with cattle representing Bnosha veterinary solutions"
              />
            </div>
            <div className="animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
              <CompanyCard
                name="Yabon"
                description="Innovative agricultural inputs and technical support for modern farming practices."
                image={yabon}
                alt="Male farmer in field representing Yabon agricultural inputs"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-card opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-gradient">
              Our Mission &amp; Vision
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4 glass-card p-8 rounded-lg card-modern">
                <h3 className="text-2xl font-semibold text-primary">Mission</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To empower farmers and veterinary professionals with reliable, safe, and effective 
                  products that boost productivity and protect health.
                </p>
              </div>
              <div className="space-y-4 glass-card p-8 rounded-lg card-modern">
                <h3 className="text-2xl font-semibold text-primary">Vision</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be a trusted leader in agricultural and veterinary input supply in the region, 
                  fostering sustainable agriculture and animal welfare.
                </p>
              </div>
            </div>
            <div className="mt-12 animate-scaleIn" style={{ animationDelay: '0.4s' }}>
              <Link to="/about">
                <Button variant="primary" size="lg" className="btn-modern glow">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 float">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust our expertise and rely on our quality products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scaleIn" style={{ animationDelay: '0.3s' }}>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 btn-modern">
                  Contact Us Today
                </Button>
              </Link>
              <Link to="/products">
                
                <Button variant="outline" size="lg" className="border-primary-foreground text-primary hover:bg-primary-foreground/10 btn-modern">
                  Browse Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
