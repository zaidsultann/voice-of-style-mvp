import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

const Services = () => {
  const services = [
    {
      name: "Haircut",
      description: "Precision cutting and styling tailored to your face shape and lifestyle",
      price: "$35",
      time: "25 mins"
    },
    {
      name: "Beard Trim",
      description: "Professional beard grooming to complement your look perfectly",
      price: "$30",
      time: "20 mins"
    },
    {
      name: "Colour",
      description: "Professional hair coloring with premium products",
      price: "$45",
      time: "45 mins"
    },
    {
      name: "Haircut & Beard Trim",
      description: "Complete grooming experience with haircut and beard work",
      price: "$60",
      time: "55 mins"
    }
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          .group\\/button:hover .circle-animate {
            stroke-dashoffset: 0;
            transform: rotate(-360deg);
          }
          .circle-animate {
            transform-origin: center;
          }
        `
      }} />
      <section id="services" className="py-20 section-bg">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gradient mb-4">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Premium barbering services crafted to perfection, tailored to your individual style and needs
            </p>
          </div>

          {/* Services Grid - 2x2 Layout with breathing room */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="card-luxury group hover:scale-105 transition-all duration-300 p-8"
              >
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-3">{service.name}</h3>
                    <div className="flex items-center gap-3 mb-4">
                      <p className="text-3xl font-bold text-gradient">{service.price}</p>
                      <div className="flex items-center text-muted-foreground">
                        <Clock className="w-4 h-4 mr-2" />
                        <span className="text-sm">{service.time}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>

                  <Button
                    asChild
                    variant="outline-luxury"
                    size="lg"
                  >
                    <a
                      href="https://www.fresha.com/a/barbers-voice-mississuaga-3700-eglinton-avenue-west-deuipxgm/all-offer?menu=true"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book Now
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">Ready to transform your look?</h3>
              <p className="text-muted-foreground mb-6">
                Give us a call and discover why Barber's Voice is Mississauga's premium destination
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  variant="outline-luxury"
                  size="lg"
                  className="shadow-2xl border-white text-white hover:bg-white hover:text-black"
                >
                  <a href="tel:(905) 607-0008">
                    Call Now
                  </a>
                </Button>
              </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;