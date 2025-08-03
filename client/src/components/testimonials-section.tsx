import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    name: "Priya & Raj Sharma",
    location: "Honeymoon Package, Mumbai",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80",
    review: "TGOTRIP made our honeymoon absolutely magical! The private villa was stunning, and every detail was perfectly planned. The Nusa Penida tour was breathtaking!",
    rating: 5
  },
  {
    name: "Rohit Gupta",
    location: "Adventure Package, Delhi",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80",
    review: "Excellent service and amazing value for money! The Gili Islands were paradise, and the team was always available on WhatsApp. Highly recommended!",
    rating: 5
  },
  {
    name: "Anita Mehta",
    location: "Family Package, Bangalore",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80",
    review: "Our family trip was perfectly organized. Kids loved the beach activities, and we enjoyed the cultural tours. The package included everything we needed!",
    rating: 5
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold charcoal mb-6">
            What Our <span className="tropical-teal">Travelers Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real experiences from real travelers who chose TGOTRIP for their Bali adventure.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white rounded-2xl shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mb-2">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.review}"
                </p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image}
                    alt={`Happy traveler ${testimonial.name}`}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold charcoal">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
