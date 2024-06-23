import { SVGProps } from "react";

export const MediumTank = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 12 15"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g>
      <path
        d="M12 7.5L9.7 4.7l-6 7.5L6 15zM6 0L0 7.5l2.3 2.8 6-7.5z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </g>
  </svg>
);
