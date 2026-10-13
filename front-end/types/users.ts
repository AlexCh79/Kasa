// Rôles des utilisateurs prédéfinis
export type UserRole = "owner" | "client" | "admin";

/**
 * Types utilisateurs tels que reçus ou envoyés via API
 */
export interface AuthUser {
  id: number;
  name: string;
  email: string; // Nullable dans la doc API pour AuthUser mais nécessaire pour se connecter, non facultatif
  picture: string | null;
  role: UserRole;
}

/**
 * Type utilisateur connecté avec un token
 */
export interface AuthResponse {
  token: string;
  user: AuthUser;
}

/**
 * Type renvoyé par l'API vers les formulaires (via ServerAction)
 */
export interface AuthFormState {
  error: string | null;
  email?: string;
}

/**
 * Type de données stockées dans le jeton JWT
 * * email est toujours présent : un compte ne peut être créé ni connecté sans email
 * (l'API prévoit null par sécurité, mais seuls les hôtes de démo, sans mot de passe, n'en ont pas).
 */
export interface TokenPayload {
  id: string;
  role: string;
  name: string;
  email: string;
  exp: number;
}
