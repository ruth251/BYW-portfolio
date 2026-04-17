import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Leaf, Heart, Sprout, Shield, Eye, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

// Images
import herbknockImage from "@/assets/herbknock.png";
import metronImage from "@/assets/metron.png";
import welmaxImage from "@/assets/welmax.png";
import welphosTabImage from "@/assets/welphos-tab.png";
import productPortfolioBg from "@/assets/product-portfolio-bg.png";
import diclanImage from "@/assets/diclan.jpg";
import vetprodImage from "@/assets/vetprod.jpg";
import oxyethioImage from "@/assets/oxyethio.jpg";
import yeldmaxImage from "@/assets/yeldmax.jpg";
import maxyl from "@/assets/maxyl.jpg";
import vegguard from "@/assets/vegguard.jpg";
import folicare from "@/assets/folicare.jpg";
import lambon from "@/assets/lambon.jpg";


// ----------------------------------------------------
// Exported products array (outside the component)
export const products = [
  {
    id: 1,
    name: "Herbknock",
    category: "Agrochemical",
    description:
      "A powerful herbicide designed to eliminate unwanted weeds effectively while preserving crop health.",
    image: herbknockImage,
    icon: <Leaf className="h-6 w-6 text-green-600" />,
  },
  {
    id: 2,
    name: "Metron",
    category: "Agrochemical",
    description:
      "Metron is a high-performance pesticide offering maximum protection for crops against common pests.",
    image: metronImage,
    icon: <Leaf className="h-6 w-6 text-green-600" />,
  },
  {
    id: 3,
    name: "Yieldmax",
    category: "Agrochemical",
    description:
      "A balanced fertilizer solution promoting strong root growth and improved yield.",
    image: yeldmaxImage,
    icon: <Sprout className="h-6 w-6 text-emerald-600" />,

  },
  {
    id: 4,
    name: "Welmax",
    category: "Agrochemical",
    description:
      "A balanced fertilizer solution promoting strong root growth and improved yield.",
    image: welmaxImage,
    icon: <Sprout className="h-6 w-6 text-emerald-600" />,
  },
  {
    id: 5,
    name: "Welphos Tab",
    category: "Agrochemical",
    description:
      "High-quality phosphorous supplement for optimal plant nutrition.",
    image: welphosTabImage,
    icon: <Shield className="h-6 w-6 text-teal-600" />,
  },
  {
    id: 6,
    name: "DICLAN",
    category: "Veterinary",
    description:
      "Broad-spectrum antibiotic effective in treating bacterial infections in animals.",
    image: diclanImage,
    icon: <Heart className="h-6 w-6 text-rose-500" />,
  },
  {
    id: 7,
    name: "Oxytetracycline 20%",
    category: "Veterinary",
    description:
      "Highly concentrated Oxytetracycline for veterinary use, ensuring fast recovery from infections.",
    image: oxyethioImage,
    icon: <Heart className="h-6 w-6 text-rose-500" />,
  },
  {
    id: 8,
    name: "1% Ivermectin",
    category: "Veterinary",
    description:
      "Effective antiparasitic injection used in livestock for internal and external parasite control.",
    image: vetprodImage,
    icon: <Heart className="h-6 w-6 text-rose-500" />,
  },
  {
    id: 9,
    name: "Maxyl",
    category: "Agrochemical",
    description:
      "FUNGICIDE:  Mancozeb 640G/KG + Metalaxyl-M 80G/KG WDG",
    image: maxyl,
    icon: <Heart className="h-6 w-6 text-rose-500" />,
  },
  {
    id: 10,
    name: "Veg Guard",
    category: "Agrochemical",
    description:
      "FUNGICIDE:  Prothioconazole 125g/L +Tebuconazole 125g/L EC",
    image: vegguard,
    icon: <Heart className="h-6 w-6 text-rose-500" />,
  },
  {
    id: 11,
    name: "Folicare",
    category: "Agrochemical",
    description:
      "INSECTICIDE:  Lambda-cyhalothrin 106g/L + Thiamethoxam 141g/L SC",
    image: folicare,
    icon: <Heart className="h-6 w-6 text-rose-500" />,
  },
  {
    id: 12,
    name: "Lambon",
    category: "Agrochemical",
    description:
      "FUNGICIDE: Lambda-cyhalothrin 50g/L EC",
    image: lambon,
    icon: <Heart className="h-6 w-6 text-rose-500" />,
  }
];

// ----------------------------------------------------
// Products component
const Products = () => {
  const [category, setCategory] = useState("All");
  const categories = ["All", "Agrochemical", "Veterinary"];

  const filteredProducts =
    category === "All"
      ? products
      : products.filter((p) => p.category === category);

  const ProductCard = ({ product }: { product: any }) => (
    <Link to={`/product/${product.id}`}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden border border-gray-100 p-4 flex flex-col items-center h-full cursor-pointer"
      >
        <div className="relative w-full flex justify-center items-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-56 object-contain transition-transform duration-500 group-hover:scale-105"
          />

          <div
            className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <Button
              size="icon"
              variant="ghost"
              className="rounded-full bg-green-600 hover:bg-green-700 shadow-md"
            >
              <Eye className="h-5 w-5 text-white" />
            </Button>
          </div>
        </div>

        <div className="text-center mt-4">
          <h3 className="text-base font-semibold text-gray-800 uppercase tracking-wide">
            {product.name}
          </h3>
        </div>
      </motion.div>
    </Link>
  );

  return (
    <div className="min-h-screen bg-green-50">
      {/* Hero Section */}
      <section
        className="relative py-32 bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${productPortfolioBg})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative mx-auto px-6 text-center z-10">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold text-white mb-6"
          >
            Our Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto"
          >
            Explore premium agrochemical and veterinary solutions crafted for
            performance, sustainability, and yield excellence.
          </motion.p>
        </div>
      </section>

      {/* Product Listing Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 bg-white/90 backdrop-blur-md rounded-3xl p-6 shadow-lg">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Category Sidebar */}
            <div className="lg:w-1/4 border-2 border-gray-200 rounded-2xl p-4 flex lg:flex-col gap-4 justify-start overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0">
              {/* Categories Heading */}
              <h3 className="text-lg font-bold text-gray-700 mb-3">Categories</h3>

              {categories.map((cat, i) => (
                <button
                  key={i}
                  onClick={() => setCategory(cat)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-full font-semibold transition-all w-full text-left ${
                    category === cat
                      ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-md"
                      : "bg-white/70 text-gray-800 hover:bg-green-100"
                  }`}
                >
                  <ChevronRight className="h-5 w-5" />
                  {cat}
                </button>
              ))}
            </div>

            {/* Product Grid */}
            <div className="lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products