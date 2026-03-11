import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Özlem Oto Cam | Trabzon Ortahisar Oto Cam Değişimi ve Cam Filmi",
  description: "Trabzon Ortahisar'da profesyonel oto cam değişimi, garantili cam filmi uygulaması ve çatlak tamiri.",
  keywords: "oto cam, cam değişimi, cam filmi, çatlak tamiri, Trabzon, Ortahisar, özlem oto cam, kaput koruma, Trabzon cam filmi fiyatları, Ortahisar oto cam, Trabzon oto cam tamiri, araç cam değişimi Trabzon, en yakın oto camcı, Trabzon kaput koruma, Ortahisar cam filmi",
  openGraph: {
    title: "Özlem Oto Cam | Trabzon Ortahisar",
    description: "Trabzon Ortahisar'da profesyonel oto cam değişim ve cam filmi hizmetleri.",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark">
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
