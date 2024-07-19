import { Blog } from "./components/Blog";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Pricing } from "./components/Pricing";
import { Solutions } from "./components/Solutions";

export default function Home() {
  return (
    <>
      <Hero />
      <Solutions />
      {/* <Blog />
      <Pricing /> */}
      <Footer />
    </>
  );
}
