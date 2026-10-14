import Link from "next/link";
import styles from "../Input.module.scss";
import { ComponentProps } from "react";

interface BoxProps extends ComponentProps<"input"> {
  id: string;
  label: string;
  href?: string;
  hrefLabel?: string;
}

/**
 * Check-box réutilisable
 * @param id - identifiant du champ
 * @param label - label à afficher
 * @param href - lien facultatif (ex pour les CGU)
 * @param hrefLabel - Nom à afficher pour le lien href
 */
export const Box = ({ id, label, href, hrefLabel, ...inputProps }: BoxProps) => {
  return (
    <div className={styles.boxWrapper}>
      <input type="checkbox" id={id} className={styles.boxInput} {...inputProps} />
      <label htmlFor={id} className={styles.boxLabel}>
        {label}
        {href && (
          <Link href={href} className={styles.boxLink}>
            {hrefLabel}
          </Link>
        )}
      </label>
    </div>
  );
};
