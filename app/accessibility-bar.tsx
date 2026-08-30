"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// v2: Libras passou a vir ativada por padrão — a chave nova ignora
// preferências antigas salvas com a Libras desligada.
const STORAGE_KEY = "a11y:prefs:v2";
const ZOOM_STEPS = [0.9, 1, 1.15, 1.3, 1.45];
const DEFAULT_ZOOM_INDEX = 1;

// Mantido em sincronia com o script inline em app/layout.tsx (A11Y_INIT).

type Prefs = {
  zoomIndex: number;
  contrast: boolean;
  underline: boolean;
  reduceMotion: boolean;
  libras: boolean;
};

const DEFAULT_PREFS: Prefs = {
  zoomIndex: DEFAULT_ZOOM_INDEX,
  contrast: false,
  underline: false,
  reduceMotion: false,
  libras: true,
};

function readPrefs(): Prefs {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) return { ...DEFAULT_PREFS, ...(JSON.parse(raw) as Partial<Prefs>) };
  } catch {
    /* localStorage indisponível */
  }
  return DEFAULT_PREFS;
}

function applyPrefs(p: Prefs) {
  const root = document.documentElement;
  const zoom = ZOOM_STEPS[p.zoomIndex] ?? 1;
  root.style.zoom = zoom === 1 ? "" : String(zoom);
  root.toggleAttribute("data-a11y-contrast", p.contrast);
  root.toggleAttribute("data-a11y-underline", p.underline);
  root.toggleAttribute("data-a11y-reduce-motion", p.reduceMotion);
}

// O plugin do VLibras cria elementos próprios direto no <body> (fora do [vw]):
// #vlibras-access-wrapper (botão, em Shadow DOM) e #vlibras-app-root (painel).
// Todos precisam ser escondidos ao desativar.
const VLIBRAS_SELECTOR = "[vw], #vlibras-access-wrapper, #vlibras-app-root";

let vlibrasInjected = false;
let vlibrasDesired = false;
let vlibrasObserver: MutationObserver | null = null;

function syncVLibrasVisibility() {
  document.querySelectorAll<HTMLElement>(VLIBRAS_SELECTOR).forEach((el) => {
    if (vlibrasDesired) el.style.removeProperty("display");
    else el.style.setProperty("display", "none", "important");
  });
}

function enableVLibras() {
  vlibrasDesired = true;
  document.body.classList.add("vlibras-on");
  syncVLibrasVisibility();
  if (vlibrasInjected) return;
  vlibrasInjected = true;

  const wrapper = document.createElement("div");
  wrapper.setAttribute("vw", "");
  wrapper.className = "enabled";
  wrapper.innerHTML =
    '<div vw-access-button class="active"></div>' +
    '<div vw-plugin-wrapper><div class="vw-plugin-top-wrapper"></div></div>';
  document.body.appendChild(wrapper);

  // reaplica a visibilidade conforme o plugin vai criando seus elementos
  vlibrasObserver = new MutationObserver(syncVLibrasVisibility);
  vlibrasObserver.observe(document.body, { childList: true });

  const script = document.createElement("script");
  script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
  script.async = true;
  script.onload = () => {
    const w = window as unknown as { VLibras?: { Widget: new (url: string) => void } };
    if (w.VLibras) new w.VLibras.Widget("https://vlibras.gov.br/app");
    let ticks = 0;
    const timer = window.setInterval(() => {
      syncVLibrasVisibility();
      if (++ticks > 20) window.clearInterval(timer);
    }, 150);
  };
  document.body.appendChild(script);
}

function disableVLibras() {
  vlibrasDesired = false;
  document.body.classList.remove("vlibras-on");
  syncVLibrasVisibility();
}

const AccessIcon = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="3.8" r="1.7" fill="currentColor" stroke="none" />
    <path d="M4.5 8.4c2.4 1 5 1.4 7.5 1.4s5.1-.4 7.5-1.4" />
    <path d="M12 9.6V15m0 0-2.9 5.6M12 15l2.9 5.6" />
  </svg>
);

