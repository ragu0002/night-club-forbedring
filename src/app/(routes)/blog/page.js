import Header from "@/app/components/header/Header";
import BlogList from "@/app/components/blog/BlogList";
import HeroSection from "@/app/components/herosection/HeroSection";

export default function Blog() {
  return (
    <>
      {" "}
      <Header />
      <main className="grid col-(--full-col) grid-cols-subgrid">
        <HeroSection text="blog" />
        <BlogList />
      </main>
    </>
  );
}
