interface TitleProps {
  title: string;
  description: string;
}
export function Title({ title, description }: TitleProps) {
  return (
    <div className=" flex flex-row items-start justify-between max-w-[1368px] w-full px-16">
      <p className=" text-[60px] font-outfit font-medium text-white">{title}</p>
      <p className="max-w-[444px] text-[20px] font-poppins text-white">
        {description}
      </p>
    </div>
  );
}
