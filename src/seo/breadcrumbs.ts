// src/seo/breadcrumbs.ts

export type BreadcrumbPageId =
  | "toolbox"
  | "toolbox-investment-analysis"
  | "toolbox-startup-valuations"
  | "toolbox-financial-fundamentals";

const BASE_URL = "https://financialdecisionmodels.com";

export function getBreadcrumbJson(page: BreadcrumbPageId) {
  switch (page) {
    case "toolbox":
      return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${BASE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Toolbox",
            item: `${BASE_URL}/toolbox`,
          },
        ],
      };

    case "toolbox-investment-analysis":
      return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${BASE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Toolbox",
            item: `${BASE_URL}/toolbox`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Investment Analysis",
            item: `${BASE_URL}/toolbox/investment-analysis`,
          },
        ],
      };

    case "toolbox-startup-valuations":
      return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${BASE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Toolbox",
            item: `${BASE_URL}/toolbox`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Startup Valuations",
            item: `${BASE_URL}/toolbox/startup-valuations`,
          },
        ],
      };

    case "toolbox-financial-fundamentals":
      return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${BASE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Toolbox",
            item: `${BASE_URL}/toolbox`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Financial Fundamentals",
            item: `${BASE_URL}/toolbox/financial-fundamentals`,
          },
        ],
      };

    default:
      return null;
  }
}
