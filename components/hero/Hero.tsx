"use client";

import {
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";
import HeroIntro from "./HeroIntro";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 80,
    damping: 20,
  });

  const springY = useSpring(mouseY, {
    stiffness: 80,
    damping: 20,
  });

  const imageX = useTransform(
    springX,
    [-500, 500],
    [-12, 12]
  );

  const imageY = useTransform(
    springY,
    [-500, 500],
    [-12, 12]
  );

  const glowX = useTransform(
    springX,
    [-500, 500],
    ["20%", "80%"]
  );

  const glowY = useTransform(
    springY,
    [-500, 500],
    ["20%", "80%"]
  );

  const handleMouseMove = (
    e: React.MouseEvent<HTMLElement>
  ) => {
    mouseX.set(
      e.clientX - window.innerWidth / 2
    );

    mouseY.set(
      e.clientY - window.innerHeight / 2
    );
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-emarq-purple
        text-white
        pt-20
      "
    >
      <HeroBackground
        glowX={glowX}
        glowY={glowY}
      />

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[calc(100vh-90px)]
          max-w-[1600px]
          flex-col
          justify-center
          px-6
          pb-12
          md:px-10
          lg:px-14
        "
      >
        <div
          className="
            grid
            items-center
            gap-10 sm:gap-16
            lg:grid-cols-[1.1fr_.9fr]
          "
        >
          <HeroContent />

          <HeroVisual
            imageX={imageX}
            imageY={imageY}
          />
        </div>
      </div>

      <HeroIntro />
    </section>
  );
}

