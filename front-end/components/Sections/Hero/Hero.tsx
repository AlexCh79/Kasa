import styles from "./Hero.module.scss";
import Image from "next/image";

/**
 * Slogan de la page d'accueil
 */
export const Hero = () => {
  return (
    <section aria-label="Slogan" className={styles.hero}>
      <div className={styles.titleZone}>
        <h1 className={styles.heroTitle}>Chez vous, partout et ailleurs</h1>
        <p className={styles.heroSubtitle}>
          Avec Kasa, vivez des séjours uniques dans des hébergements chaleureux, sélectionnés avec
          soin par nos hôtes.
        </p>
      </div>
      <div className={styles.pictureZone}>
        <Image
          src="/images/homepage.jpg"
          sizes="(min-width: 1024px) 1115px, 100vw"
          preload
          fill
          alt=""
          className={styles.heroPicture}
        />
      </div>
    </section>
  );
};
