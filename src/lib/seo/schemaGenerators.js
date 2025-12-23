// src/lib/seo/schemaGenerators.js

export function marketplaceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Marketplace",
    name: "Digital Asset Marketplace",
    description:
      "A marketplace for buying and selling digital assets including websites, source code, SaaS products, and automation tools.",
    paymentAccepted: ["CreditCard", "Cryptocurrency"],
    currenciesAccepted: "USD, EUR, BTC, ETH, XMR",
  };
}

export function listingSchema(listing) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: listing.title,
    description: listing.description,
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: listing.priceUsd,
      availability: "https://schema.org/InStock",
    },
  };
}

export function sellerSchema(seller) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: seller.name,
    description: seller.bio,
  };
}

export function categorySchema(category) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: category.title,
    description: category.description,
  };
}
