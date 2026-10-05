/**
 * Hôte tel que renvoyé par l'API avec PropertyHost
 */
export interface PropertyHost {
  id: number;
  name: string;
  picture: string | null;
}

/**
 * Base d'une propriété telle que renvoyé par l'API
 */
export interface PropertyBase {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  cover: string | null;
  location: string | null;
  price_per_night: number;
  rating_avg: number;
  ratings_count: number;
  host: PropertyHost;
}

/**
 * Détail d'une propriété incluant les données de Base tel que renvoyé par l'API
 */
export interface PropertyDetail extends PropertyBase {
  pictures: string[];
  equipments: string[];
  tags: string[];
}
