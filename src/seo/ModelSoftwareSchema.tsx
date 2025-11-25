import { Helmet } from "react-helmet-async";

interface ModelSoftwareSchemaProps {
  name: string;
  slug: string;          // path part after domain
  description: string;
  imageUrl?: string;
}

export const ModelSoftwareSchema = ({
  name,
  slug,
  description,
  imageUrl = "https://www.financialdecisionmodels.com/og-image.png",
}: ModelSoftwareSchemaProps) => {
  const url = `https://www.financialdecisionmodels.com${slug}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    applicationCategory: "BusinessApplication",
    operatingSystem: ["Windows", "macOS"],
    softwareHelp: url,
    image: imageUrl,
    url,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description:
        "Free online preview and downloadable no-macro Excel model with step-by-step user guidance.",
    },
    publisher: {
      "@type": "Organization",
      name: "Financial Decision Models",
      url: "https://www.financialdecisionmodels.com/",
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};
