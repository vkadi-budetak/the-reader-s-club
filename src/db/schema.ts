import { pgTable, text, uuid, timestamp, serial, varchar, integer } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const usersTable = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  image: text("image"),
  role: text("role").default("user").notNull(),

  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const booksTable = pgTable("books", {
  id: serial("id").primaryKey(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  title: text("title").notNull(),
  description: text("description"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const chaptersTable = pgTable("chapters", {
  id: serial("id").primaryKey(),
  bookId: integer("book_id").notNull().references(() => booksTable.id, { onDelete: "cascade" }),
  title: text("title").notNull(),
  content: text("content").notNull(),
  order: integer("order").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const commentsTable = pgTable("comments", {
  id: serial("id").primaryKey(),
  bookSlug: varchar("book_slug", { length: 255 }).notNull(),
  userId: uuid("user_id").notNull().references(() => usersTable.id, { onDelete: "cascade" }),
  content: text("content").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const favoritesTable = pgTable("favorites", {
  id: serial("id").primaryKey(),
  userId: uuid("user_id").notNull().references(() => usersTable.id, { onDelete: "cascade" }),
  bookSlug: varchar("book_slug", { length: 255 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const usersRelations = relations(usersTable, ({ many }) => ({
  comments: many(commentsTable),
  favorites: many(favoritesTable),
}));

export const commentsRelations = relations(commentsTable, ({ one }) => ({
  user: one(usersTable, {
    fields: [commentsTable.userId],
    references: [usersTable.id],
  }),
}));

export const favoritesRelations = relations(favoritesTable, ({ one }) => ({
  user: one(usersTable, {
    fields: [favoritesTable.userId],
    references: [usersTable.id],
  }),
}));
