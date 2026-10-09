"use client";

import { useState, type KeyboardEvent } from "react";
import Image from "next/image";
import { getNextIndex, getPreviousIndex } from "@/utils/carrousel";
import styles from "./Carrousel.module.scss";

interface CarrouselProps {
  pictures: string[];
  title: string;
}

/**
 * Carrousel des photos d'un logement : grande photo avec flèches (en boucle)
 * et vignettes des photos suivantes, cliquables.
 * Navigable au clavier (boutons et touches ← →). Sans flèches ni vignettes s'il n'y a qu'une photo.
 * @param pictures - URLs des photos du logement
 * @param title - titre du logement, utilisé dans les textes alternatifs
 */
export const Carrousel = ({ pictures, title }: CarrouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = pictures.length;
  const hasSeveralPictures = total > 1;

  // Défilement des photos vers la gauche et la droite
  const showPrevious = () => setCurrentIndex((index) => getPreviousIndex(index, total));
  const showNext = () => setCurrentIndex((index) => getNextIndex(index, total));

  // Navigation gauche et droite pour faire défiler les photos via le clavier
  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (!hasSeveralPictures) return;
    if (event.key === "ArrowLeft") showPrevious();
    if (event.key === "ArrowRight") showNext();
  };

  const thumbnails = Array.from(
    {
      length: Math.min(4, total - 1),
    },
    (_, offset) => (currentIndex + offset + 1) % total,
  );

  return (
    <section
      className={hasSeveralPictures ? styles.carrousel : `${styles.carrousel} ${styles.single}`}
      aria-label={`Photos du logement ${title}`}
      aria-roledescription="carrousel"
      onKeyDown={handleKeyDown}
    >
      <div className={styles.mainPictureContainer}>
        <Image
          key={pictures[currentIndex]}
          src={pictures[currentIndex]}
          fill
          preload={currentIndex === 0}
          sizes="(min-width: 1024px) 303px, 100vw"
          className={styles.mainPicture}
          alt={`Photo ${currentIndex + 1} sur ${total} du logement ${title}`}
        />
        {hasSeveralPictures && (
          <>
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Photo précédente"
              className={`${styles.arrow} ${styles.previous}`}
            >
              <Image src="/icon_left_arrow.svg" alt="" width={16} height={16} />
            </button>
            <button
              type="button"
              onClick={showNext}
              aria-label="Photo suivante"
              className={`${styles.arrow} ${styles.next}`}
            >
              <Image
                src="/icon_left_arrow.svg"
                alt=""
                width={16}
                height={16}
                className={styles.flip}
              />
            </button>
            <p className="sr-only" aria-live="polite">
              Photo {currentIndex + 1} sur {total}
            </p>
          </>
        )}
      </div>
      {thumbnails.length > 0 && (
        <ul className={styles.vignetsRow}>
          {thumbnails.map((pictureIndex) => (
            <li key={pictures[pictureIndex]} className={styles.vignetContainer}>
              <button
                type="button"
                className={styles.thumbnailButton}
                onClick={() => setCurrentIndex(pictureIndex)}
                aria-label={`Affiche la photo ${pictureIndex + 1} sur ${total}`}
              >
                <Image
                  src={pictures[pictureIndex]}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 147px, 25vw"
                  className={styles.picture}
                />
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};
