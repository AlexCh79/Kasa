"use client";

import { useFavorites } from "@/context/FavoritesContext";
import type { PropertyBase } from "@/types/types";
import { GridCards } from "../GridCards/GridCards";
import { Skeleton } from "../Skeleton/Skeleton";
import { Button } from "@/components/UI/Button/Button";
import styles from "./FavoritesList.module.scss";

interface FavoritesListProps {
  properties: PropertyBase[];
}

/**
 * Affiche les logements favoris parmi tous les logements reçus
 * @param properties - tous les logements, récupérés côté serveur
 */
export const FavoritesList = ({ properties }: FavoritesListProps) => {
  const { favorites, isReady } = useFavorites();

  // Lancement du skeleton avant la lecture du localStorage
  if (!isReady) return <Skeleton />;

  const favoritesProperties = properties.filter((property) => favorites.includes(property.id));

  if (favoritesProperties.length === 0) {
    return (
      <div className={styles.emptyWrapper}>
        <p className={styles.emptyText}>Vous n&apos;avez pas encore de favoris.</p>
        <Button href="/" label="Découvrir les logements" />
      </div>
    );
  }
  return <GridCards properties={favoritesProperties} />;
};
