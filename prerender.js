import { run } from "react-snap";

// Configure react-snap to work with Vite's output directory
const options = {
  source: "dist",
  skipThirdPartyRequests: true,
  minifyHtml: { collapseBooleanAttributes: false },
  // Disable inlining to prevent issues with dynamic content
  inlineCss: false,
  // Wait for content to load
  waitFor: 1000,
  // Handle navigation properly for SPA
  crawl: true,
  puppeteerArgs: ["--no-sandbox", "--disable-setuid-sandbox"],
  // More verbose logging
  verbose: true,
  include: [
    "/",
    "/toolbox",
    "/toolbox/startup-valuations",
    "/toolbox/startup-valuations/berkus-valuation",
    "/toolbox/startup-valuations/first-chicago-valuation",
    "/toolbox/startup-valuations/perpetuity-exit-valuation",
    "/toolbox/startup-valuations/venture-capital-method",

    "/toolbox/investment-analysis",
    "/toolbox/investment-analysis/decision-analysis",
    "/toolbox/investment-analysis/saas-unit-economics",
    "/toolbox/investment-analysis/three-stage-dcf",
    "/toolbox/investment-analysis/flexible-year-by-year-dcf",
    "/toolbox/investment-analysis/stable-growth-finite-life-dcf",
    "/toolbox/investment-analysis/stable-growth-terminal-value-dcf",
    "/toolbox/investment-analysis/dcf-models",
    "/toolbox/investment-analysis/cost-reduction-dcf",
    "/toolbox/investment-analysis/two-three-stages-dcf",
    "/toolbox/investment-analysis/break-even-analysis",

    "/toolbox/financial-fundamentals",
    "/toolbox/financial-fundamentals/present-value-calculator",
    "/toolbox/financial-fundamentals/cost-of-capital-calculator",
    "/toolbox/financial-fundamentals/earning-growth-estimator",
    "/toolbox/financial-fundamentals/project-scenario-model",
    "/toolbox/financial-fundamentals/financial-ratio-calculator",

    "/toolbox/business-strategy",
    "/offerings",
    "/blog",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
    "/cookies"
  ]
};

run(options)
  .then(() => {
    console.log("✅ Prerendering completed successfully!");
  })
  .catch((error) => {
    console.error("❌ Prerendering failed:", error);
    process.exit(1);
  });
