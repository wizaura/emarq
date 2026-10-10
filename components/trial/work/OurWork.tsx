"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import {
    ArrowDown,
    ArrowUpRight,
    X,
} from "lucide-react";
import { useState } from "react";

/* =========================================================
   TYPES
========================================================= */

type Project = {
    id: number;
    title: string;
    client: string;
    category: string;
    description: string;
    image: string;
};

type Position = {
    desktop: string;
    rotate: number;
    zIndex: number;
};

/* =========================================================
   CATEGORIES
========================================================= */

const categories = [
    "All",
    "Brand Activations",
    "Personalisation Experiences",
    "Social Media",
    "Branding & Design",
    "Photography & Videography",
    "Printing & Gifting",
    "Fit-Out & Branded Spaces",
];

/* =========================================================
   PROJECTS
========================================================= */

const projects: Project[] = [
    {
        id: 1,
        title: "Brand Activation",
        client: "Approved Client",
        category: "Brand Activations",
        description:
            "A bold brand experience designed to create attention, interaction and lasting recall.",
        image: "/images/emarq-hero.jpg",
    },
    {
        id: 2,
        title: "Personalised Experience",
        client: "Approved Client",
        category: "Personalisation Experiences",
        description:
            "A personalised experience crafted to make every brand interaction feel considered.",
        image: "/work/work-02.jpg",
    },
    {
        id: 3,
        title: "Social First",
        client: "Approved Client",
        category: "Social Media",
        description:
            "Content and social campaigns built to stop the scroll and start conversations.",
        image: "/work/work-03.jpg",
    },
    {
        id: 4,
        title: "Brand Identity",
        client: "Approved Client",
        category: "Branding & Design",
        description:
            "A distinctive visual identity translating strategy into a memorable brand language.",
        image: "/work/work-04.jpg",
    },
    {
        id: 5,
        title: "Visual Storytelling",
        client: "Approved Client",
        category: "Photography & Videography",
        description:
            "Photography and film created to capture the energy, emotion and personality of a brand.",
        image: "/work/work-05.jpg",
    },
    {
        id: 6,
        title: "Branded Spaces",
        client: "Approved Client",
        category: "Fit-Out & Branded Spaces",
        description:
            "Physical spaces transformed into immersive brand environments.",
        image: "/work/work-06.jpg",
    },
];

/* =========================================================
   SCATTERED WINDOW POSITIONS
========================================================= */