export default function AccessibilityBar() {
  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState<Prefs>(readPrefs);
  const panelRef = useRef<HTMLDivElement>(null);
  const fabRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (prefs.libras) enableVLibras();
    // aplica uma vez na montagem; execuções seguintes ficam no efeito abaixo
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    applyPrefs(prefs);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    } catch {
      /* localStorage indisponível */
    }
  }, [prefs]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        fabRef.current?.focus();
      }
    };
    const onPointer = (e: MouseEvent) => {
      const t = e.target as Node;
      if (!panelRef.current?.contains(t) && !fabRef.current?.contains(t)) {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onPointer);
    };
  }, [open]);

  const toggle = useCallback((key: "contrast" | "underline" | "reduceMotion" | "libras") => {
    setPrefs((prev) => {
      const value = !prev[key];
      if (key === "libras") (value ? enableVLibras : disableVLibras)();
      return { ...prev, [key]: value };
    });
  }, []);

  const changeZoom = (dir: number) =>
    setPrefs((prev) => ({
      ...prev,
      zoomIndex: Math.min(ZOOM_STEPS.length - 1, Math.max(0, prev.zoomIndex + dir)),
    }));

  const reset = () => {
    (DEFAULT_PREFS.libras ? enableVLibras : disableVLibras)();
    setPrefs(DEFAULT_PREFS);
  };

  const zoomPct = Math.round((ZOOM_STEPS[prefs.zoomIndex] ?? 1) * 100);
  const state = (on: boolean) => (on ? "Ativado" : "Desativado");

  return (
    <>
      <button
        ref={fabRef}
        type="button"
        className="a11y-fab"
        aria-expanded={open}
        aria-controls="a11y-panel"
        aria-label="Opções de acessibilidade"
        onClick={() => setOpen((v) => !v)}
      >
        <AccessIcon />
      </button>

      {open && (
        <div
          ref={panelRef}
          id="a11y-panel"
          className="a11y-panel"
          role="dialog"
          aria-label="Acessibilidade"
        >
          <h2>Acessibilidade</h2>

          <div className="a11y-row">
            <span>Tamanho do texto</span>
            <span className="a11y-steppers">
              <button
                type="button"
                className="a11y-btn"
                onClick={() => changeZoom(-1)}
                disabled={prefs.zoomIndex === 0}
                aria-label="Diminuir tamanho do texto"
              >
                A−
              </button>
              <span className="a11y-state" aria-live="polite">
                {zoomPct}%
              </span>
              <button
                type="button"
                className="a11y-btn"
                onClick={() => changeZoom(1)}
                disabled={prefs.zoomIndex === ZOOM_STEPS.length - 1}
                aria-label="Aumentar tamanho do texto"
              >
                A+
              </button>
            </span>
          </div>

          <button
            type="button"
            className="a11y-item"
            aria-pressed={prefs.contrast}
            onClick={() => toggle("contrast")}
          >
            <span>Alto contraste</span>
            <span className="a11y-state">{state(prefs.contrast)}</span>
          </button>

          <button
            type="button"
            className="a11y-item"
            aria-pressed={prefs.underline}
            onClick={() => toggle("underline")}
          >
            <span>Sublinhar links</span>
            <span className="a11y-state">{state(prefs.underline)}</span>
          </button>

          <button
            type="button"
            className="a11y-item"
            aria-pressed={prefs.reduceMotion}
            onClick={() => toggle("reduceMotion")}
          >
            <span>Reduzir animações</span>
            <span className="a11y-state">{state(prefs.reduceMotion)}</span>
          </button>

          <button
            type="button"
            className="a11y-item"
            aria-pressed={prefs.libras}
            onClick={() => toggle("libras")}
          >
            <span>Tradução em Libras</span>
            <span className="a11y-state">{state(prefs.libras)}</span>
          </button>

          <button type="button" className="a11y-btn a11y-reset" onClick={reset}>
            Restaurar padrões
          </button>
        </div>
      )}
    </>
  );
}
