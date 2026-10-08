import styles from "./Header.module.scss";
import { MobileMenu } from "../MobileMenu/MobileMenu";
import { NavLink } from "../NavLink/NavLink";
import { HeartIcon, MessengerIcon, ProfileIcon } from "@/components/UI/Icons/Icons";
import Image from "next/image";
import Link from "next/link";

/**
 * En-tête de la page du site en version bureau ou mobile/tablette
 */
export const Header = () => {
  return (
    <header className={styles.header}>
      <nav aria-label="Menu principal" className={styles.headerContent}>
        <ul className={styles.headerLeft}>
          <li>
            <NavLink href="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink href="/about">À propos</NavLink>
          </li>
        </ul>
        <Link href="/">
          <Image src="/logo.svg" width={114} height={40} alt="Kasa - Accueil" />
        </Link>
        <div className={styles.headerRight}>
          <NavLink href="/add-property">+ Ajouter un logement</NavLink>
          <ul className={styles.iconZone}>
            <li>
              <Link href="/favorites" aria-label="Mes favoris" className={styles.icon}>
                <HeartIcon />
              </Link>
            </li>
            <li>
              <span className={styles.line} aria-hidden="true"></span>
            </li>{" "}
            <li>
              <Link href="/messenger" aria-label="Ma messagerie" className={styles.icon}>
                <MessengerIcon />
              </Link>
            </li>
            <li>
              <span className={styles.line} aria-hidden="true"></span>
            </li>
            <li>
              <Link href="/login" aria-label="Connexion" className={styles.icon}>
                <ProfileIcon />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <MobileMenu />
    </header>
  );
};
