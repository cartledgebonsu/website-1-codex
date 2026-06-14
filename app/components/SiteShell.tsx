const marketSegments = [
  "Interior & Finishing Solutions",
  "Window & Door Installation System",
  "Exterior & Facade Systems",
  "Flooring & Construction Bonding",
  "Industrial & Maintenance Solutions",
  "OEM & Private Label Manufacturing",
];

export function Header() {
  return (
    <header className="header">
      <a href="/">
        <img className="logo" src="/assets/homey-logo.png" alt="HOMEY logo" />
      </a>
      <nav className="nav">
        <div className="navItem"><a href="/#about">About US</a></div>
        <div className="navItem"><a href="/products">PRODUCT</a></div>
        <div className="navItem">
          <button className="dropBtn" type="button">Market Segment</button>
          <div className="dropdown">
            {marketSegments.map((segment) => <span key={segment}>{segment}</span>)}
          </div>
        </div>
        <div className="navItem"><a href="/become-a-distributor">Become a Distributor</a></div>
        <div className="navItem"><a href="/blog">Blog</a></div>
        <div className="navItem"><a href="/contact">Contact</a></div>
      </nav>
      <a className="cta" href="/quote">Get a Quote</a>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <img src="/assets/homey-logo.png" alt="HOMEY logo" />
      <p>HOMEY CONSTRUCTION COMPANY LIMITED</p>
      <p>Stick together. Stick stronger.</p>
    </footer>
  );
}

export function InquiryForm({ compact = false }: { compact?: boolean }) {
  return (
    <form className="form" action="https://formsubmit.co/2536708496@qq.com" method="POST">
      <input type="hidden" name="_subject" value="New HOMEY website inquiry from siliconesealant.shop" />
      <input type="hidden" name="_next" value="https://www.siliconesealant.shop/thank-you" />
      <input type="hidden" name="_template" value="table" />
      <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
      <label>Name *<input name="name" required placeholder="Your full name" /></label>
      <label>Email *<input name="email" required type="email" placeholder="you@company.com" /></label>
      <label>Phone / WhatsApp *<input name="phone" required type="tel" placeholder="+1 555 000 0000" /></label>
      {!compact ? <label>Company Name<input name="company" placeholder="Your company name" /></label> : null}
      <label>Country / Region<input name="country" placeholder="United States, UAE, Brazil..." /></label>
      <label>Product Requirement<select name="product_requirement" defaultValue=""><option value="">Select product interest</option><option>Silicone Sealant</option><option>PU Sealant / P35</option><option>PU Foam</option><option>Acrylic Sealant</option><option>Construction Adhesive</option><option>OEM / Private Label</option></select></label>
      <label className="full">Message<textarea name="message" placeholder="Tell us your application, quantity, packaging, target market or certification needs." /></label>
      <button type="submit">Submit Inquiry</button>
    </form>
  );
}
