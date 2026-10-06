"use client";
import { useState } from "react";
import Bike from "./Bike";
import Tilt from "./Tilt";
import { plate, cap } from "./ui";
const paints = [["Signal yellow", "#e6c300"], ["Green enamel", "#3fae86"], ["Chalk", "#e8e6df"], ["Oxblood", "#c24452"]];
export default function HeroBike() {
  const [i, setI] = useState(0);
  return (
    <Tilt max={7}>
      <figure className={`${plate} shadow-[8px_8px_0_var(--color-sig)] md:shadow-[12px_12px_0_var(--color-sig)]`} style={{ "--tank": paints[i][1] }}>
        <Bike variant={0} label="Illustration of a classic motorcycle" />
        <figcaption className={cap}>
          <b className="font-display text-xl font-medium">1969 Triumph Bonneville T120</b>
          <span className="font-mono text-xs text-chrome/70">Frame 4471 / {paints[i][0]} / private</span>
          <div className="mt-3 flex gap-2" role="radiogroup" aria-label="Choose a paint colour">
            {paints.map(([n, c], k) => (
              <button key={n} role="radio" aria-checked={i === k} aria-label={n} style={{ background: c }} onClick={() => setI(k)}
                className="size-10 rounded-full outline-1 outline-offset-2 outline-chrome/50 transition aria-checked:scale-110 aria-checked:outline-2 aria-checked:outline-chrome" />
            ))}
          </div>
        </figcaption>
      </figure>
    </Tilt>
  );
}
