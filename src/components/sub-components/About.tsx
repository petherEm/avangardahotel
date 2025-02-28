"use client";

import Image from "next/image";
import { Container } from "../container";
import { Button } from "../ui/button";
import {
  Car,
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  Navigation,
} from "lucide-react";
import Map from "@/components/map2";
import { motion } from "framer-motion";
import { useRef } from "react";

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
  const mapRef = useRef<HTMLDivElement>(null);

  const scrollToMap = () => {
    mapRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <Container className="bg-white w-full text-[#404042] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section with TripAdvisor */}
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="uppercase font-alata text-4xl md:text-5xl font-semibold tracking-wider"
              >
                {dict.about.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg max-w-3xl leading-relaxed"
              >
                {dict.about.description}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-center justify-start lg:justify-end"
            >
              <div className=" p-4 ">
                <Image
                  src="/tripadvisor.jpg"
                  alt="TripAdvisor Reviews"
                  width={180}
                  height={10}
                  className="h-auto"
                />
              </div>
              <div className=" p-4 ">
                <Image
                  src="/trustpilot.jpg"
                  alt="Trustpilot Reviews"
                  width={180}
                  height={10}
                  className="h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column - Images and Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Images Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="relative aspect-[4/5] w-full overflow-hidden  shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] group"
              >
                <Image
                  src="/bg-hero.png"
                  alt={dict.about.title}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="relative aspect-[4/5] w-full overflow-hidden  shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] group"
              >
                <Image
                  src="/gallery-images/gal-02.jpg"
                  alt={dict.about.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-br from-gray-50 to-white  p-8 shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] border border-gray-100"
            >
              <h2 className="text-2xl font-semibold mb-6 pb-4 border-b border-gray-100">
                Informacje kontaktowe
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-pink-500">
                    <MapPin className="w-5 h-5" />
                    <h3 className="font-medium">Adres</h3>
                  </div>
                  <p className="text-gray-600 pl-8">{dict.about.address}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-pink-500">
                    <Phone className="w-5 h-5" />
                    <h3 className="font-medium">Telefon</h3>
                  </div>
                  <a
                    href={`tel:${dict.about.phone}`}
                    className="block text-gray-600 hover:text-pink-500 transition-colors pl-8"
                  >
                    {dict.about.phone}
                  </a>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-pink-500">
                    <Mail className="w-5 h-5" />
                    <h3 className="font-medium">Email</h3>
                  </div>
                  <a
                    href={`mailto:${dict.about.email}`}
                    className="block text-gray-600 hover:text-pink-500 transition-colors pl-8"
                  >
                    {dict.about.email}
                  </a>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-pink-500">
                    <Clock className="w-5 h-5" />
                    <h3 className="font-medium">Godziny otwarcia</h3>
                  </div>
                  <p className="text-gray-600 pl-8">{dict.about.hours}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Map and Directions */}
          <motion.div
            ref={mapRef}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="overflow-hidden shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] border border-gray-100">
              <Map address={dict.about.address} />
            </div>

            <div className="grid gap-6">
              {/* Directions Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-br from-gray-50 to-white p-6 shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] border border-gray-100"
              >
                <div className="flex items-center gap-3 text-pink-500 mb-4">
                  <Car className="w-5 h-5" />
                  <h3 className="font-medium">Dojazd samochodem</h3>
                </div>
                <p className="text-gray-600 pl-8">
                  {dict.about.directions.car}
                </p>
              </motion.div>

              {/* Navigation Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  size="lg"
                  className="flex-1 bg-pink-500 hover:bg-pink-600 text-white transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-pink-200"
                  onClick={() =>
                    window.open(
                      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        dict.about.address
                      )}`,
                      "_blank"
                    )
                  }
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Otwórz w Google Maps
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export default About;
