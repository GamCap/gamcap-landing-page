import { prefix } from "@/app/prefix";
import { ThemeSwitch } from "@/app/theme/ThemeSwitch";
import Image from "next/image";
export function Header() {
  return (
    <div className=" bg-background-primary text-white fixed top-0 left-0 w-full py-2 z-50 border-b border-stroke flex justify-center items-center">
      <div className="px-8 lg:px-16 flex flex-row justify-between items-center container w-full">
        <img
          src={`${prefix}/logo.png`}
          alt="Logo"
          className="w-[24px] h-[24px] lg:w-[36px] lg:h-[36px]"
        />

        <ul className="flex flex-row space-x-8 items-center text-[14px] lg:text-[16px] font-bold">
          <li>
            <a href="#Hero">Home</a>
          </li>

          <li>
            <a href="#Portfolio">Portfolio</a>
          </li>
        </ul>
        <div className="w-[24px] h-[24px] lg:w-[36px] lg:h-[36px] invisible" />
        {/* <ThemeSwitch /> */}
      </div>
    </div>
  );
}
