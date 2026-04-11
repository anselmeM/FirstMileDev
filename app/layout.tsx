import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FirstMileDev | Market-First MVP Agency",
  description: "We help startups and founders build MVPs that validate market demand before you scale. Web apps, mobile apps, and custom software.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
