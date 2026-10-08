"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Industries", href: "#industries" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about");
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(`#${visibleSections[0].target.id}`);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`
        fixed inset-x-0 top-0 z-50
        transition-all duration-500
        ${
          hasScrolled
            ? "bg-[#F7F7F5]/95 shadow-[0_1px_0_rgba(9,9,9,0.08)] backdrop-blur-md"
            : "bg-transparent"
        }
      `}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-6 md:px-10 lg:px-12">

        {/* Logo */}
        <Link href="#home" className="block">
          <Image
            src="/logos/logo-2.png"
            alt="Emarq — Marketing & Production"
            width={180}
            height={60}
            priority
            className="h-auto w-[125px] object-contain brightness-0"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <NavItem
              key={item.href}
              href={item.href}
              active={activeSection === item.href}
            >
              {item.label}
            </NavItem>
          ))}
        </nav>

        {/* Contact */}
        <Link
          href="#contact"
          className="
            group
            flex
            items-center
            gap-2
            rounded-full
            bg-[#090909]
            px-5
            py-3
            text-[10px]
            font-medium
            uppercase
            tracking-[0.16em]
            text-white
            transition-colors
            duration-300
            hover:bg-[#44345D]
          "
        >
          Let&apos;s Talk

          <ArrowUpRight
            size={14}
            strokeWidth={1.7}
            className="
              transition-transform
              duration-300
              group-hover:-translate-y-0.5
              group-hover:translate-x-0.5
            "
          />
        </Link>
      </div>
    </header>
  );
}

function NavItem({
  href,
  children,
  active,
}: {
  href: string;
  children: React.ReactNode;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`
        group
        relative
        flex
        items-center
        px-3
        py-2
        text-[10px]
        uppercase
        tracking-[0.16em]
        transition-all
        duration-300
        ${
          active
            ? "text-[#090909]"
            : "text-[#090909]/60 hover:text-[#090909]"
        }
      `}
    >
      {children}

      <span
        className={`
          absolute
          bottom-1
          left-3
          h-px
          bg-[#44345D]
          transition-all
          duration-300
          ${
            active
              ? "w-[calc(100%-24px)]"
              : "w-0 group-hover:w-[calc(100%-24px)]"
          }
        `}
      />
    </Link>
  );
}