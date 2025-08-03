import TopHeader from '@/components/top-header';
import HeroSection from '@/components/hero-section';
import PackagesSection from '@/components/packages-section';
import GallerySection from '@/components/gallery-section';
import TestimonialsSection from '@/components/testimonials-section';
import FooterSection from '@/components/footer-section';
import WhatsAppCTA from '@/components/whatsapp-cta';

export default function Home() {
  return (
    <div className="min-h-screen">
      <TopHeader />
      <WhatsAppCTA />
      <HeroSection />
      <PackagesSection />
      <GallerySection />
      <TestimonialsSection />
      <FooterSection />
    </div>
  );
}
