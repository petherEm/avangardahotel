import AnimateOnScroll from "@/components/AnimateOnScroll";
import BusinessHero from "@/components/sub-components/Business/BusinessHero";
import BusinessIntro from "@/components/sub-components/Business/BusinessIntro";
import RoomsHero from "@/components/sub-components/Rooms/RoomsHero";
import { getDictionary } from "@/lib/dictionary";

export default async function BusinessMainPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "pl");

  return (
    <>
      <BusinessHero />

      <AnimateOnScroll>
        <BusinessIntro dict={dict} lang={lang} />
      </AnimateOnScroll>
    </>
  );
}
