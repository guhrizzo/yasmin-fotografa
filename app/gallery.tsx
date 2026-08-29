"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

type GalleryImage = {
  src: string;
  alt: string;
  className?: string;
};

const revealDelay = (index: number, step = 90) =>
  ({ "--reveal-delay": `${index * step}ms` }) as React.CSSProperties;

export default function Gallery({ images }: { images: GalleryImage[] }) {
  const [active, setActive] = useState<number | null>(null);
  const isOpen = active !== null;

  const close = useCallback(() => setActive(null), []);
  const show = useCallback(
    (dir: number) =>
      setActive((current) =>
        current === null ? current : (current + dir + images.length) % images.length,
      ),
    [images.length],
  );

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") show(1);
      if (e.key === "ArrowLeft") show(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close, show]);

  return (
    <>
      <div className="gallery">
        {images.map((image, index) => (
          <button
            type="button"
            className={`gallery-item ${image.className ?? ""}`}
            key={image.src}
            data-reveal
            style={revealDelay(index % 3)}
            onClick={() => setActive(index)}
            aria-label={`Ampliar foto: ${image.alt}`}
          >
            <Image src={image.src} alt={image.alt} fill sizes="(max-width: 768px) 100vw, 33vw" />
          </button>
        ))}
      </div>

      {isOpen && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Foto ampliada"
          onClick={close}
        >
          <button type="button" className="lightbox-close" aria-label="Fechar" onClick={close}>
            ×
          </button>
          <button
            type="button"
            className="lightbox-nav prev"
            aria-label="Foto anterior"
            onClick={(e) => {
              e.stopPropagation();
              show(-1);
            }}
          >
            ‹
          </button>
          <div className="lightbox-stage" onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[active].src}
              alt={images[active].alt}
              fill
              sizes="92vw"
              className="lightbox-image"
              priority
            />
          </div>
          <button
            type="button"
            className="lightbox-nav next"
            aria-label="Próxima foto"
            onClick={(e) => {
              e.stopPropagation();
              show(1);
            }}
          >
            ›
          </button>
          <span className="lightbox-count">
            {active + 1} / {images.length}
          </span>
        </div>
      )}
    </>
  );
}
