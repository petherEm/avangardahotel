import AnimateOnScroll from "@/components/AnimateOnScroll";
import EntertainmentHero from "@/components/sub-components/Entertainment/EntertainmentHero";
import EntertainmentIntro from "@/components/sub-components/Entertainment/EntertainmentIntro";
import HeroImage from "@/components/sub-components/HeroImage";
import WorkInProgress from "@/components/sub-components/WorkInProgress";
import { getDictionary } from "@/lib/dictionary";

export default async function EntertainmentMainPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "pl");

  const title = lang === "pl" ? "Rozrywka i atrakcje" : "Entertainment";

  return (
    <>
      <EntertainmentHero />

      <AnimateOnScroll>
        <EntertainmentIntro dict={dict} lang={lang} />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <WorkInProgress dict={dict} lang={lang} />
      </AnimateOnScroll>
    </>
  );
}
