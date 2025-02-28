"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "../container";
import { Button } from "../ui/button";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const fadeInScale = {
  initial: { opacity: 0, scale: 0.95 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
};

const Weddings = () => {
  return (
    <Container className="max-h-screen w-full text-[#404042] py-8 md:py-16 lg:py-20 bg-secondary overflow-hidden lg:mb-10">
      <div className="max-w-[1400px] mx-auto">
        {/* Content Section */}
        <div className="mb-8 md:mb-12">
          <motion.h2
            {...fadeInUp}
            transition={{ delay: 0.4 }}
            className="text-4xl font-alata md:text-5xl font-semibold uppercase tracking-wider mb-6"
          >
            Sala Weselna
          </motion.h2>
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 md:gap-8">
            <motion.p
              {...fadeInUp}
              transition={{ delay: 0.6 }}
              className="text-base md:text-lg max-w-2xl"
            >
              Zorganizuj niezapomniane chwile w wyjątkowej atmosferze! Oferujemy
              profesjonalną obsługę i przestrzenie idealne na wesela, komunie,
              chrzciny oraz inne uroczystości okolicznościowe. Twój wyjątkowy
              dzień w najlepszym stylu!
            </motion.p>
            <motion.div {...fadeInUp} transition={{ delay: 0.8 }}>
              <Button
                size="lg"
                variant="secondary"
                className="w-fit transition-all hover:scale-105 active:scale-95"
              >
                Dostępna oferta
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-12 gap-4 md:gap-6 h-[calc(100vh-300px)]">
          {/* Left side images - full width on mobile */}
          <div className="col-span-12 md:col-span-8 grid grid-rows-2 md:grid-rows-4 gap-1 md:gap-6 ">
            <motion.div
              {...fadeInScale}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative w-full h-[250px]"
            >
              <Image
                src="/wesele-0.png"
                alt="Słodki stół weselny"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
            </motion.div>
            <motion.div
              {...fadeInScale}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative w-full h-[250px]"
            >
              <Image
                src="/wesele-1.png"
                alt="Nakrycie stołu weselnego"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
            </motion.div>
          </div>

          {/* Right side - vertical images (hidden on mobile) */}
          <div className="hidden md:grid col-span-4 grid-cols-2 gap-4 md:gap-6">
            <motion.div
              {...fadeInScale}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative w-full h-[520px]"
            >
              <Image
                src="/wesele-2.png"
                alt="Żyrandol i dekoracje"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </motion.div>
            <motion.div
              {...fadeInScale}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="relative w-full h-[520px]"
            >
              <Image
                src="/wesele-3.png"
                alt="Sala weselna"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Weddings;
