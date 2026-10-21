"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

const footerLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Industries", href: "#industries" },
    { label: "Contact", href: "#contact" },
];

function CopyrightYear() {
    const [year, setYear] = useState("2026");

    useEffect(() => {
        setYear(String(new Date().getFullYear()));
    }, []);

    return <span>© {year} Emarq</span>;
}

export default function Footer() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="bg-[#090909] px-4 pb-4 pt-20 md:px-8 lg:px-12">
            <div className="overflow-hidden text-white">
                {/* Main footer */}
                <div className="px-6 md:px-10 lg:px-14">
                    {/* Top row */}
                    <div className="flex flex-col gap-8 border-b border-white/15 pb-10 md:flex-row md:items-start md:justify-between">
                        <div>
                            <span className="text-[10px] uppercase tracking-[0.22em] text-white/45">
                                Emarq / Marketing & Production
                            </span>
                        </div>

                        <div className="flex flex-wrap gap-x-6 gap-y-3 md:justify-end">
                            {footerLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="group relative w-fit text-[10px] uppercase tracking-[0.18em] text-white/65 transition-colors duration-300 hover:text-white"
                                >
                                    {link.label}

                                    <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#EFB9C1] transition-all duration-300 group-hover:w-full" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Giant brand statement */}

                    <div className="py-16 md:py-20 lg:py-24">
                        <p className="mb-5 text-[10px] uppercase tracking-[0.22em] text-white/35">
                            Built to leave a mark
                        </p>

                        <div className="relative w-full max-w-[1200px]">
                            <Image
                                src="/logos/logo-2.png"
                                alt="Emarq"
                                width={1200}
                                height={300}
                                priority
                                className="h-auto w-full object-contain object-left"
                            />
                        </div>
                    </div>

                    {/* Contact row */}
                    <div className="grid grid-cols-1 gap-10 border-t border-white/15 pt-10 md:grid-cols-2 lg:grid-cols-4">
                        {/* Email */}
                        <div>
                            <span className="mb-3 block text-[9px] uppercase tracking-[0.2em] text-white/35">
                                Email
                            </span>

                            <a
                                href="mailto:info@emarq.ae"
                                className="group inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
                            >
                                info@emarq.ae
                                <ArrowUpRight
                                    size={14}
                                    strokeWidth={1.5}
                                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                />
                            </a>
                        </div>

                        {/* Phone */}
                        <div>
                            <span className="mb-3 block text-[9px] uppercase tracking-[0.2em] text-white/35">
                                Phone
                            </span>

                            <a
                                href="tel:+971521569430"
                                className="text-sm text-white/80 transition-colors hover:text-white"
                            >
                                +971 52 156 9430
                            </a>
                        </div>

                        {/* Location */}
                        <div>
                            <span className="mb-3 block text-[9px] uppercase tracking-[0.2em] text-white/35">
                                Location
                            </span>

                            <p className="text-sm text-white/80">
                                Dubai, UAE
                            </p>
                        </div>

                        {/* Social */}
                        <div>
                            <span className="mb-3 block text-[9px] uppercase tracking-[0.2em] text-white/35">
                                Connect
                            </span>

                            <div className="flex gap-5">
                                <a
                                    href="#"
                                    className="text-sm text-white/65 transition-colors hover:text-[#EFB9C1]"
                                >
                                    Instagram
                                </a>

                                <a
                                    href="#"
                                    className="text-sm text-white/65 transition-colors hover:text-[#EFB9C1]"
                                >
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Bottom row */}
                    <div className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-5 md:flex-row md:items-center md:justify-between">
                        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[9px] uppercase tracking-[0.16em] text-white/30">
                            <CopyrightYear />
                            <span>Marketing & Production</span>
                        </div>

                        <div className="flex items-center gap-5">
                            <Link
                                href="/privacy-policy"
                                className="text-[9px] uppercase tracking-[0.16em] text-white/30 transition-colors hover:text-white/70"
                            >
                                Privacy
                            </Link>

                            <Link
                                href="/terms"
                                className="text-[9px] uppercase tracking-[0.16em] text-white/30 transition-colors hover:text-white/70"
                            >
                                Terms
                            </Link>

                            <button
                                type="button"
                                onClick={scrollToTop}
                                className="group flex items-center gap-2 text-[9px] uppercase tracking-[0.16em] text-white/50 transition-colors hover:text-white"
                            >
                                Back to top
                                <span className="flex h-7 w-7 items-center justify-center border border-white/15 transition-colors duration-300 group-hover:border-white/40">
                                    <ArrowUp
                                        size={12}
                                        strokeWidth={1.5}
                                        className="transition-transform duration-300 group-hover:-translate-y-0.5"
                                    />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}