import type { CSSProperties } from "react";

export const whatsappUrl =
  "https://wa.me/5514981184847?text=" +
  encodeURIComponent("Olá, Yasmin! Vi seu site e gostaria de conversar sobre um ensaio fotográfico.");

export const instagramUrl = "https://www.instagram.com/_byyasmedia/";

export const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4.2" />
    <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);

export const WhatsappIcon = () => (
  <svg viewBox="0 0 32 32" width="26" height="26" fill="currentColor" aria-hidden="true">
    <path d="M16.003 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.256.59 4.46 1.712 6.403L3.2 28.8l6.57-1.723a12.74 12.74 0 0 0 6.233 1.588h.005c7.06 0 12.8-5.74 12.8-12.8s-5.74-12.8-12.805-12.665zm0 23.06h-.004a10.63 10.63 0 0 1-5.42-1.485l-.39-.23-4.03 1.057 1.076-3.93-.253-.404a10.6 10.6 0 0 1-1.626-5.668c0-5.867 4.774-10.64 10.647-10.64 2.843 0 5.514 1.108 7.523 3.12a10.57 10.57 0 0 1 3.116 7.526c0 5.867-4.773 10.64-10.646 10.64zm5.837-7.968c-.32-.16-1.892-.933-2.185-1.04-.293-.107-.507-.16-.72.16-.213.32-.826 1.04-1.013 1.253-.187.213-.373.24-.693.08-.32-.16-1.35-.498-2.573-1.588-.95-.848-1.593-1.895-1.78-2.215-.187-.32-.02-.493.14-.652.144-.143.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.735-.986-2.375-.26-.624-.524-.54-.72-.55l-.613-.01c-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.667 0 1.573 1.146 3.093 1.306 3.307.16.213 2.253 3.44 5.46 4.824.763.33 1.36.527 1.824.674.767.244 1.464.21 2.016.127.615-.092 1.892-.773 2.16-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373z" />
  </svg>
);

// Seção de contato reutilizada no fim da home e da página "sobre mim".
export default function ContactSection() {
  return (
    <section id="contato" className="contact section-wrap">
      <div data-reveal>
        <p className="eyebrow">vamos criar algo bonito?</p>
        <h2>Me conta a sua<br /><em>história.</em></h2>
        <p className="contact-copy">Me chama no WhatsApp para verificar a agenda, tirar dúvidas e reservar a data do seu ensaio.</p>
      </div>
      <div className="contact-actions" data-reveal style={{ "--reveal-delay": "70ms" } as CSSProperties}>
        <a className="whatsapp-button" href={whatsappUrl} target="_blank" rel="noopener noreferrer"><WhatsappIcon /> falar no WhatsApp <span>→</span></a>
        <a className="contact-button" href="mailto:torquatoyasmin7@gmail.com">torquatoyasmin7@gmail.com <span>→</span></a>
      </div>
    </section>
  );
}
