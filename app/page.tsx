import type { CSSProperties } from "react";
import Image from "next/image";
import Gallery from "./gallery";
import Backstage from "./backstage";
import SiteHeader from "./site-header";
import SiteFooter from "./site-footer";
import ContactSection, { whatsappUrl, WhatsappIcon } from "./contact-section";

const revealDelay = (index: number, step = 70): CSSProperties =>
  ({ "--reveal-delay": `${index * step}ms` } as CSSProperties);

const portfolioImages = [
  { src: "/galeria/ensaio-01.jpg", alt: "Ensaio fotográfico Yasmin — 01", className: "md:row-span-2" },
  { src: "/galeria/01.jpg", alt: "Ensaio fotográfico Yasmin — 02", className: "" },
  { src: "/galeria/02.jpg", alt: "Ensaio fotográfico Yasmin — 03", className: "" },
  { src: "/galeria/ensaio-03.jpg", alt: "Ensaio fotográfico Yasmin — 04", className: "md:col-span-2" },
  { src: "/galeria/ensaio-02.jpg", alt: "Ensaio fotográfico Yasmin — 05", className: "" },
  { src: "/galeria/03.jpg", alt: "Ensaio fotográfico Yasmin — 06", className: "md:row-span-2" },
  { src: "/galeria/ensaio-04.jpg", alt: "Ensaio fotográfico Yasmin — 07", className: "" },
  { src: "/galeria/04.jpg", alt: "Ensaio fotográfico Yasmin — 08", className: "" },
  { src: "/galeria/ensaio-05.jpg", alt: "Ensaio fotográfico Yasmin — 09", className: "md:row-span-2" },
  { src: "/galeria/09.jpg", alt: "Ensaio fotográfico Yasmin — 10", className: "md:col-span-2" },
  { src: "/galeria/ensaio-06.jpg", alt: "Ensaio fotográfico Yasmin — 11", className: "" },
  { src: "/galeria/05.jpg", alt: "Ensaio fotográfico Yasmin — 12", className: "md:row-span-2" },
  { src: "/galeria/ensaio-07.jpg", alt: "Ensaio fotográfico Yasmin — 13", className: "md:col-span-2" },
  { src: "/galeria/06.jpg", alt: "Ensaio fotográfico Yasmin — 14", className: "" },
  { src: "/galeria/ensaio-08.jpg", alt: "Ensaio fotográfico Yasmin — 15", className: "" },
  { src: "/galeria/07.jpg", alt: "Ensaio fotográfico Yasmin — 16", className: "md:col-span-2" },
  { src: "/galeria/ensaio-09.jpg", alt: "Ensaio fotográfico Yasmin — 17", className: "md:row-span-2" },
  { src: "/galeria/08.jpg", alt: "Ensaio fotográfico Yasmin — 18", className: "" },
  { src: "/galeria/ensaio-10.jpg", alt: "Ensaio fotográfico Yasmin — 19", className: "" },
  { src: "/galeria/ensaio-11.jpg", alt: "Ensaio fotográfico Yasmin — 20", className: "md:col-span-2" },
  { src: "/galeria/ensaio-12.jpg", alt: "Ensaio fotográfico Yasmin — 21", className: "md:row-span-2" },
];

