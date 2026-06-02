"use server";

import { db } from "@/db";
import { chaptersTable } from "@/db/schema";
import { revalidatePath } from "next/cache";
import { eq, asc } from "drizzle-orm";

export async function getChapters(bookId: number) {
  try {
    const chapters = await db
      .select()
      .from(chaptersTable)
      .where(eq(chaptersTable.bookId, bookId))
      .orderBy(asc(chaptersTable.order));
    return { success: true, chapters };
  } catch (error) {
    console.error("Error fetching chapters:", error);
    return { success: false, error: "Failed to load fragments." };
  }
}

export async function addChapter(values: {
  bookId: number;
  title: string;
  content: string;
  order: number;
}) {
  try {
    await db.insert(chaptersTable).values({
      bookId: values.bookId,
      title: values.title,
      content: values.content,
      order: values.order,
    });

    revalidatePath(`/admin/books/${values.bookId}/chapters`);
    revalidatePath(`/books/[id]`); // Оновлюємо сторінку книги
    
    return { success: true };
  } catch (error) {
    console.error("Error adding chapter:", error);
    return { success: false, error: "Failed to add fragment." };
  }
}

export async function deleteChapter(id: number, bookId: number) {
  try {
    await db.delete(chaptersTable).where(eq(chaptersTable.id, id));
    revalidatePath(`/admin/books/${bookId}/chapters`);
    return { success: true };
  } catch (error) {
    return { success: false };
  }
}

export async function updateChapter(id: number, values: {
  title: string;
  content: string;
  order: number;
  bookId: number;
}) {
  try {
    await db.update(chaptersTable)
      .set({
        title: values.title,
        content: values.content,
        order: values.order,
      })
      .where(eq(chaptersTable.id, id));

    revalidatePath(`/admin/books/${values.bookId}/chapters`);
    revalidatePath(`/books/[id]`);
    
    return { success: true };
  } catch (error) {
    console.error("Error updating chapter:", error);
    return { success: false, error: "Failed to update fragment." };
  }
}
