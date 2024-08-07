"use client";
import { useRef } from "react";
import { AnimatedCircle } from "../AnimatedCircle";
import AnimatedText from "../AnimatedText";
import { ButtonPrimary } from "../Button";
import Donut from "../donut";
import cn from "classnames";

export function Hero() {
  const parentRef = useRef<HTMLDivElement>(null);
  return (
    <div className="heroContainer" ref={parentRef}>
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
          "container w-full px-16 gap-8",
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
        >
          <p className="text-background-primary text-[14px] lg:text-[16px] leading-[150%] font-medium font-poppins">
            Contact us
          </p>
        </a>
      </div>
    </div>
  );
}
