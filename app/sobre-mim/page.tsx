import type { CSSProperties } from "react";
import type { Metadata } from "next";
import SiteHeader from "../site-header";
import SiteFooter from "../site-footer";
import ContactSection, { whatsappUrl, WhatsappIcon } from "../contact-section";

const revealDelay = (index: number, step = 90): CSSProperties =>
  ({ "--reveal-delay": `${index * step}ms` } as CSSProperties);

export const metadata: Metadata = {
  title: "Sobre mim — Yasmin Torquato",
  description:
    "Yasmin Torquato, fotógrafa e storymaker. Transformo momentos em imagens atemporais, valorizando a essência de cada história.",
};

export default function SobreMim() {
  return (
    <>
      <SiteHeader prefix="/" />

      <main id="conteudo">
        <section id="inicio" className="manifesto section-wrap">
          <p className="eyebrow" data-reveal>sobre mim</p>
          <h1 data-reveal style={revealDelay(1)}>
            Eu sou Yasmin Torquato,
            <br />
            <em>fotógrafa e storymaker.</em>
          </h1>
          <div className="manifesto-text">
            <p data-reveal style={revealDelay(2)}>
              Através da fotografia, transformo momentos em imagens atemporais, valorizando a essência, a beleza e a
              singularidade de cada história.
            </p>
            <p data-reveal style={revealDelay(3)}>
              Meu olhar une sensibilidade, direção e estética, criando registros sofisticados e autênticos que vão além do
              tempo.
            </p>
            <p className="manifesto-closing" data-reveal style={revealDelay(4)}>
              <em>Mais do que fotografar, eu eternizo experiências.</em>
            </p>
          </div>
        </section>

        <ContactSection />
      </main>

      <a
        className="wa-float"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a Yasmin no WhatsApp"
      >
        <WhatsappIcon />
      </a>

      <SiteFooter prefix="/" />
    </>
  );
}
