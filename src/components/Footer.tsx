import { Button } from "@/components/ui/button";
import logo from "@/assets/logo1.svg";

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
            <h2 className="text-2xl font-bold text-primary mb-4">Barber's Voice</h2>
            <div className="flex items-center space-x-3 mb-6">
              <img src={logo} alt="Barber's Voice" className="h-12 w-auto" />
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              We offer customers the cleanest services by experienced, professional staff members. You will be assured looking fresh and clean each time you step out of Barber's Voice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
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
                <p className="font-medium font-semibold">Address:</p>
                <p className="text-medium">
                  3700 Eglinton Ave W Unit #63<br />
                  Mississauga, ON L5M 2R9
                </p>
              </div>
              <div>
                <p className="font-medium font-semibold">Phone:</p>
                <a 
                  href="tel:(905) 607-0008"
                  className="text-medium text-primary hover:text-accent transition-colors duration-300"
                >
                  (905) 607-0008
                </a>
              </div>
              <div>
                <p className="font-medium font-semibold">Hours:</p>
                <p className="text-medium">Mon-Fri: 10am-7pm</p>
                <p className="text-medium">Sat: 9am-6pm, Sun: 10am-4pm</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and Attribution */}
        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
          <p className="mb-1">Copy Right © 2025 Barber's Voice</p>
          <p>
            Powered by{' '}
            <a 
              href="https://digitalizers.ca" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors font-medium"
            >
              Digitalizers Inc.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;