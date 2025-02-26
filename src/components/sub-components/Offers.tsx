"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "../container";
import { Button } from "../ui/button";
import Link from "next/link";
import type { Offers } from "../../../sanity.types";
import { imageUrl } from "@/lib/imageUrl";

interface OfferType {
  id: number;
  title: string;
  image: string;
  description: string;
}

interface OffersProps {
  dict: {
    offers: {
      title: string;
      description: string;
      details: string;
      items: OfferType[];
    };
  };
  lang: string;
  offers: Offers[];
}

const Offers = ({ dict, lang, offers }: OffersProps) => {
  // Function to get localized content
  const getLocalizedContent = (offer: Offers) => {
    const name = lang === "pl" ? offer.plname : offer.enname;
    const description =
      lang === "pl" ? offer.pldescription : offer.endescription;

    return {
      name: name || "No title available",
      description:
        description
          ?.map((block) =>
            block._type === "block"
              ? block.children?.map((child) => child.text).join("")
              : ""
          )
          .join("") || "No description available",
    };
  };

  return (
    <Container className="min-h-screen w-full text-[#404042] bg-secondary lg:py-20">
      <div className="flex flex-col h-full max-w-6xl mx-auto p-4 space-y-6 py-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-semibold uppercase tracking-wider"
        >
          {dict.offers.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-base md:text-lg max-w-2xl"
        >
          {dict.offers.description}
        </motion.p>

        <div className="relative mt-8">
          <div
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-6 scrollbar-hide"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {offers.map((offer, index) => {
              const localizedContent = getLocalizedContent(offer);

              return (
                <motion.div
                  key={offer._id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex-none w-[80%] md:w-[45%] snap-start"
                >
                  <div className="space-y-6">
                    {/* Image container */}
                    <div className="relative w-full aspect-[4/3]">
                      <Image
                        src={imageUrl(offer.image!).url() || "/placeholder.svg"}
                        alt={localizedContent.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 80vw, 45vw"
                        priority
                      />
                    </div>

                    {/* Content container with fixed height */}
                    <div className="h-[220px] flex flex-col">
                      <h3 className="text-2xl md:text-3xl uppercase font-medium mb-4">
                        {localizedContent.name}
                      </h3>
                      <p className="text-base md:text-lg flex-1">
                        {localizedContent.description}
                      </p>
                      <Link href={`/${lang}/pakiety/${offer._id}`}>
                        <Button
                          size="lg"
                          variant="secondary"
                          className="w-fit transition-all hover:scale-105 mt-auto"
                        >
                          {dict.offers.details}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Offers;
