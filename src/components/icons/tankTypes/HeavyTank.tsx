import { SVGProps } from "react";

export const HeavyTank = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 15 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g>
      <path
        d="M13.2 6.8l-7.5 9.1L7.5 18 15 9z"
        fill="currentColor"
        fillRule="evenodd"
      ></path>
      <path
        d="M10.3 3.4l-7.4 9.1 1.8 2.1 7.4-9z"
        fill="currentColor"
        fillRule="evenodd"
      ></path>
      <path
        d="M7.5 0L0 9l1.9 2.2 7.4-9z"
        fill="currentColor"
        fillRule="evenodd"
      ></path>
    </g>
  </svg>
);
