import styles from "./HeroCard.module.scss";
import Image from "next/image";

interface HeroCardProps {
  sectionName: string;
  title: string;
  description: string;
  picture: string;
}

/**
 * Structure commune aux pages d'accueil et d'à propos pour la première partie de la page
 * @param sectionName - le nom de la section pour le aria-label
 * @param title - le titre de la section à afficher en h1
 * @param description - la description de la section affichée en paragraphe
 * @param picture - la photo à afficher
 */
export const HeroCard = ({ sectionName, title, description, picture }: HeroCardProps) => {
  return (
    <section aria-label={sectionName} className={styles.hero}>
      <div className={styles.titleZone}>
        <h1 className={styles.heroTitle}>{title}</h1>
        <p className={styles.heroSubtitle}>{description}</p>
      </div>
      <div className={styles.pictureZone}>
        <Image
          src={picture}
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
