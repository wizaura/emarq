"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
} from "lucide-react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { useEffect } from "react";

import FramedImage from "./ui/FramedImage";

export default function Hero() {
  /*
   * ============================================================
   * MOUSE PARALLAX
   * ============================================================
   */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 70,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 70,
    damping: 20,
  });

  const imageX = useTransform(
    smoothX,
    [-1, 1],
    [-10, 10]
  );

  const imageY = useTransform(
    smoothY,
    [-1, 1],
    [-8, 8]
  );

  /*
   * ============================================================
   * MOUSE MOVE
   * ============================================================
   */

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(
        (event.clientX / window.innerWidth) * 2 - 1
      );

      mouseY.set(
        (event.clientY / window.innerHeight) * 2 - 1
      );
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, [mouseX, mouseY]);

  return (
    <section
      id="home"
      className="
        relative
        min-h-[100svh]
        overflow-hidden
        bg-[#F7F7F5]
      "
    >
      <div
        className="
          mx-auto
          flex
          min-h-[100svh]
          max-w-[1440px]
          flex-col
          justify-end
          px-6
          pb-6
          pt-32
          md:px-10
          md:pb-10
          lg:px-12
        "
      >
        {/* =====================================================
            HERO GRID
        ====================================================== */}

        <div
          className="
            grid
            items-end
            gap-12
            lg:grid-cols-[1.15fr_0.85fr]
            lg:gap-16
          "
        >
          {/* ===================================================
              LEFT CONTENT
          =================================================== */}

          <div className="relative z-10">
            {/* Small brand marker */}

            <motion.div
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
              className="
                mb-6
                flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#EFB9C1]
                "
              />

              <span
                className="
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.2em]
                  text-[#44345D]
                "
              >
                Marketing & Production
              </span>
            </motion.div>

            {/* =================================================
                HEADLINE
            ================================================= */}

            <h1
              className="
                max-w-[950px]
                text-[16vw]
                font-medium
                leading-[0.84]
                tracking-[-0.075em]
                text-[#090909]
                sm:text-[13vw]
                md:text-[10.5vw]
                lg:text-[8.2vw]
              "
            >
              <AnimatedLine delay={0.25}>
                Ideas That
              </AnimatedLine>

              <AnimatedLine
                delay={0.38}
                className="text-[#44345D]"
              >
                Leave a Mark.
              </AnimatedLine>
            </h1>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <motion.p
              initial={{
                opacity: 0,
                y: 18,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.65,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                mt-8
                max-w-[570px]
                text-[14px]
                leading-[1.65]
                text-[#090909]/60
                md:text-[16px]
              "
            >
              Emarq is a Dubai-based marketing and
              creative production agency helping brands
              grow through thoughtful strategy, compelling
              content, memorable activations and carefully
              executed brand experiences.
            </motion.p>

            {/* =================================================
                BUTTONS
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 18,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.8,
              }}
              className="
                mt-8
                flex
                flex-wrap
                items-center
                gap-3
              "
            >
              {/* Start Project */}

              <Link
                href="#contact"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-[#090909]
                  px-6
                  py-4
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.16em]
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#44345D]
                "
              >
                Start a Project

                <ArrowUpRight
                  size={14}
                  strokeWidth={1.7}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </Link>

              {/* Services */}

              <Link
                href="#services"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  px-2
                  py-4
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.16em]
                  text-[#090909]
                "
              >
                Explore Our Services

                <ArrowDownRight
                  size={14}
                  strokeWidth={1.7}
                  className="
                    text-[#44345D]
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:translate-y-1
                  "
                />
              </Link>
            </motion.div>
          </div>

          {/* ===================================================
              RIGHT IMAGE
          =================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.45,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              relative
              w-full
              flex
              justify-center
              lg:justify-end
            "
          >
            {/* Mouse parallax wrapper */}

            <motion.div
              style={{
                x: imageX,
                y: imageY,
              }}
              className="
                w-full
                max-w-[560px]
              "
            >
              <FramedImage
                src="/images/emarq-hero.jpg"
                alt="Emarq creative production"
                priority
                sizes="
                  (max-width: 1024px) 100vw,
                  42vw
                "
                accent="both"
                tilt={0}
                animateOnScroll={false}
                className="w-full"
                imageClassName="scale-[1.03]"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* =====================================================
            SIMPLE BOTTOM LINE
        ====================================================== */}

        <motion.div
          initial={{
            scaleX: 0,
          }}
          animate={{
            scaleX: 1,
          }}
          transition={{
            duration: 1,
            delay: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            mt-10
            h-px
            origin-left
            bg-[#090909]/10
          "
        />
      </div>
    </section>
  );
}

/* =============================================================
   ANIMATED HEADLINE
============================================================= */

function AnimatedLine({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <span
      className={`
        block
        overflow-hidden
        pb-[0.1em]
        ${className}
      `}
    >
      <motion.span
        initial={{
          y: "110%",
        }}
        animate={{
          y: 0,
        }}
        transition={{
          duration: 0.9,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="block"
      >
        {children}
      </motion.span>
    </span>
  );
}