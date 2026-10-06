const a = ["Bonneville T120", "Ducati 750 SS", "Black Shadow", "V7 Sport", "BMW R90S", "Norton Commando"];
const b = ["Honda CB750 K0", "Kawasaki Z1", "Laverda SFC", "MV Agusta 750S", "Velocette Venom", "Brough Superior"];
const Row = ({ items, rev }) => (
  <div className={`mq overflow-hidden${rev ? " rev" : ""}`} aria-hidden={rev ? "true" : undefined}>
    <div className="mq-in">
      {[0, 1].map((k) => (
        <ul key={k} className="flex shrink-0" aria-hidden={k ? "true" : undefined}>
          {items.map((i) => (
            <li key={i} className={`flex items-center gap-12 pr-12 font-display text-[clamp(2.2rem,6.5vw,4.8rem)] font-semibold leading-[1.15] tracking-tight whitespace-nowrap after:size-3 after:rounded-full after:bg-ink ${rev ? "italic" : ""}`}>{i}</li>
          ))}
        </ul>
      ))}
    </div>
  </div>
);
export default function Marquee() {
  return (
    <section className="grid gap-2 overflow-hidden bg-sig py-9 text-ink" aria-labelledby="mq">
      <h2 id="mq" className="sr-only">Machines our members keep</h2>
      <Row items={a} /><Row items={b} rev />
    </section>
  );
}
