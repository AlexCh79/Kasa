import { HeroCard } from "@/components/UI/Cards/HeroCard/HeroCard";

/**
 * Slogan de la page d'accueil
 */
export const Hero = () => {
  return (
    <HeroCard
      sectionName="Slogan"
      title="Chez vous, partout et ailleurs"
      description="Avec Kasa, vivez des séjours uniques dans des hébergements chaleureux, sélectionnés avec soin par nos hôtes."
      picture="/images/homepage.webp"
    />
  );
};
