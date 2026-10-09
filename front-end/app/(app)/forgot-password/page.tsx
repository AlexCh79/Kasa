import styles from "./forgot-password.module.scss";
import { Button } from "@/components/UI/Button/Button";

const ForgotPassword = () => {
  return (
    <div className={styles.cguWrapper}>
      <p role="status" className={styles.cguWorking}>
        Cette page est en cours de construction.
      </p>
      <Button href="/" label="Retour à l'accueil" />
    </div>
  );
};

export default ForgotPassword;
