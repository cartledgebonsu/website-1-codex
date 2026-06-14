import type { Metadata } from "next";
import { Footer, Header } from "../components/SiteShell";

export const metadata: Metadata = {
  title: "Become a Distributor | HOMEY",
  description: "Build a professional sealant and adhesive category with HOMEY distributor support, OEM packaging and technical documents.",
};

export default function BecomeDistributorPage() {
  const benefits = ["Complete Product Range", "OEM & Private Label", "Technical Documents", "Market Protection", "Training Support", "Export Response"];
  return (
    <>
      <Header />
      <main>
        <section className="hero"><div><h1>Become a HOMEY Distributor</h1><p className="lead">Build a professional sealant and adhesive category with reliable products, OEM packaging, technical support and long-term market cooperation.</p><div className="actions"><a className="btn" href="/quote">Apply Now</a><a className="btn2" href="/products">View Product Range</a></div></div><img src="/assets/homey-retail-display-shelf.jpg" alt="HOMEY branded retail display shelf for distributors" /></section>
        <section className="section soft"><div className="sectionHead"><h2>What distributors get from HOMEY</h2><p>HOMEY supports partners with practical tools to sell professionally and grow with confidence.</p></div><div className="grid">{benefits.map((item) => <article className="card" key={item}><div className="cardBody"><h3>{item}</h3><p>Practical partner support for professional construction material channels and long-term market development.</p></div></article>)}</div></section>
        <section className="section red"><div className="sectionHead"><h2>Ready to discuss distributor cooperation?</h2><p>Tell us your country, customer channels, current product range and expected cooperation model.</p></div><a className="btn2" href="/quote">Get a Quote</a></section>
      </main>
      <Footer />
    </>
  );
}
