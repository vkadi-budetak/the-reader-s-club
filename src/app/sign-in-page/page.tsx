import AuthPortal from "@/components/auth/auth-portal";
import { LoginForm } from "@/components/auth/login-form";

export default function SignInPage() {
  return (
    <AuthPortal>
      <LoginForm />
    </AuthPortal>
  );
}
