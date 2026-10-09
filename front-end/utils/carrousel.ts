// Interactivité du carrousel

/**
 * Index de la photo suivante. Boucle et revient à la première après la dernière
 * @param current - index de la photo affichée
 * @param total - nombre total de photos
 */
export const getNextIndex = (current: number, total: number) => (current + 1) % total;

/**
 * Index de la photo précédente. Boucle sur la dernière avant la première
 * @param current  - index de la photo affichée
 * @param total - nombre total de photos
 */
export const getPreviousIndex = (current: number, total: number) => (current - 1 + total) % total;
