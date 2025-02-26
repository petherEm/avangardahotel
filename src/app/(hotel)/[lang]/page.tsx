import About from "@/components/sub-components/About";
import Business from "@/components/sub-components/Business";
import Entertainment from "@/components/sub-components/Entertainment";
import Hero from "@/components/sub-components/Hero/Hero";
import Offers from "@/components/sub-components/Offers";
import Restaurant from "@/components/sub-components/Restaurant";
import Rooms from "@/components/sub-components/Rooms";
import Spa from "@/components/sub-components/Spa";
import Weddings from "@/components/sub-components/Weddings";
import { getDictionary } from "@/lib/dictionary";
import { getAllOffers } from "@/sanity/lib/offers/getOffers";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "pl");
  const offers = await getAllOffers();
  return (
    <>
      {/* Example content to enable scrolling */}
      <Hero />
      <AnimateOnScroll>
        <About dict={dict} lang={lang} />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Offers dict={dict} offers={offers} lang={lang} />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Rooms />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Restaurant dict={dict} lang={lang} />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Spa />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Weddings />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Business />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Entertainment />
      </AnimateOnScroll>
    </>
  );
}
