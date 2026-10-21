"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import {
  motion,
  MotionValue,
} from "motion/react";

type Props = {
  imageX: MotionValue<number>;
  imageY: MotionValue<number>;
};

export default function HeroVisual({
  imageX,
  imageY,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 100,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        x: 0,
        scale: 1,
      }}
      transition={{
        duration: 1.2,
        delay: 2,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        relative
        mx-auto
        w-full
        max-w-[480px]
      "
    >
      {/* Pink glow */}
      <div
        className="
          absolute
          -inset-10
          rounded-full
          bg-emarq-pink/10
          blur-[80px]
        "
      />

      {/* Main image */}
      <motion.div
        style={{
          x: imageX,
          y: imageY,
        }}
        className="
          relative
          aspect-[4/5]
          overflow-hidden
          rounded-[2.5rem]
          border
          border-white/10
          bg-black
          shadow-2xl
        "
      >
        <Image
          src="/images/emarq-hero.jpg"
          alt="Emarq creative production"
          fill
          priority
          className="
            object-cover
            grayscale
            contrast-125
            transition-transform
            duration-1000
            hover:scale-105
          "
          sizes="(max-width: 1024px) 90vw, 42vw"
        />

        <div
          className="
            absolute
            inset-0
            bg-emarq-purple/20
            mix-blend-color
          "
        />

        {/* Location */}
        <div
          className="
            absolute
            left-5
            top-5
            rounded-full
            border
            border-white/20
            bg-black/30
            px-4
            py-2
            text-[9px]
            font-bold
            uppercase
            tracking-[0.2em]
            backdrop-blur-md
          "
        >
          Dubai · UAE
        </div>
      </motion.div>

      {/* ONE FLOATING CARD */}
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
          rotate: -10,
        }}
        animate={{
          opacity: 1,
          y: 0,
          rotate: -6,
        }}
        transition={{
          duration: 0.8,
          delay: 3,
        }}
        whileHover={{
          rotate: 0,
          scale: 1.05,
        }}
        className="
          absolute
          -bottom-2
          -left-8
          hidden
          w-48
          bg-emarq-pink
          p-5
          text-emarq-purple
          shadow-2xl
          sm:block
        "
      >
        <div className="mb-8 text-[9px] font-bold uppercase tracking-[0.2em]">
          What we create
        </div>

        <div className="text-2xl font-black leading-[0.9] tracking-[-0.05em]">
          Ideas that
          <br />
          Leave a
          <br />
          Mark.
        </div>
      </motion.div>

      {/* Rotating circle */}
      {/* <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          -right-7
          top-1/2
          hidden
          h-20
          w-20
          items-center
          justify-center
          rounded-full
          border
          border-emarq-pink/40
          bg-emarq-purple
          sm:flex
        "
      >
        <ArrowUpRight
          size={25}
          className="text-emarq-pink"
        />
      </motion.div> */}
    </motion.div>   
  );
}