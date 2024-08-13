"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatedCircle } from "../AnimatedCircle";
import AnimatedText from "../AnimatedText";
import Donut from "../Icons/donut";
import cn from "classnames";
import ScrollToButton from "../ScrollToButton";
import { AnimatePresence, motion } from "framer-motion";
import { sendGTMEvent } from "@next/third-parties/google";

export function Hero() {
  const parentRef = useRef<HTMLDivElement>(null);
  const [scrollPos, setScrollPos] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.addEventListener("scroll", listenScroll);

    return () => {
      window.removeEventListener("scroll", listenScroll);
    };
  });
  const listenScroll = () => {
    const windowScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolledFloat = windowScroll / height;

    const scrolled = scrolledFloat > 0.05;

    setScrollPos(scrolled);
  };

  return (
    <div className="heroContainer" ref={parentRef}>
      <img
        src="/logo.png"
        alt="Logo"
        className="absolute top-0 left-0 z-0 opacity-10 scale-[0.8] md:scale-100"
      />
      <Donut className="heroDonut" />
      <div id="Hero" className="spacer" aria-hidden="true"></div>
      <AnimatedCircle
        radiusX={160}
        radiusY={30}
        speed={0.003}
        className="heroAnimatedCircle"
        initialXDivider={6}
        initialYDivider={2.5}
        tiltAngle={15}
        parent={parentRef}
      />
      <AnimatedCircle
        radiusX={30}
        radiusY={40}
        speed={0.003}
        className="heroAnimatedCircle"
        initialXDivider={1.2}
        initialYDivider={1.05}
        tiltAngle={0}
        parent={parentRef}
      />
      <div
        className={cn(
          "container w-full px-16 gap-8 z-[1]",
          "flex flex-col items-center text-center",
          "xl:items-start xl:text-start"
        )}
      >
        <div
          className={cn(
            "flex flex-col items-center",
            "text-white text-[48px] leading-[56px] font-bold",
            "xl:text-[64px] xl:leading-[76px] xl:items-start"
          )}
        >
          <p>
            Simplifying <span className="hidden">Web3 for&nbsp;</span>
          </p>
          <div className="flex flex-col items-center xl:flex-row">
            <p className="block text-nowrap">Web3 for&nbsp;</p>
            <AnimatedText
              words={["dApps", "Institutions", "Users"]}
              interval={3000}
            />
          </div>
        </div>
        <p className="max-w-[850px] text-[14px] lg:text-[16px] text-text-secondary pb-4">
          We are a team of seasoned Web3 buidlers with a strong focus on
          building data solutions around the blockchain space. We offer our
          services to dApps, protocols and retail users needing a data solution,
          contact us to learn more.
        </p>
        <a
          href="mailto:info@gamcaplabs.com"
          className={cn(
            "flex items-center justify-center",
            "px-5 py-2 lg:px-7 lg:py-3 rounded-sm",
            "bg-accent-mainGreen",
            "transition-colors duration-200 hover:bg-accent-mainGreenHover"
          )}
          onClick={() => {
            console.log("contactUs");
            sendGTMEvent({ event: "buttonClicked", value: "contactUs" });
          }}
        >
          <p className="text-background-primary text-[14px] lg:text-[16px] leading-[150%] font-medium">
            Contact us
          </p>
        </a>
      </div>
      <AnimatePresence>
        {!scrollPos && (
          <motion.div
            key={"scrollToButton"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={`absolute bottom-0 left-0 right-0 flex justify-center pb-4 z-[1]`}
          >
            <ScrollToButton to="#Portfolio" text="See Portfolio" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
