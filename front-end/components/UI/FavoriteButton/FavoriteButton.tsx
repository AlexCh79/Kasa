"use client";
import { useFavorites } from "@/context/FavoritesContext";
import { HeartIcon } from "../Icons/Icons";
import styles from "./FavoriteButton.module.scss";

interface FavoriteButtonProps {
  propertyId: string;
  propertyTitle: string;
}

/**
 * Bouton d'ajout ou de retrait d'un logement des favoris
 * @param propertyId - id du logement
 * @param propertyTitle - nom du logement
 */
export const FavoriteButton = ({ propertyId, propertyTitle }: FavoriteButtonProps) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const isActive = isFavorite(propertyId);

  return (
    <button
      type="button"
      className={isActive ? `${styles.button} ${styles.active}` : styles.button}
      onClick={() => toggleFavorite(propertyId)}
      aria-pressed={isActive}
      aria-label={`Ajouter ${propertyTitle} aux favoris`}
    >
      <HeartIcon filled={isActive} />
    </button>
  );
};
