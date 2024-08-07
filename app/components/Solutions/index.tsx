"use client";
import { useRef, useState } from "react";
import { Title } from "../Title";
import { AnimatePresence, motion } from "framer-motion";
import { prefix } from "@/app/prefix";
import Slider from "../Slider";
import cn from "classnames";
import Donut from "../Icons/donut";
import { AnimatedCircle } from "../AnimatedCircle";
export function Solutions() {
  const [activeCard, setActiveCard] = useState<number>(2);
  const parentRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className=" w-full bg-background-primary flex flex-col pb-[75px] gap-4 items-center justify-center relative overflow-hidden"
      ref={parentRef}
    >
      <span className="hash-span" id="Portfolio">
        &nbsp;
      </span>
      <AnimatedCircle
        radiusX={100}
        radiusY={30}
        speed={0.003}
        className="heroAnimatedCircle"
        initialXDivider={2.3}
        initialYDivider={5}
        tiltAngle={-20}
        parent={parentRef}
      />
      <Title
        title="Portfolio"
        description="Gamcap Labs is continuously ingesting new data from on/off-chain data sources, blockchains and social media. This raw data is then curated by its state-of-art smart contract decoders and data processing models specifically developed by the GCL team, vetting all the information and ensuring accuracy across the board."
      />
      <div className="lg:px-16 flex flex-wrap justify-center lg:flex-col gap-2 content-between xl:flex-wrap xl:max-h-[800px] container w-full relative z-[2]">
        <Slider
          activeSlide={activeCard}
          setActiveSlide={setActiveCard}
          data={[
            {
              title: "NFTBull",
              desc: "NFTBull is an on-chain trading platform providing real-time indexed data and trading functionalities tailored specifically for the NFT market.",
              github: "https://github.com/GamCap/nftbull_refresh",
              donut: true,
            },

            {
              title: "Uniswap Easy",
              desc: "UniswapEasy is a React widget designed to simplify liquidity management on the Uniswap V4 protocol. UniswapEasy was developed with the support from Uniswap Foundation.",
              live: "https://gamcap.github.io/uniswapeasy-buidler/",
              github: "https://github.com/GamCap/uniswapeasy",
              donut: true,
            },
            {
              title: "Atlas",
              desc: "Atlas is a specialized Merkle tree analytics tool for Worldcoin's Privacy-Preserving Proof-of-Personhood Protocol (PPPoPP) to enhance identity verification observability. UniswapEasy was developed with the support from Worldcoin Foundation.",
              github: "https://github.com/GamCap/atlas",
              live: "https://gamcap.github.io/polya-rebirth/merkletree",
              donut: true,
            },
            {
              title: "Polya AI",
              desc: "Polya is an AI-assisted user-friendly crypto terminal for data analytics, on-chain transactions, and toolings to better understand Web3. Polya empowers everyone with intuitive language model technology, translating user commands into data analytics and smart contract interactions.",
              github: "https://github.com/GamCap/polya",
              donut: true,
            },
          ]}
        />
      </div>
      <div className="w-full h-[200px] md:h-[300px] container z-[1]">
        <AnimatedContent selectedCard={activeCard} />
      </div>
      <Donut className="portfolioDonut z-[0]" />
    </div>
  );
}

