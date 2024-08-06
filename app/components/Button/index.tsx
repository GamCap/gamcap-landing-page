export function ButtonPrimary({
  text,
  fullWidth,
  onClick,
}: {
  text: string;
  fullWidth?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className={`flex justify-center items-center bg-accent-mainGreen transition-colors duration-200 hover:bg-accent-mainGreenHover px-7 py-3 rounded-sm ${
        fullWidth ? "w-full" : "w-fit"
      }`}
      onClick={onClick}
    >
      <p className=" text-background-primary text-[16px] leading-[150%] font-medium">
        {text}
      </p>
    </button>
  );
}
