import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";
import heroImage from "@/assets/barbersvoice-background.png";
import logo from "@/assets/logo.svg";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center hero-bg overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Logo */}
        <div className="mb-2 md:mb-8 animate-fade-in">
          <img 
            src={logo} 
            alt="Barber's Voice" 
            className="mx-auto h-20 md:h-24 w-auto drop-shadow-2xl"
          />
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 animate-slide-up">
          Barber's <span className="text-gradient">Voice</span>
        </h1>
        
        {/* Subheading */}
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Traditional barbering meets modern luxury
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <Button
            asChild
            variant="luxury"
            size="lg"
            className="text-xl px-12 py-6 shadow-2xl"
          >
            <a
              href="https://www.fresha.com/a/barbers-voice-mississuaga-3700-eglinton-avenue-west-deuipxgm/all-offer?menu=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Your Appointment
            </a>
          </Button>
          
          <Button
            asChild
            variant="outline-luxury"
            size="lg"
            className="text-xl px-8 py-6 shadow-2xl border-white text-white hover:bg-white hover:text-black"
          >
            <a href="tel:(905) 607-0008">
              Call to Book
            </a>
          </Button>
        </div>

        {/* Business Info */}
        <div className="mt-16 text-white/80 animate-fade-in flex flex-col sm:flex-row gap-4 justify-center items-center" style={{ animationDelay: '0.6s' }}>
          <div className="flex items-center gap-2">
            <MapPin size={20} />
            <span className="text-xl">3700 Eglinton Ave W, Mississauga</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={20} />
            <span className="text-xl">(905) 607-0008</span>
          </div>
        </div>
      </div>   
    </section>
  );
};

export default Hero;