import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Özlem Oto Cam | Trabzon Ortahisar Oto Cam Değişimi ve Cam Filmi",
  description:
    "Trabzon Ortahisar'da profesyonel oto cam değişimi, garantili cam filmi uygulaması ve çatlak tamiri. Orijinal parça garantisi, uygun fiyat ve aynı gün teslimat. Hemen fiyat alın!",
  keywords:
    "oto cam, cam değişimi, cam filmi, çatlak tamiri, Trabzon, Ortahisar, özlem oto cam, kaput koruma, Trabzon cam filmi fiyatları, Ortahisar oto cam, Trabzon oto cam tamiri, araç cam değişimi Trabzon, en yakın oto camcı, Trabzon kaput koruma, Ortahisar cam filmi, ön cam değişimi, arka cam değişimi, yan cam değişimi, PPF film, araç cam tamiri",
  authors: [{ name: "Özlem Oto Cam" }],
  alternates: {
    canonical: "https://ozlemotocam.com/",
  },
  openGraph: {
    title: "Özlem Oto Cam | Trabzon Ortahisar Oto Cam Değişimi",
    description:
      "Trabzon Ortahisar'da profesyonel oto cam değişimi, cam filmi ve çatlak tamiri hizmetleri. Orijinal parça garantisi ile güvenilir hizmet.",
    url: "https://ozlemotocam.com/",
    siteName: "Özlem Oto Cam",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "https://ozlemotocam.com/media/2022-04-20_07-58-58_UTC.jpg",
        width: 1200,
        height: 630,
        alt: "Özlem Oto Cam - Trabzon Ortahisar Oto Cam Değişimi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Özlem Oto Cam | Trabzon Ortahisar",
    description:
      "Trabzon Ortahisar'da profesyonel oto cam değişimi, cam filmi ve çatlak tamiri.",
    images: ["https://ozlemotocam.com/media/2022-04-20_07-58-58_UTC.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "TR-61",
    "geo.placename": "Trabzon, Ortahisar",
    "geo.position": "40.9963735;39.755236",
    ICBM: "40.9963735, 39.755236",
  },
};

/* JSON-LD Structured Data */
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "Özlem Oto Cam",
  description:
    "Trabzon Ortahisar'da profesyonel oto cam değişimi, cam filmi uygulaması, çatlak tamiri ve kaput koruma filmi hizmetleri.",
  url: "https://ozlemotocam.com",
  telephone: "+905342502533",
  image: "https://ozlemotocam.com/media/logo.png",
  logo: "https://ozlemotocam.com/media/logo.png",
  priceRange: "₺₺",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sanayi Mahallesi, Şehit Ömer Yıldız Sokak No:43",
    addressLocality: "Ortahisar",
    addressRegion: "Trabzon",
    addressCountry: "TR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.9963735,
    longitude: 39.755236,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  sameAs: ["https://www.instagram.com/ozlemotocamtrabzon"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Oto Cam Hizmetleri",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Oto Cam Değişimi",
          description:
            "Ön cam, arka cam ve yan cam değişiminde orijinal veya muadil kaliteli camlarla güvenilir montaj.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Çatlak Tamiri",
          description:
            "Küçük taş izi ve çatlakları özel reçine ile doldurarak camınızı yeniliyoruz.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cam Filmi Uygulaması",
          description:
            "3M ve Klormatik güneş koruma ve gizlilik filmleri ile araçlarınızı UV ışınlarından koruyoruz.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Kaput Koruma Filmi",
          description:
            "PPF ve kaput koruma filmleriyle aracınızın boyasını taş izi, çizik ve hava koşullarından koruyoruz.",
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "6",
    bestRating: "5",
    worstRating: "1",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Trabzon'da oto cam değişimi ne kadar sürer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oto cam değişimi genellikle 1-2 saat içinde tamamlanır. Cam montajı sonrası yapıştırıcının kuruma süresi dahil aynı gün aracınızı teslim alabilirsiniz.",
      },
    },
    {
      "@type": "Question",
      name: "Cam filmi uygulaması fiyatları ne kadar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cam filmi fiyatları araç modeline ve film kalitesine göre değişmektedir. 3M ve Klormatik marka filmler kullanıyoruz. Güncel fiyat bilgisi için WhatsApp üzerinden bize ulaşabilirsiniz.",
      },
    },
    {
      "@type": "Question",
      name: "Çatlak tamiri mi yoksa cam değişimi mi gerekli?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Küçük taş izleri ve 2-3 cm'ye kadar olan çatlaklar özel reçine ile tamir edilebilir. Daha büyük çatlaklar veya sürücü görüş alanındaki hasarlar için cam değişimi önerilir. Ücretsiz değerlendirme için bizi arayın.",
      },
    },
    {
      "@type": "Question",
      name: "Kaput koruma filmi (PPF) ne işe yarar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PPF (Paint Protection Film) aracınızın boyasını taş izi, çizik, böcek asidi ve UV hasarından korur. Özellikle Trabzon'un dağlık yollarında taş fırlama riski yüksek olduğu için kaput koruma filmi çok faydalıdır.",
      },
    },
    {
      "@type": "Question",
      name: "Özlem Oto Cam nerede bulunuyor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sanayi Mahallesi, Şehit Ömer Yıldız Sokak No:43, Ortahisar / Trabzon adresinde bulunuyoruz. Pazartesi-Cumartesi 08:00-18:00 arası hizmet veriyoruz.",
      },
    },
    {
      "@type": "Question",
      name: "Hangi marka camlar kullanılıyor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Müşterilerimizin tercihine göre hem orijinal (OEM) hem de TSE belgeli muadil kaliteli camlar kullanıyoruz. Tüm camlarımız garantilidir.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark">
      <head>
        <Script
          id="local-business-jsonld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        <Script
          id="faq-jsonld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd),
          }}
        />
      </head>
      <body className="antialiased bg-[#080808] text-[#e8e8e8]">
        {children}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-17968480135"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'AW-17968480135');
            `,
          }}
        />
      </body>
    </html>
  );
}
