import { useState, useRef } from "react";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import greenbg from "@/assets/greenbg.jpg";
import emailjs from "@emailjs/browser";
import { motion, Variants } from "framer-motion";

const fadeIn = (i = 1): Variants => ({
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" } },
});

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const formSectionRef = useRef<HTMLDivElement>(null); // ref for scrolling
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    inquiry: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs
        .sendForm(
          "service_kjlte6a", 
          "template_jccmjis",
          formRef.current,
          "wocaYpZ5MGkomZFcA" 
        )
        .then(
          () => {
            toast({
              title: "Message Sent!",
              description: "We'll get back to you within 24 hours.",
            });
            setFormData({
              name: "",
              email: "",
              phone: "",
              company: "",
              inquiry: "",
              message: ""
            });
          },
          (error) => {
            toast({
              title: "Error",
              description: "Something went wrong, please try again.",
              variant: "destructive",
            });
            console.error("EmailJS error:", error);
          }
        );
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCompanyContact = (companyName: string) => {
    setFormData(prev => ({ ...prev, company: companyName }));
    if (formSectionRef.current) {
      formSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const contactInfo = [
    { icon: <MapPin className="h-6 w-6" />, title: "Main Office", details: ["Eldasol building", "4th floor (In front of NB business center)"] },
    { icon: <Phone className="h-6 w-6" />, title: "Phone Numbers", details: ["+251 91 250 7091", "+251 99 623 8648"] },
    { icon: <Mail className="h-6 w-6" />, title: "Email Address", details: ["sendfornosha@gmail.com"] },
    { icon: <Clock className="h-6 w-6" />, title: "Business Hours", details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 4:00 PM", "Sunday: Emergency Only"] }
  ];

  const companies = [
    { name: "Welin", speciality: "Agrochemicals", contact: "agropharma10@gmail.com", phone: "+251 91 207 2531" },
    { name: "Bnosha", speciality: "Veterinary Drugs", contact: "sendfornosha@gmail.com", phone: "+251 91 250 7091" },
    { name: "Yabon", speciality: "Agricultural Inputs", contact: "Sendyonas@gmail.com", phone: "+251 99 623 8648" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
<section 
  className="py-20 relative flex flex-col items-center justify-center text-center px-4 bg-cover bg-center bg-no-repeat rounded-b-3xl overflow-hidden"
  style={{ backgroundImage: `url(${greenbg})` }}
>
  {/* Darker green overlay */}
  <div className="absolute inset-0 bg-green-900/70"></div>

  <div className="relative z-10">
    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-bounce">
      Get In Touch
    </h1>
    <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
      Ready to partner with us or have questions about our products and services? 
      We're here to help and respond within 24 hours.
    </p>
  </div>
</section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <Card className="shadow-medium" ref={formSectionRef}>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <MessageSquare className="h-6 w-6 text-primary" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company/Organization</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="inquiry">Type of Inquiry</Label>
                    <Select value={formData.inquiry} onValueChange={(value) => handleInputChange("inquiry", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="product">Product Information</SelectItem>
                        <SelectItem value="quote">Request Quote</SelectItem>
                        <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <input type="hidden" name="inquiry" value={formData.inquiry} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Please describe your inquiry in detail..."
                      required
                    />
                  </div>

                  <Button type="submit" variant="primary" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Contact Information</h2>
                <div className="grid grid-cols-1 gap-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      variants={fadeIn(index)}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <Card className="shadow-soft">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="text-primary mt-1">{info.icon}</div>
                            <div>
                              <h4 className="font-semibold text-foreground mb-2">{info.title}</h4>
                              {info.details.map((detail, detailIndex) => (
                                <p key={detailIndex} className="text-muted-foreground text-sm">
                                  {detail}
                                </p>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Contacts */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Direct Company Contacts
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              For specific inquiries, you can contact our individual companies directly based on your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {companies.map((company, index) => (
              <motion.div
                key={index}
                variants={fadeIn(index)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Card className="text-center shadow-medium hover:shadow-strong transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">{company.name}</CardTitle>
                    <p className="text-muted-foreground">{company.speciality}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-center space-x-2">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{company.contact}</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{company.phone}</span>
                      </div>
                    </div>
                    <Button
                      className="w-full bg-green-600 text-white hover:bg-green-700"
                      onClick={() => handleCompanyContact(company.name)}
                    >
                      Contact {company.name}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Find Us</h2>
            <p className="text-lg text-muted-foreground">Visit our main office location</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="shadow-medium">
              <CardContent className="p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3940.586632227545!2d38.77843047501859!3d9.01012929105043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMDAnMzYuNSJOIDM4wrA0Nic1MS42IkU!5e0!3m2!1sen!2set!4v1759063076048!5m2!1sen!2set"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
