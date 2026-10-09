/**
 * Stockage des favoris dans le localStorage (via l'id des logements)
 * À utiliser avec useSyncExternalStore pour lecture et enregistrement
 */
const STORAGE_KEY = "kasa-favorites";
const EMPTY_FAVORITES: string[] = [];
const listeners = new Set<() => void>();

// Récupération du cache, à renvoyer identique si pas de changement depuis la dernière lecture
let cachedRaw: string | null = null;
let cachedFavorites: string[] = EMPTY_FAVORITES;

/**
 * Récupération de l'id du logement passé pour le stocker sous forme de texte
 * @returns liste des favoris, vide si aucune valeur ou valeur invalide
 */
const parseFavorites = (raw: string | null): string[] => {
  if (!raw) return EMPTY_FAVORITES;
  try {
    const value: unknown = JSON.parse(raw);
    return Array.isArray(value)
      ? value.filter((id): id is string => typeof id === "string")
      : EMPTY_FAVORITES;
  } catch {
    return EMPTY_FAVORITES;
  }
};

/**
 * Lit les favoris enregistrés dans le localStorage
 */
export const getFavorites = (): string[] => {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw !== cachedRaw) {
    cachedRaw = raw;
    cachedFavorites = parseFavorites(raw);
  }
  return cachedFavorites;
};

// tableau vide utilisé pendant le rendu serveur
export const getServerFavorites = (): string[] => EMPTY_FAVORITES;

/**
 * Ajout d'un favoris (abonnement)
 * @returns la fonction de désabonnement
 */
export const subscribeToFavorites = (listener: () => void) => {
  listeners.add(listener);
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
};

/**
 * Enregistrement de la liste des favoris dans le localStorage
 */
export const saveFavorites = (favorites: string[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  listeners.forEach((listener) => listener());
};
