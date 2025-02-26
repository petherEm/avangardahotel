import AnimateOnScroll from "@/components/AnimateOnScroll";
import EventsHero from "@/components/sub-components/Events/EventsHero";
import EventsIntro from "@/components/sub-components/Events/EventsIntro";
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

export default async function EventsMainPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "pl");

  return (
    <>
      <EventsHero />

      <AnimateOnScroll>
        <EventsIntro dict={dict} lang={lang} />
      </AnimateOnScroll>
    </>
  );
}
