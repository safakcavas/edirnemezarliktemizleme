import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Edirne Mezar Bakım ve Temizlik Hizmetleri | edirnemezarliktemizleme.site",
  description:
    "Edirne Merkez, Havsa, Keşan, Uzunköprü, İpsala, Meriç, Lalapaşa, Süloğlu, Enez ve tüm köylerinde profesyonel mezar temizliği, mermer beyazlatma, çiçek dikimi, taş yazı boyama ve periyodik bakım hizmeti. Fotoğraflı ve videolu güvenilir teslimat.",
  keywords: [
    "Edirne mezar temizleme",
    "Edirne mezarlık bakımı",
    "Edirne kabir bakımı",
    "Edirne köy mezarları temizliği",
    "Uzunköprü mezar bakımı",
    "Keşan mezarlık temizleme",
    "Havsa mezar bakımı",
    "mezar taşı yazı boyama Edirne",
    "mermer mezar temizliği",
    "Edirne kabir sulama ve çiçeklendirme",
    "gurbetçilere mezar bakım hizmeti",
  ],
  authors: [{ name: "Edirne Mezar Bakım Hizmetleri" }],
  creator: "Edirne Mezar Bakım Hizmetleri",
  metadataBase: new URL("https://edirnemezarliktemizleme.site"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://edirnemezarliktemizleme.site",
    title: "Edirne Mezar Temizlik ve Bakım Hizmeti | Tüm Köylere Hizmet",
    description:
      "Edirne ve tüm köylerinde sevdiklerinizin kabirleri emin ellerde. Yabani ot temizliği, mermer cilalama, çiçek dikimi ve taş boyama. WhatsApp ile fotoğraflı teslimat.",
    siteName: "Edirne Mezar Temizleme",
  },
  twitter: {
    card: "summary_large_image",
    title: "Edirne Mezar Temizleme & Kabir Bakımı",
    description: "Edirne merkez, ilçe ve tüm köylerinde profesyonel mezarlık bakım ve temizleme hizmeti.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Edirne Mezar Bakım ve Temizlik Hizmetleri",
    url: "https://edirnemezarliktemizleme.site",
    description:
      "Edirne ve tüm köylerinde kabir bakımı, mezar taşı temizliği, mermer beyazlatma, çiçek ekimi ve periyodik bakım hizmetleri.",
    telephone: "+905302301522",
    areaServed: [
      { "@type": "City", name: "Edirne" },
      { "@type": "AdministrativeArea", name: "Keşan" },
      { "@type": "AdministrativeArea", name: "Uzunköprü" },
      { "@type": "AdministrativeArea", name: "Havsa" },
      { "@type": "AdministrativeArea", name: "İpsala" },
      { "@type": "AdministrativeArea", name: "Meriç" },
      { "@type": "AdministrativeArea", name: "Lalapaşa" },
      { "@type": "AdministrativeArea", name: "Süloğlu" },
      { "@type": "AdministrativeArea", name: "Enez" },
    ],
    priceRange: "₺₺",
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
          "Sunday",
        ],
        opens: "08:00",
        closes: "20:00",
      },
    ],
  };

  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased bg-slate-50 text-slate-800 selection:bg-emerald-700 selection:text-white">
        {children}
      </body>
    </html>
  );
}
