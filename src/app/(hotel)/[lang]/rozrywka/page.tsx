import AnimateOnScroll from "@/components/AnimateOnScroll";
import EntertainmentHero from "@/components/sub-components/Entertainment/EntertainmentHero";
import EntertainmentIntro from "@/components/sub-components/Entertainment/EntertainmentIntro";
import GalleryHero from "@/components/sub-components/Gallery/GalleryHero";
import GalleryIntro from "@/components/sub-components/Gallery/GalleryIntro";
import GastroClub from "@/components/sub-components/Gastro/GastroClub";
import GastroFort from "@/components/sub-components/Gastro/GastroFort";
import GastroHero from "@/components/sub-components/Gastro/GastroHero";
import GastroIntro from "@/components/sub-components/Gastro/GastroIntro";
import GastroPort from "@/components/sub-components/Gastro/GastroPort";
import RoomsHero from "@/components/sub-components/Rooms/RoomsHero";
import RoomsIntro from "@/components/sub-components/Rooms/RoomsIntro";
import { getDictionary } from "@/lib/dictionary";

export default async function EntertainmentMainPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "pl");

  return (
    <>
      <EntertainmentHero />

      <AnimateOnScroll>
        <EntertainmentIntro dict={dict} lang={lang} />
      </AnimateOnScroll>
    </>
  );
}
