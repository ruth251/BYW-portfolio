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
import vetimg from "@/assets/vetimg.jpg";
import yaboncover from "@/assets/yaboncover.jpg";
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

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/80"></div>


        {/* Hero Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 max-w-7xl w-full">
          
          {/* Left Side */}
          <div className="md:w-1/2 text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 1 }}
              >
                <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
                  {slides[currentSlide].title}
                </h1>

                <p className="text-lg md:text-xl text-green-200/90 mt-4 max-w-lg">
                  {slides[currentSlide].description}
                </p>

                {/* Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link to="/products">
                    <Button className="bg-green-500/90 backdrop-blur-md hover:bg-green-600 text-white shadow-xl rounded-xl px-6 py-3 transition duration-300">
                      Explore Products
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button className="bg-green-500/90 backdrop-blur-md hover:bg-green-600 text-white shadow-xl rounded-xl px-6 py-3 transition duration-300">
                      Contact Us
                    </Button>
                  </Link>
                </div>

                {/* Slide Indicators */}
                <div className="flex gap-2 mt-6">
                  {slides.map((_, i) => (
                    <div
                      key={i}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === currentSlide
                          ? "w-6 bg-green-400"
                          : "w-2 bg-white/40"
                      }`}
                    ></div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side Image */}
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

     
      {/* ================= SISTER COMPANIES ================= */}
      <section className="py-28 bg-gradient-to-b from-white via-lime-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-700 dark:text-lime-300 tracking-tight">
            Our Sister Companies
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-4 text-lg">
            Strength in unity. Excellence in every sector.
          </p>
        </div>

        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
            We bring together expertise in agriculture, veterinary science, and
            innovation to support farmers, businesses, and communities across Ethiopia.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto">
          {[
            {
              name: "Bnosha",
              category: "Agricultural Inputs",
              image: bnosha,
              link: "/companies/bnosha",
            },
            {
              name: "Welin",
              category: "Veterinary Medicines & Animal Health",
              image: vetimg,
              link: "/companies/welin",
            },
            {
              name: "Yabon",
              category: "Agrochemical",
              image: yaboncover,
              link: "/companies/yabon",
            },
          ].map((company, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="group"
            >
              <Link to={company.link}>
                <div className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition duration-500 hover:-translate-y-2 hover:scale-[1.02]">
                  
                  <img
                    src={company.image}
                    alt={company.name}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                  {/* Content */}
                  <div className="absolute bottom-0 p-5 w-full">
                    <h3 className="text-xl font-semibold text-white tracking-wide">
                      {company.name}
                    </h3>
                    <p className="text-sm text-white/80 mt-1">
                      {company.category}
                    </p>
                  </div>

                  {/* Border Glow */}
                  <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-white/30 transition"></div>
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