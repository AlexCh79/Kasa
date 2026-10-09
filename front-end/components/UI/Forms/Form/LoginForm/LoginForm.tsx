"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../Form.module.scss";
import { Button } from "@/components/UI/Button/Button";
import Link from "next/link";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    try {
      await login(email, password);
      router.push("/");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Les identifiants sont erronés, veuillez vérifier votre saisie.",
      );
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formTitleWrapper}>
          <h1 className={styles.formTitle}>Heureux de vous revoir</h1>
          <p className={styles.formSubtitle}>
            Connectez-vous pour retrouver vos réservations, vos annonces et tout ce qui rend vos
            séjours uniques.
          </p>
        </div>

        <div className={styles.formInputWrapper}>
          <label htmlFor="email" className={styles.formLabel}>
            Adresse email
          </label>
          <input
            id="email"
            type="email"
            required
            name="email"
            value={email}
            className={styles.formInput}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className={styles.formInputWrapper}>
          <label htmlFor="password" className={styles.formLabel}>
            Mot de passe
          </label>
          <input
            id="password"
            type="password"
            className={styles.formInput}
            required
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className={styles.formActionsWrapper}>
          <Button label="Se connecter" />
          <div className={styles.formLinkWrapper}>
            <Link href="/" className={styles.formLink}>
              Mot de passe oublié ?
            </Link>
            <Link href="/register" className={styles.formLink}>
              Pas encore de compte ? <strong>Inscrivez-vous</strong>
            </Link>
          </div>
        </div>
        {error && (
          <span role="alert" className={styles.error}>
            {error}
          </span>
        )}
      </form>
    </>
  );
};
