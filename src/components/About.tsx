import { Button } from "@/components/ui/button";

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
                At Barber's Voice, we believe that a great haircut is more than just a service – it's an art form, 
                a moment of transformation, and a boost of confidence that carries you through your day.
              </p>
              <p>
                Located in the heart of Mississauga, our barbershop combines traditional craftsmanship with 
                modern luxury. Every cut, every shave, every detail is executed with precision and passion by 
                our skilled master barbers.
              </p>
              <p>
                We've created an atmosphere where you can relax, unwind, and experience the finest in men's 
                grooming. From classic cuts to contemporary styles, we listen to your vision and bring it to life 
                with exceptional skill and attention to detail.
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
              <div className="text-4xl mb-4">✂️</div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Master Craftsmanship</h3>
              <p className="text-muted-foreground">Precision cuts by experienced professionals who take pride in their art</p>
            </div>
            
            <div className="card-luxury text-center">
              <div className="text-4xl mb-4">👑</div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Luxury Experience</h3>
              <p className="text-muted-foreground">Premium atmosphere designed for your comfort and relaxation</p>
            </div>
            
            <div className="card-luxury text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Attention to Detail</h3>
              <p className="text-muted-foreground">Every cut is tailored to your unique style and preferences</p>
            </div>
            
            <div className="card-luxury text-center">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Excellence Always</h3>
              <p className="text-muted-foreground">Committed to delivering the highest quality service every time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;