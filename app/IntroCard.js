"use client";
import { useState } from "react";
const card = "grid gap-4 rounded bg-chrome p-7 text-ink shadow-[8px_8px_0_var(--color-sig)] md:shadow-[10px_10px_0_var(--color-sig)]";
const title = "font-display text-2xl font-semibold tracking-tight";
export default function IntroCard() {
  const [s, setS] = useState("idle");
  if (s === "no") return (
    <aside data-rv className={card} aria-live="polite">
      <p className={title}>Maybe later</p><p>Nothing was sent. Marcus is never told you passed.</p>
      <div><button className="btn" onClick={() => setS("idle")}>Undo</button></div>
    </aside>
  );
  if (s === "yes") return (
    <aside data-rv className={`${card} chat`} aria-live="polite">
      <p className={title}>You are both in. Say hello.</p>
      <div className="bub">I hear you keep a Bonneville T120.</div>
      <div className="bub r">Original paint, second owner. I would love to see your 750 SS.</div>
      <div className="bub typing"><i /><i /><i /></div>
      <div><button className="btn" onClick={() => setS("idle")}>Replay</button></div>
    </aside>
  );
  return (
    <aside data-rv className={card} aria-label="Example introduction">
      <p className={title}>Suggested introduction</p>
      <p>Marcus owns a 1974 Ducati 750 SS and is looking for a Bonneville T120. You own a T120 and want a 750 SS.</p>
      <div className="flex flex-wrap gap-3">
        <button className="btn" onClick={() => setS("yes")}>Accept</button>
        <button className="btn opacity-70" onClick={() => setS("no")}>Not now</button>
      </div>
    </aside>
  );
}
