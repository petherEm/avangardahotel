import Image from "next/image";
import { Container } from "../container";

interface AboutProps {
  dict: {
    about: {
      title: string;
      description: string;
    };
  };
  lang: string;
}

const About = ({ dict, lang }: AboutProps) => {
  return (
    <Container className="bg-white sm:h-screen w-full text-[#404042]">
      <div className="p-4 max-w-6xl mx-auto flex flex-col items-center justify-center space-y-8">
        <h1 className="mt-6 uppercase text-5xl md:text-5xl xl:text-5xl font-semibold text-center tracking-wider">
          {dict.about.title}
        </h1>

        <p className="text-center text-lg md:text-lg xl:text-lg">
          {dict.about.description}
        </p>
        <Image
          src="/bg-hero.png"
          alt={dict.about.title}
          width={1254}
          height={578}
          priority
          className="object-contain"
          quality={100}
        />
      </div>
    </Container>
  );
};

export default About;
