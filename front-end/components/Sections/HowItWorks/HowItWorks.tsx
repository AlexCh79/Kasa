import styles from "./HowItWorks.module.scss";

/**
 * Explication du fonctionnement du site sur la page d'accueil
 */
export const HowItWorks = () => {
  return (
    <section className={styles.howSection}>
      <div className={styles.howTitleZone}>
        <h2 className={styles.howTitle}>Comment ça marche ?</h2>
        <p className={styles.howSubtitle}>
          Que vous partiez pour un week-end improvisé, des vacances en famille ou un voyage
          professionnel,
          <br /> Kasa vous aide à trouver un lieu qui vous ressemble.
        </p>
      </div>
      <div className={styles.howCardContainer}>
        <div className={styles.howCard}>
          <h3 className={styles.howCardTitle}>Recherchez</h3>
          <p className={styles.howCardSubtitle}>
            Entrez votre destination, vos dates et laissez Kasa faire le reste
          </p>
        </div>
        <div className={styles.howCard}>
          <h3 className={styles.howCardTitle}>Réservez</h3>
          <p className={styles.howCardSubtitle}>
            Profitez d’une plateforme sécurisée et de profils d’hôtes vérifiés.
          </p>
        </div>
        <div className={styles.howCard}>
          <h3 className={styles.howCardTitle}>Vivez l’expérience</h3>
          <p className={styles.howCardSubtitle}>
            Installez-vous, profitez de votre séjour, et sentez-vous chez vous, partout.
          </p>
        </div>
      </div>
    </section>
  );
};
