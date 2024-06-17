"use client";
import { useRef, useState } from "react";
import { Card } from "../Card";
import { Title } from "../Title";
import { AnimatedCircle } from "../AnimatedCircle";

export function Solutions() {
  const [activeCard, setActiveCard] = useState<number>(0);
  const parentRef = useRef<HTMLDivElement>(null);

  return (
    <div className=" w-full bg-background-primary flex flex-col px-8 pt-[150px] pb-[75px] gap-16 items-center justify-center relative">
      <span className="hash-span" id="Solutions">
        &nbsp;
      </span>
      <Title
        title="Solutions"
        description="Our vision is to emerge as the terminal for NFTs. The insights include tailored methods such as sentiment analysis, liquidity index, and holder tracking supported by an extensive suite of trading and portfolio tools."
      />
      <div
        ref={parentRef}
        className="lg:absolute lg:top-0 lg:left-0 lg:w-full lg:h-full xl:h-full relative"
      >
        <div className=" h-[400px] w-[400px] relative" />
        <AnimatedCircle
          radiusX={60}
          radiusY={30}
          speed={0.003}
          className=" bg-accent-mainGreen w-36 h-36 blur-[80px] opacity-40"
          initialXDivider={2.4}
          initialYDivider={1.5}
          tiltAngle={15}
          maxScale={1.2}
          minScale={0.8}
          scaleSpeed={0.00015}
          parent={parentRef}
        />
        <AnimatedCircle
          radiusX={120}
          radiusY={40}
          speed={0.0035}
          className=" bg-accent-mainGreen w-36 h-36 blur-[80px] opacity-40"
          initialXDivider={1.8}
          initialYDivider={1.2}
          tiltAngle={30}
          maxScale={1.25}
          minScale={0.9}
          scaleSpeed={0.00025}
          parent={parentRef}
        />
      </div>
      <div className="px-16 flex flex-wrap justify-center lg:flex-col gap-8 content-between xl:flex-wrap xl:max-h-[700px] max-w-[1368px] w-full ">
        <Card
          title="Data Analytics"
          description="Tap into unparalleled coverage of on-chain and social media analytics."
          active={activeCard === 0}
          onClick={() => setActiveCard(0)}
          className="xl:pt-0 z-20"
        />
        <Card
          title="Insights"
          description="Discover new opportunities with cutting-edge NFTBull Sentiment Analysis module and NFTBull indices."
          active={activeCard === 1}
          onClick={() => setActiveCard(1)}
          className="xl:pt-8 z-20"
        />
        <Card
          title="Data Analytics"
          description="Tap into unparalleled coverage of on-chain and social media analytics."
          active={activeCard === 2}
          onClick={() => setActiveCard(2)}
          className="xl:pt-8 z-20"
        />
        <Card
          title="Insights"
          description="Discover new opportunities with cutting-edge NFTBull Sentiment Analysis module and NFTBull indices."
          active={activeCard === 3}
          onClick={() => setActiveCard(3)}
          className="xl:pt-8 z-20"
        />
      </div>
    </div>
  );
}
