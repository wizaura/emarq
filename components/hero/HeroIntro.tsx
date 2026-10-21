"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function HeroIntro() {
  return (
    <motion.div
      initial={{
        y: 0,
      }}
      animate={{
        y: "-100%",
      }}
      transition={{
        duration: 1.2,
        delay: 1.5,
        ease: [0.76, 0, 0.24, 1],
      }}
      className="
        fixed
        inset-0
        z-[100]
        flex
        items-center
        justify-center
        overflow-hidden
        bg-emarq-purple
      "
    >
      {/* Background glow */}

      <motion.div
        initial={{
          scale: 0.5,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 1.4,
          ease: "easeOut",
        }}
        className="
          pointer-events-none
          absolute
          h-[500px]
          w-[500px]
          rounded-full
          bg-emarq-pink/10
          blur-[120px]
        "
      />

      {/* Main content */}

      <div className="relative flex flex-col items-center">

        {/* Logo */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
            scale: 0.94,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <Image
            src="/logos/logo-2.png"
            alt="Emarq — Marketing & Production"
            width={320}
            height={110}
            priority
            className="
              h-auto
              w-[220px]
              object-contain
              md:w-[300px]
            "
          />
        </motion.div>

        {/* Loading line */}

        <div
          className="
            mt-8
            h-px
            w-[160px]
            overflow-hidden
            bg-white/10
            md:w-[220px]
          "
        >
          <motion.div
            initial={{
              x: "-100%",
            }}
            animate={{
              x: "0%",
            }}
            transition={{
              duration: 1.25,
              delay: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              h-full
              w-full
              bg-emarq-pink
            "
          />
        </div>

        {/* Loading text */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
            delay: 0.65,
          }}
          className="
            mt-4
            text-[8px]
            uppercase
            tracking-[0.4em]
            text-white/40
          "
        >
          Creating impact
        </motion.div>
      </div>

      {/* Corner index */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 0.7,
        }}
        className="
          absolute
          bottom-8
          left-8
          text-[9px]
          uppercase
          tracking-[0.3em]
          text-white/30
        "
      >
        EMARQ / 01
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 0.7,
        }}
        className="
          absolute
          bottom-8
          right-8
          text-[9px]
          uppercase
          tracking-[0.3em]
          text-white/30
        "
      >
        Dubai · UAE
      </motion.div>
    </motion.div>
  );
}