import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import ImageScroller from "./components/ImageScroller";
import { MissionAndVision } from "./components/MissionAndVision";
import { Solutions } from "./components/Solutions";

export default function Home() {
  return (
    <>
      <Hero />
      <ImageScroller
        images={[
          "/images/uniswap.png",
          "/images/worldcoin.png",
          "/images/protocollabs.png",
          "/images/longhash.png",
        ]}
      />
      <Solutions />
      <MissionAndVision />
      <Footer />
    </>
  );
}
