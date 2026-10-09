import { RegisterForm } from "@/components/UI/Forms/Form/RegisterForm/RegisterForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inscription",
  description: "Créez votre compte Kasa",
};

const Register = () => {
  return (
    <div>
      <RegisterForm />
    </div>
  );
};

export default Register;
