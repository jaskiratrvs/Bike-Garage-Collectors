"use client";
import { useState } from "react";
import { h2, lede, sec } from "./ui";
const items = [
  ["Who can join?", "Motorcycle collectors who are identity-verified and approved personally by Ben. We admit only a few members at a time."],
  ["Who can see my garage?", "Nobody by default. You choose what to share, and only with members you have agreed to be introduced to."],
  ["Can I buy or sell bikes here?", "No. There are no listings. The club makes introductions, and any deal is made privately between members."],
  ["What does verification involve?", "A photo ID check and a short conversation with Ben. We never publish or sell your details."],
  ["When do cars, cameras and whisky open?", "After the motorcycle community is established. Members will have a say in what opens next."],
];
const ease = "ease-[cubic-bezier(.2,.8,.2,1)]";
export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className={`${sec} grid gap-12 md:grid-cols-2`}>
      <div className="grid content-start gap-4 self-start md:sticky md:top-28">
        <h2 data-rv className={`${h2} !mb-0`}>Questions, answered plainly</h2>
        <p className={lede}>Still unsure? Mention it in your application and Ben will reply himself.</p>
      </div>
      <div>
        {items.map(([q, a], i) => {
          const on = open === i;
          return (
            <div key={q} data-rv className="relative border-t border-ink/30 last:border-b">
              <span aria-hidden="true" className={`absolute -top-px left-0 h-[3px] bg-ink transition-[width] duration-700 ${ease} ${on ? "w-full" : "w-0"}`} />
              <h3>
                <button id={`q${i}`} aria-expanded={on} aria-controls={`a${i}`} onClick={() => setOpen(on ? -1 : i)}
                  className="flex min-h-11 w-full items-center justify-between gap-6 py-5 text-left font-display text-[clamp(1.35rem,3.4vw,1.85rem)] font-medium leading-tight hover:text-ink2">
                  {q}
                  <span aria-hidden="true" className="relative size-5 shrink-0">
                    <i className={`absolute top-[9px] h-0.5 w-full bg-current transition-transform duration-500 ${ease} ${on ? "rotate-180" : ""}`} />
                    <i className={`absolute top-[9px] h-0.5 w-full bg-current transition-transform duration-500 ${ease} ${on ? "rotate-0" : "rotate-90"}`} />
                  </span>
                </button>
              </h3>
              <div id={`a${i}`} role="region" aria-labelledby={`q${i}`} className={`grid transition-[grid-template-rows] duration-500 ${ease} ${on ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden"><p className={`pb-6 text-mute transition duration-500 ${on ? "translate-y-0 opacity-100 delay-100" : "-translate-y-2 opacity-0"}`}>{a}</p></div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
