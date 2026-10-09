import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JavaScript सोप्या मराठीत | Beginners JavaScript Course — ₹199",
  description: "शून्यापासून JavaScript शिका — beginner-friendly Marathi explanations, JavaScript code examples, practical exercises आणि 39 chapters असलेला digital textbook. फक्त ₹199.",
  openGraph: {
    title: "JavaScript — सोप्या मराठीत",
    description: "शून्यापासून JavaScript शिकूया! 39 धडे असलेला Marathi beginner-friendly digital textbook.",
    type: "website",
    locale: "mr_IN",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="mr"><body>{children}</body></html>;
}
