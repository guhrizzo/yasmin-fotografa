"use client";

import { useEffect, useState } from "react";
import { lockScroll, unlockScroll } from "./scroll-lock";

const MIN_DURATION = 1600;

export default function Preloader() {
  const [leaving, setLeaving] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    lockScroll();
    const start = Date.now();

    const finish = () => {
      const remaining = Math.max(0, MIN_DURATION - (Date.now() - start));
      window.setTimeout(() => setLeaving(true), remaining);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
    }

    return () => window.removeEventListener("load", finish);
  }, []);

  useEffect(() => {
    if (!leaving) return;
    unlockScroll();
    const t = window.setTimeout(() => setGone(true), 900);
    return () => window.clearTimeout(t);
  }, [leaving]);

  if (gone) return null;

  return (
    <div className={`preloader${leaving ? " preloader--leaving" : ""}`} aria-hidden="true">
      <div className="preloader-inner">
        <span className="preloader-mark">yasmin</span>
        <span className="preloader-sub">fotógrafa</span>
        <span className="preloader-bar">
          <span />
        </span>
      </div>
    </div>
  );
}
