"use client";

import dynamic from "next/dynamic";
import { HeroFallback } from "./sub-components/Hero";

const VideoPlayer = dynamic(() => import("./VideoPlayer"), {
  ssr: false,
  loading: () => <HeroFallback />,
});

export const VideoWrapper = () => {
  return <VideoPlayer />;
};
