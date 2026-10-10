"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Social Media Strategy, Content Creation & Management",
    description:
      "We build engaging and consistent social media presences that strengthen brand visibility and create meaningful relationships with audiences.",
    items: [
      "Social media strategy",
      "Content planning & calendars",
      "Creative design",
      "Photography & videography",
      "Reels & short-form video",
      "Posting & account management",
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
      "We create interactive brand experiences that bring audiences closer to businesses and give them memorable reasons to engage, connect and share.",
    items: [
      "Product launches",
      "Retail & in-store activations",
      "Pop-up experiences",
      "Influencer & media events",
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
      "Monogramming & initials",
      "Name personalisation",
      "Precision engraving",
      "Embroidery",
      "Custom packaging",
      "Premium corporate & event gifting",
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
      "We provide premium printing solutions with sharp quality, vibrant colour reproduction and carefully finished results for brand and marketing requirements.",
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
  return (
    <section
      id="services"
      className="
        relative
        bg-[#F7F7F5]
        text-black
      "
    >
      {/* =====================================================
          FIXED / STICKY BACKGROUND
      ====================================================== */}

      <div
        className="
          sticky
          top-0
          z-0
          h-[100svh]
          min-h-[680px]
          overflow-hidden
        "
      >
        {/* Background atmosphere */}

        <div className="absolute inset-0 bg-white" />

        {/* Purple glow */}

        <div
          className="
            absolute
            -left-[20%]
            top-[10%]
            h-[600px]
            w-[600px]
            rounded-full
            bg-white/15
            blur-[150px]
          "
        />

        {/* Pink glow */}

        <div
          className="
            absolute
            -right-[15%]
            bottom-[5%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-white/[0.05]
            blur-[150px]
          "
        />

        {/* Huge background word */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            whitespace-nowrap
            text-[24vw]
            font-medium
            leading-none
            tracking-[-0.1em]
            text-black/[0.035]
            select-none
          "
        >
          SERVICES
        </div>

        {/* Subtle center line */}

        <div
          className="
            absolute
            left-1/2
            top-0
            h-full
            w-px
            -translate-x-1/2
            bg-white/[0.035]
          "
        />

        {/* =================================================
            HEADER
        ================================================== */}

        <div
          className="
            absolute
            left-6
            right-6
            top-16
            z-10
            flex
            items-center
            justify-between
            md:left-10
            md:right-10
            lg:left-12
            lg:right-12
          "
        >
          <div className="flex items-center gap-3">
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-emarq-pink
              "
            />

            <span
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.22em]
                text-[#747474]
              "
            >
              Our Services
            </span>
          </div>
        </div>

        {/* =================================================
            FIXED TITLE
        ================================================== */}

        <div
          className="
            absolute
            top-1/2
            left-6
            z-10
            md:left-10
            lg:left-12
          "
        >
          <h2
            className="
              text-[15vw]
              font-medium
              leading-[0.78]
              tracking-[-0.08em]
              sm:text-[12vw]
              md:text-[9vw]
              text-emarq-purple
              lg:text-[7vw]
          "
          >
            What We
            <br />
            <span className="text-emarq-pink">
              Do.
            </span>
          </h2>
        </div>

        {/* Scroll indicator */}

        <div
          className="
            absolute
            bottom-8
            right-6
            z-10
            flex
            items-center
            gap-3
            md:right-10
            lg:right-12
          "
        >
          <span
            className="
              text-[9px]
              uppercase
              tracking-[0.2em]
              text-black/80
            "
          >
            Scroll to explore
          </span>

          <span className="h-px w-8 bg-white/20" />
        </div>
      </div>

      <div
        className="
          relative
          z-10
          -mt-[100svh]
        "
      >
        {services.map((service, index) => {
          const isRight = index % 2 === 0;

          return (
            <div
              key={service.number}
              className="
                flex
                min-h-[50svh]
                md:min-h-[100svh]
                items-center
                px-6
                py-24
                md:px-10
                lg:px-12
              "
            >
              <div
                className={`
                  w-full
                  ${
                    isRight
                      ? "flex justify-end"
                      : "flex justify-start"
                  }
                `}
              >
                <ServiceCard service={service} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* =============================================================
   SERVICE CARD
============================================================= */

function ServiceCard({
  service,
}: {
  service: (typeof services)[number];
}) {
  return (
    <motion.article
      initial="rest"
      whileHover="hover"
      variants={{
        rest: {},
        hover: {},
      }}
      className="
        group
        relative
        w-full
        max-w-[620px]
      "
    >
      <div
        className="
          relative
          overflow-hidden
          border
          border-white/15
          bg-[#101010]/95
          shadow-[0_30px_100px_rgba(0,0,0,0.45)]
          backdrop-blur-sm
        "
      >
        {/* =================================================
            CARD HEADER
        ================================================== */}

        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-white/10
            px-5
            py-4
            md:px-7
          "
        >
          <span
            className="
              text-[9px]
              font-medium
              tracking-[0.2em]
              text-[#EFB9C1]
            "
          >
            {service.number}
          </span>

          <ArrowUpRight
            size={17}
            strokeWidth={1.4}
            className="
              text-white/30
              transition-all
              duration-500
              group-hover:-translate-y-1
              group-hover:translate-x-1
              group-hover:text-[#EFB9C1]
            "
          />
        </div>

        {/* =================================================
            CONTENT
        ================================================== */}

        <div className="px-5 py-7 md:px-7 md:py-8">
          <h3
            className="
              max-w-[540px]
              text-[28px]
              font-medium
              leading-[0.94]
              tracking-[-0.045em]
              text-white
              md:text-[36px]
              lg:text-[40px]
            "
          >
            {service.title}
          </h3>

          <p
            className="
              mt-5
              max-w-[520px]
              text-[12px]
              leading-[1.65]
              text-white/45
              md:text-[14px]
            "
          >
            {service.description}
          </p>

          {/* Service list */}

          <div
            className="
              mt-6
              grid
              grid-cols-2
              gap-x-5
              gap-y-2
              border-t
              border-white/10
              pt-5
            "
          >
            {service.items.map((item) => (
              <div
                key={item}
                className="
                  flex
                  items-start
                  gap-2
                  text-[10px]
                  md:text-[12px]
                  leading-[1.45]
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

                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom accent */}

        <div
          className="
            h-[2px]
            w-full
            bg-[#44345D]
            transition-colors
            duration-500
            group-hover:bg-[#EFB9C1]
          "
        />
      </div>
    </motion.article>
  );
}