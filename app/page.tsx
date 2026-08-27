import Image from 'next/image'

const photos = [
  { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1400&q=85', alt: 'Couple walking through tall grass', label: 'Field notes · 01', replaceWith: 'Replace with a wedding or editorial story.' },
  { src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=85', alt: 'Sunlight across a quiet interior', label: 'Interiors · 04', replaceWith: 'Replace with an interiors commission.' },
  { src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1400&q=85', alt: 'Mountain landscape beneath an open sky', label: 'Landscapes · 07', replaceWith: 'Replace with a landscape from your archive.' },
  { src: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&q=85', alt: 'Portrait in soft natural light', label: 'Portraits · 11', replaceWith: 'Replace with a representative portrait.' },
]

const heroPhoto = { src: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1400&q=85', alt: 'Wildflowers in warm afternoon light', replaceWith: 'Replace with your signature opening image.' }

export default function Home() {
  return <main>
    <a className="skipLink" href="#work">Skip to work</a>
    <header className="nav"><a className="wordmark" href="#top">STILL<span> / </span>FORMS</a><nav className="navLinks" aria-label="Primary navigation"><a href="#work">Work</a><a href="#about">About</a><a href="#pricing">Pricing</a><a href="#contact">Contact</a></nav></header>
    <section className="hero" id="top"><div className="heroCopy"><p className="eyebrow">Photographer · New York / Everywhere</p><h1>Light, held<br /><i>still.</i></h1><p className="intro">I make photographs about the spaces between things — for people, places, and the stories they carry.</p><a className="textLink" href="#work">Explore the work <span>↘</span></a></div><div className="heroImage"><Image src={heroPhoto.src} alt={heroPhoto.alt} width={1400} height={1800} priority sizes="(max-width: 700px) 90vw, 52vw" /><span className="imageNote">Opening image</span></div></section>
    <section className="statement" id="about"><p className="eyebrow">A considered approach</p><p className="statementText">The best frames don&apos;t ask for attention.<br />They make room for it.</p></section>
    <section className="work" id="work"><div className="sectionHead"><div><p className="eyebrow">Selected work</p><h2>Recent stories</h2></div><p className="sectionNote">A small collection of commissions<br />and personal observations.</p></div><div className="grid">{photos.map((photo) => <figure key={photo.src}><Image src={photo.src} alt={photo.alt} width={1400} height={1000} sizes="(max-width: 700px) 90vw, 45vw" /><figcaption>{photo.label}<span>{photo.replaceWith}</span></figcaption></figure>)}</div></section>
    <section className="services"><div><p className="eyebrow">Ways to work together</p><h2>Thoughtful images<br /><i>for lasting work.</i></h2></div><div className="serviceList"><div><span>01</span><p>Editorial &amp; Brand</p><small>Visual direction, campaign stories, and images with a point of view.</small></div><div><span>02</span><p>Portraits</p><small>Natural, unhurried portraits for people doing meaningful things.</small></div><div><span>03</span><p>Places &amp; Interiors</p><small>Atmosphere and detail for spaces made with intention.</small></div></div></section>
    <section className="pricing" id="pricing"><div><p className="eyebrow">Simple starting points</p><h2>Choose your<br /><i>way in.</i></h2></div><div className="priceList" role="table" aria-label="Photography pricing"><div role="row"><span role="cell">01</span><p role="cell">Half day</p><strong role="cell">From $1,200</strong><small>Up to 4 hours · 40 edited images</small></div><div role="row"><span role="cell">02</span><p role="cell">Full day</p><strong role="cell">From $2,200</strong><small>Up to 8 hours · 80 edited images</small></div><div role="row"><span role="cell">03</span><p role="cell">Custom story</p><strong role="cell">Let&apos;s talk</strong><small>Multi-day commissions and tailored coverage</small></div></div></section>
    <section className="contact" id="contact"><p className="eyebrow">Have a story in mind?</p><h2>Let&apos;s make<br /><i>something true.</i></h2><a className="email" href="mailto:hello@stillforms.studio">hello@stillforms.studio <span>↗</span></a></section>
    <footer><a className="wordmark" href="#top">STILL<span> / </span>FORMS</a><p>© 2026 Mara Vale · Available worldwide</p><a href="#top">Back to top ↑</a></footer>
  </main>
}
