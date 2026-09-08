import { content } from "@/content";
import { withBasePath } from "@/lib/base-path";
import Reveal from "./Reveal";

export default function Spotlight() {
  const { spotlight } = content;

  return (
    <section className="section spotlight" id="spotlight">
      <Reveal className="section__head reveal--group">
        <p className="eyebrow eyebrow--light">{spotlight.kicker}</p>
        <h2 className="h2 h2--light">{spotlight.title}</h2>
        <p className="lead lead--light">{spotlight.subtitle}</p>
      </Reveal>

      <Reveal className="spotlight__frame">
        <img src={withBasePath(spotlight.image)} alt="" loading="lazy" />
      </Reveal>

      <p className="spotlight__quote">{spotlight.quote}</p>
    </section>
  );
}
