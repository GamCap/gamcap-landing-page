interface CardProps {
  title: string;
  description: string;
  active?: boolean;
  onClick: () => void;
  className: string;
}

export function Card({
  title,
  description,
  active,
  onClick,
  className,
}: CardProps) {
  return (
    <div className={className}>
      <div
        className={`flex flex-col gap-4 rounded-lg shadow-[0px_10px_16px] shadow-accent-mainGreen/10 px-8 pb-4 pt-8 max-w-[292px] min-h-[300px] transition-colors duration-200 cursor-pointer
        ${
          active
            ? "bg-accent-mainGreen text-background-primary"
            : "bg-background-primary text-white"
        }`}
        onClick={onClick}
      >
        <h1 className=" text-[24px] font-outfit">{title}</h1>
        <p className=" text-[16px] font-poppins">{description}</p>
      </div>
    </div>
  );
}
