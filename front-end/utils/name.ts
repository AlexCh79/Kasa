/**
 * Fonction pour coller le prénom et le nom utilisateur en un seul mot
 * L'interface demande deux données, l'API n'en prend qu'une
 * @param firstName - prénom de l'utilisateur
 * @param lastName = Nom de l'utilisateur
 * @return le nom complet de l'utilisateur en un seul champ
 */
export function joinName(firstName: string, lastName: string): string {
  const name = firstName.trim() + " " + lastName.trim();
  return name;
}

export function splitName(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  const [firstName = "", ...rest] = parts;
  return { firstName, lastName: rest.join(" ") };
}
