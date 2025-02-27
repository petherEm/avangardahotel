import { locales } from "@/middleware";
import type { Metadata } from "next";
import { SanityLive } from "@/sanity/lib/live";
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";
import { Geist, Geist_Mono, Raleway, Alata } from "next/font/google";
import "./globals.css";
import { getDictionary } from "@/lib/dictionary";
import { Navbar } from "@/components/sub-components/Navbar";
import { Footer } from "@/components/sub-components/Footer";
import DisableDraftMode from "@/components/sub-components/DisableDraftMode";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const alata = Alata({
  variable: "--font-alata",
  weight: ["400"],
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const metadata: Metadata = {
  title: "Hotel Avangarda",
  description: "Hotel Avangarda - Różan",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "pl");

  return (
    <html lang={lang}>
      <body
        className={`${raleway.variable} ${alata.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {(await draftMode()).isEnabled && (
          <>
            <DisableDraftMode />
            <VisualEditing />
          </>
        )}
        <Navbar lang={lang} dict={dict} />
        {children}
        <Footer lang={lang} dict={dict} />
        <SanityLive />
      </body>
    </html>
  );
}
