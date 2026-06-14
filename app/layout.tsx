import type { Metadata } from "next";
import "./globals.css";
import { siteUrl } from "./lib/site-data";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "HOMEY | Construction Sealants, Adhesives & PU Foam Manufacturer",
    template: "%s | HOMEY",
  },
  description:
    "HOMEY supplies construction sealants, adhesives and PU foam systems for global distributors, contractors and OEM buyers with reliable supply and technical support.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "HOMEY",
    title: "HOMEY | Construction Sealants, Adhesives & PU Foam Manufacturer",
    description:
      "Construction sealants, adhesives and PU foam systems for global distributors, contractors and OEM buyers.",
    url: siteUrl,
    images: ["/assets/product-lineup.png"],
  },
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