const backstageClips = [
  { src: "/bastidores/01.mp4", poster: "/bastidores/01.jpg", alt: "Bastidores de ensaio Yasmin — 01" },
  { src: "/bastidores/02.mp4", poster: "/bastidores/02.jpg", alt: "Bastidores de ensaio Yasmin — 02" },
  { src: "/bastidores/03.mp4", poster: "/bastidores/03.jpg", alt: "Bastidores de ensaio Yasmin — 03" },
  { src: "/bastidores/04.mp4", poster: "/bastidores/04.jpg", alt: "Bastidores de ensaio Yasmin — 04" },
  { src: "/bastidores/05.mp4", poster: "/bastidores/05.jpg", alt: "Bastidores de ensaio Yasmin — 05" },
  { src: "/bastidores/06.mp4", poster: "/bastidores/06.jpg", alt: "Bastidores de ensaio Yasmin — 06" },
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

const testimonials: { quote: string; name: string; context?: string }[] = [
  {
    quote:
      "Eu sempre tive vergonha de tirar fotos, mas a Yasmin conseguiu deixar tudo tão leve que eu simplesmente esqueci da câmera. As fotos ficaram muito mais bonitas do que eu imaginava e, principalmente, muito mais parecidas comigo.",
    name: "Ana Clara",
    context: "ensaio individual",
  },
  {
    quote:
      "Nosso ensaio foi uma experiência muito especial. A Yasmin teve muita paciência e conseguiu registrar exatamente a nossa essência, sem deixar nada forçado. Quando recebemos as fotos, parecia que estávamos revivendo aquele dia.",
    name: "Mariana & Lucas",
    context: "ensaio de casal",
  },
  {
    quote:
      "Eu queria fazer um ensaio para marcar uma fase importante da minha vida e não poderia ter escolhido melhor fotógrafa. Cada detalhe foi pensado com muito carinho e o resultado ficou simplesmente incrível.",
    name: "Beatriz",
    context: "ensaio individual",
  },
  {
    quote:
      "O mais incrível foi que durante o ensaio parecia que estávamos apenas aproveitando o momento juntos. A Yasmin conseguiu transformar momentos simples em fotografias lindas e cheias de sentimento.",
    name: "Camila & Rafael",
    context: "pré-wedding",
  },
  {
    quote:
      "As fotos ficaram delicadas, naturais e exatamente do jeito que eu imaginava. Além do resultado, todo o atendimento foi maravilhoso. Me senti muito confortável desde o primeiro contato até a entrega das fotos.",
    name: "Juliana",
    context: "ensaio individual",
  },
  {
    quote:
      "Foi muito especial ter nossa família registrada dessa forma. As crianças ficaram à vontade e as fotos captaram pequenos momentos que provavelmente esqueceríamos com o tempo. Agora temos essas memórias para guardar para sempre.",
    name: "Família Oliveira",
    context: "ensaio de família",
  },
  {
    quote:
      "Profissionalismo, cuidado e um olhar único. Cada fotografia parece contar uma história. Com certeza faria novamente.",
    name: "Laura",
    context: "ensaio feminino",
  },
  {
    quote: "Amei demais! As fotos ficaram lindas e super naturais.",
    name: "Mariana S.",
  },
  {
    quote: "Tudo muito leve, profissional e feito com muito carinho.",
    name: "Camila A.",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main id="conteudo">
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
        <div className="about-content" data-reveal style={revealDelay(1)}><h2>Fotografar é<br /><em>prestar atenção.</em></h2><div><p>Eu sou Yasmin, fotógrafa de pessoas, encontros e pequenos detalhes. Acredito em imagens que não precisam gritar — elas ficam, porque fazem sentir.</p><a className="text-link" href="/sobre-mim">conheça meu olhar <span>→</span></a></div></div>
      </section>

      <section id="portfolio" className="portfolio section-wrap">
        <div className="section-heading" data-reveal><div><p className="eyebrow">trabalhos selecionados</p><h2>Feito de <em>instantes.</em></h2></div><span className="count">{portfolioImages.length} histórias</span></div>
        <Gallery images={portfolioImages} />
      </section>

      <section id="bastidores" className="backstage section-wrap">
        <div className="section-heading" data-reveal><div><p className="eyebrow">nos bastidores</p><h2>Por trás <em>das fotos.</em></h2></div><span className="count">{backstageClips.length} vídeos</span></div>
        <Backstage clips={backstageClips} />
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

      <section id="depoimentos" className="testimonials section-wrap">
        <div className="section-heading" data-reveal>
          <div><p className="eyebrow">quem já viveu isso</p><h2>Histórias que <em>ficaram.</em></h2></div>
          <span className="count">{testimonials.length} depoimentos</span>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((item, index) => (
            <figure className="testimonial-card" key={item.name} data-reveal style={revealDelay(index % 3, 90)}>
              <blockquote>{item.quote}</blockquote>
              <figcaption><span className="testimonial-name">{item.name}</span>{item.context && <span className="testimonial-context">{item.context}</span>}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <ContactSection />
      </main>

      <a className="wa-float" href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Falar com a Yasmin no WhatsApp"><WhatsappIcon /></a>

      <SiteFooter />
    </>
  );
}
