"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const strengths = [
  {
    number: "01",
    title: "Strategy-led creative thinking",
    description:
      "Ideas grounded in clear objectives, audience insight and brand strategy.",
  },
  {
    number: "02",
    title: "End-to-end project management",
    description:
      "From the initial brief through to final delivery, every detail stays aligned.",
  },
  {
    number: "03",
    title: "Premium-quality production",
    description:
      "High-quality execution with a strong focus on craft, consistency and impact.",
  },
  {
    number: "04",
    title: "Attention to detail",
    description:
      "Thoughtful refinement across every element of the final experience.",
  },
  {
    number: "05",
    title: "Tailored solutions",
    description:
      "Approaches shaped around each brand, audience and business objective.",
  },
  {
    number: "06",
    title: "Data-driven decisions",
    description:
      "Using performance and insight to make smarter campaign decisions.",
  },
];

export default function WhyEmarq() {
  return (
    <section
      id="why-emarq"
      className="
        relative
        overflow-hidden
        bg-[#F7F7F5]
        text-[#090909]
      "
    >
      <div
        className="
          mx-auto
          max-w-[1440px]
          px-6
          py-20
          md:px-10
          lg:px-12
        "
      >
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            mb-12
            flex
            items-center
            justify-between
            pb-4
            md:mb-12
          "
        >
          <div className="flex items-center gap-3">
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
                text-[10px]
                font-medium
                uppercase
                tracking-[0.22em]
                text-[#44345D]
              "
            >
              Why Emarq
            </span>
          </div>
        </motion.div>

        {/* =====================================================
            INTRO
        ====================================================== */}

        <div
          className="
            grid
            items-end
            gap-8
            lg:grid-cols-[1fr_0.8fr]
            lg:gap-20
          "
        >
          {/* Heading */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <h2
              className="
                max-w-[720px]
                text-[13vw]
                font-medium
                leading-[0.86]
                tracking-[-0.07em]
                sm:text-[10vw]
                md:text-[8vw]
                lg:text-[6.2vw]
              "
            >
              Why Work
              <br />
              <span className="text-[#44345D]">
                With Emarq?
              </span>
            </h2>
          </motion.div>

          {/* Copy */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="max-w-[500px]"
          >
            <p
              className="
                text-[15px]
                leading-[1.6]
                text-[#090909]
                md:text-[17px]
              "
            >
              Emarq brings together strategic thinking,
              creative direction and hands-on production
              under one roof.
            </p>

            <p
              className="
                mt-4
                text-[12px]
                leading-[1.7]
                text-[#090909]/50
                md:text-[14px]
              "
            >
              Our background in managing globally
              recognised brands has shaped an approach
              built on precision, attention to detail and
              exceptional execution.
            </p>

            <p
              className="
                mt-4
                text-[12px]
                leading-[1.7]
                text-[#090909]/50
                md:text-[14px]
              "
            >
              Successful marketing must do more than look
              good. It should communicate clearly, connect
              emotionally and contribute to measurable
              business growth.
            </p>
          </motion.div>
        </div>

        {/* =====================================================
            STRENGTHS
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mt-14
            border-t
            border-[#090909]/10
            md:mt-16
          "
        >
          {/* Strengths label */}

          <div
            className="
              flex
              items-center
              justify-between
              border-b
              border-[#090909]/10
              py-4
            "
          >
            <span
              className="
                text-[8px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-[#44345D]
              "
            >
              What sets us apart
            </span>

            <span
              className="
                hidden
                text-[8px]
                uppercase
                tracking-[0.18em]
                text-[#090909]/30
                md:block
              "
            >
              Strategy / Creative / Production
            </span>
          </div>

          {/* Cards */}

          <div
            className="
              grid
              md:grid-cols-2
              lg:grid-cols-3
            "
          >
            {strengths.map((strength, index) => (
              <motion.div
                key={strength.number}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  group
                  relative
                  min-h-[165px]
                  border-b
                  border-[#090909]/10
                  p-5
                  transition-colors
                  duration-500
                  hover:bg-[#44345D]
                  md:min-h-[175px]
                  md:p-6
                  lg:min-h-[185px]
                  lg:p-7
                "
              >
                {/* Top */}

                <div
                  className="
                    flex
                    items-start
                    justify-between
                  "
                >
                  <span
                    className="
                      text-[9px]
                      font-medium
                      tracking-[0.15em]
                      text-[#44345D]
                      transition-colors
                      duration-500
                      group-hover:text-[#EFB9C1]
                    "
                  >
                    {strength.number}
                  </span>

                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.5}
                    className="
                      text-[#090909]/25
                      transition-all
                      duration-500
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                      group-hover:text-white
                    "
                  />
                </div>

                {/* Content */}

                <div className="absolute bottom-5 left-5 right-5 md:bottom-6 md:left-6 md:right-6 lg:bottom-7 lg:left-7 lg:right-7">
                  <h3
                    className="
                      max-w-[250px]
                      text-[17px]
                      font-medium
                      leading-[1.05]
                      tracking-[-0.03em]
                      text-[#090909]
                      transition-colors
                      duration-500
                      group-hover:text-white
                      md:text-[19px]
                    "
                  >
                    {strength.title}
                  </h3>

                  <p
                    className="
                      mt-2
                      max-w-[280px]
                      text-[10px]
                      leading-[1.5]
                      text-[#090909]/45
                      transition-colors
                      duration-500
                      group-hover:text-white/55
                      md:text-[11px]
                    "
                  >
                    {strength.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}