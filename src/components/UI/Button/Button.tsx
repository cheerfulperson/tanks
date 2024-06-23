import { ComponentProps, ReactNode } from "react";
import classNames from "classnames";

import styles from "./Button.module.scss";

type ButtonType = "default" | "text";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  htmlType?: ComponentProps<"button">["type"];
  onClick?: () => void;
  type?: ButtonType;
}

export const Button = ({
  children,
  className,
  htmlType = "button",
  onClick,
  type = "default",
}: ButtonProps) => {
  return (
    <button
      className={classNames(styles.button, styles[type], className)}
      onClick={onClick}
      type={htmlType}
    >
      {children}
    </button>
  );
};
