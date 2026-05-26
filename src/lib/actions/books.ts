"use server";

import { db } from "@/db";
import { booksTable } from "@/db/schema";
import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";

export async function getBooksAction() {
  try {
    const books = await db.select().from(booksTable);
    return { success: true, books };
  } catch (error) {
    console.error("Error fetching books:", error);
    return { success: false, error: "Failed to load archive." };
  }
}

export async function addBook(values: {
  title: string;
  slug: string;
  description?: string;
}) {
  try {
    await db.insert(booksTable).values({
      title: values.title,
      slug: values.slug,
      description: values.description,
    });

    revalidatePath("/admin");
    revalidatePath("/chapters");
    revalidatePath("/dashboard");
    
    return { success: true };
  } catch (error) {
    console.error("Error adding book:", error);
    return { success: false, error: "Failed to add book to the archive." };
  }
}

export async function deleteBook(id: number) {
    try {
      await db.delete(booksTable).where(eq(booksTable.id, id));
      revalidatePath("/admin");
      return { success: true };
    } catch (error) {
      return { success: false };
    }
}

export async function updateBook(id: number, values: {
  title: string;
  slug: string;
  description?: string;
}) {
  try {
    await db.update(booksTable)
      .set({
        title: values.title,
        slug: values.slug,
        description: values.description,
      })
      .where(eq(booksTable.id, id));

    revalidatePath("/admin");
    revalidatePath("/chapters");
    revalidatePath("/dashboard");
    revalidatePath(`/books/${id}`);
    
    return { success: true };
  } catch (error) {
    console.error("Error updating book:", error);
    return { success: false, error: "Failed to update book in the archive." };
  }
}
