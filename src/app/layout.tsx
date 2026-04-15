import type { Metadata } from "next";
import { Montserrat, Archivo_Black } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadCapture from "@/components/LeadCapture";
import ReadingProgress from "@/components/ReadingProgress";
import { GoogleAnalytics } from '@next/third-parties/google';
import Analytics from "@/components/Analytics";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import JSONLD from "@/components/JSONLD";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  variable: "--font-archivo-black",
  weight: "400",
});

export const metadata: Metadata = {
  title: "FirstMileDev - Validate First, Build Second",
  description: "Where Vision Meets Velocity. We transform ideas into market-validated MVPs using Data-Driven Insights, No-Code Agility, and PERN Stack Precision.",
  metadataBase: new URL("https://firstmiledev.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://firstmiledev.com",
    title: "FirstMileDev - Where Vision Meets Velocity",
    description: "Where Vision Meets Velocity. We transform ideas into market-validated MVPs using Data-Driven Insights, No-Code Agility, and PERN Stack Precision.",
    siteName: "FirstMileDev",
    images: [
      {
        url: "/images/icon-512.png",
        width: 512,
        height: 512,
        alt: "FirstMileDev - Validate First, Build Second",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@firstmiledev",
    title: "FirstMileDev - Where Vision Meets Velocity",
    description: "Where Vision Meets Velocity. We transform ideas into market-validated MVPs using Data-Driven Insights, No-Code Agility, and PERN Stack Precision.",
    images: ["/images/icon-512.png"],
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/images/icon-192.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${archivoBlack.variable} antialiased font-body bg-white text-gray-900 flex flex-col min-h-screen`}
      >
        <JSONLD />
        <ReadingProgress />
        <Navbar />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
        <LeadCapture />
        <Analytics />
        <VercelAnalytics />
        <SpeedInsights />
        <GoogleAnalytics gaId="G-5FWBEXRG2N" />
      </body>
    </html>
  );
}
