"use client";

import { motion } from "motion/react";

const industries = [
  {
    number: "01",
    title: "Automotive",
    subtitle: "& Luxury Vehicles",
    className:
      "col-span-12 md:col-span-8 min-h-[250px] md:min-h-[330px]",
    theme: "dark",
  },
  {
    number: "02",
    title: "Corporate",
    subtitle: "& Start-ups",
    className:
      "col-span-12 md:col-span-4 min-h-[220px] md:min-h-[330px]",
    theme: "purple",
  },
  {
    number: "03",
    title: "Food",
    subtitle: "& Beverage",
    className:
      "col-span-12 md:col-span-5 min-h-[230px]",
    theme: "pink",
  },
  {
    number: "04",
    title: "Hospitality",
    subtitle: "",
    className:
      "col-span-12 md:col-span-7 min-h-[230px]",
    theme: "cream",
  },
  {
    number: "05",
    title: "Fashion",
    subtitle: "& Lifestyle",
    className:
      "col-span-12 md:col-span-7 min-h-[270px]",
    theme: "dark",
  },
  {
    number: "06",
    title: "Events",
    subtitle: "& Entertainment",
    className:
      "col-span-12 md:col-span-5 min-h-[270px]",
    theme: "purple",
  },
  {
    number: "07",
    title: "Retail",
    subtitle: "",
    className:
      "col-span-12 md:col-span-4 min-h-[220px]",
    theme: "cream",
  },
  {
    number: "08",
    title: "E-commerce",
    subtitle: "",
    className:
      "col-span-12 md:col-span-8 min-h-[220px]",
    theme: "pink",
  },
];

export default function Industries() {
  return (
    <section
      id="industries"
      className="
        bg-[#F7F7F5]
        px-4
        py-20
        sm:px-6
        lg:px-20
      "
    >
      <div
        className="
          relative
          overflow-hidden
        "
      >

        {/* =====================================================
            INTRO
        ====================================================== */}

        <div
          className="
            relative
            z-10
            grid
            grid-cols-1
            gap-14
            lg:grid-cols-12
            lg:gap-10
          "
        >
          {/* Heading */}

          <div className="lg:col-span-6">
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
                  uppercase
                  tracking-[0.22em]
                  text-[#44345D]
                "
              >
                Industries We Serve
              </span>
            </div>

            <h2
              className="
                mt-14
                max-w-[700px]
                text-[15vw]
                font-medium
                leading-[0.77]
                tracking-[-0.095em]
                sm:text-[12vw]
                md:text-[9vw]
                lg:text-[7.5vw]
              "
            >
              Experience
              <br />
              Across
              <br />
              <span className="text-[#44345D]">
                Industries.
              </span>
            </h2>
          </div>

          {/* Description */}

          <div
            className="
              flex
              items-end
              lg:col-span-6
              lg:justify-end
            "
          >
            <div className="max-w-[420px]">
              <span
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.2em]
                  text-[#090909]/30
                "
              >
                One approach. Many worlds.
              </span>

              <p
                className="
                  mt-6
                  text-[20px]
                  font-medium
                  leading-[1.25]
                  tracking-[-0.03em]
                  text-[#090909]/75
                  md:text-2xl
                "
              >
                Our flexible, tailored approach allows us
                to work with both established organisations
                and growing businesses across a variety of
                industries.
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            INDUSTRY COLLAGE
        ====================================================== */}

        <div
          className="
            relative
            z-10
            mt-24
            grid
            grid-cols-12
            gap-3
            md:mt-32
            md:gap-4
          "
        >
          {industries.map((industry, index) => {
            return (
              <IndustryBlock
                key={industry.number}
                industry={industry}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function IndustryBlock({
  industry,
  index,
}: {
  industry: {
    number: string;
    title: string;
    subtitle: string;
    className: string;
    theme: string;
  };
  index: number;
}) {
  const themeStyles = {
    dark: `
      bg-[#090909]
      text-white
      border-[#090909]
    `,
    purple: `
      bg-[#44345D]
      text-white
      border-[#44345D]
    `,
    pink: `
      bg-[#EFB9C1]
      text-[#090909]
      border-[#EFB9C1]
    `,
    cream: `
      bg-[#E8E5DE]
      text-[#090909]
      border-[#090909]/10
    `,
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.97,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.7,
        delay: index * 0.04,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        scale: 0.985,
      }}
      className={`
        group
        relative
        overflow-hidden
        border
        p-6
        transition-shadow
        duration-500
        hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)]
        md:p-8
        lg:p-10
        ${industry.className}
        ${themeStyles[industry.theme as keyof typeof themeStyles]}
      `}
    >
      {/* Large number */}

      <span
        className="
          absolute
          right-6
          top-5
          font-mono
          text-[9px]
          tracking-[0.15em]
          opacity-40
          md:right-8
          md:top-7
        "
      >
        {industry.number}
      </span>

      {/* Decorative circle */}

      <div
        className="
          pointer-events-none
          absolute
          -bottom-24
          -right-24
          h-48
          w-48
          rounded-full
          border
          border-current
          opacity-[0.08]
          transition-transform
          duration-700
          group-hover:scale-150
        "
      />

      {/* Content */}

      <div className="relative z-10 flex h-full flex-col justify-end">
        <div>
          <h3
            className="
              max-w-[800px]
              text-[clamp(34px,5vw,78px)]
              font-medium
              leading-[0.85]
              tracking-[-0.065em]
            "
          >
            {industry.title}
          </h3>

          {industry.subtitle && (
            <h4
              className="
                mt-1
                text-[clamp(24px,3.5vw,52px)]
                font-medium
                leading-[0.9]
                tracking-[-0.055em]
                opacity-50
              "
            >
              {industry.subtitle}
            </h4>
          )}
        </div>
      </div>

      {/* Corner marker */}

      <span
        className="
          absolute
          bottom-6
          right-6
          text-xl
          opacity-30
          transition-all
          duration-500
          group-hover:translate-x-1
          group-hover:-translate-y-1
          group-hover:opacity-100
          md:bottom-8
          md:right-8
        "
      >
        ↗
      </span>
    </motion.div>
  );
}