import type { Metadata, Viewport } from "next";
import { Playfair_Display, Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#b8954a",
};

export const metadata: Metadata = {
  icons: { icon: "/icon" },
  title: "Sivakumaaran & Yogalakshmi — Wedding Reception | March 6, 2026",
  description:
    "You're invited to our Wedding Reception on March 6, 2026 at Sowbhagya Mahal, Koyambedu, Chennai. From 6:00 PM onwards. Near Arumbakkam Metro Station.",
  keywords: ["wedding", "reception", "invitation", "Chennai", "Sowbhagya Mahal", "Sivakumaaran", "Yogalakshmi", "2026"],
  authors: [{ name: "Sivakumaaran & Yogalakshmi" }],
  metadataBase: process.env.VERCEL_URL ? new URL(`https://${process.env.VERCEL_URL}`) : new URL("http://localhost:3000"),
  openGraph: {
    title: "Sivakumaaran & Yogalakshmi — Wedding Reception | March 6, 2026",
    description:
      "You're invited to our Wedding Reception at Sowbhagya Mahal, Chennai. March 6, 2026 from 6:00 PM onwards. Near Arumbakkam Metro Station.",
    type: "website",
    locale: "en_IN",
    images: ["/og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sivakumaaran & Yogalakshmi — Wedding Reception",
    description: "March 6, 2026 at Sowbhagya Mahal, Chennai. From 6:00 PM onwards.",
    images: ["/og.jpg"],
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${inter.variable}`}
    >
      <body className="min-h-screen bg-theme-bg overflow-x-hidden max-w-full" style={{ backgroundColor: "var(--bg)" }}>{children}</body>
    </html>
  );
}
