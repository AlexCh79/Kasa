import ProfileForm from "@/components/UI/Forms/Form/ProfileForm/ProfileForm";
import { cookies } from "next/headers";
import { getTokenPayload } from "@/lib/token";
import { Button } from "@/components/UI/Button/Button";
import { redirect } from "next/navigation";
import type { Metadata } from "next";
import styles from "./Profile.module.scss";

export const metatada: Metadata = {
  title: "Profil",
  description: "Page de profil utilisateur",
};

const Profile = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) redirect("/login");
  const user = getTokenPayload(token);
  if (!user) redirect("/login");
  return (
    <div className={styles.profilePage}>
      <div className={styles.profileBtnContainer}>
        <Button label="Retour" variant="secondary" icon="/icon_left_arrow.svg" href="/" />
      </div>
      <ProfileForm user={user} />
    </div>
  );
};

export default Profile;
