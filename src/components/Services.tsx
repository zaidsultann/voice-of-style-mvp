import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      name: "Classic Haircut",
      description: "Precision cutting and styling tailored to your face shape and lifestyle",
      price: "From $35",
      features: ["Consultation", "Wash & Cut", "Style Finish"]
    },
    {
      name: "Beard Trim & Shape",
      description: "Professional beard grooming to complement your look perfectly",
      price: "From $25",
      features: ["Beard Analysis", "Precision Trimming", "Hot Towel Finish"]
    },
    {
      name: "Hot Towel Shave",
      description: "Traditional straight razor shave with premium grooming products",
      price: "From $45",
      features: ["Hot Towel Prep", "Straight Razor", "Aftercare Treatment"]
    },
    {
      name: "Hair Wash & Style",
      description: "Refreshing wash with professional styling for any occasion",
      price: "From $20",
      features: ["Premium Products", "Scalp Massage", "Professional Styling"]
    },
    {
      name: "Full Service Package",
      description: "Complete grooming experience with haircut, beard work, and styling",
      price: "From $75",
      features: ["Haircut", "Beard Trim", "Hot Towel", "Styling"]
    },
    {
      name: "Wedding & Events",
      description: "Special occasion grooming to make your important day perfect",
      price: "Contact for pricing",
      features: ["Consultation", "Premium Service", "Touch-up Available"]
    }
  ];

  return (
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

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-luxury group hover:scale-105 transition-all duration-300"
            >
              <div className="mb-4">
                <h3 className="text-2xl font-semibold text-primary mb-2">{service.name}</h3>
                <p className="text-3xl font-bold text-gradient mb-3">{service.price}</p>
                <p className="text-muted-foreground mb-4">{service.description}</p>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Includes:</h4>
                <ul className="space-y-1">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="card-luxury max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Ready to Experience Excellence?</h3>
            <p className="text-muted-foreground mb-6">
              Book your appointment today and discover why Barber's Voice is Mississauga's premier destination for men's grooming.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                  Book Online Now
                </a>
              </Button>
              <Button
                asChild
                variant="outline-luxury"
                size="lg"
              >
                <a href="tel:(905) 607-0008">
                  Call (905) 607-0008
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;