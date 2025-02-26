"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "../container";
import { Button } from "../ui/button";

interface RestaurantProps {
  dict: {
    restaurants: {
      title: string;
      description: string;
      details: string;
    };
  };
  lang?: string;
}

const Restaurant = ({ dict, lang }: RestaurantProps) => {
  return (
    <Container className="min-h-screen w-full text-[#404042] py-8 md:py-16 bg-white lg:mb-10">
      <div className="relative max-w-6xl mx-auto">
        {/* Image Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative aspect-[16/10] md:aspect-[16/9] w-full"
        >
          <Image
            src="/restaurant-hero.png"
            alt="Restaurant Background"
            fill
            priority
            className="object-cover md:object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 980px"
            quality={100}
          />
        </motion.div>

        {/* Content Box - Mobile: Below image, Desktop: Overlapping */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="bg-[#E5E5E5] p-6 md:p-8 lg:p-12 
                     w-[95%] md:w-[60%] lg:w-[40%]
                     relative md:absolute 
                     mx-auto md:mx-0
                     mt-4 md:mt-0
                     md:left-0 md:-bottom-20 lg:-bottom-24 
                     md:-translate-x-8
                     space-y-4 md:space-y-6 lg:space-y-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="uppercase text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wider"
          >
            {dict.restaurants.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-base md:text-lg py-4 md:py-6 lg:py-8"
          >
            {dict.restaurants.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <Button
              size="lg"
              variant="secondary"
              className="w-fit transition-all hover:scale-105 active:scale-95"
            >
              {dict.restaurants.details}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </Container>
  );
};

export default Restaurant;
