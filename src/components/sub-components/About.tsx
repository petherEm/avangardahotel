"use client";
import Image from "next/image";
import { Container } from "../container";
import { Button } from "../ui/button";
import { Car, MapPin, Phone, Mail, Clock } from "lucide-react";
import Map from "@/components/map2";
import { motion } from "framer-motion";

interface AboutProps {
  dict: {
    about: {
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

const About = ({ dict, lang }: AboutProps) => {
  return (
    <Container className="mt-6 sm:mt-6 md:mt-4 lg:mt-0 mb-6 lg:mb-0 bg-white w-full text-[#404042] lg:py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="uppercase text-4xl md:text-5xl font-semibold tracking-wider mb-6"
          >
            {dict.about.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-lg max-w-5xl"
          >
            {dict.about.description}
          </motion.p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Image and Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="relative aspect-[16/9] w-full overflow-hidden shadow-lg"
            >
              <Image
                src="/bg-hero.png"
                alt={dict.about.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
              />
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-gray-50 rounded-lg p-6 space-y-4"
            >
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 text-pink-500" />
                <div>
                  <h3 className="font-semibold mb-1">Adres</h3>
                  <p>{dict.about.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1 text-pink-500" />
                <div>
                  <h3 className="font-semibold mb-1">Telefon</h3>
                  <a
                    href={`tel:${dict.about.phone}`}
                    className="hover:text-pink-500"
                  >
                    {dict.about.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1 text-pink-500" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a
                    href={`mailto:${dict.about.email}`}
                    className="hover:text-pink-500"
                  >
                    {dict.about.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-1 text-pink-500" />
                <div>
                  <h3 className="font-semibold mb-1">Godziny otwarcia</h3>
                  <p>{dict.about.hours}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Map and Directions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Map address={dict.about.address} />
            </motion.div>

            {/* Directions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="space-y-6"
            >
              <div className="bg-gray-50 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Car className="w-5 h-5 text-pink-500" />
                  <h3 className="font-semibold">Dojazd samochodem</h3>
                </div>
                <p>{dict.about.directions.car}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <Button
                size="lg"
                variant="secondary"
                className="w-fit transition-all hover:scale-105 active:scale-95"
                onClick={() =>
                  window.open(
                    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(dict.about.address)}`,
                    "_blank"
                  )
                }
              >
                Otwórz w Google Maps
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export default About;
