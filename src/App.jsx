import { useState } from 'react'
import './App.css'

const phone = '917388013642'
const products = [
  { name: 'Home water purifiers', type: 'FOR HOME & FAMILY', tag: 'HOME SOLUTIONS', tone: 'blue', detail: 'Find a purifier to suit your water and household.' },
  { name: 'Commercial RO systems', type: 'FOR BUSINESS & WORKPLACE', tag: 'COMMERCIAL', tone: 'sand', detail: 'Water purification solutions for offices and businesses.' },
  { name: 'Purifier parts & filters', type: 'REPLACEMENTS & ACCESSORIES', tag: 'ONGOING CARE', tone: 'green', detail: 'Ask about filter changes, parts and maintenance.' },
]

const waLink = (message) => `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

function DropMark() {
  return <span className="drop-mark" aria-hidden="true"><svg viewBox="0 0 42 48" fill="none"><path d="M21 2C16 11 5 22 5 31a16 16 0 0 0 32 0C37 22 26 11 21 2Z" fill="currentColor" /><path d="M13 31c0 4 3 8 8 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" /></svg></span>
}

function ServiceCard({ number, title, description, message, action, icon, accent, details }) {
  return (
    <article className={`service-card service-${accent}`}>
      <div className="service-card-top"><span className="service-no">SERVICE / {number}</span><span className="service-symbol" aria-hidden="true">{icon}</span></div>
      <div className="service-art" aria-hidden="true"><span className="service-art-orbit"/><span className="service-art-drop">{icon}</span><span className="service-art-spark">✳</span></div>
      <div className="service-card-copy"><h3>{title}</h3><p>{description}</p><ul>{details.map((detail) => <li key={detail}><span>✓</span>{detail}</li>)}</ul></div>
      <a className="service-action" href={waLink(message)} target="_blank" rel="noreferrer"><span>{action}</span><b>↗</b></a>
    </article>
  )
}

function InstallationService() {
  return <ServiceCard number="01" title="Sales & installation" description="Choose a purifier for your home or business. We’ll help with selection and arrange a careful installation." message="Hello Shiv Shakti Enterprises, I’m interested in buying and installing a water purifier." action="Ask about a purifier" icon="⌁" accent="install" details={['Home & commercial options', 'Installation support']} />
}

function RepairService() {
  return <ServiceCard number="02" title="Repair & servicing" description="From low water flow to a purifier that needs attention, get help for your home or commercial system." message="Hello Shiv Shakti Enterprises, I need water purifier repair or servicing." action="Request a service" icon="✳" accent="repair" details={['Home & commercial systems', 'Repair and maintenance']} />
}

function FilterCareService() {
  return <ServiceCard number="03" title="Filters & maintenance" description="Keep your purifier working well with filter replacement and routine maintenance support." message="Hello Shiv Shakti Enterprises, I’d like to ask about purifier filters or maintenance." action="Ask about filter care" icon="◌" accent="filter" details={['Filter replacement', 'Routine maintenance']} />
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const order = (product) => window.open(waLink(`Hello Shiv Shakti Enterprises! I'm interested in ${product.name}. Please share options and availability.`), '_blank', 'noopener,noreferrer')

  return (
    <main>
      <div className="topline"><span>RO WATER PURIFIERS · SALES · SERVICE</span><span className="top-contact">Home or business? <a href={waLink('Hello Shiv Shakti Enterprises, I have a question about your home or commercial RO water purifier services.')} target="_blank" rel="noreferrer">Chat with our team ↗</a></span></div>
      <header className="header">
        <a className="brand" href="#home" aria-label="Shiv Shakti Enterprises home"><img src="/shiv-shakti-logo.svg" alt="" /><span className="brand-name"><strong><i>Shiv</i> Shakti</strong><small>RO WATER PURIFIER</small></span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">☰</button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}><a onClick={() => setMenuOpen(false)} href="#products">Products</a><a onClick={() => setMenuOpen(false)} href="#services">Services</a><a onClick={() => setMenuOpen(false)} href="#about">About us</a><a className="nav-cta" href={waLink('Hello Shiv Shakti Enterprises! I would like to enquire about a home or commercial RO water purifier.')} target="_blank" rel="noreferrer">Get a quote <span>↗</span></a></nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy"><div className="eyebrow"><span className="eyebrow-dot" /> HOME & COMMERCIAL RO SOLUTIONS</div><h1>Pure water.<br /><em>Made simple.</em></h1><p>RO water purifier sales, installation and servicing for homes, offices and businesses. Talk to us to find the right solution.</p><div className="hero-actions"><a className="button button-dark" href="#products">Explore products <span>↗</span></a><a className="button button-light" href={waLink('Hello Shiv Shakti Enterprises! I’d like to discuss an RO water purifier for my home or business.')} target="_blank" rel="noreferrer"><span className="mini-wa">◉</span> Talk to our team</a></div><div className="hero-proof"><div className="avatar-stack"><i>✓</i><i>✓</i><i>✓</i></div><span><b>Purifier support from start to service</b><small>Sales · Installation · Repair · Maintenance</small></span></div></div>
        <div className="hero-visual"><img src="/purifier-hero.svg" alt="Illustration of a modern water purifier and a glass of fresh water" /><div className="image-shade" /><div className="hero-image-label"><span className="label-icon">✳</span><span><b>RO solutions that fit your needs.</b><small>For home and business</small></span></div><div className="floating-note"><span>✦</span><b>Home &<br />commercial</b></div></div>
        <div className="hero-bottom"><span>01 — 03</span><span className="bottom-line" /><span>CARE THAT FLOWS</span><span className="scroll-cue">SCROLL TO EXPLORE ↓</span></div>
      </section>

      <section className="trust-strip"><span>SHIV SHAKTI ENTERPRISES</span><div><b>01</b> Home purifier sales</div><div><b>02</b> Commercial RO systems</div><div><b>03</b> Installation support</div><div><b>04</b> Repair & maintenance</div></section>

      <section className="services section-wrap" id="services"><div className="section-kicker">PRODUCTS & SERVICES <span>✳</span></div><div className="section-heading"><h2>RO water care<br /><em>for every space.</em></h2><p>From homes to commercial premises, get help choosing, installing and maintaining the right water purifier.</p></div><div className="service-grid"><InstallationService /><RepairService /><FilterCareService /></div></section>

      <section className="products-section" id="products"><div className="section-wrap"><div className="section-kicker">PRODUCTS FOR YOUR WATER NEEDS <span>✳</span></div><div className="products-heading"><div><h2>Solutions for<br /><em>every setting.</em></h2></div><p>Tell us about your water and space. We’ll help you enquire about a suitable system and current availability.</p></div><div className="product-grid">{products.map((product, index) => <article className={`product-card ${product.tone}`} key={product.name}><div className="product-image"><img src="/purifier-hero.svg" alt={product.name} /><span className="product-tag">{product.tag}</span><button className="product-arrow" onClick={() => order(product)} aria-label={`Ask about ${product.name}`}>↗</button><span className="product-index">0{index + 1}</span></div><div className="product-info"><div className="product-type">{product.type}</div><h3>{product.name}</h3><div className="product-meta"><span>{product.detail}</span></div><button className="order-link" onClick={() => order(product)}>Enquire on WhatsApp <span>↗</span></button></div></article>)}</div></div></section>

      <section className="about-section section-wrap" id="about"><div className="about-photo"><img src="/purifier-hero.svg" alt="RO water purifier for home and commercial use" /><div className="about-stamp"><DropMark /><span>HOME &<br />BUSINESS</span></div></div><div className="about-copy"><div className="section-kicker">ABOUT SHIV SHAKTI <span>✳</span></div><h2>Water solutions<br />with service you<br /><em>can count on.</em></h2><p>Shiv Shakti Enterprises helps households and businesses with RO water purifier sales, installation, repair and maintenance. Contact our team to discuss your requirements.</p><div className="about-signoff">Home & commercial RO water purifier support <span>— Shiv Shakti Enterprises</span></div><a className="button button-dark" href={waLink('Hello Shiv Shakti Enterprises! I would like to know more about your home and commercial RO purifier services.')} target="_blank" rel="noreferrer">Talk to our team <span>↗</span></a></div></section>

      <section className="contact-band"><div className="contact-watermark">S</div><div className="contact-inner"><div className="section-kicker">HOME OR COMMERCIAL ENQUIRY <span>✳</span></div><h2>Let’s find your<br /><em>water solution.</em></h2><p>Tell us what you need. Our team can help with products, installation and service.</p><a className="button button-cream" href={waLink('Hello Shiv Shakti Enterprises! I would like to enquire about your home or commercial RO water purifier products and services.')} target="_blank" rel="noreferrer"><span className="mini-wa">◉</span> Chat with us on WhatsApp <span>↗</span></a><div className="contact-number">OR CALL US <a href="tel:+917388013642">+91 73880 13642</a></div></div><div className="contact-bubble">We’re<br />happy to<br />help <span>☺</span></div></section>

      <footer className="footer"><a className="brand footer-brand" href="#home" aria-label="Shiv Shakti Enterprises home"><img src="/shiv-shakti-logo.svg" alt="" /><span className="brand-name"><strong><i>Shiv</i> Shakti</strong><small>ENTERPRISES</small></span></a><span className="footer-tagline">RO water purifier sales, service & installation.</span><span className="copyright">© {new Date().getFullYear()} Shiv Shakti Enterprises</span></footer>
      <a className="whatsapp-float" href={waLink('Hello Shiv Shakti Enterprises! I have a question about your home or commercial water purifier services.')} target="_blank" rel="noreferrer" aria-label="Chat with Shiv Shakti Enterprises on WhatsApp"><svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16 .7A15.2 15.2 0 0 0 3 23.8L.9 31l7.4-1.9A15.2 15.2 0 1 0 16 .7Zm0 27.6c-2.3 0-4.5-.6-6.4-1.8l-.5-.3-4.4 1.2 1.2-4.3-.3-.5A12.4 12.4 0 1 1 16 28.3Zm6.8-9.3c-.4-.2-2.2-1.1-2.6-1.2-.3-.1-.6-.2-.8.2-.3.4-1 1.2-1.2 1.5-.2.2-.4.3-.8.1-2.3-1.1-3.8-2.1-5.2-4.7-.4-.7.4-.7 1.1-2.1.1-.2.1-.5 0-.7l-1.2-2.8c-.3-.7-.7-.6-.9-.6h-.8c-.3 0-.7.1-1.1.5-.4.4-1.4 1.4-1.4 3.3s1.5 3.8 1.7 4.1c.2.3 2.9 4.4 7 6.2 2.6 1.1 3.6 1.2 4.9 1 .8-.1 2.2-.9 2.5-1.8.3-.9.3-1.6.2-1.8-.1-.2-.4-.3-.8-.5Z" /></svg></a>
    </main>
  )
}

export default App