interface AnimatedContentProps {
  selectedCard: number;
}
const AnimatedContent = ({ selectedCard }: AnimatedContentProps) => {
  return (
    <div className={" w-full h-full flex items-center justify-center -z-0"}>
      <AnimatePresence mode="wait">
        {selectedCard === 0 && (
          <motion.div className="w-full h-full relative" key="nftbullContent">
            <motion.img
              key="nftbull"
              initial={{ opacity: 0, transform: "translate(-20%,0%)" }}
              animate={{ opacity: 1, transform: "translate(-70%,0%)" }}
              exit={{ opacity: 0, transform: "translate(-20%,0%)" }}
              src={`${prefix}/images/projectHeader.png`}
              alt="NFTBull"
              className={cn(
                "absolute z-[3] border border-stroke rounded-md",
                "h-[35%] -right-[55%] top-0",
                "2xl:right-0",
                "xl:-right-[20%]",
                "lg:h-[40%] lg:-right-[35%]",
                "md:h-[35%] md:-right-[40%]"
              )}
            />
            <motion.img
              key="nftbull2"
              initial={{ opacity: 0, transform: "translate(-30%,0%)" }}
              animate={{ opacity: 1, transform: "translate(-80%,0%)" }}
              exit={{ opacity: 0, transform: "translate(-30%,0%)" }}
              src={`${prefix}/images/projectOverview.png`}
              alt="NFTBull"
              className={cn(
                "absolute z-[2] border border-stroke rounded-md",
                "h-[35%] -right-[45%] bottom-[25%]",
                "2xl:right-0",
                "xl:-right-[15%]",
                "lg:h-[40%] lg:-right-[35%] lg:bottom-[15%]",
                "md:h-[35%] md:-right-[35%] md:bottom-[25%]"
              )}
            />
            <motion.img
              key="nftbull3"
              initial={{ opacity: 0, transform: "translate(-100%,0%)" }}
              animate={{ opacity: 1, transform: "translate(-50%,0%)" }}
              exit={{ opacity: 0, transform: "translate(-100%,0%)" }}
              src={`${prefix}/images/Screener.png`}
              alt="NFTBull"
              className={cn(
                "absolute z-[1] border border-stroke rounded-md",
                "h-[70%] left-1/3 bottom-0",
                "2xl:left-1/3",
                "xl:left-1/3",
                "lg:h-[90%]",
                "md:h-[70%] md:left-1/4"
              )}
            />
          </motion.div>
        )}
        {selectedCard === 1 && (
          <div className="w-full h-full relative">
            <motion.img
              key="uniswap"
              initial={{ opacity: 0, transform: "translate(-50%,50%)" }}
              animate={{ opacity: 1, transform: "translate(-50%,0%)" }}
              exit={{ opacity: 0, transform: "translate(-50%,50%)" }}
              src={`${prefix}/images/uniswapeasy.png`}
              alt="Uniswap Easy"
              className="absolute h-[100%] left-1/2 top-0 z-[3]"
            />
            <motion.img
              key="uniswap2"
              initial={{ opacity: 0, transform: "translate(100%,40%)" }}
              animate={{ opacity: 1, transform: "translate(50%,40%)" }}
              exit={{ opacity: 0, transform: "translate(100%,40%)" }}
              src={`${prefix}/images/confirmTransaction.png`}
              alt="Uniswap Easy"
              className={cn(
                "absolute bottom-1/2 z-[2]",
                "h-[30%] right-[15%]",
                "md:h-[50%] md:right-[15%]",
                "lg:h-[50%] lg:right-1/4",
                "xl:h-[60%] xl:right-1/4"
              )}
            />
            <motion.img
              key="uniswap3"
              initial={{ opacity: 0, transform: "translate(-100%,60%)" }}
              animate={{ opacity: 1, transform: "translate(-50%,60%)" }}
              exit={{ opacity: 0, transform: "translate(-100%,60%)" }}
              src={`${prefix}/images/selectPool.png`}
              alt="Uniswap Easy"
              className={cn(
                "absolute bottom-1/2 z-[1]",
                "h-[30%] left-[14%]",
                "md:h-[50%] md:left-[15%]",
                "lg:h-[50%] lg:left-1/4",
                "xl:h-[60%] xl:left-1/4"
              )}
            />
          </div>
        )}
        {selectedCard === 2 && (
          <motion.div className="w-full h-full relative" key="merkleTree">
            <motion.img
              key="merkle"
              initial={{ opacity: 0, transform: "translate(50%,100%)" }}
              animate={{ opacity: 1, transform: "translate(50%,0%)" }}
              exit={{ opacity: 0, transform: "translate(50%,100%)" }}
              src={`${prefix}/images/treeBlockRange.png`}
              alt="Merkle Tree Visualization"
              className={cn(
                "absolute border border-stroke rounded-md z-[3]",
                "2xl:h-[100%] 2xl:right-[35%] 2xl:top-0",
                "xl:h-[100%] xl:right-[30%] xl:top-0",
                "lg:h-[90%] lg:right-[25%] lg:top-0",
                "md:h-[90%] md:right-[29%] md:top-0",
                "h-[80%] right-[32%] top-0"
              )}
            />

            <motion.img
              key="merkle3"
              initial={{ opacity: 0, transform: "translate(-50%,75%)" }}
              animate={{ opacity: 1, transform: "translate(0%,75%)" }}
              exit={{ opacity: 0, transform: "translate(-50%,75%)" }}
              src={`${prefix}/images/barChart.png`}
              alt="Dashboard Bar Chart"
              className={cn(
                "absolute border border-stroke rounded-md z-[2]",
                "2xl:h-[60%] 2xl:left-[30%] 2xl:bottom-1/2",
                "xl:h-[60%] xl:left-[27%] xl:bottom-1/2",
                "lg:h-[50%] lg:left-[30%] lg:bottom-1/2",
                "md:h-[45%] md:left-[15%] md:bottom-1/2",
                "h-[35%] left-[7%] bottom-1/2"
              )}
            />
            <motion.img
              key="merkle2"
              initial={{ opacity: 0, transform: "translate(-40%,20%)" }}
              animate={{ opacity: 1, transform: "translate(10%,20%)" }}
              exit={{ opacity: 0, transform: "translate(-40%,20%)" }}
              src={`${prefix}/images/calendarHeatmap.png`}
              alt="Dashboard Calendar Heatmap"
              className={cn(
                "absolute border border-stroke rounded-md z-[1]",
                "2xl:h-[50%] 2xl:left-[11%] 2xl:bottom-1/2",
                "xl:h-[50%] xl:left-[5%] xl:bottom-1/2",
                "lg:h-[45%] lg:left-[2%] lg:bottom-1/2",
                "md:h-[35%] md:left-[0%] md:bottom-[55%]",
                "h-[25%] left-[0%] bottom-[55%]"
              )}
            />
          </motion.div>
        )}

        {selectedCard === 3 && (
          <motion.video
            key="polya"
            initial={{ opacity: 0, transform: "translate(50%,0%)" }}
            animate={{ opacity: 1, transform: "translate(0,0)" }}
            exit={{ opacity: 0, transform: "translate(-50%,0%)" }}
            controls={false}
            autoPlay
            loop
            className="border border-stroke rounded-md w-[90%] h-fit sm:w-fit sm:h-full"
          >
            <source src={`${prefix}/videos/polyaIntro.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </motion.video>
        )}
      </AnimatePresence>
    </div>
  );
};
