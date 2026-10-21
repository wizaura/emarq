
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

type MagneticButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function MagneticButton({
  children,
  href = "#work",
  variant = "primary",
  className = "",
}: MagneticButtonProps) {
  const isPrimary = variant === "primary";

  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className={`
        group inline-flex items-center gap-3
        rounded-full px-4 py-2 sm:px-6 sm:py-3
        text-sm font-bold transition-colors duration-300
        ${
          isPrimary
            ? "bg-emarq-pink text-emarq-purple"
            : "bg-emarq-purple text-emarq-pink"
        }
        ${className}
      `}
    >
      {children}

      <span
        className={`
          flex h-7 w-7 shrink-0 items-center justify-center
          rounded-full transition-transform duration-300
          group-hover:rotate-45
          ${
            isPrimary
              ? "bg-emarq-purple text-emarq-pink"
              : "bg-emarq-pink text-emarq-purple"
          }
        `}
      >
        <ArrowUpRight size={14} />
      </span>
    </motion.a>
  );
}
