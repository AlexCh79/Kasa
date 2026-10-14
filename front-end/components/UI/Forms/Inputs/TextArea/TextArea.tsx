import { ComponentProps } from "react";
import styles from "../Input.module.scss";

interface TextAreaProps extends ComponentProps<"textarea"> {
  id: string;
  label: string;
}

/**
 * Composant réutilisable de formulaire de type label + Textarea
 * @param id - identifiant du champ
 * @param label - texte du label, relié au champ
 */
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
