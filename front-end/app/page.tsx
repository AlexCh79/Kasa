import { Metadata } from "next";
import { Hero } from "@/components/Sections/Hero/Hero";
import { GridCards } from "@/components/Sections/Grid/GridCards";
import { HowItWorks } from "@/components/Sections/HowItWorks/HowItWorks";

export const metadata: Metadata = {
  title: "Page d'accueil",
  description: "Page d'accueil de Kasa",
};

export default async function Home() {
  return (
    <>
      <Hero />
      <GridCards />
      <HowItWorks />
    </>
  );
}
