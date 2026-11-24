
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
                    px-6 py-12
                    md:px-10 md:py-16
                    lg:px-12
                "
            >
                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                    className="mb-6 flex items-center gap-3 md:mb-8"
                >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#EFB9C1]" />

                    <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#44345D]">
                        About Emarq
                    </span>
                </motion.div>

                {/* Main heading */}
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
                    Created for the{" "}
                    <span className="text-[#44345D]">UAE.</span>
                </motion.h2>

                {/* Image + Founder Story */}
                <div
                    className="
                        mt-8
                        grid
                        items-start
                        md:mt-12
                        md:grid-cols-[1.15fr_0.85fr]
                        md:gap-10
                        lg:mt-16
                        lg:grid-cols-[1.12fr_0.88fr]
                        lg:gap-14
                        xl:gap-20
                    "
                >
                    {/* Image column */}
                    <div className="flex justify-start md:mt-2">
                        <FramedImage
                            src="/images/emarq-hero.jpg"
                            alt="Emarq Marketing and Production"
                            sizes="(max-width: 768px) 100vw, 60vw"
                            className="w-full max-w-[620px]"
                            accent="both"
                            tilt={-1}
                        />
                    </div>

                    {/* Founder story */}
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
                            mt-8
                            w-full
                            max-w-[560px]
                            md:mt-0 md:pt-1
                        "
                    >
                        {/* Introduction */}
                        <p
                            className="
                                text-[18px]
                                leading-[1.55]
                                text-[#090909]
                                md:text-[20px]
                                lg:text-[21px]
                            "
                        >
                            Emarq Marketing & Production is a Dubai-based
                            creative agency built for brands that want to
                            connect with audiences across the UAE.
                        </p>

                        {/* Agency overview */}
                        <p
                            className="
                                mt-5
                                text-[14px]
                                leading-[1.8]
                                text-black/55
                                md:text-[15px]
                                lg:text-[16px]
                            "
                        >
                            We bring digital marketing, creative production,
                            brand activations, events and corporate gifting
                            together under one roof, with a single team
                            guiding each project from concept to delivery.
                        </p>

                        {/* Why we started */}
                        <div className="mt-8">
                            <span
                                className="
                                    text-[10px]
                                    font-medium
                                    uppercase
                                    tracking-[0.2em]
                                    text-[#44345D]
                                "
                            >
                                Why we started Emarq
                            </span>
                        </div>

                        {/* Founder background */}
                        <p
                            className="
                                mt-4
                                text-[14px]
                                leading-[1.8]
                                text-black/55
                                md:text-[15px]
                                lg:text-[16px]
                            "
                        >
                            During her 13 years in luxury brand management
                            at Rivoli Group, our founder, Minna Wahab,
                            managed a portfolio that included Harry Winston,
                            Breguet, Omega and Jaeger-LeCoultre. She saw
                            firsthand how much coordination went into a
                            single campaign or event. Design, printing,
                            gifting, production and on-site delivery could
                            each involve a different supplier. Keeping
                            every team aligned on the brief, the timeline
                            and the brand's standards often fell to the
                            brand manager.
                        </p>

                        {/* Emarq's vision */}
                        <p
                            className="
                                mt-4
                                text-[14px]
                                leading-[1.8]
                                text-black/55
                                md:text-[15px]
                                lg:text-[16px]
                            "
                        >
                            Emarq grew out of that experience. Minna wanted
                            to build the kind of creative partner she had
                            looked for as a client. Today, we take
                            responsibility for the full brief, bringing
                            the right specialists together and managing
                            the details along the way. Whether it's a
                            retail activation or a campaign that spans
                            digital and live experiences, our clients
                            have one point of contact and a team that
                            sees the work through.
                        </p>

                        {/* Founder story signature */}
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
                                One Brief · One Team · Complete Delivery
                            </span>
                        </div>
                    </motion.div>
                </div>

                {/* The story behind our name and logo */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                        duration: 0.85,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                    className="
                        mt-12
                        border-t border-black/10
                        pt-8
                        md:mt-16 md:pt-10
                        lg:mt-20
                    "
                >
                    <div
                        className="
                            grid
                            gap-6
                            md:grid-cols-[0.8fr_1.2fr]
                            md:gap-12
                            lg:gap-16
                        "
                    >
                        {/* Heading column */}
                        <div>
                            <div className="mb-4 flex items-center gap-3">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#EFB9C1]" />

                                <span
                                    className="
                                        text-[10px]
                                        font-medium
                                        uppercase
                                        tracking-[0.2em]
                                        text-[#44345D]
                                    "
                                >
                                    Our Identity
                                </span>
                            </div>

                            <h3
                                className="
                                    max-w-[440px]
                                    text-[clamp(2.5rem,5vw,5rem)]
                                    font-medium
                                    leading-[0.95]
                                    tracking-[-0.065em]
                                "
                            >
                                The story behind our{" "}
                                <span className="text-[#44345D]">
                                    name and logo.
                                </span>
                            </h3>
                        </div>

                        {/* Story column */}
                        <div
                            className="
                                max-w-[680px]
                                space-y-5
                                md:pt-1
                            "
                        >
                            {/* Name meaning */}
                            <p
                                className="
                                    text-[16px]
                                    leading-[1.7]
                                    text-[#090909]
                                    md:text-[18px]
                                "
                            >
                                Emarq brings together E-Marketing and
                                Emirati Marketing. The name reflects our
                                digital outlook and the place we created
                                the brand for. Look closely at the Q in
                                our logo and you'll see a cursor-like
                                arrow, a nod to our digital roots.
                            </p>

                            {/* Brand colours */}
                            <p
                                className="
                                    text-[14px]
                                    leading-[1.8]
                                    text-black/55
                                    md:text-[15px]
                                    lg:text-[16px]
                                "
                            >
                                Our deep purple and pink palette reflects
                                the feminine energy behind Emarq. As a
                                woman-led company, we wanted that identity
                                to come through in how the brand looks
                                and feels. Deep purple gives the wordmark
                                a confident presence, while pink brings
                                warmth and a playful touch to the Q.
                            </p>

                            {/* Brand philosophy */}
                            <p
                                className="
                                    text-[14px]
                                    leading-[1.8]
                                    text-black/55
                                    md:text-[15px]
                                    lg:text-[16px]
                                "
                            >
                                That same thought goes into the work we
                                create for our clients. Every detail has
                                a reason for being there, and together
                                those details tell a story. We believe
                                storytelling is how brands connect with
                                people and give them something to remember.
                            </p>

                            {/* Identity signature */}
                            <div
                                className="
                                    flex items-center gap-3
                                    border-t border-black/10
                                    pt-4
                                "
                            >
                                <span className="h-1.5 w-1.5 rounded-full bg-[#44345D]" />

                                <span
                                    className="
                                        text-[9px]
                                        uppercase
                                        tracking-[0.18em]
                                        text-black/40
                                    "
                                >
                                    Every Detail Tells a Story
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom divider */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                        duration: 0.8,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                    className="
                        mt-12
                        h-px
                        origin-left
                        bg-black/10
                        md:mt-16
                    "
                />
            </div>
        </section>
    );
}