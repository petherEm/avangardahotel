"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "../container";
import { Button } from "../ui/button";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const fadeInScale = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
};

const Business = () => {
  return (
    <Container className="min-h-[600px] w-full text-[#404042] py-8 md:py-16 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image Section with background */}
          <motion.div
            {...fadeInScale}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative aspect-square w-full"
          >
            {/* Background shadow element */}
            <div className="absolute inset-4 right-[-22px] bottom-[-22px] bg-secondary" />

            {/* Image container */}
            <div className="relative w-full h-full bg-white">
              <Image
                src="/biznes.png"
                alt="Sala konferencyjna"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <div className="flex flex-col justify-center space-y-6 md:space-y-8">
            <motion.h2
              {...fadeInUp}
              transition={{ delay: 0.4 }}
              className="text-4xl font-alata md:text-5xl font-semibold uppercase tracking-wider"
            >
              Biznes
            </motion.h2>

            <motion.p
              {...fadeInUp}
              transition={{ delay: 0.6 }}
              className="text-base md:text-lg"
            >
              Hotel Avangarda oferuje nowoczesne sale konferencyjne idealne na
              spotkania biznesowe, szkolenia i eventy firmowe. Zapewniamy pełne
              zaplecze techniczne, w tym projektory, nagłośnienie i szybki
              internet.
            </motion.p>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.8 }}
              className="pt-4"
            >
              <Button
                size="lg"
                variant="secondary"
                className="w-fit transition-all hover:scale-105 active:scale-95"
              >
                Dowiedz się więcej
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Business;
