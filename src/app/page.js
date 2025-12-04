import HomeHero from "./components/home/hero/HomeHero";
import Gallery from "./components/home/gallery/Gallery";

export default function Home() {
  return (
    <>
      <main className="grid col-(--full-col) grid-cols-subgrid">
        <HomeHero />
        <Gallery />
      </main>
    </>
  );
}
