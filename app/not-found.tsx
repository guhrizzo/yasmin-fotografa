import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "./site-header";
import SiteFooter from "./site-footer";
import Globe from "./globe";
import { whatsappUrl, WhatsappIcon } from "./contact-section";

const revealDelay = (index: number, step = 90): CSSProperties =>
  ({ "--reveal-delay": `${index * step}ms` } as CSSProperties);

export const metadata: Metadata = {
  title: "Página não encontrada — Yasmin Fotografia",
};

export default function NotFound() {
  return (
    <>
      <SiteHeader prefix="/" />

      <main id="conteudo" className="notfound section-wrap">
        <p className="eyebrow" data-reveal>
          erro 404
        </p>

        <div className="notfound-glyph" data-reveal style={revealDelay(1)}>
          <span>4</span>
          <span className="notfound-globe">
            <Globe />
          </span>
          <span>4</span>
        </div>

        <h1 data-reveal style={revealDelay(2)}>
          Esse instante
          <br />
          <em>não foi registrado.</em>
        </h1>

        <p className="notfound-copy" data-reveal style={revealDelay(3)}>
          A página que você procura mudou de lugar ou nunca existiu. Vamos voltar para um lugar conhecido?
        </p>

        <div className="notfound-actions" data-reveal style={revealDelay(4)}>
          <Link className="contact-button" href="/">
            voltar ao início <span>→</span>
          </Link>
          <a
            className="whatsapp-button"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsappIcon /> falar no WhatsApp <span>→</span>
          </a>
        </div>
      </main>

      <SiteFooter prefix="/" />
    </>
  );
}
