import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Target, Eye, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function MissionVision() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-[0.3em] uppercase text-primary bg-primary/10 rounded-full"
            >
              Our Purpose
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight"
            >
              Mission & <span className="text-primary">Vision</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission Card */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-[2.5rem] transform transition-transform group-hover:scale-[1.02] duration-500" />
              <div className="relative p-10 lg:p-14 bg-white border border-slate-100 shadow-xl shadow-slate-200/50 rounded-[2.5rem] h-full flex flex-col items-start transition-all duration-500 group-hover:-translate-y-2">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/30 mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Target size={32} />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-8 flex-grow">
                  To empower farmers and veterinary professionals with <span className="text-slate-900 font-semibold">reliable, safe, and effective products</span> that boost productivity and protect health. We are dedicated to bridging the gap between global innovations and local agricultural needs.
                </p>
                <div className="w-full h-px bg-slate-100 mb-8" />
                <div className="flex items-center gap-2 text-primary font-bold group/link">
                  <span>Execution Driven</span>
                  <ArrowRight size={18} className="transition-transform group-hover/link:translate-x-1" />
                </div>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-transparent rounded-[2.5rem] transform transition-transform group-hover:scale-[1.02] duration-500" />
              <div className="relative p-10 lg:p-14 bg-white border border-slate-100 shadow-xl shadow-slate-200/50 rounded-[2.5rem] h-full flex flex-col items-start transition-all duration-500 group-hover:-translate-y-2">
                <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-green-600/30 mb-8 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                  <Eye size={32} />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-6">Our Vision</h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-8 flex-grow">
                  To be the <span className="text-slate-900 font-semibold">trusted regional leader</span> in agricultural and veterinary input supply, fostering a future of sustainable agriculture, enhanced animal welfare, and thriving rural communities.
                </p>
                <div className="w-full h-px bg-slate-100 mb-8" />
                <div className="flex items-center gap-2 text-green-600 font-bold group/link">
                  <span>Forward Thinking</span>
                  <ArrowRight size={18} className="transition-transform group-hover/link:translate-x-1" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
