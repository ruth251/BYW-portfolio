import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap, Sprout, ArrowUpRight } from "lucide-react";

import heroLogistics from "@/assets/heroLogistics.jpg";
import bnosha from "@/assets/bnosha.jpg";
import farmland from "@/assets/farmland.jpg";
import product1 from "@/assets/produts.jpg";
import product2 from "@/assets/diclan.jpg";
import product3 from "@/assets/metron.png";
import vetprodImage from "@/assets/vetprod.jpg"; 
import agrochem from "@/assets/agrochem.jpg";            

const Home = () => {
  const slides = [
    {
      image: product1,
      tag: "VETERINARY MEDICINES",
      title: "Precision \n Animal Health",
      description: "Driving the future of livestock productivity with world-class medical innovation across Ethiopia.",
      icon: <ShieldCheck className="h-5 w-5" />,
    },
    {
      image: product2,
      tag: "FEED ADDITIVES",
      title: "Optimized \n Bio-Nutrition",
      description: "Science-backed supplements designed to maximize growth and sustain regional agro-value chains.",
      icon: <Zap className="h-5 w-5" />,
    },
    {
      image: product3,
      tag: "AGRO INPUTS",
      title: "Modern \n Yield Experts",
      description: "Empowering farmers with advanced crop protection and sustainable agricultural research.",
      icon: <Sprout className="h-5 w-5" />,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="min-h-screen bg-white selection:bg-[#5F5B3A]/30">
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen flex flex-col justify-center overflow-hidden">
        {/* Modern Minimal Background */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center grayscale opacity-5"
            style={{ backgroundImage: `url(${heroLogistics})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-white via-white/80 to-[#f3f3f3]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl w-full px-6">
          <div className="grid lg:grid-cols-2 items-center gap-12 xl:gap-24">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-6"
                >
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#5F5B3A]/20 bg-[#5F5B3A]/5 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#5F5B3A]">
                    {slides[currentSlide].icon}
                    <span>{slides[currentSlide].tag}</span>
                  </div>
                  
                  <h1 className="text-6xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter text-[#1c1b1b] whitespace-pre-line">
                    {slides[currentSlide].title}
                  </h1>
                  
                  <p className="max-w-md text-base font-medium leading-relaxed text-[#474545]/80">
                    {slides[currentSlide].description}
                  </p>

                  <div className="flex flex-wrap gap-4 pt-6">
                    <Link to="/products">
                      <button className="h-14 rounded-full bg-[#1c1b1b] px-10 text-[11px] font-black uppercase tracking-[0.2em] text-white transition-all hover:bg-[#5F5B3A] hover:shadow-2xl active:scale-95">
                        EXPLORE CATALOGUE
                      </button>
                    </Link>
                    <Link to="/contact">
                      <button className="group flex h-14 items-center gap-3 rounded-full border border-[#1c1b1b]/10 bg-white px-10 text-[11px] font-black uppercase tracking-[0.2em] text-[#1c1b1b] transition-all hover:border-[#1c1b1b] hover:bg-[#1c1b1b] hover:text-white">
                        GET IN TOUCH <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </button>
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slider Progress */}
              <div className="mt-20 flex items-center gap-4">
                <span className="text-[10px] font-black text-[#1c1b1b]">0{currentSlide + 1}</span>
                <div className="flex flex-1 max-w-[200px] gap-2">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentSlide(i)}
                      className={`h-[2px] flex-1 transition-all duration-700 ${
                        currentSlide === i ? "bg-[#5F5B3A]" : "bg-[#1c1b1b]/10"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-[10px] font-black text-[#1c1b1b]/20">0{slides.length}</span>
              </div>
            </div>

            {/* Right Visual */}
            <div className="order-1 lg:order-2 relative aspect-square lg:aspect-auto h-[450px] lg:h-[700px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 1.1, rotate: -2 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full w-full"
                >
                  <div className="absolute inset-0 m-6 rounded-[4rem] border border-[#1c1b1b]/5 bg-[#f3f3f3]/50 backdrop-blur-3xl" />
                  <img
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].tag}
                    className="h-full w-full object-contain p-12 lg:p-20 drop-shadow-[0_40px_40px_rgba(0,0,0,0.12)]"
                  />
                  
                  {/* Floating Detail */}
                  <div className="absolute bottom-16 left-0 rounded-3xl bg-white p-6 shadow-2xl border border-[#1c1b1b]/5 hidden xl:block">
                    <p className="text-[10px] font-black uppercase tracking-widest text-[#5F5B3A]">Status</p>
                    <p className="mt-1 text-sm font-black text-[#1c1b1b]">Premium Quality Assured</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* SISTER COMPANIES */}
      <section className="bg-[#f3f3f3]/20 py-40 border-t border-[#1c1b1b]/5">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#5F5B3A]">Verticals</h2>
              <h3 className="text-5xl font-black leading-none text-[#1c1b1b] sm:text-7xl">Our Network.</h3>
            </div>
            <p className="max-w-md text-sm font-medium leading-relaxed text-[#474545]/60 mb-2">
              Diversifying agricultural excellence through specialized business units that dominate the regional value chain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Bnosha",
                category: "Crop Health Experts",
                image: bnosha,
                link: "/companies/bnosha",
              },
              {
                name: "Welin",
                category: "Animal Health Care",
                image: vetprodImage,
                link: "/companies/welin",
              },
              {
                name: "Yabon",
                category: "Yield Optimization",
                image: agrochem,
                link: "/companies/yabon",
              },
            ].map((company, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={company.link} className="group relative block overflow-hidden rounded-[3rem] bg-white border border-[#1c1b1b]/5 p-6 transition-all hover:bg-[#1c1b1b] hover:shadow-2xl">
                  <div className="aspect-[4/3] w-full overflow-hidden rounded-[2.5rem]">
                    <img
                      src={company.image}
                      alt={company.name}
                      className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                  </div>
                  <div className="mt-8 flex items-center justify-between text-[#1c1b1b] group-hover:text-white transition-colors duration-300 px-2 lg:px-4">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#5F5B3A] group-hover:text-[#5F5B3A]/80">{company.category}</span>
                      <h4 className="mt-1 text-3xl font-black tracking-tighter uppercase">{company.name}</h4>
                    </div>
                    <div className="rounded-full border border-current p-3 transition-transform group-hover:rotate-45">
                      <ArrowUpRight className="h-5 w-5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;