import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const connectionString = process.env.DATABASE_URL || "";

// Створюємо клієнт лише якщо є рядок підключення
// Це дозволяє уникнути помилок під час білду на Vercel
const client = connectionString 
  ? postgres(connectionString, { prepare: false }) 
  : null;

export const db = client 
  ? drizzle(client, { schema }) 
  : (null as any);

if (!connectionString && process.env.NODE_ENV === "production") {
  console.warn("⚠️ DATABASE_URL is missing! Database features will not work.");
}
