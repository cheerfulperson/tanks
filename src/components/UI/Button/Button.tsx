import { ComponentProps, ReactNode } from "react";
import classNames from "classnames";

import styles from "./Button.module.scss";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  htmlType?: ComponentProps<"button">["type"];
  onClick?: () => void;
}

/**
 * Button component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The content of the button.
 * @param {string} props.className - The additional CSS class name for the button.
 * @param {string} props.htmlType - The type of the button element.
 * @param {Function} props.onClick - The click event handler for the button.
 * @returns {JSX.Element} The rendered Button component.
 */
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
