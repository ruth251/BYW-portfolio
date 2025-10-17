import { Leaf, Sprout, Droplets, Tractor, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import bnosha from "@/assets/bnosha.jpg";

const Bnosha = () => {
  return (
    <div className="bg-[#faf8f4] text-[#2c2c2c]">

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bnosha})`,
            maskImage: "linear-gradient(to bottom, black 65%, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black 65%, transparent)",
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl md:text-7xl font-bold text-white tracking-tight">Bnosha</h1>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 md:px-12 lg:px-20 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-semibold mb-4">Who We Are</h2>
        <p className="text-lg text-[#555] leading-relaxed">
          Bnosha delivers <strong>science-backed crop protection solutions</strong> engineered for Ethiopia’s diverse agricultural environments. 
          Our product line spans both <strong>broad-spectrum and crop-selective formulations</strong>, enabling farmers to manage weeds effectively at every stage — from <strong>pre-plant land clearing</strong> to <strong>post-emergence field protection</strong>. 
          Each solution is <strong>carefully evaluated for efficacy, crop safety, and soil compatibility</strong>, ensuring consistent performance and long-term sustainability. 
          With Bnosha, farms gain not just inputs, but <strong>reliable tools for stronger harvests and responsible land stewardship</strong>.
        </p>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-12 text-center">What We Do</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Leaf, title: "Crop Protection", desc: "Herbicides, pesticides & fungicides for local crops." },
              { icon: Sprout, title: "Fertilizers", desc: "Balanced nutrients for healthier soil." },
              { icon: Tractor, title: "Distribution", desc: "Nationwide supply-chain for farm inputs." },
              { icon: ShieldCheck, title: "Training", desc: "Farmer education for safe usage." },
            ].map((item, i) => (
              <div key={i} className="rounded-xl bg-white shadow-md hover:shadow-lg transition-all p-8 border border-[#e7e4df]">
                <item.icon className="h-10 w-10 text-[#7cb342] mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-[#555]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 bg-[#a6d57a] text-[#2c2c2c] text-center">
        <h2 className="text-4xl font-semibold mb-4">Let’s Grow Together 🌿</h2>
        <p className="text-lg opacity-90 mb-6">Partner with Bnosha for a greener future.</p>

        <Link
          to="/contact"
          className="bg-[#2c2c2c] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#1f1f1f] transition-all"
        >
          Partner With Us
        </Link>
      </section>

    </div>
  );
};

export default Bnosha;
