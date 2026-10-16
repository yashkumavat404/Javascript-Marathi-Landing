import type { Metadata } from "next";
import "./globals.css";
import "./platform.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://javascript-marathi-landing.vercel.app"),
  title: {
    default: "CodeShiksha | Learn JavaScript in Marathi",
    template: "%s | CodeShiksha",
  },
  description: "Explore JavaScript through beginner-friendly Marathi explanations, code examples, a structured learning roadmap, and an existing digital textbook.",
  applicationName: "CodeShiksha",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "CodeShiksha | Learn JavaScript in Marathi",
    description: "Beginner-friendly programming education and JavaScript textbook resources in Marathi.",
    type: "website",
    locale: "mr_IN",
    siteName: "CodeShiksha",
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeShiksha | Learn JavaScript in Marathi",
    description: "A Marathi-first JavaScript learning platform demonstration.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="mr"><body>{children}</body></html>;
}