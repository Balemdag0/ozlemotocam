import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import GallerySection from '../components/GallerySection';
import Footer from '../components/Footer';
import WhatsAppFAB from '../components/WhatsAppFAB';
import PhoneFAB from '../components/PhoneFAB';

export const metadata: Metadata = {
  title: 'Galeri | Oto Cam Değişimi ve Cam Filmi İşleri - Özlem Oto Cam Trabzon',
  description:
    'Özlem Oto Cam tarafından yapılan oto cam değişimi, cam filmi uygulaması, çatlak tamiri ve kaput koruma filmi işlerinin fotoğraf ve videolarını inceleyin.',
  keywords:
    'oto cam galeri, cam değişimi öncesi sonrası, cam filmi uygulaması fotoğrafları, Trabzon oto cam işleri, kaput koruma örnekleri',
  alternates: {
    canonical: 'https://ozlemotocam.com/galeri',
  },
  openGraph: {
    title: 'Galeri | Özlem Oto Cam Trabzon',
    description: 'Yaptığımız oto cam değişimi, cam filmi ve kaput koruma işlerini inceleyin.',
    url: 'https://ozlemotocam.com/galeri',
    siteName: 'Özlem Oto Cam',
    locale: 'tr_TR',
    type: 'website',
  },
};

export default function GaleriPage() {
  return (
    <main className="relative">
      <Navbar />
      <div className="pt-20">
        <GallerySection />
      </div>
      <Footer />
      <WhatsAppFAB />
      <PhoneFAB />
    </main>
  );
}
