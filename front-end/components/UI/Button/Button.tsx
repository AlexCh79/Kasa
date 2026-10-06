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
}

export const Button = ({
  type = "button",
  icon,
  iconWidth = 16,
  href,
  iconHeight = 16,
  label,
  onClick,
  disabled,
}: ButtonProps) => {
  if (href) {
    return (
      <Link
        href={href}
        aria-label={label}
        className={icon ? styles.buttonWithLogo : styles.button}
        onClick={onClick}
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
      className={icon ? `${styles.buttonWithLogo}` : `${styles.button}`}
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
}: IconButtonProps) => {
  if (href) {
    return (
      <Link href={href} onClick={onClick} className={styles.button} aria-label={label}>
        <Image
          src={icon}
          width={iconWidth}
          height={iconHeight}
          aria-hidden="true"
          alt=""
          className={styles.buttonIcon}
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
      className={styles.button}
    >
      <Image
        src={icon}
        width={iconWidth}
        height={iconHeight}
        aria-hidden="true"
        alt=""
        className={styles.buttonIcon}
      />
    </button>
  );
};
