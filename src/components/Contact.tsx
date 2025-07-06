import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";

const Contact = () => {

  const businessHours = [
    { day: 'Monday', hours: '10 a.m.–7 p.m.' },
    { day: 'Tuesday', hours: '10 a.m.–7 p.m.' },
    { day: 'Wednesday', hours: '10 a.m.–7 p.m.' },
    { day: 'Thursday', hours: '10 a.m.–7 p.m.' },
    { day: 'Friday', hours: '10 a.m.–7 p.m.' },
    { day: 'Saturday', hours: '9 a.m.–6 p.m.' },
    { day: 'Sunday', hours: '10 a.m.–4 p.m.' }
  ];


  return (
    <section id="contact" className="py-20 section-bg">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gradient mb-4">
            Visit Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Premium barbering in Mississauga
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="card-luxury">
            <h3 className="text-2xl font-semibold text-primary mb-6">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="text-primary text-xl mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-white">Address</h4>
                  <p className="text-muted-foreground">
                    3700 Eglinton Ave W Unit #63<br />
                    Mississauga, ON L5M 2R9
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="text-primary text-xl mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-white">Phone</h4>
                  <a 
                    href="tel:(905) 607-0008"
                    className="text-primary hover:text-accent transition-colors duration-300 text-lg"
                  >
                    (905) 607-0008
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <Button
                  asChild
                  variant="luxury"
                  className="w-full"
                >
                  <a
                    href="https://www.fresha.com/a/barbers-voice-mississuaga-3700-eglinton-avenue-west-deuipxgm/all-offer?menu=true"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book Online
                  </a>
                </Button>
                <Button
                  asChild
                  variant="white"
                  className="w-full"
                >
                  <a href="tel:(905) 607-0008">
                    Call Now
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="card-luxury">
            <h3 className="text-2xl font-semibold text-primary mb-6">Hours</h3>
            <div className="space-y-3">
              {businessHours.map((schedule, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-border/50 last:border-b-0">
                  <span className="font-medium text-white">{schedule.day}</span>
                  <span className="text-muted-foreground">{schedule.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="card-luxury">
            <h3 className="text-2xl font-semibold text-primary mb-6 text-center">Find Us</h3>
            <div className="w-full h-64 md:h-96 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.8954982934157!2d-79.6542!3d43.6065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3f6b9a0f9c3d%3A0x1234567890abcdef!2s3700%20Eglinton%20Ave%20W%20Unit%20%2363%2C%20Mississauga%2C%20ON%20L5M%202R9!5e0!3m2!1sen!2sca!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Barber's Voice Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;