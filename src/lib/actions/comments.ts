"use server";

import { db } from "@/db";
import { commentsTable, usersTable } from "@/db/schema";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/auth-options";
import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";

export async function addComment(bookSlug: string, content: string) {
  const session = await getServerSession(authOptions);
  
  console.log("SESSION IN ACTION:", JSON.stringify(session, null, 2));

  if (!session?.user?.email) {
    return { success: false, error: "You must be logged in to share your testimony." };
  }

  // Якщо id немає в сесії, спробуємо знайти його в базі за email
  let userId = session.user.id;
  
  if (!userId) {
    console.log("ID not found in session, fetching from DB by email:", session.user.email);
    const [dbUser] = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, session.user.email))
      .limit(1);
    
    if (dbUser) {
      userId = dbUser.id;
    }
  }

  if (!userId) {
    return { success: false, error: "User identity not found in our records." };
  }

  if (!content || content.trim().length < 2) {
    return { success: false, error: "Your testimony is too short." };
  }

  try {
    await db.insert(commentsTable).values({
      bookSlug,
      userId: userId,
      content: content.trim(),
    });

    revalidatePath(`/books/${bookSlug}/comments`);
    return { success: true };
  } catch (error) {
    console.error("Failed to add comment:", error);
    return { success: false, error: "Something went dark. Please try again." };
  }
}

export async function getComments(bookSlug: string) {
  try {
    const comments = await db.query.commentsTable.findMany({
      where: (comments, { eq }) => eq(comments.bookSlug, bookSlug),
      with: {
        user: {
          columns: {
            name: true,
            image: true,
          },
        },
      },
      orderBy: (comments, { desc }) => [desc(comments.createdAt)],
    });

    return { success: true, data: comments };
  } catch (error) {
    console.error("Failed to fetch comments:", error);
    return { success: false, error: "Could not retrieve the archives." };
  }
}
