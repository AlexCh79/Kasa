"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { joinName } from "@/utils/name";
import type { AuthFormState, AuthResponse } from "@/types/users";

const API_URL = process.env.API_URL;
const SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 jours, comme le token de l'API

/**
 * Envoie une requête d'authentification à l'API
 * @param path - Chemin vers lequel pointe la requête
 * @param data - Paramètres de la requête
 * @returns la réponse, ou null si l'API est injoignable
 */
async function postToAuthApi(path: string, data: Record<string, string>) {
  try {
    return await fetch(`${API_URL}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  } catch {
    return null;
  }
}

/**
 * Ouvre la session utilisateur, enregitsre un cookie HttpOnly
 * @param token - Token renvoyé par l'API à la connexion et stocké en cookie
 */
async function openSession(token: string) {
  const cookieStore = await cookies();
  const options = {
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
    maxAge: SESSION_MAX_AGE,
  };
  cookieStore.set("token", token, { ...options, httpOnly: true });
  cookieStore.set("kasa-logged-in", "1", options);
}

/**
 * Connexion utilisateur : vérifie les idenfiants auprès de l'API et ouvre la session.
 * @param formData - données utilisateur renseigné dans le formulaire
 * @returns un message d'erreur à afficher, sinon redirige vers l'accueil
 */
export async function loginAction(
  _previousState: AuthFormState,
  formData: FormData,
): Promise<AuthFormState> {
  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");
  const response = await postToAuthApi("/auth/login", { email, password });

  // Traduction française des messages d'erreur possibles selon doc API
  if (!response) return { error: "Le service est indisponible, veuillez réessayer.", email };
  if (response.status === 400 || response.status === 401) {
    return { error: "Email ou mot de passe incorrect.", email };
  }
  if (!response.ok) return { error: "Une erreur est survenue, veuillez réessayer.", email };

  // Récupération du token et ouverture de la session correspondante
  const { token } = (await response.json()) as AuthResponse;
  await openSession(token);

  // Redirection vers la page d'accueil une fois la connexion ok
  redirect("/");
}

/**
 * Inscription d'un nouvel utilisateur
 * Création du compte dans l'API et connexion du nouvel utilisateur
 * @param formData - données saisies par l'utilisateur dans le formulaire d'inscription
 * @returns un message d'erreur à afficher ou redirection vers la page d'accueil
 */
export async function registerAction(
  _previousState: AuthFormState,
  formData: FormData,
): Promise<AuthFormState> {
  const firstName = String(formData.get("firstName") ?? "");
  const lastName = String(formData.get("lastName") ?? "");
  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");

  // Vérifie que la case des CGU est bien cochée par l'utilisateur
  if (formData.get("acceptCGU") !== "on") {
    return {
      error: "Vous devez accepter les conditions générales d'utilisations pour vous inscrire.",
      email,
    };
  }

  // Envoi des données à créer vers l'API
  const response = await postToAuthApi("/auth/register", {
    name: joinName(firstName, lastName),
    email,
    password,
  });

  // Traductions françaises des messages d'erreur possibles selon la doc API
  if (!response) return { error: "Le service est indisponible, veuillez réessayer.", email };
  if (response.status === 409) return { error: "Un compte existe déjà avec cet email.", email };
  if (response.status === 400) {
    return {
      error: "Le mot de passe doit contenir au moins 6 caractères.",
      email,
    };
  }
  if (!response.ok) return { error: "Une erreur est survenue, veuillez réessayer.", email };

  // Récupération du token et ouverture de la session correspondante
  const { token } = (await response.json()) as AuthResponse;
  await openSession(token);

  // Redirection vers la page d'accueil une fois la connexion ok
  redirect("/");
}

/**
 * Déconnexion utilisateur: suppression des cookies et retour à l'accueil
 */
export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete("token");
  cookieStore.delete("kasa-logged-in");
  redirect("/");
}
