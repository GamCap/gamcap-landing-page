import TwitterIcon from "../Icons/Twitter";
import GitHubIcon from "../Icons/GitHub";
import Email from "../Icons/Email";
import { prefix } from "@/app/prefix";

export const Footer = () => {
  return (
    <div className=" px-6 py-4 lg:py-8 lg:px-16 bg-background-secondary  border-t border-stroke flex items-center justify-center">
      {/* <div className=" flex flex-row justify-between px-16 max-w-[1358px] w-full">
        <div className="flex flex-col gap-4">
          <p className=" text-white text-[20px] font-poppins">Footer Logo</p>
          <p className=" text-white text-[14px] font-poppins">Badge</p>
        </div>
        <div className="flex flex-col gap-4 w-full items-center">
          <div className="grid grid-cols-3 gap-[16px_140px]">
            <FooterColumn
              title="Company"
              links={[
                { title: "Home", href: "#Home" },
                { title: "Careers", href: "#" },
              ]}
            />
            <FooterColumn
              title="Resources"
              links={[
                { title: "Documents", href: "#" },
                { title: "Blog", href: "#" },
                { title: "NFTBull Academy", href: "#" },
              ]}
            />
            <FooterColumn
              title="Legal"
              links={[
                { title: "Privacy Policy", href: "#" },
                { title: "Terms of Service", href: "#" },
              ]}
            />
            <div className="flex flex-row justify-end gap-4 w-full col-span-3">
              <TwitterIcon className="w-6 h-6 p-0.5 text-text-tertiary hover:text-accent-mainGreenHover transition-colors duration-500" />
              <LinkedinIcon className="w-6 h-6 text-text-tertiary hover:text-accent-mainGreenHover transition-colors duration-500" />
            </div>
          </div>
        </div>
      </div> */}
      <div className="flex flex-col md:flex-row justify-between gap-2 w-full container">
        <div className="flex flex-row gap-2 items-center justify-between md:justify-start">
          <img src={`${prefix}/logo.png`} alt="Logo" className="w-8 h-8" />
          <p className="text-text-tertiary text-[12px] lg:text-[14px]">
            © 2024 GamCap Labs. All rights reserved.
          </p>
        </div>
        <div className="flex flex-row gap-2 lg:gap-4 justify-end md:justify-start">
          <a
            href="https://twitter.com/gamcaplabs"
            target="_blank"
            id="ga-twitter"
          >
            <TwitterIcon className="w-4 h-4 lg:w-6 lg:h-6 p-0.5 text-text-tertiary hover:text-accent-mainGreenHover transition-colors duration-500" />
          </a>
          <a href="https://github.com/GamCap" target="_blank" id="ga-github">
            <GitHubIcon className="w-4 h-4 lg:w-6 lg:h-6 p-0.5 text-text-tertiary hover:text-accent-mainGreenHover transition-colors duration-500" />
          </a>
          <a href="mailto:info@gamcaplabs.com" target="_blank" id="ga-email">
            <Email className="w-4 h-4 lg:w-6 lg:h-6 text-text-tertiary hover:text-accent-mainGreenHover transition-colors duration-500" />
          </a>
        </div>
      </div>
    </div>
  );
};

const FooterColumn = ({
  title,
  links,
}: {
  title: string;
  links: { title: string; href: string }[];
}) => {
  return (
    <div className="flex flex-col gap-4">
      <p className=" text-text-tertiary text-[14px] pb-2">{title}</p>
      {links.map((link) => (
        <a
          href={link.href}
          key={link.title}
          className=" text-white text-[16px]"
        >
          {link.title}
        </a>
      ))}
    </div>
  );
};
