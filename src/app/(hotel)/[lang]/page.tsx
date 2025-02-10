import About from "@/components/sub-components/About";
import Entertainment from "@/components/sub-components/Entertainment";
import Hero from "@/components/sub-components/Hero";
import Offers from "@/components/sub-components/Offers";
import Restaurant from "@/components/sub-components/Restaurant";
import Rooms from "@/components/sub-components/Rooms";
import Spa from "@/components/sub-components/Spa";
import { getDictionary } from "@/lib/dictionary";
import { getAllOffers } from "@/sanity/lib/offers/getOffers";

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
      <About dict={dict} lang={lang} />
      <Offers dict={dict} offers={offers} lang={lang} />
      <Rooms />
      <Restaurant dict={dict} lang={lang} />
      <Spa />
      <Entertainment />
    </>
  );
}
