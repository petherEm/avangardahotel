"use client";

import { Container } from "@/components/container";
import Link from "next/link";
import Map from "@/components/map2";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Car, Clock, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

interface AboutProps {
  dict: {
    clubDetails: {
      title: string;
      description: string;
      address: string;
      phone: string;
      email: string;
      directions: {
        car: string;
        public: string;
      };
      hours: string;
    };
  };
  lang: string;
}

const GastroFort = ({ dict, lang }: AboutProps) => {
  return (
    <Container className="mt-6 sm:mt-6 md:mt-4 lg:mt-0 mb-6 lg:mb-0 bg-white w-full text-[#404042] lg:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-16 items-start">
          {/* Left Column: Content and Info Box */}
          <div className="flex flex-col space-y-8 order-2 lg:order-1 lg:col-span-2">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="uppercase text-4xl md:text-5xl font-semibold tracking-wider mb-8"
              >
                {dict.fortDetails.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg leading-relaxed"
              >
                {dict.fortDetails.description}
              </motion.p>
            </div>

            <Button
              size="lg"
              variant="secondary"
              className="w-fit transition-all hover:scale-105 active:scale-95"
            >
              DOWIEDZ SIĘ WIĘCEJ
            </Button>
          </div>

          {/* Right Column: Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 lg:col-span-4"
          >
            <Image
              src="/gastronomia-2.png"
              width={800}
              height={600}
              alt="Gastro"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export default GastroFort;
