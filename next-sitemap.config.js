/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || "https://firstmiledev.ca",
  generateRobotsTxt: false, // We manage robots.txt via Next.js route
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
  changefreq: "weekly",
  priority: 0.7,
  sitemapBaseFileName: "sitemap",
  outDir: "./public",
};

module.exports = config;
