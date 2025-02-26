import AnimateOnScroll from "@/components/AnimateOnScroll";
import GastroClub from "@/components/sub-components/Gastro/GastroClub";
import GastroFort from "@/components/sub-components/Gastro/GastroFort";
import GastroHero from "@/components/sub-components/Gastro/GastroHero";
import GastroIntro from "@/components/sub-components/Gastro/GastroIntro";
import GastroPort from "@/components/sub-components/Gastro/GastroPort";
import { getDictionary } from "@/lib/dictionary";

export default async function GastroMainPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "pl");

  return (
    <>
      <GastroHero />

      <AnimateOnScroll>
        <GastroIntro dict={dict} lang={lang} />
      </AnimateOnScroll>
      <AnimateOnScroll>
        {" "}
        <GastroClub dict={dict} lang={lang} />
      </AnimateOnScroll>

      <AnimateOnScroll>
        {" "}
        <GastroFort dict={dict} lang={lang} />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <GastroPort dict={dict} lang={lang} />
      </AnimateOnScroll>
    </>
  );
}
