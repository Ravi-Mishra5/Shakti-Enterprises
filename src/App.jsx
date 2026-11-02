import { useState } from 'react'
import './App.css'

const phone = '917388013642'
const products = [
  { name: 'AquaPure RO+UV', type: 'RO + UV + UF', price: '₹12,499', tag: 'BEST SELLER', tone: 'blue', image: 'photo-1624948465027-6f9b510f7a5f', detail: '7-stage purification · 8L storage' },
  { name: 'CrystalFlow RO', type: 'RO + UV', price: '₹9,999', tag: 'HOME FAVOURITE', tone: 'sand', image: 'photo-1585704032915-c3400ca199e7', detail: 'Compact design · 7L storage' },
  { name: 'PureSpring UV', type: 'UV + UF', price: '₹6,499', tag: 'GREAT VALUE', tone: 'green', image: 'photo-1601049541289-9b1b7bbbfe19', detail: 'Smart UV protection · 6L storage' },
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
  return <ServiceCard number="01" title="Installation" description="A fresh start for better water. We’ll set up your purifier neatly and get it ready for the first pour." message="Hello Shakti Enterprises, I need a water purifier installation." action="Book an installation" icon="⌁" accent="install" details={['At-home setup', 'Clean, careful work']} />
}

function RepairService() {
  return <ServiceCard number="02" title="Repair & service" description="Leaks, low flow, or a purifier that needs attention? Let’s get it working smoothly again." message="Hello Shakti Enterprises, I need help with water purifier repair/service." action="Request a service" icon="✳" accent="repair" details={['Helpful diagnosis', 'Reliable follow-up']} />
}

