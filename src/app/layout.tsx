import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "MSCODE - Jasa Pembuatan Website & Aplikasi Mobile Professional",
    template: "%s | MSCODE"
  },
  description: "MSCODE adalah software house profesional di Jabodetabek & Yogyakarta. Kami melayani jasa pembuatan website, aplikasi mobile (Android/iOS), sistem informasi enterprise, dan integrasi AI.",
  keywords: [
    "pengembang software jabodetabek",
    "software house yogyakarta",
    "jasa pembuatan website bogor",
    "jasa pembuatan aplikasi mobile",
    "pengembangan sistem informasi",
    "mscode indonesia",
    "mscode inovasi digital",
    "pengembang aplikasi android ios",
    "integrasi ai indonesia"
  ],
  authors: [{ name: "MSCODE" }],
  creator: "MSCODE",
  publisher: "PT. MSCODE INOVASI DIGITAL",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://mscode.id"),
  alternates: {
    canonical: "https://mscode.id/",
    languages: {
      "id-ID": "https://mscode.id/",
    },
  },
  openGraph: {
    title: "MSCODE - Jasa Pembuatan Website & Aplikasi Mobile Professional",
    description: "Software house profesional melayani jasa pembuatan website, aplikasi mobile, dan sistem informasi di Jabodetabek & Yogyakarta.",
    url: "https://mscode.id",
    siteName: "MSCODE Inovasi Digital",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "MSCODE Logo - Jasa Pembuatan Website & Aplikasi",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MSCODE - Jasa Pembuatan Website & Aplikasi Mobile Professional",
    description: "Software house profesional melayani jasa pembuatan website, aplikasi mobile, dan sistem informasi.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "PT. MSCODE INOVASI DIGITAL",
              "image": "https://mscode.id/logo.png",
              "@id": "https://mscode.id",
              "url": "https://mscode.id",
              "telephone": "+628558833244",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Bogor",
                "addressLocality": "Bogor",
                "addressRegion": "Jawa Barat",
                "postalCode": "16111",
                "addressCountry": "ID"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -6.5971,
                "longitude": 106.7949
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "17:00"
              },
              "sameAs": [
                "https://mscode.id",
                "https://www.instagram.com/mscode.id",
                "https://www.linkedin.com/company/mscode-indonesia"
              ],
              "description": "Software house profesional melayani jasa pembuatan website, aplikasi mobile, dan sistem informasi di Jabodetabek & Yogyakarta."
            })
          }}
        />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WZHFV5Q420"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-WZHFV5Q420');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
