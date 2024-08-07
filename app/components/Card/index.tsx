import Donut from "@/app/components/donut";
interface CardProps {
  title: string;
  description: string;
  active?: boolean;
  onClick: () => void;
  className: string;
  donut?: boolean;
  donutClassname?: string;
  wrapperClassName?: string;
}

export function Card({
  title,
  description,
  active,
  onClick,
  className,
  donut,
  donutClassname,
  wrapperClassName,
}: CardProps) {
  return (
    <div className={className}>
      <div
        className={`relative overflow-hidden flex flex-col gap-4 rounded-lg shadow-[0px_10px_12px] shadow-accent-mainGreen/10 px-8 pb-4 pt-8 max-w-[292px] min-h-[300px] h-full lg:h-auto min-w-[292px] lg-min-w-auto transition-colors duration-200 cursor-pointer
        ${
          active
            ? "bg-accent-mainGreen text-background-secondary"
            : "bg-background-secondary text-white"
        } ${wrapperClassName}`}
        onClick={onClick}
      >
        <h1 className=" text-[16px]">{title}</h1>
        <p className=" text-[14px]">{description}</p>
        {donut && <Donut className={donutClassname} />}
      </div>
    </div>
  );
}
