import TwitterIcon from "../Icons/Twitter";
import LinkedinIcon from "../Icons/Linkedin";
import GitHubIcon from "../Icons/GitHub";

export const Footer = () => {
  return (
    <div className=" bg-background-secondary pt-16 pb-10 border-t border-stroke flex items-center justify-center">
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
      <div className="flex flex-row justify-between w-full max-w-[1358px]">
        <p className="text-text-tertiary">
          {" "}
          © 2024 GamCap Labs. All rights reserved.
        </p>
        <div className="flex flex-row gap-4">
          <a href="https://twitter.com/gamcaplabs" target="_blank">
            <TwitterIcon className="w-6 h-6 p-0.5 text-text-tertiary hover:text-accent-mainGreenHover transition-colors duration-500" />
          </a>
          <a href="https://www.linkedin.com/company/gamcaplabs" target="_blank">
            <LinkedinIcon className="w-6 h-6 text-text-tertiary hover:text-accent-mainGreenHover transition-colors duration-500" />
          </a>
          <a href="https://github.com/GamCap" target="_blank">
            <GitHubIcon className="w-6 h-6 p-0.5 text-text-tertiary hover:text-accent-mainGreenHover transition-colors duration-500" />
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
      <p className=" text-text-tertiary text-[14px] font-poppins pb-2">
        {title}
      </p>
      {links.map((link) => (
        <a
          href={link.href}
          key={link.title}
          className=" text-white text-[16px] font-poppins"
        >
          {link.title}
        </a>
      ))}
    </div>
  );
};
