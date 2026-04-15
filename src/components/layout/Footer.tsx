import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 md:px-12 py-10">
        {/* Grid with equal spacing and padding */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 justify-items-center md:justify-items-start text-center md:text-left">
          {/* Quick Links */}
          <div className="w-full max-w-xs">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Companies */}
          <div className="w-full max-w-xs">
            <h3 className="text-lg font-semibold mb-4">Our Companies</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/companies/Welin"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Welin - Veterinary Drugs
                </Link>
              </li>
              <li>
                <Link
                  to="/companies/Bnosha"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Bnosha - Agricultural Inputs
                </Link>
              </li>
              <li>
                <Link
                  to="/companies/Yabon"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Yabon - Agrochemical
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full max-w-xs">
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <MapPin className="h-4 w-4 text-primary-foreground/60" />
                <span className="text-primary-foreground/80 text-sm">
                  Eldasol building, 4th floor (In front of NB business center)
                </span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Phone className="h-4 w-4 text-primary-foreground/60" />
                <a
                  href="tel:+251912507091"
                  className="text-primary-foreground/80 text-sm hover:underline"
                >
                  +251 96 989 3105
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Mail className="h-4 w-4 text-primary-foreground/60" />
                <a
                  href="mailto:sendfornosha@gmail.com"
                  className="text-primary-foreground/80 text-sm hover:underline"
                >
                  groupnosha@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-10 pt-6 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} BWY . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
