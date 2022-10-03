const fs = require("fs");

function addSiteMap() {
  return `<url>
    <loc>${`${process.env.WEBSITE_URL}`}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>`;
}

async function generateSitemap() {
  // Ignore Next.js specific files (e.g., _app.js) and API routes.
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${addSiteMap()}
  </urlset>`;

  fs.writeFileSync("public/sitemap.xml", sitemap);
}

generateSitemap();
