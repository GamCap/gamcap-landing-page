"use client";
import { useRef, useState } from "react";
import { Card } from "../Card";
import { Title } from "../Title";
import { AnimatedCircle } from "../AnimatedCircle";
import { AnimatePresence, motion } from "framer-motion";
import { prefix } from "@/app/prefix";
export function Solutions() {
  const [activeCard, setActiveCard] = useState<number>(2);
  const parentRef = useRef<HTMLDivElement>(null);

  return (
    <div className=" w-full bg-background-primary flex flex-col px-8 pt-[150px] pb-[75px] gap-16 items-center justify-center relative overflow-hidden">
      <span className="hash-span" id="Solutions">
        &nbsp;
      </span>
      <Title
        title="Solutions"
        description="Gamcap Labs is continuously ingesting new data from on/off-chain data sources, blockchains and social media. This raw data is then curated by its state-of-art smart contract decoders and data processing models specifically developed by the GCL team, vetting all the information and ensuring accuracy across the board."
      />
      <div
        ref={parentRef}
        className="lg:absolute lg:top-0 lg:left-0 lg:w-full lg:h-full xl:h-full relative"
      >
        <AnimatedCircle
          radiusX={70}
          radiusY={40}
          speed={0.003}
          className=" bg-accent-mainGreen w-36 h-36 blur-[80px] opacity-40"
          initialXDivider={3}
          initialYDivider={1.8}
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
          initialXDivider={1.6}
          initialYDivider={1.4}
          tiltAngle={30}
          maxScale={1.25}
          minScale={0.9}
          scaleSpeed={0.00025}
          parent={parentRef}
        />
      </div>
      <div className="px-16 flex flex-wrap justify-center lg:flex-col gap-8 content-between xl:flex-wrap xl:max-h-[700px] max-w-[1368px] w-full relative">
        <AnimatedContent selectedCard={activeCard} />
        <Card
          title="Polya AI"
          description="Web3 Terminal"
          active={activeCard === 0}
          onClick={() => setActiveCard(0)}
          className="xl:pt-0 z-20"
        />
        <Card
          title="Uniswap Easy"
          description="Developed Uniswap v4 liquidity deposit"
          active={activeCard === 1}
          onClick={() => setActiveCard(1)}
          className="xl:pt-8 z-20"
        />
        <Card
          title="Merkle Tree Visualization"
          description="Developed merkle tree visualization for Worldcoin Foundation"
          active={activeCard === 2}
          onClick={() => setActiveCard(2)}
          className="xl:pt-8 z-20"
        />
        <Card
          title="NFTBull"
          description="NFT specialized analytics platform"
          active={activeCard === 3}
          onClick={() => setActiveCard(3)}
          className="xl:pt-8 z-20"
        />
      </div>
    </div>
  );
}

