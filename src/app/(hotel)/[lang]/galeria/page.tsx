import AnimateOnScroll from "@/components/AnimateOnScroll";
import GalleryHero from "@/components/sub-components/Gallery/GalleryHero";
import GalleryIntro from "@/components/sub-components/Gallery/GalleryIntro";
import GastroClub from "@/components/sub-components/Gastro/GastroClub";
import GastroFort from "@/components/sub-components/Gastro/GastroFort";
import GastroHero from "@/components/sub-components/Gastro/GastroHero";
import GastroIntro from "@/components/sub-components/Gastro/GastroIntro";
import GastroPort from "@/components/sub-components/Gastro/GastroPort";
import { getDictionary } from "@/lib/dictionary";

export default async function GaleriaMainPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "pl");

  return (
    <>
      <GalleryHero />

      <AnimateOnScroll>
        <GalleryIntro dict={dict} lang={lang} />
      </AnimateOnScroll>
    </>
  );
}
