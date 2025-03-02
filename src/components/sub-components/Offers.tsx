"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "../container";
import { Button } from "../ui/button";
import Link from "next/link";
import type { Offers } from "../../../sanity.types";
import { imageUrl } from "@/lib/imageUrl";
import { Tag } from "lucide-react";
import { useState, useRef, MouseEvent } from "react";

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
      from: string;
    };
  };
  lang: string;
  offers: Offers[];
}

const Offers = ({ dict, lang, offers }: OffersProps) => {
  // Add state for mouse dragging
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Mouse handlers
  const handleMouseDown = (e: MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    // Change cursor during drag
    scrollContainerRef.current.style.cursor = "grabbing";
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scrolling speed
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = "grab";
    }
  };

  // Function to get localized content
  const getLocalizedContent = (offer: Offers) => {
    const name = lang === "pl" ? offer.plname : offer.enname;
    const description =
      lang === "pl" ? offer.pldescription : offer.endescription;
    const currency = "PLN";

    // Format price with currency
    const formattedPrice = offer.price
      ? new Intl.NumberFormat(lang === "pl" ? "pl-PL" : "en-US", {
          style: "currency",
          currency: currency,
          minimumFractionDigits: 0,
          maximumFractionDigits: 2,
        }).format(offer.price)
      : null;

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
      price: formattedPrice,
    };
  };

  return (
    <Container className="min-h-screen w-full text-[#404042] bg-secondary lg:py-20">
      <div className="flex flex-col h-full max-w-6xl mx-auto p-4 space-y-6 py-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-alata md:text-5xl font-semibold uppercase tracking-wider"
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
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-6 scrollbar-hide cursor-grab"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
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
                  onMouseDown={(e) => e.stopPropagation()} // Prevent drag on card click
                >
                  <div className="space-y-6">
                    {/* Image container with price badge */}
                    <div className="relative w-full aspect-[4/3]">
                      <Image
                        src={imageUrl(offer.image!).url() || "/placeholder.svg"}
                        alt={localizedContent.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 80vw, 45vw"
                        priority
                        draggable={false} // Prevent image dragging
                      />

                      {/* Price badge */}
                      {localizedContent.price && (
                        <div className="absolute bottom-0 right-0 bg-primary text-white px-4 py-2 flex items-center gap-2 font-medium">
                          <Tag className="h-4 w-4" />
                          <span>
                            {dict.offers.from || "From"}:{" "}
                            {localizedContent.price}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content container with fixed height */}
                    <div className="h-[220px] flex flex-col">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl md:text-3xl uppercase font-medium">
                          {localizedContent.name}
                        </h3>

                        {/* Mobile price display for better visibility */}
                        {localizedContent.price && (
                          <div className="md:hidden text-primary font-semibold">
                            {localizedContent.price}
                          </div>
                        )}
                      </div>

                      <p className="text-base md:text-lg flex-1">
                        {localizedContent.description}
                      </p>

                      <div className="flex justify-between items-center mt-auto">
                        <Link href={`/${lang}/pakiety/${offer.slug?.current}`}>
                          <Button
                            size="lg"
                            variant="secondary"
                            className="w-fit transition-all hover:scale-105"
                            onClick={(e) => e.stopPropagation()} // Prevent dragging when clicking button
                          >
                            {dict.offers.details}
                          </Button>
                        </Link>

                        {/* Desktop price display */}
                        {localizedContent.price && (
                          <div className="hidden md:flex items-center gap-2 text-primary font-semibold">
                            <span className="text-sm text-[#404042]/70">
                              {dict.offers.from || "From"}:
                            </span>
                            {localizedContent.price}
                          </div>
                        )}
                      </div>
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
