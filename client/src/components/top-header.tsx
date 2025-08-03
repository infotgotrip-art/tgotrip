import { Phone, Mail } from 'lucide-react';
import logoImage from '@assets/LOGO - Copy_1754165264215.png';

export default function TopHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between py-3">
          
          {/* Left - Logo */}
          <div className="flex items-center">
            <img 
              src={logoImage} 
              alt="TGOTRIP" 
              className="h-10 w-auto"
            />
          </div>

          {/* Right - Contact Info */}
          <div className="flex items-center space-x-6">
            <a 
              href="tel:+919792906666" 
              className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden sm:block text-sm font-medium">+91-9792906666</span>
            </a>
            <a 
              href="mailto:info@tgotrip.com" 
              className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span className="hidden sm:block text-sm font-medium">info@tgotrip.com</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}