import { Metadata } from "next";
import { Hero } from "@/components/Sections/Hero/Hero";

export const metadata: Metadata = {
  title: "Page d'accueil",
  description: "Page d'accueil de Kasa",
};

export default async function Home() {
  return (
    <>
      <Hero />
    </>
  );
}
