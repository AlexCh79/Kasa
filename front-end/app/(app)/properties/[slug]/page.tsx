import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProperties, getPropertyBySlug } from "@/lib/api";
import { Button } from "@/components/UI/Button/Button";
import { Carrousel } from "@/components/UI/Carrousel/Carrousel";
import { DetailCard } from "@/components/UI/Cards/DetailCard/DetailCard";
import { HostCard } from "@/components/UI/Cards/HostCard/HostCard";
import styles from "./propertyPage.module.scss";

/**
 * Liste des slugs à générer
 * On prépare les pages de logement à l'avance
 */
export async function generateStaticParams() {
  const properties = await getProperties();
  return properties.map((property) => ({ slug: property.slug }));
}

/**
 * Titre de l'onglet et description de la page en fonction du logement affiché
 */
export async function generateMetadata({
  params,
}: PageProps<"/properties/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const property = await getPropertyBySlug(slug);

  return {
    title: property ? property.title : "Logement introuvable",
    description: property?.description ?? undefined,
  };
}

/**
 * Page d'un logement
 * Affiche la page 404 si logement introuvable par son slug
 */
export default async function PropertyPage({ params }: PageProps<"/properties/[slug]">) {
  const { slug } = await params;
  const property = await getPropertyBySlug(slug);
  if (!property) notFound();

  return (
    <article className={styles.propertyPage}>
      <div className={styles.propertyReturnButton}>
        <Button
          label="Retour aux annonces"
          icon="/icon_left_arrow.svg"
          variant="secondary"
          href="/"
        />
      </div>
      <div className={styles.carrouselContainer}>
        <Carrousel pictures={property.pictures} title={property.title} />
      </div>
      <div className={styles.detailContainer}>
        <DetailCard property={property} />
      </div>
      <div className={styles.hostContainer}>
        <HostCard host={property.host} rating={property.rating_avg} />
      </div>
    </article>
  );
}
