"use client";

import Image from "next/image";

export default function AboutFounder() {
    return (
        <section
            id="founder"
            className="bg-[#090909] px-4 py-20 md:px-8 lg:px-12"
        >
            <div className="relative overflow-hidden text-white">

                {/* Ambient mark */}
                <div
                    className="
                        pointer-events-none absolute
                        -right-20 -top-24
                        h-[420px] w-[420px]
                        rounded-full
                        border border-white/10
                    "
                />

                <div
                    className="
                        pointer-events-none absolute
                        -right-10 -top-20
                        h-[260px] w-[260px]
                        rounded-full
                        border border-white/5
                    "
                />

                <div className="relative px-6 md:px-10 lg:px-16">

                    {/* Section label */}
                    <div className="flex items-center justify-between border-b border-white/15 pb-5">
                        <div className="flex items-center gap-3">
                            <span
                                className="
                inline-block
                h-1.5
                w-1.5
                rounded-full
                bg-[#44345D]
            "
                            />

                            <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/55">
                                About the Founder
                            </span>
                        </div>
                    </div>

                    {/* Heading */}
                    <div className="grid gap-10 py-14 md:py-20 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
                        <h2
                            className="
                                max-w-5xl
                                text-[clamp(3.4rem,8vw,8rem)]
                                font-medium
                                leading-[0.88]
                                tracking-[-0.055em]
                            "
                        >
                            Founded on
                            <br />
                            <span className="text-white/45">Experience.</span>
                            <br />
                            Driven by
                            <br />
                            <span className="text-[#EFB9C1]">Detail.</span>
                        </h2>

                        <div className="lg:pb-2">
                            <p className="max-w-xs text-sm leading-6 text-white/50">
                                A founder-led approach shaped by more than a
                                decade of experience managing some of the
                                world's most prestigious luxury maisons.
                            </p>
                        </div>
                    </div>

                    {/* Founder composition */}
                    <div className="grid border-t border-white/15 lg:grid-cols-[0.9fr_1.1fr]">

                        {/* Portrait */}
                        <div className="relative border-b border-white/15 lg:border-b-0 lg:border-r">
                            <div className="relative aspect-[4/5] overflow-hidden lg:mr-10 lg:mt-10">
                                <Image
                                    src="/images/emarq-hero.jpg"
                                    alt="Minna Wahab — Founder of Emarq"
                                    fill
                                    className="object-cover grayscale"
                                    sizes="(max-width: 1024px) 100vw, 45vw"
                                />

                                {/* Image overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                                <div className="absolute bottom-5 left-5">
                                    <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                                        Minna Wahab
                                    </p>

                                    <p className="mt-1 text-sm text-white">
                                        Founder, Emarq
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Story */}
                        <div className="flex flex-col justify-between lg:pl-14">

                            {/* Experience marker */}
                            <div className="flex items-center gap-5 py-10 lg:pt-10">
                                <span className="text-[clamp(4rem,8vw,7rem)] font-medium leading-none tracking-[-0.06em] text-[#EFB9C1]">
                                    13+
                                </span>

                                <div className="h-12 w-px bg-white/20" />

                                <div className="text-[10px] uppercase leading-5 tracking-[0.18em] text-white/45">
                                    Years
                                    <br />
                                    Brand Management
                                </div>
                            </div>

                            {/* Biography */}
                            <div className="max-w-2xl space-y-7 pb-12">

                                <p className="text-xl leading-8 text-white md:text-2xl md:leading-9">
                                    Minna Wahab is the Founder of Emarq,
                                    bringing more than 13 years of experience
                                    in brand management.
                                </p>

                                <p className="text-sm leading-7 text-white/55 md:text-base md:leading-8">
                                    During her career as a Brand Manager at
                                    Rivoli Group, she managed a portfolio of
                                    some of the world's most prestigious watch
                                    and jewellery maisons, including Harry
                                    Winston, Breguet, Blancpain,
                                    Jaeger-LeCoultre, Omega, Zenith and
                                    Glashütte Original.
                                </p>

                                <p className="text-sm leading-7 text-white/55 md:text-base md:leading-8">
                                    Working with globally renowned maisons
                                    shaped her approach to branding, where
                                    precision, craftsmanship, attention to
                                    detail and exceptional customer
                                    experiences are non-negotiable.
                                </p>

                                <p className="text-sm leading-7 text-white/55 md:text-base md:leading-8">
                                    These principles became the foundation of
                                    Emarq. Today, Minna applies the same high
                                    standards to every campaign, activation,
                                    gifting solution and brand experience
                                    undertaken by the agency.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}