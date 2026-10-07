import { Metadata } from "next";
import { Hero } from "@/components/Sections/Hero/Hero";
import { GridCards } from "@/components/Sections/Grid/GridCards";
import { HowItWorks } from "@/components/Sections/HowItWorks/HowItWorks";
import { getProperties } from "@/lib/api";

export const metadata: Metadata = {
  title: "Page d'accueil",
  description: "Page d'accueil de Kasa",
};

/**
 * Page d'accueil du site
 */
export default async function Home() {
  const properties = await getProperties();

  return (
    <>
      <Hero />
      <GridCards properties={properties} />
      <HowItWorks />
    </>
  );
}
