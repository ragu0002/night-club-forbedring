"use client";

import { HeadingMain } from "../../typography";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Triangles from "../../hoverFrames/Triangles";
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
      <section className="w-screen h-full col-span-full">
        <div className=" h-50 flex items-center">
          <HeadingMain color="white" text="night club gallery" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 [&>*:nth-child(1)]:md:col-span-2 [&>*:nth-child(1)]:md-row-span-1 [&>*:nth-child(2)]:md:col-span-1 [&>*:nth-child(2)]:md-row-span-1  [&>*:nth-child(3)]:md:col-span-2 [&>*:nth-child(3)]:md-row-span-1 [&>*:nth-child(4)]:md:col-span-1 [&>*:nth-child(4)]:md-row-span-1 [&>*:nth-child(5)]:md:col-span-2 [&>*:nth-child(5)]:md-row-span-2 [&>*:nth-child(6)]:md:col-span-2 [&>*:nth-child(6)]:md-row-span-2 [&>*:nth-child(7)]:md:col-span-2 [&>*:nth-child(7)]:md-row-span-2 *:object-cover *:self-stretch ">
          {!isLoading &&
            !error &&
            isImage.length > 0 &&
            isImage.slice(0, 7).map((img, index) => {
              const filename = img.asset.url.split("/").pop();
              return (
                <Triangles key={img.id}>
                  <motion.div
                    className="h-65"
                    initial={{ x: -50, y: 0, opacity: 0 }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      y: 0,
                      transition: {
                        type: "tween",
                        duration: 1,
                        ease: "easeInOut",
                      },
                    }}
                  >
                    <Image key={img.id} src={`/assets/content-img/${filename}`} alt={filename || img.description || `Gallery image ${img.id}`} className="w-full h-full object-cover hover:opacity-30" width={1200} height={800} />;
                  </motion.div>
                </Triangles>
              );
            })}
        </div>
      </section>
    </>
  );
}
