import Image from "next/image";
import styles from "./Carrousel.module.scss";

interface CarrouselProps {
  pictures: string[];
  title: string;
}

/**
 * Galerie de photos du logement (1 photo principale, et 4 vignettes)
 * @param pictures - URL des photos du logement
 * @param title - Nom du logement
 */
export const Carrousel = ({ pictures, title }: CarrouselProps) => {
  const [mainPicture, ...otherPictures] = pictures;
  const thumbnails = otherPictures.slice(0, 4);

  return (
    <section className={styles.carrousel} aria-label={`Photos du logement ${title}`}>
      <div className={styles.mainPictureContainer}>
        <Image
          src={mainPicture}
          fill
          preload
          sizes="(min-width: 1024px) 303px, 100vw"
          className={styles.mainPicture}
          alt={`Photo principale du logement ${title}`}
        />
      </div>
      {thumbnails.length > 0 && (
        <ul className={styles.vignetsRow}>
          {thumbnails.map((picture, index) => (
            <li key={picture} className={styles.vignetContainer}>
              <Image
                src={picture}
                alt={`Photo ${index + 2} du logement ${title}`}
                fill
                sizes="(min-width: 1024px) 147px, 25vw"
                className={styles.picture}
              />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};
