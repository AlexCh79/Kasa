import { fetchApi } from "./api";
import type { AuthUser, AuthResponse } from "@/app/types/users";
import { setCookie } from "./cookies";

/**
 * Connexion de l'utilisateur
 * Envoi de l'email et du mot de passe vers API
 * @param email - email de l'utilisateur saisi
 * @param password - mot de passe de l'utilisateur saisi
 * @returns AuthResponse - renvoie un token si utilisateur authentifié, enregistrement du token dans le cookie
 */
export async function login(email: string, password: string) {
  const body = await fetchApi("/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });

  setCookie("token", body.data.token, 7);
}
