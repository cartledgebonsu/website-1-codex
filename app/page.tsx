import type { Metadata } from "next";
import { Footer, Header, InquiryForm } from "./components/SiteShell";

export const metadata: Metadata = {
  title: "HOMEY Construction Sealants & Adhesives",
  description: "HOMEY supplies construction sealants, adhesives and PU foam systems for global distributors, contractors and OEM partners.",
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div>
            <h1>Construction Sealants & Adhesives Built for Global Distributors</h1>
            <p className="slogan">Stick together, stick stronger</p>
            <p className="lead">Serving professional buyers with sealants, adhesives and PU foam systems for construction, installation and OEM supply.</p>
            <div className="actions"><a className="btn" href="/quote">Get a Quote</a><a className="btn2" href="/products">View Products</a></div>
          </div>
          <img src="/assets/product-lineup.png" alt="HOMEY construction sealants adhesives and PU foam product range" />
        </section>

        <section className="proof">
          <div><strong>80+</strong><span>Countries served</span></div>
          <div><strong>20+</strong><span>Years experience</span></div>
          <div><strong>500+</strong><span>Global partners</span></div>
          <div><strong>99%</strong><span>Repeat orders</span></div>
        </section>

        <section className="section red split" id="about">
          <div>
            <h2>A global construction brand built for long-term partners.</h2>
            <p className="lead">Founded in 2016, HOMEY is a construction sealant and adhesive manufacturer serving importers, contractors, wholesalers, decoration material distributors, window and door manufacturers, aluminum importers and private label buyers.</p>
          </div>
          <img src="/assets/homey-retail-display-shelf.jpg" alt="HOMEY branded retail display shelf" />
        </section>

        <section className="section">
          <div className="sectionHead"><h2>Our Product Families</h2><p>Five core product categories help distributors cover sealing, bonding and filling applications across construction channels.</p></div>
          <div className="grid4">
            <article className="card"><img src="/assets/window-sealant.jpg" alt="Silicone sealant application" /><div className="cardBody"><h3>Silicone Sealant</h3><p>For glazing, windows, bathrooms and weatherproof joints.</p><a href="/products">View category</a></div></article>
            <article className="card"><img src="/assets/pu-sealant-crack.jpg" alt="PU sealant application" /><div className="cardBody"><h3>PU Sealant</h3><p>Elastic sealing and bonding for construction joints.</p><a href="/products/p35-pu-sealant">View P35</a></div></article>
            <article className="card"><img src="/assets/product-lineup.png" alt="PU foam products" /><div className="cardBody"><h3>PU Foam</h3><p>For gap filling, insulation and installation support.</p><a href="/products">View category</a></div></article>
            <article className="card"><img src="/assets/sink-sealant.jpg" alt="Acrylic sealant application" /><div className="cardBody"><h3>Acrylic Sealant</h3><p>Paintable sealants for interior finishing.</p><a href="/products">View category</a></div></article>
          </div>
        </section>

        <section className="section soft split">
          <img src="/assets/homey-retail-display-shelf.jpg" alt="HOMEY retail display shelf" />
          <div><h2>Manufacturing You Can Rely On</h2><p className="lead">HOMEY supports partners with factory production, quality checks, packaging confirmation and export-ready documents.</p><div className="stats"><div><strong>100,000+ m²</strong><span>Manufacturing base</span></div><div><strong>20</strong><span>Containers daily output</span></div><div><strong>30+</strong><span>Production lines</span></div><div><strong>80+</strong><span>Countries served</span></div></div><div className="certs"><span>ASTM</span><span>CE</span><span>REACH</span><span>ISO</span><span>FDA</span><span>French A+</span></div></div>
        </section>

        <section className="section red split">
          <div><h2>Partner with HOMEY. Grow Your Business.</h2><p className="lead">Become a HOMEY distributor and build a professional construction sealant category with product, packaging and market support.</p><div className="actions"><a className="btn2" href="/become-a-distributor">Become a Distributor</a><a className="btn2" href="/quote">Send Inquiry</a></div></div>
          <InquiryForm compact />
        </section>
      </main>
      <Footer />
    </>
  );
}
