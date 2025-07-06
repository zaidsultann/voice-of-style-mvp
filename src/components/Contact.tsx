import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const businessHours = [
    { day: 'Monday', hours: '10 a.m.–7 p.m.' },
    { day: 'Tuesday', hours: '10 a.m.–7 p.m.' },
    { day: 'Wednesday', hours: '10 a.m.–7 p.m.' },
    { day: 'Thursday', hours: '10 a.m.–7 p.m.' },
    { day: 'Friday', hours: '10 a.m.–7 p.m.' },
    { day: 'Saturday', hours: '9 a.m.–6 p.m.' },
    { day: 'Sunday', hours: '10 a.m.–4 p.m.' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission (replace with actual endpoint)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      toast({
        title: "Error Sending Message",
        description: "Please try again or call us directly at (905) 607-0008.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 section-bg">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gradient mb-4">
            Visit Us Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Located in the heart of Mississauga, we're here to serve you with premium barbering services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info & Hours */}
          <div className="space-y-8">
            {/* Business Info */}
            <div className="card-luxury">
              <h3 className="text-2xl font-semibold text-primary mb-6">Get In Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="text-primary text-xl">📍</div>
                  <div>
                    <h4 className="font-semibold">Address</h4>
                    <p className="text-muted-foreground">
                      3700 Eglinton Ave W Unit #63<br />
                      Mississauga, ON L5M 2R9
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-primary text-xl">📞</div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <a 
                      href="tel:(905) 607-0008"
                      className="text-primary hover:text-accent transition-colors duration-300"
                    >
                      (905) 607-0008
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 pt-4">
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
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="card-luxury">
              <h3 className="text-2xl font-semibold text-primary mb-6">Business Hours</h3>
              <div className="space-y-3">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-border/50 last:border-b-0">
                    <span className="font-medium">{schedule.day}</span>
                    <span className="text-muted-foreground">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-luxury">
            <h3 className="text-2xl font-semibold text-primary mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-background border-border focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Tell us about your preferred service, any special requests, or questions you have..."
                  className="bg-background border-border focus:border-primary"
                />
              </div>

              <Button
                type="submit"
                variant="luxury"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
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