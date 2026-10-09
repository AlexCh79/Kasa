import type { Metadata } from "next";
import { LoginForm } from "@/components/UI/Forms/Form/LoginForm/LoginForm";

export const metadata: Metadata = {
  title: "Connexion",
  description: "Connectez-vous à votre compte Kasa",
};

const Login = () => {
  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default Login;
