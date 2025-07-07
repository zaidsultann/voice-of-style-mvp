import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Star } from "lucide-react";
import { useState } from "react";

const Reviews = () => {
  const testimonials = [
    {
      name: "Farook Alyassin",
      rating: 5,
      review: "Great barbershop with very nice and caring barbers. It has a nice barbershop feel with people sitting and chatting with the barbers. They do speak a lot of arabic there so be aware but they cut hair very well and use scissors instead of just clippers.",
    },
    {
      name: "Anas Ozmen",
      rating: 5,
      review: "One of Mississauga's top barbershops, Mohammad and Raad showcase their talent here. The establishment is well-maintained, with reasonable prices and a recommendation for appointments. Plus, they have an ATM conveniently located on-site.",
    },
    {
      name: "Ali Al-Janabi",
      rating: 5,
      review: "Raad is the most professional barber, I’ve been dealing with him for a long time and he always makes sure that I look great and satisfied before I leave the shop. Highly recommended Raad and his colleagues!",
    },
    {
      name: "Zain Farooqi",
      rating: 5,
      review: "First time coming here, go to Muhammad he did a phenomenal job. Got a haircut and a beard trim at a very reasonable price. Very clean place with amazing staff",
    },
    {
      name: "Said Nuker",
      rating: 5,
      review: "Very good and professional staff. I was in the area and needed a haircut, so I tried it. Since that one time, it became my go-to barbar shop.",
    },
    {
      name: "Hassan Saadaldin",
      rating: 5,
      review: "Found this new barber shop next to my house, great group of men, very talented, welcoming and experienced, so rest assure you’ll be in great hands. Highly recommend Mo and his team. Make sure to book an appointment!",
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