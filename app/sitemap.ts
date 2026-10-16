import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://javascript-marathi-landing.vercel.app";
  const routes = [
    "/", "/courses", "/courses/javascript-marathi",
    "/courses/html-css-foundations", "/courses/frontend-fundamentals",
    "/courses/programming-fundamentals", "/courses/project-based-learning",
    "/playground", "/resources", "/book/javascript-marathi",
    "/login", "/signup", "/dashboard", "/about", "/contact",
    "/privacy", "/terms", "/refund-policy",
  ];
  const lessons = ["programming-chi-olakh","variables-data-types","conditions","loops","functions","arrays-objects","dom-events","digital-clock"];
  return [
    ...routes.map(path => ({ url: base + path, lastModified: new Date(), changeFrequency: "monthly" as const, priority: path === "/" ? 1 : path.startsWith("/courses") ? 0.8 : 0.6 })),
    ...lessons.map(slug => ({ url: base + "/learn/javascript-marathi/" + slug, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.5 })),
  ];
}