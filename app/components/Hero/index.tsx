"use client";
import AnimatedText from "../AnimatedText";
import { ButtonPrimary } from "../Button";

export function Hero() {
  return (
    <div className=" w-full min-h-[calc(100vh-32px)] mt-8 bg-background-primary">
      <div className=" text-white text-[100px] leading-[126px] flex flex-col items-start font-bold font-outfit">
        <p>NFT Terminal</p>
        <div className="flex flex-row">
          <p>with&nbsp;</p>
          <AnimatedText
            words={[
              "Insights",
              "Trading Suite",
              "Sentiment Analysis",
              "Portfolio Tracking",
            ]}
            interval={3000}
          />
        </div>
      </div>
      <ButtonPrimary text="Get Started" onClick={() => {}} />
    </div>
  );
}
