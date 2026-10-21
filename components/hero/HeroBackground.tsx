"use client";

import { motion, MotionValue } from "motion/react";

type Props = {
  glowX: MotionValue<string>;
  glowY: MotionValue<string>;
};

export default function HeroBackground({
  glowX,
  glowY,
}: Props) {
  return (
    <div className="absolute inset-0">

      {/* Grid */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.08]
          [background-image:linear-gradient(rgba(255,255,255,.25)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.25)_1px,transparent_1px)]
          [background-size:80px_80px]
        "
      />

      {/* Mouse glow */}
      <motion.div
        style={{
          left: glowX,
          top: glowY,
        }}
        className="
          pointer-events-none
          absolute
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-emarq-pink
          opacity-[0.08]
          blur-[100px]
        "
      />

      {/* Large circle */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 8, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -right-[250px]
          -top-[250px]
          h-[700px]
          w-[700px]
          rounded-full
          border
          border-emarq-pink/20
        "
      />

      {/* Secondary circle */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -right-[120px]
          -top-[120px]
          h-[440px]
          w-[440px]
          rounded-full
          border
          border-white/10
        "
      />

    </div>
  );
}