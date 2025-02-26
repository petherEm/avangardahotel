import AnimateOnScroll from "@/components/AnimateOnScroll";
import RoomsHero from "@/components/sub-components/Rooms/RoomsHero";
import SpaHero from "@/components/sub-components/Spa/SpaHero";
import SpaIntro from "@/components/sub-components/Spa/SpaIntro";
import { getDictionary } from "@/lib/dictionary";

export default async function SpaMainPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "pl");

  return (
    <>
      <SpaHero />

      <AnimateOnScroll>
        <SpaIntro dict={dict} lang={lang} />
      </AnimateOnScroll>
    </>
  );
}
