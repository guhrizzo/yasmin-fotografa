// Trava o scroll da página sem causar "pulo" de layout:
// remove a barra de rolagem e compensa a largura dela com padding no <html>.

export function lockScroll() {
  const doc = document.documentElement;
  if (doc.classList.contains("is-locked")) return;
  const scrollbarWidth = window.innerWidth - doc.clientWidth;
  doc.style.setProperty("--scrollbar-comp", `${scrollbarWidth}px`);
  doc.classList.add("is-locked");
}

export function unlockScroll() {
  const doc = document.documentElement;
  doc.classList.remove("is-locked");
  doc.style.removeProperty("--scrollbar-comp");
}