interface AnimatedContentProps {
  selectedCard: number;
}
const AnimatedContent = ({ selectedCard }: AnimatedContentProps) => {
  return (
    <div
      className={
        " w-full h-[400px] flex items-center justify-center -z-0" +
        " lg:h-auto lg:absolute lg:top-0 lg:bottom-0 lg:w-3/4 lg:translate-x-1/3" +
        " xl:top-0 xl:bottom-0 xl:left-1/2 xl:w-1/2 xl:-translate-x-1/2"
      }
    >
      <AnimatePresence mode="wait">
        {selectedCard === 0 && (
          <motion.video
            key="polya"
            initial={{ opacity: 0, transform: "translate(50%,50%)" }}
            animate={{ opacity: 1, transform: "translate(0,0)" }}
            exit={{ opacity: 0, transform: "translate(-50%,-50%)" }}
            width="100%"
            controls={false}
            autoPlay
            loop
            className="border border-stroke rounded-md w-3/4"
          >
            <source src={`${prefix}/videos/polyaIntro.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </motion.video>
        )}
        {selectedCard === 1 && (
          <div className="w-full h-full relative">
            <motion.img
              key="uniswap"
              initial={{ opacity: 0, transform: "translate(-25%,-75%)" }}
              animate={{ opacity: 1, transform: "translate(-50%,-75%)" }}
              exit={{ opacity: 0, transform: "translate(-75%,-75%)" }}
              src={`${prefix}/images/uniswapeasy.png`}
              alt="Uniswap Easy"
              className="absolute h-full top-[71%] left-[30%] lg:h-auto lg:w-3/5 lg:left-1/2 lg:top-1/2 z-[3]"
            />
            <motion.img
              key="uniswap3"
              initial={{ opacity: 0, transform: "translate(25%,50%)" }}
              animate={{ opacity: 1, transform: "translate(50%,50%)" }}
              exit={{ opacity: 0, transform: "translate(75%,50%)" }}
              src={`${prefix}/images/confirmTransaction.png`}
              alt="Uniswap Easy"
              className="absolute h-1/2 right-1/4 lg:h-auto lg:w-1/2 lg:left-0 lg:top-1/2 z-[2] "
            />
          </div>
        )}
        {selectedCard === 2 && (
          <motion.div className="w-full h-full relative" key="merkleTree">
            <motion.img
              key="merkle"
              initial={{ opacity: 0, transform: "translate(-50%,-150%)" }}
              animate={{ opacity: 1, transform: "translate(-50%,-100%)" }}
              exit={{ opacity: 0, transform: "translate(-50%,-150%)" }}
              src={`${prefix}/images/treeBlockRange.png`}
              alt="Merkle Tree Visualization"
              className="absolute w-3/5 left-1/2 top-1/2 z-[3] border border-stroke rounded-md"
            />
            <motion.img
              key="merkle2"
              initial={{ opacity: 0, transform: "translate(50%,50%)" }}
              animate={{ opacity: 1, transform: "translate(0%,-25%)" }}
              exit={{ opacity: 0, transform: "translate(50%,50%)" }}
              src={`${prefix}/images/calendarHeatmap.png`}
              alt="Dashboard Calendar Heatmap"
              className="absolute w-3/5 right-0 top-1/2 z-[2] border border-stroke rounded-md"
            />

            <motion.img
              key="merkle3"
              initial={{ opacity: 0, transform: "translate(-50%,-50%)" }}
              animate={{ opacity: 1, transform: "translate(0%,-25%)" }}
              exit={{ opacity: 0, transform: "translate(-50%,-50%)" }}
              src={`${prefix}/images/barChart.png`}
              alt="Dashboard Bar Chart"
              className="absolute w-1/2 left-0 top-1/2 z-[2] border border-stroke rounded-md"
            />
          </motion.div>
        )}

        {selectedCard === 3 && (
          <motion.div className="w-full h-full relative" key="nftbullContent">
            <motion.img
              key="nftbull"
              initial={{ opacity: 0, transform: "translate(-50%,-100%)" }}
              animate={{ opacity: 1, transform: "translate(-50%,-50%)" }}
              exit={{ opacity: 0, transform: "translate(-50%,-100%)" }}
              src={`${prefix}/images/projectHeader.png`}
              alt="NFTBull"
              className="absolute w-3/5 left-1/2 lg:top-[35%] xl:top-1/4 z-[3] border border-stroke rounded-md"
            />
            <motion.img
              key="nftbull2"
              initial={{ opacity: 0, transform: "translate(50%,50%)" }}
              animate={{ opacity: 1, transform: "translate(0%,-100%)" }}
              exit={{ opacity: 0, transform: "translate(50%,50%)" }}
              src={`${prefix}/images/projectOverview.png`}
              alt="NFTBull"
              className="absolute w-3/5 right-0 top-1/2 z-[2] border border-stroke rounded-md"
            />
            <motion.img
              key="nftbull3"
              initial={{ opacity: 0, transform: "translate(-50%,-50%)" }}
              animate={{ opacity: 1, transform: "translate(0%,-40%)" }}
              exit={{ opacity: 0, transform: "translate(-50%,-50%)" }}
              src={`${prefix}/images/Screener.png`}
              alt="NFTBull"
              className="absolute w-1/2 left-0 top-1/2 z-[1] border border-stroke rounded-md"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
