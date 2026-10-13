"use client";

import { logoutAction } from "@/lib/authUser";
import { useAuth } from "@/context/AuthContext";
import { Button } from "../../Button/Button";

interface LogoutButtonProps {
  onLogout?: () => void;
}

/**
 * Bouton de déconnexion utilisateur
 * Ne s'affiche que si l'utilisateur est connecté
 * @param onLogout - action facultative avant la déconnexion (fermer le menu mobile)
 */
export const LogoutButton = ({ onLogout }: LogoutButtonProps) => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) return null;

  return (
    <form action={logoutAction} onSubmit={onLogout}>
      <Button
        type="submit"
        variant="secondary"
        icon="/icon_logout.svg"
        iconWidth={16}
        iconHeight={16}
        label="Déconnexion"
      />
    </form>
  );
};
