import { content } from "@/content";
import Reveal from "./Reveal";

export default function Reasons() {
  const { reasons } = content;

  return (
    <section className="section reasons" id="reasons">
      <Reveal className="section__head reveal--group">
        <p className="eyebrow">{reasons.kicker}</p>
        <h2 className="h2">{reasons.title}</h2>
        <p className="lead">{reasons.subtitle}</p>
      </Reveal>

      <div className="cards">
        {reasons.items.map((item, i) => (
          <Reveal
            as="article"
            className="card"
            delay={Math.min(i, 6) * 70}
            key={item.title + i}
          >
            <div className="card__icon" aria-hidden="true">
              {item.icon}
            </div>
            <h3 className="card__title">{item.title}</h3>
            <p className="card__text">{item.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
