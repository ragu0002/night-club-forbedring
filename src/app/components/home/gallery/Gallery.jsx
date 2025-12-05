"use client";

import { HeadingMain } from "../../typography";
import Image from "next/image";

const images = [
  "/assets/content-img/gallery1_big.jpg",
  "/assets/content-img/gallery2_big.jpg",
  "/assets/content-img/gallery3_big.jpg",
  "/assets/content-img/gallery4_big.jpg",
  "/assets/content-img/gallery5_big.jpg",
  "/assets/content-img/gallery6_big.jpg",
  "/assets/content-img/gallery7_big.jpg",
];

export default function Gallery() {
  return (
    <>
      <section className="w-screen h-full col-span-full ">
        <div className=" h-50 flex items-center">
          <HeadingMain
            color="white"
            text="night club gallery"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 *:object-cover *:self-stretch ">
          {images.map((src, i) => (
            <Image
              key={i}
              src={src}
              width={1200}
              height={800}
              alt={`Gallery image ${i + 1}`}
              className="w-full h-full object-cover"
            />
          ))}
        </div>
      </section>
    </>
  );
}
