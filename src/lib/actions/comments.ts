"use server";

import { db } from "@/db";
import { commentsTable, usersTable } from "@/db/schema";
import { eq, desc } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function addCommentAction(formData: FormData) {
  const content = formData.get("content") as string;
  const bookSlug = formData.get("bookSlug") as string;
  const userId = formData.get("userId") as string;

  if (!content || !bookSlug || !userId) {
    return { success: false, error: "Missing required fields" };
  }

  try {
    // Вставляємо коментар
    await db.insert(commentsTable).values({
      bookSlug,
      userId,
      content,
    });

    revalidatePath(`/books/${bookSlug}/comments`);
    return { success: true };
  } catch (error) {
    console.error("Error adding comment:", error);
    return { success: false, error: "Failed to add comment" };
  }
}

export async function getCommentsAction(bookSlug: string) {
  try {
    // Використовуємо стандартний select замість query для кращої типізації
    const comments = await db
      .select({
        id: commentsTable.id,
        content: commentsTable.content,
        createdAt: commentsTable.createdAt,
        user: {
          name: usersTable.name,
          image: usersTable.image,
        },
      })
      .from(commentsTable)
      .innerJoin(usersTable, eq(commentsTable.userId, usersTable.id))
      .where(eq(commentsTable.bookSlug, bookSlug))
      .orderBy(desc(commentsTable.createdAt))
      .execute();

    return { 
      success: true, 
      data: comments as { 
        id: number; 
        content: string; 
        createdAt: Date; 
        user: { name: string; image: string | null } 
      }[] 
    };
  } catch (error) {
    console.error("Error fetching comments:", error);
    return { success: false, error: "Failed to fetch comments" };
  }
}
