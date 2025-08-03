import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Send, Shield } from 'lucide-react';

export default function HeroSection() {

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      />
      <div className="absolute inset-0 hero-gradient" />
      
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Hero Content */}
            <div className="text-white space-y-6 animate-slide-up">
              <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                Discover <span className="coral-accent">Magical</span> Bali
              </h2>
              <p className="text-xl lg:text-2xl font-light opacity-95">
                Luxury, Adventure & Romance in One Trip
              </p>
              <p className="text-lg opacity-80 max-w-lg">
                Experience the perfect blend of tropical paradise, cultural richness, and luxury accommodations. 
                From pristine beaches to mystical temples, create memories that last a lifetime.
              </p>
            </div>

            {/* Lead Capture Form */}
            <Card className="bg-white rounded-2xl shadow-2xl animate-fade-in">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-semibold charcoal mb-2">Get Your Free Quote</h3>
                  <p className="text-gray-600">Customize your perfect Bali experience</p>
                </div>
                
                <form 
                  action="https://formspree.io/f/mkgzvqwn" 
                  method="POST"
                  className="space-y-4"
                >
                  <input type="hidden" name="_subject" value="Bali Package Quote Request" />
                  <input type="hidden" name="_next" value="#" />
                  <input type="hidden" name="package" value="hero-quote" />
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium text-gray-700 mb-2">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-2">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="travelMonth" className="text-sm font-medium text-gray-700 mb-2">Travel Month</Label>
                      <select 
                        id="travelMonth"
                        name="travelMonth"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white"
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
                      <Label htmlFor="pax" className="text-sm font-medium text-gray-700 mb-2">Travelers (Pax)</Label>
                      <select 
                        id="pax"
                        name="pax"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white"
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
                    className="w-full btn-primary text-white font-semibold py-4 px-6 rounded-lg text-lg shadow-lg"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Get Free Quote
                  </Button>
                </form>
                
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-500 flex items-center justify-center">
                    <Shield className="mr-1 h-4 w-4 text-green-500" />
                    100% Secure & Confidential
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
