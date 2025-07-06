import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img src={logo} alt="Barber's Voice" className="h-12 w-auto" />
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Premium barbering in Mississauga. Traditional craftsmanship meets modern style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                variant="luxury"
              >
                <a
                  href="https://www.fresha.com/a/barbers-voice-mississuaga-3700-eglinton-avenue-west-deuipxgm/all-offer?menu=true"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Appointment
                </a>
              </Button>
              <Button
                asChild
                variant="outline-luxury"
              >
                <a href="tel:(905) 607-0008">
                  Call Now
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('gallery')}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('reviews')}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Reviews
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Contact</h3>
            <div className="space-y-3 text-muted-foreground">
              <div>
                <p className="font-medium">Address:</p>
                <p className="text-sm">
                  3700 Eglinton Ave W Unit #63<br />
                  Mississauga, ON L5M 2R9
                </p>
              </div>
              <div>
                <p className="font-medium">Phone:</p>
                <a 
                  href="tel:(905) 607-0008"
                  className="text-sm text-primary hover:text-accent transition-colors duration-300"
                >
                  (905) 607-0008
                </a>
              </div>
              <div>
                <p className="font-medium">Hours:</p>
                <p className="text-sm">Mon-Fri: 10am-7pm</p>
                <p className="text-sm">Sat: 9am-6pm, Sun: 10am-4pm</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 Barber's Voice. All rights reserved.
            </div>
            
            <button
              onClick={scrollToTop}
              className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm flex items-center gap-2"
            >
              Back to Top
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;