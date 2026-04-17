import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, Users, BookOpen, Headphones, MapPin, Clock } from "lucide-react";
import servicebg from "@/assets/servicebg.jpg";

const fadeIn = (i = 1): Variants => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" },
  },
});

const Services = () => {
  const services = [
    {
      icon: <Truck className="h-10 w-10" />,
      title: "Reliable Distribution",
      description:
        "Our robust logistics infrastructure ensures your critical agricultural and veterinary supplies reach their destination safely and on schedule, across all regions.",
      features: [
        "Advanced regional warehousing",
        "Temperature-controlled cold chain",
        "Optimized nationwide delivery network",
        "24/7 emergency supply response",
      ],
      color: "from-blue-500/20 to-blue-600/5",
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Technical Consultation",
      description:
        "Leverage the expertise of our certified specialists to optimize your operations with data-driven insights and professional guidance.",
      features: [
        "Specialized product selection",
        "Evidence-based application protocols",
        "Precision dosage & nutrition planning",
        "On-site diagnostic consultations",
      ],
      color: "from-green-500/20 to-green-600/5",
    },
    {
      icon: <BookOpen className="h-10 w-10" />,
      title: "Training Programs",
      description:
        "We empower the next generation of agricultural leaders through comprehensive educational workshops and hands-on skill development.",
      features: [
        "Modern agricultural technique workshops",
        "Veterinary practice excellence",
        "Safety & environmental compliance",
        "Professional certification tracks",
      ],
      color: "from-amber-500/20 to-amber-600/5",
    },
    {
      icon: <Headphones className="h-10 w-10" />,
      title: "Customer Success",
      description:
        "Our relationship doesn't end at the sale. We provide continuous support to ensure you achieve maximum value from our solutions.",
      features: [
        "Dedicated account management",
        "Digital order tracking portal",
        "Direct technical helpdesk",
        "Bilingual professional support",
      ],
      color: "from-purple-500/20 to-purple-600/5",
    },
    {
      icon: <MapPin className="h-10 w-10" />,
      title: "Field Excellence",
      description:
        "Our experts meet you where the work happens, providing real-world testing and verification to guarantee project success.",
      features: [
        "Regular facility health audits",
        "Real-time product demonstrations",
        "Long-term performance monitoring",
        "Customized field research data",
      ],
      color: "from-red-500/20 to-red-600/5",
    },
    {
      icon: <Clock className="h-10 w-10" />,
      title: "Quality Assurance",
      description:
        "Every solution we provide is backed by a rigorous quality promise and comprehensive after-sales integrity monitoring.",
      features: [
        "Continuous performance tracking",
        "Rapid quality resolution protocol",
        "Comprehensive product guarantee",
        "Feedback-driven service evolution",
      ],
      color: "from-teal-500/20 to-teal-600/5",
    },
  ];

  const ServiceCard = ({ service, index }: { service: any; index: number }) => (
    <motion.div
      variants={fadeIn(index)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="group"
    >
      <Card className="h-full relative overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-white/40 dark:bg-gray-900/40 backdrop-blur-md border border-white/20 dark:border-gray-800/50 rounded-[2rem]">
        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-50 transition-opacity group-hover:opacity-100`} />
        
        <CardHeader className="relative z-10 pt-8">
          <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center shadow-lg text-primary mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-gray-100 dark:border-gray-700">
            {service.icon}
          </div>
          <CardTitle className="text-2xl font-bold tracking-tight">
            {service.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="relative z-10 space-y-6">
          <p className="text-muted-foreground leading-relaxed text-lg">
            {service.description}
          </p>
          
          <div className="space-y-3">
            {service.features.map((feature: string, i: number) => (
              <div key={i} className="flex items-center gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-primary/60" />
                <span className="text-sm font-medium text-muted-foreground/80 group-hover:text-foreground transition-colors">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          <Button
            variant="ghost"
            className="w-full mt-4 group/btn hover:bg-primary hover:text-white rounded-xl transition-all font-semibold"
            asChild
          >
            <Link to="/contact" className="flex items-center justify-center gap-2">
              Explore Detail <span className="transform group-hover/btn:translate-x-1 transition-transform">→</span>
            </Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Hero Section */}
      <section
        className="relative py-32 md:py-48 overflow-hidden"
      >
        <div 
          className="absolute inset-0 bg-cover bg-fixed grayscale-[20%] brightness-[0.4]"
          style={{
            backgroundImage: `url(${servicebg})`,
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-primary/20 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-[0.2em] uppercase text-white bg-primary/20 backdrop-blur-md rounded-full border border-white/10">
              Expert Solutions
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter drop-shadow-2xl">
              Elevating <span className="text-primary italic">Potential</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto text-white/80 leading-relaxed font-light">
              We deliver cutting-edge agricultural and veterinary services 
              that redefine productivity and drive sustainable success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 container mx-auto px-6 -mt-16 md:-mt-24 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </section>

      {/* Modern Process Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <span className="text-primary font-bold tracking-widest uppercase text-sm">Working with us</span>
              <h2 className="text-5xl font-black text-slate-900 mt-4 mb-8 leading-tight">
                Our Precision <br />Methodology
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-10">
                Experience a seamless journey from initial discovery to measurable results. 
                Our team integrates directly with your operations to ensure excellence.
              </p>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Consultation", desc: "Deep analysis of your unique ecosystem" },
                { title: "Strategy", desc: "Data-driven solution architecture" },
                { title: "Deployment", desc: "Expert-led implementation phase" },
                { title: "Expansion", desc: "Strategic growth & optimization" },
              ].map((step, i) => (
                <div key={i} className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-primary/30 transition-colors">
                  <span className="text-4xl font-black text-primary/20 mb-4 block">0{i+1}</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-500 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modern CTA */}
      <section className="py-32 bg-slate-900 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="grid grid-cols-6 h-full">
            {[...Array(6)].map((_, i) => <div key={i} className="border-r border-white/20" />)}
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
              Transform Your <br />Operations Today
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-2xl px-12 py-8 text-xl font-bold transition-all hover:scale-105" asChild>
                <Link to="/contact">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10 rounded-2xl px-12 py-8 text-xl font-bold backdrop-blur-sm" asChild>
                <Link to="/contact">Technical Inquiries</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
