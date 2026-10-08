import styles from "./Tags.module.scss";

interface TagProps {
  label: string;
}

/**
 * Tag réutilisable pour les équipements et catégories
 * @param label - Titre du tag à afficher
 */
export const Tag = ({ label }: TagProps) => {
  return <span className={styles.tag}>{label}</span>;
};
