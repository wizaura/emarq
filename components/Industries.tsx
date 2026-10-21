"use client";

import Image from "next/image";
import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useEffect, useRef } from "react";

type Industry = {
  number: string;
  title: string;
  image: string;
  description: string;
};

const industries: Industry[] = [
  {
    number: "01",
    title: "Automotive & Luxury Vehicles",
    image: "/industries/automotive.jpg",
    description:
      "Creative campaigns and experiences built for automotive and luxury brands.",
  },
  {
    number: "02",
    title: "Corporate Organisations & Start-ups",
    image: "/industries/corporate.jpg",
    description:
      "Distinctive brand communication for established organisations and ambitious businesses.",
  },
  {
    number: "03",
    title: "Food & Beverage",
    image: "/industries/food-beverage.jpg",
    description:
      "Visual storytelling and experiences that make food and beverage brands memorable.",
  },
  {
    number: "04",
    title: "Hospitality",
    image: "/industries/hospitality.jpg",
    description:
      "Elevated creative experiences for hotels, restaurants and hospitality destinations.",
  },
  {
    number: "05",
    title: "Fashion & Lifestyle",
    image: "/industries/fashion.jpg",
    description:
      "Culture-led creative that gives fashion and lifestyle brands a distinctive voice.",
  },
  {
    number: "06",
    title: "Events & Entertainment",
    image: "/industries/events.jpg",
    description:
      "Campaigns, activations and experiences designed to bring audiences and brands together.",
  },
  {
    number: "07",
    title: "Retail",
    image: "/industries/retail.jpg",
    description:
      "Branded environments and creative experiences that connect customers with products.",
  },
  {
    number: "08",
    title: "E-commerce",
    image: "/industries/ecommerce.jpg",
    description:
      "Digital-first brand experiences designed to capture attention and drive action.",
  },
];

