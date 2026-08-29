import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import Preloader from "./preloader";
import SmoothScroll from "./smooth-scroll";
import ScrollReveal from "./scroll-reveal";
import AccessibilityBar from "./accessibility-bar";

// Aplica as preferências de acessibilidade salvas antes da primeira pintura,
// para não haver "flash" ao recarregar com alto contraste / zoom ativos.
// Mantido em sincronia com app/accessibility-bar.tsx.
const A11Y_INIT = `(function(){try{var p=JSON.parse(localStorage.getItem('a11y:prefs')||'{}');var s=[0.9,1,1.15,1.3,1.45];var z=s[p.zoomIndex==null?1:p.zoomIndex]||1;var r=document.documentElement;if(z!==1)r.style.zoom=z;if(p.contrast)r.setAttribute('data-a11y-contrast','');if(p.underline)r.setAttribute('data-a11y-underline','');if(p.reduceMotion)r.setAttribute('data-a11y-reduce-motion','');}catch(e){}})();`;

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const display = Playfair_Display({ variable: "--font-display", subsets: ["latin"], style: ["normal", "italic"] });

export const metadata: Metadata = {
  title: "Yasmin Fotografia — retratos com presença",
  description: "Fotografia de retratos, celebrações íntimas e histórias contadas com luz e cuidado.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} ${display.variable} h-full antialiased`}>
      <body className="min-h-full">
        <script dangerouslySetInnerHTML={{ __html: A11Y_INIT }} />
        <a className="skip-link" href="#conteudo">
          Pular para o conteúdo
        </a>
        <Preloader />
        <SmoothScroll />
        <ScrollReveal />
        {children}
        <AccessibilityBar />
      </body>
    </html>
  );
}
