import type { PropertyBase, PropertyDetail } from "@/lib/types";

/**
 * Adresse de l'API stockée dans l'environnement local
 */
const API_URL = process.env.API_URL;

/**
 * Appelle l'API et renvoie la réponse JSON
 * @param path - chemin de la route
 * @param init - Requête envoyée à l'API, facultatif pour laisser fetch gérer la méthode GET par défaut
 * @returns les réponses de l'API
 * @throws si API_URL est absent ou si l'API répond par une erreur
 */
async function fetchApi<T>(path: string, init?: RequestInit): Promise<T> {
  if (!API_URL) throw new Error("L'URL de l'API n'est pas définie dans le fichier .env.local.");
  const response = await fetch(`${API_URL}${path}`, init);
  if (!response.ok) throw new Error(`Erreur API ${response.status} sur ${path}`);
  return response.json() as Promise<T>;
}

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