export default function Industries() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  /* One shared animation position for desktop AND mobile */
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    mass: 0.4,
  });

  const activePosition = useTransform(
    smoothProgress,
    [0, 1],
    [0, industries.length - 1]
  );

  /*
   * SNAP: when scrolling stops (wheel, trackpad, touch momentum),
   * glide to the nearest industry so it never rests half-blended.
   */
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    let touching = false;

    const snap = () => {
      const el = sectionRef.current;
      if (!el || touching) return;

      const rect = el.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const range = el.offsetHeight - window.innerHeight;
      if (range <= 0) return;

      const progress = (window.scrollY - sectionTop) / range;

      // Only snap while inside the pinned range
      if (progress <= 0 || progress >= 1) return;

      const last = industries.length - 1;
      const index = Math.round(progress * last);
      const target = sectionTop + (index / last) * range;

      if (Math.abs(target - window.scrollY) > 1) {
        window.scrollTo({ top: target, behavior: "smooth" });
      }
    };

    const schedule = () => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(snap, 140);
    };

    const onTouchStart = () => {
      touching = true;
      if (timer) clearTimeout(timer);
    };

    const onTouchEnd = () => {
      touching = false;
      schedule();
    };

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("touchcancel", onTouchEnd, { passive: true });

    return () => {
      if (timer) clearTimeout(timer);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("touchcancel", onTouchEnd);
    };
  }, []);

  const ghostNumberX = useTransform(
    activePosition,
    (value) => `${value * -20}px`
  );

  return (
    <section
      ref={sectionRef}
      id="industries"
      className="
        relative
        h-[700vh]
        bg-[#F7F7F5]
      "
    >
      <div
        className="
          sticky
          top-0
          h-[100svh]
          min-h-[680px]
          overflow-hidden
          bg-[#F7F7F5]
          text-[#44345D]
        "
      >
        {/* ======================================================
            BACKGROUND
        ====================================================== */}

        <div className="pointer-events-none absolute inset-0">
          {/* Subtle grid */}
          <div
            className="
              absolute
              inset-0
              opacity-[0.035]
              bg-[linear-gradient(to_right,#44345D_1px,transparent_1px),linear-gradient(to_bottom,#44345D_1px,transparent_1px)]
              bg-[size:90px_90px]
            "
          />

          {/* Giant ghost typography */}
          <div
            className="
              absolute
              left-[-3%]
              top-[10%]
              whitespace-nowrap
              select-none
              text-[19vw]
              font-black
              uppercase
              leading-none
              tracking-[-0.11em]
              text-[#44345D]/[0.035]
            "
          >
            INDUSTRIES
          </div>

          {/* Giant ghost number */}
          <motion.div
            style={{
              x: ghostNumberX,
            }}
            className="
              absolute
              bottom-[-12%]
              right-[-2%]
              select-none
              text-[38vw]
              font-black
              leading-none
              tracking-[-0.13em]
              text-[#44345D]/[0.045]
            "
          >
            08
          </motion.div>

          {/* Central soft glow */}
          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[600px]
              w-[600px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#44345D]/[0.025]
              blur-[130px]
            "
          />
        </div>

        {/* ======================================================
            TOP BAR
        ====================================================== */}

        <div
          className="
            absolute
            left-0
            right-0
            top-0
            z-40
            mx-auto
            flex
            max-w-[1700px]
            items-center
            justify-between
            px-6
            py-6
            md:px-10
            md:py-8
            lg:px-16
          "
        >
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#EFB9C1]" />

            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.22em]
                text-[#44345D]/55
              "
            >
            Industries
            </span>
          </div>

          <span
            className="
              hidden
              text-[9px]
              uppercase
              tracking-[0.22em]
              text-[#44345D]/35
              md:block
            "
          >
            Digital · Creative · Production
          </span>

          <span
            className="
              text-[9px]
              uppercase
              tracking-[0.22em]
              text-[#44345D]/40
            "
          >
            Dubai · UAE
          </span>
        </div>

        {/* ======================================================
            LEFT INDUSTRY INDEX (desktop)
        ====================================================== */}

        <div
          className="
            absolute
            left-[5%]
            top-1/2
            z-30
            hidden
            w-[230px]
            -translate-y-1/2
            md:block
            lg:left-[7%]
            lg:w-[270px]
          "
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-[#44345D]/50" />

            <span
              className="
                text-[8px]
                uppercase
                tracking-[0.25em]
                text-[#44345D]/45
              "
            >
              Industries
            </span>
          </div>

          <div className="space-y-1">
            {industries.map((industry, index) => (
              <IndustryIndexItem
                key={industry.number}
                industry={industry}
                index={index}
                activePosition={activePosition}
              />
            ))}
          </div>
        </div>

        {/* ======================================================
            MAIN VISUAL (desktop + mobile, same animation)
        ====================================================== */}

        <div
          className="
            absolute
            inset-0
            z-10
            flex
            items-center
            justify-center
            pt-10
            md:pt-0
          "
        >
          <div className="relative h-full w-full">
            {industries.map((industry, index) => (
              <IndustryVisual
                key={industry.number}
                industry={industry}
                index={index}
                activePosition={activePosition}
              />
            ))}
          </div>
        </div>

        {/* ======================================================
            RIGHT CONTENT (desktop)
        ====================================================== */}

        <div
          className="
            absolute
            right-[5%]
            top-1/2
            z-30
            hidden
            w-[250px]
            -translate-y-1/2
            md:block
            lg:right-[7%]
            lg:w-[290px]
          "
        >
          <IndustryContent
            industries={industries}
            activePosition={activePosition}
          />
        </div>

        {/* ======================================================
            MOBILE CONTENT
        ====================================================== */}

        <div
          className="
            absolute
            inset-x-0
            top-[13%]
            z-30
            px-6
            md:hidden
          "
        >
          <div className="mb-5 flex items-center justify-between">
            <span
              className="
                text-[8px]
                uppercase
                tracking-[0.2em]
                text-[#44345D]/45
              "
            >
              Experience across industries
            </span>

            <MobileCounter activePosition={activePosition} />
          </div>

          <MobileIndustryTitle
            industries={industries}
            activePosition={activePosition}
          />
        </div>

        {/* ======================================================
            MOBILE DESCRIPTION
        ====================================================== */}

        <div
          className="
            absolute
            bottom-[14%]
            left-6
            right-6
            z-30
            md:hidden
          "
        >
          <MobileIndustryDescription
            industries={industries}
            activePosition={activePosition}
          />
        </div>

        {/* ======================================================
            BOTTOM
        ====================================================== */}

        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            z-40
            mx-auto
            max-w-[1700px]
            px-6
            pb-6
            md:px-10
            md:pb-8
            lg:px-16
          "
        >
          <div className="flex items-end justify-between">
            <div>
              <div className="mb-2 flex items-center gap-3">
                <span
                  className="
                    text-[10px]
                    tracking-[0.2em]
                    text-[#44345D]
                  "
                >
                  <ActiveNumber activePosition={activePosition} />
                </span>

                <span className="text-[9px] text-[#44345D]/20">/</span>

                <span
                  className="
                    text-[9px]
                    tracking-[0.2em]
                    text-[#44345D]/35
                  "
                >
                  08
                </span>
              </div>

              <div
                className="
                  h-px
                  w-[160px]
                  bg-[#44345D]/10
                  md:w-[300px]
                "
              >
                <motion.div
                  style={{
                    scaleX: scrollYProgress,
                    transformOrigin: "left",
                  }}
                  className="
                    h-full
                    bg-[#44345D]
                  "
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span
                className="
                  hidden
                  text-[8px]
                  uppercase
                  tracking-[0.2em]
                  text-[#44345D]/30
                  sm:block
                "
              >
                Scroll to explore
              </span>

              <motion.div
                animate={{
                  y: [0, 7, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  flex
                  h-8
                  w-5
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#44345D]/15
                "
              >
                <span className="h-1.5 w-px bg-[#EFB9C1]" />
              </motion.div>
            </div>
          </div>
        </div>

        {/* ======================================================
            SIDE LABELS
        ====================================================== */}

        <div
          className="
            absolute
            left-3
            top-1/2
            z-30
            hidden
            -translate-y-1/2
            -rotate-90
            md:block
          "
        >
          <span
            className="
              text-[8px]
              uppercase
              tracking-[0.3em]
              text-[#44345D]/20
            "
          >
            Emarq / Experience
          </span>
        </div>

        <div
          className="
            absolute
            right-3
            top-1/2
            z-30
            hidden
            translate-y-1/2
            rotate-90
            md:block
          "
        >
          <span
            className="
              text-[8px]
              uppercase
              tracking-[0.3em]
              text-[#44345D]/20
            "
          >
            Marketing & Production
          </span>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   INDUSTRY INDEX ITEM
================================================================ */

function IndustryIndexItem({
  industry,
  index,
  activePosition,
}: {
  industry: Industry;
  index: number;
  activePosition: MotionValue<number>;
}) {
  const opacity = useTransform(activePosition, (value) => {
    const distance = Math.abs(value - index);

    if (distance < 0.35) return 1;
    if (distance < 1) return 0.55;

    return 0.2;
  });

  const x = useTransform(activePosition, (value) => {
    const distance = value - index;

    if (Math.abs(distance) < 0.35) return 12;

    return 0;
  });

  const scale = useTransform(activePosition, (value) => {
    const distance = Math.abs(value - index);

    return distance < 0.35 ? 1.04 : 1;
  });

  return (
    <motion.div
      style={{
        opacity,
        x,
        scale,
      }}
      className="
        relative
        flex
        items-center
        gap-4
      "
    >
      <span
        className="
          w-6
          text-[8px]
          tracking-[0.15em]
          text-[#44345D]
        "
      >
        {industry.number}
      </span>

      <motion.span
        className="
          h-px
          w-0
          bg-[#EFB9C1]
        "
      />

      <span
        className="
          max-w-[210px]
          text-[13px]
          font-medium
          leading-[1.1]
          tracking-[-0.025em]
          text-[#44345D]
          lg:text-[15px]
        "
      >
        {industry.title}
      </span>
    </motion.div>
  );
}

/* ================================================================
   MAIN IMAGE (shared by desktop and mobile)
================================================================ */

function IndustryVisual({
  industry,
  index,
  activePosition,
}: {
  industry: Industry;
  index: number;
  activePosition: MotionValue<number>;
}) {
  const distance = useTransform(activePosition, (value) => value - index);

  const opacity = useTransform(
    distance,
    [-1.2, -0.6, -0.25, 0, 0.25, 0.6, 1.2],
    [0, 0.15, 0.55, 1, 0.55, 0.15, 0]
  );

  const scale = useTransform(
    distance,
    [-1, -0.4, 0, 0.4, 1],
    [0.72, 0.9, 1, 0.9, 0.72]
  );

  const x = useTransform(
    distance,
    [-1, -0.4, 0, 0.4, 1],
    ["-28%", "-8%", "0%", "8%", "28%"]
  );

  const y = useTransform(
    distance,
    [-1, -0.4, 0, 0.4, 1],
    ["10%", "4%", "0%", "-4%", "-10%"]
  );

  const rotate = useTransform(
    distance,
    [-1, -0.4, 0, 0.4, 1],
    [-4, -1.5, 0, 1.5, 4]
  );

  const filter = useTransform(
    distance,
    [-1, -0.4, 0, 0.4, 1],
    ["blur(5px)", "blur(2px)", "blur(0px)", "blur(2px)", "blur(5px)"]
  );

  return (
    <motion.div
      style={{
        opacity,
        scale,
        x,
        y,
        rotate,
        filter,
      }}
      className="
        absolute
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2
        overflow-hidden
        bg-[#E5E1E7]
        shadow-[0_35px_80px_rgba(68,52,93,0.16)]
        will-change-transform
        h-[36vh]
        w-[72vw]
        max-w-[360px]
        md:h-[62vh]
        md:w-[38vw]
        md:max-w-[520px]
      "
    >
      <Image
        src={industry.image}
        alt={industry.title}
        fill
        priority={index === 0}
        sizes="(max-width: 768px) 72vw, 520px"
        className="object-cover"
      />

      {/* Very subtle brand tint */}
      <div className="absolute inset-0 bg-[#44345D]/[0.08]" />

      {/* Bottom gradient */}
      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(to_bottom,transparent_45%,rgba(68,52,93,0.35)_100%)]
        "
      />

      {/* Image label */}
      <div
        className="
          absolute
          bottom-5
          left-5
          right-5
          flex
          items-end
          justify-between
        "
      >
        <div>
          <span
            className="
              mb-1
              block
              text-[7px]
              uppercase
              tracking-[0.2em]
              text-white/60
            "
          >
            Industry
          </span>

          <span
            className="
              text-[10px]
              uppercase
              tracking-[0.15em]
              text-white
            "
          >
            {industry.number}
          </span>
        </div>

        <span className="h-2 w-2 rounded-full bg-[#EFB9C1]" />
      </div>

      {/* Editorial frame */}
      <div
        className="
          pointer-events-none
          absolute
          inset-3
          border
          border-white/25
        "
      />
    </motion.div>
  );
}

/* ================================================================
   RIGHT CONTENT (desktop)
================================================================ */

function IndustryContent({
  industries,
  activePosition,
}: {
  industries: Industry[];
  activePosition: MotionValue<number>;
}) {
  return (
    <div>
      <div className="mb-6 flex items-center gap-3">
        <span className="h-px w-8 bg-[#44345D]/50" />

        <span
          className="
            text-[8px]
            uppercase
            tracking-[0.25em]
            text-[#44345D]/45
          "
        >
          Experience
        </span>
      </div>

      <div className="relative min-h-[280px]">
        <ActiveIndustryText
          industries={industries}
          activePosition={activePosition}
        />
      </div>
    </div>
  );
}

function ActiveIndustryText({
  industries,
  activePosition,
}: {
  industries: Industry[];
  activePosition: MotionValue<number>;
}) {
  return (
    <div>
      {industries.map((industry, index) => (
        <IndustryText
          key={industry.number}
          industry={industry}
          index={index}
          activePosition={activePosition}
        />
      ))}
    </div>
  );
}

function IndustryText({
  industry,
  index,
  activePosition,
}: {
  industry: Industry;
  index: number;
  activePosition: MotionValue<number>;
}) {
  const distance = useTransform(activePosition, (value) => value - index);

  const opacity = useTransform(
    distance,
    [-0.7, -0.2, 0, 0.2, 0.7],
    [0, 0, 1, 0, 0]
  );

  const y = useTransform(distance, [-0.7, 0, 0.7], [25, 0, -25]);

  return (
    <motion.div
      style={{
        opacity,
        y,
      }}
      className="
        pointer-events-none
        absolute
        left-0
        top-0
        w-full
      "
    >
      <span
        className="
          mb-4
          block
          text-[9px]
          uppercase
          tracking-[0.22em]
          text-[#44345D]
        "
      >
        {industry.number}
      </span>

      <h3
        className="
          text-4xl
          font-medium
          leading-[0.88]
          tracking-[-0.065em]
          text-[#44345D]
          lg:text-[3.7rem]
        "
      >
        {industry.title}
      </h3>

      <div className="mt-6 h-px w-12 bg-[#EFB9C1]" />

      <p
        className="
          mt-7
          max-w-[260px]
          text-sm
          leading-[1.7]
          text-[#44345D]/55
        "
      >
        {industry.description}
      </p>
    </motion.div>
  );
}

/* ================================================================
   ACTIVE NUMBER
================================================================ */

function ActiveNumber({
  activePosition,
}: {
  activePosition: MotionValue<number>;
}) {
  const number = useTransform(activePosition, (value) => {
    const index = Math.round(value);

    return String(index + 1).padStart(2, "0");
  });

  return <motion.span>{number}</motion.span>;
}

/* ================================================================
   MOBILE COUNTER
================================================================ */

function MobileCounter({
  activePosition,
}: {
  activePosition: MotionValue<number>;
}) {
  return (
    <div
      className="
        text-[9px]
        tracking-[0.2em]
        text-[#44345D]
      "
    >
      <ActiveNumber activePosition={activePosition} />

      <span className="mx-2 text-[#44345D]/25">/</span>

      <span className="text-[#44345D]/45">08</span>
    </div>
  );
}

/* ================================================================
   MOBILE TITLE
================================================================ */

function MobileIndustryTitle({
  industries,
  activePosition,
}: {
  industries: Industry[];
  activePosition: MotionValue<number>;
}) {
  return (
    <div className="relative h-[120px]">
      {industries.map((industry, index) => (
        <MobileTitleItem
          key={industry.number}
          industry={industry}
          index={index}
          activePosition={activePosition}
        />
      ))}
    </div>
  );
}

function MobileTitleItem({
  industry,
  index,
  activePosition,
}: {
  industry: Industry;
  index: number;
  activePosition: MotionValue<number>;
}) {
  const distance = useTransform(activePosition, (value) => value - index);

  const opacity = useTransform(
    distance,
    [-0.8, -0.25, 0, 0.25, 0.8],
    [0, 0, 1, 0, 0]
  );

  const y = useTransform(distance, [-0.8, 0, 0.8], [20, 0, -20]);

  return (
    <motion.div
      style={{
        opacity,
        y,
      }}
      className="absolute inset-0"
    >
      <span
        className="
          mb-2
          block
          text-[9px]
          uppercase
          tracking-[0.2em]
          text-[#44345D]
        "
      >
        {industry.number}
      </span>

      <h2
        className="
          max-w-[390px]
          text-[2.45rem]
          font-medium
          leading-[0.86]
          tracking-[-0.06em]
          text-[#44345D]
        "
      >
        {industry.title}
      </h2>
    </motion.div>
  );
}

/* ================================================================
   MOBILE DESCRIPTION
================================================================ */

function MobileIndustryDescription({
  industries,
  activePosition,
}: {
  industries: Industry[];
  activePosition: MotionValue<number>;
}) {
  return (
    <div className="relative">
      {industries.map((industry, index) => (
        <MobileDescription
          key={industry.number}
          industry={industry}
          index={index}
          activePosition={activePosition}
        />
      ))}
    </div>
  );
}

function MobileDescription({
  industry,
  index,
  activePosition,
}: {
  industry: Industry;
  index: number;
  activePosition: MotionValue<number>;
}) {
  const distance = useTransform(activePosition, (value) => value - index);

  const opacity = useTransform(
    distance,
    [-0.5, -0.15, 0, 0.15, 0.5],
    [0, 0, 1, 0, 0]
  );

  const y = useTransform(distance, [-0.5, 0, 0.5], [15, 0, -15]);

  return (
    <motion.div
      style={{
        opacity,
        y,
      }}
      className="
        absolute
        left-0
        right-0
      "
    >
      <div className="mb-3 flex items-center gap-3">
        <span className="h-px w-7 bg-[#44345D]/40" />

        <span
          className="
            text-[8px]
            uppercase
            tracking-[0.2em]
            text-[#44345D]/45
          "
        >
          Experience
        </span>
      </div>

      <p
        className="
          max-w-[330px]
          text-[13px]
          leading-[1.55]
          text-[#44345D]/55
        "
      >
        {industry.description}
      </p>
    </motion.div>
  );
}