interface TitleProps {
  title: string;
  description: string;
}
export function Title({ title, description }: TitleProps) {
  return (
    <div className=" flex flex-col lg:text-start text-center lg:flex-row items-center lg:items-start justify-between container w-full px-16 lg:gap-12">
      <p className=" text-[52px] lg:text-[60px] font-medium text-white">
        {title}
      </p>
      <p className="max-w-[800px] text-[16px]  lg:text-[20px] text-white">
        {description}
      </p>
    </div>
  );
}
