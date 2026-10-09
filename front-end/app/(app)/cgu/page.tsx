import styles from "./cgu.module.scss";
import { Button } from "@/components/UI/Button/Button";

const CGU = () => {
  return (
    <div className={styles.cguWrapper}>
      <p role="status" className={styles.cguWorking}>
        Les CGU sont en cours de rédaction, attendez encore un peu pour avoir de la lecture.
      </p>
      <Button href="/" label="Retour à l'accueil" />
    </div>
  );
};

export default CGU;
