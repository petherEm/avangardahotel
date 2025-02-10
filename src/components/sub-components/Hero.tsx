import Image from "next/image";
import { Container } from "../container";

const Hero = () => {
  return (
    <Container className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="https://moviestorage.fra1.cdn.digitaloceanspaces.com/ava20s3.mp4"
          type="video/mp4"
        />
      </video>
      {/* Overlay to ensure text visibility */}
      <div className="absolute inset-0 bg-black/40" />
    </Container>
  );
};

export default Hero;
