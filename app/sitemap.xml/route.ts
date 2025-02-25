import { items, packages } from "@/lib/data"; // Adjust path if needed

const SITE_URL = "https://brur-iftar.me";

export async function GET() {
  // Define static paths
  const staticPaths: string[] = [
    "",
    "order",
    "privacy",
    "terms",
    "delete-guideline",
  ];

  // Generate dynamic product URLs
  const urls: string[] = [
    ...staticPaths.map((path) => `${SITE_URL}/${path}`),
    ...items.map(
      (item) => `${SITE_URL}/order#${encodeURIComponent(item.name)}`,
    ),
    ...packages.map(
      (pkg) => `${SITE_URL}/order#${encodeURIComponent(pkg.name)}`,
    ),
  ];

  // Generate XML structure
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls
        .map(
          (url) => `
        <url>
          <loc>${url}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <priority>${url === `${SITE_URL}/order` ? "1.0" : "0.8"}</priority>
        </url>
      `,
        )
        .join("")}
    </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
