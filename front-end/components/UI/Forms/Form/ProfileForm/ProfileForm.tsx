"use client";
import { InputText } from "../../Inputs/InputText/InputText";
import { useState } from "react";
import { Button } from "@/components/UI/Button/Button";
import styles from "../Form.module.scss";
import type { TokenPayload } from "@/types/users";
import { splitName } from "@/utils/name";

interface ProfileFormProps {
  user: TokenPayload;
}

const ProfileForm = ({ user }: ProfileFormProps) => {
  const email = user.email;
  const [error, setError] = useState("");

  const { lastName, firstName } = splitName(user.name);

  const handleChange = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("La modification des données utilisateurs est en cours de développement.");
  };

  return (
    <form className={styles.form} onSubmit={handleChange}>
      <h1 className={styles.formTitle}>Modifier vos informations</h1>
      <InputText
        id="lastName"
        name="lastName"
        label="Nom"
        value={lastName}
        autoComplete="family-name"
        readOnly
      />
      <InputText
        id="firstName"
        name="firstName"
        label="Prénom"
        value={firstName}
        readOnly
        autoComplete="given-name"
      />
      <InputText
        id="email"
        readOnly
        name="email"
        label="Email"
        value={email}
        autoComplete="email"
      />
      <InputText
        type="password"
        id="password"
        name="password"
        label="Mot de passe"
        readOnly
        placeholder="**********"
        minLength={6}
        hint="Le mot de passe doit faire au moins 6 caractères."
      />

      {error && (
        <span role="alert" className="error">
          {error}
        </span>
      )}
      <Button type="submit" label="Valider les modifications" />
    </form>
  );
};

export default ProfileForm;
