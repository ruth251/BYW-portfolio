import { useState, useRef } from "react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Send, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import travelBg from "@/assets/tour and travel.jpg";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    message: "",
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
              title: "Inquiry Sent!",
              description:
                "Our travel experts will get back to you shortly to plan your adventure.",
            });
            setFormData({
              name: "",
              email: "",
              phone: "",
              destination: "",
              message: "",
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
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center selection:bg-teal-500/30"
      style={{ backgroundImage: `url(${travelBg})` }}
    >
      <div className="min-h-screen bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-4xl bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden"
        >
          <div className="grid lg:grid-cols-2">
            {/* Left Side: Form */}
            <div className="p-8 md:p-12 order-2 lg:order-1">
              <Link
                to="/nosha-travel"
                className="inline-flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-teal-600 transition-colors mb-6"
              >
                <ArrowLeft size={16} />
                Back to Gallery
              </Link>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 tracking-tight">
                Plan Your Escape
              </h2>
              <p className="mt-3 text-gray-600">
                Fill out the form below and let our travel specialists craft
                your perfect journey.
              </p>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="mt-8 space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="bg-white/80"
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      handleInputChange("email", e.target.value)
                    }
                    className="bg-white/80"
                  />
                </div>
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number (Optional)"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="bg-white/80"
                />
                <Input
                  type="text"
                  name="destination"
                  placeholder="Dream Destination (e.g., Chengdu, Shenzhen)"
                  value={formData.destination}
                  onChange={(e) =>
                    handleInputChange("destination", e.target.value)
                  }
                  className="bg-white/80"
                />
                <Textarea
                  name="message"
                  placeholder="Tell us about your ideal trip, including number of travelers, preferred dates, and any special requests."
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    handleInputChange("message", e.target.value)
                  }
                  className="bg-white/80"
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-teal-400 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? "Sending..." : "Request a Quote"}
                  <Send size={16} />
                </Button>
              </form>
            </div>

            {/* Right Side: Info */}
            <div className="p-8 md:p-12 bg-gray-50/80 order-1 lg:order-2">
              <h3 className="text-2xl font-bold text-gray-800">
                Contact Information
              </h3>
              <p className="mt-3 text-gray-600">
                Prefer to reach out directly? Here’s how you can connect with
                us.
              </p>
              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-400 to-teal-300 rounded-full flex items-center justify-center text-white">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">
                      Booking Hotline
                    </h4>
                    <p className="text-gray-600">+251 93 864 4784</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-400 to-teal-300 rounded-full flex items-center justify-center text-white">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">
                      Email Inquiries
                    </h4>
                    <p className="text-gray-600">travel@bnoshagroup.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-400 to-teal-300 rounded-full flex items-center justify-center text-white">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Our Office</h4>
                    <p className="text-gray-600">
                      Mickylyland Street, Elsadol Building 403
                      <br />
                      Addis Ababa, Ethiopia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
