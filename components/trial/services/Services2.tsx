"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Social Media Strategy, Content Creation & Management",
    description:
      "We build engaging and consistent social media presences that strengthen brand visibility and create meaningful relationships with audiences.",
    items: [
      "Social media strategy",
      "Content planning and calendars",
      "Creative design",
      "Photography and videography",
      "Reels and short-form video production",
      "Posting and account management",
      "Community management",
      "Monthly performance reporting",
    ],
  },

  {
    number: "02",
    title: "Performance Marketing & Paid Advertising",
    description:
      "We develop targeted, data-driven advertising campaigns designed to reach the right audiences and transform advertising spend into measurable growth, leads and conversions.",
    items: [
      "Meta advertising",
      "Google Ads",
      "TikTok Ads",
      "LinkedIn advertising",
      "YouTube advertising",
    ],
  },

  {
    number: "03",
    title: "Branding & Visual Identity",
    description:
      "A strong brand is more than a logo — it is the complete experience a customer has with a business.",
    items: [
      "Brand strategy",
      "Logo design",
      "Visual identity systems",
      "Brand guidelines",
      "Marketing collateral",
      "Packaging design",
      "Visual communication",
    ],
  },

  {
    number: "04",
    title: "Creative Brand Activations",
    description:
      "We create interactive brand experiences that bring audiences closer to businesses and give them memorable reasons to engage and share.",
    items: [
      "Product launches",
      "Retail and in-store activations",
      "Pop-up experiences",
      "Influencer and media events",
      "Consumer engagement campaigns",
      "Live experience concepts",
      "Interactive displays",
      "Branded installations",
      "Personalised gifting stations",
      "Shareable brand moments",
    ],
  },

  {
    number: "05",
    title: "Personalisation Stations & Premium Gifting",
    description:
      "Our live personalisation stations combine craftsmanship, guest engagement and premium gifting to create memorable event experiences.",
    items: [
      "Hot-foil embossing",
      "Monogramming and initials",
      "Name personalisation",
      "Precision engraving",
      "Embroidery",
      "Custom packaging",
      "Premium corporate and event gifting",
    ],
  },

  {
    number: "06",
    title: "Creative Production",
    description:
      "We provide end-to-end production solutions that bring ideas to life with creativity, technical expertise and precision.",
    items: [
      "Product photography",
      "Portrait photography",
      "Event photography",
      "Social media reels",
      "Commercial videos",
      "Promotional films",
      "Documentaries",
      "Video editing",
      "Colour grading",
      "Motion graphics",
      "Studio setup",
      "Outdoor shoots",
      "Multi-camera productions",
    ],
  },

  {
    number: "07",
    title: "Printing Services",
    description:
      "We provide premium printing solutions with sharp quality, vibrant colour reproduction and carefully finished results for a wide range of brand and marketing requirements.",
    items: [
      "Marketing collateral",
      "Event materials",
      "Branded stationery",
      "Packaging",
      "Signage",
      "Custom printed products",
    ],
  },

  {
    number: "08",
    title: "Fit-Out Services",
    description:
      "We provide modern fit-out solutions for branded spaces, retail environments, events, exhibitions and temporary installations.",
    items: [
      "Retail environments",
      "Branded spaces",
      "Exhibition spaces",
      "Event installations",
      "Temporary installations",
      "Custom brand environments",
    ],
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={sectionRef}
      id="services"
      className="
        relative
        bg-[#090909]
        text-white
      "
    >
      {/* =====================================================
          STICKY STAGE
      ====================================================== */}

      <div
        className="
          sticky
          top-0
          flex
          h-[100svh]
          min-h-[700px]
          items-center
          overflow-hidden
        "
      >
        {/* ===================================================
            BACKGROUND
        =================================================== */}

        <div className="pointer-events-none absolute inset-0">
          {/* subtle purple glow */}

          <div
            className="
              absolute
              -left-[15%]
              top-[20%]
              h-[500px]
              w-[500px]
              rounded-full
              bg-[#44345D]/20
              blur-[120px]
            "
          />

          {/* subtle pink glow */}

          <div
            className="
              absolute
              -right-[10%]
              bottom-[10%]
              h-[400px]
              w-[400px]
              rounded-full
              bg-[#EFB9C1]/10
              blur-[120px]
            "
          />

          {/* grid */}

          <div
            className="
              absolute
              inset-0
              opacity-[0.035]
              [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)]
              [background-size:80px_80px]
            "
          />
        </div>

        {/* ===================================================
            CONTENT CONTAINER
        =================================================== */}

        <div
          className="
            relative
            mx-auto
            w-full
            max-w-[1440px]
            px-6
            md:px-10
            lg:px-12
          "
        >
          {/* Section heading */}

          <div
            className="
              absolute
              left-6
              top-[-220px]
              md:left-10
              lg:left-12
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
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.22em]
                  text-[#EFB9C1]
                "
              >
                04 / Our Services
              </span>
            </div>

            <h2
              className="
                mt-4
                text-[13vw]
                font-medium
                leading-[0.82]
                tracking-[-0.075em]
                text-white
                sm:text-[11vw]
                md:text-[8vw]
                lg:text-[6.5vw]
              "
            >
              What We
              <br />
              <span className="text-[#EFB9C1]">
                Do.
              </span>
            </h2>
          </div>

          {/* =================================================
              SERVICE CARDS
          ================================================= */}

          <div
            className="
              relative
              mx-auto
              flex
              h-[580px]
              max-w-[900px]
              items-center
              justify-center
            "
          >
            {services.map((service, index) => (
              <ServiceCard
                key={service.number}
                service={service}
                index={index}
                total={services.length}
                progress={scrollYProgress}
              />
            ))}
          </div>

          {/* Scroll indicator */}

          <div
            className="
              absolute
              bottom-[-250px]
              right-6
              flex
              items-center
              gap-3
              md:right-10
              lg:right-12
            "
          >
            <span
              className="
                text-[8px]
                uppercase
                tracking-[0.2em]
                text-white/35
              "
            >
              Scroll to explore
            </span>

            <div
              className="
                h-px
                w-10
                bg-white/20
              "
            />
          </div>
        </div>
      </div>

      {/* =====================================================
          SCROLL DISTANCE
      ====================================================== */}

      <div
        className="
          h-[700vh]
        "
      />
    </section>
  );
}

/* =============================================================
   SERVICE CARD
============================================================= */

function ServiceCard({
  service,
  index,
  total,
  progress,
}: {
  service: (typeof services)[number];
  index: number;
  total: number;
  progress: any;
}) {
  /*
   * Each card gets its own section of the scroll timeline.
   */

  const start = index / total;
  const end = (index + 1) / total;

  /*
   * Cards enter from below and move into their position.
   */

  const y = useTransform(
    progress,
    [
      Math.max(0, start - 0.08),
      start,
      end,
      Math.min(1, end + 0.08),
    ],
    [
      650,
      0,
      0,
      -650,
    ]
  );

  const opacity = useTransform(
    progress,
    [
      Math.max(0, start - 0.08),
      start,
      end,
      Math.min(1, end + 0.08),
    ],
    [0, 1, 1, 0]
  );

  const scale = useTransform(
    progress,
    [
      Math.max(0, start - 0.08),
      start,
      end,
      Math.min(1, end + 0.08),
    ],
    [0.94, 1, 1, 0.94]
  );

  /*
   * Alternating sides:
   *
   * 01 → right
   * 02 → left
   * 03 → right
   * 04 → left
   */

  const isRight = index % 2 === 0;

  return (
    <motion.article
      style={{
        y,
        opacity,
        scale,
      }}
      className={`
        absolute
        top-1/2
        w-full
        max-w-[700px]
        -translate-y-1/2
        ${isRight ? "right-0" : "left-0"}
      `}
    >
      <div
        className="
          group
          relative
          overflow-hidden
          border
          border-white/15
          bg-[#111111]/95
          backdrop-blur-xl
          transition-colors
          duration-500
          hover:border-[#EFB9C1]/40
        "
      >
        {/* Top line */}

        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-white/10
            px-6
            py-4
            md:px-8
          "
        >
          <span
            className="
              text-[9px]
              font-medium
              tracking-[0.18em]
              text-[#EFB9C1]
            "
          >
            {service.number}
          </span>

          <ArrowUpRight
            size={16}
            strokeWidth={1.4}
            className="
              text-white/30
              transition-all
              duration-300
              group-hover:-translate-y-1
              group-hover:translate-x-1
              group-hover:text-[#EFB9C1]
            "
          />
        </div>

        {/* Main content */}

        <div
          className="
            grid
            gap-8
            px-6
            py-7
            md:grid-cols-[1fr_1fr]
            md:px-8
            md:py-8
          "
        >
          {/* Title */}

          <div>
            <h3
              className="
                max-w-[400px]
                text-[30px]
                font-medium
                leading-[0.95]
                tracking-[-0.045em]
                text-white
                md:text-[38px]
              "
            >
              {service.title}
            </h3>
          </div>

          {/* Description + list */}

          <div>
            <p
              className="
                text-[12px]
                leading-[1.65]
                text-white/50
                md:text-[13px]
              "
            >
              {service.description}
            </p>

            <div
              className="
                mt-5
                grid
                grid-cols-2
                gap-x-4
                gap-y-2
              "
            >
              {service.items.map((item) => (
                <div
                  key={item}
                  className="
                    flex
                    items-start
                    gap-2
                    text-[9px]
                    leading-[1.4]
                    text-white/45
                  "
                >
                  <span
                    className="
                      mt-[4px]
                      h-1
                      w-1
                      shrink-0
                      rounded-full
                      bg-[#44345D]
                    "
                  />

                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom accent */}

        <div
          className="
            h-[2px]
            w-0
            bg-[#EFB9C1]
            transition-all
            duration-700
            group-hover:w-full
          "
        />
      </div>
    </motion.article>
  );
}