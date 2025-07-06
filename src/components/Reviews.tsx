import { Button } from "@/components/ui/button";

const Reviews = () => {
  const testimonials = [
    {
      name: "Marcus Thompson",
      rating: 5,
      review: "Absolutely phenomenal service! The attention to detail is unmatched. I've been coming here for over a year and every cut is perfect. The atmosphere is professional yet relaxing, and the staff really knows their craft.",
      service: "Classic Haircut & Beard Trim"
    },
    {
      name: "David Chen",
      rating: 5,
      review: "Best barbershop experience I've ever had. The hot towel shave was incredible - felt like royalty. The barbers are true professionals who take pride in their work. Worth every penny!",
      service: "Hot Towel Shave"
    },
    {
      name: "James Rodriguez",
      rating: 5,
      review: "Found my new go-to spot! The consultation was thorough, they really listened to what I wanted, and delivered exactly that. Clean, professional environment with top-notch service. Highly recommended!",
      service: "Full Service Package"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-2xl ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ⭐
      </span>
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gradient mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from the gentlemen who trust us with their grooming
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-luxury relative group hover:scale-105 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-primary/20 text-4xl">
                "
              </div>
              
              {/* Rating */}
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Review Text */}
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.review}"
              </p>

              {/* Client Info */}
              <div className="border-t border-border pt-4">
                <h4 className="font-semibold text-primary text-lg">{testimonial.name}</h4>
                <p className="text-sm text-muted-foreground">{testimonial.service}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="text-center">
          <div className="card-luxury max-w-xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">See More Reviews</h3>
            <p className="text-muted-foreground mb-6">
              Read what more of our satisfied clients have to say about their experience at Barber's Voice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                variant="luxury"
                size="lg"
              >
                <a
                  href="https://www.google.com/search?q=Barber%27s+Voice+Mississauga+reviews&oq=Barber%27s+Voice+Mississauga+reviews"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Google Reviews
                </a>
              </Button>
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
                  Book Your Visit
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;