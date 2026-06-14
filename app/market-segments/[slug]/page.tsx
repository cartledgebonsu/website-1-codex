import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getMarketSegment, marketSegmentPages, siteUrl } from "../../lib/site-data";

type SegmentPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return marketSegmentPages.map((segment) => ({ slug: segment.slug }));
}

export async function generateMetadata({ params }: SegmentPageProps): Promise<Metadata> {
  const { slug } = await params;
  const segment = getMarketSegment(slug);
  if (!segment) return {};

  return {
    title: segment.seoTitle,
    description: segment.description,
    alternates: {
      canonical: `/market-segments/${segment.slug}`,
    },
    openGraph: {
      title: segment.seoTitle,
      description: segment.description,
      url: `${siteUrl}/market-segments/${segment.slug}`,
      images: [segment.image],
    },
  };
}

export default async function MarketSegmentPage({ params }: SegmentPageProps) {
  const { slug } = await params;
  const segment = getMarketSegment(slug);
  if (!segment) notFound();

  return (
    <main className="productPage">
      <header className="siteHeader">
        <Link className="brand" href="/">
          <Image src="/assets/homey-logo.png" alt="HOMEY construction sealant and adhesive manufacturer logo" width={168} height={52} priority />
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

      <section className="productHero">
        <div className="productHeroCopy">
          <div className="breadcrumb">Market Segments / {segment.title}</div>
          <h1>{segment.title}</h1>
          <p>{segment.description}</p>
          <div className="productHeroActions">
            <Link className="primaryBtn" href="/inquiry">Send Your Requirements</Link>
            <Link className="secondaryBtn" href="#solution">View Solution</Link>
          </div>
        </div>
        <div className="productPackshot">
          <Image src={segment.image} alt={segment.alt} width={1200} height={760} priority />
        </div>
      </section>

      <section className="productSnapshot">
        <div><strong>Buyer Type</strong><span>{segment.buyer}</span></div>
        <div><strong>Products</strong><span>{segment.products.slice(0, 2).join(" / ")}</span></div>
        <div><strong>Support</strong><span>Application guidance and documents</span></div>
        <div><strong>CTA</strong><span>Samples, quotation and OEM review</span></div>
      </section>

      <section className="productSection productIntro" id="solution">
        <div>
          <h2>What buyers need to solve</h2>
          <p>{segment.challenge}</p>
        </div>
        <div>
          <h2>How HOMEY supports this segment</h2>
          <p>{segment.solution}</p>
        </div>
      </section>

      <section className="productSection applicationsMatrix">
        <h2>Recommended HOMEY product categories</h2>
        <div className="matrixGrid">
          {segment.products.map((product) => (
            <article key={product}>
              <span>Product fit</span>
              <h3>{product}</h3>
              <p>Recommended based on application, substrate, installation method and local market requirement.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="productSection documentSection" id="faq">
        <div>
          <h2>Questions buyers ask before selecting this solution</h2>
          <p>These answers help importers, distributors and contractors understand the product system before inquiry.</p>
        </div>
        <div className="faqList">
          {segment.faqs.map(([question, answer]) => (
            <article key={question}>
              <h3>{question}</h3>
              <p>{answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="productQuote">
        <div>
          <h2>Build a product range for {segment.title.toLowerCase()}.</h2>
          <p>
            Tell HOMEY your target country, customer channel, application scenario and packaging needs.
            We can suggest a product mix and quotation path for your local market.
          </p>
        </div>
        <Link className="primaryBtn" href="/inquiry">Ask for Product Recommendation</Link>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: segment.faqs.map(([question, answer]) => ({
              "@type": "Question",
              name: question,
              acceptedAnswer: {
                "@type": "Answer",
                text: answer,
              },
            })),
          }),
        }}
      />
    </main>
  );
}
