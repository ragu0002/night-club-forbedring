"use client";
import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { Caption, HeadingSecondary } from "../../typography";
import ErrorMessages from "../../errormessages/ErrorMessages";

const RescentBlogPost = () => {
  return (
    <Suspense fallback={<div>Loading....</div>}>
      <FetchRecentBlogPost />
    </Suspense>
  );
};
const FetchRecentBlogPost = () => {
  const [isPost, setIsPost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadRecentBlog() {
      try {
        const response = await axios.get("http://localhost:4000/blogposts");
        setIsPost(response.data || []);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    loadRecentBlog();
  }, []);

  if (isLoading) return <ErrorMessages message="Loading..." />;
  if (error) return <ErrorMessages message="There´s been an error loading, try again later!" error="border bg-accent/50" />;
  if (isPost.length === 0) return <ErrorMessages message="No posts found" error="border bg-accent/50" />;
  return (
    <>
      {isPost.map((post, index) => {
        const filename = post.asset?.url?.split("/").pop();

        return (
          <Link href={`/detalje/${post.id}`} key={post.id ?? index} className="grid gap-3 cursor-pointer">
            <Image src={`/assets/content-img/${filename}`} alt={post.title} width={200} height={200} className="self-stretch w-full object-cover" />
            <div className="grid gap-2 pr-15">
              <HeadingSecondary text={post.title} wordLimit={4} />
              <Caption text={`By: ${post.author}`} color="pink" />
              <Caption text={post.content} wordLimit={15} color="mt-4" />
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default RescentBlogPost;
