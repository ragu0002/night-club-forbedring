import HomeHero from "./components/home/hero/HomeHero";
import Header from "./components/header/Header";
import Events from "./components/home/events/Events";
import Gallery from "./components/home/gallery/Gallery";
import RecentBlog from "./components/home/recentblog/RecentBlog";
import Testimonials from "./components/testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <main className="grid col-(--full-col) grid-cols-subgrid">
        <HomeHero />
        <Header />
        <Events />

        <Gallery />
        <Testimonials />
        <RecentBlog />
      </main>
    </>
  );
}
