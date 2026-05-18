"use server";

import { db } from "@/db";
import { booksTable } from "@/db/schema";

export async function getBooksAction() {
  try {
    const books = await db.select().from(booksTable).execute();
    return { success: true, data: books };
  } catch (error) {
    console.error("Error fetching books:", error);
    return { success: false, error: "Failed to fetch books" };
  }
}
