import Image from "next/image";
import SiteNav from "./site-nav";

// prefix vazio na home (âncoras locais) e "/" nas páginas à parte,
// para os links da navbar voltarem às seções da home.
export default function SiteHeader({ prefix = "" }: { prefix?: string }) {
  return (
    <header className="site-header">
      <a className="logo-lockup" href={`${prefix}#inicio`} aria-label="Yasmin Fotografia, início">
        <Image src="/logo.png" alt="Logo Yasmin Fotografia" width={150} height={150} priority />
      </a>
      <SiteNav prefix={prefix} />
      <a className="header-cta" href="#contato">vamos conversar <span>→</span></a>
    </header>
  );
}
