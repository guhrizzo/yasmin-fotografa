import Image from "next/image";

const portfolioImages = [
  { src: "/IMG_9874.PNG", alt: "Ensaio fotográfico Yasmin 01", className: "md:row-span-2" },
  { src: "/IMG_9875.JPG.jpeg", alt: "Ensaio fotográfico Yasmin 02", className: "" },
  { src: "/IMG_9876.JPG.jpeg", alt: "Ensaio fotográfico Yasmin 03", className: "" },
  { src: "/IMG_9878.PNG", alt: "Ensaio fotográfico Yasmin 04", className: "md:row-span-2" },
  { src: "/IMG_9879.JPG.jpeg", alt: "Ensaio fotográfico Yasmin 05", className: "" },
  { src: "/IMG_9880 (1).PNG", alt: "Ensaio fotográfico Yasmin 06", className: "" },
  { src: "/IMG_9881 (1).PNG", alt: "Ensaio fotográfico Yasmin 07", className: "md:col-span-2" },
  { src: "/IMG_9882 (1).PNG", alt: "Ensaio fotográfico Yasmin 08", className: "" },
  { src: "/IMG_9883 (1).PNG", alt: "Ensaio fotográfico Yasmin 09", className: "" },
];

const prices = [
  { name: "Essencial", detail: "Para guardar o agora", price: "R$ 450", items: ["1 hora de ensaio", "20 fotos tratadas", "Entrega em galeria online"] },
  { name: "Afeto", detail: "O ensaio completo", price: "R$ 750", items: ["2 horas de ensaio", "40 fotos tratadas", "2 trocas de look", "Álbum digital"] },
  { name: "Memória", detail: "Uma experiência para ficar", price: "R$ 1.200", items: ["Até 4 horas de ensaio", "80 fotos tratadas", "Álbum impresso", "Direção e produção"] },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="logo-lockup" href="#inicio" aria-label="Yasmin Fotografia, início"><Image src="/img-site-1.PNG" alt="Logo Yasmin Fotografia" width={150} height={150} priority /></a>
        <nav aria-label="Navegação principal">
          <a href="#sobre">sobre</a><a href="#portfolio">portfólio</a><a href="#precos">investimento</a>
        </nav>
        <a className="header-cta" href="#contato">vamos conversar <span>→</span></a>
      </header>

      <section id="inicio" className="hero section-wrap">
        <div className="hero-copy">
          <p className="eyebrow">fotografia com presença</p>
          <h1>O que é bonito<br /><em>merece ser lembrado.</em></h1>
          <p className="hero-description">Retratos honestos, celebrações íntimas e histórias contadas com luz, cuidado e um pouco de poesia.</p>
          <a className="text-link" href="#portfolio">explorar histórias <span>↓</span></a>
        </div>
        <div className="hero-image-wrap">
          <Image src="/IMG_9886.PNG" alt="Retrato de uma mulher em luz natural" fill priority sizes="(max-width: 768px) 100vw, 52vw" className="hero-image" />
          <span className="image-note">01 — retratos que respiram</span>
        </div>
      </section>

      <section id="sobre" className="about section-wrap">
        <p className="eyebrow">um pouco sobre mim</p>
        <div className="about-content"><h2>Fotografar é<br /><em>prestar atenção.</em></h2><div><p>Eu sou Yasmin, fotógrafa de pessoas, encontros e pequenos detalhes. Acredito em imagens que não precisam gritar — elas ficam, porque fazem sentir.</p><a className="text-link" href="#contato">conheça meu olhar <span>→</span></a></div></div>
      </section>

      <section id="portfolio" className="portfolio section-wrap">
        <div className="section-heading"><div><p className="eyebrow">trabalhos selecionados</p><h2>Feito de <em>instantes.</em></h2></div><span className="count">09 histórias</span></div>
        <div className="gallery">{portfolioImages.map((image) => <div className={`gallery-item ${image.className}`} key={image.src}><Image src={image.src} alt={image.alt} fill sizes="(max-width: 768px) 100vw, 33vw" /></div>)}</div>
      </section>

      <section id="precos" className="pricing section-wrap"><div className="section-heading"><div><p className="eyebrow">investimento</p><h2>Escolha como<br /><em>quer lembrar.</em></h2></div><p className="pricing-note">Valores ilustrativos para apresentar as possibilidades do seu ensaio. Vamos ajustar tudo juntas.</p></div><div className="price-grid">{prices.map((plan, index) => <article className={`price-card ${index === 1 ? "featured" : ""}`} key={plan.name}><div><span className="plan-number">0{index + 1}</span><h3>{plan.name}</h3><p>{plan.detail}</p></div><div><strong>{plan.price}</strong><ul>{plan.items.map((item) => <li key={item}>{item}</li>)}</ul><a className="card-link" href="#contato">quero este <span>→</span></a></div></article>)}</div></section>

      <section id="contato" className="contact section-wrap"><div><p className="eyebrow">vamos criar algo bonito?</p><h2>Me conta a sua<br /><em>história.</em></h2></div><a className="contact-button" href="mailto:oi@yasminfotografia.com">oi@yasminfotografia.com <span>→</span></a></section>
      <footer><a className="logo-lockup" href="#inicio" aria-label="Yasmin Fotografia, início"><Image src="/img-site-1.PNG" alt="Logo Yasmin Fotografia" width={150} height={150} /></a><p>© 2026 Yasmin Fotografia</p><a href="#inicio">voltar ao início ↑</a></footer>
    </main>
  );
}
