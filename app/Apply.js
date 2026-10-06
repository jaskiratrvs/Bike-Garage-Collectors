"use client";
import { useState } from "react";
const field = "w-full rounded border-[1.5px] border-ink bg-chrome p-3";
export default function Apply() {
  const [sent, setSent] = useState(false);
  if (sent) return <p role="status" className="border-l-4 border-sig bg-chrome p-6">Request received. Ben reads every application himself and replies by email.</p>;
  return (
    <form className="grid gap-4" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
      <label className="grid gap-1.5 text-[.95rem] font-medium">Full name<input required name="name" autoComplete="name" className={field} /></label>
      <label className="grid gap-1.5 text-[.95rem] font-medium">Email<input required type="email" name="email" autoComplete="email" className={field} /></label>
      <label className="grid gap-1.5 text-[.95rem] font-medium">Which motorcycles do you own or chase?<textarea required name="bikes" rows="3" className={field} placeholder="1972 Ducati 750 SS, a Vincent Black Shadow someday" /></label>
      <button className="btn btn-solid justify-self-start" type="submit">Send request</button>
    </form>
  );
}
