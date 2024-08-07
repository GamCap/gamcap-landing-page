import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import ImageScroller from "./components/RollingBand";
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
      <Footer />
    </>
  );
}
