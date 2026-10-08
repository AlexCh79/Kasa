import { Metadata } from "next";
import { Hero } from "@/components/Sections/Hero/Hero";
import { HowItWorks } from "@/components/Sections/HowItWorks/HowItWorks";
import { Suspense } from "react";
import { PropertyList } from "@/components/Sections/Grid/PropertyList/PropertyList";
import { Skeleton } from "@/components/Sections/Grid/Skeleton/Skeleton";

export const metadata: Metadata = {
  title: "Page d'accueil",
  description: "Page d'accueil de Kasa",
};

/**
 * Page d'accueil du site
 * Un skeleton s'affiche durant le chargement de la liste des propriétés
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={<Skeleton />}>
        <PropertyList />
      </Suspense>
      <HowItWorks />
    </>
  );
}
