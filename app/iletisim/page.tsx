import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import WhatsAppFAB from '../components/WhatsAppFAB';
import PhoneFAB from '../components/PhoneFAB';

export const metadata: Metadata = {
  title: 'İletişim | Özlem Oto Cam Trabzon - Adres, Telefon, Yol Tarifi',
  description:
    'Özlem Oto Cam Trabzon Ortahisar iletişim bilgileri. Adres: Sanayi Mahallesi, Şehit Ömer Yıldız Sokak No:43. Telefon: +90 534 250 25 33. WhatsApp ile hemen ulaşın.',
  keywords:
    'özlem oto cam iletişim, Trabzon oto cam telefon, Ortahisar oto camcı adres, oto cam yol tarifi, özlem oto cam nerede',
  alternates: {
    canonical: 'https://ozlemotocam.com/iletisim',
  },
  openGraph: {
    title: 'İletişim | Özlem Oto Cam Trabzon',
    description: 'Trabzon Ortahisar\'da Özlem Oto Cam\'a ulaşmak için adres, telefon ve yol tarifi.',
    url: 'https://ozlemotocam.com/iletisim',
    siteName: 'Özlem Oto Cam',
    locale: 'tr_TR',
    type: 'website',
  },
};

export default function IletisimPage() {
  return (
    <main className="relative">
      <Navbar />
      <div className="pt-20">
        <ContactSection />
      </div>
      <Footer />
      <WhatsAppFAB />
      <PhoneFAB />
    </main>
  );
}
