import { useState, useRef } from "react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

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
              title: "MESSAGE RECEIVED",
              description: "Our core team will contact you shortly.",
            });
            setFormData({
              name: "",
              email: "",
              phone: "",
              subject: "",
              message: ""
            });
            setIsSubmitting(false);
          },
          (error) => {
            toast({
              title: "Error",
              description: "Something went wrong, please try again.",
              variant: "destructive",
            });
            console.error("EmailJS error:", error);
            setIsSubmitting(false);
          }
        );
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactDetails = [
    { 
      icon: <MapPin className="h-5 w-5" />, 
      label: "HQ Location", 
      value: "Eldasol Building, 4th Floor", 
      sub: "Addis Ababa, Ethiopia" 
    },
    { 
      icon: <Phone className="h-5 w-5" />, 
      label: "Direct Line", 
      value: "+251 91 250 7091", 
      sub: "+251 99 623 8648" 
    },
    { 
      icon: <Mail className="h-5 w-5" />, 
      label: "Digital Inquiry", 
      value: "sendfornosha@gmail.com", 
      sub: "Response within 24h" 
    },
    { 
      icon: <Clock className="h-5 w-5" />, 
      label: "Operational Hours", 
      value: "08:00 - 18:00 EAT", 
      sub: "Monday — Saturday" 
    }
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-[#5F5B3A]/30">
      {/* Spacer for Header */}
      <div className="h-24 bg-white" />

      {/* Main Container */}
      <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          
          {/* Left Side: Context & Info */}
          <div className="space-y-16">
            <div className="space-y-6">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-[10px] font-black uppercase tracking-[0.5em] text-[#5F5B3A]"
              >
                Connect With Us
              </motion.h2>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-6xl font-black uppercase tracking-tighter text-[#1c1b1b] sm:text-7xl leading-[0.9]"
              >
                Let's Build <br /> 
                <span className="text-[#5F5B3A]">The Future</span>.
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="max-w-md text-lg font-medium leading-relaxed text-[#474545]/70"
              >
                Have a project in mind or need expert consultancy? Our team is ready to provide tailored agrochemical and veterinary solutions.
              </motion.p>
            </div>

            {/* Contact Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              {contactDetails.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="space-y-3"
                >
                  <div className="flex items-center gap-3 text-[#5F5B3A]">
                    {item.icon}
                    <span className="text-[10px] font-black uppercase tracking-widest">{item.label}</span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-black uppercase tracking-tight text-[#1c1b1b]">{item.value}</p>
                    <p className="text-[11px] font-medium text-[#474545]/50">{item.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Minimalist Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-12 lg:p-16 bg-[#f3f3f3] rounded-[3rem] relative overflow-hidden"
          >
            {/* Background Texture */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 blur-3xl -mr-32 -mt-32 rounded-full" />
            
            <form ref={formRef} onSubmit={handleSubmit} className="relative z-10 space-y-8">
              <div className="space-y-8">
                {/* Name Field */}
                <div className="space-y-2 group">
                  <label className="text-[9px] font-black uppercase tracking-widest text-[#1c1b1b]/40 group-focus-within:text-[#5F5B3A] transition-colors">Identity / Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="w-full bg-transparent border-b-2 border-[#1c1b1b]/10 py-3 text-sm font-bold text-[#1c1b1b] focus:border-[#5F5B3A] outline-none transition-all placeholder:text-[#1c1b1b]/10"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email & Phone Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2 group">
                    <label className="text-[9px] font-black uppercase tracking-widest text-[#1c1b1b]/40 group-focus-within:text-[#5F5B3A] transition-colors">Digital Mail</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="w-full bg-transparent border-b-2 border-[#1c1b1b]/10 py-3 text-sm font-bold text-[#1c1b1b] focus:border-[#5F5B3A] outline-none transition-all placeholder:text-[#1c1b1b]/10"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="space-y-2 group">
                    <label className="text-[9px] font-black uppercase tracking-widest text-[#1c1b1b]/40 group-focus-within:text-[#5F5B3A] transition-colors">Phone Line</label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="w-full bg-transparent border-b-2 border-[#1c1b1b]/10 py-3 text-sm font-bold text-[#1c1b1b] focus:border-[#5F5B3A] outline-none transition-all placeholder:text-[#1c1b1b]/10"
                      placeholder="+251..."
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div className="space-y-2 group">
                  <label className="text-[9px] font-black uppercase tracking-widest text-[#1c1b1b]/40 group-focus-within:text-[#5F5B3A] transition-colors">Subject / Inquiry</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={(e) => handleInputChange("subject", e.target.value)}
                    className="w-full bg-transparent border-b-2 border-[#1c1b1b]/10 py-3 text-sm font-bold text-[#1c1b1b] focus:border-[#5F5B3A] outline-none transition-all placeholder:text-[#1c1b1b]/10"
                    placeholder="Partnership Opportunity"
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-2 group">
                  <label className="text-[9px] font-black uppercase tracking-widest text-[#1c1b1b]/40 group-focus-within:text-[#5F5B3A] transition-colors">Briefing</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="w-full bg-transparent border-b-2 border-[#1c1b1b]/10 py-3 text-sm font-bold text-[#1c1b1b] focus:border-[#5F5B3A] outline-none transition-all resize-none placeholder:text-[#1c1b1b]/10"
                    placeholder="Tell us about your needs..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-between group px-10 py-6 bg-[#1c1b1b] text-white rounded-2xl overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-[#5F5B3A] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="relative text-[10px] font-black uppercase tracking-[0.3em]">{isSubmitting ? "Transmitting..." : "Send Transmission"}</span>
                <Send className="relative h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Corporate Map / Visual Spacer */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="w-full h-[400px] bg-[#f3f3f3] rounded-[3rem] overflow-hidden grayscale contrast-125 opacity-50 relative group cursor-crosshair">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-4">
               <MapPin className="h-12 w-12 text-[#1c1b1b]/20 mx-auto transition-transform group-hover:scale-110" />
               <p className="text-[10px] font-black uppercase tracking-widest text-[#1c1b1b]/20">Map Data Restricted to Headquarters</p>
            </div>
          </div>
          {/* Subtle location marker */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
             <div className="h-4 w-4 bg-[#5F5B3A] rounded-full animate-ping" />
             <div className="h-4 w-4 bg-[#5F5B3A] rounded-full absolute top-0" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
