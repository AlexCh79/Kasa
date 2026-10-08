"use client";
import { useState, useId } from "react";
import { ChevronIcon } from "../Icons/Icons";
import styles from "./Collapse.module.scss";

interface CollapseProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

/**
 * Section repliable : un titre et un chevron (cliquables) pour ouvrir et fermer le contenu
 * @param title - titre de la section
 * @param children - contenu affiché une fois la section ouverte
 * @param defaultOpen - section ouvert au chargement (true par défaut)
 */
export const Collapse = ({ title, children, defaultOpen = true }: CollapseProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentId = useId();

  return (
    <div>
      <h2 className={styles.heading}>
        <button
          type="button"
          className={styles.toggle}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls={contentId}
        >
          {title}
          <ChevronIcon className={styles.chevron} />
        </button>
      </h2>
      <div id={contentId} className={isOpen ? `${styles.content} ${styles.open}` : styles.content}>
        <div className={styles.inner}>{children}</div>
      </div>
    </div>
  );
};
