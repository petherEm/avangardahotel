import AnimateOnScroll from "@/components/AnimateOnScroll";
import SpaHero from "@/components/sub-components/Spa/SpaHero";
import SpaIntro from "@/components/sub-components/Spa/SpaIntro";
import WorkInProgress from "@/components/sub-components/WorkInProgress";
import { getDictionary } from "@/lib/dictionary";

export default async function SpaMainPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "pl");

  const title = lang === "pl" ? "Spa & Wellness" : "Spa & Wellness";

  return (
    <>
      <SpaHero />
      <AnimateOnScroll>
        <SpaIntro dict={dict} lang={lang} />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <WorkInProgress dict={dict} lang={lang} />
      </AnimateOnScroll>
    </>
  );
}
