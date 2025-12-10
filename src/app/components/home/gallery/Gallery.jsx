"use client";

import { HeadingMain } from "../../typography";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import PatternBg from "../../bgOverlays/PatternBg";

export default function Gallery() {
  const [isImage, setIsImage] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function loadImages() {
      try {
        const response = await axios.get("http://localhost:4000/gallery");
        setIsImage(response.data || []);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    loadImages();
  }, []);

  return (
    <>
      <section className="w-screen h-full col-span-full ">
        <div className=" h-50 flex items-center">
          <HeadingMain color="white" text="night club gallery" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 *:object-cover *:self-stretch ">
          {!isLoading &&
            !error &&
            isImage.length > 0 &&
            isImage.slice(0, 7).map((img) => {
              const filename = img.asset.url.split("/").pop();
              return <Image key={img.id} src={`/assets/content-img/${filename}`} alt={filename || img.description || `Gallery image ${img.id}`} className="w-full h-full object-cover" width={1200} height={800} />;
            })}
        </div>
      </section>
    </>
  );
}
