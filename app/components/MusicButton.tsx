"use client";

import { useEffect, useRef, useState } from "react";
import { content } from "@/content";

export const PAUSE_MUSIC_EVENT = "birthday:pause-music";

/**
 * Appears only once the browser confirms public/audio/song.mp3 actually exists,
 * so there is no dead button when no song has been added.
 */
export default function MusicButton() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [available, setAvailable] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const { enabled, file } = content.music;
    if (!enabled || !file) return;

    const audio = new Audio(file);
    audio.loop = true;
    audio.volume = 0.35;
    audio.preload = "metadata";
    audioRef.current = audio;

    const found = () => setAvailable(true);
    const missing = () => setAvailable(false);

    audio.addEventListener("loadedmetadata", found);
    audio.addEventListener("canplay", found);
    audio.addEventListener("error", missing);

    // the video player asks us to get out of the way when it starts
    const pause = () => {
      audio.pause();
      setPlaying(false);
    };
    window.addEventListener(PAUSE_MUSIC_EVENT, pause);

    return () => {
      audio.removeEventListener("loadedmetadata", found);
      audio.removeEventListener("canplay", found);
      audio.removeEventListener("error", missing);
      window.removeEventListener(PAUSE_MUSIC_EVENT, pause);
      audio.pause();
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      // browsers block autoplay; this is a real click so it is allowed
      audio.play().then(
        () => setPlaying(true),
        () => setPlaying(false),
      );
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  if (!available) return null;

  return (
    <button
      type="button"
      className="music"
      onClick={toggle}
      aria-pressed={playing}
      aria-label={playing ? "Pause the music" : "Play the music"}
    >
      <span className="music__bars" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </span>
      <span className="music__label">{content.music.label}</span>
    </button>
  );
}
