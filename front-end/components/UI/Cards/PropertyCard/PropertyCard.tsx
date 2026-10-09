import styles from "./PropertyCard.module.scss";
import Image from "next/image";
import { PropertyBase } from "@/app/types/properties";
import Link from "next/link";
import { FavoriteButton } from "../../FavoriteButton/FavoriteButton";

interface PropertyCardProps {
  property: PropertyBase;
}

/**
 * Carte d'un logement
 * @param property - propriété à afficher
 */
export const PropertyCard = ({ property }: PropertyCardProps) => {
  const { id, slug, title, cover, location, price_per_night } = property;

  return (
    <div className={styles.card}>
      <div className={styles.cardPictureZone}>
        {cover && (
          <Image
            src={cover}
            sizes="(min-width: 1024px) 355px, (min-width: 768px) 50vw,100vw"
            fill
            alt={`Photo du logement ${title}`}
            className={styles.cardPicture}
          />
        )}
      </div>
      <div className={styles.cardDetailZone}>
        <div className={styles.cardDetailTitleZone}>
          <h2 className={styles.cardTitle}>
            <Link href={`/properties/${slug}`} className={styles.link}>
              {title}
            </Link>
          </h2>
          {location && <p className={styles.cartSubtitle}>{location}</p>}
        </div>
        <div className={styles.cardPriceZone}>
          <span className={styles.cardPrice}>{price_per_night}€</span>
          <span className={styles.cardUnit}>par nuit</span>
        </div>
      </div>
      <FavoriteButton propertyId={id} propertyTitle={title} />
    </div>
  );
};
