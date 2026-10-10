"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
    AnimatePresence,
    motion,
} from "motion/react";
import {
    useCallback,
    useEffect,
    useState,
} from "react";

import { services } from "./servicesData";

export default function Services() {
    const [active, setActive] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    /* ==========================================================
       NAVIGATION
    ========================================================== */

    const next = useCallback(() => {
        setActive((current) => (current + 1) % services.length);
    }, []);

    const previous = useCallback(() => {
        setActive(
            (current) =>
                (current - 1 + services.length) % services.length,
        );
    }, []);

    /* ==========================================================
       AUTO CAROUSEL
    ========================================================== */

    useEffect(() => {
        if (isPaused) return;

        const timer = window.setInterval(() => {
            setActive(
                (current) => (current + 1) % services.length,
            );
        }, 4500);

        return () => {
            window.clearInterval(timer);
        };
    }, [isPaused]);

    return (
        <section
            id="services"
            className="
        relative
        h-[100svh]
        min-h-[650px]
        overflow-hidden
        bg-[#090909]
        text-white
      "
        >
            {/* =====================================================
          BACKGROUND
      ===================================================== */}

            <div className="pointer-events-none absolute inset-0">

                {/* Subtle grid */}

                <div
                    className="
            absolute
            inset-0
            opacity-[0.022]
            [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)]
            [background-size:90px_90px]
          "
                />

                {/* =================================================
            HUGE BACKGROUND WORD
        ================================================= */}

                <div
                    className="
            absolute
            left-1/2
            top-[53%]
            -translate-x-1/2
            -translate-y-1/2
            whitespace-nowrap
            text-[clamp(7rem,19vw,21rem)]
            font-black
            uppercase
            leading-none
            tracking-[-0.09em]
            text-white/[0.018]
          "
                >
                    SERVICES
                </div>

                {/* Secondary ghost text */}

                <div
                    className="
            absolute
            bottom-[12%]
            left-1/2
            -translate-x-1/2
            whitespace-nowrap
            text-[8px]
            font-medium
            uppercase
            tracking-[0.7em]
            text-white/[0.08]
          "
                >
                    Strategy · Creative · Production · Experiences
                </div>

                {/* =================================================
            PURPLE GLOW
        ================================================= */}

                <motion.div
                    animate={{
                        scale: [1, 1.08, 1],
                        opacity: [0.07, 0.13, 0.07],
                    }}
                    transition={{
                        duration: 14,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="
            absolute
            left-1/2
            top-[55%]
            h-[480px]
            w-[680px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-emarq-purple
            blur-[180px]
          "
                />

                {/* Pink glow */}

                <motion.div
                    animate={{
                        x: [-40, 40, -40],
                        opacity: [0.025, 0.06, 0.025],
                    }}
                    transition={{
                        duration: 16,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="
            absolute
            bottom-[-120px]
            left-1/2
            h-[280px]
            w-[420px]
            -translate-x-1/2
            rounded-full
            bg-emarq-pink
            blur-[150px]
          "
                />

                {/* Center radial light */}

                <div
                    className="
            absolute
            left-1/2
            top-[54%]
            h-[280px]
            w-[280px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-emarq-pink/[0.025]
            blur-[80px]
          "
                />
            </div>

            {/* =====================================================
          MAIN VIEWPORT
      ===================================================== */}

            <div
                className="
          relative
          z-10
          mx-auto
          flex
          h-full
          w-full
          max-w-[1600px]
          flex-col
          px-5
          py-4
          md:px-8
          md:py-5
          lg:px-12
        "
            >

                {/* ===================================================
            TOP BAR
        =================================================== */}

                <div
                    className="
            flex
            shrink-0
            items-center
            justify-between
            border-b
            border-white/[0.08]
            pb-3
          "
                >
                    <div
                        className="
              flex
              items-center
              gap-3
              text-[9px]
              font-bold
              uppercase
              tracking-[0.3em]
              text-emarq-pink
            "
                    >
                        <span className="h-px w-7 bg-emarq-pink" />

                        Services
                    </div>

                    <div
                        className="
              hidden
              text-[8px]
              uppercase
              tracking-[0.28em]
              text-white/20
              md:block
            "
                    >
                        Digital · Creative · Production
                    </div>
                </div>

                {/* ===================================================
            CAROUSEL STAGE
        =================================================== */}

                <div
                    className="
            relative
            min-h-0
            flex-1
          "
                >

                    {/* =================================================
              ACTIVE SERVICE CONTENT

              Deliberately higher than the carousel.
          ================================================= */}

                    <div
                        className="
              absolute
              left-1/2
              top-[3%]
              z-40
              w-[calc(100%-30px)]
              max-w-5xl
              -translate-x-1/2
              text-center
            "
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={services[active].number}
                                initial={{
                                    opacity: 0,
                                    y: 24,
                                    filter: "blur(7px)",
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    filter: "blur(0px)",
                                }}
                                exit={{
                                    opacity: 0,
                                    y: -20,
                                    filter: "blur(7px)",
                                }}
                                transition={{
                                    duration: 0.55,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                            >
                                {/* Number */}

                                <div
                                    className="
                    mb-2
                    text-[9px]
                    font-bold
                    tracking-[0.35em]
                    text-emarq-pink
                  "
                                >
                                    {services[active].number}
                                </div>

                                {/* Title */}

                                <h2
                                    className="
                    text-[clamp(2.8rem,5vw,5.2rem)]
                    font-black
                    leading-[0.84]
                    tracking-[-0.075em]
                  "
                                >
                                    {services[active].title}
                                </h2>

                                {/* Description */}

                                <p
                                    className="
                    mx-auto
                    mt-4
                    max-w-md
                    text-xs
                    leading-5
                    text-white/40
                    md:text-sm
                    md:leading-5
                  "
                                >
                                    {services[active].description}
                                </p>

                                {/* Capabilities */}

                                <div
                                    className="
                    mt-4
                    flex
                    flex-wrap
                    justify-center
                    gap-1.5
                  "
                                >
                                    {services[active].capabilities
                                        .slice(0, 4)
                                        .map((capability) => (
                                            <span
                                                key={capability}
                                                className="
                          rounded-full
                          border
                          border-white/10
                          bg-white/[0.025]
                          px-2.5
                          py-1
                          text-[7px]
                          uppercase
                          tracking-[0.14em]
                          text-white/35
                        "
                                            >
                                                {capability}
                                            </span>
                                        ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* =================================================
              SEMI CIRCLE

              More separation from content.
          ================================================= */}

                    <div
                        className="
              pointer-events-none
              absolute
              left-1/2
              top-[54%]
              h-[270px]
              w-[650px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-[50%_50%_0_0]
              border
              border-white/[0.08]
              border-b-0
              md:h-[310px]
              md:w-[850px]
              lg:h-[330px]
              lg:w-[940px]
            "
                    />

                    {/* Inner arc */}

                    <div
                        className="
              pointer-events-none
              absolute
              left-1/2
              top-[54%]
              h-[225px]
              w-[540px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-[50%_50%_0_0]
              border
              border-emarq-pink/[0.05]
              border-b-0
              md:h-[260px]
              md:w-[730px]
              lg:h-[275px]
              lg:w-[800px]
            "
                    />

                    {/* =================================================
              ORBIT IMAGES
          ================================================= */}

                    {services.map((service, index) => (
                        <OrbitImage
                            key={service.number}
                            service={service}
                            index={index}
                            active={active}
                            total={services.length}
                            onClick={() => setActive(index)}
                            onTogglePause={() => setIsPaused((paused) => !paused)}
                            onHoverPause={() => setIsPaused(true)}
                            onHoverResume={() => setIsPaused(false)}

                        />
                    ))}

                    {/* =================================================
              CONTROLS
          ================================================= */}

                    <div
                        className="
              absolute
              bottom-[4%]
              left-1/2
              z-50
              flex
              -translate-x-1/2
              items-center
              gap-2
            "
                    >
                        {/* Previous */}

                        <motion.button
                            type="button"
                            onClick={previous}
                            whileHover={{
                                scale: 1.08,
                            }}
                            whileTap={{
                                scale: 0.94,
                            }}
                            aria-label="Previous service"
                            className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-white/15
                bg-white/[0.02]
                text-white/50
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-emarq-pink
                hover:bg-emarq-pink
                hover:text-emarq-purple
              "
                        >
                            <ArrowLeft size={15} />
                        </motion.button>

                        {/* Next */}

                        <motion.button
                            type="button"
                            onClick={next}
                            whileHover={{
                                scale: 1.08,
                            }}
                            whileTap={{
                                scale: 0.94,
                            }}
                            aria-label="Next service"
                            className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-white/15
                bg-white/[0.02]
                text-white/50
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-emarq-pink
                hover:bg-emarq-pink
                hover:text-emarq-purple
              "
                        >
                            <ArrowRight size={15} />
                        </motion.button>
                    </div>

                    {/* =================================================
              COUNTER
          ================================================= */}

                    <div
                        className="
              absolute
              bottom-[5%]
              right-0
              text-[8px]
              font-bold
              tracking-[0.3em]
              text-white/20
            "
                    >
                        {String(active + 1).padStart(2, "0")} /{" "}
                        {String(services.length).padStart(2, "0")}
                    </div>

                    {/* =================================================
              AUTO PLAY PROGRESS
          ================================================= */}

                    {!isPaused && (
                        <motion.div
                            key={active}
                            initial={{
                                width: "0%",
                            }}
                            animate={{
                                width: "100%",
                            }}
                            transition={{
                                duration: 4.5,
                                ease: "linear",
                            }}
                            className="
                absolute
                bottom-0
                left-0
                h-px
                bg-emarq-pink/30
              "
                        />
                    )}
                </div>
            </div>
        </section>
    );
}

/* ============================================================
   ORBIT IMAGE
============================================================ */

function OrbitImage({
    service,
    index,
    active,
    total,
    onClick,
    onTogglePause,
    onHoverPause,
    onHoverResume,
}: {
    service: (typeof services)[number];
    index: number;
    active: number;
    total: number;
    onClick: () => void;
    onTogglePause: () => void;
    onHoverPause: () => void;
    onHoverResume: () => void;
}) {
    let relativeIndex = index - active;

    /* Circular positioning */

    if (relativeIndex > total / 2) {
        relativeIndex -= total;
    }

    if (relativeIndex < -total / 2) {
        relativeIndex += total;
    }

    /*
     * Semi-circle positions.
     *
     * Center is deliberately larger and
     * slightly lower than the surrounding images.
     */

    const positions = [
        {
            x: -420,
            y: 185,
            rotate: -16,
        },
        {
            x: -305,
            y: 82,
            rotate: -10,
        },
        {
            x: -160,
            y: 18,
            rotate: -5,
        },
        {
            x: 0,
            y: 12,
            rotate: 0,
        },
        {
            x: 160,
            y: 18,
            rotate: 5,
        },
        {
            x: 305,
            y: 82,
            rotate: 10,
        },
        {
            x: 420,
            y: 185,
            rotate: 16,
        },
    ];

    const positionIndex = relativeIndex + 3;

    const position =
        positions[positionIndex] ?? positions[3];

    const isActive = relativeIndex === 0;

    return (
        <motion.button
            type="button"
            onClick={() => {
                onClick();

                if (isActive) {
                    onTogglePause();
                }
            }}
            onMouseEnter={() => {
                if (isActive) {
                    onHoverPause();
                }
            }}
            onMouseLeave={() => {
                if (isActive) {
                    onHoverResume();
                }
            }}
            animate={{
                x: position.x,
                y: position.y,
                rotate: position.rotate,

                /*
                 * Larger active image.
                 */

                scale: isActive ? 1.48 : 0.68,

                opacity:
                    Math.abs(relativeIndex) > 3
                        ? 0
                        : isActive
                            ? 1
                            : 0.38,
            }}
            transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
            }}
            className="
        absolute
        left-1/2
        top-[54%]
        z-20
        h-[135px]
        w-[96px]
        -translate-x-1/2
        -translate-y-1/2
        overflow-hidden
        rounded-[1.1rem]
        border
        border-white/15
        bg-[#111]
        shadow-[0_30px_80px_rgba(0,0,0,0.5)]
        md:h-[155px]
        md:w-[112px]
        lg:h-[165px]
        lg:w-[120px]
      "
        >
            {/* =================================================
          IMAGE
      ================================================= */}

            <Image
                src={service.image}
                alt={service.title}
                fill
                className={`
          object-cover
          transition-all
          duration-700
          ${isActive
                        ? "grayscale-0"
                        : "grayscale"
                    }
        `}
                sizes="180px"
            />

            {/* =================================================
          OVERLAY
      ================================================= */}

            <div
                className={`
          absolute
          inset-0
          transition-all
          duration-500
          ${isActive
                        ? "bg-emarq-purple/10"
                        : "bg-black/55"
                    }
        `}
            />

            {/* =================================================
          NUMBER
      ================================================= */}

            <span
                className="
          absolute
          left-3
          top-3
          text-[8px]
          font-bold
          tracking-[0.2em]
          text-white/75
        "
            >
                {service.number}
            </span>

            {/* =================================================
          ACTIVE PINK LIGHT
      ================================================= */}

            {isActive && (
                <>
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: [0.08, 0.24, 0.08],
                        }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="
              absolute
              inset-0
              bg-emarq-pink/20
              "
                    />

                    {/* Active border */}

                    <div
                        className="
              absolute
              inset-0
              rounded-[1.1rem]
              border
              border-emarq-pink/35
            "
                    />
                </>
            )}
        </motion.button>
    );
}