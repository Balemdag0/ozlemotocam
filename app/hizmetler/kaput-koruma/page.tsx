import type { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import WhatsAppFAB from '../../components/WhatsAppFAB';
import PhoneFAB from '../../components/PhoneFAB';
import KaputKorumaContent from './KaputKorumaContent';

export const metadata: Metadata = {
  title: 'Kaput Koruma Filmi (PPF) Trabzon | Boya Koruma - Özlem Oto Cam',
  description:
    'Trabzon Ortahisar\'da profesyonel kaput koruma filmi (PPF) uygulaması. Aracınızın boyasını taş izi, çizik ve UV hasarından koruyun. Garantili uygulama.',
  keywords:
    'kaput koruma filmi, PPF Trabzon, boya koruma filmi, paint protection film, araç boya koruma, taş izi koruma, Ortahisar PPF, kaput filmi fiyat',
  alternates: {
    canonical: 'https://ozlemotocam.com/hizmetler/kaput-koruma',
  },
  openGraph: {
    title: 'Kaput Koruma Filmi (PPF) | Özlem Oto Cam Trabzon',
    description: 'Trabzon\'da PPF kaput koruma filmi uygulaması. Aracınızın boyasını koruyun.',
    url: 'https://ozlemotocam.com/hizmetler/kaput-koruma',
    siteName: 'Özlem Oto Cam',
    locale: 'tr_TR',
    type: 'website',
  },
};

export default function KaputKorumaPage() {
  return (
    <main className="relative">
      <Navbar />
      <KaputKorumaContent />
      <Footer />
      <WhatsAppFAB />
      <PhoneFAB />
    </main>
  );
}
