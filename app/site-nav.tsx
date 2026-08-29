"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#sobre", label: "sobre" },
  { href: "#portfolio", label: "portfólio" },
  { href: "#precos", label: "investimento" },
  { href: "#depoimentos", label: "depoimentos" },
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
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
          <a key={link.href} href={link.href} onClick={close}>
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
        aria-hidden={!open}
        tabIndex={-1}
        onClick={close}
      />
    </>
  );
}
