import { Button } from "@/components/ui/button";
import { Scissors, Crown, Target, Star } from "lucide-react";

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
                Premium barbering where traditional craftsmanship meets modern luxury. 
                Every cut is executed with precision and passion.
              </p>
              <p>
                Located in Mississauga, we create an atmosphere where you can relax 
                and experience the finest in men's grooming.
              </p>
            </div>
            
            <div className="mt-8">
              <Button
                asChild
                variant="luxury"
                size="lg"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-slide-up">
            <div className="card-luxury text-center">
              <Scissors className="text-primary text-4xl mb-4 mx-auto" size={32} />
              <h3 className="text-xl font-semibold mb-2 text-white">Master Craftsmanship</h3>
              <p className="text-muted-foreground">Precision cuts by experienced professionals</p>
            </div>
            
            <div className="card-luxury text-center">
              <Crown className="text-primary text-4xl mb-4 mx-auto" size={32} />
              <h3 className="text-xl font-semibold mb-2 text-white">Luxury Experience</h3>
              <p className="text-muted-foreground">Premium atmosphere for your comfort</p>
            </div>
            
            <div className="card-luxury text-center">
              <Target className="text-primary text-4xl mb-4 mx-auto" size={32} />
              <h3 className="text-xl font-semibold mb-2 text-white">Attention to Detail</h3>
              <p className="text-muted-foreground">Tailored to your unique style</p>
            </div>
            
            <div className="card-luxury text-center">
              <Star className="text-primary text-4xl mb-4 mx-auto" size={32} />
              <h3 className="text-xl font-semibold mb-2 text-white">Excellence Always</h3>
              <p className="text-muted-foreground">Highest quality service every time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;