import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import heroLogistics from "@/assets/heroLogistics.jpg";
import bnosha from "@/assets/bnosha.jpg";
import farmland from "@/assets/farmland.jpg";
import product1 from "@/assets/produts.jpg";
import product2 from "@/assets/diclan.jpg";
import product3 from "@/assets/metron.png"; 

const Home = () => {
  const slides = [
    {
      image: product1,
      title: "High-Quality Veterinary Medicines",
      description: "Reliable solutions for animal health across Ethiopia.",
    },
    {
      image: product2,
      title: "Premium Animal Feed Additives",
      description: "Boosting livestock productivity with top-notch feed supplements.",
    },
    {
      image: product3,
      title: "Advanced Agricultural Inputs",
      description: "Helping farmers achieve higher yields and sustainable growth.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center"
          style={{ backgroundImage: `url(${heroLogistics})` }}
        ></div>

        {/* Transparent Green Overlay */}
        <div className="absolute inset-0 bg-green-900/80"></div>

        {/* Additional black/blur overlay for readability */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 max-w-7xl w-full">
          {/* Left Side Text */}
          <div className="md:w-1/2 text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 1 }}
              >
                {/* Title and description in green */}
                <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
                  {slides[currentSlide].title}
                </h1>
                <p className="text-lg md:text-xl text-green-200/90 mt-4 max-w-lg">
                  {slides[currentSlide].description}
                </p>

                {/* Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link to="/products">
                    <Button className="bg-green-500 hover:bg-green-600 text-white shadow-md">
                      Explore Products
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button className="bg-green-500 hover:bg-green-600 text-white shadow-md">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side Product Images */}
          <div className="md:w-1/2 flex justify-center mt-8 md:mt-0 relative h-[450px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentSlide}
                src={slides[currentSlide].image}
                alt={`Slide ${currentSlide + 1}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 1 }}
                className="absolute w-[350px] md:w-[450px] h-[250px] md:h-[450px] object-contain rounded-xl shadow-xl"
              />
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* SISTER COMPANIES 	*/}
      <section className="py-24 bg-gradient-to-b from-white to-lime-50 dark:from-gray-900 dark:to-gray-800">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-700 dark:text-lime-300">
            Our Sister Companies
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            One mission — multiple strengths.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto">
          {[
            {
              name: "Bnosha",
              category: "Agrochemical & Agricultural Inputs",
              image: bnosha,
              link: "/companies/bnosha",
            },
            {
              name: "Welin",
              category: "Veterinary Medicines & Animal Health",
              image: farmland,
              link: "/companies/welin",
            },
            {
              name: "Yabon",
              category: "Agrochemical & Agricultural Inputs",
              image: farmland,
              link: "/companies/yabon",
            },
          ].map((company, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            >
              <Link to={company.link}>
                <img
                  src={company.image}
                  alt={company.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <h3 className="text-2xl font-bold text-white">{company.name}</h3>
                  <p className="text-sm text-white/80 mt-1">{company.category}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;