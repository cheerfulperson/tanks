import styles from "./Input.module.scss";

interface InputProps {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

export const Input = ({ onChange, placeholder, value }: InputProps) => {
  return (
    <input
      className={styles.input}
      placeholder={placeholder}
      onChange={(e) => {
        e.preventDefault();
        onChange(e.target.value);
      }}
      value={value}
    />
  );
};
