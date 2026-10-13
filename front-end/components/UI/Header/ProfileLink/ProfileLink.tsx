"use client";

import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { ProfileIcon } from "../../Icons/Icons";
import { NavLink } from "../NavLink/NavLink";

interface ProfileLinkProps {
  variant: "icon" | "text";
  className?: string;
  onClick?: () => void;
}

/**
 * Lien vers le profil de l'utilisateur si connecté sinon page de connexion
 * @param variant - "icon" pour la version desktop, "text" pour la version mobile (vision du menu)
 * @param className - classe de style transmise par le parent
 * @param onClick - action facultative au clic (fermer le menu mobile)
 */
export const ProfileLink = ({ variant, className, onClick }: ProfileLinkProps) => {
  const { isLoggedIn } = useAuth();

  const href = isLoggedIn ? "/profile" : "/login";
  const label = isLoggedIn ? "Mon profil" : "Se connecter";

  if (variant === "icon") {
    return (
      <Link href={href} className={className} onClick={onClick} aria-label={label}>
        <ProfileIcon />
      </Link>
    );
  }

  return (
    <NavLink href={href} onClick={onClick}>
      {label}
    </NavLink>
  );
};
