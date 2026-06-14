import type { Metadata } from "next";
import { Footer, Header } from "../../components/SiteShell";

export const metadata: Metadata = {
  title: "P35 PU Sealant | HOMEY",
  description: "HOMEY P35 polyurethane construction sealant for facade joints, concrete expansion joints, window frames and repair applications.",
};

export default function P35Page() {
  return (
    <>
      <Header />
      <main>
        <section className="productHero"><div><div className="breadcrumb">PRODUCT / PU SEALANT / P35</div><h1>HOMEY P35 Polyurethane Construction Sealant</h1><p className="lead">A professional elastic sealing and bonding solution for facade joints, concrete expansion joints, window and door frames, and general construction repair.</p><div className="actions"><a className="btn" href="/quote">Request Quote</a><a className="btn2" href="#technical">View Technical Data</a></div></div><img src="/assets/pu-sealant-crack.jpg" alt="HOMEY P35 polyurethane sealant used for concrete joint repair" /></section>
        <section className="snap"><div><strong>PU Technology</strong><span>Elastic seal and bond</span></div><div><strong>Indoor / Outdoor</strong><span>Construction use</span></div><div><strong>OEM Ready</strong><span>Packaging support</span></div><div><strong>TDS / SDS</strong><span>On request</span></div></section>
        <section className="section soft"><div className="grid4"><article className="card"><div className="cardBody"><h3>Concrete expansion joints</h3><p>Elastic sealing for construction joints and repair applications.</p></div></article><article className="card"><div className="cardBody"><h3>Facade and wall joints</h3><p>For exterior construction areas where movement and weather exposure matter.</p></div></article><article className="card"><div className="cardBody"><h3>Window and door frames</h3><p>Connects installer needs with sealant, PU foam and adhesive systems.</p></div></article><article className="card"><div className="cardBody"><h3>General repair work</h3><p>Useful for distributors serving contractors and construction channels.</p></div></article></div></section>
        <section className="section" id="technical"><div className="sectionHead"><h2>Technical data buyers expect before inquiry.</h2><p>Final values should be confirmed with HOMEY according to market, packaging and application requirement.</p></div><table className="table"><tbody><tr><th>Technology</th><td>One-component polyurethane sealant</td></tr><tr><th>Packaging</th><td>600 ml sausage / 300 ml cartridge</td></tr><tr><th>Skin time</th><td>Approx. 40-90 min, depending on climate</td></tr><tr><th>Application temperature</th><td>+5°C to +40°C</td></tr><tr><th>Service temperature</th><td>-40°C to +80°C</td></tr><tr><th>Main buyers</th><td>Contractors, distributors, OEM and private label buyers</td></tr></tbody></table></section>
        <section className="section red"><div className="sectionHead"><h2>Need price, samples or OEM packaging?</h2><p>Send your target market, application and packaging requirement. HOMEY can recommend a product system and support documents for your sales channel.</p></div><a className="btn2" href="/quote">Send Your Requirements</a></section>
      </main>
      <Footer />
    </>
  );
}
