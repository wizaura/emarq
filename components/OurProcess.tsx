"use client";

import { motion } from "motion/react";

const process = [
  {
    number: "01",
    title: "Discovery & Consultation",
    shortTitle: "Discover",
    description:
      "We begin by understanding the brand, business objectives, audience and project requirements.",
  },
  {
    number: "02",
    title: "Strategic Planning",
    shortTitle: "Strategise",
    description:
      "We develop a tailored direction, creative concept and implementation plan.",
  },
  {
    number: "03",
    title: "Creative Production",
    shortTitle: "Create",
    description:
      "Our team brings the approved concept to life through design, content and production.",
  },
  {
    number: "04",
    title: "Campaign Implementation",
    shortTitle: "Implement",
    description:
      "We coordinate and execute every element across the relevant platforms or physical locations.",
  },
  {
    number: "05",
    title: "Optimisation & Reporting",
    shortTitle: "Optimise",
    description:
      "We review performance, gather insights and refine the approach to improve future results.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="
        bg-[#F7F7F5]
        px-4
        py-20
        sm:px-6
        lg:px-24
      "
    >
      <div
        className="
          relative
          overflow-hidden
        "
      >
        {/* =====================================================
            BACKGROUND
        ====================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            right-[-10%]
            top-[5%]
            h-[600px]
            w-[600px]
            rounded-full
            bg-[#44345D]/[0.035]
            blur-[160px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            bottom-[-10%]
            left-[-10%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#EFB9C1]/[0.08]
            blur-[150px]
          "
        />

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div
          className="
            relative
            z-10
            grid
            grid-cols-1
            gap-10
            lg:grid-cols-12
          "
        >
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#44345D]
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
                Our Process
              </span>
            </div>

            <h2
              className="
                mt-14
                text-[16vw]
                font-medium
                leading-[0.76]
                tracking-[-0.095em]
                sm:text-[13vw]
                md:text-[10vw]
                lg:text-[8vw]
              "
            >
              From Idea
              <br />
              to{" "}
              <span className="text-[#44345D]">
                Impact.
              </span>
            </h2>
          </div>

          <div
            className="
              flex
              items-end
              lg:col-span-5
              lg:justify-end
            "
          >
            <p
              className="
                max-w-[400px]
                text-[15px]
                leading-[1.7]
                text-[#090909]/50
                lg:pb-3
              "
            >
              A clear process keeps creativity focused,
              execution organised and every project moving
              towards the right outcome.
            </p>
          </div>
        </div>

        {/* =====================================================
            PROCESS JOURNEY
        ====================================================== */}

        <div
          className="
            relative
            z-10
            mx-auto
            mt-24
            max-w-[1100px]
            md:mt-32
          "
        >
          {/* Central vertical line */}

          <div
            className="
              absolute
              bottom-0
              left-5
              top-0
              w-px
              bg-[#090909]/10
              md:left-1/2
              md:-translate-x-1/2
            "
          />

          {/* Progress line */}

          <motion.div
            initial={{ height: "0%" }}
            whileInView={{ height: "100%" }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 1.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              absolute
              left-5
              top-0
              w-px
              bg-[#44345D]
              md:left-1/2
              md:-translate-x-1/2
            "
          />

          {/* Stages */}

          <div className="relative">
            {process.map((step, index) => {
              const left = index % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  initial={{
                    opacity: 0,
                    y: 30,
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
                    duration: 0.7,
                    delay: 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="
                    relative
                    grid
                    min-h-[300px]
                    grid-cols-[40px_1fr]
                    md:grid-cols-2
                  "
                >
                  {/* Mobile node */}

                  <div
                    className="
                      absolute
                      left-[5px]
                      top-8
                      z-10
                      flex
                      h-[30px]
                      w-[30px]
                      items-center
                      justify-center
                      rounded-full
                      bg-[#F7F7F5]
                      md:left-1/2
                      md:-translate-x-1/2
                    "
                  >
                    <span
                      className="
                        h-2
                        w-2
                        rounded-full
                        bg-[#44345D]
                      "
                    />
                  </div>

                  {/* Left side */}

                  <div
                    className={`
                      hidden
                      pr-16
                      md:block
                      ${
                        left
                          ? "text-right"
                          : ""
                      }
                    `}
                  >
                    {left && (
                      <ProcessContent step={step} />
                    )}
                  </div>

                  {/* Right side */}

                  <div
                    className={`
                      col-start-2
                      pl-7
                      md:pl-16
                      ${
                        left
                          ? ""
                          : "md:col-start-2"
                      }
                    `}
                  >
                    {/* Mobile */}

                    <div className="md:hidden">
                      <ProcessContent step={step} />
                    </div>

                    {/* Desktop */}

                    <div className="hidden md:block">
                      {!left && (
                        <ProcessContent step={step} />
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessContent({
  step,
}: {
  step: {
    number: string;
    title: string;
    shortTitle: string;
    description: string;
  };
}) {
  return (
    <div className="group">
      {/* Number */}

      <div
        className="
          mb-5
          flex
          items-center
          gap-3
          md:justify-start
        "
      >
        <span
          className="
            font-mono
            text-[9px]
            tracking-[0.15em]
            text-[#44345D]
          "
        >
          {step.number}
        </span>

        <span
          className="
            h-px
            w-8
            bg-[#090909]/15
          "
        />
      </div>

      {/* Short title */}

      <p
        className="
          mb-3
          text-[9px]
          font-medium
          uppercase
          tracking-[0.2em]
          text-[#090909]/30
        "
      >
        {step.shortTitle}
      </p>

      {/* Main title */}

      <h3
        className="
          max-w-[430px]
          text-[clamp(26px,3vw,46px)]
          font-medium
          leading-[0.92]
          tracking-[-0.05em]
          text-[#090909]
          transition-colors
          duration-300
          group-hover:text-[#44345D]
        "
      >
        {step.title}
      </h3>

      {/* Description */}

      <p
        className="
          mt-5
          max-w-[390px]
          text-[12px]
          leading-[1.7]
          text-[#090909]/45
        "
      >
        {step.description}
      </p>
    </div>
  );
}