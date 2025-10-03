import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const sisterCompanies = [
    { name: "Welin", href: "/companies/Welin" },
    { name: "Bnosha", href: "/companies/Bnosha" },
    { name: "Yabon", href: "/companies/Yabon" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50 shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <span className="text-xl font-bold text-foreground underline-animated">Welin • Bnosha • Yabon</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-105 underline-animated",
                  isActive(item.href) ? "text-primary" : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Sister Companies Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className={cn(
                "text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-105 flex items-center gap-1 underline-animated",
                "text-muted-foreground"
              )}>
                Sister Companies
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border-border">
                {sisterCompanies.map((company) => (
                  <DropdownMenuItem key={company.name} asChild>
                    <Link 
                      to={company.href}
                      className="cursor-pointer"
                    >
                      {company.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

           
          
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border glass-card backdrop-blur-md animate-fadeInUp">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "text-sm font-medium transition-all duration-300 hover:text-primary px-2 py-1 underline-animated hover:translate-x-2",
                    isActive(item.href) ? "text-primary" : "text-muted-foreground"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Sister Companies - Mobile */}
              <div className="px-2 py-1">
                <span className="text-sm font-semibold text-muted-foreground">Sister Companies</span>
                <div className="flex flex-col space-y-2 mt-2 ml-2">
                  {sisterCompanies.map((company) => (
                    <Link
                      key={company.name}
                      to={company.href}
                      className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 underline-animated"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {company.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Button 
                variant="primary" 
                size="sm" 
                className="w-fit mx-2 btn-modern" 
                onClick={() => {
                  navigate('/contact');
                  setIsMenuOpen(false);
                }}
              >
                Get Quote
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;