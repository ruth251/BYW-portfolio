import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Leaf, Heart, Sprout, Shield } from "lucide-react";

import herbknockImage from "@/assets/herbknock.png";
import metronImage from "@/assets/metron.png";
import welmaxImage from "@/assets/welmax.png";
import welphosTabImage from "@/assets/welphos-tab.png";
import productPortfolioBg from "@/assets/product-portfolio-bg.png";


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Products = () => {
  const agrochemicals = [
    {
      name: "Herbknock",
      category: "Herbicide",
      activeIngredient: "2,4-D amine salt 720 g/l",
      description:
        "The best alternative to 2,4-D butyl ester. Compared with other compounds such as 2,4-D butyl ester, HERBKNOCK is non volatile and safer",
      uses: ["Wheat", "Teff", "Barley"],
      image: herbknockImage,
      icon: <Leaf className="h-6 w-6" />,
    },
    {
      name: "Metron",
      category: "Herbicide",
      activeIngredient: "Water dispersible granule",
      description:
        "Selective post-emergence herbicide for effective and reliable control of broad leaf grass and sedges leaf weeds in Wheat & Teff",
      uses: ["Wheat", "Teff"],
      image: metronImage,
      icon: <Leaf className="h-6 w-6" />,
    },
    {
      name: "Welmax",
      category: "Fungicide",
      activeIngredient: "Mancozeb 64% w/w + Metalaxyl 8% w/w",
      description:
        "It has the triple functions of treating, protecting and eradicating the source of downy mildew and other fungal diseases",
      uses: ["Vegetables", "Fruits", "Potatoes"],
      image: welmaxImage,
      icon: <Sprout className="h-6 w-6" />,
    },
    {
      name: "Welphos Tab",
      category: "Insecticide",
      activeIngredient:
        "Aluminum phosphide 560 g/kg + Inert materials 440 g/kg",
      description:
        "Kills all stages of insect growth. When used for fumigation and insecticide in granaries, it will not affect the seed viability of grains",
      uses: ["Granaries", "Storage", "Warehouses"],
      image: welphosTabImage,
      icon: <Shield className="h-6 w-6" />,
    },
  ];

  const ProductCard = ({ product }: { product: any }) => (
    <Card className="h-full shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 card-modern group overflow-hidden">
      {/* Product Image */}
      <Dialog>
        <DialogTrigger asChild>
          <div className="relative h-64 overflow-hidden cursor-pointer bg-white">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 right-4">
              <Badge
                variant="outline"
                className="bg-white/90 backdrop-blur-sm group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
              >
                {product.category}
              </Badge>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </DialogTrigger>
        <DialogContent className="max-w-4xl max-h-[90vh] p-0 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto max-h-[85vh] object-contain"
          />
        </DialogContent>
      </Dialog>

      <CardHeader className="relative">
        <div className="flex items-center justify-between">
          <div className="text-primary group-hover:scale-110 transition-transform duration-300">
            {product.icon}
          </div>
        </div>
        <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
          {product.name}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 text-sm leading-relaxed">
          {product.description}
        </p>
        <div>
          <h4 className="font-semibold text-sm mb-2">Active Ingredient:</h4>
          <p className="text-sm text-muted-foreground">
            {product.activeIngredient}
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-sm mb-2">Suitable for:</h4>
          <div className="flex flex-wrap gap-1">
            {product.uses.map((use: string, index: number) => (
              <Badge
                key={index}
                variant="secondary"
                className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                {use}
              </Badge>
            ))}
          </div>
        </div>
        <Button variant="primary" className="w-full mt-4 btn-modern" asChild>
          <Link to="/contact">Request Quote</Link>
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="py-20 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${productPortfolioBg})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Product Portfolio
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Comprehensive range of high-quality agrochemicals and veterinary
            pharmaceuticals sourced from globally recognized manufacturers.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Agrochemical Solutions
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Advanced crop protection products including insecticides,
                herbicides, and fungicides for optimal agricultural
                productivity.
              </p>
            </div>

            {/* Swiper Carousel */}
            <Swiper
              modules={[Navigation]}
              spaceBetween={24}
              slidesPerView={1}
              navigation
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {agrochemicals.map((product, index) => (
                <SwiperSlide key={index}>
                  <ProductCard product={product} />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-6">
                This is a sample of our agrochemical products. We offer a
                comprehensive range of solutions for all crop protection needs.
              </p>
              <Button variant="primary" size="lg" asChild>
                <Link to="/contact">View Complete Catalog</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Choose Our Products?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Quality assurance and reliability you can trust for your
              agricultural and veterinary needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <Card className="text-center shadow-soft">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Quality Assured</h3>
                <p className="text-muted-foreground">
                  All products sourced from certified international manufacturers
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft">
              <CardContent className="p-6">
                <Leaf className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Environmentally Safe
                </h3>
                <p className="text-muted-foreground">
                  Eco-friendly formulations that protect both crops and
                  environment
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft">
              <CardContent className="p-6">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Proven Efficacy</h3>
                <p className="text-muted-foreground">
                  Tested and trusted by thousands of farmers and veterinarians
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft">
              <CardContent className="p-6">
                <Sprout className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Technical Support</h3>
                <p className="text-muted-foreground">
                  Expert guidance and support for optimal product usage
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
