import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kept Kitchen Co. | Portland's Premier Private Chef Services",
  description: "In-home culinary excellence for families, executives, and food lovers. Experienced chefs, locally sourced ingredients, and elevated menus tailored to your home.",
  robots: "index, follow",
  metadataBase: new URL("https://www.thekeptkitchen.com"),
  alternates: {
    canonical: "https://www.thekeptkitchen.com/",
  },
  openGraph: {
    type: "website",
    title: "Portland's Premier Private Chef Services",
    description: "Private chef services for families, executives, and food lovers in Portland and Vancouver. Luxury in-home dining, wellness meals, postpartum support, and more.",
    url: "https://www.thekeptkitchen.com/",
    images: {
      url: "https://www.thekeptkitchen.com/images/ogmessage.jpg?v=2",
      width: 1200,
      height: 630,
      alt: "Kept Kitchen Co. - Private Chef Services in Portland"
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Portland's Premier Private Chef Services",
    description: "Private chef services for families, executives, and food lovers in Portland and Vancouver.",
    images: "https://www.thekeptkitchen.com/images/ogmessage.jpg?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content="https://www.thekeptkitchen.com/images/ogmessage.jpg?v=2" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://www.thekeptkitchen.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Portland's Premier Private Chef Services" />
        <meta property="og:description" content="Private chef services for families, executives, and food lovers in Portland and Vancouver. Luxury in-home dining, wellness meals, postpartum support, and more." />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Portland's Premier Private Chef Services" />
        <meta name="twitter:description" content="Private chef services for families, executives, and food lovers in Portland and Vancouver." />
        <meta name="twitter:image" content="https://www.thekeptkitchen.com/images/ogmessage.jpg?v=2" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Kept Kitchen Co.",
              "image": "https://www.thekeptkitchen.com/images/og-image.jpg",
              "@id": "https://www.thekeptkitchen.com/",
              "url": "https://www.thekeptkitchen.com/",
              "telephone": "+1-971-231-5146",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "5441 South Macadam Avenue #4853",
                "addressLocality": "Portland",
                "addressRegion": "OR",
                "postalCode": "97239",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 45.4719,
                "longitude": -122.6742
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
                "closes": "18:00"
              },
              "description": "Kept Kitchen Co. offers private chef services in Portland, Oregon, executive in-home dining, luxury meal prep for families, postpartum meal support, and wellness-focused menu planning tailored to your lifestyle.",
              "priceRange": "$$",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Private Chef Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Luxury Meal Prep",
                      "description": "Weekly in-home chef-prepared meals for busy professionals and families in Portland."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Postpartum Meal Services",
                      "description": "Custom meals crafted for postpartum recovery and nourishment by a private chef."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Wellness-Driven Chef Services",
                      "description": "Tailored chef services for clients focused on nutrition, longevity, and performance."
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}