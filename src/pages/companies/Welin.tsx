import { ShieldCheck, Syringe, HeartPulse, Truck } from "lucide-react";
import welin from "@/assets/welin.jpg";

const Welin = () => {
  return (
    <div className="bg-[#faf8f4] text-[#2c2c2c]">

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${welin})`,
            maskImage: "linear-gradient(to bottom, black 65%, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black 65%, transparent)",
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl md:text-7xl font-bold text-white tracking-tight">Welin</h1>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-4">Who We Are</h2>
        <p className="text-lg text-[#555] leading-relaxed">
          Welin is dedicated to <strong>livestock health and veterinary care solutions</strong>, supplying
          <strong> trusted antibiotics, antiparasitics, and preventive treatments</strong> for cattle, sheep, goats,
          and camels. Our formulations are <strong>field-tested and farmer-approved</strong>, designed to combat
          infections, boost immunity, and ensure stronger, disease-free herds across Ethiopia’s agricultural landscape.
        </p>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-12 text-center">What We Do</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Syringe, title: "Veterinary Medicines", desc: "Antibiotics & antiparasitics for livestock." },
              { icon: ShieldCheck, title: "Preventive Care", desc: "Long-lasting protection against disease." },
              { icon: HeartPulse, title: "Animal Wellness", desc: "Boosting livestock immunity and strength." },
              { icon: Truck, title: "Distribution", desc: "Nationwide delivery to farms & clinics." },
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
        <h2 className="text-4xl font-semibold mb-4">Let’s Build Stronger Herds Together 🐄</h2>
        <p className="text-lg opacity-90">Partner with Welin for reliable veterinary solutions.</p>
        <a href="/contact" className="mt-6 inline-block bg-[#2c2c2c] text-white px-6 py-3 rounded-lg hover:bg-black transition">
          Partner With Us
        </a>
      </section>

    </div>
  );
};

export default Welin;