function FilterCareService() {
  return <ServiceCard number="03" title="Filter care" description="Fresh filters help your purifier do its best. Ask us about replacements and routine care." message="Hello Shakti Enterprises, I would like to ask about purifier filter replacement." action="Ask about filters" icon="◌" accent="filter" details={['Filter replacement', 'Maintenance guidance']} />
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const order = (product) => window.open(waLink(`Hello Shakti Enterprises! I'm interested in the ${product.name} (${product.type}) priced at ${product.price}. Please share more details and installation availability.`), '_blank', 'noopener,noreferrer')

  return (
    <main>
      <div className="topline"><span>PURE WATER. PEACE OF MIND.</span><span className="top-contact">Need help? <a href={waLink('Hello Shakti Enterprises, I have a question about water purifier installation.')} target="_blank" rel="noreferrer">Chat with our team ↗</a></span></div>
      <header className="header">
        <a className="brand" href="#home" aria-label="Shakti Enterprises home"><DropMark /><span><strong>shakti</strong><small>ENTERPRISES</small></span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">☰</button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}><a onClick={() => setMenuOpen(false)} href="#services">Services</a><a onClick={() => setMenuOpen(false)} href="#products">Our products</a><a onClick={() => setMenuOpen(false)} href="#about">About us</a><a className="nav-cta" href={waLink('Hello Shakti Enterprises! I would like to book a water purifier installation.')} target="_blank" rel="noreferrer">Book a visit <span>↗</span></a></nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy"><div className="eyebrow"><span className="eyebrow-dot" /> YOUR HOME, IN GOOD WATER</div><h1>Better water.<br /><em>Better every day.</em></h1><p>Thoughtful water purifier solutions, expertly installed and cared for by a team that puts your family first.</p><div className="hero-actions"><a className="button button-dark" href="#products">Explore purifiers <span>↗</span></a><a className="button button-light" href={waLink('Hello Shakti Enterprises! I would like to book a free water consultation.')} target="_blank" rel="noreferrer"><span className="mini-wa">◉</span> Talk to an expert</a></div><div className="hero-proof"><div className="avatar-stack"><i>✓</i><i>✓</i><i>✓</i></div><span><b>Reliable service, every time</b><small>Installation · Repair · Maintenance</small></span></div></div>
        <div className="hero-visual"><img src="/purifier-hero.svg" alt="Illustration of a modern water purifier and a glass of fresh water" /><div className="image-shade" /><div className="hero-image-label"><span className="label-icon">✳</span><span><b>Water, made wonderful.</b><small>From our home to yours</small></span></div><div className="floating-note"><span>✦</span><b>Made for<br />your home</b></div></div>
        <div className="hero-bottom"><span>01 — 03</span><span className="bottom-line" /><span>CARE THAT FLOWS</span><span className="scroll-cue">SCROLL TO EXPLORE ↓</span></div>
      </section>

      <section className="trust-strip"><span>THE SHAKTI PROMISE</span><div><b>01</b> Expert installation</div><div><b>02</b> Genuine products</div><div><b>03</b> Care that continues</div><div><b>04</b> Here when you need us</div></section>

      <section className="services section-wrap" id="services"><div className="section-kicker">HERE FOR EVERY DROP <span>✳</span></div><div className="section-heading"><h2>Water care,<br /><em>made simple.</em></h2><p>From choosing the right purifier to keeping it running beautifully, we take care of the details so you can enjoy every glass.</p></div><div className="service-grid"><InstallationService /><RepairService /><FilterCareService /></div></section>

      <section className="products-section" id="products"><div className="section-wrap"><div className="section-kicker">A GOOD PLACE TO START <span>✳</span></div><div className="products-heading"><div><h2>Find your kind<br />of <em>pure.</em></h2></div><p>Thoughtfully chosen purifiers for the way you live. Tap a product to ask our team about it on WhatsApp.</p></div><div className="product-grid">{products.map((product, index) => <article className={`product-card ${product.tone}`} key={product.name}><div className="product-image"><img src={`https://images.unsplash.com/${product.image}?auto=format&fit=crop&w=800&q=80`} alt={product.name} /><span className="product-tag">{product.tag}</span><button className="product-arrow" onClick={() => order(product)} aria-label={`Order ${product.name}`}>↗</button><span className="product-index">0{index + 1}</span></div><div className="product-info"><div className="product-type">{product.type}</div><h3>{product.name}</h3><div className="product-meta"><span>{product.detail}</span><b>{product.price}</b></div><button className="order-link" onClick={() => order(product)}>Ask about this purifier <span>↗</span></button></div></article>)}</div><p className="price-note">* Product pricing is indicative. Ask us for current availability and installation pricing.</p></div></section>

      <section className="about-section section-wrap" id="about"><div className="about-photo"><img src="https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=1000&q=85" alt="Clear water flowing into a glass" /><div className="about-stamp"><DropMark /><span>CARE IN<br />EVERY DROP</span></div></div><div className="about-copy"><div className="section-kicker">A LITTLE ABOUT US <span>✳</span></div><h2>Good water is<br />personal. So is<br /><em>good service.</em></h2><p>At Shakti Enterprises, we believe clean water should feel easy. We help you find a purifier that fits your home, install it with care, and stay close by for everything that comes next.</p><div className="about-signoff">Your neighbourhood water care team <span>— Shakti Enterprises</span></div><a className="button button-dark" href={waLink('Hello Shakti Enterprises! I would love to know more about your services.')} target="_blank" rel="noreferrer">Get to know us <span>↗</span></a></div></section>

      <section className="contact-band"><div className="contact-watermark">S</div><div className="contact-inner"><div className="section-kicker">LET’S GET THE WATER FLOWING <span>✳</span></div><h2>A better glass<br />starts with <em>a hello.</em></h2><p>Tell us what you need. Our friendly team is just a WhatsApp message away.</p><a className="button button-cream" href={waLink('Hello Shakti Enterprises! I would like to know more about your water purifier products and services.')} target="_blank" rel="noreferrer"><span className="mini-wa">◉</span> Chat with us on WhatsApp <span>↗</span></a><div className="contact-number">OR CALL US <a href="tel:+917388013642">+91 73880 13642</a></div></div><div className="contact-bubble">We’re<br />happy to<br />help <span>☺</span></div></section>

      <footer className="footer"><a className="brand footer-brand" href="#home"><DropMark /><span><strong>shakti</strong><small>ENTERPRISES</small></span></a><span className="footer-tagline">Water care, with a little more care.</span><span className="copyright">© {new Date().getFullYear()} Shakti Enterprises</span></footer>
      <a className="whatsapp-float" href={waLink('Hello Shakti Enterprises! I have a question about your water purifier services.')} target="_blank" rel="noreferrer" aria-label="Chat with Shakti Enterprises on WhatsApp"><svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16 .7A15.2 15.2 0 0 0 3 23.8L.9 31l7.4-1.9A15.2 15.2 0 1 0 16 .7Zm0 27.6c-2.3 0-4.5-.6-6.4-1.8l-.5-.3-4.4 1.2 1.2-4.3-.3-.5A12.4 12.4 0 1 1 16 28.3Zm6.8-9.3c-.4-.2-2.2-1.1-2.6-1.2-.3-.1-.6-.2-.8.2-.3.4-1 1.2-1.2 1.5-.2.2-.4.3-.8.1-2.3-1.1-3.8-2.1-5.2-4.7-.4-.7.4-.7 1.1-2.1.1-.2.1-.5 0-.7l-1.2-2.8c-.3-.7-.7-.6-.9-.6h-.8c-.3 0-.7.1-1.1.5-.4.4-1.4 1.4-1.4 3.3s1.5 3.8 1.7 4.1c.2.3 2.9 4.4 7 6.2 2.6 1.1 3.6 1.2 4.9 1 .8-.1 2.2-.9 2.5-1.8.3-.9.3-1.6.2-1.8-.1-.2-.4-.3-.8-.5Z" /></svg></a>
    </main>
  )
}

export default App
