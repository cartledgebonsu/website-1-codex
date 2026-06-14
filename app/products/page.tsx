import type { Metadata } from "next";
import { Footer, Header } from "../components/SiteShell";

export const metadata: Metadata = {
  title: "PRODUCT | HOMEY",
  description: "HOMEY product categories include silicone sealant, PU sealant, PU foam, acrylic sealant and construction adhesive.",
};

export default function ProductsPage() {
  const categories = [
    ["silicone", "Silicone Sealant", "Neutral cure, acetic, sanitary, glazing and weather-resistant silicone sealants for windows, bathrooms, glass and construction joints.", "/assets/window-sealant.jpg", "/quote"],
    ["pu-sealant", "PU Sealant", "Elastic polyurethane sealants for concrete joints, facade joints, window frames and construction repair.", "/assets/pu-sealant-crack.jpg", "/products/p35-pu-sealant"],
    ["pu-foam", "PU Foam", "Straw-grade and gun-grade PU foam for window and door installation, insulation, filling and construction gaps.", "/assets/product-lineup.png", "/quote"],
    ["acrylic", "Acrylic Sealant", "Paintable interior sealants for wall cracks, skirting boards, door frames and finishing work.", "/assets/sink-sealant.jpg", "/quote"],
    ["adhesive", "Construction Adhesive", "Heavy-duty adhesive systems for wood, concrete, stone, panels, flooring and general building materials.", "/assets/mirror-sealant.jpg", "/quote"],
  ];
  return (
    <>
      <Header />
      <main>
        <section className="hero"><div><h1>PRODUCT</h1><p className="lead">Five product categories for construction sealing, bonding, filling and finishing applications.</p><div className="actions"><a className="btn" href="/quote">Ask for Catalog</a><a className="btn2" href="/products/p35-pu-sealant">View P35 Detail</a></div></div><img src="/assets/product-lineup.png" alt="HOMEY construction sealants adhesives and PU foam product lineup" /></section>
        <section className="section soft">
          {categories.map(([id, title, copy, image, href]) => (
            <article className="productCategory" id={id} key={id}>
              <img src={image} alt={title} />
              <div><h2>{title}</h2><p className="lead">{copy}</p><div className="productLinks"><a href={href}>{title === "PU Sealant" ? "P35 PU Sealant" : "Request details"}</a></div></div>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
