"use client";
import Image from "next/image";

export function Blog() {
  return (
    <div className=" w-full bg-background-primary flex flex-col px-8 pt-[150px] pb-[75px] items-center justify-center">
      <span className="hash-span" id="Blog">
        &nbsp;
      </span>
      <p className="text-[60px] font-outfit font-medium text-white pb-6">
        Blog
      </p>
      <p className="max-w-[648px] text-[20px] font-poppins text-text-secondary pb-[88px] text-center">
        Explore our insights on NFT&apos;s generated from marketplace
        activities, on-chain transactions and social media presence
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 min-h-[400px] max-w-[1368px] w-full gap-4">
        <BlogCard
          picture="/thumbnail1.png"
          title="NFT Market Analysis"
          date="June 21, 2021"
          tag={{ name: "Market Analysis", color: "purple" }}
          route="/blog1"
        />
        <BlogCard
          picture="/thumbnail1.png"
          title="NFT Market Analysis"
          date="June 21, 2021"
          tag={{ name: "Market Analysis", color: "green" }}
          route="/blog2"
        />
        <BlogCard
          picture="/thumbnail1.png"
          title="NFT Market Analysis"
          date="June 21, 2021"
          tag={{ name: "Market Analysis", color: "purple" }}
          route="/blog3"
        />
      </div>
    </div>
  );
}

interface BlogCardProps {
  picture: string;
  title: string;
  date: string;
  tag: { name: string; color: "purple" | "green" };
  route: string;
}

function BlogCard({ picture, title, date, route, tag }: BlogCardProps) {
  return (
    <div className="flex flex-col justify-start relative">
      <Image
        src={picture}
        alt={title}
        className="w-full h-auto pb-6 block aspect-square"
        width={200}
        height={200}
      />
      <p className=" text-[20px] font-medium font-outfit text-white pb-4">
        {title}
      </p>
      <p className=" text-[16px] font-poppins text-text-tertiary pb-2">
        {date}
      </p>
      <BlogCardTag name={tag.name} color={tag.color} />
    </div>
  );
}

function BlogCardTag({
  name,
  color,
}: {
  name: string;
  color: "purple" | "green";
}) {
  return (
    <div
      className={` rounded-sm bg-opacity-15 px-3 py-1 w-fit ${
        color === "purple" ? "bg-[#f09]" : "bg-[#00ffb9]"
      }`}
    >
      <p
        className={` text-[14px] font-poppins ${
          color === "purple" ? "text-[#f09]" : "text-[#00ffb9]"
        }`}
      >
        {name}
      </p>
    </div>
  );
}
