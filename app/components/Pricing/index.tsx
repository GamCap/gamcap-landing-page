"use client";
import { ButtonPrimary } from "../Button";
import { Title } from "../Title";

export function Pricing() {
  return (
    <div className=" w-full bg-background-primary flex flex-col px-8 pt-[150px] pb-[75px] gap-16 items-center justify-center">
      <span className="hash-span" id="Pricing">
        &nbsp;
      </span>
      <Title
        title="Making NFTs Accessible"
        description="NFTBull is the gateway for exploring the uncharted world of NFTs. We're revolutionizing the way you create and trade NFTs."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 min-h-[400px] container w-full">
        <PriceCard
          title="retail traders & collectors"
          description="Enabling NFT traders to navigate the market with sentiment analysis, portfolio tracking, limit ordering, personalized dashboard."
          actionText="Get Started"
          onClick={() => {}}
        />
        <PriceCard
          title="Creators & Institutions"
          description="Providing consultancy and data to NFT creators by Creator Dashboard, Sold out Meter, Secondary Market Analysis, Community Sentiment."
          actionText="Book a call"
          onClick={() => {}}
          className=" border-b border-t md:border-b-0 md:border-t-0 md:border-r md:border-l border-stroke"
        />
        <PriceCard
          title="Developers & Researchers"
          description="Technically proficient users can create their own flows using developer playground, Sheets integration, NFTBull API, community competitions."
          actionText="Book a call"
          onClick={() => {}}
        />
      </div>
    </div>
  );
}

interface PriceCardProps {
  title: string;
  description: string;
  actionText: string;
  className?: string;
  onClick: () => void;
}

function PriceCard({
  title,
  description,
  actionText,
  className,
  onClick,
}: PriceCardProps) {
  return (
    <div
      className={`flex flex-col justify-between items-center p-6 text-white min-h-[300px] md:min-h-0 ${className}`}
    >
      <div className="flex flex-col items-center gap-4">
        <p className=" font-medium text-[32px] uppercase text-center">
          {title}
        </p>
        <p className=" font-medium text-[16px] md:max-w-[316px] text-center">
          {description}
        </p>
      </div>
      <ButtonPrimary text={actionText} onClick={onClick} fullWidth />
    </div>
  );
}
