import type { Metadata } from "next";
import { getProperties } from "@/lib/api";
import { FavoritesList } from "@/components/Sections/Grid/FavoritesList/FavoritesList";
import styles from "./favorites.module.scss";

export const metadata: Metadata = {
  title: "Vos favoris",
};

/**
 * Page affichant la liste des favoris
 */
const Favorites = async () => {
  const properties = await getProperties();
  return (
    <article className={styles.favPage}>
      <div className={styles.favTitleWrapper}>
        <h1 className={styles.favTitle}>Vos favoris</h1>
        <p className={styles.favSubtitle}>
          Retrouvez ici tous les logements que vous avez aimés. Prêts à réserver ? Un simple clic et
          votre prochain séjour est en route.
        </p>
      </div>

      <FavoritesList properties={properties} />
    </article>
  );
};

export default Favorites;
