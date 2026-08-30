import Image from "next/image";
import { whatsappUrl, instagramUrl, InstagramIcon, WhatsappIcon } from "./contact-section";

export default function SiteFooter({ prefix = "" }: { prefix?: string }) {
  return (
    <footer data-reveal>
      <a className="logo-lockup" href={`${prefix}#inicio`} aria-label="Yasmin Fotografia, início">
        <Image src="/logo.png" alt="Logo Yasmin Fotografia" width={150} height={150} />
      </a>
      <p>© {new Date().getFullYear()} Yasmin Fotografia</p>
      <span className="footer-social">
        <a href={instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram da Yasmin"><InstagramIcon /></a>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp da Yasmin"><WhatsappIcon /></a>
      </span>
      <a className="credit" href="https://wa.me/5514996472492?text=Ol%C3%A1%20vim%20pelo%20site%20da%20yasmin..." target="_blank" rel="noopener noreferrer">Desenvolvido por Gustavo Rizzo</a>
      <a href={`${prefix}#inicio`}>voltar ao início ↑</a>
    </footer>
  );
}
