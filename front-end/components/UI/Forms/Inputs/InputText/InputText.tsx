import type { ComponentProps } from "react";
import styles from "../Input.module.scss";

interface InputTextProps extends ComponentProps<"input"> {
  label: string;
  id: string;
  hint?: string;
}

/**
 * Champ de formulaire label + input
 * @param id - Identifiant du champ
 * @param label - Texte du label, relié au champ
 * @param hint - Indication facultative affichée sous le champ (consignes pour le mot de passe par exemple)
 */
export const InputText = ({ id, label, hint, type = "text", ...inputProps }: InputTextProps) => {
  const hintId = hint ? `${id}-hint` : undefined;

  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={id} className={styles.inputTextLabel}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        aria-describedby={hintId}
        {...inputProps}
        className={styles.inputText}
      />
      {hint && (
        <p className={styles.inputHint} id={hintId}>
          {hint}
        </p>
      )}
    </div>
  );
};
