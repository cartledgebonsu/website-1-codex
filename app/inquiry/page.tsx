import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import InquiryForm from "./InquiryForm";
import { siteUrl } from "../lib/site-data";

export const metadata: Metadata = {
  title: "Request a Quote for Sealants, Adhesives and PU Foam",
  description:
    "Send your sealant, adhesive, PU foam or OEM packaging requirements to HOMEY. Our export team will reply with product recommendation, documents and quotation support.",
  alternates: {
    canonical: "/inquiry",
  },
  openGraph: {
    title: "Request a Quote from HOMEY",
    description:
      "Share your product requirement, target market and packaging plan for HOMEY sealant and adhesive supply.",
    url: `${siteUrl}/inquiry`,
    images: ["/assets/product-lineup.png"],
  },
};

export default function InquiryPage() {
  return (
    <main className="inquiryPage">
      <header className="siteHeader">
        <Link className="brand" href="/">
          <Image src="/assets/homey-logo.png" alt="HOMEY logo" width={168} height={52} priority />
        </Link>
        <nav className="nav" aria-label="Main navigation">
          <Link href="/#about">About Us</Link>
          <Link href="/#products">Products</Link>
          <Link href="/#applications">Market Segments</Link>
          <Link href="/#support">Technical Support</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <Link className="headerCta" href="/inquiry">
          Get a Quote
        </Link>
      </header>

      <section className="inquiryHero">
        <div>
          <h1>Request a Quote from HOMEY</h1>
          <p>
            Send your product requirement, target market and packaging needs. HOMEY will help you
            match the right sealant, adhesive or PU foam system for your sales channel.
          </p>
          <div className="inquiryProof">
            <span>Response from export team</span>
            <span>TDS / SDS on request</span>
            <span>OEM packaging support</span>
          </div>
        </div>
        <InquiryForm />
      </section>
    </main>
  );
}
