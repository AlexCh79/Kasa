import gridStyles from "../GridCards/GridCards.module.scss";
import styles from "./Skeleton.module.scss";

/**
 * Squelette de la grille des logements affiché durant le chargement de ceux-ci.
 */
export const Skeleton = () => {
  return (
    <div className={gridStyles.grid} role="status" aria-label="Chargement des logements">
      {Array.from({ length: 3 }, (_, index) => (
        <div key={index} className={styles.card} aria-hidden="true">
          <div className={`${styles.block} ${styles.picture}`} />
          <div className={styles.details}>
            <div className={`${styles.block} ${styles.title}`} />
            <div className={`${styles.block} ${styles.location}`} />
            <div className={`${styles.block} ${styles.price}`} />
          </div>
        </div>
      ))}
    </div>
  );
};
