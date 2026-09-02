"use client";

import { useState } from "react";
import { content } from "@/content";
import Reveal from "./Reveal";
import { PAUSE_MUSIC_EVENT } from "./MusicButton";

export default function VideoSection() {
  const { video } = content;
  const id = video.youtubeId.trim();

  const [playing, setPlaying] = useState(false);
  // maxres -> hq -> local placeholder, so the cover never shows up broken
  const [posterStep, setPosterStep] = useState(0);

  const posters = [
    video.posterImage || `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`,
    `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
    "/img/video-cover.svg",
  ];

  const play = () => {
    setPlaying(true);
    // let the background music get out of the way
    window.dispatchEvent(new Event(PAUSE_MUSIC_EVENT));
  };

  return (
    <section className="section video" id="video">
      <Reveal className="section__head reveal--group">
        <p className="eyebrow eyebrow--light">{video.kicker}</p>
        <h2 className="h2 h2--light">{video.title}</h2>
        <p className="lead lead--light">{video.subtitle}</p>
      </Reveal>

      <Reveal className="player">
        {!id ? (
          <p className="video__caption">
            Add your YouTube video id in content.ts
          </p>
        ) : playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${encodeURIComponent(
              id,
            )}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          // a cover image until she clicks: YouTube only loads on demand,
          // which keeps the page fast and stops it phoning home on arrival
          <button
            type="button"
            className="facade"
            onClick={play}
            aria-label="Play the video"
          >
            <img
              src={posters[posterStep]}
              alt=""
              onError={() =>
                setPosterStep((step) => Math.min(step + 1, posters.length - 1))
              }
            />
            <span className="facade__ring" aria-hidden="true" />
            <span className="facade__play" aria-hidden="true" />
          </button>
        )}
      </Reveal>

      <p className="video__caption">{video.caption}</p>
    </section>
  );
}
