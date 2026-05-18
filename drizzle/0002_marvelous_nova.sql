CREATE TABLE "favorites" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" uuid NOT NULL,
	"book_slug" varchar(255) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "chapter_likes" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "chapters" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
DROP TABLE "chapter_likes" CASCADE;--> statement-breakpoint
DROP TABLE "chapters" CASCADE;--> statement-breakpoint
ALTER TABLE "comments" DROP CONSTRAINT "comments_chapter_id_chapters_id_fk";
--> statement-breakpoint
ALTER TABLE "books" ALTER COLUMN "title" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "books" ALTER COLUMN "created_at" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "comments" ALTER COLUMN "user_id" SET DATA TYPE uuid;--> statement-breakpoint
ALTER TABLE "comments" ALTER COLUMN "user_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "comments" ALTER COLUMN "created_at" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "id" SET DATA TYPE uuid;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "name" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "name" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "email" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "password" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "role" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "role" SET DEFAULT 'user';--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "role" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "created_at" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "comments" ADD COLUMN "book_slug" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "favorites" ADD CONSTRAINT "favorites_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "books" DROP COLUMN "cover_image";--> statement-breakpoint
ALTER TABLE "books" DROP COLUMN "author";--> statement-breakpoint
ALTER TABLE "books" DROP COLUMN "is_published";--> statement-breakpoint
ALTER TABLE "comments" DROP COLUMN "chapter_id";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN "emailVerified";