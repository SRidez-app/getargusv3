import type { Metadata } from "next";
import { Libre_Franklin, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const libreFranklin = Libre_Franklin({
  variable: "--font-libre-franklin",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.getargus.ai'),
  title: "Argus AI | Real-Time Route Optimization & Geospatial Analytics for Mobility & Logistics",
  description: "AI-powered route optimization and real-time traffic intelligence for ride-sharing, food delivery, and last-mile logistics. Sub-10-second incident detection. Reduce costs 20-30%, increase deliveries 5-15%. Machine learning APIs for predictive routing and ETA accuracy.",
  keywords: "route optimization, geospatial analytics, machine learning for logistics, real-time mapping APIs, predictive routing models, ETA accuracy, last-mile efficiency, fleet telematics, ride-sharing technology, food delivery optimization, dynamic routing, traffic prediction AI, delivery route planning, autonomous vehicle routing, multimodal transport optimization, last-mile logistics software, zero-emission fleet routing",
  authors: [{ name: "Argus AI" }],
  creator: "Argus AI",
  publisher: "Argus AI",
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
  alternates: {
    canonical: 'https://www.getargus.ai',
  },
  openGraph: {
    type: "website",
    url: "https://www.getargus.ai/",
    title: "Argus AI | Real-Time Route Optimization for Mobility & Last-Mile Logistics",
    description: "Cut last-mile costs 20-30% with AI-powered route optimization. Real-time traffic intelligence for ride-sharing, food delivery, and parcel logistics. Sub-10-second incident detection.",
    siteName: "Argus AI",
    locale: "en_US",
    images: [
      {
        url: "https://www.getargus.ai/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Argus AI - Real-Time Route Optimization Platform",
        type: "image/png",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Argus AI | Real-Time Route Optimization for Mobility & Last-Mile Logistics",
    description: "Cut last-mile costs 20-30% with AI-powered route optimization. Sub-10-second incident detection for ride-sharing and delivery fleets.",
    images: ["https://www.getargus.ai/images/og-image.png"],
  },
  other: {
    "theme-color": "#C9A23A",
    "geo.region": "US-NE",
    "geo.placename": "Lincoln, Nebraska",
    "geo.position": "40.8136;-96.7026",
    "ICBM": "40.8136, -96.7026",
    "contact": "info@getargus.ai",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Organization Schema */}
        <Script
          id="schema-organization"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Argus AI",
              "alternateName": "Argus Artificial Intelligence",
              "url": "https://www.getargus.ai",
              "logo": "https://www.getargus.ai/images/logo-square.png",
              "image": "https://www.getargus.ai/images/logo-square.png",
              "description": "AI-powered route optimization and real-time traffic intelligence platform for ride-sharing, food delivery, and last-mile logistics.",
              "email": "info@getargus.ai",
              "telephone": "+1-402-205-7814",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Lincoln",
                "addressRegion": "NE",
                "addressCountry": "US"
              },
              "areaServed": {
                "@type": "Country",
                "name": "United States"
              },
              "knowsAbout": [
                "Route Optimization",
                "Geospatial Analytics",
                "Machine Learning for Logistics",
                "Real-Time Mapping APIs",
                "Predictive Routing Models",
                "ETA Accuracy",
                "Last-Mile Efficiency"
              ]
            })
          }}
        />

        {/* Software Application Schema */}
        <Script
          id="schema-software"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Argus AI Route Optimization Platform",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web-based, API",
              "description": "Real-time route optimization and traffic intelligence API for mobility platforms, food delivery services, and last-mile logistics.",
              "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock",
                "url": "https://www.getargus.ai"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "127"
              },
              "featureList": [
                "Sub-10-second incident detection",
                "Dynamic route optimization",
                "Predictive ETA accuracy",
                "Real-time traffic intelligence",
                "Machine learning routing algorithms"
              ]
            })
          }}
        />

        {/* FAQ Schema */}
        <Script
          id="schema-faq"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How does Argus AI improve route optimization for delivery fleets?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Argus AI uses computer vision and machine learning to detect traffic incidents in under 10 seconds, enabling dynamic route adjustments before congestion forms. This results in 5-15% more deliveries per hour and 20-30% fuel cost reduction."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What industries benefit most from Argus AI's technology?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our platform is optimized for ride-sharing and mobility platforms, on-demand food and grocery delivery services, and last-mile parcel logistics providers."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How accurate are Argus AI's ETA predictions?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our predictive routing models use real-time traffic intelligence and machine learning to provide industry-leading ETA accuracy. We detect incidents and traffic anomalies in under 10 seconds."
                  }
                }
              ]
            })
          }}
        />

        {/* Website Schema */}
        <Script
          id="schema-website"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Argus AI",
              "url": "https://www.getargus.ai",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.getargus.ai/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body
        className={`${libreFranklin.variable} ${ibmPlexSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}