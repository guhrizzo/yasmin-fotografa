import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const display = Playfair_Display({ variable: "--font-display", subsets: ["latin"], style: ["normal", "italic"] });

export const metadata: Metadata = {
  title: "Yasmin Fotografia — retratos com presença",
  description: "Fotografia de retratos, celebrações íntimas e histórias contadas com luz e cuidado.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} ${display.variable} h-full antialiased`}><body className="min-h-full">{children}</body></html>;
}
