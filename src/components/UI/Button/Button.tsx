import { ComponentProps, ReactNode } from "react";
import classNames from "classnames";

import styles from "./Button.module.scss";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  htmlType?: ComponentProps<"button">["type"];
  onClick?: () => void;
}

export const Button = ({
  children,
  className,
  htmlType = "button",
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={classNames(styles.button, className)}
      onClick={onClick}
      type={htmlType}
    >
      {children}
    </button>
  );
};
