"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { LanguageSwitcher } from "../language-switcher";

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

const CompanyLinks = [
  { nameKey: "about", href: "/o-nas" },
  { nameKey: "contact", href: "/kontakt" },
  { nameKey: "privacy", href: "/prywatnosc" },
  { nameKey: "terms", href: "/regulamin" },
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
    <footer className="bg-primary text-white">
      <Container className="py-16">
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand and Contact - Takes up more space */}
          <div className="lg:col-span-4 space-y-8">
            <Link href={getLocalizedHref("/")} className="block">
              <Image
                src="/avangarda-logo-lg.png"
                alt="Hotel Avangarda"
                width={200}
                height={100}
                className="h-auto w-[180px] md:w-[200px]"
              />
            </Link>

            <div className="space-y-4">
              <p className="text-sm leading-relaxed opacity-90 max-w-md">
                {dict.nav.footerDesc ||
                  "Experience luxury and comfort at Hotel Avangarda. Your perfect stay awaits in our carefully crafted spaces."}
              </p>

              <address className="not-italic space-y-3 text-sm">
                <div className="flex items-start gap-3 group">
                  <MapPin className="h-5 w-5 flex-none mt-0.5 group-hover:text-[#E31C79] transition-colors" />
                  <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                    ul. Example 123,
                    <br />
                    00-000 City
                  </span>
                </div>
                <Link
                  href={`tel:${dict.nav.phone}`}
                  className="flex items-center gap-3 group"
                >
                  <Phone className="h-5 w-5 flex-none group-hover:text-[#E31C79] transition-colors" />
                  <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                    {dict.nav.phone}
                  </span>
                </Link>
                <Link
                  href="mailto:contact@example.com"
                  className="flex items-center gap-3 group"
                >
                  <Mail className="h-5 w-5 flex-none group-hover:text-[#E31C79] transition-colors" />
                  <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                    contact@example.com
                  </span>
                </Link>
              </address>
            </div>

            <div className="flex items-center gap-6 pt-2">
              <Link
                href="https://facebook.com"
                className="hover:text-[#E31C79] transition-colors"
                aria-label="Visit our Facebook page"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://instagram.com"
                className="hover:text-[#E31C79] transition-colors"
                aria-label="Visit our Instagram page"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <LanguageSwitcher />
            </div>
          </div>

          {/* Navigation Links and Newsletter */}
          <div className="lg:col-span-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-7">
            {/* Quick Links Section */}
            <div className="lg:col-span-4 grid gap-8 sm:grid-cols-2">
              {/* Services */}
              <div className="space-y-4">
                <h2 className="text-lg font-semibold">{dict.nav.services}</h2>
                <nav className="flex flex-col space-y-2">
                  {MenuListing.slice(0, 4).map((item) => (
                    <Link
                      key={item.nameKey}
                      href={getLocalizedHref(item.href)}
                      className="text-sm opacity-90 hover:opacity-100 hover:text-[#E31C79] transition-colors"
                    >
                      {dict.nav[item.nameKey]}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Facilities */}
              <div className="space-y-4">
                <h2 className="text-lg font-semibold">{dict.nav.facilities}</h2>
                <nav className="flex flex-col space-y-2">
                  {MenuListing.slice(4).map((item) => (
                    <Link
                      key={item.nameKey}
                      href={getLocalizedHref(item.href)}
                      className="text-sm opacity-90 hover:opacity-100 hover:text-[#E31C79] transition-colors"
                    >
                      {dict.nav[item.nameKey]}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="lg:col-span-3 space-y-4">
              <h2 className="text-lg font-semibold">
                {dict.nav.newsletter || "Newsletter"}
              </h2>
              <p className="text-sm opacity-90">
                {dict.nav.newsletterDesc ||
                  "Subscribe to our newsletter to receive special offers and updates."}
              </p>
              <form className="space-y-2">
                <Input
                  type="email"
                  placeholder={dict.nav.emailPlaceholder || "Enter your email"}
                  className="bg-white/10 border-white/20 placeholder:text-white/50 text-sm"
                />
                <Button className="w-full bg-[#E31C79] hover:bg-[#E31C79]/90 transition-colors">
                  {dict.nav.subscribe || "Subscribe"}
                </Button>
              </form>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-sm">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
            <p className="opacity-75">
              © {new Date().getFullYear()} Hotel Avangarda
            </p>
            <nav className="flex gap-6">
              {CompanyLinks.map((item) => (
                <Link
                  key={item.nameKey}
                  href={getLocalizedHref(item.href)}
                  className="opacity-75 hover:opacity-100 hover:text-[#E31C79] transition-colors"
                >
                  {dict.nav[item.nameKey]}
                </Link>
              ))}
            </nav>
          </div>
          <p className="opacity-75 text-xs">{dict.nav.rights}</p>
        </div>
      </Container>
    </footer>
  );
}
