import styles from "./Footer.module.scss";
import Image from "next/image";

/**
 *
 * @returns Pied de page du site commun à toutes les pages
 */
export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Image className={styles.logo} src="/picto.svg" width={46} height={53} alt="Kasa" />
      <span className={styles.footerContent}>&copy; 2025 Kasa. All rights reserved</span>
    </footer>
  );
};
