"use client";

import styles from "./MobileMenu.module.scss";
import { NavLink } from "../NavLink/NavLink";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "../../Button/Button";
import Link from "next/link";

/**
 * Menu mobile s'ouvre en plein écran
 * Se ferme au clic sur un lien, sur la croix ou avec la touche Echap
 */
export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  // Si menu ouvert, écoute pour fermer le menu sur la touche Echap
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <div className={styles.mobile}>
      <div className={styles.bar}>
        <Link href="/" onClick={close}>
          <Image src="/picto.svg" alt="Kasa - Accueil" width={46} height={53} />
        </Link>
        <button
          type="button"
          className={styles.toggleButton}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          <Image
            src={isOpen ? "/icon_cross.svg" : "/icon_menu.svg"}
            width={isOpen ? 26 : 29}
            height={isOpen ? 26 : 20}
            alt=""
          />
        </button>
      </div>

      <nav
        id="mobile-menu"
        className={isOpen ? `${styles.menu} ${styles.open}` : styles.menu}
        aria-label="Menu principal"
      >
        <ul className={styles.list}>
          <li>
            <NavLink href="/" onClick={close}>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink href="/about" onClick={close}>
              À propos
            </NavLink>
          </li>
          <li>
            <NavLink href="/messenger" onClick={close}>
              Messagerie
            </NavLink>
          </li>
          <li>
            <NavLink href="/favorites" onClick={close}>
              Favoris
            </NavLink>
          </li>
          <li>
            <NavLink href="/login" onClick={close}>
              Se connecter
            </NavLink>
          </li>
          <li>
            <Button
              href="/add-property"
              type="button"
              label="Ajouter un logement"
              onClick={close}
            />
          </li>
        </ul>
      </nav>
    </div>
  );
};
