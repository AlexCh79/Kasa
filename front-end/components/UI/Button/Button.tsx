import styles from "./Button.module.scss";
import Image from "next/image";
import Link from "next/link";

interface ButtonProps {
  type?: "button" | "submit";
  icon?: string;
  iconWidth?: number;
  iconHeight?: number;
  label: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary";
}

/**
 * Bouton du site, rouge par défaut ou gris avec variant="secondary".
 * Avec `href`, il s'affiche comme un lien qui a l'apparence d'un bouton.
 * @param variant - "primary" (rouge, par défaut) ou "secondary" (gris, sans être désactivé)
 */
export const Button = ({
  type = "button",
  icon,
  iconWidth = 16,
  href,
  iconHeight = 16,
  label,
  onClick,
  disabled,
  variant,
}: ButtonProps) => {
  const className = [
    icon ? styles.buttonWithLogo : styles.button,
    variant === "secondary" ? styles.secondary : "",
  ].join(" ");
  if (href) {
    return (
      <Link href={href} aria-label={label} className={className} onClick={onClick}>
        {icon ? (
          <Image
            src={icon}
            width={iconWidth}
            height={iconHeight}
            aria-hidden="true"
            alt=""
            className={styles.buttonIcon}
          />
        ) : null}
        {label}
      </Link>
    );
  }
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className={className}
    >
      {icon ? (
        <Image
          src={icon}
          width={iconWidth}
          height={iconHeight}
          aria-hidden="true"
          alt=""
          className={styles.buttonIcon}
        />
      ) : null}
      <span className={styles.buttonLabel}>{label}</span>
    </button>
  );
};

interface IconButtonProps {
  type?: "button" | "submit";
  icon: string;
  iconWidth: number;
  iconHeight: number;
  label: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary";
}

export const IconButton = ({
  type = "button",
  icon,
  iconWidth,
  href,
  iconHeight,
  label,
  onClick,
  disabled,
  variant,
}: IconButtonProps) => {
  const className = [
    icon ? styles.buttonWithLogo : styles.button,
    variant === "secondary" ? styles.secondary : "",
  ].join(" ");
  if (href) {
    return (
      <Link href={href} onClick={onClick} className={styles.button} aria-label={label}>
        <Image
          src={icon}
          width={iconWidth}
          height={iconHeight}
          aria-hidden="true"
          alt=""
          className={className}
        />
      </Link>
    );
  }
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className={className}
    >
      <Image
        src={icon}
        width={iconWidth}
        height={iconHeight}
        aria-hidden="true"
        alt=""
        className={className}
      />
    </button>
  );
};
