import AuthPortal from "@/components/auth/auth-portal";
import { RegisterForm } from "@/components/auth/register-form";

export default function SignUpPage() {
  return (
    <AuthPortal>
      <RegisterForm />
    </AuthPortal>
  );
}
