"use client";
import { useEffect, useRef, useState } from "react";
const cols = [
  ["The club", [["Our story", "#join"], ["Introductions", "#introductions"], ["Membership", "#join"], ["FAQ", "#faq"]]],
  ["Collections", [["Motorcycles, open now", "#garage"], ["Cars, coming next"], ["Cameras, coming next"], ["Whisky and vintage pens, later"]]],
  ["Trust", [["How we verify members", "#faq"], ["Privacy policy", "#"], ["Terms of membership", "#"], ["Code of conduct", "#"]]],
];
export default function Footer() {
  const foot = useRef(null), spacer = useRef(null), word = useRef(null);
  const [fixed, setFixed] = useState(false);
  useEffect(() => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf;
    const update = () => {
      const h = foot.current.offsetHeight, vh = innerHeight;
      const canFix = !reduce && h <= vh * 0.98;
      setFixed(canFix);
      spacer.current.style.height = canFix ? h + "px" : "0px";
      const top = (canFix ? spacer.current : foot.current).getBoundingClientRect().top;
      const p = Math.min(1, Math.max(0, (vh - top) / h));
      word.current.style.transform = reduce ? "none" : `translateY(${(1 - p) * 60}%)`;
    };
    const on = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(update); };
    update();
    addEventListener("scroll", on, { passive: true });
    addEventListener("resize", on);
    return () => { removeEventListener("scroll", on); removeEventListener("resize", on); cancelAnimationFrame(raf); };
  }, []);
  return (
    <>
      <div ref={spacer} aria-hidden="true" />
      <footer ref={foot} className={`z-0 overflow-hidden bg-ink text-chrome ${fixed ? "fixed inset-x-0 bottom-0" : "relative"}`}>
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 px-5 pt-12 pb-8 text-center md:grid-cols-3 md:gap-10 md:pt-16">
          <div className="col-span-full mb-2 grid justify-items-center gap-4">
            <p className="max-w-[24ch] font-display text-3xl font-semibold leading-tight tracking-tight">A private club for people who keep motorcycles for their history.</p>
            <p className="text-chrome/70">Write to Ben at <a className="underline underline-offset-4 hover:text-sig" href="mailto:ben@garagesociety.example">ben@garagesociety.example</a></p>
            <a href="#join" className="btn hover:!bg-sig hover:!text-ink">Request an invitation</a>
          </div>
          {cols.map(([t, ls], i) => (
            <nav key={t} aria-label={t} className={i === 2 ? "col-span-full md:col-span-1" : ""}>
              <h2 className="mb-3 font-mono text-sm text-sig">{t}</h2>
              <ul className="grid justify-items-center gap-2 text-chrome/85">
                {ls.map(([l, h]) => <li key={l}>{h ? <a className="hover:text-sig" href={h}>{l}</a> : <span className="text-chrome/50">{l}</span>}</li>)}
              </ul>
            </nav>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 border-t border-chrome/20 px-5 py-5 text-center text-sm text-chrome/70">
          <span>© 2026 The Garage Society. Every member verified.</span>
          <span>The club facilitates. It does not interfere.</span>
          <a href="#top" className="hover:text-sig">Back to top ↑</a>
        </div>
        <div className="flex justify-center overflow-hidden pt-4 leading-[.8]" aria-hidden="true">
          <span ref={word} className="block pr-[.06em] font-display text-[clamp(2.4rem,11.5vw,12rem)] font-semibold tracking-[-0.05em] text-ink2 will-change-transform">Garage Society</span>
        </div>
      </footer>
    </>
  );
}
