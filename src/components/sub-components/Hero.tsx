import Image from "next/image";
import { Container } from "../container";
import { VideoWrapper } from "../VideoWrapper";

export const HeroFallback = () => {
  return (
    <div className="relative w-full h-full">
      <Image
        src="/bg-hero.png"
        alt="Hero background"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
};

const Hero = () => {
  return (
    <Container className="relative h-screen w-full overflow-hidden">
      <VideoWrapper />
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
    </Container>
  );
};

export default Hero;
