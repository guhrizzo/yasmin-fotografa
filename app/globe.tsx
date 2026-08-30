"use client";

import createGlobe, { type COBEOptions } from "cobe";
import { useCallback, useEffect, useRef } from "react";

// Paleta do site (creme/marrom) — cores em RGB 0–1 para o cobe.
const GLOBE_CONFIG: COBEOptions = {
  width: 600,
  height: 600,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 1.1,
  mapSamples: 16000,
  mapBrightness: 1.35,
  baseColor: [0.87, 0.79, 0.62],
  markerColor: [141 / 255, 94 / 255, 61 / 255],
  glowColor: [0.95, 0.9, 0.78],
  markers: [
    { location: [-23.5505, -46.6333], size: 0.1 }, // São Paulo
    { location: [-22.9068, -43.1729], size: 0.06 }, // Rio de Janeiro
    { location: [40.7128, -74.006], size: 0.06 }, // Nova York
    { location: [48.8566, 2.3522], size: 0.05 }, // Paris
  ],
};

export interface GlobeProps {
  className?: string;
  config?: COBEOptions;
}

export function Globe({ className, config = GLOBE_CONFIG }: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phiRef = useRef(0);
  const widthRef = useRef(0);

  const onRender = useCallback((state: Record<string, number>) => {
    // Respeita "Reduzir animações" da barra de acessibilidade (igual scroll-reveal).
    if (!document.documentElement.hasAttribute("data-a11y-reduce-motion")) {
      phiRef.current += 0.005;
    }
    state.phi = phiRef.current;
    state.width = widthRef.current * 2;
    state.height = widthRef.current * 2;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      widthRef.current = canvas.offsetWidth;
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const globe = createGlobe(canvas, {
      ...config,
      width: widthRef.current * 2,
      height: widthRef.current * 2,
      onRender,
    });

    return () => {
      globe.destroy();
      window.removeEventListener("resize", handleResize);
    };
  }, [config, onRender]);

  return (
    <div className={["relative aspect-square w-full", className].filter(Boolean).join(" ")}>
      <canvas ref={canvasRef} className="size-full [contain:layout_paint_size]" />
    </div>
  );
}

export default Globe;
