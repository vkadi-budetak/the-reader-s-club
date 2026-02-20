// app/sign-in/page.tsx
import { LoginForm } from "@/components/auth/login-form";
// ... (імпорти для картинки та логіки закриття як у sign-up)

export default function SignInPage() {
  // Тут та сама структура з Image (туманом) та closePortal
  return (
    <main>
      {/* Твій оверлей з туманом */}
      <LoginForm />
    </main>
  );
}
