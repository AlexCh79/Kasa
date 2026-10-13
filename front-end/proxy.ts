import { type NextRequest, NextResponse } from "next/server";

// Liste des pages protégées
const PROTECTED_ROUTES = ["/profile", "/messenger", "/add-property"];

// Liste des pages invitées
const GUEST_ROUTES = ["/login", "/register"];

/**
 * Vrai si le chemin correspond à l'une des routes, ou à l'une de ses sous-pages.
 * @param pathname  - chemin de la page demandée
 * @param routes  - routes à vérifier par le proxy
 * @returns vrai si le chemin correspond à une route à vérifier
 */
const matchesRoute = (pathname: string, routes: string[]): boolean => {
  return routes.some((route) => pathname === route || pathname.startsWith(`${route}/`));
};

/**
 * Proxy pour rediriger l'utilisateur selon qu'il soit connecté ou non
 * @param request - Vérification de la présence d'un token dans les cookies
 * @returns page demandée selon le statut de connexion sinon redirection
 */
export default function proxy(request: NextRequest) {
  const isLoggedIn = request.cookies.has("token");
  const { pathname } = request.nextUrl;

  // Page réservée aux utilisateurs connectés, on redirige vers la page de connexion
  if (!isLoggedIn && matchesRoute(pathname, PROTECTED_ROUTES)) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Pages inutiles si utilisateur connecté, redirection vers la page d'accueil
  if (isLoggedIn && matchesRoute(pathname, GUEST_ROUTES)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

// Exécution du proxy sur toutes les pages, sauf les fichiers techniques de Next et les fichiers statiques
export const config = {
  matcher: ["/((?!_next/static|_next/image|images|favicon.ico|icon.svg|.*\\.svg$).*)"],
};
