import { db } from "@/db";
import { usersTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import crypto from "crypto";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        if (!user.email) return false;

        try {
          // Шукаємо, чи є вже такий юзер за email
          const [existingUser] = await db
            .select()
            .from(usersTable)
            .where(eq(usersTable.email, user.email))
            .limit(1);

          // Якщо юзера немає — створюємо його
          if (!existingUser) {
            await db.insert(usersTable).values({
              id: crypto.randomUUID(), // Явно генеруємо UUID
              email: user.email,
              name: user.name || "Anonymous Witness",
              password: "google-auth-account-" + crypto.randomBytes(4).toString('hex'), 
              image: user.image,
              role: "user",
            });
          }
          return true;
        } catch (error) {
          console.error("Error saving google user:", error);
          return true; // Дозволяємо вхід навіть якщо не зберегли, щоб не блокувати юзера
        }
      }
      return true;
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = (user as { role?: string }).role || "user";
      } else if (token.email) {
        try {
          const [dbUser] = await db
            .select()
            .from(usersTable)
            .where(eq(usersTable.email, token.email))
            .limit(1);

          if (dbUser) {
            token.id = dbUser.id;
            token.role = dbUser.role;
          }
        } catch (error) {
          console.error("JWT callback error:", error);
        }
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user && token) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/sign-in-page",
  },
};
