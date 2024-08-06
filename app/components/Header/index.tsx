import { ThemeSwitch } from "@/app/theme/ThemeSwitch";
import Image from "next/image";
export function Header() {
  return (
    <div className=" bg-background-primary text-white fixed top-0 left-0 w-full py-2.5 z-50 border-b border-stroke flex justify-center items-center">
      <div className=" px-16 flex flex-row justify-between items-center max-w-[1368px] w-full">
        <Image src="/logo.jpeg" alt="Logo" width={60} height={60} />

        <ul className="flex flex-row space-x-8 items-center text-[16px] font-poppins">
          <li>
            <a href="#Hero">Home</a>
          </li>

          <li>
            <a href="#Solutions">Solutions</a>
          </li>
          {/* <li>
            <a href="#Blog">Blog</a>
          </li>
          <li>
            <a href="#Pricing">Pricing</a>
          </li> */}
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
        <div></div>
        {/* <ThemeSwitch /> */}
      </div>
    </div>
  );
}
