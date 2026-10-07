import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export default function MagneticButton({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <motion.a
            href="#work"
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
        bg-emarq-pink
        px-4 sm:px-6
        py-3 sm:py-4
        text-sm
        font-bold
        text-emarq-purple
      "
        >

            {children}

            <span
                className="
          flex
          h-7
          w-7
          items-center
          justify-center
          rounded-full
          bg-emarq-purple
          text-emarq-pink
          transition-transform
          duration-300
          group-hover:rotate-45
        "
            >
                <ArrowUpRight size={14} />
            </span>

        </motion.a>
    );
}