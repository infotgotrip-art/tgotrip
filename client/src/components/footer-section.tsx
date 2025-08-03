import { Phone, Mail, Globe, MessageCircle, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import logoImage from '@assets/LOGO - Copy_1754165264215.png';

export default function FooterSection() {
  return (
    <footer className="bg-charcoal text-white py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <img 
                src={logoImage} 
                alt="TGOTRIP - Your Reliable Partner in Travel" 
                className="h-12 w-auto mb-2"
              />
            </div>
            <p className="text-gray-400 leading-relaxed">
              Creating unforgettable travel experiences across Asia's most beautiful destinations. 
              From luxury getaways to adventure tours, we craft journeys that inspire.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 tropical-teal">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About TGOTRIP</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Bali Packages</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Thailand Tours</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Maldives Packages</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Travel Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Travel Insurance</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 tropical-teal">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Honeymoon Packages</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Family Vacations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Adventure Tours</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Luxury Travel</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Group Tours</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Customized Trips</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 tropical-teal">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="tropical-teal mt-1 h-5 w-5" />
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <a href="tel:+919792906666" className="text-gray-400 hover:text-white transition-colors">
                    +91-9792906666
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="tropical-teal mt-1 h-5 w-5" />
                <div>
                  <p className="text-white font-medium">Email</p>
                  <a href="mailto:info@tgotrip.com" className="text-gray-400 hover:text-white transition-colors">
                    info@tgotrip.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Globe className="tropical-teal mt-1 h-5 w-5" />
                <div>
                  <p className="text-white font-medium">Website</p>
                  <a href="https://www.tgotrip.com" className="text-gray-400 hover:text-white transition-colors">
                    www.tgotrip.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MessageCircle className="tropical-teal mt-1 h-5 w-5" />
                <div>
                  <p className="text-white font-medium">WhatsApp</p>
                  <a href="https://wa.me/919792906666" className="text-gray-400 hover:text-white transition-colors">
                    Quick Chat Support
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              © 2024 TGOTRIP. All rights reserved. | Crafted with ❤️ for travelers
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cancellation Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
