"use client";
import { useState } from "react";
import { Card } from "../Card";
import { Title } from "../Title";

export function Solutions() {
  const [activeCard, setActiveCard] = useState<number>(0);

  return (
    <div className=" w-full bg-background-primary flex flex-col px-8 pt-[150px] pb-[75px] gap-16">
      <Title
        title="Solutions"
        description="Our vision is to emerge as the terminal for NFTs. The insights include tailored methods such as sentiment analysis, liquidity index, and holder tracking supported by an extensive suite of trading and portfolio tools."
      />
      <div className=" px-[80px] flex flex-col content-between flex-wrap max-h-[700px]">
        <Card
          title="Data Analytics"
          description="Tap into unparalleled coverage of on-chain and social media analytics."
          active={activeCard === 0}
          onClick={() => setActiveCard(0)}
          className="pt-0"
        />
        <Card
          title="Insights"
          description="Discover new opportunities with cutting-edge NFTBull Sentiment Analysis module and NFTBull indices."
          active={activeCard === 1}
          onClick={() => setActiveCard(1)}
          className="pt-8"
        />
        <Card
          title="Data Analytics"
          description="Tap into unparalleled coverage of on-chain and social media analytics."
          active={activeCard === 2}
          onClick={() => setActiveCard(2)}
          className="pt-8"
        />
        <Card
          title="Insights"
          description="Discover new opportunities with cutting-edge NFTBull Sentiment Analysis module and NFTBull indices."
          active={activeCard === 3}
          onClick={() => setActiveCard(3)}
          className="pt-8"
        />
      </div>
    </div>
  );
}
