// Rôles des utilisateurs prédéfinis
export const USER_ROLE = ["owner", "client", "admin"];

/**
 * Types utilisateurs tels que reçus ou envoyés via API
 */
export interface AuthUser {
  id: number;
  name: string | null;
  password?: string;
  email: string; // Nullable dans la doc API pour AuthUser mais nécessaire pour se connecter, non facultatif
  picture: string | null;
  role: string[];
}

/**
 * Type utilisateur connecté avec un token
 */
export interface AuthResponse extends AuthUser {
  token: string;
}
