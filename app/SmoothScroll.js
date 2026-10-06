"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export default function SmoothScroll() {
  useEffect(() => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = matchMedia("(pointer: fine)").matches;
    const root = document.documentElement;
    const lenis = reduce ? null : new Lenis({ autoRaf: true, lerp: 0.085 });

    // scroll progress bar + wheels that spin as you scroll
    const onScroll = () => {
      const max = root.scrollHeight - innerHeight;
      root.style.setProperty("--p", max > 0 ? scrollY / max : 0);
      root.style.setProperty("--spin", `${scrollY * 0.45}deg`);
    };
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });

    // smooth anchor links
    const onClick = (e) => {
      const a = e.target.closest?.('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href");
      if (id === "#") return e.preventDefault();
      const el = id === "#top" ? 0 : document.querySelector(id);
      if (el === null) return;
      e.preventDefault();
      lenis ? lenis.scrollTo(el, { offset: -70, duration: 1.4 }) : (el === 0 ? scrollTo(0, 0) : el.scrollIntoView());
    };
    document.addEventListener("click", onClick);

    // reveal on scroll
    const targets = [...document.querySelectorAll("[data-rv]")];
    targets.forEach((t) => t.classList.add("rv"));
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); setTimeout(() => e.target.classList.remove("rv", "in"), 1300); }
    }), { threshold: 0.15 });
    targets.forEach((t) => io.observe(t));

    // magnetic buttons (mouse only)
    let cur;
    const move = (e) => {
      const el = e.target.closest?.(".btn, .arrows button");
      if (cur && cur !== el) { cur.style.transform = ""; cur = null; }
      if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.28}px, ${(e.clientY - r.top - r.height / 2) * 0.4}px)`;
      cur = el;
    };
    if (fine && !reduce) document.addEventListener("pointermove", move);

    return () => {
      lenis?.destroy(); io.disconnect();
      removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onClick);
      document.removeEventListener("pointermove", move);
    };
  }, []);
  return null;
}
