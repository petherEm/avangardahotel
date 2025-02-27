import AnimateOnScroll from "@/components/AnimateOnScroll";
import HeroImage from "@/components/sub-components/HeroImage";
import TechIntro from "@/components/sub-components/Tech/TechIntro";
import { getDictionary } from "@/lib/dictionary";

export default async function TechMainPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "pl");

  const title = lang === "pl" ? "Technologia" : "Technology";

  return (
    <>
      <HeroImage image="/gallery-images/gal-02.jpg" title={title} />
      <AnimateOnScroll>
        <TechIntro dict={dict} lang={lang} />
      </AnimateOnScroll>
    </>
  );
}
