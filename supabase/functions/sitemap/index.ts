import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const BASE_URL = "https://www.financialdecisionmodels.com";

// Import route data - synced with src/routes/siteRoutes.ts
const mainRoutes = [
  "/",
  "/toolbox",
  "/offerings",
  "/blog",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
  "/cookies",
];

const toolboxCategories = [
  "/toolbox/startup-valuations",
  "/toolbox/investment-analysis",
  "/toolbox/financial-fundamentals",
  "/toolbox/business-strategy",
];

const modelRoutes = [
  // Startup Valuations
  "/toolbox/startup-valuations/venture-capital-method",
  "/toolbox/startup-valuations/saas-unit-economics",
  "/toolbox/startup-valuations/berkus-valuation",
  "/toolbox/startup-valuations/first-chicago-method",
  "/toolbox/startup-valuations/perpetuity-exit-models",
  "/toolbox/startup-valuations/decision-analysis",
  
  // Financial Fundamentals
  "/toolbox/financial-fundamentals/present-value-calculator",
  "/toolbox/financial-fundamentals/cost-of-capital-calculator",
  "/toolbox/financial-fundamentals/dcf-models",
  "/toolbox/financial-fundamentals/financial-ratio-calculator",
  "/toolbox/financial-fundamentals/earning-growth-estimator",
  "/toolbox/financial-fundamentals/project-scenario-model",
  
  // Investment Analysis
  "/toolbox/investment-analysis/flexible-year-by-year-dcf-model",
  "/toolbox/investment-analysis/stable-growth-finite-life-dcf-model",
  "/toolbox/investment-analysis/stable-growth-terminal-value-dcf-model",
  "/toolbox/investment-analysis/three-stage-dcf-model",
  "/toolbox/investment-analysis/cost-reduction-dcf-model",
  "/toolbox/investment-analysis/break-even-analysis-model",
];

// Blog posts - synced with src/data/blogPosts.ts
const blogPosts = [
  { slug: "excel-lego-intelligence-play", date: "2025-01-20" },
  { slug: "169-days-journey", date: "2025-01-15" },
  { slug: "stop-predicting-structure-decisions", date: "2025-01-10" },
  { slug: "moved-to-bloxhub", date: "2025-01-05" },
];

type UrlEntry = {
  loc: string;
  lastmod?: string;
  changefreq?: string;
  priority?: string;
};

function formatDate(date: string | Date): string {
  if (!date) return new Date().toISOString().slice(0, 10);
  const d = new Date(date);
  return d.toISOString().slice(0, 10); // YYYY-MM-DD
}

function buildSitemapXml(urls: UrlEntry[]): string {
  const urlEntries = urls
    .map((u) => {
      const parts = [
        `    <loc>${u.loc}</loc>`,
        u.lastmod ? `    <lastmod>${u.lastmod}</lastmod>` : "",
        u.changefreq ? `    <changefreq>${u.changefreq}</changefreq>` : "",
        u.priority ? `    <priority>${u.priority}</priority>` : "",
      ].filter(Boolean);
      return `  <url>\n${parts.join("\n")}\n  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  }

  try {
    const urls: UrlEntry[] = [];
    const today = formatDate(new Date());

    const add = (path: string, opts: Partial<UrlEntry> = {}) =>
      urls.push({
        loc: `${BASE_URL}${path}`,
        ...opts,
      });

    // Homepage
    add("/", { changefreq: "weekly", priority: "1.0", lastmod: today });

    // Main static pages
    add("/toolbox", { changefreq: "weekly", priority: "0.8", lastmod: today });
    add("/offerings", { changefreq: "weekly", priority: "0.8", lastmod: today });
    add("/blog", { changefreq: "weekly", priority: "0.8", lastmod: today });
    add("/about", { changefreq: "yearly", priority: "0.6", lastmod: today });
    add("/contact", { changefreq: "yearly", priority: "0.5", lastmod: today });

    // Legal pages
    add("/privacy", { changefreq: "yearly", priority: "0.3", lastmod: today });
    add("/terms", { changefreq: "yearly", priority: "0.3", lastmod: today });
    add("/cookies", { changefreq: "yearly", priority: "0.3", lastmod: today });

    // Toolbox category pages
    toolboxCategories.forEach((path) => {
      add(path, { changefreq: "weekly", priority: "0.7", lastmod: today });
    });

    // Model pages
    modelRoutes.forEach((path) => {
      add(path, { changefreq: "monthly", priority: "0.7", lastmod: today });
    });

    // Blog posts
    blogPosts.forEach((post) => {
      add(`/blog/${post.slug}`, {
        changefreq: "monthly",
        priority: "0.7",
        lastmod: formatDate(post.date),
      });
    });

    const xml = buildSitemapXml(urls);

    return new Response(xml, {
      status: 200,
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
        "Cache-Control": "public, max-age=3600",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return new Response("Error generating sitemap", {
      status: 500,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }
});
