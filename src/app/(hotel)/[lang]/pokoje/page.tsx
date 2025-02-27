import AnimateOnScroll from "@/components/AnimateOnScroll";
import HeroImage from "@/components/sub-components/HeroImage";
import RoomsIntro from "@/components/sub-components/Rooms/RoomsIntro";
import WorkInProgress from "@/components/sub-components/WorkInProgress";
import { getDictionary } from "@/lib/dictionary";

export default async function RoomsMainPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "pl");

  const title = lang === "pl" ? "Nasze pokoje" : "Our rooms";

  return (
    <>
      <HeroImage image="/gallery-images/gal-04.jpg" title={title} />

      <AnimateOnScroll>
        <RoomsIntro dict={dict} lang={lang} />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <WorkInProgress dict={dict} lang={lang} />
      </AnimateOnScroll>
    </>
  );
}
