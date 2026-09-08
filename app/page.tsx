import Intro from "./components/Intro";
import Petals from "./components/Petals";
import ScrollProgress from "./components/ScrollProgress";
import MusicButton from "./components/MusicButton";
import Hero from "./components/Hero";
import Counter from "./components/Counter";
import Letter from "./components/Letter";
import Story from "./components/Story";
import Gallery from "./components/Gallery";
import Spotlight from "./components/Spotlight";
import Reasons from "./components/Reasons";
import Wish from "./components/Wish";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <>
      <Intro />
      <Petals />
      <ScrollProgress />
      <MusicButton />

      <main>
        <Hero />
        <Counter />
        <Letter />
        <Story />
        <Gallery />
        <Spotlight />
        <Reasons />
        <Wish />
        <Footer />
      </main>
    </>
  );
}
