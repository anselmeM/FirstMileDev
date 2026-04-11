import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "FirstMileDev — Validate First, Build Second",
    template: "%s | FirstMileDev",
  },
  description:
    "We help startups and founders build MVPs that validate market demand before you scale. Web apps, mobile apps, and custom software.",
  keywords: [
    "MVP development",
    "startup agency",
    "web development",
    "mobile app development",
    "product validation",
    "SaaS development",
  ],
  authors: [{ name: "Anselme Motcho" }],
  creator: "FirstMileDev",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://firstmiledev.ca",
    siteName: "FirstMileDev",
    title: "FirstMileDev — Validate First, Build Second",
    description:
      "We help startups and founders build MVPs that validate market demand before you scale.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "FirstMileDev — Validate First, Build Second",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FirstMileDev — Validate First, Build Second",
    description:
      "We help startups and founders build MVPs that validate market demand before you scale.",
    images: ["/images/og-image.png"],
    creator: "@firstmiledev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
