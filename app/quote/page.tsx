import type { Metadata } from "next";
import { Footer, Header, InquiryForm } from "../components/SiteShell";

export const metadata: Metadata = {
  title: "Get a Quote | HOMEY",
  description: "Send HOMEY your sealant, adhesive, PU foam, OEM packaging or distributor inquiry.",
};

export default function QuotePage() {
  return (
    <>
      <Header />
      <main><section className="hero"><div><h1>Get a Quote from HOMEY</h1><p className="lead">Send your product requirement, target market and packaging needs. HOMEY will help you match the right sealant, adhesive or PU foam system.</p></div><img src="/assets/product-lineup.png" alt="HOMEY sealant adhesive and PU foam products" /></section><section className="section soft split"><div><h2>Leave your inquiry.</h2><p className="lead">Please include application, country, packaging size, expected quantity and whether you need OEM or private label support.</p></div><InquiryForm /></section></main>
      <Footer />
    </>
  );
}
