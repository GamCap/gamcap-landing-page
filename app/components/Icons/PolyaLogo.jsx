import { memo } from "react";

const SvgPolyaLogo = (props) => (
  <svg
    width="67"
    height="66"
    viewBox="0 0 67 66"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M64.41 1 33.155 63.208 1.627 1h62.784Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M14.617 26.129L51.418 26.129"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

const Memo = memo(SvgPolyaLogo);
export default Memo;
