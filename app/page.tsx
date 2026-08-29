import type { CSSProperties } from "react";
import Image from "next/image";
import SiteNav from "./site-nav";

const revealDelay = (index: number, step = 70): CSSProperties =>
  ({ "--reveal-delay": `${index * step}ms` } as CSSProperties);

const portfolioImages = [
  { src: "/galeria/01.jpg", alt: "Ensaio fotográfico Yasmin 01", className: "md:row-span-2" },
  { src: "/galeria/02.jpg", alt: "Ensaio fotográfico Yasmin 02", className: "" },
  { src: "/galeria/03.jpg", alt: "Ensaio fotográfico Yasmin 03", className: "" },
  { src: "/galeria/04.jpg", alt: "Ensaio fotográfico Yasmin 04", className: "md:row-span-2" },
  { src: "/galeria/05.jpg", alt: "Ensaio fotográfico Yasmin 05", className: "" },
  { src: "/galeria/06.jpg", alt: "Ensaio fotográfico Yasmin 06", className: "" },
  { src: "/galeria/07.jpg", alt: "Ensaio fotográfico Yasmin 07", className: "md:col-span-2" },
  { src: "/galeria/08.jpg", alt: "Ensaio fotográfico Yasmin 08", className: "" },
  { src: "/galeria/09.jpg", alt: "Ensaio fotográfico Yasmin 09", className: "" },
];

const packageGroups = [
  {
    title: "Ensaio individual",
    plans: [
      { name: "Essencial", detail: "Para guardar o agora", price: "R$ 220", photo: "/galeria/01.jpg", items: ["1h de ensaio", "10 fotos finais", "1 look", "Fotos tratadas + galeria digital", "Local externo"] },
      { name: "Memórias", detail: "O equilíbrio certo", price: "R$ 320", featured: true, photo: "/galeria/02.jpg", items: ["1h30 de ensaio", "25 fotos finais", "Até 2 looks", "5 fotos reveladas", "Fotos tratadas + galeria digital"] },
      { name: "Experiência", detail: "O ensaio completo", price: "R$ 450", photo: "/galeria/03.jpg", items: ["2h de ensaio", "50 fotos finais", "Até 3 looks", "10 fotos reveladas", "Fotos tratadas + galeria digital"] },
    ],
  },
  {
    title: "Ensaio de casal",
    plans: [
      { name: "Love", detail: "O começo da história", price: "sob consulta", photo: "/galeria/04.jpg", items: ["1h de ensaio", "15 fotos finais", "1 look", "Fotos tratadas + galeria digital"] },
      { name: "Love Plus", detail: "Mais tempo, mais cenas", price: "sob consulta", featured: true, photo: "/galeria/05.jpg", items: ["1h30 de ensaio", "30 fotos finais", "2 looks", "5 fotos reveladas", "Fotos tratadas + galeria digital"] },
      { name: "Love Premium", detail: "A experiência inteira", price: "sob consulta", photo: "/galeria/06.jpg", items: ["2h de ensaio", "50 fotos finais", "2 a 3 looks", "10 fotos reveladas", "Fotos tratadas + galeria digital"] },
    ],
  },
  {
    title: "Ensaio de família",
    plans: [
      { name: "Família", detail: "Um momento juntos", price: "R$ 300", photo: "/galeria/07.jpg", items: ["1h de ensaio", "20 fotos finais", "5 fotos reveladas", "Fotos tratadas + galeria digital"] },
      { name: "Completo", detail: "Com calma e impressos", price: "R$ 420", featured: true, photo: "/galeria/08.jpg", items: ["1h30 de ensaio", "40 fotos finais", "10 fotos reveladas", "Fotos tratadas + galeria digital"] },
    ],
  },
  {
    title: "Pré-wedding",
    plans: [
      { name: "Pré-wedding", detail: "Antes do grande dia", price: "R$ 550", photo: "/galeria/09.jpg", items: ["Até 2h de ensaio", "Até 2 locais próximos", "Até 3 looks", "50 fotos editadas", "Galeria online", "10 fotos reveladas"] },
    ],
  },
];

