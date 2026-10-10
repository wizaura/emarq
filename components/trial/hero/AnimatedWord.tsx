import { motion } from "motion/react";

export default function AnimatedWord({
    children,
    delay = 0,
    className = "",
}: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}) {
    return (
        <span
            className={`relative inline-block ${className}`}
        >
            <motion.span
                initial={{
                    y: "110%",
                }}
                animate={{
                    y: 0,
                }}
                transition={{
                    duration: 0.9,
                    delay,
                    ease: [0.16, 1, 0.3, 1],
                }}
                className="inline-block"
            >
                {children}
            </motion.span>
        </span>
    );
}