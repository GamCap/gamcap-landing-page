import React from "react";

interface ScrollToButtonProps {
  to: string;
  text: string;
  id?: string;
}
const ScrollToButton: React.FC<ScrollToButtonProps> = ({
  to,
  text,
  id,
}: ScrollToButtonProps) => {
  return (
    <a href={to} className={"h-fit w-fit"} id={id}>
      <p className="text-[14px] lg:text-[16px] z-[1]">{text}</p>
      <div className="flex items-center justify-center">
        <span className={"arrow"}>&#x2193;</span>
      </div>
    </a>
  );
};

export default ScrollToButton;
