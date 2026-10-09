"use client";
import { useState } from "react";
import styles from "../Form.module.scss";
import { Button } from "@/components/UI/Button/Button";
import Link from "next/link";
import { registerAction } from "@/lib/authUser";

/**
 *  Formulaire d'inscription d'un nouvel utilisateur
 *  Affiche une erreur ou renvoie vers la page d'accueil si la connexion réussie
 */
export const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [hasAcceptCGU, setHasAcceptCGU] = useState(false); // Par défaut, la case des CGU doit être décocher pour être conforme RGPD
  const [error, setError] = useState<string | null>("");
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsPending(true);
    setError("");

    const result = await registerAction({ error: null }, new FormData(event.currentTarget));
    setError(result?.error ?? null);
    setIsPending(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formTitleWrapper}>
          <h1 className={styles.formTitle}>Rejoignez la communauté Kasa</h1>
          <p className={styles.formSubtitle}>
            Créez votre compte et commencez à voyager autrement : réservez des logements uniques,
            découvrez de nouvelles destinations et partagez vos propres lieux avec d’autres
            voyageurs.
          </p>
        </div>
        <div className={styles.formInputWrapper}>
          <label htmlFor="lastName" className={styles.formLabel}>
            Nom
          </label>
          <input
            id="lastName"
            required
            autoComplete="family-name"
            name="lastName"
            value={lastName}
            className={styles.formInput}
            onChange={(event) => setLastName(event.target.value)}
          />
        </div>

        <div className={styles.formInputWrapper}>
          <label htmlFor="firstName" className={styles.formLabel}>
            Prénom
          </label>
          <input
            id="firstName"
            required
            autoComplete="given-name"
            name="firstName"
            value={firstName}
            className={styles.formInput}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </div>

        <div className={styles.formInputWrapper}>
          <label htmlFor="email" className={styles.formLabel}>
            Adresse email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            required
            name="email"
            value={email}
            className={styles.formInput}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className={styles.formInputWrapper}>
          <label htmlFor="password" className={styles.formLabel}>
            Mot de passe
          </label>
          <input
            id="password"
            type="password"
            minLength={6}
            autoComplete="new-password"
            className={styles.formInput}
            required
            aria-describedby="password-hint"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <p id="password-hint" className={styles.formHint}>
            6 caractères minimum
          </p>
        </div>
        <div className={styles.formActionsWrapper}>
          <div className={styles.formLinkWrapper}>
            <div className={styles.formBoxWrapper}>
              <input
                type="checkbox"
                checked={hasAcceptCGU}
                id="acceptCGU"
                name="acceptCGU"
                required
                className={styles.formBoxCGU}
                onChange={(event) => setHasAcceptCGU(event.target.checked)}
              />
              <label htmlFor="acceptCGU" className={styles.formLinkCGU}>
                J’accepte les{" "}
                <Link href="/cgu" className={styles.formCGU}>
                  conditions générales d’utilisation
                </Link>
              </label>
            </div>
            {error && (
              <span role="alert" className={styles.error}>
                {error}
              </span>
            )}
            <Button
              label={isPending ? "Inscription..." : "S'inscrire"}
              type="submit"
              disabled={isPending}
            />

            <Link href="/login" className={styles.formLink}>
              Déjà membre ? <strong>Connectez-vous</strong>
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};
