import styles from "./DetailCard.module.scss";
import type { PropertyDetail } from "@/lib/types";
import Image from "next/image";
import { Tag } from "../../Tags/Tags";

interface DetailCardProps {
  property: PropertyDetail;
}

/**
 * Détail du logement
 * @param property - Logement dont on doit afficher le détail
 */
export const DetailCard = ({ property }: DetailCardProps) => {
  return (
    <section className={styles.DetailSection}>
      <div className={styles.detailIntroducing}>
        <div className={styles.detailTitleContainer}>
          <h1 className={styles.detailTitle}>{property.title}</h1>
          <div className={styles.detailLocationContainer}>
            <Image
              className={styles.detailLocationIcon}
              src="/icon_map.svg"
              width={10}
              height={13}
              alt=""
            />
            {property.location && (
              <span className={styles.detailLocation}>{property.location}</span>
            )}
          </div>
        </div>
        {property.description && <p className={styles.detailDescription}>{property.description}</p>}
      </div>
      <div className={styles.detailGridContainer}>
        <h2 className={styles.detailGridTitle}>Équipements</h2>
        <ul className={styles.detailGrid}>
          {property.equipments.map((equipment) => (
            <li key={equipment} className={styles.detailTags}>
              <Tag label={equipment} />
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.detailGridContainer}>
        <h2 className={styles.detailGridTitle}>Catégorie</h2>

        <ul className={styles.detailGrid}>
          {property.tags.map((category) => (
            <li key={category}>
              <Tag label={category} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
