import { Card, CardContent } from "@/components/ui/card";

interface CompanyCardProps {
  name: string;
  description: string;
  image: string;
  alt: string;
}

const CompanyCard = ({ name, description, image, alt }: CompanyCardProps) => {
  return (
    <div className="group card-modern">
      <Card className="overflow-hidden border-border shadow-medium hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 glass-card">
        <div className="aspect-[4/3] overflow-hidden relative">
          <img 
            src={image} 
            alt={alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-80 transition-opacity duration-300" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="text-center text-white p-4 animate-fadeInUp">
              <h4 className="text-xl font-bold mb-2">{name}</h4>
              <p className="text-sm text-white/90">{description}</p>
            </div>
          </div>
        </div>
        <CardContent className="p-6 relative">
          <h3 className="text-2xl font-bold text-foreground mb-3 underline-animated group-hover:text-primary transition-colors duration-300">
            {name}
          </h3>
          <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
            {description}
          </p>
          <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="h-1 w-16 bg-gradient-hero rounded-full overflow-hidden">
              <div className="h-full w-full bg-gradient-glow animate-shimmer"></div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompanyCard;