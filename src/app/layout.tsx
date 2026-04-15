import type { Metadata } from "next";
import { Montserrat, Archivo_Black } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadCapture from "@/components/LeadCapture";
import { GoogleAnalytics } from '@next/third-parties/google';
import Analytics from "@/components/Analytics";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";

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
        <Navbar />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
        <LeadCapture />
        <Analytics />
        <VercelAnalytics />
        <GoogleAnalytics gaId="G-5FWBEXRG2N" />
      </body>
    </html>
  );
}
