import type { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import WhatsAppFAB from '../../components/WhatsAppFAB';
import PhoneFAB from '../../components/PhoneFAB';
import CamFilmiContent from './CamFilmiContent';

export const metadata: Metadata = {
  title: 'Cam Filmi Uygulaması Trabzon | 3M ve Klormatik Cam Filmi - Özlem Oto Cam',
  description:
    'Trabzon Ortahisar\'da profesyonel cam filmi uygulaması. 3M ve Klormatik marka güneş koruma, gizlilik ve UV koruma filmleri. Uygun fiyat, garantili uygulama.',
  keywords:
    'cam filmi, cam filmi Trabzon, araç cam filmi fiyatları, 3M cam filmi, Klormatik cam filmi, güneş filmi, UV koruma filmi, gizlilik filmi, Ortahisar cam filmi',
  alternates: {
    canonical: 'https://ozlemotocam.com/hizmetler/cam-filmi',
  },
  openGraph: {
    title: 'Cam Filmi Uygulaması | Özlem Oto Cam Trabzon',
    description: 'Trabzon\'da 3M ve Klormatik marka cam filmi uygulaması. Garantili ve profesyonel hizmet.',
    url: 'https://ozlemotocam.com/hizmetler/cam-filmi',
    siteName: 'Özlem Oto Cam',
    locale: 'tr_TR',
    type: 'website',
  },
};

export default function CamFilmiPage() {
  return (
    <main className="relative">
      <Navbar />
      <CamFilmiContent />
      <Footer />
      <WhatsAppFAB />
      <PhoneFAB />
    </main>
  );
}
