interface TitleProps {
  title: string;
  description: string;
}
export function Title({ title, description }: TitleProps) {
  return (
    <div className=" flex flex-col lg:text-start text-center lg:flex-row items-center lg:items-start justify-between container w-full px-4 lg:px-8 lg:gap-12">
      <p className=" text-[36px] lg:text-[48px] font-medium text-white ">
        {title}
      </p>
      <p className="max-w-[800px] text-[14px]  lg:text-[16px] text-white">
        {description}
      </p>
    </div>
  );
}
