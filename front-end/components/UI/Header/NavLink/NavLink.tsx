"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./NavLink.module.scss";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

/**
 * Lien de navigation qui se met en évidence quand il correspond à la page affichée
 * @param onClick - action facultatif au clic (fermer / ouvrir le menu sur mobile)
 */
export const NavLink = ({ href, children, onClick }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={isActive ? `${styles.link} ${styles.active}` : styles.link}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </Link>
  );
};
