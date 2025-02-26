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
    diningDetails: {
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

const GastroIntro = ({ dict, lang }: AboutProps) => {
  return (
    <Container className="mt-6 sm:mt-6 md:mt-4 lg:mt-0 mb-6 lg:mb-0 bg-white w-full text-[#404042] lg:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="uppercase text-4xl md:text-5xl font-medium tracking-wide mb-8"
            >
              {dict.diningDetails.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg leading-relaxed"
            >
              {dict.diningDetails.description}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-8 bg-gray-50 p-6"
          >
            <Link href={`/${lang}/menu`}>
              <Button
                size="lg"
                variant="secondary"
                className="w-fit transition-all hover:scale-105 active:scale-95"
              >
                MENU
              </Button>
            </Link>

            <div className="flex items-center gap-2 text-lg">
              <Phone className="w-5 h-5 text-pink-500" />
              <Link href="#">+48 29 752 50 34</Link>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="font-medium mb-2">Poniedziałek - Czwartek</h3>
                <p>12:00-22:00</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Piątek - Niedziela</h3>
                <p>12:00-23:00</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export default GastroIntro;
