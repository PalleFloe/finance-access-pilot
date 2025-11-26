interface ModelSoftwareConfig {
  name: string;
  description: string;
  url: string;
  imageUrl: string;
}

export function getModelSoftwareJson(config: ModelSoftwareConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": config.name,
    "description": config.description,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Windows, macOS",
    "url": config.url,
    "image": config.imageUrl,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "category": "free",
      "availability": "https://schema.org/OnlineOnly",
      "url": config.url
    },
    "publisher": {
      "@type": "Organization",
      "name": "Financial Decision Models",
      "url": "https://www.financialdecisionmodels.com/"
    }
  };
}
