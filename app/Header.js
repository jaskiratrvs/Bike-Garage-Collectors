"use client";
import { useState } from "react";
const links = [["The garage", "#garage"], ["Introductions", "#introductions"], ["FAQ", "#faq"], ["Membership", "#join"]];
export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="gutter sticky top-0 z-30 flex items-center justify-between border-b border-ink/20 bg-ground py-3.5 after:absolute after:-bottom-px after:left-0 after:h-[3px] after:w-[calc(var(--p,0)*100%)] after:bg-ink">
      <a href="#top" className="font-display text-xl font-semibold tracking-tight">The Garage Society</a>
      <button className="min-h-11 rounded border-[1.5px] border-ink px-4 md:hidden" aria-expanded={open} aria-controls="nav" onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}</button>
      <nav id="nav" aria-label="Main" className={`gutter absolute inset-x-0 top-full flex-col items-start gap-4 border-b border-ink/20 bg-ground py-5 text-[.95rem] md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0 ${open ? "flex" : "hidden"}`}>
        {links.map(([t, h]) => <a key={h} href={h} className="hover:underline underline-offset-4" onClick={() => setOpen(false)}>{t}</a>)}
        <a href="#join" className="btn btn-solid !py-2" onClick={() => setOpen(false)}>Request an invitation</a>
      </nav>
    </header>
  );
}
