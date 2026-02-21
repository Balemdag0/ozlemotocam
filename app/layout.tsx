import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Özlem Oto Cam | Trabzon'da Profesyonel Oto Cam Değişim ve Tamir Merkezi",
  description:
    "Trabzon'da araç cam değişimi, cam filmi uygulaması, çatlak tamiri ve kaput koruma filmi hizmetleri. Gümüşhane ve çevre illere hizmet vermekteyiz.",
  keywords: "oto cam, cam değişimi, cam filmi, çatlak tamiri, Trabzon, özlem oto cam, kaput koruma",
  openGraph: {
    title: "Özlem Oto Cam | Trabzon",
    description: "Profesyonel oto cam değişim ve tamir hizmetleri",
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
      </body>
    </html>
  );
}
