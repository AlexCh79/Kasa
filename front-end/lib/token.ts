import type { TokenPayload } from "@/types/users";

/**
 * Lecture du jeton pour récupérer les données utilisateurs correspondantes
 * Warning: c'est l'API qui vérifie le jeton, la fonction ici ne fait que le lire
 */
export function getTokenPayload(token: string): TokenPayload | null {
  try {
    const payload = token.split(".")[1];
    return JSON.parse(Buffer.from(payload, "base64url").toString());
  } catch {
    return null;
  }
}
