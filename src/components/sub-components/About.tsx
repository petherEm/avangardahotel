"use client";
import Image from "next/image";
import { Container } from "../container";
import { Button } from "../ui/button";
import { Car, MapPin, Phone, Mail, Clock } from "lucide-react";
import Map from "@/components/map2";

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
    <Container className="bg-white w-full text-[#404042] py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="mb-16">
          <h1 className="uppercase text-4xl md:text-5xl font-semibold tracking-wider mb-6">
            {dict.about.title}
          </h1>
          <p className="text-lg md:text-xl max-w-5xl">
            {dict.about.description}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Image and Contact Info */}
          <div className="space-y-8">
            <div className="relative aspect-[16/9] w-full overflow-hidden shadow-lg">
              <Image
                src="/bg-hero.png"
                alt={dict.about.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
              />
            </div>

            {/* Contact Information */}
            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
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
            </div>
          </div>

          {/* Right Column - Map and Directions */}
          <div className="space-y-8">
            <Map address={dict.about.address} />

            {/* Directions */}
            <div className="space-y-6">
              <div className="bg-gray-50  p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Car className="w-5 h-5 text-pink-500" />
                  <h3 className="font-semibold">Dojazd samochodem</h3>
                </div>
                <p>{dict.about.directions.car}</p>
              </div>
            </div>

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
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
