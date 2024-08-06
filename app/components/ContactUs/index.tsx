"use client";
import { ButtonPrimary } from "../Button";
import { Title } from "../Title";

export function ContactUs() {
  return (
    <div className=" w-full bg-background-primary flex flex-col px-8 pb-[75px] gap-16 items-center justify-center">
      <span className="hash-span" id="Contact">
        &nbsp;
      </span>
      <div className=" w-full px-16 flex flex-col gap-8 container text-center">
        <p>
          Blockchain adoption is at an inflection point, with growing interest
          from retail and institutional investors. Gamcap Labs is positioned to
          capitalize on this trend by providing tailored data solutions for our
          institutional clients, helping them navigate the Web3 space with
          precision and insight.
        </p>
        <p>
          We offer our services to dApps, protocols and retail users needing a
          data solution, contact us to learn more.
        </p>
      </div>
      {/* <ButtonPrimary
      
        text={"Contact us"}
        onClick={() => {
          window.open("mailto:info@gamcaplabs.com");
        }}
      /> */}
      <a
        href="mailto:info@gamcaplabs.com"
        className="flex justify-center items-center bg-accent-mainGreen transition-colors duration-200 hover:bg-accent-mainGreenHover px-7 py-3 rounded-sm "
      >
        <p className="text-background-primary text-[16px] leading-[150%] font-medium font-poppins">
          Contact us
        </p>
      </a>
    </div>
  );
}
