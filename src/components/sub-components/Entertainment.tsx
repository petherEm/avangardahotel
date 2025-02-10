"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const images = [
  { src: "/entertainment/1.png", alt: "Entertainment 1" },
  { src: "/entertainment/2.png", alt: "Entertainment 2" },
  { src: "/entertainment/3.png", alt: "Entertainment 3" },
  { src: "/entertainment/4.png", alt: "Entertainment 4" },
  { src: "/entertainment/3.png", alt: "Entertainment 3" },
  { src: "/entertainment/4.png", alt: "Entertainment 4" },
];

// Duplicate the array for a seamless loop
const duplicatedImages = [...images, ...images];

const Entertainment = () => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    setShouldAnimate(true);
  }, []);

  return (
    <section className="min-h-screen w-full text-[#404042] py-8 md:py-16 overflow-hidden">
      <div className="bg-[#000000]/80 min-h-[800px] w-full py-8 md:py-12">
        {/* Content Container */}
        <div className="max-w-6xl mx-auto p-4 space-y-6 py-16">
          <h2 className="mt-6 text-white text-3xl md:text-4xl lg:text-5xl font-normal uppercase tracking-wider mb-6">
            ROZRYWKA
          </h2>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-8">
            <p className="text-white text-base md:text-lg lg:text-xl py-4 md:w-2/3">
              Odkryj szeroką gamę atrakcji i aktywności, które sprawią, że Twój
              pobyt będzie pełen niezapomnianych wrażeń. W Avangarda każdy
              znajdzie coś dla siebie.
            </p>
            <Button
              variant="secondary"
              className="w-fit transition-all hover:scale-105 active:scale-95"
            >
              Szczegóły
            </Button>
          </div>
        </div>

        {/* Full-width Slider Container */}
        <div className="relative w-full">
          {/* First Row - Right to Left */}
          <div className="relative w-[100vw] overflow-hidden">
            <motion.div
              className="flex gap-4 md:gap-6"
              style={{ width: "fit-content" }}
              initial={{ x: "0%" }}
              animate={
                shouldAnimate
                  ? {
                      x: ["0%", "-50%"],
                    }
                  : {}
              }
              transition={{
                x: {
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
            >
              {duplicatedImages.map((image, index) => (
                <div
                  key={`row1-${index}`}
                  className="relative w-[280px] md:w-[300px] lg:w-[320px] aspect-square flex-shrink-0 overflow-hidden"
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 320px, (min-width: 768px) 300px, 280px"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Second Row - Left to Right */}
          <div className="relative w-[100vw] overflow-hidden mt-6">
            <motion.div
              className="flex gap-4 md:gap-6"
              style={{ width: "fit-content" }}
              initial={{ x: "-50%" }}
              animate={
                shouldAnimate
                  ? {
                      x: ["-50%", "0%"],
                    }
                  : {}
              }
              transition={{
                x: {
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
            >
              {[...duplicatedImages].reverse().map((image, index) => (
                <div
                  key={`row2-${index}`}
                  className="relative w-[280px] md:w-[300px] lg:w-[320px] aspect-square flex-shrink-0 overflow-hidden"
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 320px, (min-width: 768px) 300px, 280px"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Entertainment;
