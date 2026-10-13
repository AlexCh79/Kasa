import { NextRequest, NextResponse } from "next/server";

// Liste des pages protégées
const PROTECTED_ROUTES = ["/profile", "/messenger", "/add-property"];

// Liste des page invité
const GUEST_ROUTES = ["/login", "/register"];

// Vrai si le chemin correspond à l'une des routes, ou à l'une de ses sous-pages.
const matchesRoute = (pathname: string, routes: string[]) => {
  routes.some((route) => pathname === route || pathname.startsWith(`${route}/`));
};

/**
 * Proxy pour rediriger l'utilisateur selon qu'il soit connecté ou non
 * @param request - Vérification de la présence d'un token dans les cookies
 * @returns page de connexion si non connecté
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
