"use client";
import { useRef } from "react";
import { AnimatedCircle } from "../AnimatedCircle";
import AnimatedText from "../AnimatedText";
import { ButtonPrimary } from "../Button";
import Donut from "../donut";

export function Hero() {
  const parentRef = useRef<HTMLDivElement>(null);
  return (
    <div
      className=" w-full min-h-[calc(100vh-32px)] mt-8 bg-background-primary flex flex-col items-center justify-center relative overflow-hidden"
      ref={parentRef}
    >
      <Donut className="h-full w-full scale-[150%] absolute -right-[35%] -top-[35%] rotate-[160deg] text-accent-mainGreen opacity-10 blur-sm" />
      <div id="Hero" className="spacer" aria-hidden="true"></div>
      <AnimatedCircle
        radiusX={160}
        radiusY={30}
        speed={0.003}
        className=" bg-accent-mainGreen w-64 h-64 blur-[80px] opacity-60"
        initialXDivider={6}
        initialYDivider={2.5}
        tiltAngle={15}
        parent={parentRef}
      />
      <AnimatedCircle
        radiusX={30}
        radiusY={40}
        speed={0.003}
        className=" bg-accent-mainGreen w-64 h-64 blur-[80px] opacity-60"
        initialXDivider={1.2}
        initialYDivider={1.05}
        tiltAngle={0}
        parent={parentRef}
      />
      <div className=" w-full px-16 flex flex-col gap-8 container items-center text-center xl:items-start xl:text-start">
        <div className=" text-white text-[64px] leading-[80px] xl:text-[100px] xl:leading-[126px] flex flex-col items-center xl:items-start font-bold">
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
        <p className="max-w-[850px] text-[16px] text-text-secondary pb-4">
          We are a team of seasoned Web3 buidlers with a strong focus on
          building data solutions around the blockchain space. We offer our
          services to dApps, protocols and retail users needing a data solution,
          contact us to learn more.
        </p>
        <a
          href="mailto:info@gamcaplabs.com"
          className="flex justify-center items-center bg-accent-mainGreen transition-colors duration-200 hover:bg-accent-mainGreenHover px-7 py-3 rounded-sm "
        >
          <p className="text-background-primary text-[16px] leading-[150%] font-medium font-poppins">
            Contact us
          </p>
        </a>
      </div>
    </div>
  );
}
