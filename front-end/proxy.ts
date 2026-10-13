import { NextRequest, NextResponse } from "next/server";

/**
 * Proxy pour rediriger vers la page d'accueil si utlisateur authentifié (pas de retour à la page de login)
 * @param request - Vérification de la présence d'un token dans les cookies
 * @returns page de connexion si non connecté
 */
export default function proxy(request: NextRequest) {
  if (request.cookies.has("token")) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.next();
}

// Le proxy ne s'exécute que pour ces deux adresses
export const config = {
  matcher: ["/login", "/register"],
};
