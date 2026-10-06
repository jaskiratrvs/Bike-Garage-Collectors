import Header from "./Header";
import Bike from "./Bike";
import Apply from "./Apply";
import Slider from "./Slider";
import Marquee from "./Marquee";
import Faq from "./Faq";
import Footer from "./Footer";
import HeroBike from "./HeroBike";
import Tilt from "./Tilt";
import IntroCard from "./IntroCard";
import { h2, lede, plate, cap, sec } from "./ui";

const bikes = [
  ["1969 Triumph Bonneville T120", "Frame 4471", "Second owner. Original paint, rebuilt top end."],
  ["1974 Ducati 750 SS", "Frame 0872", "Imola replica. Matching numbers, 31,000 km."],
  ["1952 Vincent Black Shadow", "Frame R9214", "Restored 2011. Held in one family since 1978."],
];
const marques = ["Ducati", "Triumph", "Moto Guzzi", "Vincent", "BMW", "Norton"];
const steps = ["Add the bikes you own and the ones you want.", "The club suggests a member with a matching interest.", "You both accept, then talk privately. The club steps back."];

export default function Home() {
  return (
    <>
      <main id="top" className="relative z-10 bg-ground">
        <Header />
        <section className="gutter grid items-center gap-12 pt-10 pb-14 md:grid-cols-[1.05fr_1fr] md:pt-20">
          <div className="grid justify-items-start gap-7">
            <h1 className="font-display text-[clamp(3rem,9vw,6.4rem)] font-semibold leading-[.95] tracking-[-0.04em]">The garage serious collectors have never had.</h1>
            <p className={lede}>A private, members-only club for people who keep motorcycles for their history. Catalogue your collection, name what you are hunting, and meet members who ride what you ride.</p>
            <a href="#join" className="btn btn-solid">Request an invitation</a>
          </div>
          <HeroBike />
        </section>

        <ul className="gutter flex flex-wrap gap-x-10 gap-y-3 border-y border-ink/25 py-6 font-display text-2xl font-medium text-ink2" aria-label="Marques our members collect">
          {marques.map((m) => <li key={m}>{m}</li>)}
        </ul>

        <section id="garage" className={sec}>
          <h2 data-rv className={h2}>Every bike kept with its story</h2>
          <p data-rv className={lede}>Your garage is private by default. Record the year, frame number and provenance once, and decide who may ever see it.</p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {bikes.map(([t, f, n], i) => (
              <Tilt key={t}>
                <figure className={plate}>
                  <Bike variant={i} label={t} />
                  <figcaption className={cap}>
                    <b className="font-display text-xl font-medium">{t}</b>
                    <span className="font-mono text-xs text-chrome/70">{f}</span>
                    <em className="mt-1 not-italic text-chrome/85">{n}</em>
                  </figcaption>
                </figure>
              </Tilt>
            ))}
          </div>
        </section>

        <Slider />
        <Marquee />

        <section id="introductions" className={`${sec} grid items-start gap-12 bg-ink text-chrome md:grid-cols-2`}>
          <div>
            <h2 data-rv className={h2}>Introductions, not listings</h2>
            <p data-rv className={`${lede} !text-chrome/70`}>There is no marketplace here. When two members share a marque or a wishlist, the club suggests an introduction. Nothing happens unless both of you say yes.</p>
            <ol className="mt-8">
              {steps.map((s, i) => (
                <li key={s} data-rv className="relative border-t border-chrome/25 py-4 pl-14">
                  <span className="absolute left-0 font-mono text-sig">{String(i + 1).padStart(2, "0")}</span>{s}
                </li>
              ))}
            </ol>
          </div>
          <IntroCard />
        </section>

        <Faq />

        <section id="join" className={`${sec} grid items-start gap-12 md:grid-cols-2`}>
          <div>
            <h2 data-rv className={h2}>Small by design</h2>
            <p data-rv className={lede}>Every member is identity-verified and approved personally by Ben. We grow slowly so the conversations stay worth having. Motorcycles come first; cars, cameras and whisky follow.</p>
          </div>
          <Apply />
        </section>
      </main>
      <Footer />
    </>
  );
}
