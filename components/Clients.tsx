
"use client";

import Image from "next/image";
import { motion } from "motion/react";

const clients = [
    { name: "Client One", logo: "/client-logos/bloomingdales-logo.png" },
    { name: "Client Two", logo: "/client-logos/dad-club-logo.png" },
    { name: "Client Three", logo: "/client-logos/ezora-logo.png" },
    { name: "Client Four", logo: "/client-logos/logostic-house-logo.png" },
    { name: "Client Five", logo: "/client-logos/mamas-papas-logo.png" },
    { name: "Client Six", logo: "/client-logos/right-hire-logo.png" },
    { name: "Client Six", logo: "/client-logos/the-mum-club-logo.png" },
];

export default function Clients() {
    const repeatedClients = [...clients, ...clients];

    return (
        <section className="relative overflow-hidden border-y border-[#44345D]/10 bg-[#FAF9F8] py-12 md:py-16">
            {/* Background accent */}
            <div className="pointer-events-none absolute -left-20 top-0 h-48 w-48 rounded-full bg-[#EFB9C1]/20 blur-[90px]" />
            <div className="pointer-events-none absolute -right-20 bottom-0 h-48 w-48 rounded-full bg-[#44345D]/[0.06] blur-[90px]" />

            <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-12">
                {/* Heading */}
                <div className="mb-9 flex flex-col items-center gap-2 text-center md:mb-11">
                    <div className="flex items-center gap-3">
                        <span className="h-px w-7 bg-[#EFB9C1]" />
                        <span className="text-[9px] font-medium uppercase tracking-[0.28em] text-[#44345D]">
                            Our Clients
                        </span>
                        <span className="h-px w-7 bg-[#EFB9C1]" />
                    </div>

                    <h2 className="text-[22px] font-medium tracking-[-0.04em] text-[#090909] md:text-[28px]">
                        Trusted by brands.{" "}
                        <span className="text-[#44345D]">
                            Driven by creativity.
                        </span>
                    </h2>
                </div>

                {/* Logo marquee */}
                <div className="relative overflow-hidden">
                    {/* Left fade */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#FAF9F8] to-transparent md:w-28" />

                    {/* Right fade */}
                    <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#FAF9F8] to-transparent md:w-28" />

                    <motion.div
                        className="flex w-max items-center"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            duration: 28,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        {repeatedClients.map((client, index) => (
                            <div
                                key={`${client.name}-${index}`}
                                className="group flex h-20 min-w-[150px] items-center justify-center px-8 md:min-w-[190px] md:px-12"
                            >
                                <div className="relative h-12 w-[120px] transition-all duration-300 md:h-14 md:w-[150px]">
                                    <Image
                                        src={client.logo}
                                        alt={client.name}
                                        fill
                                        sizes="150px"
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Bottom detail */}
                <div className="mt-7 flex items-center justify-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-[#EFB9C1]" />
                    <span className="text-[8px] uppercase tracking-[0.22em] text-black/35">
                        Building meaningful brand experiences
                    </span>
                    <span className="h-1 w-1 rounded-full bg-[#44345D]" />
                </div>
            </div>
        </section>
    );
}
