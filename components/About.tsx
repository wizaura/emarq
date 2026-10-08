"use client";

import { motion } from "motion/react";
import FramedImage from "./ui/FramedImage";

export default function About() {
    return (
        <section
            id="about"
            className="relative overflow-hidden bg-white text-[#090909]"
        >
            {/* Subtle background atmosphere */}
            <div
                className="
                    pointer-events-none absolute
                    -right-[12%] top-[5%]
                    h-[650px] w-[650px]
                    rounded-full
                    bg-[#EFB9C1]/15
                    blur-[120px]
                "
            />

            <div
                className="
                    pointer-events-none absolute
                    -left-[15%] bottom-[5%]
                    h-[500px] w-[500px]
                    rounded-full
                    bg-[#44345D]/[0.05]
                    blur-[110px]
                "
            />

            <div
                className="
                    relative mx-auto max-w-[1440px]
                    px-6 py-20
                    md:px-10
                    lg:px-12
                "
            >
                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8 flex items-center gap-3 md:mb-12"
                >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#EFB9C1]" />

                    <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#44345D]">
                        About Emarq
                    </span>
                </motion.div>

                {/* =====================================================
                    FULL WIDTH HEADING
                ===================================================== */}
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{
                        duration: 0.9,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                    className="
                        max-w-[1280px]
                        text-[12vw]
                        font-medium
                        leading-[0.88]
                        tracking-[-0.07em]
                        sm:text-[9vw]
                        md:text-[7.5vw]
                        lg:text-[6.3vw]
                    "
                >
                    Strategy, Creativity{" "}
                    <span className="text-[#44345D]">
                        and Production.
                    </span>
                </motion.h2>

                {/* =====================================================
                    IMAGE + TEXT
                ===================================================== */}
                <div
                    className="
                        mt-12
                        grid
                        items-start
                        md:mt-20
                        md:grid-cols-[1.15fr_0.85fr]
                        md:gap-14
                        lg:mt-24
                        lg:grid-cols-[1.12fr_0.88fr]
                        lg:gap-20
                        xl:gap-28
                    "
                >
                    {/* IMAGE COLUMN */}
                    <div className="md:mt-3 flex justify-start">
                        <FramedImage
                            src="/images/emarq-hero.jpg"
                            alt="Emarq creative production"
                            sizes="(max-width: 768px) 100vw, 60vw"
                            className="
                                w-full
                                max-w-[620px]
                            "
                            accent="both"
                            tilt={-1}
                        />
                    </div>

                    {/* TEXT COLUMN */}
                    <motion.div
                        initial={{ opacity: 0, y: 35 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{
                            duration: 0.85,
                            delay: 0.12,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="
                            w-full
                            max-w-[560px]
                            md:pt-1
                            mt-12
                            md:mt-0
                        "
                    >
                        {/* Intro */}
                        <p
                            className="
                                text-[18px]
                                leading-[1.55]
                                text-[#090909]
                                md:text-[20px]
                                lg:text-[21px]
                            "
                        >
                            Emarq Marketing & Production is a Dubai-based,
                            full-service agency specialising in digital
                            marketing, branding, creative production and
                            brand experiences.
                        </p>

                        {/* Description */}
                        <p
                            className="
                                mt-8
                                text-[14px]
                                leading-[1.8]
                                text-black/55
                                md:text-[15px]
                                lg:text-[16px]
                            "
                        >
                            We help businesses build stronger connections
                            with their audiences by combining innovative
                            ideas, premium content production and data-driven
                            strategies. From developing a brand identity and
                            managing its digital presence to producing
                            campaigns, activations and personalised
                            experiences, we manage every detail from concept
                            to execution.
                        </p>

                        {/* Philosophy */}
                        <p
                            className="
                                mt-8
                                text-[14px]
                                leading-[1.8]
                                text-black/55
                                md:text-[15px]
                                lg:text-[16px]
                            "
                        >
                            Our approach is rooted in strategic storytelling.
                            We believe every brand has a story worth telling,
                            and we translate that story into meaningful
                            experiences that inspire, engage and convert.
                        </p>

                        {/* Divider */}
                        <div className="mt-8 h-px w-full bg-black/10" />

                        {/* Small signature */}
                        <div className="mt-5 flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#44345D]" />

                            <span
                                className="
                                    text-[9px]
                                    uppercase
                                    tracking-[0.18em]
                                    text-black/40
                                "
                            >
                                Strategy · Creativity · Production
                            </span>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom divider */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                        duration: 1,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                    className="
                        mt-24
                        h-px
                        origin-left
                        bg-black/10
                    "
                />
            </div>
        </section>
    );
}