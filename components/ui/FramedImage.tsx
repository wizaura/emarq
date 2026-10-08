"use client";

import Image from "next/image";
import { motion } from "motion/react";

type FramedImageProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
  accent?: "purple" | "pink" | "both";
  tilt?: number;
  animateOnScroll?: boolean;
};

export default function FramedImage({
  src,
  alt,
  className = "",
  imageClassName = "",
  priority = false,
  sizes = "100vw",
  accent = "both",
  tilt = 0,
  animateOnScroll = true,
}: FramedImageProps) {
  return (
    <motion.div
      initial={
        animateOnScroll
          ? {
              opacity: 0,
              y: 40,
            }
          : false
      }
      whileInView={
        animateOnScroll
          ? {
              opacity: 1,
              y: 0,
            }
          : undefined
      }
      viewport={
        animateOnScroll
          ? {
              once: true,
              amount: 0.25,
            }
          : undefined
      }
      transition={
        animateOnScroll
          ? {
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }
          : undefined
      }
      className={`relative ${className}`}
      style={{
        perspective: "1200px",
      }}
    >
      {/* Back / depth layer */}
      <div
        className="
          absolute
          inset-0
          translate-x-3
          translate-y-3
          bg-[#44345D]
        "
      />

      {/* Frame */}
      <div
        className="
          relative
          bg-[#090909]
          p-[10px]
          shadow-[0_25px_60px_rgba(0,0,0,0.14)]
        "
        style={{
          transform: `rotate(${tilt}deg)`,
        }}
      >
        {/* Inner frame */}
        <div
          className="
            relative
            bg-[#F7F7F5]
            p-[5px]
          "
        >
          {/* Image */}
          <div
            className="
              relative
              aspect-[3/2]
              overflow-hidden
              bg-[#eae9e6]
            "
          >
            <Image
              src={src}
              alt={alt}
              fill
              priority={priority}
              sizes={sizes}
              className={`object-cover ${imageClassName}`}
            />

            {/* Subtle image treatment */}
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-[#44345D]/[0.04]
                mix-blend-multiply
              "
            />
          </div>
        </div>

        {/* Purple accent */}
        {accent !== "pink" && (
          <span
            className="
              absolute
              -right-[10px]
              top-[24px]
              h-[28px]
              w-[4px]
              bg-[#44345D]
            "
          />
        )}

        {/* Pink accent */}
        {accent !== "purple" && (
          <span
            className="
              absolute
              -bottom-[10px]
              left-[28px]
              h-[4px]
              w-[28px]
              bg-[#EFB9C1]
            "
          />
        )}
      </div>
    </motion.div>
  );
}