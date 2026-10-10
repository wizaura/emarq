"use client";

import { ArrowUpRight, Play } from "lucide-react";
import { motion } from "motion/react";

import AnimatedWord from "./AnimatedWord";
import MagneticButton from "./MagneticButton";

export default function HeroContent() {
  return (
    <div>

      {/* Eyebrow */}
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
          delay: 1.9,
        }}
        className="mt-4 mb-8 flex items-center gap-3"
      >
        <span
          className="
            h-2
            w-2
            rounded-full
            bg-emarq-pink
            shadow-[0_0_20px_rgba(239,185,193,.8)]
          "
        />

        <span
          className="
            text-xs
            font-semibold
            uppercase
            tracking-[0.25em]
            text-white/60
          "
        >
          Marketing & Production
        </span>
      </motion.div>

      {/* Heading */}
      <h1
        className="
          max-w-[1000px]
          text-[clamp(4rem,9vw,9.5rem)]
          font-black
          leading-[0.9]
          tracking-[-0.075em]
        "
      >
        <AnimatedWord delay={2.05}>
          Ideas.
        </AnimatedWord>

        <br />

        <AnimatedWord
          delay={2.2}
          className="text-emarq-pink"
        >
          Impact.
        </AnimatedWord>

        <br />

        <AnimatedWord delay={2.35}>
          Emarq.
        </AnimatedWord>
      </h1>

      {/* Description */}
      <motion.p
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          delay: 2.7,
        }}
        className="
          mt-6 sm:mt-10
          max-w-xl
          text-base
          leading-relaxed
          text-white/60
          md:text-lg
        "
      >
        We turn strategy, creativity and production
        into experiences that make brands impossible
        to overlook.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          delay: 2.9,
        }}
        className="
          mt-5 sm:mt-9
          flex
          flex-wrap
          items-center
          gap-4
        "
      >
        <MagneticButton>
          <span>Explore our work</span>
        </MagneticButton>

        {/* <a
          href="#services"
          className="
            flex
            items-center
            gap-3
            rounded-full
            border
            border-white/20
            px-6
            py-4
            text-sm
            font-medium
            text-white/80
            transition-all
            hover:border-white/50
            hover:text-white
          "
        >
          <Play size={15} fill="currentColor" />
          What we do
        </a> */}
      </motion.div>

    </div>
  );
}