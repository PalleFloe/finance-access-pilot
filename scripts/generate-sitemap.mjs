import { writeFileSync } from "fs";
import { resolve } from "path";

// Import route registry
const siteRoutes = await import("../src/routes/siteRoutes.ts");

const domain = "https://www.financialdecisionmodels.com";

const allRoutes = [
  ...siteRoutes.mainRoutes,
  ...siteRoutes.toolboxCategories,
  ...siteRoutes.modelRoutes,
  ...siteRoutes.blogPosts,
];

const today = new Date().toISOString().split("T")[0];

const sitemapEntries = allRoutes
  .map(
    (route) => `  <url>
    <loc>${domain}${route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</urlset>`;

const outPath = resolve("dist/sitemap.xml");

writeFileSync(outPath, xml);
console.log("✅ Dynamic sitemap.xml generated:", outPath);
