// src/seo/faqs.ts

export type FaqPageId =
  | "model-saas-unit-economics";

export function getFaqJson(page: FaqPageId) {
  switch (page) {
    case "model-saas-unit-economics":
      return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is the SaaS Unit Economics Model?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The SaaS Unit Economics Model is an Excel-based financial model that values SaaS and other recurring revenue businesses by analysing individual customer profitability and lifetime contribution to overall business value. It focuses on the fundamental relationship between customer acquisition, retention, and lifetime value, rather than just aggregate P&L figures."
            }
          },
          {
            "@type": "Question",
            name: "How is the model structured?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The model uses a dual-framework structure: a Customer Life Time model with constant assumptions and perpetuity logic for quick analysis and scenario modelling, and a By Year model with variable assumptions per year and exit valuation analysis. Together, these give both rapid insight and comprehensive multi-year planning capability."
            }
          },
          {
            "@type": "Question",
            name: "Who should use the SaaS Unit Economics Model?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The model is designed for SaaS companies, e-commerce businesses, subscription services, marketplaces, and other recurring revenue businesses that need detailed customer economics analysis. It is particularly valuable for startups seeking investment, growth companies optimising operations, and investors or advisors conducting due diligence."
            }
          },
          {
            "@type": "Question",
            name: "Do I need advanced Excel skills to work with the model?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You do not need advanced Excel or VBA skills. The model is built in standard, no-macro Excel with a consistent structure, colour coding, and dedicated input sections. Basic comfort with Excel is sufficient, and the detailed documentation explains how to use the key assumptions, scenarios, and outputs."
            }
          },
          {
            "@type": "Question",
            name: "What are the main limitations of the SaaS Unit Economics Model?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Like any structured model, it relies on simplified assumptions and good input data. It may not capture all real-world complexity, especially for very early-stage companies with limited data or rapidly changing business models. Results should be tested with sensitivity analysis, updated regularly as new data becomes available, and used alongside other valuation methods and benchmarks."
            }
          }
        ]
      };

    default:
      return null;
  }
}
