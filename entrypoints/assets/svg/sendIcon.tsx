import * as React from "react";
import { SVGProps } from "react";

const SendIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 25 25"
    {...props}
  >
    <path
      fill="#fff"
      d="m24.456 11.607-22-11a1 1 0 0 0-1.08.12 1 1 0 0 0-.33 1l2.96 10.77-3 10.74a1 1 0 0 0 1 1.26 1 1 0 0 0 .45-.11l22-11a1 1 0 0 0 0-1.78Zm-20.9 10 2.21-8.11h9.24v-2h-9.24l-2.21-8.11 18.21 9.11-18.21 9.11Z"
    />
  </svg>
);

export default SendIcon;
