
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { useLocation, Link } from "react-router-dom";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isAdmin = sessionStorage.getItem("adminAuth") === "true";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 border-b shadow-sm backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl md:text-2xl font-serif font-bold text-gradient">
            SHAN PRINTERS
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            to={isHomePage ? "#home" : "/"} 
            className="text-foreground hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link 
            to={isHomePage ? "#services" : "/#services"} 
            className="text-foreground hover:text-primary transition-colors"
          >
            Services
          </Link>
          <Link 
            to="/about" 
            className={`transition-colors ${
              location.pathname === "/about" 
                ? "text-primary font-medium" 
                : "text-foreground hover:text-primary"
            }`}
          >
            About
          </Link>
          <Link 
            to={isHomePage ? "#contact" : "/#contact"} 
            className="text-foreground hover:text-primary transition-colors"
          >
            Contact
          </Link>
          {isAdmin && (
            <Link 
              to="/admin" 
              className={`transition-colors ${
                location.pathname === "/admin" 
                  ? "text-primary font-medium" 
                  : "text-foreground hover:text-primary"
              }`}
            >
              Admin
            </Link>
          )}
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-foreground"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b animate-fade-in">
          <div className="py-2 px-4 space-y-1">
            <Link
              to={isHomePage ? "#home" : "/"}
              className="block py-2 text-foreground hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to={isHomePage ? "#services" : "/#services"}
              className="block py-2 text-foreground hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/about"
              className={`block py-2 ${
                location.pathname === "/about" 
                  ? "text-primary font-medium" 
                  : "text-foreground hover:text-primary"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to={isHomePage ? "#contact" : "/#contact"}
              className="block py-2 text-foreground hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            {isAdmin && (
              <Link
                to="/admin"
                className={`block py-2 ${
                  location.pathname === "/admin" 
                    ? "text-primary font-medium" 
                    : "text-foreground hover:text-primary"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Admin
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
