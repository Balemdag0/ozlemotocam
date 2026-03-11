import type { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import WhatsAppFAB from '../../components/WhatsAppFAB';
import PhoneFAB from '../../components/PhoneFAB';
import CamDegisimiContent from './CamDegisimiContent';

export const metadata: Metadata = {
  title: 'Oto Cam Değişimi Trabzon | Ön Cam, Arka Cam, Yan Cam Montajı - Özlem Oto Cam',
  description:
    'Trabzon Ortahisar\'da profesyonel oto cam değişimi. Ön cam, arka cam ve yan cam montajı orijinal ve muadil kaliteli camlarla aynı gün teslimat. Ücretsiz fiyat teklifi alın.',
  keywords:
    'oto cam değişimi, ön cam değişimi Trabzon, arka cam değişimi, yan cam değişimi, araç cam montajı, Ortahisar oto cam, Trabzon cam değişimi fiyat, orijinal oto cam',
  alternates: {
    canonical: 'https://ozlemotocam.com/hizmetler/cam-degisimi',
  },
  openGraph: {
    title: 'Oto Cam Değişimi | Özlem Oto Cam Trabzon',
    description: 'Trabzon\'da profesyonel oto cam değişimi. Orijinal parça garantisiyle ön cam, arka cam ve yan cam montajı.',
    url: 'https://ozlemotocam.com/hizmetler/cam-degisimi',
    siteName: 'Özlem Oto Cam',
    locale: 'tr_TR',
    type: 'website',
  },
};

export default function CamDegisimiPage() {
  return (
    <main className="relative">
      <Navbar />
      <CamDegisimiContent />
      <Footer />
      <WhatsAppFAB />
      <PhoneFAB />
    </main>
  );
}
