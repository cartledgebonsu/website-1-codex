import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, productPages, siteUrl } from "../../lib/site-data";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return productPages.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};

  return {
    title: product.seoTitle,
    description: product.description,
    alternates: {
      canonical: `/products/${product.slug}`,
    },
    openGraph: {
      title: product.seoTitle,
      description: product.description,
      url: `${siteUrl}/products/${product.slug}`,
      images: [product.image],
    },
  };
}

export default async function ProductCategoryPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const specs = [
    ["Product category", product.category],
    ["Technology", product.technology],
    ["Packaging", product.packaging],
    ["Application condition", product.temperature],
    ["Main buyers", product.market],
  ];

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
          <div className="breadcrumb">Products / {product.category} / {product.name}</div>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <div className="productHeroActions">
            <Link className="primaryBtn" href="/inquiry">Request Quote</Link>
            <Link className="secondaryBtn" href="#technical">View Technical Data</Link>
          </div>
        </div>
        <div className="productPackshot">
          <Image src={product.image} alt={product.alt} width={1200} height={760} priority />
        </div>
      </section>

      <section className="productSnapshot">
        <div><strong>{product.name}</strong><span>{product.category}</span></div>
        <div><strong>OEM Ready</strong><span>Label and carton support</span></div>
        <div><strong>TDS / SDS</strong><span>Available on request</span></div>
        <div><strong>Export Supply</strong><span>For distributors and OEM buyers</span></div>
      </section>

      <nav className="productTabs" aria-label={`${product.name} page sections`}>
        <a href="#overview">Overview</a>
        <a href="#benefits">Benefits</a>
        <a href="#applications">Applications</a>
        <a href="#technical">Technical Data</a>
        <a href="#faq">FAQ</a>
        <a href="#quote">Quote</a>
      </nav>

      <section className="productSection productIntro" id="overview">
        <div>
          <h2>Built for buyers who compare product fit, supply reliability and technical support.</h2>
        </div>
        <div>
          <p>
            HOMEY organizes each product category around practical buyer questions: where the product is used,
            which performance matters, what packaging is available, and how distributors can explain the product
            to contractors, retailers or OEM customers in their local market.
          </p>
        </div>
      </section>

      <section className="productSection splitProductSection" id="benefits">
        <div>
          <h2>Key benefits</h2>
          <div className="benefitList">
            {product.benefits.map((benefit) => <span key={benefit}>{benefit}</span>)}
          </div>
        </div>
        <div className="productImagePanel">
          <Image src="/assets/product-lineup.png" alt="HOMEY construction sealant adhesive and PU foam product family" width={1200} height={620} />
        </div>
      </section>

      <section className="productSection applicationsMatrix" id="applications">
        <h2>Recommended applications</h2>
        <div className="matrixGrid">
          {product.applications.map((application) => (
            <article key={application}>
              <span>Application</span>
              <h3>{application}</h3>
              <p>Share the substrate, climate, packaging and target channel so HOMEY can recommend a suitable product grade.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="productSection technicalBlock" id="technical">
        <div>
          <h2>Technical information for fast procurement review.</h2>
          <p>
            Use this table as a first review point. Final product data, safety information and market-specific documents
            can be provided after confirming your application and target market.
          </p>
        </div>
        <table>
          <tbody>
            {specs.map(([label, value]) => (
              <tr key={label}>
                <th>{label}</th>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="productSection documentSection" id="faq">
        <div>
          <h2>Common buyer questions</h2>
          <p>Clear answers help distributors and importers judge the right product before samples and quotation.</p>
        </div>
        <div className="faqList">
          {product.faqs.map(([question, answer]) => (
            <article key={question}>
              <h3>{question}</h3>
              <p>{answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="productQuote" id="quote">
        <div>
          <h2>Need samples, price or OEM packaging for {product.name}?</h2>
          <p>
            Send your target market, application, package size and estimated order quantity. HOMEY will help you prepare
            the right product recommendation and quotation path.
          </p>
        </div>
        <Link className="primaryBtn" href="/inquiry">Send Your Requirements</Link>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.title,
            brand: { "@type": "Brand", name: "HOMEY" },
            category: product.category,
            description: product.description,
            image: `${siteUrl}${product.image}`,
            url: `${siteUrl}/products/${product.slug}`,
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: product.faqs.map(([question, answer]) => ({
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
