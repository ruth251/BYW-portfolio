import { Sprout, ShieldCheck, Truck, Users } from "lucide-react";
import { Link } from "react-router-dom";
import yabon from "@/assets/yabon.jpg";

const Yabon = () => {
  return (
    <div className="bg-[#faf8f4] text-[#2c2c2c]">

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${yabon})`,
            maskImage: "linear-gradient(to bottom, black 65%, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black 65%, transparent)",
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl md:text-7xl font-bold text-white tracking-tight">Yabon</h1>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 px-6 md:px-12 lg:px-20 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-semibold mb-4">Who We Are</h2>
        <p className="text-lg text-[#555] leading-relaxed">
          Yabon supplies <strong>advanced agrochemical and agricultural input solutions</strong> engineered to support 
          both smallholder and commercial farming in Ethiopia. Our portfolio includes <strong>high-performance crop 
          protection products, fertilizers, and essential farm inputs</strong> designed to improve soil health, reduce 
          pest pressure, and boost productivity. With a strong commitment to reliability and farmer training, Yabon 
          ensures that every product is backed by <strong>technical support and field-proven results</strong>.
        </p>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-12 text-center">What We Do</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Sprout, title: "Agricultural Inputs", desc: "Seeds, fertilizers, and essential farm supplies." },
              { icon: ShieldCheck, title: "Crop Protection", desc: "Effective herbicides and pest management solutions." },
              { icon: Truck, title: "Distribution", desc: "Reliable logistics & nationwide delivery." },
              { icon: Users, title: "Farmer Support", desc: "Guidance and training for optimal application." },
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
        <h2 className="text-4xl font-semibold mb-4">Let’s Grow Agriculture Together 🌱</h2>
        <p className="text-lg opacity-90 mb-6">Partner with Yabon and access trusted agrochemical solutions.</p>
        <Link to="/contact">
          <button className="bg-white text-[#7cb342] hover:bg-white/90 rounded-full px-8 py-3 font-medium">
            Partner With Us
          </button>
        </Link>
      </section>

    </div>
  );
};

export default Yabon;
