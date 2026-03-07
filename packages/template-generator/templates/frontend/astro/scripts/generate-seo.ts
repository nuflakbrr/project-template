import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// We'll mimic the siteMetadata here to avoid complex TS import issues in a standalone script
const siteMetadata = {
  title: "BikinProject Astro Template by Naufal Akbar Nugroho",
  siteUrl: "https://nuflakbrr.github.io/bikinproject", // Change this to your production URL
  socialBanner: "/static/images/twitter-card.png",
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PUBLIC_DIR = path.resolve(__dirname, "../public");

const ROUTES_DIR = path.resolve(__dirname, "../src/pages");

/**
 * Recursively get all routes from the Astro pages directory.
 */
function getRoutes(dir: string, base: string = ""): string[] {
  let routes: string[] = [];

  if (!fs.existsSync(dir)) return routes;

  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const isDir = fs.statSync(fullPath).isDirectory();

    if (isDir) {
      // Exclude directories starting with _ (Astro convention)
      if (!item.startsWith("_")) {
        routes = routes.concat(getRoutes(fullPath, `${base}/${item}`));
      }
    } else {
      const ext = path.extname(item);
      // Support common Astro page extensions
      if (ext === ".astro" || ext === ".md" || ext === ".mdx") {
        const name = path.basename(item, ext);

        // Skip private files and dynamic routes for now
        if (name.startsWith("_") || name.includes("[") || name.includes("]")) continue;

        if (name === "index") {
          routes.push(base || "/");
        } else {
          routes.push(`${base}/${name}`);
        }
      }
    }
  }
  return routes;
}

// Ensure unique URLs and clean up root path
const urls = Array.from(new Set(getRoutes(ROUTES_DIR))).map((url) => (url === "/" ? "" : url));

function generateSitemap() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map((url) => {
      return `
  <url>
    <loc>${siteMetadata.siteUrl}${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>${url === "" ? "1.0" : "0.8"}</priority>
  </url>`;
    })
    .join("")}
</urlset>`;

  fs.writeFileSync(path.join(PUBLIC_DIR, "sitemap.xml"), sitemap);
  console.log("✅ sitemap.xml generated in public/");
}

function generateRobots() {
  const robots = `User-agent: *
Allow: /

Sitemap: ${siteMetadata.siteUrl}/sitemap.xml
Host: ${siteMetadata.siteUrl}`;

  fs.writeFileSync(path.join(PUBLIC_DIR, "robots.txt"), robots);
  console.log("✅ robots.txt generated in public/");
}

// Ensure public directory exists
if (!fs.existsSync(PUBLIC_DIR)) {
  fs.mkdirSync(PUBLIC_DIR, { recursive: true });
}

generateSitemap();
generateRobots();
