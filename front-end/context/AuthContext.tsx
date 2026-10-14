"use client";

import { createContext, useContext, useSyncExternalStore } from "react";

interface AuthContextValue {
  isLoggedIn: boolean;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextValue | null>(null);

// Pas d'événement sur les cookies : la valeur est relue à chaque affichage.
// Next réaffiche le layout quand une Server Action modifie les cookies.
const subscribeToNothing = () => () => {};
const readLoggedInCookie = () => document.cookie.split("; ").includes("kasa-logged-in=1");
const readOnServer = () => false;

/**
 * Provider fournissant le statut connecté (ou pas) de l'utilisateur
 * Le statut est déterminé via la présence (ou absence) du cookie token
 */
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const isLoggedIn = useSyncExternalStore(subscribeToNothing, readLoggedInCookie, readOnServer);

  return <AuthContext.Provider value={{ isLoggedIn }}>{children}</AuthContext.Provider>;
};

/**
 * Donne accès au statut Connecté à n'importe quel composant client
 * @throws si le composant n'est pas placé dans un AuthProvider
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth doit être utilisé dans un AuthProvider");
  return context;
};
