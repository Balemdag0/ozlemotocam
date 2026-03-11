import type { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import WhatsAppFAB from '../../components/WhatsAppFAB';
import PhoneFAB from '../../components/PhoneFAB';
import CatlakTamiriContent from './CatlakTamiriContent';

export const metadata: Metadata = {
  title: 'Çatlak Tamiri Trabzon | Cam Çatlak ve Taş İzi Onarımı - Özlem Oto Cam',
  description:
    'Trabzon Ortahisar\'da oto cam çatlak tamiri ve taş izi onarımı. Cam değişimine gerek kalmadan özel reçine ile profesyonel onarım. Hızlı ve uygun fiyatlı çözüm.',
  keywords:
    'çatlak tamiri, cam çatlak onarımı, taş izi tamiri, oto cam tamiri Trabzon, cam tamir fiyatı, Ortahisar çatlak tamiri, ön cam çatlak onarımı',
  alternates: {
    canonical: 'https://ozlemotocam.com/hizmetler/catlak-tamiri',
  },
  openGraph: {
    title: 'Çatlak Tamiri | Özlem Oto Cam Trabzon',
    description: 'Trabzon\'da oto cam çatlak tamiri ve taş izi onarımı. Cam değişimine gerek kalmadan ekonomik çözüm.',
    url: 'https://ozlemotocam.com/hizmetler/catlak-tamiri',
    siteName: 'Özlem Oto Cam',
    locale: 'tr_TR',
    type: 'website',
  },
};

export default function CatlakTamiriPage() {
  return (
    <main className="relative">
      <Navbar />
      <CatlakTamiriContent />
      <Footer />
      <WhatsAppFAB />
      <PhoneFAB />
    </main>
  );
}
