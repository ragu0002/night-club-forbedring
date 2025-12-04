import HeroSection from "@/app/components/HeroSection/HeroSection";
import { Suspense } from "react";
import Image from "next/image";
import BlogFull1 from "../../../assets/content-img/blog_full1.jpg";
import BlogFull2 from "../../../assets/content-img/blog_full2.jpg";
import BlogFull3 from "../../../assets/content-img/blog_full3.jpg";
import Link from "next/link";
import { Caption, HeadingSecondary, HeadingXL, Subheading } from "@/app/components/typography";
import CommentForm from "@/app/components/blogpage/CommentForm";

export default function BlogPost({ params }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FetchProduct params={params} />
    </Suspense>
  );
}
const imageMap = {
  "blog_full1.jpg": BlogFull1,
  "blog_full2.jpg": BlogFull2,
  "blog_full3.jpg": BlogFull3,
};
const FetchProduct = async ({ params }) => {
  "use server";
  const { id } = await params;
  const response = await fetch(`http://localhost:4000/blogposts/${id}`);
  const post = await response.json();
  const filename = post.asset?.url?.split("/").pop();
  const imageSrc = imageMap[filename] || BlogFull1;

  // fallback to BlogFull1 if not found
  return (
    <main className="grid col-(--full-col) grid-cols-subgrid">
      <HeroSection text="blog post" />
      <div className="col-(--full-col) grid grid-cols-subgrid md:mt-15">
        <Image src={imageSrc} alt={post.title} width={300} height={200} className=" md:col-(--content-col) col-(--full-col) self-stretch w-full object-cover mb-8" />
        <div className=" col-(--content-col) grid gap-8">
          <div className="grid gap-3">
            <HeadingSecondary text={post.title} />
            <Caption text={`By: ${post.author} / 3 Comments / 16. November 2016`} color="pink" />
          </div>

          <Caption text={post.content} />
        </div>
      </div>
      <div className="col-(--content-col)">
        <FetchComment id={post.id} />
        <CommentForm />
      </div>
    </main>
  );
};

const FetchComment = async ({ id }) => {
  "use server";
  const response = await fetch(`http://localhost:4000/blogposts/${id}?embed=comments`);
  const post = await response.json();
  return (
    <div className={`col-(--content-col)  gap-5 my-10 ${post.comments.length === 0 ? `hidden` : `grid`}`}>
      <HeadingXL text={post.comments.length === 1 ? `${post.comments.length} comment` : `${post.comments.length} comments`} />
      {post.comments.map((comment) => {
        const getDate = comment.date.split("T")[0];
        const [year, month, day] = getDate.split("-");
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        const formattedDate = `${day}. ${months[month - 1]} ${year}`;
        return (
          <div className="grid gap-5">
            <div className="flex gap-3 items-baseline">
              <Subheading text={`${comment.name} - `} />
              <Caption text={`Posted ${formattedDate}`} color="pink" />
            </div>
            <Caption text={comment.content} />
          </div>
        );
      })}
    </div>
  );
};
