import { ComponentProps } from "react";
import styles from "../Input.module.scss";

interface TextAreaProps extends ComponentProps<"textarea"> {
  id: string;
  label: string;
}

export const TextArea = ({ id, label, ...othersProps }: TextAreaProps) => {
  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={id} className={styles.inputTextLabel}>
        {label}
      </label>
      <textarea id={id} className={styles.inputTextArea} {...othersProps} />
    </div>
  );
};
