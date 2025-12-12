"use client";

import { motion } from "framer-motion";
import { Caption, HeadingSecondary } from "../../typography";

export default function WelcomeOverlay({ welcome }) {
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      variants={overlayVariants}
      initial="hidden"
      whileHover="visible"
      className="absolute inset-0 flex items-center justify-center"
    >
      {/* SELVE OVERLAY CARD */}
      <div className="relative w-full h-full bg-black/95 border border-pink-500 flex flex-col items-center justify-center px-8 py-10 text-center">

        {/* Pink corner triangles */}
        <div className="absolute top-0 left-0 w-0 h-0 border-t-70 border-r-70 border-t-pink-500 border-r-transparent" />
        <div className="absolute bottom-0 right-0 w-0 h-0 border-b-70 border-l-70 border-b-pink-500 border-l-transparent" />

        {/* Icon box */}
        <div className="border border-pink-500 w-20 h-20 flex items-center justify-center mb-6">
          <span className="text-pink-500 text-3xl">{welcome.icon}</span>
        </div>

        {/* Title */}
        <HeadingSecondary text={welcome.title} />

        {/* Text */}
        <div className="mt-4 max-w-[36ch]">
          <Caption text={welcome.description} />
        </div>
      </div>
    </motion.div>
  );
}
