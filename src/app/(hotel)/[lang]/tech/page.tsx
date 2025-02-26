import AnimateOnScroll from "@/components/AnimateOnScroll";
import RoomsHero from "@/components/sub-components/Rooms/RoomsHero";
import SpaIntro from "@/components/sub-components/Spa/SpaIntro";
import TechIntro from "@/components/sub-components/Tech/TechIntro";
import { getDictionary } from "@/lib/dictionary";

export default async function TechMainPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "pl");

  return (
    <>
      <RoomsHero />

      <AnimateOnScroll>
        <TechIntro dict={dict} lang={lang} />
      </AnimateOnScroll>
    </>
  );
}
