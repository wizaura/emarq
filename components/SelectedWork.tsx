"use client";

import Image from "next/image";

const projects = [
  {
    number: "01",
    client: "Approved Client",
    category: "Brand Activation",
    image: "/images/emarq-hero.jpg",
    width: "w-[250px] md:w-[320px]",
    height: "h-[300px] md:h-[390px]",
    margin: "mt-10",
  },
  {
    number: "02",
    client: "Approved Client",
    category: "Personalisation",
    image: "/images/emarq-hero.jpg",
    width: "w-[280px] md:w-[370px]",
    height: "h-[350px] md:h-[440px]",
    margin: "mt-0",
  },
  {
    number: "03",
    client: "Approved Client",
    category: "Social Media",
    image: "/images/emarq-hero.jpg",
    width: "w-[250px] md:w-[310px]",
    height: "h-[290px] md:h-[370px]",
    margin: "mt-14",
  },
  {
    number: "04",
    client: "Approved Client",
    category: "Branding & Design",
    image: "/images/work/work-04.jpg",
    width: "w-[280px] md:w-[350px]",
    height: "h-[330px] md:h-[420px]",
    margin: "mt-5",
  },
  {
    number: "05",
    client: "Approved Client",
    category: "Photography",
    image: "/images/work/work-05.jpg",
    width: "w-[260px] md:w-[330px]",
    height: "h-[320px] md:h-[400px]",
    margin: "mt-12",
  },
  {
    number: "06",
    client: "Approved Client",
    category: "Printing & Gifting",
    image: "/images/work/work-06.jpg",
    width: "w-[270px] md:w-[340px]",
    height: "h-[315px] md:h-[390px]",
    margin: "mt-3",
  },
  {
    number: "07",
    client: "Approved Client",
    category: "Fit-Out & Branded Spaces",
    image: "/images/work/work-07.jpg",
    width: "w-[280px] md:w-[370px]",
    height: "h-[350px] md:h-[430px]",
    margin: "mt-10",
  },
];

export default function SelectedWork() {
  /*
   * Duplicate the projects so the CSS marquee can loop
   * seamlessly without any JavaScript scroll calculations.
   */
  const marqueeProjects = [...projects, ...projects];

  return (
    <section
      id="work"
      className="
        bg-[#090909]
        px-4
        py-20
        sm:px-6
        lg:px-8
      "
    >
      <div
        className="
          relative
          overflow-hidden
          text-white

        "
      >
        {/* =====================================================
            BACKGROUND ATMOSPHERE
        ====================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            -left-[15%]
            top-[20%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#44345D]/10
            blur-[160px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -right-[10%]
            bottom-[10%]
            h-[450px]
            w-[450px]
            rounded-full
            bg-[#EFB9C1]/[0.06]
            blur-[150px]
          "
        />

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div
          className="
            relative
            z-20
            px-6
            md:px-10
            lg:px-12
          "
        >
          <div
            className="
              flex
              items-center
              justify-between
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
                  text-[#EFB9C1]
                "
              >
                Selected Work
              </span>
            </div>

          </div>
        </div>

        {/* =====================================================
            LARGE BACKGROUND WORD
        ====================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-[18%]
            -translate-x-1/2
            select-none
            whitespace-nowrap
            text-[30vw]
            font-medium
            leading-none
            tracking-[-0.12em]
            text-white/[0.025]
          "
        >
          WORK
        </div>

        {/* =====================================================
            AUTOMATIC IMAGE MARQUEE
        ====================================================== */}

        <div
          className="
            relative
            z-10
            mt-8
            overflow-hidden
          "
        >
          <div
            className="
              work-marquee
              flex
              w-max
              items-start
              gap-5
              md:gap-7
              lg:gap-9
            "
          >
            {marqueeProjects.map((project, index) => (
              <article
                key={`${project.number}-${index}`}
                className={`
                  group
                  relative
                  shrink-0
                  ${project.width}
                  ${project.margin}
                `}
              >
                {/* Image */}

                <div
                  className={`
                    relative
                    overflow-hidden
                    bg-[#151515]
                    ${project.height}
                  `}
                >
                  <Image
                    src={project.image}
                    alt={`${project.client} — ${project.category}`}
                    fill
                    sizes="420px"
                    className="
                      object-cover
                      transition-transform
                      duration-1000
                      ease-[cubic-bezier(0.16,1,0.3,1)]
                      group-hover:scale-[1.05]
                    "
                  />

                  {/* subtle overlay */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/40
                      via-transparent
                      to-black/10
                    "
                  />

                  {/* Number */}

                  <span
                    className="
                      absolute
                      left-5
                      top-5
                      font-mono
                      text-[9px]
                      tracking-[0.15em]
                      text-white/80
                    "
                  >
                    {project.number}
                  </span>

                  {/* Hover info */}

                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      right-0
                      translate-y-2
                      p-5
                      opacity-0
                      transition-all
                      duration-500
                      group-hover:translate-y-0
                      group-hover:opacity-100
                    "
                  >
                    <span
                      className="
                        text-[9px]
                        uppercase
                        tracking-[0.18em]
                        text-[#EFB9C1]
                      "
                    >
                      {project.category}
                    </span>

                    <p className="mt-2 text-sm text-white">
                      {project.client}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* =====================================================
            MAIN STATEMENT
        ====================================================== */}

        <div
          className="
            relative
            z-20
            mt-14
            px-6
            md:px-10
            lg:px-12
          "
        >
          <h2
            className="
              max-w-[1100px]
              text-[12vw]
              font-medium
              leading-[0.8]
              tracking-[-0.08em]
              sm:text-[9vw]
              md:text-[7.5vw]
              lg:text-[6.5vw]
            "
          >
            Our Work.
            <br />
            <span className="text-[#EFB9C1]">
              Made to be seen.
            </span>
          </h2>

          <div
            className="
              mt-8
              flex
              flex-col
              justify-between
              gap-6
              md:flex-row
              md:items-end
            "
          >
            <p
              className="
                max-w-[500px]
                text-[13px]
                leading-[1.7]
                text-white/45
                md:text-[15px]
              "
            >
              From brand activations and personalisation
              experiences to content, design and production,
              we create work designed to make an impression.
            </p>

            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.18em]
                text-white/25
              "
            >
              Strategy / Creative / Production
            </span>
          </div>
        </div>

        {/* =====================================================
            BOTTOM
        ====================================================== */}

        <div
          className="
            relative
            z-20
            mx-6
            mt-14
            border-t
            border-white/10
            pt-5
            md:mx-10
            lg:mx-12
          "
        >
        </div>
      </div>
    </section>
  );
}