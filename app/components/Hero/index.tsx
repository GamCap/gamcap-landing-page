"use client";
import { useRef } from "react";
import { AnimatedCircle } from "../AnimatedCircle";
import AnimatedText from "../AnimatedText";
import { ButtonPrimary } from "../Button";

export function Hero() {
  const parentRef = useRef<HTMLDivElement>(null);
  return (
    <div
      className=" w-full min-h-[calc(100vh-32px)] mt-8 bg-background-primary flex flex-col items-center justify-center relative overflow-hidden"
      ref={parentRef}
    >
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
      <span className="hash-span" id="Hero">
        &nbsp;
      </span>
      <div className=" w-full px-16 flex flex-col gap-8 max-w-[1368px] items-center text-center xl:items-start xl:text-start">
        <div className=" text-white text-[64px] leading-[80px] xl:text-[100px] xl:leading-[126px] flex flex-col items-center xl:items-start font-bold">
          <p>
            Simplifying <span className="xl:hidden">Web3 for&nbsp;</span>
          </p>
          <div className="flex flex-col items-center xl:flex-row">
            <p className="hidden xl:block">Web3 for&nbsp;</p>
            <AnimatedText
              words={["dApps", "Institutions", "Users"]}
              interval={3000}
            />
          </div>
        </div>
        <p className="max-w-[402px] text-[16px] text-text-secondary pb-4">
          Gamcap Labs is a coalition of seasoned Web3 builders with a strong
          focus on building data solutions around the blockchain space.
        </p>
        <ButtonPrimary
          text="Check our portfolio"
          onClick={() => {
            const element = document.getElementById("Solutions");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
        />
      </div>
    </div>
  );
}
