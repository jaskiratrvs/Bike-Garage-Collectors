"use client";
import { useRef, useState } from "react";
import Bike from "./Bike";
import { h2, plate, cap } from "./ui";
const stories = [
  ["Lena, Berlin", "1974 Ducati 750 SS", "The logbook sat in a drawer for years. Here it finally has a home, and someone who wants to read it."],
  ["Arjun, Leicester", "1969 Triumph Bonneville T120", "It felt like being introduced by a friend. No pitch, no price, just an evening talking carburettors."],
  ["Tomás, Lisbon", "1957 Moto Guzzi Falcone", "Every bike I own is in one place with its frame number. My wishlist found a match within a month."],
  ["Ruth, Maine", "1952 Vincent Black Shadow", "The club is small enough that I recognise every name. That is the whole point."],
];
const arrow = "arrows size-12 rounded-full border-[1.5px] border-ink text-xl transition hover:bg-ink hover:text-chrome";
export default function Slider() {
  const track = useRef(null);
  const [pct, setPct] = useState(0);
  const go = (d) => { const t = track.current; t.scrollBy({ left: d * (t.querySelector("li").offsetWidth + 24), behavior: "smooth" }); };
  const onScroll = (e) => { const t = e.currentTarget; setPct(t.scrollLeft / Math.max(1, t.scrollWidth - t.clientWidth)); };
  return (
    <section className="bg-chrome py-14 md:py-24" aria-labelledby="st">
      <div className="gutter mb-10 flex items-end justify-between gap-4">
        <h2 id="st" data-rv className={`${h2} !mb-0 max-w-[14ch]`}>Notes from members' garages</h2>
        <div className="arrows flex gap-2.5">
          <button className={arrow} onClick={() => go(-1)} aria-label="Previous story">←</button>
          <button className={arrow} onClick={() => go(1)} aria-label="Next story">→</button>
        </div>
      </div>
      <ul ref={track} onScroll={onScroll} tabIndex={0} aria-label="Member stories, scroll sideways"
        className="track gutter flex snap-x snap-mandatory scroll-pl-5 gap-6 overflow-x-auto pb-4 [scrollbar-width:none] md:scroll-pl-16 [&::-webkit-scrollbar]:hidden">
        {stories.map(([who, bike, q], i) => (
          <li key={who} className="shrink-0 basis-[86%] snap-start md:basis-[440px]">
            <figure data-rv className={`${plate} flex h-full flex-col`}>
              <Bike variant={i} label={bike} />
              <blockquote className="border-t border-chrome/25 p-5 font-display text-2xl leading-tight">{q}</blockquote>
              <figcaption className={`${cap} mt-auto !border-0`}><b className="font-display text-lg font-medium">{who}</b><span className="font-mono text-xs text-chrome/70">{bike}</span></figcaption>
            </figure>
          </li>
        ))}
      </ul>
      <div className="mx-5 mt-6 h-[3px] bg-ink/15 md:mx-16" aria-hidden="true"><i className="block h-full bg-ink transition-[width]" style={{ width: `${25 + pct * 75}%` }} /></div>
    </section>
  );
}
