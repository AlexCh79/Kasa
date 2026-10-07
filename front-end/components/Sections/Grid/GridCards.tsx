import { PropertyCards } from "@/components/UI/Cards/PropertyCards/PropertyCards";
import styles from "./GridCard.module.scss";

export const GridCards = () => {
  return (
    <section className={styles.grid} aria-label="Liste des propriétés">
      <PropertyCards />
      <PropertyCards />
      <PropertyCards />
      <PropertyCards />
    </section>
  );
};
