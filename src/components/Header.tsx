import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md shadow-luxury' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Barber's Voice" className="h-12 w-auto" />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('reviews')}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Contact
            </button>
          </div>

          {/* Book Now Button */}
          <Button
            asChild
            variant="luxury"
            className="hidden md:inline-flex"
          >
            <a
              href="https://www.fresha.com/a/barbers-voice-mississuaga-3700-eglinton-avenue-west-deuipxgm/all-offer?menu=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Now
            </a>
          </Button>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground hover:text-primary">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;