"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const navItems = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Services",
    href: "#services",
  },
  { 
    label: "Work",
    href: "#work",
  },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{
        opacity: 0,
        y: -25,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.9,
        delay: 1.6,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        fixed
        absolute
        left-0
        right-0
        top-0
        z-50
        px-5
        pt-4
        md:px-8
        lg:px-12
      "
    >
      <div
        className="
          mx-auto
          flex
          max-w-[1700px]
          items-center
          justify-between
        "
      >
        {/* =====================================================
            LOGO
        ===================================================== */}

        <motion.a
          href="#"
          whileHover={{ scale: 1.02 }}
          transition={{
            duration: 0.3,
          }}
          className="block"
        >
          <Image
            src="/logos/logo-2.png"
            alt="Emarq — Marketing & Production"
            width={180}
            height={60}
            priority
            className="
              h-auto
              w-[100px]
              object-contain
            "
          />
        </motion.a>

        {/* =====================================================
            NAVIGATION
        ===================================================== */}

        <nav
          className="
            absolute
            left-1/2
            hidden
            -translate-x-1/2
            items-center
            gap-9
            md:flex
            lg:gap-11
          "
        >
          {navItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{
                opacity: 0,
                y: -8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 1.8 + index * 0.08,
              }}
              className="
                group
                relative
                py-2
                text-[13px]
                font-medium
                tracking-wide
                text-white/60
                transition-colors
                duration-300
                hover:text-white
              "
            >
              {item.label}

              <span
                className="
                  absolute
                  bottom-0
                  left-1/2
                  h-px
                  w-0
                  -translate-x-1/2
                  bg-emarq-pink
                  transition-all
                  duration-300
                  ease-out
                  group-hover:w-full
                "
              />
            </motion.a>
          ))}
        </nav>

        {/* =====================================================
            CONTACT
        ===================================================== */}

        <motion.a
          href="#contact"
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.6,
            delay: 1.9,
            ease: [0.16, 1, 0.3, 1],
          }}
          whileHover={{
            scale: 1.04,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className="
            group
            flex
            items-center
            gap-3
            rounded-full
            border
            border-white/15
            bg-white/[0.06]
            py-2
            pl-4
            pr-2
            text-[13px]
            font-semibold
            text-white
            backdrop-blur-md
            transition-all
            duration-300
            hover:border-emarq-pink/40
            hover:bg-emarq-pink/30
            md:py-2.5
            md:pl-5
            md:pr-2.5
          "
        >
          <span>Let's talk</span>

          <span
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-full
              bg-emarq-pink
              text-emarq-purple
              transition-transform
              duration-300
              group-hover:rotate-45
            "
          >
            <ArrowUpRight
              size={15}
              strokeWidth={2.2}
            />
          </span>
        </motion.a>
      </div>
    </motion.header>
  );
}