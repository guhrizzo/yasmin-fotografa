"use client";

import { useEffect, useState } from "react";
import { lockScroll, unlockScroll } from "./scroll-lock";

const links = [
  { href: "/sobre-mim", label: "sobre mim" },
  { href: "#portfolio", label: "portfólio" },
  { href: "#bastidores", label: "bastidores" },
  { href: "#precos", label: "investimento" },
  { href: "#depoimentos", label: "depoimentos" },
];

export default function SiteNav({ prefix = "" }: { prefix?: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    lockScroll();
    return () => unlockScroll();
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const close = () => setOpen(false);

  return (
    <>
      <button
        type="button"
        className={`nav-toggle${open ? " is-open" : ""}`}
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
        aria-controls="site-nav"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="nav-toggle-bars" aria-hidden="true" />
      </button>

      <nav
        id="site-nav"
        aria-label="Navegação principal"
        className={`site-nav${open ? " is-open" : ""}`}
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href.startsWith("#") ? `${prefix}${link.href}` : link.href}
            onClick={close}
          >
            {link.label}
          </a>
        ))}
        <a className="site-nav-cta" href="#contato" onClick={close}>
          vamos conversar <span>→</span>
        </a>
      </nav>

      <button
        type="button"
        className={`nav-overlay${open ? " is-open" : ""}`}
        aria-label="Fechar menu"
        aria-hidden={!open}
        tabIndex={-1}
        onClick={close}
      />
    </>
  );
}
