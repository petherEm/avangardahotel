import AnimateOnScroll from "@/components/AnimateOnScroll";
import BusinessIntro from "@/components/sub-components/Business/BusinessIntro";
import HeroImage from "@/components/sub-components/HeroImage";
import WorkInProgress from "@/components/sub-components/WorkInProgress";
import { getDictionary } from "@/lib/dictionary";

export default async function BusinessMainPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "pl");

  const title = lang === "pl" ? "Oferta dla biznesu" : "Business events";

  return (
    <>
      <HeroImage image="/gallery-images/gal-06.png" title={title} />

      <AnimateOnScroll>
        <BusinessIntro dict={dict} lang={lang} />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <WorkInProgress dict={dict} lang={lang} />
      </AnimateOnScroll>
    </>
  );
}
