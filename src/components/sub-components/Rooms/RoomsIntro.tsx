"use client";

import type React from "react";
import { Container } from "@/components/container";
import { motion, AnimatePresence } from "framer-motion";

export default function RoomsIntro() {
  return (
    <Container className="mt-6 sm:mt-6 md:mt-4 lg:mt-0 mb-6 lg:mb-0 bg-white w-full text-[#404042] lg:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="uppercase text-4xl md:text-5xl font-semibold tracking-wider mb-8"
            >
              Oferta pokoi
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg leading-relaxed"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur nam odit officiis dolorum placeat magni rerum quia,
              hic veritatis possimus? Distinctio reiciendis sequi sapiente
              cupiditate exercitationem iure harum id aspernatur, aut doloremque
              repudiandae possimus, nulla ipsum? Reprehenderit quisquam modi
              beatae dolores libero voluptate et, accusamus molestiae optio
              sunt. Illo illum quis nostrum quos consequatur modi eligendi sint
              cumque id ut.
            </motion.p>
          </div>
        </div>
      </div>
    </Container>
  );
}
