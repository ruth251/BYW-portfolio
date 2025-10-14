import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import greenbg from "@/assets/greenbg.jpg";
import agroimg from "@/assets/agroimg.jpg";
import products from "@/assets/produts.jpg";
import MissionVision from "@/components/sections/MissionVision";

const About = () => {
  // Stats state
  const [customers, setCustomers] = useState(0);
  const [partners, setPartners] = useState(0);
  const [companies, setCompanies] = useState(0);
  const [years, setYears] = useState(0);

  // Start counting when component mounts
  useEffect(() => {
    let c = 0;
    const interval = setInterval(() => {
      if (c <= 1000) setCustomers(c);
      if (c <= 20) setPartners(c);
      if (c <= 3) setCompanies(c);
      if (c <= 10) setYears(c);
      c++;
      if (c > 1000) clearInterval(interval);
    }, 1);
    return () => clearInterval(interval);
  }, []);

  // Motion variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="py-24 bg-cover bg-center relative flex flex-col items-center justify-center text-center px-6 rounded-b-3xl overflow-hidden"
        style={{ backgroundImage: `url(${greenbg})` }}
      >
        <div className="absolute inset-0 bg-green-900/70"></div>
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-5xl md:text-6xl font-bold text-white drop-shadow-xl mb-6"
        >
          About Us
        </motion.h1>

        {/* Bottom-right product image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute bottom-6 right-6 hidden md:block"
        >
          <img
            src={products}
            alt="Products"
            className="w-64 h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left Side Text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
            >
              
              <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-6 leading-tight">
                Discover the story behind <br className="md:hidden" />
                <span className="bg-gradient-to-r from-green-600 to-lime-500 bg-clip-text text-transparent">
                  Welin, Bnosha, and Yabon
                </span>
              </h2>

              <h3 className="text-3xl font-bold text-green-800 mb-6">Our Story</h3>
              <div className="space-y-6 text-green-700 leading-relaxed">
                <p>
                  <span className="font-bold text-green-800">Welin, Bnosha, and Yabon</span> are
                  more than just sister companies — we are a united force transforming agriculture
                  and veterinary care. With decades of combined expertise, we’ve built a bridge
                  between global innovation and local farming communities.
                </p>
                <p>
                  From{" "}
                  <span className="font-semibold text-green-800">crop protection</span> to{" "}
                  <span className="font-semibold text-green-800">animal health</span>, our
                  integrated approach ensures that farmers, veterinarians, and agribusinesses
                  have access to reliable solutions under one roof.
                </p>
                <p>
                  Today, we proudly serve{" "}
                  <span className="font-semibold text-green-800">1,000+ customers</span> across
                  the region delivering trusted products, expert guidance, and innovative tools
                  that shape a more sustainable future for food and farming.
                </p>
              </div>
            </motion.div>

            {/* Right Side Image */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}  
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center relative mt-6 md:mt-32 lg:mt-40"
            >
              <img
                src={agroimg}
                alt="Our Story"
                className="rounded-3xl shadow-2xl w-full md:w-[450px] lg:w-[550px] object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
<section className="py-20 bg-green-700 text-white">
  <div className="container mx-auto px-6">
    <div className="grid grid-cols-2 md:grid-cols-3 gap-10 text-center max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-5xl font-extrabold mb-2">{customers}+</h3>
        <p className="text-lg font-medium">Satisfied Customers</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h3 className="text-5xl font-extrabold mb-2">{companies}</h3>
        <p className="text-lg font-medium">Sister Companies</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h3 className="text-5xl font-extrabold mb-2">{years}+</h3>
        <p className="text-lg font-medium">Years of Excellence</p>
      </motion.div>
    </div>
  </div>
</section>

      {/* Mission & Vision */}
      <section className="py-24 bg-green-50">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6"
        >
          <MissionVision />
        </motion.div>
      </section>
    </div>
  );
};

export default About;
