import { content } from "@/content";
import Reveal from "./Reveal";

export default function Letter() {
  const { letter } = content;

  return (
    <section className="section letter" id="letter">
      <Reveal className="paper">
        <div className="paper__tape" aria-hidden="true" />

        <p className="eyebrow">{letter.kicker}</p>
        <h2 className="h2 letter__title">{letter.title}</h2>

        <div className="letter__body">
          {letter.paragraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <p className="letter__signoff">{letter.signoff}</p>
        <p className="letter__signature">{letter.signature}</p>
      </Reveal>
    </section>
  );
}
