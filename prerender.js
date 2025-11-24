import { run } from "react-snap";
import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { join } from "path";

// Post-process HTML files to fix canonical tags
function fixCanonicalTags(distPath) {
  const processDirectory = (dir) => {
    const entries = readdirSync(dir);
    
    for (const entry of entries) {
      const fullPath = join(dir, entry);
      const stat = statSync(fullPath);
      
      if (stat.isDirectory()) {
        processDirectory(fullPath);
      } else if (entry === "index.html") {
        let html = readFileSync(fullPath, "utf-8");
        
        // Check if there's a default canonical and a Helmet canonical
        const hasDefaultCanonical = html.includes('data-default-canonical="true"');
        const canonicalMatches = html.match(/<link rel="canonical"[^>]*>/g);
        
        if (hasDefaultCanonical && canonicalMatches && canonicalMatches.length > 1) {
          // Remove the default canonical, keep the Helmet one
          html = html.replace(/<link rel="canonical"[^>]*data-default-canonical="true"[^>]*>\s*/g, "");
          writeFileSync(fullPath, html, "utf-8");
          console.log(`✓ Fixed canonical in: ${fullPath}`);
        }
      }
    }
  };
  
  processDirectory(distPath);
}

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
    console.log("🔧 Post-processing: Fixing canonical tags...");
    fixCanonicalTags("dist");
    console.log("✅ Canonical tags fixed!");
  })
  .catch((error) => {
    console.error("❌ Prerendering failed:", error);
    process.exit(1);
  });
