import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — iGaming Operations, Handled`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "iGaming consultancy",
    "AML compliance",
    "KYC",
    "Responsible Gambling",
    "fraud prevention",
    "risk management",
    "UKGC",
    "MGA",
    "SGA",
    "AGCO",
    "ONJN",
    "DGOJ",
    "GGL",
    "Curaçao eGaming",
    "gambling operations outsourcing",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — iGaming Operations, Handled`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — iGaming Operations, Handled`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