const positions: Position[] = [
    {
        // Project 01 — top center
        desktop:
            "left-[35%] top-[8%] w-[220px] md:w-[270px] lg:w-[290px]",
        rotate: 3,
        zIndex: 8,
    },
    {
        // Project 02 — top right
        desktop:
            "right-[5%] top-[10%] w-[220px] md:w-[280px] lg:w-[300px]",
        rotate: -4,
        zIndex: 7,
    },
    {
        // Project 03 — left / lower
        desktop:
            "left-[25%] top-[57%] w-[220px] md:w-[275px] lg:w-[300px]",
        rotate: -3,
        zIndex: 6,
    },
    {
        // Project 04 — center right
        desktop:
            "right-[27%] top-[47%] w-[230px] md:w-[290px] lg:w-[315px]",
        rotate: 4,
        zIndex: 5,
    },
    {
        // Project 05 — bottom center
        desktop:
            "left-[48%] top-[72%] w-[210px] md:w-[260px] lg:w-[280px]",
        rotate: -2,
        zIndex: 4,
    },
    {
        // Project 06 — bottom right
        desktop:
            "right-[4%] top-[68%] w-[200px] md:w-[250px] lg:w-[270px]",
        rotate: 5,
        zIndex: 3,
    },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function OurWork() {
    const [activeCategory, setActiveCategory] = useState("All");

    const [selectedProject, setSelectedProject] =
        useState<Project | null>(null);

    const filteredProjects =
        activeCategory === "All"
            ? projects
            : projects.filter(
                (project) => project.category === activeCategory
            );

    return (
        <>
            {/* =====================================================
          MAIN SECTION
      ===================================================== */}

            <section
                id="work"
                className="
          relative
          min-h-[100svh]
          overflow-hidden
          bg-[#44345D]
          text-[#F7F7F5]
        "
            >
                {/* ===================================================
            FIXED / ATMOSPHERIC BACKGROUND
        =================================================== */}

                <div className="pointer-events-none absolute inset-0">
                    {/* Architectural grid */}
                    <div
                        className="
              absolute
              inset-0
              opacity-[0.055]
              bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]
              bg-[size:80px_80px]
            "
                    />

                    {/* Large background word */}
                    <div
                        className="
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              whitespace-nowrap
              select-none
              text-[27vw]
              font-black
              uppercase
              leading-none
              tracking-[-0.1em]
              text-white/[0.025]
            "
                    >
                        EMARQ
                    </div>

                    {/* Pink ambient light */}
                    <div
                        className="
              absolute
              -left-[180px]
              top-[5%]
              h-[520px]
              w-[520px]
              rounded-full
              bg-[#EFB9C1]/10
              blur-[150px]
            "
                    />

                    {/* Second ambient light */}
                    <div
                        className="
              absolute
              -right-[200px]
              bottom-[0]
              h-[600px]
              w-[600px]
              rounded-full
              bg-[#EFB9C1]/10
              blur-[170px]
            "
                    />

                    {/* Center glow */}
                    <div
                        className="
              absolute
              left-1/2
              top-1/2
              h-[300px]
              w-[300px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-white/[0.025]
              blur-[100px]
            "
                    />
                </div>

                {/* ===================================================
            DESKTOP ROOM / WINDOWS
        =================================================== */}

                <div
                    className="
            relative
            hidden
            min-h-[calc(100svh-70px)]
            md:block
          "
                >
                    {/* =================================================
              HEADER WINDOW
          ================================================= */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 50,
                            rotate: -3,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            rotate: -3,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        transition={{
                            duration: 0.8,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="
              absolute
              left-[5%]
              top-[8%]
              z-20
              w-[320px]
              bg-[#F7F7F5]
              p-7
              text-[#090909]
              shadow-[0_35px_90px_rgba(0,0,0,0.25)]
              md:w-[370px]
              md:p-9
              lg:w-[400px]
            "
                    >
                        {/* Header top */}
                        <div className="mb-16 flex items-center justify-between">
                            <span className="text-[10px] uppercase tracking-[0.2em] text-black/40">
                                Selected Work
                            </span>

                            <span className="h-2 w-2 rounded-full bg-[#EFB9C1]" />
                        </div>

                        {/* Main heading */}
                        <h2
                            className="
                text-[4.5rem]
                font-medium
                leading-[0.8]
                tracking-[-0.07em]
                md:text-[5rem]
              "
                        >
                            Our
                            <br />
                            <span className="text-[#44345D]">
                                Work.
                            </span>
                        </h2>

                        {/* Description */}
                        <p
                            className="
                mt-10
                max-w-[270px]
                text-sm
                leading-[1.65]
                text-black/55
              "
                        >
                            Ideas, experiences and visual stories created
                            to make brands impossible to overlook.
                        </p>

                        {/* Bottom */}
                        <div
                            className="
                mt-6
                flex
                items-center
                justify-between
                border-t
                border-black/10
                pt-4
              "
                        >
                            <span className="text-[9px] uppercase tracking-[0.18em] text-black/40">
                                Explore the work
                            </span>

                            <motion.div
                                animate={{
                                    y: [0, 4, 0],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                <ArrowDown
                                    size={17}
                                    strokeWidth={1.4}
                                />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* =================================================
              PROJECT WINDOWS
          ================================================= */}

                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map(
                            (project, index) => {
                                const position =
                                    positions[index % positions.length];

                                return (
                                    <ProjectWindow
                                        key={project.id}
                                        project={project}
                                        position={position}
                                        index={index}
                                        onOpen={() =>
                                            setSelectedProject(project)
                                        }
                                    />
                                );
                            }
                        )}
                    </AnimatePresence>

                    {/* =================================================
              FLOATING FILTER
          ================================================= */}

                    <div
                        className="
              absolute
              bottom-[5%]
              left-[5%]
              z-30
              max-w-[420px]
            "
                    >
                        <div
                            className="
                flex
                max-w-full
                flex-wrap
                gap-2
              "
                        >
                            {categories.map((category) => {
                                const active =
                                    activeCategory === category;

                                return (
                                    <button
                                        key={category}
                                        type="button"
                                        onClick={() =>
                                            setActiveCategory(category)
                                        }
                                        className={`
                      rounded-full
                      border
                      px-3.5
                      py-2
                      text-[9px]
                      uppercase
                      tracking-[0.12em]
                      backdrop-blur-md
                      transition-all
                      duration-300

                      ${active
                                                ? "border-[#EFB9C1] bg-emarq-purple text-white"
                                                : "border-emarq-pink bg-emarq-pink text-black/80 hover:border-white/30 hover:text-emarq-purple/50"
                                            }
                    `}
                                    >
                                        {category}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* =================================================
              ROOM DETAILS
          ================================================= */}

                    <div
                        className="
              pointer-events-none
              absolute
              right-[4%]
              top-[48%]
              z-10
              hidden
              -translate-y-1/2
              lg:block
            "
                    >
                        <div
                            className="
                flex
                flex-col
                items-end
                gap-2
                text-right
              "
                        >
                            <span className="text-[9px] uppercase tracking-[0.2em] text-white/30">
                                Ideas / Experiences
                            </span>

                            <span className="text-[9px] uppercase tracking-[0.2em] text-white/30">
                                Digital / Physical
                            </span>

                            <span className="text-[9px] uppercase tracking-[0.2em] text-white/30">
                                Strategy / Production
                            </span>
                        </div>
                    </div>

                    {/* Vertical room line */}
                    <div
                        className="
              pointer-events-none
              absolute
              bottom-0
              right-[3%]
              top-[20%]
              hidden
              w-px
              bg-white/10
              lg:block
            "
                    />
                </div>

                {/* ===================================================
            MOBILE VERSION
        =================================================== */}

                <div
                    className="
            relative
            z-10
            block
            px-5
            pb-20
            pt-12
            md:hidden
          "
                >
                    {/* Header card */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 30,
                            rotate: -2,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            rotate: -2,
                        }}
                        viewport={{
                            once: true,
                        }}
                        className="
              mb-16
              bg-[#F7F7F5]
              p-7
              text-[#090909]
              shadow-[0_25px_60px_rgba(0,0,0,0.2)]
            "
                    >
                        <div className="mb-14 flex items-center justify-between">
                            <span className="text-[9px] uppercase tracking-[0.2em] text-black/40">
                                Selected Work
                            </span>

                            <span className="h-2 w-2 rounded-full bg-[#EFB9C1]" />
                        </div>

                        <h2
                            className="
                text-[4.5rem]
                font-medium
                leading-[0.8]
                tracking-[-0.07em]
              "
                        >
                            Our
                            <br />
                            <span className="text-[#44345D]">
                                Work.
                            </span>
                        </h2>

                        <p className="mt-9 max-w-[270px] text-sm leading-[1.65] text-black/55">
                            Ideas, experiences and visual stories created
                            to make brands impossible to overlook.
                        </p>
                    </motion.div>

                    {/* Mobile filters */}
                    <div className="mb-12 overflow-x-auto [scrollbar-width:none]
                        [-ms-overflow-style:none]
                        [&::-webkit-scrollbar]:hidden">
                        <div className="flex min-w-max gap-2">
                            {categories.map((category) => {
                                const active =
                                    activeCategory === category;

                                return (
                                    <button
                                        key={category}
                                        type="button"
                                        onClick={() =>
                                            setActiveCategory(category)
                                        }
                                        className={`
                      rounded-full
                      border
                      px-4
                      py-2.5
                      text-[9px]
                      uppercase
                      tracking-[0.12em]
                      transition-all
                      ${active
                                                ? "border-[#EFB9C1] bg-[#EFB9C1] text-[#090909]"
                                                : "border-white/15 bg-white/[0.04] text-white/50"
                                            }
                    `}
                                    >
                                        {category}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Mobile project windows */}
                    <div className="space-y-12">
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map(
                                (project, index) => (
                                    <motion.div
                                        key={project.id}
                                        layout
                                        initial={{
                                            opacity: 0,
                                            y: 35,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        exit={{
                                            opacity: 0,
                                            scale: 0.96,
                                        }}
                                        transition={{
                                            duration: 0.5,
                                            delay: index * 0.05,
                                        }}
                                    >
                                        <ProjectWindow
                                            project={project}
                                            position={{
                                                desktop: "relative w-full",
                                                rotate:
                                                    index % 2 === 0
                                                        ? -2
                                                        : 2,
                                                zIndex: 1,
                                            }}
                                            index={index}
                                            onOpen={() =>
                                                setSelectedProject(project)
                                            }
                                            mobile
                                        />
                                    </motion.div>
                                )
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* ===================================================
            BOTTOM STATEMENT
        =================================================== */}

                <div
                    className="
            relative
            z-30
            hidden
            border-t
            border-white/10
            px-6
            py-7
            md:flex
            md:items-center
            md:justify-between
            md:px-10
            lg:px-16
          "
                >
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                        Good work gets attention.
                    </p>

                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#EFB9C1]">
                        Great work gets remembered.
                    </p>

                    <a
                        href="#contact"
                        className="
              group
              flex
              items-center
              gap-3
              text-[10px]
              uppercase
              tracking-[0.18em]
              text-white/60
              transition-colors
              hover:text-white
            "
                    >
                        Start a project

                        <span
                            className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                transition-all
                duration-300
                group-hover:border-[#EFB9C1]
                group-hover:bg-[#EFB9C1]
                group-hover:text-[#090909]
              "
                        >
                            <ArrowUpRight
                                size={14}
                                strokeWidth={1.5}
                            />
                        </span>
                    </a>
                </div>
            </section>

            {/* =====================================================
          LIGHTBOX
      ===================================================== */}

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="
              fixed
              inset-0
              z-[200]
              flex
              items-center
              justify-center
              bg-[#090909]/90
              p-5
              backdrop-blur-lg
              md:p-10
            "
                        onClick={() =>
                            setSelectedProject(null)
                        }
                    >
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 35,
                                scale: 0.96,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                            }}
                            exit={{
                                opacity: 0,
                                y: 20,
                                scale: 0.97,
                            }}
                            transition={{
                                duration: 0.45,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="
                relative
                max-h-[90vh]
                w-full
                max-w-6xl
                overflow-hidden
                bg-[#F7F7F5]
                text-[#090909]
              "
                            onClick={(event) =>
                                event.stopPropagation()
                            }
                        >
                            {/* Close */}
                            <button
                                type="button"
                                onClick={() =>
                                    setSelectedProject(null)
                                }
                                className="
                  absolute
                  right-4
                  top-4
                  z-20
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  bg-[#F7F7F5]/90
                  text-[#090909]
                  shadow-lg
                  backdrop-blur-md
                  transition-transform
                  hover:scale-105
                "
                                aria-label="Close project"
                            >
                                <X
                                    size={19}
                                    strokeWidth={1.5}
                                />
                            </button>

                            <div
                                className="
                  grid
                  max-h-[90vh]
                  overflow-y-auto
                  lg:grid-cols-[1.35fr_0.65fr]
                "
                            >
                                {/* Image */}
                                <div
                                    className="
                    relative
                    aspect-[4/3]
                    min-h-[300px]
                    bg-[#44345D]
                    lg:aspect-auto
                    lg:min-h-[650px]
                  "
                                >
                                    <Image
                                        src={selectedProject.image}
                                        alt={`${selectedProject.title} — ${selectedProject.client}`}
                                        fill
                                        sizes="
                      (max-width: 1024px) 100vw,
                      65vw
                    "
                                        className="object-cover"
                                    />
                                </div>

                                {/* Details */}
                                <div
                                    className="
                    flex
                    flex-col
                    justify-between
                    p-7
                    md:p-10
                    lg:p-12
                  "
                                >
                                    <div>
                                        <div
                                            className="
                        mb-10
                        flex
                        items-center
                        justify-between
                      "
                                        >
                                            <span
                                                className="
                          text-[9px]
                          uppercase
                          tracking-[0.2em]
                          text-black/40
                        "
                                            >
                                                {selectedProject.category}
                                            </span>

                                            <span
                                                className="
                          text-[9px]
                          uppercase
                          tracking-[0.2em]
                          text-black/30
                        "
                                            >
                                                {String(
                                                    selectedProject.id
                                                ).padStart(2, "0")}
                                            </span>
                                        </div>

                                        <h3
                                            className="
                        text-4xl
                        font-medium
                        leading-[0.9]
                        tracking-[-0.05em]
                        md:text-5xl
                      "
                                        >
                                            {selectedProject.title}
                                        </h3>

                                        <p className="mt-4 text-sm text-black/50">
                                            {selectedProject.client}
                                        </p>

                                        <div className="my-9 h-px bg-black/10" />

                                        <p
                                            className="
                        text-base
                        leading-[1.7]
                        text-black/60
                      "
                                        >
                                            {selectedProject.description}
                                        </p>
                                    </div>

                                    <div
                                        className="
                      mt-12
                      border-t
                      border-black/10
                      pt-5
                    "
                                    >
                                        <div className="flex items-center justify-between">
                                            <span
                                                className="
                          text-[9px]
                          uppercase
                          tracking-[0.18em]
                          text-black/40
                        "
                                            >
                                                Emarq
                                            </span>

                                            <span
                                                className="
                          text-[9px]
                          uppercase
                          tracking-[0.18em]
                          text-black/40
                        "
                                            >
                                                Marketing & Production
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

/* =========================================================
   PROJECT WINDOW
========================================================= */

function ProjectWindow({
    project,
    position,
    index,
    onOpen,
    mobile = false,
}: {
    project: Project;
    position: Position;
    index: number;
    onOpen: () => void;
    mobile?: boolean;
}) {
    return (
        <motion.button
            type="button"
            onClick={onOpen}
            initial={{
                opacity: 0,
                y: 45,
                rotate: position.rotate,
            }}
            animate={{
                opacity: 1,
                y: 0,
                rotate: position.rotate,
            }}
            transition={{
                duration: 0.8,
                delay: 0.12 + index * 0.08,
                ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{
                scale: 1.055,
                rotate: 0,
                zIndex: 100,
                transition: {
                    duration: 0.45,
                    ease: [0.16, 1, 0.3, 1],
                },
            }}
            className={`
        group
        text-left
        ${mobile ? "relative block w-full" : `absolute ${position.desktop}`}
      `}
            style={{
                zIndex: position.zIndex,
            }}
        >
            {/* ===================================================
          WINDOW FRAME
      =================================================== */}

            <div
                className="
          overflow-hidden
          bg-[#090909]
          p-[5px]
          shadow-[0_30px_80px_rgba(0,0,0,0.3)]
        "
            >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                        src={project.image}
                        alt={`${project.title} — ${project.client}`}
                        fill
                        sizes="
              (max-width: 768px) 100vw,
              35vw
            "
                        className="
              object-cover
              transition-transform
              duration-700
              ease-[cubic-bezier(0.16,1,0.3,1)]
              group-hover:scale-110
            "
                    />

                    {/* Image tint */}
                    <div
                        className="
              absolute
              inset-0
              bg-[#44345D]/0
              transition-colors
              duration-500
              group-hover:bg-[#44345D]/15
            "
                    />

                    {/* Gradient */}
                    <div
                        className="
              absolute
              inset-x-0
              bottom-0
              h-1/2
              bg-gradient-to-t
              from-black/75
              via-black/20
              to-transparent
            "
                    />

                    {/* Number */}
                    <div
                        className="
              absolute
              left-4
              top-4
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              bg-[#F7F7F5]/90
              text-[10px]
              font-medium
              text-[#090909]
              backdrop-blur-md
            "
                    >
                        {String(project.id).padStart(2, "0")}
                    </div>

                    {/* Arrow */}
                    <div
                        className="
              absolute
              right-4
              top-4
              flex
              h-10
              w-10
              translate-y-2
              items-center
              justify-center
              rounded-full
              bg-[#EFB9C1]
              text-[#090909]
              opacity-0
              transition-all
              duration-400
              group-hover:translate-y-0
              group-hover:opacity-100
            "
                    >
                        <ArrowUpRight
                            size={17}
                            strokeWidth={1.5}
                        />
                    </div>

                    {/* Project information */}
                    <div
                        className="
              absolute
              inset-x-0
              bottom-0
              p-5
              text-white
            "
                    >
                        <p
                            className="
                mb-1
                text-[8px]
                uppercase
                tracking-[0.18em]
                text-white/55
              "
                        >
                            {project.category}
                        </p>

                        <h3
                            className="
                text-lg
                font-medium
                tracking-[-0.025em]
              "
                        >
                            {project.title}
                        </h3>

                        <p className="mt-1 text-[10px] text-white/50">
                            {project.client}
                        </p>
                    </div>
                </div>
            </div>

            {/* Window shadow / bottom edge */}
            <div
                className="
          mx-auto
          h-[5px]
          w-[88%]
          bg-black/30
          blur-[2px]
        "
            />
        </motion.button>
    );
}