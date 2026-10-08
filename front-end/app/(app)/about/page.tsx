import styles from "./about.module.scss";
import Image from "next/image";
import type { Metadata } from "next";
import { HeroCard } from "@/components/UI/Cards/HeroCard/HeroCard";

export const metadata: Metadata = {
  title: "À propos",
};

/**
 * Page à propos présentant le site et Kasa
 */
const About = () => {
  return (
    <div className={styles.aboutPage}>
      <HeroCard
        sectionName="À propos de Kasa"
        title="À propos"
        description="Chez Kasa, nous croyons que chaque voyage mérite un lieu unique où se sentir bien. Depuis notre création, nous mettons en relation des voyageurs en quête d’authenticité avec des hôtes passionnés qui aiment partager leur région et leurs bonnes adresses."
        picture="/images/about_cover.webp"
      />
      <section className={styles.aboutMissionSection}>
        <div className={styles.missionContent}>
          <h2 className={styles.missionTitle}>Notre mission est simple :</h2>
          <ol className={styles.missionList}>
            <li className={styles.missionItem}>
              Offrir une plateforme fiable et simple d&apos;utilisation
            </li>
            <li className={styles.missionItem}>Proposer des hébergements variés et de qualité </li>
            <li className={styles.missionItem}>
              Favoriser des échanges humains et chaleureux entre hôtes et voyageurs
            </li>
          </ol>
        </div>
        <div className={styles.aboutPictureContainer}>
          <Image
            src="/images/about_mission.webp"
            alt="Un chalet en bois aux grandes fenêtres allumées"
            fill
            sizes="(min-width: 1024px) 494px, 100vw"
            className={styles.aboutPicture}
          />
        </div>
        <p className={styles.missionSlogan}>
          Que vous cherchiez un appartement cosy en centre-ville, une maison en bord de mer ou un
          chalet à la montagne, Kasa vous accompagne pour que chaque séjour devienne un souvenir
          inoubliable.
        </p>
      </section>
    </div>
  );
};

export default About;
