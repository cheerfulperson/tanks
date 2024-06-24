import { useCallback } from "react";

import styles from "./Input.module.scss";

interface InputProps {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

export const Input = ({ onChange, placeholder, value }: InputProps) => {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      onChange(e.target.value);
    },
    [onChange]
  );

  return (
    <input
      className={styles.input}
      placeholder={placeholder}
      onChange={handleChange}
      value={value}
      data-testid="input"
    />
  );
};
