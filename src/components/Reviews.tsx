import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Star } from "lucide-react";
import { useState } from "react";

const Reviews = () => {
  const testimonials = [
    {
      name: "Marcus Thompson",
      rating: 5,
      review: "Badly needed barber shop was needed in Churchill Meadows. Let's start from the customer service. It is A++, staff are highly skilled and know what they are doing. Very friendly and professional. Atmosphere - It is again A++, visit to see it. Thank you guys!",
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
    },
    {
      name: "Michael Johnson",
      rating: 5,
      review: "Exceptional attention to detail and genuine care for customer satisfaction. The atmosphere is welcoming and the skilled barbers deliver consistently excellent results. This is the standard all barbershops should aspire to.",
      service: "Classic Haircut"
    },
    {
      name: "Alex Martinez",
      rating: 5,
      review: "Outstanding service from start to finish. The barbers are true artists who take pride in their craft. The shop has a great vibe and the staff makes you feel like family. Definitely worth the visit!",
      service: "Beard Trim & Shape"
    },
    {
      name: "Robert Wilson",
      rating: 5,
      review: "Finally found a barbershop that understands quality and craftsmanship. From the moment you walk in, you know you're in for a premium experience. The attention to detail is remarkable.",
      service: "Full Service Package"
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gradient mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from the gentlemen who trust us
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="mb-12">
          <Carousel 
            className="max-w-7xl mx-auto"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="card-luxury relative group h-full min-h-[300px] flex flex-col">
                    {/* Quote Icon */}
                    <div className="absolute top-4 right-4 text-primary/20 text-4xl">
                      "
                    </div>
                    
                    {/* Rating */}
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-muted-foreground mb-6 leading-relaxed italic flex-grow">
                      "{testimonial.review}"
                    </p>

                    {/* Client Info */}
                    <div className="border-t border-border pt-4 mt-auto">
                      <h4 className="font-semibold text-primary text-lg">{testimonial.name}</h4>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        {/* Google Reviews CTA */}
        <div className="text-center">
          <div className="">
            <h3 className="text-2xl font-semibold mb-4">Share Your Experience</h3>
            <p className="text-muted-foreground mb-6">
            Had a great visit? We'd love to hear your experience at Barber's Voice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                variant="luxury"
                size="lg"
              >
                <a
                  href="https://www.google.com/search?sca_esv=454f4b93762381d7&sxsrf=AE3TifPrdqbIVgJK67KKenTv42ee4IGfXg:1751845109029&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E1AqBdUmp6GQMrW2XhhLn7E1JxobZ5O_TwuHCBmsWHocPye-XspGgB4jSVnLJe_gvlAIU6dhhpThc8XW8zy2SG6IKSPxYumhIBBZLdVNTQGy2COaNw%3D%3D&q=Barber%E2%80%99s+Voice+Reviews&sa=X&ved=2ahUKEwj0j7PLs6mOAxX1FFkFHSZ5DRoQ0bkNegQIOhAE&biw=1920&bih=919&dpr=1#lrd=0x882b379f02b6fc79:0x986be19a0d773692,3,,,,"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Leave a Review
                </a>
              </Button>
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