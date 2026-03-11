import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import VideoShowcaseSection from './components/VideoShowcaseSection';
import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppFAB from './components/WhatsAppFAB';
import PhoneFAB from './components/PhoneFAB';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <VideoShowcaseSection />
      <GallerySection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <WhatsAppFAB />
      <PhoneFAB />
    </main>
  );
}
