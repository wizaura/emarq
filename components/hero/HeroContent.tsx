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
        className="mt-4 mb-6 flex items-center gap-3"
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
          leading-[0.8]
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
          mt-6 sm:mt-8
          max-w-xl
          text-base
          leading-relaxed
          text-white/60
          md:text-lg
        "
      >
        Emarq is a Dubai-based marketing and creative production
        agency helping brands grow through thoughtful strategy,
        compelling content, memorable activations and
        carefully executed brand experiences.
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
          mt-5 sm:mt-7
          flex
          flex-wrap
          items-center
          gap-4
        "
      >
        <MagneticButton href="#work">
          <span>Explore our Work</span>
        </MagneticButton>

        <MagneticButton href="#contact" variant="secondary">
          <span>Start a Project</span>
        </MagneticButton>

      </motion.div>

    </div>
  );
}