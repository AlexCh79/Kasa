import styles from "./PropertyCards.module.scss";
import { HeartIcon } from "../../Icons/Icons";
import Image from "next/image";

export const PropertyCards = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardPictureZone}>
        <div className={styles.cardFavBtn}>
          <HeartIcon />
        </div>
        <Image
          src="/images/homepage.jpg"
          sizes="(min-width: 1024px) 564px, 100vw"
          fill
          alt=""
          className={styles.cardPicture}
        />
      </div>
      <div className={styles.cardDetailZone}>
        <div className={styles.cardDetailTitleZone}>
          <h4 className={styles.cardTitle}>Nom Propriété</h4>
          <p className={styles.cartSubtitle}>Localisation - du lieu</p>
        </div>
        <div className={styles.cardPriceZone}>
          <span className={styles.cardPrice}>100€</span>
          <span className={styles.cardUnit}>par nuit</span>
        </div>
      </div>
    </div>
  );
};
