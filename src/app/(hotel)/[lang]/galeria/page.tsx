import AnimateOnScroll from "@/components/AnimateOnScroll";
import GalleryIntro from "@/components/sub-components/Gallery/GalleryIntro";
import HeroImage from "@/components/sub-components/HeroImage";
import WorkInProgress from "@/components/sub-components/WorkInProgress";
import { getDictionary } from "@/lib/dictionary";

export default async function GaleriaMainPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "pl");

  const title = lang === "pl" ? "Galeria zdjęć" : "Images gallery";

  return (
    <>
      <HeroImage image="/gallery-images/gal-02.jpg" title={title} />

      <AnimateOnScroll>
        <GalleryIntro dict={dict} lang={lang} />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <WorkInProgress dict={dict} lang={lang} />
      </AnimateOnScroll>
    </>
  );
}
