"use client";

import { createContext, useContext, useSyncExternalStore } from "react";
import {
  getFavorites,
  getServerFavorites,
  saveFavorites,
  subscribeToFavorites,
} from "@/lib/favorites";

interface FavoritesContextValue {
  favorites: string[];
  isReady: boolean;
  isFavorite: (id: string) => boolean;
  toggleFavorite: (id: string) => void;
}

interface FavoritesProviderProps {
  children: React.ReactNode;
}

const FavoritesContext = createContext<FavoritesContextValue | null>(null);
const subscribeToNothing = () => () => {};

/**
 * Provider fournissant la liste des favoris
 * Les favoris sont lus et stockés dans le localStorage
 */
export const FavoritesProvider = ({ children }: FavoritesProviderProps) => {
  const favorites = useSyncExternalStore(subscribeToFavorites, getFavorites, getServerFavorites);
  const isReady = useSyncExternalStore(
    subscribeToNothing,
    () => true,
    () => false,
  );

  const isFavorite = (id: string) => favorites.includes(id);

  const toggleFavorite = (id: string) => {
    const nextFavorites = isFavorite(id)
      ? favorites.filter((favoriteId) => favoriteId !== id)
      : [...favorites, id];
    saveFavorites(nextFavorites);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, isReady, isFavorite, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

/**
 * Donne accès aux favoris depuis n'importe quel composant client
 * @throws si le composant n'est pas placé dans un FavoritesProvider
 */
export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) throw new Error("useFavorites doit être utilisé dans un FavoritesProvider");
  return context;
};
