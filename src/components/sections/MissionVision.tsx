import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function MissionVision() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-card opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-gradient">
            Our Mission &amp; Vision
          </h2>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4 glass-card p-8 rounded-lg card-modern">
              <h3 className="text-2xl font-semibold text-primary">Mission</h3>
              <p className="text-lg text-muted-black leading-relaxed">
                To empower farmers and veterinary professionals with reliable, safe, and effective 
                products that boost productivity and protect health.
              </p>
            </div>
            <div className="space-y-4 glass-card p-8 rounded-lg card-modern">
              <h3 className="text-2xl font-semibold text-primary">Vision</h3>
              <p className="text-lg text-muted-black leading-relaxed">
                To be a trusted leader in agricultural and veterinary input supply in the region, 
                fostering sustainable agriculture and animal welfare.
              </p>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
}
