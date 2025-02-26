"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram } from "lucide-react";

import { Container } from "@/components/container";
import { Separator } from "@/components/ui/separator";

interface MenuItemType {
  nameKey: string;
  href: string;
}

const MenuListing: MenuItemType[] = [
  { nameKey: "rooms", href: "/pokoje" },
  { nameKey: "dining", href: "/gastronomia" },
  { nameKey: "spa", href: "/spa" },
  { nameKey: "events", href: "/przyjecia" },
  { nameKey: "business", href: "/biznes" },
  { nameKey: "entertainment", href: "/rozrywka" },
  { nameKey: "gallery", href: "/galeria" },
];

interface FooterProps {
  lang: string;
  dict: {
    nav: {
      [key: string]: string;
    };
  };
}

export function Footer({ lang, dict }: FooterProps) {
  const getLocalizedHref = (path: string) => `/${lang}${path}`;

  return (
    <footer className="bg-[#2D2D2D] text-white py-8 md:py-20">
      <Container>
        <div className="flex flex-col gap-8 md:gap-12">
          {/* Top Section Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Logo and Social */}
            <div className="flex flex-col items-center md:items-start gap-4 md:gap-6">
              <Link href={getLocalizedHref("/")} className="block">
                <Image
                  src="/avangarda-logo-lg.png"
                  alt="Hotel Avangarda"
                  width={200}
                  height={100}
                  className="h-auto w-[140px] sm:w-[160px] md:w-[180px]"
                />
              </Link>
              <div className="flex gap-4">
                <Link
                  href="https://facebook.com"
                  className="opacity-75 hover:opacity-100 transition-opacity"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4 md:h-5 md:w-5" />
                </Link>
                <Link
                  href="https://instagram.com"
                  className="opacity-75 hover:opacity-100 transition-opacity"
                  aria-label="Facebook Business"
                >
                  <Instagram className="h-4 w-4 md:h-5 md:w-5" />
                </Link>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-3 md:space-y-4 text-center md:text-left">
              <h2 className="font-medium text-base md:text-lg">Kontakt</h2>
              <div className="space-y-1 text-xs md:text-sm">
                <p className="opacity-75">+48 666 222 777</p>
                <Link
                  href="mailto:info@hotelavangarda.pl"
                  className="text-[#3B82F6] hover:underline"
                >
                  info@hotelavangarda.pl
                </Link>
              </div>
            </div>

            {/* Address */}
            <div className="space-y-3 md:space-y-4 text-center md:text-left">
              <h2 className="font-medium text-base md:text-lg">Adres</h2>
              <address className="not-italic text-xs md:text-sm space-y-1">
                <p className="opacity-75">ul. Królowej Bony 1</p>
                <p className="opacity-75">Różan, 02-987, Polska</p>
              </address>
            </div>
          </div>

          {/* Mobile-only separator after logo */}
          <div className="md:hidden">
            <Separator className="bg-white" />
          </div>

          {/* Desktop-only separator between top and menu */}
          <div className="hidden md:block">
            <Separator className="bg-white" />
          </div>

          {/* Navigation */}
          <nav className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6">
            {MenuListing.map((item, index) => (
              <React.Fragment key={item.nameKey}>
                <Link
                  href={getLocalizedHref(item.href)}
                  className="uppercase text-xs md:text-sm tracking-wide opacity-75 hover:opacity-100 transition-opacity"
                >
                  {dict.nav[item.nameKey]}
                </Link>
                {index < MenuListing.length - 1 && (
                  <span className="hidden sm:inline opacity-50">|</span>
                )}
              </React.Fragment>
            ))}
          </nav>

          {/* Bottom separator */}
          <Separator className="bg-white sm:hidden" />

          {/* Bottom Section */}
          <div className="flex flex-row sm:flex-row justify-between items-start sm:items-center gap-4 text-[10px] md:text-xs opacity-75">
            <p className="text-left">
              Copyright © 2023 Hotel Avangarda. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link
                href={getLocalizedHref("/regulamin")}
                className="hover:opacity-100 transition-opacity"
              >
                Regulamin
              </Link>
              <span className="opacity-50">|</span>
              <Link
                href={getLocalizedHref("/prywatnosc")}
                className="hover:opacity-100 transition-opacity"
              >
                Prywatność
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
