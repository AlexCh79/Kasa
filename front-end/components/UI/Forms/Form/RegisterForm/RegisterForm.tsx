"use client";
import { useState } from "react";
import styles from "../Form.module.scss";
import { Button } from "@/components/UI/Button/Button";
import Link from "next/link";

export const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [hasAcceptCGU, setHasAcceptCGU] = useState(false); // Par défaut, la case des CGU doit être décocher pour être conforme RGPD
  const [error, setError] = useState("");

  function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();
  }

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
            type="lastName"
            required
            name="lastName"
            value={lastName}
            className={styles.formInput}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className={styles.formInputWrapper}>
          <label htmlFor="firstName" className={styles.formLabel}>
            Nom
          </label>
          <input
            id="firstName"
            type="firstName"
            required
            name="firstName"
            value={firstName}
            className={styles.formInput}
            onChange={(e) => setFirstName(e.target.value)}
          />
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
          <Button label="S'inscrire" />
          <div className={styles.formLinkWrapper}>
            <div className={styles.formBoxWrapper}>
              <input
                type="checkbox"
                aria-label="J’accepte les conditions générales d’utilisation"
                checked={hasAcceptCGU}
                id="acceptCGU"
                name="acceptCGU"
                className={styles.formBoxCGU}
                onChange={(e) => setHasAcceptCGU(e.target.checked)}
              />
              <label htmlFor="acceptCGU" className={styles.formLinkCGU}>
                J’accepte les{" "}
                <Link href="/cgu" className={styles.formCGU}>
                  conditions générales d’utilisation
                </Link>
              </label>
            </div>
            <Link href="/login" className={styles.formLink}>
              Déjà membre ? <strong>Connectez-vous</strong>
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
