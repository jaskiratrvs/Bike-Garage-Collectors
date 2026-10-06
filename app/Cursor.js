"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const dot = useRef(null), ring = useRef(null), label = useRef(null);
  useEffect(() => {
    if (!matchMedia("(pointer: fine) and (hover: hover)").matches || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const root = document.documentElement;
    root.classList.add("has-cursor");
    let x = 0, y = 0, rx = 0, ry = 0, raf;
    const move = (e) => {
      x = e.clientX; y = e.clientY;
      dot.current.style.transform = `translate(${x}px,${y}px)`;
      const t = e.target.closest?.("input,textarea,label,.track,.tilt,a,button,[role=radio]");
      const mode = !t ? "" : t.matches("input,textarea,label") ? "text" : t.matches(".track") ? "scroll" : t.matches(".tilt") ? "look" : "link";
      ring.current.dataset.mode = mode;
      label.current.textContent = mode === "scroll" ? "Scroll" : mode === "look" ? "Look" : "";
      dot.current.dataset.on = ring.current.dataset.on = "1";
    };
    const out = () => { dot.current.dataset.on = ring.current.dataset.on = ""; };
    const tick = () => {
      rx += (x - rx) * 0.16; ry += (y - ry) * 0.16;
      ring.current.style.transform = `translate(${rx}px,${ry}px)`;
      raf = requestAnimationFrame(tick);
    };
    tick();
    addEventListener("pointermove", move);
    document.documentElement.addEventListener("pointerleave", out);
    return () => {
      cancelAnimationFrame(raf); root.classList.remove("has-cursor");
      removeEventListener("pointermove", move);
      root.removeEventListener("pointerleave", out);
    };
  }, []);
  return (
    <>
      <div className="cur-dot" ref={dot} aria-hidden="true" />
      <div className="cur-ring" ref={ring} aria-hidden="true"><span /><em ref={label} /></div>
    </>
  );
}
