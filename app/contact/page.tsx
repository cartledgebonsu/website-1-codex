import type { Metadata } from "next";
import { Footer, Header } from "../components/SiteShell";

export const metadata: Metadata = {
  title: "Contact | HOMEY",
  description: "Contact HOMEY for construction sealant, adhesive, PU foam, OEM packaging and distributor cooperation inquiries.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero"><div><h1>Contact HOMEY</h1><p className="lead">Tell us your product requirement, packaging plan or application scenario. Our export team will help match the right product system, documents and quotation path.</p><div className="actions"><a className="btn" href="/quote">Send Inquiry</a><a className="btn2" href="mailto:2536708496@qq.com">Email HOMEY</a></div></div><img src="/assets/homey-team-factory.jpg" alt="HOMEY team at the factory for global partner support" /></section>
        <section className="section soft"><div className="grid"><article className="card"><div className="cardBody"><h3>Email</h3><p>2536708496@qq.com</p><a href="mailto:2536708496@qq.com">Send email</a></div></article><article className="card"><div className="cardBody"><h3>Phone</h3><p>+86 20 8944 8846</p><a href="tel:+862089448846">Call HOMEY</a></div></article><article className="card"><div className="cardBody"><h3>WhatsApp</h3><p>+86 135 6015 1617</p><a href="https://wa.me/8613560151617">Chat on WhatsApp</a></div></article></div></section>
        <section className="section"><div className="sectionHead"><h2>Office and Factory Locations</h2><p>Visits can be arranged in advance for distributors, OEM buyers and long-term partners.</p></div><article className="mapCard"><div className="mapInfo"><h3>Guangzhou Office</h3><p>No. 2701A, HM Tower, No. 3 Jinshui Road, Tianhe District, Guangzhou</p><a className="textLink" href="https://www.openstreetmap.org/search?query=No.%202701A%2C%20HM%20Tower%2C%20No.%203%20Jinshui%20Road%2C%20Tianhe%20District%2C%20Guangzhou" target="_blank" rel="noreferrer">Open in OpenStreetMap</a></div><iframe title="HOMEY Guangzhou office map" src="https://www.openstreetmap.org/export/embed.html?bbox=113.3128%2C23.1142%2C113.3318%2C23.1278&layer=mapnik&marker=23.1210%2C113.3223" loading="lazy" /></article><article className="mapCard"><div className="mapInfo"><h3>Qingyuan Factory</h3><p>No. 1 Shunlian Road, Mingzhu Industrial Park, Lianzhou, Qingyuan</p><a className="textLink" href="https://www.openstreetmap.org/search?query=No.%201%20Shunlian%20Road%2C%20Mingzhu%20Industrial%20Park%2C%20Lianzhou%2C%20Qingyuan" target="_blank" rel="noreferrer">Open in OpenStreetMap</a></div><iframe title="HOMEY Qingyuan factory map" src="https://www.openstreetmap.org/export/embed.html?bbox=112.3600%2C24.7400%2C112.4400%2C24.8200&layer=mapnik&marker=24.7800%2C112.4000" loading="lazy" /></article></section>
      </main>
      <Footer />
    </>
  );
}
