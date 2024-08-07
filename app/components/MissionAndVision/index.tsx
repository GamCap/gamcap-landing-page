"use client";
import { useRef } from "react";
import Donut from "../Icons/donut";
import { Title } from "../Title";
import { AnimatedCircle } from "../AnimatedCircle";

export function MissionAndVision() {
  const parentRef = useRef<HTMLDivElement>(null);
  return (
    <div
      className="w-full bg-background-primary flex flex-col pb-[75px] gap-4 items-center justify-center relative overflow-hidden"
      ref={parentRef}
    >
      <div className="missionDivider"></div>
      <Donut className="missionDonut" />
      <AnimatedCircle
        radiusX={80}
        radiusY={200}
        speed={0.002}
        className="heroAnimatedCircle"
        initialXDivider={2.5}
        initialYDivider={3}
        tiltAngle={40}
        parent={parentRef}
      />
      <AnimatedCircle
        radiusX={70}
        radiusY={40}
        speed={0.003}
        className="heroAnimatedCircle"
        initialXDivider={20}
        initialYDivider={10}
        tiltAngle={-30}
        parent={parentRef}
      />
      <div id="Mission" className="spacer" aria-hidden="true"></div>
      <Title title="Mission & Vision" description="" />
      <div className="container flex flex-col gap-4 text-center lg:text-start px-4 lg:px-8 text-[14px] lg:text-[16px]">
        <p className="lg:max-w-[600px]">Crypto is at a crossroads.</p>
        <p className="lg:max-w-[600px]">
          The world seems to have changed drastically since Satoshi intended to
          create a pure peer-to-peer version of electronic cash to allow online
          payments. What was once a strong fight to maintain the freedom to
          transact, is now transforming financial institutions, games, art, and
          many more fields.
        </p>
        <p className="lg:max-w-[600px]">
          Even though we witness increasing mainstream adoption of blockchain
          technology and cryptocurrencies, the sheer complexity of products and
          limited efforts to make it understandable appals many people. Meaning
          most people are missing the opportunity to take part just because they
          do not know what an ABI is or how to use SQL. We reject the notion
          that complexity should be a barrier to entry in the world of Web3 and
          crypto. We are determined to bring the power of decentralisation to
          the masses and give them control over digital assets.
        </p>
        <p className="lg:max-w-[600px]">
          Our mission is to collect and curate all objective data; detect every
          known smart contract, token, wallet, and NFT; and make it accessible,
          transparent, and understandable. We strive to be the ultimate
          destination for objective data and toolings for every Web3 user and
          institution.
        </p>
      </div>
    </div>
  );
}
