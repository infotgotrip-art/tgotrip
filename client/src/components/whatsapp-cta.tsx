import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function WhatsAppCTA() {
  const handleWhatsAppClick = () => {
    const whatsappUrl = 'https://wa.me/919792906666?text=Hi! I am interested in Bali tour packages. Can you help me with more details?';
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-float">
      <Button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 group"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="hidden group-hover:block whitespace-nowrap pr-2 font-medium">
          Chat with us!
        </span>
      </Button>
    </div>
  );
}
