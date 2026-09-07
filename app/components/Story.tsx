import { content } from "@/content";
import { withBasePath } from "@/lib/base-path";
import Reveal from "./Reveal";
import ParallaxImage from "./ParallaxImage";

export default function Story() {
  const { story } = content;

  return (
    <section className="section story" id="story">
      <Reveal className="section__head reveal--group">
        <p className="eyebrow">{story.kicker}</p>
        <h2 className="h2">{story.title}</h2>
        <p className="lead">{story.subtitle}</p>
      </Reveal>

      <div className="timeline">
        {story.items.map((item, i) => (
          <Reveal
            as="article"
            className={`beat${i % 2 === 1 ? " beat--flip" : ""}`}
            key={item.title + i}
          >
            <div className="beat__media">
              <ParallaxImage src={withBasePath(item.image)} alt={item.title} />
            </div>

            <div className="beat__text">
              <p className="beat__date">{item.date}</p>
              <h3 className="beat__title">{item.title}</h3>
              <p className="beat__body">{item.text}</p>
            </div>

            <span className="beat__dot" aria-hidden="true" />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
