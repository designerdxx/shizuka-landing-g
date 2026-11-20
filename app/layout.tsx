import type { Metadata, Viewport } from "next";
import { Host_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import { asset } from "./asset";
import "./globals.css";

const f_host = Host_Grotesk({ variable: "--f-host", subsets: ["latin"], weight: ["400", "500"], display: "swap" });
const f_gserif = localFont({ src: "./fonts/GeistSerifVF.woff2", variable: "--f-gserif", weight: "100 900", display: "swap" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Shizuka Luxury | Sell your luxury pieces privately in Dubai",
  description:
    "Get cash for your handbags, watches and jewellery within 72 hours. Shizuka collects, authenticates and gathers private offers on your behalf.",
  openGraph: {
    title: "Shizuka Luxury",
    description: "A private way to sell your handbags, watches and jewellery in Dubai. Cash within 72 hours.",
    images: [{ url: asset("/images/chauffeur-car.jpg"), width: 1600, height: 1600, alt: "A Shizuka chauffeur in a dark suit standing beside a black car outside a stone building" }],
    locale: "en_GB",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0E0D0C",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={`${f_host.variable} ${f_gserif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
