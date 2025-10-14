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
      icon: <Truck className="h-8 w-8" />,
      title: "Reliable Distribution",
      description:
        "Efficient distribution network ensuring timely delivery of products across the region.",
      features: [
        "Regional warehouse facilities",
        "Cold chain for sensitive products",
        "Scheduled delivery routes",
        "Emergency supply services",
      ],
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Technical Consultation",
      description:
        "Expert guidance from our experienced team of agricultural and veterinary specialists.",
      features: [
        "Product selection guidance",
        "Application recommendations",
        "Dosage calculations",
        "Problem-solving support",
      ],
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Training Programs",
      description:
        "Educational programs and workshops for farmers and veterinary professionals.",
      features: [
        "Product training sessions",
        "Best practice workshops",
        "Safety protocol training",
        "Certification programs",
      ],
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "Customer Support",
      description:
        "Dedicated customer service team available to assist with all your needs.",
      features: [
        "24/7 emergency hotline",
        "Order tracking system",
        "Technical helpdesk",
        "Multi-language support",
      ],
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Field Support",
      description:
        "On-site technical assistance and field visits by our expert team.",
      features: [
        "Farm/facility visits",
        "Product demonstrations",
        "Application monitoring",
        "Results evaluation",
      ],
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "After-Sales Service",
      description:
        "Comprehensive post-purchase support ensuring customer satisfaction.",
      features: [
        "Product performance monitoring",
        "Issue resolution",
        "Replacement guarantee",
        "Continuous improvement feedback",
      ],
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
      <Card className="h-full shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-white/80 dark:bg-gray-900/50 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-2xl">
        <CardHeader className="relative overflow-hidden">
          <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
            {service.icon}
          </div>
          <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
            {service.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
            {service.description}
          </p>
          <ul className="space-y-2">
            {service.features.map((feature: string, i: number) => (
              <li key={i} className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
          <Button
            variant="outline"
            className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
            asChild
          >
            <Link to="/contact">Learn More</Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/90 to-muted/50">
      {/* Hero Section */}
      <section
        className="relative py-24 bg-cover bg-no-repeat text-center text-black"
        style={{
          backgroundImage: `url(${servicebg})`,
          backgroundPosition: "center top 30%",
        }}
      >
        {/* Dim overlay for better readability */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        <div className="relative z-10 container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-lg"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-lg max-w-3xl mx-auto text-white/90"
          >
            We provide innovative agricultural and veterinary service solutions
            that empower growth, sustainability, and productivity.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-foreground mb-4">
            Complete Service Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We go beyond product supply to offer expert consultation, training,
            and continuous field support to help you succeed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-extrabold text-foreground mb-4">
              How We Serve You
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From consultation to follow-up, we ensure every step delivers value
              and excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
            {["Consultation", "Recommendation", "Implementation", "Follow-up"].map(
              (step, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn(i)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="text-center p-6 rounded-2xl bg-white/70 dark:bg-gray-800/40 shadow-md hover:shadow-lg transition-all duration-300 backdrop-blur-xl"
                >
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-md">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step}</h3>
                  <p className="text-muted-foreground">
                    {
                      [
                        "Assessment of your needs and requirements",
                        "Tailored product & service recommendations",
                        "Delivery and implementation support",
                        "Ongoing performance monitoring",
                      ][i]
                    }
                  </p>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-primary to-green-600 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Ready to Experience Our Services?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-white/90">
            Get in touch with our expert team today and discover how our tailored
            solutions can help your agricultural or veterinary operations thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
  <Button
    size="lg"
    className="bg-white text-primary hover:bg-white/90 font-semibold"
    asChild
  >
    <Link to="/contact">Schedule Consultation</Link>
  </Button>
  <Button
    size="lg"
    className="bg-green-600 text-white hover:bg-white-700 font-semibold"
    asChild
  >
    <Link to="/contact">Contact Our Team</Link>
  </Button>
</div>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
