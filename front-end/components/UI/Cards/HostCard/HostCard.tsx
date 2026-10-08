import { PropertyHost } from "@/lib/types";
import Image from "next/image";
import styles from "./HostCard.module.scss";
import { Button } from "../../Button/Button";

interface HostCardProps {
  host: PropertyHost;
  rating: number;
}

/**
 * Carte visuelle indiquant le profil de l'hôte
 * @param host - Hôte du logement
 * @param rating - Note moyenne de l'hôte
 */
export const HostCard = ({ host, rating }: HostCardProps) => {
  const ratingRound = Math.round(rating);

  return (
    <div className={styles.hostCard}>
      <h2 className={styles.hostTitle}>Votre hôte</h2>
      <div className={styles.hostContent}>
        <div className={styles.hostPictureContainer}>
          <Image
            src={host.picture ? host.picture : "/images/default_profile.svg"}
            alt={`Photo de profil de ${host.name}`}
            width={82}
            height={82}
            className={styles.hostPicture}
          />
        </div>
        <span className={styles.hostName}>{host.name}</span>
        <div className={styles.ratingWrapper}>
          <Image
            src="/icon_star.svg"
            width={16}
            height={23}
            className={styles.iconRating}
            alt="Note de l'hôte"
          />
          <span className={styles.hostRating}>
            {ratingRound}
            <span className="sr-only"> sur 5</span>
          </span>
        </div>
      </div>
      <div className={styles.buttonZone}>
        <Button label="Contacter l'hôte" href="/messenger" />
      </div>
    </div>
  );
};
