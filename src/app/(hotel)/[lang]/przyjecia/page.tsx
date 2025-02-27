import AnimateOnScroll from "@/components/AnimateOnScroll";
import EventsHero from "@/components/sub-components/Events/EventsHero";
import EventsIntro from "@/components/sub-components/Events/EventsIntro";
import HeroImage from "@/components/sub-components/HeroImage";
import WorkInProgress from "@/components/sub-components/WorkInProgress";
import { getDictionary } from "@/lib/dictionary";

export default async function EventsMainPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "pl");

  const title = lang === "pl" ? "Przyjęcia i wesela" : "Weddings and events";

  return (
    <>
      <EventsHero />
      <AnimateOnScroll>
        <EventsIntro dict={dict} lang={lang} />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <WorkInProgress dict={dict} lang={lang} />
      </AnimateOnScroll>
      <HeroImage image="/gallery-images/gal-05.png" title={title} />
    </>
  );
}
