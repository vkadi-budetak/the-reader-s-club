"use server";

import { db } from "@/db";
import { usersTable } from "@/db/schema";
import { InferInsertModel } from "drizzle-orm";

export type NewUser = InferInsertModel<typeof usersTable>;

export async function registerUser(values: NewUser) {
  try {
    const [newUser] = await db
      .insert(usersTable)
      .values({
        name: values.name,
        email: values.email,
        password: values.password,
      })
      .returning();

    return { success: true, user: newUser };
  } catch (error: unknown) {
    if (error instanceof Error && "code" in error && error.code === "23505") {
      return { success: false, error: "This email is already in the pact." };
    }

    return { success: false, error: "Something went dark on our servers." };
  }
}
