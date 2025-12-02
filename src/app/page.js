import { HeadingXL, HeadingMain, HeadingSecondary, Subheading, Caption } from "./components/typography";
export default function Home() {
  return (
    <div className="">
      <main className="grid col-(--content-col) grid-cols-subgrid">
        <HeadingXL text="XL" />
        <HeadingMain text="main" />
        <HeadingSecondary text="scnd" />
        <Subheading text="sub" />
        <Caption text="caption" />
      </main>
    </div>
  );
}