const extras = [
  { label: "Foto extra editada", value: "R$ 15 / un." },
  { label: "10 fotos extras", value: "R$ 120" },
  { label: "20 fotos extras", value: "R$ 200" },
  { label: "Look adicional", value: "R$ 30" },
  { label: "Hora adicional", value: "R$ 100" },
  { label: "Fotos reveladas — 10 un.", value: "R$ 60" },
  { label: "Vídeo curto / Reel do ensaio", value: "R$ 100" },
];

const prints = [
  { label: "5 fotos reveladas", value: "R$ 35" },
  { label: "10 fotos reveladas", value: "R$ 60" },
  { label: "20 fotos reveladas", value: "R$ 100" },
  { label: "30 fotos reveladas", value: "R$ 140" },
];

const whatsappUrl =
  "https://wa.me/5514981184847?text=" +
  encodeURIComponent("Olá, Yasmin! Vi seu site e gostaria de conversar sobre um ensaio fotográfico.");

const instagramUrl = "https://www.instagram.com/yasmintorquaoto/";

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4.2" />
    <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);

const WhatsappIcon = () => (
  <svg viewBox="0 0 32 32" width="26" height="26" fill="currentColor" aria-hidden="true">
    <path d="M16.003 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.256.59 4.46 1.712 6.403L3.2 28.8l6.57-1.723a12.74 12.74 0 0 0 6.233 1.588h.005c7.06 0 12.8-5.74 12.8-12.8s-5.74-12.8-12.805-12.665zm0 23.06h-.004a10.63 10.63 0 0 1-5.42-1.485l-.39-.23-4.03 1.057 1.076-3.93-.253-.404a10.6 10.6 0 0 1-1.626-5.668c0-5.867 4.774-10.64 10.647-10.64 2.843 0 5.514 1.108 7.523 3.12a10.57 10.57 0 0 1 3.116 7.526c0 5.867-4.773 10.64-10.646 10.64zm5.837-7.968c-.32-.16-1.892-.933-2.185-1.04-.293-.107-.507-.16-.72.16-.213.32-.826 1.04-1.013 1.253-.187.213-.373.24-.693.08-.32-.16-1.35-.498-2.573-1.588-.95-.848-1.593-1.895-1.78-2.215-.187-.32-.02-.493.14-.652.144-.143.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.735-.986-2.375-.26-.624-.524-.54-.72-.55l-.613-.01c-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.667 0 1.573 1.146 3.093 1.306 3.307.16.213 2.253 3.44 5.46 4.824.763.33 1.36.527 1.824.674.767.244 1.464.21 2.016.127.615-.092 1.892-.773 2.16-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373z" />
  </svg>
);

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="logo-lockup" href="#inicio" aria-label="Yasmin Fotografia, início"><Image src="/logo.png" alt="Logo Yasmin Fotografia" width={150} height={150} priority /></a>
        <SiteNav />
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
        <p className="eyebrow" data-reveal>um pouco sobre mim</p>
        <div className="about-content" data-reveal style={revealDelay(1)}><h2>Fotografar é<br /><em>prestar atenção.</em></h2><div><p>Eu sou Yasmin, fotógrafa de pessoas, encontros e pequenos detalhes. Acredito em imagens que não precisam gritar — elas ficam, porque fazem sentir.</p><a className="text-link" href="#contato">conheça meu olhar <span>→</span></a></div></div>
      </section>

      <section id="portfolio" className="portfolio section-wrap">
        <div className="section-heading" data-reveal><div><p className="eyebrow">trabalhos selecionados</p><h2>Feito de <em>instantes.</em></h2></div><span className="count">09 histórias</span></div>
        <div className="gallery">{portfolioImages.map((image, index) => <div className={`gallery-item ${image.className}`} key={image.src} data-reveal style={revealDelay(index % 3, 90)}><Image src={image.src} alt={image.alt} fill sizes="(max-width: 768px) 100vw, 33vw" /></div>)}</div>
      </section>

      <section id="precos" className="pricing section-wrap">
        <div className="section-heading" data-reveal><div><p className="eyebrow">investimento</p><h2>Escolha como<br /><em>quer lembrar.</em></h2></div><p className="pricing-note">Catálogo de ensaios fotográficos. Todas as fotos são tratadas e entregues em galeria digital.</p></div>

        {packageGroups.map((group) => (
          <div className="price-group" key={group.title}>
            <p className="price-group-title" data-reveal>{group.title}</p>
            <div className={`price-grid ${group.plans.length === 1 ? "single" : ""}`}>
              {group.plans.map((plan, index) => (
                <article className={`price-card ${plan.featured ? "featured" : ""}`} key={plan.name} data-reveal style={revealDelay(index, 90)}>
                  <span className="price-card-media" aria-hidden="true">
                    <Image src={plan.photo} alt="" fill sizes="(max-width: 700px) 90vw, 380px" className="price-card-photo" />
                    <span className="price-card-veil" />
                  </span>
                  <div className="price-card-inner">
                    <div><span className="plan-number">0{index + 1}</span><h3>{plan.name}</h3><p>{plan.detail}</p></div>
                    <div><strong>{plan.price}</strong><ul>{plan.items.map((item) => <li key={item}>{item}</li>)}</ul><a className="card-link" href="#contato">quero este <span>→</span></a></div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}

        <div className="extras-wrap">
          <div className="extras-block" data-reveal>
            <p className="price-group-title">Adicionais</p>
            <ul className="extras-list">{extras.map((item) => <li key={item.label}><span>{item.label}</span><span>{item.value}</span></li>)}</ul>
          </div>
          <div className="extras-block" data-reveal style={revealDelay(1, 90)}>
            <p className="price-group-title">Revelação de fotos</p>
            <p className="extras-caption">Para quem contratou um pacote somente digital e quer adicionar fotos impressas.</p>
            <ul className="extras-list">{prints.map((item) => <li key={item.label}><span>{item.label}</span><span>{item.value}</span></li>)}</ul>
          </div>
        </div>

        <div className="pricing-fine" data-reveal>
          <p><strong>Deslocamento</strong> — ensaios dentro da cidade sem taxa adicional. Para outras cidades, o valor é calculado conforme a distância.</p>
          <p><strong>Formas de pagamento</strong> — PIX (50% para reservar a data e 50% até o dia do ensaio) ou cartão à vista/parcelado com acréscimo da operadora. A data só é reservada após o pagamento do sinal.</p>
          <a className="text-link" href="/tabela_de_precos_ensaio.pdf" target="_blank" rel="noopener">baixar tabela completa <span>↓</span></a>
        </div>
      </section>

      <section id="contato" className="contact section-wrap">
        <div data-reveal>
          <p className="eyebrow">vamos criar algo bonito?</p>
          <h2>Me conta a sua<br /><em>história.</em></h2>
          <p className="contact-copy">Me chama no WhatsApp para verificar a agenda, tirar dúvidas e reservar a data do seu ensaio.</p>
        </div>
        <div className="contact-actions" data-reveal style={revealDelay(1)}>
          <a className="whatsapp-button" href={whatsappUrl} target="_blank" rel="noopener noreferrer"><WhatsappIcon /> falar no WhatsApp <span>→</span></a>
          <a className="contact-button" href="mailto:oi@yasminfotografia.com">oi@yasminfotografia.com <span>→</span></a>
        </div>
      </section>

      <a className="wa-float" href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Falar com a Yasmin no WhatsApp"><WhatsappIcon /></a>

      <footer data-reveal><a className="logo-lockup" href="#inicio" aria-label="Yasmin Fotografia, início"><Image src="/logo.png" alt="Logo Yasmin Fotografia" width={150} height={150} /></a><p>© 2026 Yasmin Fotografia</p><span className="footer-social"><a href={instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram da Yasmin"><InstagramIcon /></a><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp da Yasmin"><WhatsappIcon /></a></span><a className="credit" href="https://wa.me/5514996472492?text=Ol%C3%A1%20vim%20pelo%20site%20da%20yasmin..." target="_blank" rel="noopener noreferrer">Desenvolvido por Gustavo Rizzo</a><a href="#inicio">voltar ao início ↑</a></footer>
    </main>
  );
}
