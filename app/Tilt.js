"use client";
import { useRef } from "react";
export default function Tilt({ children, max = 10 }) {
  const ref = useRef(null);
  const move = (e) => {
    const el = ref.current, r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
    el.style.transform = `perspective(900px) rotateY(${(x - 0.5) * max * 2}deg) rotateX(${(0.5 - y) * max * 2}deg) scale(1.02)`;
    el.style.setProperty("--gx", `${x * 100}%`);
    el.style.setProperty("--gy", `${y * 100}%`);
  };
  const leave = () => { ref.current.style.transform = ""; };
  return <div data-rv className="tilt" ref={ref} onPointerMove={move} onPointerLeave={leave}>{children}</div>;
}
