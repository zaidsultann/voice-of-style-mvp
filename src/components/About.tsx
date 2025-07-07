import { Button } from "@/components/ui/button";
import { Scissors, Crown, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gradient mb-6">
              The Art of Barbering
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Barber's Voice offers customers the cleanest haircuts, beard shaves, hair colouring & more by experienced staff members who have been working in this industry for more than 7 years. You will be assured looking fresh and clean each time you step into Barber's Voice.
              </p>
            </div>
            
            <div className="mt-8">
              <Button
                asChild
                variant="outline-luxury"
                size="lg"
                className="shadow-2xl border-white text-white hover:bg-white hover:text-black"
              >
                <a
                  href="https://www.fresha.com/a/barbers-voice-mississuaga-3700-eglinton-avenue-west-deuipxgm/all-offer?menu=true"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Your Experience
                </a>
              </Button>
            </div>
          </div>

          {/* Values Grid */}
          <div className="animate-slide-up">
            {/* Top row - 2 boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div className="card-luxury text-center">
                <Scissors className="text-primary text-4xl mb-4 mx-auto" size={32} />
                <h3 className="text-xl font-semibold mb-2 text-white">Master Craftsmanship</h3>
                <p className="text-muted-foreground">Precision cuts by professionals</p>
              </div>
              
              <div className="card-luxury text-center">
                <Crown className="text-primary text-4xl mb-4 mx-auto" size={32} />
                <h3 className="text-xl font-semibold mb-2 text-white">Luxury Experience</h3>
                <p className="text-muted-foreground">Premium atmosphere for your comfort</p>
              </div>
            </div>
            
            {/* Bottom row - 1 centered box */}
            <div className="flex justify-center">
              <div className="card-luxury text-center w-full sm:max-w-sm">
                <Target className="text-primary text-4xl mb-4 mx-auto" size={32} />
                <h3 className="text-xl font-semibold mb-2 text-white">Attention to Detail</h3>
                <p className="text-muted-foreground">Tailored to your unique style</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;