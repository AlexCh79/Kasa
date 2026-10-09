"use client";
import { useState } from "react";
import Link from "next/link";
import { loginAction } from "@/lib/authUser";
import { Button } from "@/components/UI/Button/Button";
import styles from "../Form.module.scss";
/**
 *  Formulaire de connexion : envoie les identifiant à la Server Action
 * Affiche une erreur ou renvoie vers la page d'accueil si connexion réussie
 */

export const LoginForm = () => {
  const [isPending, setIsPending] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>("");

  const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsPending(true);
    const result = await loginAction({ error: null }, new FormData(event.currentTarget));
    setError(result?.error ?? null);
    setIsPending(false);
  };

  return (
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
          autoComplete="email"
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
          autoComplete="current-password"
          className={styles.formInput}
          required
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className={styles.formActionsWrapper}>
        <Button
          type="submit"
          label={isPending ? "Connexion..." : "Se connecter"}
          disabled={isPending}
        />
        <div className={styles.formLinkWrapper}>
          <Link href="/forgot-password" className={styles.formLink}>
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
  );
};
