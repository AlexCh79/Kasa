import { PropertyCard } from "@/components/UI/Cards/PropertyCard/PropertyCard";
import styles from "./GridCards.module.scss";
import type { PropertyBase } from "@/types/types";

interface GridCardsProps {
  properties: PropertyBase[];
}

/**
 * La liste des logements sur la page d'accueil
 * @param properties - logements à afficher
 */
export const GridCards = ({ properties }: GridCardsProps) => {
  return (
    <section className={styles.grid} aria-label="Liste des propriétés">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </section>
  );
};
