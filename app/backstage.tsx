"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { lockScroll, unlockScroll } from "./scroll-lock";

type Clip = { src: string; poster: string; alt: string };

const revealDelay = (index: number, step = 90) =>
  ({ "--reveal-delay": `${index * step}ms` }) as React.CSSProperties;

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
    <path d="M8 5v14l11-7z" />
  </svg>
);

export default function Backstage({ clips }: { clips: Clip[] }) {
  const [active, setActive] = useState<number | null>(null);
  const isOpen = active !== null;

  const close = useCallback(() => setActive(null), []);
  const show = useCallback(
    (dir: number) =>
      setActive((current) =>
        current === null ? current : (current + dir + clips.length) % clips.length,
      ),
    [clips.length],
  );

  useEffect(() => {
    if (!isOpen) return;
    lockScroll();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") show(1);
      if (e.key === "ArrowLeft") show(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      unlockScroll();
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close, show]);

  return (
    <>
      <div className="backstage-grid">
        {clips.map((clip, index) => (
          <button
            type="button"
            className="backstage-item"
            key={clip.src}
            data-reveal
            style={revealDelay(index % 6)}
            onClick={() => setActive(index)}
            aria-label={`Assistir vídeo: ${clip.alt}`}
          >
            <Image src={clip.poster} alt={clip.alt} fill sizes="(max-width: 700px) 33vw, 16vw" />
            <span className="backstage-play" aria-hidden="true">
              <PlayIcon />
            </span>
          </button>
        ))}
      </div>

      {isOpen && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Vídeo de bastidores"
          onClick={close}
        >
          <button type="button" className="lightbox-close" aria-label="Fechar" onClick={close}>
            ×
          </button>
          <button
            type="button"
            className="lightbox-nav prev"
            aria-label="Vídeo anterior"
            onClick={(e) => {
              e.stopPropagation();
              show(-1);
            }}
          >
            ‹
          </button>
          <div
            className="lightbox-stage backstage-stage"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              key={clips[active].src}
              src={clips[active].src}
              poster={clips[active].poster}
              className="backstage-video"
              controls
              autoPlay
              playsInline
              preload="auto"
            />
          </div>
          <button
            type="button"
            className="lightbox-nav next"
            aria-label="Próximo vídeo"
            onClick={(e) => {
              e.stopPropagation();
              show(1);
            }}
          >
            ›
          </button>
          <span className="lightbox-count">
            {active + 1} / {clips.length}
          </span>
        </div>
      )}
    </>
  );
}
