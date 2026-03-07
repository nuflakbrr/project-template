import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// We'll mimic the siteMetadata here to avoid complex TS import issues in a standalone script
// If the user changes siteMetadata, they should update it here or we can try to import it if tsx/ts-node setup allows
const siteMetadata = {
  title: "BikinProject React Template by Naufal Akbar Nugroho",
  siteUrl: "https://nuflakbrr.github.io/bikinproject", // Change this to your production URL
  socialBanner: "/static/images/twitter-card.png",
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PUBLIC_DIR = path.resolve(__dirname, "../public");

const ROUTES_DIR = path.resolve(__dirname, "../src/routes");

/**
 * Recursively get all routes from the routes directory.
 * Tailored for TanStack Router file-based routing.
 */
function getRoutes(dir: string, base: string = ""): string[] {
  let routes: string[] = [];

  if (!fs.existsSync(dir)) return routes;

  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const isDir = fs.statSync(fullPath).isDirectory();

    if (isDir) {
      if (item.startsWith("(") && item.endsWith(")")) {
        // Route groups like (auth), (root) - skip adding to the URL path
        routes = routes.concat(getRoutes(fullPath, base));
      } else if (!item.startsWith("_")) {
        // Regular directory - add to the URL path
        routes = routes.concat(getRoutes(fullPath, `${base}/${item}`));
      }
    } else {
      const ext = path.extname(item);
      if (ext === ".tsx" || ext === ".ts") {
        const name = path.basename(item, ext);

        // Skip layout files (_layout.tsx), root (__root.tsx), or splat ($)
        if (name.startsWith("_") || name === "$") continue;

        if (name === "index") {
          // index.tsx maps to the current base path
          routes.push(base);
        } else {
          // about.tsx maps to /about if in root, or /parent/about if in a dir
          routes.push(`${base}/${name}`);
        }
      }
    }
  }
  return routes;
}

const urls = Array.from(new Set(getRoutes(ROUTES_DIR)));

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
