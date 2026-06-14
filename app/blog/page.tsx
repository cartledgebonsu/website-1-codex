import type { Metadata } from "next";
import { Footer, Header } from "../components/SiteShell";

export const metadata: Metadata = {
  title: "Blog | HOMEY",
  description: "Technical articles for construction sealant buyers, distributors, contractors and OEM partners.",
};

export default function BlogPage() {
  const posts = ["Silicone Sealant vs PU Sealant vs Acrylic Sealant", "How to Choose the Right Construction Sealant", "What Importers Should Check Before Ordering"];
  return (
    <>
      <Header />
      <main><section className="hero"><div><h1>Technical Articles for Sealant Buyers</h1><p className="lead">Practical product selection, application and import guidance for distributors, contractors and OEM buyers.</p></div><img src="/assets/lab-quality-test.jpg" alt="HOMEY technical support and quality testing" /></section><section className="section soft"><div className="grid">{posts.map((post) => <article className="card" key={post}><div className="cardBody"><h3>{post}</h3><p>A practical guide for overseas construction material buyers and distributor teams.</p><a href="/quote">Ask for recommendation</a></div></article>)}</div></section></main>
      <Footer />
    </>
  );
}
