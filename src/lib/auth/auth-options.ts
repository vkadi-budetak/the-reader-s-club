import { db } from "@/db";
import { usersTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

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

        // Шукаємо, чи є вже такий юзер за email
        const [existingUser] = await db
          .select()
          .from(usersTable)
          .where(eq(usersTable.email, user.email))
          .limit(1);

        // Якщо юзера немає — створюємо його, обов'язково передаючи ID!
        if (!existingUser) {
          await db.insert(usersTable).values({
            id: user.id, // ID, яке прийшло від Google (або crypto.randomUUID())
            email: user.email,
            name: user.name || "Anonymous Witness",
            image: user.image,
            role: "user", // Відповідає дефолту у твоїй схемі
          });
        }
      }
      return true;
    },

    async jwt({ token, user }) {
      // При першому вході об'єкт 'user' існує. Беремо дані з бази або провайдера.
      if (user) {
        token.id = user.id;
        token.role = (user as any).role || "user";
      } else if (token.email) {
        // Якщо це наступні запити, підстраховуємося і беремо актуальну роль з бази
        const [dbUser] = await db
          .select()
          .from(usersTable)
          .where(eq(usersTable.email, token.email))
          .limit(1);

        if (dbUser) {
          token.id = dbUser.id;
          token.role = dbUser.role;
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
