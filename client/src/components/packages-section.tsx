import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Hotel, Utensils, Car, MapPin, Waves, Bath, Ship, Camera, Mountain } from 'lucide-react';

const packages = [
  {
    id: 'kuta-4n5d',
    title: '4 Nights & 5 Days - Kuta',
    description: 'Perfect beach getaway with vibrant nightlife and cultural experiences',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80',
    price: '₹12,999',
    badge: 'Popular Choice',
    badgeColor: 'bg-coral-accent',
    inclusions: [
      { icon: Hotel, label: 'Hotel' },
      { icon: Utensils, label: 'Meals' },
      { icon: Car, label: 'Transfer' },
      { icon: MapPin, label: 'Sightseeing' }
    ]
  },
  {
    id: 'kuta-ubud-5n6d',
    title: '5 Nights & 6 Days - Kuta + Ubud',
    description: 'Beach vibes + Cultural immersion',
    places: 'Places: Kuta 3N, Ubud 2N',
    image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80',
    price: '₹18,999',
    badge: 'Best Value',
    badgeColor: 'bg-sunset-orange',
    inclusions: [
      { icon: Hotel, label: 'Hotel' },
      { icon: Utensils, label: 'Meals' },
      { icon: Car, label: 'Transfer' },
      { icon: MapPin, label: 'Sightseeing' }
    ]
  },
  {
    id: 'luxury-villa-5n6d',
    title: '5N6D - Kuta + Ubud with Private Pool Villa',
    description: 'Ultimate luxury with private villa experience',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80',
    price: '₹26,999',
    badge: 'Luxury',
    badgeColor: 'bg-yellow-500',
    inclusions: [
      { icon: Hotel, label: 'Pvt Villa' },
      { icon: Utensils, label: 'Meals' },
      { icon: Car, label: 'Transfer' },
      { icon: Waves, label: 'Pool' }
    ]
  },
  {
    id: 'extended-luxury-6n7d',
    title: '6N7D - Kuta + Ubud with Private Pool Villa',
    description: 'Extended luxury experience with more time to explore',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80',
    price: '₹32,999',
    badge: '',
    badgeColor: '',
    inclusions: [
      { icon: Hotel, label: 'Pvt Villa' },
      { icon: Utensils, label: 'Meals' },
      { icon: Car, label: 'Transfer' },
      { icon: Bath, label: 'Bath' }
    ]
  },
  {
    id: 'multi-island-6n7d',
    title: '6N7D - Kuta + Gili + Ubud with Villa',
    description: 'Multi-island adventure with island hopping experience',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80',
    price: '₹35,999',
    badge: 'Adventure',
    badgeColor: 'bg-purple-500',
    inclusions: [
      { icon: Hotel, label: 'Pvt Villa' },
      { icon: Ship, label: 'Ferry' },
      { icon: Waves, label: 'Snorkel' },
      { icon: Camera, label: 'Tours' }
    ]
  },
  {
    id: 'ultimate-7n8d',
    title: '7N8D - Kuta + Gili + Nusa + Ubud',
    description: 'Complete Bali experience covering all major destinations',
    image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80',
    price: '₹45,999',
    badge: 'Ultimate',
    badgeColor: 'bg-red-500',
    inclusions: [
      { icon: Hotel, label: 'Pvt Villa' },
      { icon: Ship, label: 'Boat Tours' },
      { icon: Mountain, label: 'Cliff Tours' },
      { icon: Utensils, label: 'All Meals' }
    ]
  }
];

export default function PackagesSection() {
  const [selectedPackage, setSelectedPackage] = useState<string>('');
  const [isBookingDialogOpen, setIsBookingDialogOpen] = useState(false);

  const handleBookNow = (packageId: string) => {
    setSelectedPackage(packageId);
    setIsBookingDialogOpen(true);
  };

  const handleViewItinerary = (packageId: string) => {
    // Open WhatsApp with pre-filled message
    const whatsappUrl = `https://wa.me/919792906666?text=Hi, I would like to see the detailed itinerary for ${packageId}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold charcoal mb-6">
            Choose Your <span className="tropical-teal">Bali Package</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Carefully curated experiences designed to give you the perfect blend of adventure, 
            relaxation, and cultural immersion across Bali's most stunning destinations.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {packages.map((pkg) => (
            <Card key={pkg.id} className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
              <div className="h-64 bg-cover bg-center relative" style={{ backgroundImage: `url(${pkg.image})` }}>
                {pkg.badge && (
                  <Badge className={`absolute top-4 left-4 ${pkg.badgeColor} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                    {pkg.badge}
                  </Badge>
                )}
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold charcoal mb-2">{pkg.title}</h3>
                <p className="text-gray-600 mb-2">{pkg.description}</p>
                {pkg.places && (
                  <p className="text-sm tropical-teal mb-4">{pkg.places}</p>
                )}
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {pkg.inclusions.map((inclusion, index) => (
                    <span key={index} className="flex items-center text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                      <inclusion.icon className="mr-1 h-4 w-4 tropical-teal" />
                      {inclusion.label}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-baseline justify-between mb-6">
                  <div>
                    <span className="text-3xl font-bold charcoal">{pkg.price}</span>
                    <span className="text-gray-500">/ Person</span>
                  </div>
                  <span className="text-sm text-green-600 font-medium">Starting Price</span>
                </div>
                
                <div className="space-y-2">
                  <Button
                    variant="outline"
                    onClick={() => handleViewItinerary(pkg.id)}
                    className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300"
                  >
                    View Itinerary
                  </Button>
                  <Button
                    onClick={() => handleBookNow(pkg.id)}
                    className="w-full btn-primary text-white font-semibold py-3 px-4 rounded-lg"
                  >
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Booking Dialog */}
      <Dialog open={isBookingDialogOpen} onOpenChange={setIsBookingDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Book Your Bali Package</DialogTitle>
          </DialogHeader>
          <form 
            action="https://formspree.io/f/mkgzvqwn" 
            method="POST"
            className="space-y-4"
          >
            <input type="hidden" name="_subject" value="Bali Package Booking Request" />
            <input type="hidden" name="_next" value="#" />
            <input type="hidden" name="package" value={selectedPackage} />
            
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+91 98765 43210"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                required
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="travelMonth">Travel Month</Label>
                <select 
                  id="travelMonth"
                  name="travelMonth"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
                >
                  <option value="">Select Month</option>
                  <option value="january-2025">January 2025</option>
                  <option value="february-2025">February 2025</option>
                  <option value="march-2025">March 2025</option>
                  <option value="april-2025">April 2025</option>
                  <option value="may-2025">May 2025</option>
                  <option value="june-2025">June 2025</option>
                  <option value="july-2025">July 2025</option>
                  <option value="august-2025">August 2025</option>
                  <option value="september-2025">September 2025</option>
                  <option value="october-2025">October 2025</option>
                  <option value="november-2025">November 2025</option>
                  <option value="december-2025">December 2025</option>
                </select>
              </div>
              <div>
                <Label htmlFor="pax">Travelers</Label>
                <select 
                  id="pax"
                  name="pax"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
                >
                  <option value="">Select Pax</option>
                  <option value="1-person">1 Person</option>
                  <option value="2-people">2 People</option>
                  <option value="3-people">3 People</option>
                  <option value="4-people">4 People</option>
                  <option value="5-plus-people">5+ People</option>
                </select>
              </div>
            </div>
            
            <Button 
              type="submit" 
              className="w-full btn-primary"
            >
              Confirm Booking
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
}
