import { fetchApi } from "./api";
import type { PropertyDetail, PropertyBase } from "@/types/types";

/**
 * Renvoie la liste de tous les logements.
 */
export function getProperties() {
  return fetchApi<PropertyBase[]>("/api/properties");
}

/**
 * Renvoie le détail d'un logement à partir de son id.
 */
export function getPropertyById(id: string) {
  return fetchApi<PropertyDetail>(`/api/properties/${encodeURIComponent(id)}`);
}

/**
 * Renvoie le détail d'un logement à partir de son slug
 * L'API ne cherche que par id
 */
export async function getPropertyBySlug(slug: string): Promise<PropertyDetail | null> {
  const properties = await getProperties();
  const summary = properties.find((p) => p.slug === slug);
  return summary ? getPropertyById(summary.id) : null;
}
