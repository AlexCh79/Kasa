import { getProperties } from "@/lib/api";
import { GridCards } from "../GridCards/GridCards";

/**
 * Récupère les logements depuis l'API pour les afficher sur la grille
 * Composant asynchrone pour gérer le skeleton pendant le chargement de la grille
 */
export const PropertyList = async () => {
  const properties = await getProperties();
  return <GridCards properties={properties} />;
};
