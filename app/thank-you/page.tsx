import type { Metadata } from "next";
import { Footer, Header } from "../components/SiteShell";

export const metadata: Metadata = {
  title: "Thank You | HOMEY",
};

export default function ThankYouPage() {
  return (
    <>
      <Header />
      <main><section className="hero"><div><h1>Thank you for your inquiry.</h1><p className="lead">Your message has been sent to HOMEY. Our team will review your product requirement, application and packaging needs, then contact you as soon as possible.</p><div className="actions"><a className="btn" href="/products">View Products</a><a className="btn2" href="/">Back to Home</a></div></div><img src="/assets/product-lineup.png" alt="HOMEY construction sealants adhesives and PU foam product range" /></section></main>
      <Footer />
    </>
  );
}
