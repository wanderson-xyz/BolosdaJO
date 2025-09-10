import { companyInfo } from "@/data/products";

export default function SEOSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      // Local Business Schema
      {
        "@type": "Bakery",
        "@id": "https://bolos-da-jo.vercel.app/#bakery",
        name: companyInfo.name,
        description: companyInfo.description,
        image: "https://bolos-da-jo.vercel.app/logo.jpg",
        telephone: `+${companyInfo.phone}`,
        email: "contato@bolosdajo.com.br", // Todo: replace with real email
        url: "https://bolos-da-jo.vercel.app",
        sameAs: [
          `https://instagram.com/${companyInfo.instagram.replace('@', '')}`
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: companyInfo.address.split(' - ')[0],
          addressLocality: companyInfo.address.split(' - ')[1]?.split(', ')[0] || "São Paulo",
          addressRegion: "SP",
          addressCountry: "BR"
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "-23.5505", // Todo: replace with real coordinates
          longitude: "-46.6333"
        },
        openingHours: [
          "Mo-Fr 08:00-18:00",
          "Sa 08:00-15:00"
        ],
        priceRange: "$$",
        servesCuisine: "Brazilian",
        hasMenu: "https://bolos-da-jo.vercel.app/#menu",
        acceptsReservations: false,
        paymentAccepted: "Cash, WhatsApp Order"
      },
      // Website Schema
      {
        "@type": "WebSite",
        "@id": "https://bolos-da-jo.vercel.app/#website",
        url: "https://bolos-da-jo.vercel.app",
        name: "Bolos da Jô - Bolos caseiros e kits de festa completos",
        description: "Bolos caseiros, kits de festa, tortas, brownies e salgados artesanais. Peça pelo WhatsApp e receba em casa. Qualidade e sabor garantidos!",
        publisher: {
          "@id": "https://bolos-da-jo.vercel.app/#bakery"
        },
        inLanguage: "pt-BR"
      },
      // Organization Schema
      {
        "@type": "Organization",
        "@id": "https://bolos-da-jo.vercel.app/#organization",
        name: companyInfo.name,
        url: "https://bolos-da-jo.vercel.app",
        logo: "https://bolos-da-jo.vercel.app/logo.jpg",
        image: "https://bolos-da-jo.vercel.app/logo.jpg",
        description: companyInfo.description,
        telephone: `+${companyInfo.phone}`,
        address: {
          "@id": "https://bolos-da-jo.vercel.app/#address"
        },
        sameAs: [
          `https://instagram.com/${companyInfo.instagram.replace('@', '')}`
        ]
      },
      // Breadcrumb Schema
      {
        "@type": "BreadcrumbList",
        "@id": "https://bolos-da-jo.vercel.app/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://bolos-da-jo.vercel.app"
          }
        ]
      }
    ]
  };

  return (
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}