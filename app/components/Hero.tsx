import { content } from "@/content";

export default function Hero() {
  const { hero } = content;

  return (
    <section className="hero" id="hero">
      <div className="hero__glow" aria-hidden="true" />

      <div className="hero__inner">
        <p className="eyebrow eyebrow--light">{hero.eyebrow}</p>
        <h1 className="hero__title">
          <span className="hero__titleLine">{hero.title}</span>
          <span className="hero__name">{hero.name}</span>
        </h1>
        <p className="hero__sub">{hero.subtitle}</p>
        <p className="hero__date">{hero.dateLine}</p>
      </div>

      <div className="hero__scroll">
        <span>{hero.scrollHint}</span>
        <span className="hero__scrollLine" aria-hidden="true" />
      </div>
    </section>
  );
}
