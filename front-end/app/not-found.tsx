import styles from "./notFound.module.scss";
import { Button } from "@/components/UI/Button/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page introuvable",
};

const NotFound = () => {
  return (
    <div className={styles.errorPage}>
      <div className={styles.errorContent}>
        <h1 className={styles.errorTitle}>
          404<span className="sr-only">: page introuvable</span>
        </h1>
        <p className={styles.errorSubtitle}>
          Il semble que la page que vous cherchez ait pris des vacances… ou n’ait jamais existé.
        </p>
      </div>
      <div className={styles.errorActions}>
        <Button href="/" label="Retour à l'accueil" />
      </div>
    </div>
  );
};

export default NotFound;
