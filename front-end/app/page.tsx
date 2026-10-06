import { Metadata } from "next";
import { Hero } from "@/components/Sections/Hero/Hero";
import { GridCards } from "@/components/Sections/Grid/GridCards";

export const metadata: Metadata = {
  title: "Page d'accueil",
  description: "Page d'accueil de Kasa",
};

export default async function Home() {
  return (
    <>
      <Hero />
      <GridCards />
    </>
  );
}
